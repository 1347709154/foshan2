<template>
	<view class="content">
		<view class="box">
			<u-cell-item  title="发票记录" @click="fapiaojilu" ></u-cell-item>
			<u-cell-item  title="发票抬头" @click="taitou" :border-bottom="false"></u-cell-item>
			<!-- <u-field  type="text"   label="发票记录" :disabled="true" @click="fapiaojilu"></u-field>
			<u-field  type="text"   label="发票抬头" :disabled="true" @tap="taitou"></u-field> -->
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
			// 发票记录
			fapiaojilu:function(e){
				uni.navigateTo({
					url:"../fapiaojilu/index"
				})
			},
			//抬头发票
			taitou:function(e){
				uni.navigateTo({
					url:"/pages/taitou/index"
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
	.box{
		background: #ffffff;
		width: 96%;
		margin-top: 30rpx;
		border-radius: 15rpx;
		padding: 20rpx 32rpx;
	}

</style>
