System.register("chunks:///_virtual/BuffSkillValue.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ObjectPool.ts","./FixMath.ts","./index83.ts","./Buff.ts","./MetaAttrib.ts","./EnumDefine.ts","./HurtUtil.ts","./BuffCtr.ts"],(function(t){"use strict";var r,a,e,i,n,u,l,o,d,s,c,f,h,g,_,p,b,T,k;return{setters:[function(t){r=t.inheritsLoose,a=t.createForOfIteratorHelperLoose},function(t){e=t.cclegacy},function(t){i=t.ObjectPool},function(t){n=t.FixMath},null,function(t){u=t.Buff},function(t){l=t.AttribDefine},function(t){o=t.HealthType,d=t.BattleFlag,s=t.BuffGroupType,c=t.AttackType,f=t.UnityType,h=t.StateTrigerType,g=t.EffectTriggerType},function(t){_=t.checkSkillCirt,p=t.checkHit,b=t.calHurt,T=t.skillHpsteal},function(t){k=t.freeBuffList}],execute:function(){var v,I;e._RF.push({},"5c049zkoMJI+KeEzh1MhpjX","BuffSkillValue",void 0),function(t){t[t.Add=1]="Add",t[t.Sub=2]="Sub",t[t.Attack=4]="Attack",t[t.Target=8]="Target"}(v||(v={})),function(t){t[t.Not=0]="Not",t[t.SkillCrit=1]="SkillCrit",t[t.T1045=2]="T1045",t[t.UseCrit=4]="UseCrit"}(I||(I={}));var m=t("BuffSkillValue",function(t){function e(){for(var r,a=arguments.length,e=new Array(a),i=0;i<a;i++)e[i]=arguments[i];return(r=t.call.apply(t,[this].concat(e))||this)._hpType=void 0,r._calType=void 0,r._attribId=void 0,r._ignoreFlag=0,r._limit=void 0,r}r(e,t);var i=e.prototype;return i._calHurt=function(t,r){var a=0,e=r.data.getAttrib(l.att),i=t.data.getAttrib(l.def),u=t.data.getAttrib(l.def_coe);switch(this._calType){case 0:a=this._hpType&v.Target?t.data.getAttrib(this._attribId):r.data.getAttrib(this._attribId);break;case 1:a=Math.max(n.roundInt(e-i*(1+u)),1);break;case 2:var o=r.data.getAttrib(l.hp);a=n.roundInt(o-t.data.currenHp);break;case 3:a=t.data.currenHp;break;case 4:var d=r.data.getAttrib(l.att_dam);a=n.roundInt(Math.max(n.roundInt(e-i*(1+u)),1)*d);break;case 5:e=t.data.getAttrib(l.att);var s=t.data.getAttrib(l.att_dam);a=n.roundInt(Math.max(n.roundInt(e-i*(1+u)),1)*s);break;case 6:var c=r.data.getAttrib(l.double_hit_dam);a=Math.max(n.roundInt(n.roundInt(e-i*(1+u))*c),1);break;case 7:var f=r.data.getAttrib(l.counter_dam);a=Math.max(n.roundInt(n.roundInt(e-i*(1+u))*f),1);break;case 8:a=r.data.currenHp}return a},i._calHpHurt=function(t,r,a){var e=3==this._calType||2==this._calType||8==this._calType;if(e=e||0==this._calType&&this._attribId==l.hp){var i=n.roundInt(a*this.skillPar);if(i=n.roundInt(i*t.battleMain.injuryReduce),this._limit){var u=r.data.getAttrib(l.att),d=t.data.getAttrib(l.def),s=t.data.getAttrib(l.def_coe),c=r.data.getAttrib(l.att_dam),f=n.roundInt(Math.max(n.roundInt(u-d*(1+s)),1)*c),h=n.roundInt(f*this._limit[0]),g=n.roundInt(f*this._limit[1]);i=Math.max(i,h),i=Math.min(i,g)}return this.runner.healthTarget(t,i,o.Hurt),!0}return!1},i.onBegin=function(){var t=this.owner,r=this.runner.cast;if(!(t.battleMain.battleFlag&d.NOT_HURT)){var e=this._calHurt(t,r);if(this._hpType&v.Add)return e=n.roundInt(e*this.skillPar),void this.runner.healthTarget(t,e,o.Treat);if(!this._calHpHurt(t,r,e)){e=n.round(e*r.data.getSkillFactAttrValue(this.skillPar,this.runner.useSkill.config.id,1043));var i=0,u=r.buffCtr.getBuffByType(s.SKILL_DAMAGE_ADD);if(u.length>0)for(var m,A=a(u);!(m=A()).done;){var y=m.value;i=n.roundInt(i+y.calDamage(e,t,this.runner.useSkill.config.id))}k(u);var S=this._ignoreFlag&I.T1045?1:r.data.getAttrib(l.skill_dam_extra),H=n.roundInt(e*S),M=o.Hurt;if(!(this._ignoreFlag&I.SkillCrit)&&_(r)){var B=r.data.getAttrib(l.skill_crit_dam);H=n.roundInt(H*n.round(1+B)),H=n.roundInt(Math.pow(H,.98)),M=o.Hurt_Crit}if(this._ignoreFlag&I.UseCrit&&p(r,t,!0)==c.Cirt){var C=r.data.getAttrib(l.crit_dam),x=t.data.getAttrib(l.crit_def);H=n.roundInt(H*Math.max(1.5,n.round(C/x)))}var F=r.data.getAttrib(l.boss_dam);this.owner.config.type==f.Boss&&F>0&&(H=n.roundInt(H*n.round(1+F))),H=n.roundInt(H+i);var D=r.skillctr.getRecordDamage(this.runner.useSkill.config.id);H=n.roundInt(H*n.round(1+n.round(D/1e4))),H=n.roundInt(H*this.runner.useSkill.counterDamage);var L=t.data.getAttrib(l.skill_resist);if(H=b(n.roundInt(H*Math.max(0,n.round(1-L))),t,r),this.runner.healthTarget(t,H,M),M==o.Hurt_Crit){for(var R,E=r.buffCtr.getBuffByType(s.STATE_TRIGER),w=a(E);!(R=w()).done;){R.value.onStateTrigger(h.Skill_Crit)}k(E);for(var P,U=r.skillctr.skillEffects,j=a(U);!(P=j()).done;){var O=P.value;O.triggerType==g.SKILL_CRIT&&(r.skillctr.checkTriggerCount(O.triggerType,O.limit)&&(0==O.useType?this.runner.addTask(O.id,t.position,O.runner,t):1==O.useType&&r.skillctr.addSkill(O.id)))}}var V=T(r,t,H);V>0&&this.runner.healthTarget(r,V,o.Skill_Hpsteal)}}},i.onDestroy=function(){e._pool.free(this)},e.alloc=function(t){var r=e._pool.alloc();return r.config=t,r._hpType=t.param1,r._calType=t.param2,r._attribId=t.param3,r._ignoreFlag=t.param4?t.param4:0,r._limit=t.param5,r},e}(u));m._pool=new i(m,100),e._RF.pop()}}}));

