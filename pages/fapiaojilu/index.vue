<template>
	<view class="content">
		<!-- v-if="{{list}}" -->
		<view  class="null">
			<image src="../../static/user/fapiao_null.png" mode="scaleToFill"></image>
			<view>暂无开票记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list:[]
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
	.null{
		margin-top: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.null>image{
		width: 400rpx;
		height: 400rpx;
	}
	.null>view{
		font-size: 32rpx;
		font-weight: bold;
		color: #363535;
		margin-top: 30rpx;
		font-family: SimHei;
	}
</style>
