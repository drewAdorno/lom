System.register("chunks:///_virtual/BattleChapterDoubleLadderPanel.ts",["cc","./BattleData.ts","./AudioMgr.ts","./NodeUtil.ts","./TimeUtil.ts","./DungeonControl.ts","./IBattleChapterPanel.ts"],(function(t){"use strict";var e,i,a,n,o,h,r,d,s;return{setters:[function(t){e=t.cclegacy,i=t.ProgressBar,a=t.Label},function(t){n=t.ChapterType},function(t){o=t.audioMgr},function(t){h=t.default},function(t){r=t.default},function(t){d=t.default},function(t){s=t.BattleInfoType}],execute:function(){e._RF.push({},"5dc1022adFC1b76upreuyyN","BattleChapterDoubleLadderPanel",void 0);t("BattleChapterDoubleLadderPanel",function(){function t(t,e){this.view=void 0,this.node=void 0,this.bottomY=350,this.infoType=s.DoubleLadder,this.nodeTime=void 0,this.pbTime=void 0,this.txtTime=void 0,this.txtChapter=void 0,this.chapterTime=0,this.node=e,this.view=t,this.onInit()}var e=t.prototype;return e.reset=function(){var t=configDouble_ladder_chapter.getDataByKey(battleMain.data.chapterId);this.txtChapter.string=""+t.name,this.updatePart()},e.onInit=function(){this.nodeTime=h.findChild(this.node,"time"),this.pbTime=h.findChildComponent(this.nodeTime,"pbTime",i),this.txtTime=h.findChildComponent(this.nodeTime,"txtTime",a),this.txtChapter=h.findChildComponent(this.node,"txtChapter",a)},e.initBattleEvent=function(){},e.updateTime=function(){this.chapterTime!=Math.floor(battleMain.chapter.chapterTime)&&(this.chapterTime=Math.floor(battleMain.chapter.chapterTime),this.txtTime.string=r.formatTimeForSecond(this.chapterTime)),this.pbTime.progress=battleMain.chapter.chapterTime/battleMain.chapter.maxChapterTime},e.updatePart=function(){battleMain.chapter.timeModel?(this.nodeTime.active=!0,this.updateTime()):this.nodeTime.active=!1},e.exitBattle=function(){o.playMusic("battle"),IS(d).reqDungeonBattleResult(n.DoubleLadder,battleMain.data.chapterId,1,0,null)},e.onUpdate=function(t){battleMain.chapter.timeModel&&this.updateTime()},t}());e._RF.pop()}}}));

