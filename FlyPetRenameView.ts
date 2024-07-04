System.register("chunks:///_virtual/FlyPetRenameView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlatformUtil.ts","./StringUtil.ts","./index57.ts","./ConfigGlobal.ts","./BagModel.ts","./MessageView.ts","./FlyPetControl.ts","./FlyPetDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,s,a,l,d,h,r,c,u,f,p;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.EditBox,s=t.Sprite,a=t.Label},function(t){l=t.PlatformUtil},function(t){d=t.default},null,function(t){h=t.ConfigGlobal},function(t){r=t.BagModel},function(t){c=t.default},function(t){u=t.default},function(t){f=t.default},function(t){p=t.BaseView}],execute:function(){i._RF.push({},"b1526VL0exJn4GXVQvvOojS","FlyPetRenameView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).btnDes=void 0,e.editBox=void 0,e.txtCost=void 0,e.pet_id=void 0,e.cost=void 0,e.limit=void 0,e.costNode=void 0,e.freeNode=void 0,e.pet_name=void 0,e.costIcon=void 0,e.is_free=!1,e.rename_type=1,e.name="FlyPetRenameView",e.url="ui/module/flypet/FlyPetRenameView",e}e(i,t);var p=i.prototype;return p.onInit=function(){var t=this;this.costNode=this.findChild("cost"),this.freeNode=this.findChild("free");var e=this.findChild("imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.onMaskClick()})),this.editBox=this.findChildComponent("EditBox",o),this.costIcon=this.findChildComponent("cost/Sprite",s),this.txtCost=this.findChildComponent("cost",a),this.addComponentCallbackListener(this.editBox.node,o.EventType.EDITING_DID_BEGAN,(function(){l.UpdateCurrentEditBox(t.editBox)})),this.btnDes=this.findChildComponent("btnRename/Label",a);var i=this.findChild("btnRename");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.onRenameClick()}))},p.onRenameClick=function(){var t=this,e=this.editBox.string,i=e.length,n=IS(r).getGoodsCountByGoodsGtid(this.cost[0]);i<this.limit[0]||i>this.limit[1]?c.showFlyTip(GetLanguage(200070)):e==this.pet_name?c.showFlyTip(GetLanguage(200541)):isNaN(Number(e))?e.includes(GetLanguage(200449))?c.showFlyTip(GetLanguage(200327)):1==this.rename_type&&n<this.cost[1]&&!this.is_free?c.showFlyTip(GetLanguage(200069)):GlobalDefine.ENABLE_SDK?sdkControl.checkStr(e,(function(e,i){1==i&&(1==t.rename_type?(IS(u).send_66_9(t.pet_id,e),t.close()):(IS(u).send_66_29(t.pet_id,e),t.close()))})):1==this.rename_type?(IS(u).send_66_9(this.pet_id,e),this.close()):(IS(u).send_66_29(this.pet_id,e),this.close()):c.showFlyTip(GetLanguage(200327))},p.onMaskClick=function(){this.close()},p.onAfterOpen=function(){var t,e;this.rename_type=null!=(t=this.openArgs[2])?t:1,this.pet_id=this.openArgs[0],this.freeNode.active=!1,this.pet_name=null!=(e=this.openArgs[1])?e:"",this.limit=[1,20],this.cost=h.fly_rename_cost;var i=configGoods.getDataByKey(this.cost[0]);if(this.loadIcon(this.costIcon,i.icon_group,i.icon),this.txtCost.string=this.cost[1],this.is_free=!1,1==this.rename_type){var n=IS(f).GetPetInfoById(this.pet_id);this.costNode.active=""!=n.name,this.is_free=""==n.name}else this.costNode.active=!1;this.is_free?this.btnDes.string=GetLanguage(200045):this.btnDes.string=GetLanguage(200053),this.editBox.maxLength=20,this.editBox.placeholder=d.formatStrWithMirrorDeal(GetLanguage(200328),20),this.editBox.placeholderLabel.string=d.formatStrWithMirrorDeal(GetLanguage(200328),20)},p.registerUpdateHandler=function(){},p.onBeforeClose=function(){},p.updateData=function(){},p.onDestroy=function(){},i}(p));i._RF.pop()}}}));

