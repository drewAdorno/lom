System.register(
    "chunks:///_virtual/HurtUtil.ts",
    [
        "cc",
        "./ConfigGlobal.ts",
        "./FixMath.ts",
        "./MetaAttrib.ts",
        "./EnumDefine.ts",
    ],
    function (exports) {
        "use strict";
        var cclegacy, ConfigGlobal, FixMath, AttribDefine, EnumDefine;
        return {
            setters: [
                function (module) {
                    cclegacy = module.cclegacy;
                },
                function (module) {
                    ConfigGlobal = module.ConfigGlobal;
                },
                function (module) {
                    FixMath = module.FixMath;
                },
                function (module) {
                    AttribDefine = module.AttribDefine;
                },
                function (module) {
                    EnumDefine = module.EnumDefine;
                },
            ],
            execute: function () {
                // Push current module into the module stack
                cclegacy._RF.push({}, "0c561qs1MhCP4+rdZbtUfrL", "HurtUtil");

                // Function for normal hurt calculation
                exports("normalHurt", function (attacker, defender, isCrit) {
                    var attackerAttack = attacker.data.getAttrib(AttribDefine.att);
                    var defenderDefense = defender.data.getAttrib(AttribDefine.def);
                    var defenderDefenseCoefficient = defender.data.getAttrib(AttribDefine.def_coe);
                    var attackerCritDamage = attacker.data.getAttrib(AttribDefine.crit_dam);
                    var defenderCritDefense = defender.data.getAttrib(AttribDefine.crit_def);
                    var defenderAttackResistance = defender.data.getAttrib(AttribDefine.att_resist);
                    var attackerDamage = attacker.data.getAttrib(AttribDefine.att_dam);

                    // Adjust calculations based on attacker type
                    if (attacker.config.type == EnumDefine.UnityType.Partner) {
                        defenderAttackResistance = defender.data.getAttrib(AttribDefine.partner_resist);
                        attackerDamage = attacker.data.getAttrib(AttribDefine.partner_dam);
                        var partnerDamageExtra = attacker.data.getAttrib(AttribDefine.partner_dam_extra);
                        attackerDamage = FixMath.round(attackerDamage * FixMath.round(1 + partnerDamageExtra));
                    } else if (attacker.config.type == EnumDefine.UnityType.Gun) {
                        attackerDamage = attacker.data.getAttrib(AttribDefine.partner_dam);
                        defenderAttackResistance = defender.data.getAttrib(AttribDefine.season_cannon_att_def);
                    }

                    var baseDamage = FixMath.roundInt(
                        Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) *
                        FixMath.round(attackerDamage * FixMath.round(1 - defenderAttackResistance))
                    );

                    // Apply critical damage multiplier if it's a critical hit
                    if (isCrit || isCrit === undefined) {
                        baseDamage = FixMath.roundInt(baseDamage * Math.max(1.5, FixMath.round(attackerCritDamage / defenderCritDefense)));
                    }

                    return Math.max(1, baseDamage);
                });

                // Function for calculating modified damage after various resistances
                var calculateModifiedDamage = exports("calculateModifiedDamage", function (baseDamage, defender, attacker) {
                    var defenderResistance = defender.data.getAttrib(AttribDefine.resist);
                    var pveResistance = defender.data.getAttrib(AttribDefine.pve_resist);
                    var pveDamage = attacker.data.getAttrib(AttribDefine.pve_dam);

                    baseDamage = FixMath.roundInt(baseDamage * FixMath.round(1 + pveDamage));
                    var finalDamage = FixMath.roundInt(
                        FixMath.roundInt(baseDamage * FixMath.round(1 - defenderResistance)) *
                        FixMath.round(1 - pveResistance)
                    );

                    return Math.max(1, finalDamage);
                });

                // Function for double hit damage calculation
                exports("normalDoubleHurt", function (attacker, defender, isCrit) {
                    var attackerAttack = attacker.data.getAttrib(AttribDefine.att);
                    var defenderDefense = defender.data.getAttrib(AttribDefine.def);
                    var defenderDefenseCoefficient = defender.data.getAttrib(AttribDefine.def_coe);
                    var attackerCritDamage = attacker.data.getAttrib(AttribDefine.crit_dam);
                    var defenderCritDefense = defender.data.getAttrib(AttribDefine.crit_def);
                    var defenderDoubleHitDefense = defender.data.getAttrib(AttribDefine.double_hit_def);
                    var attackerDoubleHitDamage = attacker.data.getAttrib(AttribDefine.double_hit_dam);
                    var modifiedDamage = 0;

                    if (attacker.config.type == EnumDefine.UnityType.Partner) {
                        var partnerDamage = attacker.data.getAttrib(AttribDefine.partner_dam);
                        var partnerDamageExtra = attacker.data.getAttrib(AttribDefine.partner_dam_extra);
                        partnerDamage = FixMath.round(partnerDamage * FixMath.round(1 + partnerDamageExtra));

                        var partnerResistance = defender.data.getAttrib(AttribDefine.partner_resist);
                        var partnerEffectiveDamage =
                            FixMath.roundInt(Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) * partnerDamage) *
                            FixMath.round(1 - partnerResistance);

                        modifiedDamage = FixMath.roundInt(FixMath.roundInt(partnerEffectiveDamage) * FixMath.round(1 - defenderDoubleHitDefense));
                        modifiedDamage = FixMath.roundInt(modifiedDamage);
                    } else if (attacker.config.type == EnumDefine.UnityType.Gun) {
                        var partnerDamage = attacker.data.getAttrib(AttribDefine.partner_dam);
                        var seasonCannonAttDef = defender.data.getAttrib(AttribDefine.season_cannon_att_def);
                        var gunEffectiveDamage =
                            FixMath.roundInt(Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) * partnerDamage) *
                            FixMath.round(1 - seasonCannonAttDef);

                        modifiedDamage = FixMath.roundInt(FixMath.roundInt(gunEffectiveDamage) * FixMath.round(1 - defenderDoubleHitDefense));
                        modifiedDamage = FixMath.roundInt(modifiedDamage);
                    } else {
                        modifiedDamage =
                            FixMath.roundInt(Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) * attackerDoubleHitDamage) *
                            FixMath.round(1 - defenderDoubleHitDefense);
                        modifiedDamage = FixMath.roundInt(modifiedDamage);
                    }

                    modifiedDamage = calculateModifiedDamage(modifiedDamage, defender, attacker);

                    // Apply critical damage multiplier if it's a critical hit
                    if (isCrit || isCrit === undefined) {
                        modifiedDamage = FixMath.roundInt(modifiedDamage * Math.max(1.5, FixMath.round(attackerCritDamage / defenderCritDefense)));
                    }

                    return Math.max(1, modifiedDamage);
                });

                // Function for counter attack damage calculation
                exports("normalCounterHurt", function (attacker, defender, isCrit) {
                    var attackerAttack = attacker.data.getAttrib(AttribDefine.att);
                    var defenderDefense = defender.data.getAttrib(AttribDefine.def);
                    var defenderDefenseCoefficient = defender.data.getAttrib(AttribDefine.def_coe);
                    var attackerCritDamage = attacker.data.getAttrib(AttribDefine.crit_dam);
                    var defenderCritDefense = defender.data.getAttrib(AttribDefine.crit_def);
                    var defenderCounterDefense = defender.data.getAttrib(AttribDefine.counter_def);
                    var attackerCounterDamage = attacker.data.getAttrib(AttribDefine.counter_dam);
                    var modifiedDamage =
                        FixMath.roundInt(Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) * attackerCounterDamage) *
                        FixMath.round(1 - defenderCounterDefense);

                    modifiedDamage = FixMath.roundInt(modifiedDamage);
                    modifiedDamage = calculateModifiedDamage(modifiedDamage, defender, attacker);

                    // Apply critical damage multiplier if it's a critical hit
                    if (isCrit || isCrit === undefined) {
                        modifiedDamage = FixMath.roundInt(modifiedDamage * Math.max(1.5, FixMath.round(attackerCritDamage / defenderCritDefense)));
                    }

                    return Math.max(1, modifiedDamage);
                });

                // Function for HP steal calculation based on attacker's attributes
                exports("normalHpsteal", function (attacker, defender, attackDamage) {
                    var attackerHpSteal = attacker.data.getAttrib(AttribDefine.att_hpsteal);
                    var defenderHpStealDef = defender.data.getAttrib(AttribDefine.att_hpsteal_def);
                    var hpStealAmount = attackerHpSteal - defenderHpStealDef;

                    hpStealAmount = FixMath.roundInt(hpStealAmount);
                    hpStealAmount = Math.max(0, hpStealAmount);

                    return FixMath.roundInt(attackDamage * hpStealAmount);
                });

                // Function for alternative HP steal calculation
                exports("normalHpsteal1", function (attacker) {
                    var hpStealAmount = attacker.data.getAttrib(AttribDefine.hpsteal_amount);
                    var ignoreHpSteal = attacker.data.getAttrib(AttribDefine.ignore_hpsteal);
                    var adjustedHpSteal = FixMath.round(hpStealAmount * Math.max(0, FixMath.round(1 - ignoreHpSteal)));
                    var attackerHp = attacker.data.getAttribByInt(AttribDefine.hp);

                    return FixMath.roundInt(attackerHp * adjustedHpSteal);
                });

                // Function for skill-based HP steal calculation
                exports("skillHpsteal", function (attacker, defender, attackDamage) {
                    var attackerSkillHpSteal = attacker.data.getAttrib(AttribDefine.skill_hpsteal);
                    var defenderSkillHpStealDef = defender.data.getAttrib(AttribDefine.skill_hpsteal_def);
                    var skillHpStealAmount = attackerSkillHpSteal - defenderSkillHpStealDef;

                    skillHpStealAmount = Math.max(0, FixMath.round(skillHpStealAmount));

                    return FixMath.roundInt(attackDamage * skillHpStealAmount);
                });

                // Function for checking if an attack hits
                exports("checkHit", function (attacker, defender, isMiss) {
                    if (isMiss === undefined) isMiss = false;

                    var attackerHit = attacker.data.getAttrib(AttribDefine.hit);
                    var defenderMiss = isMiss ? 0 : defender.data.getAttrib(AttribDefine.miss);
                    var attackerCritRate = attacker.data.getAttrib(AttribDefine.crit_rate);
                    var missChance = Math.max(FixMath.round(defenderMiss - attackerHit), 0);
                    var randomValue = attacker.battleMain.random.randomInt(0, 10000);

                    var hitProbabilities = {};
                    hitProbabilities[EnumDefine.AttackType.Miss] =
                        FixMath.roundInt(
                            (Math.pow(
                                FixMath.round(100 * missChance),
                                FixMath.round(ConfigGlobal.miss_correct / 10000)
                            ) / 100) * 10000
                        );
                    hitProbabilities[EnumDefine.AttackType.Normal] =
                        FixMath.roundInt(
                            hitProbabilities[EnumDefine.AttackType.Miss] +
                                FixMath.roundInt(
                                    FixMath.round(1 - missChance) * FixMath.round(1 - attackerCritRate) * 10000
                                )
                        );
                    hitProbabilities[EnumDefine.AttackType.Cirt] =
                        FixMath.roundInt(
                            hitProbabilities[EnumDefine.AttackType.Normal] +
                                FixMath.roundInt(FixMath.round(1 - missChance) * attackerCritRate * 10000)
                        );

                    var resultType = -1;
                    if (attacker.battleMain.printLogFlag) {
                        attacker.battleMain.printLogDebug(
                            "rand: " + randomValue +
                            " cirt: " + hitProbabilities[EnumDefine.AttackType.Cirt] +
                            " miss: " + hitProbabilities[EnumDefine.AttackType.Miss]
                        );
                    }

                    for (var type = 0; type < 2; type++) {
                        if (hitProbabilities[type] > 0 && randomValue <= hitProbabilities[type]) {
                            resultType = type;
                            break;
                        }
                    }

                    if (resultType === -1) resultType = EnumDefine.AttackType.Cirt;
                    return resultType;
                });

                // Function for checking if a double attack occurs
                exports("checkDoubleAct", function (attacker, defender) {
                    var attackerDoubleHit = attacker.data.getAttrib(AttribDefine.double_hit);
                    var ignoreDoubleHit = defender ? defender.data.getAttrib(AttribDefine.ignore_double_hit) : 0;
                    var doubleHitChance = FixMath.roundInt(10000 * Math.max(FixMath.round(attackerDoubleHit - ignoreDoubleHit), 0));

                    if (doubleHitChance <= 0) return false;

                    var randomValue = attacker.battleMain.random.randomInt(0, 10000);
                    if (attacker.battleMain.printLogFlag) {
                        attacker.battleMain.printLogDebug(
                            "连击 rand: " + randomValue + " tem: " + doubleHitChance
                        );
                    }

                    return randomValue <= doubleHitChance;
                });

                // Function for checking if a counter attack occurs
                exports("checkCounterAct", function (attacker, defender) {
                    var attackerCounter = attacker.data.getAttrib(AttribDefine.counter);
                    var ignoreCounter = defender ? defender.data.getAttrib(AttribDefine.ignore_counter) : 0;
                    var counterChance = FixMath.roundInt(10000 * Math.max(FixMath.round(attackerCounter - ignoreCounter), 0));

                    if (counterChance <= 0) return false;

                    var randomValue = attacker.battleMain.random.randomInt(0, 10000);
                    if (attacker.battleMain.printLogFlag) {
                        attacker.battleMain.printLogDebug(
                            "反击 rand: " + randomValue + " tem: " + counterChance
                        );
                    }

                    return randomValue <= counterChance;
                });

                // Function for checking if a throw hit occurs
                exports("checkThrowHit", function (attacker, defender) {
                    var attackerSuspend = attacker.data.getAttrib(AttribDefine.suspend);
                    var defenderSuspendDef = defender.data.getAttrib(AttribDefine.suspend_def);
                    var suspendChance = FixMath.roundInt(10000 * FixMath.round(attackerSuspend - defenderSuspendDef));

                    if (suspendChance <= 0) return false;

                    var randomValue = attacker.battleMain.random.randomInt(0, 10000);
                    if (attacker.battleMain.printLogFlag) {
                        attacker.battleMain.printLogDebug(
                            "击飞 rand: " + randomValue + " tem: " + suspendChance
                        );
                    }

                    return randomValue <= suspendChance;
                });

                // Function for checking if a counter throw hit occurs
                exports("checkCounterThrowHit", function (attacker, defender) {
                    var attackerCounterSuspend = attacker.data.getAttrib(AttribDefine.counter_suspend);
                    var defenderSuspendDef = defender.data.getAttrib(AttribDefine.suspend_def);
                    var counterSuspendChance = FixMath.roundInt(10000 * FixMath.round(attackerCounterSuspend - defenderSuspendDef));

                    if (counterSuspendChance <= 0) return false;

                    var randomValue = attacker.battleMain.random.randomInt(0, 10000);
                    if (attacker.battleMain.printLogFlag) {
                        attacker.battleMain.printLogDebug(
                            "反击击飞 rand: " + randomValue + " tem: " + counterSuspendChance
                        );
                    }

                    return randomValue <= counterSuspendChance;
                });

                // Function for checking if dizziness occurs
                exports("checkDizz", function (attacker, defender) {
                    var attackerVertigo = attacker.data.getAttrib(AttribDefine.vertigo);
                    var defenderVertigoDef = defender.data.getAttrib(AttribDefine.vertigo_def);
                    var vertigoChance = Math.max(0, FixMath.round(attackerVertigo - defenderVertigoDef));

                    if (vertigoChance <= 0) return false;

                    var chanceMultiplier = FixMath.round(
                        Math.pow(
                            FixMath.round(100 * vertigoChance),
                            FixMath.round(ConfigGlobal.vertigo_correct / 10000)
                        ) / 100
                    );

                    var randomValue = FixMath.roundInt(10000 * chanceMultiplier);
                    if (randomValue <= 0) return false;

                    if (attacker.battleMain.printLogFlag) {
                        attacker.battleMain.printLogDebug(
                            "击晕 rand: " + randomValue + " tem: " + vertigoChance
                        );
                    }

                    return randomValue <= vertigoChance;
                });

                // Function for checking if a skill critical hit occurs
                exports("checkSkillCirt", function (attacker) {
                    var attackerSkillCritRate = attacker.data.getAttrib(AttribDefine.skill_crit_rate);
                    var skillCritChance = FixMath.roundInt(10000 * attackerSkillCritRate);

                    if (skillCritChance <= 0) return false;

                    var randomValue = attacker.battleMain.random.randomInt(0, 10000);
                    if (attacker.battleMain.printLogFlag) {
                        attacker.battleMain.printLogDebug(
                            "技能暴击 rand: " + randomValue + " tem: " + skillCritChance
                        );
                    }

                    return randomValue < skillCritChance;
                });

                // Function for checking if normal HP steal occurs
                exports("checkNormailHpsteal1", function (attacker, defender) {
                    var attackerHpStealRate = attacker.data.getAttrib(AttribDefine.hpsteal_rate);
                    var defenderHpStealRes = defender.data.getAttrib(AttribDefine.hpsteal_res);
                    var hpStealChance = FixMath.roundInt(10000 * FixMath.round(attackerHpStealRate - defenderHpStealRes));

                    if (hpStealChance <= 0) return false;

                    var randomValue = attacker.battleMain.random.randomInt(0, 10000);
                    if (attacker.battleMain.printLogFlag) {
                        attacker.battleMain.printLogDebug(
                            "普通生命窃取 rand: " + randomValue + " tem: " + hpStealChance
                        );
                    }

                    return randomValue <= hpStealChance;
                });

                cclegacy._RF.pop();
            },
        };
    }
);
