System.register(
    "chunks:///_virtual/BuffSkillHpHurt.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./ObjectPool.ts",
        "./FixMath.ts",
        "./Buff.ts",
        "./MetaAttrib.ts",
        "./EnumDefine.ts",
    ],
    function (t) {
        "use strict";
        var i, n, r, e, a, o, u, l;
        return {
            setters: [
                function (t) {
                    i = t.inheritsLoose;
                },
                function (t) {
                    n = t.cclegacy;
                },
                function (t) {
                    r = t.ObjectPool;
                },
                function (t) {
                    e = t.FixMath;
                },
                function (t) {
                    a = t.Buff;
                },
                function (t) {
                    o = t.AttribDefine;
                },
                function (t) {
                    (u = t.BattleFlag), (l = t.HealthType);
                },
            ],
            execute: function () {
                n._RF.push(
                    {},
                    "8ec64p9QLhA75SXwAvuPAPW",
                    "BuffSkillHpHurt",
                    void 0
                );
                var s = t(
                    "BuffSkillHpHurt",
                    (function (t) {
                        function n() {
                            for (
                                var i,
                                    n = arguments.length,
                                    r = new Array(n),
                                    e = 0;
                                e < n;
                                e++
                            )
                                r[e] = arguments[e];
                            return (
                                ((i =
                                    t.call.apply(t, [this].concat(r)) ||
                                    this)._resistPar = void 0),
                                (i._limit = void 0),
                                i
                            );
                        }
                        i(n, t);
                        var r = n.prototype;
                        return (
                            (r.onBegin = function () {
                                var t = this.owner,
                                    i = this.runner.cast;
                                if (!(t.battleMain.battleFlag & u.NOT_HURT)) {
                                    var n = t.data.getAttrib(o.hp),
                                        r = i.data.getAttrib(o.resist);
                                    if (
                                        ((n =
                                            e.roundInt(n * this.skillPar) +
                                            e.roundInt(
                                                n * this._resistPar * r
                                            )),
                                        (n = e.roundInt(
                                            n * t.battleMain.injuryReduce
                                        )),
                                        this._limit)
                                    ) {
                                        var a = i.data.getAttrib(o.att),
                                            s = t.data.getAttrib(o.def),
                                            c = t.data.getAttrib(o.def_coe),
                                            f = i.data.getAttrib(o.att_dam),
                                            h = e.roundInt(
                                                Math.max(
                                                    e.roundInt(a - s * (1 + c)),
                                                    1
                                                ) * f
                                            ),
                                            d = e.roundInt(h * this._limit[0]),
                                            p = e.roundInt(h * this._limit[1]);
                                        (n = Math.max(n, d)),
                                            (n = Math.min(n, p));
                                    }
                                    this.runner.healthTarget(t, n, l.Hurt);
                                }
                            }),
                            (r.onDestroy = function () {
                                n._pool.free(this);
                            }),
                            (n.alloc = function (t) {
                                var i = n._pool.alloc();
                                return (
                                    (i.config = t),
                                    (i._resistPar = e.round(t.param1 / 1e4)),
                                    (i._limit = t.param5),
                                    i
                                );
                            }),
                            n
                        );
                    })(a)
                );
                (s._pool = new r(s, 20)), n._RF.pop();
            },
        };
    }
);
