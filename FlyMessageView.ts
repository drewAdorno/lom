System.register("chunks:///_virtual/FlyMessageView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./BaseView.ts"],(function(t){"use strict";var o,i,n,e,s,c,a;return{setters:[function(t){o=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,e=t.Label,s=t.Sprite,c=t.Layout},null,function(t){a=t.BaseView}],execute:function(){i._RF.push({},"f6102zYWOJK9aBE7lECOI40","FlyMessageView",void 0);t("default",function(t){function i(){var o;return(o=t.call(this)||this).editBox=void 0,o.txtCost=void 0,o.pet_id=void 0,o.cost=void 0,o.limit=void 0,o.freeNode=void 0,o.pet_name=void 0,o.is_free=!1,o.rename_type=1,o.callback=void 0,o.txtBoxTipsContent=void 0,o.txtBoxTipsContentContent=void 0,o.costNode=void 0,o.costIcon=void 0,o.costLabel=void 0,o.name="FlyMessageView",o.url="ui/module/flypet/FlyMessageView",o}o(i,t);var a=i.prototype;return a.onInit=function(){var t=this,o=this.findChild("boxTips/imgMask");this.addComponentCallbackListener(o,n.EventType.CLICK,(function(){t.onMaskClick()})),this.txtBoxTipsContent=this.findChildComponent("boxTips/dialog/content/txtContent",e);var i=this.findChild("boxTips/dialog/content/buttons/btnCancel");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.onMaskClick()}));var a=this.findChild("boxTips/dialog/content/buttons/btnEnsure");this.addComponentCallbackListener(a,n.EventType.CLICK,(function(){t.callback&&t.callback(),t.close()})),this.costNode=this.findChild("boxTips/dialog/content/cost"),this.costIcon=this.findChildComponent("boxTips/dialog/content/cost/img",s),this.costLabel=this.findChildComponent("boxTips/dialog/content/cost/cost",e),this.dealMirrorLayout(this.findChildComponent("boxTips/dialog/content/cost",c))},a.onMaskClick=function(){this.close()},a.onAfterOpen=function(){var t,o,i=this.openArgs[0];this.callback=this.openArgs[1],this.txtBoxTipsContent.string=i;var n=null!=(t=this.openArgs[2])?t:0,e=null!=(o=this.openArgs[3])?o:0;if(this.costNode.active=n>0,n>0){var s=configGoods.getDataByKey(n);this.loadIcon(this.costIcon,s.icon_group,s.icon),this.costLabel.string=e+""}},a.registerUpdateHandler=function(){},a.onBeforeClose=function(){},a.updateData=function(){},a.onDestroy=function(){},i}(a));i._RF.pop()}}}));
