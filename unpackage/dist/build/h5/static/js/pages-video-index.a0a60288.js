(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-index"],{"07c6":function(t,e,i){"use strict";i.r(e);var n=i("c7d0"),r=i("07cd");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("fdfa");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"0008216a",null,!1,n["a"],o);e["default"]=c.exports},"07cd":function(t,e,i){"use strict";i.r(e);var n=i("cfa9"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"1fe4":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("e25e"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=n(i("b85c")),o=uni.getSystemInfoSync(),s=o.windowWidth,c=(o.platform,i("869b")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n=e.split("://")[0],r=n.length;i=e[r];r++){if("/"==i&&"/"!=e[r-1]&&"/"!=e[r+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(r),this[t]=n}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),r&&(this.search=function(e){return r(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var r,o=this.rtf.getElementsByTagName("style"),l=0;r=o[l++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var d=this,u=this.rtf.getElementsByTagName("title");u.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:u[0].innerText});var f=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var h,g=this.rtf.getElementsByTagName("img"),v=0,p=0;h=g[v];v++)parseInt(h.style.width||h.getAttribute("width"))>s&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=p++,d.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},d.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:d.imgList})}),h.onerror=function(){c.errorImg&&(d.imgList[this.i]=this.src=c.errorImg),d.$emit("error",{source:"img",target:this})},d.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var m,b=this.rtf.getElementsByTagName("a"),y=(0,a.default)(b);try{for(y.s();!(m=y.n()).done;){var w=m.value;w.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(d.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])d.useAnchor&&d.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(M){y.e(M)}finally{y.f()}var x=this.rtf.getElementsByTagName("video");d.videoContexts=x;for(var _,T=0;_=x[T++];)f(_),_.style.maxWidth="100%",_.onerror=function(){d.$emit("error",{source:"video",target:this})},_.onplay=function(){if(d.autopause)for(var t,e=0;t=d.videoContexts[e++];)t!=this&&t.pause()};var k,C,A=this.rtf.getElementsByTagName("audio"),S=(0,a.default)(A);try{for(S.s();!(k=S.n()).done;){var B=k.value;f(B),B.onerror=function(){d.$emit("error",{source:"audio",target:this})}}}catch(M){S.e(M)}finally{S.f()}if(this.autoscroll){var I,L=this.rtf.getElementsByTagName("table"),O=(0,a.default)(L);try{for(O.s();!(I=O.n()).done;){var E=I.value,z=document.createElement("div");z.style.overflow="scroll",E.parentNode.replaceChild(z,E),z.appendChild(E)}}catch(M){O.e(M)}finally{O.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==C&&(i.$emit("ready",i.rect),clearInterval(i._timer)),C=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var n=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var n in c.userAgentStyles)i+="".concat(n,"{").concat(c.userAgentStyles[n],"}");for(n in this.tagStyle)i+="".concat(n,"{").concat(this.tagStyle[n],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=l},3890:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bgimg[data-v-0008216a]{width:100%;height:%?600?%;position:relative}.bgimg .img1[data-v-0008216a]{position:fixed;z-index:88;width:%?15?%;height:%?27?%;margin-top:44px;margin-left:%?40?%}.bgimg uni-video[data-v-0008216a]{width:100%;height:%?500?%;position:absolute}.home-banner uni-swiper[data-v-0008216a]{width:100%;height:%?746?%}.home-banner uni-swiper uni-image[data-v-0008216a]{width:100%;height:100%;position:absolute}.musiclist[data-v-0008216a]{line-height:%?48?%;height:%?48?%;background:rgba(10,0,0,.53);width:100%;position:absolute;padding:0 %?34?%;bottom:%?113?%}.musiclist .music[data-v-0008216a]{width:%?38?%;height:%?39?%;margin-top:%?4?%;z-index:30}.musiclist .listbtn[data-v-0008216a]{height:100%;width:%?93?%;border-radius:%?7?%;background:rgba(134,133,133,.69);text-align:center;color:#fff}.musiclist .keywords[data-v-0008216a]{color:#fff;width:%?400?%;margin-left:%?18?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.musiclist .keywords span[data-v-0008216a]{margin-right:%?20?%}.mainbox[data-v-0008216a]{width:100%;min-height:%?400?%;height:auto;margin-top:%?-90?%;z-index:1000;border-top-left-radius:%?50?%;border-top-right-radius:%?50?%;background:#fff}.mainbox .topbox[data-v-0008216a]{text-align:center;height:%?90?%;margin-top:%?40?%;padding:0 %?50?%}.addname[data-v-0008216a]{font-size:%?40?%;padding-bottom:%?10?%}.loction[data-v-0008216a]{color:#656363;font-size:13px}.btnimg[data-v-0008216a]{width:%?30?%;height:%?30?%}.btns[data-v-0008216a]{width:%?150?%;font-size:12px;text-align:center}.explain[data-v-0008216a]{width:%?663?%;margin:auto;height:%?76?%;line-height:%?56?%;margin-top:%?60?%;border-bottom:2px solid #e5e5e5}.voicebox[data-v-0008216a]{width:%?533?%;background:#f7f7f7;border-radius:11px;height:%?56?%}.voicebox .mic[data-v-0008216a]{width:%?20?%;height:%?28?%;margin-top:%?15?%;margin-left:%?19?%}.title[data-v-0008216a]{width:%?663?%;margin:auto;height:%?33?%;margin-top:%?18?%}.title .a[data-v-0008216a]{margin-left:%?10?%}.line[data-v-0008216a]{width:%?6?%;height:%?33?%;background:#09bb07}.richtext[data-v-0008216a]{min-height:%?500?%;height:auto;width:%?718?%;margin:auto;margin-top:%?27?%;border-radius:16px}.yd[data-v-0008216a]{width:100%;height:%?100?%;background:#00972e;text-align:center;line-height:%?100?%;position:fixed;bottom:%?0?%;left:%?0?%;z-index:99999;color:#fff;font-size:%?30?%;font-weight:700}',""]),t.exports=e},5923:function(t,e,i){"use strict";var n=i("9dec"),r=i.n(n);r.a},"60c4":function(t,e,i){"use strict";i.r(e);var n=i("f784"),r=i("f791");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("5923");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"c95c97b2",null,!1,n["a"],o);e["default"]=c.exports},7513:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-c95c97b2{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},"869b":function(t,e,i){i("ac1f"),i("1276");var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}t.exports=n},"9dec":function(t,e,i){var n=i("7513");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("69d260cb",n,!0,{sourceMap:!1,shadowMode:!1})},b180:function(t,e,i){var n=i("3890");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1b45c998",n,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=r(i("06c5"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(c)throw o}}}}},c7d0:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uParse:i("60c4").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"bgimg"},[t.videoShow&&t.detail.video?i("v-uni-video",{attrs:{id:"myVideo","object-fit":"cover",src:t.detail.video.file_path,controls:!0,autoplay:"true"}}):t._e()],1),i("v-uni-view",{staticClass:"mainbox"},[i("v-uni-view",{staticClass:"topbox"},[i("v-uni-view",{staticClass:"left addr"},[i("v-uni-view",{staticClass:"addname"},[t._v(t._s(t.detail.article_title))]),i("v-uni-view",{staticClass:"loction"},[t._v(t._s(t.detail.article_subtitle))])],1)],1),i("v-uni-view",{staticClass:"richtext"},[i("u-parse",{attrs:{html:t.detail.article_content}})],1)],1)],1)},a=[]},cfa9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{detail:{image:{}},current:0,article_id:0,videoShow:!0}},onLoad:function(t){this.video_id=t.video_id,this.getList()},methods:{back:function(){uni.navigateBack({delta:1})},getList:function(){var t=this;this.$requests("column/video",{video_id:this.video_id}).then((function(e){t.detail=e.detail}))},onSwiperChange:function(t){this.current=t.detail.current},golist:function(){uni.navigateTo({url:"/pages/scenic/musiclist"})}}};e.default=n},f784:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},f791:function(t,e,i){"use strict";i.r(e);var n=i("1fe4"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},fdfa:function(t,e,i){"use strict";var n=i("b180"),r=i.n(n);r.a}}]);