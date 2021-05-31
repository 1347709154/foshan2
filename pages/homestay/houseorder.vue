<template>
	<view class="content">
		<view class="houseinfo">
			<view class="timebox">
				<view class="left stime">
					{{time.stime}}
				</view>
				<view class="left greytext">
					今天
				</view>
				<view class="left totaltime">
					一晚
				</view>
				<view class="left etime">
					{{time.etime}}
				</view>
				<view class=" left greytext">
					明天
				</view>
			</view>
			<p>{{detail.house_name}}</p>
			<p id="tags">
				<span>{{detail.area}}㎡</span>
				<span v-for="(item,index) in detail.tags">
					<span v-if="index==item.length">
						{{item}}
					</span>
					<span v-else>
						{{item}}·
					</span>
				</span>
			</p>
			<view class="notice">
				<image src="../../static/scenic/zhengque.png" mode="" class="left"></image>
				<span>入住当天18:00前可免费取消</span>
			</view>
		</view>
		<view class="orderinfo">

			<!-- <u-field label="房间数量" right-icon="arrow-right" :disabled="false" v-model="houseinfo.roomnum"></u-field> -->
			<u-field label="住客姓名:" @input="nameInput" :disabled="false" placeholder="请填写姓名"></u-field>
			<u-field label="联系电话:" @input="phoneInput" :disabled="false" placeholder="请填写电话"></u-field>
			<u-field label="身份证号" @input="idCradInput" placeholder="请填写身份证号"></u-field>
			<!-- <u-field label="预计到店" right-icon="arrow-right" :disabled="false" v-model="houseinfo.time"></u-field> -->
		</view>
		<view class="priceinfo">
			<u-field label="费用明细" :disabled="true"></u-field>
			<view class="orderinfo2">
				<view class="left title">
					在线支付
				</view>
				<view class="right time">
					<p><span class="type"></span>一间一晚<span class="redtext">¥{{detail.price}}</span></p>
				</view>
			</view>
			<view class="oederinfo">
				<view class="li toptitle">
					<view class="left">
						房费
					</view>
					<view class="right">
						¥{{detail.price}}
					</view>
				</view>
				<view class="li infotext">
					<view class="left">
						<p><span class="left">{{time.year}}-{{time.month}}-{{time.day}}</span> <span
								class="keywods right"></span></p>
						<p><span class="left">{{time.year}}-{{time.month}}-{{time.day+1}} </span><span
								class="keywods right">{{detail.breakfast}}</span></p>
					</view>
					<view class="right">
						<span id="num">x1</span>
						<span>¥{{detail.price}}</span>
					</view>
				</view>
			</view>
		</view>
		<!-- 支付选择 -->
		<view class="pay-type">
			<view class="type" @click="paytype(10)">
				<view class="type-l">
					<image src="../../static/home/WeChat.png"></image>
					<view>微信</view>
				</view>
				<view class="type-r">
					<radio value="10" :checked="pay_type==10" style="transform:scale(0.7)" color="#09BB07" />
				</view>
			</view>
			<view class="type" @click="paytype(20)">
				<view class="type-l">
					<image src="../../static/home/Alipay.png"></image>
					<view>支付宝</view>
				</view>
				<view class="type-r">
					<radio value="20" :checked="pay_type==20" style="transform:scale(0.7)" color="#09BB07" />
				</view>
			</view>
		</view>
		<view class="noticelist">
			<view class="bigtitle">
				重要提示
			</view>
			<view class="rule">
				<p class="stitle">退款规则</p>
				<p class="info">{{detail.cancel}}</p>
			</view>
			<view class="rule2">
				<p class="stitle">预定说明</p>
				<p class="info">{{detail.booking}}</p>
			</view>
		</view>
		<view :class="[show==true?'submitorder1':'submitorder']">
			<view class="box-info" v-if="show==true">
				<view class="orderinfo2">
					<view class="left title">
						在线支付
					</view>
					<view class="right time">
						<p><span class="type">一间一晚</span><span class="redtext">¥{{detail.price}}</span></p>
					</view>
				</view>
				<view class="oederinfo">
					<view class="li toptitle">
						<view class="left">
							房费
						</view>
						<view class="right">
							¥{{detail.price}}
						</view>
					</view>
					<view class="li infotext">
						<view class="left">
							<p><span class="left">{{time.year}}-{{time.month}}-{{time.day}}</span> <span
									class="keywods right"></span></p>
							<p><span class="left">{{time.year}}-{{time.month}}-{{time.day+1}} </span><span
									class="keywods right">{{detail.breakfast}}</span></p>
						</view>
						<view class="right">
							<span id="num">x1</span>
							<span>¥{{detail.price}}</span>
						</view>
					</view>
				</view>
			</view>
			<view class="left pricebox">
				<view class="left redprice">
					<span>¥</span><span id="bigtext">{{detail.price}}</span>
				</view>
				<view class="right priceinfobtn" @tap="change">
					<span class="left">明细</span>
					<image src="../../static/scenic/zhankai.png" mode="" class="left zhan" v-if="show==false"></image>
					<image src="../../static/scenic/shouqi.png" mode="" class="left zhan" v-else></image>
				</view>
			</view>
			<view class="right submit" @tap="submit()">
				提交订单
			</view>
		</view>
		<u-mask :show="show" @click="show = false" z-index="4" duration="100"></u-mask>
	</view>

