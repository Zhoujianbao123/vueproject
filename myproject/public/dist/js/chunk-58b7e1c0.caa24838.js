(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58b7e1c0"],{"0827":function(t,e,i){},"34b7":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-popup",{style:{width:"100%",height:"100%"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-nav-bar",{attrs:{"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),n("div",{staticClass:"boom"},[n("img",{attrs:{src:i("b79d"),alt:""}})])],1)},l=[],s=i("6e6d"),o=i("23c4"),a=i.n(o),r=i("1281"),c=i("1d3a"),f=i("bc74"),u=i("634c"),h=i("911e"),d=Object(r["a"])("nav-bar"),p=d[0],w=d[1];function b(t,e,i,n){var l;return t("div",a()([{class:[w({fixed:e.fixed}),(l={},l[u["a"]]=e.border,l)],style:{zIndex:e.zIndex}},Object(f["b"])(n)]),[t("div",{class:w("left"),on:{click:n.listeners["click-left"]||c["e"]}},[i.left?i.left():[e.leftArrow&&t(h["a"],{class:w("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:w("text")},[e.leftText])]]),t("div",{class:[w("title"),"van-ellipsis"]},[i.title?i.title():e.title]),t("div",{class:w("right"),on:{click:n.listeners["click-right"]||c["e"]}},[i.right?i.right():e.rightText&&t("span",{class:w("text")},[e.rightText])])])}b.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}};var g=p(b),x=i("b605");s["a"].use(g),s["a"].use(x["a"]);var v={data:function(){return{show:!0}},methods:{showPopup:function(){this.show=!0},onClickLeft:function(){this.show=!1,this.$router.push("/home")},onClickRight:function(){console.log("确认"),this.show=!1}}},k=v,m=(i("8744"),i("6691")),T=Object(m["a"])(k,n,l,!1,null,null,null);e["default"]=T.exports},8744:function(t,e,i){"use strict";var n=i("0827"),l=i.n(n);l.a},b79d:function(t,e,i){t.exports=i.p+"img/404.19aafc85.png"}}]);
//# sourceMappingURL=chunk-58b7e1c0.caa24838.js.map