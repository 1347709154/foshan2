<template>
	<view class="content">
		<view class="card-box">
			<view class="goods-status">退款成功</view>
			<view class="goods-col">预计最晚2021年5月21日前到账</view>
			<view class="goods-col">
				<view class="">退款金额</view>
				<view class="" style="color: #000000;">￥26.0</view>
			</view>
			<view class="goods-col">
				<view class="">退款账户</view>
				<view class="" style="color: #000000;">原支付账户</view>
			</view>
			<!-- 退款流程 -->
			<view class="goods-status">退款流程</view>
			<view class="process">
				<u-time-line>
					<u-time-line-item nodeTop="1" >
						<template v-slot:content >
							<view>
								<view class="u-order-title">提交退款申请</view>
								<view class="u-order-time">2019-05-08 12:12</view>
							</view>
						</template>
					</u-time-line-item>
					<u-time-line-item>
						<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
						<template v-slot:content>
							<view>
								<view class="u-order-title">商家同意退款</view>
								<view class="u-order-time">2019-12-06 22:30</view>
							</view>
						</template>
					</u-time-line-item>
					<u-time-line-item>
						<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
						<template v-slot:content>
							<view>
								<view class="u-order-title">系统审核通过</view>
								<view class="u-order-time">2019-12-06 22:30</view>
								<view class="u-order-time">已受理您的退款申请</view>
							</view>
						</template>
					</u-time-line-item>
					<u-time-line-item>
						<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
						<template v-slot:content>
							<view>
								<view class="u-order-title">微信受理退款</view>
								<view class="u-order-time">2019-12-06 22:30</view>
								<view class="u-order-time">您的退款已被微信受理</view>
							</view>
						</template>
					</u-time-line-item>
					<u-time-line-item>
						<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
						<template v-slot:content>
							<view>
								<view class="u-order-title" style="color: #007AFF;">微信入账中</view>
								<view class="u-order-time">2019-12-06 22:30</view>
		
							</view>
						</template>
					</u-time-line-item>
				</u-time-line>
			</view>
			<!-- 退款信息 -->
			<view class="goods-status">退款信息</view>
			<view class="goods">
				<view class="goods-img">
					<image src="../../../static/user/logo.png" mode="aspectFit"></image>
					<view>佛顶山生态旅游景区门票</view>
				</view>
				<view class="goods-desc">
					<view class="goods-desc-img">
						<image src="../../../static/banner.jpg" mode="aspectFill"></image>
					</view>
					
					<view class="goods-desc-d">
						<view>黄水粑4只装</view>
						<view class="goods-num">
							<view>退款：￥26.0</view>
							<view style="color: #646464;">X1</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 底部按钮 -->
			<view class="bottom">
				<view class="shanchu">删除订单</view>
				<view class="zailai">再来一单</view>
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
	.card-box{
		width: 96%;
		border-radius: 30rpx;
		background: #FFFFFF;
		margin-top: 30rpx;
		padding: 30rpx 20rpx;
		margin-bottom: 150rpx;
	}
	.goods-status{
		font-size: 36rpx;
		font-weight: bold;
		margin-top: 20rpx;
	}
	.goods-col{
		font-size: 28rpx;
		line-height: 80rpx;
		color: #767676;
		border-bottom: 1rpx solid #F2F5FA;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	/* 退款流程 */
	.process{
		margin-top: 20rpx;
		width: 100%;
	}
	.u-node {
			width: 44rpx;
			height: 44rpx;
			border-radius: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #d0d0d0;
		}
		
		.u-order-title {
			color: #333333;
			font-weight: bold;
			font-size: 32rpx;
		}
		
		.u-order-desc {
			color: rgb(150, 150, 150);
			font-size: 28rpx;
			margin-bottom: 6rpx;
		}
		
		.u-order-time {
			color: rgb(200, 200, 200);
			font-size: 26rpx;
			margin-top: 10rpx;
		}
		.u-dot{
			background: #007AFF;
		}
		/* 退款信息 */
		.goods{
			width: 100%;
			display: flex;
			flex-direction: column;
			margin-top: 20rpx;
			
		}
		.goods-img{
			display: flex;
			flex-direction: row;
		}
		.goods-img>image{
			width: 55rpx;
			height: 55rpx;
		}
		.goods-img>view{
			margin-left: 10rpx;
			
		}
		.goods-desc{
			display: flex;
			flex-direction: row;
			margin-top: 20rpx;
			width: 100%;

		}
		.goods-desc-img{
			width: 245rpx;
			height: 165rpx;
			border-radius: 15rpx;
		}
		.goods-desc-img>image{
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
		}
		.goods-desc-d{
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 165rpx;
		}
		.goods-desc-d>view{
			width: 100%;
			margin-left: 15rpx;
			font-size: 28rpx;
			color: #010101;
			margin-top: 20rpx;
		}
		.goods-num{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			font-size: 28rpx;
		}
		/* 底部按钮 */
		.bottom{
			position: fixed;
			bottom: 0rpx;
			left: 0rpx;
			height: 120rpx;
			width: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 50rpx;
		}
		.shanchu{
			height: 80rpx;
			width: 200rpx;
			text-align: center;
			line-height:80rpx;
			border: 1rpx solid #CCCCCC;
			border-radius: 50rpx;
		}
		.zailai{
			height: 80rpx;
			width: 200rpx;
			text-align: center;
			line-height:80rpx;
			background: #FEC205;
			border-radius: 50rpx;
		}
</style>
