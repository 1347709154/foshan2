<template>
	<view class="content">
		<view class="list-item" v-for="item in musiclist">
			<image src="../../static/scenic/music2.png" mode="" class="left icon1"></image>
			<view class="musicinfo left">
				<view class="topname" v-if="item.image">
					{{item.image.old_name}}
				</view>
				<view class="size" v-if="item.image">
					大小:{{item.image.file_size}}
				</view>
			</view>
			<image src="../../static/scenic/xiazai.png" mode="" class="right xiazai"
				@click="Download(item.image.file_path)"></image>
			<image src="../../static/scenic/iscol.png" mode="" class="right iscol" v-if="item.iscol==1"></image>
			<image src="../../static/food/col.png" mode="" v-else-if="item.iscol==0" class="col right"></image>
			<image src="../../static/scenic/play.png" mode="" class="right play"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				musiclist: {
					image: {}
				}
			};
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('column/mp3List', {}).then(res => {
					this.musiclist = res.list;
				})

			},
			Download: function(e) {
				var src =e;
				var iframe = document.createElement('iframe');
				iframe.style.display = 'none';
				iframe.src = "javascript: '<script>location.href=\"" + src + "\"<\/script>'";
				document.getElementsByTagName('body')[0].appendChild(iframe);
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #f1f1f1;
	}

	.list-item {
		width: 686rpx;
		margin: auto;
		height: 86rpx;
		border-bottom: 1px solid #D9D9D9;
	}

	.icon1 {
		width: 40rpx;
		height: 40rpx;
		margin-top: 25rpx;
	}

	.musicinfo {
		width: auto;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		height: 100%;
		margin-left: 7px;
	}

	.topname {
		margin-top: 5px;
	}

	.size {
		// margin-top: 5px;
		font-size: 10px;
		color: #9B9B9B;
	}

	.xiazai {
		width: 28rpx;
		height: 25rpx;
		margin-top: 30rpx;
	}

	.iscol,
	.col {
		width: 32rpx;
		height: 30rpx;
		margin-top: 30rpx;
		margin-right: 28rpx;
	}

	.play {
		width: 32rpx;
		height: 31rpx;
		margin-top: 30rpx;
		margin-right: 28rpx;
	}
</style>
