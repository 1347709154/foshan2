const baseUrl = 'https://fds.gzlsf.cn/index.php?s=/api/'
const request = (url = '', date = {
	wxapp_id: 10001
}, type = 'GET', header = {}) => {
	let datas = date || {};
	datas.wxapp_id = 10001;
	datas.token=uni.getStorageSync('token');

	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: baseUrl + url,
			data: datas,
			header: header,
			dataType: 'json',
		}).then((response) => {

			setTimeout(function() {
				uni.hideLoading();
			}, 200);
			let [error, res] = response;
			if(res.header && res.header.status ==500){
				uni.showToast({
					title:'网络请求错误',
					icon:'none'
				})
				return;
			}
			if (res.data.code === 0) {
				uni.showModal({
					title: '友情提示',
					content: res.data.msg,
					showCancel: false,
					success: function(res) {}
				});
				return;
			}
			if (res.data && res.data.code == -1) {
				uni.redirectTo({
					url: '/pages/login/login'
				})
			}

			resolve(res.data.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request
