System.register("chunks:///_virtual/WeeklyCardControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ActivityDataCache.ts","./ActivityDefine.ts","./WeeklyCardDataCache.ts","./WeeklyCardDefine.ts"],(function(e){"use strict";var t,a,n,r,i,c,d,o;return{setters:[function(e){t=e.createForOfIteratorHelperLoose},function(e){a=e.cclegacy},function(e){n=e.default},function(e){r=e.ActivityType,i=e.ActivityState,c=e.ActivityEventDefine},function(e){d=e.default},function(e){o=e.WeeklyCardEventDefine}],execute:function(){a._RF.push({},"d7c53ZZE0RD56yUbP61Pzqj","WeeklyCardControl",void 0);e("default",function(){var e=a.prototype;function a(){netManager.addEventListener("act.act_week_card_info_s2c",this.update_24_87,this),netManager.addEventListener("act.act_week_card_reward_s2c",this.update_24_88,this),normalEvent.on(c.OnActivityListUpdate,this.activityChange,this),normalEvent.on(c.OnActivityInfoUpdate,this.activityChange,this)}return e.clear=function(){},e.activityChange=function(e){if(void 0===e&&(e=null),!e||e.type==r.WeeklyCard){var t=IS(n).GetActivityInfo(r.WeeklyCard);t&&t.state==i.Open&&(IS(d).updateActivityInfo(),this.reqWeeklyCardInfo())}},e.reqWeeklyCardInfo=function(){netManager.send("act.act_week_card_info_c2s",{})},e.update_24_87=function(e){IS(d).isCardBuyed=1==e.is_buy,IS(d).rewardGainRecord=[];for(var a,i=t(e.status_list);!(a=i()).done;){var c=a.value;IS(d).rewardGainRecord[c.k]=c.v}for(var s=0;s<IS(d).weeklycardInfo.length;s++)null==IS(d).rewardGainRecord[IS(d).weeklycardInfo[s].id]&&(IS(d).rewardGainRecord[IS(d).weeklycardInfo[s].id]=0);normalEvent.emit(o.WEEKLYCARD_UPDATE_LIST),IS(n).UpdateMainRedByActType(r.WeeklyCard)},e.reqWeeklyCardReward=function(e){netManager.send("act.act_week_card_reward_c2s",{reward_id:e})},e.update_24_88=function(e){this.reqWeeklyCardInfo()},a}());a._RF.pop()}}}));

