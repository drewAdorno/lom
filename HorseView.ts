System.register("chunks:///_virtual/HorseView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./BaseTabView.ts","./UIDefine.ts","./CommonDefine.ts","./RoleDataCache.ts","./HorseDataChche.ts"],(function(e){"use strict";var t,n,i,s,o,a,c,r,h,u;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,i=e.Button},function(e){s=e.audioMgr},function(e){o=e.BaseTabView},function(e){a=e.PanelTabType,c=e.OpenFunction},function(e){r=e.CommonEventDefine},function(e){h=e.RoleDataCache},function(e){u=e.HorseDataCache}],execute:function(){n._RF.push({},"cee41KsSnhCVoUsYFB1bZeC","HorseView",void 0);e("default",function(e){t(o,e);var n=o.prototype;function o(){var t;return(t=e.call(this)||this).isActive=!1,t.name="HorseView",t.url="ui/module/horse/HorseView",t.tabTypes=[a.Horse_Upgrade,a.Horse_Enable,a.Horse_Skin,a.Horse_Rebuild],t}return n.setActive=function(e){this.isActive!=e&&(this.isActive=e,e?(this.trySetOpenType()||this.trySetDefaultOpenTab(),this.open()):this.close())},n.canShowType=function(e){return!(e==a.Horse_Rebuild&&!IS(h).CheckFuncOpen(c.FUNC_PARKING))},n.trySetDefaultOpenTab=function(){1==IS(u).checkSkinRP()?this.setIndex(a.Horse_Skin):1==IS(u).checkUpgradeRP()?this.setIndex(a.Horse_Upgrade):1==IS(u).checkEnableRP()?this.setIndex(a.Horse_Enable):this.setIndex(a.Horse_Upgrade)},n.onAfterOpenTab=function(){var e=this;s.playSound("common_jiemian"),this.addEvent(r.JUMP_TO_MAIN_VIEW_SELECT_TYPE,this.close,this),this.trySetDefaultOpenTab();var t=this.findChild("imgMask");this.addComponentCallbackListener(t,i.EventType.CLICK,(function(){e.close()}));var n=this.findChild("btnClose");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){e.close()})),this.setRedPoint(a.Horse_Skin,IS(u).checkSkinRP()),this.setRedPoint(a.Horse_Upgrade,IS(u).checkUpgradeRP()),this.setRedPoint(a.Horse_Enable,IS(u).checkEnableRP())},o}(o));n._RF.pop()}}}));
