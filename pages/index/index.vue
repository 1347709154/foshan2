<template>
	<view class="home">
		<view class="header">
			<view class="header_block">
				<!-- <image src="../../static/banner.jpg" mode="scaleToFill"></image> -->
				<view class="home-banner">
					<swiper class="swiper" circular autoplay interval="5000" @change="onSwiperChange">
						<swiper-item class="item" v-for="(item, index) in carousel" :key="index">
							<image class="pic" :class="{current: current === index}" :src="item.image.file_path"
								mode="aspectFill" ></image>
						</swiper-item>
					</swiper>
					<view class="dots row center">
						<view class="dot" :class="{current: current === index}" v-for="(item, index) in list"
							:key="index"></view>
					</view>
				</view>
				<view class="con">
					<view>{{weather.temp1}} - {{weather.temp2}}</view>
					<view>佛顶山生态旅游区</view>
					<view class="bigtitle">旅居天堂，康养圣地</view>
				</view>
			</view>

		</view>
		<view class="home_center">
			<view class="centerlist">
				<view class="center_item" v-for="(item,index) in list">
					<view class="item_list" @tap="path(item.path)">
						<image class="itemicon" :src="item.img" mode="widthFix"></image>
						<view>{{item.title}}</view>
					</view>
				</view>

			</view>
			<!-- 购票 导游预约 -->
			<view class="pay_piao">
				<view class="yuyue">
					<view class="goupiao_con" @click="scenic">
						<view class="title">购票预约</view>
						<view class="miaosu">门票·观光车票</view>
					</view>
					<image class="icon" src="../../static/home/goupiao.png" mode="widthFix"></image>
				</view>
				<view class="yuyue" @click="formulate">
					<view class="goupiao_con">
						<view class="title">定制游预约</view>
						<view class="miaosu"></view>
					</view>
					<image class="icon" src="../../static/user/dzy2.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- 景区介绍 -->
			<view class="qujs">
				<view class="qujs_item gengduo_more" >
					<view>
						<text>旅游区地址：</text><br> 贵州省铜仁市石阡佛顶山生态旅游区
					</view>
					<a href="http://uri.amap.com/marker?position=108.149722,27.323496&name=佛顶山生态旅游景区（4A）&coordinate=gaode&callnative=1">
					<image class="gengduo" src="../../static/user/dht.png" mode="widthFix" style="width: 80rpx;">
					</image>
					</a>
				</view>
			</view>
		</view>
		<!-- 精彩楼层 -->
		<view class="video">
			<view class="video-top">
				<view class="video-tel">精彩视频</view>
				<view class="inc" @click="ToVideoList()">
					<view>更多</view>
					<u-icon size="30" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="swiper">
				<scroll-view class="scroll-view" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view class="scroll-view-con" v-for="(item,index) in videolist"  @click="ToVideo(item.article_id)">
						<image :src="item.image.file_path" mode="aspectFill" class="video-img"></image>
						<image src="../../static/home/baofang.png" class="bf"></image>
					</view>

				</scroll-view>
			</view>
		</view>
		<!-- 楼层 -->
		<view class="floor" v-for="(item,index) in  floorlist">
			<view class="floor-top"
				:style="{background: 'linear-gradient('+item.background1+','+item.background2+')'}">
				<view class="floor-top-tel">
					<view>{{item.name}}</view>
					<view style="font-size: 28rpx; color:#666666">{{item.subtitle}}</view>
				</view>
				<view class="floor-top-img">
					<image :src="item.image.file_path" mode="aspectFit"></image>
				</view>
			</view>
			<view class="floor-zj">
				<view class="floor-zj-tag" v-for="(items,idx) in item.list6" @click="fool(items.article_id)"  v-if="idx<6">
					{{items.article_title}}
				</view>
			</view>
			<view class="floor-bottom">
				<view class="floor-bottom-tag" v-for="(it,idex) in item.list6" @click="fool(it.article_id)"  v-if="idex>=6">
					<image :src="it.image[0].file_path" mode="aspectFill"></image>
					<view>{{it.article_title}}</view>
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
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				carousel: {},
				current: 0,
				videolist: [],
				floorlist: {},
				weather:{},
				scenics:{
					region:{}
				},
				list: [{
						path: "pages/introduce/introduce",
						img: '../../static/home/lvyougonglv.png',
						title: '景区介绍'
					},
					{
						path: "pages/homestay/homestay",
						img: '../../static/home/minsu.png',
						title: '民宿'
					}, {
						path: "pages/food/food",
						img: '../../static/home/meishi.png',
						title: '美食'
					},
					{
						path: "pages/product/index",
						img: '../../static/home/techan.png',
						title: '特产'
					}, {
						path: "pages/guide-pre/index",
						img: '../../static/user/dy.png',
						title: '导赏预约'
					},
					{
						path: "pages/seckill/seckill",
						img: '../../static/home/xianshihuodong.png',
						title: '活动'
					}, {
						path: "pages/notice/notice",
						img: '../../static/home/gongg.png',
						title: '公告'
					}, {
						img: '../../static/home/zhiyuanzhe.png',
						title: '志愿者',
						path: 'pages/volunteer/index'
					}
				],
			
			}
		},
		onLoad() {
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('page/home', {}).then(res => {
					this.carousel = res.banner;
					this.videolist = res.video;
					this.floorlist = res.list;
					this.weather = res.weather;
					this.scenics = res.scenic;
				})

			},
			onSwiperChange(e) {
				this.current = e.detail.current;
			},
			openLocation:function(e){
				uni.openLocation({
			    latitude: Number(e.latitude),
			    longitude:Number(e.longitude),
				name:e.name,
				address:e.region.city+e.region.region+e.address,
			    success: function () {
			        console.log('success');
			    },
				fail:function(res){
					console.log(res);
				}
			});
			},
			//导航跳转
			path: function(e) {
				let url = e;
				console.log(url)
				uni.navigateTo({
					url: "/" + url
				})
			},
			//购票
			scenic: function() {
				uni.navigateTo({
					url: "/pages/goodsinfo/goodsinfo"
				})
			},
			// 精彩视频滑动
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			ToVideo: function(e) {
				uni.navigateTo({
					url: "/pages/video/index?video_id="+e
				})
			},
			ToVideoList:function(){
			uni.navigateTo({
				url: "/pages/video/list"
			})	
			},
			//跳转定制游
			formulate: function(e) {
				uni.navigateTo({
					url: "/pages/formulate/index"
				})
			},
			fool: function(e) {
			uni.navigateTo({
				url: '/pages/article/index?article_id='+e
			})
			
			},
			Phone() {
				uni.makePhoneCall({
					phoneNumber: '19358666237' //仅为示例
				});
			},
		}
	}
