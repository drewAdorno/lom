System.register("chunks:///_virtual/RankingRushDataCache.ts",["cc","./StorageUtil.ts","./RoleDataCache.ts","./ActivityDataCache.ts","./ActivityDefine.ts"],(function(t){"use strict";var n,e,a,i,r,u,o;return{setters:[function(t){n=t.cclegacy,e=t.js},function(t){a=t.default},function(t){i=t.RoleDataCache},function(t){r=t.default},function(t){u=t.ActivityGroup,o=t.ActivityState}],execute:function(){n._RF.push({},"bc656H2+dZPwIiJiPIobB3a","RankingRushDataCache",void 0);t("RankingRushDataCache",function(){function t(){}var n=t.prototype;return n.clear=function(){},n.getRankRewardList=function(t){var n=configActivity_rank_reward.getDatas(),e=[];for(var a in n)if(n.hasOwnProperty(a)){var i=n[a];i.type==t.type&&i.group_id==t.roundCfg.group_id&&e.push(i)}return e.sort((function(t,n){return t.rank_range[0]-n.rank_range[0]})),e},n.getGroupRed=function(){var t=0,n=IS(r).GetActivityList();for(var e in n)if(n.hasOwnProperty(e)){var a=n[e];a.activityCfg.activity_group==u.Ranking&&a.state==o.Open&&(t+=this.getRed(a.type))}return t},n.getRed=function(t){var n,u=IS(r).GetActivityInfo(t);if(!u||u.state!=o.Open)return 0;var c=IS(i).GetRoleId(),s=e.formatStr("RankingRushRed_%s_%s",c,u.type);return(null!=(n=a.get(s))?n:"")==u.round?0:1},n.setRed=function(t){var n=IS(r).GetActivityInfo(t);if(n){var o=IS(i).GetRoleId(),c=e.formatStr("RankingRushRed_%s_%s",o,n.type);a.set(c,n.round),IS(r).UpdateMainRedByGroup(u.Ranking)}},t}());n._RF.pop()}}}));

