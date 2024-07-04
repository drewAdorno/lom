System.register("chunks:///_virtual/ActivityReverseDungeonView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./MessageView.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityReverseDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,a,r,d,c,l,v,h,f,u,p,g,C,I,y,m,w;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,s=t.HorizontalTextAlignment,a=t.ScrollView,r=t.Label,d=t.Sprite},function(t){c=t.V2},function(t){l=t.ItemGrid},function(t){v=t.ListItem},function(t){h=t.default},function(t){f=t.default},null,function(t){u=t.default},function(t){p=t.default},function(t){g=t.default},function(t){C=t.ActivityEventDefine,I=t.ActivityType,y=t.ActivityTaskState},function(t){m=t.default},function(t){w=t.BaseView}],execute:function(){n._RF.push({},"7dd8bvZQXxKirYkZtDpwsGa","ActivityReverseDungeonView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).scrollDungeon=void 0,i.nodeInfo=void 0,i.txtTitle=void 0,i.itemGrid=void 0,i.tasks=[],i.nodeModels=[],i.models=[],i.openDay=0,i.curId=0,i.name="ActivityReverseDungeonView",i.url="ui/module/reverse/ActivityReverseDungeonView",i}i(n,t);var d=n.prototype;return d.onInit=function(){var t=this,i=this.findChild("view/bottom/btnClose");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.nodeInfo.active?(t.nodeInfo.active=!1,t.scrollDungeon.node.active=!0):t.close()}));var e=this.findChild("view/bg/btnTips");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){var t=GetLanguage(202014);u.showBoxTip({tip:t,btnCnt:1,horizontalAlign:s.LEFT})})),this.itemGrid=new l(this,this.findChild("view/bg/itemGrid")),this.itemGrid.SetItemId(2108),this.nodeInfo=this.findChild("view/scrollInfo");var n=this.findChildComponent("view/scrollDungeon",a);this.scrollDungeon=this.addUIList(n,k),this.txtTitle=this.findChildComponent("view/scrollInfo/view/content/title/Label",r);for(var d=function(i){var e=t.findChild("view/scrollInfo/view/content/task/task"+i),n=h.findChild(e,"btn");t.addComponentCallbackListener(n,o.EventType.CLICK,(function(){IS(p).send_24_15(I.Reverse,t.tasks[i-1].task_id,t.tasks[i-1].group_id)}));var s=h.findChildComponent(e,"reward",a),d=t.addUIList(s,D),c={txtDesc:h.findChildComponent(e,"txtDesc",r),btn:n,finish:h.findChild(e,"finish"),cantGet:h.findChild(e,"cantGet"),reward:d,task_id:0,group_id:0};t.tasks.push(c)},c=1;c<=3;c++)d(c);for(var v=function(i){var e=t.findChild("view/scrollInfo/view/content/boss/boss"+i),n=h.findChild(e,"model");t.nodeModels.push(n),t.addComponentCallbackListener(e,o.EventType.CLICK,(function(){0!=t.curId&&uiMgr.openView("ActivityReverseBossInfoView",t.curId,i)}))},f=1;f<=3;f++)v(f);var g=this.findChild("view/scrollInfo/view/content/btn");this.addComponentCallbackListener(g,o.EventType.CLICK,(function(){0!=t.curId&&uiMgr.openView("ActivityReverseQueueView",t.curId)}))},d.registerUpdateHandler=function(){this.addEvent(C.OnActivityInfoTaskUpdate,this.onTaskUpdate,this),this.addEvent(C.OnActivityInfoUpdate,this.onTaskUpdate,this),this.addEvent(C.OnActivityReverseUpdate,this.updateInfo,this)},d.onAfterOpen=function(){IS(m).setDungeonRed(),this.nodeInfo.active=!1,this.scrollDungeon.node.active=!0,this.openDay=IS(m).getOpenDay();for(var t,i,n=configReversion_war_chapter.getDatas(),o=[],s=e(n);!(i=s()).done;){var a=i.value;a.unlock_day<=this.openDay?o.push(a):t=!0}o.sort((function(t,i){return t.index-i.index})),t&&o.push({id:0}),this.scrollDungeon.datas=o},d.onBeforeClose=function(){},d.onDestroy=function(){},d.updateInfoPanel=function(t){if(t&&(this.curId=t),0!=this.curId){var i=configReversion_war_chapter.getDataByKey(this.curId);this.txtTitle.string=i.desc;for(var e=0;e<i.bossList.length;e++){var n=i.bossList[e],o=configReversion_war_boss.getDataByKey(n),s=configUnit.getDataByKey(o.unitId),a=configUnitModel.getDataByKey(s.model);this.models[e]&&this.removeUIEffect(this.models[e]),this.models[e]=this.addUIEffect(a.path,this.nodeModels[e],-1,new c(0,0),a.scale/100*.8)}this.onTaskUpdate()}},d.onTaskUpdate=function(){if(0!=this.curId){for(var t=configReversion_war_chapter.getDataByKey(this.curId),i=IS(g).GetActivityInfo(I.Reverse),e=configActivity_task_group.getDataByKey(t.task_group),n=0;n<3;n++){var o=e.task_list[n],s=i.task_list[o],a=this.tasks[n];a.reward.datas=s.cfg.reward,a.task_id=o,a.group_id=t.task_group,s.state==y.CanGet?(a.finish.active=!1,a.cantGet.active=!1,a.btn.active=!0):s.state==y.HadGet?(a.finish.active=!0,a.cantGet.active=!1,a.btn.active=!1):(a.finish.active=!1,a.cantGet.active=!0,a.btn.active=!1)}this.scrollDungeon.updateAll()}},d.updateInfo=function(){this.scrollDungeon.updateAll()},n}(w));var k=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).normal=void 0,i.des=void 0,i.txtLock=void 0,i.txtTitle=void 0,i.stars=[],i.nodeLock=void 0,i.red=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this;this.normal=h.findChild(this.node,"normal"),this.des=h.findChild(this.node,"des"),this.nodeLock=h.findChild(this.node,"normal/lock"),this.txtLock=h.findChildComponent(this.node,"normal/lock/desc",r),this.txtTitle=h.findChildComponent(this.node,"normal/title",r);for(var i=1;i<=3;i++){var e=h.findChildComponent(this.node,"normal/stars/star"+i,d);this.stars[i]=e}var n=h.findChild(this.node,"normal/btnGoto");this.red=h.findChild(this.node,"normal/btnGoto/red"),this.view.addComponentCallbackListener(n,o.EventType.CLICK,(function(){t.view.nodeInfo.active=!0,t.view.scrollDungeon.node.active=!1,t.view.updateInfoPanel(t.data.id)}))},n.onRender=function(t,i){if(0!=t.id){var e;this.normal.active=!0,this.des.active=!1,this.txtTitle.string=t.desc;for(var n=IS(m).getInfo(),o=null!=(e=n.chapter_list[t.id])?e:0,s=1;s<=3;s++)this.stars[s].grayscale=o<s;if(t.index>1){var a=configReversion_war_chapter.getDatas().find((function(i){return i.index==t.index-1}));this.txtLock.string=f.formatStrWithMirrorDeal(GetLanguage(200091),a.desc);var r=!n.chapter_list[a.id]||0==n.chapter_list[a.id];this.nodeLock.active=r}else this.nodeLock.active=!1;var d=IS(g).GetActivityInfo(I.Reverse),c=configActivity_task_group.getDataByKey(t.task_group);this.red.active=!1;for(var l=0;l<3;l++){var v=c.task_list[l];if(d.task_list[v].state==y.CanGet){this.red.active=!0;break}}}else this.normal.active=!1,this.des.active=!0},e}(v),D=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=h.findChild(this.node,"itemGrid"),this.itemGrid=new l(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(v);n._RF.pop()}}}));
