System.register("chunks:///_virtual/ActivityLoopyCardPreView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,r,s,a,l,d,c,h,u,f;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,r=t.ScrollView,s=t.Label,a=t.UITransform},function(t){l=t.ItemGrid},function(t){d=t.ListItem},function(t){c=t.default},function(t){h=t.default},null,function(t){u=t.ActivityType},function(t){f=t.BaseView}],execute:function(){var p;n._RF.push({},"03bd3Pb+dhLo61mB5x/ypbk","ActivityLoopyCardPreView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).scroll=void 0,i.name="ActivityLoopyCardPreView",i.url="ui/module/activityLoopy/ActivityLoopyCardPreView",i}i(n,t);var s=n.prototype;return s.onInit=function(){var t=this,i=this.findChild("view/bg/btnClose");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()}));var e=this.findChildComponent("view/scroll",r);this.scroll=this.addUIList(e,v,!0,0)},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){var t=[{type:1,title:201179,rewards:[],weight:0},{type:2,title:204402,rewards:[],weight:0},{type:3,title:204403,rewards:[],weight:0}],i=configLucky_bag_preview.getDatas();p=0;for(var n,o=function(){var i=n.value;if(i.act_type==u.LoopyCard){p+=i.weight;var e=t.find((function(t){return t.type==i.type}));e.weight+=i.weight,e.rewards.push(i)}},r=e(i);!(n=r()).done;)o();this.scroll.datas=t},s.onBeforeClose=function(){},s.onDestroy=function(){},n}(f));var v=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).scroll=void 0,i.txtTitle=void 0,i.txtRatio=void 0,i.utScroll=void 0,i.utScrollView=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.adaptiveSize=!0,this.txtTitle=c.findChildComponent(this.node,"title/Label",s),this.txtRatio=c.findChildComponent(this.node,"ratio",s);var t=c.findChildComponent(this.node,"list",r);this.scroll=this.view.addUIList(t,w,!1,0),this.utScroll=c.findChildComponent(this.node,"list",a),this.utScrollView=c.findChildComponent(this.node,"list/view",a)},n.onRender=function(t,i){this.txtTitle.string=GetLanguage(t.title),0==t.weight?this.txtRatio.string="":this.txtRatio.string=h.formatStrWithMirrorDeal(GetLanguage(201755),(t.weight/p*100).toFixed(2)+"%");var e=t.rewards.length,n=100*e+5*(e-1);this.ut.height=n+60,this.utScroll.height=n,this.utScrollView.height=n,this.scroll.datas=t.rewards},e}(d),w=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).rewardScroll=void 0,i.txtDesc=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.txtDesc=c.findChildComponent(this.node,"txtDesc",s);var t=c.findChildComponent(this.node,"rewardScroll",r);this.rewardScroll=this.view.addUIList(t,g,!1,0)},n.onRender=function(t,i){this.rewardScroll.datas=t.reward,0==t.weight?this.txtDesc.string=GetLanguage(204522):this.txtDesc.string=h.formatStrWithMirrorDeal(GetLanguage(201755),(t.weight/p*100).toFixed(2)+"%")},e}(d),g=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=c.findChild(this.node,"itemGrid"),this.itemGrid=new l(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(d);n._RF.pop()}}}));
