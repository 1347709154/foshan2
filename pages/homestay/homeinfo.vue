<template>
	<view class="content">
		<view class="topimg">
			<!-- <image :src="houseinfo.imgsrc" mode=""></image> -->
			<u-swiper :list="detail.image" height="369" border-radius="0" mode="none"></u-swiper>
			<view class="evlbox">
				<view class="left num1">
					4.9
				</view>
				<view class="right num2">
					<p id="tag">干净卫生</p>
					<p id="evl">220条点评></p>
				</view>
			</view>
		</view>
		<view class="infobox">
			<view class="box1">
				<view class="left addr">
					<p id="name">{{detail.hotel_name}}</p>
					<p id="addr">{{detail.address}}</p>
				</view>
				<view class="right iconbox">
					<a href="http://uri.amap.com/marker?position=106.70068384667965,26.57849601545628&name=花果园&coordinate=gaode&callnative=1">
						<view class="left ditu">
							<image src="../../static/scenic/loc.png" mode="" class="icons"></image>
							<view class="btext">
								地图
							</view>
						</view>
					</a>
					<view class="right dianhua" @click="Phone(detail.phone)">
						<image src="../../static/scenic/dianhua.png" mode="" class="icons"></image>
						<view class="btext">
							电话
						</view>
					</view>
				</view>
			</view>
			<view class="tagbox">
				<view class="left stop">
					<image src="../../static/scenic/tingche.png" mode="" class="left icon2"></image>
					<view class="">
						停车位
					</view>
				</view>
				<view class="left wifi">
					<image src="../../static/scenic/wifi.png" class="left icon3" mode=""></image>
					<view class="">
						WIFI
					</view>
				</view>
			</view>
		</view>
		<view class="listbox">
			<view class="timebox">
				<view class="left stime">
					{{time.stime}}
				</view>
				<view class="left greytext">
					今天
				</view>
				<view class="left totaltime">
					一晚
				</view>
				<view class="left etime">
					{{time.etime}}
				</view>
				<view class=" left greytext">
					明天
				</view>
				<span class="right redtext">1间·1人</span>
			</view>
			<view class="listitem" v-for="item in house">
				<view class="left roomimg">
					<image :src="item.image[0].file_path" mode="aspectFill"></image>
				</view>
				<view class="left centerbox">
					<p class="roomname">{{item.house_name}}</p>
					<p class="roomtag"><span>{{item.area}}㎡</span>
						<span v-for="items in item.tags">
							{{items}}
						</span>
					</p>
					<p class="roomprice">
						<span class="small red">¥</span>
						<span class="big">{{item.price}}</span>
						<span class="small grey" v-if="item.line_price!=''">¥{{item.line_price}}</span>
					</p>
					<p class="roomkeys">
						<span v-for="item2 in item.matings" class="words">
							{{item2}}
						</span>
					</p>
				</view>
				<view class="right btnbox" @tap="gocreatorder(item.hotel_house_id)">
					<view class="topbox">
						订
					</view>
					<view class="botmbox">
						在线付
					</view>
				</view>
			</view>
			<view class="noticebox">
				<p id="noticetitle">入住必读</p>
				<p id="time"><span>*入住时间：入住日14:00</span><span id="ltime">离店时间：12:00以前</span></p>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

				time: {
					stime: '',
					etime: '',

				},
				hotel_id:0,
				detail:{},
				house:{},
			};
		},
		onLoad(options) {
			this.hotel_id=options.hotel_id;
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('hotel/detail', {
					hotel_id:this.hotel_id
				}).then(res => {
					this.detail = res.detail;
					this.house = res.detail.house;
				})
			
			},
			Phone(e) {
				uni.makePhoneCall({
					phoneNumber: e //仅为示例
				});
			},
			getdate() {
				var datetime = new Date();
				var year = datetime.getFullYear();
				var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
				var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
				console.log(month, date)
				this.time.stime = month + '月' + date + '日'
				this.time.etime = month + '月' + (date + 1) + '日'
			},
			gocreatorder(e) {
				uni.navigateTo({
					url: "./houseorder?house_id=" + e
				})
			}

		},
		mounted() {
			this.getdate()
		}
	}
</script>

