System.register("chunks:///_virtual/SeasonShipCrewView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts","./index57.ts","./SeasonDataCache.ts","./UIDefine.ts","./BaseTabView.ts"],(function(e){"use strict";var i,t,n,o,s,a,c;return{setters:[function(e){i=e.inheritsLoose},function(e){t=e.cclegacy,n=e.Button},function(e){o=e.audioMgr},null,function(e){s=e.SeasonDataCache},function(e){a=e.PanelTabType},function(e){c=e.BaseTabView}],execute:function(){t._RF.push({},"20adcoRTnhCvo4mxJinl1OM","SeasonShipCrewView",void 0);e("default",function(e){i(c,e);var t=c.prototype;function c(){var i;return(i=e.call(this)||this).isActive=!1,i.name="SeasonShipCrewView",i.url="ui/module/season/SeasonShipCrewView",i.tabTypes=[a.Season_Ship_Crew_Captain,a.Season_Ship_Crew_Sailor],i.fullScreen=!0,i.poolTime=3e3,i}return t.setActive=function(e){this.isActive!=e&&(this.isActive=e,e?(this.trySetOpenType()||this.trySetDefaultOpenTab(),this.open()):this.close())},t.onAfterOpenTab=function(){var e=this;o.playSound("common_jiemian");var i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){e.close()}));var t=this.findChild("btnClose");this.addComponentCallbackListener(t,n.EventType.CLICK,(function(){e.close()})),this.setRedPoint(a.Season_Ship_Crew_Sailor,IS(s).checkShipRoomRP())},c}(c));t._RF.pop()}}}));

