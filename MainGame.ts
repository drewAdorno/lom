System.register("chunks:///_virtual/MainGame.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NativeToJs.ts"],(function(t){"use strict";var n,e,i,o;return{setters:[function(t){n=t.createClass},function(t){e=t.cclegacy,i=t.game,o=t.director},null],execute:function(){var a;t("GameState",void 0),e._RF.push({},"72931mhAPRG7q9iICvIyuzs","MainGame",void 0),function(t){t[t.WaitLogin=0]="WaitLogin",t[t.LoginCentering=1]="LoginCentering",t[t.Logining=2]="Logining",t[t.Disconnect=3]="Disconnect",t[t.Reconnecting=4]="Reconnecting",t[t.EnterLoading=5]="EnterLoading",t[t.Runing=6]="Runing"}(a||(a=t("GameState",{})));var r=t("MainGame",function(){function t(){this._state=a.WaitLogin,this.enterGame=!1,this.runStartFrame=0,this.fps=0}var e=t.prototype;return e.resetApp=function(){i.restart()},e.showexit=function(){FNSDK.invoke("showExitDialog",(function(t,n,e){switch(t){case FNCode.SUCC:FNSDK.invoke("exitApp");break;case FNCode.CANCEL:}}))},e.exitApp=function(){printLogErr("fffffffffffffffffff"),"xmh5"==GlobalDefine.PLAT_TAG?location.reload():this.showexit()},n(t,[{key:"state",get:function(){return this._state},set:function(t){this._state=t,t==a.Runing&&(this.runStartFrame=o.getTotalFrames())}}]),t}());window.mainGame=new r,e._RF.pop()}}}));
