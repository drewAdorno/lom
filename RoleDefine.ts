System.register("chunks:///_virtual/RoleDefine.ts", ["cc"], function (_) {
    "use strict";
    var E;
    return {
        setters: [
            function (_) {
                E = _.cclegacy;
            },
        ],
        execute: function () {
            var R, T, L;
            _({
                ClientData: void 0,
                PlayerAttr: void 0,
                RoleAttr: void 0,
                RoleRedPointSystemEnum: void 0,
            }),
                E._RF.push({}, "da7cafiSptEQrgF8g7j9tTj", "RoleDefine", void 0),
                (function (_) {
                    (_[(_.ROLE_ATTR_GOLD = 1)] = "ROLE_ATTR_GOLD"),
                        (_[(_.ROLE_ATTR_DIAMOND = 2)] = "ROLE_ATTR_DIAMOND"),
                        (_[(_.ROLE_RELIC_FRAG = 7)] = "ROLE_RELIC_FRAG"),
                        (_[(_.ROLE_NUTRIENTS = 9)] = "ROLE_NUTRIENTS"),
                        (_[(_.ROLE_BUILDING_POINT = 10)] =
                            "ROLE_BUILDING_POINT"),
                        (_[(_.ROLE_SKIN_CLIP = 11)] = "ROLE_SKIN_CLIP"),
                        (_[(_.ROLE_HONOR_SCORE = 12)] = "ROLE_HONOR_SCORE"),
                        (_[(_.ROLE_RETURN_COIN = 14)] = "ROLE_RETURN_COIN"),
                        (_[(_.ROLE_SEED_GET = 101)] = "ROLE_SEED_GET"),
                        (_[(_.ROLE_SEED_BUY = 102)] = "ROLE_SEED_BUY"),
                        (_[(_.ROLE_SEED_RARE = 103)] = "ROLE_SEED_RARE"),
                        (_[(_.ROLE_FERTILIZER_BUY = 111)] =
                            "ROLE_FERTILIZER_BUY"),
                        (_[(_.ROLE_FERTILIZER_GET = 112)] =
                            "ROLE_FERTILIZER_GET"),
                        (_[(_.ROLE_FERTILIZER_HELP = 113)] =
                            "ROLE_FERTILIZER_HELP"),
                        (_[(_.ROLE_PARKING_COIN = 201)] = "ROLE_PARKING_COIN"),
                        (_[(_.ROLE_CHANGE_POINT = 202)] = "ROLE_CHANGE_POINT"),
                        (_[(_.ROLE_CHANGE_GUILD = 203)] = "ROLE_CHANGE_GUILD"),
                        (_[(_.ROLE_MERGE_ENERGY = 400)] = "ROLE_MERGE_ENERGY"),
                        (_[(_.ROLE_FAKE_RECHARE = 999)] = "ROLE_FAKE_RECHARE"),
                        (_[(_.ROLE_ATTR_LVL = 1001)] = "ROLE_ATTR_LVL"),
                        (_[(_.ROLE_ATTR_EXP = 1002)] = "ROLE_ATTR_EXP"),
                        (_[(_.ROLE_ATTR_ID = 1003)] = "ROLE_ATTR_ID"),
                        (_[(_.ROLE_ATTR_NAME = 1004)] = "ROLE_ATTR_NAME"),
                        (_[(_.ROLE_ATTR_VIP = 1005)] = "ROLE_ATTR_VIP"),
                        (_[(_.ROLE_ATTR_SERVER = 1006)] = "ROLE_ATTR_SERVER"),
                        (_[(_.ROLE_ATTR_CUR_POWER = 1007)] =
                            "ROLE_ATTR_CUR_POWER"),
                        (_[(_.ROLE_ATTR_CUR_JOB = 1008)] = "ROLE_ATTR_CUR_JOB"),
                        (_[(_.ROLE_ATTR_JOB_TIMES = 1009)] =
                            "ROLE_ATTR_JOB_TIMES"),
                        (_[(_.ROLE_ATTR_STYLE = 1010)] = "ROLE_ATTR_STYLE"),
                        (_[(_.ROLE_ATTR_RENAME = 1011)] = "ROLE_ATTR_RENAME"),
                        (_[(_.ROLE_ATTR_GENDER = 1012)] = "ROLE_ATTR_GENDER"),
                        (_[(_.ROLE_ATTR_SKIN = 1013)] = "ROLE_ATTR_SKIN"),
                        (_[(_.ROLE_ATTR_HEAD_ID = 1014)] = "ROLE_ATTR_HEAD_ID"),
                        (_[(_.ROLE_ATTR_HEAD_FRAME_ID = 1015)] =
                            "ROLE_ATTR_HEAD_FRAME_ID"),
                        (_[(_.ROLE_ATTR_HEAD_URL = 1016)] =
                            "ROLE_ATTR_HEAD_URL"),
                        (_[(_.ROLE_ATTR_GUILD_ID = 1017)] =
                            "ROLE_ATTR_GUILD_ID"),
                        (_[(_.ROLE_ATTR_GUILD_NAME = 1018)] =
                            "ROLE_ATTR_GUILD_NAME"),
                        (_[(_.ROLE_ATTR_POWER_INFO = 1019)] =
                            "ROLE_ATTR_POWER_INFO"),
                        (_[(_.ROLE_ATTR_POWER_SHOW = 1020)] =
                            "ROLE_ATTR_POWER_SHOW"),
                        (_[(_.ROLE_ATTR_MBTI = 1021)] = "ROLE_ATTR_MBTI"),
                        (_[(_.ROLE_ATTR_FLAG = 1023)] = "ROLE_ATTR_FLAG"),
                        (_[(_.ROLE_ATTR_SLAVE_NAME = 1022)] =
                            "ROLE_ATTR_SLAVE_NAME"),
                        (_[(_.ROLE_ATTR_LOVER_NAME = 1024)] =
                            "ROLE_ATTR_LOVER_NAME"),
                        (_[(_.ROLE_ATTR_GUILD_LV = 1025)] =
                            "ROLE_ATTR_GUILD_LV"),
                        (_[(_.ROLE_ATTR_GUILD_NUM = 1026)] =
                            "ROLE_ATTR_GUILD_NUM"),
                        (_[(_.ROLE_ATTR_LOVER_ID = 1027)] =
                            "ROLE_ATTR_LOVER_ID"),
                        (_[(_.ROLE_ATTR_CREATE_DAY = 2e3)] =
                            "ROLE_ATTR_CREATE_DAY");
                })(T || (T = _("PlayerAttr", {}))),
                (function (_) {
                    (_[(_.ATT = 1001)] = "ATT"),
                        (_[(_.HP = 1002)] = "HP"),
                        (_[(_.ATT_SPEED = 1003)] = "ATT_SPEED"),
                        (_[(_.CRIT_RATE = 1004)] = "CRIT_RATE"),
                        (_[(_.CRIT_DAM = 1005)] = "CRIT_DAM"),
                        (_[(_.CRIT_DEF = 1006)] = "CRIT_DEF"),
                        (_[(_.HIT = 1007)] = "HIT"),
                        (_[(_.MISS = 1008)] = "MISS"),
                        (_[(_.SPEED = 1009)] = "SPEED"),
                        (_[(_.DETECTION_RANGE = 1010)] = "DETECTION_RANGE"),
                        (_[(_.ATT_RANGE = 1011)] = "ATT_RANGE"),
                        (_[(_.HP_RECOVERY = 1012)] = "HP_RECOVERY"),
                        (_[(_.POWER_RECOVERY = 1013)] = "POWER_RECOVERY"),
                        (_[(_.ATT_HPSTEAL = 1014)] = "ATT_HPSTEAL"),
                        (_[(_.SKILL_HPSTEAL = 1015)] = "SKILL_HPSTEAL"),
                        (_[(_.DOUBLE_HIT = 1016)] = "DOUBLE_HIT"),
                        (_[(_.COUNTER = 1017)] = "COUNTER"),
                        (_[(_.ATT_RESIST = 1018)] = "ATT_RESIST"),
                        (_[(_.SKILL_RESIST = 1019)] = "SKILL_RESIST"),
                        (_[(_.PARTNER_RESIST = 1020)] = "PARTNER_RESIST"),
                        (_[(_.RESIST = 1021)] = "RESIST"),
                        (_[(_.SUSPEND = 1022)] = "SUSPEND"),
                        (_[(_.VERTIGO = 1023)] = "VERTIGO"),
                        (_[(_.DEF = 1024)] = "DEF"),
                        (_[(_.SUSPEND_DEF = 1025)] = "SUSPEND_DEF"),
                        (_[(_.VERTIGO_DEF = 1026)] = "VERTIGO_DEF"),
                        (_[(_.ATT_HPSTEAL_DEF = 1027)] = "ATT_HPSTEAL_DEF"),
                        (_[(_.SKILL_HPSTEAL_DEF = 1028)] = "SKILL_HPSTEAL_DEF"),
                        (_[(_.TARGET_NUM = 1029)] = "TARGET_NUM");
                })(L || (L = _("RoleAttr", {})));
            var A;
            _("RoleEventDefine", {
                ROLE_ATTR_UPDATE: "ROLE_ATTR_UPDATE",
                ROLE_RES_UPDATE: "ROLE_RES_UPDATE",
                ROLE_INFO_UPDATE: "ROLE_INFO_UPDATE",
                ROLE_INFO_UPDATE_HEADURL: "ROLE_INFO_UPDATE_HEADURL",
                ROLE_ATTR_LIST_UPDATE: "ROLE_ATTR_LIST_UPDATE",
                ROLE_ATTR_POWER: "ROLE_ATTR_POWER",
                ROLE_OPEN_FUNCTION_UPDATE: "ROLE_OPEN_FUNCTION_UPDATE",
                ROLE_RENAME: "ROLE_RENAME",
                ROLE_SETTING_VALUE: "ROLE_SETTING_VALUE",
                ROLE_SKIN_LIST: "ROLE_SKIN_LIST",
                ROLE_SKIN_CHANGE: "ROLE_SKIN_CHANGE",
                ROLE_ATTR_LIST_UPDATE_VIRTUAL: "ROLE_ATTR_LIST_UPDATE_VIRTUAL",
                ROLE_ATTR_LIST_UPDATE_COMPARE: "ROLE_ATTR_LIST_UPDATE_COMPARE",
                ROLE_INFO_INIT: "ROLE_INFO_INIT",
                ROLE_PREVIEW_UPDATE: "ROLE_PREVIEW_UPDATE",
                ROLE_MONET_UPDATE: "ROLE_MONET_UPDATE",
                ROLE_GOODS_REFRESH_UPDATE: "ROLE_GOODS_REFRESH_UPDATE",
                ROLE_ATTR_POWER_INFO: "ROLE_ATTR_POWER_INFO",
                ROLE_RED_POINT_LIST_UPDATE: "ROLE_RED_POINT_LIST_UPDATE",
                ROLE_RED_DETAIL_UPDATE: "ROLE_RED_DETAIL_UPDATE",
                ROLE_Menu_Red: "ROLE_Menu_Red",
                HIDE_LIST_UPDATE: "HIDE_LIST_UPDATE",
                ROLE_SKIN_LEVEL_UP: "ROLE_SKIN_LEVEL_UP",
                Awake_Info_Update: "Awake_Info_Update",
                ROLE_CLIENT_DATA: "ROLE_CLIENT_DATA",
                PLAN_INFO_BACK: "PLAN_INFO_BACK",
                PLAN_SELECT_CHANGE: "PLAN_SELECT_CHANGE",
                PLAN_NAME_CHANGE: "PLAN_NAME_CHANGE",
                PLAN_INFO_UPDATE: "PLAN_INFO_UPDATE",
                PLAN_JUMP_SET_INDEX: "PLAN_JUMP_SET_INDEX",
                PLAN_PRESET_UPDATE: "PLAN_PRESET_UPDATE",
                PLAN_PRESET_CLICK: "PLAN_PRESET_CLICK",
                PLAN_HORSE_SKIN_EFFECT_SEL: "PLAN_HORSE_SKIN_EFFECT_SEL",
                PLAN_ARTIFACT_SKIN_EFFECT_SEL: "PLAN_ARTIFACT_SKIN_EFFECT_SEL",
                PLAN_WING_SKIN_EFFECT_SEL: "PLAN_WING_SKIN_EFFECT_SEL",
                ROLE_REGENDER: "ROLE_REGENDER",
            }),
                _("RolePreviewState", { NotFinish: 0, Reward: 1, Finish: 2 });
            !(function (_) {
                (_[(_.All = 0)] = "All"),
                    (_[(_.Guide = 1)] = "Guide"),
                    (_[(_.Battle = 2)] = "Battle"),
                    (_[(_.Equip = 3)] = "Equip"),
                    (_[(_.WXUSERINFO = 4)] = "WXUSERINFO"),
                    (_[(_.GmChat = 5)] = "GmChat"),
                    (_[(_.GmChatTime = 6)] = "GmChatTime"),
                    (_[(_.VipBtnRed = 7)] = "VipBtnRed"),
                    (_[(_.ActivityStrategyRed = 8)] = "ActivityStrategyRed"),
                    (_[(_.CustomeHeadCheckRed = 9)] = "CustomeHeadCheckRed");
            })(A || (A = _("ClientData", {})));
            var O;
            _("NeedClearData", (((R = {})[A.CustomeHeadCheckRed] = !0), R));
            !(function (_) {
                (_[(_.System_Farm = 10400)] = "System_Farm"),
                    (_[(_.System_Guild = 101200)] = "System_Guild"),
                    (_[(_.System_Parking = 16e3)] = "System_Parking"),
                    (_[(_.Qixi_Record = 10600)] = "Qixi_Record"),
                    (_[(_.System_Slave = 17e3)] = "System_Slave"),
                    (_[(_.System_Season = 101300)] = "System_Season");
            })(O || (O = _("RoleRedPointSystemEnum", {}))),
                E._RF.pop();
        },
    };
});
