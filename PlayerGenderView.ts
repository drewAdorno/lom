System.register("chunks:///_virtual/PlayerGenderView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./StringUtil.ts","./index57.ts","./ConfigGlobal.ts","./BagModel.ts","./MessageView.ts","./RoleControl.ts","./RoleDataCache.ts","./RoleDefine.ts","./BaseView.ts"],(function(t){"use strict";var e,n,i,o,s,a,l,h,c,d,C,r,g,u;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,o=t.Label,s=t.Toggle,a=t.Sprite},function(t){l=t.default},null,function(t){h=t.ConfigGlobal},function(t){c=t.BagModel},function(t){d=t.default},function(t){C=t.default},function(t){r=t.RoleDataCache},function(t){g=t.PlayerAttr},function(t){u=t.BaseView}],execute:function(){n._RF.push({},"76fbcE4995AX51M1TpW+ntC","PlayerGenderView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).btnDes=void 0,e.txtCost=void 0,e.togFemale=void 0,e.togMale=void 0,e.cost=void 0,e.name="PlayerGenderView",e.url="ui/module/player/PlayerGenderView",e}e(n,t);var u=n.prototype;return u.onInit=function(){var t=this,e=this.findChild("imgMask");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){t.onCloseClick()}));var n=this.findChild("btnChange");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){t.onChangeClick()})),this.txtCost=this.findChildComponent("cost",o),this.btnDes=this.findChildComponent("btnChange/Label",o),this.togMale=this.findChildComponent("male",s),this.addComponentCallbackListener(this.togMale.node,s.EventType.CLICK,(function(){t.onToggleClick(1)})),this.togFemale=this.findChildComponent("female",s),this.addComponentCallbackListener(this.togFemale.node,s.EventType.CLICK,(function(){t.onToggleClick(2)})),this.loadIcon(this.findChildComponent("female/Sprite-001",a),"player","grxx_ui_nv"),this.loadIcon(this.findChildComponent("female/Checkmark",a),"common","common_ui_dagou"),this.loadIcon(this.findChildComponent("male/Sprite-001",a),"player","grxx_ui_nan"),this.loadIcon(this.findChildComponent("male/Checkmark",a),"common","common_ui_dagou")},u.onCloseClick=function(){this.close()},u.onChangeClick=function(){var t=this,e=this.togMale.isChecked?1:2,n=IS(r).GetRoleAttr(g.ROLE_ATTR_GENDER),i=IS(c).getGoodsCountByGoodsGtid(this.cost[0]);this.togMale.isChecked||this.togFemale.isChecked?n==e?d.showFlyTip(GetLanguage(200528)):i<this.cost[1]&&0!=n?d.showFlyTip(GetLanguage(200069)):0==n?IS(C).send_3_15(e):d.showBoxTip({tip:l.formatStrWithMirrorDeal(GetLanguage(999100082),this.cost[1]),title:GetLanguage(200048),func:function(n){"type_yes"==n&&(IS(C).send_3_15(e),t.close())}}):d.showFlyTip(GetLanguage(200527))},u.onToggleClick=function(t){1==t?this.togFemale.isChecked=!1:2==t&&(this.togMale.isChecked=!1)},u.registerUpdateHandler=function(){},u.onAfterOpen=function(){this.cost=h.change_gender_cost;var t=IS(r).GetRoleAttr(g.ROLE_ATTR_GENDER);0==t?(this.txtCost.node.active=!1,this.btnDes.string=GetLanguage(200045),this.togFemale.isChecked=!1,this.togMale.isChecked=!1):(this.txtCost.node.active=!0,this.txtCost.string=this.cost[1],this.btnDes.string=GetLanguage(200053),1==t?(this.togMale.isChecked=!0,this.togFemale.isChecked=!1):(this.togMale.isChecked=!1,this.togFemale.isChecked=!0))},u.onBeforeClose=function(){},u.onDestroy=function(){},n}(u));n._RF.pop()}}}));

