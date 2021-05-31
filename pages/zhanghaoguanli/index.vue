<template>
	<view class="content">
		<view class="box">
			<u-cell-item  title="分享" @click="faxing" ></u-cell-item>
			<u-cell-item  title="关于我们" @click="about" ></u-cell-item>
			<u-cell-item  title="隐私政策" @click="privacy" ></u-cell-item>
			<u-cell-item  title="用户协议" @click="agreement" :border-bottom="false"></u-cell-item>
			
			<!-- <u-field  type="text"   label="发票记录" :disabled="true" @click="fapiaojilu"></u-field>
			<u-field  type="text"   label="发票抬头" :disabled="true" @tap="taitou"></u-field> -->
		</view>
		<view class="Submit">退出登录</view>
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
			//关于我们
			about:function(e){
				uni.navigateTo({
					url:"/pages/zhanghaoguanli/about"
				})
			},
			// 隐私政策privacy
			privacy:function(e){
				uni.navigateTo({
					url:"/pages/zhanghaoguanli/privacy"
				})
			},
			//用户协议
			agreement:function(e){
				uni.navigateTo({
					url:"/pages/zhanghaoguanli/agreement"
				})
			},
			faxing(){
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角分享',
					showCancel:false,
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
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
	.box{
		background: #ffffff;
		width: 96%;
		margin-top: 30rpx;
		border-radius: 15rpx;
		padding: 20rpx 32rpx;
	}
	.Submit{
		width: 80%;
		background: #15A03F;
		font-size: 32rpx;
		color: #ffffff;
		border-radius: 25rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		margin-top: 300rpx;
	}
	
</style>
