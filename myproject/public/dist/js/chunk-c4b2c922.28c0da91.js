(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4b2c922"],{"686a":function(t,n,a){},"987a":function(t,n,a){"use strict";function i(t){if(Array.isArray(t)){for(var n=0,a=new Array(t.length);n<t.length;n++)a[n]=t[n];return a}}function e(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return i(t)||e(t)||o()}a.d(n,"a",(function(){return s}))},eaed:function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"sotre-cosmetics"},[a("router-view",{attrs:{name:"input"}}),a("van-list",{staticClass:"list",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.prolist,(function(n,i){return a("li",{key:n.id},[a("img",{staticClass:"show",attrs:{src:n.images.small}}),a("h4",[t._v(t._s(n.title))]),a("div",{staticClass:"content-b"},[a("div",{staticClass:"content-b-l"},[a("span",[t._v("AI-fisher")])])])])})),0)],1)},e=[],o=a("987a"),s=a("2427"),r=a.n(s),c={data:function(){return{prolist:[],pageCode:1,loading:!1,finished:!1}},mounted:function(){var t=this;r.a.get("/api/douban").then((function(n){t.prolist=n.data}))},methods:{onLoad:function(){var t=this;this.loading=!0,r.a.get("https://www.daxunxun.com/douban?count=20&start="+20*this.pageCode).then((function(n){t.loading=!1,t.pageCode++,0===n.data.length?t.finished=!0:t.prolist=[].concat(Object(o["a"])(t.prolist),Object(o["a"])(n.data))}))}}},l=c,u=(a("f52e"),a("6691")),d=Object(u["a"])(l,i,e,!1,null,null,null);n["default"]=d.exports},f52e:function(t,n,a){"use strict";var i=a("686a"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-c4b2c922.28c0da91.js.map