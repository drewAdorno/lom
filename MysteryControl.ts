System.register("chunks:///_virtual/MysteryControl.ts",["cc","./TimeUtil.ts","./MysteryDataCache.ts","./MysteryDefine.ts"],(function(e){"use strict";var n,o,t,_;return{setters:[function(e){n=e.cclegacy},function(e){o=e.default},function(e){t=e.MysteryDataCache},function(e){_=e.MysteryEventDefine}],execute:function(){n._RF.push({},"e4fc6lCBcVHiK5Vlve4wmer","MysteryControl",void 0);e("default",function(){var e=n.prototype;function n(){netManager.addEventListener("home.home_mine_info_s2c",this.on_home_mine_info_s2c,this),netManager.addEventListener("home.home_mine_use_goods_s2c",this.on_home_mine_use_goods_s2c,this),netManager.addEventListener("home.home_mine_update_recover_s2c",this.on_home_mine_update_recover_s2c,this),netManager.addEventListener("home.home_mine_get_reward_s2c",this.on_home_mine_get_reward_s2c,this),netManager.addEventListener("home.home_mine_auto_use_goods_s2c",this.on_home_mine_auto_use_goods_s2c,this)}return e.clear=function(){console.log("清理MysteryControl")},e.reqHomeInfo=function(){o.serverTime-IS(t).lastReqTime<=1||(IS(t).lastReqTime=o.serverTime,netManager.send("home.home_mine_info_c2s",{}))},e.on_home_mine_info_s2c=function(e){IS(t).initMineInfo(e),normalEvent.emit(_.MINE_INFO_BACK)},e.on_home_mine_use_goods_s2c=function(e){IS(t).updateMineInfo(e)},e.on_home_mine_update_recover_s2c=function(e){IS(t).maxAxeNum=e.max_num,IS(t).nextRecoverTime=e.next_time,normalEvent.emit(_.AXE_RECOVER_UPDATE)},e.reqMineUseGoods=function(e,n){netManager.send("home.home_mine_use_goods_c2s",{goods_id:e,block_id:n})},e.reqHomeGetReward=function(e){netManager.send("home.home_mine_get_reward_c2s",{block_id:e})},e.on_home_mine_get_reward_s2c=function(e){var n=e.blocks.id;IS(t).blockIdToUpdateInfo[n]=e.blocks,normalEvent.emit(_.MINE_BLOCK_GET_REWARD,e.blocks,e.reward)},e.reqHomeMineAutoUseGoods=function(e){netManager.send("home.home_mine_auto_use_goods_c2s",{auto_type:e})},e.on_home_mine_auto_use_goods_s2c=function(e){normalEvent.emit(_.MINE_AUTO_BACK,IS(t).baseLine,IS(t).baseLine+e.add_baseline,e.reward)},n}());n._RF.pop()}}}));
