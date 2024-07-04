System.register("chunks:///_virtual/AccomplishmentView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./AudioMgr.ts","./index3.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./UIEffectAsset.ts","./BagModel.ts","./TaskControl.ts","./TaskDataCache.ts","./TaskDefine.ts","./AchievementControl.ts","./AchievementDataCache.ts","./AchievementDefine.ts","./EaseMethod.ts","./BaseSubView.ts"],(function(t){"use strict";var i,e,n,o,s,a,d,c,h,r,l,m,u,f,v,p,g,C,I,S,y,T,w,A,F,k,b;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.ScrollView,o=t.UITransform,s=t.Vec3,a=t.Sprite,d=t.Label,c=t.ProgressBar,h=t.Button,r=t.js},function(t){l=t.V2},function(t){m=t.audioMgr},null,function(t){u=t.ListItem},function(t){f=t.default},function(t){v=t.default},null,function(t){p=t.UIEffectAsset},function(t){g=t.BagModel},function(t){C=t.default},function(t){I=t.TaskDataCache},function(t){S=t.TaskEventDefine,y=t.TaskType,T=t.TaskState},function(t){w=t.default},function(t){A=t.AchievementDataCache},function(t){F=t.AchievementEventDefine},function(t){k=t.EasingMethod},function(t){b=t.BaseSubView}],execute:function(){e._RF.push({},"f8f34pi5+xHJITBPl0kfy0C","AccomplishmentView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).taskList=void 0,i.nodeFly=void 0,i.utFly=void 0,i.target=void 0,i.totaleTask=void 0,i.name="AccomplishmentView",i.url="ui/module/achievement/AccomplishmentView",i}i(e,t);var a=e.prototype;return a.onInit=function(){var t=this.findChildComponent("view/taskList",n);this.taskList=this.addUIList(t,x,!0,1,1),this.totaleTask=new x,this.totaleTask.init(null,this.findChild("view/totalTask/item"),this),this.nodeFly=this.findChild("flyRoot"),this.utFly=this.nodeFly.getComponent(o),this.target=this.findChild("target")},a.registerUpdateHandler=function(){this.addEvent(S.TASK_INFO_UPDATE,this.updateTaskInfo,this),this.addEvent(F.AccomplishmentUpdate,this.updateTaskInfo,this),this.addEvent(S.Task_FLY_DIAMOND,this.flyDiamo,this)},a.onAfterOpen=function(){this.updateTaskInfo()},a.onBeforeClose=function(){},a.onDestroy=function(){},a.updateTaskInfo=function(){var t,i=IS(A).GetAccomplishmentTask();i.sort((function(t,i){var e=IS(I).GetTaskItem(y.Achievement,t.id),n=IS(I).GetTaskItem(y.Achievement,i.id),o=e?e.state:T.Normal,s=n?n.state:T.Normal;return o==T.Complete&&s!=T.Complete?-1:o!=T.Complete&&s==T.Complete?1:o!=s?o<s?-1:1:t.order-i.order}));var e=configAchievement_total.getDataByKey(IS(A).GetAccomplishmentId());this.totaleTask.onRender({isSpec:!0,id:e.id,condition:(t={},t[2]=e.number,t),name:e.name,desc:e.desc,reward:e.reward}),this.taskList.datas=i},a.flyDiamo=function(t){var i=new s,e=new l;this.utFly.convertToNodeSpaceAR(t,i);var n=this.utFly.convertToNodeSpaceAR(this.target.worldPosition,new s),o=p.alloc("ui/module/common/FlyDiamo",this.nodeFly,1);o.position=e.set(i.x,i.y);var a=new l(i.x,i.y),d=s.subtract(new s,n,i);this.addTween(0,1,.95,(function(t,n){s.multiplyScalar(i,d,n),e.set(a).add2f(i.x,i.y),o.position=e})).easing(k.BACK_IN).call((function(){m.playSound("common_jinbitiao")})).start()},e}(b));var x=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtDesc=void 0,i.pb=void 0,i.txtSchedule=void 0,i.btnGet=void 0,i.notFinish=void 0,i.btnFinish=void 0,i.imgFrame=void 0,i.imgIcon=void 0,i.txtNum=void 0,i.moveTween=void 0,i.name=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this;this.imgFrame=f.findChildComponent(this.node,"imgFrame",a),this.imgIcon=f.findChildComponent(this.node,"imgIcon",a),this.txtNum=f.findChildComponent(this.node,"txtNum",d),this.txtDesc=f.findChildComponent(this.node,"txtDesc",d),this.name=f.findChildComponent(this.node,"name",d),this.pb=f.findChildComponent(this.node,"ProgressBar",c),this.txtSchedule=f.findChildComponent(this.node,"ProgressBar/schedule",d),this.btnGet=f.findChild(this.node,"btnGet"),this.view.addComponentCallbackListener(this.btnGet,h.EventType.CLICK,(function(){t.data.isSpec?IS(w).send_task_achievement_reward_c2s():t.flyOut()})),this.btnFinish=f.findChild(this.node,"received"),this.notFinish=f.findChild(this.node,"notFinish"),this.view.addComponentCallbackListener(this.imgFrame.node,h.EventType.CLICK,(function(){IS(g).OpenItemTips(t.data.reward[0][0],t.imgFrame.node)}))},n.flyOut=function(){var t=this;null!=this.moveTween&&this.moveTween.stop();var i=new s,e=this.node.getComponent(o).contentSize,n=this.node.position,a=new s(n.x,n.y);this.moveTween=this.view.addTween(0,1,.15,(function(n,o){i.set(a).add3f(-1.1*e.x*o,0,0),t.node.position=i})).easing(k.LINEAR).call((function(){IS(C).send_10_2(y.Achievement,t.data.id)})).start()},n.onRender=function(t,i){var e,n;this.data=t,this.name.string=v.formatStr(t.name,null!=(e=t.name_num)?e:""),this.txtDesc.string=v.formatStr(t.desc,null!=(n=t.desc_num)?n:""),this.txtNum.string=t.reward[0][1];var o,s=t.reward[0][0],a=configGoods.getDataByKey(s),d=a.quality,c=configColor.getDataByKey(d);this.view.loadIcon(this.imgIcon,a.icon_group,a.icon),this.view.loadIcon(this.imgFrame,"icon_equip",c.path);var h,l=0;if(t.isSpec?(h=T.Normal,l=IS(A).GetAccomplishmentProgress(),IS(A).GetAccomplishmentGetId()==IS(A).GetAccomplishmentId()?h=T.Received:l>=t.condition[2]&&(h=T.Complete)):(l=(o=IS(I).GetTaskItem(y.Achievement,t.id)).count,h=o.state),o||t.isSpec)if(h==T.Normal){var m=l<=t.condition[2]?l:t.condition[2];this.pb.progress=m/t.condition[2],this.txtSchedule.string=r.formatStr("%s/%s",m,t.condition[2]),this.btnGet.active=!1,this.btnFinish.active=!1,this.notFinish.active=!0}else h==T.Complete?(this.pb.progress=1,this.txtSchedule.string=r.formatStr("%s/%s",t.condition[2],t.condition[2]),this.btnGet.active=!0,this.btnFinish.active=!1,this.notFinish.active=!1):(this.pb.progress=1,this.txtSchedule.string=r.formatStr("%s/%s",t.condition[2],t.condition[2]),this.btnGet.active=!1,this.btnFinish.active=!0,this.notFinish.active=!1);else this.pb.progress=0,this.txtSchedule.string=r.formatStr("%s/%s",0,t.condition[2]),this.btnGet.active=!1,this.btnFinish.active=!1,this.notFinish.active=!0},e}(u);e._RF.pop()}}}));
