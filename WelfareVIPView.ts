System.register("chunks:///_virtual/WelfareVIPView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./ConfigGlobal.ts","./NativeToJs.ts","./WelfareDataCache.ts","./BaseSubView.ts"],(function(t){"use strict";var e,i,n,o,r,s,d,a,c,l,u,f;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.ScrollView,r=t.RichText},function(t){s=t.ItemGrid},function(t){d=t.ListItem},function(t){a=t.default},null,function(t){c=t.ConfigGlobal},function(t){l=t.NativeToJs},function(t){u=t.WelfareDataCache},function(t){f=t.BaseSubView}],execute:function(){i._RF.push({},"23644I0N7dKiZagyZs2Cvju","WelfareVIPView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).rewardList=void 0,e.redPoint=void 0,e.txtDesc=void 0,e.name="WelfareVIPView",e.url="ui/module/welfare/WelfareVIPView",e}e(i,t);var s=i.prototype;return s.onInit=function(){var t=this.findChild("btnClose");this.addComponentCallbackListener(t,n.EventType.CLICK,(function(){uiMgr.getOpenView("MenuView").close(),uiMgr.getOpenView("WelfareCenterView").close()})),this.rewardList=this.addUIList(this.findChildComponent("content/nodeReward/RewardScroll",o),h),this.rewardList.lackCenter=!0;var e=this.findChild("btnVerify");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){IS(u).VIPRedPoint=0,l.openURL("https://www.facebook.com/profile.php?id=61555697762738")})),this.redPoint=this.findChild("btnVerify/RedPoint"),this.txtDesc=this.findChildComponent("content/nodeVIPPower/txtDesc",r),this.txtDesc.string=GetLanguage(999100086)},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){this.rewardList.datas=c.vip_identify_reward,this.updateRedPoint()},s.onBeforeClose=function(){},s.onDestroy=function(){},s.updateRedPoint=function(){IS(u).VIPRedPoint>0?this.redPoint.active=!0:this.redPoint.active=!1},i}(f));var h=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,e.itemGrid=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.itemGridNode=a.findChild(this.node,"itemGrid"),this.itemGrid=new s(this.view,this.itemGridNode)},n.onRender=function(t,e){this.itemGrid.SetItemId(t[0],t[1])},i}(d);i._RF.pop()}}}));

