<template>
	<view class="content">
		<!-- 顶部导航 -->
		<view class="nav">
			<view @click="change('all')" class="nav-ul"><text :class="[btnnum=='all'?'active':'text']">全部</text></view>
			<view @click="change('payment')" class="nav-ul"><text :class="[btnnum=='payment'?'active':'text']">待付款</text></view>
			<view @click="change('received')" class="nav-ul"><text :class="[btnnum=='received'?'active':'text']">待使用</text></view>
			<view @click="change('comment')" class="nav-ul"><text :class="[btnnum=='comment'?'active':'text']">待评价</text></view>
			<view @click="change('ok')" class="nav-ul"><text :class="[btnnum=='ok'?'active':'text']">已完成</text></view>
		</view>
		<!-- 订单列表 -->
		<view class="order-box">
			<view class="order-list" v-for="(item,index) in list" :key="index">
				<view class="order-list-top">
					<view class="order-img">
						<image src="../../../static/user/logo.png"></image>
						<view>{{detail.name}}</view>
					</view>
					<view class="order-state" style="color: #FF0000;" >{{item.state_text}}</view>
				</view>
				<view class="order-list-zj">
					<view class="order-list-goodsimg">
						<image :src="detail.image[0].file_path" mode="aspectFill"></image>
					</view>
					<view class="order-list-desc">
						<view>张数：{{item.num}}张</view>
						<view>时间：{{item.time}}</view>
						<view>总价：￥{{item.pay_price}}</view>
					</view>
				</view>
				<view class="order-list-bottom" v-if="item.pay_status==20">
					<!-- <view class="gaiqian" @click="gaiqian">改签</view> -->
					<view class="shiyong" @click="GoPlay">去使用</view>
				</view>
				<view class="order-list-bottom" v-if="item.pay_status==10  && item.order_status.value==10" >
					<view class="gaiqian" style="border: 1rpx solid #E2E1E1;color: #131313;" @click="cancelOrder(item.order_id)">取消订单</view>
					<view class="shiyong" style="background: #FF0000;" @click="GoPay(item.order_id)">去支付</view>
				</view>
				<view class="order-list-bottom" v-if="item.state==3">
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
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnnum: 'all',
				list:{},
				detail:{},
	
				dataType:'all'
			}
		},
		onLoad() {
			this.getList();
		},
		methods: {

			getList: function() {
				this.$requests('scenic/orderList', {
					dataType: this.btnnum
				}).then(res => {
					this.list = res.list;
					this.detail = res.detail;
				})

			},
			cancelOrder: function(e) {
				let _this=this;
				uni.showModal({
					title: '提示',
					content: '您确认取消订单吗？',
					success: function(res) {
						if (res.confirm) {
							_this.$requests('user.order/cancel', {
								"order_id": e,
							}).then(res => {
								_this.getList();
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			
			},
			// 顶部导航切换
			change(e) {

				this.btnnum = e
				this.getList()
			},
			GoPay(e){
				uni.navigateTo({
					url:'./pay?order_id='+e
				})
			},
			// 跳转改签
			gaiqian: function(e) {
				uni.navigateTo({
					url: "/pages/order/change/index"
				})
			},
			GoPlay: function(e) {
				uni.navigateTo({
					url: "/pages/goodsinfo/gettiket"
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

	/* 顶部导航 */
	.nav {
		position: fixed;
		top: 44px;
		left: 0rpx;
		height: 100rpx;
		width: 100%;
		z-index: 99999;
		background: #ffffff;
	}

	.nav-ul {
		float: left;
		width: 20%;
		height: 100rpx;
		text-align: center;
	}

	.nav-ul>.text {
		display: inline-block;
		color: #676767;
		height: 100rpx;
		font-size: 32rpx;
		font-weight: bold;
		line-height: 100rpx;
	}

	.active {
		display: inline-block;
		font-size: 32rpx;
		height: 96rpx;
		line-height: 98rpx;
		color: #32B134;
		font-weight: bold;
		border-bottom: 4rpx solid #32B134;
	}

	/* 订单列表 */
	.order-box {
		margin-top: 100rpx;
		width: 94%;
		display: flex;
		flex-direction: column;
		padding-bottom: 30rpx;
	}

	.order-list {
		width: 100%;
		background: #ffffff;
		margin-top: 30rpx;
		border-radius: 25rpx;
		display: flex;
		flex-direction: column;
		padding: 32rpx;
	}

	.order-list-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		border-bottom: 1rpx solid #ddd;
		padding-bottom: 20rpx;
		margin-top: 10rpx;
	}

	.order-img {
		display: flex;
		flex-direction: row;
	}

	.order-img>image {
		width: 45rpx;
		height: 45rpx;
	}

	.order-img>view {
		margin-left: 10rpx;
	}

	.order-list-zj {
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
	}

	.order-list-goodsimg {
		width: 165rpx;
		height: 165rpx;
	}

	.order-list-goodsimg>image {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
	}

	.order-list-desc {
		margin-left: 15rpx;
	}

	.order-list-desc>view {
		height: 55rpx;
		line-height: 55rpx;
		color: #010101;
		font-size: 30rpx;
	}

	.order-list-bottom {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: flex-end;
		margin-top: 15rpx;
	}

	.gaiqian {
		border: 1rpx solid #C1E7C2;
		color: #5CBD5D;
		padding: 2rpx 15rpx;
		font-size: 28rpx;
		border-radius: 8rpx;
		margin-right: 25rpx;
	}

	.shiyong {
		background: #32B134;
		color: #fff;
		padding: 2rpx 15rpx;
		font-size: 28rpx;
		border-radius: 8rpx;
		margin-right: 15rpx;
	}
</style>
