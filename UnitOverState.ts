System.register("chunks:///_virtual/UnitOverState.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EnumDefine.ts","./State.ts"],(function(t){"use strict";var n,e,r,i,o;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy},function(t){r=t.UnitConfig,i=t.StateType},function(t){o=t.State}],execute:function(){e._RF.push({},"13621vJpYZNmqj0Ww+A0BU9","UnitOverState",void 0);t("UnitOverState",function(t){function e(n,e){var r;return(r=t.call(this,n,e)||this).type=i.Over,r}n(e,t);var o=e.prototype;return o.onEnter=function(){var t=this._owner;t.stopAI++,t.animatorctr.changeState(r.ANIMATOR_IDLE),t.statectr.lockCurrenState=!0},o.onUpdate=function(t){},o.onExit=function(){this._owner.stopAI--},e}(o));e._RF.pop()}}}));

