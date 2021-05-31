<template>
	<view class="content">
		<view class="top">我的</view>
		<view class="card">
			<view class="card-img">
				<image :src="user.avatarUrl"></image>
			</view>
			<view class="card-name">
				<view class="">
					<view style="font-size: 36rpx;font-weight: bold;"> {{clerk.real_name}}</view>
					<view style="color: #7B7B7B;">手机号：{{clerk.mobile}}</view>
				</view>

			</view>
		</view>
		<view class="card">
			<view class="card-ul" @click="bindsaoQRcode">
				<image src="../../static/sao.png" mode="aspectFit"></image>
				<view>扫码核验</view>
			</view>
			<view class="card-ul" v-if="list[index]">
				<image src="../../static/scen.png" mode="aspectFit"></image>
				<picker mode="selector" @change="bindPickerChange" :value="list" :range="list" :range-key="'title'"
					class="card-pick">
					<view @click="choices" style="float: left;color: #1F1F1F;font-size: 28rpx;">{{list[index].title}}
					</view>
					<u-icon v-if="choice==false" @click="choices" name="arrow-down-fill" color="#1F1F1F" size="35"
						style="margin-left: 5rpx;"></u-icon>
					<u-icon v-if="choice==true" @click="choices" name="arrow-up-fill" color="#1F1F1F" size="35"
						style="margin-left: 5rpx;"></u-icon>
				</picker>

			</view>
		</view>
		<view class="card" style="padding: 50rpx 32rpx;">
			<view class="card-ul" @click="bill">
				<image src="../../static/data.png" mode="aspectFit"></image>
				<view>票据录入</view>
			</view>
			<view class="card-ul" @click="sharetoWx">
				<image src="../../static/lu.png" mode="aspectFit"></image>
				<view>录入记录</view>
			</view>
		</view>
		<view class="phone"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				choice: false,
				index: 0,
				list: {},
				user: {},
				clerk: {},
				wxconfig: ''
			}
		},
		onShow() {
			this.getList();
		},
		methods: {
			getList: function() {
				this.$requests('admin/index', {
					key: this.key
				}).then(res => {
					if (res.clerk == null) {
						this.$util.msg('您没有权限操作此页面！');
						setTimeout(() => {
							uni.switchTab({
								url: '../index/index'
							})
						}, 1000)
					}
					this.user = res.user;
					this.clerk = res.clerk;
					this.list = res.list;
					this.sopt_id = res.list[0].id;
					this.wxinit(res.wxjs);
				})

			},
			wxinit(e) {
				let _this = this;
				this.$wx.config({
					debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: e.appId.toString(), // 必填，公众号的唯一标识
					timestamp: e.timestamp, // 必填，生成签名的时间戳
					nonceStr:e.nonceStr.toString(), // 必填，生成签名的随机串
					signature:e.signature.toString(), // 必填，签名
					jsApiList: ["scanQRCode",'onMenuShareTimeline'] // 必填，需要使用的JS接口列表
				});
				this.$wx.ready(function() {
					console.log("验证通过")
					_this.$wx.checkJsApi({
						jsApiList: ['scanQRCode','onMenuShareTimeline'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
						success: function(res) {
							console.log("res: " + res);
						}
					});
				});
				this.$wx.error(function(res) {
					console.log("验证失败")
				});
			},
			//扫码
			bindsaoQRcode: function() {
				this.$wx.scanQRCode({
					needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
					scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
					success: function(res) {
						console.log(res);
						console.log('扫码')
						var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
						window.location.href = result //安卓机型跳转渲染有问题 所以要加这句
					}
				});
			},
			sharetoWx() {
				this.$wx.onMenuShareTimeline({
					title: '我的分享测试', // 分享标题
					desc: '分享的内容', // 分享描述
					link: 'https://fds.gzlsf.cn/h5/pages/admin/admin', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: 'https://pic1.zhimg.com/da8e974dc_s.jpg', // 分享图标
					success: function() {
						toast("分享成功")
					}
				})

			},

			//箭头方向切换
			choices: function() {
				this.choice = !this.choice
			},
			//选择景点
			bindPickerChange: function(e) {
				let idx = e.target.value;
				if (idx != this.index && idx > 0) {
					this.index = idx,
						this.sopt_id = this.list[idx].id,
						this.choice = false
				}

			},
			//跳转资料编辑
			data: function() {
				uni.navigateTo({
					url: "/pages/data/index"
				})
			},
			//跳转票据录入
			bill: function() {
				uni.navigateTo({
					url: "/pages/bill/index"
				})
			},
			//跳转录入记录
			record: function() {
				uni.navigateTo({
					url: "/pages/record/index"
				})
			},
			//扫码核验
			scanCode: function() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			}
		}
	}
</script>

<style>
	page {
		background: #F4F7F8;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.top {
		width: 100%;
		text-align: center;
		height: 100rpx;
		line-height: 100rpx;
		background: #FFFFFF;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		z-index: 9;
		color: #1F1F1F;
		font-size: 32rpx;
	}

	.card {
		width: 96%;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 40rpx;
		padding: 30rpx 32rpx;
		display: flex;
		flex-direction: row;

	}

	.card-img {
		text-align: center;
	}

	.card-img>image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
	}

	.card-name {
		width: 100%;
		padding-left: 10rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.card-bt {
		width: 150rpx;
		text-align: center;
		line-height: 50rpx;
		color: #FFFFFF;
		width: 150rpx;
		height: 50rpx;
		background: #21A248;
		font-size: 28rpx;
		border-radius: 20rpx;
	}

	.card-ul {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.card-ul>image {
		width: 100rpx;
		height: 100rpx;
	}

	.card-pick {
		width: 100%;
		margin-top: 10rpx;
		color: #1F1F1F;
		font-size: 28rpx;
		float: left;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.card-pick>view {
		float: left;
	}

	.phone {
		margin-top: 50rpx;
		color: #D9D9D9;
	}

	.popup-box {
		padding-top: 50rpx;
	}

	.popup {
		margin-top: 50rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #ddd;
		width: 100%;
		text-align: center;

	}
</style>
