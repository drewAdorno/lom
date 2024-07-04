System.register("chunks:///_virtual/SeasonTaskView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./SeasonDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,s,a,o,r,d,c,h,f,l,u,v,m,p,g,T,C;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,s=t.Label,a=t.ScrollView,o=t.sys,r=t.js},function(t){d=t.ItemGrid},function(t){c=t.ListItem},function(t){h=t.default},function(t){f=t.default},function(t){l=t.default},null,function(t){u=t.default},function(t){v=t.default},function(t){m=t.ActivityEventDefine,p=t.ActivityState,g=t.ActivityTaskState},function(t){T=t.SeasonDataCache},function(t){C=t.BaseView}],execute:function(){i._RF.push({},"39820lad3RG/KJbNIBCeuDo","SeasonTaskView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtLeftTime=void 0,e.taskList=void 0,e.deltaTime=0,e.leftTime=0,e.canUpdate=!1,e.txtDay=void 0,e.startTime=0,e.name="SeasonTaskView",e.url="ui/module/season/SeasonTaskView",e}e(i,t);var d=i.prototype;return d.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChild("btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.txtLeftTime=this.findChildComponent("container/topBg/txtLeftTime",s);var o=this.findChildComponent("container/taskList",a);this.taskList=this.addUIList(o,y),this.txtDay=this.findChildComponent("container/topBg/txtDay",s)},d.registerUpdateHandler=function(){this.addEvent(m.OnActivityInfoTaskUpdate,this.OnTaskUpdate,this),this.addEvent(m.OnActivityInfoUpdate,this.OnTaskUpdate,this)},d.onAfterOpen=function(){IS(u).send_24_14(this.openArgs[0]);var t=IS(v).GetActivityInfo(this.openArgs[0]);if(t){var e,i=null!=(e=t.state_time[t.state])?e:t.state_time[p.Open];if(this.leftTime=i.end_time-l.serverTime,this.startTime=i.start_time,this.leftTime>0){this.canUpdate=!0;var n=l.getNextDayTime()-l.serverTime;this.txtLeftTime.string=l.formatTimeStringForSecond(n)}else this.txtLeftTime.string=GetLanguage(200026)}else this.txtLeftTime.string=GetLanguage(200026);this.OnTaskUpdate(),this.updateDay()},d.updateDay=function(){this.txtDay.string=(o.uiMirror?f:r).formatStr(GetLanguage(200319),l.getTimeOpenDay(this.startTime))},d.onBeforeClose=function(){this.canUpdate=!1},d.onDestroy=function(){},d.onUpdate=function(t){if(this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1))if(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0){var e=l.getNextDayTime()-l.serverTime;this.txtLeftTime.string=l.formatTimeStringForSecond(Math.max(0,e)),e<=0&&(this.updateDay(),IS(u).send_24_14(this.openArgs[0]))}else this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1},d.OnTaskUpdate=function(){var t=IS(v).GetActivityInfo(this.openArgs[0]);if(null!=t){var e=[];for(var i in t.task_list){if(t.task_list.hasOwnProperty(i))configActivity_task_group.getDataByKey(t.task_list[i].group_id).open_day==l.getTimeOpenDay(this.startTime)&&e.push(t.task_list[i])}e.sort((function(t,e){return t.state==g.CanGet&&e.state!=g.CanGet?-1:t.state!=g.CanGet&&e.state==g.CanGet?1:t.state!=e.state?t.state-e.state:t.id-e.id})),this.taskList.datas=e,IS(T).checkMapTaskRP()}},i}(C));var y=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).txtDesc=void 0,e.btnGet=void 0,e.received=void 0,e.txtProgress=void 0,e.rewardScroll=void 0,e}e(i,t);var o=i.prototype;return o.onInit=function(){var t=this;this.txtDesc=h.findChildComponent(this.node,"txtDesc",s),this.received=h.findChild(this.node,"received"),this.btnGet=h.findChild(this.node,"btnGet"),this.view.addComponentCallbackListener(this.btnGet,n.EventType.CLICK,(function(){IS(u).send_24_15(t.view.openArgs[0],t.data.task_id,t.data.group_id)})),this.txtProgress=h.findChildComponent(this.node,"txtProgress",s);var e=h.findChildComponent(this.node,"rewardScroll",a);this.rewardScroll=this.view.addUIList(e,G,!1),this.rewardScroll.touchEvent=!1},o.onRender=function(t,e){this.txtDesc.string=t.cfg.desc,this.rewardScroll.datas=t.cfg.reward,t.state==g.CanGet?(this.received.active=!1,this.btnGet.active=!0,this.txtProgress.node.active=!1):t.state==g.HadGet?(this.received.active=!0,this.btnGet.active=!1,this.txtProgress.node.active=!1):(this.received.active=!1,this.btnGet.active=!1,this.txtProgress.node.active=!0,this.txtProgress.string=f.formatStr("##1/##2",t.count,t.cfg.condition[2]))},i}(c),G=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,e.itemGrid=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.itemGridNode=h.findChild(this.node,"itemGrid"),this.itemGrid=new d(this.view,this.itemGridNode)},n.onRender=function(t,e){this.itemGrid.SetItemId(t[0],t[1])},i}(c);i._RF.pop()}}}));
