System.register("chunks:///_virtual/ActivityFrogView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./RedPoint.ts","./RedPointMgr.ts","./StorageUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./BattlePassDefine.ts","./MessageView.ts","./RoleDataCache.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./HorseCarnivalDataCache.ts","./ActivityFrogDataCache.ts","./ActivityFrogDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,a,s,r,o,d,g,f,h,l,u,c,v,m,p,T,w,y,C,F,L;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Label,a=t.Button,s=t.Vec2,r=t.js},function(t){o=t.audioMgr},function(t){d=t.RedPointType},function(t){g=t.RedPointMgr},function(t){f=t.default},function(t){h=t.default},function(t){l=t.default},null,function(t){u=t.BattlePassDefine},function(t){c=t.default},function(t){v=t.RoleDataCache},function(t){m=t.default},function(t){p=t.ActivityType,T=t.ActivityState,w=t.ActivityEventDefine},function(t){y=t.HorseCarnivalDataCache},function(t){C=t.default},function(t){F=t.ActivityFrogEvent},function(t){L=t.BaseView}],execute:function(){i._RF.push({},"bb41dks8KRNDYZCy0e1p4td","ActivityFrogView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtTimeDesc=void 0,e.txtLeftTime=void 0,e.leftTime=0,e.deltaTime=0,e.canUpdate=!1,e.name="ActivityFrogView",e.url="ui/module/activityFrog/ActivityFrogView",e.fullScreen=!0,e}e(i,t);var L=i.prototype;return L.onInit=function(){var t=this;this.txtTimeDesc=this.findChildComponent("nodeTime/txtDesc",n),this.txtLeftTime=this.findChildComponent("nodeTime/txtTime",n);var e=this.findChild("view/btnClose");this.addComponentCallbackListener(e,a.EventType.CLICK,(function(){t.close()}));var i=this.findChild("nodeTime/tips");this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){IS(m).ShowSysTips(p.Frog)}));var r=this.findChild("view/btnFind/img");this.addRedPoint("frog_find",r,new s(70,50),d.Dot),this.addComponentCallbackListener(r,a.EventType.CLICK,(function(){var t=IS(m).GetActivityInfo(p.FrogFind);if(t&&t.state==T.Open)uiMgr.openView("ActivityFrogFindView");else if(t&&t.state==T.Preview){var e=t.state_time[T.Open].start_time-l.serverTime;c.showFlyTip(h.formatStrWithMirrorDeal(GetLanguage(201410),l.formatTimeStringForSecond(e)))}else c.showFlyTip(GetLanguage(200026))}));var o=this.findChild("view/btnGame/img");this.addRedPoint("frog_game",o,new s(80,55),d.Dot),this.addComponentCallbackListener(o,a.EventType.CLICK,(function(){var t=IS(m).GetActivityInfo(p.FrogGame);if(t&&t.state==T.Open)uiMgr.openView("ActivityFrogGameMainView");else if(t&&t.state==T.Preview){var e=t.state_time[T.Open].start_time-l.serverTime;c.showFlyTip(h.formatStrWithMirrorDeal(GetLanguage(201410),l.formatTimeStringForSecond(e)))}else c.showFlyTip(GetLanguage(200026))}));var g=this.findChild("view/btnPass/img");this.addRedPoint("frog_pass",g,new s(70,50),d.Dot),this.addComponentCallbackListener(g,a.EventType.CLICK,(function(){var t=IS(m).GetActivityInfo(p.FrogPass);if(t&&t.state==T.Open)uiMgr.openView("ActivityFrogPassView");else if(t&&t.state==T.Preview){var e=t.state_time[T.Open].start_time-l.serverTime;c.showFlyTip(h.formatStrWithMirrorDeal(GetLanguage(201410),l.formatTimeStringForSecond(e)))}else c.showFlyTip(GetLanguage(200026))}));var f=this.findChild("view/btnTurn/img");this.addRedPoint("frog_turn",f,new s(70,50),d.Dot),this.addComponentCallbackListener(f,a.EventType.CLICK,(function(){var t=IS(m).GetActivityInfo(p.FrogTurn);if(t&&t.state==T.Open)uiMgr.openView("ActivityFrogTurnView");else if(t&&t.state==T.Preview){var e=t.state_time[T.Open].start_time-l.serverTime;c.showFlyTip(h.formatStrWithMirrorDeal(GetLanguage(201410),l.formatTimeStringForSecond(e)))}else c.showFlyTip(GetLanguage(200026))}));var u=this.findChild("view/btnRank/img");this.addComponentCallbackListener(u,a.EventType.CLICK,(function(){uiMgr.openView("ActivityFrogRankView",p.FrogPass)}));var v=this.findChild("view/btnEgg/img");this.addRedPoint("frog_egg",v,new s(100,55),d.Dot),this.addComponentCallbackListener(v,a.EventType.CLICK,(function(){var t=IS(m).GetActivityInfo(p.FrogEgg);if(t&&t.state==T.Open)uiMgr.openView("ActivityFrogEggView");else if(t&&t.state==T.Preview){var e=t.state_time[T.Open].start_time-l.serverTime;c.showFlyTip(h.formatStrWithMirrorDeal(GetLanguage(201410),l.formatTimeStringForSecond(e)))}else c.showFlyTip(GetLanguage(200026))}));var w=this.findChild("view/btnTask");this.addRedPoint("frog_task",w,new s(25,30),d.Dot),this.addComponentCallbackListener(w,a.EventType.CLICK,(function(){var t=IS(m).GetActivityInfo(p.FrogTurn);t&&t.state==T.Open?uiMgr.openView("ActivityFrogTaskView",p.FrogTurn):t&&t.state==T.Preview?c.showFlyTip(GetLanguage(200086)):c.showFlyTip(GetLanguage(200026))}));var y=this.findChild("view/btnGift");this.addComponentCallbackListener(y,a.EventType.CLICK,(function(){var t=IS(m).GetActivityInfo(p.FrogTurn);t&&t.state==T.Open?uiMgr.openView("ActivityFrogGiftView",p.FrogTurn):t&&t.state==T.Preview?c.showFlyTip(GetLanguage(200086)):c.showFlyTip(GetLanguage(200026))}));var C=this.findChild("view/btnStore");this.addRedPoint("frog_store",C,new s(25,30),d.Dot),this.addComponentCallbackListener(C,a.EventType.CLICK,(function(){uiMgr.openView("ActivityFrogStoreView",p.Frog)}));var F=this.findChild("view/btnGift2");this.addComponentCallbackListener(F,a.EventType.CLICK,(function(){var t=IS(m).GetActivityInfo(p.FrogEgg);if(t&&t.state==T.Open)uiMgr.openView("ActivityFrogGiftView",p.FrogEgg);else if(t&&t.state==T.Preview){var e=t.state_time[T.Open].start_time-l.serverTime;c.showFlyTip(h.formatStrWithMirrorDeal(GetLanguage(201410),l.formatTimeStringForSecond(e)))}else c.showFlyTip(GetLanguage(200026))}))},L.registerUpdateHandler=function(){this.addEvent(w.OnActivityInfoUpdate,this.updateInfo,this),this.addEvent(w.OnActivityInfoTaskUpdate,this.updateRed,this),this.addEvent(w.OnActivityInfoUpdate,this.updateRed,this),this.addEvent(w.OnActivityFindUpdate,this.updateRed,this),this.addEvent(w.OnActivityEggUpdate,this.updateRed,this),this.addEvent(w.OnActivityEggReward,this.updateRed,this),this.addEvent(w.OnHorseCarnivalUpdate,this.updateRed,this),this.addEvent(w.OnHorseCarnivalReward,this.updateRed,this),this.addEvent(u.BATTLE_PASS_INFO_UPDATE,this.updateRed,this),this.addEvent(F.OnFrogGameNewLevelUpdate,this.updateRed,this)},L.onAfterOpen=function(){this.updateRed(),o.playMusic("bgm_beishangwa");var t=IS(m).GetActivityInfo(p.Frog);if(t){var e,i=null!=(e=t.state_time[t.state])?e:t.state_time[T.Open];if(this.leftTime=i.end_time-l.serverTime,this.leftTime>0){var n="";t.state==T.Preview?n=GetLanguage(200763):t.state==T.Open?n=GetLanguage(200764):t.state==T.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=r.formatStr("%s",l.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}else this.txtTimeDesc.string=GetLanguage(200765),this.txtLeftTime.string=GetLanguage(200026)},L.onBeforeClose=function(){o.playMusic("battle"),this.canUpdate=!1},L.onDestroy=function(){},L.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=r.formatStr("%s",l.formatTimeStringForSecond(this.leftTime)):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},L.updateRed=function(){IS(g).changeValue("frog_task",IS(m).GetTaskRedNum(p.FrogTurn)),IS(g).changeValue("frog_store",IS(C).GetStoreRed()),IS(g).changeValue("frog_find",IS(C).getFindRedNum()),IS(g).changeValue("frog_egg",IS(C).getEggRed()),IS(g).changeValue("frog_turn",IS(y).getRedNum(p.FrogTurn)),IS(g).changeValue("frog_pass",IS(C).getPassRedNum());var t=IS(m).GetTaskRedNum(p.FrogGame),e=1==parseInt(f.get("FrogGame_NewLevel_"+IS(v).GetRoleId()))?1:0;IS(g).changeValue("frog_game",t+e)},L.updateInfo=function(t){if(t.type==p.Frog&&t.state!=T.Null){var e,i=null!=(e=t.state_time[t.state])?e:t.state_time[T.Open];if(this.leftTime=i.end_time-l.serverTime,this.leftTime>0){var n="";t.state==T.Preview?n=GetLanguage(200763):t.state==T.Open?n=GetLanguage(200764):t.state==T.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=r.formatStr("%s",l.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}},i}(L));i._RF.pop()}}}));
