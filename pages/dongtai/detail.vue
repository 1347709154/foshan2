<template>
	<view class="content">
		<view class="details-box">


			<view class="datail-desc">{{detail.content}}</view>
			<view class="swiper">
				<u-swiper :list="detail.image" :height="674" :width="750" mode="number" indicator-pos="bottomRight"
					@click="details(index)"></u-swiper>
			</view>
			<view class="datail-time">
				<view> {{detail.create_time}}</view><br>

			</view>
			<view class="datail-time">
				<view class="datail-address-inc">
					<u-icon name="map-fill" color="#888888" size="48"></u-icon>
					<view class="datail-address">{{detail.address}}</view>
				</view>
			</view>
			<view class="fabulous" @click="Give()">
				<u-icon name="thumb-up" v-if="detail.is_give" color="#fb8d44" size="88"></u-icon>
				<u-icon name="thumb-up" v-else color="#c2c2c2" size="88"></u-icon>
				<view v-if="detail.is_give" style="color:#fb8d44 ;">为文本点赞</view>
				<view v-else style="color:#c2c2c2 ;">为文本点赞</view>
			</view>

		</view>
		<view class="comment">
			<view class="comment-list" v-for="(it,idx) in list">
				<view class="comment-img">
					<u-avatar :size="60" :src="it.avatarUrl"></u-avatar>
					<view>{{it.nickName}}</view>
				</view>
				<view class="comment-con">{{it.content}}</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-int">
				<input placeholder="说点什么" :value="cot" adjust-position="false" @input="input" confirm-type="send" />
			</view>
			<view class="bottom-bt">
				<view class="bottom-bt-inc" @click="fasong">
					<image src="../../static/dongtai/fa.png" mode="" style="width:50rpx;height: 50rpx; "></image>
					<view>发送</view>
				</view>

				<view class="bottom-bt-inc" @click="Collect()">
					<u-icon name="star" color="#fb8d44" size="50" v-if="detail.is_collect"></u-icon>
					<u-icon name="star" color="#888888" size="50" v-else></u-icon>
					<view>收藏</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cot: '',
				cang: 0,
				hide: 0,

				moments_id: '',
				detail: {},
				list: {},

			}
		},
		onLoad(option) {
			this.moments_id = option.moments_id;
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('moments/detail', {
					moments_id: this.moments_id
				}).then(res => {
					this.detail = res.detail;
					this.list = res.list;
				})

			},
			Collect: function(e) {
				this.$requests('user/collect', {
					article_id: this.moments_id,
					type: 8
				}).then(res => {
					this.getList();
				})

			},
			Give: function(e) {
				this.$requests('user/give', {
					article_id: this.moments_id,
				}).then(res => {
					this.getList();
				})

			},
			input: function(e) {
				this.cot = e.detail.value
			},
			//评论
			fasong(e) {
				let _this = this;
				this.$requests('moments/addComment', {
					content: this.cot,
					moments_id:this.moments_id
				}).then(res => {
					this.$util.msg('发布成功');
					this.cot='';
					setTimeout(() => {
						_this.getList()
					}, 1000)
				})

			}
		}
	}
</script>

<style>
	page {
		background: #f6f6f6;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.details-box {
		background: #FFFFFF;
		width: 100%;
		padding: 40rpx 32rpx;
		margin-bottom: 20rpx;
	}

	.detail-tetel {
		font-size: 32rpx;
		color: #464646;
	}

	.datail-time {
		margin-top: 10rpx;
		font-size: 24rpx;
		color: #9c9c9c;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
	}

	.datail-address-inc {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		margin-left: 10rpx;
	}

	.datail-address {
		margin-left: 10rpx;
		font-size: 28rpx;
	}

	.datail-desc {
		margin-top: 20rpx;
		font-size: 32rpx;
		display: flex;
		flex-direction: row;
	}

	.swiper {
		width: 100%;
		height: 672rpx;
		margin-top: 15px;
	}

	.fabulous {
		margin-top: 50rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.fabulous>view {
		color: #fb8d44;
		font-size: 28rpx;
	}

	.fabulous-per {
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		overflow: hidden;
		white-space: normal;
		word-break: break-all
	}

	.fabulous-per>view {
		font-size: 28rpx;
		color: #a7a7a7;
	}

	.per {
		float: left;
		/* width: 50rpx;
		height: 50rpx; */
		border-radius: 50%;
		margin-right: 15rpx;
	}

	.comment {
		margin-top: 10rpx;
		width: 100%;
		background: #FFFFFF;
		padding: 0rpx 32rpx;
		margin-bottom: 100rpx;
	}

	.comment-list {
		margin: 20rpx 0rpx;
		border-bottom: 1rpx solid #ddd;
	}

	.comment-img {
		width: 100%;
		/* height: 80rpx; */
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.comment-img>view {
		margin-left: 10rpx;
		font-size: 28rpx;
		font-weight: bold;
	}

	.comment-con {
		padding-left: 80rpx;
		margin: 20rpx 0rpx;
		font-size: 28rpx;
	}

	.bottom {
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		background: #FFFFFF;
		-webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, .8);
		-moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, .8);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .8);
		z-index: 2;
		height: 120rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rpx 32rpx;
	}

	.bottom-int {
		width: 90%;
		height: 80rpx;
		background: #e8e8e8;
		border-radius: 50rpx;
	}

	.bottom-int>input {
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 20rpx;
		font-size: 28rpx;
	}

	.bottom-bt {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 55%;
	}

	.bottom-bt-inc {
		/* 	width: 33.3%; */
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.bottom-bt-inc>view {
		font-size: 28rpx;
		margin-left: 10rpx;
	}
</style>
