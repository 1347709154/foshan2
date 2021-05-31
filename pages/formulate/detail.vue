<template>
	<view class="content">

		<view class="btns">
			<view class="name left">
				{{detail.article_title}}
			</view>
		
		</view>
		<view class="textarea">
			<u-parse :html="detail.article_content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:0,
			detail:{
				image:{}
			}
			}
		},
		onLoad(option) {
			this.article_id = option.article_id;
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('page/custom', {
					article_id: this.article_id
				}).then(res => {
					this.detail = res.detail;
					uni.setNavigationBarTitle({
						title: res.detail.article_title
					})
				})

			},
		},
		}
</script>

<style lang="scss">
	.img {
		width: 750rpx;
		height: 525rpx;
	}
	.home-banner {
		width: 100%;
		height: 525rpx;
	}
	.home-banner swiper{
		width: 100%;
		height: 525rpx;
	}
	.home-banner swiper image{
	width: 100%;
	height: 100%;
	position: absolute;
	}
	.btns {
		width: 670rpx;
		border-bottom: 1px solid #e5e5e5;
		height: auto;
	}

	.name {
		line-height: 106rpx;
		font-weight: 600;
	}

	.topimg {
		width: 30rpx;
		height: 30rpx;
	}

	.btnbox {
		margin-top: 25rpx;
		width: 55rpx;
		text-align: center;
		font-size: 12px;
	}

	.btnbox:last-of-type {
		margin-right: 69rpx;
	}

	.textarea {
		width: 670rpx;
		height: auto;
		margin-top: 27rpx;
	}
</style>
