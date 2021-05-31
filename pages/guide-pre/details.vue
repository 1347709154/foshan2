<template>
	<view class="content">
		<!-- 人物信息 -->
		<view class="top-card">
			<image :src="detail.image.file_path" mode="aspectFill"></image>
			<view class="card-r">
				<view>{{detail.name}}</view>
				<view>102人已预约 | 从业{{detail.job}}年 </view>
				<view>
					<block v-for="(item,index) in detail.tags">{{item}}·</block>
				</view>
			</view>
		</view>
		<!-- 任务介绍 -->
		<view class="desc">
			<view class="shanchang">
				<text style="font-weight: bold;">擅长：</text>
				{{detail.specialty}}
			</view>
			<view class="shanchang">
				<text style="font-weight: bold;">介绍：</text>
				{{detail.content}}
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="bottom">
			<view class="bottom-l">
				<view class="bottom-x">
					<view @click="Collect()">
						<image v-if="detail.is_collect" src="../../static/user/shoucang.png" mode="aspectFit" >
						<image v-else src="../../static/home/dianzan.png"></image>
						<view>收藏</view>
					</view>
					<view @click="Kf">
						<image src="../../static/home/kefu.png"></image>
						<view>客服</view>
					</view>
				</view>
			</view>
			<view class="bottom-r">
				<view class="fenxiang">
					<view style="margin-right: 5rpx;">分享</view>
					<u-icon size="45" name="share"></u-icon>
				</view>
				<view class="yy" @click="topay">
					<view>预约</view>
				</view>
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
				guide_id: 0
			}
		},
		onLoad(option) {
			this.guide_id = option.guide_id;
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('page/guide', {
					guide_id: this.guide_id
				}).then(res => {
					this.detail = res.detail;
				})

			},
			Kf() {
				uni.navigateTo({
					url: '../my/kefu'
				})
			},
			Collect: function() {
				this.$requests('user/collect', {
					article_id: this.guide_id,
					type:6
				}).then(res => {
					this.getList();
				})
			
			},
			//跳转支付
			topay: function(e) {
				uni.navigateTo({
					url: "./createOrder?guide_id="+this.guide_id
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

	/* 人物信息 */
	.top-card {
		background: url('../../static/banner.jpg');
		background-size: 100% 100%;
		width: 100%;
		height: 300rpx;
		padding: 30rpx;
		display: flex;
		flex-direction: row;
	}

	.top-card>image {
		width: 180rpx;
		height: 180rpx;
		border-radius: 50%;
	}

	.card-r {
		display: flex;
		flex-direction: column;
		margin-left: 15rpx;
	}

	.card-r>view {
		margin-top: 15rpx;
		font-size: 28rpx;
		color: #FFFFFF;
	}

	/* 人物介绍 */
	.desc {
		width: 100%;
		min-height: 500rpx;
		border-radius: 35rpx 35rpx 0 0;
		margin-top: -60rpx;
		background: #FFFFFF;
		padding: 20rpx 32rpx;
	}

	.shanchang {
		margin-top: 20rpx;
		font-size: 30rpx;
	}

	/* 底部按钮 */
	.bottom {
		width: 100%;
		height: 120rpx;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		/* background: #007AFF; */
		background: #FFFFFF;
		z-index: 999999;
		-webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, .8);
		-moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, .8);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .8);
		display: flex;
		flex-direction: row;
	}

	.bottom-l {
		display: flex;
		flex-direction: row;
	}

	.bottom-x {
		display: flex;
		flex-direction: row;

	}

	.bottom-x>view {
		width: 120rpx;
		height: 120rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.bottom-x>view>image {
		width: 60rpx;
		height: 60rpx;
	}

	.bottom-r {
		width: 630rpx;
		height: 120rpx;
		display: flex;
		flex-direction: row;
	}

	.fenxiang {
		width: 50%;
		height: 120rpx;
		background: #000000;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 32rpx;
	}

	.yy {
		width: 50%;
		height: 120rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #E50505;
		color: #FFFFFF;
		font-size: 32rpx;
	}
</style>