</script>

<style>
	.home {
		background-color: #F2F2F2;
		display: flex;
		flex-direction: column;
	}

	.header {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		width: 100%;
		height: 400rpx;

	}

	.header_block image {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 400rpx;
		z-index: 1;
	}
	.home-banner swiper{
			height: 400rpx;
	}

	.header_block .con {
		position: absolute;
		z-index: 1;
		color: #FFFFFF;
		bottom: 80rpx;
		margin-left: 30rpx;
	}

	.bigtitle {
		font-size: 50rpx;
		font-family: 'SimHei';
		letter-spacing: 5rpx;
		margin: 30rpx 0;
	}

	.home_center {
		padding: 20rpx;
		z-index: 11;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		margin: 0 30rpx;
		margin-top: -70rpx;
		display: flex;
		flex-direction: column;
		margin-bottom: 50rpx;
	}

	.home_center .centerlist {

		flex: 1;
		display: flex;
		flex-wrap: wrap;
	}

	.center_item {
		width: 25%;
		margin: 10rpx 0;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.itemicon {
		width: 60rpx;
		height: 60rpx;
		margin: 10rpx 0;
	}

	.item_list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #3F3636;
		margin: 10rpx 0;
		font-size: 26rpx;

	}

	.pay_piao {
		display: flex;
		margin: 20rpx 0;
	}

	.yuyue {
		color: #FFFFFF;
		flex: 1;
		font-size: 30rpx;
		display: flex;
		padding: 20rpx;
		align-items: center;
		border-radius: 10rpx;
		background: linear-gradient(left, #5CC25F, #A8D16F);
	}

	.yuyue:first-child {
		margin-right: 20rpx;
	}

	.icon {
		width: 65rpx;
	}

	.goupiao_con {
		flex: 1;
		display: flex;
		flex-direction: column;


	}

	.goupiao_con .title {

		font-weight: bold;
		margin: 5rpx 0;
	}

	.miaosu {

		margin-right: 10rpx;
		font-size: 20rpx;
		letter-spacing: 1rpx;
	}

	.qujs {
		font-size: 26rpx;
	}

	.qujs text {
		font-weight: bold;
	}

	.qujs_item {
		line-height: 60rpx;
		display: flex;
		align-items: center;

	}

	.gengduo_more {
		display: flex;
		justify-content: space-between;
		padding-bottom: 10rpx;
	}

	.gengduo {
		width: 20rpx;
		float: right;
		margin: 0 50rpx;
	}

	/* 精彩视频 */
	.video {
		margin: 30rpx;
	}

	.video-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.video-tel {
		border-left: 6rpx solid #07C160;
		padding-left: 20rpx;
		font-size: 36rpx;
		font-weight: bold;
	}

	.inc {
		display: flex;
		flex-direction: row;
	}

	.inc>view {
		font-size: 28rpx;
		color: #07C160;
		margin-right: 10rpx;
	}

	.scroll-view {
		width: 100%;
		height: 300rpx;
		margin-top: 30rpx;
		white-space: nowrap;

	}

	.scroll-view-con {
		display: inline-block;
		height: 100%;
		width: 80%;
		margin-left: 30rpx;
		background: #000000;
		border-radius: 25rpx;
		padding: 20rpx 0rpx;
		position: relative;
	}

	.video-img {
		width: 100%;
		height: 100%;

	}

	.bf {
		display: inline-block;
		position: relative;
		top: -80rpx;
		left: -55%;
		width: 100rpx;
		height: 100rpx;
		z-index: 1;
		/* opacity: 0.5; */
	}

	/* 楼层（） */
	.floor {
		margin: 30rpx;
		background: #ffffff;
		border-radius: 20rpx;
		padding-bottom: 20rpx;
		display: flex;
		flex-direction: column;
	}

	.floor-top {
		width: 100%;
		height: 200rpx;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rpx 30rpx;


	}

	.floor-top-tel>view {
		font-size: 34rpx;
		font-weight: bold;
		margin-top: 15rpx;
	}

	.floor-top-img {
		width: 180rpx;
		height: 180rpx;

	}

	.floor-top-img>image {
		width: 100%;
		height: 100%;
	}

	.floor-zj {
		margin-top: 10rpx;
		padding: 20rpx 32rpx;
	}

	.floor-zj-tag {
		float: left;
		width: 30%;
		height: 60rpx;
		line-height: 60rpx;
		background: #F7F8FC;
		font-size: 30rpx;
		color: #666666;
		margin-left: 3%;
		margin-top: 20rpx;
		text-align: center;
		font-size: 30rpx;
	}

	.floor-bottom {
		padding: 20rpx 32rpx;
	}

	.floor-bottom-tag {
		float: left;
		width: 30%;
		margin-left: 3%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.floor-bottom-tag>view {
		width: 100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-top: 10rpx;
		font-size: 28rpx;
		color: #464646;

	}

	.floor-bottom-tag>image {
		width: 100%;
		border-radius: 15rpx;
		height: 150rpx;
	}
.phone {
		position: fixed;
		z-index: 99999;
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
	/* 	.floor-top:first-of-type{
		background-image: linear-gradient(#FCA67B,#FFFCFA);
	}
	.floor-top:nth-last-of-type(1){
		background-image: linear-gradient(#F9EDAA,#FFFCFA);
	} */
</style>
