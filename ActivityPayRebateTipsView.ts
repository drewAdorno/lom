System.register("chunks:///_virtual/ActivityPayRebateTipsView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./index57.ts","./ItemGrid.ts","./NodeUtil.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,r,o,s,a,c;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,r=t.ScrollView},function(t){o=t.ListItem},null,function(t){s=t.ItemGrid},function(t){a=t.default},function(t){c=t.BaseView}],execute:function(){e._RF.push({},"68184AiTYRG/KoUvMO7+6JB","ActivityPayRebateTipsView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).rewardScroll=void 0,i.name="ActivityPayRebateTipsView",i.url="ui/module/activity/ActivityPayRebateTipsView",i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChildComponent("view/rewardScroll",r);this.rewardScroll=this.addUIList(e,d),this.rewardScroll.lackCenter=!0},o.registerUpdateHandler=function(){},o.onAfterOpen=function(){var t=this.openArgs[0],i=configPay_rebate_reward.getDataByKey(t);this.rewardScroll.datas=i.reward},o.onBeforeClose=function(){},o.onDestroy=function(){},e}(c));var d=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=a.findChild(this.node,"itemGrid"),this.itemGrid=new s(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(o);e._RF.pop()}}}));

