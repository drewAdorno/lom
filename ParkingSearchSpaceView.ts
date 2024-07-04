System.register("chunks:///_virtual/ParkingSearchSpaceView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./index57.ts","./MessageView.ts","./ParkingControl.ts","./ParkingDataCache.ts","./ParkingDefine.ts","./ParkingFriendSpaceView.ts","./BaseSubView.ts"],(function(t){"use strict";var e,i,n,s,o,a,r,h,c,l,d,u,f,g,p;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.ScrollView,s=t.Label,o=t.Button,a=t.UITransform},function(t){r=t.ListItem},function(t){h=t.default},null,function(t){c=t.default},function(t){l=t.default},function(t){d=t.ParkingDataCache},function(t){u=t.ParkingEventDefine,f=t.ParkingListName},function(t){g=t.ParkingSpaceItemMaker},function(t){p=t.BaseSubView}],execute:function(){i._RF.push({},"e5a11iOQJJA/6/n6iQTTyAO","ParkingSearchSpaceView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).scrollList=void 0,e.curPage=1,e.uidMap=new Map,e.isEnd=!1,e.isRequesting=!1,e.name="ParkingSearchSpaceView",e.url="ui/module/parking/sub/ParkingSearchSpaceView",e}e(i,t);var s=i.prototype;return s.onInit=function(){var t=this.findChildComponent("scroll",n);this.scrollList=this.addUIList(t,S)},s.registerUpdateHandler=function(){this.addEvent(u.PARKING_SPACE_UPDATE,this.onUpdateSpaceList,this)},s.onAfterOpen=function(){this.trySetParent(),IS(l).reqParkSearch(f.searchSpaceList,"")},s.onBeforeClose=function(){},s.onDestroy=function(){},s.onUpdate=function(t){},s.onUpdateSpaceList=function(){var t=IS(d).null_space,e=IS(d).collect_space;this.scrollList.datas=[t,e]},s.requestNextPage=function(){this.isEnd||this.isRequesting||this.scrollList.getIsShowBottomItem(this.uidMap.size-1)&&(console.log("[PlantBattleLog] request page: ",this.curPage+1),this.isRequesting=!0)},s.trySetParent=function(){var t=uiMgr.getOpenView("ParkingSpaceView");t&&t.nodeSubRoot&&this.node.setParent(t.nodeSubRoot)},i}(p));var S=function(t){function i(){for(var e,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).txtFilter=void 0,e.btnRefresh=void 0,e.btnRefreshMask=void 0,e.txtTime=void 0,e.itemList=void 0,e.nodeNone=void 0,e.utNode=void 0,e.utScroll=void 0,e.utMask=void 0,e.isInCD=!1,e.nodePublic=void 0,e}e(i,t);var r=i.prototype;return r.onInit=function(){var t=this;this.adaptiveSize=!0,this.txtFilter=h.findChildComponent(this.node,"title/txtFilter",s),this.btnRefresh=h.findChildComponent(this.node,"title/btnRefresh",o),this.btnRefreshMask=h.findChild(this.btnRefresh.node,"mask"),this.txtTime=h.findChildComponent(this.btnRefresh.node,"txtTime",s),this.nodeNone=h.findChild(this.node,"none"),this.view.addComponentCallbackListener(this.btnRefresh.node,o.EventType.CLICK,(function(){0!=t.index||t.isInCD?c.showFlyTip(GetLanguage(201239)):(t.isInCD=!0,t.view.addTimer(1,1,(function(){t.isInCD=!1})),IS(l).reqParkSearch(f.searchSpaceList,""))}));var e=h.findChildComponent(this.node,"ScrollView",n);this.itemList=this.view.addUIList(e,g,!1),this.utScroll=e.getComponent(a),this.utMask=h.findChildComponent(this.node,"ScrollView/view",a),this.utNode=this.node.getComponent(a)},r.onRender=function(t,e){this.txtFilter.string=[GetLanguage(300122),GetLanguage(300123)][e],this.btnRefresh.node.active=0==e,0==e&&(t.length=3),this.utNode.height=t.length<=3?436:436+118*(t.length-3),this.utScroll.height=t.length<=3?358:358+118*(t.length-3),this.utMask.height=t.length<=3?358:358+118*(t.length-3),this.itemList.datas=t},i}(r);i._RF.pop()}}}));

