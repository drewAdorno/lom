System.register("chunks:///_virtual/ItemPreviewView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./ItemIcon.ts","./ArtifactControl.ts","./ArtifactDataCache.ts","./BagDefine.ts","./HorseDataChche.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,s,a,l,c,h,r,f,d,g,k,u,m,C;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.Sprite,s=t.Label,a=t.Vec3,l=t.UITransform,c=t.Node,h=t.js,r=t.sys},function(t){f=t.default},null,function(t){d=t.IconAseetType},function(t){g=t.default},function(t){k=t.ArtifactDataCache},function(t){u=t.GoodsType},function(t){m=t.HorseDataCache},function(t){C=t.BaseView}],execute:function(){i._RF.push({},"64ded/jRX5M47To24UgCLyT","ItemPreviewView",void 0);var y=1,T=2,p=3;t("default",function(t){function i(){var e,i,n;return(n=t.call(this)||this).skillImgFrame=void 0,n.skillImgIcon=void 0,n.skillTxtName=void 0,n.skillTxtDesc=void 0,n.nodeShowTxtName=void 0,n.changeTxtBase=void 0,n.changeTxtNext=void 0,n.changeTxtEffect=void 0,n.changeNodeNextAttr=void 0,n.changeNodeNextArr=void 0,n.txtTitle=void 0,n.artifactEffectID=0,n.skinType=void 0,n.skinIDSel=void 0,n.skillTitleName=void 0,n.effectTitleName=void 0,n.iconOriPos=void 0,n.skinTypeInfo=((e={})[y]={cfg:configArtifact_skin,cfg_idKey:"artifact_id",baseCfg:configArtifact,dataCache:IS(k),icon:null,skillTitle:GetLanguage(201341),effectTitle:GetLanguage(201342),titleLanguageID:999100083},e[T]={baseCfg:configMount,cfg:configMount_skin,cfg_idKey:"mount_id",dataCache:IS(m),icon:null,skillTitle:GetLanguage(201343),effectTitle:GetLanguage(201344),titleLanguageID:999100084},e[p]={baseCfg:configBack_decoration,cfg:configBack_skin,cfg_idKey:"back_id",dataCache:IS(m),icon:null,skillTitle:GetLanguage(400708),effectTitle:GetLanguage(400709),titleLanguageID:600002163},e),n.itemTypeToType=((i={})[u.Artifact]=y,i[u.Mount]=T,i[u.Wing]=p,i),n.name="ItemPreviewView",n.url="ui/module/common/ItemPreviewView",n.poolTime=3e3,n}e(i,t);var C=i.prototype;return C.onInit=function(){var t=this;this.addComponentCallbackListener(this.findChild("imgMask"),n.EventType.CLICK,(function(){t.close()})),this.addComponentCallbackListener(this.findChild("bg/btnClose"),n.EventType.CLICK,(function(){t.close()})),this.skillImgFrame=this.findChildComponent("root/nodeSkill/Frame",o),this.skillImgIcon=this.findChildComponent("root/nodeSkill/Icon",o),this.skillTxtName=this.findChildComponent("root/nodeSkill/txtName",s),this.skillTxtDesc=this.findChildComponent("root/nodeSkill/ScrollView/view/content/item",s),this.skinTypeInfo[y].icon=this.findChild("root/nodeShow/Artifacticon"),this.skinTypeInfo[T].icon=this.findChild("root/nodeShow/HorseIcon"),this.skinTypeInfo[p].icon=this.findChild("root/nodeShow/WingIcon");var e=this.skinTypeInfo[p].icon;this.iconOriPos=new a(e.position.x,e.position.y,0),this.nodeShowTxtName=this.findChildComponent("root/nodeShow/bgName/txtName",s),this.changeTxtBase=this.findChildComponent("root/nodeChange/txtBase",s),this.changeTxtNext=this.findChildComponent("root/nodeChange/txtNext",s),this.changeTxtEffect=this.findChildComponent("root/nodeChange/txtEffect",s),this.changeNodeNextAttr=this.findChild("root/nodeChange/txtNext"),this.changeNodeNextArr=this.findChild("root/nodeChange/Sprite"),this.effectTitleName=this.findChildComponent("root/nodeChange/common_ui_xiaotidi/txtName",s),this.skillTitleName=this.findChildComponent("root/nodeSkill/common_ui_xiaotidi/txtName",s),this.txtTitle=this.findChildComponent("root/title/txtTitle",s),this.addComponentCallbackListener(this.findChild("root/previewBtn"),n.EventType.CLICK,(function(){if(t.skinType==T||t.skinType==p){var e=configGoods.getDataByKey(t.openArgs[0]);uiMgr.openView("ItemMountPreviewView",t.skinIDSel,e.type)}else IS(g).previewBattle(t.skinIDSel)}));var i=this.findChild("root/nodeSkill/ScrollView/view/content/item"),h=this.findChildComponent("root/nodeSkill/ScrollView/view/content",l);i.on(c.EventType.SIZE_CHANGED,(function(){h.height=i.getComponent(l).height}))},C.onAfterOpen=function(){var t=this.openArgs[0],e=configGoods.getDataByKey(t);this.skinIDSel=e.effect[0],this.skinType=this.itemTypeToType[e.type],this.refreshAll()},C.refreshAll=function(){this.refreshArtifactShow(),this.refreshArtifactSkill(),this.refreshArtifactAttr()},C.registerUpdateHandler=function(){},C.refreshArtifactSkill=function(){var t=this.skinTypeInfo[this.skinType];this.skillTitleName.string=t.skillTitle;var e=t.cfg.getDataByKeys(t.cfg_idKey,this.skinIDSel,"skin_level",t.dataCache.getSkinLevelByID(this.skinIDSel));0==e.skin_skill.length&&(e=t.cfg.getDataByKeys(t.cfg_idKey,this.skinIDSel,"skin_level",t.dataCache.getSkinLevelByID(this.skinIDSel)+1));var i=configSkill.getDataByKey(e.skin_skill[0][0]);this.loadIcon(this.skillImgFrame,"icon_skill",h.formatStr("common_ICON_jinengkuang0%s",i.quality)),this.loadIcon(this.skillImgIcon,"icon_skill",i.icon,null,d.ICON_SPRITE),this.skillTxtName.string=i.name;var n=configSkill_level.getDataByKeys("id",e.skin_skill[0][0],"level",e.skin_skill[0][1]);this.skillTxtDesc.string=f.formatStr.apply(f,[n.desc].concat(n.desc_parm))},C.refreshArtifactShow=function(){var t=this.skinTypeInfo[this.skinType];this.txtTitle.string=GetLanguage(t.titleLanguageID),this.removeUIEffect(this.artifactEffectID),this.artifactEffectID=this.addUIEffect(t.baseCfg.getDataByKey(this.skinIDSel).path,t.icon,-1,null,1,(function(t){r.uiMirror&&(t.dir=-1)}));var e=t.baseCfg.getDataByKey(this.skinIDSel);this.nodeShowTxtName.string=e.name,this.skinType==p&&(t.icon.position=new a(this.iconOriPos.x,0!=e.back_location_adjust?e.back_location_adjust:this.iconOriPos.y,0))},C.refreshArtifactAttr=function(){var t=this.skinTypeInfo[this.skinType];this.effectTitleName.string=t.effectTitle;var e=t.cfg.getDataByKeys(t.cfg_idKey,this.skinIDSel,"skin_level",t.dataCache.getSkinLevelByID(this.skinIDSel)),i=t.cfg.getDataByKeys(t.cfg_idKey,this.skinIDSel,"skin_level",t.dataCache.getSkinLevelByID(this.skinIDSel)+1);null==e.expend||0==e.expend.length?(this.changeTxtEffect.string=configAttribute.getDataByKey(Number(e.attr[0][0])).name+":",this.changeTxtBase.string=e.attr[0][1]/100+"%",this.changeNodeNextAttr.active=!1,this.changeNodeNextArr.active=!1):(this.changeNodeNextAttr.active=!0,this.changeNodeNextArr.active=!0,this.changeTxtEffect.string=configAttribute.getDataByKey(Number(i.attr[0][0])).name+":",null==e.attr||0==e.attr.length?(this.changeTxtBase.string="0%",this.changeTxtNext.string=i.attr[0][1]/100+"%"):(this.changeTxtBase.string=e.attr[0][1]/100+"%",this.changeTxtNext.string=i.attr[0][1]/100+"%"))},C.onBeforeClose=function(){},C.onDestroy=function(){},i}(C));i._RF.pop()}}}));

