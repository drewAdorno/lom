System.register("chunks:///_virtual/RobCasePvpView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./UIList.ts","./NodeUtil.ts","./TimeUtil.ts","./index57.ts","./AdDefine.ts","./AdModel.ts","./CommonModel.ts","./MessageView.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./RobCaseDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,o,a,d,h,r,c,l,v,f,m,p,u,C,g,w,T,b,I,y,R;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Label,s=t.Button,o=t.Sprite,a=t.ScrollView,d=t.js},function(t){h=t.ItemGrid},function(t){r=t.ListItem},function(t){c=t.default},function(t){l=t.default},null,function(t){v=t.ADS_TYPE,f=t.AdEventDefine},function(t){m=t.AdModel},function(t){p=t.CommonModel},function(t){u=t.default},function(t){C=t.default},function(t){g=t.default},function(t){w=t.ActivityType,T=t.ActivityEventDefine,b=t.ActivityState},function(t){I=t.default},function(t){y=t.ViewEvent,R=t.BaseView}],execute:function(){e._RF.push({},"2e252g8aMZFupjV9o0VYHOn","RobCasePvpView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).btnAd=void 0,i.btnBattle=void 0,i.btnGet=void 0,i.nodeTips=void 0,i.txtTips=void 0,i.nodeFinish=void 0,i.nodeRole=void 0,i.nodeInfo=void 0,i.nodeReward=void 0,i.imgIcon=void 0,i.imgHeadFrame=void 0,i.imgEmpty=void 0,i.txtIdentity=void 0,i.txtName=void 0,i.model=void 0,i.isFirstOpen=void 0,i.timer=void 0,i.rewardList=void 0,i.txtLeftTime=void 0,i.leftTime=0,i.deltaTime=0,i.canUpdate=!1,i.name="RobCasePvpView",i.url="ui/module/robcase/RobCasePvpView",i}i(e,t);var h=e.prototype;return h.onInit=function(){var t=this;this.txtLeftTime=this.findChildComponent("view/nodeTime/txtTime",n);var i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,s.EventType.CLICK,(function(){t.close()}));var e=this.findChild("view/btnAttr");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){uiMgr.openView("RobCasePvpAttrView")})),this.btnAd=this.findChild("view/btnAd"),this.addComponentCallbackListener(this.btnAd,s.EventType.CLICK,(function(){u.showBoxTip({tip:GetLanguage(201237),func:function(t){"type_yes"==t&&IS(m).tryWatchAd(v.AD_REWARD_GOLD_TRACKING)}})})),this.btnBattle=this.findChild("view/btnBattle"),this.addComponentCallbackListener(this.btnBattle,s.EventType.CLICK,(function(){IS(C).send_24_68(w.RobCasePvp),battleMain.enterChapter(0),t.close(),uiMgr.close("RobCaseView")})),this.btnGet=this.findChild("view/btnGet"),this.addComponentCallbackListener(this.btnGet,s.EventType.CLICK,(function(){IS(C).send_24_70(w.RobCasePvp)})),this.nodeFinish=this.findChild("view/finish"),this.nodeRole=this.findChild("view/role"),this.nodeTips=this.findChild("view/tips"),this.txtTips=this.findChildComponent("view/tips/Label",n),this.nodeInfo=this.findChild("view/info"),this.imgIcon=this.findChildComponent("view/info/head/imgIcon",o),this.imgHeadFrame=this.findChildComponent("view/info/head/imgHeadFrame",o),this.imgEmpty=this.findChildComponent("view/info/imgEmpty",o),this.txtIdentity=this.findChildComponent("view/info/txtIdentity",n),this.txtName=this.findChildComponent("view/info/name",n),this.nodeReward=this.findChild("view/info/nodeReward");var d=this.findChildComponent("view/info/nodeReward/ScrollView",a);this.rewardList=this.addUIList(d,_)},h.registerUpdateHandler=function(){this.addEvent(T.OnRobCasePvpInfo,this.updateInfo,this),this.addEvent(T.OnRobCasePvpCandy,this.updateCandyCallBack,this),this.addEvent(y.ViewClose,this.onViewClose,this),this.addEvent(f.AD_INFO_UPDATE,this.updateAd,this)},h.onAfterOpen=function(){var t=IS(I).pvpResult;t?(1==t.result?uiMgr.openView("GoodsGetView",t.reward):0==t.result&&u.showFlyTip(GetLanguage(200500)),IS(I).pvpResult=null,this.updateInfo()):(this.isFirstOpen=!0,this.nodeTips.active=!1,IS(C).send_24_67(w.RobCasePvp)),this.updateAd();var i=IS(g).GetActivityInfo(w.RobCasePvp);if(i){var e,n=null!=(e=i.state_time[i.state])?e:i.state_time[b.Open];this.leftTime=(n.end_time-l.serverTime)%86400,this.leftTime>0?(this.canUpdate=!0,this.txtLeftTime.string=d.formatStr("%s",l.formatTimeForSecond(this.leftTime))):this.txtLeftTime.string=GetLanguage(200026)}},h.onBeforeClose=function(){this.nodeTips.active=!1,this.removeUnitModel(this.model),this.removeTimer(this.timer)},h.onDestroy=function(){},h.onUpdate=function(t){this.canUpdate&&(this.deltaTime=this.deltaTime+t,this.deltaTime>=1&&(this.deltaTime=0,this.leftTime=this.leftTime-1,this.leftTime>0?this.txtLeftTime.string=d.formatStr("%s",l.formatTimeStringForSecond(this.leftTime)):(this.txtLeftTime.string=GetLanguage(200026),this.canUpdate=!1)))},h.updateInfo=function(){var t=IS(I).getPvpInfo();this.isFirstOpen&&t.choose_buff.length>0&&uiMgr.openView("RobCasePvpTipsView"),this.isFirstOpen=!1;var i=configTrick_or_treat_chapter.getDataByList("type",w.RobCasePvp);if(this.removeUnitModel(this.model),t.def_data&&t.chapter<6){this.nodeFinish.active=!1,this.nodeRole.active=!0,this.nodeInfo.active=!0,this.imgEmpty.node.active=1==t.can_candy,this.btnBattle.active=0==t.can_candy,this.btnGet.active=1==t.can_candy,this.nodeReward.active=0==t.can_candy,this.txtIdentity.string=i[t.chapter-1].name,this.txtName.string=t.def_data.name,this.loadRemoteIcon(t.def_data.head.url,this.imgIcon);var e=t.def_data.head.frame_id;if(e>0){var n=configAvatar_frame.getDataByKey(e);this.loadIcon(this.imgHeadFrame,"icon_frame",n.icon),this.imgHeadFrame.node.active=!0}else this.imgHeadFrame.node.active=!1;this.rewardList.datas=i[t.chapter-1].reward,this.model=IS(p).AddRoleModel(this,t.def_data.figure,this.nodeRole,null,2)}else this.nodeFinish.active=!0,this.nodeRole.active=!1,this.nodeInfo.active=!1,this.nodeTips.active=!1,this.btnBattle.active=!1,this.btnGet.active=!1},h.updateCandyCallBack=function(t){var i=this;this.nodeTips.active=!0,this.timer&&(this.removeTimer(this.timer),this.timer=null),0==t.can_candy?(this.btnBattle.active=!0,this.btnGet.active=!1,this.nodeReward.active=!0,this.imgEmpty.node.active=!1,this.txtTips.string=GetLanguage(204857),this.timer=this.addTimer(2,0,(function(){i.nodeTips.active=!1}))):(this.btnBattle.active=!1,this.btnGet.active=!0,this.nodeReward.active=!1,this.imgEmpty.node.active=!0,this.txtTips.string=GetLanguage(204856),uiMgr.openView("GoodsGetView",t.reward),this.timer=this.addTimer(2,0,(function(){i.nodeTips.active=!1})))},h.onViewClose=function(t){IS(I).getPvpInfo().choose_buff.length>0&&"GoodsGetView"==t&&uiMgr.openView("RobCasePvpTipsView")},h.updateAd=function(){var t=configAds.getDataByKey(v.AD_REWARD_GOLD_TRACKING),i=IS(m).getAdWatchCount(v.AD_REWARD_GOLD_TRACKING);this.btnAd.active=i<t.times},e}(R));var _=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return(i=t.call.apply(t,[this].concat(n))||this).itemGridNode=void 0,i.itemGrid=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.itemGridNode=c.findChild(this.node,"itemGrid"),this.itemGrid=new h(this.view,this.itemGridNode)},n.onRender=function(t,i){this.itemGrid.SetItemId(t[0],t[1])},e}(r);e._RF.pop()}}}));
