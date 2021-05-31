<template>
	<view class="container">
	  <!-- 顶部选项卡 -->
	  <view v-if="tabList.length > 1" class="swiper-tab dis-flex box-align-center flex-y-center">
	    <block v-for="(item,index) in tabList ">
	      <view class="swiper-tab-item  flex-box" :class="[dataType == item.value ? 'on' : '']"  @tap="swichNav(item.value)">{{ item.text }}({{ item.total }})</view>
	    </block>
	  </view>
	  <!-- 团队总人数 -->
	 <!-- <view class="widget-people f-28 col-9">{{ words.team.words.total_team.value }}：{{ team_total }}人</view> -->
	  <!-- 我的团队列表 -->
	  <scroll-view scroll-y="true" bindscrolltolower="triggerDownLoad" style="">
	    <view class="widget-list b-f" v-if="list.length">
	      <view class="widget__detail dis-flex flex-x-between" v-for="(item,index) in list">
	        <view class="detail__left dis-flex flex-y-center">
	          <view class="user-avatar">
	            <image :src="item.user.avatarUrl"></image>
	          </view>
	          <view class="user-info dis-flex flex-dir-column flex-x-center">
	            <view class="user-nickName f-28">{{ item.user.nickName }}</view>
	            <view class="user-time col-9 f-24">{{ item.create_time }}</view>
	          </view>
	        </view>
	        <view class="detail__right dis-flex flex-dir-column flex-x-center flex-y-center">
	          <view class="detail__money">
	            <text class="f-24">￥</text>
	            <text class="f-34">{{ item.user.expend_money }}</text>
	          </view>
	          <view class="detail__member f-22" v-if="item.dealer">
	            {{ item.dealer.first_num + item.dealer.second_num + item.dealer.third_num }}个成员
	          </view>
	        </view>
	      </view>
	      <!-- 没有更多 -->
	      <view v-if="list.length && !isLoading && no_more" class="no-more f-30">亲, 没有更多了</view>
	    </view>
	    <!-- 没有记录 -->
	    <view class="yoshop-notcont" v-if="!list.length && !isLoading ">
	      <text class="iconfont icon-wushuju"></text>
	      <text class="cont">亲，暂无团队记录哦</text>
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
				      text: '一级团队',
					  total:0
				    }, {
				      value: 10,
				      text: '二级团队',
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
	
	/* 选项卡 */
	
	.swiper-tab {
	  width: 100%;
	  text-align: center;
	  height: 80rpx;
	  background-color: #fff;
	  border-bottom: 1px solid #eee;
	}
	
	.swiper-tab .swiper-tab-item {
	  width: 50%;
	  height: 100%;
	  font-size: 28rpx;
	  color: #777;
	  float: left;
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
	
	/* 团队人数 */
	
	.widget-people {
	  padding: 15rpx 25rpx;
	  height: 65rpx;
	  box-sizing: border-box;
	  background: #f7f7f7;
	}
	
	/* 提现明细列表 */
	
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
	
	.widget__detail .user-nickName {
	  margin-bottom: 8rpx;
	}
	
	.widget__detail .detail__member {
	  background-color: #786cff;
	  color: #fff;
	  padding: 2rpx 15rpx;
	  border-radius: 6rpx;
	  margin-top: 10rpx;
	}

</style>