<style lang="scss">
	page {
		background: #F1F1F1;
	}

	.topimg {
		position: relative;
		width: 750rpx;
		height: 369rpx;
		image {
			width: 750rpx;
			height: 369rpx;
		}
	}

	.evlbox {
		width: auto;
		height: auto;
		background: rgba(0, 0, 0, 0.55);
		border-radius: 16rpx;
		position: absolute;
		right: 37rpx;
		bottom: 27rpx;
	}

	.num1 {
		height: 50rpx;
		border-right: 1px solid #FFC38E;
		width: 85rpx;
		// margin-left: 10rpx;
		margin-top: 16rpx;
		font-size: 48rpx;
		color: #FFC897;
		line-height: 50rpx;
		text-align: center;
	}

	.num2 {
		margin-left: 10rpx;
	}

	#tag {
		color: #FFC38E;
		font-size: 9px;
		margin-top: 10rpx;
	}

	#evl {
		color: #FFFFFF;
		font-size: 9px;
	}

	.box1 {
		height: 130rpx;
		border-bottom: 1px solid #e5e5e5;
	}

	.infobox {
		height: 210rpx;
		width: 100%;
		padding: 0 45rpx;
		background: #FFFFFF;
	}

	#name {
		font-size: 30rpx;
		color: #000000;
		margin-top: 20rpx;
	}

	#addr {
		font-size: 24rpx;
		color: #000000;
		margin-top: 20rpx;
	}

	.icons {
		width: 26rpx;
		height: 29rpx;
		margin-top: 45rpx;
	}

	.ditu {
		margin-right: 30rpx;
	}

	.iconbox {
		text-align: center;
		font-size: 20rpx;
		color: #000000;
		a{
			color: #000000;
		}
	}

	.icon2 {
		width: 21rpx;
		height: 21rpx;
		margin-top: 8rpx;
		margin-right: 10rpx;
	}

	.icon3 {
		width: 25rpx;
		height: 19rpx;
		margin-top: 8rpx;
		margin-right: 10rpx;
	}

	.stop {
		width: 120rpx;
		font-size: 24rpx;
		color: #6D6B6B;
		margin-top: 30rpx;
	}

	.wifi {
		margin-left: 50rpx;
		width: 100rpx;
		font-size: 24rpx;
		color: #6D6B6B;
		margin-top: 30rpx;
	}

	.listbox {
		width: 100%;
		height: 890rpx;
		background: #FFFFFF;
		border-top: 2px solid #e5e5e5;
	}

	.timebox {
		margin: auto;
		width: 659rpx;
		height: 70rpx;
		background: #F4F4F4;
		border-radius: 9rpx;
		margin-top: 20rpx;
		line-height: 70rpx;
	}

	.stime {
		font-size: 32rpx;
		color: #000000;
		font-weight: 800;
		margin-left: 11rpx;
	}

	.etime {
		font-size: 32rpx;
		color: #000000;
		font-weight: 800;
	}

	.greytext {
		font-size: 24rpx;
		color: #6D6B6B;
		margin-left: 10rpx;
	}

	.totaltime {
		width: 63rpx;
		height: 28rpx;
		color: #E83828;
		border: 1px solid #F77878;
		border-radius: 14px;
		font-size: 20rpx;
		text-align: center;
		line-height: 28rpx;
		margin: 0 20rpx;
		margin-top: 20rpx;
	}

	.redtext {
		font-size: 24rpx;
		color: #E83828;
		margin-right: 5rpx;
	}

	.listitem {
		width: 100%;
		height: 173rpx;
		padding: 0 44rpx;
		margin-top: 30rpx;
	}

	.roomimg {
		width: 187rpx;
		height: 173rpx;
		border-radius: 7rpx;

		image {
			width: 187rpx;
			height: 173rpx;
			border-radius: 7rpx;
		}
	}

	.centerbox {
		width: 310rpx;
		height: auto;
		margin-left: 30rpx;

		p {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}

	.roomname {
		font-size: 32rpx;
		color: #000000;
	}

	.roomtag {
		font-size: 24rpx;
		color: #6D6B6B;
	}

	.small {
		font-size: 18rpx;

	}

	.red {
		color: #F90404;
	}

	.grey {
		color: #333333;
		margin-left: 10rpx;
		text-decoration: line-through;
	}

	.big {
		font-size: 36rpx;
		color: #F90404;
	}

	.words {
		display: inline-block;
		width: auto;
		height: auto;
		background: #F77878;
		border-radius: 5rpx;
		color: #FFFFFF;
		font-size: 18rpx;
		text-align: center;
		padding: 4rpx;
		margin-right: 8rpx;
	}

	.btnbox {
		width: 95rpx;
		height: 109rpx;
		text-align: center;
		margin-top: 50rpx;
	}

	.topbox {
		height: 70rpx;
		width: 100%;
		background-color: #E83826;
		line-height: 70rpx;
		font-size: 36rpx;
		border-top-left-radius: 11rpx;
		border-top-right-radius: 11rpx;
		color: white;
	}

	.botmbox {
		height: 39rpx;
		width: 100%;
		border-bottom: 2px solid #E83826;
		border-left: 2px solid #E83826;
		border-right: 2px solid #E83826;
		box-sizing: border-box;
		border-bottom-left-radius: 11rpx;
		border-bottom-right-radius: 11rpx;
		color: #333333;
		font-size: 24rpx;
	}

	.noticebox {
		width: 659rpx;
		margin: auto;
		height: 135rpx;
		border-top: 1px solid #e5e5e5;
		box-sizing: border-box;
		margin-top: 30rpx;
	}

	#noticetitle {
		margin-top: 30rpx;
		font-size: 26rpx;
		font-weight: bold;
	}

	#time {
		font-size: 20rpx;
		color: #505050;
		margin-top: 20rpx;
	}

	#ltime {
		margin-left: 40rpx;
	}
</style>
