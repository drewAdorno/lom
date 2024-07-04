System.register("chunks:///_virtual/ActivityReverseView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./TimeUtil.ts","./index57.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityReverseControl.ts","./PayControl.ts","./RedPoint.ts","./RedPointMgr.ts","./ActivityReverseDataCache.ts","./BaseView.ts"],(function(e){"use strict";var t,i,n,s,a,o,r,d,c,u,f,l,v,h,m,p,g;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e.Label,s=e.Button,a=e.Vec2,o=e.js},function(e){r=e.default},null,function(e){d=e.default},function(e){c=e.ActivityEventDefine,u=e.ActivityType,f=e.ActivityState},function(e){l=e.default},function(e){v=e.default},function(e){h=e.RedPointType},function(e){m=e.RedPointMgr},function(e){p=e.default},function(e){g=e.BaseView}],execute:function(){i._RF.push({},"f3b8cicQNlH8YiCZa9O2oRs","ActivityReverseView",void 0);e("default",function(e){function i(){var t;return(t=e.call(this)||this).txtTimeDesc=void 0,t.txtLeftTime=void 0,t.leftTime=0,t.deltaTime=0,t.canUpdate=!1,t.name="ActivityReverseView",t.url="ui/module/reverse/ActivityReverseView",t.fullScreen=!0,t}t(i,e);var g=i.prototype;return g.onInit=function(){var e=this;this.txtTimeDesc=this.findChildComponent("view/nodeTime/txtDesc",n),this.txtLeftTime=this.findChildComponent("view/nodeTime/txtTime",n);var t=this.findChild("btnClose");this.addComponentCallbackListener(t,s.EventType.CLICK,(function(){e.close()}));var i=this.findChild("view/btnMonster");this.addRedPoint("ActReverseMonster",i,new a(240,30),h.Dot),this.addComponentCallbackListener(i,s.EventType.CLICK,(function(){uiMgr.openView("ActivityReverseMonsterView")}));var o=this.findChild("view/btnDungeon");this.addRedPoint("ActReverseDungeon",o,new a(240,30),h.Dot),this.addComponentCallbackListener(o,s.EventType.CLICK,(function(){uiMgr.openView("ActivityReverseDungeonView")}));var r=this.findChild("view/btnReward");this.addRedPoint("ActReverseRewrad",r,new a(240,30),h.Dot),this.addComponentCallbackListener(r,s.EventType.CLICK,(function(){uiMgr.openView("ActivityReverseRewardView")}));var d=this.findChild("view/btnGift");this.addRedPoint("ActReverseGift",d,new a(30,25),h.Dot),this.addComponentCallbackListener(d,s.EventType.CLICK,(function(){uiMgr.openView("ActivityReverseGiftView")}));var c=this.findChild("view/btnSupply");this.addRedPoint("ActReverseSupply",c,new a(30,25),h.Dot),this.addComponentCallbackListener(c,s.EventType.CLICK,(function(){uiMgr.openView("ActivityReverseSupplyView")}))},g.registerUpdateHandler=function(){this.addEvent(c.OnActivityInfoUpdate,this.updateInfo,this),this.addEvent(c.OnActivityInfoTaskUpdate,this.updateRed,this),this.addEvent(c.OnActivityInfoUpdate,this.updateRed,this)},g.onAfterOpen=function(){IS(v).send_19_8(),IS(l).send_24_110(),this.updateRed();var e=IS(d).GetActivityInfo(u.Reverse);if(e){var t,i=null!=(t=e.state_time[e.state])?t:e.state_time[f.Open];if(this.leftTime=i.end_time-r.serverTime,this.leftTime>0){var n="";e.state==f.Preview?n=GetLanguage(200763):e.state==f.Open?n=GetLanguage(200764):e.state==f.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=o.formatStr("%s",r.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}else this.txtTimeDesc.string=GetLanguage(200765),this.txtLeftTime.string=GetLanguage(200026)},g.onBeforeClose=function(){this.canUpdate=!1},g.onDestroy=function(){},g.onUpdate=function(e){this.canUpdate&&(this.deltaTime=this.deltaTime+e,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=o.formatStr("%s",r.formatTimeStringForSecond(this.leftTime)):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},g.updateRed=function(){IS(m).changeValue("ActReverseSupply",IS(p).getSupplyRed()),IS(m).changeValue("ActReverseGift",IS(p).getShopRed()),IS(m).changeValue("ActReverseMonster",IS(p).getMonsterRed()),IS(m).changeValue("ActReverseRewrad",IS(p).getRewardRed()),IS(m).changeValue("ActReverseDungeon",IS(d).GetTaskRedNum(u.Reverse)+IS(p).getDungeonRed())},g.updateInfo=function(e){if(e.type==u.Reverse&&e.state!=f.Null){var t,i=null!=(t=e.state_time[e.state])?t:e.state_time[f.Open];if(this.leftTime=i.end_time-r.serverTime,this.leftTime>0){var n="";e.state==f.Preview?n=GetLanguage(200763):e.state==f.Open?n=GetLanguage(200764):e.state==f.EndShow&&(n=GetLanguage(200765)),this.txtTimeDesc.string=n,this.canUpdate=!0,this.txtLeftTime.string=o.formatStr("%s",r.formatTimeStringForSecond(this.leftTime))}else this.txtLeftTime.string=GetLanguage(200026)}},i}(g));i._RF.pop()}}}));
