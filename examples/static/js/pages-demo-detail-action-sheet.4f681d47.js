(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-detail-action-sheet"],{"384a":function(t,n,e){"use strict";e.r(n);var c=e("a63a"),i=e.n(c);for(var a in c)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(a);n["default"]=i.a},"4e9d":function(t,n,e){var c=e("4bad");n=c(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bg[data-v-4d760ebe]{min-height:100vh;background:#f0f0f0;padding:0 %?32?% %?32?%}.bg h3[data-v-4d760ebe]{padding:%?30?% 0}',""]),t.exports=n},"515b":function(t,n,e){"use strict";var c=e("94ab"),i=e.n(c);i.a},"94ab":function(t,n,e){var c=e("4e9d");c.__esModule&&(c=c.default),"string"===typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);var i=e("4f06").default;i("97faef3e",c,!0,{sourceMap:!1,shadowMode:!1})},a63a:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={data:function(){return{show:!1,list:[{text:"点赞"},{text:"分享"},{text:"评论"}],tips:{},cancelBtn:!0,type:""}},methods:{handleClicks:function(t){this.show=!0,this.type=t,this.cancelBtn=!0,this.tips={},this.list=[{text:"点赞"},{text:"分享"},{text:"评论"}],"tips"===t?this.tips={text:"顶部提示文字"}:"cancelBtn"===t?this.cancelBtn=!1:"customItem"===t&&(this.list=[{text:"点赞",subText:"感谢您的点赞"},{text:"分享",color:"blue"},{text:"评论",color:"red",fontSize:28}])},handleClick:function(t){"clickItem"===this.type&&console.log(t,this.list[t])}}}},aa7b:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return c}));var c={mrLayout:e("0e2c").default,mrButton:e("d94f").default,mrActionSheet:e("3fc6").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mr-layout",{staticClass:"bg",attrs:{title:"action-sheet 展示"},scopedSlots:t._u([{key:"content",fn:function(){return[e("h3",[t._v("基本功能")]),e("mr-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClicks.apply(void 0,arguments)}}},[t._v("打开弹窗")]),e("h3",[t._v("显示顶部提示文字")]),e("mr-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClicks("tips")}}},[t._v("显示顶部文字")]),e("h3",[t._v("隐藏底部取消按钮")]),e("mr-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClicks("cancelBtn")}}},[t._v("隐藏底部取消")]),e("h3",[t._v("自定义弹窗选项")]),e("mr-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClicks("customItem")}}},[t._v("自定义选项")]),e("h3",[t._v("单元点击事件")]),e("mr-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClicks("clickItem")}}},[t._v("点击")]),e("mr-action-sheet",{attrs:{list:t.list,tips:t.tips,"cancel-btn":t.cancelBtn},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick.apply(void 0,arguments)}},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}})]},proxy:!0}])})},a=[]},b41b:function(t,n,e){"use strict";e.r(n);var c=e("aa7b"),i=e("384a");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("515b");var o,s=e("f0c5"),l=Object(s["a"])(i["default"],c["b"],c["c"],!1,null,"4d760ebe",null,!1,c["a"],o);n["default"]=l.exports}}]);