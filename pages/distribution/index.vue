<template>
	<view class="content">
		<view class="top-bg">
			<view class="top-inc" @click="fanhui">
				<u-icon  size="50" name="arrow-left" color="#fff"></u-icon>
			</view>
			<view class="top-nav">分销中心</view>
		</view>
		<!-- 用户信息及金额 -->
		<view class="user">
			<view class="user-name">
				<view class="name">{{userInfo.nickName}}</view>
				<view class="type">推荐人：平台</view>
				<view class="user-img">
					<image :src="userInfo.avatarUrl" mode="aspectFit"></image>
				</view>
			</view>
			<view class="money-card">
				<view class="money-card-m">
					<view>可提现  0.00元</view>
					<view>待提现  0.00元</view>
				</view>
				<view class="money-card-bt">
					<view>去提现</view>
				</view>
			</view>
			<view class="money-yt">
				<view style="padding-left: 100rpx;">已提现金额</view>
				<view style="padding-right: 70rpx;">0.000</view>
			</view>
		</view>
		<!-- 用户下级 -->
		<view class="pin-card">
			<view class="pin-ul" @click="mingxi">
				<image src="../../static/user/pin-mx.png" mode="aspectFit"></image>
				<view>提现明细</view>
			</view>
			<view class="pin-ul" @click="order">
				<image src="../../static/user/pin-dingdan.png" mode="aspectFit"></image>
				<view>分销订单</view>
			</view>
			<view class="pin-ul" @click="team">
				<image src="../../static/user/pin-td.png" mode="aspectFit"></image>
				<view>我的团队</view>
			</view>
			<view class="pin-ul" @click="prcode">
				<image src="../../static/user/pin-hb.png" mode="aspectFit"></image>
				<view>推广海报</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				userInfo:{}
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('user/detail', {}).then(res => {
					this.userInfo = res.userInfo;
				})
			},
			// 返回
			fanhui:function(){
				uni.navigateBack({
					
				})
			},
			//提现明细
			mingxi:function(e){
				uni.navigateTo({
					url:"/pages/distribution/list"
				})
			},
			//我的团队
			team:function(e){
				uni.navigateTo({
					url:"/pages/distribution/team"
				})
			},
			//分销订单
			order:function(e){
				uni.navigateTo({
					url:"/pages/distribution/order"
				})
			},
			//推广海报
			prcode:function(e){
				uni.navigateTo({
					url:"/pages/distribution/qrcode"
				})
			}
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
	.top-bg{
		background: url(../../static/banner.jpg);
		background-size: 100% 100%;
		height: 350rpx;
		width: 100%;
	}
	.top-inc{
		position: absolute;
		top: 25rpx;
		left: 32rpx;
		width: 50rpx;
		height: 50rpx;
	}
	.top-nav{
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #ffffff;
		font-size: 36rpx;
		font-weight: bold;
	}
	/* 用户信息 */
	.user{
		background: #ffffff;
		width: 96%;
		border-radius: 15rpx;
		margin-top: -100rpx;
		padding-bottom: 50rpx;
	}
	.user-name{
		/* display: flex;
		flex-direction: row; */
		position: relative;
		padding: 30rpx 32rpx;
		border-bottom: 1rpx solid #ddd;
	}
	.name{
		font-size: 32rpx;
	}
	.type{
		font-size: 30rpx;
		color: #A5A5A5;
		margin-top: 20rpx;
	}
	.user-img{
		position: absolute;
		right: 50rpx;
		top: -80rpx;
		width: 180rpx;
		height: 180rpx;
		background: #F2F5FA;
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.user-img>image{
		width: 100%;
		height: 100%;
	}
	.money-card{
		margin-top: 50rpx;
		width: 94%;
		margin-left: 3%;
		background: #4A8AFE;
		border-radius: 15rpx;
		display: flex;
		flex-direction: row;
		padding: 40rpx 0rpx;
	}
	.money-card-m{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 60%;
	}
	.money-card-m>view{
		margin-top: 10rpx;
		margin-bottom: 40rpx;
		font-size: 36rpx;
		font-weight: bold;
		color: #fff;
	}
	.money-card-bt{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		padding-right: 20rpx;
		width: 40%;
	}
	.money-card-bt>view{
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		background: #ffffff;
		color: #007AFF;
		text-align: center;
		border-radius: 30rpx;
	}
	.money-yt{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items:flex-start;
	}
	.money-yt>view{
		margin-top: 40rpx;
		font-size: 32rpx;
		font-weight: bold;
	}
	.pin-card{
		background: #ffffff;
		width: 96%;
		border-radius: 25rpx;
		margin-top: 30rpx;
	}
	.pin-ul{
		width: 33.3%;
		height: 150rpx;
		margin-top: 40rpx;
	
		float: left;
		text-align: center;
	}
	.pin-ul>image{
		width: 50rpx;
		height: 50rpx;
	}
	.pin-ul>view{
		margin-top: 15rpx;
		font-size: 32rpx;
		font-weight: bold;
	}
</style>
