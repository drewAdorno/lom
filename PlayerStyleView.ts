System.register("chunks:///_virtual/PlayerStyleView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RankTitle.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./EquipModel.ts","./RoleControl.ts","./RoleDataCache.ts","./RoleDefine.ts","./FrameDataCache.ts","./HeadFrameControl.ts","./TitleControl.ts","./TitleDataCache.ts","./TitleDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,s,n,o,h,d,a,c,l,r,u,v,f,I,p,m,g,C,T,y,S,w,L,B,k;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,s=t.Button,n=t.Label,o=t.Sprite,h=t.ScrollView,d=t.UITransform},function(t){a=t.RankTitle,c=t.TitleType},function(t){l=t.SelectedType,r=t.ListItem},function(t){u=t.default},function(t){v=t.default},function(t){f=t.default},null,function(t){I=t.ConfigGlobal},function(t){p=t.EquipModel},function(t){m=t.default},function(t){g=t.RoleDataCache},function(t){C=t.RoleEventDefine,T=t.PlayerAttr},function(t){y=t.FrameDataCache},function(t){S=t.default},function(t){w=t.default},function(t){L=t.TitleDataCache},function(t){B=t.TitleEventDefine},function(t){k=t.BaseView}],execute:function(){e._RF.push({},"17179KQW4xADK2zAxws7KEe","PlayerStyleView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).txtCurName=void 0,i.curIcon=void 0,i.curJobIcon=void 0,i.txtBtn=void 0,i.scroll=void 0,i.imgJob=void 0,i.info1=void 0,i.info2=void 0,i.info3=void 0,i.curType=0,i.curId=0,i.hideList={},i.jobPath=[],i.usedList={},i.skinList={},i.canChange=void 0,i.model=void 0,i.curTitleIcon=void 0,i.titletxtBtn=void 0,i.timesp=void 0,i.timetxt=void 0,i.titleBtn=void 0,i.titleDesc=void 0,i.timesp1=void 0,i.timetxt1=void 0,i.curTitleIcon1=void 0,i.titletxtBtn1=void 0,i.titleBtn1=void 0,i.titleDesc1=void 0,i.curTitleId=1,i.curFrameId=1,i.name="PlayerStyleView",i.url="ui/module/player/PlayerStyleView",i}i(e,t);var d=e.prototype;return d.onInit=function(){var t=this,i=this.findChild("view/btnClose");this.addComponentCallbackListener(i,s.EventType.CLICK,(function(){t.onCloseClick()}));var e=this.findChild("imgMask");this.addComponentCallbackListener(e,s.EventType.CLICK,(function(){t.onCloseClick()})),this.txtBtn=this.findChildComponent("view/info1/btn/Label",n);var d=this.findChild("view/info1/btn");this.addComponentCallbackListener(d,s.EventType.CLICK,(function(){!t.canChange&&2==t.curType&&IS(g).CanUnLockSkin(t.curId)&&IS(m).send_3_35(t.curId),t.canChange&&(0==t.curType?IS(m).send_3_9(t.curId):IS(m).send_3_17(t.curId))})),this.txtCurName=this.findChildComponent("view/info1/curName/Label",n),this.curIcon=this.findChildComponent("view/info1/curIcon",o),this.curJobIcon=this.findChildComponent("view/curJobIcon/jobIcon",o),this.imgJob=this.findChild("view/style/role"),this.info1=this.findChild("view/info1"),this.info2=this.findChild("view/info2"),this.info3=this.findChild("view/info3"),this.timesp=this.findChild("view/info2/timesp"),this.timetxt=this.findChildComponent("view/info2/timesp/timetxt",n),this.curTitleIcon=this.findChild("view/info2/titleicon"),this.titletxtBtn=this.findChildComponent("view/info2/btn/Label",n),this.titleDesc=this.findChildComponent("view/info2/desc",n),this.titleBtn=this.findChild("view/info2/btn"),this.addComponentCallbackListener(this.titleBtn,s.EventType.CLICK,(function(){var i=IS(L).checkHasTitle(t.curTitleId),e=IS(L).curTitleId;i&&(e!=t.curTitleId?IS(w).send_42_2(t.curTitleId):IS(w).send_42_2(0))})),this.timesp1=this.findChild("view/info3/timesp"),this.timetxt1=this.findChildComponent("view/info3/timesp/timetxt",n),this.curTitleIcon1=this.findChild("view/info3/titleicon"),this.titletxtBtn1=this.findChildComponent("view/info3/btn/Label",n),this.titleDesc1=this.findChildComponent("view/info3/desc",n),this.titleBtn1=this.findChild("view/info3/btn"),this.addComponentCallbackListener(this.titleBtn1,s.EventType.CLICK,(function(){var i=IS(y).checkHas(t.curFrameId),e=IS(y).curFrameId;i&&(e!=t.curFrameId?IS(S).send_47_2(t.curFrameId):IS(S).send_47_2(0))}));var a=this.findChildComponent("view/scroll",h);this.scroll=this.addUIList(a,G,!0,0)},d.onCloseClick=function(){this.close()},d.registerUpdateHandler=function(){this.addEvent(C.ROLE_SKIN_LIST,this.UpdateOpen,this),this.addEvent(C.ROLE_INFO_UPDATE,this.Refresh,this),this.addEvent(C.ROLE_SKIN_CHANGE,this.Refresh,this),this.addEvent(B.Title_INFO_UPDATE,this.updateTitleInfo,this),this.addEvent(B.Frame_INFO_UPDATE,this.updateFrameInfo,this)},d.onAfterOpen=function(){IS(m).send_3_16(),IS(w).send_42_1(),IS(S).send_47_1()},d.onBeforeClose=function(){},d.onUpdate=function(t){if(2==this.curType){if(IS(L).checkHasTime(this.curTitleId)){var i=IS(L).getTitleTime(this.curTitleId)-f.serverTime,e=Math.floor(i/3600)%24,s=Math.floor(i/86400);this.timetxt.string=s>0?v.formatStrWithMirrorDeal(GetLanguage(200006),s,e):f.formatTimeForSecond(i)}}else if(3==this.curType){if(IS(y).checkHasTime(this.curFrameId)){var n=IS(y).getFrameTime(this.curFrameId)-f.serverTime,o=Math.floor(n/3600)%24,h=Math.floor(n/86400);this.timetxt1.string=h>0?v.formatStrWithMirrorDeal(GetLanguage(200006),h,o):f.formatTimeForSecond(n)}}},d.onDestroy=function(){},d.setType=function(t,i){void 0===i&&(i=!1),(this.curType!=t||i)&&(this.curType=t,this.curId=IS(g).GetTypeUsedSkin(this.curType)||0,this.scroll.updateAll(),this.updateInfo(),this.updateTypeInfo())},d.SetIndex=function(t){this.curId=t,this.scroll.updateAll(),this.updateInfo()},d.SetTitleIndex=function(t){this.curTitleId=t,this.scroll.updateAll(),this.updateInfo()},d.SetFrameIndex=function(t){this.curFrameId=t,this.scroll.updateAll(),this.updateInfo()},d.updateTypeInfo=function(){2==this.curType?(this.info1.active=!1,this.info2.active=!0,this.info3.active=!1):3==this.curType?(this.info1.active=!1,this.info2.active=!1,this.info3.active=!0):(this.info1.active=!0,this.info2.active=!1,this.info3.active=!1)},d.UpdateOpen=function(){this.curType=0,this.curId=IS(g).GetTypeUsedSkin(this.curType),this.hideList={},this.usedList=IS(g).GetUsedSkinList(),this.skinList=IS(g).GetSkinList(),this.jobPath=[];for(var t=IS(g).GetJob();0!=t;)this.jobPath.push(t),t=configJobs.getDataByKey(t).front_job;this.jobPath.reverse();var i=I.change_styling_tab;this.scroll.datas=i,this.updateInfo(),this.updateTypeInfo()},d.updateInfo=function(){this.UpdateModel();var t=IS(g).GetTypeUsedSkin(this.curType)||0;if(0==this.curType){var i=configJobs.getDataByKey(this.curId);if(null==i)return;var e=i.job_icon.split("#"),s=IS(g).GetRoleAttr(T.ROLE_ATTR_GENDER);1==e.length?this.loadIcon(this.curIcon,"player",i.job_icon):0==s||1==s?this.loadIcon(this.curIcon,"player",e[1]):this.loadIcon(this.curIcon,"player",e[2]),this.txtCurName.string=i.name,t==this.curId?(this.canChange=!1,this.txtBtn.string=GetLanguage(200549)):(this.canChange=!0,this.txtBtn.string=GetLanguage(200550))}else if(1==this.curType){var n=configSkin.getDataByKey(this.curId);null!=n&&(this.txtCurName.string=n.name,this.loadIcon(this.curIcon,"player",n.icon)),t==this.curId?(this.canChange=!1,this.txtBtn.string=GetLanguage(200549)):null!=this.skinList[this.curType]&&this.skinList[this.curType][this.curId]||2==this.curType&&0==this.curId&&t!=this.curId?(this.canChange=!0,this.txtBtn.string=GetLanguage(200550)):(this.canChange=!1,this.txtBtn.string=GetLanguage(200485),2==this.curType&&IS(g).CanUnLockSkin(this.curId)&&(this.txtBtn.string=GetLanguage(200101)))}else if(2==this.curType){new a(this,this.curTitleIcon).SetRankTitle(this.curTitleId,c.NORMAL);var o=IS(L).checkHasTitle(this.curTitleId),h=IS(L).curTitleId,d=IS(L).checkHasTime(this.curTitleId);this.timesp.active=d,o?h==this.curTitleId?(this.titletxtBtn.string=GetLanguage(200552),this.titleBtn.active=!0,this.titleDesc.string=d?"":GetLanguage(200553)):(this.titletxtBtn.string=GetLanguage(200554),this.titleBtn.active=!0,this.titleDesc.string=d?"":GetLanguage(200553)):(this.titletxtBtn.string=GetLanguage(200485),this.titleBtn.active=!1,this.titleDesc.string=cfg.get_way)}else if(3==this.curType){var l=configAvatar_frame.getDataByKey(this.curFrameId);this.loadIcon(this.curTitleIcon1,"icon_frame",l.icon);var r=IS(y).checkHas(this.curFrameId),u=IS(y).curFrameId,v=IS(y).checkHasTime(this.curFrameId);this.timesp1.active=v,r?u==this.curFrameId?(this.titletxtBtn1.string=GetLanguage(200552),this.titleBtn1.active=!0,this.titleDesc1.string=v?"":GetLanguage(200553)):(this.titletxtBtn1.string=GetLanguage(200554),this.titleBtn1.active=!0,this.titleDesc1.string=v?"":GetLanguage(200553)):(this.titletxtBtn1.string=GetLanguage(200485),this.titleBtn1.active=!1,this.titleDesc1.string=l.get_way)}},d.Refresh=function(){this.scroll.updateAll(),this.updateInfo()},d.UpdateModel=function(){var t,i,e;if(null!=this.model&&(this.removeUnitModel(this.model),this.model=null),null!=(t=0==this.curType?configJobs.getDataByKey(this.curId):configJobs.getDataByKey(IS(g).GetTypeUsedSkin(0)))){i=1==this.curType?this.curId:IS(g).GetTypeUsedSkin(1),e=2==this.curType?this.curId:IS(g).GetTypeUsedSkin(2)||0;var s=IS(p).getShowEquipCfgIdByLocation(1),n=IS(p).getShowEquipCfgIdByLocation(2),o=IS(p).getShowEquipCfgIdByLocation(3);this.model=this.addUnitModel({job:t.id,dressId:e,gender:IS(g).GetRoleAttr(T.ROLE_ATTR_GENDER),weapon:s,ornaments:n,face:o,color:i,parent:this.imgJob,shenqi:0},null,.75)}},d.updateTitleInfo=function(){var t=IS(L).curTitleId;1==this.curTitleId&&(this.curTitleId=t),0==this.curTitleId&&(this.curTitleId=1),this.scroll.updateAll(),this.updateInfo()},d.updateFrameInfo=function(){var t=IS(y).curFrameId;1==this.curFrameId&&(this.curFrameId=t),0==this.curFrameId&&(this.curFrameId=1),this.scroll.updateAll(),this.updateInfo()},e}(k));var G=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).txtTitle=void 0,i.arrUp=void 0,i.arrDown=void 0,i.imgBG1=void 0,i.imgBG2=void 0,i.scroll=void 0,i.scrollNode=void 0,i.scrollUT=void 0,i.scroll1=void 0,i.scrollNode1=void 0,i.scrollUT1=void 0,i.scroll2=void 0,i.scrollNode2=void 0,i.scrollUT2=void 0,i.red=void 0,i}i(e,t);var o=e.prototype;return o.onInit=function(){var t=this;this.adaptiveSize=!0,this.txtTitle=u.findChildComponent(this.node,"title/Label",n),this.arrUp=u.findChild(this.node,"title/arrUp"),this.arrDown=u.findChild(this.node,"title/arrDown"),this.imgBG1=u.findChild(this.node,"title/imgBG1"),this.imgBG2=u.findChild(this.node,"title/imgBG2"),this.red=u.findChild(this.node,"title/red");var i=u.findChild(this.node,"title");this.view.addComponentCallbackListener(i,s.EventType.CLICK,(function(){t.arrUp.active?(t.view.hideList[t.data[0]]=!0,t.UpdateSelect()):(t.view.hideList[t.data[0]]=!1,t.view.setType(t.data[0],!0))}));var e=u.findChildComponent(this.node,"scroll",h);this.scroll=this.view.addUIList(e,_,!1,0),this.scroll.selectedMode=l.SINGLE,this.scroll.touchEvent=!1,this.scrollNode=u.findChild(this.node,"scroll"),this.scrollUT=u.findChildComponent(this.node,"scroll",d);var o=u.findChildComponent(this.node,"scroll1",h);this.scroll1=this.view.addUIList(o,b,!1,0),this.scroll1.selectedMode=l.SINGLE,this.scroll1.touchEvent=!1,this.scrollNode1=u.findChild(this.node,"scroll1"),this.scrollUT1=u.findChildComponent(this.node,"scroll1",d);var a=u.findChildComponent(this.node,"scroll2",h);this.scroll2=this.view.addUIList(a,U,!1,0),this.scroll2.selectedMode=l.SINGLE,this.scroll2.touchEvent=!1,this.scrollNode2=u.findChild(this.node,"scroll2"),this.scrollUT2=u.findChildComponent(this.node,"scroll2",d)},o.onRender=function(t,i){var e=this;this.txtTitle.string=t[1];var s=t[0],n=this.view.curType==s&&!this.view.hideList[s];this.arrUp.active=n,this.arrDown.active=!n;var o=.01;if(0==s){var h=this.view.jobPath;if(n){var a=Math.ceil(h.length/4);o=88*a+15*(a-1)+15+15,this.scrollUT.height=o,this.imgBG1.getComponent(d).height=o+52,this.imgBG1.active=!0,this.imgBG2.active=!1}else this.imgBG1.active=!1,this.imgBG2.active=!0;this.scroll.datas=h,this.scrollNode.active=n,this.scrollNode1.active=!1,this.scrollNode2.active=!1,this.red.active=!1}else if(1==s){var c=[].concat(configSkin.getDataByList("type",s));if(c.sort((function(t,i){var n=e.view.skinList[s];if(null!=n){var o=n[t.id];if(o!=n[i.id])return o?-1:1}return t.id-i.id})),n){var l=Math.ceil(c.length/4);o=88*l+15*(l-1)+15+15,this.scrollUT.height=o,this.imgBG1.getComponent(d).height=o+52,this.imgBG1.active=!0,this.imgBG2.active=!1}else this.imgBG1.active=!1,this.imgBG2.active=!0;this.scroll.datas=c,this.scrollNode.active=n,this.scrollNode1.active=!1,this.scrollNode2.active=!1,this.red.active=!1}else if(2==s){var r=configTitle.getDatas();if(n){var u=Math.ceil(r.length/2);o=88*u+15*(u-1)+15+15,this.scrollUT1.height=o,this.imgBG1.getComponent(d).height=o+52,this.imgBG1.active=!0,this.imgBG2.active=!1}else this.imgBG1.active=!1,this.imgBG2.active=!0;this.scroll1.datas=r,this.scrollNode.active=!1,this.scrollNode1.active=n,this.scrollNode2.active=!1,this.red.active=IS(L).CanUnLockTitle()>0}else if(3==s){var v=configAvatar_frame.getDatas();if(n){var f=Math.ceil(v.length/4);o=88*f+15*(f-1)+15+15,this.scrollUT2.height=o,this.imgBG1.getComponent(d).height=o+52,this.imgBG1.active=!0,this.imgBG2.active=!1}else this.imgBG1.active=!1,this.imgBG2.active=!0;this.scroll2.datas=v,this.scrollNode.active=!1,this.scrollNode1.active=!1,this.scrollNode2.active=n,this.red.active=IS(y).CanUnLockFrame()>0}this.ut.height=42+o},o.UpdateSelect=function(){var t=this.view.curType==this.data[0]&&!this.view.hideList[this.data[0]];this.scrollNode.active=t,this.arrUp.active=t,this.arrDown.active=!t;var i=.01;if(t){var e=this.scroll.datas,s=Math.ceil(e.length/4);i=88*s+15*(s-1)+15+15,this.scrollUT.height=i}this.ut.height=42+i},e}(r),_=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).icon=void 0,i.jobIcon=void 0,i.used=void 0,i.select=void 0,i.mask=void 0,i.red=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){this.jobIcon=u.findChildComponent(this.node,"jobIcon/jobIcon",o),this.icon=u.findChildComponent(this.node,"icon",o),this.used=u.findChild(this.node,"used"),this.select=u.findChild(this.node,"select"),this.mask=u.findChild(this.node,"mask"),this.red=u.findChild(this.node,"red")},s.onRender=function(t,i){if("number"==typeof t){var e=configJobs.getDataByKey(t),s=e.job_icon.split("#"),n=IS(g).GetRoleAttr(T.ROLE_ATTR_GENDER);1==s.length?this.view.loadIcon(this.icon,"player",e.job_icon):0==n||1==n?this.view.loadIcon(this.icon,"player",s[1]):this.view.loadIcon(this.icon,"player",s[2]),this.used.active=IS(g).GetRoleAttr(T.ROLE_ATTR_STYLE)==t,this.select.active=0==this.view.curType&&this.view.curId==this.data}else this.view.loadIcon(this.icon,"player",t.icon),this.used.active=this.view.usedList[t.type]==t.id,this.select.active=t.type==this.view.curType&&this.view.curId==t.id;var o=null!=this.view.skinList[this.view.curType]&&null!=this.view.skinList[this.view.curType][t.id];this.mask.active=2==this.view.curType&&!o,this.red.active=2==this.view.curType&&IS(g).CanUnLockSkin(t.id)},s.onItemClick=function(){"number"==typeof this.data?this.view.SetIndex(this.data):this.view.SetIndex(this.data.id)},e}(r),b=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).icon=void 0,i.used=void 0,i.select=void 0,i.mask=void 0,i.timesp=void 0,i.red=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){this.icon=u.findChild(this.node,"icon"),this.used=u.findChild(this.node,"used"),this.select=u.findChild(this.node,"select"),this.mask=u.findChild(this.node,"mask"),this.timesp=u.findChild(this.node,"timesp"),this.red=u.findChild(this.node,"red")},s.onRender=function(t,i){var e=IS(L).curTitleId,s=IS(L).checkHasTitle(this.data.id),n=IS(L).checkHasTime(this.data.id),o=IS(L).checkIsNew(this.data.id);new a(this.view,this.icon).SetRankTitle(this.data.id,c.NORMAL),this.used.active=2==this.view.curType&&e==this.data.id,this.mask.active=!s,this.timesp.active=n,this.red.active=o,this.select.active=2==this.view.curType&&this.view.curTitleId==this.data.id},s.onItemClick=function(){this.view.SetTitleIndex(this.data.id),IS(L).checkIsNew(this.data.id)&&IS(w).send_42_3(this.data.id)},e}(r),U=function(t){function e(){for(var i,e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return(i=t.call.apply(t,[this].concat(s))||this).icon=void 0,i.used=void 0,i.select=void 0,i.mask=void 0,i.timesp=void 0,i.red=void 0,i}i(e,t);var s=e.prototype;return s.onInit=function(){this.icon=u.findChildComponent(this.node,"icon",o),this.used=u.findChild(this.node,"used"),this.select=u.findChild(this.node,"select"),this.mask=u.findChild(this.node,"mask"),this.timesp=u.findChild(this.node,"timesp"),this.red=u.findChild(this.node,"red")},s.onRender=function(t,i){var e=IS(y).curFrameId,s=IS(y).checkHas(this.data.id),n=IS(y).checkHasTime(this.data.id),o=IS(y).checkIsNew(this.data.id);this.view.loadIcon(this.icon,"icon_frame",t.icon),this.used.active=3==this.view.curType&&e==this.data.id,this.mask.active=!s,this.timesp.active=n,this.red.active=o,this.select.active=3==this.view.curType&&this.view.curFrameId==this.data.id},s.onItemClick=function(){this.view.SetFrameIndex(this.data.id),IS(y).checkIsNew(this.data.id)&&IS(S).send_47_3(this.data.id)},e}(r);e._RF.pop()}}}));
