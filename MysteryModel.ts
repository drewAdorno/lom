System.register("chunks:///_virtual/MysteryModel.ts",["cc","./StorageUtil.ts","./ObjectUtil.ts","./MysteryControl.ts","./MysteryDataCache.ts","./MysteryDefine.ts"],(function(e){"use strict";var t,n,o,r,c,u,a;return{setters:[function(e){t=e.cclegacy},function(e){n=e.default},function(e){o=e.default},function(e){r=e.default},function(e){c=e.MysteryDataCache},function(e){u=e.mine_row_count,a=e.mine_colomn_count}],execute:function(){t._RF.push({},"1d3c8Je+rNKIb3CdjH/yV7J","MysteryModel",void 0);e("MysteryModel",function(){var e=t.prototype;function t(){}return e.clear=function(){},e.getAxeNumInfo=function(){return{maxAxeNum:IS(c).maxAxeNum,nextRecoverTime:IS(c).nextRecoverTime}},e.getBaseLine=function(){return IS(c).baseLine},e.getAreaInfoByBlockId=function(e){var t=Math.floor(e/100),n=Math.floor((t-1)/u)+1,o=e-100*t;return{area:n,posY:t,dataIndex:(t-(n-1)*u-1)*a+o-1,posX:o}},e.getBlockInfo=function(e){var t=IS(c).blockIdToUpdateInfo[e];if(!o.isEmpty(t))return t;var n=this.getAreaInfoByBlockId(e),u=IS(c).areaIdToMineCfgId[n.area];if(null==u)return IS(r).reqHomeInfo(),{id:e,x:n.posX,y:n.posY,config_id:101,count:0,is_reward:0};var a=configMine_template.getDataByKey(u).arrange[n.dataIndex],i=configMine_grid.getDataByKey(a),f=!1;return i.goods&&i.goods.length>0&&(f=!0),i.reward&&0!=i.reward&&(f=!0),{id:e,x:n.posX,y:n.posY,config_id:a,count:i.num,is_reward:f?1:0}},e.getSpeBgbyBlockCfgId=function(e){return IS(c).blockCfgIdToSpeBg[e]},e.checkBlockActive=function(e){return IS(c).blockIdToActive[e]||!1},e.setDefalutSelectAutoType=function(e){n.set("mysteryAutoType",e)},e.getDefaultSelectAutoType=function(){var e=n.get("mysteryAutoType");if(!e||""==e)return 1;var t=Number(e);return t>0?t:1},t}());t._RF.pop()}}}));
