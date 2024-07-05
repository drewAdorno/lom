System.register(
    "chunks:///_virtual/SkillHandleCounter.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./FixMath.ts",
        "./index83.ts",
        "./MetaAttrib.ts",
        "./EnumDefine.ts",
        "./HurtUtil.ts",
        "./V2.ts",
        "./SkillCommonEffectUtil.ts",
        "./SkillHandleBase.ts",
        "./BuffCtr.ts",
    ],
    function (context) {
        "use strict";
        var inheritsLoose, createForOfIteratorHelperLoose, cclegacy, FixMath, AttribDefine, 
            HealthType, AttackType, UnityType, BuffGroupType, EffectTriggerType, 
            BindType, BattleFlag, checkHit, normalCounterHurt, checkCounterThrowHit, 
            V2, SkillCommonEffectUtil, SkillHandleBase, freeBuffList;

        return {
            setters: [
                function (module) {
                    inheritsLoose = module.inheritsLoose;
                    createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
                },
                function (module) {
                    cclegacy = module.cclegacy;
                },
                function (module) {
                    FixMath = module.FixMath;
                },
                null,
                function (module) {
                    AttribDefine = module.AttribDefine;
                },
                function (module) {
                    HealthType = module.HealthType;
                    AttackType = module.AttackType;
                    UnityType = module.UnityType;
                    BuffGroupType = module.BuffGroupType;
                    EffectTriggerType = module.EffectTriggerType;
                    BindType = module.BindType;
                    BattleFlag = module.BattleFlag;
                },
                function (module) {
                    checkHit = module.checkHit;
                    normalCounterHurt = module.normalCounterHurt;
                    checkCounterThrowHit = module.checkCounterThrowHit;
                },
                function (module) {
                    V2 = module.V2;
                },
                function (module) {
                    SkillCommonEffectUtil = module.SkillCommonEffectUtil;
                },
                function (module) {
                    SkillHandleBase = module.SkillHandleBase;
                },
                function (module) {
                    freeBuffList = module.freeBuffList;
                },
            ],
            execute: function () {
                cclegacy._RF.push(
                    {},
                    "59998OpSv1F44lmMc20eM34",
                    "SkillHandleCounter",
                    void 0
                );
                context(
                    "SkillHandleCounter",
                    (function (BaseClass) {
                        function SkillHandleCounter() {
                            return BaseClass.apply(this, arguments) || this;
                        }
                        inheritsLoose(SkillHandleCounter, BaseClass);

                        var proto = SkillHandleCounter.prototype;

                        proto.beginRun = function () {
                            var runner = this.runner;
                            runner.healthTarget(runner.cast, 0, HealthType.Counter_Act);
                            runner.useSkill.state = 0;
                            this.triggerAction(runner);
                            runner.interrupt();
                        };

                        proto.att = function (runner, target) {
                            if (!runner.cast.isDestroy && target && !target.isDestroy) {
                                var hitResult = checkHit(runner.cast, target);
                                if (hitResult > AttackType.Miss) {
                                    var damage = normalCounterHurt(runner.cast, target, hitResult),
                                        damageType = hitResult == AttackType.Normal ? HealthType.Hurt : HealthType.Hurt_Crit,
                                        bossDamage = runner.cast.data.getAttrib(AttribDefine.boss_dam);
                                    
                                    if (target.config.type == UnityType.Boss && bossDamage > 0) {
                                        damage = FixMath.roundInt(damage * FixMath.round(1 + bossDamage));
                                    }

                                    for (var buff of target.buffCtr.getBuffByType(BuffGroupType.FRAGILE_EFFECT)) {
                                        damage += buff.calDamage(damage, runner.cast);
                                    }

                                    freeBuffList(target.buffCtr.getBuffByType(BuffGroupType.FRAGILE_EFFECT));
                                    runner.healthTarget(target, damage, damageType);

                                    if (checkCounterThrowHit(runner.cast, target)) {
                                        var configUnit = configUnitType.getDataByKey(runner.cast.config.type);
                                        runner.throwHit(target, configUnit.suspend_time[0], configUnit.suspend_time[1], 0);
                                    }

                                    for (var effect of runner.cast.skillctr.skillEffects) {
                                        if ((effect.triggerType == EffectTriggerType.COUNTER || effect.triggerType == EffectTriggerType.ALL_ATTACK) &&
                                            runner.cast.skillctr.checkTriggerCount(effect.triggerType, effect.limit)) {
                                            if (effect.useType == 0) {
                                                this.addTask(effect.id, target.position, effect.runner, target);
                                            } else if (effect.useType == 1) {
                                                runner.cast.skillctr.addSkill(effect.id);
                                            }
                                        }
                                    }
                                } else {
                                    runner.healthTarget(target, 0, HealthType.Miss);
                                }
                            }
                        };

                        proto.triggerAction = function (runner) {
                            var bulletType = runner.cast.config.bullet;
                            if (runner.configWeapon) {
                                bulletType = runner.configWeapon.bullet;
                            }
                            runner.cast.hurtNumCount++;

                            if (bulletType == 0) {
                                this.att(runner, runner.lockTarget);
                                SkillCommonEffectUtil.checkTriggerBullet(this, runner, runner.lockTarget, V2.ZERO, bulletType);
                            } else {
                                runner.addBullet(runner.lockTarget, bulletType).param.push("counter");
                                var bindPosition = runner.cast.getBindPos(BindType.bp_lead);
                                SkillCommonEffectUtil.checkTriggerBullet(this, runner, runner.lockTarget, new V2(bindPosition), bulletType);
                            }
                        };

                        proto.onBulletAction = function (bullet, target, param1, param2) {
                            if (target && !target.isDestroy) {
                                var runner = this.runner;
                                if (!runner.cast.shamUnit && !(runner.battleMain.battleFlag & BattleFlag.NOT_HURT)) {
                                    if (param2 && param2.length && param2[0] === "trigger_bullet") {
                                        SkillCommonEffectUtil.bulletHurt(runner, target, param2[1]);
                                    } else {
                                        this.att(this.runner, target);
                                    }
                                }
                            }
                        };

                        return SkillHandleCounter;
                    })(SkillHandleBase)
                );
                cclegacy._RF.pop();
            },
        };
    }
);
