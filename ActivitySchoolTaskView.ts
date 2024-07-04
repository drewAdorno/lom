System.register("chunks:///_virtual/ActivitySchoolTaskView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,a,o,r,d,h,c,f,l,v,u,m,p,T,g,C;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,s=t.Label,a=t.ScrollView,o=t.sys,r=t.ProgressBar,d=t.js},function(t){h=t.ItemGrid},function(t){c=t.ListItem},function(t){f=t.default},function(t){l=t.default},function(t){v=t.default},null,function(t){u=t.default},function(t){m=t.default},function(t){p=t.ActivityEventDefine,T=t.ActivityState,g=t.ActivityTaskState},function(t){C=t.BaseView}],execute:function(){e._RF.push({},"e0906oglQFLrbJWZ5HfReqw","ActivitySchoolTaskView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).txtLeftTime=void 0,i.taskList=void 0,i.deltaTime=0,i.leftTime=0,i.canUpdate=!1,i.name="ActivitySchoolTaskView",i.url="ui/module/activity/ActivitySchoolTaskView",i}i(e,t);var r=e.prototype;return r.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("container/btnClose");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()})),this.txtLeftTime=this.findChildComponent("container/bg/txtLeftTime",s);var o=this.findChildComponent("container/taskList",a);this.taskList=this.addUIList(o,G)},r.registerUpdateHandler=function(){this.addEvent(p.OnActivityInfoTaskUpdate,this.OnTaskUpdate,this),this.addEvent(p.OnActivityInfoUpdate,this.OnTaskUpdate,this)},r.onAfterOpen=function(){var t;IS(u).send_24_14(this.openArgs[0]);var i=IS(m).GetActivityInfo(this.openArgs[0]),e=null!=(t=i.state_time[i.state])?t:i.state_time[T.Open];if(this.leftTime=e.end_time-v.serverTime,this.leftTime>0){this.canUpdate=!0;var n=l.formatStrWithMirrorDeal(GetLanguage(200043),v.formatTimeStringForSecond(Math.max(0,this.leftTime-v.serverTime)));o.uiMirror&&(n=v.formatTimeStringForSecond(Math.max(0,this.leftTime-v.serverTime))),this.txtLeftTime.string=n}else this.txtLeftTime.string=GetLanguage(200026);this.OnTaskUpdate()},r.onBeforeClose=function(){this.canUpdate=!1},r.onDestroy=function(){},r.onUpdate=function(t){if(this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1))if(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0){var i=l.formatStrWithMirrorDeal(GetLanguage(200043),v.formatTimeStringForSecond(Math.max(0,this.leftTime-v.serverTime)));o.uiMirror&&(i=v.formatTimeStringForSecond(Math.max(0,this.leftTime-v.serverTime))),this.txtLeftTime.string=i}else this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1},r.OnTaskUpdate=function(){var t=IS(m).GetActivityInfo(this.openArgs[0]),i=[];for(var e in i.push({id:0}),t.task_list)t.task_list.hasOwnProperty(e)&&i.push(t.task_list[e]);i.sort((function(t,i){return 0==t.id||0==i.id?0==t.id?-1:1:t.state==g.CanGet&&i.state!=g.CanGet?-1:t.state!=g.CanGet&&i.state==g.CanGet?1:t.state!=i.state?t.state-i.state:t.id-i.id})),this.taskList.datas=i},e}(C));var G=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).txtDesc=void 0,i.btnGo=void 0,i.btnGet=void 0,i.received=void 0,i.undone=void 0,i.pb=void 0,i.schedule=void 0,i.itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var a=e.prototype;return a.onInit=function(){var t=this;this.itemGridNode=f.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode),this.txtDesc=f.findChildComponent(this.node,"txtDesc",s),this.pb=f.findChildComponent(this.node,"ProgressBar",r),this.schedule=f.findChildComponent(this.node,"ProgressBar/schedule",s),this.received=f.findChild(this.node,"received"),this.undone=f.findChild(this.node,"undone"),this.btnGet=f.findChild(this.node,"btnGet"),this.view.addComponentCallbackListener(this.btnGet,n.EventType.CLICK,(function(){IS(u).send_24_15(t.view.openArgs[0],t.data.task_id,t.data.group_id)})),this.btnGo=f.findChild(this.node,"btnGo"),this.view.addComponentCallbackListener(this.btnGo,n.EventType.CLICK,(function(){uiMgr.openView("ActivitySchoolTurnView"),t.view.close()}))},a.onRender=function(t,i){if(0==t.id)this.btnGo.active=!0,this.pb.node.active=!1,this.received.active=!1,this.undone.active=!1,this.btnGet.active=!1,this.txtDesc.string=GetLanguage(200087),this.itemGrid.SetItemId(1036,1);else{this.btnGo.active=!1,this.pb.node.active=!0,this.txtDesc.string=t.cfg.desc,this.itemGrid.SetItemId(t.cfg.reward[0][0],t.cfg.reward[0][1]);var e=t.cfg.condition[2];this.schedule.string=d.formatStr("%s/%s",Math.min(e,t.count),e),this.pb.progress=t.count/t.cfg.condition[2],t.state==g.CanGet?(this.received.active=!1,this.undone.active=!1,this.btnGet.active=!0):t.state==g.HadGet?(this.received.active=!0,this.undone.active=!1,this.btnGet.active=!1):(this.received.active=!1,this.undone.active=!0,this.btnGet.active=!1)}},e}(c);e._RF.pop()}}}));
