System.register(
    "chunks:///_virtual/FlyPetSelectView.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIList.ts",
        "./NodeUtil.ts",
        "./StringUtil.ts",
        "./TimeUtil.ts",
        "./index57.ts",
        "./ConfigGlobal.ts",
        "./BagModel.ts",
        "./MessageView.ts",
        "./FrameDataCache.ts",
        "./PrivilegeDataCache.ts",
        "./RoleDataCache.ts",
        "./RoleDefine.ts",
        "./FlyPetControl.ts",
        "./FlyPetDataCache.ts",
        "./FlyPetDefine.ts",
        "./BaseView.ts",
    ],
    function (e) {
        "use strict";
        var t, i, n, o, s, a, l, d, h, c, r, f, m, _, u, v, p, C, y, g, I, S, L;
        return {
            setters: [
                function (e) {
                    t = e.inheritsLoose;
                },
                function (e) {
                    (i = e.cclegacy),
                        (n = e.Button),
                        (o = e.Label),
                        (s = e.Sprite),
                        (a = e.ScrollView),
                        (l = e.Layout);
                },
                function (e) {
                    d = e.ListItem;
                },
                function (e) {
                    h = e.default;
                },
                function (e) {
                    c = e.default;
                },
                function (e) {
                    r = e.default;
                },
                null,
                function (e) {
                    f = e.ConfigGlobal;
                },
                function (e) {
                    m = e.BagModel;
                },
                function (e) {
                    _ = e.default;
                },
                function (e) {
                    u = e.FrameDataCache;
                },
                function (e) {
                    v = e.PrivilegeDataCache;
                },
                function (e) {
                    p = e.RoleDataCache;
                },
                function (e) {
                    C = e.PlayerAttr;
                },
                function (e) {
                    y = e.default;
                },
                function (e) {
                    g = e.default;
                },
                function (e) {
                    (I = e.FlyPetEventDefine), (S = e.FlyPetQualityRes);
                },
                function (e) {
                    L = e.BaseView;
                },
            ],
            execute: function () {
                i._RF.push(
                    {},
                    "e8338Nhh9RKYJ2y0nssoqDE",
                    "FlyPetSelectView",
                    void 0
                );
                e(
                    "default",
                    (function (e) {
                        function i() {
                            var t;
                            return (
                                ((t = e.call(this) || this).title = void 0),
                                (t.me_item = {}),
                                (t.other_item = {}),
                                (t.pet_list = void 0),
                                (t.role_list = void 0),
                                (t.cost_lab = void 0),
                                (t.timeNode = void 0),
                                (t.time_lab = void 0),
                                (t.btnOk = void 0),
                                (t.select = 1),
                                (t.role_select = 1),
                                (t.select_role = 0),
                                (t.home_id = 0),
                                (t.select_desc = void 0),
                                (t.name = "FlyPetSelectView"),
                                (t.url = "ui/module/flypet/FlyPetSelectView"),
                                t
                            );
                        }
                        t(i, e);
                        var d = i.prototype;
                        return (
                            (d.onInit = function () {
                                var e = this,
                                    t = this.findChild("imgMask");
                                this.addComponentCallbackListener(
                                    t,
                                    n.EventType.CLICK,
                                    function () {
                                        e.onMaskClick();
                                    }
                                );
                                var i = this.findChild("container/btnClose");
                                this.addComponentCallbackListener(
                                    i,
                                    n.EventType.CLICK,
                                    function () {
                                        e.onMaskClick();
                                    }
                                ),
                                    (this.title = this.findChildComponent(
                                        "bg/title",
                                        o
                                    ));
                                var d = this.findChild("container/me_item"),
                                    h = this.findChildComponent(
                                        "container/me_item/frame",
                                        s
                                    ),
                                    c = this.findChildComponent(
                                        "container/me_item/icon",
                                        s
                                    ),
                                    r = this.findChildComponent(
                                        "container/me_item/name",
                                        o
                                    ),
                                    f = this.findChild("container/me_item/sel"),
                                    m = this.findChild("container/me_item/add");
                                this.select_desc = this.findChildComponent(
                                    "container/desc/txtTitle",
                                    o
                                );
                                var u = this.findChild(
                                    "container/me_item/desc"
                                );
                                this.addComponentCallbackListener(
                                    u,
                                    n.EventType.CLICK,
                                    function () {
                                        e.me_item.info &&
                                            uiMgr.openView(
                                                "FlyPetLookTipsView",
                                                e.me_item.info.info,
                                                0,
                                                1
                                            );
                                    }
                                ),
                                    this.addComponentCallbackListener(
                                        d,
                                        n.EventType.CLICK,
                                        function () {
                                            e.select_role == IS(p).GetRoleId()
                                                ? ((e.select = 1),
                                                  e.updatePosSelect())
                                                : _.showFlyTip(
                                                      GetLanguage(205170)
                                                  );
                                        }
                                    );
                                var v = this.findChild("container/me_item/sub");
                                this.addComponentCallbackListener(
                                    v,
                                    n.EventType.CLICK,
                                    function () {
                                        e.resetPos(1),
                                            e.pet_list.updateAll(),
                                            e.updateTime();
                                    }
                                ),
                                    (this.me_item = {
                                        node: d,
                                        frame: h,
                                        icon: c,
                                        sel: f,
                                        add: m,
                                        sub: v,
                                        name: r,
                                        desc: u,
                                    });
                                var C = this.findChild("container/other_item"),
                                    g = this.findChildComponent(
                                        "container/other_item/frame",
                                        s
                                    ),
                                    I = this.findChildComponent(
                                        "container/other_item/icon",
                                        s
                                    ),
                                    S = this.findChild(
                                        "container/other_item/add"
                                    ),
                                    L = this.findChild(
                                        "container/other_item/sub"
                                    ),
                                    w = this.findChild(
                                        "container/other_item/sel"
                                    ),
                                    F = this.findChildComponent(
                                        "container/other_item/name",
                                        o
                                    ),
                                    T = this.findChild(
                                        "container/other_item/desc"
                                    );
                                this.addComponentCallbackListener(
                                    T,
                                    n.EventType.CLICK,
                                    function () {
                                        if (e.other_item.info) {
                                            var t = 0;
                                            e.other_item.info.info.role_id ==
                                                IS(p).GetRoleId() && (t = 1),
                                                uiMgr.openView(
                                                    "FlyPetLookTipsView",
                                                    e.other_item.info.info,
                                                    e.other_item.info
                                                        .other_times,
                                                    t
                                                );
                                        }
                                    }
                                ),
                                    this.addComponentCallbackListener(
                                        C,
                                        n.EventType.CLICK,
                                        function () {
                                            2 != e.select &&
                                                ((e.select = 2),
                                                e.updatePosSelect());
                                        }
                                    ),
                                    this.addComponentCallbackListener(
                                        L,
                                        n.EventType.CLICK,
                                        function () {
                                            e.resetPos(2),
                                                e.pet_list.updateAll(),
                                                e.updateTime();
                                        }
                                    ),
                                    (this.other_item = {
                                        node: C,
                                        frame: g,
                                        icon: I,
                                        add: S,
                                        sel: w,
                                        sub: L,
                                        name: F,
                                        desc: T,
                                    });
                                var P = this.findChildComponent(
                                    "container/ScrollView",
                                    a
                                );
                                (this.pet_list = this.addUIList(P, G)),
                                    (this.timeNode =
                                        this.findChild("container/txt/time")),
                                    (this.time_lab = this.findChildComponent(
                                        "container/txt/time",
                                        o
                                    )),
                                    (this.cost_lab = this.findChildComponent(
                                        "container/cost",
                                        o
                                    )),
                                    this.dealMirrorLayout(
                                        this.findChildComponent(
                                            "container/txt",
                                            l
                                        )
                                    ),
                                    (this.btnOk =
                                        this.findChild("container/ok_btn")),
                                    this.addComponentCallbackListener(
                                        this.btnOk,
                                        n.EventType.CLICK,
                                        function () {
                                            if (e.me_item.info)
                                                if (e.other_item.info) {
                                                    var t =
                                                            e.me_item.info.info
                                                                .id,
                                                        i =
                                                            e.other_item.info
                                                                .info.id,
                                                        n =
                                                            configFly.getDataByKey(
                                                                e.me_item.info
                                                                    .info
                                                                    .config_id
                                                            ),
                                                        o =
                                                            configFly.getDataByKey(
                                                                e.other_item
                                                                    .info.info
                                                                    .config_id
                                                            );
                                                    if (n.type == o.type) {
                                                        var s =
                                                            GetLanguage(205236);
                                                        1 == n.type &&
                                                            (s =
                                                                GetLanguage(
                                                                    303026
                                                                )),
                                                            _.showBoxTip({
                                                                tip: s,
                                                                title: GetLanguage(
                                                                    200048
                                                                ),
                                                                func: function (
                                                                    n
                                                                ) {
                                                                    "type_yes" ==
                                                                        n &&
                                                                        (IS(
                                                                            y
                                                                        ).send_66_27(
                                                                            e.home_id,
                                                                            t,
                                                                            i
                                                                        ),
                                                                        e.close());
                                                                },
                                                            });
                                                    } else
                                                        _.showFlyTip(
                                                            GetLanguage(205219)
                                                        );
                                                } else
                                                    _.showFlyTip(
                                                        GetLanguage(205172)
                                                    );
                                            else
                                                _.showFlyTip(
                                                    GetLanguage(205170)
                                                );
                                        }
                                    );
                                var B = this.findChildComponent(
                                    "container/role_list",
                                    a
                                );
                                this.role_list = this.addUIList(B, b);
                            }),
                            (d.updatePosSelect = function () {
                                (this.me_item.sel.active = 1 == this.select),
                                    (this.other_item.sel.active =
                                        2 == this.select);
                                var e = 205170;
                                2 == this.select && (e = 205221),
                                    (this.select_desc.string = GetLanguage(e));
                            }),
                            (d.onMaskClick = function () {
                                this.close();
                            }),
                            (d.resetPos = function (e) {
                                void 0 === e && (e = 0),
                                    (0 != e && 1 != e) ||
                                        ((this.me_item.icon.node.active = !1),
                                        (this.me_item.sub.active = !1),
                                        (this.me_item.info = null),
                                        (this.me_item.name.node.active = !1),
                                        (this.me_item.desc.active = !1)),
                                    (0 != e && 2 != e) ||
                                        ((this.other_item.icon.node.active =
                                            !1),
                                        (this.other_item.sub.active = !1),
                                        (this.other_item.name.node.active = !1),
                                        (this.other_item.desc.active = !1),
                                        (this.other_item.info = null)),
                                    (this.me_item.sel.active =
                                        1 == this.select),
                                    (this.other_item.sel.active =
                                        2 == this.select);
                            }),
                            (d.onAfterOpen = function () {
                                (this.home_id = this.openArgs[0]),
                                    (this.select = 1),
                                    (this.select_role = 0),
                                    this.updateTime(),
                                    this.resetPos(),
                                    this.updatePosSelect(),
                                    this.updateData();
                            }),
                            (d.registerUpdateHandler = function () {
                                this.addEvent(
                                    I.RolePetListBack,
                                    this.updateInfo
                                );
                            }),
                            (d.onBeforeClose = function () {}),
                            (d.updateMyInfo = function () {
                                var e = IS(g).GetPetList(),
                                    t = [];
                                for (var i in e) e[i] && t.push({ info: e[i] });
                                t.sort(function (e, t) {
                                    var i = configFly.getDataByKey(
                                            e.info.config_id
                                        ),
                                        n = configFly.getDataByKey(
                                            t.info.config_id
                                        ),
                                        o = IS(g).GetExtByKey(e.info, 1),
                                        s = IS(g).GetExtByKey(t.info, 1);
                                    return o != s
                                        ? s - o
                                        : e.info.level != t.info.level
                                        ? t.info.level - e.info.level
                                        : e.info.step != t.info.step
                                        ? t.info.step - e.info.step
                                        : i.quality != n.quality
                                        ? n.quality - i.quality
                                        : e.info.config_id - t.info.config_id;
                                }),
                                    (this.pet_list.datas = t);
                            }),
                            (d.updateInfo = function (e) {
                                var t;
                                if (this.select_role != IS(p).GetRoleId()) {
                                    var i = null != (t = e.list) ? t : [];
                                    i.sort(function (e, t) {
                                        var i = configFly.getDataByKey(
                                                e.info.config_id
                                            ),
                                            n = configFly.getDataByKey(
                                                t.info.config_id
                                            ),
                                            o = IS(g).GetExtByKey(e.info, 1),
                                            s = IS(g).GetExtByKey(t.info, 1);
                                        return o != s
                                            ? s - o
                                            : e.info.level != t.info.level
                                            ? t.info.level - e.info.level
                                            : e.info.step != t.info.step
                                            ? t.info.step - e.info.step
                                            : i.quality != n.quality
                                            ? n.quality - i.quality
                                            : e.info.config_id -
                                              t.info.config_id;
                                    }),
                                        (this.pet_list.datas = i);
                                }
                            }),
                            (d.SelectPet = function (e) {
                                var t = configFly.getDataByKey(
                                    e.info.config_id
                                );
                                if (1 == this.select) {
                                    if (
                                        ((this.me_item.info = e),
                                        (this.me_item.sub.active = !0),
                                        (this.me_item.name.node.active = !0),
                                        e.info.name && "" != e.info.name)
                                    )
                                        this.me_item.name.string = e.info.name;
                                    else
                                        (this.me_item.name.string = t.name),
                                            1 ==
                                                IS(g).GetIsBianYi(
                                                    e.info.entry_list
                                                ) &&
                                                (this.me_item.name.string =
                                                    c.formatStrWithMirrorDeal(
                                                        GetLanguage(205206),
                                                        t.name
                                                    ));
                                    (this.me_item.icon.node.active = !0),
                                        (this.me_item.desc.active = !0),
                                        this.loadIcon(
                                            this.me_item.icon,
                                            "icon_flypet",
                                            t.icon
                                        ),
                                        this.other_item.info &&
                                            this.other_item.info.info.id ==
                                                e.info.id &&
                                            this.resetPos(2);
                                } else {
                                    if (
                                        ((this.other_item.info = e),
                                        (this.other_item.sub.active = !0),
                                        (this.other_item.name.node.active = !0),
                                        e.info.name && "" != e.info.name)
                                    )
                                        this.other_item.name.string =
                                            e.info.name;
                                    else
                                        (this.other_item.name.string = t.name),
                                            1 ==
                                                IS(g).GetIsBianYi(
                                                    e.info.entry_list
                                                ) &&
                                                (this.other_item.name.string =
                                                    c.formatStrWithMirrorDeal(
                                                        GetLanguage(205206),
                                                        t.name
                                                    ));
                                    (this.other_item.desc.active = !0),
                                        (this.other_item.icon.node.active = !0),
                                        this.loadIcon(
                                            this.other_item.icon,
                                            "icon_flypet",
                                            t.icon
                                        ),
                                        this.me_item.info &&
                                            this.me_item.info.info.id ==
                                                e.info.id &&
                                            this.resetPos(1);
                                }
                                this.pet_list.updateAll(), this.updateTime();
                            }),
                            (d.updateTime = function () {
                                var e = !1;
                                if (this.other_item.info && this.me_item.info) {
                                    e = !0;
                                    var t = Math.max(
                                            this.other_item.info.info
                                                .generation,
                                            this.me_item.info.info.generation
                                        ),
                                        i = IS(g).GetUseTimeByAge(t),
                                        n = 1;
                                    IS(v).checkPrivilegeCardHasBuy(6) &&
                                        (n =
                                            1 -
                                            configPrivilege_card.getDataByKey(
                                                6004
                                            ).value[2] /
                                                1e4),
                                        (this.time_lab.string =
                                            r.formatTimeForSecond(i * n));
                                }
                                this.timeNode.active = e;
                            }),
                            (d.SelectRole = function (e) {
                                this.select_role != e &&
                                    ((this.select_role = e),
                                    this.select_role == IS(p).GetRoleId()
                                        ? ((this.select = 1),
                                          this.updatePosSelect(),
                                          this.updateMyInfo())
                                        : ((this.select = 2),
                                          this.updatePosSelect(),
                                          IS(y).send_66_24(e)),
                                    this.role_list.updateAll());
                            }),
                            (d.updateData = function () {
                                var e,
                                    t =
                                        null != (e = IS(g).GetHybridRoleList())
                                            ? e
                                            : [],
                                    i = [];
                                for (var n in (i.push({
                                    role_id: IS(p).GetRoleId(),
                                    name: IS(p).GetRoleName(),
                                    head: {
                                        id: IS(p).GetRoleAttr(
                                            C.ROLE_ATTR_HEAD_ID
                                        ),
                                        frame_id: IS(u).curFrameId,
                                        url: IS(p).GetHeadUrl(),
                                    },
                                }),
                                t))
                                    i.push(t[n]);
                                (this.role_list.datas = i),
                                    (this.select_role &&
                                        0 != this.select_role) ||
                                        this.SelectRole(IS(p).GetRoleId());
                                var o = f.fly_hybrid_cost;
                                IS(m).getGoodsCountByGoodsGtid(o[0][1][0]);
                            }),
                            (d.onDestroy = function () {}),
                            i
                        );
                    })(L)
                );
                var G = (function (e) {
                        function i() {
                            for (
                                var t,
                                    i = arguments.length,
                                    n = new Array(i),
                                    o = 0;
                                o < i;
                                o++
                            )
                                n[o] = arguments[o];
                            return (
                                ((t =
                                    e.call.apply(e, [this].concat(n)) ||
                                    this).imgFrame = void 0),
                                (t.imgIcon = void 0),
                                (t.sel = void 0),
                                (t.state = void 0),
                                (t.star = void 0),
                                (t.select_state = void 0),
                                (t.use_state = void 0),
                                (t.refuse_state = void 0),
                                (t.cd_state = void 0),
                                (t.p_view = void 0),
                                t
                            );
                        }
                        t(i, e);
                        var o = i.prototype;
                        return (
                            (o.onInit = function () {
                                var e = this;
                                (this.state = h.findChild(
                                    this.node,
                                    "nodeUse"
                                )),
                                    (this.imgFrame = h.findChildComponent(
                                        this.node,
                                        "frame",
                                        s
                                    )),
                                    (this.imgIcon = h.findChildComponent(
                                        this.node,
                                        "icon",
                                        s
                                    )),
                                    (this.star = h.findChild(
                                        this.node,
                                        "star"
                                    )),
                                    (this.select_state = h.findChild(
                                        this.node,
                                        "nodeUse/select"
                                    )),
                                    (this.use_state = h.findChild(
                                        this.node,
                                        "nodeUse/use"
                                    )),
                                    (this.refuse_state = h.findChild(
                                        this.node,
                                        "nodeUse/no"
                                    )),
                                    (this.cd_state = h.findChild(
                                        this.node,
                                        "nodeUse/cd"
                                    )),
                                    (this.p_view = this.view),
                                    (this.sel = h.findChild(this.node, "sel")),
                                    this.view.addComponentCallbackListener(
                                        this.node,
                                        n.EventType.CLICK,
                                        function () {
                                            if (e.cd_state.active) {
                                                var t,
                                                    i =
                                                        null !=
                                                        (t = e.data.end_time)
                                                            ? t
                                                            : 0;
                                                if (
                                                    e.data.info.role_id ==
                                                    IS(p).GetRoleId()
                                                ) {
                                                    var n = IS(
                                                        g
                                                    ).GetHaveUseItemById(
                                                        e.data.info.id
                                                    );
                                                    n && (i = n.end_time);
                                                }
                                                var o =
                                                    c.formatStrWithMirrorDeal(
                                                        GetLanguage(205276),
                                                        r.formatTimeStringForSecond(
                                                            i - r.serverTime
                                                        )
                                                    );
                                                _.showFlyTip(o);
                                            } else
                                                e.refuse_state.active
                                                    ? _.showFlyTip(
                                                          GetLanguage(205174)
                                                      )
                                                    : e.use_state.active
                                                    ? _.showFlyTip(
                                                          GetLanguage(205266)
                                                      )
                                                    : e.p_view.SelectPet(
                                                          e.data
                                                      );
                                        }
                                    );
                            }),
                            (o.onRender = function (e, t) {
                                var i,
                                    n,
                                    o,
                                    s = configFly.getDataByKey(
                                        e.info.config_id
                                    );
                                this.view.loadIcon(
                                    this.imgIcon,
                                    "icon_flypet",
                                    s.icon
                                ),
                                    this.view.loadIcon(
                                        this.imgFrame,
                                        "icon_equip",
                                        S[s.quality]
                                    );
                                var a = this.p_view.me_item.info,
                                    l = this.p_view.other_item.info;
                                this.select_state.active =
                                    (a && a.info.id == e.info.id) ||
                                    (l && l.info.id == e.info.id);
                                var d = null != (i = e.state) ? i : 0;
                                n = e.is_save;
                                if (e.info.role_id == IS(p).GetRoleId()) {
                                    var h = IS(g).GetHaveUseItemById(e.info.id);
                                    h && ((d = h.state), h.is_save);
                                }
                                (this.star.active = IS(g).GetExtByKey(
                                    e.info,
                                    1
                                )),
                                    (this.use_state.active = 1 == d);
                                var c = (
                                    null != (o = e.can_list) ? o : []
                                ).find(function (e) {
                                    return e == IS(p).GetRoleId();
                                });
                                (this.refuse_state.active =
                                    this.p_view.select_role !=
                                        IS(p).GetRoleId() &&
                                    1 == e.is_save &&
                                    !c),
                                    (this.cd_state.active = 2 == d);
                            }),
                            (o.onItemClick = function () {}),
                            i
                        );
                    })(d),
                    b = (function (e) {
                        function i() {
                            for (
                                var t,
                                    i = arguments.length,
                                    n = new Array(i),
                                    o = 0;
                                o < i;
                                o++
                            )
                                n[o] = arguments[o];
                            return (
                                ((t =
                                    e.call.apply(e, [this].concat(n)) ||
                                    this).select = void 0),
                                (t.txtName = void 0),
                                (t.p_view = void 0),
                                t
                            );
                        }
                        t(i, e);
                        var s = i.prototype;
                        return (
                            (s.onInit = function () {
                                var e = this;
                                (this.txtName = h.findChildComponent(
                                    this.node,
                                    "btn/Node",
                                    o
                                )),
                                    (this.select = h.findChild(
                                        this.node,
                                        "btn/select"
                                    )),
                                    (this.p_view = this.view);
                                var t = h.findChild(this.node, "btn");
                                this.view.addComponentCallbackListener(
                                    t,
                                    n.EventType.CLICK,
                                    function () {
                                        e.p_view.SelectRole(e.data.role_id);
                                    }
                                );
                            }),
                            (s.onRender = function (e, t) {
                                (this.txtName.string = e.name),
                                    (this.select.active =
                                        this.data.role_id ==
                                        this.p_view.select_role);
                            }),
                            (s.onItemClick = function () {}),
                            i
                        );
                    })(d);
                i._RF.pop();
            },
        };
    }
);
