System.register("chunks:///_virtual/LoginControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameLoadingView.ts","./PlatformUtil.ts","./StorageUtil.ts","./StringUtil.ts","./TimeUtil.ts","./ConfigGlobal.ts","./MathUtil.ts","./Md5.ts","./MulLanguageUtil.ts","./MainGame.ts","./HttpClient.ts","./ReturnControl.ts","./BagControl.ts","./MessageView.ts","./ControlMgr.ts","./PetControl.ts","./PlantControl.ts","./PrivilegeControl.ts","./RelicControl.ts","./RoleControl.ts","./NativeToJs.ts","./SdkDataCache.ts","./SkillControl.ts","./SlaveControl.ts","./LoginDataCache.ts","./LoginDefine.ts"],(function(e){"use strict";var t,n,i,r,o,a,s,l,_,c,g,u,S,v,d,h,f,p,I,E,m,L,R,G,T,b,N,k,C,A,O,D,P,q,y;return{setters:[function(e){t=e.regeneratorRuntime,n=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy,r=e.game,o=e.sys,a=e.screen,s=e.director},function(e){l=e.GameLoadingView},function(e){_=e.PlatformUtil},function(e){c=e.default},function(e){g=e.default},function(e){u=e.default},function(e){S=e.ConfigGlobal},function(e){v=e.default},function(e){d=e.Md5},function(e){h=e.default},function(e){f=e.GameState},function(e){p=e.HttpClient},function(e){I=e.default},function(e){E=e.default},function(e){m=e.default},function(e){L=e.controlMgr},function(e){R=e.default},function(e){G=e.default},function(e){T=e.default},function(e){b=e.default},function(e){N=e.default},function(e){k=e.NativeToJs},function(e){C=e.SdkDataCache},function(e){A=e.default},function(e){O=e.default},function(e){D=e.LoginDataCache},function(e){P=e.LoginDefine,q=e.LoginEventDefine,y=e.LoginState}],execute:function(){i._RF.push({},"e5a48OOXl1IOr8EXZP3e6PX","LoginControl",void 0);var w="fc0faf1cb1478a85d5ab7089ff3233d0";e("default",function(){var e=i.prototype;function i(){this._httpRequstId=0,this._hasGetServerListUrl=!1,this._hasGetServerList=!1,this._hasGetSever=!1,this._errorcount=0,this._speedPlugIn=0,this._useBackCDN=!1,this._loginasrea=P.AREA_EU,this._use2LoginServer=!1,this._hasupdateloginArea=!1,this.apmLogs={},_G("loginControl",this),netManager.addEventListener("login.heart_beat_s2c",this.on_heart_beat_s2c,this),netManager.addEventListener("login.logout_s2c",this.on_logout_s2c,this),netManager.addEventListener("login.role_login_s2c",this.on_role_login_s2c,this),netManager.addEventListener("login.role_reconnect_s2c",this.on_role_reconnect_s2c,this),netManager.addEventListener("login.pnode_url_s2c",this.on_pnode_url,this)}return e.clear=function(){_G("loginControl",null),printLog("清理LoginControl")},e.use2LoginServer=function(){return this._use2LoginServer},e.getLoginArea=function(){return this._loginasrea},e.UseBackCdn=function(){GlobalDefine.USE_BACKCDN=!0},e.CheckLoginArea=function(){var e=c.get("choosePlatName",!1);k.logNative("'choosePlatName:"+e);var t=!1;2==GlobalDefine.SERVER_LIST_TYPE&&(t=!0),t?null==e||e!=P.AREA_EU&&e!=P.AREA_US?"zh"==h.GetGurLanuage()?(this._loginasrea=P.AREA_US,this.requestServer()):this.CheckTimeZone():(this._loginasrea=e,this.requestServer()):this.requestServer()},e.checkSdkLoginCenterServer=function(){var e=IS(D);this._hasGetSever&&e.hasLoginsdk&&(printLog("请求中心服"),IS(i).loginCenterServer(e.uid,(function(e,t,n){if(e)printLog("请求游戏服"),IS(i).connectGameServer();else if(console.error("登录中心服失败 "+t),5==t||13==t)uiMgr.openView("MaintainNoticeView",0,n.msg);else if(15==t)uiMgr.openView("MaintainNoticeView",1,n.msg,n.maintain_time,n.end_time);else{var r,o=((r={})[1]=201397,r[2]=201398,r[3]=201399,r[4]=201400,r[5]=201401,r[6]=201402,r[7]=201403,r[8]=201403,r[9]=201403,r[10]=201404,r[11]=999100507,r[164]=200196,r[1950]=999100508,r[1951]=999100509,r[1952]=999100510,r[1953]=999100511,r[1954]=999100512,r[1955]=999100513,r),a=n.msg;o[t]&&(a=GetLanguage(o[t])),l.instance.showServerCloseTip(a)}})))},e.CheckTimeZone=function(){var e=(new Date).getTimezoneOffset(),t=+Math.abs(-60-e),n=+Math.abs(240-e);k.logNative("本机时区 "+e),k.logNative("Eurooffsetzone "+t),k.logNative("Usoffsetzone "+n),"pt"==h.GetGurLanuage()||"es"==h.GetGurLanuage()?(k.logNative("西语普语选择美洲大区"),this._loginasrea=P.AREA_US):"pt"==h.GetGurLanuage()?(k.logNative("意大利语固定选择欧洲大区"),this._loginasrea=P.AREA_EU):t<n?(k.logNative("选择欧洲大区"),this._loginasrea=P.AREA_EU):(k.logNative("选择美洲大区"),this._loginasrea=P.AREA_US),c.set("choosePlatName",this._loginasrea),this.requestServer()},e.waitGetArea=t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.totalTime;case 1:if(!(r.totalTime-n<5e3&&0==this._hasupdateloginArea)){e.next=6;break}return e.next=4,coroutine.wait(.1);case 4:e.next=1;break;case 6:0==this._hasupdateloginArea&&(k.logNative("time out ,use checktimezone"),this._hasupdateloginArea=!0,this.CheckTimeZone());case 7:case"end":return e.stop()}}),e,this)})),e.UpdateLoginArea=function(e){if(1!=this._hasupdateloginArea)if("false"==e||""==e)k.logNative("fytest===========2222222222222"),k.logNative("取不到ip，根据时区判断"),this._hasupdateloginArea=!0,this.CheckTimeZone();else{k.logNative("fytest===========3333333333333");try{var t=JSON.parse(e);if(t&&t.itp&&t.itp.continent&&t.itp.continent.code){k.logNative("返回地区code:"+t.itp.continent.code);var n=configGlobalzone.getDataByKey(t.itp.continent.code);null==n||n.zone!=P.AREA_EU&&n.zone!=P.AREA_US?(k.logNative("getcfgdata找不到地区，根据时区判断"),this._hasupdateloginArea=!0,this.CheckTimeZone()):(this._loginasrea=n.zone,k.logNative("根据ip选择时区 "+this._loginasrea),c.set("choosePlatName",this._loginasrea),this._hasupdateloginArea=!0,this.requestServer())}else k.logNative("返回错误，根据时区判断"),this._hasupdateloginArea=!0,this.CheckTimeZone()}catch(e){k.logNative("返回错误，根据时区判断"),this._hasupdateloginArea=!0,this.CheckTimeZone()}}},e.requestServer=function(){var e=this;this.requestServerSwitch((function(t){t&&e.checkSdkLoginCenterServer()}))},e.requestServerSwitch=function(e){var t=c.get("chooseServerId",!1);printLogErr("'chooseserverid:"),printLogErr(t),null!=t&&""!=t?this.requestServerListUrl(e,!0):this.requestServerListUrl(e,!1)},e.parseLastVersionString=function(e){var t=e.split("."),n=t[t.length-1];return parseInt(n)},e.requestServer2ListUrl=function(e){var t=this;0!=this._httpRequstId&&p.abort(this._httpRequstId);var n=P.LOGIN_SERVER_LIST_NEI;1==GlobalDefine.SERVER_LIST_TYPE?n=this._loginasrea==P.AREA_EU?P.LOGIN_SERVER_LIST_997:P.LOGIN_SERVER_LIST_999:2==GlobalDefine.SERVER_LIST_TYPE&&(n=this._loginasrea==P.AREA_EU?P.LOGIN_SERVER_LIST_WAI_US:P.LOGIN_SERVER_LIST_WAI_EU),GlobalDefine.USE_BACKCDN&&"none"!=GlobalDefine.REMOTE_PATH&&"none"!=GlobalDefine.REMOTE_BAK_PATH&&(n=n.replace(GlobalDefine.REMOTE_PATH,GlobalDefine.REMOTE_BAK_PATH));var i=u.getLocalTime()+""+v.getRandomInt(1,99999999);n=n.replace("{0}",i),this._httpRequstId=p.get(n,(function(n,i){if(t._httpRequstId=0,0!=n)return printLogErr(n),t._errorcount<3?(t._errorcount++,t._errorcount>1&&(GlobalDefine.USE_BACKCDN=!0,resourceMgr.SetResBundleUseBgp()),void t.requestServer2ListUrl(e)):void l.instance.showExitGameNotice(GetLanguage(200416));printLog("get:"+i);var r=JSON.parse(i);r.list.length<=0?l.instance.showExitGameNotice(GetLanguage(200417)):(IS(D).centerServer2=r.list[0].ip,null!=r.list[0].cp&&(IS(D).bgp2_1=r.list[0].cp),null!=r.list[0].cp2&&(IS(D).bgp2_2=r.list[0].cp2),t._hasGetServerListUrl=!0,t._errorcount=0,null!=e&&e(!0))}))},e.requestServerListUrl=function(e,t){var n=this;if(GlobalDefine.IS_APP=!0,4!=GlobalDefine.SERVER_LIST_TYPE&&5!=GlobalDefine.SERVER_LIST_TYPE&&6!=GlobalDefine.SERVER_LIST_TYPE||(GlobalDefine.IS_APP=!0,S.ads_icon_is_show=0),"mailiang2"==GlobalDefine.PLAT_TAG&&(GlobalDefine.IS_APP=!0,o.os==o.OS.IOS&&(IS(C).showrechage=!1)),"xmh5"==GlobalDefine.PLAT_TAG&&(GlobalDefine.IS_APP=!0),this._hasGetServerListUrl)t?this.requestServerList(e):(this._hasGetSever=!0,null!=e&&e(!0));else{0!=this._httpRequstId&&p.abort(this._httpRequstId);var i=P.LOGIN_SERVER_LIST_NEI;1==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_999:2==GlobalDefine.SERVER_LIST_TYPE?(this._use2LoginServer=!0,i=this._loginasrea==P.AREA_US?P.LOGIN_SERVER_LIST_WAI_US:P.LOGIN_SERVER_LIST_WAI_EU):3==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_997:4==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_APK999:5==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_APK997:6==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_APK_WAI:7==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_996:8==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_APK2_WAI:9==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_800:10==GlobalDefine.SERVER_LIST_TYPE?i=P.LOGIN_SERVER_LIST_996:11==GlobalDefine.SERVER_LIST_TYPE&&(i=P.LOGIN_SERVER_LIST_995),GlobalDefine.USE_BACKCDN&&"none"!=GlobalDefine.REMOTE_PATH&&"none"!=GlobalDefine.REMOTE_BAK_PATH&&(i=i.replace(GlobalDefine.REMOTE_PATH,GlobalDefine.REMOTE_BAK_PATH));var r=u.getLocalTime()+""+v.getRandomInt(1,99999999);i=i.replace("{0}",r),k.logNative("fyprint:"+i),this._httpRequstId=p.get(i,(function(i,r){if(n._httpRequstId=0,0!=i)return printLogErr(i),n._errorcount<3?(n._errorcount++,n._errorcount>1&&(GlobalDefine.USE_BACKCDN=!0,resourceMgr.SetResBundleUseBgp()),void n.requestServerListUrl(e,t)):void l.instance.showExitGameNotice(GetLanguage(200416));printLog("get:"+r);var o=JSON.parse(r);o.list.length<=0?l.instance.showExitGameNotice(GetLanguage(200417)):(IS(D).centerServer=o.list[0].ip,null!=o.list[0].cp&&(IS(D).bgp1=o.list[0].cp),null!=o.list[0].cp2&&(IS(D).bgp2=o.list[0].cp2),IS(D).gateWayInfo=o.gateway,n._hasGetServerListUrl=!0,n._errorcount=0,t?n.requestServerList(e):(n._hasGetSever=!0,null!=e&&e(!0)))}))}},e._getTicket=function(e){var t="";return e.sort((function(e,t){return e.key<t.key?-1:1})),e.forEach((function(e){t+=e.value})),d.hashStr(t+w)},e.requestServerList=function(e){var t=this;if(this._hasGetServerListUrl){0!=this._httpRequstId&&p.abort(this._httpRequstId);var n=[{key:"time",value:u.getLocalTime()},{key:"uid",value:""},{key:"plat",value:IS(D).plat}],i=n.map((function(e){return e.key+"="+e.value})).join("&"),r=this._getTicket(n),o=IS(D).getCenterServer();this._errorcount>0&&(1==this._errorcount&&""!=IS(D).getBgp1()&&(o=IS(D).getBgp1(),console.error("切换BGP1 "+o),this.apmlog(9991,"游戏服启用bgp1")),2==this._errorcount&&""!=IS(D).getBgp2()&&(o=IS(D).getBgp2(),console.error("切换BGP2 "+o),this.apmlog(9991,"游戏服启用bgp2"))),0==GlobalDefine.SERVER_LIST_TYPE&&(o+="/xyx_us");var a=o+"/client/server_list?"+i+"&ticket="+r;-1==a.indexOf("http")&&(a="http://"+a),console.error(a),this._httpRequstId=p.get(a,(function(n,i){if(t._httpRequstId=0,console.error("ret "+n),0!=n)return t._errorcount<3?(t._errorcount++,void t.requestServerList(e)):(l.instance.showExitGameNotice(GetLanguage(200419)+n+")"),void t.apmlog(5007,"获取服务器列表失败"));var r=JSON.parse(i);t.convertServerTable(r),t._hasGetServerList=!0,t._hasGetSever=!0,t._errorcount=0,null!=e&&e(!0)}))}},e.requestServerList2=function(e){var t=this;0!=this._httpRequstId&&p.abort(this._httpRequstId);var n=[{key:"time",value:u.getLocalTime()},{key:"uid",value:""},{key:"plat",value:IS(D).plat}],i=n.map((function(e){return e.key+"="+e.value})).join("&"),r=this._getTicket(n),o=IS(D).centerServer2;this._errorcount>0&&(1==this._errorcount&&""!=IS(D).bgp2_1&&(o=IS(D).bgp2_1,console.error("切换BGP1 "+o),this.apmlog(9991,"游戏服启用bgp1")),2==this._errorcount&&""!=IS(D).bgp2_2&&(o=IS(D).bgp2_2,console.error("切换BGP2 "+o),this.apmlog(9991,"游戏服启用bgp2")));var a=o+"/client/server_list?"+i+"&ticket="+r;-1==a.indexOf("http")&&(a="http://"+a),console.error(a),this._httpRequstId=p.get(a,(function(n,i){if(t._httpRequstId=0,console.error("ret "+n),0!=n)return t._errorcount<3?(t._errorcount++,void t.requestServerList2(e)):(l.instance.showExitGameNotice(GetLanguage(200419)+n+")"),void t.apmlog(5007,"获取服务器列表失败"));var r=JSON.parse(i),o=IS(D),a=r.server_list;a.sort((function(e,t){return Number.parseInt(e.id)-Number.parseInt(t.id)})),o.serverList2=a,t._errorcount=0,null!=e&&e(!0)}))},e.convertServerTable=function(e){var t=IS(D),i=e.server_list;if(i.sort((function(e,t){return Number.parseInt(e.id)-Number.parseInt(t.id)})),t.serverList=i,0==GlobalDefine.ENABLE_SDK){var r,o,a,s=null!=(r=c.get("lastServerId",!1))?r:0,l=null!=(o=c.get("lastAcc",!1))?o:"";t.uname=l;for(var _,g=n(i);!(_=g()).done;){var u=_.value;if(u.id===s){t.loginServer=u;break}}t.loginServer=null!=(a=t.loginServer)?a:i[0]}this._hasGetServerList=!0},e.loginCenterServer=function(e,t){var i=this;0!=this._httpRequstId&&p.abort(this._httpRequstId);var r=u.getLocalTime(),o=IS(D),a=o.getCenterServer();this._errorcount>0&&(1==this._errorcount&&""!=IS(D).getBgp1()&&(a=IS(D).getBgp1(),console.error("切换BGP1 "+a)),2==this._errorcount&&""!=IS(D).getBgp2()&&(a=IS(D).getBgp2(),console.error("切换BGP2 "+a))),0==GlobalDefine.SERVER_LIST_TYPE&&(a+="/xyx_us");var s="";if(GlobalDefine.ENABLE_SDK){printLog("sdkext "+o.sdkExt);var l=[{key:"name",value:o.uname},{key:"uid",value:o.uid},{key:"ext",value:o.sdkExt}],S="";l.forEach((function(e){S+=e.value}));var v=d.hashStr(S+w);l[0].value=encodeURIComponent(o.uname),l[2].value=encodeURIComponent(o.sdkExt);var I=o.sdkExt,E=JSON.parse(I),m=h.GetGurLanuage();-1==(s=a+"/oversea/login_auth?&ticket="+v+"&platform="+o.plat+"&username="+E.username+"&suidSignStr="+E.suidSignStr+"&suid="+E.suid+"&device="+_.systemInfo.platform+"&timestamp="+E.timestamp+"&big_version="+GlobalDefine.VERSION+"&version="+GlobalDefine.FULL_VERSION+"&did="+IS(D).device_id+"&game_id="+E.fngid+"&lang="+m).indexOf("http")&&(s="http://"+s)}else{var L=[{key:"name",value:e},{key:"uid",value:e}],R=L.map((function(e){return e.key+"="+e.value})).join("&");L.time=r,-1==(s=a+"/exe/login_auth?"+R+"&ticket="+this._getTicket(L)+"&platform="+o.plat+"&device="+_.systemInfo.platform+"&t="+u.getTimestamp()+"&version="+GlobalDefine.FULL_VERSION).indexOf("http")&&(s="http://"+s)}printLogErr(s),mainGame.state=f.LoginCentering,this._httpRequstId=p.get(s,(function(r,a){var s;if(i._httpRequstId=0,printLogErr("gggggg   "+r),printLogErr(a),0==r){var l=JSON.parse(a);if(0!=l.code){var _=l;return u.serverTime=l.time,null!=l.msg&&""!=l.msg||(_.msg=g.formatStrWithMirrorDeal(GetLanguage(200415),l.code)),printLogErr(l),void t(!1,l.code,_)}i._errorcount=0,"mailiang2"==GlobalDefine.PLAT_TAG&&sdkControl.setOauthData(l.json_data),mainGame.state=f.Logining,c.set("lastAcc",e),o.ip=l.ip,k.maineInfo.ip=l.ip;var S=null!=(s=l.role_id)?s:0;if(GlobalDefine.ENABLE_SDK){l.server_list&&l.server_list.length>0&&(o.loginServer=l.server_list[0]);var v=c.get("chooseServerId",!1);if(null!=v&&""!=v){for(var d,h=IS(D),p=n(h.serverList);!(d=p()).done;){var I=d.value;if(printLogErr(I.id),I.id===v){var E;printLogErr("set login server "+I.id),h.loginServer=I,S=null!=(E=c.get("chooseRoleId",!1))?E:"0",S=parseInt(S);break}}c.remove("chooseRoleId"),c.remove("chooseServerId")}}else c.set("lastServerId",o.loginServer.id);o.pKey=l.p_key+"",u.serverTime=l.time,1==GlobalDefine.ENABLE_SDK&&sdkControl.logLoginFinish(l.uid,l.uname),IS(C).gameid=o.fngid,o.setLoginUidAndTicket(l.uid,o.plat,l.uname,l.is_white_ip,l.time,l.token,o.fngid,S,l.scene_id),t(!0,0,a)}else i._errorcount<3&&GlobalDefine.ENABLE_SDK?(i._errorcount++,i.checkSdkLoginCenterServer()):(t(!1,r,{msg:GetLanguage(200420)}),printLogErr("5004 apm"),i.apmlog(5004,"登录服连接失败"))}))},e.RequestRoleList=function(e,t,n){var i=this;0!=this._httpRequstId&&p.abort(this._httpRequstId);var r=u.getLocalTime(),o=IS(D).getCenterServer(),a=[{key:"plat",value:e},{key:"account_id",value:t},{key:"time",value:r}],s=this._getTicket(a);0==GlobalDefine.SERVER_LIST_TYPE&&(o+="/xyx_us");var l=o+"/client/role_list?plat="+e+"&account_id="+t+"&time="+r+"&ticket="+s;-1==l.indexOf("http")&&(l="http://"+l),this._httpRequstId=p.get(l,(function(e,t){if(i._httpRequstId=0,0==e){var r=JSON.parse(t);if(1==r.code)return IS(D).roleList=r.role_list,void n(!0,r.code);n(!1,r.code)}else n(!1,e)}))},e.RequestRoleList2=function(e,t,n){var i=this;0!=this._httpRequstId&&p.abort(this._httpRequstId);var r=u.getLocalTime(),o=IS(D).centerServer2,a=[{key:"plat",value:e},{key:"account_id",value:t},{key:"time",value:r}],s=this._getTicket(a);0==GlobalDefine.SERVER_LIST_TYPE&&(o+="/xyx");var l=o+"/client/role_list?plat="+e+"&account_id="+t+"&time="+r+"&ticket="+s;-1==l.indexOf("http")&&(l="http://"+l),this._httpRequstId=p.get(l,(function(e,t){if(i._httpRequstId=0,0==e){var r=JSON.parse(t);if(1==r.code)return IS(D).roleList2=r.role_list,void n(!0,r.code);n(!1,r.code)}else n(!1,e)}))},e.getRoleidFromRolelist=function(){var e=IS(D),t=e.roleList;e.serverList;if(e.roleId=0,t.length>0)for(var i,r=n(t);!(i=r()).done;){var o=i.value;if(o.server_id==e.loginServer.id){e.roleId=o.role_id;break}}},e.checkIsIosIp2=function(e,t){var i=/(OS 1((5\.[0-6])))|(Version\/1((5\.[0-6])))/.test(window.navigator.userAgent);if(i)return printLog("是IOS15,使用新网关"),!0;if(printLog("不是IOS15"),t)for(var r,o=n(t);!(r=o()).done;){var a=r.value;if(printLogErr(a+" "+e),a==e)return printLogErr("服务器匹配，使用新网关"),!0}return i},e.connectGameServer=function(){var e=IS(D),t=e.loginServer;if(t){var n=e.gateWayInfo,i=n.ip;e.gateWayInfo.ip2&&this.checkIsIosIp2(t.id,n.ip2_server_ids)&&(i=e.gateWayInfo.ip2),1==e.reconnectLoginCount?n.bgp&&n.bgp.length>0&&-1!=n.bgp[0].indexOf("wss")&&(i=n.bgp[0],this.apmlog(5005,"启用BGP连接0:"+i)):2==e.reconnectLoginCount?(n.bgp&&n.bgp.length>1&&-1!=n.bgp[1].indexOf("wss")&&(i=n.bgp[1]),this.apmlog(5005,"启用BGP连接1:"+i)):3==e.reconnectLoginCount&&(n.bgp&&n.bgp.length>1&&-1!=n.bgp[2].indexOf("wss")&&(i=n.bgp[2]),this.apmlog(5005,"启用BGP连接2:"+i));var r=t.game_server,o={host:i+"?token="+r,gateway:!0,gameKey:r},a=n.bgp;sdkControl.logSelectServer(e.uname,"0","0",t.id),netManager.connectServer(o,a)}},e.enterGame=function(){if(IS(D).reconnectLoginCount=0,L.loginGame(),mainGame.enterGame)return mainGame.state=f.Runing,void normalEvent.emit(q.RECONNECT_NET_LINK);mainGame.state=f.EnterLoading,_.ListionKeyboardComplete()},e.loginGameServer=function(){var e=IS(D),t={device:_.systemInfo.platform,device_id:IS(D).device_id+"",device_name:IS(D).device_name,game_version:GlobalDefine.FULL_VERSION,os:o.os,os_version:o.osVersion,nm:o.NetworkType[o.getNetworkType()],screen:a.windowSize.width+" X "+a.windowSize.height,ip:e.ip,belong:k.maineInfo},n=l._instance.curlaguage,i={uid:e.uid,game_id:e.loginGameId,server_id:e.loginSceneId,uname:e.uname,plat:e.plat,is_white_ip:e.isWhiteIp,time:e.loginTime,p_key:e.pKey,ticket:e.loginTicket,role_id:e.roleId,machine_info:t,proto_version:1,language:n};e.reconnectLoginCount>0&&this.apmlog(5009,"启用bgp登录成功，重试次数："+e.reconnectLoginCount),netManager.send("login.role_login_c2s",i)},e.activeServerInfo=function(){IS(E).reqGoodsInfo(),IS(b).reqRelicInfo(),IS(G).reqFarmInfo(),IS(T).reqPrivilegeCardInfo(),IS(A).reqSkillTabInfo(),IS(R).reqPetTabInfo(),IS(b).reqRelicTabInfo(),IS(N).send_role_plan_info_c2s(),IS(O).reqCaptureSlaveReward(0),IS(O).reqCaptureSlaveReward(1)},e.reconnectLogin=function(){var e=IS(D);e.reconnectCount=0,mainGame.state=f.Logining,this._speedPlugIn=0,e.reconnectLoginCount>3?normalEvent.emit(q.RECONNECT_NET_CLOSE):(e.reconnectLoginCount++,normalEvent.emit(q.RECONNECT_LOGIN_START),this.connectGameServer())},e.reloginSdk=function(){normalEvent.emit(q.RECONNECT_LOGIN_START),IS(D).isReloging=!0,sdkControl.login()},e.reconnectServer=function(){var e=IS(D),t=_.systemInfo,n={device:t.platform,device_id:t.appId,device_name:IS(D).device_name,game_version:GlobalDefine.FULL_VERSION,os:o.os,os_version:o.osVersion,nm:o.NetworkType[o.getNetworkType()],screen:a.windowSize.width+" X "+a.windowSize.height,ip:e.ip},i={uid:e.uid,server_id:e.loginSceneId,role_id:e.roleId,time:u.serverTime,ticket:e.loginTicket,machine_info:n,p_key:e.pKey};this._speedPlugIn=0,netManager.send("login.role_reconnect_c2s",i)},e.reqCheat=function(e){var t={code:e};netManager.send("login.cheat_c2s",t)},e.apmlog=function(e,t){var n;if(6001==e){var i=this.apmLogs[t];if(i){if(u.getLocalTime()-i.time<300)return}else i={msg:t,time:u.getLocalTime()},this.apmLogs[t]=i;i.time=u.getLocalTime()}var r=IS(D),a=r.uid,s=null==(n=r.loginServer)?void 0:n.id;null==s&&(s="0");var l="server_id="+s+"&uid="+a+"&log_time="+u.serverTime+"\n        &code="+e+"&code_msg="+t+"&os="+o.os+"&os_version="+o.osVersion+"&game_version="+GlobalDefine.VERSION;p.post(P.APM_URL,l,null)},e.on_role_login_s2c=function(e){var t=IS(D);switch(e.code!=y.SUCCESS&&console.error("loginerror "+e.code),e.code){case y.SUCCESS:this.apmLogs={};var n=1;null!=e.info&&null!=e.info.kv&&(n=e.info.kv[0].v),0==t.roleId?(sdkControl.logCreateRole(String(e.role_id),e.role_name,String(e.server_id),e.server_name),sdkControl.setShareCallbackInfo(0,e.role_id),sdkControl.logEnterGame(t.uid,String(e.role_id),e.role_name,String(n),String(e.server_id),e.server_name),t.newRole=0):(sdkControl.setShareCallbackInfo(1,e.role_id),sdkControl.logEnterGame(t.uid,String(e.role_id),e.role_name,String(n),String(e.server_id),e.server_name),t.newRole=0);var i=c.get("newServerOldId");if(i){var r=parseInt(i);IS(I).send_return_new_role_c2s(r),c.remove("newServerOldId")}u.serverTimeZone=e.time_zone,u.serverOpenTime=e.open_time,u.serverTime=e.serv_time,t.roleId=e.role_id,this.enterGame();break;case y.Maintenance:l.instance.showExitGameNotice(GetLanguage(200421));break;case y.IP_SEALED:l.instance.showExitGameNotice(g.formatStrWithMirrorDeal(GetLanguage(201008),e.server_id,e.role_id));break;case y.NO_ROLE_INFO:l.instance.showExitGameNotice(GetLanguage(200423));break;case y.VERSION_NOT_RIGHT:l.instance.showExitGameNotice(GetLanguage(200424));break;case y.RROR_CREATE_ROLE_LIMIT:l.instance.showExitGameNotice(GetLanguage(200425));break;case y.GO_TO_NEW_SERVER:l.instance.showExitGameNotice(GetLanguage(200426));break;case y.ERROR_IP_CREATE_ROLE_BANNED:l.instance.showExitGameNotice(GetLanguage(200427));break;default:l.instance.showExitGameNotice(GetLanguage(200428)+e.code)}normalEvent.emit(q.LOGIN_CALLBACK,e.code)},e.on_heart_beat_s2c=function(e){var t=u.heartTime;if(u.heartTime=e.svr_time,0!=t&&mainGame.state==f.Runing&&!(s.getTotalFrames()-mainGame.runStartFrame<300)){var n=e.svr_time-t;if(n<4&&(this._speedPlugIn++,this._speedPlugIn%50==0)){var i="["+this._speedPlugIn+"] 角色ID:"+IS(D).roleId+" 服务器时间:"+t+" 客户端时间:"+u.serverTime+" 服务器间隔: "+n;printLogErr("加速嫌疑....",i),this.apmlog(5e3,i),this.reqCheat(1),normalEvent.emit(q.CHEAT)}}},e.on_role_reconnect_s2c=function(e){0==e.code?(mainGame.state=f.Runing,netManager.reconnectSucc(),L.reconnectGame(),normalEvent.emit(q.RECONNECT_NET_LINK)):8==e.code?m.showBoxTip({tip:g.formatStrWithMirrorDeal(GetLanguage(201008),e.server_id,e.role_id),func:function(e){mainGame.exitApp()}}):973==e.code||(netManager.disconnect(),GlobalDefine.ENABLE_SDK?this.reloginSdk():this.reconnectLogin())},e.on_logout_s2c=function(e){var t;(0!=this._httpRequstId&&p.abort(this._httpRequstId),mainGame.state!=f.Disconnect)&&(21!=e.code&&(mainGame.state=f.Disconnect,netManager.disconnect(),t=2==e.code?configErrorInfo.getDataByKey(735).info:null!=configErrorInfo.getDataByKey(e.code)?configErrorInfo.getDataByKey(e.code).info:GetLanguage(200429),normalEvent.emit(q.LOGIN_LOGOUT,t)))},e.reqPnodeUrl=function(){netManager.send("login.pnode_url_c2s",{})},e.on_pnode_url=function(e){IS(D).nodeUrl=e.url},i}());i._RF.pop()}}}));
