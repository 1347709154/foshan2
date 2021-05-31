<template>
	<view class="content">
		<view class="list" v-for="item in goodslist">
			<view class="goodsimg">
				<u-swiper :list="item.imglist" mode="none" border-radius="0" height="445" width="726"></u-swiper>
			</view>
			<p class="title">{{item.name}}</p>
			<view class="progess">
				<view class="left jindu">
					<u-line-progress active-color="#FD5052" inactive-color="#F2ABA9" :percent="(item.sellnum/item.totalnum*100)"
					 height="23" :show-percent="false"></u-line-progress>
				</view>
				<view class="left sell">
					已团购{{item.sellnum}}件
				</view>
			</view>
			<view class="botombox">
				<view class="left price">
					<p>团购价<span class="fu">¥</span><span class="jia">{{item.miaoprice}}</span></p>
				</view>
				<view class="right btns" @tap="goinfo">
					去团购	>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodslist: [{
						name: '精品糕点',
					imglist: [{
							file_path: 'https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg',
							file_path: 'https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg',
						}
					],
						totalnum: 190,
						sellnum: 100,
						miaoprice: 13.00,

					},
					{
						name: '黄焖鸡米饭',
					imglist: [{
							file_path: 'https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg',
							file_path: 'https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg',
						}
					],
						totalnum: 200,
						sellnum: 40,
						miaoprice: 7.00,

					}
				]
			};
		},
		methods:{
			goinfo(){
				uni.navigateTo({
					url:"./groupinfo"
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #f3f3f3;
	}
	.list {
		width: 726rpx;
		height: 662rpx;
		background: #FFFFFF;
		border-radius: 19rpx;
		margin: auto;
		margin-top: 17rpx;
		overflow: hidden;
	}
	.progess{
		margin-top: 20rpx;
		height: 40rpx;
	}
	.goodsimg{
		width: 726rpx;
		height: 445rpx;
	}
	.title{
		font-size: 36rpx;
		color: #010101;
		padding-left: 35rpx;
		margin-top: 20rpx;
	}
	.jindu{
		width: 262rpx;
		margin-left: 35rpx;
	}
	.sell{
		margin-left: 15rpx;
		color: #868686;
		font-size: 24rpx;
	}
	.botombox{
		height: 63rpx;
	}
	.btns{
		width: 164rpx;
		height: 63rpx;
		line-height: 63rpx;
		text-align: center;
		background: #EF1E22;
		border-radius: 4rpx;
		color: #FFFFFF;
		margin-right: 30rpx;
	}
	.price{
		color: #DF2911;
		padding-left: 35rpx;
		font-size: 26rpx;
		line-height:83rpx;
	}
	.fu{
		margin-left: 10rpx;
	}
	.jia{
		margin-left: 10rpx;
		font-size: 36rpx;
	}
</style>
