System.register("chunks:///_virtual/BuffHpTrigger.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./FixMath.ts","./Buff.ts","./MetaAttrib.ts"],(function(t){"use strict";var r,e,i,a,o,n;return{setters:[function(t){r=t.inheritsLoose},function(t){e=t.cclegacy},function(t){i=t.ObjectPool},function(t){a=t.FixMath},function(t){o=t.Buff},function(t){n=t.AttribDefine}],execute:function(){e._RF.push({},"8dc9cLqhXJKG7iK7OO1R/V6","BuffHpTrigger",void 0);var c=t("BuffHpTrigger",function(t){function e(){for(var r,e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];return(r=t.call.apply(t,[this].concat(i))||this).operator=void 0,r.triggervalue=void 0,r._addBuffid=void 0,r._addlasttime=void 0,r}r(e,t);var i=e.prototype;return i.onBegin=function(){this._checkAddBuff()},i.onDestroy=function(){e._pool.free(this)},i._checkAddBuff=function(){var t=this.owner.data.currenHp,r=a.round(t/this.owner.data.getAttrib(n.hp)),e=a.round(this.triggervalue/1e4),i=!1;switch(this.operator){case 0:i=r>e;break;case 1:i=r<e;break;case 2:i=r==e;break;case 3:i=r>=e;break;case 4:i=r<=e}i&&this.runner.addBuff(this.owner,this._addBuffid,this._addlasttime,this.skillPar)},e.alloc=function(t){var r=e._pool.alloc();return r.config=t,r.operator=t.param1,r.triggervalue=t.param2,r._addBuffid=t.param3,r._addlasttime=t.param4,r},e}(o));c._pool=new i(c,10),e._RF.pop()}}}));
