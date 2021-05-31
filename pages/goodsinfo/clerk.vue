<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_id:''
			}
		},
		onLoad(option) {
			this.order_id=option.order_id;
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('admin/extract', {
					order_id:this.order_id
				}).then(res => {
					if(res){
						this.$util.msg('核销成功！');
				uni.reLaunch({
					url:'../admin/admin'
				})
					}
				})
			
			},
		}
	}
</script>

<style>

</style>
