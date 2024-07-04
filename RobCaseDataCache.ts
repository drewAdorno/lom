System.register("chunks:///_virtual/RobCaseDataCache.ts",["./rollupPluginModLoBabelHelpers.js","cc","./RedPointMgr.ts","./StorageUtil.ts","./StringUtil.ts","./TimeUtil.ts","./BagDefine.ts","./BagModel.ts","./BattlePassControl.ts","./MessageView.ts","./RoleDataCache.ts","./ActivityControl.ts","./ActivityDataCache.ts","./ActivityDefine.ts"],(function(t){"use strict";var e,n,o,a,i,u,f,s,r,c,p,d,l,h,v,y,I;return{setters:[function(t){e=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy,o=t.js},function(t){a=t.RedPointMgr},function(t){i=t.default},function(t){u=t.default},function(t){f=t.default},function(t){s=t.BagEventDefine},function(t){r=t.BagModel},function(t){c=t.default},function(t){p=t.default},function(t){d=t.RoleDataCache},function(t){l=t.default},function(t){h=t.default},function(t){v=t.ActivityType,y=t.ActivityState,I=t.ActivityEventDefine}],execute:function(){n._RF.push({},"3086baKXfZEd7JDHbaq01dv","RobCaseDataCache",void 0);t("default",function(){var t=n.prototype;function n(){this.buyInfo={act_day:0,end_time:0,bundle_list:{}},this.ggBondChaperIdList=[],this.pvpInfo={chapter:0,can_candy:0,def_data:null,choose_buff:[],buff_list:[]},this.chatGroupInfo={},this.isReqChatGroupInfo=!1,this.pvpResult=void 0,normalEvent.on(I.OnActivityListUpdate,this.checkPop,this),normalEvent.on(I.OnActivityInfoUpdate,this.checkPop,this),normalEvent.on(s.GOODS_INFO_UPDATE,this.onBagUpdate,this)}return t.clear=function(){},t.checkPop=function(){var t=IS(h).GetActivityInfo(v.RobCase);if(t&&t.state==y.Open){var e,n=new Date(1e3*f.serverTime),a=o.formatStr("#%s#%s#%s",n.getFullYear(),n.getMonth()+1,n.getDate()),u="RobCasePopView"+IS(d).GetRoleId();if((null!=(e=i.get(u))?e:"")==a)return;uiMgr.ViewIsAddPop("RobCasePopView")||(uiMgr.addPopView("RobCasePopView"),i.set(u,a))}},t.updateBuyList=function(t){this.buyInfo.act_day=t.act_day,this.buyInfo.end_time=t.end_time,this.buyInfo.bundle_list={};for(var n,o=e(t.bundle_list);!(n=o()).done;){var a=n.value;this.buyInfo.bundle_list[a.cfg_id]=a}normalEvent.emit(I.OnRobCaseBuyInfo)},t.updateBuyInfo=function(t){this.buyInfo.bundle_list[t.cfg_id]=t,normalEvent.emit(I.OnRobCaseBuyInfo)},t.updatePvpInfo=function(t){this.pvpInfo.chapter=t.chapter,this.pvpInfo.can_candy=t.can_candy,this.pvpInfo.def_data=t.def_data,this.pvpInfo.choose_buff=t.choose_buff,this.pvpInfo.buff_list=t.buff_list,normalEvent.emit(I.OnRobCasePvpInfo),IS(h).UpdateMainRedByActType(v.RobCasePvp)},t.updateResult=function(t){var e;IS(n).pvpResult={chapter:t.chapter,result:t.result,reward:t.reward},this.pvpInfo.choose_buff=null!=(e=t.choose_buff)?e:[]},t.updatePvpCandy=function(t){this.pvpInfo.can_candy=t.can_candy,normalEvent.emit(I.OnRobCasePvpCandy,t),IS(h).UpdateMainRedByActType(v.RobCasePvp)},t.updatePvpBuff=function(t){this.pvpInfo.buff_list=t.buff_list},t.onBagUpdate=function(t,e){1060==e&&(IS(h).UpdateMainRedByActType(v.RobCasePass),IS(a).changeValue("robcase_pass",this.getPassRedNum()))},t.getBuyInfo=function(){return this.buyInfo},t.getPvpInfo=function(){return this.pvpInfo},t.getPvpRed=function(){var t=IS(h).GetActivityInfo(v.RobCasePvp);return t&&t.state==y.Open?this.pvpInfo.def_data&&this.pvpInfo.can_candy:0},t.getPassRedNum=function(){var t=IS(h).GetActivityInfo(v.RobCasePass);if(!t||t.state!=y.Open)return 0;var e=0,n=t.roundCfg.group_id;return e=(e=e+c.checkRewardRP(n)>=0?1:0)+c.checkAddRewardRP(n)>0?1:0,e+=c.checkSpecialRewardRP(n),IS(r).getGoodsCountByGoodsGtid(1153)>0&&e++,e},t.GetStoreRed=function(){var t=IS(h).GetActivityInfo(v.RobCase);if(!t||t.state!=y.Open)return 0;if(t){var e,n=String(t.id)+"#"+String(t.round),o="RobCaseStoreRed"+IS(d).GetRoleId();return(null!=(e=i.get(o))?e:"")==n?0:1}return 0},t.UpdateGroupChatInfo=function(t,e){if(void 0===e&&(e=0),0==e){for(var n=0;n<t.id_num_list.length;n++){var o=t.id_num_list[n];this.chatGroupInfo[o.k]=o.v}normalEvent.emit(I.OnRobCaseGroupChatInfo)}else{if(1==t.type)if(0==t.code){var a=configHalloween_group_buy.getDataByKey(t.cfg_id);if(a){var i=configGoods.getDataByKey(a.expend[0]),f=999==a.expend[0]?a.expend[1]/100:a.expend[1];p.showBoxTip({tip:u.formatStrWithMirrorDeal(GetLanguage(201187),f,i.name),title:GetLanguage(200048),func:function(e){"type_yes"==e&&IS(l).send_24_77(2,t.group_buy_id,v.RobCaseBuy)}})}}else p.showFlyTip(configErrorInfo.getDataByKey(t.code).info);var s=this.chatGroupInfo[t.group_buy_id];this.chatGroupInfo[t.group_buy_id]=t.num,s!=t.num&&normalEvent.emit(I.OnRobCaseGroupChatInfo)}},t.GetGroupChatInfo=function(t){return this.chatGroupInfo[t]},n}());n._RF.pop()}}}));

