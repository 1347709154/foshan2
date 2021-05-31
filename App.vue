<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	// view{
	// 	font-family:'SimHei';
	// }
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
</style>
