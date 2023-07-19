(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "common/main" ], {
    4809: function _(e, t, o) {
        "use strict";
        (function(e, t, n) {
            var a = o("4ea4"), c = a(o("9523"));
            o("3c1d");
            var l = a(o("66fd")), r = a(o("9969")), u = a(o("2187")), i = a(o("3fca")), f = a(o("580e")), d = a(o("f15c")), p = (a(o("c6ac")), 
            o("652d"), o("45a6")), s = a(o("d44b")), m = o("ea37");
            function b(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            e.__webpack_require_UNI_MP_PLUGIN__ = o, l.default.use(s.default), l.default.use(i.default, {
                timeout: 6
            }), l.default.prototype.$store = u.default, l.default.prototype.$tip = f.default, 
            l.default.prototype.$config = d.default, l.default.prototype.$http = m.http;
            l.default.component("mescrollBody", function() {
                Promise.all([ o.e("common/vendor"), o.e("components/mescroll-uni/mescroll-body") ]).then(function() {
                    return resolve(o("2c39"));
                }.bind(null, o)).catch(o.oe);
            });
            l.default.component("mySelect", function() {
                o.e("components/my-componets/my-select").then(function() {
                    return resolve(o("4267"));
                }.bind(null, o)).catch(o.oe);
            });
            l.default.component("myImageUpload", function() {
                o.e("components/my-componets/my-image-upload").then(function() {
                    return resolve(o("6abf"));
                }.bind(null, o)).catch(o.oe);
            });
            l.default.component("myPage", function() {
                o.e("components/my-componets/my-page").then(function() {
                    return resolve(o("f825"));
                }.bind(null, o)).catch(o.oe);
            });
            l.default.component("components", function() {
                o.e("pages/component/home").then(function() {
                    return resolve(o("6c31"));
                }.bind(null, o)).catch(o.oe);
            });
            l.default.component("plugin", function() {
                o.e("pages/plugin/home").then(function() {
                    return resolve(o("a11a"));
                }.bind(null, o)).catch(o.oe);
            });
            l.default.component("cu-custom", function() {
                o.e("plugin/colorui/components/cu-custom").then(function() {
                    return resolve(o("93de"));
                }.bind(null, o)).catch(o.oe);
            }), l.default.config.productionTip = !1, r.default.mpType = "app";
            var y = new l.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(o), !0).forEach(function(t) {
                        (0, c.default)(e, t, o[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : b(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                    });
                }
                return e;
            }({
                store: u.default,
                MinCache: i.default,
                mounted: function mounted() {
                    u.default.commit("SET_ACCEPT", t.getStorageSync(p.ACCEPT) || []), u.default.commit("SET_TOKEN", t.getStorageSync(p.ACCESS_TOKEN) || "");
                }
            }, r.default));
            n(y).$mount();
        }).call(this, o("bc2e")["default"], o("543d")["default"], o("543d")["createApp"]);
    },
    "62ac": function ac(e, t, o) {
        "use strict";
        (function(e, n) {
            var a = o("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = a(o("66fd")), l = (a(o("7d54")), {
                onLaunch: function onLaunch() {
                    e.getSystemInfo({
                        success: function success(e) {
                            c.default.prototype.StatusBar = e.statusBarHeight;
                            var t = n.getMenuButtonBoundingClientRect();
                            c.default.prototype.Custom = t, c.default.prototype.CustomBar = t.bottom + t.top - e.statusBarHeight;
                        }
                    });
                    try {
                        if (e.canIUse("getUpdateManager")) {
                            var t = e.getUpdateManager();
                            t.onCheckForUpdate(function(o) {
                                o.hasUpdate && (t.onUpdateReady(function() {
                                    e.showModal({
                                        title: "更新提示",
                                        content: "新版本已经准备好，是否重启应用？",
                                        showCancel: !1,
                                        success: function success(e) {
                                            e.confirm ? t.applyUpdate() : e.cancel;
                                        }
                                    });
                                }), t.onUpdateFailed(function() {
                                    e.showModal({
                                        title: "已经有新版本了",
                                        content: "新版本已经上线，请您删除当前小程序，重新搜索打开。",
                                        showCancel: !1
                                    });
                                }));
                            });
                        } else e.showModal({
                            title: "提示",
                            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。",
                            showCancel: !1
                        });
                    } catch (o) {
                        o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                        console.log("更新小程序新版逻辑报错", o);
                    }
                    c.default.prototype.NavBarColor = "bg-gradual-blue", c.default.prototype.Radio_Check_Size = "scale(0.7)", 
                    c.default.prototype.bannerList = [], c.default.prototype.ColorList = [ {
                        title: "嫣红",
                        name: "red",
                        color: "#e54d42"
                    }, {
                        title: "桔橙",
                        name: "orange",
                        color: "#f37b1d"
                    }, {
                        title: "明黄",
                        name: "yellow",
                        color: "#fbbd08"
                    }, {
                        title: "橄榄",
                        name: "olive",
                        color: "#8dc63f"
                    }, {
                        title: "森绿",
                        name: "green",
                        color: "#39b54a"
                    }, {
                        title: "天青",
                        name: "cyan",
                        color: "#1cbbb4"
                    }, {
                        title: "海蓝",
                        name: "blue",
                        color: "#0081ff"
                    }, {
                        title: "姹紫",
                        name: "purple",
                        color: "#6739b6"
                    }, {
                        title: "木槿",
                        name: "mauve",
                        color: "#9c26b0"
                    }, {
                        title: "桃粉",
                        name: "pink",
                        color: "#e03997"
                    }, {
                        title: "棕褐",
                        name: "brown",
                        color: "#a5673f"
                    }, {
                        title: "玄灰",
                        name: "grey",
                        color: "#8799a3"
                    }, {
                        title: "草灰",
                        name: "gray",
                        color: "#aaaaaa"
                    }, {
                        title: "墨黑",
                        name: "black",
                        color: "#333333"
                    }, {
                        title: "雅白",
                        name: "white",
                        color: "#ffffff"
                    } ];
                },
                onShow: function onShow() {
                    console.log("App Show");
                },
                onHide: function onHide() {
                    console.log("App Hide");
                }
            });
            t.default = l;
        }).call(this, o("543d")["default"], o("bc2e")["default"]);
    },
    9969: function _(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("a2fa");
        for (var a in n) [ "default" ].indexOf(a) < 0 && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(a);
        o("adb5");
        var c = o("f0c5"), l = Object(c["a"])(n["default"], void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t["default"] = l.exports;
    },
    a2fa: function a2fa(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("62ac"), a = o.n(n);
        for (var c in n) [ "default" ].indexOf(c) < 0 && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(c);
        t["default"] = a.a;
    },
    adb5: function adb5(e, t, o) {
        "use strict";
        var n = o("e211"), a = o.n(n);
        a.a;
    },
    e211: function e211(e, t, o) {}
}, [ [ "4809", "common/runtime", "common/vendor" ] ] ]);