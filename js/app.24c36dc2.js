(function(t){function e(e){for(var r,s,c=e[0],i=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/pix/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push(["cd25","chunk-vendors"]),a()})({"5daa":function(t,e,a){},"6d91":function(t,e,a){"use strict";var r=a("5daa"),n=a.n(r);n.a},cd25:function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=a("8c4f"),o=a("ce5b"),s=a.n(o),c=(a("bf40"),a("d1e78"),a("1f54"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-container",{staticClass:"page-container"},[a("h2",{staticClass:"mt-6",domProps:{textContent:t._s(t.title)}}),a("v-row",{staticClass:"my-6"},t._l(t.projects,(function(e,r){return a("v-col",{key:r,staticClass:"pa-5",attrs:{cols:"6"}},[a("v-card",{staticClass:"ma-1 pa-5 frame",attrs:{flat:""}},[a("v-row",[a("v-col",{attrs:{cols:12}},[a("v-img",{staticClass:"thumb",staticStyle:{height:"188px"},attrs:{src:e.img}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:12}},[a("v-card-text",{staticClass:"pa-0 caption project-text"},[a("strong",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "+t._s(e.description)+" ")]),a("v-card-actions",{staticClass:"px-1 project-icons",attrs:{color:"blue darken-2"}},[e.paper?a("a",{attrs:{href:e.paper}},[a("v-icon",{attrs:{color:"blue darken-2",title:"paper"}},[t._v("fa fa-file-pdf-o")]),t._v("paper")],1):t._e(),e.website?a("a",{attrs:{href:e.website}},[a("v-icon",{attrs:{color:"blue darken-2",title:"homepage"}},[t._v("fa fa-link")]),t._v("website")],1):t._e(),e.video?a("a",{attrs:{href:e.video}},[a("v-icon",{attrs:{color:"blue darken-2",title:"video"}},[t._v("fa fa-film")]),t._v("video")],1):t._e(),e.code?a("a",{attrs:{href:e.code}},[a("v-icon",{staticClass:"small",attrs:{color:"blue darken-2",title:"code"}},[t._v("fa fa-github")]),t._v("code")],1):t._e(),e.demo?a("a",{attrs:{href:e.demo}},[a("v-icon",{attrs:{color:"blue darken-2",title:"demo"}},[t._v("fa fa-laptop")]),t._v("demo")],1):t._e(),e.slides?a("a",{attrs:{href:e.slides}},[a("v-icon",{attrs:{color:"blue darken-2",title:"demo"}},[t._v("fa fa-indent")]),t._v("slides")],1):t._e()])],1)],1)],1)],1)})),1)],1)],1)],1)}),i=[],l=(a("a4d3"),a("e01a"),a("d3b7"),a("96cf"),a("1da1")),u=a("651e"),d=a.n(u),p={name:"ProjectPage",data:function(){return{projects:null,title:null,description:null}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=d.a,e.next=3,fetch("yaml/pix.yaml");case 3:return e.next=5,e.sent.text();case 5:e.t1=e.sent,a=e.t0.load.call(e.t0,e.t1),t.title=a.title,t.description=a.description,t.projects=a.items;case 10:case"end":return e.stop()}}),e)})))()},mounted:function(){}},f=p,v=(a("6d91"),a("2877")),b=a("6544"),h=a.n(b),m=a("7496"),_=a("b0af"),y=a("99d9"),g=a("62ad"),w=a("a523"),x=a("a75b"),C=a("132d"),j=a("adda"),k=a("0fd9"),O=Object(v["a"])(f,c,i,!1,null,"09686d7c",null),P=O.exports;h()(O,{VApp:m["a"],VCard:_["a"],VCardActions:y["a"],VCardText:y["b"],VCol:g["a"],VContainer:w["a"],VContent:x["a"],VIcon:C["a"],VImg:j["a"],VRow:k["a"]}),r["default"].use(n["a"]),r["default"].use(s.a);e["default"]=new n["a"]({routes:[{path:"/",component:P}]})}});
//# sourceMappingURL=app.24c36dc2.js.map