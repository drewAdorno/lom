System.register("chunks:///_virtual/UnitBornState.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FixMath.ts","./EnumDefine.ts","./State.ts"],(function(t){"use strict";var n,i,e,o,r,c;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy},function(t){e=t.FixMath},function(t){o=t.UnitConfig,r=t.StateType},function(t){c=t.State}],execute:function(){i._RF.push({},"281596Z6IlEPIxK93DRfQ5z","UnitBornState",void 0);t("UnitBornState",function(t){function i(n,i){var e;return(e=t.call(this,n,i)||this)._curTime=0,e.type=r.Born,e}n(i,t);var c=i.prototype;return c.onEnter=function(){var t=this._owner;t.animatorctr.changeState(o.ANIMATOR_CHUXIAN),this._curTime=t.data.modelConfig.chuxian_time},c.onUpdate=function(t){this._curTime<=0?this.changeState(r.Idle):this._curTime=e.round(this._curTime-t)},c.onExit=function(){},i}(c));i._RF.pop()}}}));
