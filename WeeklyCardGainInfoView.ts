System.register("chunks:///_virtual/WeeklyCardGainInfoView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./index57.ts","./PayDataCache.ts","./WeeklyCardDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,a,r,d,s,l,c,u;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.ScrollView,a=t.Label},function(t){r=t.ItemGrid},function(t){d=t.ListItem},function(t){s=t.default},null,function(t){l=t.default},function(t){c=t.default},function(t){u=t.BaseView}],execute:function(){i._RF.push({},"f8241eZmipAwKb0gtcSkP7Q","WeeklyCardGainInfoView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).curRewardList=void 0,e.totalRewardList=void 0,e.btnBuy=void 0,e.name="WeeklyCardGainInfoView",e.url="ui/module/weeklycard/WeeklyCardGainInfoView",e}e(i,t);var r=i.prototype;return r.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChildComponent("content/nodeCurReward/rewardScroll",o);this.curRewardList=this.addUIList(i,f);var a=this.findChildComponent("content/nodeTotalReward/rewardScroll",o);this.totalRewardList=this.addUIList(a,f),this.btnBuy=this.findChild("content/btnBuy"),this.addComponentCallbackListener(this.btnBuy,n.EventType.CLICK,(function(){IS(c).payMallInfo.id&&(IS(l).Pay(IS(c).payMallInfo.id),t.close())}))},r.registerUpdateHandler=function(){},r.onAfterOpen=function(){this.curRewardList.datas=IS(c).curRewardInfo,this.totalRewardList.datas=IS(c).totalRewardInfo,this.btnBuy.getChildByName("Label").getComponent(a).string=IS(l).GetPriceString(IS(c).payMallInfo.cost_level)},r.onBeforeClose=function(){},r.onDestroy=function(){},i}(u));var f=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,e.itemGrid=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.itemGridNode=s.findChild(this.node,"itemGrid"),this.itemGrid=new r(this.view,this.itemGridNode)},n.onRender=function(t,e){this.itemGrid.SetItemId(t[0],t[1])},i}(d);i._RF.pop()}}}));
