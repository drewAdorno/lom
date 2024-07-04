System.register("chunks:///_virtual/ParkingPublicSpaceView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./MessageView.ts","./RoleDataCache.ts","./ParkingControl.ts","./ParkingDataCache.ts","./ParkingDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var i,e,n,o,a,s,r,d,h,c,l,f,u,v,p,g,C,k,m,S;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.ScrollView,a=t.Label,s=t.UITransform,r=t.Button,d=t.Sprite},function(t){h=t.ListItem},function(t){c=t.default},function(t){l=t.default},function(t){f=t.default},null,function(t){u=t.ConfigGlobal},function(t){v=t.default},function(t){p=t.RoleDataCache},function(t){g=t.default},function(t){C=t.ParkingDataCache},function(t){k=t.ParkingEventDefine,m=t.ParkingListName},function(t){S=t.BaseSubView}],execute:function(){n._RF.push({},"1d4e4xCLlJGSLL4vRlmnE1i","ParkingPublicSpaceView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).scrollList=void 0,i.curPage=1,i.list=[],i.uidMap=new Map,i.isEnd=!1,i.isRequesting=!1,i.name="ParkingPublicSpaceView",i.url="ui/module/parking/sub/ParkingPublicSpaceView",i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this.findChildComponent("scroll",o);this.scrollList=this.addUIList(t,P)},n.registerUpdateHandler=function(){this.addEvent(k.PARKING_SPACE_UPDATE,this.onUpdateLogList,this)},n.onAfterOpen=function(){this.trySetParent(),IS(g).reqParkSearch(m.publicSpaceList,""),IS(C).checkCrossOpen()&&IS(g).reqCrossParkPreview()},n.onBeforeClose=function(){},n.onDestroy=function(){},n.onUpdateLogList=function(t){var i=[];if(IS(C).checkCrossOpen()){var e=IS(C).getCrossSpotInfoByID(IS(p).GetServerId());i.push(e)}var n=IS(C).null_space;i.push(n),this.scrollList.clearData(),this.scrollList.datas=i},n.onGotoOtherParkingSpace=function(t){uiMgr.openView("ParkingMainView",t),this.parentView.close()},n.trySetParent=function(){var t=uiMgr.getOpenView("ParkingSpaceView");t&&t.nodeSubRoot&&this.node.setParent(t.nodeSubRoot)},e}(S));var P=function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtFilter=void 0,i.txtTime=void 0,i.itemList=void 0,i.utNode=void 0,i.utScroll=void 0,i.utMask=void 0,i.isInCD=!1,i.nodeCrossNone=void 0,i}i(e,t);var n=e.prototype;return n.onInit=function(){this.adaptiveSize=!0,this.txtFilter=c.findChildComponent(this.node,"title/txtFilter",a);var t=c.findChildComponent(this.node,"ScrollView",o);this.itemList=this.view.addUIList(t,b,!1),this.utScroll=t.getComponent(s),this.utMask=c.findChildComponent(this.node,"ScrollView/view",s),this.utNode=this.node.getComponent(s),this.nodeCrossNone=c.findChild(this.node,"none")},n.onRender=function(t,i){var e=[GetLanguage(201122)];IS(C).checkCrossOpen()&&e.unshift(GetLanguage(201731)),this.txtFilter.string=e[i],this.utNode.height=0==t.length?286:436+118*(t.length-3),this.utScroll.height=0==t.length?208:358+118*(t.length-3),this.utMask.height=0==t.length?208:358+118*(t.length-3),this.itemList.datas=t,this.nodeCrossNone.active=!1,0==i&&0==t.length&&(this.nodeCrossNone.active=!0)},e}(h),b=t("ParkingPublicItemMaker",function(t){function n(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).nodeFull=void 0,i.txtName=void 0,i.txtNameCross=void 0,i.txtAtkNum=void 0,i.txtDefNum=void 0,i.nodeCD=void 0,i.nodePublic=void 0,i.nodeCross=void 0,i.nodeProtect=void 0,i.buffList=[],i.sel1=void 0,i.sel2=void 0,i.btnParkingSpace=void 0,i.protectTimer=void 0,i}i(n,t);var o=n.prototype;return o.onInit=function(){var t=this;this.nodePublic=c.findChild(this.node,"node1"),this.nodeCross=c.findChild(this.node,"node2"),this.nodeCD=c.findChild(this.node,"node1/nodecd"),this.nodeProtect=c.findChild(this.node,"node2/nodecd"),this.view.addComponentCallbackListener(this.nodeProtect,r.EventType.CLICK,(function(){v.showFlyTip(l.formatStrWithMirrorDeal(GetLanguage(203829),f.formatDate(f.ServerDate(1e3*t.data.info.protect_end),"yyyy-MM-dd hh:mm:ss")))})),this.txtName=c.findChildComponent(this.node,"node1/txtName",a),this.txtAtkNum=c.findChildComponent(this.node,"node2/atkNum",a),this.txtDefNum=c.findChildComponent(this.node,"node2/defNum",a),this.nodeFull=c.findChild(this.node,"imgFrame/nodeFull"),this.txtName=c.findChildComponent(this.node,"node1/txtName",a),this.txtNameCross=c.findChildComponent(this.node,"node2/txtName",a);for(var i=c.findChild(this.node,"nodeBuff"),e=1;e<=3;e++){var n={node:c.findChild(i,"buff"+e),icon:c.findChildComponent(i,"buff"+e+"/icon",d),txtBuff:c.findChildComponent(i,"buff"+e+"/buff/txtBuff",a)};this.view.adjustMirrorNode(n.icon.node,0,!0),this.buffList[e]=n}this.view.adjustMirrorNode(c.findChild(this.node,"imgFrame/imgIcon"),0,!0),this.view.adjustMirrorNode(c.findChild(this.node,"btnParkingSpace/node"),0,!0),this.view.adjustMirrorNode(c.findChild(this.node,"btnParkingSpace/node1"),0,!0),this.btnParkingSpace=c.findChild(this.node,"btnParkingSpace"),this.view.addComponentCallbackListener(this.btnParkingSpace,r.EventType.CLICK,(function(){t.view.parentView.close(),1==t.data.park_type?IS(g).reqParkingInfo(t.data.park_type,t.data.master_id,t.data.ceng):IS(g).reqCrossParkDetail(t.data.info.id)})),this.sel1=c.findChild(this.node,"node2/state/sel1"),this.sel2=c.findChild(this.node,"node2/state/sel2")},o.onRender=function(t,i){var n=this;if(this.checkBuffShow(),1==t.park_type){this.txtName.string=l.formatStrWithMirrorDeal(GetLanguage(201468),t.ceng),this.nodePublic.active=!0,this.nodeCross.active=!1,this.checkCDShow(),0==t.null_num?this.nodeFull.active=!0:this.nodeFull.active=!1,c.findChild(this.btnParkingSpace,"node1").active=!1,c.findChild(this.btnParkingSpace,"node").active=!0;for(var o,a=e(IS(C).getParkingCarList());!(o=a()).done;){var s=o.value,r=IS(C).car_list[s];if(Math.ceil(r.parking_data.pos/10)==t.ceng&&r.parking_data.type==t.park_type){c.findChild(this.btnParkingSpace,"node1").active=!0,c.findChild(this.btnParkingSpace,"node").active=!1;break}}}else{if(!t.info)return;var d=t.info.id%100;this.txtNameCross.string=l.formatStrWithMirrorDeal(GetLanguage(201712),d),this.nodePublic.active=!1,this.nodeCross.active=!0,this.checkProtectShow(),this.protectTimer&&this.view.removeTimer(this.protectTimer),this.protectTimer=this.view.addTimer(1,-1,(function(){n.checkProtectShow()})),this.nodeFull.active=!1,this.txtAtkNum.string=this.data.info.atk_num,this.txtDefNum.string=this.data.info.def_num;for(var h,f=-1,u=0,v=e(t.info.ext);!(h=v()).done;){var p=h.value;1==p.k&&(f=p.v),2==p.k&&(u=p.v)}this.nodeFull.active=0==f,this.sel1.active=1==u,this.sel2.active=2==u,c.findChild(this.btnParkingSpace,"node1").active=!1,c.findChild(this.btnParkingSpace,"node").active=!0;for(var g,k=e(IS(C).getParkingCarList());!(g=k()).done;){var m=g.value,S=IS(C).car_list[m];if(S.parking_data.master_id==t.info.id&&S.parking_data.type==t.park_type){c.findChild(this.btnParkingSpace,"node1").active=!0,c.findChild(this.btnParkingSpace,"node").active=!1;break}}}},o.checkBuffShow=function(){for(var t,i=1==this.data.park_type?u.park_public_buff:u.park_cross_buff,n=e(i);!(t=n()).done;){var o=t.value;"coin"==o[0]?this.buffList[1].txtBuff.string="+"+o[1]/100+"%":"exp"==o[0]?this.buffList[2].txtBuff.string="+"+o[1]/100+"%":"spec"==o[0]&&(this.buffList[3].txtBuff.string="+"+o[1]/100+"%")}},o.checkCDShow=function(){for(var t,i=0,n=e(this.data.ext);!(t=n()).done;){var o=t.value;1==o.k&&(i=o.v)}this.nodeCD.active=i-f.serverTime>0},o.checkProtectShow=function(){var t,i,e,n=null!=(t=null==(i=this.data)||null==(e=i.info)?void 0:e.protect_end)?t:0;this.nodeProtect.active=n-f.serverTime>0,this.nodeProtect.getComponent(a).string=GetLanguage_UI(999000110)+" "+f.getTimeLeft(n-f.serverTime)},n}(h));n._RF.pop()}}}));
