System.register(
    "chunks:///_virtual/SkillCommonEffectUtil.ts",
    [
        "cc",
        "./FixMath.ts",
        "./BuffCtr.ts",
        "./MetaAttrib.ts",
        "./EnumDefine.ts",
        "./HurtUtil.ts",
        "./V2.ts",
    ],
    function (t) {
        "use strict";
        var n, e, a, i, r, o, l, u, s, c, f;
        return {
            setters: [
                function (t) {
                    n = t.cclegacy;
                },
                function (t) {
                    e = t.FixMath;
                },
                function (t) {
                    a = t.freeBuffList;
                },
                function (t) {
                    i = t.AttribDefine;
                },
                function (t) {
                    (r = t.BuffGroupType),
                        (o = t.AttackType),
                        (l = t.HealthType),
                        (u = t.UnityType);
                },
                function (t) {
                    (s = t.checkHit), (c = t.normalHurt);
                },
                function (t) {
                    f = t.V2;
                },
            ],
            execute: function () {
                n._RF.push(
                    {},
                    "4a1e3Lzp/dL+qlWVa/nejW2",
                    "SkillCommonEffectUtil",
                    void 0
                );
                var d = new f();
                t(
                    "SkillCommonEffectUtil",
                    (function () {
                        function t() {}
                        return (
                            (t.addBullet = function (t, n, a, i, r, o) {
                                if (null == n) {
                                    var l = t.battleMain.random.randomInt(
                                        100,
                                        300
                                    );
                                    t.battleMain.printLogFlag &&
                                        t.battleMain.printLogDebug(
                                            "addBullet: offsetX: " + l
                                        );
                                    var u =
                                        t.cast.position.x +
                                        e.roundInt(t.cast.direction * l);
                                    d.set(u, t.cast.position.y),
                                        t.addBulletToPos(d, a, i);
                                } else if (n.isDead)
                                    d.set(n.position),
                                        t.addBulletToPos(d, a, i);
                                else {
                                    var s = t.addBullet1(n, a, i);
                                    r && s.param.push(r, o);
                                }
                            }),
                            (t.getLockTarget = function (t, n) {
                                void 0 === n && (n = !1);
                                var e = t.lockTarget;
                                return (
                                    (null == e || e.isDead) &&
                                        (e =
                                            t.cast.hatredCtr.getMaxHatredUnit()),
                                    n && null == e ? t.lockTarget : e
                                );
                            }),
                            (t.checkTriggerBullet = function (t, n, i, o, l) {
                                var u = this,
                                    s = n.cast.buffCtr.getBuffByType(
                                        r.TRIGGER_BULLET
                                    );
                                if (s && s.length > 0) {
                                    var c = s[0].config.param1,
                                        f = s[0].config.param2 + 1,
                                        d = s[0].config.param3,
                                        g = s[0].skillPar,
                                        p = n.battleMain.random.randomInt(c, f);
                                    n.battleMain.printLogFlag &&
                                        n.battleMain.printLogDebug(
                                            "checkTriggerBullet: num: " + p
                                        ),
                                        t.addTimer(
                                            e.round(d / 1e3),
                                            p,
                                            function () {
                                                l > 0
                                                    ? u.addBullet(
                                                          n,
                                                          i,
                                                          o,
                                                          l,
                                                          "trigger_bullet",
                                                          g
                                                      )
                                                    : i &&
                                                      u.bulletHurt(n, i, g);
                                            }
                                        );
                                }
                                a(s);
                            }),
                            (t.bulletHurt = function (t, n, a) {
                                if (
                                    !t.cast.isDestroy &&
                                    null != n &&
                                    !n.isDestroy
                                ) {
                                    var r = s(t.cast, n);
                                    if (r != o.Miss) {
                                        var f = 107;
                                        null != t.configWeapon &&
                                            (f =
                                                t.configWeapon.soundid_hit ||
                                                f),
                                            t.playSound(f);
                                        var d = c(t.cast, n, r),
                                            g =
                                                r == o.Normal
                                                    ? l.Hurt
                                                    : l.Hurt_Crit,
                                            p = t.cast.data.getAttrib(
                                                i.boss_dam
                                            );
                                        n.config.type == u.Boss &&
                                            p > 0 &&
                                            (d = e.roundInt(
                                                d * e.round(1 + p)
                                            )),
                                            (d = e.roundInt(d * a)),
                                            t.healthTarget(n, d, g, !0);
                                    } else t.healthTarget(n, 0, l.Miss, !0);
                                }
                            }),
                            t
                        );
                    })()
                );
                n._RF.pop();
            },
        };
    }
);
