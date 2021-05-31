<template>
	<view class="content">
		<view class="address-card" @click="address">
			<u-cell-item  title="使用其他地址" :arrow="true" arrow-direction="arrow-right" :border-bottom="false"></u-cell-item>
		</view>
		<view class="address">
			<image src="../../static/home/dingwe-1.png"></image>
			<view class="address-add" style=" color: #000000;">德福中心A5栋12楼1201</view>
			<view class="">13515482635  王先生</view>
		</view>
		<!-- 商品信息 -->
		<view class="goods-box">
			 <view class="goods" style="">
				 <view class="goods-img">
					<image mode="aspectFit" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2015%2F05%2F18%2FFkpm67LDL8t0CXanGIyn5L9vaCcw.jpg%3FimageView2%2F2%2Fw%2F580%2Fh%2F580%2Fq%2F75%2Fformat%2Fjpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624001293&t=cd57513a819f22a9b626274984d6091a"></image>
				 </view>
				 <view class="goods-xinxi">
					 <view class="goods-name">
						 <view>铜仁石阡特产黄水粑4只装</view>
					 </view>
					 <view class="goods-jifen">
						 <view class="jifen">2000<text>积分</text></view>
						 <view class="jifen" style="text-align: right;">X1</view>
					 </view>
				 </view>
			 </view>
			 <view style="" class="goods-yhq">
				 <view style="padding-left: 20rpx;">邮费：0元</view>
				 <view  class="goods-yhq-q">
					 <view class="yhq">
						 <image src="../../static/home/yhq.png"></image>
						 <view>优惠券</view>
					 </view>
					 <view class="keyong">无可用</view>
				 </view>
				 
			 </view>
			 <view class="goods-bottom">
				 <view class="shifu">
					 <view class="yhj">权益</view>
				 </view>
				 <view class="fk">
					 暂无权益
				 </view>
			 </view>
		</view>
		<!-- 兑换详情 -->
		<view class="datelist">
			<view class="datelist-ul">
				<view>积分总额:</view>
				<view style="color: #F20000;">2000积分</view>
			</view>
			<view class="datelist-ul">
				<view>优惠总额:</view>
				<view style="color: #F20000;">0积分</view>
			</view>
			<view class="datelist-ul">
				<view>实付总额:</view>
				<view style="color: #F20000;">2000积分</view>
			</view>
		</view>
		<!-- 底部提交 -->
		<view class="Submit">确认兑换</view>
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
			//跟换地址
			address:function(e){
				uni.navigateTo({
					url:"/pages/address/index"
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
	.address-card{
		width: 96%;
		height: 100rpx;
		border-radius: 15rpx;
		margin-top: 20rpx;
		background: #FFFFFF;
	}
	.address{
		margin-top: 20rpx;
		width: 96%;
		background-color: #FFFFFF;
		border-radius: 15rpx;
		position: relative;
		padding-bottom: 20rpx;
	}
	.address>image{
		width: 35rpx;
		height: 35rpx;
		position: absolute;
		top: 60rpx;
		left: 32rpx;
	}
	.address-add{
		margin-top: 40rpx;
		margin-bottom: 10rpx;
		font-size: 28rpx;
		font-weight: bold;
		
	}
	.address>view{
		margin-left: 80rpx;
		color: #6F6F6F;
		font-size: 28rpx;
	}
	/* 商品信息 */
	.goods-box{
		width: 96%;
		background: #FFFFFF;
		margin-top: 20rpx;
		border-radius: 15rpx;
		display: flex;
		flex-direction: column;
		padding: 20rpx 20rpx 10rpx 20rpx;
		
	}
	.goods{
		display: flex;
		flex-direction: row;
		width: 100%;
		
	}
	.goods-img{
		width: 200rpx;
		height: 200rpx;
	}
	.goods-img>image{
		width: 100%;
		height: 100%;
	}
	.goods-xinxi{
		/* display: flex;
		flex-direction: column; */
		margin-left: 20rpx;
		height: 200rpx;
		width: 100%;
	}
	.goods-name{
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 20rpx;
		width: 100%;	
	}
	.goods-jifen{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-top: 15rpx;
	}
	.goods-name>.jifen{
		width: 50%;
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}
	.goods-yhq{
		display: flex;
		flex-direction: column;
		border-bottom: 1rpx solid #ddd;
		padding-bottom: 20rpx;
		font-size: 28rpx;
	}
	.goods-yhq-q{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 15rpx;
	}
	.yhq{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-left: 20rpx;
	}
	.yhq>view{
		padding-left: 10rpx;
		font-size: 28rpx;
	}
	.yhq>image{
		width: 30rpx;
		height: 30rpx;
	}
	.keyong{
		font-size: 28rpx;
	}
	.goods-bottom{
		display: flex;
		flex-direction: row;
		height: 80rpx;
		line-height: 80rpx;
		justify-content: space-between;
		align-items: flex-start;
	}
	
	.yhj{
		font-size: 28rpx;
	}
	.fk{
		margin-left: 40rpx;
		font-size: 28rpx;
		color: #FF0000;
	}
	.datelist{
		width: 100%;
		background: #F1E1E4;
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		padding-bottom: 30rpx;
	}
	.datelist-ul{
		width: 55%;
		margin-right: 32rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		font-weight: bold;
	}
	/* 底部提交 */
	.Submit{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #FFFFFF;
		font-size: 36rpx;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		background: #FBA505;
	}
</style>
