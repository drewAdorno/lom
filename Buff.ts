System.register("chunks:///_virtual/Buff.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FixMath.ts","./EnumDefine.ts","./V2.ts"],(function(t){"use strict";var i,n,e,s,o;return{setters:[function(t){i=t.createClass},function(t){n=t.cclegacy},function(t){e=t.FixMath},function(t){s=t.BattleFlag},function(t){o=t.V2}],execute:function(){n._RF.push({},"9ec2cidOjNLeZrnvUcvRfKV","Buff",void 0);t("Buff",function(){function t(){this.owner=void 0,this.position=o.ZERO,this.runner=void 0,this._config=void 0,this.buffType=0,this.currenTime=0,this._run=!1,this._isDestroy=!1,this.effect=void 0,this.skillPar=0}var n=t.prototype;return n.loadEffect=function(){var t;if(null==this.effect&&0!=this.config.effect){var i=this.runner.battleMain;if(i.battleFlag&s.OPEN_GRAPHIC&&!(i.battleFlag&s.UI_MASK)){var n=configEffect.getDataByKey(this.config.effect);if(!(n&&n.is_ban&&i.battleFlag&s.SIMP_MODEL)){var e=i.renderMgr.allocEffect(this.config.effect,null,0!=this.config.type?-1:null);e.position=null!=(t=this.owner&&this.owner.getBindPos(this.config.bind))?t:this.position,0!=this.config.type&&(this.effect=e)}}}},n.execBuff=function(t){if(!this._run||0==this.currenTime)return!1;var i;(-1!=this.currenTime&&(this.currenTime=e.round(this.currenTime-t),this.currenTime=Math.max(this.currenTime,0)),this.loadEffect(),null!=this.effect)&&(this.effect.position=null!=(i=this.owner&&this.owner.getBindPos(this.config.bind))?i:this.position);return this.onUpdate(t),!0},n.start=function(){this._run=!0,this._isDestroy=!1,this.loadEffect(),this.onBegin()},n._destroy=function(){(this.onDestroy(),null!=this.effect)&&(this.runner.battleMain.renderMgr.freeEffect(this.effect),this.effect=null);this.owner=null,this.runner=null,this.skillPar=0},n.stop=function(){this._run&&(this._run=!1)},n.destroy=function(){this._isDestroy||(this._isDestroy=!0,this._destroy())},n.updateAttrib=function(){},n.calDamage=function(t,i,n){return 0},n.onShieldAction=function(t){return 0},n.onShareDamageAction=function(t,i,n){return 0},n.onDamage=function(t){},n.onTotalDamage=function(t){},n.onStateTrigger=function(t,i){},n.onAddBuffTrigger=function(t,i,n){},n.checkTarget=function(t){},n.onUpdate=function(t){},i(t,[{key:"config",get:function(){return this._config},set:function(t){this._config=t,this.buffType=t.group}}]),t}());n._RF.pop()}}}));

