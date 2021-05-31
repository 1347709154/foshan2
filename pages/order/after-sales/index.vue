<template>
	<view class="content">
		<!-- 顶部导航 -->
		<view class="nav">
			<view @click="change(0)" class="nav-ul"><text :class="[btnnum=='0'?'active':'text']">申请中</text></view>
			<view @click="change(4)" class="nav-ul"><text :class="[btnnum==4?'active':'text']">已完成</text></view>
		</view>
		<!-- 订单列表 -->
		<view class="order-box">
			<view class="order-list" v-for="(item,index) in order" :key="index">
				<view class="order-list-top">
					<view class="order-img">
						<image :src="item.goods_logo"></image>
						<view>{{item.goods_name}}</view>
					</view>
					<view class="order-state" style="color: #FF0000;" v-if="item.state==1">退款成功</view>
					<!-- <view class="order-state" style="color: #FF0000;" v-if="item.state==2">待付款</view>
					<view class="order-state" style="color: #FF0000;" v-if="item.state==4">待评价</view>
					<view class="order-state" style="color: #FF0000;" v-if="item.state==5">交易完成</view> -->
				</view>
				<view class="order-list-zj">
					<view class="order-list-goodsimg">
						<image :src="item.goods_img" mode="aspectFill"></image>
					</view>
					<view class="order-list-desc">
						<view>张数：{{item.goods_number}}张</view>
						<view>{{item.goods_time}}</view>
						<view>总价：￥{{item.money}}</view>
					</view>
				</view>
				<!-- <view class="order-list-bottom" v-if="item.state==1">
					<view class="gaiqian">改签</view>
					<view class="shiyong">去使用</view>
				</view> -->
				<view class="order-list-bottom" v-if="item.state==1">
					<view class="gaiqian" style="border: 1rpx solid #E2E1E1;color: #131313;">删除记录</view>
					<view class="shiyong" style="background: #FF0000;" @click="details">查看详情</view>
				</view>
				<!-- <view class="order-list-bottom" v-if="item.state==3">
					<view class="gaiqian" style="border: 1rpx solid #E2E1E1;color: #131313;">申请发票</view>
					<view class="gaiqian" style="border: 1rpx solid #E2E1E1;color: #131313;">改签</view>
					<view class="shiyong">去使用</view>
				</view>
				<view class="order-list-bottom" v-if="item.state==4">
					<view class="gaiqian" style="border: 1rpx solid #E2E1E1;color: #131313;">申请发票</view>
					<view class="gaiqian" style="border: 1rpx solid #E2E1E1;color: #131313;">再来一单</view>
					<view class="shiyong" style="background: #FF0000;">评价</view>
				</view>
				<view class="order-list-bottom" v-if="item.state==5">
					<view class="gaiqian" style="border: 1rpx solid #E2E1E1;color: #131313;">再来一单</view>
				</view> -->
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnnum: '0',
				order:[
				]
			}
		},
		onLoad() {

		},
		methods: {
			// 顶部导航切换
			change(e) {
				this.btnnum = e
				 console.log(this.btnnum)
			},
			//查看详情
			details:function(e){
				uni.navigateTo({
					url:"/pages/order/refund/index"
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
/* 顶部导航 */
	.nav{
		position: fixed;
		top: 44px;
		left: 0rpx;
		height: 100rpx;
		width: 100%;
		z-index: 99999;
		background: #ffffff;
	}
	.nav-ul{
		float: left;
		width: 50%;
		height: 100rpx;
		text-align: center;
	}
	.nav-ul>.text{
		display: inline-block;
		color: #676767;
		height: 100rpx;
		font-size: 32rpx;
		font-weight: bold;
		line-height: 100rpx;
	}
	.active{
		display: inline-block;
		font-size: 32rpx;
		height: 96rpx;
		line-height: 98rpx;
		color: #32B134;
		font-weight: bold;
		border-bottom: 4rpx solid #32B134;
	}
	/* 订单列表 */
	.order-box{
/* 		margin-top: 100rpx; */
		width: 94%;
		display: flex;
		flex-direction: column;
		padding-bottom: 30rpx;
	}
	.order-list{
		width:100%;
		background: #ffffff;
		margin-top: 30rpx;
		border-radius: 25rpx;
		display: flex;
		flex-direction: column;
		padding: 32rpx;
	}
	.order-list-top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		border-bottom: 1rpx solid #ddd;
		padding-bottom: 20rpx;
		margin-top: 10rpx;
	}
	.order-img{
		display: flex;
		flex-direction: row;
	}
	.order-img>image{
		width: 45rpx;
		height: 45rpx;
	}
	.order-img>view{
		margin-left: 10rpx;
	}
	.order-list-zj{
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
	}
	.order-list-goodsimg{
		width: 165rpx;
		height: 165rpx;
	}
	.order-list-goodsimg>image{
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
	}
	.order-list-desc{
		margin-left: 15rpx;
	}
	.order-list-desc>view{
		height: 55rpx;
		line-height: 55rpx;
		color: #010101;
		font-size: 30rpx;
	}
	.order-list-bottom{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: flex-end;
		margin-top: 15rpx;
	}
	.gaiqian{
		border: 1rpx solid #C1E7C2;
		color: #5CBD5D;
		padding: 2rpx 15rpx;
		font-size: 28rpx;
		border-radius: 8rpx;
		margin-right: 25rpx;
	}
	.shiyong{
		background: #32B134;
		color: #fff;
		padding: 2rpx 15rpx;
		font-size: 28rpx;
		border-radius: 8rpx;
		margin-right: 15rpx;
	}
</style>
