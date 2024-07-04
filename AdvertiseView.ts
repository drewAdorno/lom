System.register("chunks:///_virtual/AdvertiseView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./ItemIcon.ts","./MessageView.ts","./SdkDataCache.ts","./AdDefine.ts","./AdModel.ts","./BaseView.ts"],(function(t){"use strict";var e,n,i,d,s,o,a,c,r,h,l,f,u;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,d=t.Label,s=t.Sprite,o=t.RichText},function(t){a=t.default},null,function(t){c=t.IconAseetType},function(t){r=t.default},function(t){h=t.SdkDataCache},function(t){l=t.ADS_TYPE},function(t){f=t.AdModel},function(t){u=t.BaseView}],execute:function(){var C;n._RF.push({},"1040epG65VP8bclQukT2cdd","AdvertiseView",void 0);var g=((C={})[l.AD_DRAW_PET]=!0,C[l.AD_DRAW_SKILL]=!0,C);t("default",function(t){function n(){var e;return(e=t.call(this)||this).txtSubTitle=void 0,e.nodeName=void 0,e.txtName=void 0,e.imgBanner=void 0,e.txtBtnAd=void 0,e.txtDesc=void 0,e.txtAdd=void 0,e.adCfgId=void 0,e.adCfg=void 0,e.cb=void 0,e.isDrawAd=void 0,e.name="AdvertiseView",e.url="ui/module/advertise/AdvertiseView",e}e(n,t);var l=n.prototype;return l.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.cb&&t.cb(0),t.close()})),this.txtSubTitle=this.findChildComponent("content/subTitle/txtSubTitle",d),this.nodeName=this.findChild("content/name"),this.txtName=this.findChildComponent("content/name/txtName",d),this.imgBanner=this.findChildComponent("content/imgBanner",s),this.txtBtnAd=this.findChildComponent("content/btnAD/txtAd",d);var n=this.findChild("content/btnAD");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){t.cb&&t.cb(1),t.close()}));var a=this.findChild("content/btnCancel");this.addComponentCallbackListener(a,i.EventType.CLICK,(function(){t.cb&&t.cb(0),t.close()}));var c=this.findChild("content/Remind/remindInfo/btnGet");this.addComponentCallbackListener(c,i.EventType.CLICK,(function(){0!=IS(h).showrechage?(uiMgr.openView("PrivilegeADView"),t.cb&&t.cb(0),t.close()):r.showFlyTip(GetLanguage(200119))})),this.txtDesc=this.findChildComponent("content/descRoot/txtDesc",d),this.txtAdd=this.findChildComponent("content/descRoot/txtAdd",o),this.nodeName.active=!1},l.onAfterOpen=function(){if(this.adCfgId=this.openArgs[0],this.cb=this.openArgs[1],this.adCfg=configAds.getDataByKey(this.adCfgId),this.loadIcon(this.imgBanner,"advertise",this.adCfg.ad_banner,null,c.ICON_SPRITE),this.isDrawAd=g[this.adCfgId],this.txtSubTitle.string=GetLanguage(this.adCfg.ad_banner_desc[0]),this.txtBtnAd.string=GetLanguage(this.adCfg.ad_banner_desc[2]),this.txtDesc.string=GetLanguage(this.adCfg.ad_banner_desc[1]),this.txtAdd.node.active=this.isDrawAd,this.isDrawAd){var t=IS(f).getAdRewardValue(this.adCfgId),e=this.adCfg.reward[2][2];this.txtAdd.string=a.formatStrWithMirrorDeal(GetLanguage(200126),t,e)}},l.registerUpdateHandler=function(){},l.onBeforeClose=function(){this.cb=null},l.onDestroy=function(){},n}(u));n._RF.pop()}}}));
