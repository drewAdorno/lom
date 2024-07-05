System.register(
    "chunks:///_virtual/FlyPetEggGetView.ts",
    [
        "./rollupPluginModLoBabelHelpers.js",
        "cc",
        "./AudioMgr.ts",
        "./UIList.ts",
        "./NodeUtil.ts",
        "./StringUtil.ts",
        "./index57.ts",
        "./FlyPetDataCache.ts",
        "./BaseView.ts",
    ],
    function (t) {
        "use strict";
        var i, e, n, o, l, s, a, d, c, r, h, _, f, p, g, u;
        return {
            setters: [
                function (t) {
                    i = t.inheritsLoose;
                },
                function (t) {
                    (e = t.cclegacy),
                        (n = t.ScrollView),
                        (o = t.UITransform),
                        (l = t.Button),
                        (s = t.Label),
                        (a = t.Sprite),
                        (d = t.Size),
                        (c = t.Vec2),
                        (r = t.sys);
                },
                function (t) {
                    h = t.audioMgr;
                },
                function (t) {
                    _ = t.ListItem;
                },
                function (t) {
                    f = t.default;
                },
                function (t) {
                    p = t.default;
                },
                null,
                function (t) {
                    g = t.default;
                },
                function (t) {
                    u = t.BaseView;
                },
            ],
            execute: function () {
                e._RF.push(
                    {},
                    "9dbdddd97xH9YnKeAsn343J",
                    "FlyPetEggGetView",
                    void 0
                );
                t(
                    "default",
                    (function (t) {
                        function e() {
                            var i;
                            return (
                                ((i = t.call(this) || this).pet_info = void 0),
                                (i.open_type = void 0),
                                (i.pet_name = void 0),
                                (i.pet_icon = void 0),
                                (i.egg_icon = void 0),
                                (i.pet_model = {}),
                                (i.pet_list = void 0),
                                (i.egg_node = void 0),
                                (i.besking_node = void 0),
                                (i.beskill_list = void 0),
                                (i.besk = void 0),
                                (i.title_icon1 = void 0),
                                (i.title_icon2 = void 0),
                                (i.title_icon3 = void 0),
                                (i.node_list = {}),
                                (i.name = "FlyPetEggGetView"),
                                (i.url = "ui/module/flypet/FlyPetEggGetView"),
                                i
                            );
                        }
                        i(e, t);
                        var _ = e.prototype;
                        return (
                            (_.onInit = function () {
                                var t = this;
                                (this.title_icon1 =
                                    this.findChild("root/bg/title/bg")),
                                    (this.title_icon2 =
                                        this.findChild("root/bg/title/bg1")),
                                    (this.title_icon3 =
                                        this.findChild("root/bg/title/bg2")),
                                    (this.besking_node =
                                        this.findChild("root/ScrollView"));
                                var i = this.findChildComponent(
                                    "root/ScrollView",
                                    n
                                );
                                (this.beskill_list = this.addUIList(i, v)),
                                    (this.egg_node = this.findChildComponent(
                                        "root/egg_list",
                                        o
                                    ));
                                var e = this.findChild("imgMask");
                                this.addComponentCallbackListener(
                                    e,
                                    l.EventType.CLICK,
                                    function () {
                                        t.onMaskClick();
                                    }
                                );
                                for (var d = 1; d <= 2; d++) {
                                    var c,
                                        r = this.findChild(
                                            "root/egg_list/item" + d
                                        );
                                    (c = {
                                        node: r,
                                        pet_name: f.findChildComponent(
                                            r,
                                            "txtEffect",
                                            s
                                        ),
                                        pet_icon: f.findChild(r, "icon"),
                                        egg_icon: f.findChildComponent(
                                            r,
                                            "egg",
                                            a
                                        ),
                                    }),
                                        (this.node_list[d] = c);
                                }
                            }),
                            (_.onMaskClick = function () {
                                this.close();
                            }),
                            (_.onAfterOpen = function () {
                                h.playSound("common_reward"),
                                    (this.open_type = this.openArgs[0]),
                                    (this.pet_list = this.openArgs[1]),
                                    (this.besking_node.active =
                                        2 == this.open_type),
                                    this.updateData();
                            }),
                            (_.registerUpdateHandler = function () {}),
                            (_.onBeforeClose = function () {
                                for (var t = 1; t <= 2; t++)
                                    (this.node_list[t].node.active = !1),
                                        null != this.node_list[t].pet_model &&
                                            (this.removeUIEffect(
                                                this.node_list[t].pet_model
                                            ),
                                            (this.node_list[t].pet_model =
                                                null));
                            }),
                            (_.updateEntry = function (t) {
                                var i,
                                    e = null != t ? t : [],
                                    n =
                                        (((i = {})[3] = 1),
                                        (i[2] = 2),
                                        (i[5] = 3),
                                        (i[1] = 4),
                                        (i[4] = 5),
                                        (i[6] = 6),
                                        i);
                                e.sort(function (t, i) {
                                    var e = configFly_entry.getDataByKeys(
                                            "id",
                                            t.k,
                                            "level",
                                            t.v
                                        ),
                                        o = configFly_entry.getDataByKeys(
                                            "id",
                                            i.k,
                                            "level",
                                            i.v
                                        );
                                    return e.quality == o.quality
                                        ? t.id - i.id
                                        : n[e.quality] - n[o.quality];
                                }),
                                    (this.beskill_list.datas = e);
                            }),
                            (_.updateData = function () {
                                (this.title_icon1.active = 1 == this.open_type),
                                    (this.title_icon2.active =
                                        2 == this.open_type),
                                    (this.title_icon3.active = !1);
                                var t =
                                    200 * this.pet_list.length +
                                    50 * (this.pet_list.length - 1);
                                this.egg_node.contentSize = new d(t, 85);
                                for (var i = 1; i <= 2; i++)
                                    (this.node_list[i].node.active = !1),
                                        null != this.node_list[i].pet_model &&
                                            (this.removeUIEffect(
                                                this.node_list[i].pet_model
                                            ),
                                            (this.node_list[i].pet_model =
                                                null));
                                for (
                                    var e = !1, n = 0;
                                    n < this.pet_list.length;
                                    n++
                                ) {
                                    var o = this.node_list[n + 1];
                                    o.node.active = !0;
                                    var l = this.pet_list[n];
                                    if (null != o)
                                        if (
                                            ((o.node.active = !0),
                                            (o.pet_icon.active =
                                                2 == this.open_type),
                                            (o.egg_icon.node.active =
                                                1 == this.open_type),
                                            1 == this.open_type)
                                        ) {
                                            var s = configGoods.getDataByKey(
                                                l.config_id
                                            );
                                            (o.pet_name.string = s.name),
                                                this.loadIcon(
                                                    o.egg_icon,
                                                    s.icon_group,
                                                    s.icon
                                                ),
                                                (o.egg_icon.node.active = !0),
                                                (o.pet_icon.active = !1);
                                        } else if (2 == this.open_type) {
                                            (o.egg_icon.node.active = !1),
                                                (o.pet_icon.active = !0);
                                            var a = configFly.getDataByKey(
                                                l.config_id
                                            );
                                            1 == a.type && (e = !0),
                                                (o.pet_name.string = a.name),
                                                1 ==
                                                    IS(g).GetIsBianYi(
                                                        l.entry_list
                                                    ) &&
                                                    (o.pet_name.string =
                                                        p.formatStrWithMirrorDeal(
                                                            GetLanguage(205206),
                                                            a.name
                                                        ));
                                            var h =
                                                configUnitModel.getDataByKey(
                                                    a.unitid
                                                );
                                            this.updateEntry(l.entry_list),
                                                (o.pet_model = this.addUIEffect(
                                                    h.path,
                                                    o.pet_icon,
                                                    -1,
                                                    new c(0, -60),
                                                    (h.scale / 100) * 4,
                                                    function (t) {
                                                        r.uiMirror &&
                                                            (t.dir = -1);
                                                    }
                                                ));
                                        }
                                }
                                e &&
                                    ((this.title_icon1.active = !1),
                                    (this.title_icon2.active = !1),
                                    (this.title_icon3.active = !0));
                            }),
                            (_.onDestroy = function () {}),
                            e
                        );
                    })(u)
                );
                var v = (function (t) {
                    function e() {
                        for (
                            var i,
                                e = arguments.length,
                                n = new Array(e),
                                o = 0;
                            o < e;
                            o++
                        )
                            n[o] = arguments[o];
                        return (
                            ((i =
                                t.call.apply(t, [this].concat(n)) ||
                                this).addIcon = void 0),
                            (i.downIcon = void 0),
                            (i.txtName = void 0),
                            (i.skill_cfg = void 0),
                            (i.quality_list = {}),
                            i
                        );
                    }
                    i(e, t);
                    var n = e.prototype;
                    return (
                        (n.onInit = function () {
                            var t = this;
                            (this.txtName = f.findChildComponent(
                                this.node,
                                "txtName",
                                s
                            )),
                                (this.addIcon = f.findChild(this.node, "add")),
                                (this.downIcon = f.findChild(
                                    this.node,
                                    "down"
                                ));
                            for (var i = 1; i <= 6; i++) {
                                var e = f.findChild(
                                        this.node,
                                        "quality/quality" + i
                                    ),
                                    n = f.findChildComponent(
                                        e,
                                        "txtQuality",
                                        s
                                    );
                                this.quality_list[i] = { node: e, name: n };
                            }
                            this.view.addComponentCallbackListener(
                                this.node,
                                l.EventType.CLICK,
                                function () {
                                    uiMgr.openView(
                                        "JobSkillTipsView",
                                        p.formatStr.apply(
                                            p,
                                            [t.skill_cfg.desc].concat(
                                                t.skill_cfg.desc_parm
                                            )
                                        ),
                                        t.txtName.node
                                    );
                                }
                            );
                        }),
                        (n.onRender = function (t, i) {
                            var e = configFly_entry.getDataByKeys(
                                "id",
                                t.k,
                                "level",
                                t.v
                            );
                            (this.skill_cfg = e),
                                (this.txtName.string = e.name);
                            for (var n = 1; n <= 6; n++)
                                n == e.quality
                                    ? ((this.quality_list[n].node.active = !0),
                                      (this.quality_list[n].name.string =
                                          e.name))
                                    : (this.quality_list[n].node.active = !1);
                        }),
                        (n.onItemClick = function () {}),
                        e
                    );
                })(_);
                e._RF.pop();
            },
        };
    }
);
