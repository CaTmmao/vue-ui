(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(t,s,v){"use strict";var o=v(4),n=v(15),e=v(16),a=v(76),c=v(74),l=v(6),i=v(97).f,d=v(98).f,r=v(9).f,_=v(99).trim,p=o.Number,m=p,C=p.prototype,u="Number"==e(v(75)(C)),f="trim"in String.prototype,h=function(t){var s=c(t,!1);if("string"==typeof s&&s.length>2){var v,o,n,e=(s=f?s.trim():_(s,3)).charCodeAt(0);if(43===e||45===e){if(88===(v=s.charCodeAt(2))||120===v)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+s}for(var a,l=s.slice(2),i=0,d=l.length;i<d;i++)if((a=l.charCodeAt(i))<48||a>n)return NaN;return parseInt(l,o)}}return+s};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var s=arguments.length<1?0:t,v=this;return v instanceof p&&(u?l(function(){C.valueOf.call(v)}):"Number"!=e(v))?a(new m(h(s)),v,p):h(s)};for(var w,g=v(8)?i(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;g.length>b;b++)n(m,w=g[b])&&!n(p,w)&&r(p,w,d(m,w));p.prototype=C,C.constructor=p,v(11)(o,"Number",p)}},201:function(t,s,v){"use strict";var o=v(3),n=v(77)(!0);o(o.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),v(101)("includes")},202:function(t,s,v){"use strict";var o=v(3),n=v(208);o(o.P+o.F*v(209)("includes"),"String",{includes:function(t){return!!~n(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},208:function(t,s,v){var o=v(79),n=v(17);t.exports=function(t,s,v){if(o(s))throw TypeError("String#"+v+" doesn't accept regex!");return String(n(t))}},209:function(t,s,v){var o=v(2)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(v){try{return s[o]=!1,!"/./"[t](s)}catch(t){}}return!0}},210:function(t,s,v){},211:function(t,s,v){},212:function(t,s,v){},425:function(t,s,v){"use strict";var o=v(210);v.n(o).a},426:function(t,s,v){"use strict";var o=v(211);v.n(o).a},427:function(t,s,v){"use strict";var o=v(212);v.n(o).a},446:function(t,s,v){"use strict";v.r(s);v(96),v(14),v(25);var o=v(10),n=(v(198),v(201),v(202),v(20),v(30),function(t){var s=Object.keys(t),v=!0;return["span","offset"].includes(s)||(v=!1),v}),e={name:"v-col",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:n},narrowPc:{type:Object,validator:n},pc:{type:Object,validator:n},widePc:{type:Object,validator:n}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var v=[];return t.span&&v.push("col-".concat(s).concat(t.span)),t.offset&&v.push("offset-".concat(s).concat(t.offset)),v}},computed:{colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}},colClass:function(){var t=this.span,s=this.offset,v=this.ipad,n=this.narrowPc,e=this.pc,a=this.widePc,c=this.createClasses;return[t&&"col-".concat(t),s&&"offset-".concat(s)].concat(Object(o.a)(c({span:t,offset:s})),Object(o.a)(c(v,"ipad-")),Object(o.a)(c(n,"narrow-pc-")),Object(o.a)(c(e,"pc-")),Object(o.a)(c(a,"wide-pc-")))}}},a=(v(425),v(1)),c=Object(a.a)(e,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"126b240a",null).exports,l={name:"v-row",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},computed:{rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]},rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},i=(v(426),Object(a.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"0f63a506",null).exports),d=v(196),r=v.n(d);v(197);r.a.highlightCode=function(){var t=document.querySelectorAll("pre code");[].forEach.call(t,r.a.highlightBlock)};var _={components:{"v-col":c,"v-row":i},mounted:function(){r.a.highlightCode()},data:function(){return{content5:'\n<v-row class="demoRow">\n    <v-col span="20" :ipad="{span: 12}" :pc="{span: 2}">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="4" :ipad="{span: 12}" :pc="{span: 22}">\n        <div class="demoCol">8</div>\n    </v-col>\n</v-row>\n                '.trim(),content4:'\n<v-row class="demoRow">\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n</v-row>\n<v-row class="demoRow" align="center">\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n</v-row>\n<v-row class="demoRow" align="right">\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n</v-row>\n                '.trim(),content3:'\n<v-row class="demoRow">\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="6" offset="2">\n        <div class="demoCol">6</div>\n    </v-col>\n    <v-col span="2" offset="6">\n        <div class="demoCol">2</div>\n    </v-col>\n</v-row>\n                '.trim(),content2:'\n<v-row class="demoRow" gutter="10">\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n</v-row>\n<v-row class="demoRow" gutter="10">\n    <v-col span="6">\n        <div class="demoCol">6</div>\n    </v-col>\n    <v-col span="6">\n        <div class="demoCol">6</div>\n    </v-col>\n    <v-col span="6">\n        <div class="demoCol">6</div>\n    </v-col>\n    <v-col span="6">\n        <div class="demoCol">6</div>\n    </v-col>\n</v-row>\n                '.trim(),content:'\n.demoRow {\n    margin: 10px 0;\n}\n\n.demoCol {\n    height: 50px;\n    border: 1px solid #ccc;\n    background: #eee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n<v-row class="demoRow">\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n    <v-col span="8">\n        <div class="demoCol">8</div>\n    </v-col>\n</v-row>\n\n<v-row class="demoRow">\n    <v-col span="6">\n        <div class="demoCol">6</div>\n    </v-col>\n    <v-col span="6">\n        <div class="demoCol">6</div>\n    </v-col>\n    <v-col span="6">\n        <div class="demoCol">6</div>\n    </v-col>\n    <v-col span="6">\n        <div class="demoCol">6</div>\n    </v-col>\n</v-row>\n\n<v-row class="demoRow">\n    <v-col span="4">\n        <div class="demoCol">4</div>\n    </v-col>\n    <v-col span="4">\n        <div class="demoCol">4</div>\n    </v-col>\n    <v-col span="4">\n        <div class="demoCol">4</div>\n    </v-col>\n    <v-col span="4">\n        <div class="demoCol">4</div>\n    </v-col>\n    <v-col span="4">\n        <div class="demoCol">4</div>\n    </v-col>\n    <v-col span="4">\n        <div class="demoCol">4</div>\n    </v-col>\n</v-row>\n\n<v-row class="demoRow">\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n    <v-col span="2">\n        <div class="demoCol">2</div>\n    </v-col>\n</v-row>\n                '.trim()}}},p=(v(427),Object(a.a)(_,function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",[v("h2",[t._v("24格网格")]),t._v(" "),t._m(0),t._v(" "),v("v-row",{staticClass:"demoRow"},[v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),v("v-row",{staticClass:"demoRow"},[v("v-col",{attrs:{span:"6"}},[v("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),v("v-col",{attrs:{span:"6"}},[v("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),v("v-col",{attrs:{span:"6"}},[v("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),v("v-col",{attrs:{span:"6"}},[v("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),v("v-row",{staticClass:"demoRow"},[v("v-col",{attrs:{span:"4"}},[v("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),v("v-col",{attrs:{span:"4"}},[v("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),v("v-col",{attrs:{span:"4"}},[v("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),v("v-col",{attrs:{span:"4"}},[v("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),v("v-col",{attrs:{span:"4"}},[v("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),v("v-col",{attrs:{span:"4"}},[v("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),v("v-row",{staticClass:"demoRow"},[v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),v("v-col",{attrs:{span:"2"}},[v("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),v("pre",[v("code",[t._v(t._s(t.content))])]),t._v(" "),t._m(2),t._v(" "),v("h2",[t._v("设置gutter")]),t._v(" "),t._m(3),t._v(" "),v("v-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),v("v-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[v("v-col",{attrs:{span:"6"}},[v("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),v("v-col",{attrs:{span:"6"}},[v("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),v("v-col",{attrs:{span:"6"}},[v("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),v("v-col",{attrs:{span:"6"}},[v("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),t._m(4),t._v(" "),v("pre",[v("code",[t._v(t._s(t.content2))])]),t._v(" "),t._m(5),t._v(" "),v("h2",[t._v("设置空隙")]),t._v(" "),t._m(6),t._v(" "),v("v-row",{staticClass:"demoRow"},[v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"6",offset:"2"}},[v("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),v("v-col",{attrs:{span:"2",offset:"6"}},[v("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(7),t._v(" "),v("pre",[v("code",[t._v(t._s(t.content3))])]),t._v(" "),t._m(8),t._v(" "),v("h2",[t._v("对齐方式")]),t._v(" "),t._m(9),t._v(" "),v("v-row",{staticClass:"demoRow"},[v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),v("v-row",{staticClass:"demoRow",attrs:{align:"center"}},[v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),v("v-row",{staticClass:"demoRow",attrs:{align:"right"}},[v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"8"}},[v("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),t._m(10),t._v(" "),v("pre",[v("code",[t._v(t._s(t.content4))])]),t._v(" "),t._m(11),t._v(" "),v("h2",[t._v("响应式")]),t._v(" "),t._m(12),t._v(" "),v("v-row",{staticClass:"demoRow"},[v("v-col",{attrs:{span:"20",ipad:{span:12},pc:{span:2}}},[v("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),v("v-col",{attrs:{span:"4",ipad:{span:12},pc:{span:22}}},[v("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),t._m(13),t._v(" "),v("pre",[v("code",[t._v(t._s(t.content5))])]),t._v(" "),t._m(14),t._v(" "),v("h2",[t._v("API")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{staticClass:"explain"},[v("header",{staticClass:"explain-header"},[v("p",{staticClass:"explain-title"},[t._v("说明")])]),t._v(" "),v("p",[v("code",[t._v("v-row")]),t._v(" 标签为一行，"),v("code",[t._v("v-col")]),t._v(" 标签为单个单元格。\n        ")]),t._v(" "),v("p",[t._v("该网格系统每行可分为 "),v("code",[t._v("24")]),t._v(" 份，在 "),v("code",[t._v("v-col")]),t._v(" 标签上添加 "),v("code",[t._v("span")]),t._v("\n        属性控制每个单元格所占的份数为 "),v("code",[t._v("X")]),t._v(" 份。")]),t._v(" "),v("p",[t._v("网格的样式自行添加，如上面的例子中，在 "),v("code",[t._v("v-col")]),t._v(" 标签内\n        添加了一个div元素，在此div元素上设置自己想要的样式。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"explain"},[s("header",{staticClass:"explain-header"},[s("p",{staticClass:"explain-title"},[this._v("说明")])]),this._v(" "),s("p",[s("code",[this._v("v-row")]),this._v(" 标签可添加 "),s("code",[this._v("gutter")]),this._v(" 属性，使每个网格都有间隔，并且间隔宽度一致。\n        ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{staticClass:"explain"},[v("header",{staticClass:"explain-header"},[v("p",{staticClass:"explain-title"},[t._v("说明")])]),t._v(" "),v("p",[v("code",[t._v("v-col")]),t._v(" 标签添加 "),v("code",[t._v("offset")]),t._v(" 属性后，会在该列 "),v("code",[t._v("左侧")]),t._v(" 添加空隙，值为\n            "),v("code",[t._v("Number / String")]),t._v(" 类型。\n        ")]),t._v(" "),v("p",[v("code",[t._v("offset")]),t._v(" 和 "),v("code",[t._v("span")]),t._v(" 一样都是按照份数会自动调整自己的宽度，因此\n            "),v("code",[t._v("offset")]),t._v(" 和 "),v("code",[t._v("span")]),t._v(" 相加起来最多不超过 "),v("code",[t._v("24")]),t._v(" 份。\n        ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{staticClass:"explain"},[v("header",{staticClass:"explain-header"},[v("p",{staticClass:"explain-title"},[t._v("说明")])]),t._v(" "),v("p",[v("code",[t._v("v-row")]),t._v(" 标签接受 "),v("code",[t._v("align")]),t._v(" 属性，用来设置该行单元格的对齐方式，原理是给 "),v("code",[t._v("v-row")]),t._v("\n            元素添加了 "),v("code",[t._v("display: flex;")]),t._v(" css属性，传入的 "),v("code",[t._v("align")]),t._v(" 属性将作为 "),v("code",[t._v("justify-content")]),t._v(" 的值。\n        ")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("div",{staticClass:"explain"},[v("header",{staticClass:"explain-header"},[v("p",{staticClass:"explain-title"},[t._v("说明")])]),t._v(" "),v("p",[t._v("\n            该网格系统支持响应式。如果要设置响应式的网格，需要在 "),v("code",[t._v("v-col")]),t._v(" 标签内添加代表各个设备的属性，\n            可选值为 "),v("code",[t._v("ipad")]),t._v("，"),v("code",[t._v("narrow-pc")]),t._v("，"),v("code",[t._v("pc")]),t._v("，"),v("code",[t._v("wide-pc")]),t._v("，\n            如果直接传入 "),v("code",[t._v("offset / span")]),t._v(" 属性，将默认为 "),v("code",[t._v("移动端样式")]),t._v("，如果需要为其他设备单独设置，则需要额外添加其他属性。\n        ")]),t._v(" "),v("p",[t._v("各个属性所对应的px请查看最下方的API内容。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("v-row props")])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("gutter")]),t._v(" "),v("td",[t._v("网格间距")]),t._v(" "),v("td",[t._v("String / Number")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("align")]),t._v(" "),v("td",[t._v("flex布局下的水平排列方式，可选值为 "),v("code",[t._v("left")]),t._v("，"),v("code",[t._v("right")]),t._v("，"),v("code",[t._v("center")])]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("v-col props")])])},function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("table",[v("thead",[v("tr",[v("th",[t._v("属性")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("span")]),t._v(" "),v("td",[t._v("单个网格的占位格数，可选值为 "),v("code",[t._v("0~24")]),t._v("，为 0 时，相当于 "),v("code",[t._v("display: none")])]),t._v(" "),v("td",[t._v("String / Number")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("offset")]),t._v(" "),v("td",[t._v("该网格的左侧间隔格数，和 "),v("code",[t._v("span")]),t._v(" 属性一样，可选值为 "),v("code",[t._v("0~24")]),t._v("，确保 "),v("code",[t._v("span + offset")]),t._v(" 最多不超过24格")]),t._v(" "),v("td",[t._v("String / Number")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("ipad")]),t._v(" "),v("td",[v("code",[t._v("≥576px")]),t._v(" 响应式网格，可在 "),v("code",[t._v("ipad")]),t._v(" 属性中添加 "),v("code",[t._v("span / offset")]),t._v("属性")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("narrow-pc")]),t._v(" "),v("td",[v("code",[t._v("≥768px")]),t._v(" 响应式网格，可在 "),v("code",[t._v("narrow-pc")]),t._v(" 属性中添加 "),v("code",[t._v("span / offset")]),t._v("属性")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("pc")]),t._v(" "),v("td",[v("code",[t._v("≥992px")]),t._v(" 响应式网格，可在 "),v("code",[t._v("pc")]),t._v(" 属性中添加 "),v("code",[t._v("span / offset")]),t._v("属性")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("wide-pc")]),t._v(" "),v("td",[v("code",[t._v("≥1200px")]),t._v(" 响应式网格，可在 "),v("code",[t._v("wide-pc")]),t._v(" 属性中添加 "),v("code",[t._v("span / offset")]),t._v("属性")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("-")])])])])}],!1,null,"77af2626",null));s.default=p.exports}}]);