System.register("chunks:///_virtual/ActivityLoopyMusicGameConfirmView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./ActivityLoopyDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,n,e,o,s;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t.Button},null,function(t){o=t.ActivityLoopyEvent},function(t){s=t.BaseView}],execute:function(){n._RF.push({},"15f9fVveDlCepxKjYOi/NGp","ActivityLoopyMusicGameConfirmView",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).imgMask=void 0,i.btnEnsure=void 0,i.btnCancel=void 0,i.name="ActivityLoopyMusicGameConfirmView",i.url="ui/module/activityLoopy/ActivityLoopyMusicGameConfirmView",i}i(n,t);var s=n.prototype;return s.onInit=function(){var t=this;this.imgMask=this.findChild("imgMask"),this.btnEnsure=this.findChild("content/btnEnsure"),this.btnCancel=this.findChild("content/btnCancel"),this.addComponentCallbackListener(this.imgMask,e.EventType.CLICK,(function(){t.close(),normalEvent.emit(o.OnActivityLoopyMusicGameContinue)})),this.addComponentCallbackListener(this.btnEnsure,e.EventType.CLICK,(function(){uiMgr.getView("ActivityLoopyMusicGameView").destroy(),t.close()})),this.addComponentCallbackListener(this.btnCancel,e.EventType.CLICK,(function(){t.close(),normalEvent.emit(o.OnActivityLoopyMusicGameContinue)}))},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){},s.onBeforeClose=function(){},s.onDestroy=function(){},n}(s));n._RF.pop()}}}));
