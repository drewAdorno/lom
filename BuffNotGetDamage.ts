System.register("chunks:///_virtual/BuffNotGetDamage.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./Buff.ts"],(function(t){"use strict";var e,o,n,c;return{setters:[function(t){e=t.inheritsLoose},function(t){o=t.cclegacy},function(t){n=t.ObjectPool},function(t){c=t.Buff}],execute:function(){o._RF.push({},"5e727aYvFpNkYcvAeaNFIgL","BuffNotGetDamage",void 0);var r=t("BuffNotGetDamage",function(t){function o(){return t.apply(this,arguments)||this}e(o,t);var n=o.prototype;return n.onBegin=function(){this.owner.statectr.notGetDamage++},n.onDestroy=function(){this.owner.statectr.notGetDamage--,o._pool.free(this)},o.alloc=function(t){var e=o._pool.alloc();return e.config=t,e},o}(c));r._pool=new n(r,30),o._RF.pop()}}}));

