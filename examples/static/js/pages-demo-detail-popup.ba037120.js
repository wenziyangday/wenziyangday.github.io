(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-detail-popup"],{"2ab7":function(t,n,e){var o=e("38a1");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("955c1b72",o,!0,{sourceMap:!1,shadowMode:!1})},"38a1":function(t,n,e){var o=e("4bad");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bg[data-v-218dcecc]{min-height:100vh;background:#f0f0f0;padding:0 %?32?% %?32?%}.bg h3[data-v-218dcecc]{padding:%?30?% 0}',""]),t.exports=n},5221:function(t,n,e){"use strict";e.r(n);var o=e("5715"),i=e("5e3a");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("c89e");var c,d=e("f0c5"),u=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"218dcecc",null,!1,o["a"],c);n["default"]=u.exports},5715:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={mrLayout:e("0e2c").default,mrButton:e("d94f").default,mrPopup:e("8cd6").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mr-layout",{staticClass:"bg",attrs:{title:"popup 展示"},scopedSlots:t._u([{key:"content",fn:function(){return[e("h3",[t._v("基本功能")]),e("mr-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClicks.apply(void 0,arguments)}}},[t._v("打开弹窗")]),e("h3",[t._v("设置弹出层的方向")]),e("mr-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClicks("mode")}}},[t._v("弹出层的方向")]),e("h3",[t._v("控制弹窗的宽度 | 高度")]),e("mr-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClicks("widthHeight")}}},[t._v("宽度、高度")]),e("mr-popup",{attrs:{mode:t.mode,width:t.width,height:t.height},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[e("v-uni-view",[t._v("出淤泥而不染，濯清涟而不妖")])],1)]},proxy:!0}])})},a=[]},"5e3a":function(t,n,e){"use strict";e.r(n);var o=e("d3b8"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},c89e:function(t,n,e){"use strict";var o=e("2ab7"),i=e.n(o);i.a},d3b8:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{show:!1,mode:"top",width:"",height:""}},methods:{handleClicks:function(t){this.show=!0,this.mode="top",this.width="",this.height="","mode"===t?this.mode="bottom":"widthHeight"===t&&(this.width="500rpx",this.height="500rpx")}}}}}]);