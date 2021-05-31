<template>
	<view class="content">
		<view class="top"></view>
		<!-- 身份证信息 -->
		<view class="card-inpt" v-if="user && user.real_name==''">
			<view class="user-name">
				<view style="line-height: 150rpx;">
					<text style="color: red;">*</text>
					<label>真实姓名</label>
				</view>
				<view class="user-name-ipt" style="margin-left: 10rpx;">
					<input v-model="name"  placeholder-style="font-size: 24rpx;" placeholder="请输入您的真实姓名，认证后不可更改" />
				</view>
			</view>
			<view class="user-name">
				<view style="line-height: 150rpx;">
					<text style="color: red;">*</text>
					<label>身份证号</label>
				</view>
				<view class="user-name-ipt" style="margin-left: 10rpx;">
					<input v-model="id_card" type="idcard" placeholder-style="font-size: 24rpx;" placeholder="请输入您的真实姓名对应的身份证号" />
				</view>
			</view>
		</view>
		<view class="card-inpt" v-else>
			<view class="user-name">
				<view style="line-height: 150rpx;">
					<text style="color: red;">*</text>
					<label>真实姓名</label>
				</view>
				<view class="user-name-ipt" style="margin-left: 10rpx;">
					<input v-model="user.real_name" v-bind:readonly="true"  placeholder-style="font-size: 24rpx;" placeholder="请输入您的真实姓名，认证后不可更改" />
				</view>
			</view>
			<view class="user-name">
				<view style="line-height: 150rpx;">
					<text style="color: red;">*</text>
					<label>身份证号</label>
				</view>
				<view class="user-name-ipt" style="margin-left: 10rpx;">
					<input v-model="user.id_card" type="idcard" placeholder-style="font-size: 24rpx;" placeholder="请输入您的真实姓名对应的身份证号" />
				</view>
			</view>
		</view>
		<!-- 上传照片 -->
		<view class="img-card" v-if="user.real_name==''">
			<view class="img-card-tetel">请上传身份证照片</view>
			<view class="idcard-img">
				<view class="idcard-img-box" style="margin-right: 20rpx;" @click="chooseImage()">
					<image :src="b1" mode="aspectFill"></image>
				</view>
				<view class="idcard-img-box" @click="chooseImage2()">
					<image :src="b2" mode="aspectFill"></image>
				</view>
			</view>
			<view class="idcard-tel">
				<image src="/static/user/sigh.png" mode="aspectFill"></image>
				<view class="idcard-tel-te">
					<view>证件必须是清晰彩色原件电子版本。可以是扫描件或者数码拍摄 照片。</view>
					<view>支持jpg、png、jpeg的图片格式</view>
				</view>
			</view>
			<view class="Submit" @click="submit">确定上传</view>
		</view>
		<view class="img-card" v-else>
			<p style="padding-top: 40rpx;text-align: center;font-size: 32rpx;font-weight: bold;">恭喜您已完成实名认证！</p>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				id_card: '',
				b1_id: '',
				b2_id: '',
				id_card: '',
				b1:'/static/user/idcard-1.png',
				b2:'/static/user/idcard-2.png',
				user:{}
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList: function() {
				this.$requests('user/detail', {
				}).then(res => {
					this.user = res.userInfo;
					
				})
			
			},
			
			submit() {
				const {
					name,
					id_card,
					b1_id,
					b2_id
				} = this;
				if (!name) {
					this.$util.msg('请输入姓名');
					return;
				}	
				if (!id_card) {
					this.$util.msg('请输入身份证号码');
					return;
				}
				if (!b1_id) {
					this.$util.msg('请上传身份证正面');
					return;
				}
				if (!b2_id) {
					this.$util.msg('请上传身份证反面');
					return;
				}
				this.$requests('user/upInfo', {
					name,
					id_card,
					b1_id,
					b2_id
				}, 'POST').then(res => {
			
					this.$util.msg('上传成功');
					setTimeout(() => {
						uni.switchTab({
							url: "../my/index"
						})
					}, 1000)
				});
			},
			
			
			//选择头像
			chooseImage(e) {
				uni.chooseImage({
					count: 1,
					success: res => {
						this.uploadFile(res.tempFilePaths[0])
					}
				});
			},
			chooseImage2(e) {
				uni.chooseImage({
					count: 1,
					success: res => {
						this.uploadFile2(res.tempFilePaths[0])
					}
				});
			},
			/**
			 * 上传图片
			 */
			uploadFile: function(filePath, callBack, formData) {
				let _this = this;
				let uploaded = [];
				// 文件上传
				let i = 0;

				uni.uploadFile({
					url: 'https://fds.gzlsf.cn/index.php?s=/api/upload/image',
					filePath: filePath,
					name: 'iFile',
					formData: {
						wxapp_id: 10001,
						token: uni.getStorageSync('token')
					},
					success: function(res) {
						let result = typeof res.data === "object" ? res.data : JSON.parse(res.data);
						if (!result.data.file_id) {
							_this.$util.msg('头像上传失败');
							return;
						}
						_this.b1 = result.data.file_path;
						_this.b1_id = result.data.file_id;
					},
					complete: function() {

						// 所有文件上传完成
						console.log('upload complete');


					}
				});

			},
			/**
			 * 上传图片
			 */
			uploadFile2: function(filePath, callBack, formData) {
				let _this = this;
				let uploaded = [];
				// 文件上传
				let i = 0;
			
				uni.uploadFile({
					url: 'https://fds.gzlsf.cn/index.php?s=/api/upload/image',
					filePath: filePath,
					name: 'iFile',
					formData: {
						wxapp_id: 10001,
						token: uni.getStorageSync('token')
					},
					success: function(res) {
						let result = typeof res.data === "object" ? res.data : JSON.parse(res.data);
						if (!result.data.file_id) {
							_this.$util.msg('头像上传失败');
							return;
						}
						_this.b2 = result.data.file_path;
						_this.b2_id = result.data.file_id;
					},
					complete: function() {
			
						// 所有文件上传完成
						console.log('upload complete');
			
			
					}
				});
			
			},
		}
	}
