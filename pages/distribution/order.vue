<template>
	<view class="container">
	  <!-- 顶部选项卡 -->
	  <view class="swiper-tab dis-flex box-align-center flex-y-center">
	    <block v-for="(item,index) in tabList">
	      <view class="swiper-tab-item" :class="[dataType == item.value ? 'on' : '']" @tap="swichNav(item.value)">{{ item.text }}</view>
	    </block>
	  </view>
	  <!-- 订单列表 -->
	  <scroll-view scroll-y="true" bindscrolltolower="triggerDownLoad">
	    <view class="widget-list b-f" v-if="list.length">
	      <view class="widget__detail" v-for="(item,index) in list" >
	        <view class="detail__row dis-flex flex-x-between">
	          <view class="detail__left f-24">订单号：{{ item.order_master.order_no }}</view>
	          <view class="detail__right f-24 c-violet">
	            {{ item.order_master.state_text }}
	          </view>
	        </view>
	        <view class="detail__row m-top10 dis-flex flex-x-between">
	          <view class="detail__left dis-flex flex-y-center">
	            <view class="user-avatar">
	              <image :src="item.user.avatarUrl"></image>
	            </view>
	            <view class="user-info dis-flex flex-dir-column flex-x-center">
	              <view class="user-nickName f-28">{{ item.user.nickName }}</view>
	              <view class="user-time f-24 c-80">消费金额：￥{{ item.order_price }}</view>
	            </view>
	          </view>
	          <view class="detail__right dis-flex flex-dir-column flex-x-center flex-y-center">
	            <view class="detail__money t-r col-m">
	              <text class="f-26">+ </text>
	              <text class="f-28" v-if="item.first_user_id == user_id">{{ item.first_money }}</text>
	              <text class="f-28" v-if="item.second_user_id == user_id">{{ item.second_money }}</text>
	              <text class="f-28" v-if="item.third_user_id == user_id">{{ item.third_money }}</text>
	            </view>
	            <view class="detail__time f-22 c-80">{{ item.create_time }}</view>
	          </view>
	        </view>
	      </view>
	      <!-- 没有更多 -->
	      <view v-if="list.length && !isLoading && no_more" class="no-more f-30">亲, 没有更多了</view>
	    </view>
	    <!-- 没有记录 -->
	    <view class="yoshop-notcont" v-if="!list.length && !isLoading">
	      <text class="iconfont icon-wushuju"></text>
	      <text class="cont">亲，暂无订单记录哦</text>
	    </view>
	  </scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
				      value: 1,
				      text: '全部',
					  total:0
				    }, {
				      value: 10,
				      text: '未结算',
					  total:0
				    },{
				      value: 20,
				      text: '已结算',
					  total:0
				    }
				  ],
				  isLoading: true,
				  dataType: 1,
				  page: 1,
				  no_more: false,
				  list:[]
			}
		},
		onLoad() {

		},
		methods: {
			//导航栏切换
			 swichNav: function(e) {
			   let _this = this,
				//console.log(this);
			      current = e;
			    if (_this.dataType == current) {
			      return false;
			    }
			    _this.dataType= current
			     
				
			}
		}
	}
</script>

<style>
	page {
	  background: #fff;
	}
	
	.c-violet {
	  color: #786cff;
	}
	
	.c-80 {
	  color: #808080;
	}
	
	/* 选项卡 */
	
	.swiper-tab {
	  width: 100%;
	  text-align: center;
	  height: 80rpx;
	  background-color: #fff;
	  border-bottom: 1px solid #eee;
	}
	
	.swiper-tab .swiper-tab-item {
		float: left;
	  width: 33.333333%;
	  height: 100%;
	  font-size: 28rpx;
	  color: #777;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  box-sizing: border-box;
	  border-bottom: 2px solid #ffffff00;
	}
	
	.swiper-tab .on {
	  color: #786cff;
	  border-bottom: 2px solid #786cff;
	}
	
	/* 设置scroll-view容器高度 */
	
	.widget-list, .yoshop-notcont {
	  height: 100.1%;
	}
	
	/* 订单列表 */
	
	.widget-list {
	  padding: 10rpx 20rpx 40rpx 20rpx;
	  box-sizing: border-box;
	}
	
	.widget__detail {
	  padding: 20rpx 15rpx;
	  box-sizing: border-box;
	  font-size: 28rpx;
	  border-bottom: 1rpx solid #e7e7e7;
	}
	
	.widget__detail .user-avatar {
	  margin-right: 16rpx;
	}
	
	.widget__detail .user-avatar image {
	  display: block;
	  width: 100rpx;
	  height: 100rpx;
	  border: 4rpx solid #fff;
	  border-radius: 50%;
	}
	
	.widget__detail .user-info {
	  height: 100%;
	}
	
	.widget__detail .user-info .user-nickName {
	  margin-bottom: 8rpx;
	}
	
	.widget__detail .detail__money {
	  width: 100%;
	  margin-bottom: 8rpx;
	}


</style>
