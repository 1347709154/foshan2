<template>
	<view class="content">
		<view class="item-list" v-for="item in listdata" @tap="goinfo(item.live_id)">
			<view class="title">
				{{item.title}}
			</view>
			<view class="bottom">
				<view class="left time">
					{{item.create_time}}
				</view>
				<view class="right addr">
					{{item.admin}}
				</view>
			</view>
		</view>
		<!-- <u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" /> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listdata:[],
				list: 1,
				page: 0,
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				}
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('article/liveList', {
				}).then(res => {
					this.listdata = res.list;
				})
			
			},
			goinfo(e){
				uni.navigateTo({
					url:"./live?live_id="+e
				})
			}
		},
		onReachBottom() {
			if (this.page >= 3) return;
			this.status = 'loading';
			this.page = this.page+1;
			setTimeout(() => {
				// this.list += 1;
				if (this.page >= 3) this.status = 'nomore';
				else this.status = 'loading';
			}, 2000)
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F5F3F3;
	}

	.item-list {
		width: 100%;
		padding: 0px 38rpx;
		height: 188rpx;
		margin-top: 9rpx;
		background: #FFFFFF;
	}
	.title{
		font-size: 18px;
		font-weight: 600;
		margin-top: 38rpx;
	}
	.bottom{
		margin-top: 60rpx;
		font-size: 12px;
		color: #686666;
	}
</style>
