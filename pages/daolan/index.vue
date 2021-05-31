<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<!-- 拨打电话 -->
		<view class="phone" @click="Phone()">
			<image src="../../static/user/phone.png" mode="aspectFit"></image>
			<view>客服热线</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '设计中，敬请期待...'
			}
		},
		onLoad() {

		},
		methods: {
			Phone() {
				uni.makePhoneCall({
					phoneNumber: '19358666237' //仅为示例
				});
			},
		}
	}
</script>

<style>
	.content {
		padding-top: 30%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.phone {
		position: fixed;
		z-index: 99;
		top: 780rpx;
		right: 32rpx;
		width: 140rpx;
		height: 170rpx;
		/* border: 1rpx solid #80D981; */
		border-radius: 60rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 1;
	}
	
	.phone>image {
		width: 100rpx;
		height: 80rpx;
	}
	
	.phone>view {
		color: #80D981;
		font-size: 28rpx;
		margin-top: 10rpx;
	}
</style>
