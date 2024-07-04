System.register("chunks:///_virtual/SkillRunner.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FixMath.ts","./ValidationUtil.ts","./BattleData.ts","./BuffCtr.ts","./EnumDefine.ts","./Bullet.ts","./MetaAttrib.ts","./Trap.ts","./UnitData.ts"],(function(t){"use strict";var i,e,n,r,a,s,o,u,l,c,f,d,h,g,p,_,v,k,y,b,S;return{setters:[function(t){i=t.createForOfIteratorHelperLoose,e=t.createClass},function(t){n=t.cclegacy},function(t){r=t.FixMath},function(t){a=t.default},function(t){s=t.ChapterType},function(t){o=t.freeBuffList},function(t){u=t.UnityType,l=t.StateType,c=t.TargetSelectFilter,f=t.HealthType,d=t.SpBuffState,h=t.BuffGroupType,g=t.StateTrigerType,p=t.EffectTriggerType,_=t.BindType},function(t){v=t.Bullet},function(t){k=t.AttribDefine,y=t.MetaAttrib},function(t){b=t.Trap},function(t){S=t.UnitData}],execute:function(){n._RF.push({},"5450fiK+3JOu5yUFemqhufZ","SkillRunner",void 0);var T=["dizz","ban_skil","throw_hit","bound","ban_act"];t("SkillRunner",function(){function t(){this.battleMain=void 0,this._owner=void 0,this._useSkill=null,this._skillAction=null,this._interrupt=!1,this._run=0,this.triggerEndEvent=!0,this._skillHandle=null,this._target=null,this._passive=void 0,this._bulletList=[],this._limitModelAction=void 0,this._trapList=[],this._configWeapon=void 0}var n=t.prototype;return n.init=function(t,i,e){void 0===e&&(e=!1),this._owner=t,this.battleMain=t.battleMain,this._useSkill=i,this._limitModelAction=e},n.start=function(t){void 0===t&&(t=!1),this._passive=t,this.pushRun();var i=this._useSkill;if(null==skillMap[i.config.action])throw Error("技能id:"+i.config.id+" action标记不存在！");if(null!=this._owner.weapon?this._configWeapon=configAppearance.getDataByKey(this._owner.weapon):this._owner.config.apperanceID>0&&(this._configWeapon=configAppearance.getDataByKey(this._owner.config.apperanceID)),this._skillHandle=new skillMap[i.config.action](this),this.isNormalAct?this.resetPower():(this.useSkill.state=1,this.useSkill.currenPower=0),this._skillHandle.beginRun(),!this._passive){if(!GlobalDefine.CLIENT_TYPE&&this.battleMain.data.chapterType==s.Team20&&this._owner.data.config.type==u.Boss){var e=configUnitType.getDataByKey(this._owner.config.type);this._useSkill.config.id!=e.att_skill&&this.battleMain.curRecord.addAttack(this._owner.unitId,this._useSkill.config.id)}var n=this._owner;null!=n.curTarget&&(this._target=n.curTarget.unit),this._limitModelAction||(n.animatorctr.addEvent("OnAction",this.onModeActionEvent,this),n.animatorctr.addEvent("OnEnd",this.onModeActionEnd,this))}},n.resetPower=function(){if(this.useSkill.resetCd)return this.useSkill.currenPower=this.useSkill.config.maxPower,this.useSkill.currenRelease=0,this.useSkill.currenCd=0,this.useSkill.checkState(),void(this.useSkill.resetCd=!1);this.useSkill.state=2,this.useSkill.currenPower=0,this.useSkill.currenCd=0},n.onUpdate=function(t){if(!(this._run<=0)){for(var i=this._bulletList,e=0;e<i.length;e++){var n=i[e];n.isStop?(n.destroy(),i.splice(e,1),e--,this.popRun()):n.onUpdate(t)}for(var r=this._trapList,a=0;a<r.length;a++){var s=r[a];s.isStop?(b.free(s),r.splice(a,1),a--,this.popRun()):s.onUpdate(t)}this._skillHandle.onUpdate(t),null!=this._target&&this._target.isDestroy&&(this._target=null)}},n.stop=function(){this._run<=0||(this._run=0)},n.destroy=function(){for(var t,e=this._bulletList,n=i(e);!(t=n()).done;){t.value.destroy()}e.length=0;for(var r,a=this._trapList,s=i(a);!(r=s()).done;){var o=r.value;b.free(o)}a.length=0,this._skillHandle.destroy()},n.interrupt=function(){if(!this._interrupt&&(this.popRun(),this._interrupt=!0,null!=this._owner&&!this._passive)){var t=this._owner;t.statectr.currentStateType==l.Skill&&(t.statectr.lockCurrenState=!1),this._limitModelAction||(t.animatorctr.removeEvent("OnAction",this.onModeActionEvent,this),t.animatorctr.removeEvent("OnEnd",this.onModeActionEnd,this))}},n.onModeActionEvent=function(t){null!=this._skillAction&&this._skillAction(t)},n.onModeActionEnd=function(t){this._skillHandle.onModelEnd()||this.triggerEndEvent&&this.interrupt()},n.nextTriggerAction=function(t){this._skillAction=t},n.onBulletAction=function(t,i,e,n){this._skillHandle.onBulletAction(t,i,e,n)},n.changeModeAction=function(t,i,e){if(void 0===e&&(e=1),this._limitModelAction)throw Error("技能:"+this._useSkill.config.id+" 限制改变施放者动作");var n=this._owner;this.triggerEndEvent=t,n.animatorctr.changeState(i,!0,e)},n.getActSpeed=function(t,i){void 0===i&&(i=1);var e=this._owner,n=e.animatorctr.config[t];if(null==n)return 1;var a=r.round(30/n[0][0]),s=r.round(e.data.getAttrib(k.att_speed)/a);return s=r.round(s*i),this.battleMain.printLogFlag&&this.battleMain.printLogDebug("att_speed:, "+e.data.getAttrib(k.att_speed)+" speed:, "+s),s=Math.max(s,1)},n.getTargets=function(t,i,e,n,r){void 0===n&&(n=1),void 0===r&&(r=c.NearTarget);var a=this.battleMain.unitMgr,s=a.findTarget(this._owner,t,i,e);return a.getTargetList(this._owner,s,n,r)},n.healthTarget=function(t,e,n,s){if(void 0===s&&(s=!1),!t.isDead){e=r.roundInt(e);var l=this._owner;switch(s&&(t.hatredCtr.addHurtHatred(l,e||1),l.hatredCtr.addHurtHatred(t,e||1)),n){case f.Hurt:case f.Hurt_Crit:case f.Hurt_Share_Damage:case f.Hurt_Share_Damage_Crit:case f.Hurt_Double:case f.Hurt_Double_Crit:if(t.statectr.notGetDamage>0)return;if(a.isNaN(e))return;if(0==e)return;if(t.statectr.invincible>0)return;if(t.data.getBuffState(d.DelayDamage)>0){for(var c,_=t.buffCtr.getBuffByType(h.DELAY_DEMAGE),v=i(_);!(c=v()).done;){c.value.onDamage(e)}return void o(_)}if(n!=f.Hurt_Share_Damage&&n!=f.Hurt_Share_Damage_Crit){for(var y,b=l.buffCtr.getBuffByType(h.SHARE_DAMAGE),S=b.length,T=i(b);!(y=T()).done;){y.value.onShareDamageAction(e,t,n)}if(o(b),S>0)return}if(l.config.type==u.Boss){var A=t.data.getAttrib(k.boss_def);e=r.roundInt(e*r.round(1-A))}if(this._useSkill==l.data.attack)for(var B,m=t.skillctr.skillEffects,D=i(m);!(B=D()).done;){var w=B.value;w.triggerType==p.HIT&&(t.skillctr.checkTriggerCount(w.triggerType,w.limit)&&(0==w.useType?w.runner._skillHandle.addTask(w.id,this.cast.position,w.runner,this.cast):1==w.useType&&t.skillctr.addSkill(w.id)))}break;case f.Hurt_Bleed:if(a.isNaN(e))return;if(0==e)return;if(t.statectr.invincible>0)return;break;case f.Miss:case f.Double_Act:case f.Counter_Act:if(t.data.getBuffState(d.StateTriger)>0)for(var M,E=t.buffCtr.getBuffByType(h.STATE_TRIGER),C=i(E);!(M=C()).done;){var H=M.value;n==f.Miss?H.onStateTrigger(g.Miss):n==f.Counter_Act?H.onStateTrigger(g.Counter_Act):n==f.Double_Act&&H.onStateTrigger(g.Double_Act)}}var I=this.useSkill.config.id;t.hit(l,e,n,I)}},n.throwHit=function(t,i,e,n){var a=this.cast.position.x>t.position.x?-1:1;return t.throwHit(i,e,r.roundInt(a*n))},n.shake=function(t,i,e){void 0===t&&(t=.5),void 0===i&&(i=100),void 0===e&&(e=.2),this._passive||this.battleMain.mapCamera.startShake(t,i,e)},n.playSound=function(t){this.battleMain.playSound(t)},n.addBuff=function(t,e,n,a){if(void 0===a&&(a=0),!t.isDead){var u=configBuff.getDataByKey(e);if(null==u)throw Error("技能："+this.useSkill.config.id+" BuffID："+e+" 没找到!!");var l=t.buffCtr.getBuffByType(h.IGNORE_BUFFIDS);if(l.length>0)if(l[0].config.param5.includes(u.id))return o(l),null;if(o(l),2==u.mutex)if(t.buffCtr.getBuff(e))return null;if((t.statectr.notControlled>0||t.statectr.invincible>0)&&T.includes(u.action))return null;var c=buffMap[u.action](u);if(c.skillPar=a,"dizz"==u.action||"ban_act"==u.action){var g=t.data.getAttrib(k.CONTROL_RES);g>0&&(n=r.round(n-r.round(n*g))),"dizz"==u.action&&this.battleMain.addLogCount(this.cast.unitId,t.config.id,f.Dizz,0,t.teamId,this.useSkill.config.id,t.data.shieldHp)}if("shield"==u.action){var p=t.data.getAttrib(k.shield_time_extra);p>0&&(n=r.round(n+p))}if(!GlobalDefine.CLIENT_TYPE&&this.battleMain.data.chapterType==s.Team20&&"shield"==u.action){var _=configUnitType.getDataByKey(this._owner.config.type);this._useSkill.config.id!=_.att_skill&&this.battleMain.curRecord.addAttack(this._owner.unitId,this._useSkill.config.id)}if(c.currenTime=n,c.runner=this,0==c.config.type)return c.owner=t,c.start(),c.destroy(),null;var v=t.buffCtr.getBuffListById(e);if(3==c.config.mutex){for(var y=0;y<v.length;y++)v[y].currenTime=n;var b=c.config.add_max;b&&b>0&&v.length>=b&&v[0].stop()}if(o(v),1==c.config.mutex&&t.buffCtr.stopBuffById(e),t.buffCtr.addBuff(c),this._owner.data.getBuffState(d.AddBuffTrigger)>0){for(var S,A=this._owner.buffCtr.getBuffByType(h.AddBuffTrigger),B=i(A);!(S=B()).done;){S.value.onAddBuffTrigger(t,c.config.id,c.currenTime)}o(A)}return c}},n.addBuffByPos=function(t,i,e,n){void 0===n&&(n=0);var r=configBuff.getDataByKey(i);if(null==r)throw Error("技能："+this.useSkill.config.id+" BuffID："+i+" 没找到!!");if(0!=r.type)throw Error("技能："+this.useSkill.config.id+" BuffID："+i+" 必须为立即生效删除类型!!");var a=buffMap[r.action](r);a.skillPar=n,a.currenTime=e,a.runner=this,a.position=t,a.start(),a.destroy()},n.addTrap=function(t,i,e){void 0===e&&(e=0);var n=configTrap.getDataByKey(t);if(null==n)throw Error("技能："+this.useSkill.config.id+" 陷阱ID："+t+" 没找到!!");var r=b.alloc(n,i,e);r.runner=this,this.pushRun(),this._trapList.push(r)},n.addBullet=function(t,i,e){if(void 0===e&&(e=!0),null!=t){this.pushRun();var n=v.alloc(this,i,this.cast.getBindPos(_.bp_lead),t,e);return this._bulletList.push(n),n}},n.addBullet1=function(t,i,e,n){if(void 0===n&&(n=!0),null!=t){this.pushRun();var r=v.alloc(this,e,i,t,n);return this._bulletList.push(r),r}},n.addBulletToPos=function(t,i,e){this.pushRun();var n=v.allocToPos(this,e,i,t);return this._bulletList.push(n),n},n.addCallUnit=function(t,e,n,a,s,o){void 0===s&&(s=0),void 0===o&&(o=!0);var u=this.battleMain,l=null;if(0==t){var c=new S;c.attribs={},c.config=this.cast.config,c.skin=this.cast.data.skin,c.modelConfig=this.cast.data.modelConfig,c.roleId=this.cast.data.roleId;for(var f,d=configAttribute.getDataByList("module",1),h=i(d);!(f=h()).done;){var g=f.value,p=new y(g,this.cast.data.attribs[g.id]);c.attribs[g.id]=p}c.skillList=[],l=u.unitMgr.addUnitImageCall(c,this.cast.teamId)}else l=u.unitMgr.addUnitCall(t,this.cast.teamId);l.tauntValue=r.roundInt(999999999999999+this.cast.tauntValue);var _=o?u.random.randomInt(-50,50):0;if(u.printLogFlag&&u.printLogDebug("召唤单位: rndY: "+_),e.y=r.round(e.y+_),l.position=e,l.direction=this.cast.direction,l.lifeTime=this.cast.data.getSkillFactAttrValue(n,this.useSkill.config.id,1041),l.parent=this.cast,l.isCallType=!0,null!=a&&a.length>0)for(var v,b=i(a);!(v=b()).done;){var T=v.value;l.data.attribs[T[0]].baseValue=r.round(this.cast.data.attribs[T[0]].baseValue*r.round(T[1]*(1==T[2]?s:1)))}return l.data.currenHp=l.data.attribs[k.hp].value,l},n.addTask=function(t,i,e,n){null==e.cast||e.cast.isDestroy||null!=e.cast.position&&this._skillHandle.addTask(t,i,e,n)},n.onBeHitAction=function(t,i,e){this._passive},n.onActTargetAction=function(t,i){this._passive&&this._skillHandle.onActTargetAction(t,i)},n.pushRun=function(){this._run++},n.popRun=function(){this._run--},e(t,[{key:"cast",get:function(){return this._owner}},{key:"lockTarget",get:function(){return this._target},set:function(t){this._target=t}},{key:"useSkill",get:function(){return this._useSkill}},{key:"isNormalAct",get:function(){return this._useSkill==this._owner.data.attack}},{key:"isPassive",get:function(){return this._passive}},{key:"isStop",get:function(){return this._run<=0}},{key:"isInterrupt",get:function(){return this._interrupt}},{key:"configWeapon",get:function(){return this._configWeapon}}]),t}());n._RF.pop()}}}));

