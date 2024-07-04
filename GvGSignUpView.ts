System.register("chunks:///_virtual/GvGSignUpView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./TimeUtil.ts","./BaseView.ts","./ConfigGlobal.ts","./GuildDataCache.ts","./RoleDataCache.ts","./RoleDefine.ts","./GvGDataCache.ts","./GvGDefine.ts","./GvGModel.ts"],(function(t){"use strict";var n,i,e,o,s,a,d,h,r,c,u,g,f,l,v,C,p,m,S,G;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy,e=t.Button,o=t.Label,s=t.Sprite,a=t.sys,d=t.js,h=t.Color},function(t){r=t.default},function(t){c=t.default},function(t){u=t.BaseView},function(t){g=t.ConfigGlobal},function(t){f=t.default},function(t){l=t.RoleDataCache},function(t){v=t.RoleEventDefine,C=t.PlayerAttr},function(t){p=t.GvGDataCache},function(t){m=t.GvGEventDefine,S=t.GvGStep},function(t){G=t.GvGModel}],execute:function(){i._RF.push({},"e942asxKahGN6kmiqvZIHVc","GvGSignUpView",void 0);var I=g.familybattle_signup_condition;t("default",function(t){function i(){var n;return(n=t.call(this)||this).txtTimeTitle=void 0,n.txtDesc=void 0,n.txtTime=void 0,n.nodeOk=void 0,n.nodeNotOk=void 0,n.nodeConditionDesc=void 0,n.txtCondition=void 0,n.nodeMatching=void 0,n.btnServer=void 0,n.btnSeason=void 0,n.txtSeasonName=void 0,n.imgRanking=void 0,n.txtRanking=void 0,n.time=0,n.name="GvGSignUpView",n.url="ui/module/gvg/GvGSignUpView",n}n(i,t);var u=i.prototype;return u.onInit=function(){var t=this,n=this.findChild("root/content/btnClose");this.addComponentCallbackListener(n,e.EventType.CLICK,(function(){t.close()})),this.txtDesc=this.findChildComponent("root/content/txtDesc",o),this.txtTime=this.findChildComponent("root/content/info/txtTime",o),this.nodeOk=this.findChild("root/content/info/txtConditionOk"),this.nodeNotOk=this.findChild("root/content/info/txtConditionNotOk"),this.nodeConditionDesc=this.findChild("root/content/info/desc/txtConditionDesc"),this.txtCondition=this.findChildComponent("root/content/info/desc/txtCondition",o),this.txtTimeTitle=this.findChildComponent("root/content/info/txtTimeTitle",o),this.nodeMatching=this.findChild("root/content/info/txtMatching");var i=this.findChild("root/content/title/btnTip");this.addComponentCallbackListener(i,e.EventType.CLICK,(function(){uiMgr.openView("GvGRuleTips",[GetLanguage(201643),GetLanguage(2016431),GetLanguage(2016432)])})),this.btnServer=this.findChild("root/content/btnServer"),this.addComponentCallbackListener(this.btnServer,e.EventType.CLICK,(function(){uiMgr.openView("GvGJoinServerListView")})),this.btnSeason=this.findChild("root/content/bottomBtns/btnSeason"),this.addComponentCallbackListener(this.btnSeason,e.EventType.CLICK,(function(){uiMgr.openView("GvGSeasonMainView")})),this.txtSeasonName=this.findChildComponent("root/content/bottomBtns/btnSeason/txtSeason",o);var d=this.findChild("root/content/bottomBtns/btnGroup");this.addComponentCallbackListener(d,e.EventType.CLICK,(function(){uiMgr.openView("GvGGroupView")}));var h=this.findChild("root/content/bottomBtns/btnExchange");this.addComponentCallbackListener(h,e.EventType.CLICK,(function(){uiMgr.openView("GvGStoreView")})),this.imgRanking=d.getComponent(s),this.txtRanking=this.findChildComponent("root/content/bottomBtns/btnGroup/txtSeason",o),a.uiMirror&&this.loadIcon(this.findChildComponent("root/imgBg",s),"gvg","GVG_baoming_bg_bg")},u.registerUpdateHandler=function(){this.addEvent(m.GVG_INFO_UPDATE,this.onGvGInfoUpdate,this),this.addEvent(v.ROLE_INFO_UPDATE,this.updateRoleInfo,this)},u.onAfterOpen=function(){if(IS(p).step==S.SignUp||IS(p).step==S.Matching){IS(p).step==S.SignUp&&IS(p).offSignUpRedPoint();var t=IS(G).getTimeInfoByStep(2),n=IS(G).getTimeInfoByStep(15),i=t?t.start_time:0,e=n?n.end_time:0,o=c.formatDate(new Date(1e3*i),"yyyy/MM/dd hh:mm"),s=c.formatDate(new Date(1e3*e),"yyyy/MM/dd hh:mm");this.txtDesc.string=r.formatStrWithMirrorDeal(GetLanguage(200408),o,s)+c.GetServerTimeZoneStr(),this.btnServer.active=1==IS(p).ifCross,this.updateCondition(),this.updateTime(),this.updateSeasonShow(),this.updateRankingShow()}else this.close()},u.updateSeasonShow=function(){this.btnSeason.active=0!=IS(p).curSeason,0!=IS(p).curSeason&&(this.txtSeasonName.string=r.formatStrWithMirrorDeal(GetLanguage(201559),IS(p).curSeason))},u.updateRankingShow=function(){var t=IS(p).curRanking;if(t<=0)this.loadIcon(this.imgRanking,"icon_gvg","gvg_icon_qingtong"),this.txtRanking.string=GetLanguage(201570);else{var n=configFamiliybrawl_rank.getDataByKey(t);this.loadIcon(this.imgRanking,"icon_gvg",n.rank_picture),this.txtRanking.string=n.rank_name}},u.updateCondition=function(){if(this.txtTimeTitle.string=IS(p).step==S.SignUp?GetLanguage(200409):GetLanguage(200410),IS(p).step==S.Matching)return this.nodeMatching.active=!0,this.txtCondition.node.active=!1,this.nodeConditionDesc.active=!1,this.nodeOk.active=!1,void(this.nodeNotOk.active=!1);this.nodeMatching.active=!1,this.txtCondition.node.active=!0,this.nodeConditionDesc.active=!0;var t=IS(f).GetGuildInfo(),n=t?t.member_num:0,i=n>=I;this.txtCondition.string=d.formatStr("(%s/%s)",n,I),this.txtCondition.color=i?new h(75,168,61):new h(202,24,23),this.nodeOk.active=i,this.nodeNotOk.active=!i},u.onUpdate=function(t){this.time=this.time+t,this.time>=1&&(this.updateTime(),this.time=0)},u.updateTime=function(){var t=IS(G).getCurEndTime(),n=c.serverTime;this.txtTime.string=c.formatTimeForSecond(Math.max(0,t-n))},u.onBeforeClose=function(){this.time=0},u.onDestroy=function(){},u.onGvGInfoUpdate=function(){IS(p).step==S.SignUp||IS(p).step==S.Matching?(this.updateCondition(),this.updateTime()):this.close()},u.updateRoleInfo=function(t){t[C.ROLE_ATTR_GUILD_ID]&&(IS(l).HasGuild()||this.close())},i}(u));i._RF.pop()}}}));

