System.register(
    "chunks:///_virtual/FlyPetAI.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./FixMath.ts",
        "./IAIHandle.ts",
        "./Target.ts",
        "./EnumDefine.ts",
    ],
    function (t) {
        "use strict";
        var n, e, i, r, a, l, o;
        return {
            setters: [
                function (t) {
                    (n = t.inheritsLoose),
                        (e = t.createForOfIteratorHelperLoose);
                },
                function (t) {
                    i = t.cclegacy;
                },
                function (t) {
                    r = t.FixMath;
                },
                function (t) {
                    a = t.IAIHandle;
                },
                function (t) {
                    l = t.TargetSkill;
                },
                function (t) {
                    o = t.TargetFilter;
                },
            ],
            execute: function () {
                i._RF.push({}, "02ed5pjh95JVp0t88Ff8Jgj", "FlyPetAI", void 0);
                t(
                    "FlyPetAI",
                    (function (t) {
                        function i() {
                            return t.apply(this, arguments) || this;
                        }
                        n(i, t);
                        var a = i.prototype;
                        return (
                            (a.handleAction = function () {
                                var t = this.cast,
                                    n = t.battleMain.unitMgr.findTarget(
                                        t,
                                        o.Enemy,
                                        t.attackDistance,
                                        t.position
                                    );
                                n.length > 0 && this.selectTarget(n[0]),
                                    this.startSkill();
                            }),
                            (a.startSkill = function () {
                                var t = this.cast,
                                    n = t.data.skillList;
                                if (null == n || 0 == n.length) return !1;
                                for (var i, a = e(n); !(i = a()).done; ) {
                                    var s = i.value;
                                    if (0 == s.state) {
                                        var u = r.roundInt(
                                            s.config.autoDis + t.skillAutoDis
                                        );
                                        if (
                                            0 ==
                                            t.battleMain.unitMgr.findTarget(
                                                t,
                                                o.Enemy,
                                                u,
                                                t.position
                                            ).length
                                        )
                                            continue;
                                        t.wantSkill = l.toSkill(s);
                                    }
                                }
                            }),
                            i
                        );
                    })(a)
                );
                i._RF.pop();
            },
        };
    }
);
