System.register("chunks:///_virtual/ActivityStrategyConfirmView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./BaseView.ts"],(function(t){"use strict";var n,i,e,o,c,s;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy,e=t.Button,o=t.Label},function(t){c=t.default},null,function(t){s=t.BaseView}],execute:function(){i._RF.push({},"86f1awpIRdCD67XbCj6/VdT","ActivityStrategyConfirmView",void 0);t("default",function(t){function i(){var n;return(n=t.call(this)||this).cb=void 0,n.txtDesc=void 0,n.name="ActivityStrategyConfirmView",n.url="ui/module/ActivityStrategy/ActivityStrategyConfirmView",n}n(i,t);var s=i.prototype;return s.onInit=function(){var t=this,n=this.findChild("imgMask");this.addComponentCallbackListener(n,e.EventType.CLICK,(function(){t.onMaskClick()}));var i=this.findChild("content/btnCancel");this.addComponentCallbackListener(i,e.EventType.CLICK,(function(){t.onCancelClick()}));var c=this.findChild("content/btnEnsure");this.addComponentCallbackListener(c,e.EventType.CLICK,(function(){t.onEnsureClick()})),this.txtDesc=this.findChildComponent("content/desc",o)},s.registerUpdateHandler=function(){},s.onMaskClick=function(){this.cb&&this.cb(0),this.close()},s.onAfterOpen=function(){var t=this.openArgs[0],n=t.goodsId,i=configGoods.getDataByKey(n);this.txtDesc.string=c.formatStr(t.desc1,i.name,t.num),this.cb=t.cb},s.onBeforeClose=function(){this.cb=null},s.onDestroy=function(){},s.onCancelClick=function(){this.cb&&this.cb(0),this.close()},s.onEnsureClick=function(){this.cb&&this.cb(1),this.close()},i}(s));i._RF.pop()}}}));
