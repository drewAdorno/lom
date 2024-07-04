System.register("chunks:///_virtual/ChapterControl.ts",["cc","./BattleData.ts","./MessageView.ts","./ControlMgr.ts","./GuildWarControl.ts","./outlineDefine.ts","./outlineModel.ts","./PvpControl.ts","./NativeToJs.ts","./ChapterDataCache.ts","./ChapterDefine.ts"],(function(e){"use strict";var t,a,n,r,i,c,_,p,o,s,h,d,u,l;return{setters:[function(e){t=e.cclegacy,a=e.sys},function(e){n=e.ChapterType,r=e.PlayerData,i=e.BattleData},function(e){c=e.default},function(e){_=e.controlMgr},function(e){p=e.default},function(e){o=e.outlineDefine},function(e){s=e.outlineModel},function(e){h=e.default},function(e){d=e.NativeToJs},function(e){u=e.ChapterDataCache},function(e){l=e.ChapterEventDefine}],execute:function(){t._RF.push({},"0f71aCYNQ5INrKA5XrwfsvN","ChapterControl",void 0);e("default",function(){var e=t.prototype;function t(){netManager.addEventListener("main_chapter.main_chapter_info_s2c",this.on_main_chapter_info_s2c,this),netManager.addEventListener("main_chapter.main_chapter_result_s2c",this.on_main_chapter_result_s2c,this),netManager.addEventListener("main_chapter.main_chapter_kill_reward_s2c",this.on_main_chapter_kill_reward_s2c,this),netManager.addEventListener("main_chapter.main_chapter_reward_info_s2c",this.on_main_chapter_reward_info_s2c,this),netManager.addEventListener("main_chapter.main_chapter_claim_reward_s2c",this.on_main_chapter_claim_reward_s2c,this),netManager.addEventListener("main_chapter.main_chapter_enter_s2c",this.on_main_chapter_enter_s2c,this),_.addControl(this)}return e.clear=function(){printLog("ChapterControl")},e.onLogin=function(){},e.onReconnect=function(){var e=IS(u);e.currentLoadType=0,e.chapterType!=n.Team20||IS(p).reqGuildBossEnter()},e.reqChapterInfo=function(){netManager.send("main_chapter.main_chapter_info_c2s",{})},e.reqChapterBoss=function(){var e=IS(u),t=chapterDataCache.getChapterConfigInfo(e.curChapterId),a=t.getDataByList("index",t.getDataByKey(e.curChapterId).index),n=a[a.length-1];this.reqEnterChapter(n.id)},e.reqEnterChapter=function(e,t){void 0===t&&(t=!1);var a=IS(u);t&&(a.currentLoadType=0),a.currentLoadType>0||(netManager.send("main_chapter.main_chapter_enter_c2s",{part_id:e}),a.chapterType=n.Main,a.currentLoadType=a.chapterType)},e.reqChapterResult=function(e,t,a,n){void 0===a&&(a=0);var r=IS(u);netManager.send("main_chapter.main_chapter_result_c2s",{part_id:r.curChapterId,result:t,manual_operators:a,operators:n}),r.curChapterId=e},e.reqChaptrKillReward=function(e,t,a){netManager.send("main_chapter.main_chapter_kill_reward_c2s",{part_id:e,unit_id:t,pos:a})},e.reqChapterOutLineReward=function(e){netManager.send("main_chapter.main_chapter_reward_info_c2s",{type:e})},e.reqChapterOutLineGetReward=function(e){netManager.send("main_chapter.main_chapter_claim_reward_c2s",{type:e}),IS(u).hasFetchPop=!0},e.on_main_chapter_info_s2c=function(e){var t=IS(u);t.curChapterId=e.part_id,t.chapterMode=e.is_unlimited},e.on_main_chapter_result_s2c=function(e){2==e.code&&c.showBoxTip({tip:GetLanguage(200142),ensure:GetLanguage(200129),btnCnt:1,title:GetLanguage(200143)}),this.reqEnterChapter(e.part_id)},e.on_main_chapter_kill_reward_s2c=function(e){e.reward_list&&e.reward_list.length>0&&(IS(u).lastKillRewardTime=a.now(),normalEvent.emit(l.CHAPTER_KILL_REWARD,e.pos,e.reward_list))},e.on_main_chapter_reward_info_s2c=function(e){1==e.type?(IS(s).SetShowBtn(e),normalEvent.emit(o.OutLineInfoBack,e)):IS(s).SetOutLineInfo(e)},e.on_main_chapter_claim_reward_s2c=function(e){},e.on_main_chapter_enter_s2c=function(e){var t=IS(u);if(t.currentLoadType==n.Main){t.currentLoadType=0,t.chapterType=n.Main;var a=chapterDataCache.getChapterConfig(e.part_id);if(null!=a&&(t.curChapterId=e.part_id,52==e.part_id?d.hwLogEventApi("class_2-1"):102==e.part_id?d.hwLogEventApi("class_3-1"):152==e.part_id?d.hwLogEventApi("class_4-1"):202==e.part_id?d.hwLogEventApi("class_5-1"):252==e.part_id?d.hwLogEventApi("class_6-1"):302==e.part_id&&d.hwLogEventApi("class_7-1"),a=chapterDataCache.getChapterConfig(t.curChapterId)),t.chapterMode=1==a.part_type?0:e.is_unlimited,e.battle_checkout>0){var c=new i;c.chapterId=t.curChapterId,c.chapterMode=0,c.battleCheckout=2,c.seed=e.random_seed,c.playerList[1]=new r(1),IS(h).setPlayerList(e.roles[0],c.playerList[1]),c.chapterType=n.Main,t.battleData=c}else t.battleData=t.createBattleData(n.Main,e.part_id,t.chapterMode)}},t}());t._RF.pop()}}}));
