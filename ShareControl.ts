System.register("chunks:///_virtual/ShareControl.ts",["cc","./ControlMgr.ts","./ShareDefine.ts","./ShareModel.ts"],(function(e){"use strict";var r,n,t,a;return{setters:[function(e){r=e.cclegacy},function(e){n=e.controlMgr},function(e){t=e.ShareDefine},function(e){a=e.ShareModel}],execute:function(){r._RF.push({},"acb51vubbRBlri0rablJ89F","ShareControl",void 0);e("default",function(){var e=r.prototype;function r(){netManager.addEventListener("operate.operate_share_info_s2c",this.on_operate_share_info_s2c,this),netManager.addEventListener("operate.operate_share_reward_s2c",this.on_operate_share_reward_s2c,this),n.addControl(this),_G("shareControl",this)}return e.clear=function(){printLog("ShareControl"),_G("shareControl",null)},e.onLogin=function(){},e.onReconnect=function(){},e.reqOperateInfo=function(){netManager.send("operate.operate_share_info_c2s",{})},e.reqOperateAward=function(e){netManager.send("operate.operate_share_reward_c2s",{id:e})},e.on_operate_share_info_s2c=function(e){IS(a).updateShareInfo(e),normalEvent.emit(t.ShareInfoBack,e)},e.on_operate_share_reward_s2c=function(e){var r=configShare.getDataByKey(e.id);if(null!=r){var n=[];n.push({gtid:r.reward[0][0],num:r.reward[0][1]}),uiMgr.openView("GoodsGetView",n)}IS(a).getShareAwardBack(e),normalEvent.emit(t.ShareAwardBack,e)},e.send_operate_subscribe_c2s=function(e,r,n){netManager.send("operate.operate_subscribe_c2s",{uid:e,client_id:r,list:n})},r}());r._RF.pop()}}}));
