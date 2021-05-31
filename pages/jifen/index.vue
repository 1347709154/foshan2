<template>
	<view class="content">
		<!-- 头部积分 -->
		<view class="jifen">
			<view class="jifen-l">
				<view style="font-size: 28rpx;margin-top: 50rpx;">可用积分</view>
				<view style="font-size: 48rpx;color: #EA1717;font-weight: bold;margin-top: 50rpx;letter-spacing: 2rpx;">0</view>
				<view class="jifen-l-desc">
					<view style="border-right: 1rpx solid #333;width: 45%;" @click="mingxi">积分明细</view>
					<view style="padding-left: 32rpx;" @click="duihuan">兑换记录</view>
				</view>
			</view>
			<view class="jifen-r">
				<image src="../../static/user/jifen.png" mode="scaleToFill"></image>
			</view>
		</view>
		
		<!-- 商品列表 -->
		<view class="list" v-if="0">
			<view class="list-ul" @click="details">
				<view class="list-img">
					<image src="../../static/banner.jpg"></image>
				</view>
				<view style="margin-top: 15rpx;font-size: 28rpx;font-weight: bold;">【特产】珍珠花生500g</view>
				<view style="font-size: 28rpx;margin-top: 15rpx;"><text style="color: #F04131;font-size: 30rpx;font-weight: bold;"> 2000</text>积分</view>
			</view>
			<view class="list-ul">
				<view class="list-img">
					<image src="../../static/banner.jpg"></image>
				</view>
				<view style="margin-top: 15rpx;font-size: 28rpx;font-weight: bold;">【特产】珍珠花生500g</view>
				<view style="font-size: 28rpx;margin-top: 15rpx;"><text style="color: #F04131;font-size: 30rpx;font-weight: bold;"> 2000</text>积分</view>
			</view>
			<view class="list-ul">
				<view class="list-img">
					<image src="../../static/banner.jpg"></image>
				</view>
				<view style="margin-top: 15rpx;font-size: 28rpx;font-weight: bold;">【特产】珍珠花生500g</view>
				<view style="font-size: 28rpx;margin-top: 15rpx;"><text style="color: #F04131;font-size: 30rpx;font-weight: bold;"> 2000</text>积分</view>
			</view>
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
			// 积分明细
			mingxi:function(e){
				uni.navigateTo({
					url:"/pages/jifen/mingxi"
				})
			},
			//积分兑换
			duihuan:function(e){
				uni.navigateTo({
					url:"/pages/jifen/duihuan"
				})
			},
			//商品详情
			details:function(e){
				uni.navigateTo({
					url:"/pages/jifen/details"
				})
			}
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
	/* 头部积分 */
	.jifen{
		background: #ffffff;
		width: 100%;
		height: 320rpx;
		display: flex;
		flex-direction: row;
		padding: 0rpx 32rpx;
	}
	.jifen-l{
		height: 100%;
		width: 55%;
	}
	.jifen-l-desc{
		display: flex;
		flex-direction: row;
		margin-top: 60rpx;
	}
	.jifen-l-desc>view{
		width: 50%;
		font-size: 28rpx;
		
	}
	.jifen-r{
		height: 100%;
		width: 45%;
		padding-right: 32rpx;
	}
	.jifen-r>image{
		width: 100%;
		height: 300rpx;
	}
	
	/* 商品列表 */
	.list{
		margin-top: 30rpx;
		height: 500rpx;
		width: 94%;
	}
	.list-ul{
		float: left;
		width: 50%;
		height: 400rpx;
		margin-bottom: 50rpx;
		padding: 20rpx;
	}
	.list-img{
		background: #ffffff;
		width: 100%;
		height: 300rpx;
		border-radius: 15rpx;
		padding: 15rpx;
	}
	.list-img>image{
		width: 100%;
		height: 100%;
	}
</style>
