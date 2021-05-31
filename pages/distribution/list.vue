<template>
	<view class="container b-f">
	  <!-- 顶部选项卡 -->
	  <view class="swiper-tab dis-flex box-align-center flex-y-center">
	    <block v-for="(item,index) in tabList">
	      <view class="swiper-tab-item" :class="[dataType == item.value ? 'on' : '']"  @tap="swichNav(item.value)">{{ item.text }}</view>
	    </block>
	  </view>
	  <!-- 提现明细列表 -->
	  <scroll-view scroll-y="true" bindscrolltolower="triggerDownLoad" style="">
	    <view class="widget-list" v-if="list.length">
	      <view class="widget__detail dis-flex flex-x-between" v-for="(item,idx) in list">
	        <view class="detail__left dis-flex flex-dir-column flex-x-around">
	          <view class="detail__money f-30">提现 {{ item.money }}元</view>
	          <view class="detail__time col-9 f-24">{{ item.create_time }}</view>
	        </view>
	        <view class="detail__right dis-flex flex-dir-column flex-x-center flex-y-center">
	          <view class="detail__status f-28" :class="[item.apply_status == 20 || item.apply_status == 40 ? 'col-green' : 'col-m']">{{ applyStatus[item.apply_status] }}</view>
	          <block v-if="item.apply_status == 30 ">
	            <view class="detail__reason f-24" catchtap="triggerReasonMsg" data-reason="item.reject_reason">查看原因</view>
	          </block>
	        </view>
	      </view>
	      <!-- 没有更多 -->
	      <view v-if="list.length && !isLoading && no_more " class="no-more f-30">亲, 没有更多了</view>
	    </view>
	    <!-- 没有记录 -->
	    <view class="yoshop-notcont" v-if="!list.length && !isLoading ">
	      <text class="iconfont icon-wushuju"></text>
	      <text class="cont">亲，暂无提现记录哦</text>
	    </view>
	  </scroll-view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				  tabList: [{
				        value: -1,
				        text: '全部',
				      }, {
				        value: 10,
				        text: '审核中',
				      }, {
				        value: 20,
				        text: '审核通过',
				      },
				      {
				        value: 40,
				        text: '已打款',
				      },
				      {
				        value: 30,
				        text: '驳回',
				      }
				    ],
				applyStatus: [],
				isLoading: true,
				dataType: -1,
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
	/* @import  'common.css'; */
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
	  width: 20%;
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
	
	.widget__detail .detail__money {
	  font-size: 30rpx;
	  margin-bottom: 12rpx;
	}
	
	.widget__detail .detail__reason {
	  margin-top: 15rpx;
	  color: #8e84fc;
	}

</style>
