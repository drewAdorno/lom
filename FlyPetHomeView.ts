System.register(
    "chunks:///_virtual/FlyPetHomeView.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./UIList.ts",
        "./RedPointMgr.ts",
        "./NodeUtil.ts",
        "./StringUtil.ts",
        "./TimeUtil.ts",
        "./index57.ts",
        "./BagDefine.ts",
        "./BagModel.ts",
        "./RoleDataCache.ts",
        "./RoleDefine.ts",
        "./FlyPetControl.ts",
        "./FlyPetDataCache.ts",
        "./FlyPetDefine.ts",
        "./BaseSubView.ts",
    ],
    function (t) {
        "use strict";
        var e, i, n, s, o, a, d, l, h, r, m, f, c, u, v, _, C, p, y, g, I;
        return {
            setters: [
                function (t) {
                    e = t.inheritsLoose;
                },
                function (t) {
                    (i = t.cclegacy),
                        (n = t.Button),
                        (s = t.ScrollView),
                        (o = t.Vec2),
                        (a = t.Label),
                        (d = t.Sprite),
                        (l = t.ProgressBar);
                },
                function (t) {
                    h = t.ListItem;
                },
                function (t) {
                    r = t.RedPointMgr;
                },
                function (t) {
                    m = t.default;
                },
                function (t) {
                    f = t.default;
                },
                function (t) {
                    c = t.default;
                },
                null,
                function (t) {
                    u = t.BagEventDefine;
                },
                function (t) {
                    v = t.BagModel;
                },
                function (t) {
                    _ = t.RoleDataCache;
                },
                function (t) {
                    C = t.RoleEventDefine;
                },
                function (t) {
                    p = t.default;
                },
                function (t) {
                    y = t.default;
                },
                function (t) {
                    g = t.FlyPetEventDefine;
                },
                function (t) {
                    I = t.BaseSubView;
                },
            ],
            execute: function () {
                i._RF.push(
                    {},
                    "085d7GK3IRKW4HXk7unlEvj",
                    "FlyPetHomeView",
                    void 0
                );
                t(
                    "default",
                    (function (t) {
                        function i() {
                            var e;
                            return (
                                ((e = t.call(this) || this).home_list = void 0),
                                (e.time_list = {}),
                                (e.nodeResParent = void 0),
                                (e.nodeResItem = void 0),
                                (e.resItems = void 0),
                                (e.name = "FlyPetHomeView"),
                                (e.url = "ui/module/flypet/FlyPetHomeView"),
                                e
                            );
                        }
                        e(i, t);
                        var l = i.prototype;
                        return (
                            (l.onInit = function () {
                                var t = this.findChild("bg/title/tips");
                                this.addComponentCallbackListener(
                                    t,
                                    n.EventType.CLICK,
                                    function () {
                                        uiMgr.openView("ParkingRuleTips", [
                                            205216,
                                        ]);
                                    }
                                ),
                                    this.initResShow();
                                var e = this.findChildComponent(
                                    "root/home_list",
                                    s
                                );
                                this.home_list = this.addUIList(e, w);
                                var i = this.findChild("bg/title/showBtn");
                                IS(r).addRedPoint(
                                    "TaskFlyPetRed",
                                    i,
                                    new o(30, 30)
                                ),
                                    this.addComponentCallbackListener(
                                        i,
                                        n.EventType.CLICK,
                                        function () {
                                            uiMgr.openView(
                                                "FlyPetAchievementView"
                                            );
                                        }
                                    );
                            }),
                            (l.initResShow = function () {
                                var t = this;
                                (this.nodeResParent =
                                    this.findChild("root/resRoot")),
                                    (this.nodeResItem = this.findChild(
                                        "root/resRoot/resItem"
                                    )),
                                    (this.nodeResItem.active = !1);
                                var e = [1163];
                                if (
                                    (IS(v).getGoodsCountByGoodsGtid(1822) > 0 &&
                                        (e = [1163, 1822]),
                                    !this.resItems)
                                ) {
                                    this.resItems = new Array();
                                    for (
                                        var i = function (i) {
                                                var s =
                                                        nodeInstantiate.instantiate(
                                                            t.nodeResItem
                                                        ),
                                                    o = e[i];
                                                t.addComponentCallbackListener(
                                                    s,
                                                    n.EventType.CLICK,
                                                    function () {
                                                        IS(v).OpenItemTips(
                                                            o,
                                                            m.findChild(
                                                                s,
                                                                "txtNum"
                                                            )
                                                        );
                                                    }
                                                ),
                                                    (s.parent =
                                                        t.nodeResParent),
                                                    (s.active = !0);
                                                var l = m.findChildComponent(
                                                        s,
                                                        "imgIcon",
                                                        d
                                                    ),
                                                    h =
                                                        configGoods.getDataByKey(
                                                            o
                                                        );
                                                t.loadIcon(
                                                    l,
                                                    "icon_item",
                                                    h.icon
                                                ),
                                                    t.resItems.push({
                                                        node: s,
                                                        txtNum: m.findChildComponent(
                                                            s,
                                                            "txtNum",
                                                            a
                                                        ),
                                                        goodsGtid: o,
                                                    });
                                            },
                                            s = 0;
                                        s < e.length;
                                        s++
                                    )
                                        i(s);
                                }
                            }),
                            (l.updateResShow = function () {
                                for (var t = 0; t < this.resItems.length; t++)
                                    this.resItems[t].txtNum.string =
                                        f.GetNumString(
                                            IS(v).getGoodsCountByGoodsGtid(
                                                this.resItems[t].goodsGtid
                                            )
                                        );
                            }),
                            (l.onAfterOpen = function () {
                                IS(p).send_66_21(),
                                    IS(p).send_66_22(),
                                    this.updateResShow();
                            }),
                            (l.testData = function () {
                                this.home_list.datas = [1, 2, 3];
                            }),
                            (l.onBeforeClose = function () {
                                for (var t in this.time_list)
                                    this.time_list[t] &&
                                        (this.removeTimer(this.time_list[t]),
                                        (this.time_list[t] = null));
                            }),
                            (l.registerUpdateHandler = function () {
                                this.addEvent(g.HomeListBack, this.updateData),
                                    this.addEvent(
                                        u.GOODS_INFO_UPDATE,
                                        this.updateResShow,
                                        this
                                    ),
                                    this.addEvent(
                                        C.ROLE_RES_UPDATE,
                                        this.updateResShow,
                                        this
                                    );
                            }),
                            (l.addUseTimer = function (t, e) {
                                var i = this;
                                this.time_list[t] &&
                                    (this.removeTimer(this.time_list[t]),
                                    (this.time_list[t] = null)),
                                    this.time_list[t] ||
                                        (this.time_list[t] = this.addTimer(
                                            1,
                                            -1,
                                            function () {
                                                var t =
                                                    i.home_list.getItemByListId(
                                                        e
                                                    );
                                                t && t.updateTimer();
                                            }
                                        ));
                            }),
                            (l.updateData = function () {
                                var t,
                                    e =
                                        null != (t = IS(y).GetHomeList())
                                            ? t
                                            : {},
                                    i = [];
                                for (var n in e) i.push(e[n]);
                                this.home_list.datas &&
                                    this.home_list.datas.length != i.length &&
                                    this.home_list.clearData(),
                                    (this.home_list.datas = i);
                            }),
                            (l.onDestroy = function () {
                                for (var t = 0; t < this.resItems.length; t++)
                                    this.resItems[t].node.destroy();
                                this.resItems = null;
                            }),
                            i
                        );
                    })(I)
                );
                var w = (function (t) {
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
                                this).txtName = void 0),
                            (e.item1 = {
                                node: null,
                                frame: null,
                                icon: null,
                                add: null,
                            }),
                            (e.item2 = {
                                node: null,
                                frame: null,
                                icon: null,
                                add: null,
                            }),
                            (e.homeBtn = void 0),
                            (e.homeRed = void 0),
                            (e.stateNode = void 0),
                            (e.state1 = void 0),
                            (e.state2 = void 0),
                            (e.state3 = void 0),
                            (e.state2_time = void 0),
                            (e.state2_slider = void 0),
                            (e.p_view = void 0),
                            e
                        );
                    }
                    e(i, t);
                    var s = i.prototype;
                    return (
                        (s.onInit = function () {
                            var t = this,
                                e = m.findChild(this.node, "btnName");
                            this.view.addComponentCallbackListener(
                                e,
                                n.EventType.CLICK,
                                function () {
                                    uiMgr.openView(
                                        "FlyPetRenameView",
                                        t.data.id,
                                        t.data.name,
                                        2
                                    );
                                }
                            ),
                                (this.txtName = m.findChildComponent(
                                    this.node,
                                    "btnName/txtName",
                                    a
                                ));
                            var i = m.findChild(this.node, "me_item"),
                                s = m.findChildComponent(i, "frame", d),
                                o = m.findChildComponent(i, "icon", d),
                                h = m.findChild(i, "add");
                            this.view.addComponentCallbackListener(
                                i,
                                n.EventType.CLICK,
                                function () {
                                    if (t.data.fly_a && 0 != t.data.fly_a.id) {
                                        var e = 0;
                                        return (
                                            t.data.fly_a.role_id ==
                                                IS(_).GetRoleId() && (e = 1),
                                            void IS(p).send_66_31(
                                                t.data.fly_a.id,
                                                e
                                            )
                                        );
                                    }
                                    uiMgr.openView(
                                        "FlyPetSelectView",
                                        t.data.id
                                    );
                                }
                            ),
                                (this.item1 = {
                                    node: i,
                                    frame: s,
                                    icon: o,
                                    add: h,
                                });
                            var r = m.findChild(this.node, "other_item"),
                                f = m.findChildComponent(r, "frame", d),
                                c = m.findChildComponent(r, "icon", d),
                                u = m.findChild(r, "add");
                            this.view.addComponentCallbackListener(
                                r,
                                n.EventType.CLICK,
                                function () {
                                    if (t.data.fly_b && 0 != t.data.fly_b.id) {
                                        var e = 0;
                                        return (
                                            t.data.fly_a.role_id ==
                                                IS(_).GetRoleId() && (e = 1),
                                            void IS(p).send_66_31(
                                                t.data.fly_b.id,
                                                e
                                            )
                                        );
                                    }
                                    uiMgr.openView(
                                        "FlyPetSelectView",
                                        t.data.id
                                    );
                                }
                            ),
                                (this.item2 = {
                                    node: r,
                                    frame: f,
                                    icon: c,
                                    add: u,
                                }),
                                (this.homeBtn = m.findChild(
                                    this.node,
                                    "btnPlant"
                                )),
                                (this.homeRed = m.findChild(
                                    this.node,
                                    "btnPlant/rp"
                                )),
                                this.view.addComponentCallbackListener(
                                    this.homeBtn,
                                    n.EventType.CLICK,
                                    function () {
                                        uiMgr.openView(
                                            "FlyPetSceneShowView",
                                            t.data.id
                                        );
                                    }
                                ),
                                (this.stateNode = m.findChild(
                                    this.node,
                                    "state"
                                )),
                                (this.state1 = m.findChild(
                                    this.node,
                                    "state/state1"
                                )),
                                (this.state2 = m.findChild(
                                    this.node,
                                    "state/state2"
                                )),
                                (this.state3 = m.findChild(
                                    this.node,
                                    "state/state3"
                                )),
                                (this.state2_time = m.findChildComponent(
                                    this.node,
                                    "state/state2/normal/time",
                                    a
                                )),
                                (this.state2_slider = m.findChildComponent(
                                    this.node,
                                    "state/state2/normal/hp",
                                    l
                                )),
                                (this.p_view = this.view);
                        }),
                        (s.updateTimer = function () {
                            this.state2_time.string = c.formatTimeForSecond(
                                this.data.end_time - c.serverTime
                            );
                            var t =
                                (this.data.end_time - c.serverTime) /
                                (this.data.end_time - this.data.start_time);
                            this.state2_slider.progress = Math.min(1, t);
                        }),
                        (s.onRender = function (t, e) {
                            if (
                                ((this.txtName.string =
                                    f.formatStrWithMirrorDeal(
                                        GetLanguage(205207),
                                        t.id
                                    )),
                                t.name &&
                                    "" != t.name &&
                                    (this.txtName.string = t.name),
                                (this.state1.active = 0 == t.state),
                                (this.state2.active = 1 == t.state),
                                (this.state3.active = 2 == t.state),
                                (this.homeRed.active = 2 == t.state),
                                1 == t.state)
                            ) {
                                this.p_view.time_list[t.id] ||
                                    this.p_view.addUseTimer(t.id, e),
                                    (this.state2_time.string =
                                        c.formatTimeForSecond(
                                            t.end_time - c.serverTime
                                        ));
                                var i =
                                    (t.end_time - c.serverTime) /
                                    (t.end_time - t.start_time);
                                this.state2_slider.progress = Math.min(1, i);
                            }
                            if (t.fly_a && t.fly_a.config_id) {
                                this.item1.add.active = !1;
                                var n = configFly.getDataByKey(
                                    t.fly_a.config_id
                                );
                                (this.item1.icon.node.active = !0),
                                    this.view.loadIcon(
                                        this.item1.icon,
                                        "icon_flypet",
                                        n.icon
                                    );
                            } else
                                (this.item1.add.active = !0),
                                    (this.item1.icon.node.active = !1);
                            if (t.fly_b && t.fly_b.config_id) {
                                var s = configFly.getDataByKey(
                                    t.fly_b.config_id
                                );
                                this.view.loadIcon(
                                    this.item2.icon,
                                    "icon_flypet",
                                    s.icon
                                ),
                                    (this.item2.add.active = !1),
                                    (this.item2.icon.node.active = !0);
                            } else
                                (this.item2.add.active = !0),
                                    (this.item2.icon.node.active = !1);
                        }),
                        (s.onItemClick = function () {}),
                        i
                    );
                })(h);
                i._RF.pop();
            },
        };
    }
);
