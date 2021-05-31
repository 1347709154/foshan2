<template>
	<view class="content">
		<view class="card">
			<view class="card-tel">订单详情</view>
			<view class="card-name">导游：{{detail.name}}</view>
			<view class="card-desc">{{detail.subtitle}}</view>
			<view class="card-tmie">选择日期</view>
			<view class="card-tmei-desc">可选择四天内的日期进行预约</view>
			<view class="tmei-box">
				<view class="tmei" :class="[select==index?'active':'']" v-for="(time,index) in timeList"
					@tap="Select(index)">
					<view>2021年</view>
					<view>{{time.data}}</view>
				</view>
			</view>
			<view class="set" v-if="0">
				<view class="set-te">选择人数（人）</view>
				<view class="set-bt">
					<view class="jian" @click="jian">
						<u-icon size="36" name="minus" color="#BBBBBB"></u-icon>
					</view>
					<view class="number">{{number}}</view>
					<view class="jian" @click="add">
						<u-icon size="36" name="plus" color="#BBBBBB"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<!-- 支付选择 -->
		<view class="pay-type">
			<view class="type" @click="paytype(1)">
				<view class="type-l">
					<image src="../../static/home/WeChat.png"></image>
					<view>微信</view>
				</view>
				<view class="type-r">
					<radio value="1" :checked="pay_type==1" style="transform:scale(0.7)" color="#09BB07" />
				</view>
			</view>
			<view class="type" @click="paytype(2)">
				<view class="type-l">
					<image src="../../static/home/Alipay.png"></image>
					<view>支付宝</view>
				</view>
				<view class="type-r">
					<radio value="2" :checked="pay_type==2" style="transform:scale(0.7)" color="#09BB07" />
				</view>
			</view>
		</view>
		<!-- 协议 -->
		<view class="pay-xy">
			<radio value="" :checked="pay_xy" style="transform:scale(0.7)" color="#09BB07" @click="payxy" />
			<view>我已阅读并同意<text style="color: #3287FE;">《支付协议》</text></view>
		</view>
		<!-- 底部支付 -->
		<view class="bottom">
			<view class="bottom-num">
				￥<text style="font-weight: bold;font-size: 40rpx;">{{total_price}}</text>
			</view>
			<view class="toPay" @click="submit">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select: -1,
				article_id: 0,

				number: 1,
				total_price: 0,
				pay_type: 1, //支付方式
				pay_xy: true, //是否同意支付协议
				type: '', //支付类型,
				time: '',
				detail: {},
				timeList: {},
			}
		},
		onLoad(options) {
			this.guide_id = options.guide_id;
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('page/guideOrder', {
					guide_id: this.guide_id
				}).then(res => {
					this.detail = res.detail;
					this.total_price = res.detail.price;
					this.timeList = res.time;

				})

			},
			submit() {
				const {
					time,
					guide_id,
					number,
					pay_type
				} = this;
				if (!time) {
					this.$util.msg('请选择日期');
					return;
				}
				if (!number && number < 1) {
					this.$util.msg('请选择数量');
					return;
				}

				if (pay_type != 1) {
					this.$util.msg('请选择微信支付');
					return;
				}
				this.$requests('page/submitGuideOrder', {
					time,
					guide_id,
					number,
					pay_type
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
									url: '/pages/goodsinfo/gettiket'
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






			//选择日期
			Select: function(e) {
				this.select = e;
				this.time = this.timeList[e].data;
				console.log(this.time);
			},
			//支付选择
			paytype: function(e) {
				this.pay_type = e;
			},
			//支付协议
			payxy: function(e) {

				this.pay_xy = !this.pay_xy;
			},
			//人数减
			jian: function(e) {
				let number = this.number;
				if (number <= 1) {
					uni.showToast({
						title: "预约人数不能少于1",
						icon: 'none',
						duration: 2000
					})
				} else {
					this.number = number - 1;
					this.total_price = this.detail.price * this.number
				}
			},
			//人数加
			add: function(e) {
				this.number = this.number + 1;
				this.total_price = this.detail.price * this.number
			},
			//提交订单
			Submit1: function(e) {
				uni.navigateTo({
					url: "/pages/goodsinfo/gettiket?type=" + this.type
				})
			}
		}
	}
</script>

<style>
	page {
		background: #F2F5FA;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.card {
		width: 96%;
		background: #FFFFFF;
		margin-top: 20rpx;
		border-radius: 20rpx;
		padding: 20rpx 30rpx;
		display: flex;
		flex-direction: column;
	}

	.card-tel {
		font-size: 30rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.card-name {
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.card-desc {
		font-size: 28rpx;
		color: #8F8F8F;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}

	.card-tmie {
		margin-top: 40rpx;
		font-size: 30rpx;
		font-weight: bold;
	}

	.card-tmei-desc {
		font-size: 28rpx;
		color: #8F8F8F;
		margin-top: 10rpx;
	}

	.tmei-box {
		margin-top: 20rpx;
	}

	.tmei {
		float: left;
		width: 150rpx;
		margin-left: 10rpx;
		height: 120rpx;
		border: 1rpx solid #BBBBBB;
		background: #FAFAFA;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
	}

	.tmei>view {
		margin-top: 5rpx;
	}

	.active {
		background: #01B08D;
		border: 0rpx solid #BBBBBB;
		color: #FFFFFF;
	}

	.set {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}

	.set-te {
		font-size: 30rpx;
		font-weight: bold;
	}

	.set-bt {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.set-bt>view {
		margin-right: 20rpx;
	}

	.set-bt>.jian {
		height: 60rpx;
		width: 70rpx;
		background: #FAFAFA;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.number {
		height: 60rpx;
		padding: 0rpx 40rpx;
		background: #F1F2F4;
		text-align: center;
		line-height: 60rpx;
		font-size: 30rpx;
		border-radius: 10rpx;
	}

	/* 支付选择 */
	.pay-type {
		width: 96%;
		background: #FFFFFF;
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
		font-size: 36rpx;
		font-weight: bold;
	}

	/* 协议 */
	.pay-xy {
		margin-top: 20rpx;
		width: 96%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 32rpx;
		font-size: 28rpx;
	}

	/* 底部支付 */
	.bottom {
		width: 100%;
		height: 120rpx;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		background: #FFFFFF;
		z-index: 999999;
		/* -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
		  -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
		  box-shadow: 0px 0px 10px rgba(0,0,0,.8); */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 32rpx;
	}

	.bottom-num {
		font-size: 32rpx;

		padding-left: 20rpx;
	}

	.toPay {
		width: 250rpx;
		background: #FF0000;
		border-radius: 40rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;

	}
</style>
