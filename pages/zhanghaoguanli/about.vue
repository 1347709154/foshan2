<template>
	<view class="content">
			<p>{{detail.service}}</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				detail:{}
			}
		},
		onLoad() {
		this.getList();
		},
		methods: {
		getList: function() {
				this.$requests('page/about', {
				}).then(res => {
					this.detail = res.setting;
				})
			
			},
		}
	}
</script>


<style>
	/* page{
		background: #F2F5FA;
	} */
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx;
	}
	/* .box{
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
	} */
	
</style>
