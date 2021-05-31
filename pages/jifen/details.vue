<template>
	<view class="content">
		<!-- 轮播 -->
		<view class="swiper">
			<u-swiper :list="list" class="swiper-img" border-radius="0" mode="none"></u-swiper>
		</view>
		<!-- 商品信息 -->
		<view class="goods-box">
			<view class="goods-name">【特产】铜仁石阡特产黄水粑4只装</view>
			<view class="goods-money">
				2600积分
			</view>
			<view class="goods-desc">已售251件·包邮·48小时发货</view>
		</view>
		<view class="lin"></view>
		<!-- 商品详情 -->
		<view class="details">
			<image src="https://cdn.uviewui.com/uview/swiper/1.jpg" mode="widthFix"></image>
			<image src="https://cdn.uviewui.com/uview/swiper/2.jpg" mode="widthFix"></image>
			<image src="https://cdn.uviewui.com/uview/swiper/3.jpg" mode="widthFix"></image>
		</view>
		<!-- 底部 -->
		<view class="bottom">
			<view class="bottom-l">
				<view class="bottom-x">
					<view>
						<image src="../../static/home/dianzan.png" mode="aspectFit"></image>
						<view>收藏</view>
					</view>
					<view>
						<image src="../../static/home/kefu-1.png" mode="aspectFit"></image>
						<view>客服</view>
					</view>
				</view>
			</view>
			<view class="bottom-r">
				<view class="fenxiang">
					<view style="margin-right: 5rpx;">分享</view>
					<u-icon  size="45" name="share"></u-icon>
				</view>
				<view class="yy" @click="order">
					<view>立即兑换</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
			}
		},
		onLoad() {

		},
		methods: {
			//跳转订单
			order:function(){
				uni.navigateTo({
					url:"/pages/jifen/order"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	/* 轮播 */
	.swiper{
		width: 100%;
		/* height: 350rpx;
		background: #007AFF; */
	}
	.swiper-img{
		width: 100%;
		height: 100%;
	}
	/* 商品信息 */
	.goods-box{
		width: 100%;
		padding: 0rpx 50rpx;
	}
	.goods-box>view{
		margin-top:20rpx ;
	}
	.goods-name{
		font-size: 30rpx;
		font-weight: bold;
	}
	.goods-money{
		font-size: 36rpx;
		font-weight: bold;
		color: #FF0808;
	}
	.goods-desc{
		font-size: 28rpx;
	}
	.lin{
		height: 20rpx;
		background: #F2F6F7;
		width: 100%;
		margin-top: 30rpx;
	}
	/* 商品详情 */
	.details{
		width: 100%;
		margin-top: 30rpx;
	}
	.details>image{
		width: 100%;
	}
	/* 底部按钮 */
	.bottom{
		width: 100%;
		height: 120rpx;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		/* background: #007AFF; */
		background: #FFFFFF;
		z-index: 999999;
		-webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
		  -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
		  box-shadow: 0px 0px 10px rgba(0,0,0,.8);
		  display: flex;
		  flex-direction: row;
	}
	.bottom-l{
		display: flex;
		flex-direction: row;
	}
	.bottom-x{
		display: flex;
		flex-direction: row;
		
	}
	.bottom-x>view{
		width: 120rpx;
		height: 120rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.bottom-x>view>image{
		width: 60rpx;
		height: 60rpx;
	}
	.bottom-r{
		width: 630rpx;
		height: 120rpx;
		display: flex;
		flex-direction: row;
	}
	.fenxiang{
		width: 50%;
		height: 120rpx;
		background: #000000;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 32rpx;
	}
	.yy{
		width: 50%;
		height: 120rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #E50505;
		color: #FFFFFF;
		font-size: 32rpx;
	}
</style>
