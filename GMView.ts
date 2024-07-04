System.register("chunks:///_virtual/GMView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NodeUtil.ts","./StringUtil.ts","./index57.ts","./PlatformUtil.ts","./ChatDataCache.ts","./GameClubModel.ts","./LoginDefine.ts","./RoleDataCache.ts","./RoleDefine.ts","./SdkControl.ts","./CommonDefine.ts","./GuideModel.ts","./MessageView.ts","./BasePopupView.ts"],(function(t){"use strict";var e,n,i,o,a,l,s,c,d,r,u,f,C,h,p,g,m,L,T,v,b,G;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t.sys,o=t.Vec3,a=t.Button,l=t.EditBox,s=t.ScrollView,c=t.Label,d=t.Toggle},function(t){r=t.default},function(t){u=t.default},null,function(t){f=t.PlatformUtil},function(t){C=t.ChatDataCache},function(t){h=t.GameClubModel},function(t){p=t.LoginEventDefine},function(t){g=t.RoleDataCache},function(t){m=t.PlayerAttr},function(t){L=t.default},function(t){T=t.CommonEventDefine},function(t){v=t.GuideModel},function(t){b=t.default},function(t){G=t.BasePopupView}],execute:function(){n._RF.push({},"8b1e5aGJ6xKm5L6E8tOrMl4","GMView",void 0);t("default",function(t){function n(){var e;return(e=t.call(this)||this).ebNum=void 0,e.is_sound=!1,e.is_play_sound=!1,e.name="GMView",e.url="ui/module/common/GMView",e}e(n,t);var G=n.prototype;return G.onInit=function(){var t=this;i.uiMirror&&(this.node.scale=new o(-1,1,1));var e=this.findChild("root/content/btnSend");this.addComponentCallbackListener(e,a.EventType.CLICK,(function(){t.onSendClick()})),this.ebNum=this.findChildComponent("root/content/ebNum",l),this.findChildComponent("root/content/scroll",s).content.children.forEach((function(e,n,i){t.addComponentCallbackListener(e,a.EventType.CLICK,(function(){if(7==n){var i=r.findChildComponent(e,"txtText",c);t.is_sound?f.GetSoundScope((function(){IS(L).finishRecordVoice(),i.string=GetLanguage(200207),t.is_sound=!t.is_sound})):f.GetSoundScope((function(){IS(L).setCallbackRecordVoice(),IS(L).setCallbackPlayVoice(),IS(L).startRecordVoice(),i.string=GetLanguage(200206),t.is_sound=!t.is_sound}))}else if(8==n){var o=IS(g);""!=o.GetRoleAttr(m.ROLE_ATTR_HEAD_URL)?sdkControl.checkImgState(o.GetRoleAttr(m.ROLE_ATTR_HEAD_URL)):b.showFlyTip(GetLanguage(200208))}else if(9==n){var a=r.findChildComponent(e,"txtText",c);if(t.is_play_sound)f.GetSoundScope((function(){IS(L).stopPlayVoice(),t.is_play_sound=!t.is_play_sound,a.string=GetLanguage(200209)}));else{var l=IS(C).GetSound();null!=l&&f.GetSoundScope((function(){IS(L).downloadVoice(l.voicePath,l.vcode),t.is_play_sound=!t.is_play_sound,a.string=GetLanguage(200210)}))}}else if(10==n){var s=r.findChildComponent(e,"txtText",c),d=IS(h).GetxcxOpenTag();IS(h).SetxcxOpenTag(!d);var u="close";d&&(u="open"),s.string=u}else{var p=r.findChildComponent(e,"txtText",c);t.ebNum.string=p.string}}))})),this.getAttribItem("root/content/cd",battleMain.skillCd,(function(t){var e=t.string;if(!u.isEmpty(e))try{var n=Number(e);battleMain.skillCd=n}catch(t){b.showFlyTip(GetLanguage(200211))}})),this.getAttribItem("root/content/effectSacle",battleMain.effectScale,(function(t){var e=t.string;if(!u.isEmpty(e))try{var n=Number(e);battleMain.effectScale=n}catch(t){b.showFlyTip(GetLanguage(200211))}})),this.getAttribItem("root/content/battleSpeed",battleMain.effectScale,(function(t){var e=t.string;if(!u.isEmpty(e))try{var n=Number(e);battleMain.timeScale=n}catch(t){b.showFlyTip(GetLanguage(200211))}}));var n=this.findChildComponent("root/content/battleLog/toggleBattleLog",d);this.addComponentCallbackListener(n.node,d.EventType.TOGGLE,(function(){GlobalDefine.BATTLE_LOG=n.isChecked})),n.isChecked=GlobalDefine.BATTLE_LOG;var p=this.findChildComponent("root/content/protoLog/toggleProtoLog",d);this.addComponentCallbackListener(p.node,d.EventType.TOGGLE,(function(){GlobalDefine.PRINT_LEVEL=p.isChecked?0:2})),p.isChecked=GlobalDefine.PRINT_LEVEL<=1;var v=this.findChildComponent("root/content/hideUI/toggleHideUI",d),G=uiMgr.getOpenView("MainView");this.addComponentCallbackListener(v.node,d.EventType.TOGGLE,(function(){G.hideUI=v.isChecked,normalEvent.emit(T.HIDE_MAINVIEW)})),v.isChecked=G.hideUI;var E=this.findChildComponent("root/content/hideText/toggleHideText",d);this.addComponentCallbackListener(E.node,d.EventType.TOGGLE,(function(){battleMain.hideText=E.isChecked})),E.isChecked=battleMain.hideText;var _=this.findChildComponent("root/content/mapLv/toggleMapLv",d);this.addComponentCallbackListener(_.node,d.EventType.TOGGLE,(function(){battleMain.mapLv=_.isChecked})),v.isChecked=battleMain.mapLv;var S=this.findChildComponent("root/content/battleBossClient/toggleBossClient",d);this.addComponentCallbackListener(S.node,d.EventType.TOGGLE,(function(){GlobalDefine.BOSS_CLIENT_MODEL=S.isChecked})),S.isChecked=GlobalDefine.BOSS_CLIENT_MODEL;var k=this.findChildComponent("root/content/battleCount/toggleBattleCount",d);this.addComponentCallbackListener(k.node,d.EventType.TOGGLE,(function(){GlobalDefine.BATTLE_COUNT=k.isChecked})),k.isChecked=GlobalDefine.BATTLE_COUNT;var y=this.findChild("root/content/btnLogList");this.addComponentCallbackListener(y,a.EventType.CLICK,(function(){uiMgr.openView("LogtListView")}))},G.getAttribItem=function(t,e,n){var i=this.findChild(t),o=r.findChildComponent(i,"ebNum",l);o.string=String(e);var s=r.findChild(i,"btnUpdate");this.addComponentCallbackListener(s,a.EventType.CLICK,(function(){n(o)}))},G.registerUpdateHandler=function(){this.addEvent(p.UPLOADSOUNDText_BACK,this.setTxt,this)},G.setTxt=function(){this.findChildComponent("root/content/scroll",s).content.children.forEach((function(t,e,n){if(8==e){var i=r.findChildComponent(t,"txtText",c),o=IS(C).GetSound();null!=o&&(i.string=o.text)}}))},G.onBeforeClose=function(){},G.onDestroy=function(){},G.onMaskClick=function(){this.close()},G.onSendClick=function(){var t=this.ebNum.string;if("hideGM"==t)return normalEvent.emit(T.SET_GM_BTN_ACTIVE,!1),void uiMgr.close("GMView");if("showGM"!=t){if(t.includes("open_guide")){var e=t.replace("open_guide","");return IS(v).openGuide(Number(e)),void this.close()}netManager.send("system.system_gm_c2s",{content:t})}else normalEvent.emit(T.SET_GM_BTN_ACTIVE,!0)},n}(G));n._RF.pop()}}}));
