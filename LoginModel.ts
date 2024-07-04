System.register("chunks:///_virtual/LoginModel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameLoadingView.ts","./AudioMgr.ts","./PlatformUtil.ts","./index57.ts","./MainGame.ts","./MessageView.ts","./EquipModel.ts","./LoginControl.ts","./LoginDataCache.ts","./LoginDefine.ts","./UIDefine.ts"],(function(e){"use strict";var n,t,i,o,a,c,r,u,s,g,l,L,f,w;return{setters:[function(e){n=e.regeneratorRuntime},function(e){t=e.cclegacy,i=e.game},function(e){o=e.GameLoadingView},function(e){a=e.audioMgr},function(e){c=e.PlatformUtil},null,function(e){r=e.GameState},function(e){u=e.default},function(e){s=e.EquipModel},function(e){g=e.default},function(e){l=e.LoginDataCache},function(e){L=e.LoginEventDefine,f=e.LoginState},function(e){w=e.ViewType}],execute:function(){t._RF.push({},"6db7cP/kudFCqueSjVHK/1c","LoginModel",void 0);e("LoginModel",function(){var e=t.prototype;function t(){this.private=void 0,this.loadtime=5,normalEvent.on(L.LOGIN_CALLBACK,this.onLoginCallback,this),normalEvent.on(L.RECONNECT_START,this.onReconnectStart,this),normalEvent.on(L.RECONNECT_LOGIN_START,this.onReconnectStart,this),normalEvent.on(L.RECONNECT_NET_LINK,this.onReconnectOk,this),normalEvent.on(L.RECONNECT_NET_CLOSE,this.onNetClose,this),normalEvent.on(L.LOGIN_LOGOUT,this.onLogout,this),normalEvent.on(L.CHEAT,this.onCheat,this)}return e.clear=function(){},e.waitLoad=n().mark((function e(t){var u,s,g,f;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:battleMain.start();case 1:if(battleMain.isLoadFinish){e.next=6;break}return e.next=4,coroutine.wait(.1);case 4:e.next=1;break;case 6:u=uiMgr.getOpenView("MainView");case 7:if(null!=u){e.next=13;break}return e.next=10,coroutine.wait(.1);case 10:u=uiMgr.getOpenView("MainView"),e.next=7;break;case 13:1==(s=IS(l)).newRole&&uiMgr.openView("VideoView","test",!1),g=i.totalTime,o.instance.smoothLoading(1,.5,GetLanguage(200431));case 17:if(!(i.totalTime-g<500)){e.next=22;break}return e.next=20,coroutine.wait(.1);case 20:e.next=17;break;case 22:if(1!=s.newRole){e.next=31;break}f=uiMgr.getOpenView("VideoView");case 24:if(null!=f){e.next=30;break}return e.next=27,coroutine.wait(.1);case 27:f=uiMgr.getOpenView("VideoView"),e.next=24;break;case 30:f.playVideo();case 31:mainGame.state=r.Runing,mainGame.enterGame=!0,normalEvent.emit(L.LOGIN_SUCCESS),a.playMusic("battle"),o.instance.close(),c.ByteDanceOnShow();case 37:case"end":return e.stop()}}),e)})),e.onLoginCallback=function(e){switch(e){case f.SUCCESS:if(uiMgr.close("ReconnectView"),mainGame.enterGame)return;uiMgr.close("LoginView"),uiMgr.openView("MainView"),o.instance.smoothLoading(1,this.loadtime,GetLanguage(200431)),coroutine.start(this.waitLoad(i.totalTime));break;case f.Maintenance:case f.IP_SEALED:case f.NO_ROLE_INFO:}},e.onReconnectStart=function(){uiMgr.openView("ReconnectView")},e.onReconnectOk=function(e){uiMgr.close("ReconnectView")},e.onNetClose=function(){if(uiMgr.close("ReconnectView"),IS(g).apmlog(5003,"游戏服连接失败,重试次数:"+IS(l).reconnectLoginCount),!mainGame.enterGame){var e=IS(l);return e.reconnectLoginCount++,void(e.reconnectLoginCount>3?o.instance.showExitGameNotice(GetLanguage(200420)):IS(g).connectGameServer())}u.showBoxTip({tip:GetLanguage(200429),btnCnt:2,func:function(e){"type_yes"==e?(IS(l).reconnectLoginCount=0,uiMgr.closeAllView(["MainView","BattleHubView"]),loginControl.reconnectLogin()):c.restartGame()},ensure:GetLanguage(200432),cancel:GetLanguage(200433)},uiMgr.pNodes[w.ReconnectView])},e.onLogout=function(e){uiMgr.close("ReconnectView"),u.showBoxTip({tip:e,btnCnt:1,func:function(e){"xmh5"==GlobalDefine.PLAT_TAG?FNSDK.invoke("logout"):mainGame.exitApp()},ensure:GetLanguage(200434),notMaskClick:!0},uiMgr.pNodes[w.ReconnectView])},e.onCheat=function(){IS(s).setAutoOpen(!1),u.showBoxTip({tip:GetLanguage(200435),btnCnt:1,func:function(e){},ensure:GetLanguage(200129)},uiMgr.pNodes[w.ReconnectView])},t}());t._RF.pop()}}}));

