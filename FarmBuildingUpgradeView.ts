System.register("chunks:///_virtual/FarmBuildingUpgradeView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIList.ts","./NodeUtil.ts","./StringUtil.ts","./TimeUtil.ts","./index57.ts","./ItemIcon.ts","./ConfigGlobal.ts","./ObjectUtil.ts","./AdDefine.ts","./AdModel.ts","./BagDefine.ts","./BagModel.ts","./ResItems.ts","./MessageView.ts","./GuildControl.ts","./GuildDataCache.ts","./GuildDefine.ts","./RoleControl.ts","./RoleDataCache.ts","./PlantControl.ts","./PlantDefine.ts","./PlantModel.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,d,a,s,r,u,l,h,c,g,f,p,m,C,v,I,x,_,G,B,T,A,y,S,L,b,U,w,D,E,F,V,M,N;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,o=t.Label,d=t.Sprite,a=t.ScrollView,s=t.ProgressBar,r=t.Vec3,u=t.RichText,l=t.LabelOutline,h=t.Color,c=t.js,g=t.Vec2},function(t){f=t.ListItem},function(t){p=t.default},function(t){m=t.default},function(t){C=t.default},null,function(t){v=t.IconAseetType},function(t){I=t.ConfigGlobal},function(t){x=t.default},function(t){_=t.AdEventDefine,G=t.ADS_TYPE},function(t){B=t.AdModel},function(t){T=t.BagEventDefine},function(t){A=t.BagModel},function(t){y=t.ResItems},function(t){S=t.default},function(t){L=t.default},function(t){b=t.default},function(t){U=t.HelpType,w=t.GuildEventDefine},function(t){D=t.default},function(t){E=t.RoleDataCache},function(t){F=t.default},function(t){V=t.PlantEventDefine},function(t){M=t.PlantModel},function(t){N=t.BaseView}],execute:function(){e._RF.push({},"b9ea07YEtJAeJXBp/DyROnp","FarmBuildingUpgradeView",void 0);var R=I.accelerate_goods_effect[0][0],H=I.accelerate_goods_effect[0][1],O=I.accelerate_goods_effect[1][0],k=I.accelerate_goods_effect[1][1],K=[{id:1002}],P={1:"zy_icon_daocaoren",2:"zy_icon_chucaoji",3:"zy_icon_dapeng"},z=(t("default",function(t){function e(){var i;return(i=t.call(this)||this).buildingCfgId=void 0,i.roleId=void 0,i.time=void 0,i.isOther=void 0,i.endTime=void 0,i.costEnough=void 0,i.startTime=void 0,i.accTime=void 0,i.resItems=void 0,i.txtName=void 0,i.imgBuilding=void 0,i.txtDesc=void 0,i.curGroup={},i.maxGroup={},i.attrList=void 0,i.upgradeGroup={},i.isMaxLevel=void 0,i.attrIdToValue=void 0,i.upgradingEffect=void 0,i.curBuildingSpriteName=void 0,i.speStartTime=void 0,i.speEndTime=void 0,i.name="FarmBuildingUpgradeView",i.url="ui/module/plant/FarmBuildingUpgradeView",i}i(e,t);var f=e.prototype;return f.onInit=function(){var t=this;this.resItems=new y(this,"container/resRoot"),this.resItems.init(K),this.time=0;var i=this.findChild("container/btnClose");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()})),this.txtName=this.findChildComponent("container/content/imgBg/imgNameBg/txtName",o),this.imgBuilding=this.findChildComponent("container/content/imgBuilding",d),this.txtDesc=this.findChildComponent("container/content/txtDesc",o),this.curGroup.node=this.findChild("container/content/cur"),this.curGroup.txtNowLevel=p.findChildComponent(this.curGroup.node,"txtNowLevel",o),this.curGroup.txtNextLevel=p.findChildComponent(this.curGroup.node,"txtNextLevel",o),this.maxGroup.node=this.findChild("container/content/max"),this.maxGroup.txtMaxLevel=p.findChildComponent(this.maxGroup.node,"txtMaxLevel",o);var e=this.findChildComponent("container/content/ScrollView",a);this.attrList=this.addUIList(e,z,!1),this.attrList.touchEvent=!1,this.upgradeGroup.max=this.findChild("container/content/upgrade/max"),this.upgradeGroup.btnHelpImg=this.findChildComponent("container/content/upgrade/time/btnHelp",d);var h=this.findChild("container/content/upgrade/time/btnHelp");this.addComponentCallbackListener(h,n.EventType.CLICK,(function(){IS(E).HasGuild()?IS(b).IsAskHelp(U.Farm,t.buildingCfgId)?S.showFlyTip(GetLanguage(200252)):IS(L).send_29_29(U.Farm,t.buildingCfgId):S.showFlyTip(GetLanguage(200251))}));var c=this.findChild("container/content/upgrade/time"),g=p.findChild(c,"btnAd");this.upgradeGroup.time={node:c,nodeTimeCount:p.findChild(c,"timeCount"),pbTime:p.findChildComponent(c,"timeCount/pbTime",s),txtTime:p.findChildComponent(c,"timeCount/txtTime",o),nodeBtnAd:g,nodeBtnAcc:p.findChild(c,"btnAcc"),txtAdDesc:p.findChildComponent(g,"txtAdDesc",o),txtAdCount:p.findChildComponent(g,"txtAdNum",o)},this.addComponentCallbackListener(g,n.EventType.CLICK,(function(){t.onAdClick()})),this.addComponentCallbackListener(this.upgradeGroup.time.nodeBtnAcc,n.EventType.CLICK,(function(){t.onAccClick()}));var f=p.findChild(g,"imgAd");f.active=1==I.ads_icon_is_show,this.loadIcon(f.getComponent(d),"common","common_icon_bofang"),this.upgradeGroup.time.txtAdCount.node.position=1==I.ads_icon_is_show?new r(19.7,-58.7,0):new r(0,-58.7,0);var m=this.findChild("container/content/upgrade/preview"),v=p.findChild(m,"btnUpgrade");this.upgradeGroup.preview={node:m,timeRoot:p.findChild(m,"time"),txtTime:p.findChildComponent(m,"time/timeGroup/txtTime",o),txtCondition:p.findChildComponent(m,"txtCondition",u),nodeBtnUpgrade:v,imgBtnUpgrade:v.getComponent(d),imgCost:p.findChildComponent(v,"imgIcon",d),txtCost:p.findChildComponent(v,"txtCost",o),outlineBtnUpgrade:p.findChildComponent(v,"Label",l),outlineCost:p.findChildComponent(v,"txtCost",l),imgCostBg:p.findChildComponent(v,"imgCostBg",d),nodeLock:p.findChild(m,"lock")},this.addComponentCallbackListener(this.upgradeGroup.preview.nodeBtnUpgrade,n.EventType.CLICK,(function(){t.onUpgradeClick()})),this.speStartTime=C.getLocalTimeToUTC8(2024,6,21,0,0,0),this.speEndTime=C.getLocalTimeToUTC8(2024,7,18,23,59,59)},f.registerUpdateHandler=function(){this.addEvent(V.FARM_BUILDING_UPDATE,this.onFarmBuildingUpdate,this),this.addEvent(V.ROLE_HOME_FARM_INFO_BACK,this.onRoleHomeFarmInfoBack,this),this.addEvent(T.GOODS_INFO_UPDATE,this.onGoodsInfoUpdate,this),this.addEvent(_.AD_INFO_UPDATE,this.onAdInfoUpdate,this),this.addEvent(V.FARM_BUILDING_UPGRADE_FINISH,this.onFarmBuildingUpgradeFinish,this),this.addEvent(w.GUILD_HELP_UPDATE,this.updateBtnHelp,this)},f.onAfterOpen=function(){IS(L).send_29_28(2),IS(L).send_29_32(),this.resItems.update(),this.time=0,this.buildingCfgId=this.openArgs[0],this.roleId=this.openArgs[1];var t=this.openArgs[2];this.isOther=this.roleId&&this.roleId!=IS(E).GetRoleId();var i=configFarm_buildings_details.getDataByKey(this.buildingCfgId);this.txtName.string=i.name,this.txtDesc.string=i.desc,this.setBuildingSprite(),this.updateBuildingInfo(this.isOther?t:IS(M).getBuildingInfoById(this.buildingCfgId)),this.resItems.node.active=!this.isOther,this.updateAdInfo()},f.tryShowUpgradingEffect=function(){this.upgradingEffect||(this.upgradingEffect=this.addUIEffect("prefab/ui-effect/MX_tx_zhuangyuan_jianzao",this.imgBuilding.node,-1))},f.removeShowUpgradingEffect=function(){this.upgradingEffect&&this.removeUIEffect(this.upgradingEffect)},f.updateBtnHelp=function(){!IS(E).HasGuild()||IS(b).IsAskHelp(U.Farm,this.buildingCfgId)?this.upgradeGroup.btnHelpImg.color=new h(128,128,128):this.upgradeGroup.btnHelpImg.color=new h(255,255,255)},f.updateBuildingInfo=function(t){var i=null!=t?t.level:0,e=configFarm_buildings.getDataByKeys("id",this.buildingCfgId,"level",i),n=configFarm_buildings.getDataByKeys("id",this.buildingCfgId,"level",i+1),o=x.isEmpty(n),d=null!=t?t.end_time:0;d>0?this.tryShowUpgradingEffect():this.removeShowUpgradingEffect(),this.curGroup.node.active=!o,this.maxGroup.node.active=o,o?this.maxGroup.txtMaxLevel.string="MAX":(this.curGroup.txtNowLevel.string=String(i),this.curGroup.txtNextLevel.string=String(i+1)),this.upgradeGroup.max.active=o;for(var a,s=this.getTotalEffectByLevelCfg(e),u=o?null:this.getTotalEffectByLevelCfg(n),l={},g=0;g<s.length;g++)l[a=s[g][0]]={},l[a].nowValue=s[g][1];if(null!=u)for(var f=0;f<u.length;f++)a=u[f][0],x.isEmpty(l[a])&&(l[a]={}),l[a].nextValue=u[f][1];this.isMaxLevel=o,this.attrIdToValue=l;var p=configFarm_buildings_details.getDataByKey(this.buildingCfgId);if(this.attrList.datas=p.effect||[],o)return this.upgradeGroup.time.node.active=!1,void(this.upgradeGroup.preview.node.active=!1);var I=this.upgradeGroup.time,_=this.upgradeGroup.preview,G=!this.isOther,B=G&&0==d,T=null!=t?t.start_time:0,y=null!=t?t.acc_time:0;I.node.active=!B,_.node.active=B,I.nodeBtnAd.active=G,I.nodeBtnAcc.active=G,I.nodeTimeCount.active=G,this.upgradeGroup.btnHelpImg.node.active=G;var S=!0;if(B){var L=n.cost,b=L[0][0],U=configGoods.getDataByKey(b);this.loadIcon(_.imgCost,U.icon_group,U.icon),_.txtCost.string=L[0][1];var w=IS(A).getGoodsCountByGoodsGtid(b)>=L[0][1];this.loadIcon(_.imgBtnUpgrade,"common",w?"common_ICON_anniu02lv":"common_ICON_zhihuianniu02",null,v.UI_ATLAS,!0),_.grayscale=!w,_.imgCostBg.grayscale=!w,_.txtCost.color=w?new h(255,255,255):new h(242,52,52),_.outlineBtnUpgrade.color=w?new h(41,65,21):new h(76,76,76),_.outlineCost.color=w?new h(41,65,21):new h(76,76,76),this.costEnough=w;var D=n.condition;if(null!=D){for(var E,F,V=[],N=0;N<D.length;N++){E=D[N][0],F=D[N][1];var R=IS(M).getBuildingInfoById(E);(null!=R?R.level:0)<F&&(S=!1,V.push({id:E,needLevel:F}))}var H="";if(!S){for(var O=0;O<V.length;O++){0!=O&&(H=c.formatStr("%s,",H));var k=configFarm_buildings_details.getDataByKey(V[O].id);H=m.formatStrWithMirrorDeal(GetLanguage(200496),H,k.name,V[O].needLevel)}H=c.formatStr("%s%s",H,GetLanguage(200101))}this.upgradeGroup.preview.txtCondition.string=c.formatStr("<bold><color=#544231>%s</color></bold>",H)}return _.nodeBtnUpgrade.active=S,_.nodeLock.active=!S,this.endTime=null,this.startTime=null,this.accTime=null,_.timeRoot.position=new r(-1.029,S?-21:0,0),void(_.txtTime.string=C.formatTimeForSecond(n.time))}this.endTime=d,this.startTime=T,this.accTime=y,this.updateRemainTime(),this.updateBtnHelp()},f.getTotalEffectByLevelCfg=function(t){var i=(null==t?void 0:t.effect)||[],e=(null==t?void 0:t.pvp_effect)||[],n=(null==t?void 0:t.pvp_effect1)||[];return[].concat(i,e,n)},f.updateAdInfo=function(){var t=configAds.getDataByKey(G.AD_FARM_BUILDINGS),i=IS(B).getAdRewardValue(G.AD_FARM_BUILDINGS);this.upgradeGroup.time.txtAdDesc.string=m.formatStrWithMirrorDeal(t.desc,i/60);var e=IS(B).getAdWatchCount(G.AD_FARM_BUILDINGS);this.upgradeGroup.time.txtAdCount.string=c.formatStr("(%s/%s)",t.times-e,t.times)},f.onUpdate=function(t){this.time=this.time+t,this.time>=1&&(this.time=0,this.updateRemainTime(),1==this.buildingCfgId&&this.setBuildingSprite())},f.updateRemainTime=function(){if(null!=this.endTime&&0!=this.endTime){var t=this.endTime-C.serverTime-this.accTime;this.upgradeGroup.time.txtTime.string=C.formatTimeForSecond(Math.max(0,t)),this.upgradeGroup.time.pbTime.progress=Math.min(1,t/(this.endTime-this.startTime)),t<0&&this.isOther&&IS(F).reqFarmInfo(this.roleId)}},f.setBuildingSprite=function(){if(1==this.buildingCfgId||2==this.buildingCfgId){if(this.speStartTime){var t=C.serverTime;if(t>=this.speStartTime&&t<=this.speEndTime){var i=1==this.buildingCfgId?"zy_icon_xiaohuangyadcr":"zy_icon_xiaohuangyaccj";this.loadIcon(this.imgBuilding,"farm_main",i)}}}else this.loadIcon(this.imgBuilding,"farm_main",P[this.buildingCfgId])},f.onBeforeClose=function(){this.curBuildingSpriteName=null,this.removeShowUpgradingEffect()},f.onDestroy=function(){},f.onFarmBuildingUpdate=function(t){this.isOther||this.buildingCfgId==t&&this.updateBuildingInfo(IS(M).getBuildingInfoById(this.buildingCfgId))},f.onRoleHomeFarmInfoBack=function(t){this.isOther&&this.roleId==t.role_id&&this.updateBuildingInfo(t.buildingIdToinfo[this.buildingCfgId])},f.onGoodsInfoUpdate=function(t,i){i==R&&this.resItems.update()},f.onAdInfoUpdate=function(t){t==G.AD_FARM_BUILDINGS&&this.updateAdInfo()},f.onFarmBuildingUpgradeFinish=function(t){this.isOther||t==this.buildingCfgId&&this.addUIEffect("prefab/ui-effect/MX_tx_zhuangyuan_jianzaochenggong",this.imgBuilding.node,1.1,new g(0,-110))},f.onAdClick=function(){IS(B).tryWatchAd(G.AD_FARM_BUILDINGS,this.buildingCfgId)},f.onAccClick=function(){var t=this,i=this.endTime-C.serverTime-this.accTime,e=IS(A).getGoodsCountByGoodsGtid(R);if(e<=0){var n=Math.ceil(i/k),o=m.formatStrWithMirrorDeal(GetLanguage(200497),n);S.showBoxTip({tip:o,title:GetLanguage(200048),todayTog:"acc_diamond_farm_building",func:function(i){if("type_yes"==i){if(n>IS(A).getGoodsCountByGoodsGtid(O))return void S.showFlyTip(GetLanguage(200257));IS(D).send_3_19(3,O,n,t.buildingCfgId)}}})}else{var d=Math.ceil(i/H),a=Math.min(e,d);uiMgr.openView("ItemUseView",R,a,(function(i,e){IS(D).send_3_19(3,i,e,t.buildingCfgId)}),a)}},f.onUpgradeClick=function(){this.costEnough?IS(F).reqHomeFarmBuildingLevUp(this.buildingCfgId):S.showFlyTip(GetLanguage(200498))},e}(N)),function(t){function e(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(i=t.call.apply(t,[this].concat(n))||this).txtAttr=void 0,i.curGroup={},i.maxGroup={},i}i(e,t);var n=e.prototype;return n.onInit=function(){this.txtAttr=p.findChildComponent(this.node,"txtAttr",o),this.curGroup.node=p.findChild(this.node,"hlayout/cur"),this.curGroup.txtCurValue=p.findChildComponent(this.curGroup.node,"txtCurValue",o),this.curGroup.txtNextValue=p.findChildComponent(this.curGroup.node,"txtNextValue",o),this.curGroup.imgUp=p.findChild(this.curGroup.node,"imgUp"),this.maxGroup.node=p.findChild(this.node,"hlayout/max"),this.maxGroup.txtMaxValue=p.findChildComponent(this.maxGroup.node,"txtMaxValue",o)},n.onRender=function(t,i){var e=configAttribute.getDataByKey(t);this.txtAttr.string=e.desc;var n=this.view;this.updateAttr(n.isMaxLevel,n.attrIdToValue)},n.updateAttr=function(t,i){if(this.data){var e=i[this.data]||{};if(this.curGroup.node.active=!t,this.maxGroup.node.active=t,1201==this.data){var n=configGoods_refresh.getDataByKey(101).max;t?e.nowValue+=n:(e.nowValue?e.nowValue+=n:e.nowValue=n,e.nextValue+=n)}t?this.maxGroup.txtMaxValue.string=IS(E).getAttrValueShow(this.data,e.nowValue||0):(this.curGroup.txtCurValue.string=IS(E).getAttrValueShow(this.data,e.nowValue||0),this.curGroup.txtNextValue.string=IS(E).getAttrValueShow(this.data,e.nextValue||0),this.curGroup.imgUp.active=this.curGroup.txtNextValue.string!=this.curGroup.txtCurValue.string)}},e}(f));e._RF.pop()}}}));
