System.register("chunks:///_virtual/ActivityFindIcon.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BaseView.ts"],(function(t){"use strict";var i,n,e,o,s,c,d,r,a;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy,e=t.Sprite,o=t.Widget,s=t.Button},null,function(t){c=t.default},function(t){d=t.default},function(t){r=t.ActivityEventDefine},function(t){a=t.BaseView}],execute:function(){n._RF.push({},"48c14TwMuhCnZ/kzAYySrpx","ActivityFindIcon",void 0);t("default",function(t){function n(){var i;return(i=t.call(this)||this).curId=0,i.icon=void 0,i.widget=void 0,i.name="ActivityFindIcon",i.url="ui/module/activity/ActivityFindIcon",i}i(n,t);var a=n.prototype;return a.onInit=function(){var t=this;this.icon=this.findChildComponent("icon",e),this.widget=this.findChildComponent("icon",o),this.addComponentCallbackListener(this.icon.node,s.EventType.CLICK,(function(){if(0!=t.curId){var i=configMoonfestival_search.getDataByKey(t.curId);IS(c).send_24_53(t.curId,i.type)}}))},a.registerUpdateHandler=function(){this.addEvent(r.OnActivityFindUpdate,this.updateInfo,this)},a.onAfterOpen=function(){this.curId=this.openArgs[0];var t=configMoonfestival_search.getDataByKey(this.curId);this.loadIcon(this.icon,"act_find",t.picture);var i=t.coordinate[0];0==i?(this.widget.isAlignTop=!1,this.widget.isAlignBottom=!1,this.widget.isAlignRight=!1,this.icon.node.setPosition(t.coordinate[1],t.coordinate[2])):1==i?(this.widget.isAlignTop=!0,this.widget.isAlignBottom=!1,this.widget.isAlignRight=!0,this.widget.top=t.coordinate[1],this.widget.right=t.coordinate[2]):2==i&&(this.widget.isAlignTop=!1,this.widget.isAlignBottom=!0,this.widget.isAlignRight=!0,this.widget.bottom=t.coordinate[1],this.widget.right=t.coordinate[2])},a.onBeforeClose=function(){this.curId=0},a.onDestroy=function(){},a.updateInfo=function(){var t=configMoonfestival_search.getDataByKey(this.curId),i=IS(d).getCurFind(t.type);this.curId!=i&&this.close()},n}(a));n._RF.pop()}}}));

