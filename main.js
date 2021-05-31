import Vue from 'vue'
import uView from "uview-ui";
Vue.use(uView);
let jweixin = require('jweixin-module')  
Vue.prototype.$wx = jweixin
import App from './App'
import {
	msg,
	isLogin,
	debounce,
	throttle,
	prePage,
	date
} from '@/common/js/util'
Vue.prototype.$util = {
	msg,
	isLogin,
	debounce,
	throttle,
	prePage,
	date
}

Vue.config.productionTip = false

App.mpType = 'app'
//自定义配置
import helper from 'util/helper.js';
Vue.prototype.$helper = helper;
import requests from './util/request.js'
Vue.prototype.$requests = requests
const app = new Vue({
    ...App
})
app.$mount()
