(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-live-index"],{"2b48":function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return a}));var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"content"},t._l(t.listdata,(function(n){return i("v-uni-view",{staticClass:"item-list",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goinfo(n.live_id)}}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(n.title))]),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"left time"},[t._v(t._s(n.create_time))]),i("v-uni-view",{staticClass:"right addr"},[t._v(t._s(n.admin))])],1)],1)})),1)},r=[]},"4a73":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{listdata:[],list:1,page:0,status:"loadmore",iconType:"flower",loadText:{loadmore:"轻轻上拉",loading:"努力加载中",nomore:"实在没有了"}}},onLoad:function(){this.getList()},methods:{getList:function(){var t=this;this.$requests("article/liveList",{}).then((function(n){t.listdata=n.list}))},goinfo:function(t){uni.navigateTo({url:"./live?live_id="+t})}},onReachBottom:function(){var t=this;this.page>=3||(this.status="loading",this.page=this.page+1,setTimeout((function(){t.page>=3?t.status="nomore":t.status="loading"}),2e3))}};n.default=a},"6a65":function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-46f6b2a0]{background-color:#f5f3f3}.item-list[data-v-46f6b2a0]{width:100%;padding:0 %?38?%;height:%?188?%;margin-top:%?9?%;background:#fff}.title[data-v-46f6b2a0]{font-size:18px;font-weight:600;margin-top:%?38?%}.bottom[data-v-46f6b2a0]{margin-top:%?60?%;font-size:12px;color:#686666}body.?%PAGE?%[data-v-46f6b2a0]{background-color:#f5f3f3}',""]),t.exports=n},"70d2":function(t,n,i){"use strict";var a=i("f7d1"),e=i.n(a);e.a},"82aa":function(t,n,i){"use strict";i.r(n);var a=i("2b48"),e=i("88c1");for(var r in e)"default"!==r&&function(t){i.d(n,t,(function(){return e[t]}))}(r);i("70d2");var o,s=i("f0c5"),u=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"46f6b2a0",null,!1,a["a"],o);n["default"]=u.exports},"88c1":function(t,n,i){"use strict";i.r(n);var a=i("4a73"),e=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(n,t,(function(){return a[t]}))}(r);n["default"]=e.a},f7d1:function(t,n,i){var a=i("6a65");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("ce3434ac",a,!0,{sourceMap:!1,shadowMode:!1})}}]);