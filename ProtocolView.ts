System.register("chunks:///_virtual/ProtocolView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameLoadingView.ts","./StringUtil.ts","./index57.ts","./UIDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,n,o,i,r,s,c,l,u;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t.Button,i=t.sys,r=t.RichText},function(t){s=t.GameLoadingView},function(t){c=t.default},null,function(t){l=t.ViewType},function(t){u=t.BaseView}],execute:function(){n._RF.push({},"89519IbAJBEsYR8ubTsaw4w","ProtocolView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).txtDesc=void 0,e.name="ProtocolView",e.url="ui/module/login/ProtocolView",e.viewType=l.TopView,e}e(n,t);var u=n.prototype;return u.onInit=function(){var t=this,e=this.findChild("bg/btnAgree");this.addComponentCallbackListener(e,o.EventType.CLICK,(function(){s.instance.show(),i.localStorage.setItem("ShowProtol","1"),loginControl.requestServerSwitch((function(t){t&&loginControl.checkSdkLoginCenterServer()})),t.close()})),this.txtDesc=this.findChildComponent("bg/desc",r),this.txtDesc.onclicked=function(t,e){uiMgr.openView("ProtocolDescView",e)}},u.registerUpdateHandler=function(){},u.onAfterOpen=function(){s.instance.close();var t=c.formatStrWithMirrorDeal(GetLanguage(201408));this.txtDesc.string=t},u.onBeforeClose=function(){},u.onDestroy=function(){},n}(u));n._RF.pop()}}}));
