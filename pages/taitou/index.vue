<template>
	<view class="content">
		<view class="list" v-for="item in list">
			<!-- :arrow="false" right-icon="zhuanfa" -->
			<u-cell-item  :title="item.name"  :border-bottom="false"></u-cell-item>
		</view>
		<view class="bottom-bt" @click="add">
			+添加发票抬头
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{}
			}
		},
		onShow() {
		this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('user/inv', {
				}).then(res => {
					this.list = res.list;
				})
			
			},
			add:function(e){
				uni.navigateTo({
					url:"/pages/fapiao_add/index"
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
	.list{
		margin-top: 20rpx;
		width: 96%;
		background: #ffffff;
		border-radius: 10rpx 0 0rpx 10rpx;
		border-right: 8rpx solid #07C160;
		font-size: 32rpx;font-weight: bold;color:#333
	}
	.bottom-bt{
		position: absolute;
		bottom: 50rpx;
		width: 90%;
		height: 80rpx;
		background: #15A03F;
		border-radius: 45rpx;
		color: #FFFFFF;
		line-height: 80rpx;
		text-align: center;
		font-size: 36rpx;
		font-weight: bold;
	}
</style>
