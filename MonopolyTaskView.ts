System.register("chunks:///_virtual/MonopolyTaskView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./MonopolyDataCache.ts","./MonopolyDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,s,a,d,r,h,c,l,u,f,m,v,p,C,g,b,T,D,y;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.Label,s=t.ScrollView,a=t.Sprite,d=t.js,r=t.ProgressBar,h=t.LabelOutline,c=t.Color},function(t){l=t.ItemGrid},function(t){u=t.ListItem},function(t){f=t.default},function(t){m=t.default},function(t){v=t.default},null,function(t){p=t.default},function(t){C=t.default},function(t){g=t.ActivityEventDefine,b=t.ActivityTaskState},function(t){T=t.MonopolyDataCache},function(t){D=t.MonopolyEventDefine},function(t){y=t.BaseView}],execute:function(){i._RF.push({},"a6a23WbF8VC378o89aVi/rk","MonopolyTaskView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtLeftTime=void 0,e.taskList=void 0,e.deltaTime=0,e.leftTime=0,e.canUpdate=!1,e.btnDoubleCard=void 0,e.imgDoubleCard=void 0,e.name="MonopolyTaskView",e.url="ui/module/activity/MonopolyTaskView",e}e(i,t);var r=i.prototype;return r.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){}));var i=this.findChild("container/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.txtLeftTime=this.findChildComponent("container/topBg/txtLeftTime",o);var d=this.findChildComponent("container/taskList",s);this.taskList=this.addUIList(d,G),this.btnDoubleCard=this.findChild("container/btnDoubleCard"),this.addComponentCallbackListener(this.btnDoubleCard,n.EventType.CLICK,(function(){uiMgr.openView("MonopolyDoubleCardView")})),this.imgDoubleCard=this.findChildComponent("container/topBg/imgDouble",a)},r.registerUpdateHandler=function(){this.addEvent(g.OnActivityInfoTaskUpdate,this.OnTaskUpdate,this),this.addEvent(g.OnActivityInfoUpdate,this.OnTaskUpdate,this),this.addEvent(D.MONO_INFO_BACK,this.onMonoInfoBack,this)},r.onAfterOpen=function(){IS(p).send_24_14(this.openArgs[0]),this.canUpdate=!0;var t=new Date(1e3*(v.serverTime+86400)),e=d.formatStr("%s/%s/%s %s:%s:%s",t.getFullYear(),t.getMonth()+1,t.getDate(),0,0,0),i=new Date(e).getTime()/1e3;this.leftTime=i-v.serverTime,this.leftTime>=0&&(this.txtLeftTime.string=m.formatStrWithMirrorDeal(GetLanguage(200980),v.formatTimeStringForSecond(this.leftTime))),this.updateDoubleCard(),this.OnTaskUpdate()},r.onBeforeClose=function(){this.canUpdate=!1},r.onDestroy=function(){},r.onUpdate=function(t){if(this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1))if(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>=0)this.txtLeftTime.string=m.formatStrWithMirrorDeal(GetLanguage(200980),v.formatTimeStringForSecond(this.leftTime));else{var e=new Date(1e3*(v.serverTime+86400)),i=d.formatStr("%s/%s/%s %s:%s:%s",e.getFullYear(),e.getMonth()+1,e.getDate(),0,0,0),n=new Date(i).getTime()/1e3;this.leftTime=n-v.serverTime,this.leftTime>0&&(this.txtLeftTime.string=m.formatStrWithMirrorDeal(GetLanguage(200980),v.formatTimeStringForSecond(this.leftTime)))}},r.OnTaskUpdate=function(){var t=IS(C).GetActivityInfo(this.openArgs[0]),e=[];for(var i in t.task_list)t.task_list.hasOwnProperty(i)&&e.push(t.task_list[i]);e.sort((function(t,e){return 0==t.id||0==e.id?0==t.id?-1:1:t.state==b.CanGet&&e.state!=b.CanGet?-1:t.state!=b.CanGet&&e.state==b.CanGet?1:t.state!=e.state?t.state-e.state:t.id-e.id})),this.taskList.datas=e},r.updateDoubleCard=function(){this.btnDoubleCard.active=1!=IS(T).monopolyInfo.double_card_open,this.imgDoubleCard.grayscale=1!=IS(T).monopolyInfo.double_card_open},r.onMonoInfoBack=function(){this.updateDoubleCard(),this.OnTaskUpdate()},i}(y));var G=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtDesc=void 0,e.btnGo=void 0,e.btnGet=void 0,e.received=void 0,e.undone=void 0,e.pb=void 0,e.schedule=void 0,e.itemGridNode=void 0,e.itemGrid=void 0,e.txtNum=void 0,e.outlineNum=void 0,e.bg=void 0,e.bg2=void 0,e.txtDesc2=void 0,e}e(i,t);var s=i.prototype;return s.onInit=function(){var t=this;this.bg=f.findChild(this.node,"imgBg"),this.bg2=f.findChild(this.node,"imgBg2"),this.itemGridNode=f.findChild(this.node,"itemGrid"),this.itemGrid=new l(this.view,this.itemGridNode),this.txtDesc=f.findChildComponent(this.node,"txtDesc",o),this.txtDesc2=f.findChildComponent(this.node,"txtDesc2",o),this.pb=f.findChildComponent(this.node,"ProgressBar",r),this.schedule=f.findChildComponent(this.node,"ProgressBar/schedule",o),this.received=f.findChild(this.node,"received"),this.undone=f.findChild(this.node,"undone"),this.btnGet=f.findChild(this.node,"btnGet"),this.view.addComponentCallbackListener(this.btnGet,n.EventType.CLICK,(function(){IS(p).send_24_15(t.view.openArgs[0],t.data.task_id,t.data.group_id)})),this.btnGo=f.findChild(this.node,"btnGo"),this.view.addComponentCallbackListener(this.btnGo,n.EventType.CLICK,(function(){uiMgr.openView("ActivityChildhoodTurnView"),t.view.close()})),this.txtNum=f.findChildComponent(this.node,"itemGrid/num",o),this.outlineNum=f.findChildComponent(this.node,"itemGrid/num",h)},s.onRender=function(t,e){if(0==t.id)this.btnGo.active=!0,this.pb.node.active=!1,this.received.active=!1,this.undone.active=!1,this.btnGet.active=!1,this.bg.active=!1,this.bg2.active=!0,this.txtDesc.string="",this.txtDesc2.string=GetLanguage(201063),this.itemGrid.SetItemId(1057,1),this.txtNum.color=new c(255,255,255),this.outlineNum.color=new c(0,0,0);else{this.btnGo.active=!1,this.pb.node.active=!0,this.bg.active=!0,this.bg2.active=!1,this.txtDesc.string=t.cfg.desc,this.txtDesc2.string="",this.itemGrid.SetItemId(t.cfg.reward[0][0],1!=IS(T).monopolyInfo.double_card_open?t.cfg.reward[0][1]:2*t.cfg.reward[0][1]),this.txtNum.color=1!=IS(T).monopolyInfo.double_card_open?new c(255,255,255):new c(184,247,137),this.outlineNum.color=1!=IS(T).monopolyInfo.double_card_open?new c(0,0,0):new c(37,84,41);var i=t.cfg.condition[2];this.schedule.string=d.formatStr("%s/%s",Math.min(i,t.count),i),this.pb.progress=t.count/t.cfg.condition[2],t.state==b.CanGet?(this.received.active=!1,this.undone.active=!1,this.btnGet.active=!0):t.state==b.HadGet?(this.received.active=!0,this.undone.active=!1,this.btnGet.active=!1):(this.received.active=!1,this.undone.active=!0,this.btnGet.active=!1)}},i}(u);i._RF.pop()}}}));

