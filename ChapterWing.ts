System.register("chunks:///_virtual/ChapterWing.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FixMath.ts","./ChapterNormal.ts"],(function(t){"use strict";var e,r,a,n,i;return{setters:[function(t){e=t.inheritsLoose,r=t.createForOfIteratorHelperLoose},function(t){a=t.cclegacy},function(t){n=t.FixMath},function(t){i=t.ChapterNormal}],execute:function(){a._RF.push({},"d4539f1+d1CqLQAkuENXoRq","ChapterWing",void 0);t("ChapterWing",function(t){function a(){return t.apply(this,arguments)||this}e(a,t);var i=a.prototype;return i.getConfig=function(t){return configDark_trial_chapter.getDataByKey(t)},i.onAddMonster=function(t){var e=this.battleMain.data.openServerDay,a=configDark_trial_chapter.getDataByKey(this.config.id);if(!(a.difficulty_adjust.length<=0))for(var i,o=r(a.difficulty_adjust);!(i=o()).done;){var u=i.value;if(u[0]==e){for(var c,s=r(u[1]);!(c=s()).done;){var f=c.value,l=t.data.getAttribMeta(f[0]),p=n.roundInt(l.baseValue*(1+f[1]/1e4));l.baseValue=p}break}}},a}(i));a._RF.pop()}}}));

