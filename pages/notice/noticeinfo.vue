<template>
	<view class="content">
		<view class="title">
			{{detail.title}}
		</view>
		<view class="text">
			<u-parse :html="detail.content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {},
			}
		},
		onLoad(option) {
			this.notice_id = option.notice_id;
			this.getList()
		
		},
		methods: {
			getList: function() {
				this.$requests('article/notice', {
					notice_id: this.notice_id
				}).then(res => {
					this.detail = res.detail;
					uni.setNavigationBarTitle({
						title: res.detail.title
					})
				})

			},
		}
	}
</script>

<style lang="scss">
	.title {
		font-size: 22px;
		margin-top: 76rpx;
	}

	.text {
		padding: 0 35rpx;
		margin-top: 56rpx;
	}
</style>
