<template>
	<view class="content">
		<!-- 新订单 -->
		<view class="piao-card">
			<view class="piao-tag">新订单</view>
			<view class="piao-name">佛顶山生态旅游景区门票</view>
			<view class="piao-time-name">选择日期</view>
			<view class="piao-time">
				<view class="piao-time-ul" :class="[select==1?'active':'']" @tap="change(1)">
					<view>05-11</view>
					<view>今天</view>
					<view class="piao-inc" v-if="select==1">
						<u-icon  size="32" color="#ffffff" name="checkbox-mark"></u-icon>
					</view>
				</view>
				<view class="piao-time-ul" :class="[select==2?'active':'']" @tap="change(2)">
					<view>05-12</view>
					<view>明天</view>
					<view class="piao-inc" v-if="select==2">
						<u-icon  size="32" color="#ffffff" name="checkbox-mark"></u-icon>
					</view>
				</view>
				<view class="piao-time-ul" :class="[select==3?'active':'']" @tap="change(3)">
					<view>05-13</view>
					<view>后天</view>
					<view class="piao-inc" v-if="select==3">
						<u-icon  size="28" color="#ffffff" name="checkbox-mark"></u-icon>
					</view>
				</view>
			</view>
			<view class="piao-num">
				<view class="piao-num-te">选择数量</view>
				<view class="piao-num-bt">
					<view class="jian" @click="jian">-</view>
					<view class="number">{{number}}</view>
					<view class="add" @click="add">+</view>
				</view>
			</view>
		</view>
		<!-- 原订单 -->
		<view class="piao-card-s">
			<view class="piao-tag-s">原订单</view>
			<view class="piao-name-s">佛顶山生态旅游景区门票</view>
			<view class="piao-time-name-s">选择日期</view>
			<view class="piao-time-s">
				<view class="piao-time-ul-s" :class="[select==1?'active-s':'']">
					<view>05-11</view>
					<view>今天</view>
					<view class="piao-inc-s" v-if="select==1">
						<u-icon  size="32" color="#ffffff" name="checkbox-mark"></u-icon>
					</view>
				</view>
				<view class="piao-time-ul-s" :class="[select==2?'active-s':'']" >
					<view>05-12</view>
					<view>明天</view>
					<view class="piao-inc-s" v-if="select==2">
						<u-icon  size="32" color="#ffffff" name="checkbox-mark"></u-icon>
					</view>
				</view>
				<view class="piao-time-ul-s" :class="[select==3?'active-s':'']" >
					<view>05-13</view>
					<view>后天</view>
					<view class="piao-inc-s" v-if="select==3">
						<u-icon  size="28" color="#ffffff" name="checkbox-mark"></u-icon>
					</view>
				</view>
			</view>
			<view class="piao-num-s">
				<view class="piao-num-te">选择数量</view>
				<view class="piao-num-bt-s">
					2
					<!-- <view class="jian" @click="jian">-</view>
					<view class="number">{{number}}</view>
					<view class="add" @click="add">+</view> -->
				</view>
			</view>
		</view>
		<!-- 游客人 -->
		<view class="user-number">
			<view>游客</view>
			<view style="color: #565656;margin-right: 20rpx;">王一一等人</view>
		</view>
		<!-- 游客须知 -->
		<view class="notice">
			<view class="notice-te">游客改票须知：</view>
			<view class="notice-ul">
				1.你的票还没有过期，即没到当天旅游时间；
			</view>
			<view class="notice-ul">
				2.你所需改签到的日期的门票必须已经发售，且必须还有剩余票额；
			</view>
			<view class="notice-ul">
				3.旅客在办理改签时，须收取改签手续费用（原价10%的费用；
			</view>
			<view class="notice-ul">
				4.改签只可以办理一次；
			</view>
		</view>
		<!-- 底部提交 -->
		<view class="bottom">
			<view class="bottom-money">
				<text style="font-size: 32rpx;">支付金额：</text>
				<text style="font-size: 40rpx;color: #FF0000;font-weight: bold;">￥{{money}}</text>
			</view>
			<view class="bottom-bt">
				确认改签
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select:'0',
				number:0,
				money:0
			}
		},
		onLoad() {

		},
		methods: {
			// 选择日期
			change:function(e){
				this.select=e;
			},
			//票数量减
			jian:function(e){
				let number = this.number;
				if(number<=0){
					uni.showToast({
						title:"购票数不能少于0" ,
						icon:'none',
						duration: 2000
					})
				}else{
					this.number=number-1
				}
			},
			//票数量加
			add:function(e){
				this.number = this.number+1
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
		padding-bottom: 200rpx;
	}
	/* 新订单 */
	.piao-card{
		width: 94%;
		background: #ffffff;
		border-radius: 30rpx;
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;
		padding-bottom: 30rpx;
	}
	.piao-tag{
		width: 120rpx;
		border-radius: 20rpx 0 20rpx 0rpx;
		background: #FF0000;
		color: #fff;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
	}
	.piao-name{
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1rpx solid #ddd;
		font-size: 32rpx;
		font-weight: bold;
		padding-left: 32rpx;
	}
	.piao-time-name{
		font-size: 32rpx;
		font-weight: bold;
		padding-left: 32rpx;
		margin-top: 20rpx;
	}
	.piao-time{
		display: flex;
		flex-direction: row;
	}
	.piao-time-ul{
		width: 160rpx;
		height: 80rpx;
		border-radius: 15rpx;
		border: 1rpx solid #ddd;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 32rpx;
		margin-top: 20rpx;
		position: relative;
		color: #8D8D8D;
		font-size: 28rpx;
	}
	.active{
		border: 1rpx solid #FF0000;
		color: #000000;
	}
	.piao-inc{
		position: absolute;
		right: 0rpx;
		top: 46rpx;
		width: 40rpx;
		height: 30rpx;
		background: #EF1E22;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.piao-num{
		margin-top: 40rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0rpx 32rpx;
		
	}
	.piao-num-te{
		font-size: 32rpx;
		font-weight: bold;
	}
	.piao-num-bt{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.piao-num-bt>view{
		width: 50rpx;
		height: 50rpx;
		margin-right: 20rpx;
		text-align: center;
		line-height: 50rpx;
	}
	.jian{
		background: #E5E5E5;
		color: #4D4D4D;
		font-size: 50rpx;
		
	}
	.add{
		background: #FDCECE;
		color: #FF0000;
		font-size: 50rpx;
	}
	/* 原订单 */
	
	.piao-card-s{
		width: 94%;
		background: #ffffff;
		border-radius: 30rpx;
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;
		padding-bottom: 30rpx;
	}
	.piao-tag-s{
		width: 120rpx;
		border-radius: 20rpx 0 20rpx 0rpx;
		background: #C3C3C3;
		color: #fff;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
	}
	.piao-name-s{
		height: 100rpx;
		line-height: 100rpx;
		border-bottom: 1rpx solid #ddd;
		font-size: 32rpx;
		font-weight: bold;
		padding-left: 32rpx;
		color: #C3C3C3;
	}
	.piao-time-name-s{
		font-size: 32rpx;
		font-weight: bold;
		padding-left: 32rpx;
		margin-top: 20rpx;
		color: #C3C3C3;
	}
	.piao-time-s{
		display: flex;
		flex-direction: row;
	}
	.piao-time-ul-s{
		width: 160rpx;
		height: 80rpx;
		border-radius: 15rpx;
		border: 1rpx solid #ddd;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 32rpx;
		margin-top: 20rpx;
		position: relative;
		color: #C3C3C3;
		font-size: 28rpx;
	}
	.active-s{
		border: 1rpx solid #C3C3C3;
		color: #C3C3C3;
	}
	.piao-inc-s{
		position: absolute;
		right: 0rpx;
		top: 46rpx;
		width: 40rpx;
		height: 30rpx;
		background: #C3C3C3;
		border-radius: 8rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.piao-num-s{
		margin-top: 40rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0rpx 32rpx;
		
	}
	.piao-num-te-s{
		font-size: 32rpx;
		font-weight: bold;
	}
	.piao-num-bt-s{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		color: #C3C3C3;
		font-size: 32rpx;
		padding-right: 32rpx;
	}
	/* 游客人 */
	.user-number{
		margin-top: 20rpx;
		width: 94%;
		height: 100rpx;
		background: #ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items:center;
		padding: 0rpx 32rpx;
		font-size: 32rpx;
		font-weight: bold;
		border-radius: 15rpx;
	}
	/* 游客须知 */
	.notice{
		width: 94%;
		padding: 32rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	.notice-te{
		font-size: 28rpx;
		font-weight: bold;
		color: #000000;
		margin-bottom: 20rpx;
	}
	.notice-ul{
		font-size: 28rpx;
		font-weight: bold;
		color: #000000;
		margin-top: 15rpx;
	}
	.bottom{
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		z-index: 999999;
		height: 120rpx;
		width: 100%;
		padding: 0rpx 32rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.bottom-bt{
		height: 90rpx;
		line-height: 90rpx;
		width: 200rpx;
		margin-top: 15rpx;
		text-align: center;
		color: #ffffff;
		background: #FF0000;
		border-radius: 10rpx;
		font-size: 32rpx;
	}
</style>
