System.register("chunks:///_virtual/ActivityPoolPartyCardGiveTipView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./BagModel.ts","./ActivityControl.ts","./ActivityDefine.ts","./ActivityPoolPartyDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,n,o,e,s,r,a,d,l,c,u;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,o=t.Button,e=t.Label,s=t.Sprite},function(t){r=t.default},null,function(t){a=t.BagModel},function(t){d=t.default},function(t){l=t.ActivityType},function(t){c=t.CardPoolPartyItemIcon},function(t){u=t.BaseView}],execute:function(){n._RF.push({},"d5076gBix5NerqJeGR1K0hs","ActivityPoolPartyCardGiveTipView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).txtContent=void 0,i.count=void 0,i.itemIcon=void 0,i.role_id=void 0,i.item_id=void 0,i.uid=void 0,i.name="ActivityPoolPartyCardGiveTipView",i.url="ui/module/activityPoolParty/ActivityPoolPartyCardGiveTipView",i}i(n,t);var u=n.prototype;return u.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()})),this.txtContent=this.findChildComponent("dialog/content/txtContent",e),this.count=this.findChildComponent("dialog/count",e),this.itemIcon=this.findChildComponent("dialog/itemIcon",s);var n=this.findChild("dialog/content/buttons/btnCancel");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){t.close()}));var r=this.findChild("dialog/content/buttons/btnEnsure");this.addComponentCallbackListener(r,o.EventType.CLICK,(function(){IS(d).send_collect_send(l.PoolPartyPuzzle,t.item_id,1,t.role_id,t.uid),t.close()}))},u.registerUpdateHandler=function(){},u.onAfterOpen=function(){this.item_id=this.openArgs[0],this.role_id=this.openArgs[1],this.uid=this.openArgs[2];var t=this.openArgs[3],i=configGoods.getDataByKey(this.item_id),n=IS(a).getGoodsCountByGoodsGtid(this.item_id);this.count.string=r.formatStrWithMirrorDeal(GetLanguage(200780),n-1),this.txtContent.string=r.formatStrWithMirrorDeal(GetLanguage(200826),t,i.name),this.loadIcon(this.itemIcon,"act_poolparty_puzzle",c[this.item_id])},u.onBeforeClose=function(){},u.onDestroy=function(){},n}(u));n._RF.pop()}}}));

