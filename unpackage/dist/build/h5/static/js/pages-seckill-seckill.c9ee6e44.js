(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-seckill-seckill"],{"29ed":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uSwiper:e("df3e").default,uLineProgress:e("8d9f").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"bgbox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.gopin.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:e("f8e5"),mode:""}})],1),a("v-uni-view",{staticClass:"listitem"},[a("v-uni-view",{staticClass:"end-title"},[a("v-uni-view",t._l(t.begintime,(function(i,e){return a("v-uni-view",{staticClass:"card",class:{btna:t.count==e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change(e)}}},[a("v-uni-view",{staticClass:"titlebox"},[t._v(t._s(t._f("dateFormat")(i))),t.endtime[e]>t.nowtime&&t.nowtime>=i?a("span",[t._v("开抢中")]):t.nowtime<i?a("span",[t._v("即将开抢")]):t.nowtime>i?a("span",[t._v("已结束")]):t._e()]),a("v-uni-view",{staticClass:"line"})],1)})),1)],1),a("v-uni-view",{staticClass:"end-cont",class:{dis:0==t.btnnum}},t._l(t.qianggoodslist,(function(i){return a("v-uni-view",{staticClass:"goods"},[a("v-uni-view",{staticClass:"goodsimg"},[a("u-swiper",{attrs:{list:i.imglist,mode:"none","border-radius":"0",height:"352",width:"702"}})],1),a("p",{staticClass:"goodsname"},[t._v(t._s(i.name))]),t.nowtime>=i.begintime&&i.endtime>t.nowtime?a("v-uni-view",{staticClass:"jindubox"},[a("v-uni-view",{staticClass:"left jindu"},[a("u-line-progress",{attrs:{"active-color":"#FD5052","inactive-color":"#F2ABA9",percent:i.sellnum/i.totalnum*100,height:"12","show-percent":!1}})],1),a("v-uni-view",{staticClass:"right status"},[t._v("抢购中")])],1):t.nowtime>i.endtime?a("v-uni-view",{staticClass:"jindubox"},[a("v-uni-view",{staticClass:"right status"},[t._v("已结束")])],1):t.nowtime<i.begintime?a("v-uni-view",{staticClass:"jindubox"},[a("p",{staticClass:"nums"},[t._v("限量"+t._s(i.totalnum)+"件|"+t._s(t._f("dateFormat")(i.begintime)))])]):t._e(),t.nowtime>=i.begintime&&i.endtime>t.nowtime?a("v-uni-view",{staticClass:"bottombox"},[a("v-uni-view",{staticClass:"left"},[a("p",[a("span",{staticClass:"miao"},[t._v("秒杀价 ¥")]),a("span",{staticClass:"miaop"},[t._v(t._s(i.miaoprice))])]),a("p",{staticClass:"notice"},[t._v("最低价，即将恢复原价")])]),a("v-uni-view",{staticClass:"right btns",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goosinfo.apply(void 0,arguments)}}},[t._v("立即购买")])],1):t.nowtime<i.begintime?a("v-uni-view",{staticClass:"bottombox"},[a("v-uni-view",{staticClass:"left"},[a("p",{staticClass:"jjkq"},[a("span",{staticClass:"miao"},[t._v("秒杀价 ¥")]),a("span",{staticClass:"miaop"},[t._v(t._s(i.miaoprice))])])]),t.nowtime<i.begintime?a("v-uni-view",{staticClass:"right btns jjkqbtn"},[t._v("即将开抢")]):t._e()],1):t.nowtime>i.endtime?a("v-uni-view",{staticClass:"bottombox"},[a("v-uni-view",{staticClass:"left"},[a("p",{staticClass:"notice"},[t._v("抢购结束，已恢复原价")])]),a("v-uni-view",{staticClass:"right btns"},[t._v("抢购结束")])],1):t._e()],1)})),1),a("v-uni-view",{staticClass:"end-cont",class:{dis:1==t.btnnum}},t._l(t.qianggoodslist2,(function(i){return a("v-uni-view",{staticClass:"goods"},[a("v-uni-view",{staticClass:"goodsimg"},[a("u-swiper",{attrs:{list:i.imglist,mode:"none","border-radius":"0",height:"352",width:"702"}})],1),a("p",{staticClass:"goodsname"},[t._v(t._s(i.name))]),t.nowtime>=i.begintime&&i.endtime>t.nowtime?a("v-uni-view",{staticClass:"jindubox"},[a("v-uni-view",{staticClass:"left jindu"},[a("u-line-progress",{attrs:{"active-color":"#FD5052","inactive-color":"#F2ABA9",percent:i.sellnum/i.totalnum*100,height:"12","show-percent":!1}})],1),a("v-uni-view",{staticClass:"right status"},[t._v("抢购中")])],1):t.nowtime>i.endtime?a("v-uni-view",{staticClass:"jindubox"},[a("v-uni-view",{staticClass:"right status"},[t._v("已结束")])],1):t.nowtime<i.begintime?a("v-uni-view",{staticClass:"jindubox"},[a("p",{staticClass:"nums"},[t._v("限量"+t._s(i.totalnum)+"件|"+t._s(t._f("dateFormat")(i.begintime)))])]):t._e(),t.nowtime>=i.begintime&&i.endtime>t.nowtime?a("v-uni-view",{staticClass:"bottombox"},[a("v-uni-view",{staticClass:"left"},[a("p",[a("span",{staticClass:"miao"},[t._v("秒杀价 ¥")]),a("span",{staticClass:"miaop"},[t._v(t._s(i.miaoprice))])]),a("p",{staticClass:"notice"},[t._v("最低价，即将恢复原价")])]),a("v-uni-view",{staticClass:"right btns",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.goosinfo.apply(void 0,arguments)}}},[t._v("立即购买")])],1):t.nowtime<i.begintime?a("v-uni-view",{staticClass:"bottombox"},[a("v-uni-view",{staticClass:"left"},[a("p",{staticClass:"jjkq"},[a("span",{staticClass:"miao"},[t._v("秒杀价 ¥")]),a("span",{staticClass:"miaop"},[t._v(t._s(i.miaoprice))])])]),t.nowtime<i.begintime?a("v-uni-view",{staticClass:"right btns jjkqbtn"},[t._v("即将开抢")]):t._e()],1):t.nowtime>i.endtime?a("v-uni-view",{staticClass:"bottombox"},[a("v-uni-view",{staticClass:"left"},[a("p",{staticClass:"notice"},[t._v("抢购结束，已恢复原价")])]),a("v-uni-view",{staticClass:"right btns"},[t._v("抢购结束")])],1):t._e()],1)})),1)],1)],1)},s=[]},"2e71":function(t,i,e){"use strict";var a=e("afc7"),n=e.n(a);n.a},"38f5":function(t,i,e){"use strict";(function(t){var a=e("4ea4");e("d3b7"),e("e25e"),e("25f0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("ade3")),s=(e("834c"),{data:function(){return{btnnum:0,count:"",begintime:["1621503537000","1638523800000"],endtime:["1639993200000","1639993200000"],nowtime:"",qianggoodslist:[{name:"铜仁特产黄水粑4只装",imglist:[(0,n.default)({file_path:"https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg"},"file_path","https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg")],totalnum:100,sellnum:40,begintime:"1621503537000",endtime:"1639993200000",miaoprice:5.2},{name:"美味蛋糕",imglist:[(0,n.default)({file_path:"https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg"},"file_path","https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg")],totalnum:180,sellnum:40,begintime:"1621503537000",endtime:"1639993200000",miaoprice:5.5}],qianggoodslist2:[{name:"精品糕点",imglist:[(0,n.default)({file_path:"https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg"},"file_path","https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg")],totalnum:190,sellnum:100,begintime:"1638523800000",endtime:"1639993200000",miaoprice:13},{name:"黄焖鸡米饭",imglist:[(0,n.default)({file_path:"https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg"},"file_path","https://img.alicdn.com/imgextra/i1/2207906283478/O1CN01Yy6TQh1bYy7AEEaHO_!!2207906283478.jpg")],totalnum:200,sellnum:40,begintime:"1638523800000",endtime:"1639993200000",miaoprice:7}]}},methods:{change:function(i){this.count=i,this.btnnum=i,t("log",this.count," at pages/seckill/seckill.vue:220")},gettime:function(){var i=(new Date).getTime();this.nowtime=i.toString(),t("log",i," at pages/seckill/seckill.vue:225")},goosinfo:function(){t("log",111," at pages/seckill/seckill.vue:228")},gopin:function(){uni.navigateTo({url:"./group"})}},filters:{dateFormat:function(i){t("log",i," at pages/seckill/seckill.vue:238");var e=i;function a(t){var i=parseInt(e),a=new Date(i),n=a.getHours();n=n<10?"0"+n:n;var s=a.getMinutes();s=s<10?"0"+s:s;var o=n+":"+s;return o}var n=a(i);return n}},mounted:function(){this.gettime()}});i.default=s}).call(this,e("0de9")["log"])},"40a1":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bgbox[data-v-210ed358]{width:%?750?%;text-align:center;height:%?389?%;background:-webkit-linear-gradient(top,#d73729,#f5826d);background:linear-gradient(180deg,#d73729,#f5826d)}.bgbox uni-image[data-v-210ed358]{width:%?726?%;height:%?311?%}.listitem[data-v-210ed358]{width:100%;min-height:%?400?%;height:auto;border-radius:%?40?% %?40?% 0 0;background:#fff;margin-top:%?-60?%}.end-title[data-v-210ed358]{height:%?87?%;display:-webkit-box;display:-webkit-flex;display:flex;width:%?698?%;color:#1a1b1b;background-color:#fff;border-radius:22px 22px 0 0;z-index:999}.end-title uni-view[data-v-210ed358]{-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;text-align:center}.btna[data-v-210ed358]{color:#ef1e22}.btna .line[data-v-210ed358]{width:%?163?%;height:%?4?%;background:#fd5052;margin:auto}.end-cont[data-v-210ed358]{display:none;width:100%}.dis[data-v-210ed358]{display:block}.card[data-v-210ed358]{width:calc(%?698?%/2);box-sizing:border-box;line-height:%?87?%}.titlebox[data-v-210ed358]{height:%?70?%}.card[data-v-210ed358]:first-of-type{float:left}.card[data-v-210ed358]:last-of-type{float:right}.goods[data-v-210ed358]{width:%?704?%;height:%?586?%;border-bottom:1px solid #e5e5e5;margin:auto;margin-bottom:%?50?%}.goodsimg[data-v-210ed358]{width:%?704?%;height:%?352?%}.goodsname[data-v-210ed358]{margin-top:%?20?%}.jindubox[data-v-210ed358]{width:100%;height:%?30?%;line-height:%?30?%}.jindu[data-v-210ed358]{width:%?583?%}.status[data-v-210ed358]{color:#676767;font-size:%?26?%}.bottombox[data-v-210ed358]{margin-top:%?30?%;height:%?100?%}.miao[data-v-210ed358]{color:#df2911;font-size:%?26?%}.miaop[data-v-210ed358]{font-size:%?36?%;color:#df2911}.notice[data-v-210ed358]{color:#7b7b7b;font-size:%?20?%;margin-top:%?15?%}.btns[data-v-210ed358]{width:%?128?%;height:%?40?%;background:#fd5052;border-radius:%?20?%;text-align:center;line-height:%?40?%;color:#fff;font-size:%?24?%;margin-top:%?60?%}.nums[data-v-210ed358]{color:#df2911;font-size:%?24?%;margin-top:%?10?%}.jjkq[data-v-210ed358]{margin-top:%?40?%}.jjkqbtn[data-v-210ed358]{margin-top:%?50?%}',""]),t.exports=i},"834c":function(t,i,e){"use strict";e("4d63"),e("ac1f"),e("25f0"),e("5319"),Object.defineProperty(i,"__esModule",{value:!0}),i.dateFormat=n,i.dateFormatWithFmt=s,i.calcDate=void 0;var a=function(t,i){var e=i-t,a=Math.floor(e/864e5),n=e%864e5,s=Math.floor(n/36e5),o=n%36e5,l=Math.floor(o/6e4),r=o%6e4,c=Math.round(e/1e3);return{leave1:n,leave2:o,leave3:r,days:a,hours:s,minutes:l,seconds:c}};function n(t){return s(t)}function s(t,i){var e=i||"yyyy-MM-dd";if("string"===typeof t&&(t=new Date(t)),"Invalid Date"!==t){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e}return""}i.calcDate=a},"8a13":function(t,i,e){"use strict";e.r(i);var a=e("29ed"),n=e("d423");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("2e71");var o,l=e("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"210ed358",null,!1,a["a"],o);i["default"]=r.exports},afc7:function(t,i,e){var a=e("40a1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("fbdaa588",a,!0,{sourceMap:!1,shadowMode:!1})},d423:function(t,i,e){"use strict";e.r(i);var a=e("38f5"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},f8e5:function(t,i,e){t.exports=e.p+"static/img/pingtuan.abff02ba.png"}}]);