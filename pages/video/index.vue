<template>
	<view class="content">
		<view class="bgimg">
			<!-- <image :src="bgimg" mode="" class="img2"></image> -->
			<video id="myVideo" object-fit="cover" v-if="videoShow && detail.video" :src="detail.video.file_path"
				controls autoplay="true"></video>
		
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
		
			</view>

			
			<view class="richtext">
				<u-parse :html="detail.article_content"></u-parse>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	

				detail: {
					image: {}
				},
				current: 0,
				article_id: 0,
				videoShow:true
			};
		},
		onLoad(option) {
			this.video_id = option.video_id;
			this.getList();
		},
		methods: {

			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			getList: function() {
				this.$requests('column/video', {
					video_id: this.video_id
				}).then(res => {
					this.detail = res.detail;
				})

			},
			onSwiperChange(e) {
				this.current = e.detail.current;
			},
			golist() {
				uni.navigateTo({
					url: "/pages/scenic/musiclist"
				})
			},

		}
	}
</script>

<style lang="scss">
	.bgimg {
		width: 100%;
		height: 600rpx;
		position: relative;

		.img1 {
			position: fixed;
			z-index: 88;
			width: 15rpx;
			height: 27rpx;
			margin-top: 44px;
			margin-left: 40rpx;
		}

		video {
			width: 100%;
			height: 500rpx;
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
		background: white;

		.topbox {
			text-align: center;
			height: 90rpx;
			margin-top: 40rpx;
			padding: 0 50rpx;

		}
	}

	.addname {
		font-size: 40rpx;
		padding-bottom: 10rpx;
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
		margin-top: 60rpx;
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
		// background: #F7F7F7;
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
</style>
