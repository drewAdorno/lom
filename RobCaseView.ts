System.register("chunks:///_virtual/RobCaseView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RedPoint.ts","./RedPointMgr.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./BattlePassDefine.ts","./MessageView.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./HorseCarnivalDataCache.ts","./RobCaseDataCache.ts","./BaseView.ts"],(function(e){"use strict";var t,i,n,a,s,o,r,d,h,l,u,f,c,v,p,C,T,g,m,w,b;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e.Label,a=e.Button,s=e.HorizontalTextAlignment,o=e.Vec2,r=e.js},function(e){d=e.RedPointType},function(e){h=e.RedPointMgr},function(e){l=e.default},function(e){u=e.default},null,function(e){f=e.ConfigGlobal},function(e){c=e.BattlePassDefine},function(e){v=e.default},function(e){p=e.default},function(e){C=e.ActivityType,T=e.ActivityState,g=e.ActivityEventDefine},function(e){m=e.HorseCarnivalDataCache},function(e){w=e.default},function(e){b=e.BaseView}],execute:function(){i._RF.push({},"c00b425FktN4aGL8dwLZrwZ","RobCaseView",void 0);e("default",function(e){function i(){var t;return(t=e.call(this)||this).txtTimeDesc=void 0,t.txtLeftTime=void 0,t.leftTime=0,t.deltaTime=0,t.canUpdate=!1,t.name="RobCaseView",t.url="ui/module/robcase/RobCaseView",t.fullScreen=!0,t}t(i,e);var b=i.prototype;return b.onInit=function(){var e=this;this.txtTimeDesc=this.findChildComponent("view/nodeTime/txtDesc",n),this.txtLeftTime=this.findChildComponent("view/nodeTime/txtTime",n);var t=this.findChild("view/btnClose");this.addComponentCallbackListener(t,a.EventType.CLICK,(function(){e.close()}));var i=this.findChild("view/nodeTime/tips");this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){for(var e=f.LIMITED_RANK_SYSTEM_DETAILS,t="",i=0;i<e.length;i++)e[i][0]==C.RobCase&&(t=GetLanguage(e[i][1]));""!=t&&v.showBoxTip({tip:t,btnCnt:1,horizontalAlign:s.LEFT})}));var r=this.findChild("view/btnPvp");this.addRedPoint("robcase_pvp",r,new o(100,45),d.Dot),this.addComponentCallbackListener(r,a.EventType.CLICK,(function(){var e=IS(p).GetActivityInfo(C.RobCasePvp);e&&e.state==T.Open?uiMgr.openView("RobCasePvpView"):e&&e.state==T.Preview?v.showFlyTip(GetLanguage(200086)):v.showFlyTip(GetLanguage(200026))}));var h=this.findChild("view/btnBuy");this.addComponentCallbackListener(h,a.EventType.CLICK,(function(){var e=IS(p).GetActivityInfo(C.RobCaseBuy);e&&e.state==T.Open?uiMgr.openView("RobCaseBuyView"):e&&e.state==T.Preview?v.showFlyTip(GetLanguage(200086)):v.showFlyTip(GetLanguage(200026))}));var c=this.findChild("view/btnPass");this.addRedPoint("robcase_pass",c,new o(100,45),d.Dot),this.addComponentCallbackListener(c,a.EventType.CLICK,(function(){var e=IS(p).GetActivityInfo(C.RobCasePass);e&&e.state==T.Open?uiMgr.openView("RobCasePassView"):e&&e.state==T.Preview?v.showFlyTip(GetLanguage(200086)):v.showFlyTip(GetLanguage(200026))}));var g=this.findChild("view/btnTurn");this.addRedPoint("robcase_turn",g,new o(100,45),d.Dot),this.addComponentCallbackListener(g,a.EventType.CLICK,(function(){var e=IS(p).GetActivityInfo(C.RobCaseTurn);if(e&&e.state==T.Open)uiMgr.openView("RobcaseTurnView");else if(e&&e.state==T.Preview){var t=e.state_time[T.Open].start_time-u.serverTime;v.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),u.formatTimeStringForSecond(t)))}else v.showFlyTip(GetLanguage(200026))}));var m=this.findChild("view/btnTask");this.addRedPoint("robcase_task",m,new o(25,30),d.Dot),this.addComponentCallbackListener(m,a.EventType.CLICK,(function(){var e=IS(p).GetActivityInfo(C.RobCaseTurn);if(e&&e.state==T.Open)uiMgr.openView("RobCaseTaskView",C.RobCaseTurn);else if(e&&e.state==T.Preview){var t=e.state_time[T.Open].start_time-u.serverTime;v.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),u.formatTimeStringForSecond(t)))}else v.showFlyTip(GetLanguage(200026))}));var w=this.findChild("view/btnGift");this.addComponentCallbackListener(w,a.EventType.CLICK,(function(){var e=IS(p).GetActivityInfo(C.RobCaseTurn);if(e&&e.state==T.Open)uiMgr.openView("HorseCarnivalGiftView",C.RobCaseTurn);else if(e&&e.state==T.Preview){var t=e.state_time[T.Open].start_time-u.serverTime;v.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),u.formatTimeStringForSecond(t)))}else v.showFlyTip(GetLanguage(200026))}));var b=this.findChild("view/btnStore");this.addRedPoint("robcase_store",b,new o(25,30),d.Dot),this.addComponentCallbackListener(b,a.EventType.CLICK,(function(){uiMgr.openView("RobCaseStoreView",C.RobCase)}));var L=this.findChild("view/btnRank");this.addComponentCallbackListener(L,a.EventType.CLICK,(function(){uiMgr.openView("RobCaseRankView",C.RobCasePass)}))},b.registerUpdateHandler=function(){this.addEvent(g.OnActivityInfoUpdate,this.updateInfo,this),this.addEvent(g.OnActivityInfoTaskUpdate,this.updateRed,this),this.addEvent(g.OnActivityInfoUpdate,this.updateRed,this),this.addEvent(c.BATTLE_PASS_INFO_UPDATE,this.updateRed,this),this.addEvent(g.OnHorseCarnivalUpdate,this.updateRed,this),this.addEvent(g.OnHorseCarnivalReward,this.updateRed,this),this.addEvent(g.OnRobCasePvpInfo,this.updateRed,this),this.addEvent(g.OnRobCasePvpCandy,this.updateRed,this)},b.onAfterOpen=function(){this.updateRed();var e=IS(p).GetActivityInfo(C.RobCase);if(e){var t,i=null!=(t=e.state_time[e.state])?t:e.state_time[T.Open];if(this.leftTime=i.end_time-u.serverTime,this.leftTime>0){var n="";e.state==T.Preview?n=GetLanguage(200763):e.state==T.Open?n=GetLanguage(200764):e.state==T.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=r.formatStr("%s",u.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}},b.onBeforeClose=function(){this.canUpdate=!1},b.onDestroy=function(){},b.onUpdate=function(e){this.canUpdate&&(this.deltaTime=this.deltaTime+e,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=r.formatStr("%s",u.formatTimeStringForSecond(this.leftTime)):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},b.updateRed=function(){IS(h).changeValue("robcase_task",IS(p).GetTaskRedNum(C.RobCaseTurn)),IS(h).changeValue("robcase_store",IS(w).GetStoreRed()),IS(h).changeValue("robcase_pass",IS(w).getPassRedNum()),IS(h).changeValue("robcase_pvp",IS(w).getPvpRed()),IS(h).changeValue("robcase_turn",IS(m).getRedNum(C.RobCaseTurn))},b.updateInfo=function(e){if(e.type==C.RobCase&&e.state!=T.Null){var t,i=null!=(t=e.state_time[e.state])?t:e.state_time[T.Open];if(this.leftTime=i.end_time-u.serverTime,this.leftTime>0){var n="";e.state==T.Preview?n=GetLanguage(200763):e.state==T.Open?n=GetLanguage(200764):e.state==T.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=r.formatStr("%s",u.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}},i}(b));i._RF.pop()}}}));
