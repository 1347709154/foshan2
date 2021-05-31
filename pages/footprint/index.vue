<template>
	<view class="content">
		<!-- 顶部导航 -->
		<view class="top" @click="fanhui">
			<view class="top-inc">
				<u-icon name="arrow-left" color="#2A2A2A" size="40"></u-icon>
			</view>
			<view class="top-tetel">我的足迹</view>
			<view class="top-bt" @click="Clecn"><view>清空记录</view></view>
		</view>
		<!-- 足迹列表 -->
		<view class="list" v-for="item in list" v-if="item.image" @click="ToDetail(item.url)">
			<view class="list-l">
				<view class="title" v-if="item.type==5">{{item.image.goods_name}}</view>
				<view class="title" v-else>{{item.image.article_title}}</view>
				
			</view>
			<view class="list-r">
				<image :src="item.image.image[0].file_path" mode="scaleToFill"></image>
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{
					image:{}
				},
			}
		},
		onLoad() {
		this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('user/browseList', {}).then(res => {
					this.list = res.list
				})
			
			},	
			Clecn: function() {
				this.$requests('user/clearBrowse', {}).then(res => {
					this.getList();
				})
			
			},
			ToDetail(e){
				uni.navigateTo({
					url:e
				})
			},
			
			// 返回
			fanhui:function(e){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page{
		background: #F2F6F7;
	}
	.title{
		margin-top: 25rpx;font-size: 34rpx;font-weight: bold;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	/* 顶部导航 */
	.top{
		width: 100%;
		height: 100rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.top-inc{
		position: absolute;
		left: 32rpx;
		line-height: 100rpx;
	}
	.top-tetel{
		
		line-height: 120rpx;
		font-size: 38rpx;
		color: #070707;
		
	}
	.top-bt{
		position: absolute;
		right: 32rpx;
	}
	.top-bt>view{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 150rpx;
		height: 50rpx;
		text-align: center;
		line-height: 40rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		background: #15A03F;
		border-radius: 10rpx;
	}
	/* 足迹列表 */
	.list{
		width: 94%;
		margin-top: 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 25rpx 15rpx;
		display: flex;
		flex-direction: row;
	}
	.list-l{
		width: 68%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-overflow:ellipsis;
		margin-right: 10rpx;
	}
	.list-r{
		width: 30%;
		text-align: right;
	}
	.list-r>image{
		width: 210rpx;
		height: 200rpx;
		border-radius: 15rpx;
	}
</style>
