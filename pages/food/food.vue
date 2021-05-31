<template>
	<view class="content">
		<view class="list_item" v-for="item in list" @tap="goinfo(item.article_id)">
			
			<image :src="item.image[0].file_path" mode="aspectFill" class="topimg"></image>
			<view class="text">
				{{item.article_title}}
			</view>
			<!-- <image src="../../images/bbb.png" mode=""></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:{}
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('page/foodList', {
				}).then(res => {
					this.list = res.list;
				})
			
			},
			goinfo(e){
				uni.navigateTo({
					url:"./foodinfo?article_id="+e
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F5F3F3;
	}
	.list_item{
		width: 726rpx;
		height: 405rpx;
		margin-top: 16rpx;
		background: #FFFFFF;
		border-radius: 6px;
	}
	.topimg{
		width: 726rpx;
		height: 342rpx;
		border-radius: 0;
	}
	.text{
		margin-left: 20rpx;
		color: #000000;
		font-weight: 600;
	}
</style>
