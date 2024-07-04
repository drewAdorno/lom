System.register("chunks:///_virtual/SdkControl.ts",["cc","./TimeUtil.ts","./MessageView.ts","./LoginDataCache.ts","./LoginDefine.ts","./env","./AdDefine.ts","./ShareDefine.ts","./SdkDataCache.ts","./GameLoadingView.ts","./AudioMgr.ts","./PlatformUtil.ts","./StringUtil.ts","./MulLanguageUtil.ts","./HttpClient.ts","./AdControl.ts","./CommonDefine.ts","./GameSetting.ts","./GameClubModel.ts","./LoginControl.ts","./PayDataCache.ts","./RoleDataCache.ts","./NativeToJs.ts"],(function(e){"use strict";var o,n,i,t,a,r,l,s,c,d,g,u,f,v,p,S,m,h,C,k,_,L,I;return{setters:[function(e){o=e.cclegacy,n=e.sys},function(e){i=e.default},function(e){t=e.default},function(e){a=e.LoginDataCache},function(e){r=e.LoginEventDefine},function(e){l=e.HTML5},function(e){s=e.AdEventDefine},function(e){c=e.ShareWxUrlId},function(e){d=e.SdkDataCache},function(e){g=e.GameLoadingView},function(e){u=e.audioMgr},function(e){f=e.PlatformUtil},null,null,function(e){v=e.HttpClient},function(e){p=e.default},function(e){S=e.CommonEventDefine},function(e){m=e.default,h=e.GameSettingKey},function(e){C=e.GameClubModel},function(e){k=e.default},function(e){_=e.default},function(e){L=e.RoleDataCache},function(e){I=e.NativeToJs}],execute:function(){o._RF.push({},"d4a9fzysJVLz7mb/MX9ZBfF","SdkControl",void 0);e("default",function(){var e=o.prototype;function o(){this.is_record=!1,this.is_play=!1,this.is_upload=!1,this.is_download=!1,this.play_voiceCode="",_G("sdkControl",this)}return e.clear=function(){_G("sdkControl",null)},e.initSdk=function(){var e=null,o=g.instance.curlaguage;"zh"==o?o="zh_cn":"tw"==o?o="zh_tw":"vi"==o&&(o="vn"),(e={}).appVersion=GlobalDefine.VERSION,e.targetPlatformAdapterName="FNPCPlatformHwHF",e.projectId="311",e.fngid="1704264601861920",e.fnpid="4013",e.fnptag="4013",e.hwLang=o,e.hwClientId="1704264601861920",e.hwClientSecret="568f7cad7966985188ed28c5810d7c96",e.hwArea="US",e.hwPp="joynetgame",e.hwMainDomain="joynetgame.com",e.hwCurrencyCode="USD",e.hwAdMktsOpen="true",e.hwGoogleAnalyticsId="G-YWPMV52KEK",e.hwIgnoredEventsMap=["bind_account","bind_account_failed"],e.hwGameEventList=["bind_account","bind_account_failed"],e.hwLogOnceEventList=["Register_Device"],e.hwConversionIdMap={Install:"6726230841",Launch:"6726231030",Login:"",Register_Device:"6726321974",Server:"6726318413",Create_Role:"6726227956",Enter_Game:"6726228856",Purchase:"6726320876",First_Purchase:"6726230043","1d_retained":"6726321347","3d_retained":"","7d_retained":""},e.hwEventNameConvertMap={all:{visitorDeviceDup:"Register_Device",bindSuccess:"Bind_account",bindFail:"Bind_account_failed"}},e.hwSdkLogEventList=["loginSuccess","registerDeviceDup","visitorDeviceDup","bindSuccess","bindFail"],null==e||l?(FNSDKXyx.init(e,(function(e,o,n){console.log("初始化结果："+e),console.log(o)})),FNSDK.invoke("setCallbackInitState",{},(function(e,o,n){if(e==FNCode.SUCC){if(console.log("sdk初始化成功1"),IS(d).isSdkInit)return;IS(d).isSdkInit=!0,console.log("sdk初始化成功2"),sdkControl.getPlatformInfo(),sdkControl.setCallbackLogin(),sdkControl.login(),sdkControl.getDeviceInfo()}else console.error("初始化失败 "+e+" "+o)}))):(console.log("开始sdk初始化"),FNSDKXyx.init(e,(function(e,o,n){if(e==FNCode.SUCC){if(IS(d).isSdkInit)return;IS(d).isSdkInit=!0,console.log("sdk初始化成功2"),sdkControl.getPlatformInfo(),sdkControl.setCallbackLogin(),sdkControl.login(),sdkControl.getIosRechangeOpen(),sdkControl.getDeviceInfo()}else console.error("sdk初始化失败 "+e+" "+o)})))},e.fnadv_initAD=function(e){var o={};o.appId=e,FNSDK.invoke("fnadv_initAD",o,(function(o,n,i){o==FNCode.SUCC?console.error("初始化appid成功 "+e):(console.error("初始化appid失败 "+e),console.error(n))}))},e.getPlatformInfo=function(){FNSDK.invoke("getPlatformInfo",(function(e,o,n){if(console.error(n),IS(a).fngid=n.fngid,IS(a).plat=n.fnpidunion,IS(a).channelFN=n.channelFN,IS(a).fnpidunion=n.fnpidunion,"mailiang2"==GlobalDefine.PLAT_TAG){var i=configAppid.getDataByKey(IS(a).channelFN);i&&sdkControl.fnadv_initAD(i.appid)}}))},e.onShareParamState=function(){FNSDK.invoke("setCallbackOnShareParamState",{},(function(e,o,n){var i=Math.floor(Math.random()*c.length),t={};t.shareTo=n.shareTo,"app_msg"==n.shareTo&&(t.title=c[i].text,t.imageUrl=c[i].url,t.imageUrlId=c[i].urlId),FNSDK.invoke("backShareParam",t,(function(e,o,n){printLogErr("设置分享参数回调   "+e)}))}))},e.weinxinShare=function(e,o,n,i,t){void 0===i&&(i=0),void 0===t&&(t="0");var a={};a.title=e,a.imageUrl=o,a.imageUrlId=n;var r="key1="+t;i>0&&(r="share_img_id="+i+"&"+r),a.query=r,FNSDK.invoke("shareAppMessage",a,(function(e,o,n){}))},e.weinxinNormalShare=function(e,o,n,i,t,a){void 0===i&&(i=0);var r={};r.title=e,r.imageUrl=o,r.imageUrlId=n;var l="key1="+t;if(1==t){var s=a.returnCode;a&&""!=a.returnCode&&(l=l+"&key2="+s)}i>0&&(l="share_img_id="+i+"&"+l),r.query=l,printLogErr("shareCodeLink = "+l),FNSDK.invoke("shareAppMessage",r,(function(e,o,n){}))},e.getIosRechangeOpen=function(){FNSDK.invoke("getCfgData",{},(function(e,o,n){var i=!0;if(console.log("getCFgData"),console.log(n),n.cfgStr){var t=JSON.parse(n.cfgStr);t.its&&t.its.state&&1==parseInt(t.its.state)&&(i=!1)}IS(d).showrechage=i}))},e.requestCheckStrUrl=function(e,o,n){void 0===n&&(n=1);var i="https://s999-wfw.joynetgame.com/mask?g=xxjzz&p=mix_global&c="+encodeURIComponent(e);2==n&&(i="https://s999-wfw.joynetgame.com/mask?g=xxjzz&p=mix_global&f="+encodeURIComponent(e)),v.get(i,(function(n,i){0==n?"FALSE"==i?(t.showFlyTip(GetLanguage(200592)),o("",!1)):o("TRUE"==i?e:i,!0):o(e,!0)}),1)},e.checkStr=function(e,o,n){var i;(void 0===n&&(n=1),"xmh5"==GlobalDefine.PLAT_TAG)?(console.log("调用厦门检查接口"),(i={}).content=e,FNSDK.invoke("xmCheckMsgSecurity",i,(function(n,i,a){if(n==FNCode.SUCC){var r=a.isPass;1==r||"true"==r||"True"==r?(console.log(a),o(e,!0)):(t.showFlyTip(GetLanguage(200592)),o("",!1))}else o(e,!0)}))):this.requestCheckStrUrl(e,o,n)},e.openewardedVideoAd=function(e){IS(p).reqBeginAd();var o={};"mailiang2"!=GlobalDefine.PLAT_TAG?"xmh5"==GlobalDefine.PLAT_TAG?FNSDK.invoke("xmPlayAd",o,(function(e,o,n){if(e==FNCode.SUCC){if("close"==n.action){var i=1==n.isRewarded||"true"==n.isRewarded;console.log("有无奖励: "+(i?"有":"无")),normalEvent.emit(s.AD_WATCH_FINISH,i?1:0),normalTimer.start(1,1,(function(){u.playMusic("battle")}))}}else t.showFlyTip(GetLanguage(201441)),console.error("厦门广告接口调用失败"),normalTimer.start(1,1,(function(){u.playMusic("battle")}))})):(o.adUnitId=e,console.log("广告id："+e),u.stopMusic(),FNSDK.invoke("wxRewardedVideoAdShow",o,(function(e,o,n){if(e==FNCode.SUCC){if("close"==n.action){var i=1==n.isRewarded||"true"==n.isRewarded;console.log("有无奖励: "+(i?"有":"无")),normalEvent.emit(s.AD_WATCH_FINISH,i?1:0),normalTimer.start(1,1,(function(){u.playMusic("battle")}))}}else IS(k).apmlog(5002,"广告弹出失败,错误码："+e+"msg："+o),1004==e?t.showFlyTip(GetLanguage(200593)):1005==e&&t.showFlyTip(GetLanguage(200594)),normalTimer.start(1,1,(function(){u.playMusic("battle")}))}))):this.loadwardedVideoAdApk(e)},e.loadwardedVideoAdApk1=function(e){var o={AdUnitID:e};FNSDK.invoke("fnadv_loadVideoAD",o,(function(e,o,n){console.log("fnadv_loadVideoAD back, code: "+e+", msg: "+o+", data: "+JSON.stringify(n))}))},e.loadwardedVideoAdApk=function(e){var n={};n.AdUnitID=e,console.log("预加载广告id："+e),IS(d).LoadAdTimeOut=0,FNSDK.invoke("fnadv_loadVideoAD",n,(function(n,i,t){n==FNCode.SUCC?(console.log("视频预加载成功 "+n),normalTimer.start(1,1,(function(){IS(o).HasloadwardedVideoAdApk(e)}))):(console.log("视频预加载失败 "+n),normalTimer.start(1,1,(function(){u.playMusic("battle")})))}))},e.GetSavePath=function(){FNSDK.invoke("getExternalStoragePath",{},(function(e,o,n){console.log("code "+e),console.log(n),console.error("获取路径 "+n["external-path"])}))},e.HasloadwardedVideoAdApk=function(e){var n={};n.AdUnitID=e,console.log("判断是否预加载广告id："+e),FNSDK.invoke("fnadv_hasLoadedVideo",n,(function(n,i,a){n==FNCode.SUCC?(IS(d).LoadAdTimeOut=0,IS(o).playVideoAdApk(e)):(IS(d).LoadAdTimeOut=IS(d).LoadAdTimeOut+1,console.log("判断视频是否加载失败 "+n),IS(d).LoadAdTimeOut<5?normalTimer.start(1,1,(function(){IS(o).HasloadwardedVideoAdApk(e)})):(t.showFlyTip(GetLanguage(200595)),u.playMusic("battle")))}))},e.playVideoAdApk=function(e){var o={};o.AdUnitID=e,console.log("开始播放广告："+e),FNSDK.invoke("fnadv_showVideoAD",o,(function(o,n,i){o==FNCode.SUCC?(console.log("播放完成："+e),normalEvent.emit(s.AD_WATCH_FINISH,1),normalTimer.start(1,1,(function(){u.playMusic("battle")}))):(normalEvent.emit(s.AD_WATCH_FINISH,0),console.log("视频播放失败 "+o),normalTimer.start(1,1,(function(){u.playMusic("battle")})))}))},e.setOauthData=function(e){var o={oauthData:e};FNSDK.invoke("setOauthData",o)},e.getGameClubData=function(){var e={type:"1|4|5|6|7|8|9"};FNSDK.invoke("getGameClubData",e,(function(e,o,n){if(e==FNCode.SUCC){var i=n.dataList;IS(C).InitWXGameClubInfo(i)}}))},e.requestSubscribeMessage=function(e){},e.closeSound=function(){printLogErr("2222222222播放语音关闭声音"),u.setSoundVolume(0),u.setMusicVolume(0)},e.backSound=function(){printLogErr("2333333333333333333333播放语音回复声音");var e=IS(m).Get(h.SOUND_ON);u.setSoundVolume(e?1:0);var o=IS(m).Get(h.MUSIC_ON);u.setMusicVolume(o?1:0)},e.GetIsRecord=function(){return this.is_record},e.GetIsPlay=function(){return this.is_play},e.GetIsUpload=function(){return this.is_upload},e.GetIsDownload=function(){return this.is_download},e.setCallbackRecordVoice=function(){var e=this;FNSDK.invoke("setCallbackRecordVoice",{},(function(o,n,i){if(10==o)printLogErr("log====录音监听======>开始录音"),e.is_record=!0;else if(12==o){e.is_record=!1;var t=i.savePath,a=i.savePathReal,r=i.duration,l=i.durationMs;printLogErr("log=====录音监听=====>录音完成 savePath:"+t+",savePathReal:"+a+",duration:"+r+",durationMs:"+l),e.backSound(),sdkControl.uploadVoice(t)}else e.is_record=!1,e.backSound(),printLogErr("log=====录音监听=====>录音操作失败,msg:"+n)}))},e.startRecordVoice=function(){var e=this;if(!this.is_record){this.is_play&&this.stopPlayVoice();var o={};o.savePath="fn_voice/v/record.mp3",o.timeOutMs="30000",o.formatType="mp3",this.is_record=!0,printLogErr("log=====开始录音，传递参数=====",o),FNSDK.invoke("startRecordVoice",o,(function(o,n,i){o==FNCode.SUCC?printLogErr("log=====开始录音=====>录音操作成功"):(e.backSound(),e.is_record=!1,printLogErr("log=====开始录音=====>录音操作失败,msg:"+n))}))}},e.finishRecordVoice=function(){var e=this;FNSDK.invoke("finishRecordVoice",{},(function(o,n,i){e.is_record=!1,e.backSound(),o==FNCode.SUCC?printLogErr("log=====结束录制=====>录音操作成功"):printLogErr("log=====结束录制=====>结束操作失败,msg:"+n)}))},e.cleanVoiceFiles=function(){var e={};e.day=GetLanguage(200596),e.maxSize=GetLanguage(200597),FNSDK.invoke("cleanVoiceFiles",e,(function(e,o,n){e==FNCode.SUCC?printLogErr("log=====清除录制文件=====>结束操作成功"):printLogErr("log=====清除录制文件=====>结束操作失败,msg:"+o)}))},e.hwLoginBind=function(){FNSDK.invoke("hwLoginBind",{},(function(e,o,n){e==FNCode.SUCC?console.log("账号绑定成功"):(console.log("账号绑定失败"),console.log(n))}))},e.setCallbackPlayVoice=function(){var e=this;FNSDK.invoke("setCallbackPlayVoice",{},(function(o,n,i){10==o?(printLogErr("log=====设置播放监听=====>开始播放,msg:"+n),e.is_play=!0,e.closeSound()):12==o?(printLogErr("log=====设置播放监听=====>播放完成,msg:"+n),e.is_play=!1,e.backSound()):13==o?(printLogErr("log=====设置播放监听=====>播放失败,msg:"+n),e.is_play=!1,e.backSound()):16==o?(printLogErr("log=====设置播放监听=====>播放停止,msg:"+n),e.is_play=!1,e.backSound()):(e.is_play=!1,e.backSound()),normalEvent.emit(r.PLAYSOUNDBACK,e.is_play)}))},e.startPlayVoice=function(e){var o=this;if(!this.is_play){this.closeSound();var n={};n.voicePath=e,this.is_play=!0,FNSDK.invoke("startPlayVoice",n,(function(e,n,i){e==FNCode.SUCC?printLogErr("log=====播放语音=====>操作成功,msg:"+n):(o.is_play=!1,printLogErr("log=====播放语音=====>操作失败,msg:"+n))}))}},e.stopPlayVoice=function(){var e=this;FNSDK.invoke("stopPlayVoice",{},(function(o,n,i){e.backSound(),e.is_play=!1,o==FNCode.SUCC?printLogErr("log=====停止播放语音=====>操作成功,msg:"+n):printLogErr("log=====停止播放语音=====>操作失败,msg:"+n)}))},e.uploadVoice=function(e){var o=this,n={};n.voicePath=e,"mailiang2"==GlobalDefine.PLAT_TAG&&(n.roleId=IS(L).GetRoleId(),n.serverId=IS(a).loginServer.id),this.is_upload||(this.is_upload=!0,FNSDK.invoke("uploadVoice",n,(function(n,i,t){if(o.is_upload=!1,n==FNCode.SUCC){var a=t.vcode;printLogErr("log=====语音上传=====>操作成功,vcode:"+a),printLogErr(t),sdkControl.baiduSpeechToText(e,a),normalEvent.emit(r.UPLOADSOUND_BACK,{voicePath:e,vcode:a})}else printLogErr("log=====语音上传=====>操作失败,msg:"+i)})))},e.ResetVoiceState=function(){this.is_record=!1,this.is_play=!1,this.is_download=!1,this.is_upload=!1},e.downloadVoice=function(e,o){var n=this;if(!this.is_record&&!this.is_download){this.is_download=!0,this.play_voiceCode=o;var i={};null==e&&(e="fn_voice/v/record"+o+".mp3"),i.savePath=e,i.vcode=o,printLogErr("log=====语音下载===参数==>",i),FNSDK.invoke("downloadVoice",i,(function(e,o,i){if(n.is_download=!1,e==FNCode.SUCC){var t=i.vcode,a=i.savePath;printLogErr("log=====语音下载=====>操作成功,vcode:"+t+",savePath:"+a),sdkControl.startPlayVoice(a)}else printLogErr("log=====语音下载=====>操作失败,msg:"+o)}))}},e.OnFNServerReturnEventstring=function(e){var o=JSON.parse(e),i=parseInt(o.tag),t=parseInt(o.code),a=o.param,l=o.vcode;if(n.os==n.OS.ANDROID&&(i=parseInt(o[0]),t=parseInt(o[1]),a=o[2],l=o[3]),printLogErr("OnFNServerReturnEvent tag : %s , code : %s , param : %s",i,t,a),0==i)this.is_upload=!1,0==t?(normalEvent.emit(r.BAIDUSPEECHTOTEXT_BACK,a,""),this.ResetVoiceState()):(printLogErr("上传语音失败 ： {0}",a),this.ResetVoiceState());else if(1==i)if(this.is_download=!1,0==t){if(this.play_voiceCode!=l)return void printLogErr("下载语音与需要播放的语音不一致 ：{0} {1}",this.play_voiceCode,l);sdkControl.startPlayVoice(a)}else printLogErr("下载语音失败 ： {0} {1}",l,a);else(i=2)?2==t?(this.is_record=!0,printLogErr("开始录音")):0==t||3==t?(this.is_record=!1,this.backSound(),printLogErr("录音完成")):-2==t&&(this.ResetVoiceState(),printLogErr("录音取消")):(i=3)&&(1==t?(printLogErr("播放失败"),this.is_play=!1,this.backSound()):2==t?(printLogErr("开始播放"),this.is_play=!0):0!=t&&3!=t||(this.backSound(),this.ResetVoiceState()))},e.baiduSpeechToText=function(e,o){var n={};n.voicePath=e,n.format="m4a",n.rate="8000",printLogErr("log=====百度语音转文字=====>调用接口,url:"+e),FNSDK.invoke("baiduSpeechToText",n,(function(e,n,i){if(e==FNCode.SUCC){var t=i.text;printLogErr("log=====百度语音转文字=====>操作成功,text:"+t),printLogErr("log=====百度语音转文字=====>操作成功,msg:"+n),printLogErr(i),normalEvent.emit(r.BAIDUSPEECHTOTEXT_BACK,o,t)}else printLogErr("log=====百度语音转文字=====>操作失败,msg:"+n),printLogErr(i),normalEvent.emit(r.BAIDUSPEECHTOTEXT_BACK,o,GetLanguage(200598))}))},e.openOtherXcx=function(e,o,n,i){var t={},a="release";e&&(a="trial"),t.wxAppId="wx26617793593b580c",t.envVersion=a,t.xcxPath="pages/scarecrow/scarecrow?game=xxjzz&platform="+o+"&server="+n+"&roleID="+i,FNSDK.invoke("openXcxCommon",t,(function(e,o,n){e==FNCode.SUCC?printLogErr("操作成功",o,n):printLogErr("操作失败or取消",e,o,n)}))},e.uploadImg=function(e){var o={};o.imagePath=e,printLogErr("log=====图片上传=====>开始上传,url:"+e),FNSDK.invoke("uploadImage",o,(function(e,o,n){if(e==FNCode.SUCC){var i=n.url;normalEvent.emit(r.UPLOADIMGBACK,i),printLogErr("log=====图片上传=====>操作成功,url:"+i)}else printLogErr("log=====图片上传=====>操作失败,msg:"+o),IS(k).apmlog(5008,"图片上传,错误码："+e+"url:"+i+",msg："+o),t.showFlyTip(GetLanguage(200599))}))},e.checkImgState=function(e){var o={};o.imageUrl=e,FNSDK.invoke("checkImage",o,(function(e,o,n){if(e==FNCode.SUCC)switch(n.state+""){case"1":printLogErr("log=====查询图片审核状态=====>审核通过,msg:"+o);break;case"0":printLogErr("log=====查询图片审核状态=====>未审核,msg:"+o);break;case"-1":printLogErr("log=====查询图片审核状态=====>图片已删除或已审核但不通过,msg:"+o);break;case"-2":printLogErr("log=====查询图片审核状态=====>URL传入不正确,msg:"+o);break;case"-3":printLogErr("log=====查询图片审核状态=====>查询超时，需要再尝试,msg:"+o);break;default:printLogErr("log=====查询图片审核状态=====>未知错误,msg:"+o)}else printLogErr("log=====查询图片审核状态=====>接口调用失败,msg:"+o)}))},e.showRevisitGuide=function(){},e.H5SelectImg=function(e){void 0===e&&(e="1");var o={};o.hw_param_imageType=e,o.hw_param_areaId=I.GetBagAreaId(),FNSDK.invoke("pickImageFromLocal",o,(function(o,n,i){if(console.log("选图返回"),console.log(i),o==FNCode.SUCC){var t=i.outputPath;sdkControl.H5UploadImg(t,e)}}))},e.H5UploadImg=function(e,o){var n={};n.imagePath=e,n.type=o,n.hw_param_areaId=I.GetBagAreaId(),FNSDK.invoke("hwApiUploadImg",n,(function(e,n,i){if(console.log("上传返回"),console.log(i),e==FNCode.SUCC){var t=i.url;normalEvent.emit(S.PhotoUpLoadSuccess,t,o)}}))},e.getDeviceInfo=function(){FNSDK.invoke("getDeviceInfo",(function(e,o,n){var i=n.deviceId,t=n.deviceName,r=n.deviceType,l=n.sdkVersion,s=n.osVersion,c=n.networkName,d=n.operatorName,g=n.packageName;n.screen;IS(a).device_id=i,printLogErr("=======deviceId:"+i+",deviceName:"+t+",deviceType:"+r+",sdkVersion:"+l+",osVersion:"+s+",networkName:"+c+",operatorName:"+d+",packageName:"+g)}))},e.pay=function(e,o,n,i,t,a,r,l,s,d,g,u,f){var v={price:e,productId:o,productName:n,productDesc:i,productCount:t,rate:a,coinName:r,callbackInfo:l,uid:s,serverId:d,roleName:g,roleId:u,currencyCode:IS(_).CurrencyCode,level:f},p=Math.floor(Math.random()*c.length);v.sendMessageImg=c[p].url,FNSDK.invoke("pay",v,(function(e,n,i){if(e==FNCode.SUCC){console.log("充值成功");var t=i.qrCode;if(t){var a=t.wechat;a&&uiMgr.openView("RechargeQRCodeView",a,o)}}else console.log(n),console.log("充值失败")}))},e.setCallbackLogin=function(){FNSDK.invoke("setCallbackLoginState",(function(e,o,n){IS(a);switch(console.error("登录回调 "+e),e){case FNCode.SUCC:n.uid,n.name,n.ext,console.log(n),console.log("登录成功 "+n.uid);var i=IS(a);i.hasLoginsdk=!0,i.uid=n.uid,i.uname=n.name,i.sdkExt=JSON.stringify(n.ext),loginControl.checkSdkLoginCenterServer();break;case FNCode.FAIL:g.instance.showExitGameNotice(GetLanguage(200600));break;case FNCode.CANCEL:break;case 3:n.uid,n.name,n.ext,t.showFlyTip(GetLanguage(200601)),f.restartGame();break;case 5:f.restartGame()}}))},e.SwitchUser=function(){FNSDK.invoke("switchUser")},e.login=function(){FNSDK.invoke("login")},e.logLoginFinish=function(e,o){if(GlobalDefine.ENABLE_SDK){var n={uid:e,userName:o};FNSDK.invoke("logLoginFinish",n)}},e.setShareCallbackInfo=function(e,o){var n={callbackInfo:e+"_0_"+i.serverTime+"_"+o};FNSDK.invoke("setShareCallbackInfo",n)},e.logSelectServer=function(e,o,n,i){var t={userName:e,roleId:o,roleLevel:n,serverId:i};FNSDK.invoke("logSelectServer",t)},e.openCustomService=function(){FNSDK.invoke("openCustomerServiceConversation",{},(function(e,o,n){}))},e.logCreateRole=function(e,o,n,i){var t={roleId:e,roleName:o,serverId:n,serverName:i};FNSDK.invoke("logCreateRole",t)},e.Hwlog=function(e){var o={hw_param_logEventName:e};FNSDK.invoke("hw_api_logEventLog",o)},e.logRoleLevel=function(e,o){var n={roleLevel:""+e,serverId:o};FNSDK.invoke("logRoleLevel",n)},e.logPayFinish=function(e,o,n){var i={param_pay_productinfo:e,param_pay_money:o,param_pay_orderid:n};FNSDK.invoke("func_logPayFinish",i)},e.logRoleLoginLog=function(e,o){},e.logEnterGame=function(e,o,n,i,t,a){var r={uid:e,roleId:o,roleName:n,roleLevel:i,serverId:t,serverName:a};FNSDK.invoke("logEnterGame",r)},e.copyToClipBoard=function(e){if(e)try{navigator.clipboard.writeText(e)?t.showFlyTip(GetLanguage(999300103)):console.error("复制到剪贴板失败")}catch(e){console.error("复制到剪贴板失败")}},o}());o._RF.pop()}}}));

