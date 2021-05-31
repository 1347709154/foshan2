<template>
	<view class="content">
		<view class="user-img">
			<image :src="userInfo.avatarUrl" mode="scaleToFill"></image>
		</view>
		<view class="card">
			<u-field type="text" v-model="userInfo.nickName" label="昵称" placeholder=""></u-field>
			<u-field v-model="userInfo.phone" type="number" label="手机" placeholder="请填写手机号">
				<!-- <u-button size="mini" slot="right" @click="getCode">更换手机号</u-button> -->
			</u-field>
			<u-cell-item title="性别" :arrow="false" class="radio">
				<view style="float: left;margin-left: 70rpx;">
					<label class="radio">
						<radio value="1" :checked="userInfo.gender==='男'" @click="radio('1')" color="#333"
							style="transform:scale(0.7)" />男
					</label>
					<label class="radio">
						<radio value="2" :checked="userInfo.gender==='女'" @click="radio('2')" color="#333"
							style="transform:scale(0.7)" />女
					</label>
				</view>
			</u-cell-item>
			<u-field type="text" v-model="userInfo.autograph" label="签名" placeholder="请输入您的签名"></u-field>
		</view>
		<u-button type="success" class="bt" @click="submit">保存</u-button>
		<!-- <view class="bt" @click="submit">保存</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				user_name: '',
				mobile: '',
				sex: '1',
					userInfo:{},

			}
		},
		onLoad() {
			this.getList();
		},
	
		methods: {
			getList: function() {
				this.$requests('user/detail', {}).then(res => {
					this.userInfo = res.userInfo;
				})
			},
			submit() {
				const {
					userInfo,
					
				} = this;
				if (!this.$u.test.mobile(userInfo.phone)) {
					this.$util.msg('请输入正确的手机号');
					return;
				}
	
				this.$requests('user/updateInfo', {
					userInfo
				}, 'POST').then(res => {
					this.$util.msg('更新成功');
					this.getList();
				});
			},
			
			
			getCode: function(e) {
				console.log(111111111)
			},
			radio: function(e) {
				this.userInfo.gender = e==1?'男':'女';
			}
		}
	}
</script>

<style>
	page {
		background: #F2F6F7;
	}
	.bt {

		margin-top: 150rpx;
		background: #07C160;
		color: #ffffff;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		width: 80%;
		border-radius: 40rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.user-img {
		height: 280rpx;
		width: 100%;
		background: #ffffff;
		display: flex;
		flex-direction: row;
		/* 	align-items: center; */
		justify-content: center;
	}

	.user-img>image {
		width: 170rpx;
		height: 170rpx;
		border-radius: 50%;
		margin-top: 30rpx;
	}

	.card {
		width: 100%;
		background: #ffffff;
		margin-top: 30rpx;
		padding: 0 32rpx;
	}

	.user-mobile {
		height: 80rpx;
		border-bottom: 1rpx solid #ddd;
	}

	.cell-item {
		color: #000000;
	}

	.radio {
		text-align: left;

	}
</style>
