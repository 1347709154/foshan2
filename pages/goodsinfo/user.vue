<template>
	<view class="content">
		<view class="add-card">
			<u-field label="姓名" @input="nameInput" placeholder="请填写姓名"></u-field>
			<u-field label="手机号" @input="phoneInput" placeholder="请填写手机号"></u-field>
			<u-field label="身份证号" @input="idCradInput" placeholder="请填写身份证号"></u-field>


		</view>
		<view class="bt" @click="submit()">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				sex: '1',
				tag: '1',
				name: '',
				phone: '',
				id_card: '',
				checked: true,
			}
		},
		onLoad() {

		},
		methods: {
			submit() {
				const {
					name,
					phone,
					id_card
				} = this;
				if (!name) {
					this.$util.msg('请输入姓名');
					return;
				}
				if (!phone) {
					this.$util.msg('请输入手机号');
					return;
				}
				if (!id_card) {
					this.$util.msg('请输入身份证号');
					return;
				}
				this.$requests('user/submit', {
					name,
					phone,
					id_card
				}, 'POST').then(res => {
			
					this.$util.msg('添加成功');
					setTimeout(() => {
						uni.navigateBack();
					}, 1000)
				});
			},
			nameInput: function(value) {
				this.name = value
			},
			phoneInput: function(value) {
				this.phone = value
			},
			idCradInput: function(value) {
				this.id_card = value
			},
		}
	}
</script>

<style>
	page {
		background: #F5F5F5;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.add-card {
		width: 94%;
		border-radius: 20rpx;
		background: #ffffff;
		margin-top: 30rpx;
	}

	.radio {
		color: #000000;
	}

	.tag {
		color: #000000;
	}

	.van-tag {
		display: flex;
		flex-direction: row;
		text-align: left;
		margin-left: 40rpx;
	}

	.tag-list {
		margin-left: 40rpx;
		border-radius: 20rpx;
		background: #F5F5F5;
		color: #A0A0A0;
		width: 80rpx;
		border-radius: 10rpx;
		margin-left: 50rpx;
		text-align: center;
	}

	.tag-lists {
		background: #15A03F;
		border-radius: 10rpx;
		color: #ffffff;
		margin-left: 50rpx;
		width: 80rpx;
		text-align: center;
	}

	.bt {
		position: absolute;
		bottom: 50%;
		background: #07C160;
		color: #ffffff;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		width: 80%;
		border-radius: 40rpx;
	}
</style>
