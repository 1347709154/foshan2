<template>
	<view class="content">
		<!-- 收藏列表 -->
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
				title: 'Hello',
				list:{
					image:{}
				},
			}
		},
		onLoad() {
		this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('user/collectList', {}).then(res => {
					this.list = res.list
				})

			},
			ToDetail(e){
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style>
	page {
		background: #F2F6F7;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
		.title{
			margin-top: 25rpx;font-size: 34rpx;font-weight: bold;
		}
	.list {
		width: 94%;
		margin-top: 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 25rpx 15rpx;
		display: flex;
		flex-direction: row;
	}

	.list-l {
		width: 68%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		text-overflow: ellipsis;
		/* white-space: nowrap; */
		margin-right: 10rpx;
	}

	.list-r {
		width: 30%;
		text-align: right;
	}

	.list-r>image {
		width: 210rpx;
		height: 200rpx;
		border-radius: 15rpx;
	}
</style>
