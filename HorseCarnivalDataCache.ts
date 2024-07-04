System.register("chunks:///_virtual/HorseCarnivalDataCache.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ConfigGlobal.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./BagModel.ts"],(function(t){"use strict";var e,a,r,n,i,o,u;return{setters:[function(t){e=t.createForOfIteratorHelperLoose},function(t){a=t.cclegacy},function(t){r=t.ConfigGlobal},function(t){n=t.default},function(t){i=t.ActivityEventDefine,o=t.ActivityType},function(t){u=t.BagModel}],execute:function(){a._RF.push({},"1d1796Vj0NC2pw8PXjnHWyN","HorseCarnivalDataCache",void 0);t("HorseCarnivalDataCache",function(){function t(){this.info={}}var a=t.prototype;return a.clear=function(){},a.updateInfo=function(t){var a,r,o;this.info[t.act_type]||(this.info[t.act_type]={count:0,gotReward:{},lucky_list:[],remain_draw:90,get_drop:[],choose_list:{},guaranteed_list:{}}),this.info[t.act_type].count=t.count,this.info[t.act_type].gotReward={};for(var u,c=e(null!=(l=t.count_reward_list)?l:[]);!(u=c()).done;){var l,s=u.value;this.info[t.act_type].gotReward[s]=!0}this.info[t.act_type].choose_list={};for(var f,d=e(null!=(_=t.choose_list)?_:[]);!(f=d()).done;){var _,v=f.value;this.info[t.act_type].choose_list[v.k]=v.list}this.info[t.act_type].guaranteed_list={};for(var p,y=e(null!=(g=t.guaranteed_list)?g:[]);!(p=y()).done;){var g,h=p.value;this.info[t.act_type].guaranteed_list[h.k]=h.v}this.info[t.act_type].lucky_list=null!=(a=t.lucky_list)?a:[],this.info[t.act_type].remain_draw=null!=(r=t.remain_draw)?r:90,this.info[t.act_type].get_drop=null!=(o=t.get_drop)?o:[],normalEvent.emit(i.OnHorseCarnivalUpdate),IS(n).UpdateMainRedByActType(t.act_type)},a.updateReward=function(t){this.info[t.act_type].gotReward[t.id]=!0,normalEvent.emit(i.OnHorseCarnivalReward),IS(n).UpdateMainRedByActType(t.act_type)},a.getInfo=function(t){var e;return null!=(e=this.info[t])?e:{count:0,gotReward:{},lucky_list:[],remain_draw:90,get_drop:[],choose_list:{},guaranteed_list:{}}},a.getRedNum=function(e){var a=IS(n).GetActivityInfo(e);if(!a)return 0;var r=configMount_draw_cumulative_times.getDatas(),i=this.getInfo(e);for(var c in r)if(r.hasOwnProperty(c)){var l=r[c];if(i.count>=l.cumulative_times&&!i.gotReward[l.id]&&l.type==a.type&&l.group_id==a.roundCfg.group_id)return 1}if(e!=o.HorseCarnival&&e!=o.Artifact&&e!=o.Artifact1&&e!=o.Fate){var s=IS(t).GetCost(e)[0];if(IS(u).getGoodsCountByGoodsGtid(s)>=1)return 1}return 0},a.canSelectReward=function(t,a){var r,i=IS(n).GetActivityInfo(t);if(!i)return!1;var o=configMount_draw.getDatas();if(a){for(var u in o)if(o.hasOwnProperty(u)){var c=o[u];c.id==a&&(r=c)}}else for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];if(s.type==i.type&&s.group_id==i.roundCfg.group_id&&4==s.quality){r=s;break}}if(!r)return!1;for(var f,d=e(r.reward_replace);!(f=d()).done;){var _,v;f.value;return(null!=(_=null==(v=this.getInfo(t).choose_list[r.id])?void 0:v[1])?_:0)>0}return!1},a.GetCost=function(t){for(var a,n=r.mount_draw_expend,i=e(n);!(a=i()).done;){var o=a.value;if(o[0]==t)return o[1]}},a.GetDrawReward=function(t){for(var a,n=r.mount_draw_reward,i=e(n);!(a=i()).done;){var o=a.value;if(o[0]==t)return o[1]}},t}());a._RF.pop()}}}));
