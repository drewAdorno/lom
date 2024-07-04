System.register("chunks:///_virtual/PrivilegeDataCache.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RedPointMgr.ts","./StorageUtil.ts","./ObjectUtil.ts","./ActivityRechargeDataCache.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./PayDataCache.ts","./PayDefine.ts","./RoleDataCache.ts","./TaskDataCache.ts","./WeeklyCardDataCache.ts","./PrivilegeDefine.ts"],(function(e){"use strict";var t,i,n,r,a,f,o,d,u,s,c,l,h,v,g,I;return{setters:[function(e){t=e.createForOfIteratorHelperLoose},function(e){i=e.cclegacy},function(e){n=e.RedPointMgr},function(e){r=e.default},function(e){a=e.default},function(e){f=e.default},function(e){o=e.default},function(e){d=e.ActivityState,u=e.ActivityType},function(e){s=e.default},function(e){c=e.GiftType},function(e){l=e.RoleDataCache},function(e){h=e.TaskDataCache},function(e){v=e.default},function(e){g=e.PrivilegeEventDefine,I=e.FundEventDefine}],execute:function(){i._RF.push({},"afb1e3tweRKi41F/B/uhTap","PrivilegeDataCache",void 0);e("PrivilegeDataCache",function(){function e(){this.privilegeIdToInfo={},this.privilegeCardIdToInfo={},this.privilegeCardEffectList=[],this.fundIdToInfo={},this.PiggyBankRedPoint=0,this.DevelopStageRedPoint=0,this.WeeklyCardFreeGiftRP=0}var i=e.prototype;return i.clear=function(){},i.initPrivilegeInfo=function(e){if(null!=e){for(var t=0;t<e.length;t++)this.privilegeIdToInfo[e[t].id]=e[t];normalEvent.emit(g.ROLE_PRIVILEGE_UPDATE)}},i.updatePrivilegeInfo=function(e,t){this.privilegeIdToInfo[e.id]=2==t?null:e,normalEvent.emit(g.ROLE_PRIVILEGE_UPDATE,e.id)},i.GetPrivilegeInfoById=function(e){return this.privilegeIdToInfo[e]},i.checkPrivilegeUnlock=function(e){return null!=this.privilegeIdToInfo[e]},i.updatePrivilegeCardInfo=function(e){if(this.privilegeCardIdToInfo={},e&&!(e.length<=0))for(var t=0;t<e.length;t++)this.privilegeCardIdToInfo[e[t].id]=e[t]},i.updatePrivilegeCardEffect=function(e){this.privilegeCardEffectList=e||[]},i.getPrivilegeCardInfo=function(e){return this.privilegeCardIdToInfo[e]},i.checkPrivilegeCardHasBuy=function(e){return null!=this.getPrivilegeCardInfo(e)},i.checkPrivilegeCardHasFetch=function(e){var t=this.getPrivilegeCardInfo(e);return null==t?0:t.status},i.getPrivilegeCardValue=function(e,t){if(!this.privilegeCardEffectList||this.privilegeCardEffectList.length<=0)return 0;for(var i=0;i<this.privilegeCardEffectList.length;i++){var n=this.privilegeCardEffectList[i];if(n.type==e&&(!t||!n.sub_type||t==n.sub_type))return n.value}return 0},i.checkPrivilegeCardCanFetch=function(e){var t=this.getPrivilegeCardInfo(e);return null!=t&&(5!=e&&6!=e&&0==t.status)},i.checkAnyPrivilegeCardCanFetch=function(){for(var e=configPrivilege_cardtype.getDatas(),t=0;t<e.length;t++)if(this.checkPrivilegeCardCanFetch(e[t].id))return!0;return!1},i.initFundInfo=function(e){var t={};for(var i in e)t[i]=e[i];this.fundIdToInfo[e.fund_id]=t,this.refreshLevelInfoByID(e.fund_id),this.refreshRewardInfoByID(e.fund_id),normalEvent.emit(I.FUND_INIT_FINISH)},i.refreshLevelInfoByID=function(e){for(var i,n=0,r=this.getFundInfoByFundID(e),a=configFund_reward.getDataByList("id",r.fund_id),f=t(a);!(i=f()).done;){var o=i.value,d=o.condition[2];if(!(r.process>=d))break;n=o.level}r.lev=n},i.refreshRewardInfoByID=function(e){var i=this.getFundInfoByFundID(e);if(null!=i){for(var n=configFund_reward.getDataByList("id",e).length,r=[],a=[],f=[],o=0;o<n;o++)r.push({status:0}),a.push({status:0}),f.push({status:0});if(i.lev>0)for(var d=0;d<=i.lev-1;d++)a[d]={status:1},1==i.pay_status&&(r[d]={status:1}),1==i.pay_status_2&&(f[d]={status:1});for(var u,s=t(i.high_got_reward);!(u=s()).done;){r[u.value-1]={status:2}}for(var c,l=t(i.free_got_reward);!(c=l()).done;){a[c.value-1]={status:2}}for(var h,v=t(i.high_got_reward_2);!(h=v()).done;){f[h.value-1]={status:2}}i.high_reward=r,i.free_reward=a,i.mid_reward=f}},i.updateRewardinfoAll=function(i){if(i.fund_id in this.fundIdToInfo){for(var r,a=this.fundIdToInfo[i.fund_id],f=t(i.free_got_reward);!(r=f()).done;){var o=r.value;a.free_reward[o-1]={status:2}}for(var d,u=t(i.high_got_reward);!(d=u()).done;){var s=d.value;a.high_reward[s-1]={status:2}}for(var c,l=t(i.high_got_reward_2);!(c=l()).done;){var h=c.value;a.mid_reward[h-1]={status:2}}}e.checkRewardRP(i.fund_id)>=0?IS(n).changeValue("recharge_gift/Fund"+i.fund_id,1):IS(n).changeValue("recharge_gift/Fund"+i.fund_id,0),normalEvent.emit(I.FUND_UPDATE_INFO)},i.updateRewardinfo=function(t,i){if(t.fund_id in this.fundIdToInfo){var r=this.fundIdToInfo[t.fund_id];1==t.type?r.free_reward[t.lv-1]={status:i}:2==t.type?r.high_reward[t.lv-1]={status:i}:3==t.type&&(r.mid_reward[t.lv-1]={status:i})}e.checkRewardRP(t.fund_id)>=0?IS(n).changeValue("recharge_gift/Fund"+t.fund_id,1):IS(n).changeValue("recharge_gift/Fund"+t.fund_id,0),normalEvent.emit(I.FUND_UPDATE_INFO)},i.getFundProcessByID=function(e){var t=this.getFundInfoByFundID(e);return t?t.process:0},i.getFundInfoByFundID=function(e){return e in this.fundIdToInfo?this.fundIdToInfo[e]:null},e.checkFund=function(){for(var t=0,i=1;i<3;i++)e.checkRewardRP(i)>=0&&(t+=1);return t>0},e.checkRewardRP=function(t){var i=configFund.getDataByKey(t);if(i.open_condition&&i.open_condition>0&&!IS(l).CheckFuncOpen(i.open_condition))return-1;for(var n=IS(e).getFundInfoByFundID(t),r=-1,a=configFund_reward.getDataByList("id",t).length,f=0;f<a;f++)if(null!=n){if((1==n.free_reward[f].status||1==n.high_reward[f].status&&n.pay_status||1==n.mid_reward[f].status&&n.pay_status_2)&&(r=f),r>0)break;if(r>=0)break}return r},e.checkRewardRoll=function(t){var i=IS(e).getFundInfoByFundID(t);if(!a.isEmpty(i)){for(var n=-1,r=0;r<i.lev;r++)(2==i.free_reward[r].status||2==i.high_reward[r].status&&i.pay_status||2==i.mid_reward[r].status&&i.pay_status_2)&&(n=r);return n}},e.checkGetAllReward=function(t){var i=configFund.getDataByKey(t);if(i.open_condition&&i.open_condition>0&&!IS(l).CheckFuncOpen(i.open_condition))return!1;var n=IS(e).getFundInfoByFundID(t);if(!n)return!1;for(var r=configFund_reward.getDataByList("id",t).length,a=0;a<r;a++)if(2!=n.free_reward[a].status||2!=n.high_reward[a].status||2!=n.mid_reward[a].status)return!1;return!0},i.checkActivityRed=function(){for(var e=0,t=configActicity_sheet.getDatas(),i=1;i<=t.length;i++){var n=t[i-1];(1!=n.open[0]||IS(l).CheckFuncOpen(n.open[1]))&&(this.checkActivityRedById(i)>0&&(e+=1))}return e>0},i.checkActivityRedById=function(e){var t=configActicity_sheet.getDataByKey(e);if(1==t.open[0]&&!IS(l).CheckFuncOpen(t.open[1]))return 0;if(2==t.open[0]){var i=IS(o).GetActivityInfo(t.open[1]);if(!i||i.state==d.Null)return 0}if(1==e){var n=IS(s).GetPayGiftInfo(19001),a=IS(o).GetActivityInfo(u.PiggyBank),g=a&&a.state==d.Open;if(n&&g){var I=IS(h).GetDailyPoint(),_="PiggyBankRed"+IS(l).GetRoleId();return I<100&&r.set(_,"0"),I>=100&&0==n.bought_times?"0"==r.get(_)?(r.set(_,"1"),1):"2"==r.get(_)?0:1:0}}if(2==e){var y=IS(s).GetPayGiftInfo(19009);if(y)return y.rewardState<2?(this.DevelopStageRedPoint=1,1):(this.DevelopStageRedPoint=0,0)}if(3==e){var p=IS(s).GetPayGiftInfo(19010);if(p)return p.rewardState<2?(this.DevelopStageRedPoint=1,1):(this.DevelopStageRedPoint=0,0)}if(4==e){var P=IS(o).GetActivityInfo(u.OptionGift);if(P){var D=IS(s).GetAcivityGift(c.Activity,P.type,P.round);for(var F in D)if(D.hasOwnProperty(F)){var R=D[F],C=IS(s).GetPayGiftInfo(R.id);return C&&C.rewardState<2?(this.DevelopStageRedPoint=1,1):(this.DevelopStageRedPoint=0,0)}}}if(5==e)return IS(f).getBoxdRed();if(6==e){var w=IS(s).GetPayGiftInfo(303002);return w&&(w.rewardState<2?this.WeeklyCardFreeGiftRP=1:this.WeeklyCardFreeGiftRP=0),IS(v).getRedNum()+this.WeeklyCardFreeGiftRP}return 0},e}());i._RF.pop()}}}));

