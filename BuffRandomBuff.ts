System.register("chunks:///_virtual/BuffRandomBuff.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./FixMath.ts","./Buff.ts","./EnumDefine.ts"],(function(t){"use strict";var n,i,o,e,f,r;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy},function(t){o=t.ObjectPool},function(t){e=t.FixMath},function(t){f=t.Buff},function(t){r=t.BattleFlag}],execute:function(){i._RF.push({},"d3c5cnzZD9ImYea96/Wi2FE","BuffRandomBuff",void 0);var a=t("BuffRandomBuff",function(t){function i(){for(var n,i=arguments.length,o=new Array(i),e=0;e<i;e++)o[e]=arguments[e];return(n=t.call.apply(t,[this].concat(o))||this)._duration=void 0,n._curTime=0,n._buffTime=0,n}n(i,t);var o=i.prototype;return o.onBegin=function(){this.addBuff()},o.playEffect=function(){var t;if(0!=this.config.param3){var n=this.config.param3,i=this.runner.battleMain;if(i.battleFlag&r.OPEN_GRAPHIC&&!(i.battleFlag&r.UI_MASK)){var o=configEffect.getDataByKey(n);if(!(o&&o.is_ban&&i.battleFlag&r.SIMP_MODEL))i.renderMgr.allocEffect(n).position=null!=(t=this.owner&&this.owner.getBindPos(this.config.bind))?t:this.position}}},o.addBuff=function(){var t=this.config.param5;if(!(t.length<=0)){var n=t[this.runner.battleMain.random.randomInt(0,t.length)];if(n){for(var i=0;i<n.length;i+=2){var o=n[i],f=e.round(e.round(n[i+1]/1e4)*this.skillPar);this.runner.addBuff(this.owner,o,this._buffTime,f)}this.playEffect()}}},o.onUpdate=function(t){this._curTime>=this._duration&&(this.addBuff(),this._curTime=0),this._curTime=e.round(this._curTime+t)},o.onDestroy=function(){i._pool.free(this)},i.alloc=function(t){var n=i._pool.alloc();return n.config=t,n._duration=e.round(t.param1/1e3),n._buffTime=e.round(t.param2/1e3),n._curTime=0,n},i}(f));a._pool=new o(a,30),i._RF.pop()}}}));

