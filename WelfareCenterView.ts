System.register("chunks:///_virtual/WelfareCenterView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./TimeUtil.ts","./index57.ts","./ChatDataCache.ts","./WelfareDataCache.ts","./WelfareDefine.ts","./UIDefine.ts","./BaseTabView.ts"],(function(e){"use strict";var t,a,n,i,r,f,s,l;return{setters:[function(e){t=e.inheritsLoose},function(e){a=e.cclegacy},function(e){n=e.default},null,function(e){i=e.ChatDataCache},function(e){r=e.WelfareDataCache},function(e){f=e.WelfareEvent},function(e){s=e.PanelTabType},function(e){l=e.BaseTabView}],execute:function(){a._RF.push({},"7d8c6QkMcdJI7e8pJ/H/YvG","WelfareCenterView",void 0);e("default",function(e){function a(){var t;return(t=e.call(this)||this).name="WelfareCenterView",t.url="ui/module/welfare/WelfareCenterView",t.UpdateTabType(),t}t(a,e);var l=a.prototype;return l.trySetDefaultOpenTab=function(){this.openType=s.Welfare_Share,this.tabTypes.includes(this.openType)||(this.openType=s.Welfare_Bind)},l.registerUpdateHandler=function(){this.addEvent(f.WELFARE_RED_UPDATE,this.UpdateTabRed),this.addEvent(f.WELFARE_VIP_UPDATE,this.UpdateTabType)},l.onAfterOpenTab=function(){this.UpdateTabRed()},l.UpdateTabRed=function(){this.setRedPoint(s.Welfare_Bind,IS(r).bindRedPoint),this.setRedPoint(s.Welfare_Share,IS(r).fbRedPoint),IS(i).GetGmOpenInfo().is_open&&this.setRedPoint(s.Welfare_VIP,IS(r).VIPRedPoint)},l.UpdateTabType=function(){var e=n.serverTime>=1718899200&&n.serverTime<=1721232e3;IS(i).GetGmOpenInfo().is_open?this.tabTypes=e?[s.Welfare_Share,s.Welfare_Bind,s.Welfare_VIP,s.Welfare_Jump]:[s.Welfare_Share,s.Welfare_Bind,s.Welfare_VIP]:this.tabTypes=e?[s.Welfare_Share,s.Welfare_Bind,s.Welfare_Jump]:[s.Welfare_Share,s.Welfare_Bind],this.trySetDefaultOpenTab()},a}(l));a._RF.pop()}}}));

