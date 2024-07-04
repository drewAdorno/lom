System.register("chunks:///_virtual/PetInfoView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RedPoint.ts","./RedPointMgr.ts","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./BaseView.ts","./ObjectUtil.ts","./BagControl.ts","./BagDefine.ts","./BagModel.ts","./MessageView.ts","./EquipModel.ts","./MainViewModel.ts","./TeamControl.ts","./PetControl.ts","./PetDataCache.ts","./PetDefine.ts","./PetModel.ts","./UIDefine.ts"],(function(t){"use strict";var e,i,n,o,s,a,h,d,r,c,l,p,f,u,m,v,C,g,I,P,y,b,x,T,L,S,B,k,N,w,M,D;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.math,o=t.Button,s=t.Sprite,a=t.Label,h=t.ProgressBar,d=t.sys,r=t.Layout,c=t.LabelOutline,l=t.js,p=t.Color,f=t.UITransform,u=t.Node},function(t){m=t.RedPointType},function(t){v=t.RedPointMgr},function(t){C=t.default},function(t){g=t.default},null,function(t){I=t.BaseView},function(t){P=t.default},function(t){y=t.default},function(t){b=t.BagEventDefine},function(t){x=t.BagModel},function(t){T=t.default},function(t){L=t.EquipModel},function(t){S=t.MainViewModel},function(t){B=t.default},function(t){k=t.default},function(t){N=t.PetDataCache},function(t){w=t.PetEventDefine},function(t){M=t.PetModel},function(t){D=t.PanelTabType}],execute:function(){i._RF.push({},"163d2655QtKOZTSMUUj9Qhx","PetInfoView",void 0);n.Vec3;var E=n.Vec2;t("default",function(t){function i(){var e;return(e=t.call(this)||this).imgFrame=void 0,e.imgIcon=void 0,e.txtName=void 0,e.txtLevel=void 0,e.pbNum=void 0,e.txtNum=void 0,e.txtTopName=void 0,e.txtQuality=void 0,e.txtAttackValue=void 0,e.txtAttackSpeedValue=void 0,e.txtSkillHaveDesc=void 0,e.txtSkillWearDesc=void 0,e.nodeTraceParent=void 0,e.nodeTraceItem=void 0,e.traceItems=void 0,e.oprate=void 0,e.btnWear=void 0,e.btnUpgrade=void 0,e.btnCompose=void 0,e.btnRemove=void 0,e.btnGoTo=void 0,e.btnPrev=void 0,e.btnNext=void 0,e.imgBtnUpgrade=void 0,e.outLineBtnUpgrade=void 0,e.imgBtnCompose=void 0,e.outLineBtnCompose=void 0,e.nodeModelRoot=void 0,e.modelPet=void 0,e.petId=void 0,e.petCfg=void 0,e.petList=void 0,e.hideBtn=!1,e.btnType=0,e.curPetInfo=void 0,e.isOther=!1,e.nodeActivity=void 0,e.nodeType1=void 0,e.nodeMax=void 0,e.name="PetInfoView",e.url="ui/module/pet/PetInfoView",e}e(i,t);var n=i.prototype;return n.onInit=function(){var t=this,e=this.findChild("imgMask");if(this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){t.onMaskClick()})),this.imgFrame=this.findChildComponent("content/top/imgFrame",s),this.imgIcon=this.findChildComponent("content/top/imgIcon",s),this.txtName=this.findChildComponent("content/top/nameInfo/txtName",a),this.txtLevel=this.findChildComponent("content/top/level/txtLevel",a),this.txtTopName=this.findChildComponent("content/bgName/txtName",a),this.pbNum=this.findChildComponent("content/top/level/pbNum",h),this.txtNum=this.findChildComponent("content/top/level/txtNum",a),this.txtQuality=this.findChildComponent("content/top/txtQuality",a),this.txtAttackValue=this.findChildComponent("content/attr/attrItemAttack/txtValue",a),this.txtAttackSpeedValue=this.findChildComponent("content/attr/attrItemAttackSpeed/txtValue",a),this.txtSkillHaveDesc=this.findChildComponent("content/attr/attrHave/txtDesc",a),this.txtSkillWearDesc=this.findChildComponent("content/attr/scroll/view/content/txtDesc",a),this.nodeTraceParent=this.findChild("content/top/nameInfo/traceParent"),this.nodeTraceItem=this.findChild("content/top/nameInfo/traceParent/trace"),this.nodeTraceItem.active=!1,d.uiMirror){var i=this.findChildComponent("content/top/nameInfo",r);i.horizontalDirection=1,i.node.setScale(-1,1,1),this.nodeTraceParent.getComponent(r).horizontalDirection=1,this.txtName.node.setScale(1,1,1)}this.traceItems=new Array,this.oprate=this.findChild("content/oprate"),this.btnWear=this.findChild("content/oprate/btnWear"),this.addComponentCallbackListener(this.btnWear,o.EventType.CLICK,(function(){t.onWearClick()})),this.btnUpgrade=this.findChild("content/oprate/btnUpgrade"),this.addComponentCallbackListener(this.btnUpgrade,o.EventType.CLICK,(function(){t.onUpgradeClick()})),this.addRedPoint("PetInfoView/btnUpgrade",this.btnUpgrade,new E(90,25),m.Dot),this.imgBtnUpgrade=this.btnUpgrade.getComponent(s),this.outLineBtnUpgrade=this.findChildComponent("content/oprate/btnUpgrade/Label",c),this.btnRemove=this.findChild("content/oprate/btnRemove"),this.addComponentCallbackListener(this.btnRemove,o.EventType.CLICK,(function(){t.onRemoveClick()})),this.btnGoTo=this.findChild("content/oprate/btnGoTo"),this.addComponentCallbackListener(this.btnGoTo,o.EventType.CLICK,(function(){t.onGoToClick()})),this.btnPrev=this.findChild("content/btnPrev"),this.addComponentCallbackListener(this.btnPrev,o.EventType.CLICK,(function(){t.onPrevClick()})),this.btnNext=this.findChild("content/btnNext"),this.addComponentCallbackListener(this.btnNext,o.EventType.CLICK,(function(){t.onNextClick()})),this.nodeModelRoot=this.findChild("content/modelRoot"),this.nodeType1=this.findChild("content/type1");var n=this.findChild("content/type1/btnchange");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){IS(B).reqTeamChoosePet([{k:1,v:t.petId}]),uiMgr.close("PetSelectView"),t.close()})),this.nodeActivity=this.findChild("content/top/imgActivity"),this.nodeMax=this.findChild("content/top/max"),this.btnCompose=this.findChild("content/oprate/btnCompose"),this.addComponentCallbackListener(this.btnCompose,o.EventType.CLICK,(function(){t.onComposeClick()})),this.imgBtnCompose=this.btnCompose.getComponent(s),this.outLineBtnCompose=this.findChildComponent("content/oprate/btnCompose/Label",c),this.addRedPoint("PetInfoView/btnCompose",this.btnCompose,new E(90,25),m.Dot)},n.registerUpdateHandler=function(){this.addEvent(w.PET_INFO_UPDATE,this.onPetInfoUpdate,this),this.addEvent(b.GOODS_LIST_UPDATE,this.onGoodsListUpdate,this)},n.onAfterOpen=function(){this.petList=IS(N).getSortAllPetList(),"number"==typeof this.openArgs[0]?(this.petId=this.openArgs[0],this.curPetInfo=null,this.isOther=!1):(this.curPetInfo=this.openArgs[0],this.petId=this.curPetInfo.pet_id,this.isOther=!0),this.hideBtn=1==this.openArgs[1],this.oprate.active=!this.hideBtn,this.btnType=this.openArgs[2];var t=this.openArgs[3];if(this.pbNum.node.active=!this.isOther,this.txtNum.node.active=!this.isOther,this.showPetInfo(),0==this.btnType)this.nodeType1.active=!1;else if(1==this.btnType){this.nodeType1.active=!0;var e=this.petList.indexOf(this.petId);this.btnPrev.active=e>0,this.btnNext.active=e<this.petList.length-1}t&&(this.petList=t)},n.showPetInfo=function(){this.petCfg=configPet.getDataByKey(this.petId);var t=this.petList.indexOf(this.petId);if(this.btnPrev.active=!this.hideBtn&&t>0,this.btnNext.active=!this.hideBtn&&t<this.petList.length-1,1==this.btnType){var e=this.petList.indexOf(this.petId);this.btnPrev.active=e>0,this.btnNext.active=e<this.petList.length-1}this.showBaseInfo(),this.updatePetInfo(),this.updateRedPoint()},n.updateRedPoint=function(){IS(v).changeValue("PetInfoView/btnCompose",IS(N).getPetComposeRedPoint(this.petId)),IS(v).changeValue("PetInfoView/btnUpgrade",IS(N).getPetUpgradeRedPoint(this.petId))},n.showBaseInfo=function(){var t=this;this.loadIcon(this.imgFrame,"icon_pet",configColor.getDataByKey(this.petCfg.quality).path),this.loadIcon(this.imgIcon,"icon_pet",this.petCfg.icon),this.txtName.string=this.petCfg.name,this.txtTopName.string=this.petCfg.name,this.nodeActivity.active=1==this.petCfg.if_activity;var e=IS(L).getEquipQualityNameAndColor(this.petCfg.quality);this.txtQuality.string=e.nameStr,this.txtQuality.color=e.nameColor;for(var i=0;i<this.traceItems.length;i++)this.traceItems[i].node.active=!1;for(var n=this.petCfg.type||[],o=function(e){var i=t.traceItems[e];P.isEmpty(i)&&((i={}).node=nodeInstantiate.instantiate(t.nodeTraceItem),i.node.parent=t.nodeTraceParent,i.txtTrace=C.findChildComponent(i.node,"txtTrace",a),i.ut=i.node.getComponent(f),i.utTxt=i.txtTrace.node.getComponent(f),i.imgTraceBg=i.node.getComponent(s),t.addComponentCallbackListener(i.utTxt.node,u.EventType.SIZE_CHANGED,(function(){i.ut.width=28+i.utTxt.width,i.imgTraceBg.updateRenderer()}))),i.node.active=!0;var o=configPetrace.getDataByKey(n[e]),h=null==o?void 0:o.name;i.txtTrace.string=h,t.traceItems[e]=i},h=0;h<n.length;h++)o(h);this.updatePetModelShow()},n.updatePetModelShow=function(){null!=this.modelPet&&(this.removeUIEffect(this.modelPet),this.modelPet=null);var t=configUnitModel.getDataByKey(this.petCfg.unitId);this.modelPet=this.addUIEffect(t.path,this.nodeModelRoot,-1,new E(0,-60),t.scale/100*2.25,(function(t){t.dir=d.uiMirror?-1:1}))},n.updatePetInfo=function(){var t=this.isOther?this.curPetInfo:IS(M).getPetInfoByPetId(this.petId),e=P.isEmpty(t)||!1;this.btnGoTo.active=e&&1!=this.petCfg.if_activity||!1;var i=e?1:t.level;this.txtLevel.string=e?GetLanguage(200485):l.formatStr("Lv.%s",i);var n,o,s=configPetlevel.getDataByKeys("id",this.petId,"level",i);e?(n=s.partner_dam,o=s.att_speed):(n=IS(M).getPetFactAttrValue(s.partner_dam,this.petId,1040),o=IS(M).getPetFactAttrValue(s.att_speed,this.petId,1003)),this.txtAttackValue.string=String(Math.floor(n)/1e4),this.txtAttackSpeedValue.string=String(Math.floor(o/100)/100),this.txtSkillHaveDesc.string=g.formatStr(s.desc,s.desc_parm);var a=s.equipEffect[0],h=configSkill_level.getDataByKeys("id",a[0],"level",a[1]);this.txtSkillWearDesc.string=g.formatStrWithMirrorDeal(GetLanguage(200098),g.formatStr.apply(g,[h.desc].concat(h.desc_parm))),this.isOther?(this.btnWear.active=!1,this.btnRemove.active=!1):(this.btnWear.active=0==e&&0==t.pos||!1,this.btnRemove.active=0==e&&0!=t.pos||!1);var d=e?i:i+1,r=configPetlevel.getDataByKeys("id",this.petId,"level",d),c=P.isEmpty(r)||!1;if(this.nodeMax.active=c,this.txtLevel.node.active=!c,this.btnUpgrade.active=0==e&&!c||!1,this.btnCompose.active=0==e&&c||!1,!this.isOther){var f,u=(c?s:r).expend[0],m=IS(x).getGoodsCountByGoodsGtid(u[0]),v=configMix.getDataByKey(u[0]);if(c){var C=null==v||null==v.cost||0==v.cost;C?(f=0,this.pbNum.progress=1):(f=v.cost,this.pbNum.progress=Math.min(1,m/f));var I=C||m<v.cost||!IS(M).checkHasPetByQuality(v.quality+1);this.loadIcon(this.imgBtnCompose,"common",I?"common_ICON_zhihuianniu":"common_ICON_luanniu"),this.outLineBtnCompose.color=I?new p(76,76,76):new p(41,65,21)}else{var y=m<(f=u[1]);this.loadIcon(this.imgBtnUpgrade,"common",y?"common_ICON_zhihuianniu":"common_ICON_luanniu"),this.outLineBtnUpgrade.color=y?new p(76,76,76):new p(41,65,21),this.pbNum.progress=Math.min(1,m/f)}this.txtNum.string=l.formatStr("%s/%s",m,f)}},n.onBeforeClose=function(){this.hideBtn=!1,this.curPetInfo=null,this.isOther=!1;for(var t=0;t<this.traceItems.length;t++)this.traceItems[t].node.active=!1},n.onDestroy=function(){for(var t=0;t<this.traceItems.length;t++)this.traceItems[t].node.destroy();this.traceItems=[]},n.onPetInfoUpdate=function(t){this.isOther||t==this.petId&&(this.updatePetInfo(),this.updateRedPoint())},n.onGoodsListUpdate=function(){this.updatePetInfo(),this.updateRedPoint()},n.onWearClick=function(){var t=IS(M).getEmptyPos();if(null!=t)return IS(k).reqPetSetPos(this.petId,t),void this.close();normalEvent.emit(w.PET_INFO_VIEW_SELECT_WEAR,this.petId),this.close()},n.onUpgradeClick=function(){var t=IS(M).getPetInfoByPetId(this.petId).level+1,e=configPetlevel.getDataByKeys("id",this.petId,"level",t);if(P.isEmpty(e))T.showFlyTip(GetLanguage(200486));else{var i=e.expend[0];IS(x).getGoodsCountByGoodsGtid(i[0])<i[1]?T.showFlyTip(GetLanguage(200487)):IS(k).reqPetLevUp(this.petId)}},n.onRemoveClick=function(){IS(k).reqPetSetPos(this.petId,0)},n.onGoToClick=function(){IS(S).TryJumpToMainViewPanel(D.Main_Shop,D.Shop_Draw)&&this.close()},n.onMaskClick=function(){this.close()},n.onPrevClick=function(){var t=this.petList.indexOf(this.petId);t<=0||(this.petId=this.petList[t-1],this.showPetInfo())},n.onNextClick=function(){var t=this.petList.indexOf(this.petId);t>=this.petList.length-1||(this.petId=this.petList[t+1],this.showPetInfo())},n.onComposeClick=function(){var t=this.isOther?this.curPetInfo:IS(M).getPetInfoByPetId(this.petId),e=P.isEmpty(t)||!1?1:t.level,i=configPetlevel.getDataByKeys("id",this.petId,"level",e).expend[0],n=configMix.getDataByKey(i[0]);if(null!=n&&null!=n.cost&&0!=n.cost)if(IS(M).checkHasPetByQuality(n.quality+1)){var o=n.cost,s=Math.floor(IS(x).getGoodsCountByGoodsGtid(i[0])/o);s<=0?T.showFlyTip(GetLanguage(200487)):IS(y).reqGoodsComposeSkillPet(0,1,[{k:i[0],v:s}])}else T.showFlyTip(GetLanguage(201106));else T.showFlyTip(GetLanguage(201104))},i}(I));i._RF.pop()}}}));

