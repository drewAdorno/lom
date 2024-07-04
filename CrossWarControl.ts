System.register("chunks:///_virtual/CrossWarControl.ts",["cc","./StorageUtil.ts","./ActivityDataCache.ts","./ActivityDefine.ts","./ControlMgr.ts","./CrossWarDatacache.ts","./CrossWarDefine.ts","./CrossWarSceneDataCache.ts"],(function(e){"use strict";var s,r,n,o,_,t,a,c,i,w;return{setters:[function(e){s=e.cclegacy},function(e){r=e.default},function(e){n=e.default},function(e){o=e.ActivityType,_=e.ActivityState,t=e.ActivityEventDefine},function(e){a=e.controlMgr},function(e){c=e.CrossWarDataCache},function(e){i=e.CrossWarEventDefine},function(e){w=e.CrossWarSceneDataCache}],execute:function(){s._RF.push({},"9f8b9QhYTBBaos2oEZNMP7a","CrossWarControl",void 0);e("default",function(){var e=s.prototype;function s(){netManager.addEventListener("cross_war.cross_war_info_s2c",this.on_cross_war_info_s2c,this),netManager.addEventListener("cross_war.cross_war_choose_job_s2c",this.on_cross_war_choose_job_s2c,this),netManager.addEventListener("cross_war.cross_war_idle_reward_s2c",this.on_cross_war_idle_reward_s2c,this),netManager.addEventListener("cross_war.cross_war_get_idle_reward_s2c",this.on_cross_war_get_idle_reward_s2c,this),netManager.addEventListener("cross_war.cross_war_battle_report_s2c",this.on_cross_war_battle_report_s2c,this),netManager.addEventListener("cross_war.cross_war_scene_info_s2c",this.on_cross_war_scene_info_s2c,this),netManager.addEventListener("cross_war.cross_war_scene_leave_c2s",this.on_cross_war_scene_leave_c2s,this),netManager.addEventListener("cross_war.cross_war_revive_s2c",this.on_cross_war_revive_s2c,this),netManager.addEventListener("cross_war.cross_war_scene_select_s2c",this.on_cross_war_scene_select_s2c,this),netManager.addEventListener("cross_war.cross_war_goods_show_s2c",this.on_goods_show_s2c,this),netManager.addEventListener("cross_war.cross_war_kill_list_s2c",this.on_cross_war_kill_list_s2c,this),netManager.addEventListener("cross_war.cross_war_is_holy_open_s2c",this.on_cross_war_is_holy_open_s2c,this),normalEvent.on(t.OnActivityInfoUpdate,this.checkShowPreview,this),normalEvent.on(t.OnActivityListUpdate,this.checkShowPreview,this),a.addControl(this)}return e.clear=function(){printLog("CrossWarControl")},e.onLogin=function(){this.reqCrossWarInfo();var e=IS(w);e.battleAction=null,e.clearActions(),e.currenSceneType=0},e.onReconnect=function(){if(0!=IS(w).currenSceneType){var e=IS(w);e.roleMap={},e.battleAction=null,e.clearActions(),IS(c).clearActions(),netManager.send("cross_war.cross_war_reconnect_c2s",{val:e.currenSceneType+1}),uiMgr.getOpenView("CrosswarMapSceneView")||uiMgr.openView("CrosswarMapSceneView",e.currenSceneType)}},e.reqCrossWarInfo=function(){netManager.send("cross_war.cross_war_info_c2s",{})},e.reqCrossWarJobSel=function(e){netManager.send("cross_war.cross_war_choose_job_c2s",{job:e})},e.reqCrossWarIdelReward=function(){netManager.send("cross_war.cross_war_idle_reward_c2s",{})},e.reqCrossWarGetIdelReward=function(){netManager.send("cross_war.cross_war_get_idle_reward_c2s",{})},e.reqCrossWarSceneInfo=function(){netManager.send("cross_war.cross_war_scene_info_c2s",{})},e.reqCrossWarSceneSelect=function(e){netManager.send("cross_war.cross_war_scene_select_c2s",{serv_id:e})},e.reqCrossWarSceneTransfer=function(e,s){IS(c).scene_base=e;var r={x:Math.floor(s.x),y:Math.floor(s.y)};netManager.send("cross_war.cross_war_scene_transfer_c2s",{scene_base:e,pos:r})},e.reqCrossWarSceneTransferClose=function(){netManager.send("cross_war.cross_war_scene_transfer_close_c2s",{})},e.reqCrossWarSceneTransferSlide=function(e){var s={x:Math.floor(8*e.x),y:Math.floor(8*e.y)};netManager.send("cross_war.cross_war_scene_transfer_slide_c2s",{pos:s})},e.reqCrossWarSceneEnter=function(e,s){IS(w).battleAction=null;var r={x:Math.floor(8*s.x),y:Math.floor(8*s.y)};netManager.send("cross_war.cross_war_scene_enter_c2s",{type:e,pos:r})},e.reqCrossWarRevive=function(e){IS(w).autoBattle=!1,netManager.send("cross_war.cross_war_revive_c2s",{type:e})},e.reqSceneSpeed=function(){netManager.send("cross_war.cross_war_scene_speed_c2s",{})},e.reqKillList=function(){netManager.send("cross_war.cross_war_kill_list_c2s",{})},e.reqHolyOpen=function(){netManager.send("cross_war.cross_war_is_holy_open_c2s",{})},e.on_cross_war_info_s2c=function(e){var s=IS(c);s.job=e.job,s.server_list=e.serv_list,s.report_his=e.history_report,normalEvent.emit(i.CROSS_WAR_INFO_CHANGE)},e.on_cross_war_choose_job_s2c=function(e){IS(c).job=e.new_job,normalEvent.emit(i.CROSS_WAR_JOB_CHANGE)},e.on_cross_war_idle_reward_s2c=function(e){var s=IS(c);s.las_reward_time=e.last_time,s.report_list=e.report_list,uiMgr.openView("CrossWarOutlinePopView")},e.on_cross_war_get_idle_reward_s2c=function(e){IS(c).las_reward_time=e.new_last_time,normalEvent.emit(i.CROSS_WAR_IDLE_REWARD_REFRESH)},e.on_cross_war_battle_report_s2c=function(e){uiMgr.close("CrossWarDeadView"),uiMgr.close("CrossWarMapOverView"),uiMgr.close("CrossWarEnterMapView"),normalTimer.start(.5,1,(function(){uiMgr.openView("CrossWarBattleReportView",e)}))},e.on_cross_war_scene_info_s2c=function(e){var s=IS(c);s.serv_id=e.serv_id,s.scene_base=e.scene_base,s.pos=e.pos,s.end_time=e.end_time,s.score=e.score,s.is_first=e.is_first,IS(w).transferCdTime=e.transfer_time,IS(w).speedCdTime=e.speed_time,normalEvent.emit(i.CROSS_WAR_SCENE_INFO_UPDATE)},e.on_cross_war_scene_leave_c2s=function(){},e.on_cross_war_revive_s2c=function(){uiMgr.close("CrossWarDeadView"),IS(c).roleDeadAction=null},e.on_cross_war_scene_select_s2c=function(e){uiMgr.openView("CrossWarMapOverView"),normalEvent.emit(i.CROSS_WAR_SCENE_INFO_UPDATE)},e.checkShowPreview=function(e){var s=IS(n).GetActivityInfo(o.CrossWar);if(s&&s.state==_.Open){var t=r.get("CROSS_WAR_PREVIEW");t&&t==s.round||uiMgr.openView("CrossWarPreview"),r.set("CROSS_WAR_PREVIEW",s.round)}},e.on_goods_show_s2c=function(e){!e.reward_list||e.reward_list.length<=0||IS(c).rewardActions.push((function(){uiMgr.openView("GoodsGetView",e.reward_list)}))},e.on_cross_war_kill_list_s2c=function(e){normalEvent.emit(i.CROSS_WAR_WANTED_LIST,e.list)},e.on_cross_war_is_holy_open_s2c=function(e){0==e.is_holy_open&&5==IS(c).scene_base&&uiMgr.openView("CrossWarMapOverView",1)},s}());s._RF.pop()}}}));
