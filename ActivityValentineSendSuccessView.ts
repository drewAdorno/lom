System.register("chunks:///_virtual/ActivityValentineSendSuccessView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,s,o;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,s=t.Label},null,function(t){o=t.BaseView}],execute:function(){i._RF.push({},"d933cCxbONECbOWLXQYdJF4","ActivityValentineSendSuccessView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).txtNum=void 0,e.txtPre=void 0,e.txtCur=void 0,e.txtPreFlower=void 0,e.name="ActivityValentineSendSuccessView",e.url="ui/module/valentine/ActivityValentineSendSuccessView",e}e(i,t);var o=i.prototype;return o.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()})),this.txtPreFlower=this.findChildComponent("view/desc/txtPre",s),this.txtNum=this.findChildComponent("view/desc/txtNum",s),this.txtPre=this.findChildComponent("view/desc/item/txtPre",s),this.txtCur=this.findChildComponent("view/desc/item/txtCur",s)},o.registerUpdateHandler=function(){},o.onAfterOpen=function(){var t=this.openArgs[0];this.txtPreFlower.string=t.old_give_flower,this.txtNum.string=t.give_flower,this.txtPre.string=t.old_value,this.txtCur.string=t.new_value},o.onBeforeClose=function(){},o.onDestroy=function(){},i}(o));i._RF.pop()}}}));

