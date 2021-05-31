<template>
	<view class="content">
		<!-- 积分 -->
		<view class="jifen">
			<view style="margin-top: 100rpx;font-size: 28rpx;">当前积分</view>
			<view style="margin-top: 20rpx;font-size: 40rpx;font-weight: bold;letter-spacing: 2rpx;">0</view>
		</view>
		<!-- 记录列表 -->
		<view class="list-bx" v-if="0">
			<view class="list">
				<view style="margin-top: 30rpx;font-size: 38rpx;font-weight: bold;">积分记录</view>
				<view class="list-mun">
					<view>评价送积分</view>
					<view style="color: #D62727;font-size: 34rpx;text-align: right;">+20</view>
				</view>
				<view style="color: #686868;font-size: 30rpx;margin-top: 10rpx;margin-bottom: 20rpx;">2021-03-27  14:24:32</view>
			</view>
			<view class="list">
				<view style="margin-top: 30rpx;font-size: 38rpx;font-weight: bold;">积分记录</view>
				<view class="list-mun">
					<view>评价送积分</view>
					<view style="color: #D62727;font-size: 34rpx;text-align: right;">+20</view>
				</view>
				<view style="color: #686868;font-size: 30rpx;margin-top: 10rpx;margin-bottom: 20rpx;">2021-03-27  14:24:32</view>
			</view>
			<view class="list">
				<view style="margin-top: 30rpx;font-size: 38rpx;font-weight: bold;">积分记录</view>
				<view class="list-mun">
					<view>评价送积分</view>
					<view style="color: #D62727;font-size: 34rpx;text-align: right;">+20</view>
				</view>
				<view style="color: #686868;font-size: 30rpx;margin-top: 10rpx;margin-bottom: 20rpx;">2021-03-27  14:24:32</view>
			</view>
		</view>
		<!-- 没有更多 -->
		<view class="gengduo">没有更多了~</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page{
		background: #F2F6F7;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	/* 积分 */
	.jifen{
		height: 300rpx;
		width: 100%;
		background: #ffffff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	/* 记录列表 */
	.list-bx{
		width: 100%;
		padding: 0rpx 40rpx;
		background: #ffffff;
		margin-top: 30rpx;
		padding-bottom: 30rpx;
	}
	.list{
		border-bottom: 1rpx solid #ddd;
	}
	.list-mun{
		display: flex;
		flex-direction: row;
	    justify-content: space-between;
	    align-items: flex-start;
		font-size: 32rpx;
		margin-top: 20rpx;
	}
	/* 没有更多 */
	.gengduo{
		margin-top: 50rpx;
		color: #9B9B9B;
		font-size: 30rpx;
	}
</style>
