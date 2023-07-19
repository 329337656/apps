(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/component/home" ], {
    "02b2": function b2(e, n, t) {},
    "1fd5": function fd5(e, n, t) {
        "use strict";
        t.r(n);
        var c = t("3fc2"), o = t.n(c);
        for (var l in c) [ "default" ].indexOf(l) < 0 && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(l);
        n["default"] = o.a;
    },
    2618: function _(e, n, t) {
        "use strict";
        var c = t("02b2"), o = t.n(c);
        o.a;
    },
    "3fc2": function fc2(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        n.default = {
            data: function data() {
                return {
                    elements: [ {
                        title: "操作条",
                        name: "bar",
                        color: "purple",
                        cuIcon: "vipcard"
                    }, {
                        title: "导航栏 ",
                        name: "nav",
                        color: "mauve",
                        cuIcon: "formfill"
                    }, {
                        title: "列表",
                        name: "list",
                        color: "pink",
                        cuIcon: "list"
                    }, {
                        title: "卡片",
                        name: "card",
                        color: "brown",
                        cuIcon: "newsfill"
                    }, {
                        title: "表单",
                        name: "form",
                        color: "red",
                        cuIcon: "formfill"
                    }, {
                        title: "时间轴",
                        name: "timeline",
                        color: "orange",
                        cuIcon: "timefill"
                    }, {
                        title: "聊天",
                        name: "chat",
                        color: "green",
                        cuIcon: "messagefill"
                    }, {
                        title: "轮播",
                        name: "swiper",
                        color: "olive",
                        cuIcon: "album"
                    }, {
                        title: "模态框",
                        name: "modal",
                        color: "grey",
                        cuIcon: "squarecheckfill"
                    }, {
                        title: "步骤条",
                        name: "steps",
                        color: "cyan",
                        cuIcon: "roundcheckfill"
                    } ]
                };
            }
        };
    },
    "6c31": function c31(e, n, t) {
        "use strict";
        t.r(n);
        var c = t("ee86"), o = t("1fd5");
        for (var l in o) [ "default" ].indexOf(l) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(l);
        t("2618");
        var r = t("f0c5"), i = Object(r["a"])(o["default"], c["b"], c["c"], !1, null, null, null, !1, c["a"], void 0);
        n["default"] = i.exports;
    },
    ee86: function ee86(e, n, t) {
        "use strict";
        t.d(n, "b", function() {
            return c;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var c = function c() {
            var e = this.$createElement;
            this._self._c;
        }, o = [];
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "pages/component/home-create-component", {
    "pages/component/home-create-component": function pagesComponentHomeCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("6c31"));
    }
}, [ [ "pages/component/home-create-component" ] ] ]);