System.register("chunks:///_virtual/ActivityLoopyMusicGameResultView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./ActivityControl.ts","./ActivityDefine.ts","./ActivityLoopyDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,o,n,s,c,r,u;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,o=t.Label,n=t.Button},null,function(t){s=t.default},function(t){c=t.ActivityType},function(t){r=t.default},function(t){u=t.BaseView}],execute:function(){e._RF.push({},"36d10/h1E1Fp7LIWro5CWgp","ActivityLoopyMusicGameResultView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).txtScore=void 0,i.txtRecord=void 0,i.imgRecord=void 0,i.name="ActivityLoopyMusicGameResultView",i.url="ui/module/activityLoopy/ActivityLoopyMusicGameResultView",i}i(e,t);var u=e.prototype;return u.onInit=function(){var t=this;this.txtScore=this.findChildComponent("content/nodeTop/txtScore",o),this.txtRecord=this.findChildComponent("content/nodeTop/nodeTopScore/txtTopScore",o),this.imgRecord=this.findChild("content/nodeTop/imgRecord");var i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){uiMgr.getView("ActivityLoopyMusicGameView").destroy(),IS(s).send_24_14(c.LoopyMusic),t.close()}))},u.registerUpdateHandler=function(){},u.onAfterOpen=function(){IS(s).send_24_101(c.LoopyMusic),this.updateResult()},u.onBeforeClose=function(){},u.onDestroy=function(){},u.updateResult=function(){this.txtScore.string=this.openArgs[0].toString();var t=this.openArgs[1]?this.openArgs[0]:IS(r).chapterInfo[IS(r).curLevelId-1].status;this.txtRecord.string=t.toString(),this.imgRecord.active=this.openArgs[1]},e}(u));e._RF.pop()}}}));
