<template>
	<view class="content">
		<u-navbar :border-bottom="false">
			<view class="slot-wrap" slot="right" @tap="submit()">
				发布
			</view>
		</u-navbar>

		<view class="textarea">
			<u-input v-model="value" @input="onKeyInput" type="textarea" :height="280" placeholder="说点什么吧～～" />
		</view>
		<view class="upload-wrap">
			<mix-upload-img :length="9" :index="index" @onChange="onImageChange"></mix-upload-img>
		</view>
		<view class="loction">
			<image src="../../static/dongtai/dizhi1.png" mode="" class="left loc"></image>
			<view class="dizhi left">
				{{address}}
			</view>
			<image src="../../static/dongtai/jianyou.png" mode="" class="right jian"></image>
		</view>
	</view>
</template>

<script>
	import ball from '../../components/mix-upload-img/mix-upload-img'
	import mixmodal from '../../components/mix-modal/mix-modal'


	export default {
		component: {
			'mix-upload-img': ball,
			'mix-modal': mixmodal
		},
		data() {
			return {
				index: 0,
				value: '',
				name: '',
				address: '',
				data: {},
				list: [],
			}
		},
		onLoad() {
		
		
		
			let _this = this;
			uni.getLocation({
				type: 'wgs84',
				success(res) {
					let latitude, longitude;
					latitude = res.latitude.toString();
					longitude = res.longitude.toString();
					
					_this.$requests('user/getLocation', {
						latitude: latitude,
						longitude: longitude
					}).then(res => {
						_this.address = res.data.result.formatted_address
					})
					
					
				
				}
			})

		},
		methods: {
			submit() {
				const {
					images,
					content,
					address
				} = this;
				if (!content) {
					this.$util.msg('请输入内容');
					return;
				}
				this.$requests('moments/submit', {
					content,
					images,
					address
				}, 'POST').then(res => {

					this.$util.msg('发布成功');
					setTimeout(() => {
						uni.switchTab({
							url: "../dongtai/index"
						})
					}, 1000)
				});
			},
			onImageChange(e) {
				this.images = e.list.map(item => item.file_id)
			},
			onKeyInput: function(value) {
				this.content = value
			},

		}
	}
</script>

<style lang="scss">
	.content {
		padding: 0rpx 40rpx;
	}

	.upload-wrap {
		padding: 10rpx 0 10rpx 20rpx;

		/deep/ {
			.upload-content {
				background-color: #fff;
			}

			.upload-item {
				width: 144rpx;
				height: 144rpx;
			}

			.upload-add-btn {
				width: 144rpx;
				height: 144rpx;
			}
		}
	}

	.slot-wrap {
		float: right;
		width: 50px;
		height: 20px;
		background: #32B134;
		text-align: center;
		color: #FFFFFF;
		line-height: 20px;
		border-radius: 9px;
		margin-right: 17px;
		font-size: 15px;
	}

	.textarea {
		width: 100%;
		border-bottom: 1px solid #D9D9D9;
	}

	.loction {
		width: 100%;
		margin-top: 50rpx;
	}

	.loc {
		width: 30rpx;
		height: 37rpx;
	}

	.jian {
		width: 14rpx;
		height: 25rpx;
		margin-right: 20rpx;
	}

	.dizhi {
		margin-left: 15rpx;
	}
</style>