</template>

<script>
	export default {
		data() {
			return {

				time: {
					stime: '',
					etime: '',
					month: '',
					year: '',
					day: ''
				},
				pay_type: 10,
				show: false,
				house_id: 0,
				detail: {},
				name: '',
				phone: '',
				id_card: '',
			};
		},
		onLoad(option) {
			this.house_id = option.house_id;

			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('hotel/houseDetail', {
					house_id: this.house_id
				}).then(res => {
					this.detail = res.detail;
					uni.setNavigationBarTitle({
						title: res.detail.house_name
					})
				})

			},


			submit() {
				const {
					name,
					house_id,
					phone,
					id_card,
					pay_type
				} = this;
				if (!name) {
					this.$util.msg('请输入姓名');
					return;
				}
				if (!phone) {
					this.$util.msg('请输入手机号');
					return;
				}
				if (!id_card) {
					this.$util.msg('请输入身份证号');
					return;
				}

				if (pay_type != 10) {
					this.$util.msg('请选择微信支付');
					return;
				}
				this.$requests('hotel/submitOrder', {
					house_id,
					name,
					phone,
					id_card,
					pay_type
				}, 'POST').then(res => {
					this.payment = res.payment;
					this.wxPay(res.payment, res.model);
				});
			},

			//支付选择
			paytype: function(e) {
				this.pay_type = e;
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
									url: './getqrcode'
								})
							}, 500);
						} else if (res.err_msg == "get_brand_wcpay_request:cancel") {
							console.log(res);
							uni.showToast({
								icon: "none",
								title: "已取消支付"
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



			nameInput: function(value) {
				this.name = value
			},
			phoneInput: function(value) {
				this.phone = value
			},
			idCradInput: function(value) {
				this.id_card = value
			},


			getdate() {
				var datetime = new Date();
				var year = datetime.getFullYear();
				var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
				var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
				console.log(month, date)
				this.time.stime = month + '月' + date + '日'
				this.time.etime = month + '月' + (date + 1) + '日'
				this.time.year = year,
					this.time.month = month,
					this.time.day = date
			},
			change() {
				this.show = !this.show
			},
			getqrcode() {
				uni.navigateTo({
					url: "/pages/guide-pre/pre?type=hotel"
				})
			}
		},
		mounted() {

			this.getdate()
		},

	}
</script>

<style lang="scss">
	page {
		background: #F1F1F1;
	}

	.content {
		position: relative;
	}

	/* 支付选择 */
	.pay-type {
		width: 675rpx;
		background: rgba(255, 255, 255, 0.45);
		border-radius: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 20rpx;
		padding: 20rpx 32rpx;
	}

	.type {
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.type-l {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
	}

	.type-l>image {
		width: 55rpx;
		height: 55rpx;
	}

	.type-l>view {
		margin-left: 10rpx;
		font-size: 30rpx;
		font-weight: bold;
	}

	.houseinfo {
		width: 675rpx;
		margin-top: 20rpx;
		height: 195rpx;
		background: rgba(255, 255, 255, 0.45);
		border-radius: 7rpx;
		padding-left: 17rpx;
	}

	.timebox {
		height: 40rpx;
		font-size: 24rpx;
		color: #010101;
		margin-top: 19rpx;
	}

	.greytext {
		margin-left: 10rpx;
	}

	.totaltime {
		width: 60rpx;
		height: auto;
		color: #010101;
		border: 1px solid #000000;
		border-radius: 10px;
		text-align: center;
		font-size: 18rpx;
		margin: 0 20rpx;
	}

	#tags {
		font-size: 20rpx;
		color: #6D6B6B;
	}

	.notice {
		width: 636rpx;
		height: 65rpx;
		border-top: 1px solid #e5e5e5;
		margin-top: 5rpx;
		line-height: 65rpx;

		image {
			width: 23rpx;
			height: 24rpx;
			margin-top: 20rpx;
		}

		font-size: 20rpx;
		color: #000000;

		span {
			margin-left: 5rpx;
		}
	}

	.orderinfo {
		width: 675rpx;
		height: 300rpx;
		background: rgba(255, 255, 255, 0.45);
		border-radius: 7rpx;
		margin-top: 13rpx;
		padding: 0 20rpx;
	}

	.priceinfo {
		padding: 0 20rpx;
		width: 675rpx;
		height: 345rpx;
		background: rgba(255, 255, 255, 0.45);
		border-radius: 7rpx;
		margin-top: 13rpx;
	}

	.orderinfo2 {
		height: 76rpx;
		border-bottom: 1px solid #e5e5e5;
		line-height: 76rpx;
	}

	.title {
		margin-left: 30rpx;
	}

	.time {
		color: #000000;
		font-size: 30rpx;

		.redtext {
			color: #FF0000;
		}
	}

	.type {
		margin-right: 20rpx;
	}

	.oederinfo {
		height: 187rpx;
	}

	.li {
		height: 60rpx;
		padding-left: 30rpx;
	}

	.toptitle {
		margin-top: 30rpx;
	}

	.infotext {
		font-size: 20rpx;
		color: #2c2c2c;
	}

	#num {
		margin-right: 10rpx;
	}

	.keywods {
		margin-left: 20rpx;
	}

	.noticelist {
		width: 675rpx;
		height: 378rpx;
		background: rgba(255, 255, 255, 0.45);
		border-radius: 7rpx;
		margin-top: 13rpx;
		margin-bottom: 118rpx;
		padding: 0 20rpx;
	}

	.bigtitle {
		height: 80rpx;
		border-bottom: 1px solid #e5e5e5;
		line-height: 80rpx;
		padding-left: 20rpx;
	}

	.rule {
		height: 148rpx;
		border-bottom: 1px solid #e5e5e5;
		padding-left: 20rpx;
	}

	.rule2 {
		height: 148rpx;
		// border-bottom: 1px solid #e5e5e5;
		padding-left: 20rpx;
	}

	.stitle {
		font-size: 24rpx;
		color: #000000;
		padding-top: 15rpx;
	}

	.info {
		font-size: 20rpx;
		color: #2f2f2f;
		margin-top: 15rpx;
	}

	.submitorder {
		width: 100%;
		height: 98rpx;
		background: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
	}

	.submitorder1 {
		width: 100%;
		z-index: 5;
		height: 390rpx;
		background: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;

		.box-info {
			padding: 0 50rpx;
			height: 292rpx;
			border-radius: 28rpx 28rpx 0px 0px;

			.redtext {
				color: #000000;
			}
		}
	}

	.submit {
		line-height: 98rpx;
		background: #E50505;
		color: #FFFFFF;
		text-align: center;
		width: 340rpx;
		font-size: 36rpx;

	}

	.pricebox {
		line-height: 98rpx;
		width: 410rpx;
	}

	.redprice {
		margin-left: 75rpx;
		color: #FF0B0B;
	}

	#bigtext {
		font-size: 53rpx;
	}

	.priceinfobtn {
		margin-right: 30rpx;
		line-height: 98rpx;
	}

	.zhan {
		width: 20rpx;
		height: 11rpx;
		margin-top: 48rpx;
		margin-left: 10rpx;
	}
</style>
