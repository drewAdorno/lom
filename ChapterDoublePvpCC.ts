System.register("chunks:///_virtual/ChapterDoublePvpCC.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BattleData.ts","./ChapterMultipleArena.ts","./EnumDefine.ts","./BattleDefine.ts","./ChapterControl.ts","./ChapterDefine.ts","./MessageView.ts","./RoleDataCache.ts"],(function(t){"use strict";var e,n,a,i,r,o,u,l,s,c,p,f;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose,a=t.regeneratorRuntime},function(t){i=t.cclegacy},function(t){r=t.ChapterType},function(t){o=t.ChapterMultipleArena},function(t){u=t.RunState},function(t){l=t.BattleEventDefine},function(t){s=t.default},function(t){c=t.ChapterEventDefine},function(t){p=t.default},function(t){f=t.RoleDataCache}],execute:function(){i._RF.push({},"2e77bf5pe5BeKMi+X2PMXFn","ChapterDoublePvpCC",void 0);t("ChapterDoublePvpCC",function(t){function i(){return t.apply(this,arguments)||this}e(i,t);var o=i.prototype;return o.init=function(){t.prototype.init.call(this);var e=this.battleMain;e.data.recordType>0&&uiMgr.HideAllView(["MainView","BattleHubView"]),normalEvent.emit(l.BATTLE_PVP_VS,e.data)},o.getConfig=function(t){return null},o.loadData=function(e){var a=this.battleMain;t.prototype.loadData.call(this,e);for(var i,r=n(a.playerCtrs);!(i=r()).done;){var o=i.value;if(o.playerData.id==IS(f).GetRoleId()){a.mainCtr=o,a.showMainCtr=a.mainCtr;break}}},o.start=function(){t.prototype.start.call(this),battleMain.timeScale=1,battleMain.runState=u.Wait,battleMain.hub.showPvpTimer(),battleMain.battleTimer.start(2,1,(function(){battleMain.runState=u.Running}))},o.endPvp=a().mark((function t(e,n,i,r,o,u){var l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=this.battleMain,t.next=3,coroutine.wait(1);case 3:IS(s).reqEnterChapter(0),l.enterChapter(),normalEvent.emit(c.BATTLE_STATE,n,!1),l.toResult(e,n,i,o,u),l.runningToPart=!1;case 8:case"end":return t.stop()}}),t,this)})),o.toResult=function(t,e){void 0===e&&(e=!1);var n=this.battleMain,a=this.config;0==t&&n.checkCheat()&&(t=1,p.showBoxTip({tip:GetLanguage(200998),btnCnt:1,func:function(t){},ensure:GetLanguage(200129)})),coroutine.start(this.endPvp(a.id,r.DoublePvp,t,n.runMode,e,n.data.source),"battle")},i}(o));i._RF.pop()}}}));
