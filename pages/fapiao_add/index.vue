<template>
	<view class="content">
		<view class="from">
			<u-field v-model="name" label="发票抬头" placeholder="请输入公司名称（必填）"></u-field>
			<u-field v-model="code" label="识别号" placeholder="(选填）"></u-field>
			<u-field v-model="e_email" label="电子邮箱" placeholder="(必填）"></u-field>
			<u-field v-model="address" label="注册地址" placeholder="(选填）"></u-field>
			<u-field v-model="tel" label="注册电话" placeholder="(选填）"></u-field>
			<u-field v-model="bank_name" label="开户银行" placeholder="(选填）"></u-field>
			<u-field v-model="bank_no" label="银行账户" placeholder="(选填）" :border-bottom="false"></u-field>
		</view>
		<u-radio-group class="radio">
			<u-radio shape="circle" style="color: #333333;">设为默认发票抬头</u-radio>
		</u-radio-group>
		<view class="Submit" @click="submit">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				code: '',
				e_email: '',
				address: '',
				tel: '',
				bank_name: '',
				bank_no: '',
			}
		},
		onLoad() {

		},
		methods: {
			submit() {
				const {
					name,
					code,
					e_email,
					address,
					tel,
					bank_name,
					bank_no
				} = this;
				if (!name) {
					this.$util.msg('请输入发票抬头');
					return;
				}
				if (!e_email) {
					this.$util.msg('请输入邮箱');
					return;
				}


				this.$requests('user/addInv', {
					name,
					code,
					e_email,
					address,
					tel,
					bank_name,
					bank_no
				}, 'POST').then(res => {
					this.$util.msg('添加成功');
				
					setTimeout(() => {
						uni.navigateBack({
							
						})
					}, 1000)
				});
			},
		}
	}
</script>

<style>
	page {
		background: #F2F5FA;
	}

	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center;
		justify-content: center; */
	}

	.from {
		background: #ffffff;
		margin-top: 30rpx;
		width: 96%;
		border-radius: 20rpx;
		padding: 20rpx;
		margin-left: 2%;
	}

	.radio {
		width: 96%;
		margin-left: 2%;
		text-align: left;
		margin-top: 20rpx;

	}

	.Submit {
		width: 90%;
		margin-left: 5%;
		height: 70rpx;
		line-height: 70rpx;
		background: #15A03F;
		color: #ffffff;
		font-size: 32rpx;
		text-align: center;
		border-radius: 35rpx;
		margin-top: 150rpx;
	}
</style>
