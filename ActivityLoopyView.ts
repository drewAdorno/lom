System.register("chunks:///_virtual/ActivityLoopyView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./RedPoint.ts","./RedPointMgr.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./BattlePassDefine.ts","./MessageView.ts","./PayDefine.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityLoopyDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,a,o,s,r,d,p,l,h,c,u,f,y,v,m,g,T,L;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Label,a=t.Button,o=t.Vec2,s=t.js},function(t){r=t.audioMgr},function(t){d=t.RedPointType},function(t){p=t.RedPointMgr},function(t){l=t.default},function(t){h=t.default},null,function(t){c=t.BattlePassDefine},function(t){u=t.default},function(t){f=t.PayEventDefine},function(t){y=t.default},function(t){v=t.ActivityType,m=t.ActivityState,g=t.ActivityEventDefine},function(t){T=t.default},function(t){L=t.BaseView}],execute:function(){i._RF.push({},"dd3fecio85MWY88Gb4j0p2r","ActivityLoopyView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtTimeDesc=void 0,e.txtLeftTime=void 0,e.leftTime=0,e.deltaTime=0,e.canUpdate=!1,e.name="ActivityLoopyView",e.url="ui/module/activityLoopy/ActivityLoopyView",e.fullScreen=!0,e}e(i,t);var L=i.prototype;return L.onInit=function(){var t=this;this.txtTimeDesc=this.findChildComponent("nodeTime/txtDesc",n),this.txtLeftTime=this.findChildComponent("nodeTime/txtTime",n);var e=this.findChild("view/btnClose");this.addComponentCallbackListener(e,a.EventType.CLICK,(function(){t.close()}));var i=this.findChild("nodeTime/tips");this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){IS(y).ShowSysTips(v.Loopy)}));var s=this.findChild("view/btnFind");this.addRedPoint("loopy_find",s,new o(100,20),d.Dot),this.addComponentCallbackListener(s,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyFind);if(t&&t.state==m.Open)uiMgr.openView("ActivityLoopyFindView");else if(t&&t.state==m.Preview){var e=t.state_time[m.Open].start_time-h.serverTime;u.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),h.formatTimeStringForSecond(e)))}else u.showFlyTip(GetLanguage(200026))}));var r=this.findChild("view/btnMusic");this.addRedPoint("loopy_music",r,new o(100,20),d.Dot),this.addComponentCallbackListener(r,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyMusic);if(t&&t.state==m.Open)uiMgr.openView("ActivityLoopyMusicGameMainView");else if(t&&t.state==m.Preview){var e=t.state_time[m.Open].start_time-h.serverTime;u.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),h.formatTimeStringForSecond(e)))}else u.showFlyTip(GetLanguage(200026))}));var p=this.findChild("view/btnArchery");this.addRedPoint("loopy_archery",p,new o(100,20),d.Dot),this.addComponentCallbackListener(p,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyArchery);if(t&&t.state==m.Open)uiMgr.openView("ActivityLoopyGameMainView");else if(t&&t.state==m.Preview){var e=t.state_time[m.Open].start_time-h.serverTime;u.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),h.formatTimeStringForSecond(e)))}else u.showFlyTip(GetLanguage(200026))}));var c=this.findChild("view/btnPass");this.addRedPoint("loopy_pass",c,new o(100,20),d.Dot),this.addComponentCallbackListener(c,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyPass);if(t&&t.state==m.Open)uiMgr.openView("ActivityLoopyPassView");else if(t&&t.state==m.Preview){var e=t.state_time[m.Open].start_time-h.serverTime;u.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),h.formatTimeStringForSecond(e)))}else u.showFlyTip(GetLanguage(200026))}));var f=this.findChild("view/btnTurn");this.addRedPoint("loopy_turn",f,new o(100,20),d.Dot),this.addComponentCallbackListener(f,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyTurn);if(t&&t.state==m.Open)uiMgr.openView("ActivityLoopyTurnView");else if(t&&t.state==m.Preview){var e=t.state_time[m.Open].start_time-h.serverTime;u.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),h.formatTimeStringForSecond(e)))}else u.showFlyTip(GetLanguage(200026))}));var g=this.findChild("view/btnBox");this.addRedPoint("loopy_box",g,new o(100,20),d.Dot),this.addComponentCallbackListener(g,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyBox);if(t&&t.state==m.Open)uiMgr.openView("ActivityLoopyBoxView");else if(t&&t.state==m.Preview){var e=t.state_time[m.Open].start_time-h.serverTime;u.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),h.formatTimeStringForSecond(e)))}else u.showFlyTip(GetLanguage(200026))}));var T=this.findChild("view/btnCard");this.addRedPoint("loopy_card",T,new o(100,20),d.Dot),this.addComponentCallbackListener(T,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyCard);if(!t||t.state!=m.Open&&t.state!=m.EndShow)if(t&&t.state==m.Preview){var e=t.state_time[m.Open].start_time-h.serverTime;u.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),h.formatTimeStringForSecond(e)))}else u.showFlyTip(GetLanguage(200026));else uiMgr.openView("ActivityLoopyCardView")}));var L=this.findChild("view/btnRank");this.addComponentCallbackListener(L,a.EventType.CLICK,(function(){uiMgr.openView("ActivityLoopyRankView",v.LoopyPass)}));var w=this.findChild("view/btnTask");this.addRedPoint("loopy_task",w,new o(25,30),d.Dot),this.addComponentCallbackListener(w,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyTurn);t&&t.state==m.Open?uiMgr.openView("ActivityLoopyTaskView",v.LoopyTurn):t&&t.state==m.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var C=this.findChild("view/btnGift");this.addComponentCallbackListener(C,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyTurn);t&&t.state==m.Open?uiMgr.openView("ActivityLoopyGiftView",v.LoopyTurn):t&&t.state==m.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var S=this.findChild("view/btnStore");this.addRedPoint("loopy_store",S,new o(25,30),d.Dot),this.addComponentCallbackListener(S,a.EventType.CLICK,(function(){uiMgr.openView("ActivityLoopyStoreView",v.Loopy)}));var I=this.findChild("view/btnOptional");this.addRedPoint("loopy_optional",I,new o(25,30),d.Dot),this.addComponentCallbackListener(I,a.EventType.CLICK,(function(){var t=IS(y).GetActivityInfo(v.LoopyBox);if(t&&t.state==m.Open)uiMgr.openView("ActivityLoopyOptionalView");else if(t&&t.state==m.Preview){var e=t.state_time[m.Open].start_time-h.serverTime;u.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(201410),h.formatTimeStringForSecond(e)))}else u.showFlyTip(GetLanguage(200026))}))},L.registerUpdateHandler=function(){this.addEvent(g.OnActivityInfoUpdate,this.updateInfo,this),this.addEvent(g.OnActivityInfoTaskUpdate,this.updateRed,this),this.addEvent(g.OnActivityInfoUpdate,this.updateRed,this),this.addEvent(g.OnActivityFindUpdate,this.updateRed,this),this.addEvent(g.OnHorseCarnivalUpdate,this.updateRed,this),this.addEvent(g.OnHorseCarnivalReward,this.updateRed,this),this.addEvent(c.BATTLE_PASS_INFO_UPDATE,this.updateRed,this),this.addEvent(g.OnActivityCollectInfo,this.updateRed,this),this.addEvent(f.PAY_REWARD_UPDATE,this.updateRed,this)},L.onAfterOpen=function(){this.updateRed(),r.playMusic("loopy_mainbgm");var t=IS(y).GetActivityInfo(v.Loopy);if(t){var e,i=null!=(e=t.state_time[t.state])?e:t.state_time[m.Open];if(this.leftTime=i.end_time-h.serverTime,this.leftTime>0){var n="";t.state==m.Preview?n=GetLanguage(200763):t.state==m.Open?n=GetLanguage(200764):t.state==m.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=s.formatStr("%s",h.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}else this.txtTimeDesc.string=GetLanguage(200765),this.txtLeftTime.string=GetLanguage(200026)},L.onBeforeClose=function(){r.playMusic("battle"),this.canUpdate=!1},L.onDestroy=function(){},L.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=s.formatStr("%s",h.formatTimeStringForSecond(this.leftTime)):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},L.updateRed=function(){IS(p).changeValue("loopy_task",IS(y).GetTaskRedNum(v.LoopyTurn)),IS(p).changeValue("loopy_store",IS(T).GetStoreRed()),IS(p).changeValue("loopy_find",IS(T).getFindRedNum()),IS(p).changeValue("loopy_turn",IS(T).GetTurnRed()),IS(p).changeValue("loopy_pass",IS(T).getPassRedNum()),IS(p).changeValue("loopy_box",IS(T).GetBoxRed()),IS(p).changeValue("loopy_card",IS(T).getCardRedNum()),IS(p).changeValue("loopy_optional",IS(T).GetOptionGiftRed()),IS(p).changeValue("loopy_archery",IS(y).GetTaskRedNum(v.LoopyArchery)),IS(p).changeValue("loopy_music",IS(y).GetTaskRedNum(v.LoopyMusic))},L.updateInfo=function(t){if(t.type==v.Loopy&&t.state!=m.Null){var e,i=null!=(e=t.state_time[t.state])?e:t.state_time[m.Open];if(this.leftTime=i.end_time-h.serverTime,this.leftTime>0){var n="";t.state==m.Preview?n=GetLanguage(200763):t.state==m.Open?n=GetLanguage(200764):t.state==m.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=s.formatStr("%s",h.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}},i}(L));i._RF.pop()}}}));

