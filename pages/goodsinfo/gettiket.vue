<template>
	<view class="content">
		<view class="fanhui">
			<u-icon size="40" name="arrow-left" class="inc" color="#161616" @tap="back"></u-icon>
			<!-- <image src="../../static/scenic/jiantou.png" mode="" class="img1" @tap="back"></image> -->
			支付
		</view>
		<view class="title">
			<image src="../../static/order/chupiao.png" mode="" class="chupiao left"></image>

			<view class="left">
				出票成功
			</view>
		</view>
		<p id="notice">入园消费时请向商家出示一下券码</p>
		<view class="line">

		</view>
		<p id="notice2">入园核销码</p>
		<canvas class="qrcode" canvas-id="qrcode" style="width: 204px;height: 204px;text-align: center;" />
		<!-- <image src="" mode="" class="qrcode"></image> -->
	</view>
</template>

<script>
	import uQRCode from '@/common/uqrcode.js'
	export default {
		data() {
			return {

			};
		},
		onLoad(options) {
			console.log(options)
			this.type = options.type
			this.make();
		},
		methods: {
			async make() {
				// 回调方式
				uQRCode.make({
					canvasId: 'qrcode',
					componentInstance: this,
					text: 'https://fds.gzlsf.cn/h5/pages/goodsinfo/clerk?order_id=1',
					size: 204,
					margin: 10,
					backgroundColor: '#ffffff',
					foregroundColor: '#000000',
					fileType: 'jpg',
					correctLevel: uQRCode.errorCorrectLevel.H,
					success: res => {
						console.log(res)
					}
				})
				},
				back: function() {
					uni.navigateBack({

					})
					return;
					let type = this.type;
					if (type === 'scenic') {
						uni.redirectTo({
							url: "/pages/order/scenic/index"
						})
					}

					if (type === 'hotel') {
						uni.redirectTo({
							url: "/pages/order/hotel/index"
						})
					}

					if (type === 'food') {
						uni.redirectTo({
							url: "/pages/order/food/index"
						})
					}
					if (type === 'pre') {
						uni.redirectTo({
							url: "/pages/order/pre/index"
						})
					}
				}
			}
		}
</script>

<style lang="scss">
	.canvas-hide {
	        /* 1 */
	        position: fixed;
	        right: 100vw;
	        bottom: 100vh;
	        /* 2 */
	        z-index: -9999;
	        /* 3 */
	        opacity: 0;
	    }
	.fanhui {
		height: 100rpx;
		width: 100%;
		text-align: center;
		line-height: 100rpx;
		color: #000000;
		font-size: 32rpx;
		font-weight: bold;
	}

	.fanhui>.inc {
		position: absolute;
		left: 30rpx;
		top: 15rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.title {
		height: 65rpx;
		line-height: 65rpx;
		font-size: 48rpx;
		color: #000000;
		margin-top: 61rpx;
	}

	.chupiao {
		height: 65rpx;
		width: 65rpx;
		margin-right: 15rpx;
	}

	#notice {
		font-size: 26rpx;
		margin-top: 46rpx;
	}

	.line {
		height: 1px;
		width: 706rpx;
		background: #dcdcdc;
		margin-top: 49rpx;
	}

	#notice2 {
		font-size: 36rpx;
		text-align: center;
		margin-top: 61rpx;
	}

	.qrcode {
		width: 233rpx;
		height: 233rpx;
		margin-top: 44rpx;
	}
</style>
