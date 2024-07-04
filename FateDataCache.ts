System.register("chunks:///_virtual/FateDataCache.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BattleData.ts","./RedPointMgr.ts","./StorageUtil.ts","./TimeUtil.ts","./index57.ts","./ConfigGlobal.ts","./BagDefine.ts","./ChapterDataCache.ts","./ChapterDefine.ts","./RoleDataCache.ts","./FateDefine.ts","./UIDefine.ts"],(function(t){"use strict";var e,i,a,n,s,o,r,f,d,h,u,l,p,c,v,g;return{setters:[function(t){e=t.createForOfIteratorHelperLoose},function(t){i=t.cclegacy,a=t.js},function(t){n=t.ChapterType},function(t){s=t.RedPointMgr},function(t){o=t.default},function(t){r=t.default},null,function(t){f=t.ConfigGlobal},function(t){d=t.BagEventDefine},function(t){h=t.ChapterDataCache},function(t){u=t.ChapterEventDefine},function(t){l=t.RoleDataCache},function(t){p=t.FateEventDefine,c=t.FateDefine},function(t){v=t.PanelTabType,g=t.OpenFunction}],execute:function(){i._RF.push({},"aeffbr9iL5MaZfQBpTGjAGe","FateDataCache",void 0);t("default",function(){var t=i.prototype;function i(){this.posInfo=[],this.fateList=[],this.lotteryPoint=void 0,this.showPos=0,this.mergeRedInfo=[],normalEvent.on(u.CHAPTER_BATTLE_RESUTL,this.onChapterBattleResult,this),normalEvent.on(u.BATTLE_STATE,this.onChapterBattleSatate,this),normalEvent.on(u.DUNGEON_UPDATE,this.onDungeonUpdate,this),normalEvent.on(d.GOODS_INFO_UPDATE,this.onBagUpdate,this)}return t.clear=function(){},t.UpdateInfo=function(t){this.showPos=t.show_pos_id,this.posInfo=[];for(var i,a=e(null!=(n=t.fate_pos_list)?n:[]);!(i=a()).done;){var n,s,o=i.value;this.posInfo[o.pos_id]=o,this.posInfo[o.pos_id].id=null!=(s=o.id)?s:0}this.fateList=[],this.UpdateItemList(t.fate_list),this.refreshFateMergeRed(),this.UpdateRed()},t.UpdateInfoAdd=function(t){if(0==t.type)this.UpdateItemList(t.fate_list);else if(1==t.type)for(var i,a=e(null!=(n=t.fate_list)?n:[]);!(i=a()).done;){var n,s=i.value;delete this.fateList[s.id]}this.UpdateRed()},t.UpdatePosAdd=function(t){this.posInfo=[];for(var i,a=e(null!=(n=t.fate_pos_list)?n:[]);!(i=a()).done;){var n,s,o=i.value;this.posInfo[o.pos_id]=o,this.posInfo[o.pos_id].id=null!=(s=o.id)?s:0}normalEvent.emit(p.OnFateInfoUpdate),this.UpdateRed()},t.UpdateItemList=function(t){for(var i,a=e(null!=t?t:[]);!(i=a()).done;){var n=i.value,s=this.fateList[n.id];if(s){s.lv=n.lv;var o=configFate_level.getDataByKeys("fate_id",n.cfg_id,"level",n.lv);s.lv_cfg=o,s.is_red=1==n.is_red}else{var r=configFate.getDataByKey(n.cfg_id),f=configFate_level.getDataByKeys("fate_id",n.cfg_id,"level",n.lv);s={id:n.id,cfg_id:n.cfg_id,lv:n.lv,cfg:r,lv_cfg:f,skill:n.skill,is_red:1==n.is_red},this.fateList[n.id]=s}}normalEvent.emit(p.OnFateInfoUpdate)},t.UpdateInlay=function(t){this.posInfo[t.fate_pos.pos_id]=t.fate_pos,normalEvent.emit(p.OnFateInfoUpdate),this.UpdateRed()},t.UpdateLevUp=function(t){this.UpdateItemList([t.fate]),this.UpdateRed()},t.UpdateLottery=function(t){this.lotteryPoint=t.pray_point,normalEvent.emit(p.OnFateLotteryUpdate)},t.UpdateLotteryResult=function(t){this.UpdateLottery(t),normalEvent.emit(p.OnFateLotteryUpdate)},t.UpdateBreak=function(t){for(var i,a=e(null!=(n=t.id_list)?n:[]);!(i=a()).done;){var n,s=i.value;delete this.fateList[s]}normalEvent.emit(p.OnFateInfoUpdate),this.UpdateRed()},t.UpdateMerge=function(t){this.UpdateItemList([t.new_fate]);for(var i,a=e(null!=(n=t.id_list)?n:[]);!(i=a()).done;){var n,s=i.value;delete this.fateList[s]}normalEvent.emit(p.OnFateInfoUpdate),this.UpdateRed(),uiMgr.openView("FateMergeGetView",t.new_fate.id,t.reward_list)},t.UpdateMergeSkill=function(t){for(var i,a=e(null!=(n=t.id_list)?n:[]);!(i=a()).done;){var n,s=i.value;delete this.fateList[s]}1==t.type&&uiMgr.openView("FateMergeChooseView",t)},t.UpdateMergeChoose=function(t){var e=uiMgr.getOpenView("FateMergeChooseView");e&&e.close(),this.UpdateItemList([t.new_fate]),this.UpdateRed(),uiMgr.openView("FateMergeGetView",t.new_fate.id,t.reward_list)},t.UpdateShowPos=function(t){this.showPos=t.show_pos_id,normalEvent.emit(p.OnFateInfoUpdate)},t.onChapterBattleResult=function(t,e,i,a,s){e==n.Fate&&uiMgr.openView("FateGungeonView")},t.onChapterBattleSatate=function(t,e){t==n.Fate&&0==e&&uiMgr.openView("FateGungeonView")},t.onDungeonUpdate=function(t){t.type==n.Fate&&this.UpdateRed()},t.onBagUpdate=function(t,e){1020==e&&this.UpdateRed()},t.GetLotteryPoint=function(){return this.lotteryPoint},t.GetPosInfo=function(){return this.posInfo},t.GetPosInfoByPos=function(t){return this.posInfo[t]},t.GetShowPos=function(){return this.showPos},t.GetShowFate=function(){var t=this.posInfo[this.showPos];if(t&&t.id)return this.fateList[t.id];var e=0;for(var i in this.posInfo)if(this.posInfo.hasOwnProperty(i)){var a=this.posInfo[i];a.state==c.PosState.Equipped&&(0==e&&(e=a.pos_id),a.pos_id<e&&(e=a.pos_id))}if(0==e)return null;var n=this.posInfo[e];return this.fateList[n.id]},t.GetHighestFate=function(){var t;for(var e in this.posInfo)if(this.posInfo.hasOwnProperty(e)){var i=this.posInfo[e];if(i.state==c.PosState.Equipped){t||(t=this.fateList[i.id]);var a=this.fateList[i.id];a&&(a.cfg.quality>t.cfg.quality||t.cfg.quality==a.cfg.quality&&(a.lv>t.lv||t.lv==a.lv&&t.id>a.id))&&(t=a)}}return t},t.GetFateList=function(){return this.fateList},t.GetFateItem=function(t){return this.fateList[t]},t.UpdateRed=function(){IS(s).changeValue("fate_main",this.GetFateRed()),IS(s).changeValue("FateTabView/tab-"+v.Fate_Main,this.GetMainTabRed()),IS(s).changeValue("FateTabView/tab-"+v.Fate_Get,this.GetGetTabRed()),IS(s).changeValue("FateTabView/tab-"+v.Fate_Merge,this.GetMergeRed())},t.GetFateRed=function(){if(!IS(l).CheckFuncOpen(g.FUNC_FATE))return 0;var t=0;return t+=this.GetMainTabRed(),t+=this.GetGetTabRed(),t+=this.GetMergeRed()},t.GetMainTabRed=function(){var t=0;if(this.GetEmptyPos())for(var e in this.fateList)if(this.fateList.hasOwnProperty(e)){var i=this.fateList[e];if(!this.GetWearPos(i.id)&&!this.CheckSameUseType(i.id)){t+=1;break}}for(var a in this.fateList){if(this.fateList.hasOwnProperty(a))if(this.fateList[a].is_red){t+=1;break}}return t},t.GetGetTabRed=function(){for(var t,i,a=0,s=null!=(t=IS(h).getDungeonInfoByID(n.Fate).ext)?t:[],o=e(s);!(i=o()).done;){var r=i.value;if(6==r.k&&0!=r.v){a+=1;break}}return a},t.GetMergeRed=function(){var t=0;return this.mergeRedInfo.length>0&&t++,t},t.GetEmptyPos=function(){for(var t in this.posInfo)if(this.posInfo.hasOwnProperty(t)){var e=this.posInfo[t];if(e.state==c.PosState.empty)return e.pos_id}return null},t.GetWearPos=function(t){for(var e in this.posInfo)if(this.posInfo.hasOwnProperty(e)){var i=this.posInfo[e];if(i.id==t)return i.pos_id}return null},t.CheckSameUseType=function(t,e){var i=this.fateList[t];if(!i)return!1;for(var a in this.posInfo)if(this.posInfo.hasOwnProperty(a)){var n=this.posInfo[a];if(e&&n.pos_id==e)continue;if(n.state==c.PosState.Equipped){if(!this.fateList[n.id])continue;if(this.fateList[n.id].cfg.mutually_exclusive.includes(i.cfg_id))return n.pos_id}}return null},t.CheckSameUseTypeByCfgId=function(t,e){for(var i in this.posInfo)if(this.posInfo.hasOwnProperty(i)){var a=this.posInfo[i];if(e&&a.pos_id==e)continue;if(a.state==c.PosState.Equipped){if(!this.fateList[a.id])continue;if(this.fateList[a.id].cfg.mutually_exclusive.includes(t))return a.pos_id}}return null},t.CheckSameUseByCfgId=function(t){for(var e in this.posInfo)if(this.posInfo.hasOwnProperty(e)){var i=this.posInfo[e];if(i.state==c.PosState.Equipped){if(!this.fateList[i.id])continue;if(this.fateList[i.id].cfg_id==t)return!0}}return!1},t.IsMax=function(){var t=0;for(var e in this.fateList)this.fateList.hasOwnProperty(e)&&t++;return t>=f.fate_bag_limit},t.haveFateRed=function(t){return this.mergeRedInfo.includes(t)},t.setFateRed=function(t){var e=this.mergeRedInfo.indexOf(t);if(e>=0){this.mergeRedInfo.splice(e,1);var i=IS(l).GetRoleId();o.set("fateMergeRedInfo"+i,this.mergeRedInfo),IS(s).changeValue("fate_main",this.GetFateRed()),IS(s).changeValue("FateTabView/tab-"+v.Fate_Merge,this.GetMergeRed())}},t.refreshFateMergeRed=function(){var t,i=r.ServerDate(1e3*r.serverTime),n=a.formatStr("#%s#%s#%s",i.getFullYear(),i.getMonth()+1,i.getDate()),s=IS(l).GetRoleId(),f="fateMergeRedDate"+s;if((null!=(t=o.get(f))?t:"")!=n){o.set(f,n),this.mergeRedInfo=[];for(var d,h=configFate_fusion.getDatas(),u=e(h);!(d=u()).done;)for(var p,c=d.value,v=e(c.material_fate_id);!(p=v()).done;){var g=p.value;if(this.haveTwoFate(g[0],g[1])){this.mergeRedInfo.push(c.id);break}}o.set("fateMergeRedInfo"+s,this.mergeRedInfo)}else this.mergeRedInfo=o.get("fateMergeRedInfo"+s,!0)},t.haveTwoFate=function(t,e){if(t!=e){var i,a;for(var n in this.fateList)if(this.fateList.hasOwnProperty(n)){var s=this.fateList[n];s.cfg_id==t&&(i=!0),s.cfg_id==e&&(a=!0)}return i&&a}var o=0;for(var r in this.fateList){if(this.fateList.hasOwnProperty(r))this.fateList[r].cfg_id==t&&o++}return o>=2},i}());i._RF.pop()}}}));

