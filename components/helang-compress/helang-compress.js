(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/helang-compress/helang-compress" ], {
    "1b26": function b26(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("a8a3"), a = n("3655");
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        n("1b61");
        var c = n("f0c5"), i = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, "355502ae", null, !1, r["a"], void 0);
        t["default"] = i.exports;
    },
    "1b61": function b61(e, t, n) {
        "use strict";
        var r = n("7dc9"), a = n.n(r);
        a.a;
    },
    3655: function _(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("c484"), a = n.n(r);
        for (var u in r) [ "default" ].indexOf(u) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(u);
        t["default"] = a.a;
    },
    "7dc9": function dc9(e, t, n) {},
    a8a3: function a8a3(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function r() {
            var e = this.$createElement;
            this._self._c;
        }, a = [];
    },
    c484: function c484(e, t, n) {
        "use strict";
        (function(e) {
            var r = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("2eee")), u = r(n("c973")), c = {
                data: function data() {
                    return {
                        pic: "",
                        canvasSize: {
                            width: 0,
                            height: 0
                        }
                    };
                },
                methods: {
                    compress: function compress(t) {
                        var n = this;
                        return new Promise(function() {
                            var r = (0, u.default)(a.default.mark(function r(u, c) {
                                var i, o, s, f, l;
                                return a.default.wrap(function(r) {
                                    while (1) switch (r.prev = r.next) {
                                      case 0:
                                        return r.next = 2, n.getImageInfo(t.src).then(function(e) {
                                            return e;
                                        }).catch(function(e) {
                                            return e;
                                        });

                                      case 2:
                                        if (i = r.sent, console.log(i, "info"), i) {
                                            r.next = 7;
                                            break;
                                        }
                                        return c("获取图片信息异常"), r.abrupt("return");

                                      case 7:
                                        if (o = t.maxSize || 1080, s = t.minSize || 640, f = i.width, l = i.height, !(f <= s && l <= s)) {
                                            r.next = 13;
                                            break;
                                        }
                                        return u(t.src), r.abrupt("return");

                                      case 13:
                                        (f > o || l > o) && (f > l ? (l = Math.floor(l / (f / o)), f = o) : (f = Math.floor(f / (l / o)), 
                                        l = o)), n.$set(n, "canvasSize", {
                                            width: "".concat(f, "rpx"),
                                            height: "".concat(l, "rpx")
                                        }), setTimeout(function() {
                                            var r = e.createCanvasContext("myCanvas", n);
                                            r.clearRect(0, 0, f, l), r.drawImage(i.path, 0, 0, e.upx2px(f), e.upx2px(l)), r.draw(!1, function() {
                                                e.canvasToTempFilePath({
                                                    x: 0,
                                                    y: 0,
                                                    width: e.upx2px(f),
                                                    height: e.upx2px(l),
                                                    destWidth: f,
                                                    destHeight: l,
                                                    canvasId: "myCanvas",
                                                    fileType: t.fileType || "jpg",
                                                    quality: t.quality || .9,
                                                    success: function success(e) {
                                                        console.log("canvasToTempFilePath ===========>", e), u(e.tempFilePath);
                                                    },
                                                    fail: function fail(e) {
                                                        c(null);
                                                    }
                                                }, n);
                                            });
                                        }, 300);

                                      case 16:
                                      case "end":
                                        return r.stop();
                                    }
                                }, r);
                            }));
                            return function(e, t) {
                                return r.apply(this, arguments);
                            };
                        }());
                    },
                    getImageInfo: function getImageInfo(t) {
                        return new Promise(function(n, r) {
                            e.getImageInfo({
                                src: t,
                                success: function success(e) {
                                    n(e);
                                },
                                fail: function fail() {
                                    r(null);
                                }
                            });
                        });
                    },
                    batchCompress: function batchCompress(e) {
                        var t = this, n = 0, r = 0, c = 0, i = [], o = function o() {
                            return new Promise(function(t, o) {
                                var f = function() {
                                    var o = (0, u.default)(a.default.mark(function u() {
                                        var o;
                                        return a.default.wrap(function(a) {
                                            while (1) switch (a.prev = a.next) {
                                              case 0:
                                                return e.progress && e.progress({
                                                    done: r,
                                                    fail: c,
                                                    count: e.batchSrc.length
                                                }), a.next = 3, s();

                                              case 3:
                                                o = a.sent, o ? (r++, i.push(o)) : c++, n++, n >= e.batchSrc.length ? t(!0) : f();

                                              case 7:
                                              case "end":
                                                return a.stop();
                                            }
                                        }, u);
                                    }));
                                    return function() {
                                        return o.apply(this, arguments);
                                    };
                                }();
                                f();
                            });
                        }, s = function s() {
                            return t.compress({
                                src: e.batchSrc[n],
                                maxSize: e.maxSize,
                                fileType: e.fileType,
                                quality: e.quality,
                                minSize: e.minSize
                            });
                        };
                        return new Promise(function() {
                            var e = (0, u.default)(a.default.mark(function e(t, n) {
                                var r;
                                return a.default.wrap(function(e) {
                                    while (1) switch (e.prev = e.next) {
                                      case 0:
                                        return e.next = 2, o();

                                      case 2:
                                        r = e.sent, r ? t(i) : n(null);

                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            }));
                            return function(t, n) {
                                return e.apply(this, arguments);
                            };
                        }());
                    }
                }
            };
            t.default = c;
        }).call(this, n("543d")["default"]);
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/helang-compress/helang-compress-create-component", {
    "components/helang-compress/helang-compress-create-component": function componentsHelangCompressHelangCompressCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("1b26"));
    }
}, [ [ "components/helang-compress/helang-compress-create-component" ] ] ]);