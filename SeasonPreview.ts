System.register("chunks:///_virtual/SeasonPreview.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./SeasonSceneControl.ts","./BaseView.ts"],(function(e){"use strict";var n,t,o,i,s;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,o=e.Button},null,function(e){i=e.default},function(e){s=e.BaseView}],execute:function(){t._RF.push({},"673c7oo93tHbKjukXsDRbj6","SeasonPreview",void 0);e("default",function(e){function t(){var n;return(n=e.call(this)||this).name="SeasonPreview",n.url="ui/module/season/SeasonPreview",n}n(t,e);var s=t.prototype;return s.onInit=function(){var e=this,n=this.findChild("btnClose");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){e.close()}));var t=this.findChild("btnGo");this.addComponentCallbackListener(t,o.EventType.CLICK,(function(){IS(i).reqEnter(),uiMgr.getOpenView("SeasonMapSceneView")||(uiMgr.openView("SeasonMapLoadView"),uiMgr.openView("SeasonMapSceneView")),e.close()}))},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){},s.onBeforeClose=function(){},s.onDestroy=function(){},t}(s));t._RF.pop()}}}));
