<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录</view>
			<view class="wechat item">
				<view class="icon">
					<u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon>
				</view>

			</view>
			<view class="wx">微信自动登录</view>

		</view>
		<view class="buttom">
			<view class="loginType">

			</view>
			<view class="hint">
				登录代表同意
				<text class="link"> 佛顶山生态旅游用户协议、隐私政策</text>
			</view>
		</view>
	</view>
</template>

<script>
	const base_url = 'https://fds.gzlsf.cn/h5/pages/login/login' // 前端域名
	const wx_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx96c03314814a08bc&redirect_uri=' +
		base_url +
		'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
	export default {
		data() {
			return {
				tel: ''
			}
		},
		onLoad() {
			// 获取URL 上code
			const code = this.getUrlParam('code')
			// 判断是否存在code
			if (code == null || code == '') {
				// 重新获取code
				window.location.href = wx_url
			} else {
				// 发送code           
				this.postCode(code)
			}
		},
		computed: {
			inputStyle() {
				let style = {};
				if (this.tel) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			// 解析URL 参数
			getUrlParam(name) {
				let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
				let r = window.location.search.substr(1).match(reg)
				if (r != null) {
					return unescape(r[2])
				}
				return null
			},
			// 发送code 获取信息
			postCode(code) {
				this.$requests('user/index', {
					code: code
				}).then(res => {
					uni.setStorageSync('token', res.token);
					uni.setStorageSync('user_id', res.user_id);
					uni.switchTab({
						url: '/pages/my/index'
					});
				})

			},
		}
	};
</script>

<style lang="scss" scoped>
	.wrap {
		.wx {
			padding-top: 30rpx;
			font-size: 32rpx;
		}

		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}

			.tips {
				color: $u-type-info;
				margin-bottom: 60rpx;
				margin-top: 8rpx;
			}

			.getCaptcha {
				background-color: rgb(253, 243, 208);
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
					text-align: center;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;
				text-align: center;

				.link {
					color: $u-type-warning;
				}
			}
		}
	}
</style>
