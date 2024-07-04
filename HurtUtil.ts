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
        var cclegacy, ConfigGlobal, FixMath, MetaAttrib, UnityType, AttackType;
        return {
            setters: [
                function (t) {
                    cclegacy = t.cclegacy;
                },
                function (t) {
                    ConfigGlobal = t.ConfigGlobal;
                },
                function (t) {
                    FixMath = t.FixMath;
                },
                function (t) {
                    MetaAttrib = t.AttribDefine;
                },
                function (t) {
                    (UnityType = t.UnityType), (AttackType = t.AttackType);
                },
            ],
            execute: function () {
                cclegacy._RF.push({}, "0c561qs1MhCP4+rdZbtUfrL", "HurtUtil", void 0);
                exports("normalHurt", function (attacker, defender, critFlag) {
                    var attackerAttack = attacker.data.getAttrib(MetaAttrib.att),
                        defenderDefense = defender.data.getAttrib(MetaAttrib.def),
                        defenderDefenseCoefficient = defender.data.getAttrib(MetaAttrib.def_coe),
                        attackerCritDamage = attacker.data.getAttrib(MetaAttrib.crit_dam),
                        defenderCritDefense = defender.data.getAttrib(MetaAttrib.crit_def),
                        attackerResistance = attacker.data.getAttrib(MetaAttrib.att_resist),
                        attackerDamage = attacker.data.getAttrib(MetaAttrib.att_dam);
                    
                    if (attacker.config.type == UnityType.Partner) {
                        attackerResistance = defender.data.getAttrib(MetaAttrib.partner_resist);
                        attackerDamage = attacker.data.getAttrib(MetaAttrib.partner_dam);
                        var partnerExtraDamage = attacker.data.getAttrib(MetaAttrib.partner_dam_extra);
                        attackerDamage = FixMath.round(attackerDamage * FixMath.round(1 + partnerExtraDamage));
                    } else if (attacker.config.type == UnityType.Gun) {
                        attackerDamage = attacker.data.getAttrib(MetaAttrib.partner_dam);
                        attackerResistance = defender.data.getAttrib(MetaAttrib.season_cannon_att_def);
                    }

                    var baseDamage = FixMath.roundInt(
                        Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) *
                        FixMath.round(attackerDamage * FixMath.round(1 - attackerResistance))
                    );

                    baseDamage = calculateHurt(baseDamage, defender, attacker);
                    if (critFlag == 1) {
                        baseDamage = FixMath.roundInt(baseDamage * Math.max(1.5, FixMath.round(attackerCritDamage / defenderCritDefense)));
                    }

                    return Math.max(1, baseDamage);
                });

                var calculateHurt = exports("calculateHurt", function (damage, defender, attacker) {
                    var defenderResistance = defender.data.getAttrib(MetaAttrib.resist),
                        defenderPvEResistance = defender.data.getAttrib(MetaAttrib.pve_resist),
                        attackerPvEDamage = attacker.data.getAttrib(MetaAttrib.pve_dam);

                    damage = FixMath.roundInt(damage * FixMath.round(1 + attackerPvEDamage));
                    var finalDamage = FixMath.roundInt(FixMath.roundInt(damage * FixMath.round(1 - defenderResistance)) * FixMath.round(1 - defenderPvEResistance));
                    return Math.max(1, finalDamage);
                });

                exports("normalComboHurt", function (attacker, defender, critFlag) {
                    var attackerAttack = attacker.data.getAttrib(MetaAttrib.att),
                        defenderDefense = defender.data.getAttrib(MetaAttrib.def),
                        defenderDefenseCoefficient = defender.data.getAttrib(MetaAttrib.def_coe),
                        attackerCritDamage = attacker.data.getAttrib(MetaAttrib.crit_dam),
                        defenderCritDefense = defender.data.getAttrib(MetaAttrib.crit_def),
                        defenderComboDefense = defender.data.getAttrib(MetaAttrib.double_hit_def),
                        attackerComboDamage = attacker.data.getAttrib(MetaAttrib.double_hit_dam),
                        totalDamage = 0;

                    if (attacker.config.type == UnityType.Partner) {
                        var partnerDamage = attacker.data.getAttrib(MetaAttrib.partner_dam),
                            partnerExtraDamage = attacker.data.getAttrib(MetaAttrib.partner_dam_extra);
                        partnerDamage = FixMath.round(partnerDamage * FixMath.round(1 + partnerExtraDamage));
                        var partnerResistance = defender.data.getAttrib(MetaAttrib.partner_resist),
                            damage = FixMath.roundInt(Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) * partnerDamage) * FixMath.round(1 - partnerResistance);
                        totalDamage = FixMath.roundInt(FixMath.roundInt(damage) * attackerComboDamage) * FixMath.round(1 - defenderComboDefense);
                        totalDamage = FixMath.roundInt(totalDamage);

                    } else if (attacker.config.type == UnityType.Gun) {
                        var partnerDamage = attacker.data.getAttrib(MetaAttrib.partner_dam);
                        var seasonCannonDefense = defender.data.getAttrib(MetaAttrib.season_cannon_att_def);
                        var damage = FixMath.roundInt(Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) * partnerDamage) * FixMath.round(1 - seasonCannonDefense);
                        totalDamage = FixMath.roundInt(FixMath.roundInt(damage) * attackerComboDamage) * FixMath.round(1 - defenderComboDefense);
                        totalDamage = FixMath.roundInt(totalDamage);

                    } else {
                        totalDamage = FixMath.roundInt(Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) * attackerComboDamage) * FixMath.round(1 - defenderComboDefense);
                        totalDamage = FixMath.roundInt(totalDamage);
                    }

                    totalDamage = calculateHurt(totalDamage, defender, attacker);
                    if (critFlag == 1) {
                        totalDamage = FixMath.roundInt(totalDamage * Math.max(1.5, FixMath.round(attackerCritDamage / defenderCritDefense)));
                    }

                    return Math.max(1, totalDamage);
                });

                exports("normalCounterHurt", function (attacker, defender, critFlag) {
                    var attackerAttack = attacker.data.getAttrib(MetaAttrib.att),
                        defenderDefense = defender.data.getAttrib(MetaAttrib.def),
                        defenderDefenseCoefficient = defender.data.getAttrib(MetaAttrib.def_coe),
                        attackerCritDamage = attacker.data.getAttrib(MetaAttrib.crit_dam),
                        defenderCritDefense = defender.data.getAttrib(MetaAttrib.crit_def),
                        defenderCounterDefense = defender.data.getAttrib(MetaAttrib.counter_def),
                        attackerCounterDamage = attacker.data.getAttrib(MetaAttrib.counter_dam),
                        damage = FixMath.roundInt(Math.max(FixMath.roundInt(attackerAttack - defenderDefense * (1 + defenderDefenseCoefficient)), 1) * attackerCounterDamage) * FixMath.round(1 - defenderCounterDefense);

                    damage = FixMath.roundInt(damage);
                    damage = calculateHurt(damage, defender, attacker);
                    if (critFlag == 1) {
                        damage = FixMath.roundInt(damage * Math.max(1.5, FixMath.round(attackerCritDamage / defenderCritDefense)));
                    }

                    return Math.max(1, damage);
                });

                exports("normalHpSteal", function (attacker, defender, damage) {
                    var hpStealRate = attacker.data.getAttrib(MetaAttrib.att_hpsteal) - defender.data.getAttrib(MetaAttrib.att_hpsteal_def);
                    hpStealRate = FixMath.roundInt(hpStealRate);
                    hpStealRate = Math.max(0, hpStealRate);
                    return FixMath.roundInt(damage * hpStealRate);
                });

                exports("normalHpSteal1", function (attacker) {
                    var hpStealAmount = attacker.data.getAttrib(MetaAttrib.hpsteal_amount),
                        ignoreHpSteal = attacker.data.getAttrib(MetaAttrib.ignore_hpsteal),
                        hpStealValue = FixMath.round(hpStealAmount * Math.max(0, FixMath.round(1 - ignoreHpSteal))),
                        currentHp = attacker.data.getAttribByInt(MetaAttrib.hp);

                    return FixMath.roundInt(currentHp * hpStealValue);
                });

                exports("skillHpSteal", function (attacker, defender, damage) {
                    var skillHpStealRate = attacker.data.getAttrib(MetaAttrib.skill_hpsteal) - defender.data.getAttrib(MetaAttrib.skill_hpsteal_def);
                    skillHpStealRate = Math.max(0, FixMath.round(skillHpStealRate));
                    return FixMath.roundInt(damage * skillHpStealRate);
                });

                exports("checkHit", function (attacker, defender, ignoreMiss = false) {
                    var hitRate = attacker.data.getAttrib(MetaAttrib.hit),
                        missRate = ignoreMiss ? 0 : defender.data.getAttrib(MetaAttrib.miss),
                        critRate = attacker.data.getAttrib(MetaAttrib.crit_rate),
                        missChance = Math.max(FixMath.round(missRate - hitRate), 0),
                        randomValue = attacker.battleMain.random.randomInt(0, 10000),
                        hitChances = [];

                    hitChances[AttackType.Miss] = FixMath.roundInt(Math.pow(FixMath.round(100 * missChance), FixMath.round(ConfigGlobal.MissRateCoe * 0.01)));
                    hitChances[AttackType.Crit] = FixMath.roundInt(critRate * ConfigGlobal.CritRateCoe * 0.01);
                    hitChances[AttackType.Hit] = Math.max(10000 - hitChances[AttackType.Miss] - hitChances[AttackType.Crit], 0);
                    var cumulativeChance = 0;

                    for (var attackType in hitChances) {
                        cumulativeChance += hitChances[attackType];
                        if (randomValue < cumulativeChance) {
                            return attackType;
                        }
                    }
                    return AttackType.Hit;
                });

                cclegacy._RF.pop();
            },
            
        };
    }
);
