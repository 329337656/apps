(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/home/index" ], {
    "1e09": function e09(t, e, n) {
        "use strict";
        (function(t, e) {
            var o = n("4ea4");
            n("3c1d");
            o(n("66fd"));
            var i = o(n("fdab"));
            t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default);
        }).call(this, n("bc2e")["default"], n("543d")["createPage"]);
    },
    "6bd7": function bd7(t, e, n) {
        "use strict";
        var o = n("a4b9"), i = n.n(o);
        i.a;
    },
    "6e20": function e20(t, e, n) {
        "use strict";
        (function(t) {
            var o = n("4ea4");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            o(n("0bbb"));
            var i = {
                name: "home",
                data: function data() {
                    return {
                        gongjiri: !1,
                        tabKey: 1,
                        topJl: 0,
                        heightJl: 0,
                        isLoading: !1,
                        personTypes: "",
                        personType: "",
                        homeInfo: [],
                        resultInfo: [],
                        lastPageStatus: !1,
                        page: 1,
                        info: {
                            details: ""
                        },
                        appTypes: 0,
                        swipers: []
                    };
                },
                mounted: function mounted() {
                    var t = this;
                    this.getResultList(1), this.getGonJiRiStatus(), this.topJl = this.StatusBar + 10, 
                    this.heightJl = this.CustomBar, this.$http.get("/vehicleservice/gateway/gateway/list").then(function(e) {
                        if (e.data.success) {
                            var n = e.data.result, o = [];
                            o = n.filter(function(t) {
                                return "SQCL" === t.type;
                            }), t.homeInfo[6] = o[0], t.info = o[0], o = [], o = n.filter(function(t) {
                                return "SFLX" === t.type;
                            }), t.homeInfo[2] = o[0], o = [], o = n.filter(function(t) {
                                return "GZSJ" === t.type;
                            }), t.homeInfo[5] = o[0], o = [], o = n.filter(function(t) {
                                return "SLBZ" === t.type && 0 == t.application;
                            }), t.homeInfo[0] = o[0], o = [], o = n.filter(function(t) {
                                return "BLLC" === t.type && 0 == t.application;
                            }), t.homeInfo[3] = o[0], o = [], o = n.filter(function(t) {
                                return "ZCZX" === t.type && 0 == t.application;
                            }), t.homeInfo[7] = o[0];
                        }
                    }).catch(function(t) {
                        console.log(t);
                    }), this.$http.get("/vehicleservice/demo/api/appletsFileList", {
                        params: {
                            pageNo: 1,
                            pageSize: 20
                        }
                    }).then(function(e) {
                        e.data.success && (t.swipers = e.data.result.records);
                    }).catch(function(t) {
                        console.log(t);
                    });
                },
                methods: {
                    getGonJiRiStatus: function getGonJiRiStatus() {
                        var t = this;
                        this.$http.get("/systemservice/system/sysConfig/getColor").then(function(e) {
                            200 == e.data.code && (e.data.result ? t.gongjiri = !0 : t.gongjiri = !1);
                        });
                    },
                    tabClick: function tabClick(t) {
                        this.tabKey = t, 1 === t ? (this.type = "unit", this.info = this.homeInfo[6]) : 2 === t ? (this.type = "personal", 
                        this.info = this.homeInfo[5]) : this.info = this.homeInfo[2];
                    },
                    getResultList: function getResultList(t) {
                        var e = this, n = {
                            approvalStatus: "passed",
                            pageNo: t,
                            pageSize: 10
                        };
                        this.$http.get("/vehicleservice/demo/api/publicApplyFormList", {
                            params: n
                        }).then(function(t) {
                            if (t.data.success) {
                                var o = t.data.result;
                                o.pages <= n.pageNo ? e.lastPageStatus = !0 : e.lastPageStatus = !1, e.resultInfo = n.pageNo > 1 ? e.resultInfo.concat(t.data.result.records) : t.data.result.records;
                            }
                        }).catch(function(t) {
                            console.log(t);
                        });
                    },
                    onPullDownRefresh2: function onPullDownRefresh2() {
                        var e = this;
                        setTimeout(function() {
                            e.page = 1, e.getResultList(1), t.stopPullDownRefresh();
                        }, 2e3);
                    },
                    onReachBottom2: function onReachBottom2() {
                        if (console.log("onReachBottom--"), !this.lastPageStatus) {
                            var t = this.page + 1;
                            this.page = t, this.getResultList(this.page);
                        }
                    },
                    open_zczx: function open_zczx() {
                        t.navigateTo({
                            url: "/apply/zczx?item=" + encodeURIComponent(JSON.stringify(this.homeInfo))
                        });
                    },
                    open_sqcl: function open_sqcl() {
                        t.navigateTo({
                            url: "/apply/sqcl?item=" + encodeURIComponent(JSON.stringify(this.homeInfo))
                        });
                    },
                    open_bllc: function open_bllc() {
                        t.navigateTo({
                            url: "/apply/bllc?item=" + encodeURIComponent(JSON.stringify(this.homeInfo))
                        });
                    },
                    open_result: function open_result() {
                        t.navigateTo({
                            url: "/apply/result"
                        });
                    },
                    open_standard: function open_standard() {
                        t.navigateTo({
                            url: "/apply/standard?item=" + encodeURIComponent(JSON.stringify(this.homeInfo))
                        });
                    },
                    open_history: function open_history() {
                        var e = t.getStorageSync("USER_INFO");
                        "admin" != e.type ? this.$Router.push({
                            name: "askResult"
                        }) : t.showToast({
                            icon: "none",
                            title: "请登录个人账号或企业账号进行申请!"
                        });
                    },
                    open_sqzb: function open_sqzb() {
                        var e = this;
                        if (e.isLoading) console.log("测试预约防抖", e.isLoading); else {
                            e.isLoading = !0;
                            var n = t.getStorageSync("USER_INFO");
                            console.log("userinfo============>", n), "admin" != n.type ? n.id ? this.$http.get("/applyservice/app/appointForm/getAppointStatus", {}).then(function(n) {
                                if (200 === n.data.code) t.navigateTo({
                                    url: "/apply/askzb",
                                    complete: function complete() {
                                        e.isLoading = !1;
                                    }
                                }); else {
                                    if (500 !== n.data.code) return t.showToast({
                                        icon: "none",
                                        title: "您已预约，详情可查看预约信息!"
                                    }), void setTimeout(function() {
                                        t.navigateTo({
                                            url: "/apply/askResult",
                                            complete: function complete() {
                                                e.isLoading = !1;
                                            }
                                        });
                                    }, 1e3);
                                    t.showToast({
                                        icon: "none",
                                        title: n.data.message
                                    }), e.isLoading = !1;
                                }
                            }).catch(function(t) {
                                e.isLoading = !1, console.log(t);
                            }) : t.navigateTo({
                                url: "/pages/login/login",
                                complete: function complete() {
                                    e.isLoading = !1;
                                }
                            }) : t.showToast({
                                icon: "none",
                                title: "请登录个人账号或企业账号进行申请!"
                            });
                        }
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d")["default"]);
    },
    a4b9: function a4b9(t, e, n) {},
    dbe5: function dbe5(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("6e20"), i = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e["default"] = i.a;
    },
    fbee: function fbee(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function o() {
            var t = this.$createElement;
            this._self._c;
        }, i = [];
    },
    fdab: function fdab(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("fbee"), i = n("dbe5");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("6bd7");
        var s = n("f0c5"), c = Object(s["a"])(i["default"], o["b"], o["c"], !1, null, "7645555c", null, !1, o["a"], void 0);
        e["default"] = c.exports;
    }
}, [ [ "1e09", "common/runtime", "common/vendor" ] ] ]);