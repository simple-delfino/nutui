/*! NutUI v1.3.0 Thu Aug 09 2018 11:27:14 GMT+0800 (CST) */
webpackJsonpnutui([15],{1087:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,v=n(19);(o=v)&&o.__esModule;e.default={data:function(){return{demo1:"<nut-textbox></nut-textbox>",demo2:'<nut-textbox \n:txtAreaH="10"\n></nut-textbox>',demo3:'<nut-textbox \nplaceText="请填写详细情况"\n></nut-textbox>',demo4:'<nut-textbox \n:maxNum="100"\n></nut-textbox>',demo5:'<nut-textbox \n:switchMax="true" \n:maxNum="10" \n:txtAreaH="2"\n></nut-textbox>',demo6:'<nut-textbox \n:maxNum="10" \ntxtAreaH="2"  \n@errorFunc="overLength" \n></nut-textbox>',demo66:'export default {\n  methods:{\n      overLength(){\n          alert("字数超出");\n      }\n  }\n}',demo7:'<nut-textbox \n:switchMax="true" \n:maxNum="10" \n:txtAreaH="2" \ntextBgColor="#feefef">\n</nut-textbox>',demo8:'<nut-textbox \n:limitShow="false">\n</nut-textbox>',demo9:' <nut-textbox :maxNum="10" txtAreaH="2" @inputFunc="inputText" ></nut-textbox>\nexport default {\n  methods:{\n      inputText(val){\n           alert(val);\n      }\n  }\n}'}},methods:{overLength:function(){alert("字数超出")},inputText:function(t){alert(t)}}}},1109:function(t,e,n){(t.exports=n(1)()).push([t.i,"\n.txt-area[data-v-4969574a] {\n  padding: 0.1rem 0.2rem 1.5rem;\n}\n",""])},1249:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"多行文本输入框，支持字数提示、字数限制等功能。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("h6",[t._v("默认用法")]),t._v(" "),n("nut-codebox",{attrs:{code:"<nut-textbox></nut-textbox>",imgUrl:"../asset/img/demo/textbox1.png"}}),t._v(" "),n("h6",[t._v("自定义高度:5rem")]),t._v(" "),n("nut-codebox",{attrs:{code:"<nut-textbox :txtAreaH='5' :maxNum='300'></nut-textbox>",imgUrl:"../asset/img/demo/textbox2.png"}}),t._v(" "),n("h6",[t._v("自定义提示语")]),t._v(" "),n("nut-codebox",{attrs:{code:"<nut-textbox placeText='请填写详细情况'></nut-textbox>",imgUrl:"../asset/img/demo/textbox3.png"}}),t._v(" "),n("h6",[t._v("自定义字数限制")]),t._v(" "),n("nut-codebox",{attrs:{code:"<nut-textbox :maxNum='100'></nut-textbox>"}}),t._v(" "),n("h6",[t._v("限制字数不可超出")]),t._v(" "),n("nut-codebox",{attrs:{code:"<nut-textbox :switchMax='true' \n    :maxNum='10' \n    :txtAreaH='2' \n    textBgColor='#efefef'>\n  </nut-textbox>",imgUrl:"../asset/img/demo/textbox4.png"}}),t._v(" "),n("h6",[t._v("字数超出报错")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo6,imgUrl:"../asset/img/demo/textbox5.png"}}),t._v(" "),n("nut-codebox",{attrs:{code:t.demo66}}),t._v(" "),n("h6",[t._v("自定义文本框背景色")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo7,imgUrl:"../asset/img/demo/textbox6.png"}}),t._v(" "),n("h6",[t._v("不显示字数限制")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo8,imgUrl:"../asset/img/demo/textbox7.png"}}),t._v(" "),n("h6",[t._v("输入回调返回文字")]),t._v(" "),n("nut-textbox",{attrs:{maxNum:10,txtAreaH:"2"},on:{inputFunc:t.inputText}}),t._v(" "),n("nut-codebox",{attrs:{code:t.demo9}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("txtAreaH")]),t._v(" "),n("td",[t._v("文本框高度")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("1rem")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("placeText")]),t._v(" "),n("td",[t._v("自定义placeholder文案提示")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("请您在此输入")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("maxNum")]),t._v(" "),n("td",[t._v("最大字数")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("50")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("switchMax")]),t._v(" "),n("td",[t._v("控制字数超出是否不可输入，注意：最大字数限制，请设置maxNum")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("textBgColor")]),t._v(" "),n("td",[t._v("设置输入框背景色")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("#fff")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("limitShow")]),t._v(" "),n("td",[t._v("不显示字数限制")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("--")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("errorFunc")]),t._v(" "),n("td",[t._v("输入字数超过限定字数时触发事件")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("inputText")]),t._v(" "),n("td",[t._v("文字输入事件回调，默认传回输入文本")]),t._v(" "),n("td",[t._v("--")])])])])])}]}},1339:function(t,e,n){var o=n(1109);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(3)("aef26daa",o,!0,{})},972:function(t,e,n){var o=n(2)(n(1087),n(1249),function(t){n(1339)},"data-v-4969574a",null);t.exports=o.exports}});