</script>

<style>
	page {
		background: #EDEDED;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.top {
		background: #15A03F;
		height: 300rpx;
		width: 100%;
	}

	/* 身份信息 */
	.card-inpt {
		background: #ffffff;
		width: 96%;
		height: 300rpx;
		border-radius: 10rpx;
		margin-top: -200rpx;
		padding: 0rpx 32rpx;
	}

	.user-name {
		height: 150rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		font-size: 30rpx;
		font-weight: bold;
	}

	.user-name-ipt {
		border: 1rpx solid #ddd;
		height: 100rpx;
		margin-top: 25rpx;
		padding: 0rpx 10rpx;
		width: 480rpx;


	}

	.user-name-ipt>input {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 32rpx;
		color: #000000;
	}

	/* 上传照片 */
	.img-card {
		background: #ffffff;
		border-radius: 15rpx;
		height: 800rpx;
		width: 96%;
		margin-top: 30rpx;
		padding: 0 20rpx;
	}

	.img-card-tetel {
		margin-top: 50rpx;
		color: #999999;
		font-size: 38rpx;
		font-weight: bold;
		text-align: left;
	}
	.img-card span{
		text-align: center;
		padding-top: 40rpx;
		font-weight: bold;
		font-size: 32rpx;
	}
	.idcard-img {
		margin-top: 50rpx;
		height: 300rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.idcard-img-box {
		background: #F0F8FA;
		padding: 10rpx;
		border: 2rpx dashed #DCE4E5;

	}

	.idcard-img-box>image {
		width: 310rpx;
		height: 250rpx;
	}

	.idcard-tel {
		margin-top: 30rpx;
		text-align: left;
		display: flex;
		flex-direction: row;
	}

	.idcard-tel>image {
		width: 50rpx;
		height: 40rpx;
		margin-top: 25rpx;
	}

	.idcard-tel-te {
		display: flex;
		flex-direction: column;
		margin-left: 10rpx;
		font-size: 24rpx;
		color: #999999;
	}

	.Submit {
		width: 250rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 36rpx;
		font-weight: bold;
		text-align: center;
		color: #FFFFFF;
		background: #3B4D71;
		margin-left: 35%;
		margin-top: 100rpx;
	}
</style>
