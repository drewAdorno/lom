System.register("chunks:///_virtual/TaskAchievementView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./RedPoint.ts","./RedPointMgr.ts","./BaseView.ts","./TaskDataCache.ts","./AchievementDataCache.ts"],(function(e){"use strict";var t,i,n,s,a,o,c,l,h,d,r;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e.Vec2,s=e.Button,a=e.Label},function(e){o=e.audioMgr},function(e){c=e.RedPointType},function(e){l=e.RedPointMgr},function(e){h=e.BaseView},function(e){d=e.TaskDataCache},function(e){r=e.AchievementDataCache}],execute:function(){i._RF.push({},"2c0c9NQIj5HmpxzfhTfFS3q","TaskAchievementView",void 0);e("default",function(e){function i(){var t;return(t=e.call(this)||this).tabList=[],t.curIndex=void 0,t.panelList=[],t.closeBtn=void 0,t.titleText=void 0,t.titleDes=[200661,200672,205444],t.name="TaskAchievementView",t.url="ui/module/achievement/TaskAchievementView",t}t(i,e);var h=i.prototype;return h.registerUpdateHandler=function(){},h.onInit=function(){var e=this;this.panelList.push(this.addSubView("TaskInfoView",this.findChild("container/TaskNode"))),this.panelList.push(this.addSubView("AchievementView",this.findChild("container/AchievementNode"))),this.panelList.push(this.addSubView("AccomplishmentView",this.findChild("container/accomplishmentNode")));for(var t=function(t){e.findChild("tab/scrollTab/view/content/item"+t);var i={itemGo:e.findChild("tab/scrollTab/view/content/item"+t),normalSelect:e.findChild("tab/scrollTab/view/content/item"+t+"/normal"),select:e.findChild("tab/scrollTab/view/content/item"+t+"/selected")};e.addComponentCallbackListener(i.itemGo,s.EventType.CLICK,(function(){e.RefreshSelectItem(t)})),e.tabList[t]=i},i=0;i<3;i++)t(i);this.addRedPoint("collect_red",this.tabList[1].itemGo,new n(53,35),c.Dot),this.addRedPoint("MainDailyTask",this.tabList[0].itemGo,new n(53,35),c.Dot),this.addRedPoint("accomplishment_red",this.tabList[2].itemGo,new n(53,35),c.Dot);var o=this.findChild("imgMask");this.addComponentCallbackListener(o,s.EventType.CLICK,(function(){e.close()})),this.curIndex=null,this.closeBtn=this.findChild("closeBtn"),this.addComponentCallbackListener(this.closeBtn,s.EventType.CLICK,(function(){e.close()})),this.titleText=this.findChildComponent("container/title/lable",a)},h.onAfterOpen=function(){o.playSound("common_jiemian"),this.curIndex=null;var e=0;IS(d).GetMainDailyTaskRed()?e=0:IS(r).GetHasRed()?e=1:IS(r).GetAccomplishmentRed()&&(e=2),1==this.openArgs[0]&&(e=0),this.RefreshSelectItem(e),IS(l).updateRed("collect_red"),IS(l).changeValue("MainDailyTask",IS(d).GetMainDailyTaskRed()),IS(l).changeValue("accomplishment_red",IS(r).GetAccomplishmentRed())},h.RefreshSelectItem=function(e){if(this.curIndex!=e){this.curIndex=e;for(var t=0;t<this.tabList.length;t++)this.tabList[t].normalSelect.active=e!=t,this.tabList[t].select.active=e==t,this.panelList[t].setActive(e==t);this.titleText.string=GetLanguage(this.titleDes[this.curIndex])}},h.onBeforeClose=function(){},h.onDestroy=function(){},i}(h));i._RF.pop()}}}));

