<template>
	<view class="content">
		<!-- 轮播 -->
		<view class="home-banner">
			<swiper class="swiper" circular autoplay interval="5000">
				<swiper-item class="item" v-for="(item, index) in goods.image" :key="index">
					<image class="pic" :class="{current: current === index}" :src="item.file_path" mode="widthFix">
					</image>
				</swiper-item>
			</swiper>

		</view>
		<!-- 商品信息 -->
		<view class="goods-box">
			<view class="goods-name">【{{goods.category.name}}】{{goods.goods_name}}</view>
			<view class="goods-money">
				<text style="margin-right: 15rpx;">￥</text>{{goods.goods_price}}
			</view>
			<view class="goods-desc">已售{{goods.goods_sales}}件·包邮·48小时发货</view>
		</view>
		<view class="lin"></view>
		<!-- 商品详情 -->
		<view class="details">
			<u-parse :html="goods.content"></u-parse>
		</view>
		<!-- 底部 -->
		<view class="bottom">
			<view class="bottom-l">
				<view class="bottom-x">
					<view @click="Collect()">
						<image v-if="goods.is_collect" src="../../static/user/shoucang.png" mode="aspectFit">
							<image v-else src="../../static/home/dianzan.png" mode="aspectFit"></image>
							<view>收藏</view>
					</view>
					<view @click="KF">
						<image src="../../static/home/kefu-1.png" mode="aspectFit"></image>
						<view>客服</view>
					</view>
				</view>
			</view>
			<view class="bottom-r">
				<view class="fenxiang" @click="fenxiang">
					<view style="margin-right: 5rpx;">分享</view>
					<u-icon size="45" name="share"></u-icon>
				</view>
				<view class="yy" @click="order">
					<view>立即购买</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				goods: {
					category: {}
				},
				images: {},
				current: 0,
				goods_id: 0,
			}
		},
		onLoad(option) {
			this.goods_id = option.goods_id;
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('goods/detail', {
					goods_id: this.goods_id
				}).then(res => {
					this.goods = res.goods;
				})
			},
			KF() {
				uni.navigateTo({
					url: '../my/kefu'
				})
			},
			Collect: function() {
				this.$requests('user/collect', {
					article_id: this.goods_id,
					type: 5
				}).then(res => {
					this.getList();
				})

			},
			//跳转订单
			order: function() {
				uni.navigateTo({
					url: "/pages/product/order?goods_id=" + this.goods_id
				})
			},
			fenxiang:function(){
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角分享',
					showCancel:false,
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
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

	/* 轮播 */
	.home-banner {
		width: 100%;
		height: 450rpx;
	}

	.home-banner swiper {
		width: 100%;
		height: 450rpx;
	}

	.home-banner swiper image {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.swiper-img {
		width: 100%;
		height: 350rpx;
	}

	/* 商品信息 */
	.goods-box {
		width: 100%;
		padding: 0rpx 50rpx;
	}

	.goods-box>view {
		margin-top: 20rpx;
	}

	.goods-name {
		font-size: 30rpx;
		font-weight: bold;
	}

	.goods-money {
		font-size: 36rpx;
		font-weight: bold;
		color: #FF0808;
	}

	.goods-desc {
		font-size: 28rpx;
	}

	.lin {
		height: 20rpx;
		background: #F2F6F7;
		width: 100%;
		margin-top: 30rpx;
	}

	/* 商品详情 */
	.details {
		width: 100%;
		margin-top: 30rpx;
	}

	.details>image {
		width: 100%;
	}

	/* 底部按钮 */
	.bottom {
		width: 100%;
		height: 100rpx;
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
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.bottom-x>view>image {
		width: 40rpx;
		height: 40rpx;
	}

	.bottom-r {
		width: 630rpx;
		height: 100rpx;
		display: flex;
		flex-direction: row;
	}

	.fenxiang {
		width: 50%;
		height: 100rpx;
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
		height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #E50505;
		color: #FFFFFF;
		font-size: 32rpx;
	}
</style>
