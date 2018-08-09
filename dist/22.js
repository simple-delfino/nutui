/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([22],{1080:function(t,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<nut-slidecalendar \n@confirm="choseTime" \ndata="2018-04-12,2019-05-12"\n></nut-slidecalendar>',demo2:'<nut-slidecalendar \ndata="2018-04-12,2019-05-12" \ntype="datetime" \nid="test2"\n></nut-slidecalendar>',demo3:'<nut-slidecalendar \ntype="time" \nid="test3"\n></nut-slidecalendar>',demo4:"export default {\n    methods:{\n         choseTime(val){\n            console.log(val)\n        }\n    }\n}"}},methods:{choseTime:function(t){console.log(t)}}}},1124:function(t,e,d){(t.exports=d(1)()).push([t.i,"",""])},1280:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"日期时间滑动选择器。",showQrCode:!0}}),t._v(" "),d("h5",[t._v("示例")]),t._v(" "),d("h6",[t._v("日期")]),t._v(" "),d("nut-codebox",{attrs:{code:t.demo1,imgUrl:"../asset/img/demo/slidecalendar.png"}}),t._v(" "),d("nut-codebox",{attrs:{code:t.demo4}}),t._v(" "),d("h6",[t._v(" 日期时间")]),t._v(" "),d("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),d("h6",[t._v("时间")]),t._v(" "),d("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),d("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"tbl-wrapper"},[d("table",{staticClass:"u-full-width"},[d("thead",[d("tr",[d("th",[t._v("参数")]),t._v(" "),d("th",[t._v("说明")]),t._v(" "),d("th",[t._v("类型")]),t._v(" "),d("th",[t._v("默认值")]),t._v(" "),d("th",[t._v("可选值")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("data")]),t._v(" "),d("td",[t._v("初始化时间")]),t._v(" "),d("td",[t._v("String")]),t._v(" "),d("td",[t._v("'2018-01-12,2019-05-12'")]),t._v(" "),d("td",[t._v("--")])]),t._v(" "),d("tr",[d("td",[t._v("type")]),t._v(" "),d("td",[t._v("日期控件的类型")]),t._v(" "),d("td",[t._v("String")]),t._v(" "),d("td",[t._v("'datetime','time','date'")]),t._v(" "),d("td",[t._v("--")])]),t._v(" "),d("tr",[d("td",[t._v("id")]),t._v(" "),d("td",[t._v("日期控件的id")]),t._v(" "),d("td",[t._v("String")]),t._v(" "),d("td",[t._v("'demo1'")]),t._v(" "),d("td",[t._v("--")])])])]),t._v(" "),d("h5",[t._v("Events")]),t._v(" "),d("table",{staticClass:"u-full-width"},[d("thead",[d("tr",[d("th",[t._v("事件名")]),t._v(" "),d("th",[t._v("说明")]),t._v(" "),d("th",[t._v("回调参数")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("confirm")]),t._v(" "),d("td",[t._v("选择日期后的回调返回选择的日期")]),t._v(" "),d("td",[t._v("String")])])])])])}]}},1354:function(t,e,d){var n=d(1124);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);d(3)("6dd13653",n,!0,{})},965:function(t,e,d){var n=d(2)(d(1080),d(1280),function(t){d(1354)},"data-v-6eaa52e8",null);t.exports=n.exports}});