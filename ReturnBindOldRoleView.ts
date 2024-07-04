System.register("chunks:///_virtual/ReturnBindOldRoleView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./MessageView.ts","./FriendControl.ts","./RoleDefine.ts","./ReturnControl.ts","./ReturnDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,a,d,r,l,h,c,f,m,u,v,C;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.Button,s=t.ScrollView,a=t.Label,d=t.Sprite},function(t){r=t.ListItem},function(t){l=t.default},function(t){h=t.default},null,function(t){c=t.default},function(t){f=t.default},function(t){m=t.PlayerAttr},function(t){u=t.default},function(t){v=t.ReturnEventDefine},function(t){C=t.BaseView}],execute:function(){n._RF.push({},"058adpntSNDEZiYS4svCUeN","ReturnBindOldRoleView",void 0);t("ReturnBindOldRoleView",function(t){function e(){var i;return(i=t.call(this)||this).itemList=void 0,i.curWaitFarmInfoRoleId=void 0,i.empty=void 0,i.bindRole=void 0,i.cancel=void 0,i.confirm=void 0,i.name="ReturnBindOldRoleView",i.url="ui/module/return/ReturnBindOldRoleView",i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.close()})),this.cancel=this.findChild("btnContent/cancel"),this.addComponentCallbackListener(this.cancel,o.EventType.CLICK,(function(){t.close()})),this.confirm=this.findChild("btnContent/confirm"),this.addComponentCallbackListener(this.confirm,o.EventType.CLICK,(function(){t.bindRole&&c.showBoxTip({tip:h.formatStrWithMirrorDeal(GetLanguage(204746),t.bindRole.name),title:GetLanguage(200048),func:function(i){"type_yes"==i&&IS(u).send_return_bind_old_c2s(t.bindRole.role_id)}})}));var e=this.findChildComponent("content/ScrollView",s);this.empty=this.findChild("content/empty"),this.itemList=this.addUIList(e,p),this.findChildComponent("bindTips",a).string=GetLanguage(104399)},n.registerUpdateHandler=function(){this.addEvent(v.UpdatCanBindOld,this.UpdateList),this.addEvent(v.BandOldRoleSuccess,this.close)},n.onAfterOpen=function(){this.bindRole=null,IS(u).send_return_can_bind_old_c2s(),this.itemList.clearData(),this.empty.active=!0,this.confirm.active=!1},n.UpdateList=function(t){this.itemList.clearData(),t.old_list.length>0?(this.itemList.datas=t.old_list,this.empty.active=!1,this.confirm.active=!0):(this.itemList.datas=[],this.empty.active=!0,this.confirm.active=!1)},n.onBeforeClose=function(){},n.onDestroy=function(){},e}(C));var p=function(t){function n(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).btnRoleInfo=void 0,i.imgIcon=void 0,i.imgHeadFrame=void 0,i.txtServer=void 0,i.txtName=void 0,i.txtMoney=void 0,i.chargeNum=void 0,i.isBind=void 0,i.mySelected=void 0,i.mask=void 0,i.roleInfo={},i.isBindState=0,i}i(n,t);var s=n.prototype;return s.onInit=function(){var t=this;this.view.addComponentCallbackListener(this.node,o.EventType.CLICK,(function(){1!=t.isBindState&&t.view.bindRole!=t.data.role_id&&(t.view.bindRole={role_id:t.data.role_id,name:t.roleInfo[m.ROLE_ATTR_NAME]},t.list.updateAll())})),this.btnRoleInfo=l.findChild(this.node,"imgFrame"),this.view.addComponentCallbackListener(this.btnRoleInfo,o.EventType.CLICK,(function(){t.data.role_id&&IS(f).reqOtherRoleNotice(t.data.role_id,1)})),this.chargeNum=l.findChild(this.node,"chargeNum"),this.isBind=l.findChild(this.node,"isBind"),this.mask=l.findChild(this.node,"mask"),this.txtMoney=l.findChildComponent(this.node,"chargeNum/totalMoney",a),this.imgIcon=l.findChildComponent(this.node,"imgFrame/imgIcon",d),this.imgHeadFrame=l.findChildComponent(this.node,"imgFrame/imgHeadFrame",d),this.txtServer=l.findChildComponent(this.node,"serverName",a),this.txtName=l.findChildComponent(this.node,"txtName",a),this.mySelected=l.findChild(this.node,"select")},s.onRender=function(t,i){var n=t.info_list.kv,o=t.info_list.ks;if(null!=n)for(var s,a=e(n);!(s=a()).done;){var d=s.value;this.roleInfo[d.k]=d.v}if(null!=o)for(var r,l=e(o);!(r=l()).done;){var c=r.value;this.roleInfo[c.k]=c.s}var f=t.ext_list,u=0;if(this.isBindState=0,null!=f)for(var v,C=e(f);!(v=C()).done;){var p=v.value;1==p.k?u=p.v:2==p.k&&(this.isBindState=p.v)}this.mySelected.active=this.view.bindRole&&this.view.bindRole.role_id==t.role_id,1==this.isBindState?(this.chargeNum.active=!1,this.isBind.active=!0,this.mask.active=!0):(this.mask.active=!1,this.chargeNum.active=!0,this.isBind.active=!1,this.txtMoney.string=(u/100).toString()),this.view.loadRemoteIcon(this.roleInfo[m.ROLE_ATTR_HEAD_URL],this.imgIcon),this.txtServer.string=h.formatStrWithMirrorDeal(GetLanguage(302046),h.GetServNameById(this.roleInfo[m.ROLE_ATTR_SERVER])),this.txtName.string=this.roleInfo[m.ROLE_ATTR_NAME];var R=this.roleInfo[m.ROLE_ATTR_HEAD_FRAME_ID];if(R>0){var g=configAvatar_frame.getDataByKey(R);this.view.loadIcon(this.imgHeadFrame,"icon_frame",g.icon),this.imgHeadFrame.node.active=!0}else this.imgHeadFrame.node.active=!1},n}(r);n._RF.pop()}}}));
