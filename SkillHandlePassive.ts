System.register("chunks:///_virtual/SkillHandlePassive.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseConfig.ts","./FixMath.ts","./SkillHandleBase.ts"],(function(t){"use strict";var e,n,i,l,s,o;return{setters:[function(t){e=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){i=t.cclegacy},function(t){l=t.CONFIG_KEY},function(t){s=t.FixMath},function(t){o=t.SkillHandleBase}],execute:function(){i._RF.push({},"c13dcnH9P1M8KIavwzGdKTU","SkillHandlePassive",void 0);t("SkillHandlePassive",function(t){function i(){for(var e,n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))||this).ptaskList=[],e}e(i,t);var o=i.prototype;return o.beginRun=function(){var t=this.runner,e=t.useSkill.config;if(null!=e.buffGroup)for(var i=0,o=0;o<e.buffGroup.length;o++){var a,r;i=e.buffGroup.length==t.useSkill.skillDam.length?null!=(a=t.useSkill.skillDam[o])?a:0^l:null!=(r=t.useSkill.skillDam[0])?r:0^l,i=s.round((i^l)/1e4);t.addBuff(t.cast,e.buffGroup[o],-1,i)}var u=e.skillEffect1;if(null!=u&&0!=u.length)for(var c,f=n(u);!(c=f()).done;){var p=c.value,h=this.addTask(p,t.cast.position,t);this.execSkillEffect(t.cast,h),0!=h.totalTime&&(h.totalTime=-1,this.ptaskList.push(h))}},o.onBeHitAction=function(t,e,n){this.runner},o.onUpdate=function(e){for(var i,l=n(this.ptaskList);!(i=l()).done;){i.value.pos.set(this.runner.cast.position)}t.prototype.onUpdate.call(this,e)},o.destroy=function(){t.prototype.destroy.call(this),this.ptaskList.length=0},i}(o));i._RF.pop()}}}));

