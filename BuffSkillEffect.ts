System.register("chunks:///_virtual/BuffSkillEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./Buff.ts"],(function(t){"use strict";var n,i,o,r;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy},function(t){o=t.ObjectPool},function(t){r=t.Buff}],execute:function(){i._RF.push({},"eb6843rqkVOtbJ4kHogcwGO","BuffSkillEffect",void 0);var e=t("BuffSkillEffect",function(t){function i(){for(var n,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this)._id=void 0,n}n(i,t);var o=i.prototype;return o.onBegin=function(){this.runner.pushRun(),this.owner.skillctr.addSkillEffect(this._id,this.runner,this.config.param2,this.config.param3,this.config.param4,this.config.param5)},o.onDestroy=function(){this.runner.popRun(),this.owner.skillctr.removeSkillEffect(this._id),i._pool.free(this)},i.alloc=function(t){var n=i._pool.alloc();return n.config=t,n._id=t.param1,n},i}(r));e._pool=new o(e,30),i._RF.pop()}}}));

