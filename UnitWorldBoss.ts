System.register("chunks:///_virtual/UnitWorldBoss.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EventDefine.ts","./MetaAttrib.ts","./Unit.ts"],(function(t){"use strict";var i,n,e,r,s,u;return{setters:[function(t){i=t.inheritsLoose,n=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy},function(t){r=t.EventDefine},function(t){s=t.AttribDefine},function(t){u=t.Unit}],execute:function(){e._RF.push({},"35b144B0wtPNIpzULSSk/SO","UnitWorldBoss",void 0);t("UnitWorldBoss",function(t){function e(){for(var i,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(i=t.call.apply(t,[this].concat(e))||this).units=[],i.hpNum=0,i.hurtNum=0,i}i(e,t);var u=e.prototype;return u.setHpBar=function(t){},u._hpAction=function(t,i,e){if(!(e>200)&&(e++,t>0&&0==this.data.currenHp)){this.hpNum++,t+=i;for(var r,u=Math.min(this.units.length-1,this.hpNum),a=this.units[u],o=configAttribute.getDataByList("module",1),h=n(o);!(r=h()).done;){var c=r.value;this.data.attribs[c.id].baseValue=a[c.key]}if(this.data.currenHp=this.data.getAttribByInt(s.hp),this.data.currenHp<=t)return t-=this.data.currenHp,this.data.currenHp=0,void this._hpAction(t,0,e);this.data.currenHp-=t}},u.onHpAction=function(t,i){this.hurtNum+=t>0?t:0;var n=this.hpNum;this._hpAction(t,i,0),0!=i&&this.battleMain.emit(r.BossHpChange,this),this.hpNum!=n&&this.battleMain.emit(r.UnitHpNumChange,this.hpNum)},e}(u));e._RF.pop()}}}));

