System.register("chunks:///_virtual/GuildRenameView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlatformUtil.ts","./StringUtil.ts","./index57.ts","./ConfigGlobal.ts","./BagModel.ts","./MessageView.ts","./RoleDataCache.ts","./GuildControl.ts","./BaseView.ts"],(function(t){"use strict";var i,e,n,o,s,l,a,d,u,c,r,h,f;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy,n=t.Button,o=t.Label,s=t.EditBox},function(t){l=t.PlatformUtil},function(t){a=t.default},null,function(t){d=t.ConfigGlobal},function(t){u=t.BagModel},function(t){c=t.default},function(t){r=t.RoleDataCache},function(t){h=t.default},function(t){f=t.BaseView}],execute:function(){e._RF.push({},"4e7ddYZDkxI0ru2H8UbRU51","GuildRenameView",void 0);t("default",function(t){function e(){var i;return(i=t.call(this)||this).editBox=void 0,i.txtCost=void 0,i.cost=void 0,i.limit=void 0,i.name="GuildRenameView",i.url="ui/module/guild/GuildRenameView",i}i(e,t);var f=e.prototype;return f.onInit=function(){var t=this,i=this.findChild("imgMask");this.addComponentCallbackListener(i,n.EventType.CLICK,(function(){t.close()}));var e=this.findChild("btnCancel");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()}));var a=this.findChild("btnConfirm");this.addComponentCallbackListener(a,n.EventType.CLICK,(function(){t.onClick()})),this.txtCost=this.findChildComponent("cost",o),this.editBox=this.findChildComponent("EditBox",s),this.addComponentCallbackListener(this.editBox.node,s.EventType.EDITING_DID_BEGAN,(function(){l.UpdateCurrentEditBox(t.editBox)}))},f.onClick=function(){var t=this,i=this.editBox.string,e=a.getStrLength(i),n=IS(u).getGoodsCountByGoodsGtid(this.cost[0]);e<this.limit[0]||e>this.limit[1]?c.showFlyTip(GetLanguage(200070)):i==IS(r).GetGuildName()?c.showFlyTip(GetLanguage(200356)):isNaN(Number(i))?n<this.cost[1]?c.showFlyTip(GetLanguage(200069)):GlobalDefine.ENABLE_SDK?sdkControl.checkStr(i,(function(i,e){1==e&&IS(h).send_29_6(1,null,i),t.close()})):(IS(h).send_29_6(1,null,i),this.close()):c.showFlyTip(GetLanguage(200327))},f.registerUpdateHandler=function(){},f.onAfterOpen=function(){this.cost=d.change_guild_name_cost[0],this.limit=d.guild_name_length,this.editBox.maxLength=this.limit[1],this.txtCost.string=this.cost[1],this.editBox.placeholderLabel.string=a.formatStrWithMirrorDeal(GetLanguage(200328),this.limit[1])},f.onBeforeClose=function(){l.ClearCurrentEditBox(this.editBox),this.editBox.string=""},f.onDestroy=function(){},e}(f));e._RF.pop()}}}));

