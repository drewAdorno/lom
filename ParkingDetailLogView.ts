System.register("chunks:///_virtual/ParkingDetailLogView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./FriendControl.ts","./RoleDefine.ts","./ParkingControl.ts","./ParkingDataCache.ts","./ParkingDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var i,e,n,o,a,r,s,d,l,c,h,g,f,v,u,m,p,L,w,C;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.ScrollView,a=t.Button,r=t.Sprite,s=t.Label,d=t.UITransform,l=t.Node},function(t){c=t.ListItem},function(t){h=t.default},function(t){g=t.default},function(t){f=t.default},null,function(t){v=t.ConfigGlobal},function(t){u=t.default},function(t){m=t.PlayerAttr},function(t){p=t.default},function(t){L=t.ParkingDataCache},function(t){w=t.ParkingEventDefine},function(t){C=t.BaseSubView}],execute:function(){n._RF.push({},"92eb3lCoRZFLa4klqsytAkw","ParkingDetailLogView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).scrollList=void 0,i.name="ParkingDetailLogView",i.url="ui/module/parking/sub/ParkingDetailLogView",i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this.findChildComponent("scroll",o);this.scrollList=this.addUIList(t,_)},n.registerUpdateHandler=function(){this.addEvent(w.PARKING_LOG_UPDATE,this.onUpdateLogList)},n.onAfterOpen=function(){this.trySetParent(),IS(p).reqParkHistory(),this.onUpdateLogList()},n.onBeforeClose=function(){},n.onDestroy=function(){},n.onUpdateLogList=function(){var t=IS(L).record_list;this.scrollList.datas=t},n.trySetParent=function(){var t=uiMgr.getOpenView("ParkingLogView");t&&t.nodeSubRoot&&this.node.setParent(t.nodeSubRoot)},n.onGotoOtherParkingSpace=function(t){uiMgr.openView("ParkingMainView",t),this.parentView.close()},e}(C));var _=function(t){function n(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).imgIcon=void 0,i.imgHeadFrame=void 0,i.txtName=void 0,i.txtTime=void 0,i.txtLevel=void 0,i.txtDesc=void 0,i.btnParking=void 0,i.btnReward=void 0,i.imgNew=void 0,i.infoList={},i.rewardList=[],i}i(n,t);var o=n.prototype;return o.onInit=function(){var t=this,i=h.findChild(this.node,"imgFrame");this.view.addComponentCallbackListener(i,a.EventType.CLICK,(function(){t.data.master_id&&0==t.data.type&&IS(u).reqOtherRoleNotice(t.data.master_id,1)})),this.imgIcon=h.findChildComponent(this.node,"imgFrame/imgIcon",r),this.imgHeadFrame=h.findChildComponent(this.node,"imgFrame/imgHeadFrame",r),this.txtLevel=h.findChildComponent(this.node,"txt/txtLevel",s),this.txtName=h.findChildComponent(this.node,"txt/txtName",s),this.txtTime=h.findChildComponent(this.node,"txtTime",s),this.txtDesc=h.findChildComponent(this.node,"ScrollView/view/content/txtDesc",s),this.imgNew=h.findChildComponent(this.node,"imgNew",r),this.imgNew.node.active=!1;var e=h.findChild(this.node,"btnParkingSpace");this.view.adjustMirrorNode(h.findChild(this.node,"imgNew"),0,!0),this.view.adjustMirrorNode(h.findChild(this.node,"btnParkingSpace"),0,!0),this.view.addComponentCallbackListener(e,a.EventType.CLICK,(function(){t.view.parentView.close();var i,e=0;1==t.data.type&&(e=Math.ceil(null!=(i=t.data.pos)?i:0/v.park_public_each_num));IS(p).reqParkingInfo(t.data.type,t.data.master_id,e)})),this.btnReward=h.findChild(this.node,"btnReward"),this.view.addComponentCallbackListener(this.btnReward,a.EventType.CLICK,(function(){uiMgr.openView("ParkingRewardInfoView",t.rewardList)}));var n=h.findChild(this.node,"ScrollView/view/content/txtDesc"),o=h.findChildComponent(this.node,"ScrollView/view/content",d);n.on(l.EventType.SIZE_CHANGED,(function(){o.height=n.getComponent(d).height}))},o.onRender=function(t,i){var n=0;this.rewardList=[];for(var o,a=e(t.reward_list);!(o=a()).done;){var r=o.value;201!=r.gtid&&202!=r.gtid&&(this.rewardList[n]=r,n++)}for(var s,d=e(t.info_list.ks);!(s=d()).done;){var l=s.value;this.infoList[l.k]=l.s}for(var c,h=e(t.info_list.kv);!(c=h()).done;){var v=c.value;this.infoList[v.k]=v.v}var u=configParking_log.getDataByKey(t.action_id);if(1==u.type?t.reward_list&&(this.btnReward.active=t.reward_list.length>0):this.btnReward.active=!1,0==t.type){this.txtName.string=""+this.infoList[m.ROLE_ATTR_NAME],this.txtLevel.string="Lv."+this.infoList[m.ROLE_ATTR_LVL],this.view.loadRemoteIcon(this.infoList[m.ROLE_ATTR_HEAD_URL],this.imgIcon);var L=this.infoList[m.ROLE_ATTR_HEAD_FRAME_ID];if(L>0){this.imgHeadFrame.node.active=!0;var w=configAvatar_frame.getDataByKey(L);this.view.loadIcon(this.imgHeadFrame,"icon_frame",w.icon)}else this.imgHeadFrame.node.active=!1}else if(1==t.type)this.txtName.string=GetLanguage(201122),this.txtLevel.string="",this.view.loadIcon(this.imgIcon,"parking","gg_icon_ggcw"),this.imgHeadFrame.node.active=!1;else if(3==t.type){var C=t.master_id%100;this.txtName.string=g.formatStrWithMirrorDeal(GetLanguage(201712),C),this.txtLevel.string="",this.view.loadIcon(this.imgIcon,"parking","gg_icon_ggcw"),this.imgHeadFrame.node.active=!1}this.txtTime.string=f.getDateDiff(t.time),this.txtDesc.string=g.format_p_lang_info(u.desc,t.content,void 0,{leftTimeCallback:function(t){return t/60}}),this.imgNew.node.active=0==t.is_read,0==t.is_read&&IS(p).sendReadList([this.data.new_id])},n}(c);n._RF.pop()}}}));
