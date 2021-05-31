<template>
	<view class="content">
		<!-- 搜索 -->
		<view class="searchbox">
			<view class="left input">
				<u-input v-model="value" class="search left" height="62" input-align="center" placeholder="搜索" confirm-type="search"
				 @confirm="search" />
				<image src="../../static/scenic/search.png" mode="" class="right srarchicon"></image>
			</view>
			<view class="right filtrate" @click="show = true">
				<view class="left text">
					筛选
				</view>
				<image src="../../static/scenic/loudou.png" mode="" class="right loudou"></image>
			</view>
		</view>
		<!-- 排序 -->
		<view class="sort">
			<view class="sort-ul" @click="change('all')" :class="[btnnum=='all'?'active':'']">综合</view>
			<view class="sort-ul" @click="change('sales')" :class="[btnnum=='sales'?'active':'']">销量</view>
			<view class="sort-ul" @click="change('price')" :class="[btnnum=='price'?'active':'']">
				<view>价格</view>
				<view class="sort-ul-sort">
					<u-icon size="18" name="arrow-up-fill" color="#000000"></u-icon>
					<u-icon size="18" name="arrow-down-fill" color="#000000"></u-icon>
				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<view class="goods-box">
			<view class="list" v-for="(item,index) in list" @click="details(item.goods_id)">
				<image :src="item.image[0].file_path" mode="aspectFill"></image>
				<view class="list-name">
					<view>{{item.goods_name}}</view>
					<view style="color: #FF0000;font-weight: bold;">{{item.goods_price}}</view>
				</view>
			</view>
		</view>
		<!-- 没有更多 -->
		<view class="null">没有更多了~</view>
		<!-- 赛选侧边弹出层 -->
		<u-popup v-model="show" mode="right" width="50%">
			<view class="popup-ul" v-for="(it,idx) in choose">
				{{it}}
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				key: '',
				title: 'Hello',
				btnnum:'all',
				show:false,
				list:{},
				choose:['包邮','包邮包邮','包邮']
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('goods/lists', {
					search:this.key,
					sortType: this.btnnum,
				}).then(res => {
					this.list = res.list;
				})
			
			},
			search() {
				this.key=this.value;
				this.getList()
			},
			//切换排序
			change:function(e){
				this.btnnum=e;
				this.getList()
			},
			//赛选侧边弹出层
			shows:function(e){
				this.show=true
			},
			//跳转详情
			details:function(e){
				uni.navigateTo({
					url:"/pages/product/details?goods_id="+e
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #F2F5FA;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	/* 搜索 */
/* 	.search{
		position: fixed;
		top:44px;
		left: 0;
		height: 120rpx;
		width: 100%;
		padding: 20rpx 32rpx;
		display: flex;
		flex-direction: row;
	}
	.search-box{
		width: 550rpx;
		height: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.search-box>input{
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 30rpx;
	}
	.search-box>image{
		position: relative;
		top: -5rpx;
		right: 20rpx;
		width: 45rpx;
		height: 45rpx;
		
	}
	.search-inc{
		width: 200rpx;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.search-inc>image{
		width: 40rpx;
		height: 40rpx;
	}
	.search-inc>view{
		margin-right: 25rpx;
		font-size: 32rpx;
		color: #007AFF;
	} */
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
	/* 排序 */
	.sort{
		background: #FFFFFF;
		height: 120rpx;
		width: 100%;
		margin-top: 10rpx;
		padding: 0rpx 32rpx;
	}
	.sort-ul{
		float: left;
		width: 33.3%;
		line-height: 118rpx;
		text-align: center;
		font-size: 34rpx;
		font-weight: 100;
		color: #555555;
		/* display: flex;
		flex-direction: row; */
	}
	.active{
		color: #FF0000;
	}
	.sort-ul-sort{
		position: relative;
		top: -80rpx;
		left: 50rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 8rpx;
	}
	/* 商品列表 */
	.goods-box{
		padding: 0rpx 32rpx;
		width: 100%;
	}
	.list{
		float: left;
		width: 320rpx;
		margin-left: 12rpx;
		margin-right: 10rpx;
		margin-top: 20rpx;
		background: #FFFFFF;
		border-radius: 25rpx;
		display: flex;
		flex-direction: column;
		/* justify-content: space-between;
		align-items:center ; */
	}
	.list>image{
		width: 100%;
		height: 350rpx;
		border-radius: 25rpx 25rpx 0 0;
	}
	.list-name{
		padding: 20rpx 15rpx;
		/* margin-top: 10rpx; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
	.list-name>view{
		font-size: 30rpx;
	}
	.null{
		width: 100%;
		text-align: center;
		margin-top: 30rpx;
		font-size: 32rpx;
		color: #575757;
	}
	/* 赛选侧边弹出层 */
	.popup-ul{
		height:50rpx;
		font-size: 28rpx;
		line-height: 50rpx;
		background: #F2F5FA;
		float: left;
		padding: 2rpx 20rpx;
		margin-left: 20rpx;
		margin-top: 30rpx;
		text-align: center;
	}
</style>
