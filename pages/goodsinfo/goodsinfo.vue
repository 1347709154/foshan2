<template>
	<view class="content">
		<view class="bgimg">
			<view class="home-banner">
				<swiper class="swiper" circular autoplay interval="5000" >
					<swiper-item class="item" v-for="(item, index) in detail.image" :key="index">
						<image class="pic" :class="{current: current === index}" :src="item.file_path"
							mode="aspectFill" ></image>
					</swiper-item>
				</swiper>
		
			</view>
		</view>
		<view class="addrbox">
			<p id="p1">{{detail.name}}</p>
			<p id="p2">{{detail.level}}</p>
			<view class="locbox">
				<view class="leftaddr left">
					{{detail.region.province}}{{detail.region.city}}{{detail.region.region}}{{detail.address}}
				</view>
				<view class="map right" @tap="gomap">
					<a
						href="http://uri.amap.com/marker?position=108.149722,27.323496&name=佛顶山生态旅游景区(4A)&coordinate=gaode&callnative=1">地图导航
						> </a>
				</view>
			</view>
		</view>
		<view class="copn" v-for="item in cponlist" v-if="0">
			<span class="left">优惠</span>
			<view class="left money">
				{{item}}
			</view>
			<view class="right getcpon">
				领券 >
			</view>
		</view>
		<p id="p3">门票</p>
		<view class="titektlist">
			<view class="list-item" v-for="item in list">
				<view class="left info">
					<p id="title">{{item.title}}</p>
					<p class="keywords"><span >退款无忧</span><span >无需换票</span></p>
					<p id="sell">已售1.5万+</p>
				</view>
				<view class="right price">
					<view class="topprice">
						¥{{item.price}}
					</view>
					<view class="btns" @tap="creatorder(item)">
						预订
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
	
				cponlist: [
					"满100减5",
					"满30减3"
				],
			
				detail: {
					image:{},
					region:{}
				},
				list:{},
				current: 0
			};
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('scenic/index', {}).then(res => {
					this.detail = res.detail;
					this.list = res.list;
				})

			},
			// 跳转生成订单
			creatorder(e) {
				uni.navigateTo({
					url: "./submitorder?type=scenic&id="+e.id+'&name='+e.title
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #f1f1f1;
	}

	.bgimg {
		width: 100%;
		height: 631rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}
	.home-banner swiper{
				height: 631rpx;
	}
	.addrbox {
		padding: 0 40rpx;
		width: 100%;
		height: 271rpx;
		border-radius: 51rpx 51rpx 0 0;
		background: #FFFFFF;
		margin-top: -100rpx;
		z-index: 2;
	}

	#p1 {
		font-size: 36rpx;
		margin-top: 33rpx;
	}

	#p2 {
		font-size: 24rpx;
		margin-top: 33rpx;
		color: #32B134;
	}

	.locbox {
		margin-top: 50rpx;
		height: 53rpx;
		width: 100%;
	}

	.leftaddr {
		width: 479rpx;
		font-size: 24rpx;
	}

	.map {
		// width: 80rpx;
		color: #327AB1;
		font-size: 20rpx;
		height: 20rpx;
	}

	a {
		text-decoration: none;
		color: #327AB1;
		font-size: 20rpx;
	}

	.copn {
		width: 726rpx;
		height: 64rpx;
		line-height: 63rpx;
		margin: auto;
		background: #FFFFFF;
		margin-top: 7rpx;
		padding: 0 27rpx;
		font-size: 24rpx;
	}

	.money {
		width: 116rpx;
		height: 31rpx;
		background: #EF1E22;
		color: #FFFFFF;
		font-size: 20rpx;
		margin-top: 15rpx;
		line-height: 31rpx;
		text-align: center;
		border-radius: 7rpx;
		margin-left: 20rpx;
	}

	.getcpon {
		font-size: 20rpx;
		color: #EF1E22;
	}

	#p3 {
		margin-top: 30rpx;
		text-align: left;
		width: 100%;

		display: block;
		font-size: 28rpx;
		color: #000000;
		margin-left: 80rpx;
		font-weight: bold;
	}

	.titektlist {
		width: 726rpx;
		min-height: 200rpx;
		height: auto;
		background: #FFFFFF;
		border-radius: 7rpx;
		margin-top: 20rpx;
		padding: 0 27rpx;
	}

	.list-item {
		height: 134rpx;
		border-bottom: 1px solid #E5E5E5;
		width: 100%;
	}

	.list-item:last-of-type {
		margin-bottom: 30rpx;
		border-bottom: none;
	}

	.topprice {
		text-align: center;
		color: #EF1E22;
		font-size: 30rpx;
		margin-top: 30rpx;
	}

	.btns {
		width: 90rpx;
		height: 37rpx;
		text-align: center;
		line-height: 37rpx;
		color: white;
		font-size: 24rpx;
		background: #EF1E22;
		border-radius: 19rpx;
	}

	#title {
		margin-top: 20rpx;
	}

	.keywords {

		// margin-top: 5px;
		span {
			color: #327AB1;
			font-size: 18rpx;
			display: inline-block;
			width: 60px;
			border-right: 1px solid #327AB1;
			margin-right: 20rpx;
		}

		span:last-of-type {
			border-right: none;
			margin-right: 0;
		}
	}

	#sell {
		font-size: 18rpx;
		color: #606060;
	}
</style>
