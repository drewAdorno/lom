System.register("chunks:///_virtual/BuffTaunt.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./FixMath.ts","./Buff.ts"],(function(t){"use strict";var n,o,u,e,a;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy},function(t){u=t.ObjectPool},function(t){e=t.FixMath},function(t){a=t.Buff}],execute:function(){o._RF.push({},"05fe8qC/QpKsITb3atOvAjs","BuffTaunt",void 0);var r=t("BuffTaunt",function(t){function o(){for(var n,o=arguments.length,u=new Array(o),e=0;e<o;e++)u[e]=arguments[e];return(n=t.call.apply(t,[this].concat(u))||this)._value=void 0,n}n(o,t);var u=o.prototype;return u.onBegin=function(){this.owner.tauntValue=e.roundInt(this.owner.tauntValue+this._value)},u.onDestroy=function(){this.owner.tauntValue=e.roundInt(this.owner.tauntValue-this._value),o._pool.free(this)},o.alloc=function(t){var n=o._pool.alloc();return n.config=t,n._value=t.param1,n},o}(a));r._pool=new u(r,30),o._RF.pop()}}}));
