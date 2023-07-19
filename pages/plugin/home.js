(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/plugin/home" ], {
    "3a9a": function a9a(t, n, a) {
        "use strict";
        var i = a("477b"), e = a.n(i);
        e.a;
    },
    "477b": function b(t, n, a) {},
    a11a: function a11a(t, n, a) {
        "use strict";
        a.r(n);
        var i = a("a85a"), e = a("b0f4");
        for (var u in e) [ "default" ].indexOf(u) < 0 && function(t) {
            a.d(n, t, function() {
                return e[t];
            });
        }(u);
        a("3a9a");
        var l = a("f0c5"), r = Object(l["a"])(e["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
        n["default"] = r.exports;
    },
    a85a: function a85a(t, n, a) {
        "use strict";
        a.d(n, "b", function() {
            return i;
        }), a.d(n, "c", function() {
            return e;
        }), a.d(n, "a", function() {});
        var i = function i() {
            var t = this.$createElement;
            this._self._c;
        }, e = [];
    },
    b0f4: function b0f4(t, n, a) {
        "use strict";
        a.r(n);
        var i = a("f8d4"), e = a.n(i);
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(t) {
            a.d(n, t, function() {
                return i[t];
            });
        }(u);
        n["default"] = e.a;
    },
    f8d4: function f8d4(t, n, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = {
                name: "components",
                data: function data() {
                    return {
                        StatusBar: this.StatusBar,
                        CustomBar: this.CustomBar,
                        list: [ {
                            title: "索引列表",
                            img: "https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg",
                            url: "../plugin/indexes"
                        }, {
                            title: "微动画",
                            img: "https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",
                            url: "../plugin/animation"
                        }, {
                            title: "全屏抽屉",
                            img: "https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg",
                            url: "../plugin/drawer"
                        }, {
                            title: "垂直导航",
                            img: "https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg",
                            url: "../plugin/verticalnav"
                        } ]
                    };
                },
                methods: {
                    toChild: function toChild(n) {
                        t.navigateTo({
                            url: n.currentTarget.dataset.url
                        });
                    }
                }
            };
            n.default = a;
        }).call(this, a("543d")["default"]);
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "pages/plugin/home-create-component", {
    "pages/plugin/home-create-component": function pagesPluginHomeCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("a11a"));
    }
}, [ [ "pages/plugin/home-create-component" ] ] ]);