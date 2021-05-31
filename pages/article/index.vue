<template>
	<view class="content">
		<view class="bgimg">
			<image src="../../static/scenic/jiantou.png" mode="" class="img1" @tap="back"></image>
			<view class="home-banner">
				<swiper class="swiper" circular autoplay interval="5000" @change="onSwiperChange">
					<swiper-item class="item" v-for="(item, index) in detail.image" :key="index">
						<image class="pic" :class="{current: current === index}" :src="item.file_path"
							mode="aspectFill"></image>
					</swiper-item>
				</swiper>

			</view>
			<view class="musiclist">
				<image src="../../static/scenic/music.png" mode="" class="left music"></image>
				<view class="left keywords">
					<span>{{mp3.title}}</span>
				</view>
				<view class="listbtn right" @tap="golist">
					列表
				</view>
			</view>
		</view>
		<view class="mainbox">
			<view class="topbox">
				<view class="left addr">
					<view class="addname">
						{{detail.article_title}}
					</view>
					<view class="loction">
						{{detail.article_subtitle}}
					</view>
				</view>
				<view class="right btns">
					<view class="left" @click="Collect()">
						<image v-if="detail.is_collect" src="../../static/user/shoucang.png" mode="" class="btnimg">
						<image v-else src="../../static/food/col.png" mode="" class="btnimg"></image>
						<view class="">
							收藏
						</view>
					</view>
					<view class="right">
						<image src="../../static/food/share.png" mode="" class="btnimg"></image>
						<view class="">
							分享
						</view>
					</view>
				</view>
			</view>
			<view class="explain">
				<view class="left text">
					景区讲解
				</view>
				<view class="right voicebox">
					<image src="../../static/scenic/mic.png" mode="" class="mic left"></image>
					
					
					<view class="jbox left">
						<x-adudio-play v-if="url" :url='url' startImg="../../static/zanting.png" endImg="../../static/bofang.png"></x-adudio-play>
					</view>
					<span class="left jiangtitle">
						{{detail.audio.old_name}}
					</span>
				</view>
			</view>
			<view class="title">
				<view class="line left">

				</view>
				<view class="a left">
					详情
				</view>
			</view>
			<view class="richtext">
				<u-parse :html="detail.article_content"></u-parse>
			</view>
		</view>
		<view class="yd" @click="subscribe(detail)">立即预定</view>
	</view>
</template>

<script>
	import xAdudioPlay from '@/components/x-audio-play/x-audio-play.vue'
	 
	export default {
		components: {xAdudioPlay},
		data() {
			return {
				bgimg: '../../static/scenic/gou.jpeg',
				geshou: '林俊杰',
				keywords: '这是一个关键词开发商大方身份卡升级',
				current: 0,
				detail: {},
				mp3: {},
				url:''
			};
		},
		onHide() {
			 uni.$emit('stop')
		},
		onLoad(option) {
			this.article_id = option.article_id;
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('article/detail', {
					article_id: this.article_id
				}).then(res => {
					this.detail = res.detail;
					this.mp3 = res.mp3;
					this.url=res.detail.audio.file_path
					uni.setNavigationBarTitle({
						title: res.detail.article_title
					})
				})

			},
			
			Collect: function() {
				this.$requests('user/collect', {
					article_id: this.article_id,
					type:7
				}).then(res => {
					this.getList();
				})
			
			},
			onSwiperChange(e) {
				this.current = e.detail.current;
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			golist() {

				uni.navigateTo({
					url: "/pages/scenic/musiclist"
				})
			},
			//跳转预约确定
			subscribe: function(e) {
				uni.navigateTo({
					url: "./createOrder?article_id="+e.article_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.bgimg {
		width: 100%;
		height: 746rpx;
		position: relative;

		.img1 {
			position: fixed;
			z-index: 88;
			width: 15rpx;
			height: 27rpx;
			margin-top: 44px;
			margin-left: 40rpx;
		}

		.img2 {
			width: 100%;
			height: 100%;
			position: absolute;
		}
	}

	.home-banner swiper {
		width: 100%;
		height: 746rpx;
	}

	.home-banner swiper image {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.musiclist {
		line-height: 48rpx;
		height: 48rpx;
		background: rgba(10, 0, 0, 0.53);
		width: 100%;
		// opacity: 0.5;
		position: absolute;
		padding: 0 34rpx;
		bottom: 113rpx;

		.music {
			width: 38rpx;
			height: 39rpx;
			margin-top: 4rpx;
			z-index: 30;
		}

		.listbtn {
			height: 100%;
			width: 93rpx;
			border-radius: 7rpx;
			background: rgba(134, 133, 133, 0.69);
			// opacity: 0.7;
			text-align: center;
			color: white;
		}

		.keywords {
			color: white;
			width: 400rpx;
			margin-left: 18rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;

			span {
				// display: inline-block;
				margin-right: 20rpx;
			}
		}
	}

	.mainbox {
		width: 100%;
		min-height: 400rpx;
		height: auto;
		margin-top: -90rpx;
		z-index: 1000;
		border-top-left-radius: 50rpx;
		border-top-right-radius: 50rpx;
		margin-bottom: 120rpx;
		background: white;

		.topbox {
			height: 90rpx;
			margin-top: 40rpx;
			padding: 0 50rpx;

		}
	}

	.addname {
		font-size: 22px;
	}

	.loction {
		color: #656363;
		font-size: 13px;
	}

	.btnimg {
		width: 30rpx;
		height: 30rpx;
	}

	.btns {
		width: 150rpx;
		font-size: 12px;
		text-align: center;
	}

	.explain {
		width: 663rpx;
		margin: auto;
		height: 76rpx;
		line-height: 56rpx;
		margin-top: 30rpx;
		border-bottom: 2px solid #E5E5E5;
	}

	.voicebox {
		width: 533rpx;
		background: #F7F7F7;
		border-radius: 11px;
		height: 56rpx;

		.mic {
			width: 20rpx;
			height: 28rpx;
			margin-top: 15rpx;
			margin-left: 19rpx;
		}
	}

	.title {
		width: 663rpx;
		margin: auto;
		height: 33rpx;
		margin-top: 18rpx;

		.a {
			margin-left: 10rpx;
		}
	}

	.line {
		width: 6rpx;
		height: 33rpx;
		background: #09BB07;
	}

	.richtext {
		min-height: 500rpx;
		height: auto;
		width: 718rpx;
		margin: auto;
		background: #F7F7F7;
		margin-top: 27rpx;
		border-radius: 16px;
	}

	.yd {
		width: 100%;
		height: 100rpx;
		background: #00972E;
		text-align: center;
		line-height: 100rpx;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		z-index: 99999;
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
	}
	.jbox{
		height: 100%;
	}
	.jiangtitle{
		width: 350rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
