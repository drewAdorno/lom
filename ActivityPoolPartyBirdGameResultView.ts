System.register("chunks:///_virtual/ActivityPoolPartyBirdGameResultView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./ActivityControl.ts","./ActivityDefine.ts","./ActivityPoolPartyControl.ts","./BaseView.ts"],(function(t){"use strict";var i,e,o,n,r,c,s,d,a,l;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,o=t.Label,n=t.Button},function(t){r=t.default},null,function(t){c=t.default},function(t){s=t.ActivityType,d=t.ActivityEventDefine},function(t){a=t.default},function(t){l=t.BaseView}],execute:function(){e._RF.push({},"111f0vrKttGtIuM0UcqrW6t","ActivityPoolPartyBirdGameResultView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).txtScore=void 0,i.txtRecord=void 0,i.imgRecord=void 0,i.name="ActivityPoolPartyBirdGameResultView",i.url="ui/module/activityPoolParty/ActivityPoolPartyBirdGameResultView",i}i(e,t);var l=e.prototype;return l.onInit=function(){var t=this;this.txtScore=this.findChildComponent("content/nodeTop/txtScore",o),this.txtRecord=this.findChildComponent("content/nodeTop/txtRecord",o),this.imgRecord=this.findChild("content/nodeTop/imgRecord");var i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){uiMgr.getView("ActivityPoolPartyBirdGameView").destroy(),IS(c).send_24_14(s.PoolPartyEndBirdGame),IS(a).send_24_130(s.PoolPartyEndBirdGame),t.close()}))},l.registerUpdateHandler=function(){this.addEvent(d.OnFlappyFrogGameResult,this.OnRecvResult,this)},l.onAfterOpen=function(){IS(a).send_24_132(s.PoolPartyEndBirdGame,this.openArgs[0])},l.onBeforeClose=function(){},l.onDestroy=function(){},l.OnRecvResult=function(t,i,e){this.txtScore.string=t.toString(),this.txtRecord.string=r.formatStrWithMirrorDeal(GetLanguage(201716),i),this.imgRecord.active=1==e},e}(l));e._RF.pop()}}}));
