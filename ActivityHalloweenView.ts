System.register("chunks:///_virtual/ActivityHalloweenView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RedPoint.ts","./RedPointMgr.ts","./TimeUtil.ts","./index57.ts","./BattlePassDefine.ts","./MessageView.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./HorseCarnivalDataCache.ts","./ActivityHalloweenDataCache.ts","./BaseView.ts"],(function(e){"use strict";var t,i,n,a,s,o,l,d,h,r,u,v,w,c,f,p,g,T,m;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e.Label,a=e.Button,s=e.Vec2,o=e.js},function(e){l=e.RedPointType},function(e){d=e.RedPointMgr},function(e){h=e.default},null,function(e){r=e.BattlePassDefine},function(e){u=e.default},function(e){v=e.default},function(e){w=e.default},function(e){c=e.ActivityType,f=e.ActivityState,p=e.ActivityEventDefine},function(e){g=e.HorseCarnivalDataCache},function(e){T=e.default},function(e){m=e.BaseView}],execute:function(){i._RF.push({},"96b4326+jtMjYjvWcjPu6G0","ActivityHalloweenView",void 0);e("default",function(e){function i(){var t;return(t=e.call(this)||this).txtTimeDesc=void 0,t.txtLeftTime=void 0,t.leftTime=0,t.deltaTime=0,t.canUpdate=!1,t.name="ActivityHalloweenView",t.url="ui/module/halloween/ActivityHalloweenView",t.fullScreen=!0,t}t(i,e);var m=i.prototype;return m.onInit=function(){var e=this;this.txtTimeDesc=this.findChildComponent("view/nodeTime/txtDesc",n),this.txtLeftTime=this.findChildComponent("view/nodeTime/txtTime",n);var t=this.findChild("view/btnClose");this.addComponentCallbackListener(t,a.EventType.CLICK,(function(){e.close()}));var i=this.findChild("view/btnPvp");this.addRedPoint("halloween_pvp",i,new s(65,55),l.Dot),this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){var e=IS(w).GetActivityInfo(c.HalloweenPvp);e&&e.state==f.Open?uiMgr.openView("ActivityHalloweenPvpView"):e&&e.state==f.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var o=this.findChild("view/btnBuy");this.addComponentCallbackListener(o,a.EventType.CLICK,(function(){var e=IS(w).GetActivityInfo(c.HalloweenBuy);e&&e.state==f.Open?uiMgr.openView("ActivityHalloweenBuyView"):e&&e.state==f.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var d=this.findChild("view/btnGame");this.addRedPoint("halloween_game",d,new s(50,50),l.Dot),this.addComponentCallbackListener(d,a.EventType.CLICK,(function(){var e=IS(w).GetActivityInfo(c.HalloweenGame);e&&e.state==f.Open?uiMgr.openView("ActivityHalloweenGameMainView"):e&&e.state==f.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var h=this.findChild("view/btnPass");this.addRedPoint("halloween_pass",h,new s(50,50),l.Dot),this.addComponentCallbackListener(h,a.EventType.CLICK,(function(){var e=IS(w).GetActivityInfo(c.HalloweenPass);e&&e.state==f.Open?uiMgr.openView("ActivityHalloweenPassView"):e&&e.state==f.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var r=this.findChild("view/btnTurn");this.addRedPoint("halloween_turn",r,new s(48,58),l.Dot),this.addComponentCallbackListener(r,a.EventType.CLICK,(function(){var e=IS(w).GetActivityInfo(c.HalloweenTurn);e&&e.state==f.Open?uiMgr.openView("ActivityHalloweenTurnView"):e&&e.state==f.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var v=this.findChild("view/btnRank");this.addComponentCallbackListener(v,a.EventType.CLICK,(function(){uiMgr.openView("ActivityAutumnRankView",c.Halloween)}));var p=this.findChild("view/btnTask");this.addRedPoint("halloween_task",p,new s(25,30),l.Dot),this.addComponentCallbackListener(p,a.EventType.CLICK,(function(){var e=IS(w).GetActivityInfo(c.HalloweenPass);e&&e.state==f.Open?uiMgr.openView("ActivityHalloweenTaskView",c.HalloweenPass):e&&e.state==f.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var g=this.findChild("view/btnGift");this.addComponentCallbackListener(g,a.EventType.CLICK,(function(){var e=IS(w).GetActivityInfo(c.HalloweenTurn);e&&e.state==f.Open?uiMgr.openView("HorseCarnivalGiftView",c.HalloweenTurn):e&&e.state==f.Preview?u.showFlyTip(GetLanguage(200086)):u.showFlyTip(GetLanguage(200026))}));var T=this.findChild("view/btnStore");this.addRedPoint("halloween_store",T,new s(25,30),l.Dot),this.addComponentCallbackListener(T,a.EventType.CLICK,(function(){uiMgr.openView("ActivityHalloweenStoreView",c.Halloween)}));var m=this.findChild("view/btnGift2");this.addRedPoint("halloween_gift",m,new s(25,30),l.Dot),this.addComponentCallbackListener(m,a.EventType.CLICK,(function(){var e=IS(w).GetActivityInfo(c.HalloweenGift);!e||e.state!=f.Open&&e.state!=f.Preview?u.showFlyTip(GetLanguage(200026)):uiMgr.openView("ActivityHalloweenGiftView")}))},m.registerUpdateHandler=function(){this.addEvent(p.OnActivityInfoUpdate,this.updateInfo,this),this.addEvent(p.OnActivityInfoTaskUpdate,this.updateRed,this),this.addEvent(p.OnActivityInfoUpdate,this.updateRed,this),this.addEvent(r.BATTLE_PASS_INFO_UPDATE,this.updateRed,this),this.addEvent(p.OnHorseCarnivalUpdate,this.updateRed,this),this.addEvent(p.OnHorseCarnivalReward,this.updateRed,this),this.addEvent(p.OnHalloweenPvpInfo,this.updateRed,this),this.addEvent(p.OnHalloweenPvpCandy,this.updateRed,this)},m.onAfterOpen=function(){this.updateRed(),IS(v).send_24_72();var e=IS(w).GetActivityInfo(c.Halloween);if(e){var t,i=null!=(t=e.state_time[e.state])?t:e.state_time[f.Open];if(this.leftTime=i.end_time-h.serverTime,this.leftTime>0){var n="";e.state==f.Preview?n=GetLanguage(200763):e.state==f.Open?n=GetLanguage(200764):e.state==f.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=o.formatStr("%s",h.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}},m.onBeforeClose=function(){this.canUpdate=!1},m.onDestroy=function(){},m.onUpdate=function(e){this.canUpdate&&(this.deltaTime=this.deltaTime+e,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=o.formatStr("%s",h.formatTimeStringForSecond(this.leftTime)):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},m.updateRed=function(){IS(d).changeValue("halloween_gift",IS(T).GetGiftRed()),IS(d).changeValue("halloween_task",IS(w).GetTaskRedNum(c.HalloweenPass)),IS(d).changeValue("halloween_pass",IS(T).getPassRedNum()),IS(d).changeValue("halloween_turn",IS(g).getRedNum(c.HalloweenTurn)),IS(d).changeValue("halloween_store",IS(T).GetStoreRed()),IS(d).changeValue("halloween_game",IS(w).GetTaskRedNum(c.HalloweenGame)),IS(d).changeValue("halloween_pvp",IS(T).getPvpRed())},m.updateInfo=function(e){if(e.type==c.Autumn&&e.state!=f.Null){var t,i=null!=(t=e.state_time[e.state])?t:e.state_time[f.Open];if(this.leftTime=i.end_time-h.serverTime,this.leftTime>0){var n="";e.state==f.Preview?n=GetLanguage(200763):e.state==f.Open?n=GetLanguage(200764):e.state==f.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=o.formatStr("%s",h.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}},i}(m));i._RF.pop()}}}));

