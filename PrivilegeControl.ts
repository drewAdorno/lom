System.register("chunks:///_virtual/PrivilegeControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RedPointMgr.ts","./ObjectUtil.ts","./BagDefine.ts","./ControlMgr.ts","./RoleDefine.ts","./PrivilegeDataCache.ts","./PrivilegeDefine.ts"],(function(e){"use strict";var n,i,t,r,a,o,d,_,f,l,s;return{setters:[function(e){n=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy},function(e){t=e.RedPointMgr},function(e){r=e.default},function(e){a=e.BagEventDefine},function(e){o=e.controlMgr},function(e){d=e.PlayerAttr,_=e.RoleEventDefine},function(e){f=e.PrivilegeDataCache},function(e){l=e.PrivilegeEventDefine,s=e.FundEventDefine}],execute:function(){i._RF.push({},"abb9evnOzBO/69k3rZnjoFZ","PrivilegeControl",void 0);e("default",function(){var e=i.prototype;function i(){netManager.addEventListener("privilege.privilege_info_s2c",this.on_privilege_info_s2c,this),netManager.addEventListener("privilege.privilege_update_s2c",this.on_privilege_update_s2c,this),netManager.addEventListener("privilege.privilege_card_info_s2c",this.on_privilege_card_info_s2c,this),netManager.addEventListener("privilege.privilege_card_reward_s2c",this.on_privilege_card_reward_s2c,this),netManager.addEventListener("privilege.privilege_card_get_all_s2c",this.on_privilege_card_get_all_s2c,this),netManager.addEventListener("fund.fund_info_s2c",this.on_fund_info_s2c,this),netManager.addEventListener("fund.fund_get_reward_s2c",this.on_fund_get_reward_s2c,this),netManager.addEventListener("fund.fund_get_reward_all_s2c",this.on_fund_get_reward_all_s2c,this),normalEvent.on(_.ROLE_INFO_UPDATE,this.updateFundInfo1,this),normalEvent.on(a.GOODS_BOX_UPDATE,this.updateFundInfo2,this),normalEvent.on(s.FUND_INIT_FINISH,this.updateFundRP,this),o.addControl(this)}return e.clear=function(){printLog("PrivilegeControl")},e.onLogin=function(){this.reqPrivilegeInfo(),this.reqFundInfo(1),this.reqFundInfo(2)},e.onReconnect=function(){this.reqPrivilegeInfo(),this.reqFundInfo(1),this.reqFundInfo(2)},e.reqPrivilegeInfo=function(){netManager.send("privilege.privilege_info_c2s",{})},e.reqPrivilegeCardInfo=function(){netManager.send("privilege.privilege_card_info_c2s",{})},e.reqPrivilegeCardReward=function(e){netManager.send("privilege.privilege_card_reward_c2s",{id:e})},e.reqGetAllReward=function(){netManager.send("privilege.privilege_card_get_all_c2s",{})},e.on_privilege_info_s2c=function(e){IS(f).initPrivilegeInfo(e.privilege_list)},e.on_privilege_update_s2c=function(e){IS(f).updatePrivilegeInfo(e.update_privilege,e.type)},e.on_privilege_card_info_s2c=function(e){IS(f).updatePrivilegeCardInfo(e.card_info),IS(f).updatePrivilegeCardEffect(e.effect_list),normalEvent.emit(l.PRIVILEGE_CARD_UPDATE)},e.on_privilege_card_reward_s2c=function(e){var n=e.id;r.isEmpty(IS(f).privilegeCardIdToInfo[n])||(IS(f).privilegeCardIdToInfo[n].status=1),normalEvent.emit(l.PRIVILEGE_CARD_FETCH,n)},e.on_privilege_card_get_all_s2c=function(e){for(var i,t=n(e.id);!(i=t()).done;){var a=i.value;r.isEmpty(IS(f).privilegeCardIdToInfo[a])||(IS(f).privilegeCardIdToInfo[a].status=1),normalEvent.emit(l.PRIVILEGE_CARD_FETCH,a)}},e.reqFundInfo=function(e){netManager.send("fund.fund_info_c2s",{fund_id:e})},e.reqFundReward=function(e,n,i){netManager.send("fund.fund_get_reward_c2s",{fund_id:e,lv:n,type:i})},e.reqAllCanGet=function(e){netManager.send("fund.fund_get_reward_all_c2s",{fund_id:e})},e.on_fund_info_s2c=function(e){IS(f).initFundInfo(e)},e.on_fund_get_reward_s2c=function(e){IS(f).updateRewardinfo(e,2)},e.on_fund_get_reward_all_s2c=function(e){IS(f).updateRewardinfoAll(e)},e.updateFundRP=function(){for(var e=1;e<3;e++)f.checkRewardRP(e)>=0?IS(t).changeValue("recharge_gift/Fund"+e,1):IS(t).changeValue("recharge_gift/Fund"+e,0)},e.updateFundInfo1=function(e){d.ROLE_ATTR_LVL in e&&this.reqFundInfo(1)},e.updateFundInfo2=function(){this.reqFundInfo(2)},i}());i._RF.pop()}}}));

