System.register("chunks:///_virtual/BuyBPView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./BagDefine.ts","./BagModel.ts","./PayDataCache.ts","./BattlePassDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,o,a,r,l,d,c,u,h,g,f;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Sprite,s=t.Label,o=t.sys,a=t.Widget,r=t.Button},function(t){l=t.default},null,function(t){d=t.ItemIdDefine},function(t){c=t.BagModel},function(t){u=t.default},function(t){h=t.BATTLE_PASS_TYPE_DEFINE,g=t.BP_ID_TYPE},function(t){f=t.BaseView}],execute:function(){e._RF.push({},"9f4b8RfVZFGeYW8sj65vT7H","BuyBPView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).titleTxt=void 0,i.bg=void 0,i.title_1=void 0,i.title_2=void 0,i.curPassId=0,i.is_mid=!1,i.name="BuyBPView",i.url="ui/module/battlepass/BuyBPView",i.poolTime=3e3,i}i(e,t);var f=e.prototype;return f.onInit=function(){var t=this;if(this.bg=this.findChildComponent("root/content/title/bg/banner",n),this.titleTxt=this.findChildComponent("root/content/title/txt",s),this.title_1=this.findChildComponent("root/content/imgGetwayBG/img1/Label",s),this.title_2=this.findChildComponent("root/content/imgGetwayBG/img2/Label",s),o.uiMirror){var i=this.findChildComponent("root/content/imgGetwayBG/img1/Label/Sprite-001",a);i.alignFlags=32,i.right=-57.2935;var e=this.findChildComponent("root/content/imgGetwayBG/img2/Label/Sprite-002",a);e.alignFlags=32,e.right=-56.7735}var l=this.findChild("root/content/btnClose");this.addComponentCallbackListener(l,r.EventType.CLICK,(function(){t.onCloseClick()}));var d=this.findChild("root/imgMask");this.addComponentCallbackListener(d,r.EventType.CLICK,(function(){t.onMaskClick()}));var c=this.findChild("root/content/btnBuy");this.addComponentCallbackListener(c,r.EventType.CLICK,(function(){t.onBuyBP()}))},f.onAfterOpen=function(){var t,i;this.curPassId=this.openArgs[0],this.is_mid=null!=(t=this.openArgs[1])&&t,i=1==this.curPassId?configBattlepass.getDataByKey(this.curPassId).view:configWartoken.getDataByKey(this.curPassId).view;var e=h[g[i]];this.loadIcon(this.bg,"icon_zl",e.banner),this.titleTxt.string=GetLanguage(this.is_mid?e.reward_title[2]:e.reward_title[1]),this.title_1.string=l.formatStrWithMirrorDeal(GetLanguage(200140),GetLanguage(this.is_mid?e.reward_title[2]:e.reward_title[1])),this.title_2.string=l.formatStrWithMirrorDeal(GetLanguage(200141),GetLanguage(e.reward_title[1])),this.findChild("root/content/imgGetwayBG/img2").active=!this.is_mid;var n,o=this.findChildComponent("root/content/btnBuy/txtPrice",s);n=1==this.curPassId?configBattlepass.getDataByKey(this.curPassId):configWartoken.getDataByKey(this.curPassId);var a=this.is_mid?n.bundle_id2:n.bundle_id;o.string=IS(u).GetPriceString(configPay_mall.getDataByKey(a).cost_level)},f.registerUpdateHandler=function(){},f.onCloseClick=function(){this.close()},f.onMaskClick=function(){this.close},f.onBuyBP=function(){var t;t=1==this.curPassId?configBattlepass.getDataByKey(this.curPassId):configWartoken.getDataByKey(this.curPassId);var i=this.is_mid?t.bundle_id2:t.bundle_id,e=configPay_mall.getDataByKey(i);IS(c).getGoodsCountByGoodsGtid(d.FakeRechare)>=e.price?uiMgr.openView("BattlePassBuyView",this.curPassId,this.is_mid):IS(u).Pay(i)},f.onBeforeClose=function(){},f.onDestroy=function(){},e}(f));e._RF.pop()}}}));

