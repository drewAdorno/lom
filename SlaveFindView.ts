System.register("chunks:///_virtual/SlaveFindView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./RoleDefine.ts","./BaseTabView.ts","./UIDefine.ts"],(function(e){"use strict";var t,n,i,o,s,a;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,i=e.Button},null,function(e){o=e.RoleRedPointSystemEnum},function(e){s=e.BaseTabView},function(e){a=e.PanelTabType}],execute:function(){n._RF.push({},"c9081eOOtlLgrRYhxZCWnyV","SlaveFindView",void 0);e("default",function(e){t(s,e);var n=s.prototype;function s(){var t;return(t=e.call(this)||this).isActive=!1,t.parentView=void 0,t.nodeSubRoot=void 0,t.name="SlaveFindView",t.url="ui/module/slave/SlaveFindView",t.tabTypes=[a.Slave_Search,a.Slave_Friend,a.Slave_Ranking],t}return n.setActive=function(e){this.isActive!=e&&(this.isActive=e,e?this.open(null):this.close())},n.onInit=function(){var t=this;e.prototype.onInit.call(this),this.nodeSubRoot=this.findChild("container/content/nodeSubRoot");var n=this.findChild("bottom/btnClose");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){t.close()}))},n.registerUpdateHandler=function(){},n.UpdateTabRed=function(){},n.onRoleRedDetailUpdate=function(e){e==o.System_Slave&&this.UpdateTabRed()},n.onAfterOpenTab=function(){},s}(s));n._RF.pop()}}}));
