<template>
	<view class="content">
		<!-- 兑换列表 -->
	<!-- 	<view class="list">
			<view class="list-l">
				<view class="list-l-img">
					<image src="../../static/banner.jpg" mode="scaleToFill"></image>
				</view>
				<view class="list-l-desc">【特产】珍珠花生500g</view>
			</view>
			<view class="list-r">
				<view class="list-r-teim">2021年5月7日</view>
				<view class="list-r-jifen"><text style="color: red;">2000</text>积分</view>
			</view>
		</view>
		<view class="list">
			<view class="list-l">
				<view class="list-l-img">
					<image src="../../static/banner.jpg" mode="scaleToFill"></image>
				</view>
				<view class="list-l-desc">【特产】珍珠花生500g</view>
			</view>
			<view class="list-r">
				<view class="list-r-teim">2021年5月7日</view>
				<view class="list-r-jifen"><text style="color: red;">2000</text>积分</view>
			</view>
		</view> -->
		<!-- 没有更多 -->
		<!-- <view class="gengduo">没有更多了~</view> -->
		<!-- 没有数据 -->
		<view class="null">
			<image src="../../static/user/jifen-null.png" mode="widthFix"></image>
			<view style="margin-top: 30rpx;">暂无兑换记录</view>
		</view>
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
		background: #F2F5FA;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	/* 兑换列表 */
	.list{
		width: 100%;
		margin-top: 5rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		background: #ffffff;
		padding: 30rpx 32rpx;
		margin-bottom: 20rpx;
		
	}
	.list-l{
		display: flex;
		flex-direction: row;
		width: 70%;
		word-wrap: break-word;
	}
	.list-l-img{
		width: 180rpx;
		height: 180rpx;
		padding: 10rpx;
		border: 1rpx #ddd solid;
	}
	.list-l-img>image{
		width:100% ;
		height: 100%;
	}
	.list-l-desc{
		font-size: 28rpx;
		font-weight: bold;
		margin-left: 10rpx;
		margin-top: 20rpx;
	}
	.list-r{
		width: 30%;
		text-align: right;
	}
	.list-r-teim{
		font-size: 28rpx;
		margin-top: 20rpx;
		color: #8D8D8D;
	}
	.list-r-jifen{
		margin-top: 80rpx;
		font-size: 28rpx;
	}
	/* 没有更多 */
	.gengduo{
		margin-top: 150rpx;
		color: #9B9B9B;
		font-size: 30rpx;
	}
	/* 没有数据 */
	.null{
		width: 100%;
		height: 500rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 200rpx;
	}
	.null>image{
		width: 70%;
		height: 80%;
	}
</style>
