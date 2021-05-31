<template>
	<view class="content">
		<view class="card" v-for="(item,index) in list" @click="ToDetail(item.article_id)">
			<image :src="item.image.file_path" mode="aspectFill"></image>
			<view>{{item.article_title}}</view>
		</view>
		
		<view class="null">没有更多了~</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{}
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('page/customList', {}).then(res => {
					this.list = res.list;
				})

			},
			ToDetail: function(e) {
				uni.navigateTo({
					url: "./detail?article_id=" + e
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

	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		width: 96%;
		border-radius: 5px;
		padding-bottom: 30rpx;
		margin-bottom: 30rpx;
	}

	.card>image {
		width: 100%;
		height: 400rpx;
		border-radius: 5px 5px 0rpx 0rpx;
	}

	.card>view {
		padding-left: 32rpx;
		margin-top: 20rpx;
		font-size: 32rpx;
		font-weight: bold;
	}

	.null {
		margin-top: 30rpx;
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		color: #575757;
	}
</style>
