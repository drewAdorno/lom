System.register("chunks:///_virtual/ActivityMergeCohesionUseView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ItemGrid.ts","./index57.ts","./BagControl.ts","./BagModel.ts","./MessageView.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,s,o,a,h,u,d,c;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,s=t.Label,o=t.EditBox},function(t){a=t.ItemGrid},null,function(t){h=t.default},function(t){u=t.BagModel},function(t){d=t.default},function(t){c=t.BaseView}],execute:function(){e._RF.push({},"f11b3qhWMlEFoxbg4SLTefQ","ActivityMergeCohesionUseView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).editBox=void 0,i.item=void 0,i.txtName=void 0,i.useNum=1,i.itemId=void 0,i.maxNum=void 0,i.callBack=void 0,i.name="ActivityMergeCohesionUseView",i.url="ui/module/activityMergeServers/ActivityMergeCohesionUseView",i}i(e,t);var c=e.prototype;return c.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("btnClose");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var h=this.findChild("view/btnUse");this.addComponentCallbackListener(h,n.EventType.CLICK,(function(){t.UseClick()}));var u=this.findChild("view/btnAdd");this.addComponentCallbackListener(u,n.EventType.CLICK,(function(){t.changeNum(1)}));var d=this.findChild("view/btnMinus");this.addComponentCallbackListener(d,n.EventType.CLICK,(function(){t.changeNum(-1)}));var c=this.findChild("view/btnAddTen");this.addComponentCallbackListener(c,n.EventType.CLICK,(function(){t.changeNum(10)}));var l=this.findChild("view/btnMinusTen");this.addComponentCallbackListener(l,n.EventType.CLICK,(function(){t.changeNum(-10)})),this.item=new a(this,this.findChild("view/item")),this.txtName=this.findChildComponent("view/item/txtName",s),this.editBox=this.findChildComponent("view/EditBox",o),this.addComponentCallbackListener(this.editBox.node,o.EventType.EDITING_DID_ENDED,(function(){var i=Number(t.editBox.string);(isNaN(i)||i<=1)&&(i=1),t.useNum=Math.floor(i),t.changeNum()}))},c.registerUpdateHandler=function(){},c.onAfterOpen=function(){var t;this.itemId=this.openArgs[0],this.maxNum=null!=(t=this.openArgs[1])?t:IS(u).getGoodsCountByGoodsGtid(this.itemId),this.callBack=this.openArgs[2],this.useNum=this.openArgs[3]||1;var i=configGoods.getDataByKey(this.itemId);i.quality;this.txtName.string=i.name,this.item.SetItemId(this.itemId),this.changeNum()},c.onBeforeClose=function(){},c.onDestroy=function(){},c.UseClick=function(){if(0!=this.useNum)if(IS(u).getGoodsCountByGoodsGtid(this.itemId)<this.useNum)d.showFlyTip(GetLanguage(200069));else{this.callBack?this.callBack(this.itemId,this.useNum):IS(h).reqUseGoods(this.itemId,this.useNum);var t=uiMgr.getView("ActivityMergeCohesionView");t&&t.showEffect(),this.close()}},c.changeNum=function(t){null!=t&&(this.useNum=this.useNum+t),this.useNum=Math.min(this.maxNum,Math.max(this.useNum,1)),this.editBox.string=String(this.useNum)},e}(c));e._RF.pop()}}}));

