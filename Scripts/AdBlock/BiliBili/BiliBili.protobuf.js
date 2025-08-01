// Build: 2025/6/7 23:58:36
(() => {
    console.time = function (a) {
        this._times = this._times || {}, this._times[a] = Date.now()
    };
    console.timeEnd = function (a) {
        if (this._times && this._times[a]) {
            let e = Date.now() - this._times[a];
            console.log(`${a}: ${e}ms`), delete this._times[a]
        } else console.log(`Timer with label ${a} does not exist.`)
    };

    function wr(a) {
        "use strict";

        function e() {
        }

        function t() {
        }

        var n = String.fromCharCode, i = {}.toString, r = i.call(a.SharedArrayBuffer), f = i(), s = a.Uint8Array,
            l = s || Array, o = s ? ArrayBuffer : l, u = o.isView || function (v) {
                return v && "length" in v
            }, y = i.call(o.prototype);
        o = t.prototype;
        var w = a.TextEncoder, g = new (s ? Uint16Array : l)(32);
        e.prototype.decode = function (v) {
            if (!u(v)) {
                var O = i.call(v);
                if (O !== y && O !== r && O !== f) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                v = s ? new l(v) : v || []
            }
            for (var T = O = "", k = 0, x = v.length | 0, A = x - 32 | 0, R, U, L = 0, K = 0, V, D = 0, S = -1; k < x;) {
                for (R = k <= A ? 32 : x - k | 0; D < R; k = k + 1 | 0, D = D + 1 | 0) {
                    switch (U = v[k] & 255, U >> 4) {
                        case 15:
                            if (V = v[k = k + 1 | 0] & 255, V >> 6 !== 2 || 247 < U) {
                                k = k - 1 | 0;
                                break
                            }
                            L = (U & 7) << 6 | V & 63, K = 5, U = 256;
                        case 14:
                            V = v[k = k + 1 | 0] & 255, L <<= 6, L |= (U & 15) << 6 | V & 63, K = V >> 6 === 2 ? K + 4 | 0 : 24, U = U + 256 & 768;
                        case 13:
                        case 12:
                            V = v[k = k + 1 | 0] & 255, L <<= 6, L |= (U & 31) << 6 | V & 63, K = K + 7 | 0, k < x && V >> 6 === 2 && L >> K && 1114112 > L ? (U = L, L = L - 65536 | 0, 0 <= L && (S = (L >> 10) + 55296 | 0, U = (L & 1023) + 56320 | 0, 31 > D ? (g[D] = S, D = D + 1 | 0, S = -1) : (V = S, S = U, U = V))) : (U >>= 8, k = k - U - 1 | 0, U = 65533), L = K = 0, R = k <= A ? 32 : x - k | 0;
                        default:
                            g[D] = U;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    g[D] = 65533
                }
                if (T += n(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15], g[16], g[17], g[18], g[19], g[20], g[21], g[22], g[23], g[24], g[25], g[26], g[27], g[28], g[29], g[30], g[31]), 32 > D && (T = T.slice(0, D - 32 | 0)), k < x) {
                    if (g[0] = S, D = ~S >>> 31, S = -1, T.length < O.length) continue
                } else S !== -1 && (T += n(S));
                O += T, T = ""
            }
            return O
        }, o.encode = function (v) {
            v = v === void 0 ? "" : "" + v;
            var O = v.length | 0, T = new l((O << 1) + 8 | 0), k, x = 0, A = !s;
            for (k = 0; k < O; k = k + 1 | 0, x = x + 1 | 0) {
                var R = v.charCodeAt(k) | 0;
                if (127 >= R) T[x] = R; else {
                    if (2047 >= R) T[x] = 192 | R >> 6; else {
                        e:{
                            if (55296 <= R) if (56319 >= R) {
                                var U = v.charCodeAt(k = k + 1 | 0) | 0;
                                if (56320 <= U && 57343 >= U) {
                                    if (R = (R << 10) + U - 56613888 | 0, 65535 < R) {
                                        T[x] = 240 | R >> 18, T[x = x + 1 | 0] = 128 | R >> 12 & 63, T[x = x + 1 | 0] = 128 | R >> 6 & 63, T[x = x + 1 | 0] = 128 | R & 63;
                                        continue
                                    }
                                    break e
                                }
                                R = 65533
                            } else 57343 >= R && (R = 65533);
                            !A && k << 1 < x && k << 1 < (x - 7 | 0) && (A = !0, U = new l(3 * O), U.set(T), T = U)
                        }
                        T[x] = 224 | R >> 12, T[x = x + 1 | 0] = 128 | R >> 6 & 63
                    }
                    T[x = x + 1 | 0] = 128 | R & 63
                }
            }
            return s ? T.subarray(0, x) : T.slice(0, x)
        }, a.TextDecoder = e, a.TextEncoder = t
    }

    var b = wr(globalThis);
    var $ = Uint8Array, re = Uint16Array, br = Int32Array,
        Ni = new $([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        Ti = new $([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        kr = new $([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), xi = function (a, e) {
            for (var t = new re(31), n = 0; n < 31; ++n) t[n] = e += 1 << a[n - 1];
            for (var i = new br(t[30]), n = 1; n < 30; ++n) for (var r = t[n]; r < t[n + 1]; ++r) i[r] = r - t[n] << 5 | n;
            return {b: t, r: i}
        }, Bi = xi(Ni, 2), Ui = Bi.b, vr = Bi.r;
    Ui[28] = 258, vr[258] = 28;
    var Ri = xi(Ti, 0), Nr = Ri.b, ea = Ri.r, Ye = new re(32768);
    for (B = 0; B < 32768; ++B) J = (B & 43690) >> 1 | (B & 21845) << 1, J = (J & 52428) >> 2 | (J & 13107) << 2, J = (J & 61680) >> 4 | (J & 3855) << 4, Ye[B] = ((J & 65280) >> 8 | (J & 255) << 8) >> 1;
    var J, B, he = function (a, e, t) {
        for (var n = a.length, i = 0, r = new re(e); i < n; ++i) a[i] && ++r[a[i] - 1];
        var f = new re(e);
        for (i = 1; i < e; ++i) f[i] = f[i - 1] + r[i - 1] << 1;
        var s;
        if (t) {
            s = new re(1 << e);
            var l = 15 - e;
            for (i = 0; i < n; ++i) if (a[i]) for (var o = i << 4 | a[i], u = e - a[i], y = f[a[i] - 1]++ << u, w = y | (1 << u) - 1; y <= w; ++y) s[Ye[y] >> l] = o
        } else for (s = new re(n), i = 0; i < n; ++i) a[i] && (s[i] = Ye[f[a[i] - 1]++] >> 15 - a[i]);
        return s
    }, pe = new $(288);
    for (B = 0; B < 144; ++B) pe[B] = 8;
    var B;
    for (B = 144; B < 256; ++B) pe[B] = 9;
    var B;
    for (B = 256; B < 280; ++B) pe[B] = 7;
    var B;
    for (B = 280; B < 288; ++B) pe[B] = 8;
    var B, Ii = new $(32);
    for (B = 0; B < 32; ++B) Ii[B] = 5;
    var B;
    var Tr = he(pe, 9, 1);
    var xr = he(Ii, 5, 1), Je = function (a) {
        for (var e = a[0], t = 1; t < a.length; ++t) a[t] > e && (e = a[t]);
        return e
    }, _ = function (a, e, t) {
        var n = e / 8 | 0;
        return (a[n] | a[n + 1] << 8) >> (e & 7) & t
    }, qe = function (a, e) {
        var t = e / 8 | 0;
        return (a[t] | a[t + 1] << 8 | a[t + 2] << 16) >> (e & 7)
    }, Br = function (a) {
        return (a + 7) / 8 | 0
    }, Ur = function (a, e, t) {
        return (e == null || e < 0) && (e = 0), (t == null || t > a.length) && (t = a.length), new $(a.subarray(e, t))
    };
    var Rr = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
        z = function (a, e, t) {
            var n = new Error(e || Rr[a]);
            if (n.code = a, Error.captureStackTrace && Error.captureStackTrace(n, z), !t) throw n;
            return n
        }, Ir = function (a, e, t, n) {
            var i = a.length, r = n ? n.length : 0;
            if (!i || e.f && !e.l) return t || new $(0);
            var f = !t, s = f || e.i != 2, l = e.i;
            f && (t = new $(i * 3));
            var o = function (bi) {
                var ki = t.length;
                if (bi > ki) {
                    var vi = new $(Math.max(ki * 2, bi));
                    vi.set(t), t = vi
                }
            }, u = e.f || 0, y = e.p || 0, w = e.b || 0, g = e.l, v = e.d, O = e.m, T = e.n, k = i * 8;
            do {
                if (!g) {
                    u = _(a, y, 1);
                    var x = _(a, y + 1, 3);
                    if (y += 3, x) if (x == 1) g = Tr, v = xr, O = 9, T = 5; else if (x == 2) {
                        var L = _(a, y, 31) + 257, K = _(a, y + 10, 15) + 4, V = L + _(a, y + 5, 31) + 1;
                        y += 14;
                        for (var D = new $(V), S = new $(19), M = 0; M < K; ++M) S[kr[M]] = _(a, y + M * 3, 7);
                        y += K * 3;
                        for (var pi = Je(S), pr = (1 << pi) - 1, dr = he(S, pi, 1), M = 0; M < V;) {
                            var di = dr[_(a, y, pr)];
                            y += di & 15;
                            var A = di >> 4;
                            if (A < 16) D[M++] = A; else {
                                var ne = 0, be = 0;
                                for (A == 16 ? (be = 3 + _(a, y, 3), y += 2, ne = D[M - 1]) : A == 17 ? (be = 3 + _(a, y, 7), y += 3) : A == 18 && (be = 11 + _(a, y, 127), y += 7); be--;) D[M++] = ne
                            }
                        }
                        var mi = D.subarray(0, L), X = D.subarray(L);
                        O = Je(mi), T = Je(X), g = he(mi, O, 1), v = he(X, T, 1)
                    } else z(1); else {
                        var A = Br(y) + 4, R = a[A - 4] | a[A - 3] << 8, U = A + R;
                        if (U > i) {
                            l && z(0);
                            break
                        }
                        s && o(w + R), t.set(a.subarray(A, U), w), e.b = w += R, e.p = y = U * 8, e.f = u;
                        continue
                    }
                    if (y > k) {
                        l && z(0);
                        break
                    }
                }
                s && o(w + 131072);
                for (var mr = (1 << O) - 1, yr = (1 << T) - 1, ze = y; ; ze = y) {
                    var ne = g[qe(a, y) & mr], ie = ne >> 4;
                    if (y += ne & 15, y > k) {
                        l && z(0);
                        break
                    }
                    if (ne || z(2), ie < 256) t[w++] = ie; else if (ie == 256) {
                        ze = y, g = null;
                        break
                    } else {
                        var yi = ie - 254;
                        if (ie > 264) {
                            var M = ie - 257, ue = Ni[M];
                            yi = _(a, y, (1 << ue) - 1) + Ui[M], y += ue
                        }
                        var Ke = v[qe(a, y) & yr], Ge = Ke >> 4;
                        Ke || z(3), y += Ke & 15;
                        var X = Nr[Ge];
                        if (Ge > 3) {
                            var ue = Ti[Ge];
                            X += qe(a, y) & (1 << ue) - 1, y += ue
                        }
                        if (y > k) {
                            l && z(0);
                            break
                        }
                        s && o(w + 131072);
                        var gi = w + yi;
                        if (w < X) {
                            var wi = r - X, gr = Math.min(X, gi);
                            for (wi + w < 0 && z(3); w < gr; ++w) t[w] = n[wi + w]
                        }
                        for (; w < gi; ++w) t[w] = t[w - X]
                    }
                }
                e.l = g, e.p = ze, e.b = w, e.f = u, g && (u = 1, e.m = O, e.d = v, e.n = T)
            } while (!u);
            return w != t.length && f ? Ur(t, 0, w) : t.subarray(0, w)
        };
    var Er = new $(0);
    var Fr = function (a) {
        (a[0] != 31 || a[1] != 139 || a[2] != 8) && z(6, "invalid gzip data");
        var e = a[3], t = 10;
        e & 4 && (t += (a[10] | a[11] << 8) + 2);
        for (var n = (e >> 3 & 1) + (e >> 4 & 1); n > 0; n -= !a[t++]) ;
        return t + (e & 2)
    }, Or = function (a) {
        var e = a.length;
        return (a[e - 4] | a[e - 3] << 8 | a[e - 2] << 16 | a[e - 1] << 24) >>> 0
    };

    function Ei(a, e) {
        var t = Fr(a);
        return t + 8 > a.length && z(6, "invalid gzip data"), Ir(a.subarray(t, -8), {i: 2}, e && e.out || new $(Or(a)), e && e.dictionary)
    }

    var Lr = typeof TextDecoder < "u" && new TextDecoder, Dr = 0;
    try {
        Lr.decode(Er, {stream: !0}), Dr = 1
    } catch {
    }
    var de = class {
        constructor(a, e, t) {
            this._times = new Map, this.name = a ?? "", this.debug = t?.debug ?? !1, a && this.log(`${a} Start`), this.className = e ?? "", this.init()
        }

        static getInstance(a, e) {
            let t = typeof $task < "u" ? "QuanX" : "Surge";
            return de.instances[t] || (de.instances[t] = de.classNames[t](a, t, e)), de.instances[t]
        }

        createProxy(a) {
            return new Proxy(a, {get: this.getFn, set: this.setFn})
        }

        getFn(a, e, t) {
            return a[e]
        }

        setFn(a, e, t, n) {
            return a[e] = t, !0
        }

        getJSON(a, e = {}) {
            let t = this.getVal(a);
            return t ? JSON.parse(t) : e
        }

        setJSON(a, e) {
            this.setVal(JSON.stringify(a), e)
        }

        msg(a = this.name, e = "", t = "", n) {
        }

        log(a) {
            this.debug && (typeof a == "object" && (a = JSON.stringify(a)), console.log(a))
        }

        timeStart(a) {
            this._times.set(a, Date.now())
        }

        timeEnd(a) {
            if (this._times?.has(a)) {
                let e = Date.now() - this._times.get(a);
                this.log(`${a}: ${e}ms`), this._times.delete(a)
            } else this.log(`Timer with label ${a} does not exist.`)
        }

        exit() {
            $done({})
        }

        reject() {
            $done()
        }
    }, H = de;
    H.instances = {}, H.classNames = {QuanX: (a, e, t) => new Oi(a, e, t), Surge: (a, e, t) => new Fi(a, e, t)};
    var Xe = class extends H {
        getFn(a, e, t) {
            let n = Xe.clientAdapter[e] || e;
            return super.getFn(a, n, t)
        }

        setFn(a, e, t, n) {
            let i = Xe.clientAdapter[e] || e;
            return super.setFn(a, i, t, n)
        }

        init() {
            try {
                this.request = this.createProxy($request), this.response = this.createProxy($response)
            } catch (a) {
                this.log(a.toString())
            }
        }

        getVal(a) {
            return $persistentStore.read(a)
        }

        setVal(a, e) {
            $persistentStore.write(a, e)
        }

        msg(a = this.name, e = "", t = "", n) {
            $notification.post(a, e, t, {url: n ?? ""})
        }

        async fetch(a) {
            return await new Promise((e, t) => {
                let {method: n, body: i, bodyBytes: r, ...f} = a, s = r ?? i, l = s instanceof Uint8Array;
                $httpClient[n.toLowerCase()]({...f, body: s, "binary-mode": l}, (o, u, y) => {
                    o && t(o);
                    let w = l ? "bodyBytes" : "body";
                    e({status: u.status, headers: u.headers, [w]: y})
                })
            })
        }

        done(a) {
            let e = a.response ?? a, t, n;
            e.bodyBytes ? (t = e.bodyBytes, delete e.bodyBytes, n = {...a}, n.response ? n.response.body = t : n.body = t) : n = a, $done(n)
        }
    }, Fi = Xe;
    Fi.clientAdapter = {bodyBytes: "body"};
    var Z = class extends H {
        static transferBodyBytes(a, e) {
            return a instanceof ArrayBuffer ? e === "Uint8Array" ? new Uint8Array(a) : a : a instanceof Uint8Array && e === "ArrayBuffer" ? a.buffer.slice(a.byteOffset, a.byteLength + a.byteOffset) : a
        }

        init() {
            try {
                this.request = this.createProxy($request), this.response = this.createProxy($response)
            } catch (a) {
                this.log(a.toString())
            }
        }

        getFn(a, e, t) {
            let n = Z.clientAdapter[e] || e, i = super.getFn(a, n, t);
            return e === "bodyBytes" && (i = Z.transferBodyBytes(i, "Uint8Array")), i
        }

        setFn(a, e, t, n) {
            let i = Z.clientAdapter[e] || e, r = t;
            return e === "bodyBytes" && (r = Z.transferBodyBytes(r, "Uint8Array")), super.setFn(a, i, r, n)
        }

        getVal(a) {
            return $prefs.valueForKey(a)?.replace(/\0/g, "")
        }

        setVal(a, e) {
            $prefs.setValueForKey(a, e)
        }

        msg(a = this.name, e = "", t = "", n) {
            $notify(a, e, t, {"open-url": n ?? ""})
        }

        async fetch(a) {
            return await new Promise(e => {
                let t = {url: "", method: "GET"};
                for (let [n, i] of Object.entries(a)) n === "id" ? t.sessionIndex = i : n === "bodyBytes" ? t.bodyBytes = Z.transferBodyBytes(i, "ArrayBuffer") : t[n] = i;
                a.bodyBytes && delete t.body, $task.fetch(t).then(n => {
                    let i = {status: 200, headers: {}};
                    for (let [r, f] of Object.entries(n)) r === "sessionIndex" ? i.id = f : r === "bodyBytes" ? i.bodyBytes = Z.transferBodyBytes(f, "Uint8Array") : r === "statusCode" ? i.status = f : i[r] = f;
                    e(i)
                })
            })
        }

        done(a) {
            let e = a.response ?? a, t = {};
            for (let [n, i] of Object.entries(e)) n === "status" ? t.status = `HTTP/1.1 ${i}` : n === "bodyBytes" ? t.bodyBytes = Z.transferBodyBytes(i, "ArrayBuffer") : t[n] = i;
            $done(t)
        }
    }, Oi = Z;
    Oi.clientAdapter = {id: "sessionIndex", status: "statusCode"};
    var Ar = H.getInstance("Bilibili Helper", {debug: !1});

    function Pr(a) {
        let e = Vr(a.length), t = new Uint8Array(5 + a.length);
        return t[0] = 0, t.set(e, 1), t.set(a, 5), t
    }

    function Vr(a) {
        let e = new ArrayBuffer(4);
        return new DataView(e).setUint32(0, a, !1), new Uint8Array(e)
    }

    function W(a, e) {
        let t = a.toBinary(e);
        Ar.done({bodyBytes: Pr(t)})
    }

    function ee(a) {
        let e = typeof a;
        if (e == "object") {
            if (Array.isArray(a)) return "array";
            if (a === null) return "null"
        }
        return e
    }

    function ae(a) {
        return a !== null && typeof a == "object" && !Array.isArray(a)
    }

    var q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), ke = [];
    for (let a = 0; a < q.length; a++) ke[q[a].charCodeAt(0)] = a;
    ke[45] = q.indexOf("+");
    ke[95] = q.indexOf("/");

    function Li(a) {
        let e = a.length * 3 / 4;
        a[a.length - 2] == "=" ? e -= 2 : a[a.length - 1] == "=" && (e -= 1);
        let t = new Uint8Array(e), n = 0, i = 0, r, f = 0;
        for (let s = 0; s < a.length; s++) {
            if (r = ke[a.charCodeAt(s)], r === void 0) switch (a[s]) {
                case"=":
                    i = 0;
                case`
`:
                case"\r":
                case"	":
                case" ":
                    continue;
                default:
                    throw Error("invalid base64 string.")
            }
            switch (i) {
                case 0:
                    f = r, i = 1;
                    break;
                case 1:
                    t[n++] = f << 2 | (r & 48) >> 4, f = r, i = 2;
                    break;
                case 2:
                    t[n++] = (f & 15) << 4 | (r & 60) >> 2, f = r, i = 3;
                    break;
                case 3:
                    t[n++] = (f & 3) << 6 | r, i = 0;
                    break
            }
        }
        if (i == 1) throw Error("invalid base64 string.");
        return t.subarray(0, n)
    }

    function Di(a) {
        let e = "", t = 0, n, i = 0;
        for (let r = 0; r < a.length; r++) switch (n = a[r], t) {
            case 0:
                e += q[n >> 2], i = (n & 3) << 4, t = 1;
                break;
            case 1:
                e += q[i | n >> 4], i = (n & 15) << 2, t = 2;
                break;
            case 2:
                e += q[i | n >> 6], e += q[n & 63], t = 0;
                break
        }
        return t && (e += q[i], e += "=", t == 1 && (e += "=")), e
    }

    var h;
    (function (a) {
        a.symbol = Symbol.for("protobuf-ts/unknown"), a.onRead = (t, n, i, r, f) => {
            (e(n) ? n[a.symbol] : n[a.symbol] = []).push({no: i, wireType: r, data: f})
        }, a.onWrite = (t, n, i) => {
            for (let {no: r, wireType: f, data: s} of a.list(n)) i.tag(r, f).raw(s)
        }, a.list = (t, n) => {
            if (e(t)) {
                let i = t[a.symbol];
                return n ? i.filter(r => r.no == n) : i
            }
            return []
        }, a.last = (t, n) => a.list(t, n).slice(-1)[0];
        let e = t => t && Array.isArray(t[a.symbol])
    })(h || (h = {}));
    var c;
    (function (a) {
        a[a.Varint = 0] = "Varint", a[a.Bit64 = 1] = "Bit64", a[a.LengthDelimited = 2] = "LengthDelimited", a[a.StartGroup = 3] = "StartGroup", a[a.EndGroup = 4] = "EndGroup", a[a.Bit32 = 5] = "Bit32"
    })(c || (c = {}));

    function Ai() {
        let a = 0, e = 0;
        for (let n = 0; n < 28; n += 7) {
            let i = this.buf[this.pos++];
            if (a |= (i & 127) << n, (i & 128) == 0) return this.assertBounds(), [a, e]
        }
        let t = this.buf[this.pos++];
        if (a |= (t & 15) << 28, e = (t & 112) >> 4, (t & 128) == 0) return this.assertBounds(), [a, e];
        for (let n = 3; n <= 31; n += 7) {
            let i = this.buf[this.pos++];
            if (e |= (i & 127) << n, (i & 128) == 0) return this.assertBounds(), [a, e]
        }
        throw new Error("invalid varint")
    }

    function Ne(a, e, t) {
        for (let r = 0; r < 28; r = r + 7) {
            let f = a >>> r, s = !(!(f >>> 7) && e == 0), l = (s ? f | 128 : f) & 255;
            if (t.push(l), !s) return
        }
        let n = a >>> 28 & 15 | (e & 7) << 4, i = e >> 3 != 0;
        if (t.push((i ? n | 128 : n) & 255), !!i) {
            for (let r = 3; r < 31; r = r + 7) {
                let f = e >>> r, s = !!(f >>> 7), l = (s ? f | 128 : f) & 255;
                if (t.push(l), !s) return
            }
            t.push(e >>> 31 & 1)
        }
    }

    var ve = 65536 * 65536;

    function Ze(a) {
        let e = a[0] == "-";
        e && (a = a.slice(1));
        let t = 1e6, n = 0, i = 0;

        function r(f, s) {
            let l = Number(a.slice(f, s));
            i *= t, n = n * t + l, n >= ve && (i = i + (n / ve | 0), n = n % ve)
        }

        return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, n, i]
    }

    function Te(a, e) {
        if (e >>> 0 <= 2097151) return "" + (ve * e + (a >>> 0));
        let t = a & 16777215, n = (a >>> 24 | e << 8) >>> 0 & 16777215, i = e >> 16 & 65535,
            r = t + n * 6777216 + i * 6710656, f = n + i * 8147497, s = i * 2, l = 1e7;
        r >= l && (f += Math.floor(r / l), r %= l), f >= l && (s += Math.floor(f / l), f %= l);

        function o(u, y) {
            let w = u ? String(u) : "";
            return y ? "0000000".slice(w.length) + w : w
        }

        return o(s, 0) + o(f, s) + o(r, 1)
    }

    function He(a, e) {
        if (a >= 0) {
            for (; a > 127;) e.push(a & 127 | 128), a = a >>> 7;
            e.push(a)
        } else {
            for (let t = 0; t < 9; t++) e.push(a & 127 | 128), a = a >> 7;
            e.push(1)
        }
    }

    function Pi() {
        let a = this.buf[this.pos++], e = a & 127;
        if ((a & 128) == 0) return this.assertBounds(), e;
        if (a = this.buf[this.pos++], e |= (a & 127) << 7, (a & 128) == 0) return this.assertBounds(), e;
        if (a = this.buf[this.pos++], e |= (a & 127) << 14, (a & 128) == 0) return this.assertBounds(), e;
        if (a = this.buf[this.pos++], e |= (a & 127) << 21, (a & 128) == 0) return this.assertBounds(), e;
        a = this.buf[this.pos++], e |= (a & 15) << 28;
        for (let t = 5; (a & 128) !== 0 && t < 10; t++) a = this.buf[this.pos++];
        if ((a & 128) != 0) throw new Error("invalid varint");
        return this.assertBounds(), e >>> 0
    }

    var I;

    function Sr() {
        let a = new DataView(new ArrayBuffer(8));
        I = globalThis.BigInt !== void 0 && typeof a.getBigInt64 == "function" && typeof a.getBigUint64 == "function" && typeof a.setBigInt64 == "function" && typeof a.setBigUint64 == "function" ? {
            MIN: BigInt("-9223372036854775808"),
            MAX: BigInt("9223372036854775807"),
            UMIN: BigInt("0"),
            UMAX: BigInt("18446744073709551615"),
            C: BigInt,
            V: a
        } : void 0
    }

    Sr();

    function Vi(a) {
        if (!a) throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
    }

    var Si = /^-?[0-9]+$/, Be = 4294967296, xe = 2147483648, Ue = class {
        constructor(e, t) {
            this.lo = e | 0, this.hi = t | 0
        }

        isZero() {
            return this.lo == 0 && this.hi == 0
        }

        toNumber() {
            let e = this.hi * Be + (this.lo >>> 0);
            if (!Number.isSafeInteger(e)) throw new Error("cannot convert to safe number");
            return e
        }
    }, F = class a extends Ue {
        static from(e) {
            if (I) switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e == "") throw new Error("string is no integer");
                    e = I.C(e);
                case"number":
                    if (e === 0) return this.ZERO;
                    e = I.C(e);
                case"bigint":
                    if (!e) return this.ZERO;
                    if (e < I.UMIN) throw new Error("signed value for ulong");
                    if (e > I.UMAX) throw new Error("ulong too large");
                    return I.V.setBigUint64(0, e, !0), new a(I.V.getInt32(0, !0), I.V.getInt32(4, !0))
            } else switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e = e.trim(), !Si.test(e)) throw new Error("string is no integer");
                    let [t, n, i] = Ze(e);
                    if (t) throw new Error("signed value for ulong");
                    return new a(n, i);
                case"number":
                    if (e == 0) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                    if (e < 0) throw new Error("signed value for ulong");
                    return new a(e, e / Be)
            }
            throw new Error("unknown value " + typeof e)
        }

        toString() {
            return I ? this.toBigInt().toString() : Te(this.lo, this.hi)
        }

        toBigInt() {
            return Vi(I), I.V.setInt32(0, this.lo, !0), I.V.setInt32(4, this.hi, !0), I.V.getBigUint64(0, !0)
        }
    };
    F.ZERO = new F(0, 0);
    var E = class a extends Ue {
        static from(e) {
            if (I) switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e == "") throw new Error("string is no integer");
                    e = I.C(e);
                case"number":
                    if (e === 0) return this.ZERO;
                    e = I.C(e);
                case"bigint":
                    if (!e) return this.ZERO;
                    if (e < I.MIN) throw new Error("signed long too small");
                    if (e > I.MAX) throw new Error("signed long too large");
                    return I.V.setBigInt64(0, e, !0), new a(I.V.getInt32(0, !0), I.V.getInt32(4, !0))
            } else switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e = e.trim(), !Si.test(e)) throw new Error("string is no integer");
                    let [t, n, i] = Ze(e);
                    if (t) {
                        if (i > xe || i == xe && n != 0) throw new Error("signed long too small")
                    } else if (i >= xe) throw new Error("signed long too large");
                    let r = new a(n, i);
                    return t ? r.negate() : r;
                case"number":
                    if (e == 0) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                    return e > 0 ? new a(e, e / Be) : new a(-e, -e / Be).negate()
            }
            throw new Error("unknown value " + typeof e)
        }

        isNegative() {
            return (this.hi & xe) !== 0
        }

        negate() {
            let e = ~this.hi, t = this.lo;
            return t ? t = ~t + 1 : e += 1, new a(t, e)
        }

        toString() {
            if (I) return this.toBigInt().toString();
            if (this.isNegative()) {
                let e = this.negate();
                return "-" + Te(e.lo, e.hi)
            }
            return Te(this.lo, this.hi)
        }

        toBigInt() {
            return Vi(I), I.V.setInt32(0, this.lo, !0), I.V.setInt32(4, this.hi, !0), I.V.getBigInt64(0, !0)
        }
    };
    E.ZERO = new E(0, 0);
    var Wi = {readUnknownField: !0, readerFactory: a => new Qe(a)};

    function Ci(a) {
        return a ? Object.assign(Object.assign({}, Wi), a) : Wi
    }

    var Qe = class {
        constructor(e, t) {
            this.varint64 = Ai, this.uint32 = Pi, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder("utf-8", {
                fatal: !0,
                ignoreBOM: !0
            })
        }

        tag() {
            let e = this.uint32(), t = e >>> 3, n = e & 7;
            if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
            return [t, n]
        }

        skip(e) {
            let t = this.pos;
            switch (e) {
                case c.Varint:
                    for (; this.buf[this.pos++] & 128;) ;
                    break;
                case c.Bit64:
                    this.pos += 4;
                case c.Bit32:
                    this.pos += 4;
                    break;
                case c.LengthDelimited:
                    let n = this.uint32();
                    this.pos += n;
                    break;
                case c.StartGroup:
                    let i;
                    for (; (i = this.tag()[1]) !== c.EndGroup;) this.skip(i);
                    break;
                default:
                    throw new Error("cant skip wire type " + e)
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos)
        }

        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF")
        }

        int32() {
            return this.uint32() | 0
        }

        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(e & 1)
        }

        int64() {
            return new E(...this.varint64())
        }

        uint64() {
            return new F(...this.varint64())
        }

        sint64() {
            let [e, t] = this.varint64(), n = -(e & 1);
            return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, new E(e, t)
        }

        bool() {
            let [e, t] = this.varint64();
            return e !== 0 || t !== 0
        }

        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }

        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }

        fixed64() {
            return new F(this.sfixed32(), this.sfixed32())
        }

        sfixed64() {
            return new E(this.sfixed32(), this.sfixed32())
        }

        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }

        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }

        bytes() {
            let e = this.uint32(), t = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
        }

        string() {
            return this.textDecoder.decode(this.bytes())
        }
    };

    function N(a, e) {
        if (!a) throw new Error(e)
    }

    var Wr = 34028234663852886e22, Cr = -34028234663852886e22, $r = 4294967295, jr = 2147483647, Mr = -2147483648;

    function Q(a) {
        if (typeof a != "number") throw new Error("invalid int 32: " + typeof a);
        if (!Number.isInteger(a) || a > jr || a < Mr) throw new Error("invalid int 32: " + a)
    }

    function te(a) {
        if (typeof a != "number") throw new Error("invalid uint 32: " + typeof a);
        if (!Number.isInteger(a) || a > $r || a < 0) throw new Error("invalid uint 32: " + a)
    }

    function se(a) {
        if (typeof a != "number") throw new Error("invalid float 32: " + typeof a);
        if (Number.isFinite(a) && (a > Wr || a < Cr)) throw new Error("invalid float 32: " + a)
    }

    var $i = {writeUnknownFields: !0, writerFactory: () => new et};

    function ji(a) {
        return a ? Object.assign(Object.assign({}, $i), a) : $i
    }

    var et = class {
        constructor(e) {
            this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = []
        }

        finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let i = 0; i < this.chunks.length; i++) e += this.chunks[i].length;
            let t = new Uint8Array(e), n = 0;
            for (let i = 0; i < this.chunks.length; i++) t.set(this.chunks[i], n), n += this.chunks[i].length;
            return this.chunks = [], t
        }

        fork() {
            return this.stack.push({chunks: this.chunks, buf: this.buf}), this.chunks = [], this.buf = [], this
        }

        join() {
            let e = this.finish(), t = this.stack.pop();
            if (!t) throw new Error("invalid state, fork stack empty");
            return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
        }

        tag(e, t) {
            return this.uint32((e << 3 | t) >>> 0)
        }

        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
        }

        uint32(e) {
            for (te(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
            return this.buf.push(e), this
        }

        int32(e) {
            return Q(e), He(e, this.buf), this
        }

        bool(e) {
            return this.buf.push(e ? 1 : 0), this
        }

        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e)
        }

        string(e) {
            let t = this.textEncoder.encode(e);
            return this.uint32(t.byteLength), this.raw(t)
        }

        float(e) {
            se(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
        }

        double(e) {
            let t = new Uint8Array(8);
            return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
        }

        fixed32(e) {
            te(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
        }

        sfixed32(e) {
            Q(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
        }

        sint32(e) {
            return Q(e), e = (e << 1 ^ e >> 31) >>> 0, He(e, this.buf), this
        }

        sfixed64(e) {
            let t = new Uint8Array(8), n = new DataView(t.buffer), i = E.from(e);
            return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t)
        }

        fixed64(e) {
            let t = new Uint8Array(8), n = new DataView(t.buffer), i = F.from(e);
            return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t)
        }

        int64(e) {
            let t = E.from(e);
            return Ne(t.lo, t.hi, this.buf), this
        }

        sint64(e) {
            let t = E.from(e), n = t.hi >> 31, i = t.lo << 1 ^ n, r = (t.hi << 1 | t.lo >>> 31) ^ n;
            return Ne(i, r, this.buf), this
        }

        uint64(e) {
            let t = F.from(e);
            return Ne(t.lo, t.hi, this.buf), this
        }
    };
    var Mi = {emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0},
        _i = {ignoreUnknownFields: !1};

    function tt(a) {
        return a ? Object.assign(Object.assign({}, _i), a) : _i
    }

    function me(a) {
        return a ? Object.assign(Object.assign({}, Mi), a) : Mi
    }

    var Re = Symbol.for("protobuf-ts/message-type");

    function nt(a) {
        let e = !1, t = [];
        for (let n = 0; n < a.length; n++) {
            let i = a.charAt(n);
            i == "_" ? e = !0 : /\d/.test(i) ? (t.push(i), e = !0) : e ? (t.push(i.toUpperCase()), e = !1) : n == 0 ? t.push(i.toLowerCase()) : t.push(i)
        }
        return t.join("")
    }

    var p;
    (function (a) {
        a[a.DOUBLE = 1] = "DOUBLE", a[a.FLOAT = 2] = "FLOAT", a[a.INT64 = 3] = "INT64", a[a.UINT64 = 4] = "UINT64", a[a.INT32 = 5] = "INT32", a[a.FIXED64 = 6] = "FIXED64", a[a.FIXED32 = 7] = "FIXED32", a[a.BOOL = 8] = "BOOL", a[a.STRING = 9] = "STRING", a[a.BYTES = 12] = "BYTES", a[a.UINT32 = 13] = "UINT32", a[a.SFIXED32 = 15] = "SFIXED32", a[a.SFIXED64 = 16] = "SFIXED64", a[a.SINT32 = 17] = "SINT32", a[a.SINT64 = 18] = "SINT64"
    })(p || (p = {}));
    var P;
    (function (a) {
        a[a.BIGINT = 0] = "BIGINT", a[a.STRING = 1] = "STRING", a[a.NUMBER = 2] = "NUMBER"
    })(P || (P = {}));
    var ye;
    (function (a) {
        a[a.NO = 0] = "NO", a[a.PACKED = 1] = "PACKED", a[a.UNPACKED = 2] = "UNPACKED"
    })(ye || (ye = {}));

    function zi(a) {
        var e, t, n, i;
        return a.localName = (e = a.localName) !== null && e !== void 0 ? e : nt(a.name), a.jsonName = (t = a.jsonName) !== null && t !== void 0 ? t : nt(a.name), a.repeat = (n = a.repeat) !== null && n !== void 0 ? n : ye.NO, a.opt = (i = a.opt) !== null && i !== void 0 ? i : a.repeat || a.oneof ? !1 : a.kind == "message", a
    }

    function Ki(a) {
        if (typeof a != "object" || a === null || !a.hasOwnProperty("oneofKind")) return !1;
        switch (typeof a.oneofKind) {
            case"string":
                return a[a.oneofKind] === void 0 ? !1 : Object.keys(a).length == 2;
            case"undefined":
                return Object.keys(a).length == 1;
            default:
                return !1
        }
    }

    var Ie = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
        }

        prepare() {
            if (this.data) return;
            let e = [], t = [], n = [];
            for (let i of this.fields) if (i.oneof) n.includes(i.oneof) || (n.push(i.oneof), e.push(i.oneof), t.push(i.oneof)); else switch (t.push(i.localName), i.kind) {
                case"scalar":
                case"enum":
                    (!i.opt || i.repeat) && e.push(i.localName);
                    break;
                case"message":
                    i.repeat && e.push(i.localName);
                    break;
                case"map":
                    e.push(i.localName);
                    break
            }
            this.data = {req: e, known: t, oneofs: Object.values(n)}
        }

        is(e, t, n = !1) {
            if (t < 0) return !0;
            if (e == null || typeof e != "object") return !1;
            this.prepare();
            let i = Object.keys(e), r = this.data;
            if (i.length < r.req.length || r.req.some(f => !i.includes(f)) || !n && i.some(f => !r.known.includes(f))) return !1;
            if (t < 1) return !0;
            for (let f of r.oneofs) {
                let s = e[f];
                if (!Ki(s)) return !1;
                if (s.oneofKind === void 0) continue;
                let l = this.fields.find(o => o.localName === s.oneofKind);
                if (!l || !this.field(s[s.oneofKind], l, n, t)) return !1
            }
            for (let f of this.fields) if (f.oneof === void 0 && !this.field(e[f.localName], f, n, t)) return !1;
            return !0
        }

        field(e, t, n, i) {
            let r = t.repeat;
            switch (t.kind) {
                case"scalar":
                    return e === void 0 ? t.opt : r ? this.scalars(e, t.T, i, t.L) : this.scalar(e, t.T, t.L);
                case"enum":
                    return e === void 0 ? t.opt : r ? this.scalars(e, p.INT32, i) : this.scalar(e, p.INT32);
                case"message":
                    return e === void 0 ? !0 : r ? this.messages(e, t.T(), n, i) : this.message(e, t.T(), n, i);
                case"map":
                    if (typeof e != "object" || e === null) return !1;
                    if (i < 2) return !0;
                    if (!this.mapKeys(e, t.K, i)) return !1;
                    switch (t.V.kind) {
                        case"scalar":
                            return this.scalars(Object.values(e), t.V.T, i, t.V.L);
                        case"enum":
                            return this.scalars(Object.values(e), p.INT32, i);
                        case"message":
                            return this.messages(Object.values(e), t.V.T(), n, i)
                    }
                    break
            }
            return !0
        }

        message(e, t, n, i) {
            return n ? t.isAssignable(e, i) : t.is(e, i)
        }

        messages(e, t, n, i) {
            if (!Array.isArray(e)) return !1;
            if (i < 2) return !0;
            if (n) {
                for (let r = 0; r < e.length && r < i; r++) if (!t.isAssignable(e[r], i - 1)) return !1
            } else for (let r = 0; r < e.length && r < i; r++) if (!t.is(e[r], i - 1)) return !1;
            return !0
        }

        scalar(e, t, n) {
            let i = typeof e;
            switch (t) {
                case p.UINT64:
                case p.FIXED64:
                case p.INT64:
                case p.SFIXED64:
                case p.SINT64:
                    switch (n) {
                        case P.BIGINT:
                            return i == "bigint";
                        case P.NUMBER:
                            return i == "number" && !isNaN(e);
                        default:
                            return i == "string"
                    }
                case p.BOOL:
                    return i == "boolean";
                case p.STRING:
                    return i == "string";
                case p.BYTES:
                    return e instanceof Uint8Array;
                case p.DOUBLE:
                case p.FLOAT:
                    return i == "number" && !isNaN(e);
                default:
                    return i == "number" && Number.isInteger(e)
            }
        }

        scalars(e, t, n, i) {
            if (!Array.isArray(e)) return !1;
            if (n < 2) return !0;
            if (Array.isArray(e)) {
                for (let r = 0; r < e.length && r < n; r++) if (!this.scalar(e[r], t, i)) return !1
            }
            return !0
        }

        mapKeys(e, t, n) {
            let i = Object.keys(e);
            switch (t) {
                case p.INT32:
                case p.FIXED32:
                case p.SFIXED32:
                case p.SINT32:
                case p.UINT32:
                    return this.scalars(i.slice(0, n).map(r => parseInt(r)), t, n);
                case p.BOOL:
                    return this.scalars(i.slice(0, n).map(r => r == "true" ? !0 : r == "false" ? !1 : r), t, n);
                default:
                    return this.scalars(i, t, n, P.STRING)
            }
        }
    };

    function C(a, e) {
        switch (e) {
            case P.BIGINT:
                return a.toBigInt();
            case P.NUMBER:
                return a.toNumber();
            default:
                return a.toString()
        }
    }

    var Ee = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            var e;
            if (this.fMap === void 0) {
                this.fMap = {};
                let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                for (let n of t) this.fMap[n.name] = n, this.fMap[n.jsonName] = n, this.fMap[n.localName] = n
            }
        }

        assert(e, t, n) {
            if (!e) {
                let i = ee(n);
                throw (i == "number" || i == "boolean") && (i = n.toString()), new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${t}`)
            }
        }

        read(e, t, n) {
            this.prepare();
            let i = [];
            for (let [r, f] of Object.entries(e)) {
                let s = this.fMap[r];
                if (!s) {
                    if (!n.ignoreUnknownFields) throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`);
                    continue
                }
                let l = s.localName, o;
                if (s.oneof) {
                    if (f === null && (s.kind !== "enum" || s.T()[0] !== "google.protobuf.NullValue")) continue;
                    if (i.includes(s.oneof)) throw new Error(`Multiple members of the oneof group "${s.oneof}" of ${this.info.typeName} are present in JSON.`);
                    i.push(s.oneof), o = t[s.oneof] = {oneofKind: l}
                } else o = t;
                if (s.kind == "map") {
                    if (f === null) continue;
                    this.assert(ae(f), s.name, f);
                    let u = o[l];
                    for (let [y, w] of Object.entries(f)) {
                        this.assert(w !== null, s.name + " map value", null);
                        let g;
                        switch (s.V.kind) {
                            case"message":
                                g = s.V.T().internalJsonRead(w, n);
                                break;
                            case"enum":
                                if (g = this.enum(s.V.T(), w, s.name, n.ignoreUnknownFields), g === !1) continue;
                                break;
                            case"scalar":
                                g = this.scalar(w, s.V.T, s.V.L, s.name);
                                break
                        }
                        this.assert(g !== void 0, s.name + " map value", w);
                        let v = y;
                        s.K == p.BOOL && (v = v == "true" ? !0 : v == "false" ? !1 : v), v = this.scalar(v, s.K, P.STRING, s.name).toString(), u[v] = g
                    }
                } else if (s.repeat) {
                    if (f === null) continue;
                    this.assert(Array.isArray(f), s.name, f);
                    let u = o[l];
                    for (let y of f) {
                        this.assert(y !== null, s.name, null);
                        let w;
                        switch (s.kind) {
                            case"message":
                                w = s.T().internalJsonRead(y, n);
                                break;
                            case"enum":
                                if (w = this.enum(s.T(), y, s.name, n.ignoreUnknownFields), w === !1) continue;
                                break;
                            case"scalar":
                                w = this.scalar(y, s.T, s.L, s.name);
                                break
                        }
                        this.assert(w !== void 0, s.name, f), u.push(w)
                    }
                } else switch (s.kind) {
                    case"message":
                        if (f === null && s.T().typeName != "google.protobuf.Value") {
                            this.assert(s.oneof === void 0, s.name + " (oneof member)", null);
                            continue
                        }
                        o[l] = s.T().internalJsonRead(f, n, o[l]);
                        break;
                    case"enum":
                        if (f === null) continue;
                        let u = this.enum(s.T(), f, s.name, n.ignoreUnknownFields);
                        if (u === !1) continue;
                        o[l] = u;
                        break;
                    case"scalar":
                        if (f === null) continue;
                        o[l] = this.scalar(f, s.T, s.L, s.name);
                        break
                }
            }
        }

        enum(e, t, n, i) {
            if (e[0] == "google.protobuf.NullValue" && N(t === null || t === "NULL_VALUE", `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`), t === null) return 0;
            switch (typeof t) {
                case"number":
                    return N(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
                case"string":
                    let r = t;
                    e[2] && t.substring(0, e[2].length) === e[2] && (r = t.substring(e[2].length));
                    let f = e[1][r];
                    return typeof f > "u" && i ? !1 : (N(typeof f == "number", `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`), f)
            }
            N(!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`)
        }

        scalar(e, t, n, i) {
            let r;
            try {
                switch (t) {
                    case p.DOUBLE:
                    case p.FLOAT:
                        if (e === null) return 0;
                        if (e === "NaN") return Number.NaN;
                        if (e === "Infinity") return Number.POSITIVE_INFINITY;
                        if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
                        if (e === "") {
                            r = "empty string";
                            break
                        }
                        if (typeof e == "string" && e.trim().length !== e.length) {
                            r = "extra whitespace";
                            break
                        }
                        if (typeof e != "string" && typeof e != "number") break;
                        let f = Number(e);
                        if (Number.isNaN(f)) {
                            r = "not a number";
                            break
                        }
                        if (!Number.isFinite(f)) {
                            r = "too large or small";
                            break
                        }
                        return t == p.FLOAT && se(f), f;
                    case p.INT32:
                    case p.FIXED32:
                    case p.SFIXED32:
                    case p.SINT32:
                    case p.UINT32:
                        if (e === null) return 0;
                        let s;
                        if (typeof e == "number" ? s = e : e === "" ? r = "empty string" : typeof e == "string" && (e.trim().length !== e.length ? r = "extra whitespace" : s = Number(e)), s === void 0) break;
                        return t == p.UINT32 ? te(s) : Q(s), s;
                    case p.INT64:
                    case p.SFIXED64:
                    case p.SINT64:
                        if (e === null) return C(E.ZERO, n);
                        if (typeof e != "number" && typeof e != "string") break;
                        return C(E.from(e), n);
                    case p.FIXED64:
                    case p.UINT64:
                        if (e === null) return C(F.ZERO, n);
                        if (typeof e != "number" && typeof e != "string") break;
                        return C(F.from(e), n);
                    case p.BOOL:
                        if (e === null) return !1;
                        if (typeof e != "boolean") break;
                        return e;
                    case p.STRING:
                        if (e === null) return "";
                        if (typeof e != "string") {
                            r = "extra whitespace";
                            break
                        }
                        try {
                            encodeURIComponent(e)
                        } catch (l) {
                            l = "invalid UTF8";
                            break
                        }
                        return e;
                    case p.BYTES:
                        if (e === null || e === "") return new Uint8Array(0);
                        if (typeof e != "string") break;
                        return Li(e)
                }
            } catch (f) {
                r = f.message
            }
            this.assert(!1, i + (r ? " - " + r : ""), e)
        }
    };
    var Fe = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
        }

        write(e, t) {
            let n = {}, i = e;
            for (let r of this.fields) {
                if (!r.oneof) {
                    let o = this.field(r, i[r.localName], t);
                    o !== void 0 && (n[t.useProtoFieldName ? r.name : r.jsonName] = o);
                    continue
                }
                let f = i[r.oneof];
                if (f.oneofKind !== r.localName) continue;
                let s = r.kind == "scalar" || r.kind == "enum" ? Object.assign(Object.assign({}, t), {emitDefaultValues: !0}) : t,
                    l = this.field(r, f[r.localName], s);
                N(l !== void 0), n[t.useProtoFieldName ? r.name : r.jsonName] = l
            }
            return n
        }

        field(e, t, n) {
            let i;
            if (e.kind == "map") {
                N(typeof t == "object" && t !== null);
                let r = {};
                switch (e.V.kind) {
                    case"scalar":
                        for (let [l, o] of Object.entries(t)) {
                            let u = this.scalar(e.V.T, o, e.name, !1, !0);
                            N(u !== void 0), r[l.toString()] = u
                        }
                        break;
                    case"message":
                        let f = e.V.T();
                        for (let [l, o] of Object.entries(t)) {
                            let u = this.message(f, o, e.name, n);
                            N(u !== void 0), r[l.toString()] = u
                        }
                        break;
                    case"enum":
                        let s = e.V.T();
                        for (let [l, o] of Object.entries(t)) {
                            N(o === void 0 || typeof o == "number");
                            let u = this.enum(s, o, e.name, !1, !0, n.enumAsInteger);
                            N(u !== void 0), r[l.toString()] = u
                        }
                        break
                }
                (n.emitDefaultValues || Object.keys(r).length > 0) && (i = r)
            } else if (e.repeat) {
                N(Array.isArray(t));
                let r = [];
                switch (e.kind) {
                    case"scalar":
                        for (let l = 0; l < t.length; l++) {
                            let o = this.scalar(e.T, t[l], e.name, e.opt, !0);
                            N(o !== void 0), r.push(o)
                        }
                        break;
                    case"enum":
                        let f = e.T();
                        for (let l = 0; l < t.length; l++) {
                            N(t[l] === void 0 || typeof t[l] == "number");
                            let o = this.enum(f, t[l], e.name, e.opt, !0, n.enumAsInteger);
                            N(o !== void 0), r.push(o)
                        }
                        break;
                    case"message":
                        let s = e.T();
                        for (let l = 0; l < t.length; l++) {
                            let o = this.message(s, t[l], e.name, n);
                            N(o !== void 0), r.push(o)
                        }
                        break
                }
                (n.emitDefaultValues || r.length > 0 || n.emitDefaultValues) && (i = r)
            } else switch (e.kind) {
                case"scalar":
                    i = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                    break;
                case"enum":
                    i = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                    break;
                case"message":
                    i = this.message(e.T(), t, e.name, n);
                    break
            }
            return i
        }

        enum(e, t, n, i, r, f) {
            if (e[0] == "google.protobuf.NullValue") return !r && !i ? void 0 : null;
            if (t === void 0) {
                N(i);
                return
            }
            if (!(t === 0 && !r && !i)) return N(typeof t == "number"), N(Number.isInteger(t)), f || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        }

        message(e, t, n, i) {
            return t === void 0 ? i.emitDefaultValues ? null : void 0 : e.internalJsonWrite(t, i)
        }

        scalar(e, t, n, i, r) {
            if (t === void 0) {
                N(i);
                return
            }
            let f = r || i;
            switch (e) {
                case p.INT32:
                case p.SFIXED32:
                case p.SINT32:
                    return t === 0 ? f ? 0 : void 0 : (Q(t), t);
                case p.FIXED32:
                case p.UINT32:
                    return t === 0 ? f ? 0 : void 0 : (te(t), t);
                case p.FLOAT:
                    se(t);
                case p.DOUBLE:
                    return t === 0 ? f ? 0 : void 0 : (N(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t);
                case p.STRING:
                    return t === "" ? f ? "" : void 0 : (N(typeof t == "string"), t);
                case p.BOOL:
                    return t === !1 ? f ? !1 : void 0 : (N(typeof t == "boolean"), t);
                case p.UINT64:
                case p.FIXED64:
                    N(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
                    let s = F.from(t);
                    return s.isZero() && !f ? void 0 : s.toString();
                case p.INT64:
                case p.SFIXED64:
                case p.SINT64:
                    N(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
                    let l = E.from(t);
                    return l.isZero() && !f ? void 0 : l.toString();
                case p.BYTES:
                    return N(t instanceof Uint8Array), t.byteLength ? Di(t) : f ? "" : void 0
            }
        }
    };

    function ge(a, e = P.STRING) {
        switch (a) {
            case p.BOOL:
                return !1;
            case p.UINT64:
            case p.FIXED64:
                return C(F.ZERO, e);
            case p.INT64:
            case p.SFIXED64:
            case p.SINT64:
                return C(E.ZERO, e);
            case p.DOUBLE:
            case p.FLOAT:
                return 0;
            case p.BYTES:
                return new Uint8Array(0);
            case p.STRING:
                return "";
            default:
                return 0
        }
    }

    var Oe = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            var e;
            if (!this.fieldNoToField) {
                let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                this.fieldNoToField = new Map(t.map(n => [n.no, n]))
            }
        }

        read(e, t, n, i) {
            this.prepare();
            let r = i === void 0 ? e.len : e.pos + i;
            for (; e.pos < r;) {
                let [f, s] = e.tag(), l = this.fieldNoToField.get(f);
                if (!l) {
                    let w = n.readUnknownField;
                    if (w == "throw") throw new Error(`Unknown field ${f} (wire type ${s}) for ${this.info.typeName}`);
                    let g = e.skip(s);
                    w !== !1 && (w === !0 ? h.onRead : w)(this.info.typeName, t, f, s, g);
                    continue
                }
                let o = t, u = l.repeat, y = l.localName;
                switch (l.oneof && (o = o[l.oneof], o.oneofKind !== y && (o = t[l.oneof] = {oneofKind: y})), l.kind) {
                    case"scalar":
                    case"enum":
                        let w = l.kind == "enum" ? p.INT32 : l.T, g = l.kind == "scalar" ? l.L : void 0;
                        if (u) {
                            let T = o[y];
                            if (s == c.LengthDelimited && w != p.STRING && w != p.BYTES) {
                                let k = e.uint32() + e.pos;
                                for (; e.pos < k;) T.push(this.scalar(e, w, g))
                            } else T.push(this.scalar(e, w, g))
                        } else o[y] = this.scalar(e, w, g);
                        break;
                    case"message":
                        if (u) {
                            let T = o[y], k = l.T().internalBinaryRead(e, e.uint32(), n);
                            T.push(k)
                        } else o[y] = l.T().internalBinaryRead(e, e.uint32(), n, o[y]);
                        break;
                    case"map":
                        let [v, O] = this.mapEntry(l, e, n);
                        o[y][v] = O;
                        break
                }
            }
        }

        mapEntry(e, t, n) {
            let i = t.uint32(), r = t.pos + i, f, s;
            for (; t.pos < r;) {
                let [l, o] = t.tag();
                switch (l) {
                    case 1:
                        e.K == p.BOOL ? f = t.bool().toString() : f = this.scalar(t, e.K, P.STRING);
                        break;
                    case 2:
                        switch (e.V.kind) {
                            case"scalar":
                                s = this.scalar(t, e.V.T, e.V.L);
                                break;
                            case"enum":
                                s = t.int32();
                                break;
                            case"message":
                                s = e.V.T().internalBinaryRead(t, t.uint32(), n);
                                break
                        }
                        break;
                    default:
                        throw new Error(`Unknown field ${l} (wire type ${o}) in map entry for ${this.info.typeName}#${e.name}`)
                }
            }
            if (f === void 0) {
                let l = ge(e.K);
                f = e.K == p.BOOL ? l.toString() : l
            }
            if (s === void 0) switch (e.V.kind) {
                case"scalar":
                    s = ge(e.V.T, e.V.L);
                    break;
                case"enum":
                    s = 0;
                    break;
                case"message":
                    s = e.V.T().create();
                    break
            }
            return [f, s]
        }

        scalar(e, t, n) {
            switch (t) {
                case p.INT32:
                    return e.int32();
                case p.STRING:
                    return e.string();
                case p.BOOL:
                    return e.bool();
                case p.DOUBLE:
                    return e.double();
                case p.FLOAT:
                    return e.float();
                case p.INT64:
                    return C(e.int64(), n);
                case p.UINT64:
                    return C(e.uint64(), n);
                case p.FIXED64:
                    return C(e.fixed64(), n);
                case p.FIXED32:
                    return e.fixed32();
                case p.BYTES:
                    return e.bytes();
                case p.UINT32:
                    return e.uint32();
                case p.SFIXED32:
                    return e.sfixed32();
                case p.SFIXED64:
                    return C(e.sfixed64(), n);
                case p.SINT32:
                    return e.sint32();
                case p.SINT64:
                    return C(e.sint64(), n)
            }
        }
    };
    var Le = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            if (!this.fields) {
                let e = this.info.fields ? this.info.fields.concat() : [];
                this.fields = e.sort((t, n) => t.no - n.no)
            }
        }

        write(e, t, n) {
            this.prepare();
            for (let r of this.fields) {
                let f, s, l = r.repeat, o = r.localName;
                if (r.oneof) {
                    let u = e[r.oneof];
                    if (u.oneofKind !== o) continue;
                    f = u[o], s = !0
                } else f = e[o], s = !1;
                switch (r.kind) {
                    case"scalar":
                    case"enum":
                        let u = r.kind == "enum" ? p.INT32 : r.T;
                        if (l) if (N(Array.isArray(f)), l == ye.PACKED) this.packed(t, u, r.no, f); else for (let y of f) this.scalar(t, u, r.no, y, !0); else f === void 0 ? N(r.opt) : this.scalar(t, u, r.no, f, s || r.opt);
                        break;
                    case"message":
                        if (l) {
                            N(Array.isArray(f));
                            for (let y of f) this.message(t, n, r.T(), r.no, y)
                        } else this.message(t, n, r.T(), r.no, f);
                        break;
                    case"map":
                        N(typeof f == "object" && f !== null);
                        for (let [y, w] of Object.entries(f)) this.mapEntry(t, n, r, y, w);
                        break
                }
            }
            let i = n.writeUnknownFields;
            i !== !1 && (i === !0 ? h.onWrite : i)(this.info.typeName, e, t)
        }

        mapEntry(e, t, n, i, r) {
            e.tag(n.no, c.LengthDelimited), e.fork();
            let f = i;
            switch (n.K) {
                case p.INT32:
                case p.FIXED32:
                case p.UINT32:
                case p.SFIXED32:
                case p.SINT32:
                    f = Number.parseInt(i);
                    break;
                case p.BOOL:
                    N(i == "true" || i == "false"), f = i == "true";
                    break
            }
            switch (this.scalar(e, n.K, 1, f, !0), n.V.kind) {
                case"scalar":
                    this.scalar(e, n.V.T, 2, r, !0);
                    break;
                case"enum":
                    this.scalar(e, p.INT32, 2, r, !0);
                    break;
                case"message":
                    this.message(e, t, n.V.T(), 2, r);
                    break
            }
            e.join()
        }

        message(e, t, n, i, r) {
            r !== void 0 && (n.internalBinaryWrite(r, e.tag(i, c.LengthDelimited).fork(), t), e.join())
        }

        scalar(e, t, n, i, r) {
            let [f, s, l] = this.scalarInfo(t, i);
            (!l || r) && (e.tag(n, f), e[s](i))
        }

        packed(e, t, n, i) {
            if (!i.length) return;
            N(t !== p.BYTES && t !== p.STRING), e.tag(n, c.LengthDelimited), e.fork();
            let [, r] = this.scalarInfo(t);
            for (let f = 0; f < i.length; f++) e[r](i[f]);
            e.join()
        }

        scalarInfo(e, t) {
            let n = c.Varint, i, r = t === void 0, f = t === 0;
            switch (e) {
                case p.INT32:
                    i = "int32";
                    break;
                case p.STRING:
                    f = r || !t.length, n = c.LengthDelimited, i = "string";
                    break;
                case p.BOOL:
                    f = t === !1, i = "bool";
                    break;
                case p.UINT32:
                    i = "uint32";
                    break;
                case p.DOUBLE:
                    n = c.Bit64, i = "double";
                    break;
                case p.FLOAT:
                    n = c.Bit32, i = "float";
                    break;
                case p.INT64:
                    f = r || E.from(t).isZero(), i = "int64";
                    break;
                case p.UINT64:
                    f = r || F.from(t).isZero(), i = "uint64";
                    break;
                case p.FIXED64:
                    f = r || F.from(t).isZero(), n = c.Bit64, i = "fixed64";
                    break;
                case p.BYTES:
                    f = r || !t.byteLength, n = c.LengthDelimited, i = "bytes";
                    break;
                case p.FIXED32:
                    n = c.Bit32, i = "fixed32";
                    break;
                case p.SFIXED32:
                    n = c.Bit32, i = "sfixed32";
                    break;
                case p.SFIXED64:
                    f = r || E.from(t).isZero(), n = c.Bit64, i = "sfixed64";
                    break;
                case p.SINT32:
                    i = "sint32";
                    break;
                case p.SINT64:
                    f = r || E.from(t).isZero(), i = "sint64";
                    break
            }
            return [n, i, r || f]
        }
    };

    function Gi(a) {
        let e = a.messagePrototype ? Object.create(a.messagePrototype) : Object.defineProperty({}, Re, {value: a});
        for (let t of a.fields) {
            let n = t.localName;
            if (!t.opt) if (t.oneof) e[t.oneof] = {oneofKind: void 0}; else if (t.repeat) e[n] = []; else switch (t.kind) {
                case"scalar":
                    e[n] = ge(t.T, t.L);
                    break;
                case"enum":
                    e[n] = 0;
                    break;
                case"map":
                    e[n] = {};
                    break
            }
        }
        return e
    }

    function d(a, e, t) {
        let n, i = t, r;
        for (let f of a.fields) {
            let s = f.localName;
            if (f.oneof) {
                let l = i[f.oneof];
                if (l?.oneofKind == null) continue;
                if (n = l[s], r = e[f.oneof], r.oneofKind = l.oneofKind, n == null) {
                    delete r[s];
                    continue
                }
            } else if (n = i[s], r = e, n == null) continue;
            switch (f.repeat && (r[s].length = n.length), f.kind) {
                case"scalar":
                case"enum":
                    if (f.repeat) for (let o = 0; o < n.length; o++) r[s][o] = n[o]; else r[s] = n;
                    break;
                case"message":
                    let l = f.T();
                    if (f.repeat) for (let o = 0; o < n.length; o++) r[s][o] = l.create(n[o]); else r[s] === void 0 ? r[s] = l.create(n) : l.mergePartial(r[s], n);
                    break;
                case"map":
                    switch (f.V.kind) {
                        case"scalar":
                        case"enum":
                            Object.assign(r[s], n);
                            break;
                        case"message":
                            let o = f.V.T();
                            for (let u of Object.keys(n)) r[s][u] = o.create(n[u]);
                            break
                    }
                    break
            }
        }
    }

    function Yi(a, e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        for (let n of a.fields) {
            let i = n.localName, r = n.oneof ? e[n.oneof][i] : e[i], f = n.oneof ? t[n.oneof][i] : t[i];
            switch (n.kind) {
                case"enum":
                case"scalar":
                    let s = n.kind == "enum" ? p.INT32 : n.T;
                    if (!(n.repeat ? Ji(s, r, f) : Xi(s, r, f))) return !1;
                    break;
                case"map":
                    if (!(n.V.kind == "message" ? qi(n.V.T(), De(r), De(f)) : Ji(n.V.kind == "enum" ? p.INT32 : n.V.T, De(r), De(f)))) return !1;
                    break;
                case"message":
                    let l = n.T();
                    if (!(n.repeat ? qi(l, r, f) : l.equals(r, f))) return !1;
                    break
            }
        }
        return !0
    }

    var De = Object.values;

    function Xi(a, e, t) {
        if (e === t) return !0;
        if (a !== p.BYTES) return !1;
        let n = e, i = t;
        if (n.length !== i.length) return !1;
        for (let r = 0; r < n.length; r++) if (n[r] != i[r]) return !1;
        return !0
    }

    function Ji(a, e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!Xi(a, e[n], t[n])) return !1;
        return !0
    }

    function qi(a, e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!a.equals(e[n], t[n])) return !1;
        return !0
    }

    var _r = Object.getOwnPropertyDescriptors(Object.getPrototypeOf({})), m = class {
        constructor(e, t, n) {
            this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(zi), this.options = n ?? {}, this.messagePrototype = Object.create(null, Object.assign(Object.assign({}, _r), {[Re]: {value: this}})), this.refTypeCheck = new Ie(this), this.refJsonReader = new Ee(this), this.refJsonWriter = new Fe(this), this.refBinReader = new Oe(this), this.refBinWriter = new Le(this)
        }

        create(e) {
            let t = Gi(this);
            return e !== void 0 && d(this, t, e), t
        }

        clone(e) {
            let t = this.create();
            return d(this, t, e), t
        }

        equals(e, t) {
            return Yi(this, e, t)
        }

        is(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !1)
        }

        isAssignable(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !0)
        }

        mergePartial(e, t) {
            d(this, e, t)
        }

        fromBinary(e, t) {
            let n = Ci(t);
            return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
        }

        fromJson(e, t) {
            return this.internalJsonRead(e, tt(t))
        }

        fromJsonString(e, t) {
            let n = JSON.parse(e);
            return this.fromJson(n, t)
        }

        toJson(e, t) {
            return this.internalJsonWrite(e, me(t))
        }

        toJsonString(e, t) {
            var n;
            let i = this.toJson(e, t);
            return JSON.stringify(i, null, (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0)
        }

        toBinary(e, t) {
            let n = ji(t);
            return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
        }

        internalJsonRead(e, t, n) {
            if (e !== null && typeof e == "object" && !Array.isArray(e)) {
                let i = n ?? this.create();
                return this.refJsonReader.read(e, i, t), i
            }
            throw new Error(`Unable to parse message ${this.typeName} from JSON ${ee(e)}.`)
        }

        internalJsonWrite(e, t) {
            return this.refJsonWriter.write(e, t)
        }

        internalBinaryWrite(e, t, n) {
            return this.refBinWriter.write(e, t, n), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create();
            return this.refBinReader.read(e, r, n, t), r
        }
    };
    var le;
    (function (a) {
        a[a.DYN_NONE = 0] = "DYN_NONE", a[a.AD = 15] = "AD", a[a.LIVE_RCMD = 18] = "LIVE_RCMD"
    })(le || (le = {}));
    var st = class extends m {
        constructor() {
            super("bilibili.app.dynamic.v2.DynAllReply", [{
                no: 1,
                name: "dynamic_list",
                kind: "message",
                T: () => it
            }, {no: 2, name: "up_list", kind: "message", T: () => at}, {
                no: 3,
                name: "topic_list",
                kind: "scalar",
                T: 12
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.topicList = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.dynamicList = it.internalBinaryRead(e, e.uint32(), n, r.dynamicList);
                        break;
                    case 2:
                        r.upList = at.internalBinaryRead(e, e.uint32(), n, r.upList);
                        break;
                    case 3:
                        r.topicList = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.dynamicList && it.internalBinaryWrite(e.dynamicList, t.tag(1, c.LengthDelimited).fork(), n).join(), e.upList && at.internalBinaryWrite(e.upList, t.tag(2, c.LengthDelimited).fork(), n).join(), e.topicList.length && t.tag(3, c.LengthDelimited).bytes(e.topicList);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, ut = new st, ot = class extends m {
        constructor() {
            super("bilibili.app.dynamic.v2.DynamicList", [{
                no: 1,
                name: "list",
                kind: "message",
                repeat: 2,
                T: () => rt
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.list = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.list.push(rt.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.list.length; r++) rt.internalBinaryWrite(e.list[r], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, it = new ot, lt = class extends m {
        constructor() {
            super("bilibili.app.dynamic.v2.DynamicItem", [{
                no: 1,
                name: "card_type",
                kind: "enum",
                T: () => ["bilibili.app.dynamic.v2.DynamicType", le]
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cardType = 0, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.cardType = e.int32();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.cardType !== 0 && t.tag(1, c.Varint).int32(e.cardType);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, rt = new lt, ft = class extends m {
        constructor() {
            super("bilibili.app.dynamic.v2.CardVideoUpList", [{
                no: 2,
                name: "list",
                kind: "message",
                repeat: 2,
                T: () => oe
            }, {no: 4, name: "show_live_num", kind: "scalar", T: 5}, {
                no: 10,
                name: "list_second",
                kind: "message",
                repeat: 2,
                T: () => oe
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.list = [], t.showLiveNum = 0, t.listSecond = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 2:
                        r.list.push(oe.internalBinaryRead(e, e.uint32(), n));
                        break;
                    case 4:
                        r.showLiveNum = e.int32();
                        break;
                    case 10:
                        r.listSecond.push(oe.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.list.length; r++) oe.internalBinaryWrite(e.list[r], t.tag(2, c.LengthDelimited).fork(), n).join();
            e.showLiveNum !== 0 && t.tag(4, c.Varint).int32(e.showLiveNum);
            for (let r = 0; r < e.listSecond.length; r++) oe.internalBinaryWrite(e.listSecond[r], t.tag(10, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, at = new ft, ct = class extends m {
        constructor() {
            super("bilibili.app.dynamic.v2.UpListItem", [{no: 11, name: "separator", kind: "scalar", T: 8}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.separator = !1, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 11:
                        r.separator = e.bool();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.separator !== !1 && t.tag(11, c.Varint).bool(e.separator);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, oe = new ct;
    var Zi;
    (function (a) {
        a[a.NO_TYPE = 0] = "NO_TYPE", a[a.BACKGROUNDPLAY = 9] = "BACKGROUNDPLAY", a[a.SMALLWINDOW = 23] = "SMALLWINDOW", a[a.FREYAENTER = 31] = "FREYAENTER", a[a.FREYAFULLENTER = 32] = "FREYAFULLENTER", a[a.SKIPOPED = 33] = "SKIPOPED"
    })(Zi || (Zi = {}));
    var mt;
    (function (a) {
        a[a.UNKNOWN = 0] = "UNKNOWN", a[a.UGC = 1] = "UGC", a[a.PGC = 2] = "PGC", a[a.PUGV = 3] = "PUGV"
    })(mt || (mt = {}));
    var yt = class extends m {
        constructor() {
            super("bilibili.playershared.VideoVod", [{no: 1, name: "aid", kind: "scalar", T: 3}, {
                no: 2,
                name: "cid",
                kind: "scalar",
                T: 3
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.aid = "0", t.cid = "0", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.aid = e.int64().toString();
                        break;
                    case 2:
                        r.cid = e.int64().toString();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.aid !== "0" && t.tag(1, c.Varint).int64(e.aid), e.cid !== "0" && t.tag(2, c.Varint).int64(e.cid);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Pe = new yt, gt = class extends m {
        constructor() {
            super("bilibili.playershared.VodInfo", [{
                no: 5,
                name: "stream_list",
                kind: "message",
                repeat: 2,
                T: () => ht
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.streamList = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 5:
                        r.streamList.push(ht.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.streamList.length; r++) ht.internalBinaryWrite(e.streamList[r], t.tag(5, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Ve = new gt, wt = class extends m {
        constructor() {
            super("bilibili.playershared.Stream", [{no: 1, name: "stream_info", kind: "message", T: () => pt}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.streamInfo = pt.internalBinaryRead(e, e.uint32(), n, r.streamInfo);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.streamInfo && pt.internalBinaryWrite(e.streamInfo, t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, ht = new wt, bt = class extends m {
        constructor() {
            super("bilibili.playershared.StreamInfo", [{no: 6, name: "need_vip", kind: "scalar", opt: !0, T: 8}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 6:
                        r.needVip = e.bool();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.needVip !== void 0 && t.tag(6, c.Varint).bool(e.needVip);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, pt = new bt, kt = class extends m {
        constructor() {
            super("bilibili.playershared.PlayArcConf", [{
                no: 1,
                name: "arc_confs",
                kind: "map",
                K: 5,
                V: {kind: "message", T: () => Ae}
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.arcConfs = {}, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        this.binaryReadMap1(r.arcConfs, e, n);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        binaryReadMap1(e, t, n) {
            let i = t.uint32(), r = t.pos + i, f, s;
            for (; t.pos < r;) {
                let [l, o] = t.tag();
                switch (l) {
                    case 1:
                        f = t.int32();
                        break;
                    case 2:
                        s = Ae.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.playershared.PlayArcConf.arc_confs")
                }
            }
            e[f ?? 0] = s ?? Ae.create()
        }

        internalBinaryWrite(e, t, n) {
            for (let r of globalThis.Object.keys(e.arcConfs)) t.tag(1, c.LengthDelimited).fork().tag(1, c.Varint).int32(parseInt(r)), t.tag(2, c.LengthDelimited).fork(), Ae.internalBinaryWrite(e.arcConfs[r], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Se = new kt, vt = class extends m {
        constructor() {
            super("bilibili.playershared.ArcConf", [{no: 1, name: "is_support", kind: "scalar", T: 8}, {
                no: 2,
                name: "disabled",
                kind: "scalar",
                T: 8
            }, {no: 3, name: "extra_content", kind: "message", T: () => dt}, {
                no: 4,
                name: "unsupport_scene",
                kind: "scalar",
                repeat: 1,
                T: 5
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.isSupport = !1, t.disabled = !1, t.unsupportScene = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.isSupport = e.bool();
                        break;
                    case 2:
                        r.disabled = e.bool();
                        break;
                    case 3:
                        r.extraContent = dt.internalBinaryRead(e, e.uint32(), n, r.extraContent);
                        break;
                    case 4:
                        if (l === c.LengthDelimited) for (let y = e.int32() + e.pos; e.pos < y;) r.unsupportScene.push(e.int32()); else r.unsupportScene.push(e.int32());
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            if (e.isSupport !== !1 && t.tag(1, c.Varint).bool(e.isSupport), e.disabled !== !1 && t.tag(2, c.Varint).bool(e.disabled), e.extraContent && dt.internalBinaryWrite(e.extraContent, t.tag(3, c.LengthDelimited).fork(), n).join(), e.unsupportScene.length) {
                t.tag(4, c.LengthDelimited).fork();
                for (let r = 0; r < e.unsupportScene.length; r++) t.int32(e.unsupportScene[r]);
                t.join()
            }
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Ae = new vt, Nt = class extends m {
        constructor() {
            super("bilibili.playershared.ExtraContent", [{no: 1, name: "disable_reason", kind: "scalar", T: 9}, {
                no: 2,
                name: "disable_code",
                kind: "scalar",
                T: 3
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.disableReason = "", t.disableCode = "0", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.disableReason = e.string();
                        break;
                    case 2:
                        r.disableCode = e.int64().toString();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.disableReason !== "" && t.tag(1, c.LengthDelimited).string(e.disableReason), e.disableCode !== "0" && t.tag(2, c.Varint).int64(e.disableCode);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, dt = new Nt, Tt = class extends m {
        constructor() {
            super("bilibili.playershared.PlayArc", [{
                no: 1,
                name: "video_type",
                kind: "enum",
                T: () => ["bilibili.playershared.BizType", mt, "BIZ_TYPE_"]
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.videoType = 0, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.videoType = e.int32();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.videoType !== 0 && t.tag(1, c.Varint).int32(e.videoType);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, We = new Tt, xt = class extends m {
        constructor() {
            super("bilibili.playershared.ViewInfo", [{no: 2, name: "prompt_bar", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.promptBar = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 2:
                        r.promptBar = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.promptBar.length && t.tag(2, c.LengthDelimited).bytes(e.promptBar);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Ce = new xt;
    var Bt = class extends m {
        constructor() {
            super("google.protobuf.Any", [{no: 1, name: "type_url", kind: "scalar", T: 9}, {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 12
            }])
        }

        pack(e, t) {
            return {typeUrl: this.typeNameToUrl(t.typeName), value: t.toBinary(e)}
        }

        unpack(e, t, n) {
            if (!this.contains(e, t)) throw new Error("Cannot unpack google.protobuf.Any with typeUrl '" + e.typeUrl + "' as " + t.typeName + ".");
            return t.fromBinary(e.value, n)
        }

        contains(e, t) {
            if (!e.typeUrl.length) return !1;
            let n = typeof t == "string" ? t : t.typeName, i = this.typeUrlToName(e.typeUrl);
            return n === i
        }

        internalJsonWrite(e, t) {
            if (e.typeUrl === "") return {};
            let n = this.typeUrlToName(e.typeUrl), i = me(t), r = i.typeRegistry?.find(l => l.typeName === n);
            if (!r) throw new globalThis.Error("Unable to convert google.protobuf.Any with typeUrl '" + e.typeUrl + "' to JSON. The specified type " + n + " is not available in the type registry.");
            let f = r.fromBinary(e.value, {readUnknownField: !1}), s = r.internalJsonWrite(f, i);
            return (n.startsWith("google.protobuf.") || !ae(s)) && (s = {value: s}), s["@type"] = e.typeUrl, s
        }

        internalJsonRead(e, t, n) {
            if (!ae(e)) throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON " + ee(e) + ".");
            if (typeof e["@type"] != "string" || e["@type"] == "") return this.create();
            let i = this.typeUrlToName(e["@type"]), r = t?.typeRegistry?.find(s => s.typeName == i);
            if (!r) throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON. The specified type " + i + " is not available in the type registry.");
            let f;
            if (i.startsWith("google.protobuf.") && e.hasOwnProperty("value")) f = r.fromJson(e.value, t); else {
                let s = Object.assign({}, e);
                delete s["@type"], f = r.fromJson(s, t)
            }
            return n === void 0 && (n = this.create()), n.typeUrl = e["@type"], n.value = r.toBinary(f), n
        }

        typeNameToUrl(e) {
            if (!e.length) throw new Error("invalid type name: " + e);
            return "type.googleapis.com/" + e
        }

        typeUrlToName(e) {
            if (!e.length) throw new Error("invalid type url: " + e);
            let t = e.lastIndexOf("/"), n = t > 0 ? e.substring(t + 1) : e;
            if (!n.length) throw new Error("invalid type url: " + e);
            return n
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.typeUrl = "", t.value = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.typeUrl = e.string();
                        break;
                    case 2:
                        r.value = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.typeUrl !== "" && t.tag(1, c.LengthDelimited).string(e.typeUrl), e.value.length && t.tag(2, c.LengthDelimited).bytes(e.value);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, $e = new Bt;
    var Ut = class extends m {
        constructor() {
            super("bilibili.app.playerunite.v1.PlayViewUniteReq", [{
                no: 1,
                name: "vod",
                kind: "message",
                T: () => Pe
            }, {no: 5, name: "bvid", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.bvid = "", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.vod = Pe.internalBinaryRead(e, e.uint32(), n, r.vod);
                        break;
                    case 5:
                        r.bvid = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.vod && Pe.internalBinaryWrite(e.vod, t.tag(1, c.LengthDelimited).fork(), n).join(), e.bvid !== "" && t.tag(5, c.LengthDelimited).string(e.bvid);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, wl = new Ut, Rt = class extends m {
        constructor() {
            super("bilibili.app.playerunite.v1.PlayViewUniteReply", [{
                no: 1,
                name: "vod_info",
                kind: "message",
                T: () => Ve
            }, {no: 2, name: "play_arc_conf", kind: "message", T: () => Se}, {
                no: 5,
                name: "supplement",
                kind: "message",
                T: () => $e
            }, {no: 6, name: "play_arc", kind: "message", T: () => We}, {
                no: 9,
                name: "view_info",
                kind: "message",
                T: () => Ce
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.vodInfo = Ve.internalBinaryRead(e, e.uint32(), n, r.vodInfo);
                        break;
                    case 2:
                        r.playArcConf = Se.internalBinaryRead(e, e.uint32(), n, r.playArcConf);
                        break;
                    case 5:
                        r.supplement = $e.internalBinaryRead(e, e.uint32(), n, r.supplement);
                        break;
                    case 6:
                        r.playArc = We.internalBinaryRead(e, e.uint32(), n, r.playArc);
                        break;
                    case 9:
                        r.viewInfo = Ce.internalBinaryRead(e, e.uint32(), n, r.viewInfo);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.vodInfo && Ve.internalBinaryWrite(e.vodInfo, t.tag(1, c.LengthDelimited).fork(), n).join(), e.playArcConf && Se.internalBinaryWrite(e.playArcConf, t.tag(2, c.LengthDelimited).fork(), n).join(), e.supplement && $e.internalBinaryWrite(e.supplement, t.tag(5, c.LengthDelimited).fork(), n).join(), e.playArc && We.internalBinaryWrite(e.playArc, t.tag(6, c.LengthDelimited).fork(), n).join(), e.viewInfo && Ce.internalBinaryWrite(e.viewInfo, t.tag(9, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, It = new Rt;
    var Ot = class extends m {
        constructor() {
            super("bilibili.app.playurl.v1.PlayViewReply", [{no: 5, name: "play_arc", kind: "message", T: () => Et}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 5:
                        r.playArc = Et.internalBinaryRead(e, e.uint32(), n, r.playArc);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.playArc && Et.internalBinaryWrite(e.playArc, t.tag(5, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Pt = new Ot, Lt = class extends m {
        constructor() {
            super("bilibili.app.playurl.v1.PlayArcConf", [{
                no: 1,
                name: "background_play_conf",
                kind: "message",
                T: () => fe
            }, {no: 3, name: "cast_conf", kind: "message", T: () => fe}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.backgroundPlayConf = fe.internalBinaryRead(e, e.uint32(), n, r.backgroundPlayConf);
                        break;
                    case 3:
                        r.castConf = fe.internalBinaryRead(e, e.uint32(), n, r.castConf);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.backgroundPlayConf && fe.internalBinaryWrite(e.backgroundPlayConf, t.tag(1, c.LengthDelimited).fork(), n).join(), e.castConf && fe.internalBinaryWrite(e.castConf, t.tag(3, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Et = new Lt, Dt = class extends m {
        constructor() {
            super("bilibili.app.playurl.v1.ArcConf", [{no: 1, name: "is_support", kind: "scalar", T: 8}, {
                no: 2,
                name: "disabled",
                kind: "scalar",
                T: 8
            }, {no: 3, name: "extra_content", kind: "message", T: () => Ft}, {
                no: 4,
                name: "unsupport_scene",
                kind: "scalar",
                repeat: 1,
                T: 3
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.isSupport = !1, t.disabled = !1, t.unsupportScene = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.isSupport = e.bool();
                        break;
                    case 2:
                        r.disabled = e.bool();
                        break;
                    case 3:
                        r.extraContent = Ft.internalBinaryRead(e, e.uint32(), n, r.extraContent);
                        break;
                    case 4:
                        if (l === c.LengthDelimited) for (let y = e.int32() + e.pos; e.pos < y;) r.unsupportScene.push(e.int64().toString()); else r.unsupportScene.push(e.int64().toString());
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            if (e.isSupport !== !1 && t.tag(1, c.Varint).bool(e.isSupport), e.disabled !== !1 && t.tag(2, c.Varint).bool(e.disabled), e.extraContent && Ft.internalBinaryWrite(e.extraContent, t.tag(3, c.LengthDelimited).fork(), n).join(), e.unsupportScene.length) {
                t.tag(4, c.LengthDelimited).fork();
                for (let r = 0; r < e.unsupportScene.length; r++) t.int64(e.unsupportScene[r]);
                t.join()
            }
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, fe = new Dt, At = class extends m {
        constructor() {
            super("bilibili.app.playurl.v1.ExtraContent", [{
                no: 1,
                name: "disabled_reason",
                kind: "scalar",
                T: 9
            }, {no: 2, name: "disabled_code", kind: "scalar", T: 3}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.disabledReason = "", t.disabledCode = "0", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.disabledReason = e.string();
                        break;
                    case 2:
                        r.disabledCode = e.int64().toString();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.disabledReason !== "" && t.tag(1, c.LengthDelimited).string(e.disabledReason), e.disabledCode !== "0" && t.tag(2, c.Varint).int64(e.disabledCode);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Ft = new At;
    var Wt = class extends m {
        constructor() {
            super("bilibili.app.card.v1.Card", [{
                no: 1,
                name: "small_cover_v5",
                kind: "message",
                oneof: "item",
                T: () => Vt
            }, {no: 10, name: "rcmd_one_item", kind: "scalar", oneof: "item", T: 12}, {
                no: 11,
                name: "small_cover_v5_ad",
                kind: "scalar",
                oneof: "item",
                T: 12
            }, {no: 12, name: "topic_list", kind: "scalar", oneof: "item", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.item = {oneofKind: void 0}, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.item = {
                            oneofKind: "smallCoverV5",
                            smallCoverV5: Vt.internalBinaryRead(e, e.uint32(), n, r.item.smallCoverV5)
                        };
                        break;
                    case 10:
                        r.item = {oneofKind: "rcmdOneItem", rcmdOneItem: e.bytes()};
                        break;
                    case 11:
                        r.item = {oneofKind: "smallCoverV5Ad", smallCoverV5Ad: e.bytes()};
                        break;
                    case 12:
                        r.item = {oneofKind: "topicList", topicList: e.bytes()};
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.item.oneofKind === "smallCoverV5" && Vt.internalBinaryWrite(e.item.smallCoverV5, t.tag(1, c.LengthDelimited).fork(), n).join(), e.item.oneofKind === "rcmdOneItem" && t.tag(10, c.LengthDelimited).bytes(e.item.rcmdOneItem), e.item.oneofKind === "smallCoverV5Ad" && t.tag(11, c.LengthDelimited).bytes(e.item.smallCoverV5Ad), e.item.oneofKind === "topicList" && t.tag(12, c.LengthDelimited).bytes(e.item.topicList);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, je = new Wt, Ct = class extends m {
        constructor() {
            super("bilibili.app.card.v1.SmallCoverV5", [{no: 1, name: "base", kind: "message", T: () => St}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.base = St.internalBinaryRead(e, e.uint32(), n, r.base);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.base && St.internalBinaryWrite(e.base, t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Vt = new Ct, $t = class extends m {
        constructor() {
            super("bilibili.app.card.v1.Base", [{no: 12, name: "ad_info", kind: "scalar", T: 12}, {
                no: 14,
                name: "from_type",
                kind: "scalar",
                T: 9
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.adInfo = new Uint8Array(0), t.fromType = "", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 12:
                        r.adInfo = e.bytes();
                        break;
                    case 14:
                        r.fromType = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.adInfo.length && t.tag(12, c.LengthDelimited).bytes(e.adInfo), e.fromType !== "" && t.tag(14, c.LengthDelimited).string(e.fromType);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, St = new $t;
    var jt = class extends m {
        constructor() {
            super("bilibili.app.show.popular.v1.PopularReply", [{
                no: 1,
                name: "items",
                kind: "message",
                repeat: 2,
                T: () => je
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.items = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.items.push(je.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.items.length; r++) je.internalBinaryWrite(e.items[r], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Mt = new jt;
    var Gt = class extends m {
        constructor() {
            super("bilibili.app.view.v1.ViewReply", [{no: 4, name: "req_user", kind: "message", T: () => _t}, {
                no: 10,
                name: "relates",
                kind: "message",
                repeat: 2,
                T: () => zt
            }, {no: 23, name: "label", kind: "scalar", T: 12}, {
                no: 30,
                name: "cms",
                kind: "scalar",
                repeat: 2,
                T: 12
            }, {no: 31, name: "cm_config", kind: "scalar", T: 12}, {
                no: 41,
                name: "cm_ipad",
                kind: "scalar",
                T: 12
            }, {no: 50, name: "special_cell_new", kind: "scalar", repeat: 2, T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.relates = [], t.label = new Uint8Array(0), t.cms = [], t.cmConfig = new Uint8Array(0), t.cmIpad = new Uint8Array(0), t.specialCellNew = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 4:
                        r.reqUser = _t.internalBinaryRead(e, e.uint32(), n, r.reqUser);
                        break;
                    case 10:
                        r.relates.push(zt.internalBinaryRead(e, e.uint32(), n));
                        break;
                    case 23:
                        r.label = e.bytes();
                        break;
                    case 30:
                        r.cms.push(e.bytes());
                        break;
                    case 31:
                        r.cmConfig = e.bytes();
                        break;
                    case 41:
                        r.cmIpad = e.bytes();
                        break;
                    case 50:
                        r.specialCellNew.push(e.bytes());
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.reqUser && _t.internalBinaryWrite(e.reqUser, t.tag(4, c.LengthDelimited).fork(), n).join();
            for (let r = 0; r < e.relates.length; r++) zt.internalBinaryWrite(e.relates[r], t.tag(10, c.LengthDelimited).fork(), n).join();
            e.label.length && t.tag(23, c.LengthDelimited).bytes(e.label);
            for (let r = 0; r < e.cms.length; r++) t.tag(30, c.LengthDelimited).bytes(e.cms[r]);
            e.cmConfig.length && t.tag(31, c.LengthDelimited).bytes(e.cmConfig), e.cmIpad.length && t.tag(41, c.LengthDelimited).bytes(e.cmIpad);
            for (let r = 0; r < e.specialCellNew.length; r++) t.tag(50, c.LengthDelimited).bytes(e.specialCellNew[r]);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Ht = new Gt, Jt = class extends m {
        constructor() {
            super("bilibili.app.view.v1.ReqUser", [{no: 9, name: "elec_plus_btn", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.elecPlusBtn = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 9:
                        r.elecPlusBtn = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.elecPlusBtn.length && t.tag(9, c.LengthDelimited).bytes(e.elecPlusBtn);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, _t = new Jt, qt = class extends m {
        constructor() {
            super("bilibili.app.view.v1.Relate", [{no: 28, name: "cm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cm = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 28:
                        r.cm = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.cm.length && t.tag(28, c.LengthDelimited).bytes(e.cm);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, zt = new qt, Yt = class extends m {
        constructor() {
            super("bilibili.app.view.v1.ViewProgressReply", [{
                no: 1,
                name: "video_guide",
                kind: "scalar",
                T: 12
            }, {no: 2, name: "chronos", kind: "message", T: () => Kt}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.videoGuide = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.videoGuide = e.bytes();
                        break;
                    case 2:
                        r.chronos = Kt.internalBinaryRead(e, e.uint32(), n, r.chronos);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.videoGuide.length && t.tag(1, c.LengthDelimited).bytes(e.videoGuide), e.chronos && Kt.internalBinaryWrite(e.chronos, t.tag(2, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Qt = new Yt, Xt = class extends m {
        constructor() {
            super("bilibili.app.view.v1.Chronos", [{no: 1, name: "md5", kind: "scalar", T: 9}, {
                no: 2,
                name: "file",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "sign", kind: "scalar", opt: !0, T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.md5 = "", t.file = "", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.md5 = e.string();
                        break;
                    case 2:
                        r.file = e.string();
                        break;
                    case 3:
                        r.sign = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.md5 !== "" && t.tag(1, c.LengthDelimited).string(e.md5), e.file !== "" && t.tag(2, c.LengthDelimited).string(e.file), e.sign !== void 0 && t.tag(3, c.LengthDelimited).string(e.sign);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Kt = new Xt, Zt = class extends m {
        constructor() {
            super("bilibili.app.view.v1.TFInfoReply", [{no: 1, name: "tips_id", kind: "scalar", T: 3}, {
                no: 2,
                name: "tf_toast",
                kind: "scalar",
                T: 12
            }, {no: 3, name: "tf_panel_customized", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tipsId = "0", t.tfToast = new Uint8Array(0), t.tfPanelCustomized = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.tipsId = e.int64().toString();
                        break;
                    case 2:
                        r.tfToast = e.bytes();
                        break;
                    case 3:
                        r.tfPanelCustomized = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.tipsId !== "0" && t.tag(1, c.Varint).int64(e.tipsId), e.tfToast.length && t.tag(2, c.LengthDelimited).bytes(e.tfToast), e.tfPanelCustomized.length && t.tag(3, c.LengthDelimited).bytes(e.tfPanelCustomized);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, ql = new Zt;
    var fn;
    (function (a) {
        a[a.TAB_NONE = 0] = "TAB_NONE", a[a.TAB_INTRODUCTION = 1] = "TAB_INTRODUCTION"
    })(fn || (fn = {}));
    var G;
    (function (a) {
        a[a.UNKNOWN = 0] = "UNKNOWN", a[a.UGC_HEADLINE = 3] = "UGC_HEADLINE", a[a.ACTIVITY = 18] = "ACTIVITY", a[a.RELATED_RECOMMEND = 28] = "RELATED_RECOMMEND", a[a.PAY_BAR = 29] = "PAY_BAR", a[a.SPECIALTAG = 37] = "SPECIALTAG", a[a.MERCHANDISE = 55] = "MERCHANDISE"
    })(G || (G = {}));
    var Y;
    (function (a) {
        a[a.CARD_TYPE_UNKNOWN = 0] = "CARD_TYPE_UNKNOWN", a[a.AV = 1] = "AV", a[a.GAME = 4] = "GAME", a[a.CM_TYPE = 5] = "CM_TYPE", a[a.LIVE = 6] = "LIVE", a[a.AI_RECOMMEND = 7] = "AI_RECOMMEND", a[a.COURSE = 11] = "COURSE"
    })(Y || (Y = {}));
    var cn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.ViewReply", [{
                no: 3,
                name: "req_user",
                kind: "message",
                T: () => en
            }, {no: 5, name: "tab", kind: "message", T: () => tn}, {no: 7, name: "cm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cm = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 3:
                        r.reqUser = en.internalBinaryRead(e, e.uint32(), n, r.reqUser);
                        break;
                    case 5:
                        r.tab = tn.internalBinaryRead(e, e.uint32(), n, r.tab);
                        break;
                    case 7:
                        r.cm = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.reqUser && en.internalBinaryWrite(e.reqUser, t.tag(3, c.LengthDelimited).fork(), n).join(), e.tab && tn.internalBinaryWrite(e.tab, t.tag(5, c.LengthDelimited).fork(), n).join(), e.cm.length && t.tag(7, c.LengthDelimited).bytes(e.cm);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Nn = new cn, un = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.ReqUser", [{no: 7, name: "elec_plus_btn", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.elecPlusBtn = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 7:
                        r.elecPlusBtn = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.elecPlusBtn.length && t.tag(7, c.LengthDelimited).bytes(e.elecPlusBtn);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, en = new un, hn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.Tab", [{
                no: 1,
                name: "tab_module",
                kind: "message",
                repeat: 2,
                T: () => nn
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tabModule = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.tabModule.push(nn.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.tabModule.length; r++) nn.internalBinaryWrite(e.tabModule[r], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, tn = new hn, pn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.TabModule", [{
                no: 1,
                name: "tab_type",
                kind: "enum",
                T: () => ["bilibili.app.viewunite.v1.TabType", fn]
            }, {no: 2, name: "introduction", kind: "message", oneof: "tab", T: () => rn}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tabType = 0, t.tab = {oneofKind: void 0}, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.tabType = e.int32();
                        break;
                    case 2:
                        r.tab = {
                            oneofKind: "introduction",
                            introduction: rn.internalBinaryRead(e, e.uint32(), n, r.tab.introduction)
                        };
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.tabType !== 0 && t.tag(1, c.Varint).int32(e.tabType), e.tab.oneofKind === "introduction" && rn.internalBinaryWrite(e.tab.introduction, t.tag(2, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, nn = new pn, dn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.IntroductionTab", [{
                no: 2,
                name: "modules",
                kind: "message",
                repeat: 2,
                T: () => an
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.modules = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 2:
                        r.modules.push(an.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.modules.length; r++) an.internalBinaryWrite(e.modules[r], t.tag(2, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, rn = new dn, mn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.Module", [{
                no: 1,
                name: "type",
                kind: "enum",
                T: () => ["bilibili.app.viewunite.v1.ModuleType", G]
            }, {no: 5, name: "head_line", kind: "message", oneof: "data", T: () => sn}, {
                no: 22,
                name: "relates",
                kind: "message",
                oneof: "data",
                T: () => on
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.type = 0, t.data = {oneofKind: void 0}, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.type = e.int32();
                        break;
                    case 5:
                        r.data = {
                            oneofKind: "headLine",
                            headLine: sn.internalBinaryRead(e, e.uint32(), n, r.data.headLine)
                        };
                        break;
                    case 22:
                        r.data = {
                            oneofKind: "relates",
                            relates: on.internalBinaryRead(e, e.uint32(), n, r.data.relates)
                        };
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.type !== 0 && t.tag(1, c.Varint).int32(e.type), e.data.oneofKind === "headLine" && sn.internalBinaryWrite(e.data.headLine, t.tag(5, c.LengthDelimited).fork(), n).join(), e.data.oneofKind === "relates" && on.internalBinaryWrite(e.data.relates, t.tag(22, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, an = new mn, yn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.Headline", [{no: 1, name: "label", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.label = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.label = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.label.length && t.tag(1, c.LengthDelimited).bytes(e.label);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, sn = new yn, gn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.Relates", [{
                no: 1,
                name: "cards",
                kind: "message",
                repeat: 2,
                T: () => ce
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cards = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.cards.push(ce.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.cards.length; r++) ce.internalBinaryWrite(e.cards[r], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, on = new gn, wn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.RelateCard", [{
                no: 1,
                name: "relate_card_type",
                kind: "enum",
                T: () => ["bilibili.app.viewunite.v1.RelateCardType", Y]
            }, {no: 11, name: "cm_stock", kind: "scalar", T: 12}, {
                no: 12,
                name: "basic_info",
                kind: "message",
                T: () => ln
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.relateCardType = 0, t.cmStock = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.relateCardType = e.int32();
                        break;
                    case 11:
                        r.cmStock = e.bytes();
                        break;
                    case 12:
                        r.basicInfo = ln.internalBinaryRead(e, e.uint32(), n, r.basicInfo);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.relateCardType !== 0 && t.tag(1, c.Varint).int32(e.relateCardType), e.cmStock.length && t.tag(11, c.LengthDelimited).bytes(e.cmStock), e.basicInfo && ln.internalBinaryWrite(e.basicInfo, t.tag(12, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, ce = new wn, bn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.CardBasicInfo", [{no: 6, name: "unique_id", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.uniqueId = "", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 6:
                        r.uniqueId = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.uniqueId !== "" && t.tag(6, c.LengthDelimited).string(e.uniqueId);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, ln = new bn, kn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.ViewProgressReply", [{no: 4, name: "dm", kind: "scalar", T: 12}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.dm = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 4:
                        r.dm = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.dm.length && t.tag(4, c.LengthDelimited).bytes(e.dm);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Tn = new kn, vn = class extends m {
        constructor() {
            super("bilibili.app.viewunite.v1.RelatesFeedReply", [{
                no: 1,
                name: "relates",
                kind: "message",
                repeat: 2,
                T: () => ce
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.relates = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.relates.push(ce.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.relates.length; r++) ce.internalBinaryWrite(e.relates[r], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, xn = new vn;
    var Rn;
    (function (a) {
        a[a.NONE_TYPE = 0] = "NONE_TYPE", a[a.VIP_GRADUAL_COLOR = 60001] = "VIP_GRADUAL_COLOR"
    })(Rn || (Rn = {}));
    var In = class extends m {
        constructor() {
            super("bilibili.community.service.dm.v1.DmViewReply", [{
                no: 18,
                name: "activity_meta",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {no: 22, name: "command", kind: "message", T: () => Bn}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.activityMeta = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 18:
                        r.activityMeta.push(e.string());
                        break;
                    case 22:
                        r.command = Bn.internalBinaryRead(e, e.uint32(), n, r.command);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.activityMeta.length; r++) t.tag(18, c.LengthDelimited).string(e.activityMeta[r]);
            e.command && Bn.internalBinaryWrite(e.command, t.tag(22, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Dn = new In, En = class extends m {
        constructor() {
            super("bilibili.community.service.dm.v1.Command", [{
                no: 1,
                name: "command_dms",
                kind: "scalar",
                repeat: 2,
                T: 12
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.commandDms = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.commandDms.push(e.bytes());
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.commandDms.length; r++) t.tag(1, c.LengthDelimited).bytes(e.commandDms[r]);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Bn = new En, Fn = class extends m {
        constructor() {
            super("bilibili.community.service.dm.v1.DmSegMobileReq", [{
                no: 1,
                name: "pid",
                kind: "scalar",
                T: 3
            }, {no: 2, name: "oid", kind: "scalar", T: 3}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.pid = "0", t.oid = "0", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.pid = e.int64().toString();
                        break;
                    case 2:
                        r.oid = e.int64().toString();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.pid !== "0" && t.tag(1, c.Varint).int64(e.pid), e.oid !== "0" && t.tag(2, c.Varint).int64(e.oid);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, cf = new Fn, On = class extends m {
        constructor() {
            super("bilibili.community.service.dm.v1.DmSegMobileReply", [{
                no: 1,
                name: "elems",
                kind: "message",
                repeat: 2,
                T: () => Un
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.elems = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.elems.push(Un.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.elems.length; r++) Un.internalBinaryWrite(e.elems[r], t.tag(1, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, uf = new On, Ln = class extends m {
        constructor() {
            super("bilibili.community.service.dm.v1.DanmakuElem", [{no: 1, name: "id", kind: "scalar", T: 3}, {
                no: 2,
                name: "progress",
                kind: "scalar",
                T: 5
            }, {no: 3, name: "mode", kind: "scalar", T: 5}, {no: 4, name: "fontsize", kind: "scalar", T: 5}, {
                no: 5,
                name: "color",
                kind: "scalar",
                T: 5
            }, {no: 6, name: "mid_hash", kind: "scalar", T: 9}, {no: 7, name: "content", kind: "scalar", T: 9}, {
                no: 8,
                name: "ctime",
                kind: "scalar",
                T: 3
            }, {no: 9, name: "weight", kind: "scalar", T: 5}, {no: 10, name: "action", kind: "scalar", T: 9}, {
                no: 11,
                name: "pool",
                kind: "scalar",
                T: 5
            }, {no: 12, name: "id_str", kind: "scalar", T: 9}, {no: 13, name: "attr", kind: "scalar", T: 5}, {
                no: 22,
                name: "animation",
                kind: "scalar",
                T: 9
            }, {no: 23, name: "extra", kind: "scalar", T: 9}, {
                no: 24,
                name: "colorful",
                kind: "enum",
                T: () => ["bilibili.community.service.dm.v1.DmColorfulType", Rn]
            }, {no: 25, name: "type", kind: "scalar", T: 5}, {no: 26, name: "oid", kind: "scalar", T: 3}, {
                no: 27,
                name: "dm_from",
                kind: "scalar",
                T: 5
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.id = "0", t.progress = 0, t.mode = 0, t.fontsize = 0, t.color = 0, t.midHash = "", t.content = "", t.ctime = "0", t.weight = 0, t.action = "", t.pool = 0, t.idStr = "", t.attr = 0, t.animation = "", t.extra = "", t.colorful = 0, t.type = 0, t.oid = "0", t.dmFrom = 0, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.id = e.int64().toString();
                        break;
                    case 2:
                        r.progress = e.int32();
                        break;
                    case 3:
                        r.mode = e.int32();
                        break;
                    case 4:
                        r.fontsize = e.int32();
                        break;
                    case 5:
                        r.color = e.int32();
                        break;
                    case 6:
                        r.midHash = e.string();
                        break;
                    case 7:
                        r.content = e.string();
                        break;
                    case 8:
                        r.ctime = e.int64().toString();
                        break;
                    case 9:
                        r.weight = e.int32();
                        break;
                    case 10:
                        r.action = e.string();
                        break;
                    case 11:
                        r.pool = e.int32();
                        break;
                    case 12:
                        r.idStr = e.string();
                        break;
                    case 13:
                        r.attr = e.int32();
                        break;
                    case 22:
                        r.animation = e.string();
                        break;
                    case 23:
                        r.extra = e.string();
                        break;
                    case 24:
                        r.colorful = e.int32();
                        break;
                    case 25:
                        r.type = e.int32();
                        break;
                    case 26:
                        r.oid = e.int64().toString();
                        break;
                    case 27:
                        r.dmFrom = e.int32();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.id !== "0" && t.tag(1, c.Varint).int64(e.id), e.progress !== 0 && t.tag(2, c.Varint).int32(e.progress), e.mode !== 0 && t.tag(3, c.Varint).int32(e.mode), e.fontsize !== 0 && t.tag(4, c.Varint).int32(e.fontsize), e.color !== 0 && t.tag(5, c.Varint).int32(e.color), e.midHash !== "" && t.tag(6, c.LengthDelimited).string(e.midHash), e.content !== "" && t.tag(7, c.LengthDelimited).string(e.content), e.ctime !== "0" && t.tag(8, c.Varint).int64(e.ctime), e.weight !== 0 && t.tag(9, c.Varint).int32(e.weight), e.action !== "" && t.tag(10, c.LengthDelimited).string(e.action), e.pool !== 0 && t.tag(11, c.Varint).int32(e.pool), e.idStr !== "" && t.tag(12, c.LengthDelimited).string(e.idStr), e.attr !== 0 && t.tag(13, c.Varint).int32(e.attr), e.animation !== "" && t.tag(22, c.LengthDelimited).string(e.animation), e.extra !== "" && t.tag(23, c.LengthDelimited).string(e.extra), e.colorful !== 0 && t.tag(24, c.Varint).int32(e.colorful), e.type !== 0 && t.tag(25, c.Varint).int32(e.type), e.oid !== "0" && t.tag(26, c.Varint).int64(e.oid), e.dmFrom !== 0 && t.tag(27, c.Varint).int32(e.dmFrom);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Un = new Ln;
    var Vn = class extends m {
        constructor() {
            super("bilibili.main.community.reply.v1.MainListReply", [{
                no: 11,
                name: "cm",
                kind: "scalar",
                T: 12
            }, {no: 14, name: "top_replies", kind: "message", repeat: 2, T: () => An}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.cm = new Uint8Array(0), t.topReplies = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 11:
                        r.cm = e.bytes();
                        break;
                    case 14:
                        r.topReplies.push(An.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.cm.length && t.tag(11, c.LengthDelimited).bytes(e.cm);
            for (let r = 0; r < e.topReplies.length; r++) An.internalBinaryWrite(e.topReplies[r], t.tag(14, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, $n = new Vn, Sn = class extends m {
        constructor() {
            super("bilibili.main.community.reply.v1.ReplyInfo", [{
                no: 12,
                name: "content",
                kind: "message",
                T: () => Pn
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 12:
                        r.content = Pn.internalBinaryRead(e, e.uint32(), n, r.content);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.content && Pn.internalBinaryWrite(e.content, t.tag(12, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, An = new Sn, Wn = class extends m {
        constructor() {
            super("bilibili.main.community.reply.v1.Content", [{no: 1, name: "message", kind: "scalar", T: 9}, {
                no: 5,
                name: "urls",
                kind: "map",
                K: 9,
                V: {kind: "message", T: () => Me}
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.message = "", t.urls = {}, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.message = e.string();
                        break;
                    case 5:
                        this.binaryReadMap5(r.urls, e, n);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        binaryReadMap5(e, t, n) {
            let i = t.uint32(), r = t.pos + i, f, s;
            for (; t.pos < r;) {
                let [l, o] = t.tag();
                switch (l) {
                    case 1:
                        f = t.string();
                        break;
                    case 2:
                        s = Me.internalBinaryRead(t, t.uint32(), n);
                        break;
                    default:
                        throw new globalThis.Error("unknown map entry field for field bilibili.main.community.reply.v1.Content.urls")
                }
            }
            e[f ?? ""] = s ?? Me.create()
        }

        internalBinaryWrite(e, t, n) {
            e.message !== "" && t.tag(1, c.LengthDelimited).string(e.message);
            for (let r of globalThis.Object.keys(e.urls)) t.tag(5, c.LengthDelimited).fork().tag(1, c.LengthDelimited).string(r), t.tag(2, c.LengthDelimited).fork(), Me.internalBinaryWrite(e.urls[r], t, n), t.join().join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Pn = new Wn, Cn = class extends m {
        constructor() {
            super("bilibili.main.community.reply.v1.Url", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 5,
                name: "app_name",
                kind: "scalar",
                T: 9
            }, {no: 6, name: "app_package_name", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.title = "", t.appName = "", t.appPackageName = "", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.title = e.string();
                        break;
                    case 5:
                        r.appName = e.string();
                        break;
                    case 6:
                        r.appPackageName = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.title !== "" && t.tag(1, c.LengthDelimited).string(e.title), e.appName !== "" && t.tag(5, c.LengthDelimited).string(e.appName), e.appPackageName !== "" && t.tag(6, c.LengthDelimited).string(e.appPackageName);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Me = new Cn;
    var Yn;
    (function (a) {
        a[a.NT_UNKNOWN = 0] = "NT_UNKNOWN", a[a.CLIP_TYPE_OP = 1] = "CLIP_TYPE_OP", a[a.CLIP_TYPE_ED = 2] = "CLIP_TYPE_ED"
    })(Yn || (Yn = {}));
    var Xn = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayViewReply", [{
                no: 5,
                name: "view_info",
                kind: "message",
                T: () => jn
            }, {no: 6, name: "play_ext_conf", kind: "message", T: () => Mn}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 5:
                        r.viewInfo = jn.internalBinaryRead(e, e.uint32(), n, r.viewInfo);
                        break;
                    case 6:
                        r.playExtConf = Mn.internalBinaryRead(e, e.uint32(), n, r.playExtConf);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.viewInfo && jn.internalBinaryWrite(e.viewInfo, t.tag(5, c.LengthDelimited).fork(), n).join(), e.playExtConf && Mn.internalBinaryWrite(e.playExtConf, t.tag(6, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, si = new Xn, Zn = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ViewInfo", [{
                no: 8,
                name: "try_watch_prompt_bar",
                kind: "scalar",
                T: 12
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.tryWatchPromptBar = new Uint8Array(0), e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 8:
                        r.tryWatchPromptBar = e.bytes();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.tryWatchPromptBar.length && t.tag(8, c.LengthDelimited).bytes(e.tryWatchPromptBar);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, jn = new Zn, Hn = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayAbilityExtConf", [{
                no: 1,
                name: "allow_close_subtitle",
                kind: "scalar",
                T: 8
            }, {no: 3, name: "cast_tips", kind: "message", T: () => _n}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.allowCloseSubtitle = !1, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.allowCloseSubtitle = e.bool();
                        break;
                    case 3:
                        r.castTips = _n.internalBinaryRead(e, e.uint32(), n, r.castTips);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.allowCloseSubtitle !== !1 && t.tag(1, c.Varint).bool(e.allowCloseSubtitle), e.castTips && _n.internalBinaryWrite(e.castTips, t.tag(3, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Mn = new Hn, Qn = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.CastTips", [{no: 1, name: "code", kind: "scalar", T: 5}, {
                no: 2,
                name: "message",
                kind: "scalar",
                T: 9
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.code = 0, t.message = "", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.code = e.int32();
                        break;
                    case 2:
                        r.message = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.code !== 0 && t.tag(1, c.Varint).int32(e.code), e.message !== "" && t.tag(2, c.LengthDelimited).string(e.message);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, _n = new Qn, ei = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.PlayViewBusinessInfo", [{
                no: 6,
                name: "clip_info",
                kind: "message",
                repeat: 2,
                T: () => zn
            }, {no: 16, name: "vip_status", kind: "scalar", T: 5}, {
                no: 18,
                name: "episode_info",
                kind: "message",
                T: () => Kn
            }, {no: 20, name: "user_status", kind: "message", T: () => Jn}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.clipInfo = [], t.vipStatus = 0, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 6:
                        r.clipInfo.push(zn.internalBinaryRead(e, e.uint32(), n));
                        break;
                    case 16:
                        r.vipStatus = e.int32();
                        break;
                    case 18:
                        r.episodeInfo = Kn.internalBinaryRead(e, e.uint32(), n, r.episodeInfo);
                        break;
                    case 20:
                        r.userStatus = Jn.internalBinaryRead(e, e.uint32(), n, r.userStatus);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.clipInfo.length; r++) zn.internalBinaryWrite(e.clipInfo[r], t.tag(6, c.LengthDelimited).fork(), n).join();
            e.vipStatus !== 0 && t.tag(16, c.Varint).int32(e.vipStatus), e.episodeInfo && Kn.internalBinaryWrite(e.episodeInfo, t.tag(18, c.LengthDelimited).fork(), n).join(), e.userStatus && Jn.internalBinaryWrite(e.userStatus, t.tag(20, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Uf = new ei, ti = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.ClipInfo", [{no: 2, name: "start", kind: "scalar", T: 5}, {
                no: 3,
                name: "end",
                kind: "scalar",
                T: 5
            }, {no: 4, name: "clip_type", kind: "enum", T: () => ["bilibili.pgc.gateway.player.v2.ClipType", Yn]}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.start = 0, t.end = 0, t.clipType = 0, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 2:
                        r.start = e.int32();
                        break;
                    case 3:
                        r.end = e.int32();
                        break;
                    case 4:
                        r.clipType = e.int32();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.start !== 0 && t.tag(2, c.Varint).int32(e.start), e.end !== 0 && t.tag(3, c.Varint).int32(e.end), e.clipType !== 0 && t.tag(4, c.Varint).int32(e.clipType);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, zn = new ti, ni = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.EpisodeInfo", [{no: 1, name: "ep_id", kind: "scalar", T: 5}, {
                no: 2,
                name: "cid",
                kind: "scalar",
                T: 3
            }, {no: 3, name: "aid", kind: "scalar", T: 3}, {no: 4, name: "ep_status", kind: "scalar", T: 3}, {
                no: 5,
                name: "season_info",
                kind: "message",
                T: () => Gn
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.epId = 0, t.cid = "0", t.aid = "0", t.epStatus = "0", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.epId = e.int32();
                        break;
                    case 2:
                        r.cid = e.int64().toString();
                        break;
                    case 3:
                        r.aid = e.int64().toString();
                        break;
                    case 4:
                        r.epStatus = e.int64().toString();
                        break;
                    case 5:
                        r.seasonInfo = Gn.internalBinaryRead(e, e.uint32(), n, r.seasonInfo);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.epId !== 0 && t.tag(1, c.Varint).int32(e.epId), e.cid !== "0" && t.tag(2, c.Varint).int64(e.cid), e.aid !== "0" && t.tag(3, c.Varint).int64(e.aid), e.epStatus !== "0" && t.tag(4, c.Varint).int64(e.epStatus), e.seasonInfo && Gn.internalBinaryWrite(e.seasonInfo, t.tag(5, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Kn = new ni, ii = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.SeasonInfo", [{
                no: 1,
                name: "season_id",
                kind: "scalar",
                T: 5
            }, {no: 2, name: "season_type", kind: "scalar", T: 5}, {
                no: 3,
                name: "season_status",
                kind: "scalar",
                T: 5
            }, {no: 7, name: "mode", kind: "scalar", T: 5}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.seasonId = 0, t.seasonType = 0, t.seasonStatus = 0, t.mode = 0, e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.seasonId = e.int32();
                        break;
                    case 2:
                        r.seasonType = e.int32();
                        break;
                    case 3:
                        r.seasonStatus = e.int32();
                        break;
                    case 7:
                        r.mode = e.int32();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.seasonId !== 0 && t.tag(1, c.Varint).int32(e.seasonId), e.seasonType !== 0 && t.tag(2, c.Varint).int32(e.seasonType), e.seasonStatus !== 0 && t.tag(3, c.Varint).int32(e.seasonStatus), e.mode !== 0 && t.tag(7, c.Varint).int32(e.mode);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Gn = new ii, ri = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.UserStatus", [{
                no: 3,
                name: "watch_progress",
                kind: "message",
                T: () => qn
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 3:
                        r.watchProgress = qn.internalBinaryRead(e, e.uint32(), n, r.watchProgress);
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.watchProgress && qn.internalBinaryWrite(e.watchProgress, t.tag(3, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, Jn = new ri, ai = class extends m {
        constructor() {
            super("bilibili.pgc.gateway.player.v2.WatchProgress", [{
                no: 1,
                name: "last_ep_id",
                kind: "scalar",
                T: 5
            }, {no: 2, name: "last_ep_index", kind: "scalar", T: 9}, {
                no: 3,
                name: "progress",
                kind: "scalar",
                T: 3
            }, {no: 4, name: "last_play_cid", kind: "scalar", T: 3}, {
                no: 7,
                name: "last_play_aid",
                kind: "scalar",
                T: 3
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.lastEpId = 0, t.lastEpIndex = "", t.progress = "0", t.lastPlayCid = "0", t.lastPlayAid = "0", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 1:
                        r.lastEpId = e.int32();
                        break;
                    case 2:
                        r.lastEpIndex = e.string();
                        break;
                    case 3:
                        r.progress = e.int64().toString();
                        break;
                    case 4:
                        r.lastPlayCid = e.int64().toString();
                        break;
                    case 7:
                        r.lastPlayAid = e.int64().toString();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.lastEpId !== 0 && t.tag(1, c.Varint).int32(e.lastEpId), e.lastEpIndex !== "" && t.tag(2, c.LengthDelimited).string(e.lastEpIndex), e.progress !== "0" && t.tag(3, c.Varint).int64(e.progress), e.lastPlayCid !== "0" && t.tag(4, c.Varint).int64(e.lastPlayCid), e.lastPlayAid !== "0" && t.tag(7, c.Varint).int64(e.lastPlayAid);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, qn = new ai;
    var li = class extends m {
        constructor() {
            super("bilibili.polymer.app.search.v1.SearchAllResponse", [{
                no: 4,
                name: "item",
                kind: "message",
                repeat: 2,
                T: () => oi
            }])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.item = [], e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 4:
                        r.item.push(oi.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.item.length; r++) oi.internalBinaryWrite(e.item[r], t.tag(4, c.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, ci = new li, fi = class extends m {
        constructor() {
            super("bilibili.polymer.app.search.v1.Item", [{no: 4, name: "linktype", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = globalThis.Object.create(this.messagePrototype);
            return t.linktype = "", e !== void 0 && d(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), f = e.pos + t;
            for (; e.pos < f;) {
                let [s, l] = e.tag();
                switch (s) {
                    case 4:
                        r.linktype = e.string();
                        break;
                    default:
                        let o = n.readUnknownField;
                        if (o === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${l}) for ${this.typeName}`);
                        let u = e.skip(l);
                        o !== !1 && (o === !0 ? h.onRead : o)(this.typeName, r, s, l, u)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.linktype !== "" && t.tag(4, c.LengthDelimited).string(e.linktype);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? h.onWrite : i)(this.typeName, e, t), t
        }
    }, oi = new fi;
    var j = new Uint8Array(0);

    function Hi(a, e) {
        let t = ut.fromBinary(a);
        if (t.topicList = j, t.dynamicList && (t.dynamicList.list = t.dynamicList.list.filter(n => ![le.AD, le.LIVE_RCMD].includes(n.cardType))), e.showUpList === "false") delete t.upList; else if (!e.isIPad && e.showUpList !== "true") if (t.upList?.showLiveNum) {
            let {list: n, listSecond: i} = t.upList, r = i.at(-1);
            r && (r.separator = !0, n.unshift(...i), i.length = 0)
        } else delete t.upList;
        W(ut, t)
    }

    function Qi(a) {
        let e = It.fromBinary(a);
        e.viewInfo && (e.viewInfo.promptBar = j), e.playArcConf?.arcConfs && Object.values(e.playArcConf.arcConfs).forEach(t => {
            t.isSupport && t.disabled && (t.disabled = !1, t.extraContent = void 0, t.unsupportScene.length = 0)
        }), W(It, e)
    }

    function er(a) {
        let e = Pt.fromBinary(a), {backgroundPlayConf: t, castConf: n} = e.playArc || {};
        [t, n].forEach(i => {
            i && (!i.isSupport || i.disabled) && (i.isSupport = !0, i.disabled = !1, i.extraContent = void 0, i.unsupportScene.length = 0)
        }), W(Pt, e)
    }

    function tr(a) {
        let e = Mt.fromBinary(a);
        e.items = e.items.filter(t => {
            if (t.item.oneofKind === "smallCoverV5") {
                let n = t.item.smallCoverV5;
                return n.base?.fromType === "recommend" && !n.base.adInfo.length
            }
            return !["rcmdOneItem", "smallCoverV5Ad", "topicList"].includes(t.item.oneofKind)
        }), W(Mt, e)
    }

    function nr(a) {
        let e = Ht.fromBinary(a);
        e.label = j, e.cmIpad = j, e.cmConfig = j, e.reqUser && (e.reqUser.elecPlusBtn = j), e.cms.length = 0, e.specialCellNew.length = 0, e.relates = e.relates.filter(t => !t.cm.length), W(Ht, e)
    }

    function ir(a, {airborneDm: e}) {
        let t = Qt.fromBinary(a);
        t.videoGuide = j, e && e !== "#" && t.chronos && (t.chronos.md5 = "f0baed5939c353e14d77eee17b9f266c", t.chronos.file = "https://raw.githubusercontent.com/kokoryh/Sparkle/refs/heads/master/data/chronos.zip", delete t.chronos.sign), W(Qt, t)
    }

    var zr = [Y.GAME, Y.CM_TYPE, Y.LIVE, Y.AI_RECOMMEND, Y.COURSE],
        rr = a => !zr.includes(a.relateCardType) && !a.cmStock.length && !a.basicInfo?.uniqueId;

    function ar(a) {
        let e = xn.fromBinary(a);
        e.relates = e.relates.filter(rr), W(xn, e)
    }

    function sr(a) {
        let e = Nn.fromBinary(a);
        e.cm = j, e.reqUser && (e.reqUser.elecPlusBtn = j), e.tab?.tabModule.forEach(t => {
            t.tab.oneofKind === "introduction" && (t.tab.introduction.modules = t.tab.introduction.modules.reduce((n, i) => ([G.ACTIVITY, G.PAY_BAR, G.SPECIALTAG, G.MERCHANDISE].includes(i.type) || (i.type === G.UGC_HEADLINE && i.data.oneofKind === "headLine" ? i.data.headLine.label = j : i.type === G.RELATED_RECOMMEND && i.data.oneofKind === "relates" && (i.data.relates.cards = i.data.relates.cards.filter(rr)), n.push(i)), n), []))
        }), W(Nn, e)
    }

    function or(a) {
        let e = Tn.fromBinary(a);
        e.dm = j, W(Tn, e)
    }

    function lr(a) {
        let e = Dn.fromBinary(a);
        e.activityMeta.length = 0, e.command?.commandDms.length && (e.command.commandDms.length = 0), W(Dn, e)
    }

    function fr(a, e) {
        let t = $n.fromBinary(a);
        if (t.cm = j, e.filterTopReplies) {
            let n = /https:\/\/b23\.tv\/(cm|mall)/;
            t.topReplies = t.topReplies.filter(i => {
                let r = i.content?.urls || {}, f = i.content?.message || "";
                return !Object.keys(r).some(s => n.test(s)) && !n.test(f)
            })
        }
        W($n, t)
    }

    function cr(a) {
        let e = si.fromBinary(a);
        e.viewInfo && (e.viewInfo.tryWatchPromptBar = j), e.playExtConf?.castTips && (e.playExtConf.castTips = {
            code: 0,
            message: ""
        }), W(si, e)
    }

    function ur(a) {
        let e = ci.fromBinary(a);
        e.item = e.item.filter(t => !t.linktype.endsWith("_ad")), W(ci, e)
    }

    var Kr = /(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/, we = class {
        constructor(e = "") {
            if (this.name = "URL v1.0.2", !e) throw new Error("Empty URL");
            this.parse(e)
        }

        parse(e) {
            let {scheme: t, host: n, path: i = "", params: r} = e.match(Kr)?.groups ?? {};
            this.scheme = t, this.host = n, this.path = i, this.params = r ? r.split("&").reduce((f, s) => {
                let [l, o] = s.split("=");
                return f[l] = o, f
            }, {}) : {}
        }

        toString() {
            let e = this.scheme + "://" + this.host + "/" + this.path;
            return this.params && (e += "?" + Object.entries(this.params).reduce((t, [n, i], r) => t + (r ? "&" : "") + n + "=" + i, "")), e
        }
    };
    var _e = H.getInstance("Bilibili Helper", {debug: !1}), Gr = _e.request.url, hi = _e.response.bodyBytes;
    hi || _e.exit();
    var Jr = new we(Gr).path,
        qr = typeof $utils == "object" && typeof $utils?.ungzip == "function" ? $utils.ungzip : Ei, Yr = hi.slice(0, 5),
        ui = hi.slice(5);
    Yr[0] && (ui = qr(ui));
    var Xr = globalThis.$environment?.["device-model"] || globalThis.$loon,
        Zr = typeof $argument == "string" ? JSON.parse($argument) : typeof $argument == "object" ? $argument : null,
        Hr = {...Zr, isIPad: Xr?.includes("iPad")}, hr = {
            "v2.Dynamic/DynAll": Hi,
            "playerunite.v1.Player/PlayViewUnite": Qi,
            "playurl.v1.PlayURL/PlayView": er,
            "v1.Popular/Index": tr,
            "view.v1.View/View": nr,
            "view.v1.View/ViewProgress": ir,
            "viewunite.v1.View/RelatesFeed": ar,
            "viewunite.v1.View/View": sr,
            "viewunite.v1.View/ViewProgress": or,
            "v1.DM/DmView": lr,
            "v1.Reply/MainList": fr,
            "v2.PlayURL/PlayView": cr,
            "v1.Search/SearchAll": ur
        };
    for (let a in hr) if (Jr.endsWith(a)) {
        hr[a](ui, Hr);
        break
    }
    _e.exit();
})();