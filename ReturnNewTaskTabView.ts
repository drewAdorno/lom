System.register("chunks:///_virtual/ReturnNewTaskTabView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ReturnDataCache.ts","./ReturnDefine.ts","./UIDefine.ts","./BaseTabView.ts"],(function(e){"use strict";var t,i,n,r,s,a,o,h,u,l,d,f,T;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e.Button,r=e.Sprite,s=e.Label,a=e.sys},function(e){o=e.default},function(e){h=e.default},null,function(e){u=e.ReturnDataCache},function(e){l=e.ReturnEventDefine,d=e.ReturnTaskType},function(e){f=e.PanelTabType},function(e){T=e.BaseTabView}],execute:function(){i._RF.push({},"abafex9bStFBrQRcAEJ12J1","ReturnNewTaskTabView",void 0);e("default",function(e){function i(){var t,i,n;return(n=e.call(this)||this).parentView=void 0,n.titleIcon=void 0,n.titleDes=void 0,n.txtLeftTime=void 0,n.timer=void 0,n.typeTitle=((t={})[f.ReturnNew_Task]="lwj_hgfl_banner1",t[f.ReturnNew_Charge]="lwj_hgfl_banner2",t),n.typeTitleDes=((i={})[f.ReturnNew_Task]=700004001,i[f.ReturnNew_Charge]=700004002,i),n.name="ReturnNewTaskTabView",n.url="ui/module/return/ReturnNewTaskTabView",n.tabTypes=[f.ReturnNew_Task,f.ReturnNew_Charge],n}t(i,e);var T=i.prototype;return T.onInit=function(){var t=this;e.prototype.onInit.call(this);var i=this.findChild("btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var a=this.findChild("title/tips");this.addComponentCallbackListener(a,n.EventType.CLICK,(function(){uiMgr.openView("ParkingRuleTips",[204750])})),this.titleIcon=this.findChildComponent("title",r),this.titleDes=this.findChildComponent("title/titleDes",s),this.txtLeftTime=this.findChildComponent("title/txtLeftTime",s)},T.registerUpdateHandler=function(){this.addEvent(l.UpdateTaskRed,this.RefreshRed),this.addEvent(l.UpdateChargeRed,this.RefreshRed),this.addEvent(l.UpdateReturnInfo,this.CloseShow)},T.UpdateTime=function(){var e=this;this.timer&&(this.removeTimer(this.timer),this.timer=null);var t=IS(u).GetReturnInfo();if(t&&t.end_time-h.serverTime>0){var i=o.formatStrWithMirrorDeal(GetLanguage(200043),h.formatTimeStringForSecond(Math.max(0,t.end_time-h.serverTime)));a.uiMirror&&(i=h.formatTimeStringForSecond(Math.max(0,t.end_time-h.serverTime))),this.txtLeftTime.string=i,this.timer=this.addTimer(1,t.end_time-h.serverTime,(function(){if(t.end_time-h.serverTime>0){var i=o.formatStrWithMirrorDeal(GetLanguage(200043),h.formatTimeStringForSecond(Math.max(0,t.end_time-h.serverTime)));a.uiMirror&&(i=h.formatTimeStringForSecond(Math.max(0,t.end_time-h.serverTime))),e.txtLeftTime.string=i}else e.removeTimer(e.timer),e.timer=null,e.txtLeftTime.string=GetLanguage(200026)}))}else this.txtLeftTime.string=GetLanguage(200026)},T.setIndex=function(t){e.prototype.setIndex.call(this,t);var i=this.typeTitle[this.curType],n=this.typeTitleDes[this.curType];this.loadIcon(this.titleIcon,"return_newTask",i),this.titleDes.string=GetLanguage_UI(n)},T.RefreshRed=function(){this.setRedPoint(f.ReturnNew_Task,IS(u).GetTaskRed(d.NewReturnTask)),this.setRedPoint(f.ReturnNew_Charge,IS(u).GetChargeRed())},T.CloseShow=function(){var e=IS(u).GetReturnInfo();e&&0==e.return_type&&this.close()},T.onAfterOpenTab=function(){this.UpdateTime(),this.RefreshRed();for(var e=0;e<this.tabTypes.length;e++){var t=this.tabTypes[e],i=this.getRedPointData[t];if(i&&i>0){t!=this.curType&&this.setIndex(t);break}}},i}(T));i._RF.pop()}}}));

