System.register("chunks:///_virtual/CircleOfFriendsDataCache.ts",["cc","./TimeUtil.ts","./RoleDataCache.ts","./CircleOfFriendsDefine.ts"],(function(i){"use strict";var t,s,e,n,a;return{setters:[function(i){t=i.cclegacy},function(i){s=i.default},function(i){e=i.RoleDataCache},function(i){n=i.CircleOfFriendsEvent,a=i.CircleOfFriendsDefine}],execute:function(){t._RF.push({},"ea2c9t079FNP4aBmTnoB3ke","CircleOfFriendsDataCache",void 0);i("CircleOfFriendsDataCache",function(){function i(){this.myRoleInfo=void 0,this.otherRoleInfo=void 0,this.attenInfo=void 0,this.attentionList=[],this.attentionDict={},this.blockInfo=void 0,this.blockList=[],this.blockDict={},this.fansInfo=void 0,this.fansList=[],this.fansDict={},this.playerDynamicInfo=void 0,this.playerDynamicList=[],this.playerDynamicDict={},this.playerDynamicRoleDict={},this.otherDynamicInfo=void 0,this.otherDynamicList=[],this.otherDynamicDict={},this.otherDynamicRoleDict={},this.squareInfo=void 0,this.squareDynamicList=[],this.squareDynamicDict={},this.squareDynamicRoleDict={},this.discussDynamicId=0,this.discussDynamicInfo=void 0,this.discussList=[],this.discussDict={},this.localCacheList=[],this.cacheTime=void 0}var t=i.prototype;return t.clear=function(){},t.SetRoleInfo=function(i){i.target_id==IS(e).GetRoleId()?this.myRoleInfo=i:this.otherRoleInfo=i,normalEvent.emit(n.UpdateRoleInfo)},t.GetMyRoleInfo=function(){return this.myRoleInfo},t.GetOtherRoleInfo=function(){return this.otherRoleInfo},t.SetAttentionData=function(i){1==i.page&&(this.attentionList=[],this.attentionDict={}),this.attenInfo=i,i.subscribs.length<a.PageSize&&(this.attenInfo.isMaxPage=!0);for(var t=0;t<i.subscribs.length;t++){var s=i.subscribs[t];this.attentionDict[s.target_id]||(this.attentionDict[s.target_id]=s,this.attentionList.push(s))}normalEvent.emit(n.UpdateAttentionInfo)},t.GetAttentionInfo=function(){var i;return null!=(i=this.attenInfo)?i:{}},t.GetAttentionData=function(){return this.attentionList},t.ClearAttentionInfo=function(){this.attenInfo=null,this.attentionList=[],this.attentionDict={}},t.ClearBlockInfo=function(){this.blockInfo=null,this.blockList=[],this.blockDict={}},t.SetFansData=function(i){1==i.page&&(this.fansList=[],this.fansDict={}),this.fansInfo=i,i.fans.length<a.PageSize&&(this.fansInfo.isMaxPage=!0);for(var t=0;t<i.fans.length;t++){var s=i.fans[t];this.fansDict[s.target_id]||(this.fansDict[s.target_id]=s,this.fansList.push(s))}normalEvent.emit(n.UpdateFansInfo)},t.GetFansInfo=function(){var i;return null!=(i=this.fansInfo)?i:{}},t.GetFansData=function(){return this.fansList},t.ClearFansInfo=function(){this.fansInfo=null,this.fansList=[],this.fansDict={}},t.SetDynamicPlayerData=function(i){var t,s,c;i.target_id==IS(e).GetRoleId()?(this.playerDynamicInfo=i,i.moments.length<a.PageSize&&(this.playerDynamicInfo.isMaxPage=!0),1==i.page&&(this.playerDynamicList=[],this.playerDynamicDict={},this.playerDynamicRoleDict={}),t=this.playerDynamicList,s=this.playerDynamicDict,c=this.playerDynamicRoleDict):(this.otherDynamicInfo=i,i.moments.length<a.PageSize&&(this.otherDynamicInfo.isMaxPage=!0),1==i.page&&(this.otherDynamicList=[],this.otherDynamicDict={},this.otherDynamicRoleDict={}),t=this.otherDynamicList,s=this.otherDynamicDict,c=this.otherDynamicRoleDict);for(var o=0;o<i.moments.length;o++){var r=i.moments[o];s[r.id]||(s[r.id]=r,c[r.role_id]||(c[r.role_id]=[]),c[r.role_id].push(r),t.push(r)),this.UpdateDynamicOtherInfo(r)}normalEvent.emit(n.UpdateDynamicInfo)},t.GetPlayerDynamicInfo=function(){var i;return null!=(i=this.playerDynamicInfo)?i:{}},t.GetOtherDynamicInfo=function(){var i;return null!=(i=this.otherDynamicInfo)?i:{}},t.GetDynamicPlayerList=function(){return this.playerDynamicList},t.GetDynamicOtherList=function(){return this.otherDynamicList},t.ClearPlayerInfo=function(){this.playerDynamicInfo=null,this.playerDynamicList=[],this.playerDynamicDict={},this.playerDynamicRoleDict={}},t.ClearDynamicOtherInfo=function(){this.otherDynamicInfo=null,this.otherDynamicList=[],this.otherDynamicDict={},this.otherDynamicRoleDict={}},t.InsertDynamic=function(i){var t=this,s=IS(e).GetRoleId(),c=i;i.discuss_num=0,this.playerDynamicDict[c.id]||(this.playerDynamicDict[c.id]=c,this.playerDynamicRoleDict[s]||(this.playerDynamicRoleDict[s]=[]),this.playerDynamicRoleDict[s].unshift(c),this.playerDynamicList.unshift(c)),this.localCacheList.push(i),this.cacheTime&&(normalTimer.stop(this.cacheTime),this.cacheTime=null),this.cacheTime=normalTimer.start(10,1,(function(){t.localCacheList=[]})),this.GetSqureaInfo().type==a.MainPanelSquareTabType.Local&&(this.squareDynamicDict[c.id]||(this.squareDynamicDict[c.id]=c,this.squareDynamicRoleDict[s]||(this.squareDynamicRoleDict[s]=[]),this.squareDynamicRoleDict[s].unshift(c),this.squareDynamicList.unshift(c))),normalEvent.emit(n.InsertDynamic)},t.InsertMoment=function(i){var t=!1;i.moment_id==this.discussDynamicId&&(this.discussDict[i.id]||(i.is_like=0,i.like_num=0,i.time=s.serverTime,this.discussDict[i.id]=i,this.discussList.unshift(i),t=!0));for(var e=[this.playerDynamicDict,this.otherDynamicDict,this.squareDynamicDict],a={},c=0;c<e.length;c++){var o=e[c][i.moment_id];if(o&&!a[o]){a[o]=!0;var r=i;o.discusses||(o.discusses=[]),o.discusses.unshift(r),o.discusses.length>3&&o.discusses.splice(3,1),o.discuss_num+=1,t=!0}}t&&normalEvent.emit(n.InsertDiscusses)},t.SetLike=function(i){for(var t=!1,s=[this.playerDynamicDict,this.otherDynamicDict,this.squareDynamicDict],a=0;a<s.length;a++){var c=s[a][i.moment_id];c&&(i.role_id==IS(e).GetRoleId()&&(c.is_like=1==i.act?1:0),c.like_num=i.like_num,t=!0)}t&&normalEvent.emit(n.UpdateDynamicInfo)},t.SetDisscussLike=function(i){var t=this.discussDict[i.discuss_id];t&&(i.role_id==IS(e).GetRoleId()&&(t.is_like=1==i.act?1:0),t.like_num=i.like_num,normalEvent.emit(n.UpdateDynamicDiscuss))},t.UpdateArea=function(i){this.myRoleInfo&&(this.myRoleInfo.area1=i.area1,this.myRoleInfo.area2=i.area2,normalEvent.emit(n.UpdateRoleInfo))},t.UpdateTag=function(i){this.myRoleInfo&&(this.myRoleInfo.label=i.label,normalEvent.emit(n.UpdateRoleInfo))},t.SetAttention=function(i){this.attentionDict[i.target_id]&&(this.attentionDict[i.target_id].state=i.state),this.fansDict[i.target_id]&&(this.fansDict[i.target_id].state=i.state),this.otherRoleInfo&&this.otherRoleInfo.target_id==i.target_id&&(this.otherRoleInfo.state=i.state,1==i.state||3==i.state?this.otherRoleInfo.fan_num++:this.otherRoleInfo.fan_num--);for(var t=[this.otherDynamicRoleDict,this.squareDynamicRoleDict],s=0;s<t.length;s++){var e=t[s];if(e[i.target_id])for(var a=e[i.target_id],c=0;c<a.length;c++)a[c].state=i.state}normalEvent.emit(n.UpdateAttentionInfo)},t.SetDiscussListData=function(i){this.discussDynamicId=i.id,1==i.page&&(this.discussList=[],this.discussDict={}),this.discussDynamicInfo=i,i.discusses.length<a.PageSize&&(this.discussDynamicInfo.isMaxPage=!0);for(var t=0;t<i.discusses.length;t++){var s=i.discusses[t];if(this.discussDict[s.id]||(this.discussDict[s.id]=s,this.discussList.push(s)),1==i.page)for(var e=[this.playerDynamicDict,this.otherDynamicDict,this.squareDynamicDict],c=0;c<e.length;c++){var o=e[c][i.id];if(o)for(var r=0;r<o.discusses.length;r++)this.discussList[r]&&o.discusses[r].time>this.discussList[r].time&&(o.discusses[r]=this.discussList[r])}}normalEvent.emit(n.UpdateDynamicDiscuss)},t.GetDiscussDynamicInfo=function(){var i;return null!=(i=this.discussDynamicInfo)?i:{}},t.GetDiscussList=function(i){return i==this.discussDynamicId?this.discussList:[]},t.ClearDisscussInfo=function(){this.discussDynamicInfo=null,this.discussDynamicId=0,this.discussList=[],this.discussDict={}},t.SetSquareMoments=function(i,t){var e,c,o,r;i.type=t,i.subType=i.label,this.squareInfo=i,1==i.page&&(this.squareDynamicList=[],this.squareDynamicDict={},this.squareDynamicRoleDict={});var h=null!=(e=null!=(c=null!=(o=null!=(r=i.hot_moments)?r:i.area_moments)?o:i.subscribe_moments)?c:i.official_moments)?e:[];h.length<a.PageSize&&(this.squareInfo.isMaxPage=!0);for(var l=0;l<h.length;l++){var u=h[l];this.squareDynamicDict[u.id]||(this.squareDynamicDict[u.id]=u,this.squareDynamicRoleDict[u.role_id]||(this.squareDynamicRoleDict[u.role_id]=[]),this.squareDynamicRoleDict[u.role_id].push(u),this.squareDynamicList.push(u)),this.UpdateDynamicOtherInfo(u)}if(this.squareInfo.type==a.MainPanelSquareTabType.Local&&this.squareInfo.area1>0)for(var D=0;D<this.localCacheList.length;D++){var m=this.localCacheList[D];s.serverTime-m.time<10&&this.squareInfo.area1==m.area1&&!this.squareDynamicDict[m.id]&&(this.squareDynamicDict[m.id]=m,this.squareDynamicRoleDict[m.role_id]||(this.squareDynamicRoleDict[m.role_id]=[]),this.squareDynamicRoleDict[m.role_id].unshift(m),this.squareDynamicList.unshift(m))}normalEvent.emit(n.UpdateDynamicInfo)},t.GetSqureaInfo=function(){var i;return null!=(i=this.squareInfo)?i:{}},t.GetSquareDynamicList=function(i,t){return void 0===t&&(t=null),!this.squareInfo||this.squareInfo.type!=i||null!=t&&t!=this.squareInfo.subType?[]:this.squareDynamicList},t.ClearSquareInfo=function(){this.squareInfo=null,this.squareDynamicList=[],this.squareDynamicDict={},this.squareDynamicRoleDict={}},t.UpdateDynamicOtherInfo=function(i){for(var t=[this.playerDynamicDict,this.otherDynamicDict,this.squareDynamicDict],s=0;s<t.length;s++){var e=t[s][i.id];e&&(e.discuss_num=i.discuss_num,e.like_num=i.like_num,e.photo=i.photo,e.state=i.state,e.is_like=i.is_like,e.discusses=i.discusses)}},t.DeleteDynamic=function(i){for(var t=[{dict:this.playerDynamicDict,list:this.playerDynamicList,roleList:this.playerDynamicRoleDict},{dict:this.otherDynamicDict,list:this.otherDynamicList,roleList:this.otherDynamicRoleDict},{dict:this.squareDynamicDict,list:this.squareDynamicList,roleList:this.squareDynamicRoleDict}],s=0;s<t.length;s++){var e=t[s].dict,a=e[i.moment_id];if(a){for(var c=t[s].list,o=0;o<c.length;o++)if(c[o].id==i.moment_id){c.splice(o,1);break}var r=t[s].roleList[a.role_id];if(r)for(var h=0;h<r.length;h++)if(r[h].id==i.moment_id){r.splice(h,1);break}delete e[i.moment_id]}}for(var l=0;l<this.localCacheList.length;l++)if(this.localCacheList[l].id==i.moment_id){this.localCacheList.splice(l,1);break}normalEvent.emit(n.DeleteDynamic,i.moment_id)},t.DeleteDiscuss=function(i){if(this.discussDynamicId==i.moment_id&&this.discussDict[i.discuss_id]){for(var t=0;t<this.discussList.length;t++)if(this.discussList[t].id==i.discuss_id){this.discussList.splice(t,1);break}delete this.discussDict[i.discuss_id]}for(var s=[this.playerDynamicDict,this.otherDynamicDict,this.squareDynamicDict],e=0;e<s.length;e++){var a=s[e][i.moment_id];if(a)for(var c=0;c<a.discusses.length;c++)if(a.discusses[c].id==i.discuss_id){a.discuss_num--,a.discusses.splice(c,1);break}}normalEvent.emit(n.DeleteDynamicDiscuss)},t.SetBlock=function(i){this.blockDict[i.target_id]&&(this.blockDict[i.target_id].is_block=i.is_block),this.otherRoleInfo&&this.otherRoleInfo.target_id==i.target_id&&(this.otherRoleInfo.is_block=i.is_block);for(var t=[this.otherDynamicRoleDict],s=0;s<t.length;s++){var e=t[s];if(e[i.target_id])for(var a=e[i.target_id],c=0;c<a.length;c++)a[c].is_block=i.is_block}normalEvent.emit(n.UpdateBlockInfo)},t.SetBlockData=function(i){1==i.page&&(this.blockList=[],this.blockDict={}),this.blockInfo=i,i.block_roles.length<a.PageSize&&(this.blockInfo.isMaxPage=!0);for(var t=0;t<i.block_roles.length;t++){var s=i.block_roles[t];this.blockDict[s.target_id]||(this.blockDict[s.target_id]=s,this.blockList.push(s))}normalEvent.emit(n.UpdateBlockInfo)},t.GetBlockData=function(){return this.blockList},t.GeBlockInfo=function(){var i;return null!=(i=this.blockInfo)?i:{}},i}());t._RF.pop()}}}));

