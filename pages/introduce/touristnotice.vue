<template>
	<view class="content">
		<u-parse :html="detail.article_content"></u-parse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			detail:{}
			};
		},
		onLoad() {
			this.getList();
		},
		methods:{
			
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			getList: function() {
				this.$requests('column/detail', {article_id:4}).then(res => {
					this.detail = res.detail;
				})
			
			},
			onSwiperChange(e) {
				this.current = e.detail.current;
			},
		
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 0 34rpx;
	}
</style>
