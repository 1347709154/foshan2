<template>
	<view class="content">

		<view class="list-item" v-for="(item,index) in musiclist">
			<image src="../../static/scenic/music2.png" mode="" class="left icon1"></image>
			<view class="musicinfo left">
				<view class="topname" v-if="item.image">
					{{item.image.old_name}}
				</view>
				<view class="size" v-if="item.image">
					大小:{{item.image.file_size}}
				</view>
			</view>
			<image src="../../static/scenic/xiazai.png" mode="" class="right xiazai" @click="Download(item.image.file_path)"></image>
			<image src="../../static/scenic/iscol.png" mode="" class="right iscol" v-if="item.iscol==1"></image>
			<image src="../../static/food/col.png" mode="" v-else-if="item.iscol==0" class="col right"></image>
			<image src="../../static/scenic/play.png" mode="" class="right play" @click="play(index)" v-if="item.play==false"></image>
			<img src="../../static/WechatIMG68.png"class="right play" alt="" v-else-if="item.play==true" @click="close(index)">
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				musiclist: {
					image: {}
				},
				url: '',
				name: '',
				size: '',
				show: false,
				innerAudioContext: ''
			};
		},
		onHide() {
			this.close()
		},
		destroyed() {
			this.close()
		},
		onLoad() {
			this.getList()
		},
		methods: {
			play(i) {
				for (var j=0;j<this.musiclist.length;j++) {
					this.$set(this.musiclist[j],'play',false)
				}
				this.$set(this.musiclist[i],'play',true)
				if (this.innerAudioContext) {
					this.innerAudioContext.destroy();
				}
				this.innerAudioContext = uni.createInnerAudioContext()
				this.innerAudioContext.autoplay = true;
				this.innerAudioContext.src = this.musiclist[i].image.file_path;
				this.innerAudioContext.onPlay(() => {
					console.log('开始播放');
				});
			},
			close(i) {
				var that=this
				if (that.innerAudioContext) {
					that.innerAudioContext.stop();
				}
				that.$set(that.musiclist[i],'play',false)
			},
			getList: function() {
				this.$requests('column/mp3List', {}).then(res => {
					this.musiclist = res.list;
					for (var i=0;i<this.musiclist.length;i++) {
						this.$set(this.musiclist[i],'play',false)
					}
				})

			},
			Download: function(e) {
				console.log(e)
				uni.downloadFile({
					url:e,
					success:function  (res) {
					
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #f1f1f1;
	}

	.content {
		min-height: 1000rpx;
		display: block;
		position: relative;
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

	.audiobox {
		margin: auto;
		position: fixed;
		left: 50%;
		bottom: 150rpx;
		transform: translateX(-50%);
		z-index: 99;
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
