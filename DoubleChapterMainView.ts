System.register("chunks:///_virtual/DoubleChapterMainView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./BaseTabView.ts","./ChapterDataCache.ts","./ChapterDefine.ts","./UIDefine.ts"],(function(e){"use strict";var t,n,a,i,o,r,s;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,a=e.Button},null,function(e){i=e.BaseTabView},function(e){o=e.ChapterDataCache},function(e){r=e.ChapterEventDefine},function(e){s=e.PanelTabType}],execute:function(){n._RF.push({},"57283maRIdE3YC9ofzFWdNE","DoubleChapterMainView",void 0);e("default",function(e){function n(){var t;return(t=e.call(this)||this).isActive=!1,t.parentView=void 0,t.name="DoubleChapterMainView",t.url="ui/module/dungeon/DoubleChapterMainView",t.tabTypes=[s.DoubleChapter_Teammate,s.DoubleChapter_Enter,s.DoubleChapter_Help],t}t(n,e);var i=n.prototype;return i.registerUpdateHandler=function(){this.addEvent(r.DOUBLE_CHAPTER_ENTRANCE_INFO_BACK,this.UpdateTabRed,this),this.addEvent(r.DOUBLE_CHAPTER_REWARD_UPDATE,this.UpdateTabRed,this)},i.onInit=function(){var t=this;e.prototype.onInit.call(this);var n=this.findChild("imgMask");this.addComponentCallbackListener(n,a.EventType.CLICK,(function(){t.close()}));var i=this.findChild("container/content/btnClose");this.addComponentCallbackListener(i,a.EventType.CLICK,(function(){t.close()}))},i.UpdateTabRed=function(){this.setRedPoint(s.DoubleChapter_Enter,IS(o).getDoubleChapterRewardRedNum())},i.trySetDefaultOpenTab=function(){this.setIndex(s.DoubleChapter_Enter)},i.onAfterOpenTab=function(){this.trySetDefaultOpenTab(),this.UpdateTabRed()},i.onBeforeClose=function(){e.prototype.onBeforeClose.call(this)},n}(i));n._RF.pop()}}}));

