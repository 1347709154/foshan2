(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goodsinfo-gettiket"],{"0f6b":function(t,e,r){"use strict";(function(t){var n=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("1da1")),i=n(r("40b6")),a={data:function(){return{}},onLoad:function(e){t("log",e," at pages/goodsinfo/gettiket.vue:34"),this.type=e.type,this.make()},methods:{make:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:i.default.make({canvasId:"qrcode",componentInstance:e,text:"https://fds.gzlsf.cn/h5/pages/goodsinfo/clerk?order_id=1",size:204,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:i.default.errorCorrectLevel.H,success:function(e){t("log",e," at pages/goodsinfo/gettiket.vue:52")}});case 1:case"end":return r.stop()}}),r)})))()},back:function(){uni.navigateBack({})}}};e.default=a}).call(this,r("0de9")["log"])},"144e":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var n={uIcon:r("0953").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"fanhui"},[n("u-icon",{staticClass:"inc",attrs:{size:"40",name:"arrow-left",color:"#161616"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),t._v("支付")],1),n("v-uni-view",{staticClass:"title"},[n("v-uni-image",{staticClass:"chupiao left",attrs:{src:r("6c8c"),mode:""}}),n("v-uni-view",{staticClass:"left"},[t._v("出票成功")])],1),n("p",{attrs:{id:"notice"}},[t._v("入园消费时请向商家出示一下券码")]),n("v-uni-view",{staticClass:"line"}),n("p",{attrs:{id:"notice2"}},[t._v("入园核销码")]),n("v-uni-canvas",{staticClass:"qrcode",staticStyle:{width:"204px",height:"204px","text-align":"center"},attrs:{"canvas-id":"qrcode"}})],1)},i=[]},"2e36":function(t,e,r){var n=r("bb30");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("5e1b9279",n,!0,{sourceMap:!1,shadowMode:!1})},"40b6":function(t,e,r){"use strict";(function(t){r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={};(function(){function e(t){this.mode=o.MODE_8BIT_BYTE,this.data=t}function r(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}e.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},r.prototype={addData:function(t){var r=new e(t);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=f.getRSBlocks(t,this.errorCorrectLevel),r=new h,n=0,o=0;o<e.length;o++)n+=e[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];r.put(i.mode,4),r.put(i.getLength(),s.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[n][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=r.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=s.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,s=0;s<this.modules[i].length;s++){var u=s*o,l=this.modules[i][s];l&&(n.beginFill(0,100),n.moveTo(u,a),n.lineTo(u+o,a),n.lineTo(u+o,a+o),n.lineTo(u,a+o),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=s.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var u=0;u<2;u++)if(null==this.modules[n][a-u]){var l=!1;i<t.length&&(l=1==(t[i]>>>o&1));var c=s.getMask(e,n,a-u);c&&(l=!l),this.modules[n][a-u]=l,o--,-1==o&&(i++,o=7)}if(n+=r,n<0||this.moduleCount<=n){n-=r,r=-r;break}}}}},r.PAD0=236,r.PAD1=17,r.createData=function(t,e,n){for(var o=f.getRSBlocks(t,e),i=new h,a=0;a<n.length;a++){var u=n[a];i.put(u.mode,4),i.put(u.getLength(),s.getLengthInBits(u.mode,t)),u.write(i)}var l=0;for(a=0;a<o.length;a++)l+=o[a].dataCount;if(i.getLengthInBits()>8*l)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*l+")");i.getLengthInBits()+4<=8*l&&i.put(0,4);while(i.getLengthInBits()%8!=0)i.putBit(!1);while(1){if(i.getLengthInBits()>=8*l)break;if(i.put(r.PAD0,8),i.getLengthInBits()>=8*l)break;i.put(r.PAD1,8)}return r.createBytes(i,o)},r.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u++){var l=e[u].dataCount,f=e[u].totalCount-l;n=Math.max(n,l),o=Math.max(o,f),i[u]=new Array(l);for(var h=0;h<i[u].length;h++)i[u][h]=255&t.buffer[h+r];r+=l;var g=s.getErrorCorrectPolynomial(f),d=new c(i[u],g.getLength()-1),m=d.mod(g);a[u]=new Array(g.getLength()-1);for(h=0;h<a[u].length;h++){var v=h+m.getLength()-a[u].length;a[u][h]=v>=0?m.get(v):0}}var p=0;for(h=0;h<e.length;h++)p+=e[h].totalCount;var C=new Array(p),E=0;for(h=0;h<n;h++)for(u=0;u<e.length;u++)h<i[u].length&&(C[E++]=i[u][h]);for(h=0;h<o;h++)for(u=0;u<e.length;u++)h<a[u].length&&(C[E++]=a[u][h]);return C};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a.PATTERN000:return(e+r)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return r%3==0;case a.PATTERN011:return(e+r)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case a.PATTERN101:return e*r%2+e*r%3==0;case a.PATTERN110:return(e*r%2+e*r%3)%2==0;case a.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new c([1],0),r=0;r<t;r++)e=e.multiply(new c([1,u.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:return 8;case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var u=-1;u<=1;u++)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(n+s,o+u)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var l=0;t.isDark(n,o)&&l++,t.isDark(n+1,o)&&l++,t.isDark(n,o+1)&&l++,t.isDark(n+1,o+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var c=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&c++;var f=Math.abs(100*c/e/e-50)/5;return r+=10*f,r}},u={glog:function(t){if(t<1)throw new Error("glog("+t+")");return u.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return u.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)u.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)u.EXP_TABLE[l]=u.EXP_TABLE[l-4]^u.EXP_TABLE[l-5]^u.EXP_TABLE[l-6]^u.EXP_TABLE[l-8];for(l=0;l<255;l++)u.LOG_TABLE[u.EXP_TABLE[l]]=l;function c(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function f(t,e){this.totalCount=t,this.dataCount=e}function h(){this.buffer=new Array,this.length=0}function g(t){for(var e,r="",n=0;n<t.length;n++)e=t.charCodeAt(n),e>=1&&e<=127?r+=t.charAt(n):e>2047?(r+=String.fromCharCode(224|e>>12&15),r+=String.fromCharCode(128|e>>6&63),r+=String.fromCharCode(128|e>>0&63)):(r+=String.fromCharCode(192|e>>6&31),r+=String.fromCharCode(128|e>>0&63));return r}c.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=u.gexp(u.glog(this.get(r))+u.glog(t.get(n)));return new c(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=u.glog(this.get(0))-u.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=u.gexp(u.glog(t.get(n))+e);return new c(r,0).mod(t)}},f.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f.getRSBlocks=function(t,e){var r=f.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var a=r[3*i+0],s=r[3*i+1],u=r[3*i+2],l=0;l<a;l++)o.push(new f(s,u));return o},f.getRsBlockTable=function(t,e){switch(e){case i.L:return f.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return f.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return f.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return f.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},h.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},n={errorCorrectLevel:i,defaults:{size:354,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"png",errorCorrectLevel:i.H,typeNumber:-1},make:function(e){var n=this;return new Promise((function(o,i){var a={canvasId:e.canvasId,componentInstance:e.componentInstance,text:e.text,size:n.defaults.size,margin:n.defaults.margin,backgroundColor:n.defaults.backgroundColor,foregroundColor:n.defaults.foregroundColor,fileType:n.defaults.fileType,errorCorrectLevel:n.defaults.errorCorrectLevel,typeNumber:n.defaults.typeNumber};if(e)for(var s in e)a[s]=e[s];function u(){var t=new r(e.typeNumber,e.errorCorrectLevel);t.addData(g(e.text)),t.make();var n=uni.createCanvasContext(e.canvasId,e.componentInstance);n.setFillStyle(e.backgroundColor),n.fillRect(0,0,e.size,e.size);var a=(e.size-2*e.margin)/t.getModuleCount(),s=a;e.getModules&&e.getModules(t.modules,e);for(var u=0;u<t.getModuleCount();u++)for(var l=0;l<t.getModuleCount();l++){var c=t.isDark(u,l)?e.foregroundColor:e.backgroundColor;n.setFillStyle(c);var f=Math.round(l*a)+e.margin,h=Math.round(u*s)+e.margin,d=Math.ceil((l+1)*a)-Math.floor(l*a),m=Math.ceil((u+1)*a)-Math.floor(u*a);n.fillRect(f,h,d,m)}setTimeout((function(){n.draw(!1,function(){setTimeout((function(){uni.canvasToTempFilePath({canvasId:e.canvasId,fileType:e.fileType,width:e.size,height:e.size,destWidth:e.size,destHeight:e.size,success:function(t){var r,n=t.tempFilePath;r=n,e.success&&e.success(r),o(r)},fail:function(t){e.fail&&e.fail(t),i(t)},complete:function(t){e.complete&&e.complete(t)}},e.componentInstance)}),e.text.length+100)}())}),150)}e=a,e.canvasId?u():t("error","uQRCode: Please set canvasId!"," at common/uqrcode.js:1324")}))}}})();var o=n;e.default=o}).call(this,r("0de9")["log"])},5726:function(t,e,r){"use strict";var n=r("2e36"),o=r.n(n);o.a},"6c8c":function(t,e){t.exports="data:image/png;base64,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"},8012:function(t,e,r){"use strict";r.r(e);var n=r("144e"),o=r("c0f5");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("5726");var a,s=r("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"3dc4edf5",null,!1,n["a"],a);e["default"]=u.exports},bb30:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.canvas-hide[data-v-3dc4edf5]{\r\n  /* 1 */position:fixed;right:100vw;bottom:100vh;\r\n  /* 2 */z-index:-9999;\r\n  /* 3 */opacity:0}.fanhui[data-v-3dc4edf5]{height:%?100?%;width:100%;text-align:center;line-height:%?100?%;color:#000;font-size:%?32?%;font-weight:700}.fanhui > .inc[data-v-3dc4edf5]{position:absolute;left:%?30?%;top:%?15?%;width:%?50?%;height:%?50?%}.title[data-v-3dc4edf5]{height:%?65?%;line-height:%?65?%;font-size:%?48?%;color:#000;margin-top:%?61?%}.chupiao[data-v-3dc4edf5]{height:%?65?%;width:%?65?%;margin-right:%?15?%}#notice[data-v-3dc4edf5]{font-size:%?26?%;margin-top:%?46?%}.line[data-v-3dc4edf5]{height:1px;width:%?706?%;background:#dcdcdc;margin-top:%?49?%}#notice2[data-v-3dc4edf5]{font-size:%?36?%;text-align:center;margin-top:%?61?%}.qrcode[data-v-3dc4edf5]{width:%?233?%;height:%?233?%;margin-top:%?44?%}',""]),t.exports=e},c0f5:function(t,e,r){"use strict";r.r(e);var n=r("0f6b"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a}}]);