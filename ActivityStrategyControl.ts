System.register("chunks:///_virtual/ActivityStrategyControl.ts",["cc","./MessageView.ts","./ActivityDefine.ts","./ActivityStrategyDataCache.ts"],(function(t){"use strict";var a,e,_,n;return{setters:[function(t){a=t.cclegacy},function(t){e=t.default},function(t){_=t.ActivityEventDefine},function(t){n=t.default}],execute:function(){a._RF.push({},"5c9efIXakBGQb1gB2NO9ezl","ActivityStrategyControl",void 0);t("default",function(){var t=a.prototype;function a(){netManager.addEventListener("act.act_strategy_tab_info_s2c",this.on_act_strategy_tab_info_s2c,this),netManager.addEventListener("act.act_strategy_tab_level_s2c",this.on_act_strategy_tab_level_s2c,this),netManager.addEventListener("act.act_strategy_tab_job_s2c",this.on_act_strategy_tab_job_s2c,this),netManager.addEventListener("act.act_strategy_tab_equip_s2c",this.on_act_strategy_tab_equip_s2c,this),netManager.addEventListener("act.act_strategy_tab_equip_rebuild_s2c",this.on_act_strategy_tab_equip_rebuild_s2c,this),netManager.addEventListener("act.act_strategy_tab_skill_s2c",this.on_act_strategy_tab_skill_s2c,this),netManager.addEventListener("act.act_strategy_tab_pet_s2c",this.on_act_strategy_tab_pet_s2c,this),netManager.addEventListener("act.act_strategy_total_sp_info_s2c",this.on_act_strategy_total_sp_info_s2c,this),netManager.addEventListener("act.act_strategy_total_sp_update_s2c",this.on_act_strategy_total_sp_update_s2c,this),netManager.addEventListener("act.act_strategy_dungeon_info_s2c",this.on_act_strategy_dungeon_info_s2c,this),netManager.addEventListener("act.act_strategy_battle_pass_claim_s2c",this.on_act_strategy_battle_pass_claim_s2c,this),netManager.addEventListener("act.act_strategy_hour_reward_claim_s2c",this.on_act_strategy_hour_reward_claim_s2c,this)}return t.clear=function(){},t.reqActStrategyTabInfo=function(){netManager.send("act.act_strategy_tab_info_c2s",{})},t.on_act_strategy_tab_info_s2c=function(t){IS(n).level=t.level,IS(n).job=t.job,IS(n).equipList=t.equip_list;var a=t.skill_list||[];IS(n).skillIdToInfo={};for(var e=0;e<a.length;e++)IS(n).skillIdToInfo[a[e].skill_id]=a[e];var s=t.pet_list||[];IS(n).petIdToInfo={};for(var i=0;i<s.length;i++)IS(n).petIdToInfo[s[i].pet_id]=s[i];IS(n).UpdateJobRed(),normalEvent.emit(_.OnStrategyInfoBack)},t.on_act_strategy_tab_level_s2c=function(t){IS(n).level=t.level,IS(n).UpdateJobRed(),normalEvent.emit(_.OnStrategyLevelUpdate)},t.reqActStrategyTabJob=function(t){netManager.send("act.act_strategy_tab_job_c2s",{job:t})},t.on_act_strategy_tab_job_s2c=function(t){IS(n).job=t.job,IS(n).UpdateJobRed(),normalEvent.emit(_.OnStrategyJobUpdate)},t.reqActStrategyTabEquip=function(){netManager.send("act.act_strategy_tab_equip_c2s",{})},t.on_act_strategy_tab_equip_s2c=function(t){var a=t.equip_list;null!=a&&(IS(n).equipList=a,normalEvent.emit(_.OnStrategyEquipListUpdate))},t.reqActStrategyTabEquipRebuild=function(t,a){netManager.send("act.act_strategy_tab_equip_rebuild_c2s",{equip_id:t,attr_list:a})},t.on_act_strategy_tab_equip_rebuild_s2c=function(t){var a=t.change_list;if(null!=a){for(var s={},i=0;i<a.length;i++)s[a[i].location]=a[i];for(var c=!1,r=0;r<IS(n).equipList.length;r++){var o=IS(n).equipList[r].location;s[o]&&(c=!0,IS(n).equipList[r]=s[o],normalEvent.emit(_.OnStrategyEquipUpdate,o))}c&&e.showFlyTip(GetLanguage(200090)),normalEvent.emit(_.OnStrategyEquipListUpdate)}},t.reqActStrategyTabSkillUnlock=function(t){netManager.send("act.act_strategy_tab_skill_unlock_c2s",{skill_id:t})},t.reqActStrategyTabSkill=function(t){netManager.send("act.act_strategy_tab_skill_c2s",{pos_info:t})},t.on_act_strategy_tab_skill_s2c=function(t){var a=t.skill_list;if(null!=a){for(var e=0;e<a.length;e++)IS(n).skillIdToInfo[a[e].skill_id]=a[e],normalEvent.emit(_.OnStrategySkillUpdate,a[e].skill_id);normalEvent.emit(_.OnStrategySkillListUpdate)}},t.reqActStrategyTabPetUnlock=function(t){netManager.send("act.act_strategy_tab_pet_unlock_c2s",{pet_id:t})},t.reqActStrategyTabPet=function(t){netManager.send("act.act_strategy_tab_pet_c2s",{pos_info:t})},t.on_act_strategy_tab_pet_s2c=function(t){var a=t.pet_list;if(null!=a){for(var e=0;e<a.length;e++)IS(n).petIdToInfo[a[e].pet_id]=a[e],normalEvent.emit(_.OnStrategyPetUpdate,a[e].pet_id);normalEvent.emit(_.OnStrategyPetListUpdate)}},t.reqActStrategyTotalSpInfo=function(t){netManager.send("act.act_strategy_total_sp_info_c2s",{type:t})},t.on_act_strategy_total_sp_info_s2c=function(t){0==t.type?IS(n).updateRoleAttrByList(t.list):1==t.type&&normalEvent.emit(_.OnStrategySpInfoBack,t.list),IS(n).updateRoleAttrObj(t.attr_obj)},t.on_act_strategy_total_sp_update_s2c=function(t){IS(n).updateRoleAttrByList(t.list),IS(n).updateRoleAttrObj(t.attr_obj)},t.send_act_strategy_dungeon_info_c2s=function(){netManager.send("act.act_strategy_dungeon_info_c2s",{})},t.on_act_strategy_dungeon_info_s2c=function(t){IS(n).UpdateStrategyDungeonInfo(t)},t.send_act_strategy_battle_pass_claim_c2s=function(t){netManager.send("act.act_strategy_battle_pass_claim_c2s",{battle_pass_id:t})},t.on_act_strategy_battle_pass_claim_s2c=function(t){IS(n).UpdateBattlePass(t)},t.send_act_strategy_hour_reward_claim_c2s=function(){netManager.send("act.act_strategy_hour_reward_claim_c2s",{})},t.on_act_strategy_hour_reward_claim_s2c=function(t){IS(n).UpdateHoureRewardInfo(t)},a}());a._RF.pop()}}}));
