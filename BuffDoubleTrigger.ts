System.register("chunks:///_virtual/BuffDoubleTrigger.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./Buff.ts","./EnumDefine.ts"],(function(t){"use strict";var r,e,i,n,u;return{setters:[function(t){r=t.inheritsLoose},function(t){e=t.cclegacy},function(t){i=t.ObjectPool},function(t){n=t.Buff},function(t){u=t.SpBuffState}],execute:function(){e._RF.push({},"cf8c728sYJFb4RRx42fRZeT","BuffDoubleTrigger",void 0);var o=t("BuffDoubleTrigger",function(t){function e(){for(var r,e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return(r=t.call.apply(t,[this].concat(i))||this)._triggercount=void 0,r._addlasttime=void 0,r._addbufflist=void 0,r._currentTriggerValue=0,r}r(e,t);var i=e.prototype;return i.onBegin=function(){this.owner.data.AddBuffState(u.StateTriger,1)},i.onDestroy=function(){this.owner.data.AddBuffState(u.StateTriger,-1),e._pool.free(this)},i.onStateTrigger=function(t,r){if(this._currentTriggerValue++,this._currentTriggerValue>=this._triggercount){this._currentTriggerValue=0;for(var e=0;e<this._addbufflist.length;e++)this.runner.addBuff(r,this._addbufflist[e],this._addlasttime,this.skillPar)}},e.alloc=function(t){var r=e._pool.alloc();return r.config=t,r._triggercount=t.param1,r._addlasttime=t.param2,r._addbufflist=t.param5,r._currentTriggerValue=0,r},e}(n));o._pool=new i(o,10),e._RF.pop()}}}));

