<template>
	<view class="container">
	  <view class="qrcode">
	    <image mode="widthFix" src="" catchtap="previewImage"></image>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			previewImage: function() {
				
			  },
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

	page {
	  background: #fff;
	}
	
	.qrcode image {
	  display: block;
	  width: 100%;
	}
</style>
