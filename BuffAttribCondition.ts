System.register("chunks:///_virtual/BuffAttribCondition.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./FixMath.ts","./Buff.ts","./MetaAttrib.ts"],(function(t){"use strict";var i,a,l,e,s,n;return{setters:[function(t){i=t.inheritsLoose},function(t){a=t.cclegacy},function(t){l=t.ObjectPool},function(t){e=t.FixMath},function(t){s=t.Buff},function(t){n=t.AttribDefine}],execute:function(){a._RF.push({},"b30dfmpFvVDdKnEWr1LG5PJ","BuffAttribCondition",void 0);var o=t("BuffAttribCondition",function(t){function a(){for(var i,a=arguments.length,l=new Array(a),e=0;e<a;e++)l[e]=arguments[e];return(i=t.call.apply(t,[this].concat(l))||this)._id=void 0,i._calType=void 0,i._isMultiples=void 0,i._value=void 0,i._limit=void 0,i.lastValue=void 0,i}i(a,t);var l=a.prototype;return l.onBegin=function(){},l.updateAttrib=function(){var t,i=this.owner.data.getAttribMeta(this._id);if(this.lastValue&&(this._isMultiples?i.addMultiples(-this.lastValue):i.addValue(-this.lastValue)),0==this._calType){var a=this.owner.data.getAttrib(n.hp),l=this.owner.data.currenHp;t=e.round(e.roundInt(a-l)/a)}this.lastValue=Math.min(this._limit,e.round(e.round(t*this._value)*this.skillPar)),this._isMultiples?i.addMultiples(this.lastValue):i.addValue(this.lastValue)},l.onDestroy=function(){if(this.lastValue){var t=this.owner.data.getAttribMeta(this._id);this._isMultiples?t.addMultiples(-this.lastValue):t.addValue(-this.lastValue)}a._pool.free(this)},a.alloc=function(t){var i=a._pool.alloc();return i.config=t,i._id=t.param1,i._calType=t.param2,i._isMultiples=2==t.param3,i._value=t.param4,i._limit=t.param5[0],i.lastValue=0,i},a}(s));o._pool=new l(o,30),a._RF.pop()}}}));
