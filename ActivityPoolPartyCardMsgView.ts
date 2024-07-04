System.register("chunks:///_virtual/ActivityPoolPartyCardMsgView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ActivityPoolPartyDataCache.ts","./ActivityPoolPartyDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,s,r,o,a,d,c,h,m,l,v,u,f,g,C,p,T,y;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,s=t.Label,r=t.ScrollView,o=t.Sprite,a=t.Vec2},function(t){d=t.ListItem},function(t){c=t.RedPointType},function(t){h=t.RedPointMgr},function(t){m=t.default},function(t){l=t.default},function(t){v=t.default},null,function(t){u=t.default},function(t){f=t.default},function(t){g=t.ActivityEventDefine,C=t.ActivityType},function(t){p=t.default},function(t){T=t.CardItemList},function(t){y=t.BaseView}],execute:function(){i._RF.push({},"55b7c3vTkROHLxwHHgMyyUf","ActivityPoolPartyCardMsgView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).scrollView=void 0,e.curIndex=void 0,e.tabList=void 0,e.msgTip=void 0,e.msgTipTxt={0:GetLanguage_UI(100871),1:GetLanguage_UI(100872)},e.cardItemList=[],e.name="ActivityPoolPartyCardMsgView",e.url="ui/module/activityPoolParty/ActivityPoolPartyCardMsgView",e}e(i,t);var o=i.prototype;return o.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var i=this.findChild("container/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.msgTip=this.findChildComponent("container/bg/txtTitle",s),this.tabList=[];for(var o=function(e){t.findChild("container/select/item"+e);var i={itemGo:t.findChild("container/select/item"+e),select:t.findChild("container/select/item"+e+"/select")};t.addRedPoint("ActivityPoolPartyCardMsgCheck_"+e,i.itemGo,new a(70,20),c.Dot),IS(h).updateRed("ActivityPoolPartyCardMsgCheck_"+e),t.addComponentCallbackListener(i.itemGo,n.EventType.CLICK,(function(){t.RefreshSelectItem(e)})),t.tabList[e]=i},d=0;d<2;d++)o(d);this.scrollView=this.addUIList(this.findChildComponent("container/taskList",r),I)},o.InitCardList=function(){for(var t=0;t<T.length;t++){var e=configGoods.getDataByKey(T[t]);this.findChildComponent("view/card/card"+(t+1)+"/name",s).string=e.name;var i={id:T[t],num:this.findChildComponent("view/card/card"+(t+1)+"/num",s)};this.cardItemList.push(i)}},o.registerUpdateHandler=function(){this.addEvent(g.OnActivityCollectInfo,this.updateInfo,this)},o.RefreshSelectItem=function(t){if(this.curIndex!=t){for(var e=0;e<this.tabList.length;e++)this.tabList[e].select.active=t==e;this.curIndex=t,IS(p).CheckNewMsgRed(this.curIndex),this.msgTip.string=this.msgTipTxt[t],this.scrollView.scrollTo(0,.1),this.updateInfo()}},o.onAfterOpen=function(){var t;this.curIndex=null,this.RefreshSelectItem(null!=(t=this.openArgs[0])?t:0)},o.onBeforeClose=function(){IS(p).CheckNewMsgRed(this.curIndex)},o.onDestroy=function(){},o.updateInfo=function(){var t=IS(f).getCollectInfo(C.PoolPartyPuzzle),e=0==this.curIndex?t.recv_list:t.send_list;e.sort((function(t,e){return t.status,e.status,t.start_time,e.start_time,t.start_time,e.start_time,t.id,e.id,t.id,e.id,t>e?-1:1})),this.scrollView.datas=e},o.updateTask=function(){},i}(y));var I=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).name=void 0,e.time=void 0,e.des=void 0,e.failed=void 0,e.received=void 0,e.btnGet=void 0,e.imgHeadFrame=void 0,e.headImg=void 0,e.specHead=void 0,e.timeCount=void 0,e.receviveTime=void 0,e.desPre=void 0,e.timer=void 0,e}e(i,t);var r=i.prototype;return r.onInit=function(){var t=this;this.name=m.findChildComponent(this.node,"name",s),this.time=m.findChildComponent(this.node,"time",s),this.desPre=m.findChildComponent(this.node,"des",s),this.des=m.findChildComponent(this.node,"num",s),this.received=m.findChild(this.node,"received"),this.btnGet=m.findChild(this.node,"btnGet"),this.view.addComponentCallbackListener(this.btnGet,n.EventType.CLICK,(function(){IS(u).send_collect_recv(C.PoolPartyPuzzle,t.data.id)})),this.imgHeadFrame=m.findChildComponent(this.node,"head/imgHeadFrame",o),this.specHead=m.findChild(this.node,"head/gmChat"),this.headImg=m.findChildComponent(this.node,"head/image",o),this.timeCount=m.findChildComponent(this.node,"timeCount",s),this.receviveTime=m.findChildComponent(this.node,"receviveTime",s)},r.onRender=function(t,e){var i=this;if(t.role_id>0){this.name.string=t.name,this.specHead.active=!1,this.view.loadRemoteIcon(t.head.url,this.headImg),this.headImg.node.active=!0;var n=t.head.frame_id;if(n>0){this.imgHeadFrame.node.active=!0;var s=configAvatar_frame.getDataByKey(n);this.view.loadIcon(this.imgHeadFrame,"icon_frame",s.icon)}else this.imgHeadFrame.node.active=!1}else this.name.string="",this.specHead.active=!0,this.imgHeadFrame.node.active=!1,this.headImg.node.active=!1;var r=this.view.curIndex,o=new Date(1e3*t.start_time);this.time.string=l.formatStrWithMirrorDeal(GetLanguage(700030181),o.getFullYear(),o.getMonth()+1,o.getDate(),o.getHours(),o.getMinutes(),o.getSeconds());var a=configGoods.getDataByKey(t.card_id);this.des.string=l.formatStrWithMirrorDeal(GetLanguage(700030182),a.name),this.timer&&(this.view.removeTimer(this.timer),this.timer=null),0==r?(this.receviveTime.string="",this.desPre.string=GetLanguage(200782),this.received.active=1==t.status,this.btnGet.active=0==t.status,t.end_time-v.serverTime>0&&0==t.status?(this.timeCount.string=v.formatTimeStringForSecond(t.end_time-v.serverTime),this.timer=this.view.addTimer(1,t.end_time-v.serverTime,(function(){t.end_time-v.serverTime>0?i.timeCount.string=v.formatTimeStringForSecond(t.end_time-v.serverTime):(i.timeCount.string="",i.view.removeTimer(i.timer),i.timer=null)}))):(this.btnGet.active=!1,0==t.status||2==t.status?this.receviveTime.string=GetLanguage(200781):this.receviveTime.string="",this.timeCount.string="")):(this.timeCount.string="",0==t.role_id?this.desPre.string=GetLanguage(205476):this.desPre.string=GetLanguage(200783),this.received.active=1==t.status,this.btnGet.active=!1,t.end_time-v.serverTime>0&&0==t.status?(this.receviveTime.string=l.formatStrWithMirrorDeal(GetLanguage(200785),v.formatTimeStringForSecond(t.end_time-v.serverTime)),this.timer=this.view.addTimer(1,t.end_time-v.serverTime,(function(){t.end_time-v.serverTime>0?i.receviveTime.string=l.formatStrWithMirrorDeal(GetLanguage(200785),v.formatTimeStringForSecond(t.end_time-v.serverTime)):(i.receviveTime.string=GetLanguage(200786),i.view.removeTimer(i.timer),i.timer=null)}))):0==t.status||2==t.status?this.receviveTime.string=GetLanguage(200786):this.receviveTime.string="")},r.destroy=function(){this.timer&&(this.view.removeTimer(this.timer),this.timer=null)},r.cacheReset=function(){this.timer&&(this.view.removeTimer(this.timer),this.timer=null),t.prototype.cacheReset.call(this)},i}(d);i._RF.pop()}}}));
