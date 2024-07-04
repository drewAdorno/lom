System.register("chunks:///_virtual/ActivityStrategySkillInfoView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./EquipModel.ts","./ActivityDefine.ts","./ActivityStrategyControl.ts","./ActivityStrategyDataCache.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,l,s,a,c,r,h,d,f,v;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.math,o=t.Button,l=t.Sprite,s=t.Label,a=t.js},function(t){c=t.default},null,function(t){r=t.EquipModel},function(t){h=t.ActivityEventDefine},function(t){d=t.default},function(t){f=t.default},function(t){v=t.BaseView}],execute:function(){e._RF.push({},"f1e84dIh+xIu4WeFN+FaTpf","ActivityStrategySkillInfoView",void 0);n.Vec3,n.Vec2,t("default",function(t){function e(){var i;return(i=t.call(this)||this).imgFrame=void 0,i.imgIcon=void 0,i.txtName=void 0,i.txtLevel=void 0,i.txtQuality=void 0,i.txtDesc=void 0,i.txtCD=void 0,i.txtSkillHaveDesc=void 0,i.oprate=void 0,i.btnWear=void 0,i.btnRemove=void 0,i.skillId=void 0,i.skillCfg=void 0,i.name="ActivityStrategySkillInfoView",i.url="ui/module/ActivityStrategy/ActivityStrategySkillInfoView",i}i(e,t);var n=e.prototype;return n.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,o.EventType.CLICK,(function(){t.onMaskClick()})),this.imgFrame=this.findChildComponent("content/top/imgFrame",l),this.imgIcon=this.findChildComponent("content/top/imgIcon",l),this.txtName=this.findChildComponent("content/top/txtName",s),this.txtLevel=this.findChildComponent("content/top/level/txtLevel",s),this.txtQuality=this.findChildComponent("content/top/txtQuality",s),this.txtDesc=this.findChildComponent("content/attr/txtDesc",s),this.txtCD=this.findChildComponent("content/attr/txtCD",s),this.txtSkillHaveDesc=this.findChildComponent("content/attr/attrHave/txtDesc",s),this.oprate=this.findChild("content/oprate"),this.btnWear=this.findChild("content/oprate/btnWear"),this.addComponentCallbackListener(this.btnWear,o.EventType.CLICK,(function(){t.onWearClick()})),this.btnRemove=this.findChild("content/oprate/btnRemove"),this.addComponentCallbackListener(this.btnRemove,o.EventType.CLICK,(function(){t.onRemoveClick()}))},n.registerUpdateHandler=function(){this.addEvent(h.OnStrategySkillUpdate,this.onSkillInfoUpdate,this)},n.onAfterOpen=function(){this.skillId=this.openArgs[0],this.skillCfg=configSkill.getDataByKey(this.skillId),this.showBaseInfo(),this.updateSkillInfo()},n.showBaseInfo=function(){this.loadIcon(this.imgFrame,"icon_skill",a.formatStr("common_ICON_jinengkuang0%s",this.skillCfg.quality)),this.loadIcon(this.imgIcon,"icon_skill",this.skillCfg.icon),this.txtName.string=this.skillCfg.name;var t=IS(r).getEquipQualityNameAndColor(this.skillCfg.quality);this.txtQuality.string=t.nameStr,this.txtQuality.color=t.nameColor,this.txtCD.string=String(Math.ceil(this.skillCfg.maxPower/this.skillCfg.powerRecovery))},n.updateSkillInfo=function(){var t=IS(f).getSkillInfoBySkillId(this.skillId),i=t.skill_lv;this.txtLevel.string=a.formatStr("Lv.%s",i);var e=configSkill_level.getDataByKeys("id",this.skillId,"level",i);this.txtDesc.string=c.formatStr.apply(c,[e.desc].concat(e.desc_parm)),this.txtSkillHaveDesc.string=c.formatStr.apply(c,[e.ownDesc].concat(e.ownDesc_parm)),this.btnWear.active=0==t.pos_id,this.btnRemove.active=0!=t.pos_id},n.onBeforeClose=function(){},n.onDestroy=function(){},n.onSkillInfoUpdate=function(t){t==this.skillId&&this.updateSkillInfo()},n.onWearClick=function(){var t=IS(f).getSkillEmptyPos();if(null!=t)return IS(d).reqActStrategyTabSkill([{k:t,v:this.skillId}]),void this.close();normalEvent.emit(h.OnStrategySkillSelectWear,this.skillId),this.close()},n.onRemoveClick=function(){var t=IS(f).getSkillInfoBySkillId(this.skillId).pos_id;IS(d).reqActStrategyTabSkill([{k:t,v:0}]),this.close()},n.onMaskClick=function(){this.close()},e}(v));e._RF.pop()}}}));

