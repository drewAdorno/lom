System.register(
    "chunks:///_virtual/FlyPetEggView.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./AudioMgr.ts",
        "./UIList.ts",
        "./RedPointMgr.ts",
        "./NodeUtil.ts",
        "./index57.ts",
        "./SpineSkeleton.ts",
        "./FlyPetControl.ts",
        "./FlyPetDataCache.ts",
        "./FlyPetDefine.ts",
        "./BaseSubView.ts",
    ],
    function (t) {
        "use strict";
        var e, i, n, o, s, g, h, c, a, r, d, u, l, f, _, p, v, m, C;
        return {
            setters: [
                function (t) {
                    e = t.inheritsLoose;
                },
                function (t) {
                    (i = t.cclegacy),
                        (n = t.ScrollView),
                        (o = t.Label),
                        (s = t.Vec2),
                        (g = t.Button),
                        (h = t.Node),
                        (c = t.ProgressBar),
                        (a = t.math),
                        (r = t.Sprite);
                },
                function (t) {
                    d = t.audioMgr;
                },
                function (t) {
                    u = t.ListItem;
                },
                function (t) {
                    l = t.RedPointMgr;
                },
                function (t) {
                    f = t.default;
                },
                null,
                function (t) {
                    _ = t.SpineSkeleton;
                },
                function (t) {
                    p = t.default;
                },
                function (t) {
                    v = t.default;
                },
                function (t) {
                    m = t.FlyPetEventDefine;
                },
                function (t) {
                    C = t.BaseSubView;
                },
            ],
            execute: function () {
                i._RF.push(
                    {},
                    "f1a8bd9HX9Lkb7XJm+er5lo",
                    "FlyPetEggView",
                    void 0
                );
                t(
                    "default",
                    (function (t) {
                        function i() {
                            var e;
                            return (
                                ((e = t.call(this) || this).egg_list = void 0),
                                (e.txtName = void 0),
                                (e.name_bg = void 0),
                                (e.stateNode = void 0),
                                (e.stateUseBtn = void 0),
                                (e.nodeProgress = void 0),
                                (e.is_touch = !1),
                                (e.touch_count = 0),
                                (e.touch_open_count = 50),
                                (e.eggPanel = void 0),
                                (e.select_egg = void 0),
                                (e.select_egg_info = void 0),
                                (e.eggNode = void 0),
                                (e.eggEffect = void 0),
                                (e.egg_effect_name = "huoyanjingdan"),
                                (e.name = "FlyPetEggView"),
                                (e.url = "ui/module/flypet/FlyPetEggView"),
                                e
                            );
                        }
                        e(i, t);
                        var r = i.prototype;
                        return (
                            (r.onInit = function () {
                                var t = this.findChildComponent(
                                    "root/ScrollView",
                                    n
                                );
                                (this.egg_list = this.addUIList(t, E)),
                                    (this.name_bg = this.findChild("root/bg")),
                                    (this.txtName = this.findChildComponent(
                                        "root/bg/txtName",
                                        o
                                    )),
                                    (this.stateNode =
                                        this.findChild("root/state2")),
                                    (this.stateUseBtn =
                                        this.findChild("root/state2/btnUse")),
                                    (this.eggNode = this.findChild("root/egg"));
                                var e = this.findChild("root/title/showBtn");
                                IS(l).addRedPoint(
                                    "TaskFlyPetRed",
                                    e,
                                    new s(30, 30)
                                ),
                                    this.addComponentCallbackListener(
                                        e,
                                        g.EventType.CLICK,
                                        function () {
                                            uiMgr.openView(
                                                "FlyPetAchievementView"
                                            );
                                        }
                                    ),
                                    (this.eggEffect = this.findChildComponent(
                                        "root/egg/effect",
                                        _
                                    )),
                                    this.stateUseBtn.on(
                                        h.EventType.TOUCH_START,
                                        this._onTouchStart,
                                        this
                                    ),
                                    this.stateUseBtn.on(
                                        h.EventType.TOUCH_END,
                                        this._onTouchEnd,
                                        this
                                    ),
                                    (this.nodeProgress =
                                        this.findChildComponent(
                                            "root/state2/nodeProgress/ProgressBar",
                                            c
                                        ));
                            }),
                            (r._onTouchStart = function (t, e) {
                                this.eggEffect.setAnimation(
                                    0,
                                    this.egg_effect_name + "_skill1",
                                    !1
                                ),
                                    (this.eggEffect
                                        .getState()
                                        .getCurrent(0).timeScale = 0),
                                    (this.is_touch = !0),
                                    d.playSpecialSound("feichong_fuhua", !1);
                            }),
                            (r._onTouchEnd = function (t, e) {
                                d.stopSpecialMusic(),
                                    (this.is_touch = !1),
                                    (this.touch_count = 0),
                                    (this.nodeProgress.progress = 0),
                                    this.eggEffect.setAnimation(
                                        0,
                                        this.egg_effect_name + "_idle",
                                        !1
                                    );
                            }),
                            (r.onMaskClick = function () {
                                this.close();
                            }),
                            (r.onUpdate = function (t) {
                                if (
                                    this.is_touch &&
                                    this.touch_count <= this.touch_open_count
                                ) {
                                    (this.touch_count += 15 * t),
                                        (this.nodeProgress.progress = Math.min(
                                            1,
                                            this.touch_count /
                                                this.touch_open_count
                                        ));
                                    var e = this.eggEffect
                                        .getState()
                                        .getCurrent(0);
                                    (e.timeScale = 0),
                                        (e.trackTime = a.lerp(
                                            0,
                                            e.animationEnd - e.animationStart,
                                            this.nodeProgress.progress
                                        )),
                                        this.eggEffect.updateAnimation(0),
                                        this.nodeProgress.progress >= 1 &&
                                            ((this.is_touch = !1),
                                            this.EggEnd());
                                } else
                                    this.is_touch &&
                                        this.touch_count >=
                                            this.touch_open_count &&
                                        ((this.is_touch = !1), this.EggEnd());
                            }),
                            (r.EggEnd = function () {
                                d.stopSpecialMusic(),
                                    IS(p).send_66_3(this.select_egg),
                                    this.resetData(),
                                    this.updateInfo();
                            }),
                            (r.resetData = function () {
                                (this.select_egg = 0),
                                    (this.select_egg_info = null),
                                    (this.touch_count = 0),
                                    (this.nodeProgress.progress = 0);
                            }),
                            (r.resetEgg = function () {
                                (this.touch_count = 0),
                                    (this.nodeProgress.progress = 0),
                                    (this.eggNode.active = !1);
                            }),
                            (r.onAfterOpen = function () {
                                this.resetData(), IS(p).send_66_1();
                            }),
                            (r.SelectEgg = function (t) {
                                (this.select_egg = t.id),
                                    (this.select_egg_info = t),
                                    this.egg_list.updateAll(),
                                    this.resetEgg(),
                                    this.updateInfo();
                            }),
                            (r.updateInfo = function () {
                                if (this.select_egg_info) {
                                    var t = configFly_egg.getDataByKey(
                                        this.select_egg_info.config_id
                                    );
                                    (this.egg_effect_name = t.path),
                                        this.eggEffect.setAnimation(
                                            0,
                                            this.egg_effect_name + "_idle",
                                            !1
                                        );
                                }
                                (this.stateNode.active = 0 != this.select_egg),
                                    (this.name_bg.active =
                                        0 == this.select_egg),
                                    (this.eggNode.active =
                                        0 != this.select_egg);
                            }),
                            (r.onBeforeClose = function () {}),
                            (r.registerUpdateHandler = function () {
                                this.addEvent(m.EggListBack, this.updateData);
                            }),
                            (r.updateData = function () {
                                var t,
                                    e =
                                        null != (t = IS(v).GetEggList())
                                            ? t
                                            : [],
                                    i = [],
                                    n = !1;
                                for (var o in e)
                                    e[o] &&
                                        (0 != this.select_egg &&
                                            this.select_egg == e[o].id &&
                                            (n = !0),
                                        i.push(e[o]));
                                n ||
                                    ((this.select_egg = 0),
                                    (this.select_egg_info = null)),
                                    (this.egg_list.datas = i),
                                    this.updateInfo();
                            }),
                            (r.onDestroy = function () {}),
                            i
                        );
                    })(C)
                );
                var E = (function (t) {
                    function i() {
                        for (
                            var e,
                                i = arguments.length,
                                n = new Array(i),
                                o = 0;
                            o < i;
                            o++
                        )
                            n[o] = arguments[o];
                        return (
                            ((e =
                                t.call.apply(t, [this].concat(n)) ||
                                this).imgFrame = void 0),
                            (e.imgIcon = void 0),
                            (e.sel = void 0),
                            (e.p_view = void 0),
                            e
                        );
                    }
                    e(i, t);
                    var n = i.prototype;
                    return (
                        (n.onInit = function () {
                            var t = this;
                            (this.imgFrame = f.findChildComponent(
                                this.node,
                                "frame",
                                r
                            )),
                                (this.imgIcon = f.findChildComponent(
                                    this.node,
                                    "icon",
                                    r
                                )),
                                (this.sel = f.findChild(this.node, "sel")),
                                (this.p_view = this.view),
                                this.view.addComponentCallbackListener(
                                    this.node,
                                    g.EventType.CLICK,
                                    function () {
                                        t.p_view.SelectEgg(t.data);
                                    }
                                );
                        }),
                        (n.onRender = function (t, e) {
                            var i = configGoods.getDataByKey(t.config_id),
                                n = configColor.getDataByKey(i.quality);
                            this.view.loadIcon(
                                this.imgFrame,
                                "icon_equip",
                                n.path
                            ),
                                this.view.loadIcon(
                                    this.imgIcon,
                                    i.icon_group,
                                    i.icon
                                ),
                                (this.sel.active =
                                    this.p_view.select_egg == this.data.id);
                        }),
                        (n.onItemClick = function () {}),
                        i
                    );
                })(u);
                i._RF.pop();
            },
        };
    }
);
