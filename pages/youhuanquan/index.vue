<template>
	<view class="content">
		<view class="nav">
			<view @click="change(0)" class="nav-ul"><text :class="[btnnum=='0'?'active':'text']">未使用</text></view>
			<view @click="change(1)" class="nav-ul"><text :class="[btnnum==1?'active':'text']">已使用</text></view>
			<view @click="change(2)" class="nav-ul"><text :class="[btnnum==2?'active':'text']">已过期</text></view>
		</view>
		<view class="list" v-for="item in list">
			<view class="yhq-bg">
				<view class="yhq-number" >{{ item.reduce_price }}元{{ item.coupon_type.text }}</view>
				<view class="yhq-time">
					<view v-if="item.expire_type==10">领取{{ item.expire_day }}天内有效</view>
					<view v-if="item.expire_type==20">{{ item.start_time.text }}~{{ item.end_time.text }}</view>
					<view style="color: #32B134;" v-if="btnnum==0">
						¥<text style="font-size: 50rpx;font-weight: bold;">{{ item.reduce_price }}</text>
					</view>
					<view style="color: #9E9D9D;" v-if="btnnum!=0">
						¥<text style="font-size: 50rpx;font-weight: bold;">{{ item.reduce_price }}</text>
					</view>
				</view>
				<view class="yhq-jian">
					<view v-if="btnnum==0" style="background: #FEF4EB; color: #FD662D;font-size: 22rpx;padding: 8rpx;">通用优惠券</view>
					<view v-if="btnnum!=0" style="background: #FEF4EB; color: #B2AFAD;font-size: 22rpx;padding: 8rpx;">通用优惠券</view>
					<view style="font-size: 32rpx;">满{{ item.min_price }}可用</view>
				</view>
				<view class="hqj-gz">
					<view class="hqj-gz-inc" @tap="explain1">
						<view style="margin-right: 8rpx;">使用规则</view>
						<!-- 向下箭头 -->
						<u-icon v-if="explain==2" name="arrow-up-fill" color="#303030" size="28"></u-icon>
						<!-- 向上箭头 -->
						<u-icon v-if="explain==1" name="arrow-down-fill" color="#303030" size="28"></u-icon>
					</view>
					<view class="yhq-gz-bt" v-if="btnnum==0" >立即使用</view>
					<view class="yhq-gz-bt" v-if="btnnum==2" style="background: #E7E7E7;">立即使用</view>
				</view>
			</view>
			<view class="yhq-state" v-if="btnnum==1">
				<image src="../../static/user/yishiyong.png" mode="aspectFit"></image>
			</view>
			<view class="yhq-state" v-if="btnnum==2">
				<image src="../../static/user/yiguoqi.png" mode="aspectFit"></image>
			</view>
			<view class="yhq-sm" v-if="explain==2">
				<view class="yhq-sm-desc">
					<view>1、本券有效期为自领取后90天内有效</view>
					<view>2、本券仅限用于佛顶山生态旅游商城旗下部分产品使用，节假日通用; </view>
					<view>3、每个订单限使用一张，不可叠加使用; </view>
					<view>4、使用抵用券部分不开具此部分金额发票; </view>
					<view>5、本券不可与其他优惠促销活动同时使用; </view>
				</view>
			</view>
		</view>
		<!-- <view class="null">
			<image src="../../static/user/yhq-null.png" mode="aspectFit"></image>
			<view>暂无优惠券</view>
		</view> -->
	</view>

</template>

<script>
	export default {
		data() {
			return {
				btnnum: '0',
				explain:'1',
				list:{}
			}
		},
		onLoad() {
		this.getList();
		},
		
		methods: {
			getList: function() {
				this.$requests('coupon/lists', {}).then(res => {
					this.list = res.list;
				})
			
			},
			// 顶部导航切换
			change(e) {
				
				this.btnnum = e
				 console.log(this.btnnum)
			},
			//显示使用说明
			explain1(){
				let explain = this.explain;
				if(explain==1){
					this.explain=2;
				}
				if(explain==2){
					this.explain=1;
				}
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
		padding-bottom: 20rpx;
	}
	/* 顶部导航 */
	.nav{
		position: fixed;
		top: 44px;
		left: 0;
		height: 100rpx;
		width: 100%;
		z-index: 99999;
		background: #ffffff;
	}
	.nav-ul{
		float: left;
		width: 33.3%;
		height: 100rpx;
		text-align: center;
	}
	.nav-ul>.text{
		display: inline-block;
		color: #676767;
		height: 100rpx;
		font-size: 40rpx;
		font-weight: bold;
		line-height: 100rpx;
	}
	.active{
		display: inline-block;
		font-size: 40rpx;
		height: 96rpx;
		line-height: 98rpx;
		color: #000000;
		font-weight: bold;
		border-bottom: 4rpx solid #32B134;
	}
	/* 优惠券列表 */
	.list{
		width: 96%;
		margin-top: 130rpx;
		position: relative;
	}
	.yhq-bg{
		width: 100%;
		height: 300rpx;
		background-image: url(../../static/user/yhq-bg.png);
		/* background-image: url(../../static/user/yhq-bg.png) no-repeat; */
		background-size:100% 100%;
		padding: 0rpx 38rpx;
		display: flex;
		flex-direction: column;
	}
	.yhq-number{
		margin-top: 20rpx;
		text-align: left;
		font-size: 34rpx;
		font-weight: bold;
	}
	.yhq-time{
		display: flex;
		flex-direction: row;
		margin-top: 10rpx;
		justify-content: space-between;
		align-items: flex-start;
	}
	.yhq-jian{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 10rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #ddd;
	}
	.hqj-gz{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		margin-top: 30rpx;
	}
	.hqj-gz-inc{
		display: flex;
		flex-direction: row;
	}
	.yhq-gz-bt{
		background: #32B134;
		color: #ffffff;
		font-size: 32rpx;
		font-weight: bold;
		border-radius: 25rpx;
		padding: 10rpx 25rpx;
	}
	/* 使用图标状态 */
	.yhq-state{
		width: 180rpx;
		height: 180rpx;
		position: absolute;
		z-index: 9999;
		top: 120rpx;
		right: 2%;
	}
	.yhq-state>image{
		width: 100%;
		height: 100%;
	}
	/* 优惠券说明 */
	.yhq-sm{
		background: #ffffff;
		width: 100%;
		margin-top: -30rpx;
		padding-bottom: 250rpx;
		border-radius: 0rpx 0rpx 35rpx 35rpx;
		padding: 0rpx 50rpx;
		display: flex;
		flex-direction: column;
	}
	.yhq-sm-desc{
		background: #EEEEEE;
		border-radius: 25rpx;
		width: 100%;
		margin-top: 50rpx;
		padding: 15rpx 20rpx;
		margin-bottom: 180rpx;
	}
	.yhq-sm-desc>view{
		margin-bottom: 20rpx;
		font-size: 28rpx;
	}
	/* 没有数据 */
	.null{
		margin-top: 200rpx;
		width: 100%;
		height: 400rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.null>image{
		width: 90%;
		height: 300rpx;
	}
	.null>view{
		margin-top: 30rpx;
		color: #4D4E4E;
	}
</style>
