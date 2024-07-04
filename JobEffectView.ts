System.register("chunks:///_virtual/JobEffectView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./V2.ts","./StorageUtil.ts","./index57.ts","./ActivityDefine.ts","./ActivityStrategyDataCache.ts","./EquipModel.ts","./RoleDataCache.ts","./RoleDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,o,i,n,s,r,c,a,f,u,d,h;return{setters:[function(t){e=t.inheritsLoose,o=t.regeneratorRuntime},function(t){i=t.cclegacy,n=t.sys},function(t){s=t.V2},function(t){r=t.default},null,function(t){c=t.ActivityType},function(t){a=t.default},function(t){f=t.EquipModel},function(t){u=t.RoleDataCache},function(t){d=t.PlayerAttr},function(t){h=t.BaseView}],execute:function(){i._RF.push({},"3f9b32wz3NIB7S2DdZfT1V1","JobEffectView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).effTop=void 0,e.model=void 0,e.effDi=void 0,e.actType=void 0,e.name="JobEffectView",e.url="ui/module/role/JobEffectView",e}e(i,t);var h=i.prototype;return h.onInit=function(){this.effTop=this.findChild("effTop"),this.model=this.findChild("model"),this.effDi=this.findChild("effDi")},h.registerUpdateHandler=function(){},h.onAfterOpen=function(){var t=configJobs.getDataByKey(this.openArgs[0]),e=IS(u).GetRoleId(),o=""==r.get("JobSelectRecord"+e,!1)?[]:r.get("JobSelectRecord"+e,!0);o[t.change_times]=!0,r.set("JobSelectRecord"+e,o);this.openArgs[1];this.actType=this.openArgs[4];IS(f).getShowEquipCfgIdByLocation(2),IS(f).getShowEquipCfgIdByLocation(3);var i=IS(u).GetRoleAttr(d.ROLE_ATTR_GENDER);this.actType==c.Strategy&&(IS(a).getShowEquipCfgIdByLocation(1),IS(a).getShowEquipCfgIdByLocation(2),IS(a).getShowEquipCfgIdByLocation(3));var h=this.openArgs[3],g=this.addUnitModel({job:this.openArgs[0],dressId:9,gender:i,weapon:0,ornaments:0,face:0,color:h,parent:this.model,shenqi:0},s.ZERO,1.5);n.uiMirror&&(this.getUnitModel(g).dir=-1),this.startCoroutine(this.waitEffect(g))},h.waitEffect=o().mark((function t(e){var i,r,h;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return IS(f).getShowEquipCfgIdByLocation(1),IS(f).getShowEquipCfgIdByLocation(2),IS(f).getShowEquipCfgIdByLocation(3),this.actType==c.Strategy&&(IS(a).getShowEquipCfgIdByLocation(1),IS(a).getShowEquipCfgIdByLocation(2),IS(a).getShowEquipCfgIdByLocation(3)),i=IS(u).GetRoleAttr(d.ROLE_ATTR_GENDER),t.next=7,coroutine.wait(3);case 7:return this.removeUnitModel(e),r=configJobs.getDataByKey(this.openArgs[2]).skin,h=this.addUnitModel({job:this.openArgs[2],dressId:9,gender:i,weapon:0,ornaments:0,face:0,color:r,parent:this.model,shenqi:0},s.ZERO,1.5),n.uiMirror&&(this.getUnitModel(h).dir=-1),t.next=13,coroutine.wait(2.3);case 13:uiMgr.openView("JobUpgradeView",this.openArgs[2],this.openArgs[0]),this.close();case 15:case"end":return t.stop()}}),t,this)})),h.onBeforeClose=function(){},h.onDestroy=function(){},i}(h));i._RF.pop()}}}));

