System.register("chunks:///_virtual/JobSelectView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ActivityDefine.ts","./ActivityStrategyControl.ts","./ActivityStrategyDataCache.ts","./MessageView.ts","./EquipModel.ts","./RoleControl.ts","./RoleDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,o,n,s,c,a,l,u,r,h,d,f,b,y,v,p,g,S;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,o=t.Button,n=t.Label,s=t.ScrollView,c=t.Sprite},function(t){a=t.audioMgr},function(t){l=t.SelectedType,u=t.ListItem},function(t){r=t.default},function(t){h=t.default},null,function(t){d=t.ActivityType},function(t){f=t.default},function(t){b=t.default},function(t){y=t.default},function(t){v=t.EquipModel},function(t){p=t.default},function(t){g=t.RoleDataCache},function(t){S=t.BaseView}],execute:function(){e._RF.push({},"f9a02Vtl91NqYwruEQDukHO","JobSelectView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).jobList=void 0,i.jobDesc=void 0,i.curSelectJob=0,i.activityType=void 0,i.name="JobSelectView",i.url="ui/module/role/JobSelectView",i}i(e,t);var c=e.prototype;return c.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.onMaskClick()}));var e=this.findChild("Button");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.onJobClick()})),this.jobDesc=this.findChildComponent("desc",n);var c=this.findChildComponent("ScrollView",s);this.jobList=this.addUIList(c,_),this.jobList.selectedMode=l.SINGLE},c.onMaskClick=function(){this.close()},c.onJobClick=function(){var t=this,i=IS(g).GetJob(),e=IS(v).getShowEquipCfgIdByLocation(1),o=IS(g).GetTypeUsedSkin(1),n=configJobs.getDataByKey(this.curSelectJob),s=this.activityType,c=h.formatStrWithMirrorDeal(GetLanguage(200579),n.name);y.showBoxTip({tip:c,title:GetLanguage(200048),func:function(n){"type_yes"==n&&(t.activityType==d.Strategy?(i=IS(b).job,e=IS(b).getShowEquipCfgIdByLocation(1),IS(f).reqActStrategyTabJob(t.curSelectJob)):IS(p).send_3_6(t.curSelectJob),t.close(),a.playSound("common_evolution"),uiMgr.openView("JobEffectView",i,e,t.curSelectJob,o,s))}})},c.registerUpdateHandler=function(){},c.onAfterOpen=function(){this.activityType=this.openArgs[0];var t=IS(g).GetJob();this.activityType==d.Strategy&&(t=IS(b).job);var i=configJobs.getDataByKey(t).job_change;this.selectJob(i[0],0),this.jobList.datas=i},c.onBeforeClose=function(){this.curSelectJob=0},c.onDestroy=function(){},c.selectJob=function(t,i){this.curSelectJob=t;var e=configJobs.getDataByKey(t).job_desc;this.jobDesc.string=e,this.jobList.updateAll(),1==i?this.jobList.scrollTo(i,null,.3):this.jobList.scrollTo(i)},e}(S));var C={1111:"zj_ui_wuqidizhanshi",1121:"zj_ui_wuqidigongjianshou",1131:"zj_ui_wuqidifashi"},j={1111:"zj_ui_zhanshi",1121:"zj_ui_gongjianshou",1131:"zj_ui_fashi"},_=function(t){function e(){for(var i,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(i=t.call.apply(t,[this].concat(o))||this).jobIcon=void 0,i.jobDesc=void 0,i.quality=void 0,i.selectGo=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){this.jobIcon=r.findChildComponent(this.node,"icon",c),this.quality=r.findChildComponent(this.node,"quality",c),this.jobDesc=r.findChildComponent(this.node,"desc",n),this.selectGo=r.findChild(this.node,"select")},o.onRender=function(t,i){var e,o;this.data=t,this.view.curSelectJob==t?(this.node.setScale(1,1,1),this.selectGo.active=!0):(this.node.setScale(.9,.9,.9),this.selectGo.active=!1);var n=configJobs.getDataByKey(t);this.jobDesc.string=n.arms_desc;var s=null!=(e=C[t])?e:"zj_ui_wuqidizhanshi";this.view.loadIcon(this.quality,"job",s);var c=null!=(o=j[t])?o:"zj_ui_zhanshi";this.view.loadIcon(this.jobIcon,"job",c)},o.onItemClick=function(){this.view.selectJob(this.data,this.index)},e}(u);e._RF.pop()}}}));

