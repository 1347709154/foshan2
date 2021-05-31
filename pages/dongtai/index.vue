<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<u-navbar :is-back="false" title="动态" :border-bottom="false">
			<view class="slot-wrap" slot="right" @tap="gorelease()">
				发布
			</view>
		</u-navbar>
		<view class="end-title">
			<view>
				<view v-for="(item,index) in items" :key="index" :class="{btna:count == index}" @tap="change(index)"
					class="card">
					{{item}}
				</view>
			</view>

		</view>
		<view class="end-cont" :class="{dis:btnnum == 0}">
			<view class="msglist" v-for="(items,index) in list.data" >
				<view class="avt">
					<view class="left tou">
						<u-avatar :size="73" :src="items.avatarUrl"></u-avatar>
					</view>
					<view class="left text">
						{{items.nickName}}
					</view>
				</view>

				<view class="swiper" >
					<u-swiper :list="items.image" :height="674" :width="750" mode="number" indicator-pos="bottomRight"></u-swiper>
				</view>
				<view class="textbox">
					<view class="loction">
						<view class="left icon">
							<image src="../../static/dongtai/dizhi.png" mode=""></image>
						</view>
						<view class="left locname">
							{{items.address}}
						</view>
					</view>
					<view class="title" @click="details(items.moments_id)">
						{{items.content}}
					</view>
					<view class="flexoarea">
						<!-- 这里要判断用户是否已经点赞或收藏 -->
						<view class="caozuolist" @click="Give(items.moments_id)">
								<u-icon name="heart-fill" color="#fb8d44" size="50" v-if="items.is_give" class="left"></u-icon>
								<u-icon name="heart" color="#888888" size="50" v-else class="left"></u-icon>
								<view class="count left">
									{{items.give}}
								</view>
						</view>
						<view class="caozuolist" @click="Collect(items.moments_id)">
							<u-icon name="star-fill" color="#fb8d44" size="50" v-if="items.is_collect"></u-icon>
							<u-icon name="star" color="#888888" size="50" v-else></u-icon>
						</view>
						<view class="caozuolist" @click="fenxiang">
							<u-icon name="share-fill" color="#888888" size="50" class="left"></u-icon>
						</view>
					</view>
					<!-- 需要判断是否已经有评论 -->
					<view class="comment" v-if="items.comment">
						<view class="comment-list" v-for="(it,idx) in items.comment" v-if="idx<=4">
							<view class="comment-img">
								<u-avatar :size="60" :src="it.avatarUrl"></u-avatar>
								<view>{{it.nickName}}</view>
							</view>
							<view class="comment-con">{{it.content}}</view>
						</view>
					</view>
					<view class="evlbox">
						<input placeholder="发表评论......" :value="cot" adjust-position="false" @input="input"
							confirm-type="send" />
						<view class="evlbox-inc" @click="fasong(items.moments_id)">
							<image src="../../static/dongtai/fa.png" mode=""></image>
							<view>发送</view>
						</view>
					</view>
				</view>
			</view>

		</view>
		<view class="end-cont" :class="{dis:btnnum == 1}">
			<view class="msglist" v-for="(items,index) in list1.data" >
				<view class="avt">
					<view class="left tou">
						<u-avatar :size="73" :src="items.avatarUrl"></u-avatar>
					</view>
					<view class="left text">
						{{items.nickName}}
					</view>
				</view>

				<view class="swiper">
					<u-swiper :list="items.image" :height="674" :width="750" mode="number" indicator-pos="bottomRight"
						></u-swiper>
				</view>
				<view class="textbox">
					<view class="loction">
						<view class="left icon">
							<image src="../../static/dongtai/dizhi.png" mode=""></image>
						</view>
						<view class="left locname">
							{{items.address}}
						</view>
					</view>
					<view class="title" @click="details(items.moments_id)">
						{{items.content}}
					</view>
					<view class="flexoarea">
						<!-- 这里要判断用户是否已经点赞或收藏 -->
						<view class="caozuolist" @click="Give(items.moments_id)">
							<u-icon name="heart-fill" color="#fb8d44" size="50" v-if="items.is_give" class="left"></u-icon>
							<u-icon name="heart" color="#888888" size="50" v-else class="left"></u-icon>
							<!-- <image v-if="items.is_give" src="../../static/dongtai/xin1.png" mode="" class="left">
							<image v-else src="../../static/dongtai/xin.png" mode="" class="left"></image> -->
								<view class="count left">
									{{items.give}}
								</view>
						</view>
						<view class="caozuolist" @click="Collect(items.moments_id)">
							<u-icon name="star-fill" color="#fb8d44" size="50" v-if="items.is_collect"></u-icon>
							<u-icon name="star" color="#888888" size="50" v-else></u-icon>
							<!-- <image v-if="items.is_collect" src="../../static/user/shoucang.png" mode="" >
							<image  v-else src="../../static/dongtai/xx.png" mode=""></image> -->
						</view>
						<view class="caozuolist" @click="fenxiang">
							<u-icon name="share-fill" color="#888888" size="50" class="left"></u-icon>
						</view>
					</view>
					<!-- 需要判断是否已经有评论 -->
					<view class="comment" v-if="items.comment">
						<view class="comment-list" v-for="(it,idx) in items.comment" v-if="idx<=4">
							<view class="comment-img">
								<u-avatar :size="60" :src="it.avatarUrl"></u-avatar>
								<view>{{it.nickName}}</view>
							</view>
							<view class="comment-con">{{it.content}}</view>
						</view>
					</view>
					<view class="evlbox">
						<input placeholder="发表评论......" :value="cot" adjust-position="false" @input="input"
							confirm-type="send" />
						<view class="evlbox-inc" @click="fasong(items.moments_id)">
							<image src="../../static/dongtai/fa.png" mode=""></image>
							<view>发送</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 拨打电话 -->
		<view class="phone" @click="Phone()">
			<image src="../../static/user/phone.png" mode="aspectFit"></image>
			<view>客服热线</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cot: '',
				title: 'Hello',
				btnnum: 0,
				items: ["游客动态", "志愿者动态"],
				count: "",
				list: {
					data: {}
				},
				list1: {
					data: {}
				},

			}
		},
		onShow() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('moments/index', {}).then(res => {
					this.list = res.list;
					this.list1 = res.list1;
				})

			},
			Collect: function(e) {
				this.$requests('user/collect', {
					article_id: e,
					type: 8
				}).then(res => {
					this.getList();
				})

			},
			Give: function(e) {
				this.$requests('user/give', {
					article_id: e,
				}).then(res => {
					this.getList();
				})

			},
			change(e) {
				this.count = e
				this.btnnum = e
				console.log(this.count)
			},
			gorelease() {
				uni.navigateTo({
					url: "../release/release"
				})
			},
			details(e) {
				uni.navigateTo({
					url: "./detail?moments_id="+e
				})

			},
			input: function(e) {
				this.cot = e.detail.value
			},
			//评论
			fasong(e) {
				let _this=this;
				this.$requests('moments/addComment', {
					content:this.cot,
					moments_id:e
				}).then(res => {
					this.$util.msg('发布成功');
					setTimeout(() => {
						_this.getList()
					}, 1000)
				})
			
			},
			Phone() {
				uni.makePhoneCall({
					phoneNumber: '19358666237' //仅为示例
				});
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

<style lang="scss">
	page {
		background-color: #F5F3F3;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.u-swiper-wrap {
		width: 750rpx;
	}

	.slot-wrap {
		float: right;
		width: 120rpx;
		padding: 10rpx;
		height: 60rpx;
		background: #32B134;
		text-align: center;
		color: #FFFFFF;
		line-height: 40rpx;
		border-radius: 50rpx;
		margin-right: 34rpx;
		font-size: 30rpx;
	}

	/* 将三个内容view的display设置为none(隐藏) */
	.end-title {
		height: 68rpx;
		display: flex;
		width: 100%;
		color: #1A1B1B;
		background-color: #FFFFFF;
		position: fixed;
		top: 44px;
		z-index: 999;
	}

	.end-title view {
		flex-grow: 1;
		text-align: center;
	}

	.end-cont {
		display: none;
		width: 100%;
		margin-top: 35px;
	}

	.btna {
		color: #32B134;
	}

	.dis {
		display: block;
	}

	.card {
		width: 375rpx;
		box-sizing: border-box;
		margin: 9px 0px;
	}

	.card:first-of-type {

		border-right: #EEEEEE 1px solid;
		float: left;
	}

	.card:last-of-type {
		float: right;
	}

	.avt {
		height: 73rpx;
		margin-top: 50rpx;
		line-height: 73rpx;
	}

	.tou {
		margin-left: 25rpx;
	}

	.text {
		margin-left: 16rpx;
	}

	.swiper {
		width: 100%;
		height: 672rpx;
		margin-top: 15px;
	}

	.msglist {
		overflow: hidden;
		margin-top: 8px;
		background: #FFFFFF;
		padding-bottom: 20rpx;
	}

	.textbox {
		// min-height: 415rpx;
		overflow: hidden;
	}

	.loction {
		// height: 40rpx;
		// line-height: 40rpx;
		overflow: hidden;
	}

	.icon {
		width: 30rpx;
		height: 40rpx;

		image {
			width: 30rpx;
			height: 40rpx;
		}

		margin-top: 19rpx;
		margin-left: 25rpx;
	}

	.locname {
		margin-top: 10px;
		margin-left: 15rpx;
		color: #171414;
	}

	.title {
		padding: 0rpx 25rpx;
		font-size: 13px;
		color: #5A5A5A;
		margin-top: 15px;
	}

	.flexoarea {
		overflow: hidden;
		display: flex;
		height: 60rpx;
		padding: 0px 25rpx;
		line-height: 53rpx;
		margin-top: 15px;

		image {
			width: 40rpx;
			height: 35rpx;
			margin-top: 5px;
			// display: ;
		}
	}

	.caozuolist {
		width: 100rpx;
		margin-bottom: 20rpx;
	}

	.caozuolist:first-of-type {
		width: 130rpx;
	}

	.count {
		margin-left: 2px;
	}

	.comment {
		margin-top: 10rpx;
		width: 100%;
		background: #FFFFFF;
		padding: 0rpx 32rpx;
		margin-bottom: 10rpx;
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

	.evlbox {
		width: 706rpx;
		height: 46rpx;
		margin: auto;
		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.evlbox>input {
		width: 570rpx;
		height: 46rpx;
		padding-left: 10rpx;
		line-height: 46rpx;
		background: #F5F5F5;
	}

	.evlbox-inc {
		padding-left: 10rpx;
		height: 46rpx;
		width: 136rpx;
		display: flex;
		flex-direction: row;
		font-size: 28rpx;
	}

	.evlbox-inc>image {
		width: 55rpx;
		height: 46rpx;
	}

	.uni-input-placeholder {
		color: #848383;
		font-size: 12px;
	}
	.phone {
		position: fixed;
		z-index: 99;
		top: 780rpx;
		right: 32rpx;
		width: 140rpx;
		height: 170rpx;
		/* border: 1rpx solid #80D981; */
		border-radius: 60rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		opacity: 1;
	}
	
	.phone>image {
		width: 100rpx;
		height: 80rpx;
	}
	
	.phone>view {
		color: #80D981;
		font-size: 28rpx;
		margin-top: 10rpx;
	}
</style>