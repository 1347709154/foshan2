<template>
	<view class="content">
		<view class="searchbox">
			<view class="left input">
				<u-input v-model="value" class="search left" height="62" input-align="center" placeholder="搜索"
					confirm-type="search" @confirm="search" />
				<image src="../../static/scenic/search.png" mode="" class="right srarchicon"></image>
			</view>
			<view class="right filtrate" @click="show = true">
				<view class="left text">
					筛选
				</view>
				<image src="../../static/scenic/loudou.png" mode="" class="right loudou"></image>
			</view>
		</view>
		<u-popup v-model="show" mode="right" :safe-area-inset-bottom="true" width="50%">
			<view class="box">
				<view :class="[item.isflag==true?'checkd':'check']" v-for="(item,index) in keywods"
					@tap="change(index)">
					{{item.title}}
				</view>
			</view>

		</u-popup>
		<view class="listitem" v-for="item in list" @tap="goinfo(item.hotel_id)">
			<view class="left limg">
				<image :src="item.image[0].file_path" mode="aspectFill"></image>
			</view>
			<view class="infobox left">
				<p id="name">{{item.hotel_name}}</p>
				<p class="evl">
					<!-- 需要if判断等级 -->
					<span class="redtext">4.7</span>
					<span class="redtext">超棒</span>
					<span v-for="items in item.house.tags">
						#{{items}}#
					</span>
				</p>
				<p> <span>108条点评</span></p>
				<p class="addr">
					<span>{{item.distance_unit}}</span>

				</p>
				<p class="addr1"><span>{{item.address}}</span></p>
				<view class="keywordsbox" v-for="item3 in item.keywords">
					{{item3}}
				</view>
				<view class="prices">
					<span class="right qi">起</span><span class="right price">{{item.house.price}}</span><span
						class="right fu">¥</span><span class="right oldprice">¥{{item.house.line_price}}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				show: false,
				list: {},
				keywods: [{
						isflag: false,
						title: '包邮'
					},
					{
						isflag: false,
						title: '折扣'
					},
					{
						isflag: false,
						title: '极速发货'
					},
					{
						isflag: false,
						title: '全球购'
					},
					{
						isflag: false,
						title: '天猫超市'
					}
				],
				key:'',
				latitude:0,
				longitude:0,
			};
		},
		onLoad() {
			let _this = this;
			uni.getLocation({
				type: 'wgs84',
				success(res) {
					let latitude, longitude;
					_this.latitude = res.latitude.toString();
					_this.longitude = res.longitude.toString();
					_this.getList();
				
				},fail(res) {
					console.log(res);
					_this.getList();
				}
			})
		},
		methods: {
			getList: function() {
				let _this = this;
				_this.$requests('hotel/index', {
					latitude: _this.latitude,
					longitude: _this.longitude,
					key:_this.key
				}).then(res => {
					_this.list = res.list;
				})

			},

			search() {
				console.log(this.value)
			},
			change(i) {
				if (this.keywods[i].isflag == true) {
					this.$set(this.keywods[i], 'isflag', false)
				} else {
					this.$set(this.keywods[i], 'isflag', true)
				}

			},
			goinfo(e) {
				uni.navigateTo({
					url: "./homeinfo?hotel_id="+e
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F1F1F1;
	}

	.searchbox {
		height: 62rpx;
		margin-top: 17rpx;
		width: 100%;
	}

	.input {
		width: 579rpx;
		height: 62rpx;
		line-height: 62rpx;
		background: #FFFFFF;
		border-radius: 2rpx;
		margin-left: 8rpx;

		.search {
			width: 500rpx;
			text-align: center;
		}
	}

	.srarchicon {
		width: 34rpx;
		height: 33rpx;
		margin-top: 15rpx;
		margin-right: 25rpx;
	}

	.filtrate {
		height: 62rpx;
		width: 100rpx;
		margin-right: 30rpx;

		.text {
			line-height: 62rpx;
			color: #5AA9FB;
			font-size: 26rpx;
		}

		.loudou {
			width: 32rpx;
			height: 32rpx;
			margin-top: 15rpx;
		}
	}

	.box {
		width: 100%;
		height: auto;
		display: flex;
		font-size: 20rpx;
		text-align: center;
		flex-wrap: wrap;
	}

	.checkd {
		width: 100rpx;
		height: 60rpx;
		background: red;
		color: white;
		margin: 10rpx;
		border-radius: 10rpx;
		line-height: 60rpx;
	}

	.check {
		width: 100rpx;
		height: 60rpx;
		background: #F1F1F1;
		color: black;
		margin: 10rpx;
		border-radius: 10rpx;
		line-height: 60rpx;
	}

	.listitem {
		width: 722rpx;
		height: 320rpx;
		background: #FFFFFF;
		margin-top: 13rpx;
	}

	.limg {
		width: 215rpx;
		height: 237rpx;
		margin-top: 17rpx;
		margin-left: 21rpx;

		image {
			width: 215rpx;
			height: 237rpx;
		}
	}

	.infobox {
		margin-top: 17rpx;
		margin-left: 25rpx;
		height: 237rpx;
		width: 430rpx;
	}

	#name {
		font-size: 36rpx;
		font-weight: bold;
	}

	.evl {
		color: #3E3E3E;
		font-size: 22rpx;
	}

	.redtext {
		font-size: 26rpx;
		color: #E83828;
	}

	.addr {
		color: #3e3e3e;
		font-size: 20rpx;
		float: right;
	}

	.addr1 {
		color: #3e3e3e;
		font-size: 20rpx;
		float: left;
	}

	.keywordsbox {
		width: auto;
		height: 35rpx;
		border: 1px solid #7A7A7A;
		border-radius: 4rpx;
		font-size: 18rpx;
		line-height: 35rpx;
		color: #3e3e3e;
		text-align: center;
		float: left;
		margin-right: 7rpx;
	}

	.keywordsbox:first-of-type {
		width: auto;
		color: white;
		background: #FD8B8C;
	}

	.prices {
		margin-top: 50rpx;
		height: 36rpx;
	}

	.price {
		font-size: 48rpx;
		color: #FF000C;
	}

	.oldprice {
		font-size: 22rpx;
		color: #4a4a4a;
		line-height: 80rpx;
		text-decoration: line-through;
	}

	.fu {
		font-size: 22rpx;
		line-height: 80rpx;
		color: #FF000C;
		margin-left: 10rpx;
	}

	.qi {
		font-size: 22rpx;
		color: #4a4a4a;
		line-height: 80rpx;
		margin-left: 10rpx;
	}
</style>
