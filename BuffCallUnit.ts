System.register("chunks:///_virtual/BuffCallUnit.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./Buff.ts"],(function(t){"use strict";var n,i,o,r;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy},function(t){o=t.ObjectPool},function(t){r=t.Buff}],execute:function(){i._RF.push({},"12bc3cn1slDD48BaDyoR1My","BuffCallUnit",void 0);var s=t("BuffCallUnit",function(t){function i(){for(var n,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this)._unitId=void 0,n._attribs=void 0,n}n(i,t);var o=i.prototype;return o.onBegin=function(){var t,n=this.owner,i=(this.runner.cast,null!=(t=n&&n.position)?t:this.position);this.runner.addCallUnit(this._unitId,i,this.currenTime,this._attribs,this.skillPar,0==this.config.param2)},o.onDestroy=function(){i._pool.free(this)},i.alloc=function(t){var n=i._pool.alloc();return n.config=t,n._unitId=t.param1,n._attribs=t.param5,n},i}(r));s._pool=new o(s,10),i._RF.pop()}}}));

