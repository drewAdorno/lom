System.register("chunks:///_virtual/BuffAttribContinue.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./FixMath.ts","./Buff.ts"],(function(t){"use strict";var i,e,a,u,o;return{setters:[function(t){i=t.inheritsLoose},function(t){e=t.cclegacy},function(t){a=t.ObjectPool},function(t){u=t.FixMath},function(t){o=t.Buff}],execute:function(){e._RF.push({},"ab704gFoshKW7WCh+iCsVEk","BuffAttribContinue",void 0);var r=t("BuffAttribContinue",function(t){function e(){for(var i,e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return(i=t.call.apply(t,[this].concat(a))||this)._id=void 0,i._value=void 0,i._isMultiples=void 0,i._lasttime=void 0,i._freqtime=void 0,i._CurTime1=0,i._CurTime2=0,i._totaladdvalue=0,i}i(e,t);var a=e.prototype;return a.onBegin=function(){this.AddValue()},a.AddValue=function(){var t=this.owner.data.getAttribMeta(this._id);if(null!=t){var i=u.round(this._value*this.skillPar);this._totaladdvalue=u.round(this._totaladdvalue+i),this._isMultiples?t.addMultiples(i):t.addValue(i)}else console.error("警告 属性 "+this._id+" 不存在")},a.onUpdate=function(t){this._CurTime1<this._lasttime&&(this._CurTime2>=this._freqtime&&(this.AddValue(),this._CurTime2=0),this._CurTime2=u.round(this._CurTime2+t),this._CurTime1=u.round(this._CurTime1+t))},a.onDestroy=function(){var t=this.owner.data.getAttribMeta(this._id);this._isMultiples?t.addMultiples(-this._totaladdvalue):t.addValue(-this._totaladdvalue),e._pool.free(this)},e.alloc=function(t){var i=e._pool.alloc();return i.config=t,i._id=t.param1,i._isMultiples=2==t.param2,i._value=t.param3,i._freqtime=t.param4,i._lasttime=t.param5[0],i._totaladdvalue=0,i._CurTime1=0,i._CurTime2=0,i},e}(o));r._pool=new a(r,30),e._RF.pop()}}}));

