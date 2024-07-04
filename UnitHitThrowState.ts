System.register("chunks:///_virtual/UnitHitThrowState.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FixMath.ts","./Target.ts","./EnumDefine.ts","./V2.ts","./State.ts"],(function(t){"use strict";var i,n,e,o,r,s,h,c;return{setters:[function(t){i=t.inheritsLoose},function(t){n=t.cclegacy},function(t){e=t.FixMath},function(t){o=t.TargetPoint},function(t){r=t.UnitConfig,s=t.StateType},function(t){h=t.V2},function(t){c=t.State}],execute:function(){n._RF.push({},"f9410O+/lNFaLJ2jUeADYmH","UnitHitThrowState",void 0);var u=new h;function a(t){return t*(2-t)}t("UnitHitThrowState",function(t){function n(i,n){var e;return(e=t.call(this,i,n)||this)._changePos=void 0,e._oldPos=void 0,e._currenTime=0,e._duration=void 0,e._height=void 0,e._dis=void 0,e.type=s.HitThrow,e}i(n,t);var h=n.prototype;return h.onEnter=function(){var t=this._owner;t.idle(),this._ctr.lockCurrenState=!0,t.movectr.stopMove(),this._ctr.beControlled++},h.setThrowHit=function(t,i,n){void 0===n&&(n=0),this._duration=i,this._changePos=!0,this._height=t,this._oldPos=this._owner.position.clone(),this._currenTime=0,this._dis=this._owner.battleMain.hitThrowDis?n:0,this._owner.animatorctr.changeState(r.ANIMATOR_JIFEI,!1)},h.onUpdate=function(t){var i,n=this._owner;if(this._changePos){var r=e.round(this._currenTime/this._duration),s=0,h=0;if(this._height>0&&(r>=.5?(h=e.round(1-(i=r)*i),h=Math.max(h,0)):h=e.round(a(r)),h=this._height*h),0!=this._dis&&(s=e.round(a(r)),s=this._dis*s),u.set(s,h).add(this._oldPos),n.nextPoint=o.toPos(u,o.TP_Control),this._currenTime>=this._duration)return this._currenTime=0,void(this._changePos=!1);this._currenTime=e.round(this._currenTime+t)}this._changePos||(n.nextPoint=null,this.changeState())},h.onExit=function(){this._ctr.beControlled--,this._currenTime=0,this._changePos=!1},n}(c));n._RF.pop()}}}));

