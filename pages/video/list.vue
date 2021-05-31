<template>
	<view class="content">

		
		<view class="listitem" v-for="item in list" @click="ToDetail(item.article_id)">
			<view class="topimg">
				<image :src="item.image.file_path" mode="aspectFill" class="timg"></image>
				<image src="../../static/home/baofang.png" class="bf"></image>
			</view>
			<p class="title">{{item.article_title}}</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: false,
				list:{},
				key:''
			};
		},
		onLoad() {
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('column/videoList', {}).then(res => {
					this.list = res.list;
				})
			
			},
			ToDetail: function(e) {
				uni.navigateTo({
					url: "./index?video_id="+e
				})
			},
			search() {
				this.key=this.value;
				this.getList()
			},
		
		}
	}
</script>

<style lang="scss">
	page {
		background: #F1F1F1;
	}
	.bf {
		display: inline-block;
		position: relative;
    top: -72%;
    left: 42%;
		width: 100rpx;
		height: 100rpx;
		z-index: 999;
		/* opacity: 0.5; */
	}
	.searchbox {
		height: 62rpx;
		margin-top: 17rpx;
		width: 100%;
	}

	.input {
		width: 579rpx;
		height: 62rpx;
		line-height: 62rpx;
		background: #FFFFFF;
		border-radius: 2rpx;
		margin-left: 8rpx;

		.search {
			width: 500rpx;
			text-align: center;
		}
	}

	.srarchicon {
		width: 34rpx;
		height: 33rpx;
		margin-top: 15rpx;
		margin-right: 25rpx;
	}

	.filtrate {
		height: 62rpx;
		width: 100rpx;
		margin-right: 30rpx;

		.text {
			line-height: 62rpx;
			color: #5AA9FB;
			font-size: 26rpx;
		}

		.loudou {
			width: 32rpx;
			height: 32rpx;
			margin-top: 15rpx;
		}
	}
	.listitem{
		width: 739rpx;
		height: 454rpx;
		background: #FFFFFF;
		border-radius: 7rpx;
		margin-top: 9rpx;
		
	}
	.topimg{
		position: relative;
		margin-top: 13rpx;
		width: 739rpx;
		height: 351rpx;
		border-radius: 12rpx;
		.timg{
			width: 739rpx;
			height: 351rpx;
			border-radius: 12rpx;
		}
	}
	.title{
		font-size: 28rpx;
		color: #060606;
		margin-top: 30rpx;
		padding-left: 23rpx;
	}
	.readnum{
		width: 229rpx;
		height: 47rpx;
		background: #000000;
		opacity: 0.74;
		border-radius: 12rpx;
		position: absolute;
		left: 0;
		line-height: 47rpx;
		bottom: 9rpx;
		color: #FFFFFF;
		font-size: 24rpx;
	}
	.eye{
		width: 22rpx;
		height: 14rpx;
		margin-left: 17rpx;
		margin-top: 18rpx;
		margin-right: 12rpx;
	}
	.box{
		width: 100%;
		height: auto;
		display: flex;
		font-size: 20rpx;
		text-align: center;
		flex-wrap: wrap;
	}
	.checkd{
		width: 100rpx;
		height: 60rpx;
		background: red;
		color: white;
		margin: 10rpx;
		border-radius: 10rpx;
		line-height: 60rpx;
	}
	.check{
		width: 100rpx;
		height: 60rpx;
		background: #F1F1F1;
		color: black;
		margin: 10rpx;
		border-radius: 10rpx;
		line-height: 60rpx;
	}
	
</style>
