System.register("chunks:///_virtual/ChapterSoloServer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./index94.ts","./ChapterSolo.ts"],(function(t){"use strict";var e,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy},null,function(t){r=t.ChapterSolo}],execute:function(){o._RF.push({},"1e5depXYoJHLbdztu0VFREG","ChapterSoloServer",void 0);t("ChapterSoloServer",function(t){function o(){return t.apply(this,arguments)||this}return e(o,t),o.prototype.toResult=function(t,e){void 0===e&&(e=!1);var o=this.battleMain;t>0&&this.onUnitHpNumChange(this.bossUnit.hpNum),o.curRecord&&(o.curRecord.hp_index=this.bossUnit.hpNum,o.curRecord.total_damage=this.bossUnit.hurtNum),o.toResult(t,e)},o}(r));o._RF.pop()}}}));
