<template>
	<view class="content">
		<view class="title">
			<image src="../../static/order/chupiao.png" mode="" class="chupiao left"></image>
			
			<view class="left">
				支付成功
			</view>
		</view>
		<p id="notice">入住民宿消费时请向商家出示一下券码</p>
		<view class="line">
			
		</view>
		<p id="notice2">民宿核销码</p>
		<image src="../../static/order/qrcode.png" mode="" class="qrcode"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.title{
		height: 65rpx;
		line-height: 65rpx;
		font-size: 48rpx;
		color: #000000;
		margin-top: 61rpx;
	}
	.chupiao{
		height: 65rpx;
		width: 65rpx;
		margin-right: 15rpx;
	}
	#notice{
		font-size: 26rpx;
		margin-top: 46rpx;
	}
	.line{
		height: 1px;
		width: 706rpx;
		background: #dcdcdc;
		margin-top: 49rpx;
	}
	#notice2{
		font-size: 36rpx;
		text-align: center;
		margin-top: 61rpx;
	}
	.qrcode{
		width: 233rpx;
		height: 233rpx;
		margin-top: 44rpx;
	}
</style>
