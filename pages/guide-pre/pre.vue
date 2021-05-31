<template>
	<view class="content">
		<view class="card">
			<view class="card-tel">订单详情</view>
			<view class="card-name">佛顶山汽车露营基地</view>
			<view class="card-desc">从业4年·专业好·形象好·服务好</view>
			<view class="card-tmie">选择日期</view>
			<view class="card-tmei-desc">可选择四天内的游园日期进行预约</view>
			<view class="tmei-box">
				<view class="tmei" :class="[select==index?'active':'']" v-for="(time,index) in tmie" @tap="Select(index)">
					<view>{{time.nian}}年</view>
					<view>{{time.time}}</view>
				</view>
			</view>
			<view class="set">
				<view class="set-te">选择人数（人）</view>
				<view class="set-bt">
					<view class="jian" @click="jian"><u-icon  size="36" name="minus" color="#BBBBBB"></u-icon></view>
					<view class="number">{{number}}</view>
					<view class="jian" @click="add"><u-icon  size="36" name="plus" color="#BBBBBB"></u-icon></view>
				</view>
			</view>
		</view>
		<!-- 支付选择 -->
		<view class="pay-type">
			 <view class="type" @click="paytype(1)">
				 <view class="type-l">
					 <image src="../../static/home/WeChat.png"></image>
					 <view>微信</view>
				 </view>
				 <view class="type-r">
					 <radio value="1" :checked="pay_type==1" style="transform:scale(0.7)"  color="#09BB07"/>
				 </view>
			 </view>
			 <view class="type" @click="paytype(2)">
				 <view class="type-l">
					 <image src="../../static/home/Alipay.png"></image>
					 <view>支付宝</view>
				 </view>
				 <view class="type-r">
					 <radio value="2" :checked="pay_type==2" style="transform:scale(0.7)" color="#09BB07" />
				 </view>
			 </view>
		</view>
		<!-- 协议 -->
		<view class="pay-xy">
			<radio value="" :checked="pay_xy" style="transform:scale(0.7)"  color="#09BB07" @click="payxy"/>
			<view>我已阅读并同意<text style="color: #3287FE;">《支付协议》</text></view>
		</view>
		<!-- 底部支付 -->
		<view class="bottom">
			<view class="bottom-num">
				￥<text style="font-weight: bold;font-size: 40rpx;">0.0</text>
			</view>
			<view class="toPay" @click="Submit">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select:0,
				tmie:[
					{
						nian:2021,
						time:"5月20"
					},{
						nian:2021,
						time:"5月21"
					},{
						nian:2021,
						time:"5月22"
					},{
						nian:2021,
						time:"5月23"
					}
				],
				number:0,
				pay_type:0,//支付方式
				pay_xy:false,//是否同意支付协议
				type:''//支付类型
			}
		},
		onLoad(options) {
			this.type= options.type
		},
		methods: {
			//选择日期
			Select:function(e){
				this.select=e
			},
			//支付选择
			paytype:function(e){
				this.pay_type=e;
			},
			//支付协议
			payxy:function(e){
				
				this.pay_xy=!this.pay_xy;
			},
			//人数减
			jian:function(e){
				let number = this.number;
				if(number<=0){
					uni.showToast({
						title:"预约人数不能少于0" ,
						icon:'none',
						duration: 2000
					})
				}else{
					this.number=number-1
				}
			},
			//人数加
			add:function(e){
				this.number = this.number+1
			},
			//提交订单
			Submit:function(e){
				uni.navigateTo({
					url:"/pages/goodsinfo/gettiket?type=" +this.type
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
	.card{
		width: 96%;
		background: #FFFFFF;
		margin-top: 20rpx;
		border-radius: 20rpx;
		padding: 20rpx 30rpx;
		display: flex;
		flex-direction: column;
	}
	
	.card-tel{
		font-size: 30rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}
	.card-name{
		font-size: 30rpx;
		font-weight: bold;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}
	.card-desc{
		font-size: 28rpx;
		color: #8F8F8F;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
	}
	.card-tmie{
		margin-top: 40rpx;
		font-size: 30rpx;
		font-weight: bold;
	}
	.card-tmei-desc{
		font-size: 28rpx;
		color: #8F8F8F;
		margin-top: 10rpx;
	}
	.tmei-box{
		margin-top: 20rpx;
	}
	.tmei{
		float: left;
		width: 150rpx;
		margin-left: 10rpx;
		height: 120rpx;
		border: 1rpx solid #BBBBBB;
		background: #FAFAFA;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 26rpx;
	}
	.tmei>view{
		margin-top: 5rpx;
	}
	.active{
		background: #01B08D;
		border: 0rpx solid #BBBBBB;
		color: #FFFFFF;
	}
	.set{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	.set-te{
		font-size: 30rpx;
		font-weight: bold;
	}
	.set-bt{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	.set-bt>view{
		margin-right: 20rpx;
	}
	.set-bt>.jian{
		height: 60rpx;
		width: 70rpx;
		background: #FAFAFA;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.number{
		height: 60rpx;
		padding: 0rpx 40rpx;
		background: #F1F2F4;
		text-align: center;
		line-height: 60rpx;
		font-size: 30rpx;
		border-radius: 10rpx;
	}
	/* 支付选择 */
	.pay-type{
		width: 96%;
		background: #FFFFFF;
		border-radius: 15rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 20rpx;
		padding: 20rpx 32rpx;
	}
	.type{
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.type-l{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
	}
	.type-l>image{
		width: 55rpx;
		height: 55rpx;
	}
	.type-l>view{
		margin-left: 10rpx;
		font-size: 36rpx;
		font-weight: bold;
	}
	/* 协议 */
	.pay-xy{
		margin-top: 20rpx;
		width: 96%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 32rpx;
		font-size: 28rpx;
	}
	/* 底部支付 */
	.bottom{
		width: 100%;
		height: 120rpx;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		background: #FFFFFF;
		z-index: 999999;
		/* -webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
		  -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
		  box-shadow: 0px 0px 10px rgba(0,0,0,.8); */
		  display: flex;
		  flex-direction: row;
		  justify-content: space-between;
		  align-items: center;
		  padding: 20rpx 32rpx;
	}
	.bottom-num{
		font-size: 32rpx;
		
		padding-left: 20rpx;
	}
	.toPay{
		width: 250rpx;
		background: #FF0000;
		border-radius: 40rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		color: #FFFFFF;
		
	}
</style>
