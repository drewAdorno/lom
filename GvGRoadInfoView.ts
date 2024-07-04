System.register("chunks:///_virtual/GvGRoadInfoView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./BaseView.ts","./ObjectUtil.ts","./MessageView.ts","./GuildDataCache.ts","./GuildDefine.ts","./GvGControl.ts","./GvGDataCache.ts","./GvGDefine.ts"],(function(t){"use strict";var e,i,n,o,d,s,r,a,h,c,l,v,f,u,C,g,m,I,L,p,G,w,R;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.Label,d=t.UITransform,s=t.ScrollView,r=t.Sprite,a=t.js},function(t){h=t.SelectedType,c=t.ListItem},function(t){l=t.default},function(t){v=t.default},function(t){f=t.BaseView},function(t){u=t.default},function(t){C=t.default,g=t.TYPE_YES,m=t.TYPE_CANCEL},function(t){I=t.default},function(t){L=t.PermissionType},function(t){p=t.default},function(t){G=t.GvGDataCache},function(t){w=t.GvGEventDefine,R=t.GvGStep}],execute:function(){i._RF.push({},"27aedXSMQdPz4GOeBdHWRMs","GvGRoadInfoView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtTitle=void 0,e.nodeDesc1=void 0,e.nodeDesc2=void 0,e.utBg=void 0,e.utScroll=void 0,e.utView=void 0,e.nodeLock=void 0,e.nodeBtnJoin=void 0,e.nodeBtnSave=void 0,e.nodeBtnJoinRed=void 0,e.nodeBtnExchange=void 0,e.nodeBtnAdjust=void 0,e.itemList=void 0,e.road=void 0,e.needRemind=!1,e.dataLength=void 0,e.canAdjust=!1,e.roleIdToNewOrder={},e.dataList=void 0,e.oriPlayerList=void 0,e.name="GvGRoadInfoView",e.url="ui/module/gvg/GvGRoadInfoView",e}e(i,t);var r=i.prototype;return r.onInit=function(){var t=this,e=this.findChild("root/imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.onMaskClick()}));var i=this.findChild("root/content/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.onMaskClick()})),this.txtTitle=this.findChildComponent("root/content/title/txtTitle",o),this.nodeDesc1=this.findChild("root/content/txtDesc1"),this.nodeDesc2=this.findChild("root/content/txtDesc2"),this.utBg=this.findChildComponent("root/content/imgBg-001",d),this.utScroll=this.findChildComponent("root/content/ScrollView",d),this.utView=this.findChildComponent("root/content/ScrollView/view",d),this.nodeBtnJoin=this.findChild("root/content/btnJoin"),this.addComponentCallbackListener(this.nodeBtnJoin,n.EventType.CLICK,(function(){IS(p).reqGvGSelectRoad(t.road)})),this.nodeBtnJoinRed=this.findChild("root/content/btnJoin/RedPoint"),this.nodeLock=this.findChild("root/content/lock"),this.nodeBtnSave=this.findChild("root/content/btnSave"),this.addComponentCallbackListener(this.nodeBtnSave,n.EventType.CLICK,(function(){t.trySaveRoad()})),this.nodeBtnExchange=this.findChild("root/content/btnExchange"),this.addComponentCallbackListener(this.nodeBtnExchange,n.EventType.CLICK,(function(){t.needRemind?C.showFlyTip(GetLanguage(201563)):uiMgr.openView("GvGRoadExchangeView",t.road)})),this.nodeBtnAdjust=this.findChild("root/content/btnAdjust"),this.addComponentCallbackListener(this.nodeBtnAdjust,n.EventType.CLICK,(function(){t.needRemind?C.showFlyTip(GetLanguage(201563)):uiMgr.openView("GvGSingleAdjustView",t.road)}));var r=this.findChildComponent("root/content/ScrollView",s);this.itemList=this.addUIList(r,B),this.itemList.selectedMode=h.SINGLE},r.registerUpdateHandler=function(){this.addEvent(w.GVG_INFO_UPDATE,this.refreshInfo,this),this.addEvent(w.GVG_ROAD_INFO_UPDATE,this.onGvGRoadInfoUpdate,this),this.addEvent(w.GVG_ROAD_INFO_BACK,this.onGvGRoadInfoBack,this)},r.onMaskClick=function(){var t=this;this.needRemind?C.showBoxTip({tip:GetLanguage(200406),func:function(e){e==g?(t.trySaveRoad(),t.close()):e==m&&t.close()}}):this.close()},r.trySaveRoad=function(){if(this.needRemind){for(var t=[],e={},i=0;i<this.dataList.length;i++)e[this.dataList[i].role_id]=this.dataList[i].order;for(var n in this.roleIdToNewOrder)this.roleIdToNewOrder[n]!=e[Number(n)]&&t.push({k:Number(n),v:this.roleIdToNewOrder[n]});if(t.length<=0)return this.needRemind=!1,void(this.roleIdToNewOrder={});IS(p).reqGvGRoadChange(this.road,t)}},r.onAfterOpen=function(){this.road=this.openArgs[0];var t="";switch(this.road){case 1:t=GetLanguage(200387);break;case 2:t=GetLanguage(200388);break;case 3:t=GetLanguage(200389)}this.txtTitle.string=t,IS(p).reqGvGRoadInfo(1,this.road),this.refreshInfo(),this.canAdjust&&IS(p).reqGvGCancelRedPoint(1)},r.refreshInfo=function(){var t=IS(G).step;if(t>R.Waiting)this.close();else{this.nodeBtnJoin.active=t==R.Ready&&IS(G).myRoad!=this.road,this.nodeLock.active=t==R.Ready&&IS(G).myRoad==this.road,this.nodeBtnJoinRed.active=IS(G).getSelectRoadRedPoint()>0;IS(I).GetGuildInfo().leader_id;var e=IS(I).CheckPermissioByType(L.EditGvg);this.canAdjust=t==R.Adjust&&e,this.nodeDesc1.active=!this.canAdjust,this.nodeDesc2.active=this.canAdjust,this.nodeBtnSave.active=this.canAdjust,this.nodeBtnExchange.active=this.canAdjust,this.nodeBtnAdjust.active=this.canAdjust;var i=t==R.Waiting||t==R.Adjust&&!e;this.utBg.height=i?737.898:664,this.utScroll.height=i?702.369:628.471,this.utView.height=i?702.369:628.471,this.refreshList()}},r.refreshList=function(){var t=this;null!=this.oriPlayerList&&(this.dataList=u.clone(this.oriPlayerList),this.dataList.sort((function(e,i){var n=e.role_id,o=i.role_id;return(t.roleIdToNewOrder[n]||e.order)<(t.roleIdToNewOrder[o]||i.order)?-1:1})),this.itemList.datas=this.dataList,this.dataLength=this.dataList.length)},r.changeRoleOrder=function(t,e,i){this.needRemind=!0;for(var n,o=e+i,d=0;d<this.dataList.length;d++){if((this.roleIdToNewOrder[this.dataList[d].role_id]||this.dataList[d].order)==o){n=this.dataList[d].role_id;break}}this.roleIdToNewOrder[t]=o,n&&(this.roleIdToNewOrder[n]=e),this.refreshList()},r.onBeforeClose=function(){this.oriPlayerList=null,this.needRemind=!1,this.roleIdToNewOrder={}},r.onDestroy=function(){},r.onGvGRoadInfoUpdate=function(t,e,i){t==this.road&&(e&&(this.oriPlayerList=i||[],this.needRemind=!1,this.roleIdToNewOrder={}),this.refreshInfo())},r.onGvGRoadInfoBack=function(t,e,i){1==t&&e==this.road&&(this.oriPlayerList=i||[],this.needRemind=!1,this.roleIdToNewOrder={},this.refreshList())},i}(f));var B=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtIndex=void 0,e.txtName=void 0,e.imgHead=void 0,e.imgHeadFrame=void 0,e.txtFightPower=void 0,e.nodeBtnUp=void 0,e.nodeBtnDown=void 0,e.roleId=void 0,e.order=void 0,e}e(i,t);var d=i.prototype;return d.onInit=function(){var t=this;this.txtIndex=l.findChildComponent(this.node,"txtIndex",o),this.txtName=l.findChildComponent(this.node,"txtName",o),this.imgHead=l.findChildComponent(this.node,"head",r),this.imgHeadFrame=l.findChildComponent(this.node,"imgHeadFrame",r),this.txtFightPower=l.findChildComponent(this.node,"txtFightPower",o),this.nodeBtnUp=l.findChild(this.node,"btnUp"),this.nodeBtnDown=l.findChild(this.node,"btnDown"),this.view.addComponentCallbackListener(this.nodeBtnUp,n.EventType.CLICK,(function(){t.view.changeRoleOrder(t.roleId,t.order,-1)})),this.view.addComponentCallbackListener(this.nodeBtnDown,n.EventType.CLICK,(function(){t.view.changeRoleOrder(t.roleId,t.order,1)}))},d.onRender=function(t,e){this.roleId=t.role_id;var i=this.view;this.order=i.roleIdToNewOrder[t.role_id]||t.order,this.txtIndex.string=String(this.order),this.txtName.string=t.name,this.txtFightPower.string=a.formatStr("%s%s",GetLanguage_UI(999000196),v.GetNumString(t.power)),this.view.loadRemoteIcon(t.head.url,this.imgHead);var n=t.head.frame_id;if(n>0){this.imgHeadFrame.node.active=!0;var o=configAvatar_frame.getDataByKey(n);this.view.loadIcon(this.imgHeadFrame,"icon_frame",o.icon)}else this.imgHeadFrame.node.active=!1;this.nodeBtnUp.active=i.canAdjust&&this.order>1,this.nodeBtnDown.active=i.canAdjust&&this.order<i.dataLength},i}(c);i._RF.pop()}}}));

