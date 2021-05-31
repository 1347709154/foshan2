<template>
	<view class="content">
		<view class="topbox">
			<p id="title">{{options.name}}</p>
			<p id="key"><span v-for="item in key">{{item}}</span></p>
			<p id="date">选择日期</p>
			<view class="datelist">
				<!-- 写入自定义对象的属性判断是否为选中 -->
				<view :class="[item.isflag==true?'time':'time2']" v-for="(item,index) in datelist" @tap="change(index)">
					<p>{{item.data}}</p>
					<p>{{item.time}}</p>
					<view class="redbox">
						<image src="../../static/order/yes.png" mode="" class="yes"></image>
					</view>
				</view>
			</view>
			<view class="count">
				<view class="left text">
					选择数量
				</view>
				<view class="right countnum">
					<u-number-box v-model="value" @change="valChange"></u-number-box>
				</view>
			</view>
			<!-- 		<p id="copn">优惠</p>
			<view class="cponlist">
				<view class="left bg">
					券
				</view>
				<view class="left textleft">
					优惠券
				</view>
				<view class="right gouse">
					去使用
				</view>
			</view> -->
		</view>
		<view class="tourist">
			<p id="tourist">游客信息</p>
			<view class="touristbox">
				<view :class="[item.isflag==true?'listitem':'listitem2']" v-for="(item,index) in touristlist"
					@tap="change2(index),getinfo(index)">
					<p>{{item.name}}</p>
					<view class="redbox">
						<image src="../../static/order/yes.png" mode="" class="yes"></image>
					</view>
				</view>
				<view class="listitem3" @click="addUser">
					<p>新增</p>
					<p>更换</p>
				</view>
			</view>
			<view class="bottombox">
				<view class="left headimg" v-if="">
					<p>游客</p>
					<image src="../../static/order/cha.png" mode="" id="headming"></image>
				</view>
				<view class="left touristinfo">
					<p class="infotext">{{touristinfo.name}}</p>
					<p class="infotext">{{touristinfo.phone}}</p>
					<p v-if="touristinfo.id_card==''" id="noidmun">缺少证件号，点击补齐</p>
					<p class="infotext" v-else>{{touristinfo.id_card}}</p>
				</view>
				<view class="right editbtn">
					编辑
				</view>
			</view>
		</view>
		<view class="paybox">
			<view class="paylist">
				<view class="left">
					<view class="">
						<image src="../../static/order/wx.png" mode="" class=" payicon"></image>
					</view>
					<view class="">
						<image src="../../static/order/zfb.png" mode="" class=" payicon"></image>
					</view>
				</view>

				<view class="left paytext">
					<p class="text1">微信支付</p>
					<p class="text1">支付宝支付</p>
				</view>
				<view class="right radios">
					<u-radio-group :wrap="true">
						<view class="radiobox">
							<u-radio shape="circle" @change="radioChange" :name="1"></u-radio>
						</view>
						<view class="radiobox">
							<u-radio shape="circle" @change="radioChange" :name="2"></u-radio>
						</view>
					</u-radio-group>
				</view>
			</view>

		</view>
		<view class="paybtns">
			<view class="left money">
				<p><span>总价¥</span><span>{{total_price}}</span></p>
			</view>
			<view class="right btns">
				<view class="btn-b left">

					分享

					<image src="../../static/food/share.png" mode="" class="right share"></image>

				</view>
				<view class="btn-r right" @tap="submit()">
					提交订单
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: {},
				orderInfo: {},
				user: {},
				paytype: 0,
				// 步进器
				value: 1,
				total_price: 0,
				title: '景区门票+旅游巴士+观光车票',
				key: ["无需退票", "退款无忧"],
				datelist: [],
				touristlist: [],
				touristinfo: {},
				time: '',
				yid: '',
				num: 1,
				cid: '',
				payment: {}
			};
		},
		onLoad(options) {
			console.log(options)
			this.options = options;
			this.cid = options.id;
			this.give_type = options.give_type;
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('scenic/order', {
					id: this.options.id
				}).then(res => {
					this.orderInfo = res.detail;
					this.total_price = res.detail.price;
					this.datelist = res.time;
					this.touristlist = res.user;
				})

			},
			submit() {
				const {
					time,
					yid,
					num,
					cid,
					paytype
				} = this;
				if (!time) {
					this.$util.msg('请选择日期');
					return;
				}
				if (!num && num < 1) {
					this.$util.msg('请选择数量');
					return;
				}
				if (!yid) {
					this.$util.msg('请选择游客');
					return;
				}
				if (paytype!=1) {
					this.$util.msg('请选择微信支付');
					return;
				}
				this.$requests('scenic/submitOrder', {
					time,
					yid,
					num,
					cid,
				}, 'POST').then(res => {
					this.payment = res.payment;
					this.wxPay(res.payment, res.model);
				});
			},

			//data是后台支付返回的数据，key是微信商户号的key，拼接签名的时候需要用到
			onBridgeReady: function(data, key) {
				var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
					'I',
					'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
				];

				var a = "";
				for (var i = 0; i < 30; i++) {
					var id = Math.ceil(Math.random() * 35);
					a += chars[id];
				}
				//生成签名
				//调用微信内置方法
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest', {
						"appId": data.appId, //公众号名称，由商户传入
						"timeStamp": data.timeStamp,
						"nonceStr": data.nonceStr, //随机串     
						"package": data.package,
						"signType": "MD5", //微信签名方式：     
						"paySign": data.paySign //微信签名 
					},
					function(res) {
						if (res.err_msg == "get_brand_wcpay_request:ok") {
							console.log(res);
							uni.showToast({
								icon: 'success',
								title: '支付成功'
							})
							setTimeout(() => {
								uni.reLaunch({
									url: './gettiket'
								})
							}, 500);
						} else if (res.err_msg == "get_brand_wcpay_request:cancel") {
							console.log(res);
							uni.showToast({
								icon: "none",
								title: "'已取消支付"
							})
						} else {
							console.log(res);
							uni.showToast({
								icon: "none",
								title: "支付失败"
							})
							// setTimeout(() => {
							// 	uni.reLaunch({
							// 		url: "../order/allOrder?inter_oid=" + key.order_id + '&index=0'
							// 	})
							// }, 1000);
						}
					});
			},
			wxPay(data, key) {
				console.log(data);
				var that = this;
				//下面是解决WeixinJSBridge is not defined 报错的方法
				if (typeof WeixinJSBridge == "undefined") { //微信浏览器内置对象。参考微信官方文档
					if (document.addEventListener) {
						document.addEventListener('WeixinJSBridgeReady', that.onBridgeReady(data, key), false);
					} else if (document.attachEvent) {
						document.attachEvent('WeixinJSBridgeReady', that.onBridgeReady(data, key));
						document.attachEvent('onWeixinJSBridgeReady', that.onBridgeReady(data, key));
					}
				} else {
					that.onBridgeReady(data, key);
				}

			},















			// 更改属性值
			change(i) {
				for (var j = 0; j < this.datelist.length; j++) {
					this.$set(this.datelist[j], 'isflag', false)
				}
				this.$set(this.datelist[i], 'isflag', true)
				this.time = this.datelist[i].data
			},
			change2(i) {
				for (var j = 0; j < this.touristlist.length; j++) {
					this.$set(this.touristlist[j], 'isflag', false)
				}
				this.$set(this.touristlist[i], 'isflag', true)
				this.yid = this.touristlist[i].tourist_id
			},
			// 获取用户信息
			getinfo(i) {
				this.touristinfo = this.touristlist[i]
			},
			// 获取步进器的值
			valChange(e) {
				this.total_price = this.orderInfo.price * e.value
				console.log('当前值为: ' + e.value)
				this.num = e.value
			},
			// 选中某个单选框时，由radio时触发
			// 获取支付方式
			radioChange(e) {
				console.log(e);
				this.paytype = e
			},
			// 跳转出票
			gettitkt() {
				uni.navigateTo({
					url: "/pages/guide-pre/pre?type=scenic"
				})
			},
			addUser() {
				uni.navigateTo({
					url: "./user"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #f1f1f1;
	}

	.content {
		// position: relative;
	}

	.topbox {
		width: 717rpx;
		height: 487rpx;
		background: #FFFFFF;
		margin: auto;
		margin-top: 17rpx;
		border-radius: 8rpx;
	}

	#title {
		font-size: 30rpx;
		color: #000000;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	#key {
		margin-top: 30rpx;
		margin-left: 20rpx;
		font-size: 24rpx;
		color: #000000;

		span {
			color: #000000;
			font-size: 18rpx;
			display: inline-block;
			width: 60px;
			border-right: 1px solid #000000;
			margin-right: 20rpx;
		}

		span:last-of-type {
			border-right: none;
			margin-right: 0;
		}
	}

	#copn {
		font-size: 30rpx;
		color: #000000;
		margin-top: 10rpx;
		margin-left: 20rpx;
	}

	#date {
		font-size: 30rpx;
		color: #000000;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.datelist {
		height: 67rpx;
		width: 100%;
		padding: 0 20rpx;
		display: flex;
		margin-top: 16rpx;
	}

	.time {
		width: 146rpx;
		position: relative;
		height: 67rpx;
		background: #FDE4E4;
		border: 1px solid #EF1E22;
		border-radius: 8rpx;
		margin-right: 20rpx;
		text-align: center;
		font-size: 24rpx;

		.redbox {
			width: 38rpx;
			height: 24rpx;
			background: #EF1E22;
			border-radius: 8rpx;
			position: absolute;
			right: 0;
			line-height: 24rpx;
			bottom: 0;

			.yes {
				width: 22rpx;
				height: 15rpx;
				margin-top: -20rpx;
			}
		}

		p {
			height: 16px;
		}
	}

	.time2 {
		width: 146rpx;
		height: 67rpx;
		background: none;
		border: 1px solid #afafaf;
		color: #afafaf;
		border-radius: 8rpx;
		margin-right: 20rpx;
		text-align: center;
		font-size: 24rpx;

		.redbox {
			display: none;
		}

		p {
			height: 16px;
		}
	}

	.count {
		height: 52rpx;
		margin-top: 30rpx;
		padding-left: 20rpx;
		padding-right: 43rpx;
		line-height: 52rpx;
	}

	.text {
		font-size: 30rpx;
		color: #000000;

		// padding-left: 20rpx;
	}

	.cponlist {
		width: 694rpx;
		height: 70rpx;
		background: #F6F3F3;
		border-radius: 6rpx;
		margin: auto;
		// margin-top: 10rpx;
	}

	.bg {
		width: 20rpx;
		height: 20rpx;
		font-size: 18rpx;
		font-weight: bold;
		line-height: 20rpx;
		color: #FF0101;
		background: #FDCECE;
		margin-top: 18rpx;
		margin-left: 12rpx;
	}

	.textleft {
		margin-left: 9rpx;
		line-height: 70rpx;
		font-weight: 500;
	}

	.gouse {
		margin-right: 43rpx;
		line-height: 70rpx;
		font-weight: 500;
		color: #4A4A4A;
		font-size: 26rpx;
	}

	.tourist {
		width: 717rpx;
		height: 352rpx;
		margin: auto;
		margin-top: 9rpx;
		background: #FFFFFF;
		border-radius: 8rpx;
	}

	#tourist {
		font-size: 30rpx;
		color: #000000;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.touristbox {
		font-size: 24rpx;
		height: 67rpx;
		width: 100%;
		padding: 0 20rpx;
		display: flex;
		margin-top: 14rpx;
	}

	.listitem {
		width: 146rpx;
		height: 67rpx;
		background: #FDE4E4;
		border: 1px solid #EF1E22;
		border-radius: 8rpx;
		text-align: center;
		line-height: 67rpx;
		margin-right: 20rpx;
		position: relative;

		.redbox {
			width: 38rpx;
			height: 24rpx;
			background: #EF1E22;
			border-radius: 8rpx;
			position: absolute;
			right: 0;
			line-height: 24rpx;
			bottom: 0;

			.yes {
				width: 22rpx;
				height: 15rpx;
				margin-top: -20rpx;
			}
		}
	}

	.listitem2 {
		width: 146rpx;
		height: 67rpx;
		background: #FFFFFF;
		border: 1px solid #E5E5E5;
		border-radius: 8rpx;
		font-size: 24rpx;
		margin-right: 20rpx;
		text-align: center;
		line-height: 67rpx;

		.redbox {
			display: none;
		}
	}

	.listitem3 {
		width: 146rpx;
		height: 67rpx;
		background: #FFFFFF;
		border: 1px solid #E5E5E5;
		border-radius: 8rpx;
		font-size: 22rpx;
		margin-right: 20rpx;
		text-align: center;
		// line-height: 67rpx;
	}

	.bottombox {
		height: 180rpx;
		width: 681rpx;
		margin: auto;
		border-top: 1px solid #e5e5e5;
		margin-top: 30rpx;
	}

	.headimg {
		width: 60rpx;
		height: 180rpx;
		// line-height: 180rpx;
		text-align: center;
		margin-left: 28rpx;
		padding-top: 60rpx;
		font-size: 24rpx;

	}

	#headming {
		width: 24rpx;
		height: 23rpx;
	}

	.editbtn {
		line-height: 180rpx;
		font-size: 24rpx;
		color: #379BF8;
		margin-right: 20rpx;
	}

	.touristinfo {
		margin-left: 40rpx;
		margin-top: 20rpx;
	}

	.infotext {
		font-size: 28rpx;
		line-height: 50rpx;
	}

	#noidmun {
		color: #F60D0D;
		font-size: 28rpx;
	}

	.paylist {
		padding-left: 40rpx;
	}

	.paybox {
		width: 715rpx;
		height: 210rpx;
		background: #FFFFFF;
		border-radius: 30rpx;
		margin-top: 15rpx;
	}

	.payicon {
		width: 49rpx;
		margin-top: 30rpx;
		height: 49rpx;
	}

	.text1 {
		height: 49rpx;
		margin-top: 35rpx;
	}

	.paytext {
		margin-left: 17rpx;
		// margin-top: 30rpx;
		// line-height: 75rpx;
	}

	.radios {
		width: 40rpx;
		height: 210rpx;
		margin-top: 20rpx;
		margin-right: 60rpx;
	}

	.radiobox {
		height: 90rpx;
	}

	.paybtns {
		width: 100%;
		height: 105rpx;
		line-height: 105rpx;
		background: #FFFFFF;
		position: fixed;
		padding: 0 20rpx;
		bottom: 0;
		left: 0;

		p span:first-of-type {
			font-size: 24rpx;
			color: #f60000;
		}

		p span:last-of-type {
			font-size: 42rpx;
			color: #f60000;
		}
	}

	.btns {
		width: 509rpx;
		height: 78rpx;
		line-height: 78rpx;
		font-size: 24rpx;
		margin-top: 17rpx;
	}

	.btn-b {
		height: 100%;
		width: 230rpx;
		background: #0A0000;
		color: white;
		border-radius: 39rpx 0px 0px 39rpx;
		text-align: center;
		position: relative;
	}

	.btn-r {
		height: 100%;
		width: 279rpx;
		text-align: center;
		background: #EF1E22;
		color: white;
		border-radius: 0px 39rpx 39rpx 0px;
	}

	.share {
		width: 32rpx;
		height: 32rpx;
		// margin-right:60rpx;
		margin-top: 23rpx;
		right: 50rpx;
		position: absolute;
	}
</style>
