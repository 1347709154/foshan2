<template>
	<view class="content">
		<view class="home-banner">
			<swiper class="swiper" circular autoplay interval="5000" >
				<swiper-item class="item" v-for="(item, index) in detail.image" :key="index">
					<image class="pic" :class="{current: current === index}" :src="item.file_path"
						mode="aspectFill" ></image>
				</swiper-item>
			</swiper>
		
		</view>
		<view class="btns">
			<view class="name left">
				{{detail.article_title}}
			</view>
			<view class="right btnbox">
				<!-- 需要判断是否已经收藏 -->
				<image src="../../static/food/share.png" mode="" class="topimg"></image>
				<view class="bottomtxt">
					分享
				</view>
			</view>
			<view class="right btnbox" @click="Collect">
			<image v-if="detail.is_collect" src="../../static/user/shoucang.png" mode="" class="topimg">
			</image>
			<image v-else src="../../static/food/col.png" mode="" class="topimg"></image>
			<view class="bottomtxt">
				收藏
			</view>
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
				this.$requests('page/food', {
					article_id: this.article_id
				}).then(res => {
					this.detail = res.detail;
					uni.setNavigationBarTitle({
						title: res.detail.article_title
					})
				})

			},
			Collect: function() {
				this.$requests('user/collect', {
					article_id: this.article_id,
					type:4
				}).then(res => {
					this.getList();
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
		height: 106rpx;
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
