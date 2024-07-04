System.register("chunks:///_virtual/MarryShotView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./TimeUtil.ts","./index57.ts","./Md5.ts","./HttpClient.ts","./MessageView.ts","./LoginDataCache.ts","./RoleDataCache.ts","./NativeToJs.ts","./MarryControl.ts","./MarryDataCache.ts","./BaseView.ts"],(function(t){"use strict";var e,i,n,o,a,r,s,d,f,c,l,u,h,g,p,v,m,C,_;return{setters:[function(t){e=t.inheritsLoose},function(t){i=t.cclegacy,n=t.Button,o=t.EditBox,a=t.Sprite,r=t.native,s=t.ImageAsset,d=t.Texture2D,f=t.SpriteFrame},function(t){c=t.default},null,function(t){l=t.Md5},function(t){u=t.HttpClient},function(t){h=t.default},function(t){g=t.LoginDataCache},function(t){p=t.RoleDataCache},function(t){v=t.NativeToJs},function(t){m=t.default},function(t){C=t.default},function(t){_=t.BaseView}],execute:function(){i._RF.push({},"cf20ekdU0hGMpJMTY0Gz/Mg","MarryShotView",void 0);t("default",function(t){function i(){var e;return(e=t.call(this)||this).editBox=void 0,e.icon=void 0,e._buffer=void 0,e.openTime=void 0,e.upLoadBtn=void 0,e.name="MarryShotView",e.url="ui/module/marry/MarryShotView",e}e(i,t);var _=i.prototype;return _.onInit=function(){var t=this,e=this.findChild("root/imgMask");this.addComponentCallbackListener(e,n.EventType.CLICK,(function(){t.close()})),this.editBox=this.findChildComponent("root/EditBox",o),this.icon=this.findChildComponent("root/img/iconMask/icon",a),this.addComponentCallbackListener(this.findChild("root/btnList/saveBtn"),n.EventType.CLICK,(function(){var e=IS(C).GetMarryStageInfo();if(e&&e.wedding_id>0){var i=r.fileUtils.getWritablePath(),n=IS(p).GetRoleId(),o=i+e.wedding_id+"_"+n+"_"+t.openTime+".png";r.saveImageData(t._buffer,476,335,o).then((function(){v.saveToPhotos(o),h.showBoxTip({tip:GetLanguage(301084),btnCnt:1})}))}})),this.upLoadBtn=this.findChild("root/btnList/upLoad"),this.addComponentCallbackListener(this.upLoadBtn,n.EventType.CLICK,(function(){if(""!=t.editBox.string){printLogErr("ext = "+IS(g).sdkExt);var e="",i="";if(IS(g).sdkExt){var n,o=JSON.parse(null!=(n=IS(g).sdkExt)?n:"");i=o.access_token,e=o.suid}var a=IS(g).loginServer.id,s=c.serverTime,d=[IS(g).fngid,e,s],f="";d.forEach((function(t){f+=t}));for(var _=l.hashStr(f+"fc0faf1cb1478a85d5ab7089ff3233d0"),S=0;S<t._buffer.length;S++)String.fromCharCode(t._buffer[S]);var y="http://a.joyagegames.com/sdk/game/upload_img";y=y+"?file_key=test&client_id="+IS(g).fngid+"&oauth_token="+i+"&user_id="+e+"&server_id="+a+"&role_id="+IS(p).GetRoleId()+"&sign="+_+"&timestamp="+c.serverTime+"&upload_type=1&use_type=2";var I=r.fileUtils.getWritablePath()+"test_1.png";v.logNative(I),r.saveImageData(t._buffer,476,335,I).then((function(){v.logNative("Save image data success");var e=r.fileUtils.getDataFromFile(I),i=Array.from(new Uint8Array(e)).map((function(t){return String.fromCharCode(t)})).join(""),n=btoa(i);v.logNative("test="+encodeURIComponent(n)),u.post(y,"test="+encodeURIComponent(n),(function(e,i){v.logNative("code = "+e+"  data= "+i);var n=JSON.parse(i);if(v.logNative("33333==="+n.content),v.logNative(i.content),0==e&&1==n.code){var o=IS(C).GetMarryStageInfo();o&&o.wedding_id>0&&sdkControl.checkStr(t.editBox.string,(function(t,e){1==e?IS(m).send_marry_party_photo_c2s(o.wedding_id,n.content.url,t):h.showFlyTip(GetLanguage(14810044))}))}else h.showFlyTip(GetLanguage(301086))}))})).catch((function(){v.logNative("Fail to save image data")}))}else h.showFlyTip(GetLanguage(300141))}))},_.registerUpdateHandler=function(){},_.onAfterOpen=function(){this._buffer=this.openArgs[0],this.openTime=c.serverTime;var t=new s;t.reset({_data:this._buffer,width:476,height:335,format:d.PixelFormat.RGBA8888,_compressed:!1});var e=new d;e.image=t;var i=new f;i.texture=e,i.packable=!1,this.icon.spriteFrame=i,this.upLoadBtn.active=!1;var n=IS(C).GetMarryStateInfo();if(n)for(var o=IS(p).GetRoleId(),a=0;a<n.bride_list.length;a++){if(n.bride_list[a].role_id==o){this.upLoadBtn.active=!0;break}}},_.onBeforeClose=function(){},_.onDestroy=function(){},i}(_));i._RF.pop()}}}));

