(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-collection-index"],{"168f":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{title:"Hello",list:{image:{}}}},onLoad:function(){this.getList()},methods:{getList:function(){var t=this;this.$requests("user/collectList",{}).then((function(i){t.list=i.list}))},ToDetail:function(t){uni.navigateTo({url:t})}}};i.default=n},"276b":function(t,i,e){"use strict";e.r(i);var n=e("168f"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"6b17":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-4923a446]{background:#f2f6f7}.content[data-v-4923a446]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-4923a446]{margin-top:%?25?%;font-size:%?34?%;font-weight:700}.list[data-v-4923a446]{width:94%;margin-top:%?20?%;background:#fff;border-radius:%?20?%;padding:%?25?% %?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.list-l[data-v-4923a446]{width:68%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;text-overflow:ellipsis;\n\t/* white-space: nowrap; */margin-right:%?10?%}.list-r[data-v-4923a446]{width:30%;text-align:right}.list-r>uni-image[data-v-4923a446]{width:%?210?%;height:%?200?%;border-radius:%?15?%}body.?%PAGE?%[data-v-4923a446]{background:#f2f6f7}",""]),t.exports=i},"80cf":function(t,i,e){"use strict";e.r(i);var n=e("d2bc"),a=e("276b");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("8e51");var l,r=e("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4923a446",null,!1,n["a"],l);i["default"]=s.exports},"8e51":function(t,i,e){"use strict";var n=e("b433"),a=e.n(n);a.a},b433:function(t,i,e){var n=e("6b17");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("7f525438",n,!0,{sourceMap:!1,shadowMode:!1})},d2bc:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},t._l(t.list,(function(i){return i.image?e("v-uni-view",{staticClass:"list",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ToDetail(i.url)}}},[e("v-uni-view",{staticClass:"list-l"},[5==i.type?e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.image.goods_name))]):e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.image.article_title))])],1),e("v-uni-view",{staticClass:"list-r"},[e("v-uni-image",{attrs:{src:i.image.image[0].file_path,mode:"scaleToFill"}})],1)],1):t._e()})),1)},o=[]}}]);