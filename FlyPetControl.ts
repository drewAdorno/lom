System.register(
    "chunks:///_virtual/FlyPetControl.ts",
    ["cc", "./FlyPetDataCache.ts", "./FlyPetDefine.ts"],
    function (e) {
        "use strict";
        var t, n, _;
        return {
            setters: [
                function (e) {
                    t = e.cclegacy;
                },
                function (e) {
                    n = e.default;
                },
                function (e) {
                    _ = e.FlyPetEventDefine;
                },
            ],
            execute: function () {
                t._RF.push(
                    {},
                    "1275crMRphBQZIK3R8cMEUW",
                    "FlyPetControl",
                    void 0
                );
                e(
                    "default",
                    (function () {
                        var e = t.prototype;
                        function t() {
                            (this.is_use_count = 0),
                                netManager.addEventListener(
                                    "fly.fly_egg_info_s2c",
                                    this.update_66_1,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_pet_info_s2c",
                                    this.update_66_2,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_egg_incubate_s2c",
                                    this.update_66_3,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_pet_level_up_s2c",
                                    this.update_66_4,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_pet_resolve_s2c",
                                    this.update_66_8,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_base_info_s2c",
                                    this.update_66_21,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_shelves_info_s2c",
                                    this.update_66_22,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_set_shelves_info_s2c",
                                    this.update_66_23,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_partner_shelves_s2c",
                                    this.update_66_24,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_resp_s2c",
                                    this.update_66_25,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_start_s2c",
                                    this.update_66_27,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_get_s2c",
                                    this.update_66_28,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_change_base_name_s2c",
                                    this.update_66_29,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_save_setting_s2c",
                                    this.update_66_30,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_hybrid_pet_info_s2c",
                                    this.update_66_31,
                                    this
                                ),
                                netManager.addEventListener(
                                    "task.task_fly_achievement_s2c",
                                    this.update_10_10,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_pet_collection_s2c",
                                    this.update_66_32,
                                    this
                                ),
                                netManager.addEventListener(
                                    "fly.fly_pet_star_s2c",
                                    this.update_66_33,
                                    this
                                );
                        }
                        return (
                            (e.clear = function () {}),
                            (e.send_66_1 = function () {
                                netManager.send("fly.fly_egg_info_c2s", {});
                            }),
                            (e.update_66_1 = function (e) {
                                IS(n).InitEggList(e),
                                    normalEvent.emit(_.EggListBack);
                            }),
                            (e.send_66_2 = function () {
                                (IS(n).is_init = !1),
                                    netManager.send("fly.fly_pet_info_c2s", {});
                            }),
                            (e.update_66_2 = function (e) {
                                IS(n).InitPetList(e),
                                    normalEvent.emit(_.OnInfoUpdate);
                            }),
                            (e.send_66_3 = function (e) {
                                netManager.send("fly.fly_egg_incubate_c2s", {
                                    id: e,
                                });
                            }),
                            (e.update_66_3 = function (e) {
                                0 == e.error_code &&
                                    (IS(n).DelEgg(e.id),
                                    normalEvent.emit(_.EggListBack));
                            }),
                            (e.send_66_4 = function (e, t) {
                                netManager.send("fly.fly_pet_level_up_c2s", {
                                    id: e,
                                    cost: t,
                                });
                            }),
                            (e.update_66_4 = function (e) {}),
                            (e.send_66_5 = function (e) {
                                netManager.send("fly.fly_pet_advance_c2s", {
                                    id: e,
                                });
                            }),
                            (e.send_66_6 = function (e) {
                                netManager.send("fly.fly_pet_fight_c2s", {
                                    id: e,
                                });
                            }),
                            (e.send_66_7 = function (e) {
                                netManager.send("fly.fly_pet_reset_c2s", {
                                    id: e,
                                });
                            }),
                            (e.send_66_8 = function (e) {
                                netManager.send("fly.fly_pet_resolve_c2s", {
                                    id: e,
                                });
                            }),
                            (e.update_66_8 = function (e) {
                                0 == e.error_code &&
                                    (IS(n).DelPet(e.id),
                                    normalEvent.emit(_.OnInfoUpdate));
                            }),
                            (e.send_66_9 = function (e, t) {
                                netManager.send("fly.fly_pet_rename_c2s", {
                                    id: e,
                                    name: t,
                                });
                            }),
                            (e.send_66_21 = function () {
                                netManager.send(
                                    "fly.fly_hybrid_base_info_c2s",
                                    {}
                                );
                            }),
                            (e.update_66_21 = function (e) {
                                IS(n).InitHomeData(e),
                                    normalEvent.emit(_.HomeListBack);
                            }),
                            (e.send_66_22 = function () {
                                netManager.send(
                                    "fly.fly_hybrid_shelves_info_c2s",
                                    {}
                                );
                            }),
                            (e.update_66_22 = function (e) {
                                IS(n).InitHybridData(e),
                                    normalEvent.emit(_.HybridListBack);
                            }),
                            (e.send_66_23 = function (e, t, n) {
                                netManager.send(
                                    "fly.fly_hybrid_set_shelves_info_c2s",
                                    { id: e, type: t, is_save: n }
                                );
                            }),
                            (e.update_66_23 = function (e) {
                                IS(n).updateUsePetList(e),
                                    normalEvent.emit(_.FlyPetUpPetChange);
                            }),
                            (e.send_66_24 = function (e) {
                                netManager.send(
                                    "fly.fly_hybrid_partner_shelves_c2s",
                                    { role_id: e }
                                );
                            }),
                            (e.update_66_24 = function (e) {
                                normalEvent.emit(_.RolePetListBack, e);
                            }),
                            (e.send_66_25 = function (e, t, n, _) {
                                netManager.send("fly.fly_hybrid_resp_c2s", {
                                    target_id: e,
                                    resp: t,
                                    type: n,
                                    pet_id: _,
                                });
                            }),
                            (e.update_66_25 = function (e) {}),
                            (e.send_66_26 = function (e) {
                                netManager.send("fly.fly_hybrid_kick_c2s", {
                                    target_id: e,
                                });
                            }),
                            (e.update_66_26 = function (e) {}),
                            (e.send_66_27 = function (e, t, n) {
                                netManager.send("fly.fly_hybrid_start_c2s", {
                                    base_id: e,
                                    fly_a_id: t,
                                    fly_b_id: n,
                                });
                            }),
                            (e.update_66_27 = function (e) {
                                uiMgr.close("FlyPetSelectView");
                            }),
                            (e.send_66_28 = function (e) {
                                netManager.send("fly.fly_hybrid_get_c2s", {
                                    id: e,
                                });
                            }),
                            (e.update_66_28 = function (e) {
                                IS(n).UpdateHomeInfo(e.base_info),
                                    normalEvent.emit(_.HomeListBack),
                                    e.egg &&
                                        e.egg.length > 0 &&
                                        uiMgr.openView(
                                            "FlyPetEggGetView",
                                            1,
                                            e.egg
                                        );
                            }),
                            (e.send_66_29 = function (e, t) {
                                netManager.send(
                                    "fly.fly_hybrid_change_base_name_c2s",
                                    { id: e, name: t }
                                );
                            }),
                            (e.update_66_29 = function (e) {
                                IS(n).UpdateHomeName(e.id, e.name),
                                    normalEvent.emit(_.HomeListBack, e);
                            }),
                            (e.send_66_30 = function (e) {
                                netManager.send(
                                    "fly.fly_hybrid_save_setting_c2s",
                                    { setting: e }
                                );
                            }),
                            (e.update_66_30 = function (e) {
                                IS(n).UpdateSetting(e),
                                    normalEvent.emit(_.FlyPetSettingChange);
                            }),
                            (e.send_66_31 = function (e, t) {
                                var n;
                                void 0 === t && (t = 0),
                                    (this.is_use_count =
                                        null != (n = t) ? n : 0),
                                    netManager.send(
                                        "fly.fly_hybrid_pet_info_c2s",
                                        { pet_id: e }
                                    );
                            }),
                            (e.update_66_31 = function (e) {
                                uiMgr.openView(
                                    "FlyPetLookTipsView",
                                    e.pet,
                                    e.other_times,
                                    this.is_use_count
                                );
                            }),
                            (e.send_10_10 = function () {
                                netManager.send(
                                    "task.task_fly_achievement_c2s",
                                    {}
                                );
                            }),
                            (e.update_10_10 = function (e) {
                                IS(n).InitAchievementInfo(e),
                                    normalEvent.emit(_.FlyPeAchievementBack, e);
                            }),
                            (e.send_10_11 = function () {
                                netManager.send(
                                    "task.task_fly_achievement_reward_c2s",
                                    {}
                                );
                            }),
                            (e.send_66_32 = function () {
                                netManager.send(
                                    "fly.fly_pet_collection_c2s",
                                    {}
                                );
                            }),
                            (e.update_66_32 = function (e) {
                                IS(n).InitCollectionList(e),
                                    normalEvent.emit(_.FlyPeCollectionBack);
                            }),
                            (e.send_66_33 = function (e, t, n) {
                                netManager.send("fly.fly_pet_star_c2s", {
                                    target_id: e,
                                    pet_id: t,
                                    opt: n,
                                });
                            }),
                            (e.update_66_33 = function (e) {
                                IS(n).UpdatePetIdStar(e);
                            }),
                            t
                        );
                    })()
                );
                t._RF.pop();
            },
        };
    }
);
