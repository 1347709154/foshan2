<template>
	<view class="content">
		<!-- 个人信息 -->
		<view class="top-bg">
			<view class="top-nav">我的</view>
			<view class="top-inc" @click="fanhui">
				<image src="../../static/user/set.png" mode="aspectFit"></image>
			</view>
			<view class="user-box">
				<view class="user-l">
					<view class="user-l-img">
						<image :src="userInfo.avatarUrl" mode="aspectFill"></image>
					</view>
					<view class="user-l-name">
						<view style="">{{userInfo.nickName}}</view>
						<view style="font-size: 36rpx;">{{userInfo.user_id}}</view>
					</view>
				</view>
				<view class="user-r" @tap="bianji">
					<view>编辑资料</view>
				</view>
			</view>
			<!-- 积分管理 -->
			<view class="integral">
				<view class="integral-fen">
					<text style="margin-right: 15rpx;font-size: 32rpx;">我的积分</text>
					<text>{{userInfo.points}}</text>
				</view>
				<view class="integral_bt" @click="jifen">
					<view>积分管理</view>
					<u-icon name="arrow-right" color="#ffffff" size="28"></u-icon>
				</view>
			</view>
		</view>
		<!-- 主页、收藏、优惠券 -->
		<view class="card">
			<view class="card-ul" @click="shoucang">
				<view style="font-size: 40rpx;font-weight: bold;">
					<u-icon name="star" color="#ff7e00" size="60" ></u-icon>
				</view>
				<view style="margin-top: 20rpx;font-size: 32rpx;">收藏</view>
			</view>
			<view class="card-ul" @click="home">
				<view style="font-size: 40rpx;font-weight: bold;">
					<u-icon name="moments" color="#ff7e00" size="60" ></u-icon>
				</view>
				<view style="margin-top: 20rpx;font-size: 32rpx;">我的主页</view>
			</view>
			<view class="card-ul" @click="footprint">
				<view style="font-size: 40rpx;font-weight: bold;">
					<image src="../../static/user/zuji.png" style="width: 50rpx;height: 50rpx;"></image>
				</view>
				<view style="margin-top: 20rpx;font-size: 32rpx;">足迹</view>
			</view>
		</view>
		<!-- 订单 -->
		<view class="order-card">
			<view class="order-top">
				<view class="" style="font-size: 38rpx;font-weight: bold;">我的订单</view>
			</view>
			<view class="order-bottom">
				<view class="order-bottom-ul" @click="scenic">
					<image src="../../static/new/jq.png" mode="aspectFill"></image>
					<view>景区</view>
				</view>
				<view class="order-bottom-ul" @click="hotel">
					<image src="../../static/new/ms.png" mode="aspectFill"></image>
					<view>民宿</view>
				</view>
				<view class="order-bottom-ul" @click="food">
					<image src="../../static/user/food.png" mode="aspectFit"></image>
					<view>特产</view>
				</view>
				<view class="order-bottom-ul" @click="spell">
					<image src="../../static/new/pt.png" mode="aspectFill"></image>
					<view>拼团</view>
				</view>
				<view class="order-bottom-ul" @click="seckill">
					<image src="../../static/new/miaos.png" mode="aspectFill"></image>
					<view>秒杀</view>
				</view>
				<view class="order-bottom-ul" @click="aftersales">
					<image src="../../static/new/sh.png" mode="widthFix"></image>
					<view>售后/退款</view>
				</view>
				<view class="order-bottom-ul" @click="pre">
					<image src="../../static/user/Pre.png" mode="aspectFit"></image>
					<view>我的预约</view>
				</view>
				<view class="order-bottom-ul" @click="guide">
					<image src="../../static/new/dy.png" mode="aspectFill"></image>
					<view>导游预约</view>
				</view>
			</view>
		</view>
		<!-- 底部功能 -->
		<view class="bottom-card">
			<view class="bottom-card-ul" @click="youhuiquan">
				<image src="../../static/user/youhuiquan.png" style="width: 50rpx;height: 50rpx;" mode="widthFix">
				</image>
				<view style="margin-top: 20rpx;font-size: 30rpx;">优惠券</view>
			</view>
			<view class="bottom-card-ul" @click="shimingrenzheng">
				<image src="../../static/user/shiming.png" style="width: 50rpx;height: 50rpx;" mode="aspectFill">
				</image>
				<view style="margin-top: 20rpx;font-size: 30rpx;">实名认证</view>
			</view>
			<view class="bottom-card-ul" @click="address">
				<image src="../../static/user/dizhi.png" style="width: 50rpx;height: 50rpx;" mode="scaleToFill"></image>
				<view style="margin-top: 20rpx;font-size: 30rpx;">地址管理</view>
			</view>
			<view class="bottom-card-ul" @click="invoice">
				<image src="../../static/user/fapiao.png" style="width: 50rpx;height: 50rpx;" mode="scaleToFill">
				</image>
				<view style="margin-top: 20rpx;font-size: 30rpx;">发票管理</view>
			</view>
			<view class="bottom-card-ul"  @click="Live">
				<image src="../../static/user/zhibo.png" style="width: 50rpx;height: 50rpx;" mode="scaleToFill"></image>
				<view style="margin-top: 20rpx;font-size: 30rpx;">直播好货</view>
			</view>
			<view class="bottom-card-ul" @click="distribution">
				<image src="../../static/user/fenxiao.png" style="width: 50rpx;height: 50rpx;" mode="scaleToFill">
				</image>
				<view style="margin-top: 20rpx;font-size: 30rpx;">分销商</view>
			</view>
			<view class="bottom-card-ul" @click="ToKf">
				<image src="../../static/user/kefu.png" style="width: 50rpx;height: 50rpx;" mode="scaleToFill"></image>
				<view style="margin-top: 20rpx;font-size: 30rpx;">客服中心</view>
			</view>
			<view class="bottom-card-ul" @click="zhanghaoguanli">
				<image src="../../static/user/zhanghao.png" style="width: 50rpx;height: 50rpx;" mode="scaleToFill">
				</image>
				<view style="margin-top: 20rpx;font-size: 30rpx;">账号管理</view>
			</view>
		</view>
		<!-- 站位 -->
		<view class="null"></view>
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
				userInfo: {},
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
			Phone() {
				uni.makePhoneCall({
					phoneNumber: '19358666237' //仅为示例
				});
			},
			//编辑资料
			bianji: function(e) {
				uni.navigateTo({
					url: "../personal/index"
				})
			},
			ToKf: function(e) {
				uni.navigateTo({
					url: "./kefu"
				})
			},
			//积分管理
			jifen: function(e) {
				uni.navigateTo({
					url: "/pages/jifen/index"
				})
			},	Live: function(e) {
				uni.navigateTo({
					url: "/pages/live/index"
				})
			},
			//收藏
			shoucang: function(e) {
				uni.navigateTo({
					url: "../collection/index"
				})
			},
			//我的足迹
			footprint: function(e) {
				uni.navigateTo({
					url: "/pages/footprint/index"
				})
			},
			//我的主页
			home: function(e) {
				uni.navigateTo({
					url: "/pages/home/index"
				})
			},
			//景区订单
			scenic: function(e) {
				uni.navigateTo({
					url: "/pages/order/scenic/index"
				})
			},
			//民宿订单
			hotel: function(e) {
				uni.navigateTo({
					url: "/pages/order/hotel/index"
				})
			},
			//特产订单
			food: function(e) {
				uni.navigateTo({
					url: "/pages/order/food/index"
				})
			},
			// 拼团订单
			spell: function(e) {
				uni.navigateTo({
					url: "/pages/order/spell/index"
				})
			},	guide: function(e) {
				uni.navigateTo({
					url: "/pages/order/guide/index"
				})
			},
			//描述订单
			seckill: function(e) {
				uni.navigateTo({
					url: "/pages/order/seckill/index"
				})
			},
			// 售后/退款
			aftersales: function(e) {
				uni.navigateTo({
					url: "/pages/order/after-sales/index"
				})
			},
			//预约订单
			pre: function(e) {
				uni.navigateTo({
					url: "/pages/order/Pre/index"
				})
			},
			//优惠券
			youhuiquan: function(e) {
				uni.navigateTo({
					url: "/pages/youhuanquan/index"
				})
			},
			//实名认证
			shimingrenzheng: function(e) {
				uni.navigateTo({
					url: "/pages/shimingrenzheng/index"
				})
			},
			//地址管理
			address: function(e) {
				uni.navigateTo({
					url: "/pages/address/index"
				})
			},
			//发票管理
			invoice: function(e) {
				uni.navigateTo({
					url: "../invoice/index"
				})
			},
			//分销中心
			distribution: function(e) {
				uni.navigateTo({
					url: "/pages/distribution/index"
				})
			},
			//账号管理
			zhanghaoguanli: function(e) {
				uni.navigateTo({
					url: "/pages/zhanghaoguanli/index"
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F2F6F7;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-bottom: 120rpx;
	}

	/* 个人信息 */

	.top-bg {
		background: url(../../static/banner.jpg);
		background-size: 100% 100%;
		height: 430rpx;
		width: 100%;
	}

	.top-inc {
		position: absolute;
		top: 25rpx;
		right: 32rpx;
		width: 50rpx;
		height: 50rpx;
	}

	.top-inc>image {
		width: 100%;
		height: 100%;
	}

	.top-nav {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #ffffff;
		font-size: 36rpx;
		font-weight: bold;
	}

	.user-box {
		width: 96%;
		margin-left: 2%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;

	}

	.user-l {
		display: flex;
		flex-direction: row;
	}

	.user-l-img {
		width: 150rpx;
		height: 150rpx;
		background: #FFFFFF;
		border-radius: 50%;
	}

	.user-l-img>image {
	width: 150rpx;
	height: 150rpx;
		border-radius: 50%;
	}

	.user-l-name {
		display: flex;
		flex-direction: column;
		margin-left: 15rpx;
		font-size: 32rpx;
		font-weight: bold;
		overflow: hidden;
		opacity: inherit;
	}

	.user-l-name>view {
		margin-top: 25rpx;
		color: #ffffff;
	}

	.user-r {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.user-r>view {
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		width: 180rpx;
		margin-top: 100rpx;
		border-radius: 45rpx;
		color: #FFFFFF;
		background: linear-gradient(to right, #FFDE6E, #FF9726);
		font-size: 28rpx;
	}

	/* 积分管理 */
	.integral {
		display: flex;
		flex-direction: row;
		padding-left: 48rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}

	.integral-fen {
		overflow: hidden;
		line-height: 100rpx;
		color: #FFFFFF;
		font-size: 40rpx;

	}

	.integral_bt {
		display: flex;
		flex-direction: row;
		line-height: 100rpx;
		text-align: right;
		padding-right: 32rpx;
	}

	.integral_bt>view {
		color: #FFFFFF;
		padding-left: 30rpx;
	}

	/* 收藏、我的、优惠券 */
	.card {
		margin-top: -80rpx;
		width: 96%;
		height: 180rpx;
		background: #FFFFFF;
		border-radius: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

	}

	.card-ul {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* 订单 */
	.order-card {
		width: 96%;
		background: #FFFFFF;
		border-radius: 30rpx;
		display: flex;
		flex-direction: column;
		margin-top: 30rpx;
	}

	.order-top {
		height: 80rpx;
		line-height: 80rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0rpx 40rpx;
	}

	.order-bottom-ul {
		float: left;
		width: 25%;
		text-align: center;
		margin-bottom: 25rpx;
	}

	.order-bottom-ul>image {
		width: 55rpx;
		height: 55rpx;
	}

	.order-bottom-ul>view {
		margin-top: 10rpx;
		color: #404040;
		font-size: 30rpx;
	}

	/* 底部功能 */
	.bottom-card {

		width: 100%;
		background: #ffffff;
		/* display: flex;
		flex-direction: row; */
		margin-top: 30rpx;
	}

	.bottom-card-ul {
		float: left;
		width: 25%;
		height: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.null {
		height: 120rpx;
		width: 100%;
	}

	.phone {
		position: fixed;
		z-index: 99999;
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
