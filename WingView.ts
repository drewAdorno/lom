System.register("chunks:///_virtual/WingView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./index57.ts","./CommonDefine.ts","./WingDataCache.ts","./WingDefine.ts","./UIDefine.ts","./BaseTabView.ts"],(function(e){"use strict";var t,n,i,s,o,a,r,h,c;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,i=e.Button},function(e){s=e.audioMgr},null,function(e){o=e.CommonEventDefine},function(e){a=e.WingDataCache},function(e){r=e.WingEvent},function(e){h=e.PanelTabType},function(e){c=e.BaseTabView}],execute:function(){n._RF.push({},"b19a6D2yhVCfKSexajsL7Dz","WingView",void 0);e("default",function(e){function n(){var t;return(t=e.call(this)||this).isActive=!1,t.parentView=void 0,t.name="WingView",t.url="ui/module/wing/WingView",t.tabTypes=[h.Wing_Upgrade,h.Wing_Talent,h.Wing_Skin],t}t(n,e);var c=n.prototype;return c.registerUpdateHandler=function(){this.addEvent(o.JUMP_TO_MAIN_VIEW_SELECT_TYPE,this.close,this),this.addEvent(r.TYPE_WING_FEATURE_RED_CHANGE,this.RefreshRed,this),this.addEvent(r.TYPE_WING_TALENT_RED_CHANGE,this.RefreshRed,this),this.addEvent(r.TYPE_WING_SKIN_RED_CHANGE,this.RefreshRed,this)},c.canShowType=function(e){return!0},c.setActive=function(e){this.isActive!=e&&(this.isActive=e,e?(this.trySetOpenType()||this.trySetDefaultOpenTab(),this.open()):this.close())},c.RefreshRed=function(){this.setRedPoint(h.Wing_Upgrade,IS(a).GetWingUpgradRed()),this.setRedPoint(h.Wing_Talent,IS(a).GetWingTalentRed()),this.setRedPoint(h.Wing_Skin,IS(a).GetSkinRed())},c.trySetDefaultOpenTab=function(){},c.onAfterOpen=function(){this.trySetOpenType(),e.prototype.onAfterOpen.call(this)},c.onAfterOpenTab=function(){var e=this;s.playSound("common_jiemian"),this.trySetDefaultOpenTab();var t=this.findChild("imgMask");this.addComponentCallbackListener(t,i.EventType.CLICK,(function(){e.close()}));var n=this.findChild("btnClose");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){e.close()})),this.RefreshRed()},n}(c));n._RF.pop()}}}));
