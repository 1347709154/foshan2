<template>
	<view class="content">
		<view class="imgbox">
		
		<view class="home-banner">
			<swiper class="swiper" circular autoplay interval="5000" @change="onSwiperChange">
				<swiper-item class="item" v-for="(item, index) in detail.image" :key="index">
					<image class="pic" :class="{current: current === index}" :src="item.file_path"
						mode="aspectFill" ></image>
				</swiper-item>
			</swiper>
		
		</view>
		</view>
		<view class="titlebox">
			<view class="left title">
				<p>{{detail.article_title}}</p>
			</view>
			<view class="btnbox right">
			
				<view class="col left" @click="Collect">
					<image v-if="detail.is_collect" src="../../static/user/shoucang.png" mode="" class="btnimg">
					</image>
					<image v-else src="../../static/food/col.png" mode="" class="btnimg"></image>
					<p>收藏</p>
				</view>
				<view class="right share" @click="fenxiang">
					<image src="../../static/food/share.png" mode=""></image>
					<p>分享</p>
				</view>
			</view>
		</view>
		<view class="richtextbox">
			<u-parse :html="detail.article_content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
	
				detail:{},
				current: 0,
			};
		},
		onLoad() {
			this.getList();
		},
		methods:{
			
			Collect: function() {
				this.$requests('user/collect', {
					article_id: 3,
					type:3
				}).then(res => {
					this.getList();
				})
			
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			getList: function() {
				this.$requests('column/detail', {article_id:3,type:3}).then(res => {
					this.detail = res.detail;
				})
			
			},
			onSwiperChange(e) {
				this.current = e.detail.current;
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
	.imgbox{
		width: 750rpx;
		height: 440rpx;
		image{
			width: 750rpx;
			height: 440rpx;
		}
	}
	.home-banner swiper{
		width: 100%;
height: 440rpx;
	}
	.home-banner swiper image{
	width: 100%;
	height: 100%;
	position: absolute;
	}
	.titlebox{
		width: 680rpx;
		height: 135rpx;
		margin: auto;
		border-bottom: 1px solid #e5e5e5;
	}
	.title{
		width: 405rpx;
		height: 82rpx;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #060606;
		line-height: 48rpx;
		margin-top: 35rpx;
	}
	.btnbox{
		text-align: center;
		width: 150rpx;
		image{
			width: 30rpx;
			height: 30rpx;
			margin-top: 35rpx;
		}
		p{
			font-size: 20rpx;
			font-weight: 500;
			color: #656363;
		}
	}
	.richtextbox{
		padding-top: 60rpx;
		padding-left: 35rpx;
		padding-right: 35rpx;
		height: auto;
		margin-bottom: 30rpx;
	}
</style>
