System.register("chunks:///_virtual/ActivityReverseDungeonResultView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./BaseView.ts"],(function(e){"use strict";var t,i,n,s,r,o;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e.Button,s=e.js,r=e.Sprite},null,function(e){o=e.BaseView}],execute:function(){i._RF.push({},"1af36xuRvNB14Bv66oXoAbl","ActivityReverseDungeonResultView",void 0);e("default",function(e){function i(){var t;return(t=e.call(this)||this).starItems=[],t.name="ActivityReverseDungeonResultView",t.url="ui/module/reverse/ActivityReverseDungeonResultView",t}t(i,e);var o=i.prototype;return o.onInit=function(){var e=this,t=this.findChild("imgMask");this.addComponentCallbackListener(t,n.EventType.CLICK,(function(){e.close()})),this.starItems=[];for(var i=1;i<=3;i++)this.starItems[i]=this.findChildComponent(s.formatStr("root/star/stars/star%s",i),r)},o.registerUpdateHandler=function(){},o.onAfterOpen=function(){for(var e=this.openArgs[0].update_info.v,t=1;t<=3;t++)this.starItems[t].grayscale=t>e},o.onBeforeClose=function(){uiMgr.openView("ActivityReverseView"),uiMgr.openView("ActivityReverseDungeonView")},o.onDestroy=function(){},i}(o));i._RF.pop()}}}));

