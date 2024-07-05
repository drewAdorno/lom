System.register(
    "chunks:///_virtual/FlyPetTeamView.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIList.ts",
        "./RedPointMgr.ts",
        "./NodeUtil.ts",
        "./StringUtil.ts",
        "./TimeUtil.ts",
        "./index57.ts",
        "./ItemIcon.ts",
        "./ConfigGlobal.ts",
        "./ChatDefine.ts",
        "./MessageView.ts",
        "./FrameDataCache.ts",
        "./PrivilegeDataCache.ts",
        "./RoleDataCache.ts",
        "./RoleDefine.ts",
        "./FlyPetControl.ts",
        "./FlyPetDataCache.ts",
        "./FlyPetDefine.ts",
        "./BaseSubView.ts",
    ],
    function (t) {
        "use strict";
        var e,
            i,
            n,
            s,
            o,
            l,
            a,
            h,
            _,
            d,
            c,
            r,
            f,
            p,
            v,
            m,
            u,
            C,
            g,
            y,
            I,
            S,
            k,
            w,
            L,
            b,
            T,
            F,
            G,
            B;
        return {
            setters: [
                function (t) {
                    e = t.inheritsLoose;
                },
                function (t) {
                    (i = t.cclegacy),
                        (n = t.Button),
                        (s = t.Vec2),
                        (o = t.Sprite),
                        (l = t.Label),
                        (a = t.ProgressBar),
                        (h = t.Node),
                        (_ = t.UITransform),
                        (d = t.Size),
                        (c = t.ScrollView),
                        (r = t.js);
                },
                function (t) {
                    f = t.ListItem;
                },
                function (t) {
                    p = t.RedPointMgr;
                },
                function (t) {
                    v = t.default;
                },
                function (t) {
                    m = t.default;
                },
                function (t) {
                    u = t.default;
                },
                null,
                function (t) {
                    C = t.IconAseetType;
                },
                function (t) {
                    g = t.ConfigGlobal;
                },
                function (t) {
                    y = t.ChatDefine;
                },
                function (t) {
                    I = t.default;
                },
                function (t) {
                    S = t.FrameDataCache;
                },
                function (t) {
                    k = t.PrivilegeDataCache;
                },
                function (t) {
                    w = t.RoleDataCache;
                },
                function (t) {
                    L = t.PlayerAttr;
                },
                function (t) {
                    b = t.default;
                },
                function (t) {
                    T = t.default;
                },
                function (t) {
                    (F = t.FlyPetQualityRes), (G = t.FlyPetEventDefine);
                },
                function (t) {
                    B = t.BaseSubView;
                },
            ],
            execute: function () {
                i._RF.push(
                    {},
                    "80ef9bDWLlCKqidNtmm9O2o",
                    "FlyPetTeamView",
                    void 0
                );
                t(
                    "default",
                    (function (t) {
                        function i() {
                            var e;
                            return (
                                ((e = t.call(this) || this).pet_frame = void 0),
                                (e.pet_icon = void 0),
                                (e.pet_name = void 0),
                                (e.pet_lv = void 0),
                                (e.pet_age = void 0),
                                (e.pet_use_num = void 0),
                                (e.pet_quality = void 0),
                                (e.quality_list = {}),
                                (e.pet_grow = void 0),
                                (e.pet_grow_lab = void 0),
                                (e.state_can = void 0),
                                (e.state_recommend = void 0),
                                (e.state_down = void 0),
                                (e.state_cancel = void 0),
                                (e.state_wait = void 0),
                                (e.pet_state_1 = void 0),
                                (e.pet_state_2 = void 0),
                                (e.pet_state_3 = void 0),
                                (e.pet_state_4 = void 0),
                                (e.pet_state_2_time = void 0),
                                (e.pet_state_2_slider = void 0),
                                (e.pet_state_4_time = void 0),
                                (e.pet_state_4_slider = void 0),
                                (e.pet_skill_frame = void 0),
                                (e.pet_skill_icon = void 0),
                                (e.pet_skill_name = void 0),
                                (e.pet_skill_desc = void 0),
                                (e.beskill_list = void 0),
                                (e.pet_skill_cd = void 0),
                                (e.pet_list = void 0),
                                (e.role_list = void 0),
                                (e.role_num = void 0),
                                (e.btnSetting = void 0),
                                (e.select_pet = 0),
                                (e.select_role = 0),
                                (e.select_pet_info = void 0),
                                (e.starBtn = void 0),
                                (e.starBtnSelect = void 0),
                                (e.lockNode = void 0),
                                (e.lock_icon = void 0),
                                (e.unlock_icon = void 0),
                                (e.add_time = 0),
                                (e.is_show_time = 0),
                                (e.empty = void 0),
                                (e.notice = void 0),
                                (e.nodeSkill = void 0),
                                (e.nodeChange = void 0),
                                (e.all_pet_list = void 0),
                                (e.select_opt = 0),
                                (e.name = "FlyPetTeamView"),
                                (e.url = "ui/module/flypet/FlyPetTeamView"),
                                e
                            );
                        }
                        e(i, t);
                        var f = i.prototype;
                        return (
                            (f.onInit = function () {
                                var t,
                                    e = this,
                                    i = this.findChild("root/title/tips");
                                this.addComponentCallbackListener(
                                    i,
                                    n.EventType.CLICK,
                                    function () {
                                        uiMgr.openView("ParkingRuleTips", [
                                            205217,
                                        ]);
                                    }
                                );
                                var r = this.findChild("root/title/showBtn");
                                IS(p).addRedPoint(
                                    "TaskFlyPetRed",
                                    r,
                                    new s(30, 30)
                                ),
                                    this.addComponentCallbackListener(
                                        r,
                                        n.EventType.CLICK,
                                        function () {
                                            uiMgr.openView(
                                                "FlyPetAchievementView"
                                            );
                                        }
                                    ),
                                    (this.empty = this.findChild("root/empty")),
                                    (this.notice =
                                        this.findChild("root/notice")),
                                    (this.nodeSkill =
                                        this.findChild("root/nodeSkill")),
                                    (this.nodeChange =
                                        this.findChild("root/nodeChange")),
                                    (this.pet_frame = this.findChildComponent(
                                        "root/notice/head/frame",
                                        o
                                    )),
                                    (this.pet_icon = this.findChildComponent(
                                        "root/notice/head/icon",
                                        o
                                    )),
                                    (this.pet_name = this.findChildComponent(
                                        "root/notice/txtName",
                                        l
                                    )),
                                    (this.pet_lv = this.findChildComponent(
                                        "root/notice/txtLv",
                                        l
                                    )),
                                    (this.pet_age = this.findChildComponent(
                                        "root/notice/txtAge",
                                        l
                                    )),
                                    (this.pet_use_num = this.findChildComponent(
                                        "root/notice/useNode/num",
                                        l
                                    ));
                                var f = this.findChild("root/notice/btnRight");
                                this.addComponentCallbackListener(
                                    f,
                                    n.EventType.CLICK,
                                    function () {
                                        e.select_role &&
                                            0 != e.select_role &&
                                            e.SelectPet(e.GetRightItem());
                                    }
                                );
                                var u = this.findChild("root/notice/btnLeft");
                                this.addComponentCallbackListener(
                                    u,
                                    n.EventType.CLICK,
                                    function () {
                                        e.select_role &&
                                            0 != e.select_role &&
                                            e.SelectPet(e.GetLeftItem());
                                    }
                                );
                                var C = this.findChild(
                                    "root/notice/useNode/tips"
                                );
                                this.addComponentCallbackListener(
                                    C,
                                    n.EventType.CLICK,
                                    function () {
                                        var t = 0;
                                        if (
                                            e.select_role == IS(w).GetRoleId()
                                        ) {
                                            var i = IS(T).GetHaveUseItemById(
                                                e.select_pet
                                            );
                                            i && (t = i.other_times);
                                        } else {
                                            var n;
                                            t =
                                                null !=
                                                (n =
                                                    e.select_pet_info
                                                        .other_times)
                                                    ? n
                                                    : 0;
                                        }
                                        for (
                                            var s,
                                                o = IS(T).GetUseCDCfg(t, 1),
                                                l = configFly.getDataByKey(
                                                    e.select_pet_info.info
                                                        .config_id
                                                ),
                                                a = 0;
                                            a < o.cd.length;
                                            a++
                                        )
                                            o.cd[a][0] == l.quality &&
                                                (s = o.cd[a]);
                                        var h = 1;
                                        IS(k).checkPrivilegeCardHasBuy(6) &&
                                            (h =
                                                1 -
                                                configPrivilege_card.getDataByKey(
                                                    6006
                                                ).value[2] /
                                                    1e4);
                                        var _ = Math.floor((s[1] * h) / 3600),
                                            d = Math.ceil(
                                                (s[1] * h - 3600 * _) / 60
                                            );
                                        uiMgr.openView(
                                            "JobSkillTipsView",
                                            m.formatStrWithMirrorDeal(
                                                GetLanguage(205154),
                                                t,
                                                _,
                                                d
                                            ),
                                            C
                                        );
                                    }
                                ),
                                    (this.starBtn = this.findChildComponent(
                                        "root/notice/star",
                                        o
                                    )),
                                    (this.starBtnSelect = this.findChild(
                                        "root/notice/star/select"
                                    )),
                                    this.addComponentCallbackListener(
                                        this.starBtn.node,
                                        n.EventType.CLICK,
                                        function () {
                                            var t = e.select_role,
                                                i = 0;
                                            0 == e.select_opt && (i = 1),
                                                (e.select_opt = i),
                                                IS(b).send_66_33(
                                                    t,
                                                    e.select_pet,
                                                    i
                                                );
                                        }
                                    ),
                                    (this.lockNode =
                                        this.findChild("root/notice/lock")),
                                    this.addComponentCallbackListener(
                                        this.lockNode,
                                        n.EventType.CLICK,
                                        function () {
                                            if (
                                                e.select_role ==
                                                IS(w).GetRoleId()
                                            ) {
                                                var t = 0;
                                                e.lock_icon.active || (t = 1),
                                                    (e.lock_icon.active =
                                                        1 == t),
                                                    (e.unlock_icon.active =
                                                        0 == t),
                                                    1 == t &&
                                                        I.showFlyTip(
                                                            GetLanguage(205234)
                                                        ),
                                                    IS(b).send_66_23(
                                                        e.select_pet,
                                                        2,
                                                        t
                                                    );
                                            }
                                        }
                                    ),
                                    (this.lock_icon = this.findChild(
                                        "root/notice/lock/lock"
                                    )),
                                    (this.unlock_icon = this.findChild(
                                        "root/notice/lock/unlock"
                                    ));
                                for (
                                    var g =
                                            (((t = {})[1] = 205054),
                                            (t[2] = 205055),
                                            (t[3] = 205056),
                                            t),
                                        S = 1;
                                    S <= 3;
                                    S++
                                ) {
                                    var L = this.findChild(
                                            "root/notice/quality/quality" + S
                                        ),
                                        F = v.findChildComponent(
                                            L,
                                            "txtQuality",
                                            l
                                        );
                                    (F.string = GetLanguage(g[S])),
                                        (this.quality_list[S] = {
                                            node: L,
                                            name: F,
                                        });
                                }
                                (this.pet_grow =
                                    this.findChild("root/notice/grow")),
                                    (this.pet_grow_lab =
                                        this.findChildComponent(
                                            "root/notice/grow/txtAttrBase",
                                            l
                                        )),
                                    (this.state_can = this.findChild(
                                        "root/notice/pet_state/canUse"
                                    )),
                                    (this.state_down = this.findChild(
                                        "root/notice/pet_state/btnDown"
                                    )),
                                    this.addComponentCallbackListener(
                                        this.state_down,
                                        n.EventType.CLICK,
                                        function () {
                                            var t = GetLanguage(205239);
                                            I.showBoxTip({
                                                tip: t,
                                                title: GetLanguage(200048),
                                                func: function (t) {
                                                    if ("type_yes" == t) {
                                                        var i = 0;
                                                        e.lock_icon.active &&
                                                            (i = 1),
                                                            IS(b).send_66_23(
                                                                e.select_pet,
                                                                1,
                                                                i
                                                            );
                                                    }
                                                },
                                            });
                                        }
                                    ),
                                    (this.state_recommend = this.findChild(
                                        "root/notice/pet_state/btnUse"
                                    )),
                                    this.addComponentCallbackListener(
                                        this.state_recommend,
                                        n.EventType.CLICK,
                                        function () {
                                            uiMgr.openView(
                                                "ChatView",
                                                y.ViewType.Private,
                                                e.select_role,
                                                {
                                                    contentType:
                                                        y.ChatContentType.Share,
                                                    role_id: e.select_role,
                                                    linkType:
                                                        y.ChatLinkType
                                                            .FlyPetPetUse,
                                                    cacheData: {
                                                        pet_share_type: 1,
                                                        pet_id: e.select_pet,
                                                        pet_cfg_id:
                                                            e.select_pet_info
                                                                .info.config_id,
                                                    },
                                                    showString:
                                                        GetLanguage(205183),
                                                }
                                            );
                                        }
                                    ),
                                    (this.state_cancel = this.findChild(
                                        "root/notice/pet_state/btnNo"
                                    )),
                                    (this.state_wait = this.findChild(
                                        "root/notice/pet_state/btnWait"
                                    )),
                                    (this.pet_state_1 = this.findChild(
                                        "root/notice/state/state1"
                                    )),
                                    (this.pet_state_2 = this.findChild(
                                        "root/notice/state/state2"
                                    )),
                                    (this.pet_state_3 = this.findChild(
                                        "root/notice/state/state3"
                                    )),
                                    (this.pet_state_4 = this.findChild(
                                        "root/notice/state/state4"
                                    )),
                                    (this.pet_state_2_time =
                                        this.findChildComponent(
                                            "root/notice/state/state2/normal/time",
                                            l
                                        )),
                                    (this.pet_state_2_slider =
                                        this.findChildComponent(
                                            "root/notice/state/state2/normal/hp",
                                            a
                                        )),
                                    (this.pet_state_4_time =
                                        this.findChildComponent(
                                            "root/notice/state/state4/normal/time",
                                            l
                                        )),
                                    (this.pet_state_4_slider =
                                        this.findChildComponent(
                                            "root/notice/state/state4/normal/hp",
                                            a
                                        )),
                                    (this.pet_skill_frame =
                                        this.findChildComponent(
                                            "root/nodeSkill/Frame",
                                            o
                                        )),
                                    (this.pet_skill_icon =
                                        this.findChildComponent(
                                            "root/nodeSkill/Icon",
                                            o
                                        )),
                                    (this.pet_skill_name =
                                        this.findChildComponent(
                                            "root/nodeSkill/txtName",
                                            l
                                        )),
                                    (this.pet_skill_desc =
                                        this.findChildComponent(
                                            "root/nodeSkill/ScrollView/view/content/item",
                                            l
                                        )),
                                    this.pet_skill_desc.node.on(
                                        h.EventType.SIZE_CHANGED,
                                        function () {
                                            var t = e.findChildComponent(
                                                    "root/nodeSkill/ScrollView/view/content",
                                                    _
                                                ),
                                                i = e.findChildComponent(
                                                    "root/nodeSkill/ScrollView/view/content/item",
                                                    _
                                                );
                                            t.contentSize = new d(
                                                t.contentSize.x,
                                                i.height + 10
                                            );
                                        }
                                    ),
                                    (this.pet_skill_cd =
                                        this.findChildComponent(
                                            "root/nodeSkill/cd/cd",
                                            l
                                        ));
                                var G = this.findChildComponent(
                                    "root/nodeChange/ScrollView",
                                    c
                                );
                                this.beskill_list = this.addUIList(G, D);
                                var B = this.findChildComponent(
                                    "root/ScrollView",
                                    c
                                );
                                this.pet_list = this.addUIList(B, P);
                                var x = this.findChildComponent(
                                    "root/bottom/ScrollView",
                                    c
                                );
                                (this.role_list = this.addUIList(x, R)),
                                    (this.role_num = this.findChildComponent(
                                        "root/bottom/txtNum",
                                        l
                                    )),
                                    (this.btnSetting = this.findChild(
                                        "root/bottom/btnSetting"
                                    )),
                                    this.addComponentCallbackListener(
                                        this.btnSetting,
                                        n.EventType.CLICK,
                                        function () {
                                            uiMgr.openView("FlyPetSettingView");
                                        }
                                    );
                                var q = this.findChild("root/bottom/btnUse");
                                this.addComponentCallbackListener(
                                    q,
                                    n.EventType.CLICK,
                                    function () {
                                        uiMgr.openView(
                                            "ChatView",
                                            y.ViewType.Private,
                                            null,
                                            {
                                                contentType:
                                                    y.ChatContentType.Share,
                                                linkType:
                                                    y.ChatLinkType
                                                        .FlyPetRoleUse,
                                                cacheData: {
                                                    pet_share_type: 0,
                                                    pet_id: 0,
                                                },
                                                showString: GetLanguage(205184),
                                            }
                                        );
                                    }
                                );
                            }),
                            (f.updateEmpty = function () {
                                (this.empty.active =
                                    !this.select_pet || 0 == this.select_pet),
                                    (this.notice.active =
                                        this.select_pet &&
                                        0 != this.select_pet),
                                    (this.nodeChange.active =
                                        this.select_pet &&
                                        0 != this.select_pet),
                                    (this.nodeSkill.active =
                                        this.select_pet &&
                                        0 != this.select_pet);
                            }),
                            (f.onUpdate = function (t) {
                                if (
                                    ((this.add_time += t),
                                    this.add_time >= 1 &&
                                        (this.add_time--,
                                        this.is_show_time > 0))
                                ) {
                                    var e = Math.max(
                                        0,
                                        this.is_show_time - u.serverTime
                                    );
                                    (this.pet_state_2_time.string =
                                        u.formatTimeForSecond(e)),
                                        (this.pet_state_2_slider.progress =
                                            Math.min(
                                                1,
                                                u.serverTime / this.is_show_time
                                            )),
                                        (this.pet_state_4_time.string =
                                            u.formatTimeForSecond(e)),
                                        (this.pet_state_4_slider.progress =
                                            Math.min(
                                                1,
                                                u.serverTime / this.is_show_time
                                            ));
                                }
                            }),
                            (f.GetRightItem = function () {
                                if (
                                    !(
                                        null == this.all_pet_list ||
                                        this.all_pet_list.length <= 0
                                    )
                                ) {
                                    if (
                                        null == this.select_pet ||
                                        0 == this.select_pet
                                    )
                                        return this.all_pet_list[0];
                                    for (
                                        var t = 0, e = 0;
                                        e < this.all_pet_list.length;
                                        e++
                                    )
                                        if (
                                            this.all_pet_list[e].info.id ==
                                            this.select_pet
                                        ) {
                                            t = e;
                                            break;
                                        }
                                    return (
                                        ++t >= this.all_pet_list.length &&
                                            (t = 0),
                                        null == this.all_pet_list[t].info &&
                                            (t = 0),
                                        this.all_pet_list[t]
                                    );
                                }
                            }),
                            (f.GetLeftItem = function () {
                                if (
                                    !(
                                        null == this.all_pet_list ||
                                        this.all_pet_list.length <= 0
                                    )
                                ) {
                                    if (
                                        null == this.select_pet ||
                                        0 == this.select_pet
                                    )
                                        return this.all_pet_list[0];
                                    for (
                                        var t = 0, e = 0;
                                        e < this.all_pet_list.length;
                                        e++
                                    )
                                        if (
                                            this.all_pet_list[e].info.id ==
                                            this.select_pet
                                        ) {
                                            t = e;
                                            break;
                                        }
                                    if (
                                        (--t < 0 &&
                                            (t = this.all_pet_list.length - 1),
                                        this.select_role == IS(w).GetRoleId())
                                    ) {
                                        var i = IS(T).GetHybridUsePetList(),
                                            n = 0;
                                        for (var s in i) i[s] && n++;
                                        null == this.all_pet_list[t].info &&
                                            (t = Math.max(0, n - 1));
                                    }
                                    return this.all_pet_list[t];
                                }
                            }),
                            (f.updateEntry = function (t) {
                                var e,
                                    i = null != t ? t : [],
                                    n =
                                        (((e = {})[3] = 1),
                                        (e[2] = 2),
                                        (e[5] = 3),
                                        (e[1] = 4),
                                        (e[4] = 5),
                                        (e[6] = 6),
                                        e);
                                i.sort(function (t, e) {
                                    var i = configFly_entry.getDataByKeys(
                                            "id",
                                            t.k,
                                            "level",
                                            t.v
                                        ),
                                        s = configFly_entry.getDataByKeys(
                                            "id",
                                            e.k,
                                            "level",
                                            e.v
                                        );
                                    return i.quality == s.quality
                                        ? t.id - e.id
                                        : n[i.quality] - n[s.quality];
                                }),
                                    (this.beskill_list.datas = i);
                            }),
                            (f.updateSkill = function (t) {
                                var e = null != t ? t : [];
                                if (!(e.length <= 0)) {
                                    var i = e[0][0],
                                        n = configSkill.getDataByKey(i),
                                        s = configSkill_level.getDataByKeys(
                                            "id",
                                            i,
                                            "level",
                                            e[0][1]
                                        );
                                    this.loadIcon(
                                        this.pet_skill_frame,
                                        "icon_skill",
                                        r.formatStr(
                                            "common_ICON_jinengkuang0%s",
                                            n.quality
                                        )
                                    ),
                                        this.loadIcon(
                                            this.pet_skill_icon,
                                            "icon_skill",
                                            n.icon,
                                            null,
                                            C.ICON_SPRITE
                                        ),
                                        (this.pet_skill_name.string = n.name),
                                        (this.pet_skill_desc.string =
                                            m.formatStr.apply(
                                                m,
                                                [s.desc].concat(s.desc_parm)
                                            ));
                                }
                            }),
                            (f.onMaskClick = function () {
                                this.close();
                            }),
                            (f.updatePetInfo = function () {
                                var t = configFly.getDataByKey(
                                    this.select_pet_info.info.config_id
                                );
                                (this.pet_name.string = t.name),
                                    1 ==
                                        IS(T).GetIsBianYi(
                                            this.select_pet_info.info.entry_list
                                        ) &&
                                        (this.pet_name.string =
                                            m.formatStrWithMirrorDeal(
                                                GetLanguage(205206),
                                                t.name
                                            )),
                                    "" != this.select_pet_info.info.name &&
                                        (this.pet_name.string =
                                            this.select_pet_info.info.name),
                                    (this.pet_lv.string =
                                        "Lv." +
                                        this.select_pet_info.info.level),
                                    this.loadIcon(
                                        this.pet_frame,
                                        "icon_equip",
                                        F[t.quality]
                                    ),
                                    this.loadIcon(
                                        this.pet_icon,
                                        "icon_flypet",
                                        t.icon
                                    ),
                                    (this.pet_age.string =
                                        m.formatStrWithMirrorDeal(
                                            GetLanguage(205240),
                                            this.select_pet_info.info.generation
                                        ));
                                var e = 0;
                                if (this.select_role == IS(w).GetRoleId()) {
                                    var i = IS(T).GetHaveUseItemById(
                                        this.select_pet
                                    );
                                    i && (e = i.other_times);
                                } else {
                                    var n;
                                    e =
                                        null !=
                                        (n = this.select_pet_info.other_times)
                                            ? n
                                            : 0;
                                }
                                this.pet_use_num.string = e + "";
                                for (var s = 1; s <= 3; s++)
                                    s == t.quality
                                        ? (this.quality_list[s].node.active =
                                              !0)
                                        : (this.quality_list[s].node.active =
                                              !1);
                                this.pet_grow_lab.string =
                                    this.select_pet_info.info.growth / 1e4 + "";
                                var o = configFly_advance.getDataByKeys(
                                    "id",
                                    this.select_pet_info.info.config_id,
                                    "advance_level",
                                    this.select_pet_info.info.step
                                );
                                (this.lock_icon.active =
                                    1 == this.select_pet_info.is_save),
                                    (this.unlock_icon.active =
                                        0 == this.select_pet_info.is_save),
                                    this.updateSkill(o.fly_skill),
                                    this.updateEntry(
                                        this.select_pet_info.info.entry_list
                                    ),
                                    (this.state_can.active = !1),
                                    (this.state_down.active = !1),
                                    (this.state_recommend.active = !1),
                                    (this.state_wait.active = !1),
                                    (this.state_cancel.active = !1),
                                    (this.pet_state_1.active = !1),
                                    (this.pet_state_2.active = !1),
                                    (this.pet_state_4.active = !1);
                                var l = IS(w).GetRoleId();
                                if (this.select_role == l)
                                    (this.state_down.active = !0),
                                        1 == this.select_pet_info.state
                                            ? ((this.pet_state_2.active = !0),
                                              (this.is_show_time =
                                                  this.select_pet_info.end_time),
                                              (this.pet_state_2_time.string =
                                                  u.formatTimeForSecond(
                                                      this.is_show_time -
                                                          u.serverTime
                                                  )),
                                              (this.pet_state_2_slider.progress =
                                                  Math.min(
                                                      1,
                                                      u.serverTime /
                                                          this.is_show_time
                                                  )))
                                            : 2 == this.select_pet_info.state &&
                                              ((this.pet_state_4.active = !0),
                                              (this.is_show_time =
                                                  this.select_pet_info.end_time),
                                              (this.pet_state_4_time.string =
                                                  u.formatTimeForSecond(
                                                      this.is_show_time -
                                                          u.serverTime
                                                  )),
                                              (this.pet_state_4_slider.progress =
                                                  Math.min(
                                                      1,
                                                      u.serverTime /
                                                          this.is_show_time
                                                  )));
                                else if (0 == this.select_pet_info.state)
                                    if (
                                        ((this.pet_state_1.active = !0),
                                        0 == this.select_pet_info.is_save)
                                    )
                                        this.state_can.active = !0;
                                    else {
                                        var a,
                                            h,
                                            _,
                                            d =
                                                null !=
                                                (a =
                                                    this.select_pet_info
                                                        .use_role)
                                                    ? a
                                                    : 0,
                                            c =
                                                null !=
                                                (h =
                                                    this.select_pet_info
                                                        .can_list)
                                                    ? h
                                                    : [],
                                            r =
                                                null !=
                                                (_ =
                                                    this.select_pet_info
                                                        .ask_list)
                                                    ? _
                                                    : [],
                                            f = c.find(function (t) {
                                                return t == l;
                                            }),
                                            p = d == l,
                                            v = r.find(function (t) {
                                                return t.k == l;
                                            });
                                        (this.state_cancel.active =
                                            !f && v && !p),
                                            (this.state_recommend.active =
                                                !f && !v && !p),
                                            (this.state_can.active = f);
                                    }
                                else if (1 == this.select_pet_info.state) {
                                    (this.pet_state_2.active = !0),
                                        (this.is_show_time =
                                            this.select_pet_info.end_time);
                                    var C = Math.max(
                                        0,
                                        this.is_show_time - u.serverTime
                                    );
                                    (this.pet_state_2_time.string =
                                        u.formatTimeForSecond(C)),
                                        (this.pet_state_2_slider.progress =
                                            Math.min(
                                                1,
                                                u.serverTime / this.is_show_time
                                            ));
                                } else if (2 == this.select_pet_info.state) {
                                    (this.pet_state_4.active = !0),
                                        (this.is_show_time =
                                            this.select_pet_info.end_time);
                                    var g = Math.max(
                                        0,
                                        this.is_show_time - u.serverTime
                                    );
                                    (this.pet_state_4_time.string =
                                        u.formatTimeForSecond(g)),
                                        (this.pet_state_4_slider.progress =
                                            Math.min(
                                                1,
                                                u.serverTime / this.is_show_time
                                            ));
                                }
                            }),
                            (f.updateMeInfo = function () {
                                var t = [],
                                    e = g.fly_borrow_num,
                                    i = IS(T).GetHybridUsePetList(),
                                    n = !1;
                                for (var s in i)
                                    i[s] &&
                                        (t.push(i[s]),
                                        this.select_pet_info &&
                                            this.select_pet_info.info.id ==
                                                i[s].info.id &&
                                            (n = !0));
                                this.select_role != IS(w).GetRoleId() ||
                                    n ||
                                    ((this.select_pet = 0),
                                    (this.select_pet_info = null),
                                    this.updateEmpty()),
                                    t.sort(function (t, e) {
                                        var i = configFly.getDataByKey(
                                                t.info.config_id
                                            ),
                                            n = configFly.getDataByKey(
                                                e.info.config_id
                                            );
                                        return t.info.level != e.info.level
                                            ? e.info.level - t.info.level
                                            : t.info.step != e.info.step
                                            ? e.info.step - t.info.step
                                            : i.quality != n.quality
                                            ? n.quality - i.quality
                                            : t.info.config_id -
                                              e.info.config_id;
                                    });
                                for (var o = t.length; o < e; o++)
                                    t.push({ info: null, state: 0 });
                                (this.all_pet_list = t),
                                    (this.pet_list.datas = t),
                                    t.length > 0 &&
                                        0 == this.select_pet &&
                                        null != t[0].info &&
                                        this.SelectPet(t[0]);
                            }),
                            (f.updateInfo = function (t) {
                                var e;
                                if (this.select_role != IS(w).GetRoleId()) {
                                    var i = null != (e = t.list) ? e : [];
                                    i.sort(function (t, e) {
                                        var i = configFly.getDataByKey(
                                                t.info.config_id
                                            ),
                                            n = configFly.getDataByKey(
                                                e.info.config_id
                                            ),
                                            s = IS(T).GetExtByKey(t.info, 1),
                                            o = IS(T).GetExtByKey(e.info, 1);
                                        return s != o
                                            ? o - s
                                            : t.info.level != e.info.level
                                            ? e.info.level - t.info.level
                                            : t.info.step != e.info.step
                                            ? e.info.step - t.info.step
                                            : i.quality != n.quality
                                            ? n.quality - i.quality
                                            : t.info.config_id -
                                              e.info.config_id;
                                    }),
                                        (this.all_pet_list = i),
                                        (this.pet_list.datas = i),
                                        i.length > 0 &&
                                            0 == this.select_pet &&
                                            this.SelectPet(i[0]);
                                }
                            }),
                            (f.SelectPet = function (t) {
                                t &&
                                    ((this.select_pet = t.info.id),
                                    (this.select_pet_info = t),
                                    this.pet_list.updateAll(),
                                    (this.select_opt = IS(T).GetExtByKey(
                                        t.info,
                                        1
                                    )),
                                    (this.starBtnSelect.active =
                                        1 == this.select_opt),
                                    this.updatePetInfo(),
                                    this.updateEmpty());
                            }),
                            (f.UpdateStar = function (t) {
                                if (t.target_id == this.select_role) {
                                    for (
                                        var e = 0;
                                        e < this.all_pet_list.length;
                                        e++
                                    )
                                        if (
                                            this.all_pet_list[e] &&
                                            this.all_pet_list[e].info.id ==
                                                t.pet_id
                                        ) {
                                            var i,
                                                n =
                                                    null !=
                                                    (i =
                                                        this.all_pet_list[e]
                                                            .info.ext)
                                                        ? i
                                                        : [],
                                                s = !1;
                                            for (var o in n)
                                                if (1 == n[o].k) {
                                                    var l;
                                                    (n[o].v =
                                                        null != (l = t.opt)
                                                            ? l
                                                            : 0),
                                                        (s = !0);
                                                    break;
                                                }
                                            s || n.push({ k: 1, v: t.opt }),
                                                (this.all_pet_list[e].info.ext =
                                                    n);
                                        }
                                    this.all_pet_list.sort(function (t, e) {
                                        var i = configFly.getDataByKey(
                                                t.info.config_id
                                            ),
                                            n = configFly.getDataByKey(
                                                e.info.config_id
                                            ),
                                            s = IS(T).GetExtByKey(t.info, 1),
                                            o = IS(T).GetExtByKey(e.info, 1);
                                        return s != o
                                            ? o - s
                                            : t.info.level != e.info.level
                                            ? e.info.level - t.info.level
                                            : t.info.step != e.info.step
                                            ? e.info.step - t.info.step
                                            : i.quality != n.quality
                                            ? n.quality - i.quality
                                            : t.info.config_id -
                                              e.info.config_id;
                                    }),
                                        (this.pet_list.datas =
                                            this.all_pet_list),
                                        (this.starBtnSelect.active =
                                            1 == this.select_opt);
                                }
                            }),
                            (f.SelectRole = function (t) {
                                this.select_role != t &&
                                    ((this.select_role = t),
                                    (this.select_pet = 0),
                                    (this.select_pet_info = null),
                                    this.select_role == IS(w).GetRoleId()
                                        ? this.updateMeInfo()
                                        : IS(b).send_66_24(t),
                                    this.role_list.updateAll()),
                                    this.updateEmpty(),
                                    (this.starBtn.node.active =
                                        this.select_role != IS(w).GetRoleId()),
                                    (this.lockNode.active =
                                        this.select_role == IS(w).GetRoleId());
                            }),
                            (f.resetAll = function () {
                                (this.select_pet = 0),
                                    (this.select_pet_info = null),
                                    (this.select_role = 0),
                                    this.updateEmpty();
                            }),
                            (f.onAfterOpen = function () {
                                this.resetAll(), IS(b).send_66_22();
                            }),
                            (f.onBeforeClose = function () {}),
                            (f.registerUpdateHandler = function () {
                                this.addEvent(
                                    G.FlyPetUpPetChange,
                                    this.updateMeInfo
                                ),
                                    this.addEvent(
                                        G.HybridListBack,
                                        this.updateData
                                    ),
                                    this.addEvent(
                                        G.RolePetListBack,
                                        this.updateInfo
                                    ),
                                    this.addEvent(
                                        G.FlyPeOtherStarBack,
                                        this.UpdateStar
                                    );
                            }),
                            (f.updateData = function () {
                                var t,
                                    e =
                                        null != (t = IS(T).GetHybridRoleList())
                                            ? t
                                            : [],
                                    i = [];
                                for (var n in (i.push({
                                    role_id: IS(w).GetRoleId(),
                                    name: IS(w).GetRoleName(),
                                    head: {
                                        id: IS(w).GetRoleAttr(
                                            L.ROLE_ATTR_HEAD_ID
                                        ),
                                        frame_id: IS(S).curFrameId,
                                        url: IS(w).GetHeadUrl(),
                                    },
                                }),
                                e))
                                    i.push(e[n]);
                                (this.role_list.datas = i),
                                    (this.select_role &&
                                        0 != this.select_role) ||
                                        this.SelectRole(i[0].role_id);
                                var s = g.fly_partner_num;
                                this.role_num.string =
                                    m.formatStrWithMirrorDeal(
                                        GetLanguage(205177),
                                        i.length - 1,
                                        s
                                    );
                            }),
                            (f.onDestroy = function () {}),
                            i
                        );
                    })(B)
                );
                var D = (function (t) {
                        function i() {
                            for (
                                var e,
                                    i = arguments.length,
                                    n = new Array(i),
                                    s = 0;
                                s < i;
                                s++
                            )
                                n[s] = arguments[s];
                            return (
                                ((e =
                                    t.call.apply(t, [this].concat(n)) ||
                                    this).addIcon = void 0),
                                (e.downIcon = void 0),
                                (e.txtName = void 0),
                                (e.skill_cfg = void 0),
                                (e.quality_list = {}),
                                e
                            );
                        }
                        e(i, t);
                        var s = i.prototype;
                        return (
                            (s.onInit = function () {
                                var t = this;
                                (this.txtName = v.findChildComponent(
                                    this.node,
                                    "txtName",
                                    l
                                )),
                                    (this.addIcon = v.findChild(
                                        this.node,
                                        "add"
                                    )),
                                    (this.downIcon = v.findChild(
                                        this.node,
                                        "down"
                                    ));
                                for (var e = 1; e <= 6; e++) {
                                    var i = v.findChild(
                                            this.node,
                                            "quality/quality" + e
                                        ),
                                        s = v.findChildComponent(
                                            i,
                                            "txtQuality",
                                            l
                                        );
                                    this.quality_list[e] = { node: i, name: s };
                                }
                                this.view.addComponentCallbackListener(
                                    this.node,
                                    n.EventType.CLICK,
                                    function () {
                                        uiMgr.openView(
                                            "JobSkillTipsView",
                                            m.formatStr.apply(
                                                m,
                                                [t.skill_cfg.desc].concat(
                                                    t.skill_cfg.desc_parm
                                                )
                                            ),
                                            t.txtName.node
                                        );
                                    }
                                );
                            }),
                            (s.onRender = function (t, e) {
                                var i = configFly_entry.getDataByKeys(
                                    "id",
                                    t.k,
                                    "level",
                                    t.v
                                );
                                this.skill_cfg = i;
                                for (var n = 1; n <= 6; n++)
                                    n == i.quality
                                        ? ((this.quality_list[n].node.active =
                                              !0),
                                          (this.quality_list[n].name.string =
                                              i.name))
                                        : (this.quality_list[n].node.active =
                                              !1);
                            }),
                            (s.onItemClick = function () {}),
                            i
                        );
                    })(f),
                    P = (function (t) {
                        function i() {
                            for (
                                var e,
                                    i = arguments.length,
                                    n = new Array(i),
                                    s = 0;
                                s < i;
                                s++
                            )
                                n[s] = arguments[s];
                            return (
                                ((e =
                                    t.call.apply(t, [this].concat(n)) ||
                                    this).imgFrame = void 0),
                                (e.imgIcon = void 0),
                                (e.add = void 0),
                                (e.sel = void 0),
                                (e.star = void 0),
                                (e.txtState = void 0),
                                (e.p_view = void 0),
                                e
                            );
                        }
                        e(i, t);
                        var s = i.prototype;
                        return (
                            (s.onInit = function () {
                                var t = this;
                                (this.txtState = v.findChildComponent(
                                    this.node,
                                    "nodeUse/label",
                                    l
                                )),
                                    (this.imgFrame = v.findChildComponent(
                                        this.node,
                                        "frame",
                                        o
                                    )),
                                    (this.imgIcon = v.findChildComponent(
                                        this.node,
                                        "icon",
                                        o
                                    )),
                                    (this.add = v.findChild(this.node, "add")),
                                    (this.star = v.findChild(
                                        this.node,
                                        "star"
                                    )),
                                    (this.sel = v.findChild(this.node, "sel")),
                                    (this.p_view = this.view),
                                    this.view.addComponentCallbackListener(
                                        this.node,
                                        n.EventType.CLICK,
                                        function () {
                                            null == t.data.info
                                                ? uiMgr.openView(
                                                      "FlyPetUseSelectView"
                                                  )
                                                : t.p_view.SelectPet(t.data);
                                        }
                                    );
                            }),
                            (s.onRender = function (t, e) {
                                if (null == t.info)
                                    (this.add.active = !0),
                                        this.view.loadIcon(
                                            this.imgFrame,
                                            "icon_equip",
                                            F[0]
                                        ),
                                        (this.imgIcon.node.active = !1),
                                        (this.sel.active = !1),
                                        (this.star.active = !1);
                                else {
                                    (this.add.active = !1),
                                        (this.imgIcon.node.active = !0);
                                    var i = configFly.getDataByKey(
                                        t.info.config_id
                                    );
                                    (this.sel.active =
                                        this.p_view.select_pet ==
                                        this.data.info.id),
                                        this.view.loadIcon(
                                            this.imgIcon,
                                            "icon_flypet",
                                            i.icon
                                        ),
                                        this.view.loadIcon(
                                            this.imgFrame,
                                            "icon_equip",
                                            F[i.quality]
                                        ),
                                        (this.star.active =
                                            IS(T).GetExtByKey(t.info, 1) &&
                                            this.p_view.select_role !=
                                                IS(w).GetRoleId());
                                }
                            }),
                            (s.onItemClick = function () {}),
                            i
                        );
                    })(f),
                    R = (function (t) {
                        function i() {
                            for (
                                var e,
                                    i = arguments.length,
                                    n = new Array(i),
                                    s = 0;
                                s < i;
                                s++
                            )
                                n[s] = arguments[s];
                            return (
                                ((e =
                                    t.call.apply(t, [this].concat(n)) ||
                                    this).imgFrame = void 0),
                                (e.imgIcon = void 0),
                                (e.sel = void 0),
                                (e.txtName = void 0),
                                (e.txtselectName = void 0),
                                (e.btnCancel = void 0),
                                (e.p_view = void 0),
                                e
                            );
                        }
                        e(i, t);
                        var s = i.prototype;
                        return (
                            (s.onInit = function () {
                                var t = this;
                                (this.txtName = v.findChildComponent(
                                    this.node,
                                    "txtName",
                                    l
                                )),
                                    (this.txtselectName = v.findChildComponent(
                                        this.node,
                                        "txtSelectName",
                                        l
                                    )),
                                    (this.imgFrame = v.findChildComponent(
                                        this.node,
                                        "imgHeadFrame",
                                        o
                                    )),
                                    (this.imgIcon = v.findChildComponent(
                                        this.node,
                                        "icon",
                                        o
                                    )),
                                    (this.sel = v.findChild(this.node, "sel")),
                                    (this.btnCancel = v.findChild(
                                        this.node,
                                        "btnCancel"
                                    )),
                                    (this.btnCancel.active = !1),
                                    (this.p_view = this.view),
                                    this.view.addComponentCallbackListener(
                                        this.btnCancel,
                                        n.EventType.CLICK,
                                        function () {
                                            IS(T).CheckIsCanCancelRole(
                                                t.data.role_id
                                            )
                                                ? I.showFlyTip(
                                                      GetLanguage(205265)
                                                  )
                                                : IS(T).CheckIsHaveOtherRoleUse(
                                                      t.data.role_id
                                                  )
                                                ? I.showFlyTip(
                                                      GetLanguage(205264)
                                                  )
                                                : IS(b).send_66_26(
                                                      t.data.role_id
                                                  );
                                        }
                                    ),
                                    this.view.addComponentCallbackListener(
                                        this.node,
                                        n.EventType.CLICK,
                                        function () {
                                            t.p_view.SelectRole(t.data.role_id);
                                        }
                                    );
                            }),
                            (s.onRender = function (t, e) {
                                (this.txtName.string = t.name),
                                    (this.txtselectName.string = t.name);
                                var i = IS(w).GetRoleId();
                                (this.btnCancel.active =
                                    this.data.role_id ==
                                        this.p_view.select_role &&
                                    this.data.role_id != i),
                                    (this.txtName.node.active =
                                        !this.btnCancel.active),
                                    (this.sel.active =
                                        this.data.role_id ==
                                        this.p_view.select_role),
                                    (this.txtName.node.active =
                                        this.data.role_id != i),
                                    (this.txtselectName.node.active =
                                        this.data.role_id == i),
                                    this.view.loadRemoteIcon(
                                        this.data.head.url,
                                        this.imgIcon
                                    );
                                var n = this.data.head.frame_id;
                                if (n > 0) {
                                    this.imgFrame.node.active = !0;
                                    var s = configAvatar_frame.getDataByKey(n);
                                    this.view.loadIcon(
                                        this.imgFrame,
                                        "icon_frame",
                                        s.icon
                                    );
                                } else this.imgFrame.node.active = !1;
                            }),
                            (s.onItemClick = function () {}),
                            i
                        );
                    })(f);
                i._RF.pop();
            },
        };
    }
);
