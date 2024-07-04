System.register("chunks:///_virtual/GvGSingleAdjustView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./BaseView.ts","./ObjectUtil.ts","./MessageView.ts","./GvGControl.ts","./GvGDataCache.ts","./GvGDefine.ts","./GvGModel.ts"],(function(t){"use strict";var e,i,o,n,d,s,a,r,h,l,u,f,c,v,g,m,I,R,C,p,G;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,o=t.Button,n=t.Label,d=t.ScrollView,s=t.Sprite,a=t.js},function(t){r=t.SelectedType,h=t.ListItem},function(t){l=t.default},function(t){u=t.default},function(t){f=t.BaseView},function(t){c=t.default},function(t){v=t.default,g=t.TYPE_YES,m=t.TYPE_CANCEL},function(t){I=t.default},function(t){R=t.GvGDataCache},function(t){C=t.GvGEventDefine,p=t.GvGStep},function(t){G=t.GvGModel}],execute:function(){i._RF.push({},"64f07bouoVOzoa+t13NBwM6","GvGSingleAdjustView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtTitle=void 0,e.nodeBtnSave=void 0,e.itemList=void 0,e.road=void 0,e.needRemind=!1,e.dataLength=void 0,e.roleIdToNewRoad={},e.dataList=void 0,e.oriPlayerList=void 0,e.curSelectIndex=void 0,e.otherRoads=void 0,e.name="GvGSingleAdjustView",e.url="ui/module/gvg/GvGSingleAdjustView",e}e(i,t);var s=i.prototype;return s.onInit=function(){var t=this,e=this.findChild("root/imgMask");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.onMaskClick()}));var i=this.findChild("root/content/btnClose");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.onMaskClick()})),this.txtTitle=this.findChildComponent("root/content/title/txtTitle",n),this.nodeBtnSave=this.findChild("root/content/btnSave"),this.addComponentCallbackListener(this.nodeBtnSave,o.EventType.CLICK,(function(){t.trySaveRoad()}));var s=this.findChildComponent("root/content/ScrollView",d);this.itemList=this.addUIList(s,w),this.itemList.selectedMode=r.SINGLE},s.registerUpdateHandler=function(){this.addEvent(C.GVG_INFO_UPDATE,this.refreshInfo,this),this.addEvent(C.GVG_ROAD_INFO_UPDATE,this.onGvGRoadInfoUpdate,this),this.addEvent(C.GVG_ROAD_INFO_BACK,this.onGvGRoadInfoBack,this)},s.onMaskClick=function(){var t=this;this.needRemind?v.showBoxTip({tip:GetLanguage(200406),func:function(e){e==g?(t.trySaveRoad(),t.close()):e==m&&t.close()}}):this.close()},s.trySaveRoad=function(){if(this.needRemind){var t=[];for(var e in this.roleIdToNewRoad)null!=this.roleIdToNewRoad[e]&&t.push({k:Number(e),v:this.roleIdToNewRoad[e]});if(t.length<=0)return this.needRemind=!1,this.roleIdToNewRoad={},void v.showFlyTip(GetLanguage(700000303));IS(I).reqGvGRoleChange(this.road,t)}else v.showFlyTip(GetLanguage(700000303))},s.onAfterOpen=function(){this.curSelectIndex=1,this.road=this.openArgs[0],this.otherRoads=this.getOtherRoads(),this.txtTitle.string=u.formatStr(GetLanguage(700000301),IS(G).getRoadName(this.road)),IS(I).reqGvGRoadInfo(1,this.road),this.refreshInfo()},s.refreshInfo=function(){IS(R).step>p.Waiting?this.close():this.refreshList()},s.refreshList=function(){null!=this.oriPlayerList&&(this.dataList=c.clone(this.oriPlayerList),this.itemList.datas=this.dataList,this.dataLength=this.dataList.length)},s.changeRoleRoad=function(t,e,i){this.roleIdToNewRoad[t]=i?null:e,this.updateRemind(),this.itemList.items.forEach((function(t,e,i){t.updateAdjusting()}))},s.updateRemind=function(){for(var t in this.roleIdToNewRoad)if(null!=this.roleIdToNewRoad[t])return void(this.needRemind=!0);this.needRemind=!1},s.onBeforeClose=function(){this.curSelectIndex=1,this.oriPlayerList=null,this.needRemind=!1,this.roleIdToNewRoad={}},s.updateSelect=function(){this.refreshList()},s.getOtherRoads=function(){for(var t=new Array,e=1;e<=3;e++)this.road!=e&&t.push(e);return t},s.onDestroy=function(){},s.onGvGRoadInfoUpdate=function(t,e,i){t==this.road&&(e&&(this.oriPlayerList=i||[],this.needRemind=!1,this.roleIdToNewRoad={}),this.refreshInfo())},s.onGvGRoadInfoBack=function(t,e,i){1==t&&e==this.road&&(this.oriPlayerList=i||[],this.needRemind=!1,this.roleIdToNewRoad={},this.refreshList())},i}(f));var w=function(t){function i(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))||this).txtIndex=void 0,e.txtName=void 0,e.imgHead=void 0,e.imgHeadFrame=void 0,e.txtFightPower=void 0,e.nodeBtnUp=void 0,e.nodeBtnDown=void 0,e.roleId=void 0,e.order=void 0,e.nodeUnfold=void 0,e.nodeAdjusting=void 0,e.txtAdjusting=void 0,e.txtAdjustOne=void 0,e.txtAdjustTwo=void 0,e}e(i,t);var d=i.prototype;return d.onInit=function(){var t=this;this.adaptiveSize=!0,this.txtIndex=l.findChildComponent(this.node,"txtIndex",n),this.txtName=l.findChildComponent(this.node,"txtName",n),this.imgHead=l.findChildComponent(this.node,"head",s),this.imgHeadFrame=l.findChildComponent(this.node,"imgHeadFrame",s),this.txtFightPower=l.findChildComponent(this.node,"txtFightPower",n),this.nodeBtnUp=l.findChild(this.node,"btnUp"),this.nodeBtnDown=l.findChild(this.node,"btnDown"),this.nodeUnfold=l.findChild(this.node,"unfoldInfo"),this.nodeAdjusting=l.findChild(this.node,"adjusting"),this.txtAdjusting=l.findChildComponent(this.node,"adjusting/txtRoad",n),this.txtAdjustOne=l.findChildComponent(this.node,"unfoldInfo/btnMove1/Label",n),this.txtAdjustTwo=l.findChildComponent(this.node,"unfoldInfo/btnMove2/Label",n);var e=l.findChild(this.node,"unfoldInfo/btnMove1");this.view.addComponentCallbackListener(e,o.EventType.CLICK,(function(){for(var e,i=t.view,o=i.roleIdToNewRoad[t.roleId],n=0;n<i.otherRoads.length;n++)if(!o||i.otherRoads[n]!=o){e=i.otherRoads[n];break}i.changeRoleRoad(t.roleId,e)}));var i=l.findChild(this.node,"unfoldInfo/btnMove2");this.view.addComponentCallbackListener(i,o.EventType.CLICK,(function(){var e=t.view;e.roleIdToNewRoad[t.roleId]?e.changeRoleRoad(t.roleId,null,!0):e.changeRoleRoad(t.roleId,e.otherRoads[1])}))},d.onRender=function(t,e){this.roleId=t.role_id,this.order=t.order,this.txtIndex.string=String(this.order),this.txtName.string=t.name,this.txtFightPower.string=a.formatStr("%s%s",GetLanguage_UI(999000196),u.GetNumString(t.power)),this.view.loadRemoteIcon(t.head.url,this.imgHead);var i=t.head.frame_id;if(i>0){this.imgHeadFrame.node.active=!0;var o=configAvatar_frame.getDataByKey(i);this.view.loadIcon(this.imgHeadFrame,"icon_frame",o.icon)}else this.imgHeadFrame.node.active=!1;this.updateAdjusting(),this.updateFold()},d.updateAdjusting=function(){var t=this.view,e=t.roleIdToNewRoad[this.roleId];if(this.nodeAdjusting.active=null!=e,e){var i;this.txtAdjusting.string=u.formatStr(GetLanguage(700000302),IS(G).getRoadName(e)),this.txtAdjustTwo.string=GetLanguage(700000306);for(var o=0;o<t.otherRoads.length;o++)if(!e||t.otherRoads[o]!=e){i=t.otherRoads[o];break}this.txtAdjustOne.string=u.formatStr(GetLanguage(700000302),IS(G).getRoadName(i))}else this.txtAdjustOne.string=u.formatStr(GetLanguage(700000302),IS(G).getRoadName(t.otherRoads[0])),this.txtAdjustTwo.string=u.formatStr(GetLanguage(700000302),IS(G).getRoadName(t.otherRoads[1]))},d.updateFold=function(){var t=this.view.curSelectIndex==this.order;this.nodeUnfold.active=t,this.nodeBtnDown.active=t,this.nodeBtnUp.active=!t,this.ut.height=t?190.01:101},d.onItemClick=function(){var t=this.view;t.curSelectIndex=t.curSelectIndex==this.order?-1:this.order,t.updateSelect()},i}(h);i._RF.pop()}}}));
