System.register("chunks:///_virtual/BuffRecoverPower.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./Buff.ts","./FixMath.ts"],(function(o){"use strict";var e,r,t,n,c;return{setters:[function(o){e=o.inheritsLoose},function(o){r=o.cclegacy},function(o){t=o.ObjectPool},function(o){n=o.Buff},function(o){c=o.FixMath}],execute:function(){r._RF.push({},"3ad4fn9BKpBDYX0LKFPOd7k","BuffRecoverPower",void 0);var i=o("BuffRecoverPower",function(o){function r(){for(var e,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return(e=o.call.apply(o,[this].concat(t))||this)._calType=void 0,e._value=void 0,e}e(r,o);var t=r.prototype;return t.onBegin=function(){var o;0==this._calType&&(o=this._value),o=c.round(o*this.skillPar);for(var e=this.runner.cast.data.skillList,r=0;r<e.length;r++){var t=e[r];t.currenPower=Math.min(c.roundInt(t.currenPower+o),t.config.maxPower)}},t.onDestroy=function(){r._pool.free(this)},r.alloc=function(o){var e=r._pool.alloc();return e.config=o,e._calType=o.param1,e._value=o.param2,e},r}(n));i._pool=new t(i,30),r._RF.pop()}}}));

