System.register("chunks:///_virtual/WelfareJumpView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index57.ts","./ItemIcon.ts","./MulLanguageUtil.ts","./NativeToJs.ts","./BaseSubView.ts"],(function(t){"use strict";var e,n,i,s,l,o,r,u;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.Button,s=t.Sprite},null,function(t){l=t.IconAseetType},function(t){o=t.default},function(t){r=t.NativeToJs},function(t){u=t.BaseSubView}],execute:function(){n._RF.push({},"2bf8azHnQBFCIO894Vq1RYH","WelfareJumpView",void 0);t("default",function(t){function n(){var e,n;return(n=t.call(this)||this).bg_img=void 0,n.select_lan="en",n.lan_url_list=((e={}).en="https://forms.gle/VGwttmg7ajCBVNQi7",e.de="https://forms.gle/vhmePDjgNpyj6kpC8",e.fr="https://forms.gle/qNs9eqqNPzgb6Jof8",e.es="https://forms.gle/Vrg4H5qpuzpzRXfW8",e.ru="https://forms.gle/tUY7Y3x3ycXVZFsm8",e.pt="https://forms.gle/cErzG83tvhgp2pLF8",e.tr="https://forms.gle/8RC3Dcn3Y9hFPq9Q6",e.it="https://forms.gle/M1aK55W6TJC5CfTL9",e.ar="https://forms.gle/EujgKJskDw936Kev7",e),n.name="WelfareJumpView",n.url="ui/module/welfare/WelfareJumpView",n}e(n,t);var u=n.prototype;return u.onInit=function(){var t=this,e=this.findChild("btnClose");this.addComponentCallbackListener(e,i.EventType.CLICK,(function(){uiMgr.close("MenuView"),uiMgr.close("WelfareCenterView")})),this.bg_img=this.findChildComponent("content/bg",s);var n=this.findChild("content/bg");this.addComponentCallbackListener(n,i.EventType.CLICK,(function(){var e,n=null!=(e=t.lan_url_list[t.select_lan])?e:t.lan_url_list.en;r.openURL(n)}))},u.registerUpdateHandler=function(){},u.onAfterOpen=function(){var t=o.GetGurLanuage();null==this.lan_url_list[t]&&(t="en"),this.select_lan=t,this.loadIcon(this.bg_img,"icon_flzx","img_"+t,null,l.ICON_SPRITE)},u.onBeforeClose=function(){},u.onDestroy=function(){},n}(u));n._RF.pop()}}}));
