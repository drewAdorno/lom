System.register("chunks:///_virtual/BuffTrigerByUType.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./Buff.ts","./EnumDefine.ts"],(function(t){"use strict";var o,e,n,f,r;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy},function(t){n=t.ObjectPool},function(t){f=t.Buff},function(t){r=t.UnityType}],execute:function(){e._RF.push({},"a1dc2pvCw9JVIqx47+ONJJS","BuffTrigerByUType",void 0);var i=t("BuffTrigerByUType",function(t){function e(){for(var o,e=arguments.length,n=new Array(e),f=0;f<e;f++)n[f]=arguments[f];return(o=t.call.apply(t,[this].concat(n))||this)._bossbuff=void 0,o._bossbufftime=void 0,o._monsterbuff=void 0,o._monsterbufftime=void 0,o}o(e,t);var n=e.prototype;return n.onBegin=function(){var t=this.owner;this.owner.config.type!=r.Monster?this.runner.addBuff(t,this._bossbuff,this._bossbufftime,this.skillPar):this.runner.addBuff(t,this._monsterbuff,this._monsterbufftime,this.skillPar)},n.onDestroy=function(){e._pool.free(this)},e.alloc=function(t){var o=e._pool.alloc();return o.config=t,o._bossbuff=t.param1,o._bossbufftime=t.param2,o._monsterbuff=t.param3,o._monsterbufftime=t.param4,o},e}(f));i._pool=new n(i,10),e._RF.pop()}}}));
