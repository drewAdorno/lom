System.register("chunks:///_virtual/SkillHandleCounter.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FixMath.ts","./index83.ts","./MetaAttrib.ts","./EnumDefine.ts","./HurtUtil.ts","./V2.ts","./SkillCommonEffectUtil.ts","./SkillHandleBase.ts","./BuffCtr.ts"],(function(t){"use strict";var e,i,n,r,l,a,s,u,o,c,f,g,p,h,T,d,y,k,m;return{setters:[function(t){e=t.inheritsLoose,i=t.createForOfIteratorHelperLoose},function(t){n=t.cclegacy},function(t){r=t.FixMath},null,function(t){l=t.AttribDefine},function(t){a=t.HealthType,s=t.AttackType,u=t.UnityType,o=t.BuffGroupType,c=t.EffectTriggerType,f=t.BindType,g=t.BattleFlag},function(t){p=t.checkHit,h=t.normalCounterHurt,T=t.checkCounterThrowHit},function(t){d=t.V2},function(t){y=t.SkillCommonEffectUtil},function(t){k=t.SkillHandleBase},function(t){m=t.freeBuffList}],execute:function(){n._RF.push({},"59998OpSv1F44lmMc20eM34","SkillHandleCounter",void 0);t("SkillHandleCounter",function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var k=n.prototype;return k.beginRun=function(){var t=this.runner;t.healthTarget(t.cast,0,a.Counter_Act),t.useSkill.state=0,this.triggerAction(t),t.interrupt()},k.att=function(t,e){if(!t.cast.isDestroy&&null!=e&&!e.isDestroy){var n=p(t.cast,e);if(n>s.Miss){var f=h(t.cast,e,n),g=n==s.Normal?a.Hurt:a.Hurt_Crit,d=this.runner.cast.data.getAttrib(l.boss_dam);e.config.type==u.Boss&&d>0&&(f=r.roundInt(f*r.round(1+d)));for(var y,k=e.buffCtr.getBuffByType(o.FRAGILE_EFFECT),v=i(k);!(y=v()).done;){f+=y.value.calDamage(f,t.cast)}m(k),t.healthTarget(e,f,g);var B=configUnitType.getDataByKey(t.cast.config.type);T(t.cast,e)&&t.throwHit(e,B.suspend_time[0],B.suspend_time[1],0);for(var H,C=t.cast.skillctr.skillEffects,b=i(C);!(H=b()).done;){var _=H.value;_.triggerType!=c.COUNTER&&_.triggerType!=c.ALL_ATTACK||t.cast.skillctr.checkTriggerCount(_.triggerType,_.limit)&&(0==_.useType?this.addTask(_.id,e.position,_.runner,e):1==_.useType&&t.cast.skillctr.addSkill(_.id))}}else t.healthTarget(e,0,a.Miss)}},k.triggerAction=function(t){var e=t.cast.config.bullet;if(null!=t.configWeapon&&(e=t.configWeapon.bullet),t.cast.hurtNumCount++,0==e)this.att(t,t.lockTarget),y.checkTriggerBullet(this,t,t.lockTarget,d.ZERO,e);else{t.addBullet(t.lockTarget,e).param.push("counter");var i=t.cast.getBindPos(f.bp_lead);y.checkTriggerBullet(this,t,t.lockTarget,new d(i),e)}},k.onBulletAction=function(t,e,i,n){if(null!=e&&!e.isDestroy){var r=this.runner;r.cast.shamUnit||r.battleMain.battleFlag&g.NOT_HURT||null!=n&&0!=n.length&&("trigger_bullet"!==n[0]?this.att(this.runner,e):y.bulletHurt(r,e,n[1]))}},n}(k));n._RF.pop()}}}));

