System.register("chunks:///_virtual/ChapterSolo.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FixMath.ts","./V2.ts","./BaseChapter.ts"],(function(t){"use strict";var i,e,s,o,n,a;return{setters:[function(t){i=t.inheritsLoose,e=t.createForOfIteratorHelperLoose},function(t){s=t.cclegacy},function(t){o=t.FixMath},function(t){n=t.V2},function(t){a=t.BaseChapter}],execute:function(){s._RF.push({},"a8c55WMZWVJA44julPBYfKU","ChapterSolo",void 0);var r=new n;t("ChapterSolo",function(t){function s(){for(var i,e=arguments.length,s=new Array(e),o=0;o<e;o++)s[o]=arguments[o];return(i=t.call.apply(t,[this].concat(s))||this).bossList=[],i.bossUnit=void 0,i}i(s,t);var n=s.prototype;return n.init=function(){},n.destroy=function(){},n.getConfig=function(t){return configLeague_solo_chapter.getDataByKey(t)},n.setChapter=function(i){var e=this;t.prototype.setChapter.call(this,i),configLeague_solo_chapter.getDataByList("index",this.config.index).forEach((function(t){e.bossList.push(configUnit.getDataByKey(t.bossId))}))},n.start=function(){var t=this.battleMain,i=t.unitMgr.addSoloBoss(this.bossList[0].id,1);i.units=this.bossList;for(var s,o=e(this.mapConfig.points);!(s=o()).done;){var n=s.value;if(1===n[0]){i.position=r.set(n[1],n[2]).add2f(t.mapCamera.offsetX,0);break}}i.direction=-1,this.bossUnit=i},n.toResult=function(t,i){this.battleMain},n.onUpdate=function(t){if(!this.over){if(this.battleMain.mainCtr.player.isDead)return this.over=!0,this.toResult(1),!0;if(this.timeModel){if(this.chapterTime<=0)return this.over=!0,void this.toResult(this.bossUnit.hpNum>0?0:1,!0);this.chapterTime=o.round(this.chapterTime-t),this.chapterTime=Math.max(this.chapterTime,0)}}},n.onUnitHpNumChange=function(t){var i=Math.min(t,this.bossList.length),e=configLeague_solo_chapter.getDataByList("index",this.config.index);this.config=e[i-1],this.battleMain.data.chapterId=this.config.id},s}(a));s._RF.pop()}}}));

