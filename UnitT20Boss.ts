System.register("chunks:///_virtual/UnitT20Boss.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventDefine.ts","./MetaAttrib.ts","./Unit.ts"],(function(t){"use strict";var i,n,e,r,a,s;return{setters:[function(t){i=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy},function(t){r=t.EventDefine},function(t){a=t.AttribDefine},function(t){s=t.Unit}],execute:function(){e._RF.push({},"be951hwbLpClrnHgWs2TE1w","UnitT20Boss",void 0);t("UnitT20Boss",function(t){function e(){for(var i,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(i=t.call.apply(t,[this].concat(e))||this).units=[],i.hpNum=0,i.hurtNum=0,i.index=0,i}i(e,t);var s=e.prototype;return s.setHpBar=function(t){},s._hpAction=function(t,i){if(t>0&&0==this.data.currenHp){this.hpNum++,this.index++,t+=i;var e=this.index;if(e>=this.units.length)return;for(var r,s=this.units[e],u=configAttribute.getDataByList("module",1),h=n(u);!(r=h()).done;){var o=r.value;this.data.attribs[o.id].baseValue=s[o.key]}if(this.data.currenHp=this.data.getAttribByInt(a.hp),this.data.currenHp<=t)return t-=this.data.currenHp,this.data.currenHp=0,void this._hpAction(t,0);this.data.currenHp-=t}},s.onHpAction=function(t,i){this.hurtNum+=t>0?t:0;var n=this.hpNum;this._hpAction(t,i),0!=i&&this.battleMain.emit(r.BossHpChange,this),this.hpNum!=n&&this.battleMain.emit(r.UnitHpNumChange,this.hpNum),GlobalDefine.CLIENT_TYPE||this.battleMain.curRecord.addHpState(this)},s.onAddDamage=function(t,i,n){this.battleMain.curRecord.addDamage(t.attacker_id,t.defence_id,i,n,0)},e}(s));e._RF.pop()}}}));
