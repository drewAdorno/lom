System.register("chunks:///_virtual/BattleChapterSoloPanel.ts",["cc","./MetaAttrib.ts","./EventDefine.ts","./AudioMgr.ts","./NodeUtil.ts","./TimeUtil.ts","./FixMath.ts","./DungeonControl.ts","./IBattleChapterPanel.ts"],(function(t){"use strict";var i,e,s,n,h,o,a,r,p,d,l,u,c,m;return{setters:[function(t){i=t.cclegacy,e=t.ProgressBar,s=t.Label,n=t.Sprite,h=t.UITransform,o=t.math},function(t){a=t.AttribDefine},function(t){r=t.EventDefine},function(t){p=t.audioMgr},function(t){d=t.default},function(t){l=t.default},function(t){u=t.FixMath},function(t){c=t.default},function(t){m=t.BattleInfoType}],execute:function(){i._RF.push({},"fee1fWPgzlBXpFDL/BCVXRc","BattleChapterSoloPanel",void 0);t("BattleChapterSoloPanel",function(){function t(t,i,e){this.view=void 0,this.node=void 0,this.infoType=m.Dungeon,this.nodeTime=void 0,this.pbTime=void 0,this.txtTime=void 0,this.txtTitle=void 0,this.title=void 0,this.txtLevel=void 0,this.chapterTime=0,this.pbBossHP=void 0,this._progress=1,this._curPress=1,this._utBar=void 0,this._barAni=!1,this._lastTime=0,this._speed=3,this.node=i,this.view=t,this.title=null!=e?e:GetLanguage_UI(999000349),this.onInit()}var i=t.prototype;return i.reset=function(){this.updateTime(),this.pbBossHP.progress=1,this._utBar.width=582,this.txtTitle.string=this.title},i.initBattleEvent=function(){battleEvent.on(r.UnitHpNumChange,this.onUnitHpNumChange,this),battleEvent.on(r.BossHpChange,this.onBossHpChange,this),this.onUnitHpNumChange(1)},i.onInit=function(){this.nodeTime=d.findChild(this.node,"time"),this.pbTime=d.findChildComponent(this.nodeTime,"pbTime",e),this.txtTime=d.findChildComponent(this.nodeTime,"txtTime",s);var t=d.findChildComponent(this.nodeTime,"Sprite",n);this.view.loadIcon(t,"battle","zxgq_ui_shijian"),this.txtLevel=d.findChildComponent(this.node,"boss/txtLevel",s),this.txtTitle=d.findChildComponent(this.node,"txtChapter",s),this.pbBossHP=d.findChildComponent(this.node,"pbBossHP",e),this._utBar=d.findChildComponent(this.node,"pbBossHP/imgBar",h)},i.exitBattle=function(){p.playMusic("battle"),IS(c).reqDungeonBattleResult(battleMain.data.chapterType,battleMain.data.chapterId,1)},i.updateTime=function(){this.chapterTime!=Math.floor(battleMain.chapter.chapterTime)&&(this.chapterTime=Math.floor(battleMain.chapter.chapterTime),this.txtTime.string=l.formatTimeForSecond(this.chapterTime)),this.pbTime.progress=battleMain.chapter.chapterTime/battleMain.chapter.maxChapterTime},i.onUnitHpNumChange=function(t){this.txtLevel.string=t>100?"Lv.∞":"Lv."+t,this._curPress=1,this._utBar.width=582*this._curPress},i.onBossHpChange=function(t){this._progress=t.data.currenHp/t.data.getAttrib(a.hp),this.pbBossHP.progress=this._progress},i.onUpdate=function(t){battleMain.chapter.timeModel&&this.updateTime();var i=u.round(Math.abs(this._curPress-this._progress));if(this._barAni){if(this._lastTime=0,i<this._speed*t&&this._speed<=1)return this._barAni=!1,this._utBar.width=582*this._progress,void(this._curPress=this._progress);this._curPress=o.lerp(this._curPress,this._progress,this._speed*t),this._utBar.width=582*this._curPress,i=u.round(Math.abs(this._curPress-this._progress))}0!=i&&(this._lastTime+=t,this._lastTime>.3&&(this._barAni=!0,this._speed=o.clamp(1/(1-i),1,3)))},t}());i._RF.pop()}}}));

