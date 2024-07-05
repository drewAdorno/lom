System.register(
    "chunks:///_virtual/FlyPetDataCache.ts",
    [
        "cc",
        "./RedPointMgr.ts",
        "./TimeUtil.ts",
        "./LoginDefine.ts",
        "./RoleDataCache.ts",
        "./TaskDataCache.ts",
        "./FlyPetControl.ts",
        "./FlyPetDefine.ts",
    ],
    function (t) {
        "use strict";
        var e, i, n, s, l, o, _, r;
        return {
            setters: [
                function (t) {
                    e = t.cclegacy;
                },
                function (t) {
                    i = t.RedPointMgr;
                },
                function (t) {
                    n = t.default;
                },
                function (t) {
                    s = t.LoginEventDefine;
                },
                function (t) {
                    l = t.RoleDataCache;
                },
                function (t) {
                    o = t.TaskDataCache;
                },
                function (t) {
                    _ = t.default;
                },
                function (t) {
                    r = t.FlyPetEventDefine;
                },
            ],
            execute: function () {
                e._RF.push(
                    {},
                    "166baqhQZpAebCuDb4KMpya",
                    "FlyPetDataCache",
                    void 0
                );
                t(
                    "default",
                    (function () {
                        var t = e.prototype;
                        function e() {
                            (this.is_init = !1),
                                (this.egg_list = []),
                                (this.pet_list = {}),
                                (this.new_list = {}),
                                (this.now_use_pet = 0),
                                (this.now_use_pet_info = null),
                                (this.home_list = {}),
                                (this.use_list = {}),
                                (this.role_list = []),
                                (this.use_pet_list = {}),
                                (this.setting = void 0),
                                (this.achievement_info = void 0),
                                (this.collection_list = {}),
                                normalEvent.on(
                                    s.LOGIN_SUCCESS,
                                    this.sendProto,
                                    this
                                );
                        }
                        return (
                            (t.clear = function () {}),
                            (t.sendProto = function () {
                                IS(_).send_66_1(),
                                    IS(_).send_66_2(),
                                    IS(_).send_66_21(),
                                    IS(_).send_66_22(),
                                    IS(_).send_10_10();
                            }),
                            (t.UpdateInfo = function (t) {}),
                            (t.InitPetList = function (t) {
                                var e,
                                    i = null != (e = t.pets) ? e : [],
                                    n = !1,
                                    s = [];
                                for (var l in i)
                                    null == this.pet_list[i[l].id] &&
                                        this.is_init &&
                                        ((n = !0),
                                        (this.new_list[i[l].id] = i[l]),
                                        s.push(i[l])),
                                        (this.pet_list[i[l].id] = i[l]);
                                n &&
                                    null != s &&
                                    s.length > 0 &&
                                    uiMgr.openView("FlyPetEggGetView", 2, s);
                                var o = 0,
                                    _ = null;
                                for (var a in this.pet_list)
                                    if (
                                        this.pet_list[a] &&
                                        1 == this.pet_list[a].fight
                                    ) {
                                        (o = this.pet_list[a].config_id),
                                            (_ = this.pet_list[a]);
                                        break;
                                    }
                                this.now_use_pet != o &&
                                    ((this.now_use_pet = o),
                                    (this.now_use_pet_info = _),
                                    normalEvent.emit(r.FlyPetUseChange)),
                                    (this.is_init = !0);
                            }),
                            (t.DelNewItem = function (t) {
                                this.new_list[t] = null;
                            }),
                            (t.IsNewPet = function (t) {
                                return null != this.new_list[t];
                            }),
                            (t.DelPet = function (t) {
                                (this.pet_list[t] = null),
                                    (this.new_list[t] = null),
                                    (this.use_list[t] = null),
                                    (this.use_pet_list[t] = null);
                            }),
                            (t.GetPetInfoById = function (t) {
                                for (var e in this.pet_list)
                                    if (
                                        this.pet_list[e] &&
                                        this.pet_list[e].id == t
                                    )
                                        return this.pet_list[e];
                            }),
                            (t.GetPetList = function () {
                                return this.pet_list;
                            }),
                            (t.InitEggList = function (t) {
                                var e,
                                    i = null != (e = t.eggs) ? e : [];
                                for (var n in i) this.egg_list[i[n].id] = i[n];
                                IS(o).updateFlyPetRed(),
                                    normalEvent.emit(r.FLY_PET_RED);
                            }),
                            (t.DelEgg = function (t) {
                                (this.egg_list[t] = null),
                                    IS(o).updateFlyPetRed(),
                                    normalEvent.emit(r.FLY_PET_RED);
                            }),
                            (t.GetEggList = function () {
                                return this.egg_list;
                            }),
                            (t.InitHomeData = function (t) {
                                var e,
                                    i,
                                    n = null != (e = t.base_list) ? e : [],
                                    s = null != (i = t.use_list) ? i : {};
                                for (var l in ((this.use_list = {}),
                                (this.home_list = {}),
                                s))
                                    s[l] && (this.use_list[s[l].id] = s[l]);
                                for (var _ in n)
                                    n[_] && (this.home_list[n[_].id] = n[_]);
                                normalEvent.emit(r.FLY_PET_RED),
                                    IS(o).updateFlyPetRed();
                            }),
                            (t.UpdateSetting = function (t) {
                                this.setting = t.setting;
                            }),
                            (t.UpdateHomeName = function (t, e) {
                                this.home_list[t] &&
                                    (this.home_list[t].name = e);
                            }),
                            (t.UpdateHomeInfo = function (t) {
                                t &&
                                    t.id &&
                                    this.home_list[t.id] &&
                                    (this.home_list[t.id] = t),
                                    normalEvent.emit(r.FLY_PET_RED),
                                    IS(o).updateFlyPetRed();
                            }),
                            (t.GetHaveUseItemById = function (t) {
                                return this.use_list[t];
                            }),
                            (t.GetUseCDCfg = function (t, e) {
                                var i,
                                    n = configFly_cd.getDatas();
                                for (var s in n) {
                                    var l = n[s];
                                    l.type == e && l.times <= t && (i = l);
                                }
                                return (
                                    i ||
                                    configFly_cd.getDataByKeys(
                                        "times",
                                        0,
                                        "type",
                                        e
                                    )
                                );
                            }),
                            (t.GetSetting = function () {
                                return this.setting;
                            }),
                            (t.GetHomeById = function (t) {
                                return this.home_list[t];
                            }),
                            (t.GetHomeList = function () {
                                return this.home_list;
                            }),
                            (t.InitHybridData = function (t) {
                                var e, i, n;
                                this.role_list =
                                    null != (e = t.partner_list) ? e : [];
                                var s = null != (i = t.shelves_list) ? i : [];
                                for (var l in ((this.setting =
                                    null != (n = t.setting) ? n : []),
                                s))
                                    this.use_pet_list[s[l].info.id] = s[l];
                            }),
                            (t.updateUsePetList = function (t) {
                                0 == t.type || 2 == t.type
                                    ? (this.use_pet_list[t.info.info.id] =
                                          t.info)
                                    : 1 == t.type &&
                                      (this.use_pet_list[t.info.info.id] =
                                          null);
                            }),
                            (t.GetHybridPetById = function (t) {
                                return this.use_pet_list[t];
                            }),
                            (t.GetHybridRoleList = function () {
                                return this.role_list;
                            }),
                            (t.GetHybridUsePetList = function () {
                                return this.use_pet_list;
                            }),
                            (t.GetShowList = function (t) {
                                void 0 === t && (t = 1);
                                var e = [],
                                    i = {};
                                for (var n in this.home_list) {
                                    var s = this.home_list[n];
                                    if (
                                        s.fly_a &&
                                        null != s.fly_a.id &&
                                        null == this.use_pet_list[s.fly_a.id]
                                    ) {
                                        var l = {};
                                        (l.info = s.fly_a),
                                            (l.is_save = 0),
                                            (l.can_list = []),
                                            (l.use_role = s.fly_b.role_id),
                                            (l.state = s.state),
                                            (l.end_time = s.end_time),
                                            (i[s.fly_a.id] = l);
                                    }
                                    if (
                                        s.fly_b &&
                                        null != s.fly_b.id &&
                                        null == this.use_pet_list[s.fly_a.id]
                                    ) {
                                        var o = {};
                                        (o.info = s.fly_b),
                                            (o.is_save = 0),
                                            (o.can_list = []),
                                            (o.use_role = s.fly_a.role_id),
                                            (o.state = s.state),
                                            (o.end_time = s.end_time),
                                            (i[s.fly_b.id] = o);
                                    }
                                }
                                for (var _ in this.pet_list)
                                    if (this.pet_list[_])
                                        if (i[this.pet_list[_].id])
                                            e.push(i[this.pet_list[_].id]);
                                        else if (
                                            null ==
                                            this.use_pet_list[
                                                this.pet_list[_].id
                                            ]
                                        ) {
                                            var r = {};
                                            (r.info = this.pet_list[_]),
                                                (r.is_save = 0),
                                                (r.can_list = []),
                                                (r.use_role = 0),
                                                (r.state = 0),
                                                (r.end_time = 0),
                                                e.push(r);
                                        } else
                                            2 == t &&
                                                this.use_pet_list[
                                                    this.pet_list[_].id
                                                ] &&
                                                e.push(
                                                    this.use_pet_list[
                                                        this.pet_list[_].id
                                                    ]
                                                );
                                return e;
                            }),
                            (t.GetExpByLev = function (t, e, i, n) {
                                void 0 === n && (n = 1);
                                var s = IS(l).GetLevel(),
                                    o = configFly_level.getDataListByKey(t),
                                    _ = 0,
                                    r = [];
                                for (var a in o) r.push(o[a]);
                                r.sort(function (t, e) {
                                    return t.level - e.level;
                                });
                                for (var u = 0; u < r.length; u++) {
                                    var f = r[u];
                                    if (f && f.level >= e) {
                                        if (
                                            (f.level > e && f.if_advance > 0) ||
                                            f.level >= s
                                        )
                                            break;
                                        _ += Math.ceil(f.expend * n);
                                    }
                                }
                                return _ - i;
                            }),
                            (t.GetIsBianYi = function (t) {
                                var e;
                                for (var i in (t = null != (e = t) ? e : {})) {
                                    if (t[i])
                                        if (
                                            6 ==
                                            configFly_entry.getDataByKeys(
                                                "id",
                                                t[i].k,
                                                "level",
                                                t[i].v
                                            ).quality
                                        )
                                            return 1;
                                }
                                return 0;
                            }),
                            (t.GetBianYiAttr = function (t, e) {
                                var i;
                                for (var n in (void 0 === e && (e = 5),
                                (t = null != (i = t) ? i : {})))
                                    if (t[n]) {
                                        var s = configFly_entry.getDataByKeys(
                                            "id",
                                            t[n].k,
                                            "level",
                                            t[n].v
                                        );
                                        if (6 == s.quality && s.special_effect)
                                            for (
                                                var l = 0;
                                                l < s.special_effect.length;
                                                l++
                                            )
                                                if (s.special_effect[l][0] == e)
                                                    return s.special_effect[
                                                        l
                                                    ][1];
                                    }
                                return 0;
                            }),
                            (t.GetUseTimeByAge = function (t) {
                                var e = configFly_hybrid_time.getDatas(),
                                    i = null;
                                for (var n in e) e[n].id <= t && (i = e[n]);
                                return i || (i = e[0]), i.time;
                            }),
                            (t.CheckIsCanCancelRole = function (t) {
                                for (var e in this.home_list) {
                                    var i = this.home_list[e];
                                    if (
                                        i &&
                                        1 == i.state &&
                                        ((i.fly_a && i.fly_a.role_id == t) ||
                                            (i.fly_b && i.fly_b.role_id == t))
                                    )
                                        return !0;
                                }
                                return !1;
                            }),
                            (t.CheckIsHaveOtherRoleUse = function (t) {
                                for (var e in this.use_list) {
                                    var i = this.use_list[e];
                                    if (i && 1 == i.other_state) {
                                        var n = this.use_pet_list[i.id];
                                        if (n && 1 == n.state && n.role_id == t)
                                            return !0;
                                    }
                                }
                                return !1;
                            }),
                            (t.CheckHaveFinishRedPoint = function () {
                                var t = 0;
                                for (var e in this.home_list) {
                                    var i = this.home_list[e];
                                    ((i && 2 == i.state) ||
                                        (i &&
                                            1 == i.state &&
                                            i.end_time > 0 &&
                                            i.end_time <= n.serverTime)) &&
                                        t++;
                                }
                                return t;
                            }),
                            (t.CheckIsHaveEggRedPoint = function () {
                                var t = 0;
                                for (var e in this.egg_list) {
                                    this.egg_list[e] && t++;
                                }
                                return t;
                            }),
                            (t.InitAchievementInfo = function (t) {
                                (this.achievement_info = t),
                                    this.GetAchievementInfoRedPoint(),
                                    IS(i).changeValue(
                                        "fly_pet_achievement_red",
                                        this.GetAchievementInfoRedPoint()
                                    ),
                                    IS(o).updateFlyPetRed();
                            }),
                            (t.GetAchievementInfo = function () {
                                return this.achievement_info;
                            }),
                            (t.GetAchievementInfoRedPoint = function () {
                                var t = 0;
                                if (
                                    this.achievement_info &&
                                    this.achievement_info.now_id !=
                                        this.achievement_info.get_id
                                ) {
                                    var e =
                                        configFly_total_achievement.getDataByKey(
                                            this.achievement_info.now_id
                                        );
                                    e &&
                                        e.num <=
                                            this.achievement_info.progress &&
                                        (t = 1);
                                }
                                return t;
                            }),
                            (t.InitCollectionList = function (t) {
                                for (
                                    var e,
                                        i = null != (e = t.pet_ids) ? e : [],
                                        n = 0;
                                    n < i.length;
                                    n++
                                )
                                    this.collection_list[i[n]] = i[n];
                            }),
                            (t.GetCollectionList = function () {
                                return this.collection_list;
                            }),
                            (t.UpdatePetIdStar = function (t) {
                                if (t.target_id == IS(l).GetRoleId()) {
                                    if (
                                        this.pet_list &&
                                        this.pet_list[t.pet_id]
                                    ) {
                                        var e,
                                            i =
                                                null !=
                                                (e =
                                                    this.pet_list[t.pet_id].ext)
                                                    ? e
                                                    : [],
                                            n = !1;
                                        for (var s in i)
                                            if (1 == i[s].k) {
                                                var o;
                                                (i[s].v =
                                                    null != (o = t.opt)
                                                        ? o
                                                        : 0),
                                                    (n = !0);
                                                break;
                                            }
                                        n || i.push({ k: 1, v: t.opt }),
                                            (this.pet_list[t.pet_id].ext = i);
                                    }
                                    normalEvent.emit(r.OnInfoUpdate);
                                } else
                                    normalEvent.emit(r.FlyPeOtherStarBack, t);
                            }),
                            (t.GetExtByKey = function (t, e) {
                                if (t) {
                                    var i = t.ext;
                                    for (var n in i)
                                        if (i[n].k == e) return i[n].v;
                                }
                                return 0;
                            }),
                            e
                        );
                    })()
                );
                e._RF.pop();
            },
        };
    }
);
