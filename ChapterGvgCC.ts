System.register("chunks:///_virtual/ChapterGvgCC.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BattleData.ts","./ChapterGvg.ts","./EnumDefine.ts","./BattleDefine.ts","./ChapterControl.ts","./ChapterDefine.ts","./MessageView.ts"],(function(t){"use strict";var e,n,i,a,r,o,u,s,c,p;return{setters:[function(t){e=t.inheritsLoose,n=t.regeneratorRuntime},function(t){i=t.cclegacy},function(t){a=t.ChapterType},function(t){r=t.ChapterGvg},function(t){o=t.RunState},function(t){u=t.BattleEventDefine},function(t){s=t.default},function(t){c=t.ChapterEventDefine},function(t){p=t.default}],execute:function(){i._RF.push({},"1881486f3ZOfLGO4hiddWCX","ChapterGvgCC",void 0);t("ChapterGvgCC",function(t){function i(){return t.apply(this,arguments)||this}e(i,t);var r=i.prototype;return r.init=function(){t.prototype.init.call(this);var e=this.battleMain;normalEvent.emit(u.BATTLE_PVP_VS,e.data)},r.endPvp=n().mark((function t(e,i,a,r,o,u){var p;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p=this.battleMain,t.next=3,coroutine.wait(1);case 3:IS(s).reqEnterChapter(0),p.enterChapter(),normalEvent.emit(c.BATTLE_STATE,i,!1),p.toResult(e,i,a,o,u),p.runningToPart=!1;case 8:case"end":return t.stop()}}),t,this)})),r.start=function(){t.prototype.start.call(this);var e=this.battleMain;e.runState=o.Wait,e.hub.showPvpTimer(),e.battleTimer.start(2,1,(function(){e.runState=o.Running}))},r.toResult=function(t,e){void 0===e&&(e=!1);var n=this.battleMain,i=this.config;0==t&&n.checkCheat()&&(t=1,p.showBoxTip({tip:GetLanguage(200998),btnCnt:1,func:function(t){},ensure:GetLanguage(200129)})),coroutine.start(this.endPvp(i.id,a.Gvg,t,n.runMode,e,n.data.source),"battle")},i}(r));i._RF.pop()}}}));

