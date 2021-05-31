<template>
	<view class="content">
		<view class="list-item" v-for="item in list" :style="{backgroundImage: 'url('+item.image.file_path+')'}"
			@tap="golink(item.url)">
			<view class="centerbox">
				{{item.title}}
			</view>
		</view>
		<!--  拼接渐变背景 -->
		<!-- <view class="list-item" v-for="item in menulist" :style="{backgroundImage:'linear-gradient('+color[0]+','+color[1]+')'}">
			fss
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: {},
			};
		},
		onLoad() {
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('column/index', {}).then(res => {
					this.list = res.list;
				})

			},
			golink(url) {
				uni.navigateTo({
					url: './'+url
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		margin-bottom: 40rpx;
	}
	.list-item {
		width: 721rpx;
		height: 250rpx;
		border-radius: 15rpx;
		margin-top: 13rpx;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
	}

	.centerbox {
		width: 358rpx;
		height: 61rpx;
		// background: rgba(0, 0, 0, 0.32);
		// border: 1px solid #FFFFFF;
		border-bottom: 1px solid #FFFFFF;
		border-top: 1px solid #FFFFFF;
		box-sizing: border-box;
		border-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFFFFF 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
		border-image: -moz-linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFFFFF 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
		border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFFFFF 20%, rgba(255, 255, 255, 0.00) 99%) 2 2 2 2;
		background: radial-gradient(rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.1));
		border-radius: 9rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		line-height: 61rpx;
		color: #FFFFFF;
		font-size: 36rpx;
	}
</style>
