System.register("chunks:///_virtual/GoodsGetView2.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./BaseView.ts"],(function(o){"use strict";var n,t,e,i,s;return{setters:[function(o){n=o.inheritsLoose},function(o){t=o.cclegacy,e=o.Button,i=o.Sprite},null,function(o){s=o.BaseView}],execute:function(){t._RF.push({},"7ebe9oOrT5K8LJbYmfCDjGi","GoodsGetView2",void 0);o("default",function(o){function t(){var n;return(n=o.call(this)||this).imgIcon=void 0,n.name="GoodsGetView2",n.url="ui/module/common/GoodsGetView2",n}n(t,o);var s=t.prototype;return s.onInit=function(){var o=this,n=this.findChild("imgMask");this.addComponentCallbackListener(n,e.EventType.CLICK,(function(){o.close()})),this.imgIcon=this.findChildComponent("root/content/item/imgIcon",i)},s.registerUpdateHandler=function(){},s.onAfterOpen=function(){var o=configGoods.getDataByKey(this.openArgs[0]);this.loadIcon(this.imgIcon,o.icon_group,o.icon)},s.onBeforeClose=function(){},s.onDestroy=function(){},t}(s));t._RF.pop()}}}));
