System.register("chunks:///_virtual/CircleOfFriendsControl.ts",["cc","./TimeUtil.ts","./Md5.ts","./HttpClient.ts","./ChatDataCache.ts","./MessageView.ts","./LoginDataCache.ts","./RoleDataCache.ts","./CircleOfFriendsDataCache.ts","./CircleOfFriendsDefine.ts"],(function(e){"use strict";var a,t,n,i,l,o,s,r,u,d;return{setters:[function(e){a=e.cclegacy},function(e){t=e.default},function(e){n=e.Md5},function(e){i=e.HttpClient},function(e){l=e.ChatDataCache},function(e){o=e.default},function(e){s=e.LoginDataCache},function(e){r=e.RoleDataCache},function(e){u=e.CircleOfFriendsDataCache},function(e){d=e.CircleOfFriendsDefine}],execute:function(){a._RF.push({},"e6d8f68g+RKOrzN/CUL7uFE","CircleOfFriendsControl",void 0);e("default",function(){var e=a.prototype;function a(){}return e.clear=function(){},e.onLogin=function(){},e.onReconnect=function(){},e._getTicket=function(e){var a="";return e.forEach((function(e){a+=e.value})),n.hashStr(a+"bd7a8ed1cf04e996e548812466ee8216")},e._sendUrl=function(e,a,n,l){void 0===a&&(a=[]),void 0===n&&(n=1),a.push({key:"time",value:t.serverTime});var o=this._getTicket(a);a.push({key:"sign",value:o});var r=IS(s).nodeUrl+"/";if(2==n){for(var u=r+e,d={},c=0;c<a.length;c++){var v=a[c];d[v.key]=v.value}var f=JSON.stringify(d);i.post(u,f,l,1)}else{for(var y="",S=0;S<a.length;S++){var k=a[S];y+=k.key+"="+k.value,S<a.length-1&&(y+="&")}var _=r+e+"?"+y;i.get(_,l)}},e.sendToGetRole=function(e){var a=[{key:"role_id",value:IS(r).GetRoleId()},{key:"target_id",value:e}];this._sendUrl("pyq/get_role",a,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetRoleInfo(t.data)}}))},e.sendToGetSubscrib=function(e,a,t){var n=[{key:"role_id",value:IS(r).GetRoleId()},{key:"target_id",value:e},{key:"page",value:null!=a?a:1},{key:"page_size",value:t}];this._sendUrl("pyq/get_subscrib",n,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetAttentionData(t.data)}}))},e.sendToGetFan=function(e,a,t){var n=[{key:"role_id",value:IS(r).GetRoleId()},{key:"target_id",value:e},{key:"page",value:null!=a?a:1},{key:"page_size",value:t}];this._sendUrl("pyq/get_fan",n,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetFansData(t.data)}}))},e.sendToGetMoment=function(e,a,t){var n=[{key:"role_id",value:IS(r).GetRoleId()},{key:"target_id",value:e},{key:"page",value:null!=a?a:1},{key:"page_size",value:t}];this._sendUrl("pyq/get_moment",n,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetDynamicPlayerData(t.data)}}))},e.sendToPostMoment=function(e,a){var n=this,i=IS(l).GetIsBanRole(IS(r).GetRoleId());i&&i>t.serverTime?o.showFlyTip(GetLanguage(300158)):sdkControl.checkStr(e,(function(e,t){var i=[{key:"role_id",value:IS(r).GetRoleId()},{key:"moment",value:e},{key:"photo",value:null!=a?a:""}];1==t&&n._sendUrl("pyq/moment",i,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).InsertDynamic(t.data)}}))}),2)},e.sendToPostDiscuss=function(e,a){var n=this,i=IS(l).GetIsBanRole(IS(r).GetRoleId());i&&i>t.serverTime?o.showFlyTip(GetLanguage(300158)):sdkControl.checkStr(a,(function(a,t){var i=[{key:"role_id",value:IS(r).GetRoleId()},{key:"moment_id",value:e},{key:"discuss",value:a}];1==t&&n._sendUrl("pyq/moment_discuss",i,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).InsertMoment(t.data)}}))}),2)},e.sendToPostMomentLike=function(e,a){var t=[{key:"role_id",value:IS(r).GetRoleId()},{key:"moment_id",value:e},{key:"act",value:a}];this._sendUrl("pyq/moment_like",t,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetLike(t.data)}}))},e.sendToPostDiscussLike=function(e,a,t){var n=[{key:"role_id",value:IS(r).GetRoleId()},{key:"moment_id",value:e},{key:"discuss_id",value:a},{key:"act",value:t}];this._sendUrl("pyq/discuss_like",n,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetDisscussLike(t.data)}}))},e.sendToSetArea=function(e,a,t){void 0===t&&(t=1);var n=[{key:"role_id",value:IS(r).GetRoleId()},{key:"label",value:t},{key:"area1",value:e},{key:"area2",value:a}];this._sendUrl("pyq/area",n,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).UpdateArea(t.data)}}))},e.sendToSetTag=function(e){var a=[{key:"role_id",value:IS(r).GetRoleId()},{key:"label",value:e}];this._sendUrl("pyq/label",a,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).UpdateTag(t.data)}}))},e.sendToSubscrib=function(e,a){if(0!=e){var t=[{key:"role_id",value:IS(r).GetRoleId()},{key:"target_id",value:e},{key:"opt",value:a}];this._sendUrl("pyq/subscrib",t,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetAttention(t.data)}}))}},e.sendToGetDiscuss=function(e,a,t){var n=[{key:"role_id",value:IS(r).GetRoleId()},{key:"id",value:e},{key:"page",value:null!=a?a:1},{key:"page_size",value:t}];this._sendUrl("pyq/get_discuss",n,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetDiscussListData(t.data)}}))},e.sendToGetHotMoment=function(e,a,t){var n=[{key:"role_id",value:IS(r).GetRoleId()},{key:"label",value:t},{key:"page",value:null!=e?e:1},{key:"page_size",value:a}];this._sendUrl("pyq/get_hot_moments",n,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetSquareMoments(t.data,d.MainPanelSquareTabType.Hot)}}))},e.sendToGetAreaMoment=function(e,a,t){var n=[{key:"role_id",value:IS(r).GetRoleId()},{key:"label",value:t},{key:"page",value:null!=e?e:1},{key:"page_size",value:a}];this._sendUrl("pyq/get_area_moments",n,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetSquareMoments(t.data,d.MainPanelSquareTabType.Local)}}))},e.sendToGetSubscribeMoment=function(e,a){var t=[{key:"role_id",value:IS(r).GetRoleId()},{key:"page",value:null!=e?e:1},{key:"page_size",value:a}];this._sendUrl("pyq/get_subscribe_moments",t,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetSquareMoments(t.data,d.MainPanelSquareTabType.Attention)}}))},e.sendToGetOfficialMoment=function(e,a){var t=[{key:"role_id",value:IS(r).GetRoleId()},{key:"page",value:null!=e?e:1},{key:"page_size",value:a}];this._sendUrl("pyq/get_official_moments",t,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetSquareMoments(t.data,d.MainPanelSquareTabType.Offical)}}))},e.sendToDeleteMoment=function(e){var a=[{key:"moment_id",value:e}];this._sendUrl("pyq/del_moment",a,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).DeleteDynamic(t.data)}}))},e.sendToDeleteDiscuss=function(e){var a=[{key:"discuss_id",value:e}];this._sendUrl("pyq/del_discuss",a,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).DeleteDiscuss(t.data)}}))},e.sendToBlock=function(e,a){if(0!=e){var t=[{key:"role_id",value:IS(r).GetRoleId()},{key:"target_id",value:e},{key:"act",value:a}];this._sendUrl("pyq/block",t,2,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetBlock(t.data)}}))}},e.sendToGetBlock=function(e,a){var t=[{key:"role_id",value:IS(r).GetRoleId()},{key:"page",value:null!=e?e:1},{key:"page_size",value:a}];this._sendUrl("pyq/get_block_roles",t,1,(function(e,a){if(0==e){var t=JSON.parse(a);IS(u).SetBlockData(t.data)}}))},a}());a._RF.pop()}}}));
