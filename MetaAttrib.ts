System.register(
    "chunks:///_virtual/MetaAttrib.ts",
    ["./rollupPluginModLoBabelHelpers.js", "cc", "./FixMath.ts"],
    function (e) {
        "use strict";
        var t, a, i;
        return {
            setters: [
                function (e) {
                    t = e.createClass;
                },
                function (e) {
                    a = e.cclegacy;
                },
                function (e) {
                    i = e.FixMath;
                },
            ],
            execute: function () {
                var _;
                e("AttribDefine", void 0),
                    a._RF.push(
                        {},
                        "bbd089QuD9AXpuqzi3u40FU",
                        "MetaAttrib",
                        void 0
                    ),
                    (function (e) {
                        (e[(e.min = 1001)] = "min"),
                            (e[(e.att = 1001)] = "att"),
                            (e[(e.hp = 1002)] = "hp"),
                            (e[(e.att_speed = 1003)] = "att_speed"),
                            (e[(e.crit_rate = 1004)] = "crit_rate"),
                            (e[(e.crit_dam = 1005)] = "crit_dam"),
                            (e[(e.crit_def = 1006)] = "crit_def"),
                            (e[(e.hit = 1007)] = "hit"),
                            (e[(e.miss = 1008)] = "miss"),
                            (e[(e.speed = 1009)] = "speed"),
                            (e[(e.detection_range = 1010)] = "detection_range"),
                            (e[(e.att_range = 1011)] = "att_range"),
                            (e[(e.hp_recovery = 1012)] = "hp_recovery"),
                            (e[(e.power_recovery = 1013)] = "power_recovery"),
                            (e[(e.att_hpsteal = 1014)] = "att_hpsteal"),
                            (e[(e.skill_hpsteal = 1015)] = "skill_hpsteal"),
                            (e[(e.double_hit = 1016)] = "double_hit"),
                            (e[(e.counter = 1017)] = "counter"),
                            (e[(e.att_resist = 1018)] = "att_resist"),
                            (e[(e.skill_resist = 1019)] = "skill_resist"),
                            (e[(e.partner_resist = 1020)] = "partner_resist"),
                            (e[(e.resist = 1021)] = "resist"),
                            (e[(e.suspend = 1022)] = "suspend"),
                            (e[(e.vertigo = 1023)] = "vertigo"),
                            (e[(e.def = 1024)] = "def"),
                            (e[(e.suspend_def = 1025)] = "suspend_def"),
                            (e[(e.vertigo_def = 1026)] = "vertigo_def"),
                            (e[(e.att_hpsteal_def = 1027)] = "att_hpsteal_def"),
                            (e[(e.skill_hpsteal_def = 1028)] =
                                "skill_hpsteal_def"),
                            (e[(e.target_num = 1029)] = "target_num"),
                            (e[(e.vertigo_times = 1030)] = "vertigo_times"),
                            (e[(e.vertigo_res = 1031)] = "vertigo_res"),
                            (e[(e.double_hit_dam = 1032)] = "double_hit_dam"),
                            (e[(e.counter_dam = 1033)] = "counter_dam"),
                            (e[(e.double_hit_def = 1034)] = "double_hit_def"),
                            (e[(e.counter_def = 1035)] = "counter_def"),
                            (e[(e.counter_suspend = 1036)] = "counter_suspend"),
                            (e[(e.skill_crit_rate = 1037)] = "skill_crit_rate"),
                            (e[(e.skill_crit_dam = 1038)] = "skill_crit_dam"),
                            (e[(e.att_dam = 1039)] = "att_dam"),
                            (e[(e.partner_dam = 1040)] = "partner_dam"),
                            (e[(e.CONTROL_RES = 1042)] = "CONTROL_RES"),
                            (e[(e.skill_dam_extra = 1045)] = "skill_dam_extra"),
                            (e[(e.boss_dam = 1046)] = "boss_dam"),
                            (e[(e.partner_dam_extra = 1047)] =
                                "partner_dam_extra"),
                            (e[(e.ignore_double_hit = 1048)] =
                                "ignore_double_hit"),
                            (e[(e.ignore_counter = 1049)] = "ignore_counter"),
                            (e[(e.shield_time_extra = 1050)] =
                                "shield_time_extra"),
                            (e[(e.shield_hp_extra = 1051)] = "shield_hp_extra"),
                            (e[(e.boss_def = 1052)] = "boss_def"),
                            (e[(e.hpsteal_rate = 1053)] = "hpsteal_rate"),
                            (e[(e.hpsteal_amount = 1054)] = "hpsteal_amount"),
                            (e[(e.hpsteal_res = 1055)] = "hpsteal_res"),
                            (e[(e.ignore_hpsteal = 1056)] = "ignore_hpsteal"),
                            (e[(e.pve_dam = 1057)] = "pve_dam"),
                            (e[(e.pve_resist = 1058)] = "pve_resist"),
                            (e[(e.season_cannon_att_def = 1059)] =
                                "season_cannon_att_def"),
                            (e[(e.def_coe = 1060)] = "def_coe"),
                            (e[(e.skillbuff_time_all = 1061)] =
                                "skillbuff_time_all"),
                            (e[(e.max = 1061)] = "max");
                    })(_ || (_ = e("AttribDefine", {})));
                e(
                    "MetaAttrib",
                    (function () {
                        var e = a.prototype;
                        function a(e, t) {
                            void 0 === t && (t = null),
                                (this.config = void 0),
                                (this._baseValue = 0),
                                (this._addValue = 0),
                                (this._time = 1),
                                (this._value = 0),
                                (this._checkValue = 0),
                                (this._change = !1),
                                (this.config = e),
                                t && this.setAttribValue(t);
                        }
                        return (
                            (e._calculateValue = function (e) {
                                var t,
                                    a = i.roundInt(
                                        i.roundInt(e + this._addValue) *
                                            this._time
                                    );
                                return (
                                    0 != this.config.up_limit &&
                                        (a = Math.min(a, this.config.up_limit)),
                                    2 == this.config.num_type &&
                                        (a = i.round(a / 1e4)),
                                    (a = null != (t = a) ? t : 0)
                                );
                            }),
                            (e.addValue = function (e) {
                                (this._addValue = i.round(this._addValue + e)),
                                    (this._change = !0);
                            }),
                            (e.addMultiples = function (e) {
                                (this._time = i.round(this._time + e)),
                                    (this._change = !0);
                            }),
                            (e.setAttribValue = function (e) {
                                e &&
                                    ((this._baseValue = e._baseValue),
                                    (this._addValue = e._addValue),
                                    (this._time = e._time),
                                    (this._value = e._value),
                                    (this._checkValue = e._checkValue),
                                    (this._change = !0));
                            }),
                            (e.checkCheat = function () {
                                var e = this._calculateValue(
                                    32 ^ this._checkValue
                                );
                                return (
                                    this.value != e &&
                                    (printLogErr(
                                        "属性：",
                                        this.config.name,
                                        " 当前值:",
                                        this.value,
                                        " 老值:",
                                        e
                                    ),
                                    !0)
                                );
                            }),
                            t(a, [
                                {
                                    key: "value",
                                    get: function () {
                                        return this._change
                                            ? ((this._change = !1),
                                              (this._value =
                                                  this._calculateValue(
                                                      this._baseValue
                                                  )),
                                              this._value)
                                            : this._value;
                                    },
                                },
                                {
                                    key: "baseValue",
                                    get: function () {
                                        return this._baseValue;
                                    },
                                    set: function (e) {
                                        (this._baseValue = null != e ? e : 0),
                                            (this._baseValue = Number(e)),
                                            this._baseValue !==
                                                +this._baseValue &&
                                                (this._baseValue =
                                                    2 == this.config.num_type
                                                        ? 1e4
                                                        : 0),
                                            (this._baseValue = i.roundInt(
                                                this._baseValue
                                            )),
                                            (this._checkValue =
                                                32 ^ this._baseValue),
                                            (this._change = !0);
                                    },
                                },
                            ]),
                            a
                        );
                    })()
                );
                a._RF.pop();
            },
        };
    }
);
