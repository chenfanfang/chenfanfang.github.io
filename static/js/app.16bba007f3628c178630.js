webpackJsonp([1],{"2eco":function(t,e,s){t.exports=s.p+"static/img/ios_guide.f6d9e14.png"},"9n10":function(t,e){},"GS3+":function(t,e){},Hx3D:function(t,e,s){t.exports=s.p+"static/img/android_guide.20e8427.png"},M6Sr:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("xd7I"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=s("C7Lr")({name:"App"},n,!1,function(t){s("au9T")},null,null).exports,r=s("e1F6"),o="/static/moc/",c=s("Muz9"),l=s.n(c),u={name:"HomeRecommend",props:["platformList"],mounted:function(){console.log(this.platformList)},methods:{itemClick:function(t){location.href=t.url+""}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"title"},[t._v("\n    苹果手机使用教程【安卓手机也类似】\n  ")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"title"},[t._v("\n    推荐平台\n  ")]),t._v(" "),s("div",{ref:"wrapper"},[s("ul",t._l(t.platformList,function(e){return s("div",{key:e.id,staticClass:"item",attrs:{tag:"li"},on:{click:function(s){return t.itemClick(e)}}},[s("div",{staticClass:"item-img-wrapper"},[s("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"item-info"},[s("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),s("p",{staticClass:"item-desc"},[t._v(t._s(e.subTitle))])]),t._v(" "),s("button",{staticClass:"item-button"},[t._v("\n        进入\n      ")])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("video",{attrs:{width:"100%",controls:""}},[e("source",{attrs:{src:s("eIR8"),type:"video/mp4"}})])}]};var p=s("C7Lr")(u,d,!1,function(t){s("VFuE")},"data-v-7560ad87",null).exports,h={name:"guide",props:{belong:String},data:function(){return{isWechat:!1,isIos:!1,isAndroid:!0,showMessage1:!1,showMessage2:!1,showMessage3:!1,showHover:!1}},methods:{funcShowMessage1:function(){this.showMessage1=!0},funcShowMessage2:function(){this.showMessage2=!0},funcShowMessage3:function(){this.showMessage3=!0},btnClick:function(){this.showHover=!0},funcHideHover:function(){this.showHover=!1}},mounted:function(){var t=navigator.userAgent;this.isWechat=t.indexOf("MicroMessenger")>-1,0!=this.isWechat?(this.isIos=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,setTimeout(this.funcShowMessage1,1e3),setTimeout(this.funcShowMessage2,3e3),setTimeout(this.funcShowMessage3,4500)):null!=this.belong&&"chenfanfang"!=this.belong||this.$router.replace({path:"/"})}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"content"},[t.showMessage1?i("div",{staticClass:"picture-image-message"},[i("img",{staticClass:"header-icon",attrs:{src:s("mg3a"),alt:""}}),t._v(" "),i("img",{staticClass:"gif",attrs:{src:s("kf81"),alt:""}})]):t._e(),t._v(" "),t.showMessage2?i("div",{staticClass:"messageItem"},[i("img",{staticClass:"header-icon",attrs:{src:s("mg3a"),alt:""}}),t._v(" "),i("span",{staticClass:"arrow"}),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.showMessage3?i("div",{staticClass:"messageItem"},[i("img",{staticClass:"header-icon",attrs:{src:s("mg3a"),alt:""}}),t._v(" "),i("span",{staticClass:"arrow"}),t._v(" "),t._m(1)]):t._e()]),t._v(" "),1==t.isWechat?i("div",{staticClass:"button",on:{click:t.btnClick}},[t._v("\n            点击加入\n    ")]):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showHover,expression:"showHover"}],staticClass:"guide-hover",on:{click:t.funcHideHover}},[t.isIos?i("img",{staticClass:"guide-img",attrs:{src:s("2eco"),alt:""}}):t._e(),t._v(" "),t.isAndroid?i("img",{staticClass:"guide-img",attrs:{src:s("Hx3D"),alt:""}}):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-message"},[e("img",{staticClass:"arrow",attrs:{src:s("agGk"),alt:""}}),this._v(" "),e("span",[this._v("11 1title title title title title title ti")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-message"},[e("img",{staticClass:"arrow",attrs:{src:s("agGk"),alt:""}}),this._v(" "),e("span",[this._v("11 1title title title title title title ti")])])}]};var f=s("C7Lr")(h,g,!1,function(t){s("NjDu")},"data-v-105ce742",null).exports,C=s("2bvH"),m={name:"RecommendPage",props:["belong"],components:{Recommend:p,guide:f},data:function(){return{isIos:!1,isAndroid:!1,isWechat:!0,platformList:{}}},activated:function(){this.LastCity!==this.city&&(this.getHomeInfo(),this.LastCity=this.city)},methods:{getHomeInfo:function(){l.a.get(o+"data.json").then(this.handleIndex)},handleIndex:function(t){(t=t.data).ret&&t.data&&("chenfanfang"!==this.belong&&null!=this.belong||(this.android?this.platformList=t.data.chenfanfang.android:this.platformList=t.data.chenfanfang.ios,console.log("come"),console.log(this.platformList)))}},mounted:function(){var t=navigator.userAgent;this.isWechat=t.indexOf("MicroMessenger")>-1,this.isIos=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),this.isAndroid=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,this.getHomeInfo(),this.LastCity=this.city}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[0==this.isWechat?e("recommend",{attrs:{platformList:this.platformList}}):this._e(),this._v(" "),1==this.isWechat?e("guide"):this._e()],1)},staticRenderFns:[]};var A=s("C7Lr")(m,v,!1,function(t){s("GS3+")},null,null).exports,w={name:"WechatGuide",components:{guide:f},data:function(){return{belong:"chenfanfang"}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("guide",{attrs:{belong:this.belong}})],1)},staticRenderFns:[]};var k=s("C7Lr")(w,I,!1,function(t){s("ZHKf")},"data-v-35c9f8df",null).exports;i.a.use(r.a);var S=new r.a({routes:[{path:"/",name:"RecommendPage",component:A},{path:"/guide",name:"WechatGuide",component:k}],scrollBehavior:function(t,e,s){return{x:0,y:0}}}),b=s("iDdd"),Q=s.n(b),D=(s("9n10"),s("M6Sr"),s("TzC8"),"北京");try{localStorage.city&&(D=localStorage.city)}catch(t){}var x={city:D},E={citychanged:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};i.a.use(C.a);var M=new C.a.Store({state:x,mutations:E}),L=s("41jX"),y=s.n(L);s("aEDl");i.a.config.productionTip=!1,Q.a.attach(document.body),i.a.use(y.a),new i.a({el:"#app",router:S,store:M,components:{App:a},template:"<App/>"})},NjDu:function(t,e){},TzC8:function(t,e){},UGy7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=s("C7Lr")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},i,!1,null,null,null);e.default=n.exports},VFuE:function(t,e){},ZHKf:function(t,e){},aEDl:function(t,e){},agGk:function(t,e){t.exports="data:image/png;base64,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"},au9T:function(t,e){},eIR8:function(t,e,s){t.exports=s.p+"static/media/guide.bba2696.mp4"},kf81:function(t,e,s){t.exports=s.p+"static/img/biaoqing.05e1b53.gif"},mg3a:function(t,e,s){t.exports=s.p+"static/img/header_icon.bb5a227.jpg"},syvT:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=s("Bnvi"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(e=!0,t.defaultSwiperClasses[s]=t.options[s]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=s("C7Lr")(n,a,!1,null,null,null);e.default=r.exports}},["NHnr"]);
//# sourceMappingURL=app.16bba007f3628c178630.js.map