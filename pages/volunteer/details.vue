<template>
	<view class="content">
		<!-- 志愿者信息 -->
		<view class="user-box">
			<view class="user-img">
				<image :src="detail.image.file_path" mode="aspectFill"></image>
			</view>
			<view class="user-xinxi">
				<view style="font-size: 28rpx;font-weight: bold;margin-bottom: 10rpx;">{{detail.name}}</view>
				<view class="user-li">服务地区：{{detail.service_addr}}</view>
				<view class="user-li">服务领域：{{detail.service_area}}</view>
				<view class="user-li">特长能力：{{detail.specialty}}</view>
				<view class="user-li">行业领域：{{detail.industry}}</view>
			</view>
		</view>
		<!-- 分割线 -->
		<view class="lin"></view>
		<!-- 任务介绍 -->
		<view class="body">
			<view class="jiesao">人物简介</view>
			<view class="user-desc">
				{{detail.content}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				user_id: 0,
				detail:{}
			}
		},
		onLoad(option) {
			this.user_id = option.user_id;
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('volunteer/detail', {
					user_id: this.user_id
				}).then(res => {
					this.detail = res.detail;
				})

			},
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

	/* 志愿者信息 */
	.user-box {
		width: 94%;
		display: flex;
		flex-direction: row;
	}

	.user-img {
		width: 184rpx;
		height:254rpx;
	}

	.user-img>image {
		width: 100%;
		height: 100%;
	}

	.user-xinxi {
		margin-left: 15rpx;
		display: flex;
		flex-direction: column;

	}

	.user-li {
		margin-top: 15rpx;
		font-size: 28rpx;
		color: #858585;
	}

	/* 分割线 */
	.lin {
		width: 100%;
		height: 15rpx;
		background: #EEEEEE;
		margin-top: 30rpx;
	}

	/* 任务介绍 */
	.body {
		width: 94%;
	}

	.jiesao {
		color: #15942D;
		margin-top: 30rpx;
		font-size: 32rpx;
		font-weight: bold;
	}

	.user-desc {
		font-size: 28rpx;
		color: #060606;
		margin-top: 40rpx;
	}
</style>
