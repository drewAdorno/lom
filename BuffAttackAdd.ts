System.register("chunks:///_virtual/BuffAttackAdd.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./FixMath.ts","./Buff.ts","./MetaAttrib.ts"],(function(t){"use strict";var a,r,e,i,n,o;return{setters:[function(t){a=t.inheritsLoose},function(t){r=t.cclegacy},function(t){e=t.ObjectPool},function(t){i=t.FixMath},function(t){n=t.Buff},function(t){o=t.AttribDefine}],execute:function(){var c;r._RF.push({},"10560Cu7+9MHJ0MZCbi1+DD","BuffAttackAdd",void 0),function(t){t[t.AttNum=1]="AttNum",t[t.Attack=4]="Attack",t[t.Target=8]="Target"}(c||(c={}));var u=t("BuffAttackAdd",function(t){function r(){for(var a,r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];return(a=t.call.apply(t,[this].concat(e))||this)._addType=void 0,a._calType=void 0,a._attribId=void 0,a._limit=0,a}a(r,t);var e=r.prototype;return e.onBegin=function(){},e.calValue=function(t){if(this._addType&c.AttNum&&t%this._limit!=0)return 0;var a=this.owner,r=this.runner.cast,e=0;switch(this._calType){case 0:e=this._addType&c.Target?a.data.getAttrib(this._attribId):r.data.getAttrib(this._attribId);break;case 1:var n=r.data.getAttrib(o.att),u=a.data.getAttrib(o.def),s=a.data.getAttrib(o.def_coe);e=Math.max(i.roundInt(n-u*(1+s)),1);break;case 2:var d=r.data.getAttrib(o.hp);e=i.roundInt(d-a.data.currenHp);break;case 3:e=a.data.currenHp}return e=i.roundInt(e*this.skillPar)},e.onDestroy=function(){r._pool.free(this)},r.alloc=function(t){var a=r._pool.alloc();return a.config=t,a._addType=t.param1,a._calType=t.param2,a._attribId=t.param3,a._limit=t.param4,a},r}(n));u._pool=new e(u,50),r._RF.pop()}}}));

