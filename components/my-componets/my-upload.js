(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/my-componets/my-upload" ], {
    "0ce4": function ce4(e, t, n) {
        "use strict";
        n.r(t);
        var s = n("6ce7"), o = n.n(s);
        for (var i in s) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(i);
        t["default"] = o.a;
    },
    2899: function _(e, t, n) {
        "use strict";
        n.r(t);
        var s = n("5339"), o = n("0ce4");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        var r = n("f0c5"), u = Object(r["a"])(o["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], void 0);
        t["default"] = u.exports;
    },
    5339: function _(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {
            return s;
        });
        var s = {
            uUpload: function uUpload() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/uview-ui/components/u-upload/u-upload") ]).then(n.bind(null, "793e"));
            },
            helangCompress: function helangCompress() {
                return n.e("components/helang-compress/helang-compress").then(n.bind(null, "1b26"));
            }
        }, o = function o() {
            var e = this.$createElement;
            this._self._c;
        }, i = [];
    },
    "6ce7": function ce7(e, t, n) {
        "use strict";
        (function(e) {
            var s = n("4ea4");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = s(n("2eee")), i = s(n("9523")), r = s(n("c973")), u = s(n("f15c"));
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, s);
                }
                return n;
            }
            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        (0, i.default)(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            var l = {
                name: "q-upload",
                components: {
                    helangCompress: function helangCompress() {
                        n.e("components/helang-compress/helang-compress").then(function() {
                            return resolve(n("1b26"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    value: {
                        type: String,
                        default: ""
                    }
                },
                watch: {
                    value: {
                        immediate: !0,
                        handler: function handler(e) {
                            this.fileList = e ? [ {
                                url: this.value
                            } ] : [];
                        }
                    }
                },
                data: function data() {
                    return {
                        upArr: [ "png", "jpg", "jepg" ],
                        photos: [],
                        fileList: []
                    };
                },
                methods: {
                    afterRead: function afterRead(e) {
                        var t = this;
                        return (0, r.default)(o.default.mark(function n() {
                            var s, i, r, u, a, l;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    s = [].concat(e.file), i = t.fileList.length, s.map(function(e) {
                                        t.fileList.push(c(c({}, e), {}, {
                                            status: "uploading",
                                            message: "上传中"
                                        }));
                                    }), r = 0;

                                  case 4:
                                    if (!(r < s.length)) {
                                        n.next = 21;
                                        break;
                                    }
                                    return console.log("thumb", s[r].thumb), n.next = 8, t.uploadFilePromise(s[r].thumb);

                                  case 8:
                                    if (u = n.sent, console.log("res", u), !u.success) {
                                        n.next = 15;
                                        break;
                                    }
                                    return a = t.fileList[i], t.fileList.splice(i, 1, Object.assign(a, {
                                        status: "success",
                                        message: "",
                                        url: u.message
                                    })), t.$emit("changed", t.photos), n.abrupt("return");

                                  case 15:
                                    l = t.fileList[i], t.fileList.splice(i, 1, Object.assign(l, {
                                        status: "failed",
                                        message: "上传失败"
                                    })), i++;

                                  case 18:
                                    r++, n.next = 4;
                                    break;

                                  case 21:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    uploadFilePromise: function uploadFilePromise(t) {
                        var n = this;
                        return new Promise(function(s, o) {
                            e.uploadFile({
                                url: "".concat(u.default.apiUrl, "systemservice/sys/common/upload"),
                                filePath: t,
                                name: "file",
                                header: {
                                    "X-Access-Token": e.getStorageSync("ACCESS_TOKEN"),
                                    "content-type": "form-data"
                                },
                                success: function success(t) {
                                    console.log("result", t), 401 !== t.statusCode ? setTimeout(function() {
                                        var e = JSON.parse(t.data);
                                        n.photos.push(e.message), s(e);
                                    }, 1e3) : e.showToast({
                                        title: "登录信息已过期，请重新登录!",
                                        duration: 6e3,
                                        icon: "none",
                                        success: function success(t) {
                                            setTimeout(function() {
                                                e.navigateTo({
                                                    url: "/pages/login/login"
                                                });
                                            }, 2e3);
                                        }
                                    });
                                }
                            });
                        });
                    },
                    deletePic: function deletePic(e) {
                        this.disabled || (this.fileList.splice(e.index, 1), console.log("this.fileList", this.fileList), 
                        this.$emit("changed", this.fileList));
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d")["default"]);
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/my-componets/my-upload-create-component", {
    "components/my-componets/my-upload-create-component": function componentsMyComponetsMyUploadCreateComponent(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("2899"));
    }
}, [ [ "components/my-componets/my-upload-create-component" ] ] ]);