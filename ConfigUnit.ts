System.register(
    "chunks:///_virtual/ConfigUnit.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseConfig.ts"],
    function (t) {
        "use strict";
        var e, n, i, r, a;
        return {
            setters: [
                function (t) {
                    (e = t.inheritsLoose), (n = t.createClass);
                },
                function (t) {
                    i = t.cclegacy;
                },
                function (t) {
                    (r = t.default), (a = t.CONFIG_KEY);
                },
            ],
            execute: function () {
                i._RF.push({}, "2d2a9zpRehLspD6vrINmBQ+", "ConfigUnit", void 0);
                var u = (function () {
                    function t(t) {
                        (this._data = void 0), (this._data = t);
                    }
                    return (
                        n(t, [
                            {
                                key: "id",
                                get: function () {
                                    return this._data[0];
                                },
                            },
                            {
                                key: "model",
                                get: function () {
                                    return this._data[1];
                                },
                            },
                            {
                                key: "type",
                                get: function () {
                                    return this._data[2];
                                },
                            },
                            {
                                key: "hatred_type",
                                get: function () {
                                    return this._data[3];
                                },
                            },
                            {
                                key: "ai",
                                get: function () {
                                    return this._data[4];
                                },
                            },
                            {
                                key: "att_skill",
                                get: function () {
                                    return this._data[5];
                                },
                            },
                            {
                                key: "skills",
                                get: function () {
                                    var t;
                                    return null != (t = this._data[6])
                                        ? t
                                        : LNIL;
                                },
                            },
                            {
                                key: "passiveSkills",
                                get: function () {
                                    var t;
                                    return null != (t = this._data[7])
                                        ? t
                                        : LNIL;
                                },
                            },
                            {
                                key: "dead_skills",
                                get: function () {
                                    var t;
                                    return null != (t = this._data[8])
                                        ? t
                                        : LNIL;
                                },
                            },
                            {
                                key: "dead_effect",
                                get: function () {
                                    return this._data[9];
                                },
                            },
                            {
                                key: "att",
                                get: function () {
                                    return BigNumber(this._data[10]).toNumber();
                                },
                            },
                            {
                                key: "def",
                                get: function () {
                                    return BigNumber(this._data[11]).toNumber();
                                },
                            },
                            {
                                key: "hp",
                                get: function () {
                                    return BigNumber(this._data[12]).toNumber();
                                },
                            },
                            {
                                key: "att_range",
                                get: function () {
                                    return this._data[13] ^ a;
                                },
                            },
                            {
                                key: "detection_range",
                                get: function () {
                                    return this._data[14] ^ a;
                                },
                            },
                            {
                                key: "att_speed",
                                get: function () {
                                    return this._data[15] ^ a;
                                },
                            },
                            {
                                key: "crit_rate",
                                get: function () {
                                    return this._data[16] ^ a;
                                },
                            },
                            {
                                key: "crit_dam",
                                get: function () {
                                    return this._data[17] ^ a;
                                },
                            },
                            {
                                key: "crit_def",
                                get: function () {
                                    return this._data[18] ^ a;
                                },
                            },
                            {
                                key: "double_hit",
                                get: function () {
                                    return this._data[19] ^ a;
                                },
                            },
                            {
                                key: "counter",
                                get: function () {
                                    return this._data[20] ^ a;
                                },
                            },
                            {
                                key: "ignore_double_hit",
                                get: function () {
                                    return this._data[21] ^ a;
                                },
                            },
                            {
                                key: "ignore_counter",
                                get: function () {
                                    return this._data[22] ^ a;
                                },
                            },
                            {
                                key: "hit",
                                get: function () {
                                    return this._data[23] ^ a;
                                },
                            },
                            {
                                key: "miss",
                                get: function () {
                                    return this._data[24] ^ a;
                                },
                            },
                            {
                                key: "speed",
                                get: function () {
                                    return this._data[25] ^ a;
                                },
                            },
                            {
                                key: "hp_recovery",
                                get: function () {
                                    return this._data[26] ^ a;
                                },
                            },
                            {
                                key: "boss_dam",
                                get: function () {
                                    return this._data[27] ^ a;
                                },
                            },
                            {
                                key: "att_hpsteal",
                                get: function () {
                                    return this._data[28] ^ a;
                                },
                            },
                            {
                                key: "skill_hpsteal",
                                get: function () {
                                    return this._data[29] ^ a;
                                },
                            },
                            {
                                key: "att_resist",
                                get: function () {
                                    return this._data[30] ^ a;
                                },
                            },
                            {
                                key: "skill_resist",
                                get: function () {
                                    return this._data[31] ^ a;
                                },
                            },
                            {
                                key: "partner_resist",
                                get: function () {
                                    return this._data[32] ^ a;
                                },
                            },
                            {
                                key: "resist",
                                get: function () {
                                    return this._data[33] ^ a;
                                },
                            },
                            {
                                key: "vertigo",
                                get: function () {
                                    return this._data[34] ^ a;
                                },
                            },
                            {
                                key: "suspend",
                                get: function () {
                                    return this._data[35] ^ a;
                                },
                            },
                            {
                                key: "vertigo_def",
                                get: function () {
                                    return this._data[36] ^ a;
                                },
                            },
                            {
                                key: "suspend_def",
                                get: function () {
                                    return this._data[37] ^ a;
                                },
                            },
                            {
                                key: "att_hpsteal_def",
                                get: function () {
                                    return this._data[38] ^ a;
                                },
                            },
                            {
                                key: "skill_hpsteal_def",
                                get: function () {
                                    return this._data[39] ^ a;
                                },
                            },
                            {
                                key: "target_num",
                                get: function () {
                                    return this._data[40] ^ a;
                                },
                            },
                            {
                                key: "bullet",
                                get: function () {
                                    return this._data[41] ^ a;
                                },
                            },
                            {
                                key: "destoryTime",
                                get: function () {
                                    return this._data[42];
                                },
                            },
                            {
                                key: "vertigo_times",
                                get: function () {
                                    return this._data[43] ^ a;
                                },
                            },
                            {
                                key: "vertigo_res",
                                get: function () {
                                    return this._data[44] ^ a;
                                },
                            },
                            {
                                key: "control_res",
                                get: function () {
                                    return this._data[45] ^ a;
                                },
                            },
                            {
                                key: "double_hit_dam",
                                get: function () {
                                    return this._data[46] ^ a;
                                },
                            },
                            {
                                key: "counter_dam",
                                get: function () {
                                    return this._data[47] ^ a;
                                },
                            },
                            {
                                key: "double_hit_def",
                                get: function () {
                                    return this._data[48] ^ a;
                                },
                            },
                            {
                                key: "counter_def",
                                get: function () {
                                    return this._data[49] ^ a;
                                },
                            },
                            {
                                key: "counter_suspend",
                                get: function () {
                                    return this._data[50] ^ a;
                                },
                            },
                            {
                                key: "skill_crit_rate",
                                get: function () {
                                    return this._data[51] ^ a;
                                },
                            },
                            {
                                key: "skill_crit_dam",
                                get: function () {
                                    return this._data[52] ^ a;
                                },
                            },
                            {
                                key: "att_dam",
                                get: function () {
                                    return this._data[53] ^ a;
                                },
                            },
                            {
                                key: "skill_dam_extra",
                                get: function () {
                                    return this._data[54] ^ a;
                                },
                            },
                            {
                                key: "boss_def",
                                get: function () {
                                    return this._data[55] ^ a;
                                },
                            },
                            {
                                key: "hpsteal_rate",
                                get: function () {
                                    return this._data[56] ^ a;
                                },
                            },
                            {
                                key: "hpsteal_amount",
                                get: function () {
                                    return this._data[57] ^ a;
                                },
                            },
                            {
                                key: "hpsteal_res",
                                get: function () {
                                    return this._data[58] ^ a;
                                },
                            },
                            {
                                key: "ignore_hpsteal",
                                get: function () {
                                    return this._data[59] ^ a;
                                },
                            },
                            {
                                key: "pve_dam",
                                get: function () {
                                    return this._data[60] ^ a;
                                },
                            },
                            {
                                key: "pve_resist",
                                get: function () {
                                    return this._data[61] ^ a;
                                },
                            },
                            {
                                key: "def_coe",
                                get: function () {
                                    return this._data[62] ^ a;
                                },
                            },
                            {
                                key: "skillbuff_time_all",
                                get: function () {
                                    return this._data[63] ^ a;
                                },
                            },
                            {
                                key: "kill_reward",
                                get: function () {
                                    var t;
                                    return null != (t = this._data[64])
                                        ? t
                                        : LNIL;
                                },
                            },
                            {
                                key: "first_kill_reward",
                                get: function () {
                                    var t;
                                    return null != (t = this._data[65])
                                        ? t
                                        : LNIL;
                                },
                            },
                            {
                                key: "petrace",
                                get: function () {
                                    return this._data[66];
                                },
                            },
                            {
                                key: "dialogue",
                                get: function () {
                                    var t;
                                    return null != (t = this._data[67])
                                        ? t
                                        : LNIL;
                                },
                            },
                            {
                                key: "dialogue_list",
                                get: function () {
                                    var t;
                                    return null != (t = this._data[68])
                                        ? t
                                        : LNIL;
                                },
                            },
                            {
                                key: "apperanceID",
                                get: function () {
                                    return this._data[69];
                                },
                            },
                        ]),
                        t
                    );
                })();
                t(
                    "default",
                    (function (t) {
                        function n() {
                            var e, n;
                            return (
                                ((n = t.call(this) || this).name = "Unit"),
                                (n.clazz = u),
                                (n.mainKey = "id"),
                                (n.keys = (((e = {}).id = 0), e)),
                                n
                            );
                        }
                        return e(n, t), n;
                    })(r)
                );
                i._RF.pop();
            },
        };
    }
);
