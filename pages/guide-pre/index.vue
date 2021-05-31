<template>
	<view class="content">
		<view class="list" v-for="(item,index) in list" @click="details(item.guide_id)">
			<image :src="item.image.file_path" mode="aspectFit" class="list-img"></image>
			<view class="list-user">
				<view style="font-size: 28rpx; font-weight: bold;">{{item.name}}</view>
				<view class="list-user-ul">{{item.specialty}}</view>
				<view class="tag-box">
					<view style="margin-bottom: 10rpx;">关键词</view>
					<view class="tags">
						<view>
							<u-tag :text="tag" v-if="idx<=1" type="success" size="30" v-for="(tag,idx) in item.tags"
								class="tag" />
						</view>
						<view class="tags-bt">预约</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list: {}
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('page/guideList', {

				}).then(res => {
					this.list = res.list;
				})

			},
			//跳转详情
			details: function(e) {
				uni.navigateTo({
					url: "/pages/guide-pre/details?guide_id="+e
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.list {
		width: 100%;
		border-bottom: 1rpx solid #ddd;
		padding: 30rpx;
		display: flex;
		flex-direction: row;
	}

	.list-img {
		width: 320rpx;
		height: 240rpx;
		border-radius: 20rpx;
	}

	.list-user {
		height: 240rpx;
		display: flex;
		flex-direction: column;
		margin-left: 20rpx;
	}

	.list-user>view {
		margin-bottom: 15rpx;
		font-size: 28rpx;
		color: #353535;
	}

	.tag-box {
		display: flex;
		flex-direction: column;

	}

	.tags {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.tag {
		margin-right: 10rpx;
		font-size: 22rpx;
		padding: 4rpx;
	}

	.tags-bt {
		width: 90rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 22rpx;
		color: #FFFFFF;
		background: #E50505;
		border-radius: 15rpx;
	}
</style>
