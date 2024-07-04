System.register("chunks:///_virtual/EquipSwitchView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./ItemIcon.ts","./ConfigGlobal.ts","./ObjectUtil.ts","./MessageView.ts","./RoleDataCache.ts","./RoleDefine.ts","./EquipControl.ts","./EquipDataCache.ts","./EquipDefine.ts","./EquipModel.ts","./UIDefine.ts","./BaseSubView.ts"],(function(t){"use strict";var e,i,n,o,a,s,u,d,r,l,h,c,p,f,m,g,v,I,S,C,q,E,_,y,T,L,b,w,P,N;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.ScrollView,a=t.Button,s=t.sys,u=t.Layout,d=t.Label,r=t.Color,l=t.js,h=t.Vec2,c=t.Sprite,p=t.LabelOutline},function(t){f=t.V2},function(t){m=t.ListItem},function(t){g=t.default},function(t){v=t.default},null,function(t){I=t.IconAseetType},function(t){S=t.ConfigGlobal},function(t){C=t.default},function(t){q=t.default},function(t){E=t.RoleDataCache},function(t){_=t.RoleEventDefine,y=t.PlayerAttr},function(t){T=t.default},function(t){L=t.EquipDataCache},function(t){b=t.EquipEventDefine},function(t){w=t.EquipModel},function(t){P=t.OpenFunction},function(t){N=t.BaseSubView}],execute:function(){n._RF.push({},"828912S/lpJILr2BK4jrKEI","EquipSwitchView",void 0);var U=S.equip_tab_limit.length,B=[{equipType:1,spriteName:"zjm_ui_wuqi"},{equipType:2,spriteName:"zjm_ui_goushi"},{equipType:3,spriteName:"zjm_ui_mianshi"},{equipType:4,spriteName:"zjm_ui_hujian"},{equipType:5,spriteName:"zjm_ui_kaijia"},{equipType:6,spriteName:"zjm_ui_bijia"},{equipType:7,spriteName:"zjm_ui_shoutao"},{equipType:8,spriteName:"zjm_ui_yaodai"},{equipType:9,spriteName:"zjm_ui_hutui"},{equipType:10,spriteName:"zjm_ui_xiezi"}],R=(t("default",function(t){function n(){var e;return(e=t.call(this)||this).nodeEquipRoot=void 0,e.nodeEquipParent=void 0,e.nodeEquipItem=void 0,e.equipItems=void 0,e.suit_id=void 0,e.attrList=void 0,e.attrIdToValue={},e.nodeModelShow=void 0,e.model=void 0,e.nodeUsing=void 0,e.tabToNameLabel={},e.btnSwitch=void 0,e.nodeIsCurTab=void 0,e.txtCurPlan=void 0,e.nodeSelectPlanMask=void 0,e.nodePlanDown=void 0,e.nodePlanUp=void 0,e.nodeSelectPlan=void 0,e.selectItems=[],e.indexToSuitId={},e.btnSelectPlan=void 0,e.isSelect=!1,e.name="EquipSwitchView",e.url="ui/module/equip/EquipSwitchView",e.poolTime=3e3,e}e(n,t);var m=n.prototype;return m.onInit=function(){var t=this;this.nodeModelShow=this.findChild("root/content/nodeModel/nodeModel");var e,i=this.findChildComponent("root/content/attrList",o);this.attrList=this.addUIList(i,R),this.nodeEquipRoot=this.findChild("root/content/equipRoot"),this.nodeEquipParent=this.findChild("root/content/equipRoot/equipParent"),this.nodeEquipItem=this.findChild("root/content/equipRoot/equipParent/equipItem"),this.nodeEquipItem.active=!1,this.equipItems=[];for(var n=function(i){var n=B[i].equipType;e=B[i].spriteName;var o=nodeInstantiate.instantiate(t.nodeEquipItem);o.parent=t.nodeEquipParent,o.name=String(i+1);var s={node:o,imgType:g.findChildComponent(o,"imgEquipType",c),nodeEquip:g.findChild(o,"equipInfo"),imgFrame:g.findChildComponent(o,"equipInfo/imgFrame",c),imgIcon:g.findChildComponent(o,"equipInfo/imgIcon",c),imgFigure:g.findChildComponent(o,"equipInfo/imgFigure",c),txtLevel:g.findChildComponent(o,"equipInfo/txtLevel",d),equipType:n};t.addComponentCallbackListener(o,a.EventType.CLICK,(function(){var e=IS(w).getEquipByLocation(n,t.suit_id);C.isEmpty(e)||uiMgr.openView("EquipDetailView",null==e?void 0:e.equip_id)})),t.loadIcon(s.imgType,"equip",e),o.active=!0,t.equipItems.push(s)},r=0;r<B.length;r++)n(r);this.btnSwitch=this.findChild("root/content/btnSwitch"),this.addComponentCallbackListener(this.btnSwitch,a.EventType.CLICK,(function(){IS(T).reqEquipChooseSuitInfo(t.suit_id)})),this.nodeIsCurTab=this.findChild("root/content/changeState"),this.nodeUsing=this.findChild("root/content/nodeModel/nodeUsing"),s.uiMirror&&this.dealMirrorLayout(this.nodeUsing.getComponent(u)),this.btnSelectPlan=this.findChild("root/content/btnCurPlan"),this.addComponentCallbackListener(this.btnSelectPlan,a.EventType.CLICK,(function(){t.setSelectPlanActive(!t.isSelect)})),this.txtCurPlan=this.findChildComponent("root/content/btnCurPlan/txtPlan",d),this.nodeSelectPlanMask=this.findChild("root/content/maskSelectPlan"),this.addComponentCallbackListener(this.nodeSelectPlanMask,a.EventType.CLICK,(function(){t.setSelectPlanActive(!1)})),this.nodePlanDown=this.findChild("root/content/btnCurPlan/imgDown"),this.nodePlanUp=this.findChild("root/content/btnCurPlan/imgUp"),this.nodeSelectPlan=this.findChild("root/content/planSelect");for(var h=function(e){var i=t.findChild(l.formatStr("root/content/planSelect/selectItem%s",e));if(e>U-1)return i.active=!1,"continue";i.active=!0,t.addComponentCallbackListener(i,a.EventType.CLICK,(function(){t.clickSelectPlan(e)})),t.selectItems.push({node:i,nodeLock:g.findChild(i,"lock"),txtName:g.findChildComponent(i,"txtPlan",d),outlineName:g.findChildComponent(i,"txtPlan",p),imgBg:g.findChildComponent(i,"imgBg",c)})},f=1;f<=4;f++)h(f);var m=this.findChild("root/content/btnRename");this.addComponentCallbackListener(m,a.EventType.CLICK,(function(){uiMgr.openView("TabRenameView",t.suit_id,"equip")}))},m.setSelectPlanActive=function(t){this.nodePlanDown.active=!t,this.nodePlanUp.active=t,this.nodeSelectPlan.active=t,this.nodeSelectPlanMask.active=t,this.isSelect=t},m.onAfterOpen=function(){this.suit_id=IS(L).tabInfo.tab,this.refreshBtn(),this.setSelectPlanActive(!1),this.refreshShow()},m.updateTabName=function(){this.txtCurPlan.string=IS(w).getEquipTabName(this.suit_id)},m.registerUpdateHandler=function(){this.addEvent(b.EQUIP_LIST_UPDATE,this.onEquipListUpdate,this),this.addEvent(_.ROLE_ATTR_LIST_UPDATE_VIRTUAL,this.updateInfo,this),this.addEvent(b.EQUIP_TAB_INFO_UPDATE,this.refreshBtn,this),this.addEvent(_.ROLE_OPEN_FUNCTION_UPDATE,this.onRoleOpenFunctionUpdate,this),this.addEvent(b.EQUIP_TAB_NAME_CHANGE,this.onEquipTabNameChange,this)},m.refreshBtn=function(){for(var t=1,e=1;e<=U;e++)e!=this.suit_id&&(this.indexToSuitId[t]=e,t+=1);for(var i=IS(L).tabInfo,n=i.unlock_list,o={},a=0;a<n.length;a++)o[n[a].k]=!0;for(var s=0;s<this.selectItems.length;s++){var u=s+1,d=this.indexToSuitId[u],l=this.selectItems[s];l.txtName.string=IS(w).getEquipTabName(d);var h=o[d];l.nodeLock.active=!h,l.imgBg.grayScale=!h,l.outlineName.color=h?new r(60,42,28):new r(59,59,59)}this.nodeUsing.active=this.suit_id==i.tab,this.btnSwitch.active=this.suit_id!=i.tab,this.nodeIsCurTab.active=this.suit_id==i.tab,this.updateTabName()},m.refreshShow=function(){this.attrIdToValue={},this.updateEquipShow(),this.updateInfo(),this.loadRoleModel()},m.onRoleOpenFunctionUpdate=function(t){t==P.FUNC_EQUIP_SKIN&&this.updateEquipShow()},m.onEquipTabNameChange=function(t){t==this.suit_id&&this.updateTabName()},m.clickSelectPlan=function(t){var e=this.indexToSuitId[t],i=IS(E).GetLevel(),n=S.equip_tab_limit[e-1];n[1]>i?q.showFlyTip(v.formatStrWithMirrorDeal(GetLanguage(201091),n[1])):(this.setSelectPlanActive(!1),this.suit_id=e,this.refreshBtn(),this.refreshShow())},m.onEquipListUpdate=function(){this.updateEquipShow()},m.updateEquipShow=function(){for(var t=0;t<this.equipItems.length;t++)this.updateSingleEquip(this.equipItems[t])},m.updateSingleEquip=function(t){t.effect&&(this.removeUIEffect(t.effect),t.effect=null);var e=t.equipType,i=IS(w).getEquipByLocation(e,this.suit_id);if(C.isEmpty(i))t.nodeEquip.active=!1;else{var n=configEquipment.getDataByKey(i.config_id);t.nodeEquip.active=!0,this.loadIcon(t.imgIcon,n.atlas,n.icon,null,I.ICON_SPRITE),this.loadIcon(t.imgFrame,"icon_equip",configColor.getDataByKey(n.quality).path);var o=configColor.getDataByKey(n.quality).effect_path;null!=o&&""!=o&&(t.effect=this.addUIEffect(l.formatStr("prefab/ui-effect/%s",o),t.imgIcon.node,-1,new h(0,0))),t.txtLevel.string=l.formatStr("Lv.%s",i.equip_lv),t.imgFigure.node.active=IS(w).checkFigureTipShow(e)||!1;var a=IS(w).getEquipFigureByLocation(e);t.imgFigure.grayscale=0==a||-1==a}},m.updateInfo=function(){for(var t=IS(w).getWearEquipList(this.suit_id),e=0;e<t.length;e++){for(var n,o=i(t[e].base_attr);!(n=o()).done;){var a=n.value;a.k in this.attrIdToValue?this.attrIdToValue[a.k]+=a.v:this.attrIdToValue[a.k]=a.v}for(var s,u=i(t[e].rand_attr);!(s=u()).done;){var d=s.value;d.k in this.attrIdToValue?this.attrIdToValue[d.k]+=d.v:this.attrIdToValue[d.k]=d.v}}var r=S.equip_attr;this.attrList.datas=r},m.getRoleAttrById=function(t){var e=this.attrIdToValue[t];return null==e?0:e},m.getAttrValue=function(t){var e=configAttribute.getDataByKey(t),i=this.getRoleAttrById(t);if(0==i&&3==e.type&&null!=e.group){var n=this.getRoleAttrById(e.group-1e3),o=this.getRoleAttrById(e.group),a=1;2==e.show_type&&(a=1e4),i=(n-o)/o*a}return 2==e.show_type?l.formatStr("%s%",v.GetNumString(i/100)):3==e.show_type?v.GetNumString(Math.floor(i/100)/100):v.GetNumString(i)},m.loadRoleModel=function(){this.removeUnitModel(this.model);var t=this.getShowEquipCfgIdByLocation(1),e=this.getShowEquipCfgIdByLocation(2),i=this.getShowEquipCfgIdByLocation(3);IS(w).getEquipByLocation(1,this.suit_id)||(t=0),IS(w).getEquipByLocation(2,this.suit_id)||(e=0),IS(w).getEquipByLocation(3,this.suit_id)||(i=0);var n=IS(E).GetTypeUsedSkin(1);this.model=this.addUnitModel({job:IS(E).GetTypeUsedSkin(0),dressId:IS(E).GetTypeUsedSkin(2)||0,gender:IS(E).GetRoleAttr(y.ROLE_ATTR_GENDER),weapon:t,ornaments:e,face:i,color:n,parent:this.nodeModelShow,shenqi:0},f.ZERO,1.5),s.uiMirror&&(this.getUnitModel(this.model).dir=-1)},m.getShowEquipCfgIdByLocation=function(t){var e=IS(w).getEquipFigureByLocation(t);if(-1==e)return 0;if(0!=e)return e;var i=IS(w).getEquipByLocation(t,this.suit_id);return C.isEmpty(i)?0:i.config_id},m.onBeforeClose=function(){},m.onDestroy=function(){},n}(N)),function(t){function i(){for(var e,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).txtName=void 0,e.txtValue=void 0,e}e(i,t);var n=i.prototype;return n.onInit=function(){this.txtName=g.findChildComponent(this.node,"txtAttrName",d),this.txtValue=g.findChildComponent(this.node,"txtAttrValue",d)},n.onRender=function(t,e){var i=configAttribute.getDataByKey(t);this.txtName.string=i.name,this.txtValue.string=this.view.getAttrValue(t)},i}(m));n._RF.pop()}}}));

