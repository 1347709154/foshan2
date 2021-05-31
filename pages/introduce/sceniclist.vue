<template>
	<view class="content">
		<view class="box">
			<view class="listxitem" v-for="item in list" @click="ToDetail(item.article_id)">
				<view class="topimg">
					<image :src="item.image[0].file_path" mode="aspectFill"></image>
				</view>
				<view class="text">
					{{item.article_title}}
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: {}
			};
		},
		onLoad() {
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('column/lists', {
					column_id: 3,
					key: this.key
				}).then(res => {
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

<style lang="scss">
	.box {
		padding: 0 20rpx;
		display: flex;
		width: 100%;
		// min-height: 800rpx;
		height: auto;
		justify-content: space-between;
		flex-wrap: wrap;

	}

	.listxitem {
		margin-top: 20rpx;
		width: 350rpx;
		height: 350rpx;
	}

	.topimg {
		width: 350rpx;
		height: 280rpx;

		image {
			width: 350rpx;
			height: 280rpx;
			border-radius: 18rpx;
		}
	}

	.text {
		margin-top: 20rpx;
	}
</style>
