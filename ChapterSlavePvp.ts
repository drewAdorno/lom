System.register("chunks:///_virtual/ChapterSlavePvp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ChapterArena.ts"],(function(t){"use strict";var e,a,r;return{setters:[function(t){e=t.inheritsLoose},function(t){a=t.cclegacy},function(t){r=t.ChapterArena}],execute:function(){a._RF.push({},"d1f80OSmD9GCarp53hkzd6u","ChapterSlavePvp",void 0);t("ChapterSlavePvp",function(t){function a(){return t.apply(this,arguments)||this}e(a,t);var r=a.prototype;return r.getConfig=function(t){return configCapture_slave.getDataByKey(t)},r.loadData=function(e){t.prototype.loadData.call(this,e),this.addBuff(this.battleMain.mainCtr.player),this.addBuff(this.arenaPlayerCtr.player)},r.addBuff=function(t){var e=t.data.buffs;null!=e&&0!=e.length&&e.forEach((function(e){t.skillctr.addChapterBuff(e)}))},r.onUpdate=function(t){if(!this.over){var e=this.battleMain;if(this.arenaPlayerCtr.player.isDead)return this.over=!0,void this.toResult(0);if(e.mainCtr.player.isDead)return this.over=!0,this.toResult(1),!0;this.updateTime(t)}},a}(r));a._RF.pop()}}}));

