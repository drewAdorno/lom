System.register("chunks:///_virtual/GuildWarControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BattleData.ts","./MetaAttrib.ts","./EnumDefine.ts","./EventDefine.ts","./ChapterControl.ts","./ChapterDataCache.ts","./ChapterDefine.ts","./ControlMgr.ts","./PvpControl.ts","./TeamDefine.ts","./GuildWarDataCache.ts","./GuildWarDefine.ts"],(function(e){"use strict";var t,s,n,i,o,a,_,r,l,u,d,c,g,b,p,f;return{setters:[function(e){t=e.createForOfIteratorHelperLoose},function(e){s=e.cclegacy},function(e){n=e.ChapterType,i=e.PlayerData,o=e.BattleData},function(e){a=e.AttribDefine},function(e){_=e.UnityType},function(e){r=e.EventDefine},function(e){l=e.default},function(e){u=e.ChapterDataCache},function(e){d=e.ChapterEventDefine},function(e){c=e.controlMgr},function(e){g=e.default},function(e){b=e.TeamEvent},function(e){p=e.GuildWarDataCache},function(e){f=e.GuildBossEventDefine}],execute:function(){s._RF.push({},"9bd20xSqgdBvaIAbiPKWtb7","GuildWarControl",void 0);e("default",function(){var e=s.prototype;function s(){netManager.addEventListener("guild_boss.guild_boss_info_s2c",this.on_guild_boss_info_s2c,this),netManager.addEventListener("guild_boss.guild_boss_sign_up_s2c",this.on_guild_boss_sign_up_s2c,this),netManager.addEventListener("guild_boss.guild_boss_enter_s2c",this.on_guild_boss_enter_s2c,this),netManager.addEventListener("guild_boss.guild_boss_exit_s2c",this.on_guild_boss_exit_s2c,this),netManager.addEventListener("guild_boss.guild_boss_start_s2c",this.on_guild_boss_start_s2c,this),netManager.addEventListener("guild_boss.guild_boss_combat_acc_s2c",this.on_guild_boss_combat_acc_s2c,this),netManager.addEventListener("guild_boss.guild_boss_combat_s2c",this.on_guild_boss_combat_s2c,this),netManager.addEventListener("guild_boss.guild_boss_rank_s2c",this.on_guild_boss_rank_s2c,this),netManager.addEventListener("guild_boss.guild_boss_result_s2c",this.on_guild_boss_result_s2c,this),netManager.addEventListener("guild_boss.guild_boss_stage_s2c",this.on_guild_boss_stage_s2c,this),netManager.addEventListener("guild_boss.guild_boss_skill_s2c",this.on_guild_boss_skill_s2c,this),netManager.addEventListener("dungeon.dungeon_league_solo_info_s2c",this.on_dungeon_league_solo_info_s2c,this),netManager.addEventListener("dungeon.dungeon_league_solo_update_box_s2c",this.on_dungeon_league_solo_update_box_s2c,this),c.addControl(this)}return e.clear=function(){printLog("GuildWarControl")},e.onLogin=function(){this.reqSoloBossInfo()},e.onReconnect=function(){this.reqSoloBossInfo()},e.reqGuildBossInfo=function(){netManager.send("guild_boss.guild_boss_info_c2s",{})},e.reqGuildBossSignUp=function(){netManager.send("guild_boss.guild_boss_sign_up_c2s",{})},e.reqGuildBossEnter=function(){netManager.send("guild_boss.guild_boss_enter_c2s",{})},e.reqGuildBossRankInfo=function(e,t){netManager.send("guild_boss.guild_boss_rank_c2s",{report_id:e,page:t})},e.reqGuildBossExit=function(){netManager.send("guild_boss.guild_boss_exit_c2s",{}),IS(p).popTips=!1,IS(l).reqEnterChapter(0)},e.reqSoloBossInfo=function(){netManager.send("dungeon.dungeon_league_solo_info_c2s",{})},e.reqGetSoloBoxReward=function(e){netManager.send("dungeon.dungeon_league_solo_get_reward_c2s",{type:e})},e.on_guild_boss_info_s2c=function(e){IS(p).stage=e.stage,IS(p).end_time=e.end_time,IS(p).level=e.level,IS(p).num=e.num,IS(p).is_join=e.is_join,IS(p).is_today=e.is_today,IS(p).in_sec=e.in_sec,IS(p).popTips=1==e.has_join,uiMgr.openView("MultiEnterView")},e.on_guild_boss_sign_up_s2c=function(e){IS(p).num=e.num,0==e.code&&(IS(p).is_join=1,normalEvent.emit(f.TYPE_GUILD_WAR_SINGUP_SUCCESS))},e.on_guild_boss_enter_s2c=function(e){var t=e.is_force;IS(p).memberList=1==t?e.member_list:IS(p).memberList.concat(e.member_list),1==IS(p).stage&&null==uiMgr.getOpenView("MultiWaitView")&&1==t?uiMgr.openView("MultiWaitView"):normalEvent.emit(f.TYPE_GUILD_WAR_WAIT_UPDATE,e.member_list),uiMgr.close("MultiEnterView"),uiMgr.closeAllView(["MainView","MessageView","GuideView","BattleHubView","MultiWaitView","CrosswarMapSceneView","CrossWarMapOverView"])},e.on_guild_boss_exit_s2c=function(e){uiMgr.close("MultiWaitView"),uiMgr.close("MultiEnterView"),normalEvent.emit(d.BATTLE_STATE,n.Team20,!1),IS(u).chapterType==n.Team20&&(IS(l).reqEnterChapter(0),battleMain.enterChapter())},e.on_guild_boss_start_s2c=function(e){var s=IS(u);if(s.chapterType==n.Team20||s.chapterType==n.Main&&0==s.currentLoadType){var r=IS(p);if(r.sratBattleTime=e.start_time,r.endBattleTime=e.end_time,r.bossCurHp=0,r.bossIndex=0,e.hp_state_list)for(var l,c=t(e.hp_state_list);!(l=c()).done;){var f=l.value;f.unit_type==_.Boss&&(r.bossCurHp=f.hp,r.bossIndex=f.unit_index)}s.currentLoadType=0,s.chapterType=n.Team20;var h=configLeague_gve_chapter.getDataByKey(e.level);s.curDungeonId=h.id;var v=new o;v.chapterId=h.id,v.chapterMode=0,v.seed=e.random_seed;for(var m,M=t(e.roles);!(m=M()).done;){var S=m.value,I=new i(S.id);v.playerList[S.id]=I,IS(g).setPlayerList(S,I);var E=I.units[0];E.currenHp=E.attribs[a.hp].value;var T=L(S.id);-1!=T&&(E.currenHp=T)}v.chapterType=n.Team20,s.battleData=v,r.collectCombat=!0,normalEvent.emit(d.BATTLE_STATE,n.Team20,!0),battleMain.enterChapter(0,!0),normalEvent.emit(b.TEAM_CLOSE),uiMgr.close("MultiWaitView"),uiMgr.close("MultiEnterView"),uiMgr.closeAllView(["MainView","MessageView","GuideView","BattleHubView"])}function L(s){if(!e.hp_state_list)return-1;for(var n,i=t(e.hp_state_list);!(n=i()).done;){var o=n.value;if(o.role_id==s)return o.hp}return-1}},e.on_guild_boss_combat_acc_s2c=function(e){if(IS(u).chapterType==n.Team20)for(var s,o=e.add_role,_=IS(u).battleData,l=t(o);!(s=l()).done;){var d=s.value;if(!IS(p).collectCombat||null==_.playerList[d.id]){var c=new i(d.id);IS(g).setPlayerList(d,c),c.units[0].currenHp=c.units[0].attribs[a.hp].value,IS(p).collectCombat?_.playerList[d.id]=c:battleEvent.emit(r.T20AddPlayer,c)}}},e.on_guild_boss_combat_s2c=function(e){if(IS(u).chapterType==n.Team20)if(IS(p).collectCombat){var s;if(!e.combat_list)return;var i=IS(u).battleData;i.combatList=null!=(s=i.combatList)?s:[];for(var o,a=t(e.combat_list);!(o=a()).done;){var _=o.value;i.combatList.push(_)}if(e.hp_state_list){var l;i.hpSateList=null!=(l=i.hpSateList)?l:[];for(var d,c=t(e.hp_state_list);!(d=c()).done;){var g=d.value;i.hpSateList.push(g)}}}else e.combat_list&&battleEvent.emit(r.T20CombatList,e.combat_list),e.hp_state_list&&battleEvent.emit(r.T20HpState,e.hp_state_list)},e.on_guild_boss_rank_s2c=function(e){uiMgr.openView("MultiRankView",e)},e.on_guild_boss_result_s2c=function(e){uiMgr.openView("MultiRewardView",e)},e.on_guild_boss_stage_s2c=function(e){IS(p).stage=e.stage,IS(p).end_time=e.end_time},e.on_guild_boss_skill_s2c=function(e){IS(u).chapterType==n.Team20&&battleEvent.emit(r.T20BossSkill,e.user_id,e.skill_id)},e.on_dungeon_league_solo_info_s2c=function(e){IS(p).initBoxInfo(e)},e.on_dungeon_league_solo_update_box_s2c=function(e){IS(p).updateBoxList(e.box_info)},s}());s._RF.pop()}}}));

