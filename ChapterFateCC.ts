System.register("chunks:///_virtual/ChapterFateCC.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BattleData.ts","./index94.ts","./ChapterDefine.ts","./DungeonControl.ts","./MessageView.ts","./ChapterFate.ts"],(function(t){"use strict";var e,n,a,r,u,i,o,c;return{setters:[function(t){e=t.inheritsLoose,n=t.regeneratorRuntime},function(t){a=t.cclegacy},function(t){r=t.ChapterType},null,function(t){u=t.ChapterEventDefine},function(t){i=t.default},function(t){o=t.default},function(t){c=t.ChapterFate}],execute:function(){a._RF.push({},"530968mfCRC0rOZX7tmZuE9","ChapterFateCC",void 0);t("ChapterFateCC",function(t){function a(){return t.apply(this,arguments)||this}e(a,t);var c=a.prototype;return c.endResult=n().mark((function t(e,a,o){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,coroutine.wait(1);case 2:battleMain.enterChapter(),battleMain.curRecord&&battleMain.curRecord.manual?IS(i).reqDungeonBattleResult(r.Fate,e,a,1,battleMain.curRecord.collects):IS(i).reqDungeonBattleResult(r.Fate,e,a),normalEvent.emit(u.BATTLE_STATE,r.Fate,!1),battleMain.toResult(e,r.Fate,a,o);case 6:case"end":return t.stop()}}),t)})),c.toResult=function(t,e){void 0===e&&(e=!1);var n=this.battleMain,a=this.config;0==t&&n.checkCheat()&&(t=1,o.showBoxTip({tip:GetLanguage(200998),btnCnt:1,func:function(t){},ensure:GetLanguage(200129)})),coroutine.start(this.endResult(a.id,t,e),"battle")},a}(c));a._RF.pop()}}}));
