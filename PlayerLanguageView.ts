System.register("chunks:///_virtual/PlayerLanguageView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameLoadingView.ts","./UIList.ts","./NodeUtil.ts","./StorageUtil.ts","./BaseView.ts","./MulLanguageUtil.ts","./MessageView.ts"],(function(t){"use strict";var e,n,i,o,a,s,l,r,c,u,d,f,h;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.ScrollView,o=t.Button,a=t.Label},function(t){s=t.GameLoadingView},function(t){l=t.SelectedType,r=t.ListItem},function(t){c=t.default},function(t){u=t.default},function(t){d=t.BaseView},function(t){f=t.default},function(t){h=t.default}],execute:function(){n._RF.push({},"8ee8dp2jiVIaJ+lTawB3njc","PlayerLanguageView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).scrollList=void 0,e.name="PlayerLanguageView",e.url="ui/module/player/PlayerLanguageView",e}e(n,t);var a=n.prototype;return a.onInit=function(){var t=this,e=this.findChildComponent("scrollList",i);this.scrollList=this.addUIList(e,g),this.scrollList.selectedMode=l.SINGLE;var n=this.findChild("btnClose");this.addComponentCallbackListener(n,o.EventType.CLICK,(function(){t.close()}))},a.registerUpdateHandler=function(){},a.onAfterOpen=function(){for(var t=configTrans_language.getDatas(),e=[],n=0;n<t.length;n++)e.push(t[n]);e.sort((function(t,e){return t.rank-e.rank})),this.scrollList.datas=e},a.onBeforeClose=function(){},a.onDestroy=function(){},n}(d));var g=function(t){function n(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))||this).txtName1=void 0,e.txtName2=void 0,e.normalnode=void 0,e.selectnode=void 0,e}e(n,t);var i=n.prototype;return i.onInit=function(){this.txtName1=c.findChildComponent(this.node,"normal/txtName",a),this.txtName2=c.findChildComponent(this.node,"selected/txtName",a),this.normalnode=c.findChild(this.node,"normal"),this.selectnode=c.findChild(this.node,"selected")},i.onRender=function(t,e){t.type==s.instance.curlaguage?(this.normalnode.active=!1,this.selectnode.active=!0):(this.normalnode.active=!0,this.selectnode.active=!1),this.txtName1.string=t.name,this.txtName2.string=t.name},i.onItemClick=function(){var t=this;h.showBoxTip({tip:s.instance.GetInitLanauage(12),func:function(e){"type_yes"==e&&(u.set("curlan",t.data.type),f.SetCurLanguage(t.data.type),location.reload())}})},n}(r);n._RF.pop()}}}));
