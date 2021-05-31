<template>
	<view class="content">
		<view class="top">
			<!-- 搜索 -->
			<view class="search" @click="search">
				<view class="search-inp">
					<input placeholder="请输入志愿者关键字" confirm-type="search" @input="inputvalue"  @confirm="search"/>
					<image src="../../static/scenic/search.png" mode=""  @click="search"></image>
				</view>
				<view class="" @click="search">搜索</view>
				<!-- <u-search placeholder="请输入志愿者关键字" :show-action="true" action-text="搜索" shape="square" custom="search"  @search="search"></u-search> -->
			</view>
			<!-- 导航 -->
			<view class="nav">
				<view class="nav-ul" @tap="change(0)" :class="[btnnum=='0'?'active':'']">招募信息</view>
				<view class="nav-ul" @tap="change(1)" :class="[btnnum=='1'?'active':'']">活动信息</view>
				<view class="nav-ul" @tap="change(2)" :class="[btnnum=='2'?'active':'']">志愿者风采</view>
			</view>
		</view>
		<view class="body">
			<view v-if="btnnum==0">
				<view>{{info1.title}} </view>
				<view>
					<u-parse :html="info1.content"></u-parse>
				</view>
			</view>
			<view v-if="btnnum==1">
				<view>
					<u-parse :html="info2.content"></u-parse>
				</view>
			</view>
			<view v-if="btnnum==2">
				<view class="body-list" v-for="(item,index) in list" @tap="details(item.user_id)">
					<view class="body-list-img">
						<image class="user_img" :src="item.image.file_path" mode="aspectFill"></image>
					</view>
					<view class="user_message">
						<view class="" style="font-size: 32rpx;font-weight: bold;">{{item.name}}</view>
						<view class="user_message-ul">服务地区：{{item.service_addr}}</view>
						<view class="user_message-ul">服务领域：{{item.service_area}}</view>
						<view class="user_message-ul">身份属性：{{item.industry}}</view>
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
				btnnum: 0,
				list: {},
				info1: {},
				info2: {},
				key:''
			}
		},
		onLoad() {
			this.getList();
		},
		methods: {
			getList: function() {
				// console.log(this.key);
				this.$requests('volunteer/index', {key:this.key}).then(res => {
					this.info1 = res.info1;
					this.info2 = res.info2;
					this.list = res.list;
				})

			},
			inputvalue:function(e){
				
				this.key =e.detail.value;
			},
			search(value) {
			// console.log(value);
			// this.key = this.key;
			this.btnnum=2;
			this.getList()
			},
			// 顶部导航切换
			change(e) {
				this.btnnum = e
			},
			//跳转志愿者详情
			details: function(e) {
				uni.navigateTo({
					url: "/pages/volunteer/details?user_id="+e
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

	.top {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 44px;
		left: 0;
		z-index: 99999;
		background: #ffffff;
	}

	/* 搜索 */
	.search {
		width: 96%;
		height: 80rpx;
		/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
		display: flex;
		justify-content: center;
		align-items: center;
		background: #FFFFFF;
	}
	.search-inp{
		width: 80%;
		height: 60rpx;
		background-color: rgb(242, 242, 242);
		border-radius: 5px;
		margin-right: 15rpx;
		position: relative;
	}
	.search-inp>input{
		width: 80%;
		height: 60rpx;
		line-height: 60rpx;
		padding-left: 10rpx;
		font-size: 28rpx;
		
	}
	.search-inp>image{
		width: 35rpx;
		height: 35rpx;
		position: relative;
		left: 90%;
		top: -45rpx;
	}
	/*  导航*/
	.nav {
		width: 96%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-bottom: 1rpx solid #EEEEEE;
	}

	.nav-ul {
		float: left;
		width: 33.3%;
		height: 100rpx;
		text-align: center;
		display: inline-block;
		color: #676767;
		line-height: 100rpx;
	}

	.active {
		display: inline-block;
		height: 96rpx;
		line-height: 98rpx;
		color: #FE0000;
	}

	/* 正文 */
	.body {
		width: 96%;
		margin-top: 180rpx;
		padding: 20rpx;
	}

	.body>view>view {
		margin-top: 20rpx;
	}

	.body-list {
		display: flex;
		flex-direction: row;
		border-bottom: 1rpx solid #ddd;
		padding: 20rpx;
	}

	.user_img {
		width: 145rpx;
		height: 184rpx;
	}

	.user_message {
		display: flex;
		flex-direction: column;

	}

	.user_message>view {
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.user_message-ul {
		font-size: 26rpx;
		color: #858585;
	}
</style>
