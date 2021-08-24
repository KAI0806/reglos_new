/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;
window.Modernizr = function(a, b, c) {
        function z(a) { j.cssText = a }

        function A(a, b) { return z(m.join(a + ";") + (b || "")) }

        function B(a, b) { return typeof a === b }

        function C(a, b) { return !!~("" + a).indexOf(b) }

        function D(a, b) { for (var d in a) { var e = a[d]; if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 }

        function E(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f } return !1 }

        function F(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" "); return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c)) } var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {},
            r = {},
            s = {},
            t = [],
            u = t.slice,
            v, w = function(a, c, d, e) { var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body"); if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i },
            x = {}.hasOwnProperty,
            y;!B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) { return x.call(a, b) } : y = function(a, b) { return b in a && B(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function(b) { var c = this; if (typeof c != "function") throw new TypeError; var d = u.call(arguments, 1),
                e = function() { if (this instanceof e) { var a = function() {};
                        a.prototype = c.prototype; var f = new a,
                            g = c.apply(f, d.concat(u.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(u.call(arguments))) }; return e }), q.csstransforms3d = function() { var a = !!F("perspective"); return a && "webkitPerspective" in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }; for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v)); return e.addTest = function(a, b) { if (typeof a == "object")
                    for (var d in a) y(a, d) && e.addTest(d, a[d]);
                else { a = a.toLowerCase(); if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, z(""), i = k = null,
            function(a, b) {
                function k(a, b) { var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) }

                function l() { var a = r.elements; return typeof a == "string" ? a.split(" ") : a }

                function m(a) { var b = i[a[g]]; return b || (b = {}, h++, a[g] = h, i[h] = b), b }

                function n(a, c, f) { c || (c = b); if (j) return c.createElement(a);
                    f || (f = m(c)); var g; return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g }

                function o(a, c) { a || (a = b); if (j) return a.createDocumentFragment();
                    c = c || m(a); var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length; for (; e < g; e++) d.createElement(f[e]); return d }

                function p(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) { return r.shivMethods ? n(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(r, b.frag) }

                function q(a) { a || (a = b); var c = m(a); return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a } var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() { try { var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }() } catch (c) { f = !0, j = !0 } })(); var r = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, supportsUnknownElements: j, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: q, createElement: n, createDocumentFragment: o };
                a.html5 = r, q(b) }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) { return D([a]) }, e.testAllProps = F, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e }(this, this.document),
    function(a, b, c) {
        function d(a) { return "[object Function]" == o.call(a) }

        function e(a) { return "string" == typeof a }

        function f() {}

        function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a }

        function h() { var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 }

        function i(a, c, d, e, f, i, j) {
            function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function() { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = { t: d, s: c, e: f, a: i, x: j };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) }

        function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this }

        function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) { return "[object Array]" == o.call(a) },
            x = [],
            y = {},
            z = { timeout: function(a, b) { return b.length && (a.timeout = b[0]), a } },
            A, B;
        B = function(a) {
            function b(a) { var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = { url: c, origUrl: c, prefixes: a },
                    e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c }

            function g(a, e, f, g, h) { var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) }

            function h(a, b) {
                function c(a, c) { if (a) { if (e(a)) c || (j = function() { var a = [].slice.call(arguments);
                            k.apply(this, a), l() }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() { var b = 0,
                                        c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() { var a = [].slice.call(arguments);
                                k.apply(this, a), l() } : j[n] = function(a) { return function() { var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l) }, B.addPrefix = function(a, b) { z[a] = b }, B.addFilter = function(a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) { var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a; for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function() { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function(a, c, d, e, g, i) { var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0)) } }(this, document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) };
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) { return new m.fn.init(a, b) },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) { return b.toUpperCase() };
    m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function() { return d.call(this) }, get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function(a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function(a, b) { return m.each(this, a, b) }, map: function(a) { return this.pushStack(m.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(d.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === m.type(a) }, isArray: Array.isArray || function(a) { return "array" === m.type(a) }, isWindow: function(a) { return null != a && a == a.window }, isNumeric: function(a) { return !m.isArray(a) && a - parseFloat(a) >= 0 }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function(a) { var b; if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1; try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (k.ownLast)
                for (b in a) return j.call(a, b); for (b in a); return void 0 === b || j.call(a, b) }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function(b) { b && m.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) }, camelCase: function(a) { return a.replace(o, "ms-").replace(p, q) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b, c) { var d, e = 0,
                f = a.length,
                g = r(a); if (c) { if (g) { for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break } else if (g) { for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(n, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function(a, b, c) { var d; if (b) { if (g) return g.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c } return -1 }, merge: function(a, b) { var c = +b.length,
                d = 0,
                e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, f = 0,
                g = a.length,
                h = r(a),
                i = []; if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d); return e.apply([], i) }, guid: 1, proxy: function(a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || m.guid++, e) : void 0 }, now: function() { return +new Date }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { h["[object " + b + "]"] = b.toLowerCase() });

    function r(a) { var b = a.length,
            c = m.type(a); return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a }
    var s = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) { for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1 },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = { ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }; try { I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType } catch (eb) { I = { apply: F.length ? function(a, b) { H.apply(a, J.call(b)) } : function(a, b) { var c = a.length,
                        d = 0; while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function fb(a, b, d, e) { var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d; if (1 !== (k = b.nodeType) && 9 !== k) return []; if (p && !e) { if (f = _.exec(a))
                    if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d }
                if (c.qsa && (!q || !q.test(a))) { if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) { o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",") } if (x) try { return I.apply(d, w.querySelectorAll(x)), d } catch (y) {} finally { r || b.removeAttribute("id") } } } return i(a.replace(R, "$1"), b, d, e) }

        function gb() { var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b }

        function hb(a) { return a[u] = !0, a }

        function ib(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function jb(a, b) { var c = a.split("|"),
                e = a.length; while (e--) d.attrHandle[c[e]] = b }

        function kb(a, b) { var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D); if (d) return d; if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function lb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function mb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function nb(a) { return hb(function(b) { return b = +b, hb(function(c, d) { var e, f = a([], c.length, b),
                        g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function ob(a) { return a && typeof a.getElementsByTagName !== C && a }
        c = fb.support = {}, f = fb.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fb.setDocument = function(a) { var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView; return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() { m() }, !1) : g.attachEvent && g.attachEvent("onunload", function() { m() })), c.attributes = ib(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ib(function(a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = ib(function(a) { return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if (typeof b.getElementById !== C && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(cb, db); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(cb, db); return function(a) { var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0 } : function(a, b) { var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) { a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked") }), ib(function(a) { var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b]; if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0; if (f === g) return kb(a, b);
                c = a; while (c = c.parentNode) h.unshift(c);
                c = b; while (c = c.parentNode) i.unshift(c); while (h[d] === i[d]) d++; return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0 }, e) : n }, fb.matches = function(a, b) { return fb(a, null, null, b) }, fb.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fb(b, n, null, [a]).length > 0 }, fb.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fb.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fb.uniqueSort = function(a) { var b, d = [],
                e = 0,
                f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fb.getText = function(a) { var b, c = "",
                d = 0,
                f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b); return c }, d = fb.selectors = { cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(cb, db).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = fb.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h; if (q) { if (f) { while (p) { l = b; while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break } } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) { var d, f = e(a, b),
                            g = f.length; while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: hb(function(a) { var b = [],
                        c = [],
                        d = h(a.replace(R, "$1")); return d[u] ? hb(function(a, b, c, e) { var f, g = d(a, null, e, []),
                            h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() } }), has: hb(function(a) { return function(b) { return fb(a, b).length > 0 } }), contains: hb(function(a) { return function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: hb(function(a) { return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) { var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) { return a.disabled === !1 }, disabled: function(a) { return a.disabled === !0 }, checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return Z.test(a.nodeName) }, input: function(a) { return Y.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: nb(function() { return [0] }), last: nb(function(a, b) { return [b - 1] }), eq: nb(function(a, b, c) { return [0 > c ? c + b : c] }), even: nb(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: nb(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: nb(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: nb(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = lb(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter; while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fb.error(a) : z(a, i).slice(0) };

        function qb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function rb(a, b, c) { var d = b.dir,
                e = c && "parentNode" === d,
                f = x++; return b.first ? function(b, c, f) { while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) { var h, i, j = [w, f]; if (g) { while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } }

        function sb(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function tb(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c); return c }

        function ub(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

        function vb(a, b, c, d, e, f) { return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) { var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ub(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length; while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r) }) }

        function wb(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) { return a === b }, h, !0), l = rb(function(a) { return K.call(b, a) > -1 }, h, !0), m = [function(a, c, d) { return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a)) }
                    m.push(c) }
            return sb(m) }

        function xb(a, b) { var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) { var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length; for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) { if (e && l) { m = 0; while (o = a[m++])
                                if (o(l, g, h)) { i.push(l); break }
                            k && (w = v) }
                        c && ((l = !o && l) && p--, f && r.push(l)) } if (p += q, c && q !== p) { m = 0; while (o = b[m++]) o(r, s, g, h); if (f) { if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s) }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i) } return k && (w = v, j = t), r }; return c ? hb(f) : f } return h = fb.compile = function(a, b) { var c, d = [],
                e = [],
                f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a } return f }, i = fb.select = function(a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length) }
                i = X.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ib(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || jb("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ib(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || jb("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ib(function(a) { return null == a.getAttribute("disabled") }) || jb(L, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fb }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) { if (m.isFunction(b)) return m.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return m.grep(a, function(a) { return a === b !== c }); if ("string" == typeof b) { if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a) } return m.grep(a, function(a) { return m.inArray(a, b) >= 0 !== c }) }
    m.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) { return 1 === a.nodeType })) }, m.fn.extend({ find: function(a) { var b, c = [],
                d = this,
                e = d.length; if ("string" != typeof a) return this.pushStack(m(a).filter(function() { for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++) m.find(a, d[b], c); return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function(a) { return this.pushStack(w(this, a || [], !1)) }, not: function(a) { return this.pushStack(w(this, a || [], !0)) }, is: function(a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length } });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } if (d = y.getElementById(c[2]), d && d.parentNode) { if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d } return this.context = y, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this)) };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };
    m.extend({ dir: function(a, b, c) { var d = [],
                e = a[b]; while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } }), m.fn.extend({ has: function(a) { var b, c = m(a, this),
                d = c.length; return this.filter(function() { for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0 }) }, closest: function(a, b) { for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? m.unique(f) : f) }, index: function(a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function D(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }
    m.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return m.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return m.dir(a, "parentNode", c) }, next: function(a) { return D(a, "nextSibling") }, prev: function(a) { return D(a, "previousSibling") }, nextAll: function(a) { return m.dir(a, "nextSibling") }, prevAll: function(a) { return m.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return m.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return m.dir(a, "previousSibling", c) }, siblings: function(a) { return m.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return m.sibling(a.firstChild) }, contents: function(a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes) } }, function(a, b) { m.fn[a] = function(c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var E = /\S+/g,
        F = {};

    function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function(a, c) { b[c] = !0 }), b }
    m.Callbacks = function(a) { a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a); var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) { for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) },
            k = { add: function() { if (h) { var d = h.length;! function f(b) { m.each(b, function(b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function() { return h && m.each(arguments, function(a, c) { var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function(a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function() { return h = [], e = 0, this }, disable: function() { return h = i = c = void 0, this }, disabled: function() { return !h }, lock: function() { return i = void 0, c || k.disable(), this }, locked: function() { return !i }, fireWith: function(a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function() { return k.fireWith(this, arguments), this }, fired: function() { return !!d } }; return k }, m.extend({ Deferred: function(a) { var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() { return c }, always: function() { return e.done(arguments).fail(arguments), this }, then: function() { var a = arguments; return m.Deferred(function(c) { m.each(b, function(b, f) { var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() { var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) { return null != a ? m.extend(a, d) : d } },
                e = {}; return d.pipe = d.then, m.each(b, function(a, f) { var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) { var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) { return function(e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k; if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f; return f || g.resolveWith(k, c), g.promise() } });
    var H;
    m.fn.ready = function(a) { return m.ready.promise().done(a), this }, m.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? m.readyWait++ : m.ready(!0) }, ready: function(a) { if (a === !0 ? !--m.readyWait : !m.isReady) { if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready"))) } } });

    function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready()) }
    m.ready.promise = function(b) { if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else { y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J); var c = !1; try { c = null == a.frameElement && y.documentElement } catch (d) {}
            c && c.doScroll && ! function e() { if (!m.isReady) { try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) }
                    I(), m.ready() } }() } return H.promise(b) };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() { var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d)) }),
        function() { var a = y.createElement("div"); if (null == k.deleteExpando) { k.deleteExpando = !0; try { delete a.test } catch (b) { k.deleteExpando = !1 } }
            a = null }(), m.acceptData = function(a) { var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(N, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c } catch (e) {}
                m.data(a, b, c) } else c = void 0 } return c }

    function P(a) { var b; for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0 }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) { if (m.acceptData(a)) { var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !m.isEmptyObject(d)) return }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } }
    m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a) }, data: function(a, b, c) { return Q(a, b, c) }, removeData: function(a, b) { return R(a, b) }, _data: function(a, b, c) { return Q(a, b, c, !0) }, _removeData: function(a, b) { return R(a, b, !0) } }), m.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                g = f && f.attributes; if (void 0 === a) { if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { m.data(this, a) }) : arguments.length > 1 ? this.each(function() { m.data(this, a, b) }) : f ? O(f, a, m.data(f, a)) : void 0 }, removeData: function(a) { return this.each(function() { m.removeData(this, a) }) } }), m.extend({ queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx"; var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() { m.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function() { m._removeData(a, b + "queue"), m._removeData(a, c) }) }) } }), m.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { m.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a) },
        V = m.access = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === m.type(c)) { e = !0; for (h in c) m.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(m(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        W = /^(?:checkbox|radio)$/i;
    ! function() { var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment(); if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() { k.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == k.deleteExpando) { k.deleteExpando = !0; try { delete b.test } catch (d) { k.deleteExpando = !1 } } }(),
    function() { var b, c, d = y.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() { return !0 }

    function bb() { return !1 }

    function cb() { try { return y.activeElement } catch (a) {} }
    m.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(E) || [""], h = b.length; while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a); if (r && (k = r.events)) { b = (b || "").match(E) || [""], j = b.length; while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length; while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]) } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events")) } }, trigger: function(b, c, d, e) { var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : []; if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) { if (!e && !k.noBubble && !m.isWindow(d)) { for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a) }
                n = 0; while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault()); if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) { l = d[g], l && (d[g] = null), m.event.triggered = p; try { d[p]() } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l) } return b.result } }, dispatch: function(a) { a = m.event.fix(a); var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, b) { var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({ elem: i, handlers: e }) }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function(a) { if (a[m.expando]) return a; var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, d, e, f = b.button,
                    g = b.fromElement; return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== cb() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === cb() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return m.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function(a, b, c, d) { var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, m.removeEvent = y.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) { var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c)) }, m.Event = function(a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b) }, m.Event.prototype = { isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function() { var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function() { var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function() { var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { m.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj; return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), k.submitBubbles || (m.event.special.submit = { setup: function() { return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) { var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) { a._submit_bubble = !0 }), m._data(c, "submitBubbles", !0)) }) }, postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function() { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit") } }), k.changeBubbles || (m.event.special.change = { setup: function() { return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0) })), !1) : void m.event.add(this, "beforeactivate._change", function(a) { var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0) }), m._data(b, "changeBubbles", !0)) }) }, handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() { return m.event.remove(this, "._change"), !X.test(this.nodeName) } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { m.event.simulate(b, a.target, m.event.fix(a), !0) };
        m.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b)) } } }), m.fn.extend({ on: function(a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this; return 1 === e && (g = d, d = function(a) { return m().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() { m.event.add(this, a, d, c, b) }) }, one: function(a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() { m.event.remove(this, a, c, b) }) }, trigger: function(a, b) { return this.each(function() { m.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0 } });

    function db(a) { var b = eb.split("|"),
            c = a.createDocumentFragment(); if (c.createElement)
            while (b.length) c.createElement(b.pop()); return c }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) { var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0; if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b)); return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f }

    function vb(a) { W.test(a.type) && (a.defaultChecked = a.checked) }

    function wb(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function xb(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a }

    function yb(a) { var b = pb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function zb(a, b) { for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval")) }

    function Ab(a, b) { if (1 === b.nodeType && m.hasData(a)) { var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]) }
            g.data && (g.data = m.extend({}, g.data)) } }

    function Bb(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) { e = m._data(b); for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando) } "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } }
    m.extend({ clone: function(a, b, c) { var d, e, f, g, h, i = m.contains(a.ownerDocument, a); if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]); if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f }, buildFragment: function(a, b, c, d) { for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0]; while (e--) h = h.lastChild; if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) { f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) }
                m.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0; while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) { e = 0; while (f = h[e++]) ob.test(f.type || "") && c.push(f) }
            return h = null, o }, cleanData: function(a, b) { for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) { if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), m.fn.extend({ text: function(a) { return V(this, function(a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) }, append: function() { return this.domManip(arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wb(this, a);
                    b.appendChild(a) } }) }, prepend: function() { return this.domManip(arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = wb(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function(a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && m.cleanData(ub(a, !1)); while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return m.clone(this, a, b) }) }, html: function(a) { return V(this, function(a) { var b = this[0] || {},
                    c = 0,
                    d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0; if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(ib, "<$1></$2>"); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function(a) { return this.remove(a, !0) }, domManip: function(a, b) { a = e.apply([], a); var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p); if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) { var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) }); if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) { for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j); if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null } return this } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { m.fn[a] = function(a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } });
    var Cb, Db = {};

    function Eb(b, c) { var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display"); return e.detach(), f }

    function Fb(a) { var b = y,
            c = Db[a]; return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c }! function() { var a;
        k.shrinkWrapBlocks = function() { if (null != a) return a;
            a = !1; var b, c, d; return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0 } }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Jb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : y.documentElement.currentStyle && (Ib = function(a) { return a.currentStyle }, Jb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Lb(a, b) { return { get: function() { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } }! function() { var b, c, d, e, f, g, h; if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) { c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function() { return null == g && i(), g }, boxSizingReliable: function() { return null == f && i(), f }, pixelPosition: function() { return null == e && i(), e }, reliableMarginRight: function() { return null == h && i(), h } });

            function i() { var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d)) } } }(), m.swap = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = { position: "absolute", visibility: "hidden", display: "block" },
        Sb = { letterSpacing: "0", fontWeight: "400" },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) { if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length; while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d }

    function Vb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function Wb(a, b, c) { var d = Pb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function Xb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g }

    function Yb(a, b, c) { var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px" }
    m.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Jb(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = m.camelCase(b),
                    i = a.style; if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {} } }, css: function(a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f } }), m.each(["height", "width"], function(a, b) { m.cssHooks[b] = { get: function(a, c, d) { return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() { return Yb(a, b, d) }) : Yb(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && Ib(a); return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0) } } }), k.opacity || (m.cssHooks.opacity = { get: function(a, b) { return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function(a, b) { var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e) } }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) { return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function(a, b) { m.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb) }), m.fn.extend({ css: function(a, b) { return V(this, function(a, b, c) { var d, e, f = {},
                    g = 0; if (m.isArray(b)) { for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d); return f } return void 0 !== c ? m.style(a, b, c) : m.css(a, b) }, a, b, arguments.length > 1) }, show: function() { return Vb(this, !0) }, hide: function() { return Vb(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { U(this) ? m(this).show() : m(this).hide() }) } });

    function Zb(a, b, c, d, e) { return new Zb.prototype.init(a, b, c, d, e) }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() { var a = Zb.propHooks[this.prop]; return a && a.get ? a.get(this) : Zb.propHooks._default.get(this) },
        run: function(a) { var b, c = Zb.propHooks[this.prop]; return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, m.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = { "*": [function(a, b) { var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] };

    function fc() { return setTimeout(function() { $b = void 0 }), $b = m.now() }

    function gc(a, b) { var c, d = { height: a },
            e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d }

    function hc(a, b, c) { for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d }

    function ic(a, b, c) { var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, n.always(function() { n.always(function() { h.unqueued--, m.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b)
            if (e = b[d], ac.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0 }
                o[d] = r && r[d] || m.style(a, d) } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else { r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() { m(a).hide() }), n.done(function() { var b;
                m._removeData(a, "fxshow"); for (b in o) m.style(a, b, o[b]) }); for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

    function jc(a, b) { var c, d, e, f, g; for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function kc(a, b, c) { var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                        d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }),
            k = j.props; for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    m.Animation = m.extend(kc, { tweener: function(a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b) }, prefilter: function(a, b) { b ? dc.unshift(a) : dc.push(a) } }), m.speed = function(a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue) }, d }, m.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() { var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                    delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this); if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0; for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), m.each(["toggle", "show", "hide"], function(a, b) { var c = m.fn[b];
            m.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e) } }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { m.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), m.timers = [], m.fx.tick = function() { var a, b = m.timers,
                c = 0; for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0 }, m.fx.timer = function(a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function() { _b || (_b = setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function() { clearInterval(_b), _b = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function(a, b) { return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) { var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) } }) },
        function() { var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value }();
    var lc = /\r/g;
    m.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = m.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) { return null == a ? "" : a + "" })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c) } } }), m.extend({ valHooks: { option: { get: function(a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)) } }, select: { get: function(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) { if (b = m(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) { var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length; while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e } } } }), m.each(["radio", "checkbox"], function() { m.valHooks[this] = { set: function(a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0 } }, k.checkOn || (m.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({ attr: function(a, b) { return V(this, m.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { m.removeAttr(this, a) }) } }), m.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) }, removeAttr: function(a, b) { var c, d, e = 0,
                f = b && b.match(E); if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d) }, attrHooks: { type: { set: function(a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), nc = { set: function(a, b, c) { return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c } }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) { var e, f; return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e } : function(a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null } }), rc && qc || (m.attrHooks.value = { set: function(a, b, c) { return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c) } }), qc || (mc = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, oc.id = oc.name = oc.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, m.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: mc.set }, m.attrHooks.contenteditable = { set: function(a, b, c) { mc.set(a, "" === b ? !1 : b, c) } }, m.each(["width", "height"], function(a, b) { m.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), k.style || (m.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({ prop: function(a, b) { return V(this, m.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = m.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1 } } } }), k.hrefNormalized || m.each(["href", "src"], function(a, b) { m.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), k.optSelected || (m.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { m.propFix[this.toLowerCase()] = this }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a; if (m.isFunction(a)) return this.each(function(b) { m(this).addClass(a.call(this, b, this.className)) }); if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) { f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g) }
            return this }, removeClass: function(a) { var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a; if (m.isFunction(a)) return this.each(function(b) { m(this).removeClass(a.call(this, b, this.className)) }); if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) { f = 0; while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g) }
            return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) { m(this).toggleClass(a.call(this, c, this.className, b), b) } : function() { if ("string" === c) { var b, d = 0,
                        e = m(this),
                        f = a.match(E) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "") }) }, hasClass: function(a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1 } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { m.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), m.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null,
            e = m.trim(b + ""); return e && !m.trim(e.replace(xc, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : m.error("Invalid JSON: " + b) }, m.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try { zc = location.href } catch (Kc) { zc = y.createElement("a"), zc.href = "", zc = zc.href }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                f = b.toLowerCase().match(E) || []; if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function Mc(a, b, c, d) { var e = {},
            f = a === Ic;

        function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function Nc(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a }

    function Oc(a, b, c) { var d, e, f, g, h = a.contents,
            i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g); break }
        if (i[0] in c) f = i[0];
        else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                d || (d = g) }
            f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 }

    function Pc(a, b, c, d) { var e, f, g, h, i, j = {},
            k = a.dataTypes.slice(); if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift(); while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }
    m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a) }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function(a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {}; var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = { readyState: 0, getResponseHeader: function(a) { var b; if (2 === t) { if (!j) { j = {}; while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2] }
                            b = j[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return 2 === t ? f : null }, setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function(a) { return t || (k.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this }, abort: function(a) { var b = a || u; return i && i.abort(b), x(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]); for (d in k.headers) v.setRequestHeader(d, k.headers[d]); if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort"; for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]); if (i = Mc(Ic, k, b, v)) { v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() { v.abort("timeout") }, k.timeout)); try { t = 1, i.send(r, x) } catch (w) { if (!(2 > t)) throw w;
                    x(-1, w) } } else x(-1, "No Transport");

            function x(a, b, c, d) { var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop"))) } return v }, getJSON: function(a, b, c) { return m.get(a, b, c, "json") }, getScript: function(a, b) { return m.get(a, void 0, b, "script") } }), m.each(["get", "post"], function(a, b) { m[b] = function(a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { m.fn[b] = function(a) { return this.on(b, a) } }), m._evalUrl = function(a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, m.fn.extend({ wrapAll: function(a) { if (m.isFunction(a)) return this.each(function(b) { m(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function(a) { return this.each(m.isFunction(a) ? function(b) { m(this).wrapInner(a.call(this, b)) } : function() { var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = m.isFunction(a); return this.each(function(c) { m(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() { return this.parent().each(function() { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() } }), m.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")) }, m.expr.filters.visible = function(a) { return !m.expr.filters.hidden(a) };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) { var e; if (m.isArray(b)) m.each(b, function(b, e) { c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d) }
    m.param = function(a, b) { var c, d = [],
            e = function(a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Vc(c, a[c], b, e); return d.join("&").replace(Qc, "+") }, m.fn.extend({ serialize: function() { return m.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a)) }).map(function(a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function(a) { return { name: b.name, value: a.replace(Sc, "\r\n") } }) : { name: b.name, value: c.replace(Sc, "\r\n") } }).get() } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c() } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() { for (var a in Xc) Xc[a](void 0, !0) }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) { if (!a.crossDomain || k.cors) { var b; return { send: function(c, d) { var e, f = a.xhr(),
                        g = ++Wc; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) { var h, i, j; if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText); try { i = f.statusText } catch (k) { i = "" }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 }
                        j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b() }, abort: function() { b && b(void 0, !0) } } } });

    function Zc() { try { return new a.XMLHttpRequest } catch (b) {} }

    function $c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return m.globalEval(a), a } } }), m.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), m.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c = y.head || m("head")[0] || y.documentElement; return { send: function(d, e) { b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function() { b && b.onload(void 0, !0) } } } });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = _c.pop() || m.expando + "_" + vc++; return this[a] = !0, a } }), m.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || m.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), m.parseHTML = function(a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || y; var d = u.exec(a),
            e = !c && []; return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes)) };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) { if ("string" != typeof a && bd) return bd.apply(this, arguments); var d, e, f, g = this,
            h = a.indexOf(" "); return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function(a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, m.expr.filters.animated = function(a) { return m.grep(m.timers, function(b) { return a === b.elem }).length };
    var cd = a.document.documentElement;

    function dd(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    m.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n) } }, m.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { m.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument; if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function() { if (this[0]) { var a, b, c = { top: 0, left: 0 },
                    d = this[0]; return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent || cd; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cd }) } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = /Y/.test(b);
        m.fn[a] = function(d) { return V(this, function(a, d, e) { var f = dd(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), m.each(["top", "left"], function(a, b) { m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) { return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function(a, b) { m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { m.fn[d] = function(d, e) { var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border"); return V(this, function(b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), m.fn.size = function() { return this.length }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return m });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) { return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m }, typeof b === K && (a.jQuery = a.$ = m), m
});
//# sourceMappingURL=jquery.min.map
/*!
 * VERSION: 1.15.0
 * DATE: 2014-12-03
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) { var s = function(t) { var e, i = [],
                            s = t.length; for (e = 0; e !== s; i.push(t[e++])); return i },
                    r = function(t, e, s) { i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render },
                    n = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    h = a.isArray,
                    l = r.prototype = i.to({}, .1, {}),
                    _ = [];
                r.version = "1.15.0", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function() { return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this) }, l.updateTo = function(t, e) { var s, r = this.ratio,
                        n = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)); for (s in t) this.vars[s] = t[s]; if (this._initted || n)
                        if (e) this._initted = !1, n && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) { var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1) } else if (this._time > 0 || n) { this._initted = !1, this._init(); for (var o, h = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next } return this }, l.render = function(t, e, i) { this._initted || 0 === this._duration && this.vars.repeat && this.invalidate(); var s, r, o, h, l, u, p, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime; if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0 && y !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = c = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0; if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0)) }, r.to = function(t, e, i) { return new r(t, e, i) }, r.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i) }, r.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s) }, r.staggerTo = r.allTo = function(t, e, n, a, l, u, p) { a = a || 0; var c, f, m, d, g = n.delay || 0,
                        v = [],
                        y = function() { n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _) }; for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), c = t.length - 1, m = 0; c >= m; m++) { f = {}; for (d in n) f[d] = n[d];
                        f.delay = g, m === c && l && (f.onComplete = y), v[m] = new r(t[m], e, f), g += a } return v }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o) }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h) }, r.delayedCall = function(t, e, i, s, n) { return new r(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: n, overwrite: 0 }) }, r.set = function(t, e) { return new r(t, 0, e) }, r.isTweening = function(t) { return i.getTweensOf(t, !0).length > 0 }; var u = function(t, e) { for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next; return s },
                    p = r.getAllTweens = function(e) { return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e)) };
                r.killAll = function(t, i, s, r) { null == i && (i = !0), null == s && (s = !0); var n, a, o, h = p(0 != r),
                        l = h.length,
                        _ = i && s && r; for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1)) }, r.killChildTweensOf = function(t, e) { if (null != t) { var n, l, _, u, p, c = a.tweenLookup; if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else { n = []; for (_ in c)
                                for (l = c[_].target.parentNode; l;) l === t && (n = n.concat(c[_].tweens)), l = l.parentNode; for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1) } } }; var c = function(t, i, s, r) { i = i !== !1, s = s !== !1, r = r !== !1; for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t) }; return r.pauseAll = function(t, e, i) { c(!0, t, e, i) }, r.resumeAll = function(t, e, i) { c(!1, t, e, i) }, r.globalTimeScale = function(e) { var s = t._rootTimeline,
                        r = i.ticker.time; return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale }, l.progress = function(t) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration() }, l.totalProgress = function(t) { return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration() }, l.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, l.duration = function(e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, l.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, l.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, l.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, l.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, r }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) { var s = function(t) { e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate; var i, s, r = this.vars; for (s in r) i = r[s], o(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger) },
                    r = 1e-10,
                    n = i._internals,
                    a = n.isSelector,
                    o = n.isArray,
                    h = n.lazyTweens,
                    l = n.lazyRender,
                    _ = [],
                    u = _gsScope._gsDefine.globals,
                    p = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                    c = function(t, e, i, s) { var r = t._timeline,
                            n = r._totalTime;!e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(s || r, i || _), this._forcingPlayhead && r.seek(n)) },
                    f = function(t) { var e, i = [],
                            s = t.length; for (e = 0; e !== s; i.push(t[e++])); return i },
                    m = s.prototype = new e; return s.version = "1.15.0", m.constructor = s, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, s, r) { var n = s.repeat && u.TweenMax || i; return e ? this.add(new n(t, e, s), r) : this.set(t, s, r) }, m.from = function(t, e, s, r) { return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r) }, m.fromTo = function(t, e, s, r, n) { var a = r.repeat && u.TweenMax || i; return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n) }, m.staggerTo = function(t, e, r, n, o, h, l, _) { var u, c = new s({ onComplete: h, onCompleteParams: l, onCompleteScope: _, smoothChildTiming: this.smoothChildTiming }); for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = f(t)), n = n || 0, 0 > n && (t = f(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)), c.to(t[u], e, p(r), u * n); return this.add(c, o) }, m.staggerFrom = function(t, e, i, s, r, n, a, o) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o) }, m.staggerFromTo = function(t, e, i, s, r, n, a, o, h) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h) }, m.call = function(t, e, s, r) { return this.add(i.delayedCall(0, t, e, s), r) }, m.set = function(t, e, s) { return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s) }, s.exportRoot = function(t, e) { t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0); var r, n, a = new s(t),
                        o = a._timeline; for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n; return o.add(a, 0), a }, m.add = function(r, n, a, h) { var l, _, u, p, c, f; if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) { if (r instanceof Array || r && r.push && o(r)) { for (a = a || "normal", h = h || 0, l = n, _ = r.length, u = 0; _ > u; u++) o(p = r[u]) && (p = new s({ tweens: p })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += h; return this._uncache(!0) } if ("string" == typeof r) return this.addLabel(r, n); if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r) } if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this, f = c.rawTime() > r._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline; return this }, m.remove = function(e) { if (e instanceof t) return this._remove(e, !1); if (e instanceof Array || e && e.push && o(e)) { for (var i = e.length; --i > -1;) this.remove(e[i]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, m._remove = function(t, i) { e.prototype._remove.call(this, t, i); var s = this._last; return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, m.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, m.insert = m.insertMultiple = function(t, e, i, s) { return this.add(t, e || 0, i, s) }, m.appendMultiple = function(t, e, i, s) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s) }, m.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, m.addPause = function(t, e, s, r) { var n = i.delayedCall(0, c, ["{self}", e, s, r], this); return n.data = "isPause", this.add(n, t) }, m.removeLabel = function(t) { return delete this._labels[t], this }, m.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, m._parseTimeOrLabel = function(e, i, s, r) { var n; if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && o(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]); if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s); if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else { if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration() } return Number(e) + i }, m.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1) }, m.stop = function() { return this.paused(!0) }, m.gotoAndPlay = function(t, e) { return this.play(t, e) }, m.gotoAndStop = function(t, e) { return this.pause(t, e) }, m.render = function(t, e, i) { this._gc && this._enabled(!0, !1); var s, n, a, o, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        f = this._startTime,
                        m = this._timeScale,
                        d = this._paused; if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || u) { if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _)), this._time >= c)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || (h.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (h.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || _))) } }, m._hasPausedChild = function() { for (var t = this._first; t;) { if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next } return !1 }, m.getChildren = function(t, e, s, r) { r = r || -9999999999; for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next; return n }, m.getTweensOf = function(t, e) { var s, r, n = this._gc,
                        a = [],
                        o = 0; for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]); return n && this._enabled(!1, !0), a }, m.recent = function() { return this._recent }, m._contains = function(t) { for (var e = t.timeline; e;) { if (e === this) return !0;
                        e = e.timeline } return !1 }, m.shiftChildren = function(t, e, i) { i = i || 0; for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next; if (e)
                        for (s in n) n[s] >= i && (n[s] += t); return this._uncache(!0) }, m._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0); return r }, m.clear = function(t) { var e = this.getChildren(!1, !0, !0),
                        i = e.length; for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1); return t !== !1 && (this._labels = {}), this._uncache(!0) }, m.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, m._enabled = function(t, i) { if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next; return e.prototype._enabled.call(this, t, i) }, m.totalTime = function() { this._forcingPlayhead = !0; var e = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, e }, m.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, m.totalDuration = function(t) { if (!arguments.length) { if (this._dirty) { for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1 } return this._totalDuration } return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this }, m.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, m.rawTime = function() { return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, s }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) { var s = function(e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0 },
                    r = 1e-10,
                    n = [],
                    a = e._internals,
                    o = a.lazyTweens,
                    h = a.lazyRender,
                    l = new i(null, null, 1, 0),
                    _ = s.prototype = new t; return _.constructor = s, _.kill()._gc = !1, s.version = "1.15.0", _.invalidate = function() { return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, _.addCallback = function(t, i, s, r) { return this.add(e.delayedCall(0, t, s, r), i) }, _.removeCallback = function(t, e) { if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this }, _.tweenTo = function(t, i) { i = i || {}; var s, r, a, o = { ease: l, overwrite: i.delay ? 2 : 1, useFrames: this.usesFrames(), immediateRender: !1 }; for (r in i) o[r] = i[r]; return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function() { a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n) }, a }, _.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], onCompleteScope: this }, i.immediateRender = i.immediateRender !== !1; var s = this.tweenTo(e, i); return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001) }, _.render = function(t, e, i) { this._gc && this._enabled(!0, !1); var s, a, l, _, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        w = this._cycle; if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) { var x = this._yoyo && 0 !== (1 & w),
                            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            R = this._time; if (this._totalTime = w * f, w > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k } if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0; if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n))) }, _.getActive = function(t, e, i) { null == t && (t = !0), null == e && (e = !0), null == i && (i = !1); var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length; for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r); return n }, _.getLabelAfter = function(t) { t || 0 !== t && (t = this._time); var e, i = this.getLabelsArray(),
                        s = i.length; for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null }, _.getLabelBefore = function(t) { null == t && (t = this._time); for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null }, _.getLabelsArray = function() { var t, e = [],
                        i = 0; for (t in this._labels) e[i++] = { time: this._labels[t], name: t }; return e.sort(function(t, e) { return t.time - e.time }), e }, _.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, _.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, _.totalDuration = function(e) { return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, _.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, _.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, _.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, _.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, _.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, s }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = _gsScope._gsDefine.globals,
                    a = function(t, e, i, s) { this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    h = function(t, e, i, s) { var r = { a: t },
                            n = {},
                            a = {},
                            o = { c: s },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            c = (p - u) / 8; return r.b = h + (t - h) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o] },
                    l = function(t, r, n, a, o) { var l, _, u, p, c, f, m, d, g, v, y, T, w, x = t.length - 1,
                            b = 0,
                            P = t[0].a; for (l = 0; x > l; l++) c = t[b], _ = c.a, u = c.d, p = t[b + 1].d, o ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (f + m) / 2), f += d, m += d, c.c = g = f, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = h(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3])) },
                    _ = function(t, s, r, n) { var o, h, l, _, u, p, c = []; if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2))); if (o = t.length - 2, 0 > o) return c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c; for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], c[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _)); return c[h] = new a(t[h][s], 0, 0, t[h + 1][s]), c },
                    u = function(t, n, a, h, u, p) { var c, f, m, d, g, v, y, T, w = {},
                            x = [],
                            b = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == n && (n = 1); for (f in t[0]) x.push(f); if (t.length > 1) { for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;)
                                if (f = x[c], Math.abs(b[f] - T[f]) > .05) { y = !1; break }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3]) } for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) f = x[c], r[f] = -1 !== u.indexOf("," + f + ","), w[f] = _(t, f, r[f], p); for (c = e.length; --c > -1;) e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]); if (!h) { for (c = x.length; --c > -1;)
                                if (r[f])
                                    for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (c = s.length; --c > -1;) s[c] = Math.sqrt(s[c]) } for (c = x.length, d = a ? 4 : 1; --c > -1;) f = x[c], m = w[f], l(m, n, a, h, r[f]), y && (m.splice(0, d), m.splice(m.length - d, d)); return w },
                    p = function(t, e, i) { e = e || "soft"; var s, r, n, o, h, l, _, u, p, c, f, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = []; if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data"; for (p in t[0]) v.push(p); for (l = v.length; --l > -1;) { for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2), h[c++] = s; for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[c++] = f = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = c } return m },
                    c = function(t, e, i) { for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = f * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s },
                    f = function(t, e) { e = e >> 0 || 6; var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            p = []; for (i in t) c(t[i], a, e); for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []); return { length: l, lengths: o, segments: u } },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) { this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10); var s, r, n, a, o, h = e.values || [],
                                l = {},
                                _ = h[0],
                                c = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = c ? c instanceof Array ? c : [
                                ["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]
                            ] : null; for (s in _) this._props.push(s); for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l); if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) { var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length } if (c = this._autoRotate)
                                for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;) { for (a = 0; 3 > a; a++) s = c[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = c[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s] }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0 },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                c = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) { for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0] } else if (this._l1 > e && r > 0) { for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si] }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) { for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), c[n] ? f[n](h) : f[n] = h;
                            if (this._autoRotate) { var d, g, v, y, T, w, x, b = this._autoRotate; for (r = b.length; --r > -1;) n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h) }
                        }
                    }),
                    d = m.prototype;
                m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) { return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, m._cssRegister = function() { var t = n.CSSPlugin; if (t) { var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", { parser: function(t, e, n, a, o, h) { e instanceof Array && (e = { values: e }), h = new m; var l, _, u, p = e.values,
                                    c = p.length - 1,
                                    f = [],
                                    d = {}; if (0 > c) return o; for (l = 0; c >= l; l++) u = i(t, p[l], a, o, h, c !== l), f[l] = u.end; for (_ in e) d[_] = e[_]; return d.values = f, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o } }) } }, d._roundProps = function(t, e) { for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e) }, d._kill = function(t) { var e, i, s = this._props; for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t) }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio },
                    o = _gsScope._gsDefine.globals,
                    h = {},
                    l = a.prototype = new t("css");
                l.constructor = a, a.version = "1.15.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = { top: l, right: l, bottom: l, left: l, width: l, height: l, fontSize: l, padding: l, margin: l, perspective: l, lineHeight: "" };
                var _, u, p, c, f, m, d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    T = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    S = /([A-Z])/g,
                    k = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    A = function(t, e) { return e.toUpperCase() },
                    C = /(?:Left|Right|Width)/i,
                    O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    M = /,(?=[^\)]*(?:\(|$))/gi,
                    z = Math.PI / 180,
                    I = 180 / Math.PI,
                    E = {},
                    F = document,
                    N = function(t) { return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", t) : F.createElement(t) },
                    L = N("div"),
                    X = N("img"),
                    U = a._internals = { _specialProps: h },
                    Y = navigator.userAgent,
                    B = function() { var t = Y.indexOf("Android"),
                            e = N("a"); return p = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), f = p && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), c = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1 }(),
                    j = function(t) { return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                    q = function(t) { window.console && console.log(t) },
                    V = "",
                    G = "",
                    W = function(t, e) { e = e || L; var i, s, r = e.style; if (void 0 !== r[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];); return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null },
                    Z = F.defaultView ? F.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, s, r) { var n; return B || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : j(t) },
                    $ = U.convertToPixels = function(t, i, s, r, n) { if ("px" === r || !r) return s; if ("auto" === r || !s) return 0; var o, h, l, _ = C.test(i),
                            u = t,
                            p = L.style,
                            c = 0 > s; if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else { if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else { if (u = t.parentNode || F.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                p[_ ? "width" : "height"] = s + r }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0)) } return c ? -o : o },
                    H = U.calculateOffset = function(t, e, i) { if ("absolute" !== Q(t, "position", i)) return 0; var s = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + s, i); return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0) },
                    K = function(t, e) { var i, s, r = {}; if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(k, A)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(k, A)] = e[i]); return B || (r.opacity = j(t)), s = Me(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Se && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r },
                    J = function(t, e, i, s, r) { var n, a, o, h = {},
                            l = t.style; for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new ce(l, a, l[a], o))); if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]); return { difs: h, firstMPT: o } },
                    te = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ie = function(t, e, i) { var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = te[e],
                            n = r.length; for (i = i || Z(t, null); --n > -1;) s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0; return s },
                    se = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0"); var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1]; return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "") },
                    re = function(t, e) { return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) },
                    ne = function(t, e) { return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) },
                    ae = function(t, e, i, s) { var r, n, a, o, h = 1e-6; return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = Number(n[0].replace(y, "")) * (-1 === t.indexOf("rad") ? 1 : I) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o },
                    oe = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                    he = function(t, e, i) { return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5 },
                    le = a.parseColor = function(t) { var e, i, s, r, n, a; return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black },
                    _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in oe) _e += "|" + l + "\\b";
                _e = RegExp(_e + ")", "gi");
                var ue = function(t, e, i, s) { if (null == t) return function(t) { return t }; var r, n = e ? (t.match(_e) || [""])[0] : "",
                            a = t.split(n).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(d, "") : ""; return _ ? r = e ? function(t) { var e, p, c, f; if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) { for (f = t.replace(M, "|").split("|"), c = 0; f.length > c; c++) f[c] = r(f[c]); return f.join(",") } if (e = (t.match(_e) || [n])[0], p = t.split(e).join("").match(v) || [], c = p.length, _ > c--)
                                for (; _ > ++c;) p[c] = i ? p[0 | (c - 1) / 2] : a[c]; return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "") } : function(t) { var e, n, p; if ("number" == typeof t) t += u;
                            else if (s && M.test(t)) { for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]); return n.join(",") } if (e = t.match(v) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p]; return o + e.join(l) + h } : function(t) { return t } },
                    pe = function(t) { return t = t.split(","),
                            function(e, i, s, r, n, a, o) { var h, l = (i + "").split(" "); for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0]; return r.parse(e, o, n, a) } },
                    ce = (U._setPluginRatio = function(t) { this.plugin.setRatio(t); for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next; if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) { if (i = o.t, i.type) { if (1 === i.type) { for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r } } else i.e = i.s + i.xs0;
                                o = o._next } }, function(t, e, i, s, r) { this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s) }),
                    fe = (U._parseToProxy = function(t, e, i, s, r, n) { var a, o, h, l, _, u = s,
                            p = {},
                            c = {},
                            f = i._transform,
                            m = E; for (i._transform = null, E = e, s = _ = i.parse(t, e, s, r), E = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) { if (1 >= s.type && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ce(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, c[o] = s.data[h], p[o] = s[h], n || (l = new ce(s, h, o, l, s.rxp[h]));
                            s = s._next } return { proxy: p, end: c, firstMPT: l, pt: _ } }, U.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) { this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof fe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this) }),
                    me = a.parseComplex = function(t, e, i, s, r, n, a, o, h, l) { i = i || n || "", a = new fe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += ""; var u, p, c, f, m, v, y, T, w, x, b, S, k = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            A = k.length,
                            C = _ !== !1; for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = l, u = 0; A > u; u++)
                            if (f = k[u], m = R[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), C && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f))) S = "," === m.charAt(m.length - 1) ? ")," : ")", f = le(f), m = le(m), w = f.length + m.length > 6, w && !B && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (B || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, S, !1)));
                        else if (v = f.match(d)) { if (y = m.match(g), !y || y.length !== v.length) return a; for (c = 0, p = 0; v.length > p; p++) b = v[p], x = f.indexOf(b, c), a.appendXtra(f.substr(c, x - c), Number(b), re(y[p], b), "", C && "px" === f.substr(x + b.length, 2), 0 === p), c = x + b.length;
                            a["xs" + a.l] += f.substr(c) } else a["xs" + a.l] += a.l ? " " + f : f; if (-1 !== s.indexOf("=") && a.data) { for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u] } return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a },
                    de = 9;
                for (l = fe.prototype, l.l = l.pr = 0; --de > 0;) l["xn" + de] = 0, l["xs" + de] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, s, r, n) { var a = this,
                        o = a.l; return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a) };
                var ge = function(t, e) { e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                    ve = U._registerComplexSpecialProp = function(t, e, i) { "object" != typeof e && (e = { parser: i }); var s, r, n = t.split(","),
                            a = e.defaultValue; for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ge(n[s], e) },
                    ye = function(t) { if (!h[t]) { var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            ve(t, { parser: function(t, i, s, r, n, a, l) { var _ = o.com.greensock.plugins[e]; return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n) } }) } };
                l = ge.prototype, l.parseComplex = function(t, e, i, s, r, n) { var a, o, h, l, _, u, p = this.keyword; if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) { for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ") } return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n) }, l.parse = function(t, e, i, s, n, a) { return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a) }, a.registerSpecialProp = function(t, e, i) { ve(t, { parser: function(t, s, r, n, a, o) { var h = new fe(t, r, 0, 0, a, 2, r, !1, i); return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h }, priority: i }) };
                var Te, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    xe = W("transform"),
                    be = V + "transform",
                    Pe = W("transformOrigin"),
                    Se = null !== W("perspective"),
                    ke = U.Transform = function() { this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1 },
                    Re = window.SVGElement,
                    Ae = function(t, e, i) { var s, r = F.createElementNS("http://www.w3.org/2000/svg", t),
                            n = /([a-z])([A-Z])/g; for (s in i) r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]); return e.appendChild(r), r },
                    Ce = document.documentElement,
                    Oe = function() { var t, e, i, s = m || /Android/i.test(Y) && !window.chrome; return F.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[xe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width, Ce.removeChild(t)), s }(),
                    De = function(t, e, i) { var s = t.getBBox();
                        e = se(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y },
                    Me = U.getTransform = function(t, e, i, s) { if (t._gsTransform && i && !s) return t._gsTransform; var n, o, h, l, _, u, p, c, f, m, d = i ? t._gsTransform || new ke : new ke,
                            g = 0 > d.scaleX,
                            v = 2e-5,
                            y = 1e5,
                            T = Se ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                            w = parseFloat(a.defaultTransformPerspective) || 0; if (xe ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(O), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, d.svg = !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (De(t, Q(t, Pe, r, !1, "50% 50%") + "", d), Te = a.useSVGTransformAttr || Oe, h = t.getAttribute("transform"), n && h && -1 !== h.indexOf("matrix") && (o = h, n = 0)), !n) { for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = h.length; --l > -1;) _ = Number(h[l]), h[l] = (u = _ - (_ |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + _ : _; if (16 === h.length) { var x = h[8],
                                    b = h[9],
                                    P = h[10],
                                    S = h[12],
                                    k = h[13],
                                    R = h[14];
                                d.zOrigin && (R = -d.zOrigin, S = x * R - h[12], k = b * R - h[13], R = P * R + d.zOrigin - h[14]); var A, C, D, M, z, E = h[0],
                                    F = h[1],
                                    N = h[2],
                                    L = h[3],
                                    X = h[4],
                                    U = h[5],
                                    Y = h[6],
                                    B = h[7],
                                    j = h[11],
                                    q = Math.atan2(F, U);
                                d.rotation = q * I, q && (M = Math.cos(-q), z = Math.sin(-q), E = E * M + X * z, C = F * M + U * z, U = F * -z + U * M, Y = N * -z + Y * M, F = C), q = Math.atan2(x, E), d.rotationY = q * I, q && (M = Math.cos(-q), z = Math.sin(-q), A = E * M - x * z, C = F * M - b * z, D = N * M - P * z, b = F * z + b * M, P = N * z + P * M, j = L * z + j * M, E = A, F = C, N = D), q = Math.atan2(Y, P), d.rotationX = q * I, q && (M = Math.cos(-q), z = Math.sin(-q), A = X * M + x * z, C = U * M + b * z, D = Y * M + P * z, x = X * -z + x * M, b = U * -z + b * M, P = Y * -z + P * M, j = B * -z + j * M, X = A, U = C, Y = D), d.scaleX = (0 | Math.sqrt(E * E + F * F) * y + .5) / y, d.scaleY = (0 | Math.sqrt(U * U + b * b) * y + .5) / y, d.scaleZ = (0 | Math.sqrt(Y * Y + P * P) * y + .5) / y, d.skewX = 0, d.perspective = j ? 1 / (0 > j ? -j : j) : 0, d.x = S, d.y = k, d.z = R } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Q(t, "display", e))) { var V = h.length >= 6,
                                    G = V ? h[0] : 1,
                                    W = h[1] || 0,
                                    Z = h[2] || 0,
                                    $ = V ? h[3] : 1;
                                d.x = h[4] || 0, d.y = h[5] || 0, p = Math.sqrt(G * G + W * W), c = Math.sqrt($ * $ + Z * Z), f = G || W ? Math.atan2(W, G) * I : d.rotation || 0, m = Z || $ ? Math.atan2(Z, $) * I + f : d.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (c *= -1, m += 0 >= m ? 180 : -180)), d.scaleX = p, d.scaleY = c, d.rotation = f, d.skewX = m, Se && (d.rotationX = d.rotationY = d.z = 0, d.perspective = w, d.scaleZ = 1) }
                            d.zOrigin = T; for (l in d) v > d[l] && d[l] > -v && (d[l] = 0) } return i && (t._gsTransform = d), d },
                    ze = function(t) { var e, i, s = this.data,
                            r = -s.rotation * z,
                            n = r + s.skewX * z,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle; if (p) { i = h, h = -l, l = -i, e = p.filter, u.filter = ""; var c, f, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                x = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100; if (null != s.ox && (c = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, f = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += c - (c * o + f * h), b += f - (c * l + f * _)), v ? (c = d / 2, f = g / 2, y += ", Dx=" + (c - (c * o + f * h) + x) + ", Dy=" + (f - (c * l + f * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) { var P, S, k, R = 8 > m ? 1 : -1; for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), de = 0; 4 > de; de++) S = ee[de], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0, k = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? c - s.ieOffsetX : f - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === de || 2 === de ? 1 : R))) + "px" } } },
                    Ie = U.set3DTransformRatio = function(t) { var e, i, s, r, n, a, o, h, l, _, u, p, f, m, d, g, v, y, T, w, x, b, P, S, k, R = this.data,
                            A = this.t.style,
                            C = R.rotation * z,
                            O = R.scaleX,
                            D = R.scaleY,
                            M = R.scaleZ,
                            I = R.x,
                            E = R.y,
                            F = R.z,
                            N = R.perspective; if (!(1 !== t && 0 !== t || "auto" !== R.force3D || R.rotationY || R.rotationX || 1 !== M || N || F)) return Ee.call(this, t), void 0; if (c) { var L = 1e-4;
                            L > O && O > -L && (O = M = 2e-5), L > D && D > -L && (D = M = 2e-5), !N || R.z || R.rotationX || R.rotationY || (N = 0) } if (C || R.skewX) y = Math.cos(C), T = Math.sin(C), e = y, n = T, R.skewX && (C -= R.skewX * z, y = Math.cos(C), T = Math.sin(C), "simple" === R.skewType && (w = Math.tan(R.skewX * z), w = Math.sqrt(1 + w * w), y *= w, T *= w)), i = -T, a = y;
                        else { if (!(R.rotationY || R.rotationX || 1 !== M || N || R.svg)) return A[xe] = (R.xPercent || R.yPercent ? "translate(" + R.xPercent + "%," + R.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + E + "px," + F + "px)" + (1 !== O || 1 !== D ? " scale(" + O + "," + D + ")" : ""), void 0;
                            e = a = 1, i = n = 0 }
                        u = 1, s = r = o = h = l = _ = p = f = m = 0, d = N ? -1 / N : 0, g = R.zOrigin, v = 1e5, k = ",", C = R.rotationY * z, C && (y = Math.cos(C), T = Math.sin(C), l = u * -T, f = d * -T, s = e * T, o = n * T, u *= y, d *= y, e *= y, n *= y), C = R.rotationX * z, C && (y = Math.cos(C), T = Math.sin(C), w = i * y + s * T, x = a * y + o * T, b = _ * y + u * T, P = m * y + d * T, s = i * -T + s * y, o = a * -T + o * y, u = _ * -T + u * y, d = m * -T + d * y, i = w, a = x, _ = b, m = P), 1 !== M && (s *= M, o *= M, u *= M, d *= M), 1 !== D && (i *= D, a *= D, _ *= D, m *= D), 1 !== O && (e *= O, n *= O, l *= O, f *= O), g && (p -= g, r = s * p, h = o * p, p = u * p + g), R.svg && (r += R.xOrigin - (R.xOrigin * e + R.yOrigin * i), h += R.yOrigin - (R.xOrigin * n + R.yOrigin * a)), r = (w = (r += I) - (r |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + r : r, h = (w = (h += E) - (h |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + h : h, p = (w = (p += F) - (p |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + p : p, S = R.xPercent || R.yPercent ? "translate(" + R.xPercent + "%," + R.yPercent + "%) matrix3d(" : "matrix3d(", S += (0 | e * v) / v + k + (0 | n * v) / v + k + (0 | l * v) / v, S += k + (0 | f * v) / v + k + (0 | i * v) / v + k + (0 | a * v) / v, S += k + (0 | _ * v) / v + k + (0 | m * v) / v + k + (0 | s * v) / v, S += k + (0 | o * v) / v + k + (0 | u * v) / v + k + (0 | d * v) / v, S += k + r + k + h + k + p + k + (N ? 1 + -p / N : 1) + ")", A[xe] = S },
                    Ee = U.set2DTransformRatio = function(t) { var e, i, s, r, n, a, o, h, l, _, u, p = this.data,
                            c = this.t,
                            f = c.style,
                            m = p.x,
                            d = p.y; return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && Te || !Se ? (r = p.scaleX, n = p.scaleY, p.rotation || p.skewX || p.svg ? (e = p.rotation * z, i = e - p.skewX * z, s = 1e5, a = Math.cos(e) * r, o = Math.sin(e) * r, h = Math.sin(i) * -n, l = Math.cos(i) * n, p.svg && (m += p.xOrigin - (p.xOrigin * a + p.yOrigin * h), d += p.yOrigin - (p.xOrigin * o + p.yOrigin * l), u = 1e-6, u > m && m > -u && (m = 0), u > d && d > -u && (d = 0)), _ = (0 | a * s) / s + "," + (0 | o * s) / s + "," + (0 | h * s) / s + "," + (0 | l * s) / s + "," + m + "," + d + ")", p.svg && Te ? c.setAttribute("transform", "matrix(" + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + n + "," + m + "," + d + ")", void 0) : (this.setRatio = Ie, Ie.call(this, t), void 0) };
                l = ke.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", { parser: function(t, e, i, s, n, o, h) { if (s._lastParsedTransform === h) return n;
                        s._lastParsedTransform = h; var l, _, u, p, c, f, m, d = s._transform = Me(t, r, !0, h.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = we.length,
                            T = h,
                            w = {}; if ("string" == typeof T.transform && xe) u = L.style, u[xe] = T.transform, u.display = "block", u.position = "absolute", F.body.appendChild(L), l = Me(L, null, !1), F.body.removeChild(L);
                        else if ("object" == typeof T) { if (l = { scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX), scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY), scaleZ: ne(T.scaleZ, d.scaleZ), x: ne(T.x, d.x), y: ne(T.y, d.y), z: ne(T.z, d.z), xPercent: ne(T.xPercent, d.xPercent), yPercent: ne(T.yPercent, d.yPercent), perspective: ne(T.transformPerspective, d.perspective) }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) T[u] = m[u];
                                else T.rotation = m;
                                "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ne(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ne(T.y, d.yPercent)), l.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), Se && (l.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _) } for (Se && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1); --y > -1;) i = we[y], p = l[i] - d[i], (p > v || -v > p || null != T[i] || null != E[i]) && (f = !0, n = new fe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n)); return p = T.transformOrigin, p && d.svg && (De(t, p, l), n = new fe(d, "xOrigin", d.xOrigin, l.xOrigin - d.xOrigin, n, -1, "transformOrigin"), n.b = d.xOrigin, n.e = n.xs0 = l.xOrigin, n = new fe(d, "yOrigin", d.yOrigin, l.yOrigin - d.yOrigin, n, -1, "transformOrigin"), n.b = d.yOrigin, n.e = n.xs0 = l.yOrigin, p = "0px 0px"), (p || Se && c && d.zOrigin) && (xe ? (f = !0, i = Pe, p = (p || Q(t, i, r, !1, "50% 50%")) + "", n = new fe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new fe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)), f && (s._transformType = d.svg && Te || !c && 3 !== this._transformType ? 2 : 3), n }, prefix: !0 }), ve("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), ve("borderRadius", { defaultValue: "0px", parser: function(t, e, i, n, a) { e = this.format(e); var o, h, l, _, u, p, c, f, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style; for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], c = parseFloat(u), v = u.substr((c + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", c, v), w = $(t, "borderTop", c, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)), a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a); return a }, prefix: !0, formatter: ue("0px 0px 0px 0px", !1, !0) }), ve("backgroundPosition", { defaultValue: "0 0", parser: function(t, e, i, s, n, a) { var o, h, l, _, u, p, c = "background-position",
                            f = r || Z(t, null),
                            d = this.format((f ? m ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e); if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) { for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ") } return this.parseComplex(t.style, d, g, n, a) }, formatter: se }), ve("backgroundSize", { defaultValue: "0 0", formatter: se }), ve("perspective", { defaultValue: "0px", prefix: !0 }), ve("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), ve("transformStyle", { prefix: !0 }), ve("backfaceVisibility", { prefix: !0 }), ve("userSelect", { prefix: !0 }), ve("margin", { parser: pe("marginTop,marginRight,marginBottom,marginLeft") }), ve("padding", { parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft") }), ve("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, s, n, a) { var o, h, l; return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a) } }), ve("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), ve("autoRound,strictUnits", { parser: function(t, e, i, s, r) { return r } }), ve("border", { defaultValue: "0px solid #000", parser: function(t, e, i, s, n, a) { return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a) }, color: !0, formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0] } }), ve("borderWidth", { parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), ve("float,cssFloat,styleFloat", { parser: function(t, e, i, s, r) { var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat"; return new fe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e) } });
                var Fe = function(t) { var e, i = this.t,
                        s = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r)) };
                ve("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(t, e, i, s, n, a) { var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i; return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), B ? n = new fe(h, "opacity", o, e - o, n) : (n = new fe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Fe), l && (n = new fe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n } });
                var Ne = function(t, e) { e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                    Le = function(t) { if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e); for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ne(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) };
                ve("className", { parser: function(t, e, s, n, a, o, h) { var l, _, u, p, c, f = t.getAttribute("class") || "",
                            m = t.style.cssText; if (a = n._classNamePT = new fe(t, s, 0, 0, a, 2), a.setRatio = Le, a.pr = -11, i = !0, a.b = f, _ = K(t, r), u = t._gsClassPT) { for (p = {}, c = u.data; c;) p[c.p] = 1, c = c._next;
                            u.setRatio(1) } return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), l = J(t, _, K(t), h, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a } });
                var Xe = function(t) { if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var e, i, s, r, n = this.t.style,
                            a = h.transform.parse; if ("all" === this.e) n.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) i = e[s], h[i] && (h[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pe : h[i].p), Ne(n, i);
                        r && (Ne(n, xe), this.t._gsTransform && delete this.t._gsTransform) } };
                for (ve("clearProps", { parser: function(t, e, s, r, n) { return n = new fe(t, s, 0, 0, n, 2), n.setRatio = Xe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n } }), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--;) ye(l[de]);
                l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
                    var h, l, c, m, d, g, v, y, T, w = t.style;
                    if (u && "" === w.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, h = K(t, r), w.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !B && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = l = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, xe ? p && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = l; c && c._next;) c = c._next;
                        y = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && Se ? Ie : xe ? Ee : ze, y.data = this._transform || Me(t, r, !0), n.pop()
                    }
                    if (i) { for (; l;) { for (g = l._next, c = m; c && c.pr > l.pr;) c = c._next;
                            (l._prev = c ? c._prev : d) ? l._prev._next = l: m = l, (l._next = c) ? c._prev = l : d = l, l = g }
                        this._firstPT = m }
                    return !0
                }, l.parse = function(t, e, i, n) { var a, o, l, u, p, c, f, m, d, g, v = t.style; for (a in e) c = e[a], o = h[a], o ? i = o.parse(t, c, a, this, i, n, e) : (p = Q(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(c) ? (d || (c = le(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = me(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (l = parseFloat(p), f = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (l = ie(t, a, r), f = "px") : "left" === a || "top" === a ? (l = H(t, a, r), f = "px") : (l = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(T, "")) : (u = parseFloat(c), m = d ? c.substr((u + "").length) || "" : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + l : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, f), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new fe(v, a, u || l || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new fe(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = me(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n); return i }, l.setRatio = function(t) { var e, i, s, r = this._firstPT,
                        n = 1e-6; if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) { if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else { for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next }, l._enableTransforms = function(t) { this._transform = this._transform || Me(this._target, r, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3 };
                var Ue = function() { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                l._addLazySet = function(t, e, i) { var s = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Ue, s.data = this }, l._linkCSSP = function(t, e, i, s) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, l._kill = function(e) { var i, s, r, n = e; if (e.autoAlpha || e.alpha) { n = {}; for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1) } return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n) };
                var Ye = function(t, e, i) { var s, r, n, a; if (t.slice)
                        for (r = t.length; --r > -1;) Ye(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ye(n, e, i) };
                return a.cascadeTo = function(t, i, s) { var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps; for (t = o._targets || o.target, Ye(t, l, u), o.render(i, !0), Ye(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = J(u[r], l[r], _[r]), n.firstMPT) { n = n.difs; for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n)) }
                    return h }, t.activate([a]), a
            }, !0),
            function() { var t = _gsScope._gsDefine.plugin({ propName: "roundProps", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }),
                    e = t.prototype;
                e._onInitAllProps = function() { for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1; for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i; return !1 }, e._add = function(t, e, i, s) { this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e) } }(), _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.3.3", init: function(t, e) { var i, s, r; if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {}; for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i); return !0 }, set: function(t) { this._super.setRatio.call(this, t); for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + "") } }), _gsScope._gsDefine.plugin({ propName: "directionalRotation", version: "0.2.1", API: 2, init: function(t, e) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6; for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i))); return !0 }, set: function(t) { var e; if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next } })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) { var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) { var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t; return r.constructor = s, r.getRatio = i, s },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) { var r = h("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new s }, !0); return _(r, t), r },
                    p = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                    c = function(e, i) { var s = h("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                            r = s.prototype = new t; return r.constructor = s, r.getRatio = i, r.config = function(t) { return new s(t) }, s },
                    f = u("Back", c("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), c("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), c("BackInOut", function(t) { return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                    m = h("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0 }, !0),
                    d = m.prototype = new t; return d.constructor = m, d.getRatio = function(t) { var e = t + (.5 - t) * this._p; return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) { return new m(t, e, i) }, e = h("easing.SteppedEase", function(t) { t = t || 1, this._p1 = 1 / t, this._p2 = t + 1 }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1 }, d.config = e.config = function(t) { return new e(t) }, i = h("easing.RoughEase", function(e) { e = e || {}; for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = f ? Math.random() : 1 / u * c, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = { x: i, y: s }; for (l.sort(function(t, e) { return t.x - e.x }), o = new p(1, 1, null), c = u; --c > -1;) a = l[c], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next) }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) { var e = this._prev; if (t > e.t) { for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev } else
                        for (; e.prev && e.t >= t;) e = e.prev; return this._prev = e, e.v + (t - e.t) / e.gap * e.c }, d.config = function(t) { return new i(t) }, i.ease = new i, u("Bounce", l("BounceOut", function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), l("BounceIn", function(t) { return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), l("BounceInOut", function(t) { var e = .5 > t; return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), u("Circ", l("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), l("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), l("CircInOut", function(t) { return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), s = function(e, i, s) { var r = h("easing." + e, function(t, e) { this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0) }, !0),
                        n = r.prototype = new t; return n.constructor = r, n.getRatio = i, n.config = function(t, e) { return new r(t, e) }, r }, u("Elastic", s("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1 }, .3), s("ElasticIn", function(t) { return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2)) }, .3), s("ElasticInOut", function(t) { return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1 }, .45)), u("Expo", l("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), l("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), l("ExpoInOut", function(t) { return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), u("Sine", l("SineOut", function(t) { return Math.sin(t * o) }), l("SineIn", function(t) { return -Math.cos(t * o) + 1 }), l("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), h("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, h = function(t) { var e, s = t.split("."),
                        r = i; for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {}; return r },
                l = h("com.greensock"),
                _ = 1e-10,
                u = function(t) { var e, i = [],
                        s = t.length; for (e = 0; e !== s; i.push(t[e++])); return i },
                p = function() {},
                c = function() { var t = Object.prototype.toString,
                        e = t.call([]); return function(i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) } }(),
                f = {},
                m = function(s, r, n, a) { this.sc = f[s] ? f[s].sc : [], f[s] = this, this.gsClass = null, this.func = n; var o = [];
                    this.check = function(l) { for (var _, u, p, c, d = r.length, g = d; --d > -1;)(_ = f[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this); if (0 === g && n)
                            for (u = ("com.greensock." + s).split("."), p = u.pop(), c = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() { return c }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)), d = 0; this.sc.length > d; d++) this.sc[d].check() }, this.check(!0) },
                d = t._gsDefine = function(t, e, i, s) { return new m(t, e, i, s) },
                g = l._class = function(t, e, i) { return e = e || function() {}, d(t, [], function() { return e }, i), e };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) { this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v }, !0),
                w = T.map = {},
                x = T.register = function(t, e, i, s) { for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) { if (this._func) return this._params[0] = t, this._func.apply(null, this._params); var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t); return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2 }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), x(new T(null, null, 3, r), n, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) { r = r || 0; var n, h, l = this._listeners[t],
                    _ = 0; for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
                l.splice(_, 0, { c: e, s: i, up: s, pr: r }), this !== a || o || a.wake() }, n.removeEventListener = function(t, e) { var i, s = this._listeners[t]; if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0 }, n.dispatchEvent = function(t) { var e, i, s, r = this._listeners[t]; if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i)) };
            var P = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                k = Date.now || function() { return (new Date).getTime() },
                R = k();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) { var i, s, r, n, h, l = this,
                    u = k(),
                    c = e !== !1 && P,
                    f = 500,
                    m = 33,
                    d = "tick",
                    g = function(t) { var e, a, o = k() - R;
                        o > f && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d) };
                b.call(l), l.time = l.frame = 0, l.tick = function() { g(!0) }, l.lagSmoothing = function(t, e) { f = t || 1 / _, m = Math.min(e, f, 0) }, l.sleep = function() { null != r && (c && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1)) }, l.wake = function() { null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5), s = 0 === i ? p : c && P ? P : function(t) { return setTimeout(t, 0 | 1e3 * (h - l.time) + 1) }, l === a && (o = !0), g(2) }, l.fps = function(t) { return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i }, l.useRAF = function(t) { return arguments.length ? (l.sleep(), c = t, l.fps(i), void 0) : c }, l.fps(t), setTimeout(function() { c && (!r || 5 > l.frame) && l.useRAF(!1) }, 1500) }), n = l.Ticker.prototype = new l.events.EventDispatcher, n.constructor = l.Ticker;
            var A = g("core.Animation", function(t, e) { if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, j) { o || a.wake(); var i = this.vars.useFrames ? B : j;
                    i.add(this, i._time), this.vars.paused && this.paused(!0) } });
            a = A.ticker = new l.Ticker, n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var C = function() { o && k() - R > 2e3 && a.wake(), setTimeout(C, 2e3) };
            C(), n.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, n.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, n.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, n.seek = function(t, e) { return this.totalTime(Number(t), e !== !1) }, n.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0) }, n.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, n.render = function() {}, n.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, n.isActive = function() { var t, e = this._timeline,
                    i = this._startTime; return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t }, n._enabled = function(t, e) { return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, n._kill = function() { return this._enabled(!1, !1) }, n.kill = function(t, e) { return this._kill(t, e), this }, n._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, n._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, n.eventCallback = function(t, e, i, s) { if ("on" === (t || "").substr(0, 2)) { var r = this.vars; if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e) } return this }, n.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, n.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, n.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, n.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, n.totalTime = function(t, e, i) { if (o || a.wake(), !arguments.length) return this._totalTime; if (this._timeline) { if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration(); var s = this._totalDuration,
                            r = this._timeline; if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && q()) } return this }, n.progress = n.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration() }, n.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, n.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, n.timeScale = function(t) { if (!arguments.length) return this._timeScale; if (t = t || _, this._timeline && this._timeline.smoothChildTiming) { var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t } return this._timeScale = t, this._uncache(!1) }, n.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, n.paused = function(t) { if (!arguments.length) return this._paused; if (t != this._paused && this._timeline) { o || t || a.wake(); var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;!t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0) } return this._gc && !t && this._enabled(!0, !1), this };
            var O = g("core.SimpleTimeline", function(t) { A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            n = O.prototype = new A, n.constructor = O, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) { var i, s; if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev; return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this }, n._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, n.render = function(t, e, i) { var s, r = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s }, n.rawTime = function() { return o || a.wake(), this._totalTime };
            var D = g("TweenLite", function(e, i, s) { if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e; var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite; if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = V(n, this, !1), 1 === h && this._siblings[r].length > 1 && W(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === h && this._siblings.length > 1 && W(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay)) }, !0),
                M = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
                z = function(t, e) { var i, s = {}; for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s };
            n = D.prototype = new A, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.15.0", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = !0, D.lagSmoothing = function(t, e) { a.lagSmoothing(t, e) }, D.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
            var I = [],
                E = {},
                F = D._internals = { isArray: c, isSelector: M, lazyTweens: I },
                N = D._plugins = {},
                L = F.tweenLookup = {},
                X = 0,
                U = F.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1 },
                Y = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
                B = A._rootFramesTimeline = new O,
                j = A._rootTimeline = new O,
                q = F.lazyRender = function() { var t, e = I.length; for (E = {}; --e > -1;) t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0 };
            j._startTime = a.time, B._startTime = a.frame, j._active = B._active = !0, setTimeout(q, 1), A._updateRoot = D.render = function() { var t, e, i; if (I.length && q(), j.render((a.time - j._startTime) * j._timeScale, !1, !1), B.render((a.frame - B._startTime) * B._timeScale, !1, !1), I.length && q(), !(a.frame % 120)) { for (i in L) { for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i] } if (i = j._first, (!i || i._paused) && D.autoSleep && !B._first && 1 === a._listeners.tick.length) { for (; i && i._paused;) i = i._next;
                        i || a.sleep() } } }, a.addEventListener("tick", A._updateRoot);
            var V = function(t, e, i) { var s, r, n = t._gsTweenID; if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = { target: t, tweens: [] }), e && (s = L[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1); return L[n].tweens },
                G = function(t, e, i, s) { var r, n, a = t.vars.onOverwrite; return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1 },
                W = function(t, e, i, s, r) { var n, a, o, h; if (1 === s || s >= 4) { for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || G(o, e) && o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break; return a } var l, u = e._startTime + _,
                        p = [],
                        c = 0,
                        f = 0 === e._duration; for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Z(e, 0, f), 0 === Z(o, l, f) && (p[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (p[c++] = o))); for (n = c; --n > -1;)
                        if (o = p[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) { if (2 !== s && !G(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0) }
                    return a },
                Z = function(t, e, i) { for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) { if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline } return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _ };
            n._init = function() { var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!n.immediateRender,
                    l = n.ease; if (n.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}; for (s in n.startAt) r[s] = n.startAt[s]; if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else { 0 !== this._time && (h = !1), i = {}; for (s in n) U[s] && "autoCSS" !== s || (i[s] = n[s]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a); if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0 }, n._initProps = function(e, i, s, r) { var n, a, o, h, l, _; if (null == e) return !1;
                E[e._gsTweenID] && q(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && z(this.vars, e); for (n in this.vars) { if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (N[n] && (h = new N[n])._onInitTween(e, this.vars[n], this)) { for (this._firstPT = l = { _next: this._firstPT, t: h, p: "setRatio", s: 0, c: 1, f: !0, n: n, pg: !0, pr: h._priority }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0) } else this._firstPT = i[n] = l = { _next: this._firstPT, t: e, p: n, f: "function" == typeof e[n], n: n, pg: !1, pr: 0 }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l) } return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && W(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (E[e._gsTweenID] = !0), o) }, n.render = function(t, e, i) { var s, r, n, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime; if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0 && l !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) { var u = t / h,
                        p = this._easeType,
                        c = this._easePower;
                    (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2 } else this.ratio = this._ease.getRatio(t / h); if (this._time !== o || i) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0)) } }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var s, r, n, a, o, h, l, _, u;
                if ((c(e) || M(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s]) && (h = !0);
                else {
                    if (this._targets) { for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) { o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all"; break } } else { if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" }
                    if (o) {
                        if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (n in l) o[n] && (u || (u = []), u.push(n));
                            if (!G(this, i, e, u)) return !1
                        }
                        for (n in l)(a = o[n]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return h
            }, n.invalidate = function() { return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this }, n._enabled = function(t, e) { if (o || a.wake(), t && this._gc) { var i, s = this._targets; if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = V(s[i], this, !0);
                    else this._siblings = V(this.target, this, !0) } return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1 }, D.to = function(t, e, i) { return new D(t, e, i) }, D.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i) }, D.fromTo = function(t, e, i, s) { return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s) }, D.delayedCall = function(t, e, i, s, r) { return new D(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 }) }, D.set = function(t, e) { return new D(t, 0, e) }, D.getTweensOf = function(t, e) { if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t; var i, s, r, n; if ((c(t) || M(t)) && "number" != typeof t[0]) { for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e)); for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1) } else
                    for (s = V(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1); return s }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t) };
            var Q = g("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype }, !0);
            if (n = Q.prototype, Q.version = "1.10.1", Q.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) { var a, o; return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: r || e, r: n }, o._next && (o._next._prev = o), o) : void 0 }, n.setRatio = function(t) { for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next }, n._kill = function(t) { var e, i = this._overwriteProps,
                        s = this._firstPT; if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1); for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next; return !1 }, n._roundProps = function(t, e) { for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next }, D._onPluginEvent = function(t, e) { var i, s, r, n, a, o = e._firstPT; if ("_onInitAllProps" === t) { for (; o;) { for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a }
                        o = e._firstPT = r } for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next; return i }, Q.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === Q.API && (N[(new t[e])._propName] = t[e]); return !0 }, d.plugin = function(t) { if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition."; var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { Q.call(this, i, s), this._overwriteProps = r || [] }, t.global === !0),
                        o = a.prototype = new Q(i);
                    o.constructor = a, a.API = t.API; for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]); return a.version = t.version, Q.activate([a]), a }, s = t._gsQueue) { for (r = 0; s.length > r; r++) s[r](); for (n in f) f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n) }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

$(function() {
    jQuery.easing["jswing"] = jQuery.easing["swing"];
    jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(x, t, b, c, d) { return jQuery.easing[jQuery.easing.def](x, t, b, c, d) }, easeInQuad: function(x, t, b, c, d) { return c * (t /= d) * t + b }, easeOutQuad: function(x, t, b, c, d) { return -c * (t /= d) * (t - 2) + b }, easeInOutQuad: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t + b; return -c / 2 * (--t * (t - 2) - 1) + b }, easeInCubic: function(x, t, b, c, d) { return c * (t /= d) * t * t + b }, easeOutCubic: function(x, t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b }, easeInOutCubic: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t + b; return c / 2 * ((t -= 2) * t * t + 2) + b }, easeInQuart: function(x, t, b, c, d) { return c * (t /= d) * t * t * t + b }, easeOutQuart: function(x, t, b, c, d) { return -c * ((t = t / d - 1) * t * t * t - 1) + b }, easeInOutQuart: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b; return -c / 2 * ((t -= 2) * t * t * t - 2) + b }, easeInQuint: function(x, t, b, c, d) { return c * (t /= d) * t * t * t * t + b }, easeOutQuint: function(x, t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b }, easeInOutQuint: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b; return c / 2 * ((t -= 2) * t * t * t * t + 2) + b }, easeInSine: function(x, t, b, c, d) { return -c * Math.cos(t / d * (Math.PI / 2)) + c + b }, easeOutSine: function(x, t, b, c, d) { return c * Math.sin(t / d * (Math.PI / 2)) + b }, easeInOutSine: function(x, t, b, c, d) { return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b }, easeInExpo: function(x, t, b, c, d) { return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b }, easeOutExpo: function(x, t, b, c, d) { return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b }, easeInOutExpo: function(x, t, b, c, d) { if (t == 0) return b; if (t == d) return b + c; if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b; return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b }, easeInCirc: function(x, t, b, c, d) { return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b }, easeOutCirc: function(x, t, b, c, d) { return c * Math.sqrt(1 - (t = t / d - 1) * t) + b }, easeInOutCirc: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b; return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b }, easeInElastic: function(x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p)) + b }, easeOutElastic: function(x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * 2 * Math.PI / p) + c + b }, easeInOutElastic: function(x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * .3 * 1.5; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) + b; return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * 2 * Math.PI / p) * .5 + c + b }, easeInBack: function(x, t, b, c, d, s) { if (s == undefined) s = 1.70158; return c * (t /= d) * t * ((s + 1) * t - s) + b }, easeOutBack: function(x, t, b, c, d, s) { if (s == undefined) s = 1.70158; return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b }, easeInOutBack: function(x, t, b, c, d, s) { if (s == undefined) s = 1.70158; if ((t /= d / 2) < 1) return c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b; return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b }, easeInBounce: function(x, t, b, c, d) { return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b }, easeOutBounce: function(x, t, b, c, d) { if ((t /= d) < 1 / 2.75) { return c * 7.5625 * t * t + b } else if (t < 2 / 2.75) { return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b } else if (t < 2.5 / 2.75) { return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b } else { return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b } }, easeInOutBounce: function(x, t, b, c, d) { if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b; return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b } });
});
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
! function(t) { var e = {},
        s = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: "Next", prevText: "Prev", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", autoHover: !1, autoDelay: 0, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, onSliderLoad: function() {}, onSlideBefore: function() {}, onSlideAfter: function() {}, onSlideNext: function() {}, onSlidePrev: function() {} };
    t.fn.bxSlider = function(n) { if (0 == this.length) return this; if (this.length > 1) return this.each(function() { t(this).bxSlider(n) }), this; var o = {},
            r = this;
        e.el = this; var a = t(window).width(),
            l = t(window).height(),
            d = function() { o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = { index: o.settings.startSlide }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() { var t = document.createElement("div"),
                        e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]; for (var i in e)
                        if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                    return !1 }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() { t(this).data("origStyle", t(this).attr("style")) }), c() },
            c = function() { r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({ width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto", position: "relative" }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), o.viewport.parent().css({ maxWidth: v() }), o.settings.pager || o.viewport.parent().css({ margin: "0 auto 0px" }), o.children.css({ "float": "horizontal" == o.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({ position: "absolute", zIndex: 0, display: "none" }), o.children.eq(o.settings.startSlide).css({ zIndex: 50, display: "block" })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids(); var e = o.children.eq(o.settings.startSlide); "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h) },
            g = function(e, i) { var s = e.find("img, iframe").length; if (0 == s) return i(), void 0; var n = 0;
                e.find("img, iframe").each(function() { t(this).one("load", function() {++n == s && i() }).each(function() { this.complete && t(this).load() }) }) },
            h = function() { if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) { var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                        i = o.children.slice(0, e).clone().addClass("bx-clone"),
                        s = o.children.slice(-e).clone().addClass("bx-clone");
                    r.append(i).prepend(s) }
                o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(p()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", B), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && I(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O() },
            p = function() { var e = 0,
                    s = t(); if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                    if (o.carousel) { var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m(); for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i)) } else s = o.children.eq(o.active.index);
                else s = o.children; return "vertical" == o.settings.mode ? (s.each(function() { e += t(this).outerHeight() }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function() { return t(this).outerHeight(!1) }).get()), e },
            v = function() { var t = "100%"; return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t },
            u = function() { var t = o.settings.slideWidth,
                    e = o.viewport.width(); return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t },
            f = function() { var t = 1; if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                    if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
                    else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
                else { var e = o.children.first().width();
                    t = Math.floor(o.viewport.width() / e) } else "vertical" == o.settings.mode && (t = o.settings.minSlides); return t },
            x = function() { var t = 0; if (o.settings.moveSlides > 0)
                    if (o.settings.infiniteLoop) t = o.children.length / m();
                    else
                        for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
                else t = Math.ceil(o.children.length / f()); return t },
            m = function() { return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f() },
            S = function() { if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) { if ("horizontal" == o.settings.mode) { var t = o.children.last(),
                            e = t.position();
                        b(-(e.left - (o.viewport.width() - t.width())), "reset", 0) } else if ("vertical" == o.settings.mode) { var i = o.children.length - o.settings.minSlides,
                            e = o.children.eq(i).position();
                        b(-e.top, "reset", 0) } } else { var e = o.children.eq(o.active.index * m()).position();
                    o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0)) } },
            b = function(t, e, i, s) { if (o.usingCSS) { var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() { r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D() })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() { r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N() })) } else { var a = {};
                    a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function() { D() }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() { b(s.resetValue, "reset", 0), N() }) } },
            w = function() { for (var e = "", i = x(), s = 0; i > s; s++) { var n = "";
                    o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>" }
                o.pagerEl.html(e) },
            T = function() { o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.delegate("a", "click", q) },
            C = function() { o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl)) },
            E = function() { o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", k), o.controls.autoEl.delegate(".bx-stop", "click", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start") },
            P = function() { o.children.each(function() { var e = t(this).find("img:first").attr("title");
                    void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>") }) },
            y = function(t) { o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault() },
            z = function(t) { o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault() },
            k = function(t) { r.startAuto(), t.preventDefault() },
            M = function(t) { r.stopAuto(), t.preventDefault() },
            q = function(e) { o.settings.auto && r.stopAuto(); var i = t(e.currentTarget),
                    s = parseInt(i.attr("data-slide-index"));
                s != o.active.index && r.goToSlide(s), e.preventDefault() },
            I = function(e) { var i = o.children.length; return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function(i, s) { t(s).find("a").eq(e).addClass("active") }), void 0) },
            D = function() { if (o.settings.infiniteLoop) { var t = "";
                    0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0)) }
                o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index) },
            A = function(t) { o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active")) },
            W = function() { 1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled"))) },
            H = function() { o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() { o.interval && (r.stopAuto(!0), o.autoPaused = !0) }, function() { o.autoPaused && (r.startAuto(!0), o.autoPaused = null) }) },
            L = function() { var e = 0; if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
                else { r.prepend(o.children.clone().addClass("bx-clone")); var i = o.children.first().position();
                    e = "horizontal" == o.settings.mode ? -i.left : -i.top }
                b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() { r.stop() }, function() { var e = 0;
                    o.children.each(function() { e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0) }); var i = o.settings.speed / e,
                        s = "horizontal" == o.settings.mode ? "left" : "top",
                        n = i * (e - Math.abs(parseInt(r.css(s))));
                    N(n) }), N() },
            N = function(t) { speed = t ? t : o.settings.speed; var e = { left: 0, top: 0 },
                    i = { left: 0, top: 0 }; "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position(); var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
                    n = "horizontal" == o.settings.mode ? -i.left : -i.top,
                    a = { resetValue: n };
                b(s, "ticker", speed, a) },
            O = function() { o.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, o.viewport.bind("touchstart", X) },
            X = function(t) { if (o.working) t.preventDefault();
                else { o.touch.originalPos = r.position(); var e = t.originalEvent;
                    o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V) } },
            Y = function(t) { var e = t.originalEvent,
                    i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
                    s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y); if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) { var n = 0; if ("horizontal" == o.settings.mode) { var r = e.changedTouches[0].pageX - o.touch.start.x;
                        n = o.touch.originalPos.left + r } else { var r = e.changedTouches[0].pageY - o.touch.start.y;
                        n = o.touch.originalPos.top + r }
                    b(n, "reset", 0) } },
            V = function(t) { o.viewport.unbind("touchmove", Y); var e = t.originalEvent,
                    i = 0; if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) { var s = Math.abs(o.touch.start.x - o.touch.end.x);
                    s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) } else { var s = 0; "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200) }
                o.viewport.unbind("touchend", V) },
            B = function() { var e = t(window).width(),
                    i = t(window).height();
                (a != e || l != i) && (a = e, l = i, r.redrawSlider()) }; return r.goToSlide = function(e, i) { if (!o.working && o.active.index != e)
                if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && I(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({ height: p() }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({ zIndex: 0 }), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function() { t(this).css("zIndex", 50), D() });
                else { o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({ height: p() }, o.settings.adaptiveHeightSpeed); var s = 0,
                        n = { left: 0, top: 0 }; if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                        if ("horizontal" == o.settings.mode) { var a = o.children.eq(o.children.length - 1);
                            n = a.position(), s = o.viewport.width() - a.outerWidth() } else { var l = o.children.length - o.settings.minSlides;
                            n = o.children.eq(l).position() }
                    else if (o.carousel && o.active.last && "prev" == i) { var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
                            a = r.children(".bx-clone").eq(d);
                        n = a.position() } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                    else if (e >= 0) { var c = e * m();
                        n = o.children.eq(c).position() } if ("undefined" != typeof n) { var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                        b(g, "slide", o.settings.speed) } } }, r.goToNextSlide = function() { if (o.settings.infiniteLoop || !o.active.last) { var t = parseInt(o.active.index) + 1;
                r.goToSlide(t, "next") } }, r.goToPrevSlide = function() { if (o.settings.infiniteLoop || 0 != o.active.index) { var t = parseInt(o.active.index) - 1;
                r.goToSlide(t, "prev") } }, r.startAuto = function(t) { o.interval || (o.interval = setInterval(function() { "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide() }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop")) }, r.stopAuto = function(t) { o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start")) }, r.getCurrentSlide = function() { return o.active.index }, r.getSlideCount = function() { return o.children.length }, r.redrawSlider = function() { o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", p()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), I(o.active.index)) }, r.destroySlider = function() { o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function() { void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style") }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", B)) }, r.reloadSlider = function(t) { void 0 != t && (n = t), r.destroySlider(), d() }, d(), this } }(jQuery);
/**
 * jQuery.rollover
 *
 * @version    1.0.4
 * @author     Hiroshi Hoaki <rewish.org@gmail.com>
 * @copyright  2010-2011 Hiroshi Hoaki
 * @license    http://rewish.org/license/mit The MIT License
 * @link       http://rewish.org/javascript/jquery_rollover_plugin
 *
 */

jQuery.fn.rollover = function(suffix) {
    suffix = suffix || '_on';
    var check = new RegExp(suffix + '\\.\\w+$');
    return this.each(function() {
        var img = jQuery(this);
        var src = img.attr('src');
        if (check.test(src)) return;
        var _on = src.replace(/\.\w+$/, suffix + '$&');
        jQuery('<img>').attr('src', _on);
        img.hover(
            function() { img.attr('src', _on); },
            function() { img.attr('src', src); }
        );
    });
};
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function(key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function(key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

/*! Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
    var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var lowestDelta, lowestDeltaXY;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            absDeltaXY = 0,
            fn;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) { delta = orgEvent.wheelDelta; }
        if (orgEvent.detail) { delta = orgEvent.detail * -1; }

        // New school wheel delta (wheel event)
        if (orgEvent.deltaY) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if (orgEvent.deltaX) {
            deltaX = orgEvent.deltaX;
            delta = deltaX * -1;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) { deltaY = orgEvent.wheelDeltaY; }
        if (orgEvent.wheelDeltaX !== undefined) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Look for lowest delta to normalize the delta values
        absDelta = Math.abs(delta);
        if (!lowestDelta || absDelta < lowestDelta) { lowestDelta = absDelta; }
        absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) { lowestDeltaXY = absDeltaXY; }

        // Get a whole value for the deltas
        fn = delta > 0 ? 'floor' : 'ceil';
        delta = Math[fn](delta / lowestDelta);
        deltaX = Math[fn](deltaX / lowestDeltaXY);
        deltaY = Math[fn](deltaY / lowestDeltaXY);

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

}));

(function() {
    "use strict";

    var desvg = function(selector, removeInlineCss) {
        removeInlineCss = removeInlineCss || false;

        var images,
            imagesLength,
            sortImages = {},

            // load svg file
            loadSvg = function(imgURL, replaceImages) {
                // set up the AJAX request
                var xhr = new XMLHttpRequest();
                xhr.open('GET', imgURL, true);

                xhr.onload = function() {
                    var xml,
                        svg,
                        paths,
                        replaceImagesLength;

                    // get the response in XML format
                    xml = xhr.responseXML;
                    replaceImagesLength = replaceImages.length;

                    // bail if no XML
                    if (!xml) {
                        return;
                    }

                    // this will be the <svg />
                    svg = xml.documentElement;

                    // get all the SVG paths
                    paths = svg.querySelectorAll('path');

                    if (removeInlineCss) {
                        // if `removeInlineCss` is true then remove the style attributes from the SVG paths
                        for (var i = 0; i < paths.length; i++) {
                            paths[i].removeAttribute('style');
                        }
                    }
                    svg.removeAttribute('xmlns:a');

                    while (replaceImagesLength--) {
                        replaceImgWithSvg(replaceImages[replaceImagesLength], svg.cloneNode(true));
                    }
                };

                xhr.send();
            },

            // replace the original <img /> with the new <svg />
            replaceImgWithSvg = function(img, svg) {
                var imgID = img.id,
                    imgClasses = img.getAttribute('class');

                if (imgID) {
                    // re-assign the ID attribute from the <img />
                    svg.id = imgID;
                }

                if (imgClasses) {
                    // re-assign the class attribute from the <img />
                    svg.setAttribute('class', imgClasses + ' replaced-svg');
                }

                img.parentNode.replaceChild(svg, img);
            };



        // grab all the elements from the document matching the passed in selector
        images = document.querySelectorAll(selector);
        imagesLength = images.length;

        // sort images array by image url
        while (imagesLength--) {
            var _img = images[imagesLength],
                _imgURL;

            if (_img.getAttribute('data-src')) {
                _imgURL = _img.getAttribute('data-src')
            } else {
                _imgURL = _img.getAttribute('src')
            }

            if (sortImages[_imgURL]) {
                sortImages[_imgURL].push(_img);
            } else {
                sortImages[_imgURL] = [_img];
            }
        }

        // loops over the matched urls
        for (var key in sortImages) {
            if (sortImages.hasOwnProperty(key)) {
                loadSvg(key, sortImages[key]);
            }
        }

    };

    window.deSVG = desvg;
})();
/*! Lazy Load 2.0.0-beta.2 - MIT license - Copyright 2007-2017 Mika Tuupola */
! function(t, e) { "object" == typeof exports ? module.exports = e(t) : "function" == typeof define && define.amd ? define([], e(t)) : t.LazyLoad = e(t) }("undefined" != typeof global ? global : this.window || this.global, function(t) { "use strict";

    function e(t, e) { this.settings = r(s, e || {}), this.images = t || document.querySelectorAll(this.settings.selector), this.observer = null, this.init() } const s = { src: "data-src", srcset: "data-srcset", selector: ".lazyload" },
        r = function() { let t = {},
                e = !1,
                s = 0,
                o = arguments.length; "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], s++); for (; s < o; s++) ! function(s) { for (let o in s) Object.prototype.hasOwnProperty.call(s, o) && (e && "[object Object]" === Object.prototype.toString.call(s[o]) ? t[o] = r(!0, t[o], s[o]) : t[o] = s[o]) }(arguments[s]); return t }; if (e.prototype = { init: function() { if (!t.IntersectionObserver) return void this.loadImages(); let e = this,
                    s = { root: null, rootMargin: "0px", threshold: [0] };
                this.observer = new IntersectionObserver(function(t) { t.forEach(function(t) { if (t.intersectionRatio > 0) { e.observer.unobserve(t.target); let s = t.target.getAttribute(e.settings.src),
                                r = t.target.getAttribute(e.settings.srcset); "img" === t.target.tagName.toLowerCase() ? (s && (t.target.src = s), r && (t.target.srcset = r)) : t.target.style.backgroundImage = "url(" + s + ")" } }) }, s), this.images.forEach(function(t) { e.observer.observe(t) }) }, loadAndDestroy: function() { this.settings && (this.loadImages(), this.destroy()) }, loadImages: function() { if (!this.settings) return; let t = this;
                this.images.forEach(function(e) { let s = e.getAttribute(t.settings.src),
                        r = e.getAttribute(t.settings.srcset); "img" === e.tagName.toLowerCase() ? (s && (e.src = s), r && (e.srcset = r)) : e.style.backgroundImage = "url(" + s + ")" }) }, destroy: function() { this.settings && (this.observer.disconnect(), this.settings = null) } }, t.lazyload = function(t, s) { return new e(t, s) }, t.jQuery) { const s = t.jQuery;
        s.fn.lazyload = function(t) { return t = t || {}, t.attribute = t.attribute || "data-src", new e(s.makeArray(this), t), this } } return e });

/* ================================================================ *
    ajaxzip3.js ---- AjaxZip3 郵便番号→住所変換ライブラリ

    Copyright (c) 2008-2015 Ninkigumi Co.,Ltd.
    http://ajaxzip3.github.io/

    Copyright (c) 2006-2007 Kawasaki Yusuke <u-suke [at] kawa.net>
    http://www.kawa.net/works/ajax/AjaxZip2/AjaxZip2.html

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
* ================================================================ */

AjaxZip3 = function() {};
AjaxZip3.VERSION = "0.51";
AjaxZip3.JSONDATA = "https://yubinbango.github.io/yubinbango-data/data";
AjaxZip3.CACHE = [];
AjaxZip3.prev = "";
AjaxZip3.nzip = "";
AjaxZip3.fzip1 = "";
AjaxZip3.fzip2 = "";
AjaxZip3.fpref = "";
AjaxZip3.addr = "";
AjaxZip3.fstrt = "";
AjaxZip3.farea = "";
AjaxZip3.ffocus = true;
AjaxZip3.onSuccess = null;
AjaxZip3.onFailure = null;
AjaxZip3.PREFMAP = [null, "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"];
AjaxZip3.zip2addr = function(h, g, k, b, l, a, m) { AjaxZip3.fzip1 = AjaxZip3.getElementByName(h);
    AjaxZip3.fzip2 = AjaxZip3.getElementByName(g, AjaxZip3.fzip1);
    AjaxZip3.fpref = AjaxZip3.getElementByName(k, AjaxZip3.fzip1);
    AjaxZip3.faddr = AjaxZip3.getElementByName(b, AjaxZip3.fzip1);
    AjaxZip3.fstrt = AjaxZip3.getElementByName(a, AjaxZip3.fzip1);
    AjaxZip3.farea = AjaxZip3.getElementByName(l, AjaxZip3.fzip1);
    AjaxZip3.ffocus = m === undefined ? true : m; if (!AjaxZip3.fzip1) { return } if (!AjaxZip3.fpref) { return } if (!AjaxZip3.faddr) { return } var c = AjaxZip3.fzip1.value; if (AjaxZip3.fzip2 && AjaxZip3.fzip2.value) { c += AjaxZip3.fzip2.value } if (!c) { return }
    AjaxZip3.nzip = ""; for (var f = 0; f < c.length; f++) { var d = c.charCodeAt(f); if (d < 48) { continue } if (d > 57) { continue }
        AjaxZip3.nzip += c.charAt(f) } if (AjaxZip3.nzip.length < 7) { return } var j = function() { var i = AjaxZip3.nzip + AjaxZip3.fzip1.name + AjaxZip3.fpref.name + AjaxZip3.faddr.name; if (AjaxZip3.fzip1.form) { i += AjaxZip3.fzip1.form.id + AjaxZip3.fzip1.form.name + AjaxZip3.fzip1.form.action } if (AjaxZip3.fzip2) { i += AjaxZip3.fzip2.name } if (AjaxZip3.fstrt) { i += AjaxZip3.fstrt.name } if (i == AjaxZip3.prev) { return }
        AjaxZip3.prev = i }; var n = AjaxZip3.nzip.substr(0, 3); var e = AjaxZip3.CACHE[n]; if (e) { return AjaxZip3.callback(e) }
    AjaxZip3.zipjsonpquery() };
AjaxZip3.callback = function(h) {
    function d() { if (typeof AjaxZip3.onFailure === "function") { AjaxZip3.onFailure() } } var m = h[AjaxZip3.nzip]; var e = (AjaxZip3.nzip - 0 + 4278190080) + ""; if (!m && h[e]) { m = h[e] } if (!m) { d(); return } var b = m[0]; if (!b) { d(); return } var o = AjaxZip3.PREFMAP[b]; if (!o) { d(); return } var c = m[1]; if (!c) { c = "" } var r = m[2]; if (!r) { r = "" } var f = m[3]; if (!f) { f = "" } var q = AjaxZip3.faddr; var k = c; if (AjaxZip3.fpref.type == "select-one" || AjaxZip3.fpref.type == "select-multiple") { var a = AjaxZip3.fpref.options; for (var g = 0; g < a.length; g++) { var n = a[g].value; var p = a[g].text;
            a[g].selected = (n == b || n == o || p == o) } } else { if (AjaxZip3.fpref.name == AjaxZip3.faddr.name) { k = o + k } else { AjaxZip3.fpref.value = o } } if (AjaxZip3.farea) { q = AjaxZip3.farea;
        AjaxZip3.farea.value = r } else { k += r } if (AjaxZip3.fstrt) { q = AjaxZip3.fstrt; if (AjaxZip3.faddr.name == AjaxZip3.fstrt.name) { k = k + f } else { if (f) { AjaxZip3.fstrt.value = f } } }
    AjaxZip3.faddr.value = k; if (typeof AjaxZip3.onSuccess === "function") { AjaxZip3.onSuccess() } if (!AjaxZip3.ffocus) { return } if (!q) { return } if (!q.value) { return } var l = q.value.length;
    q.focus(); if (q.createTextRange) { var j = q.createTextRange();
        j.move("character", l);
        j.select() } else { if (q.setSelectionRange) { q.setSelectionRange(l, l) } } };
AjaxZip3.getResponseText = function(b) { var c = b.responseText; if (navigator.appVersion.indexOf("KHTML") > -1) { var a = escape(c); if (a.indexOf("%u") < 0 && a.indexOf("%") > -1) { c = decodeURIComponent(a) } } return c };
AjaxZip3.getElementByName = function(d, b) { if (typeof(d) == "string") { var e = document.getElementsByName(d); if (!e) { return null } if (e.length > 1 && b && b.form) { var c = b.form.elements; for (var a = 0; a < c.length; a++) { if (c[a].name == d) { return c[a] } } } else { return e[0] } } return d };
AjaxZip3.zipjsonpquery = function() { var a = AjaxZip3.JSONDATA + "/" + AjaxZip3.nzip.substr(0, 3) + ".js"; var b = document.createElement("script");
    b.setAttribute("type", "text/javascript");
    b.setAttribute("charset", "UTF-8");
    b.setAttribute("src", a);
    document.getElementsByTagName("head").item(0).appendChild(b) };

function $yubin(a) { AjaxZip3.callback(a) };

/*!
 * Parsley.js
 * Version 2.8.0 - built Wed, Sep 13th 2017, 11:04 pm
 * http://parsleyjs.org
 * Guillaume Potier - <guillaume@wisembly.com>
 * Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
 * MIT Licensed
 */
function _toConsumableArray(e) { if (Array.isArray(e)) { for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t]; return i } return Array.from(e) }
var _slice = Array.prototype.slice,
    _slicedToArray = function() {
        function e(e, t) { var i = [],
                n = !0,
                r = !1,
                s = void 0; try { for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0); } catch (l) { r = !0, s = l } finally { try {!n && o["return"] && o["return"]() } finally { if (r) throw s } } return i } return function(t, i) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, i); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
    _extends = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e };
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.parsley = t(e.jQuery) }(this, function(e) {
    "use strict";

    function t(e, t) { return e.parsleyAdaptedCallback || (e.parsleyAdaptedCallback = function() { var i = Array.prototype.slice.call(arguments, 0);
            i.unshift(this), e.apply(t || M, i) }), e.parsleyAdaptedCallback }

    function i(e) { return 0 === e.lastIndexOf(D, 0) ? e.substr(D.length) : e }
    /**
     * inputevent - Alleviate browser bugs for input events
     * https://github.com/marcandre/inputevent
     * @version v0.0.3 - (built Thu, Apr 14th 2016, 5:58 pm)
     * @author Marc-Andre Lafortune <github@marc-andre.ca>
     * @license MIT
     */
    function n() { var t = this,
            i = window || global;
        _extends(this, { isNativeEvent: function(e) { return e.originalEvent && e.originalEvent.isTrusted !== !1 }, fakeInputEvent: function(i) { t.isNativeEvent(i) && e(i.target).trigger("input") }, misbehaves: function(i) { t.isNativeEvent(i) && (t.behavesOk(i), e(document).on("change.inputevent", i.data.selector, t.fakeInputEvent), t.fakeInputEvent(i)) }, behavesOk: function(i) { t.isNativeEvent(i) && e(document).off("input.inputevent", i.data.selector, t.behavesOk).off("change.inputevent", i.data.selector, t.misbehaves) }, install: function() { if (!i.inputEventPatched) { i.inputEventPatched = "0.0.3"; for (var n = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], r = 0; r < n.length; r++) { var s = n[r];
                        e(document).on("input.inputevent", s, { selector: s }, t.behavesOk).on("change.inputevent", s, { selector: s }, t.misbehaves) } } }, uninstall: function() { delete i.inputEventPatched, e(document).off(".inputevent") } }) }
    var r = 1,
        s = {},
        a = { attr: function(e, t, i) { var n, r, s, a = new RegExp("^" + t, "i"); if ("undefined" == typeof i) i = {};
                else
                    for (n in i) i.hasOwnProperty(n) && delete i[n]; if (!e) return i; for (s = e.attributes, n = s.length; n--;) r = s[n], r && r.specified && a.test(r.name) && (i[this.camelize(r.name.slice(t.length))] = this.deserializeValue(r.value)); return i }, checkAttr: function(e, t, i) { return e.hasAttribute(t + i) }, setAttr: function(e, t, i, n) { e.setAttribute(this.dasherize(t + i), String(n)) }, getType: function(e) { return e.getAttribute("type") || "text" }, generateID: function() { return "" + r++ }, deserializeValue: function(e) { var t; try { return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? JSON.parse(e) : e : t) : e } catch (i) { return e } }, camelize: function(e) { return e.replace(/-+(.)?/g, function(e, t) { return t ? t.toUpperCase() : "" }) }, dasherize: function(e) { return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase() }, warn: function() { var e;
                window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments) }, warnOnce: function(e) { s[e] || (s[e] = !0, this.warn.apply(this, arguments)) }, _resetWarnings: function() { s = {} }, trimString: function(e) { return e.replace(/^\s+|\s+$/g, "") }, parse: { date: function S(e) { var t = e.match(/^(\d{4,})-(\d\d)-(\d\d)$/); if (!t) return null; var i = t.map(function(e) { return parseInt(e, 10) }),
                        n = _slicedToArray(i, 4),
                        r = (n[0], n[1]),
                        s = n[2],
                        a = n[3],
                        S = new Date(r, s - 1, a); return S.getFullYear() !== r || S.getMonth() + 1 !== s || S.getDate() !== a ? null : S }, string: function(e) { return e }, integer: function(e) { return isNaN(e) ? null : parseInt(e, 10) }, number: function(e) { if (isNaN(e)) throw null; return parseFloat(e) }, "boolean": function(e) { return !/^\s*false\s*$/i.test(e) }, object: function(e) { return a.deserializeValue(e) }, regexp: function(e) { var t = ""; return /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : e = "^" + e + "$", new RegExp(e, t) } }, parseRequirement: function(e, t) { var i = this.parse[e || "string"]; if (!i) throw 'Unknown requirement specification: "' + e + '"'; var n = i(t); if (null === n) throw "Requirement is not a " + e + ': "' + t + '"'; return n }, namespaceEvents: function(t, i) { return t = this.trimString(t || "").split(/\s+/), t[0] ? e.map(t, function(e) { return e + "." + i }).join(" ") : "" }, difference: function(t, i) { var n = []; return e.each(t, function(e, t) { i.indexOf(t) == -1 && n.push(t) }), n }, all: function(t) { return e.when.apply(e, _toConsumableArray(t).concat([42, 42])) }, objectCreate: Object.create || function() { var e = function() {}; return function(t) { if (arguments.length > 1) throw Error("Second argument not supported"); if ("object" != typeof t) throw TypeError("Argument must be an object");
                    e.prototype = t; var i = new e; return e.prototype = null, i } }(), _SubmitSelector: 'input[type="submit"], button:submit' },
        o = { namespace: "data-parsley-", inputs: "input, textarea, select", excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]", priorityEnabled: !0, multiple: null, group: null, uiEnabled: !0, validationThreshold: 3, focus: "first", trigger: !1, triggerAfterFailure: "input", errorClass: "parsley-error", successClass: "parsley-success", classHandler: function(e) {}, errorsContainer: function(e) {}, errorsWrapper: '<ul class="parsley-errors-list"></ul>', errorTemplate: "<li></li>" },
        l = function() { this.__id__ = a.generateID() };
    l.prototype = { asyncSupport: !0, _pipeAccordingToValidationResult: function() { var t = this,
                i = function() { var i = e.Deferred(); return !0 !== t.validationResult && i.reject(), i.resolve().promise() }; return [i, i] }, actualizeOptions: function() { return a.attr(this.element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this }, _resetOptions: function(e) { this.domOptions = a.objectCreate(this.parent.options), this.options = a.objectCreate(this.domOptions); for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
            this.actualizeOptions() }, _listeners: null, on: function(e, t) { this._listeners = this._listeners || {}; var i = this._listeners[e] = this._listeners[e] || []; return i.push(t), this }, subscribe: function(t, i) { e.listenTo(this, t.toLowerCase(), i) }, off: function(e, t) { var i = this._listeners && this._listeners[e]; if (i)
                if (t)
                    for (var n = i.length; n--;) i[n] === t && i.splice(n, 1);
                else delete this._listeners[e];
            return this }, unsubscribe: function(t, i) { e.unsubscribeTo(this, t.toLowerCase()) }, trigger: function(e, t, i) { t = t || this; var n, r = this._listeners && this._listeners[e]; if (r)
                for (var s = r.length; s--;)
                    if (n = r[s].call(t, t, i), n === !1) return n;
            return !this.parent || this.parent.trigger(e, t, i) }, asyncIsValid: function(e, t) { return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({ group: e, force: t }) }, _findRelated: function() { return this.options.multiple ? e(this.parent.element.querySelectorAll("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element } };
    var u = function(e, t) { var i = e.match(/^\s*\[(.*)\]\s*$/); if (!i) throw 'Requirement is not an array: "' + e + '"'; var n = i[1].split(",").map(a.trimString); if (n.length !== t) throw "Requirement has " + n.length + " values when " + t + " are needed"; return n },
        d = function(e, t, i) { var n = null,
                r = {}; for (var s in e)
                if (s) { var o = i(s); "string" == typeof o && (o = a.parseRequirement(e[s], o)), r[s] = o } else n = a.parseRequirement(e[s], t);
            return [n, r] },
        h = function(t) { e.extend(!0, this, t) };
    h.prototype = { validate: function(e, t) { if (this.fn) return arguments.length > 3 && (t = [].slice.call(arguments, 1, -1)), this.fn(e, t); if (Array.isArray(e)) { if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values"; return this.validateMultiple.apply(this, arguments) } var i = arguments[arguments.length - 1]; if (this.validateDate && i._isDateInput()) return arguments[0] = a.parse.date(arguments[0]), null !== arguments[0] && this.validateDate.apply(this, arguments); if (this.validateNumber) return !isNaN(e) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments)); if (this.validateString) return this.validateString.apply(this, arguments); throw "Validator `" + this.name + "` only handles multiple values" }, parseRequirements: function(t, i) { if ("string" != typeof t) return Array.isArray(t) ? t : [t]; var n = this.requirementType; if (Array.isArray(n)) { for (var r = u(t, n.length), s = 0; s < r.length; s++) r[s] = a.parseRequirement(n[s], r[s]); return r } return e.isPlainObject(n) ? d(n, t, i) : [a.parseRequirement(n, t)] }, requirementType: "string", priority: 2 };
    var p = function(e, t) { this.__class__ = "ValidatorRegistry", this.locale = "en", this.init(e || {}, t || {}) },
        c = { email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i, number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i, integer: /^-?\d+$/, digits: /^\d+$/, alphanum: /^\w+$/i, date: { test: function(e) { return null !== a.parse.date(e) } }, url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i") };
    c.range = c.number;
    var f = function(e) { var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/); return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0 },
        m = function(e, t) { return t.map(a.parse[e]) },
        g = function(e, t) { return function(i) { for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s]; return r.pop(), t.apply(void 0, [i].concat(_toConsumableArray(m(e, r)))) } },
        v = function(e) { return { validateDate: g("date", e), validateNumber: g("number", e), requirementType: e.length <= 2 ? "string" : ["string", "string"], priority: 30 } };
    p.prototype = { init: function(e, t) { this.catalog = t, this.validators = _extends({}, this.validators); for (var i in e) this.addValidator(i, e[i].fn, e[i].priority);
            window.Parsley.trigger("parsley:validator:init") }, setLocale: function(e) { if ("undefined" == typeof this.catalog[e]) throw new Error(e + " is not available in the catalog"); return this.locale = e, this }, addCatalog: function(e, t, i) { return "object" == typeof t && (this.catalog[e] = t), !0 === i ? this.setLocale(e) : this }, addMessage: function(e, t, i) { return "undefined" == typeof this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = i, this }, addMessages: function(e, t) { for (var i in t) this.addMessage(e, i, t[i]); return this }, addValidator: function(e, t, i) { if (this.validators[e]) a.warn('Validator "' + e + '" is already defined.');
            else if (o.hasOwnProperty(e)) return void a.warn('"' + e + '" is a restricted keyword and is not a valid validator name.'); return this._setValidator.apply(this, arguments) }, hasValidator: function(e) { return !!this.validators[e] }, updateValidator: function(e, t, i) { return this.validators[e] ? this._setValidator.apply(this, arguments) : (a.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments)) }, removeValidator: function(e) { return this.validators[e] || a.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this }, _setValidator: function(e, t, i) { "object" != typeof t && (t = { fn: t, priority: i }), t.validate || (t = new h(t)), this.validators[e] = t; for (var n in t.messages || {}) this.addMessage(n, e, t.messages[n]); return this }, getErrorMessage: function(e) { var t; if ("type" === e.name) { var i = this.catalog[this.locale][e.name] || {};
                t = i[e.requirements] } else t = this.formatMessage(this.catalog[this.locale][e.name], e.requirements); return t || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage }, formatMessage: function(e, t) { if ("object" == typeof t) { for (var i in t) e = this.formatMessage(e, t[i]); return e } return "string" == typeof e ? e.replace(/%s/i, t) : "" }, validators: { notblank: { validateString: function(e) { return /\S/.test(e) }, priority: 2 }, required: { validateMultiple: function(e) { return e.length > 0 }, validateString: function(e) { return /\S/.test(e) }, priority: 512 }, type: { validateString: function(e, t) { var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        n = i.step,
                        r = void 0 === n ? "any" : n,
                        s = i.base,
                        a = void 0 === s ? 0 : s,
                        o = c[t]; if (!o) throw new Error("validator type `" + t + "` is not supported"); if (!o.test(e)) return !1; if ("number" === t && !/^any$/i.test(r || "")) { var l = Number(e),
                            u = Math.max(f(r), f(a)); if (f(l) > u) return !1; var d = function(e) { return Math.round(e * Math.pow(10, u)) }; if ((d(l) - d(a)) % d(r) != 0) return !1 } return !0 }, requirementType: { "": "string", step: "string", base: "number" }, priority: 256 }, pattern: { validateString: function(e, t) { return t.test(e) }, requirementType: "regexp", priority: 64 }, minlength: { validateString: function(e, t) { return e.length >= t }, requirementType: "integer", priority: 30 }, maxlength: { validateString: function(e, t) { return e.length <= t }, requirementType: "integer", priority: 30 }, length: { validateString: function(e, t, i) { return e.length >= t && e.length <= i }, requirementType: ["integer", "integer"], priority: 30 }, mincheck: { validateMultiple: function(e, t) { return e.length >= t }, requirementType: "integer", priority: 30 }, maxcheck: { validateMultiple: function(e, t) { return e.length <= t }, requirementType: "integer", priority: 30 }, check: { validateMultiple: function(e, t, i) { return e.length >= t && e.length <= i }, requirementType: ["integer", "integer"], priority: 30 }, min: v(function(e, t) { return e >= t }), max: v(function(e, t) { return e <= t }), range: v(function(e, t, i) { return e >= t && e <= i }), equalto: { validateString: function(t, i) { var n = e(i); return n.length ? t === n.val() : t === i }, priority: 256 } } };
    var y = {},
        _ = function k(e, t, i) { for (var n = [], r = [], s = 0; s < e.length; s++) { for (var a = !1, o = 0; o < t.length; o++)
                    if (e[s].assert.name === t[o].assert.name) { a = !0; break }
                a ? r.push(e[s]) : n.push(e[s]) } return { kept: r, added: n, removed: i ? [] : k(t, e, !0).added } };
    y.Form = { _actualizeTriggers: function() { var e = this;
            this.$element.on("submit.Parsley", function(t) { e.onSubmitValidate(t) }), this.$element.on("click.Parsley", a._SubmitSelector, function(t) { e.onSubmitButton(t) }), !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "") }, focus: function() { if (this._focusedField = null, !0 === this.validationResult || "none" === this.options.focus) return null; for (var e = 0; e < this.fields.length; e++) { var t = this.fields[e]; if (!0 !== t.validationResult && t.validationResult.length > 0 && "undefined" == typeof t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break } return null === this._focusedField ? null : this._focusedField.focus() }, _destroyUI: function() { this.$element.off(".Parsley") } }, y.Field = { _reflowUI: function() { if (this._buildUI(), this._ui) { var e = _(this.validationResult, this._ui.lastValidationResult);
                this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers()) } }, getErrorsMessages: function() { if (!0 === this.validationResult) return []; for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert)); return e }, addError: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.message,
                n = t.assert,
                r = t.updateClass,
                s = void 0 === r || r;
            this._buildUI(), this._addError(e, { message: i, assert: n }), s && this._errorClass() }, updateError: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.message,
                n = t.assert,
                r = t.updateClass,
                s = void 0 === r || r;
            this._buildUI(), this._updateError(e, { message: i, assert: n }), s && this._errorClass() }, removeError: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.updateClass,
                n = void 0 === i || i;
            this._buildUI(), this._removeError(e), n && this._manageStatusClass() }, _manageStatusClass: function() { this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass() }, _manageErrorsMessages: function(t) { if ("undefined" == typeof this.options.errorsMessagesDisabled) { if ("undefined" != typeof this.options.errorMessage) return t.added.length || t.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove(); for (var i = 0; i < t.removed.length; i++) this._removeError(t.removed[i].assert.name); for (i = 0; i < t.added.length; i++) this._addError(t.added[i].assert.name, { message: t.added[i].errorMessage, assert: t.added[i].assert }); for (i = 0; i < t.kept.length; i++) this._updateError(t.kept[i].assert.name, { message: t.kept[i].errorMessage, assert: t.kept[i].assert }) } }, _addError: function(t, i) { var n = i.message,
                r = i.assert;
            this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-" + t).html(n || this._getErrorMessage(r))) }, _updateError: function(e, t) { var i = t.message,
                n = t.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(n)) }, _removeError: function(e) { this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove() }, _getErrorMessage: function(e) { var t = e.name + "Message"; return "undefined" != typeof this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e) }, _buildUI: function() { if (!this._ui && !1 !== this.options.uiEnabled) { var t = {};
                this.element.setAttribute(this.options.namespace + "id", this.__id__), t.$errorClassHandler = this._manageClassHandler(), t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), t.$errorsWrapper = e(this.options.errorsWrapper).attr("id", t.errorsWrapperId), t.lastValidationResult = [], t.validationInformationVisible = !1, this._ui = t } }, _manageClassHandler: function() { if ("string" == typeof this.options.classHandler && e(this.options.classHandler).length) return e(this.options.classHandler); var t = this.options.classHandler; if ("string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] && (t = window[this.options.classHandler]), "function" == typeof t) { var i = t.call(this, this); if ("undefined" != typeof i && i.length) return i } else { if ("object" == typeof t && t instanceof jQuery && t.length) return t;
                t && a.warn("The class handler `" + t + "` does not exist in DOM nor as a global JS function") } return this._inputHolder() }, _inputHolder: function() { return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element }, _insertErrorWrapper: function() { var t = this.options.errorsContainer; if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent(); if ("string" == typeof t) { if (e(t).length) return e(t).append(this._ui.$errorsWrapper); "function" == typeof window[t] ? t = window[t] : a.warn("The errors container `" + t + "` does not exist in DOM nor as a global JS function") } return "function" == typeof t && (t = t.call(this, this)), "object" == typeof t && t.length ? t.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper) }, _actualizeTriggers: function() { var e, t = this,
                i = this._findRelated();
            i.off(".Parsley"), this._failedOnce ? i.on(a.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() { t._validateIfNeeded() }) : (e = a.namespaceEvents(this.options.trigger, "Parsley")) && i.on(e, function(e) { t._validateIfNeeded(e) }) }, _validateIfNeeded: function(e) { var t = this;
            e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced), this._debounced = window.setTimeout(function() { return t.validate() }, this.options.debounce)) : this.validate()) }, _resetUI: function() { this._failedOnce = !1, this._actualizeTriggers(), "undefined" != typeof this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1) }, _destroyUI: function() { this._resetUI(), "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(), delete this._ui }, _successClass: function() { this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass) }, _errorClass: function() { this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass) }, _resetClass: function() { this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass) } };
    var w = function(t, i, n) { this.__class__ = "Form", this.element = t, this.$element = e(t), this.domOptions = i, this.options = n, this.parent = window.Parsley, this.fields = [], this.validationResult = null },
        b = { pending: null, resolved: !0, rejected: !1 };
    w.prototype = { onSubmitValidate: function(e) { var t = this; if (!0 !== e.parsley) { var i = this._submitSource || this.$element.find(a._SubmitSelector)[0]; if (this._submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !i || null === i.getAttribute("formnovalidate")) { window.Parsley._remoteCache = {}; var n = this.whenValidate({ event: e }); "resolved" === n.state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === n.state() && n.done(function() { t._submit(i) })) } } }, onSubmitButton: function(e) { this._submitSource = e.currentTarget }, _submit: function(t) { if (!1 !== this._trigger("submit")) { if (t) { var i = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === i.length && (i = e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), i.attr({ name: t.getAttribute("name"), value: t.getAttribute("value") }) }
                this.$element.trigger(_extends(e.Event("submit"), { parsley: !0 })) } }, validate: function(t) { if (arguments.length >= 1 && !e.isPlainObject(t)) { a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated."); var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1],
                    s = i[2];
                t = { group: n, force: r, event: s } } return b[this.whenValidate(t).state()] }, whenValidate: function() { var t, i = this,
                n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                r = n.group,
                s = n.force,
                o = n.event;
            this.submitEvent = o, o && (this.submitEvent = _extends({}, o, { preventDefault: function() { a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), i.validationResult = !1 } })), this.validationResult = !0, this._trigger("validate"), this._refreshFields(); var l = this._withoutReactualizingFormOptions(function() { return e.map(i.fields, function(e) { return e.whenValidate({ force: s, group: r }) }) }); return (t = a.all(l).done(function() { i._trigger("success") }).fail(function() { i.validationResult = !1, i.focus(), i._trigger("error") }).always(function() { i._trigger("validated") })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult())) }, isValid: function(t) { if (arguments.length >= 1 && !e.isPlainObject(t)) { a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated."); var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1];
                t = { group: n, force: r } } return b[this.whenValid(t).state()] }, whenValid: function() { var t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.group,
                r = i.force;
            this._refreshFields(); var s = this._withoutReactualizingFormOptions(function() { return e.map(t.fields, function(e) { return e.whenValid({ group: n, force: r }) }) }); return a.all(s) }, refresh: function() { return this._refreshFields(), this }, reset: function() { for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
            this._trigger("reset") }, destroy: function() { this._destroyUI(); for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy") }, _refreshFields: function() { return this.actualizeOptions()._bindFields() }, _bindFields: function() { var t = this,
                i = this.fields; return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() { t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e, i) { var n = new window.Parsley.Factory(i, {}, t); if (("Field" === n.__class__ || "FieldMultiple" === n.__class__) && !0 !== n.options.excluded) { var r = n.__class__ + "-" + n.__id__; "undefined" == typeof t.fieldsMappedById[r] && (t.fieldsMappedById[r] = n, t.fields.push(n)) } }), e.each(a.difference(i, t.fields), function(e, t) { t.reset() }) }), this }, _withoutReactualizingFormOptions: function(e) { var t = this.actualizeOptions;
            this.actualizeOptions = function() { return this }; var i = e(); return this.actualizeOptions = t, i }, _trigger: function(e) { return this.trigger("form:" + e) } };
    var F = function(e, t, i, n, r) { var s = window.Parsley._validatorRegistry.validators[t],
                a = new h(s);
            n = n || e.options[t + "Priority"] || a.priority, r = !0 === r, _extends(this, { validator: a, name: t, requirements: i, priority: n, isDomConstraint: r }), this._parseRequirements(e.options) },
        C = function(e) { var t = e[0].toUpperCase(); return t + e.slice(1) };
    F.prototype = { validate: function(e, t) { var i; return (i = this.validator).validate.apply(i, [e].concat(_toConsumableArray(this.requirementList), [t])) }, _parseRequirements: function(e) { var t = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function(i) { return e[t.name + C(i)] }) } };
    var E = function(t, i, n, r) { this.__class__ = "Field", this.element = t, this.$element = e(t), "undefined" != typeof r && (this.parent = r), this.options = n, this.domOptions = i, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints() },
        A = { pending: null, resolved: !0, rejected: !1 };
    E.prototype = { validate: function(t) { arguments.length >= 1 && !e.isPlainObject(t) && (a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), t = { options: t }); var i = this.whenValidate(t); if (!i) return !0; switch (i.state()) {
                case "pending":
                    return null;
                case "resolved":
                    return !0;
                case "rejected":
                    return this.validationResult } }, whenValidate: function() { var e, t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.force,
                r = i.group; if (this.refresh(), !r || this._isInGroup(r)) return this.value = this.getValue(), this._trigger("validate"), (e = this.whenValid({ force: n, value: this.value, _refreshed: !0 }).always(function() { t._reflowUI() }).done(function() { t._trigger("success") }).fail(function() { t._trigger("error") }).always(function() { t._trigger("validated") })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult())) }, hasConstraints: function() { return 0 !== this.constraints.length }, needsValidation: function(e) { return "undefined" == typeof e && (e = this.getValue()), !(!e.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty) }, _isInGroup: function(t) { return Array.isArray(this.options.group) ? -1 !== e.inArray(t, this.options.group) : this.options.group === t }, isValid: function(t) { if (arguments.length >= 1 && !e.isPlainObject(t)) { a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated."); var i = _slice.call(arguments),
                    n = i[0],
                    r = i[1];
                t = { force: n, value: r } } var s = this.whenValid(t); return !s || A[s.state()] }, whenValid: function() { var t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = i.force,
                r = void 0 !== n && n,
                s = i.value,
                o = i.group,
                l = i._refreshed; if (l || this.refresh(), !o || this._isInGroup(o)) { if (this.validationResult = !0, !this.hasConstraints()) return e.when(); if ("undefined" != typeof s && null !== s || (s = this.getValue()), !this.needsValidation(s) && !0 !== r) return e.when(); var u = this._getGroupedConstraints(),
                    d = []; return e.each(u, function(i, n) { var r = a.all(e.map(n, function(e) { return t._validateConstraint(s, e) })); if (d.push(r), "rejected" === r.state()) return !1 }), a.all(d) } }, _validateConstraint: function(t, i) { var n = this,
                r = i.validate(t, this); return !1 === r && (r = e.Deferred().reject()), a.all([r]).fail(function(e) { n.validationResult instanceof Array || (n.validationResult = []), n.validationResult.push({ assert: i, errorMessage: "string" == typeof e && e }) }) }, getValue: function() { var e; return e = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof e || null === e ? "" : this._handleWhitespace(e) }, reset: function() { return this._resetUI(), this._trigger("reset") }, destroy: function() { this._destroyUI(), this.$element.removeData("Parsley"), this.$element.removeData("FieldMultiple"), this._trigger("destroy") }, refresh: function() { return this._refreshConstraints(), this }, _refreshConstraints: function() { return this.actualizeOptions()._bindConstraints() }, refreshConstraints: function() { return a.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"), this.refresh() }, addConstraint: function(e, t, i, n) { if (window.Parsley._validatorRegistry.validators[e]) { var r = new F(this, e, t, i, n); "undefined" !== this.constraintsByName[r.name] && this.removeConstraint(r.name), this.constraints.push(r), this.constraintsByName[r.name] = r } return this }, removeConstraint: function(e) { for (var t = 0; t < this.constraints.length; t++)
                if (e === this.constraints[t].name) { this.constraints.splice(t, 1); break }
            return delete this.constraintsByName[e], this }, updateConstraint: function(e, t, i) { return this.removeConstraint(e).addConstraint(e, t, i) }, _bindConstraints: function() { for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (e.push(this.constraints[i]), t[this.constraints[i].name] = this.constraints[i]);
            this.constraints = e, this.constraintsByName = t; for (var n in this.options) this.addConstraint(n, this.options[n], void 0, !0); return this._bindHtml5Constraints() }, _bindHtml5Constraints: function() { null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0), null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0); var e = this.element.getAttribute("min"),
                t = this.element.getAttribute("max");
            null !== e && null !== t ? this.addConstraint("range", [e, t], void 0, !0) : null !== e ? this.addConstraint("min", e, void 0, !0) : null !== t && this.addConstraint("max", t, void 0, !0), null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength") ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0) : null !== this.element.getAttribute("minlength") ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0) : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0); var i = a.getType(this.element); return "number" === i ? this.addConstraint("type", ["number", { step: this.element.getAttribute("step") || "1", base: e || this.element.getAttribute("value") }], void 0, !0) : /^(email|url|range|date)$/i.test(i) ? this.addConstraint("type", i, void 0, !0) : this }, _isRequired: function() { return "undefined" != typeof this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements }, _trigger: function(e) { return this.trigger("field:" + e) }, _handleWhitespace: function(e) { return !0 === this.options.trimValue && a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (e = a.trimString(e)), e }, _isDateInput: function() { var e = this.constraintsByName.type; return e && "date" === e.requirements }, _getGroupedConstraints: function() { if (!1 === this.options.priorityEnabled) return [this.constraints]; for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) { var n = this.constraints[i].priority;
                t[n] || e.push(t[n] = []), t[n].push(this.constraints[i]) } return e.sort(function(e, t) { return t[0].priority - e[0].priority }), e } };
    var x = E,
        $ = function() { this.__class__ = "FieldMultiple" };
    $.prototype = {
        addElement: function(e) { return this.$elements.push(e), this },
        _refreshConstraints: function() { var t; if (this.constraints = [], "SELECT" === this.element.nodeName) return this.actualizeOptions()._bindConstraints(), this; for (var i = 0; i < this.$elements.length; i++)
                if (e("html").has(this.$elements[i]).length) { t = this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints; for (var n = 0; n < t.length; n++) this.addConstraint(t[n].name, t[n].requirements, t[n].priority, t[n].isDomConstraint) } else this.$elements.splice(i, 1);
            return this },
        getValue: function() {
            if ("function" == typeof this.options.value) return this.options.value(this);
            if ("undefined" != typeof this.options.value) return this.options.value;
            if ("INPUT" === this.element.nodeName) { var t = a.getType(this.element); if ("radio" === t) return this._findRelated().filter(":checked").val() || ""; if ("checkbox" === t) { var i = []; return this._findRelated().filter(":checked").each(function() { i.push(e(this).val()) }), i } }
            return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val();
        },
        _init: function() { return this.$elements = [this.$element], this }
    };
    var P = function(t, i, n) { this.element = t, this.$element = e(t); var r = this.$element.data("Parsley"); if (r) return "undefined" != typeof n && r.parent === window.Parsley && (r.parent = n, r._resetOptions(r.options)), "object" == typeof i && _extends(r.options, i), r; if (!this.$element.length) throw new Error("You must bind Parsley on an existing element."); if ("undefined" != typeof n && "Form" !== n.__class__) throw new Error("Parent instance must be a Form instance"); return this.parent = n || window.Parsley, this.init(i) };
    P.prototype = { init: function(e) { return this.__class__ = "Parsley", this.__version__ = "2.8.0", this.__id__ = a.generateID(), this._resetOptions(e), "FORM" === this.element.nodeName || a.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField") }, isMultiple: function() { var e = a.getType(this.element); return "radio" === e || "checkbox" === e || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple") }, handleMultiple: function() { var t, i, n = this; if (this.options.multiple = this.options.multiple || (t = this.element.getAttribute("name")) || this.element.getAttribute("id"), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple"); if (!this.options.multiple) return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), t && e('input[name="' + t + '"]').each(function(e, t) { var i = a.getType(t); "radio" !== i && "checkbox" !== i || t.setAttribute(n.options.namespace + "multiple", n.options.multiple) }); for (var r = this._findRelated(), s = 0; s < r.length; s++)
                if (i = e(r.get(s)).data("Parsley"), "undefined" != typeof i) { this.$element.data("FieldMultiple") || i.addElement(this.$element); break }
            return this.bind("parsleyField", !0), i || this.bind("parsleyFieldMultiple") }, bind: function(t, i) { var n; switch (t) {
                case "parsleyForm":
                    n = e.extend(new w(this.element, this.domOptions, this.options), new l, window.ParsleyExtend)._bindFields(); break;
                case "parsleyField":
                    n = e.extend(new x(this.element, this.domOptions, this.options, this.parent), new l, window.ParsleyExtend); break;
                case "parsleyFieldMultiple":
                    n = e.extend(new x(this.element, this.domOptions, this.options, this.parent), new $, new l, window.ParsleyExtend)._init(); break;
                default:
                    throw new Error(t + "is not a supported Parsley type") } return this.options.multiple && a.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple), "undefined" != typeof i ? (this.$element.data("FieldMultiple", n), n) : (this.$element.data("Parsley", n), n._actualizeTriggers(), n._trigger("init"), n) } };
    var V = e.fn.jquery.split(".");
    if (parseInt(V[0]) <= 1 && parseInt(V[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    V.forEach || a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var T = _extends(new l, { element: document, $element: e(document), actualizeOptions: null, _resetOptions: null, Factory: P, version: "2.8.0" });
    _extends(x.prototype, y.Field, l.prototype), _extends(w.prototype, y.Form, l.prototype), _extends(P.prototype, l.prototype), e.fn.parsley = e.fn.psly = function(t) { if (this.length > 1) { var i = []; return this.each(function() { i.push(e(this).parsley(t)) }), i } if (0 != this.length) return new P(this[0], t) }, "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), T.options = _extends(a.objectCreate(o), window.ParsleyConfig), window.ParsleyConfig = T.options, window.Parsley = window.psly = T, T.Utils = a, window.ParsleyUtils = {}, e.each(a, function(e, t) { "function" == typeof t && (window.ParsleyUtils[e] = function() { return a.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."), a[e].apply(a, arguments) }) });
    var O = window.Parsley._validatorRegistry = new p(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {}, e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function(e, t) { window.Parsley[t] = function() { return O[t].apply(O, arguments) }, window.ParsleyValidator[t] = function() { var e; return a.warnOnce("Accessing the method '" + t + "' through Validator is deprecated. Simply call 'window.Parsley." + t + "(...)'"), (e = window.Parsley)[t].apply(e, arguments) } }), window.Parsley.UI = y, window.ParsleyUI = { removeError: function(e, t, i) { var n = !0 !== i; return a.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, { updateClass: n }) }, getErrorsMessages: function(e) { return a.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages() } }, e.each("addError updateError".split(" "), function(e, t) { window.ParsleyUI[t] = function(e, i, n, r, s) { var o = !0 !== s; return a.warnOnce("Accessing UI is deprecated. Call '" + t + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[t](i, { message: n, assert: r, updateClass: o }) } }), !1 !== window.ParsleyConfig.autoBind && e(function() { e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley() });
    var M = e({}),
        R = function() { a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley") },
        D = "parsley:";
    e.listen = function(e, n) { var r; if (R(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (r = arguments[1], n = arguments[2]), "function" != typeof n) throw new Error("Wrong parameters");
        window.Parsley.on(i(e), t(n, r)) }, e.listenTo = function(e, n, r) { if (R(), !(e instanceof x || e instanceof w)) throw new Error("Must give Parsley instance"); if ("string" != typeof n || "function" != typeof r) throw new Error("Wrong parameters");
        e.on(i(n), t(r)) }, e.unsubscribe = function(e, t) { if (R(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
        window.Parsley.off(i(e), t.parsleyAdaptedCallback) }, e.unsubscribeTo = function(e, t) { if (R(), !(e instanceof x || e instanceof w)) throw new Error("Must give Parsley instance");
        e.off(i(t)) }, e.unsubscribeAll = function(t) { R(), window.Parsley.off(i(t)), e("form,input,textarea,select").each(function() { var n = e(this).data("Parsley");
            n && n.off(i(t)) }) }, e.emit = function(e, t) { var n;
        R(); var r = t instanceof x || t instanceof w,
            s = Array.prototype.slice.call(arguments, r ? 2 : 1);
        s.unshift(i(e)), r || (t = window.Parsley), (n = t).trigger.apply(n, _toConsumableArray(s)) };
    e.extend(!0, T, { asyncValidators: { "default": { fn: function(e) { return e.status >= 200 && e.status < 300 }, url: !1 }, reverse: { fn: function(e) { return e.status < 200 || e.status >= 300 }, url: !1 } }, addAsyncValidator: function(e, t, i, n) { return T.asyncValidators[e] = { fn: t, url: i || !1, options: n || {} }, this } }), T.addValidator("remote", { requirementType: { "": "string", validator: "string", reverse: "boolean", options: "object" }, validateString: function(t, i, n, r) { var s, a, o = {},
                l = n.validator || (!0 === n.reverse ? "reverse" : "default"); if ("undefined" == typeof T.asyncValidators[l]) throw new Error("Calling an undefined async validator: `" + l + "`");
            i = T.asyncValidators[l].url || i, i.indexOf("{value}") > -1 ? i = i.replace("{value}", encodeURIComponent(t)) : o[r.element.getAttribute("name") || r.element.getAttribute("id")] = t; var u = e.extend(!0, n.options || {}, T.asyncValidators[l].options);
            s = e.extend(!0, {}, { url: i, data: o, type: "GET" }, u), r.trigger("field:ajaxoptions", r, s), a = e.param(s), "undefined" == typeof T._remoteCache && (T._remoteCache = {}); var d = T._remoteCache[a] = T._remoteCache[a] || e.ajax(s),
                h = function() { var t = T.asyncValidators[l].fn.call(r, d, i, n); return t || (t = e.Deferred().reject()), e.when(t) }; return d.then(h, h) }, priority: -1 }), T.on("form:submit", function() { T._remoteCache = {} }), l.prototype.addAsyncValidator = function() { return a.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), T.addAsyncValidator.apply(T, arguments) }, T.addMessages("en", { defaultMessage: "This value seems to be invalid.", type: { email: "This value should be a valid email.", url: "This value should be a valid url.", number: "This value should be a valid number.", integer: "This value should be a valid integer.", digits: "This value should be digits.", alphanum: "This value should be alphanumeric." }, notblank: "This value should not be blank.", required: "This value is required.", pattern: "This value seems to be invalid.", min: "This value should be greater than or equal to %s.", max: "This value should be lower than or equal to %s.", range: "This value should be between %s and %s.", minlength: "This value is too short. It should have %s characters or more.", maxlength: "This value is too long. It should have %s characters or fewer.", length: "This value length is invalid. It should be between %s and %s characters long.", mincheck: "You must select at least %s choices.", maxcheck: "You must select %s choices or fewer.", check: "You must select between %s and %s choices.", equalto: "This value should be the same." }), T.setLocale("en");
    var I = new n;
    I.install();
    var q = T;
    return q
});
//# sourceMappingURL=parsley.min.js.map

// Validation errors messages for Parsley
// Load this after Parsley

Parsley.addMessages('ja', {
    defaultMessage: "無効な値です。",
    type: {
        email: "有効なメールアドレスを入力してください。",
        url: "有効なURLを入力してください。",
        number: "数値を入力してください。",
        integer: "整数を入力してください。",
        digits: "数字を入力してください。",
        alphanum: "英数字を入力してください。"
    },
    notblank: "この値を入力してください",
    required: "この値は必須です。",
    pattern: "この値は無効です。",
    min: "%s 以上の値にしてください。",
    max: "%s 以下の値にしてください。",
    range: "%s から %s の値にしてください。",
    minlength: "%s 文字以上で入力してください。",
    maxlength: "%s 文字以下で入力してください。",
    length: "%s から %s 文字の間で入力してください。",
    mincheck: "%s 個以上選択してください。",
    maxcheck: "%s 個以下選択してください。",
    check: "%s から %s 個選択してください。",
    equalto: "値が違います。"
});

Parsley.setLocale('ja');

// Validation errors messages for Parsley
// Load this after Parsley

Parsley.addMessages('ja', {
    dateiso: "有効な日付を入力してください。 (YYYY-MM-DD).",
    minwords: "語句が短すぎます。 %s 語以上で入力してください。",
    maxwords: "語句が長すぎます。 %s 語以内で入力してください。",
    words: "語句の長さが正しくありません。 %s 語から %s 語の間で入力してください。",
    gt: "より大きい値を入力してください。",
    gte: "より大きいか、同じ値を入力してください。",
    lt: "より小さい値を入力してください。",
    lte: "より小さいか、同じ値を入力してください。",
    notequalto: "異なる値を入力してください。"
});

/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t() }(this, function() { "use strict"; var e = function() {};
    e.version = "2.0.6", window.addEventListener("mousewheel", function() {}); var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) { var o, s, a = "ScrollMagic.Controller",
            l = "FORWARD",
            c = "REVERSE",
            f = "PAUSED",
            u = n.defaults,
            d = this,
            h = i.extend({}, u, r),
            g = [],
            p = !1,
            v = 0,
            m = f,
            w = !0,
            y = 0,
            S = !0,
            b = function() { for (var e in h) u.hasOwnProperty(e) || delete h[e]; if (h.container = i.get.elements(h.container)[0], !h.container) throw a + " init failed.";
                w = h.container === window || h.container === document.body || !document.body.contains(h.container), w && (h.container = window), y = z(), h.container.addEventListener("resize", T), h.container.addEventListener("scroll", T); var t = parseInt(h.refreshInterval, 10);
                h.refreshInterval = i.type.Number(t) ? t : u.refreshInterval, E() },
            E = function() { h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval)) },
            x = function() { return h.vertical ? i.get.scrollTop(h.container) : i.get.scrollLeft(h.container) },
            z = function() { return h.vertical ? i.get.height(h.container) : i.get.width(h.container) },
            C = this._setScrollPos = function(e) { h.vertical ? w ? window.scrollTo(i.get.scrollLeft(), e) : h.container.scrollTop = e : w ? window.scrollTo(e, i.get.scrollTop()) : h.container.scrollLeft = e },
            F = function() { if (S && p) { var e = i.type.Array(p) ? p : g.slice(0);
                    p = !1; var t = v;
                    v = d.scrollPos(); var n = v - t;
                    0 !== n && (m = n > 0 ? l : c), m === c && e.reverse(), e.forEach(function(e) { e.update(!0) }) } },
            L = function() { o = i.rAF(F) },
            T = function(e) { "resize" == e.type && (y = z(), m = f), p !== !0 && (p = !0, L()) },
            A = function() { if (!w && y != z()) { var e; try { e = new Event("resize", { bubbles: !1, cancelable: !1 }) } catch (t) { e = document.createEvent("Event"), e.initEvent("resize", !1, !1) }
                    h.container.dispatchEvent(e) }
                g.forEach(function(e) { e.refresh() }), E() };
        this._options = h; var N = function(e) { if (e.length <= 1) return e; var t = e.slice(0); return t.sort(function(e, t) { return e.scrollOffset() > t.scrollOffset() ? 1 : -1 }), t }; return this.addScene = function(t) { if (i.type.Array(t)) t.forEach(function(e) { d.addScene(e) });
            else if (t instanceof e.Scene)
                if (t.controller() !== d) t.addTo(d);
                else if (g.indexOf(t) < 0) { g.push(t), g = N(g), t.on("shift.controller_sort", function() { g = N(g) }); for (var n in h.globalSceneOptions) t[n] && t[n].call(t, h.globalSceneOptions[n]) } return d }, this.removeScene = function(e) { if (i.type.Array(e)) e.forEach(function(e) { d.removeScene(e) });
            else { var t = g.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"), g.splice(t, 1), e.remove()) } return d }, this.updateScene = function(t, n) { return i.type.Array(t) ? t.forEach(function(e) { d.updateScene(e, n) }) : n ? t.update(!0) : p !== !0 && t instanceof e.Scene && (p = p || [], -1 == p.indexOf(t) && p.push(t), p = N(p), L()), d }, this.update = function(e) { return T({ type: "resize" }), e && F(), d }, this.scrollTo = function(n, r) { if (i.type.Number(n)) C.call(h.container, n, r);
            else if (n instanceof e.Scene) n.controller() === d && d.scrollTo(n.scrollOffset(), r);
            else if (i.type.Function(n)) C = n;
            else { var o = i.get.elements(n)[0]; if (o) { for (; o.parentNode.hasAttribute(t);) o = o.parentNode; var s = h.vertical ? "top" : "left",
                        a = i.get.offset(h.container),
                        l = i.get.offset(o);
                    w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r) } } return d }, this.scrollPos = function(e) { return arguments.length ? (i.type.Function(e) && (x = e), d) : x.call(d) }, this.info = function(e) { var t = { size: y, vertical: h.vertical, scrollPos: v, scrollDirection: m, container: h.container, isDocument: w }; return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t }, this.loglevel = function() { return d }, this.enabled = function(e) { return arguments.length ? (S != e && (S = !!e, d.updateScene(g, !0)), d) : S }, this.destroy = function(e) { window.clearTimeout(s); for (var t = g.length; t--;) g[t].destroy(e); return h.container.removeEventListener("resize", T), h.container.removeEventListener("scroll", T), i.cAF(o), null }, b(), d }; var n = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
    e.Controller.addOption = function(e, t) { n.defaults[e] = t }, e.Controller.extend = function(t) { var n = this;
        e.Controller = function() { return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this }, i.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller }, e.Scene = function(n) { var o, s, a = "BEFORE",
            l = "DURING",
            c = "AFTER",
            f = r.defaults,
            u = this,
            d = i.extend({}, f, n),
            h = a,
            g = 0,
            p = { start: 0, end: 0 },
            v = 0,
            m = !0,
            w = function() { for (var e in d) f.hasOwnProperty(e) || delete d[e]; for (var t in f) L(t);
                C() },
            y = {};
        this.on = function(e, t) { return i.type.Function(t) && (e = e.trim().split(" "), e.forEach(function(e) { var n = e.split("."),
                    r = n[0],
                    i = n[1]; "*" != r && (y[r] || (y[r] = []), y[r].push({ namespace: i || "", callback: t })) })), u }, this.off = function(e, t) { return e ? (e = e.trim().split(" "), e.forEach(function(e) { var n = e.split("."),
                    r = n[0],
                    i = n[1] || "",
                    o = "*" === r ? Object.keys(y) : [r];
                o.forEach(function(e) { for (var n = y[e] || [], r = n.length; r--;) { var o = n[r];!o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1) }
                    n.length || delete y[e] }) }), u) : u }, this.trigger = function(t, n) { if (t) { var r = t.trim().split("."),
                    i = r[0],
                    o = r[1],
                    s = y[i];
                s && s.forEach(function(t) { o && o !== t.namespace || t.callback.call(u, new e.Event(i, t.namespace, u, n)) }) } return u }, u.on("change.internal", function(e) { "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && u.update()) }).on("shift.internal", function() { S(), u.update() }), this.addTo = function(t) { return t instanceof e.Controller && s != t && (s && s.removeScene(u), s = t, C(), b(!0), E(!0), S(), s.info("container").addEventListener("resize", x), t.addScene(u), u.trigger("add", { controller: s }), u.update()), u }, this.enabled = function(e) { return arguments.length ? (m != e && (m = !!e, u.update(!0)), u) : m }, this.remove = function() { if (s) { s.info("container").removeEventListener("resize", x); var e = s;
                s = void 0, e.removeScene(u), u.trigger("remove") } return u }, this.destroy = function(e) { return u.trigger("destroy", { reset: e }), u.remove(), u.off("*.*"), null }, this.update = function(e) { if (s)
                if (e)
                    if (s.enabled() && m) { var t, n = s.info("scrollPos");
                        t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0, u.trigger("update", { startPos: p.start, endPos: p.end, scrollPos: n }), u.progress(t) } else T && h === l && N(!0);
            else s.updateScene(u, !1); return u }, this.refresh = function() { return b(), E(), u }, this.progress = function(e) { if (arguments.length) { var t = !1,
                    n = h,
                    r = s ? s.info("scrollDirection") : "PAUSED",
                    i = d.reverse || e >= g; if (0 === d.duration ? (t = g != e, g = 1 > e && i ? 0 : 1, h = 0 === g ? a : l) : 0 > e && h !== a && i ? (g = 0, h = a, t = !0) : e >= 0 && 1 > e && i ? (g = e, h = l, t = !0) : e >= 1 && h !== c ? (g = 1, h = c, t = !0) : h !== l || i || N(), t) { var o = { progress: g, state: h, scrollDirection: r },
                        f = h != n,
                        p = function(e) { u.trigger(e, o) };
                    f && n !== l && (p("enter"), p(n === a ? "start" : "end")), p("progress"), f && h !== l && (p(h === a ? "start" : "end"), p("leave")) } return u } return g }; var S = function() { p = { start: v + d.offset }, s && d.triggerElement && (p.start -= s.info("size") * d.triggerHook), p.end = p.start + d.duration },
            b = function(e) { if (o) { var t = "duration";
                    F(t, o.call(u)) && !e && (u.trigger("change", { what: t, newval: d[t] }), u.trigger("shift", { reason: t })) } },
            E = function(e) { var n = 0,
                    r = d.triggerElement; if (s && (r || v > 0)) { if (r)
                        if (r.parentNode) { for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode; var c = i.get.offset(r);
                            o.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l] } else u.triggerElement(void 0);
                    var f = n != v;
                    v = n, f && !e && u.trigger("shift", { reason: "triggerElementPosition" }) } },
            x = function() { d.triggerHook > 0 && u.trigger("shift", { reason: "containerResize" }) },
            z = i.extend(r.validate, { duration: function(e) { if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) { var t = parseFloat(e) / 100;
                        e = function() { return s ? s.info("size") * t : 0 } } if (i.type.Function(e)) { o = e; try { e = parseFloat(o()) } catch (n) { e = -1 } } if (e = parseFloat(e), !i.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0; return e } }),
            C = function(e) { e = arguments.length ? [e] : Object.keys(z), e.forEach(function(e) { var t; if (z[e]) try { t = z[e](d[e]) } catch (n) { t = f[e] } finally { d[e] = t } }) },
            F = function(e, t) { var n = !1,
                    r = d[e]; return d[e] != t && (d[e] = t, C(e), n = r != d[e]), n },
            L = function(e) { u[e] || (u[e] = function(t) { return arguments.length ? ("duration" === e && (o = void 0), F(e, t) && (u.trigger("change", { what: e, newval: d[e] }), r.shifts.indexOf(e) > -1 && u.trigger("shift", { reason: e })), u) : d[e] }) };
        this.controller = function() { return s }, this.state = function() { return h }, this.scrollOffset = function() { return p.start }, this.triggerPosition = function() { var e = d.offset; return s && (e += d.triggerElement ? v : s.info("size") * u.triggerHook()), e }; var T, A;
        u.on("shift.internal", function(e) { var t = "duration" === e.reason;
            (h === c && t || h === l && 0 === d.duration) && N(), t && O() }).on("progress.internal", function() { N() }).on("add.internal", function() { O() }).on("destroy.internal", function(e) { u.removePin(e.reset) }); var N = function(e) { if (T && s) { var t = s.info(),
                        n = A.spacer.firstChild; if (e || h !== l) { var r = { position: A.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                            o = i.css(n, "position") != r.position;
                        A.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(i.css(A.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = d.duration * g, i.css(n, r), o && O() } else { "fixed" != i.css(n, "position") && (i.css(n, { position: "fixed" }), O()); var f = i.get.offset(A.spacer, !0),
                            u = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(g * d.duration * 10) / 10;
                        f[t.vertical ? "top" : "left"] += u, i.css(A.spacer.firstChild, { top: f.top, left: f.left }) } } },
            O = function() { if (T && s && A.inFlow) { var e = h === l,
                        t = s.info("vertical"),
                        n = A.spacer.firstChild,
                        r = i.isMarginCollapseType(i.css(A.spacer, "display")),
                        o = {};
                    A.relSize.width || A.relSize.autoFullWidth ? e ? i.css(T, { width: i.get.width(A.spacer) }) : i.css(T, { width: "100%" }) : (o["min-width"] = i.get.width(t ? T : n, !0, !0), o.width = e ? o["min-width"] : "auto"), A.relSize.height ? e ? i.css(T, { height: i.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0) }) : i.css(T, { height: "100%" }) : (o["min-height"] = i.get.height(t ? n : T, !0, !r), o.height = e ? o["min-height"] : "auto"), A.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = d.duration * g, o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - g)), i.css(A.spacer, o) } },
            _ = function() { s && T && h === l && !s.info("isDocument") && N() },
            P = function() { s && T && h === l && ((A.relSize.width || A.relSize.autoFullWidth) && i.get.width(window) != i.get.width(A.spacer.parentNode) || A.relSize.height && i.get.height(window) != i.get.height(A.spacer.parentNode)) && O() },
            D = function(e) { s && T && h === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail))) };
        this.setPin = function(e, n) { var r = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" }; if (n = i.extend({}, r, n), e = i.get.elements(e)[0], !e) return u; if ("fixed" === i.css(e, "position")) return u; if (T) { if (T === e) return u;
                u.removePin() }
            T = e; var o = T.parentNode.style.display,
                s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            T.parentNode.style.display = "none"; var a = "absolute" != i.css(T, "position"),
                l = i.css(T, s.concat(["display"])),
                c = i.css(T, ["width", "height"]);
            T.parentNode.style.display = o, !a && n.pushFollowers && (n.pushFollowers = !1); var f = T.parentNode.insertBefore(document.createElement("div"), T),
                d = i.extend(l, { position: a ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" }); if (a || i.extend(d, i.css(T, ["width", "height"])), i.css(f, d), f.setAttribute(t, ""), i.addClass(f, n.spacerClass), A = { spacer: f, relSize: { width: "%" === c.width.slice(-1), height: "%" === c.height.slice(-1), autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display) }, pushFollowers: n.pushFollowers, inFlow: a }, !T.___origStyle) { T.___origStyle = {}; var h = T.style,
                    g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                g.forEach(function(e) { T.___origStyle[e] = h[e] || "" }) } return A.relSize.width && i.css(f, { width: c.width }), A.relSize.height && i.css(f, { height: c.height }), f.appendChild(T), i.css(T, { position: a ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }), (A.relSize.width || A.relSize.autoFullWidth) && i.css(T, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }), window.addEventListener("scroll", _), window.addEventListener("resize", _), window.addEventListener("resize", P), T.addEventListener("mousewheel", D), T.addEventListener("DOMMouseScroll", D), N(), u }, this.removePin = function(e) { if (T) { if (h === l && N(!0), e || !s) { var n = A.spacer.firstChild; if (n.hasAttribute(t)) { var r = A.spacer.style,
                            o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
                            a = {};
                        o.forEach(function(e) { a[e] = r[e] || "" }), i.css(n, a) }
                    A.spacer.parentNode.insertBefore(n, A.spacer), A.spacer.parentNode.removeChild(A.spacer), T.parentNode.hasAttribute(t) || (i.css(T, T.___origStyle), delete T.___origStyle) }
                window.removeEventListener("scroll", _), window.removeEventListener("resize", _), window.removeEventListener("resize", P), T.removeEventListener("mousewheel", D), T.removeEventListener("DOMMouseScroll", D), T = void 0 } return u }; var R, k = []; return u.on("destroy.internal", function(e) { u.removeClassToggle(e.reset) }), this.setClassToggle = function(e, t) { var n = i.get.elements(e); return 0 !== n.length && i.type.String(t) ? (k.length > 0 && u.removeClassToggle(), R = t, k = n, u.on("enter.internal_class leave.internal_class", function(e) { var t = "enter" === e.type ? i.addClass : i.removeClass;
                k.forEach(function(e) { t(e, R) }) }), u) : u }, this.removeClassToggle = function(e) { return e && k.forEach(function(e) { i.removeClass(e, R) }), u.off("start.internal_class end.internal_class"), R = void 0, k = [], u }, w(), u }; var r = { defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2 }, validate: { offset: function(e) { if (e = parseFloat(e), !i.type.Number(e)) throw 0; return e }, triggerElement: function(e) { if (e = e || void 0) { var t = i.get.elements(e)[0]; if (!t || !t.parentNode) throw 0;
                    e = t } return e }, triggerHook: function(e) { var t = { onCenter: .5, onEnter: 1, onLeave: 0 }; if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else { if (!(e in t)) throw 0;
                    e = t[e] } return e }, reverse: function(e) { return !!e } }, shifts: ["duration", "offset", "triggerHook"] };
    e.Scene.addOption = function(e, t, n, i) { e in r.defaults || (r.defaults[e] = t, r.validate[e] = n, i && r.shifts.push(e)) }, e.Scene.extend = function(t) { var n = this;
        e.Scene = function() { return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this }, i.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene }, e.Event = function(e, t, n, r) { r = r || {}; for (var i in r) this[i] = r[i]; return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this }; var i = e._util = function(e) { var t, n = {},
            r = function(e) { return parseFloat(e) || 0 },
            i = function(t) { return t.currentStyle ? t.currentStyle : e.getComputedStyle(t) },
            o = function(t, n, o, s) { if (n = n === document ? e : n, n === e) s = !1;
                else if (!u.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0; if (o && s) { var l = i(n);
                    a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight) } return a },
            s = function(e) { return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) { return e[1].toUpperCase() }) };
        n.extend = function(e) { for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e }, n.isMarginCollapseType = function(e) { return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1 }; var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            f = e.cancelAnimationFrame; for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], f = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) { var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - a)),
                i = e.setTimeout(function() { t(n + r) }, r); return a = n + r, i }), f || (f = function(t) { e.clearTimeout(t) }), n.rAF = c.bind(e), n.cAF = f.bind(e); var u = n.type = function(e) { return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase() };
        u.String = function(e) { return "string" === u(e) }, u.Function = function(e) { return "function" === u(e) }, u.Array = function(e) { return Array.isArray(e) }, u.Number = function(e) { return !u.Array(e) && e - parseFloat(e) + 1 >= 0 }, u.DomElement = function(e) { return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName }; var d = n.get = {}; return d.elements = function(t) { var n = []; if (u.String(t)) try { t = document.querySelectorAll(t) } catch (r) { return n }
            if ("nodelist" === u(t) || u.Array(t))
                for (var i = 0, o = n.length = t.length; o > i; i++) { var s = t[i];
                    n[i] = u.DomElement(s) ? s : d.elements(s) } else(u.DomElement(t) || t === document || t === e) && (n = [t]); return n }, d.scrollTop = function(t) { return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0 }, d.scrollLeft = function(t) { return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0 }, d.width = function(e, t, n) { return o("width", e, t, n) }, d.height = function(e, t, n) { return o("height", e, t, n) }, d.offset = function(e, t) { var n = { top: 0, left: 0 }; if (e && e.getBoundingClientRect) { var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft()) } return n }, n.addClass = function(e, t) { t && (e.classList ? e.classList.add(t) : e.className += " " + t) }, n.removeClass = function(e, t) { t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")) }, n.css = function(e, t) { if (u.String(t)) return i(e)[s(t)]; if (u.Array(t)) { var n = {},
                    r = i(e); return t.forEach(function(e) { n[e] = r[s(e)] }), n } for (var o in t) { var a = t[o];
                a == parseFloat(a) && (a += "px"), e.style[s(o)] = a } }, n }(window || {}); return e });
/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, n) { "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == typeof exports ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite) }(this, function(e, n, r) { "use strict";
    e.Scene.addOption("tweenChanges", !1, function(e) { return !!e }), e.Scene.extend(function() { var e, t = this;
        t.on("progress.plugin_gsap", function() { i() }), t.on("destroy.plugin_gsap", function(e) { t.removeTween(e.reset) }); var i = function() { if (e) { var n = t.progress(),
                    r = t.state();
                e.repeat && -1 === e.repeat() ? "DURING" === r && e.paused() ? e.play() : "DURING" === r || e.paused() || e.pause() : n != e.progress() && (0 === t.duration() ? n > 0 ? e.play() : e.reverse() : t.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause()) } };
        t.setTween = function(o, a, s) { var u;
            arguments.length > 1 && (arguments.length < 3 && (s = a, a = 1), o = n.to(o, a, s)); try { u = r ? new r({ smoothChildTiming: !0 }).add(o) : o, u.pause() } catch (p) { return t } return e && t.removeTween(), e = u, o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), i(), t }, t.removeTween = function(n) { return e && (n && e.progress(0).pause(), e.kill(), e = void 0), t } }) });
/**
 * include1
 *
 */
$(function() {
    var $lineup = $('#top').find('.lineup').find('li').find('a');
    $lineup.hover(function() {
        $(this).find('.model').stop(true, false).fadeIn(500);

    }, function() {
        $(this).find('.model').stop(true, false).fadeOut(500);
    });


});
/**
 * include/smoothscroll.js
 */
$(function() {
    // URLのアンカー（#以降の部分）を取得
    var urlHash = location.hash;

    // URLにアンカーが存在する場合
    if (urlHash) {
        var _nav = $('.gnav_area');
        if ($(urlHash)) {
            var $target = $(urlHash);
            var adjust = 0;
            _nav.addClass('fixed');
            adjust = 55;
            var targetOffset = $target.offset().top - adjust;
            $('html,body').animate({ scrollTop: targetOffset });
        }
    }

    $('a[href^=#]').not('a[href=#],a.noscrl').click(function() {
        $(this).blur();
        if ($(this).attr("href") == "#top") {
            // $('html,body').animate({scrollTop:0});
            $('html,body').animate({ scrollTop: 0, easing: 'ease-in-out' }, 600);
        } else {
            //console.log($target.offset().top);
            var $target = $(this.hash);
            var adjust = 0;
            if ($(".main_v_area").hasClass("fixed")) {
                if ($(window).width() >= 769) {
                    adjust = 80;
                } else {
                    adjust = 70;
                }
            } else {
                if ($(window).width() >= 769) {
                    adjust = 80;
                } else {
                    adjust = 70;
                }
            }
            var targetOffset = $target.offset().top - adjust;

            $('html,body').animate({ scrollTop: targetOffset, easing: 'ease-in-out' }, 800);
        }
        return false;
    });


    $('#back-top a').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
/**
 * include/ua.js
 */
//##UserAgent判別
var ua = window.ua = {}; //グローバル変数として設定
ua.name = window.navigator.userAgent.toLowerCase();
//IEバージョン判別
ua.isIE = (ua.name.indexOf('msie') >= 0 || ua.name.indexOf('trident') >= 0);
if (ua.isIE) {
    ua.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
    if (ua.verArray) {
        ua.ver = parseInt(ua.verArray[2], 10);
    }
}



//iOS
ua.isiPhone = ua.name.indexOf('iphone') >= 0;
ua.isiPod = ua.name.indexOf('ipod') >= 0;
ua.isiPad = ua.name.indexOf('ipad') >= 0;
ua.isiOS = (ua.isiPhone || ua.isiPod || ua.isiPad);
if (ua.isiOS) {
    ua.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(ua.name);
    if (ua.verArray) {
        ua.ver = parseInt(ua.verArray[2], 10);
    }
}

//Android
ua.isAndroid = ua.name.indexOf('android') >= 0;
if (ua.isAndroid) {
    ua.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(ua.name);
    if (ua.verArray) {
        ua.ver = parseInt(ua.verArray[2], 10);
    }
}

//タブレットorスマートフォン
ua.isTablet = (ua.isiPad || (ua.isAndroid && ua.name.indexOf('mobile') < 0));
ua.isMobile = (ua.isiPhone || ua.isiPod || (ua.isAndroid && ua.name.indexOf('mobile') >= 0));
/**
 * Created by hisanaga on 18/10/24.
 */
$(function() {
    var movieRatio = 16 / 9;
    var movieRatio1 = 9 / 16;

    function movieAdjust() {
        var adjustWidth = $(window).width();
        var adjustHeight = $(window).height();
        if (adjustWidth <= 1100) {
            adjustWidth = 1100;
        }
        if (adjustWidth / adjustHeight > movieRatio) {
            //adjustWidth = adjustHeight * movieRatio;
            $('#video-background').css({ width: (adjustWidth), height: (adjustWidth / movieRatio) });
        } else {
            $('#video-background').css({ width: (adjustHeight / movieRatio1), height: (adjustHeight) });
            $('#video-background').css({ marginLeft: 0 });
        }
    }

    function movieAdjust_sp() {
        var adjustWidth = $(window).width();
        var adjustHeight = $(window).height() * 0.4;
        console.log(adjustWidth);
        console.log(adjustHeight);
        if (adjustWidth / adjustHeight > movieRatio) {
            //adjustWidth = adjustHeight * movieRatio;
            $('#video-background').css({ width: (adjustWidth), height: (adjustWidth / movieRatio) });
            $('#video-background').css({ marginLeft: -(adjustHeight / movieRatio1) / 2 });
        } else {
            $('#video-background').css({ width: (adjustHeight / movieRatio1), height: (adjustHeight) });
            $('#video-background').css({ marginLeft: -(adjustHeight / movieRatio1) / 2 });
        }
    }

    $(window).on('load resize', function() {
        if ($(window).width() >= 769) {
            movieAdjust();
        } else {
            movieAdjust_sp();
        }

    });
});
/**
 * header
 */
$(function() {


});



/**
 * footer
 */
$(function() {

    //初期は非表示
    $(function() {
        //ナビゲーション固定
        var nav = $('.gnav_wrap');
        //navの位置
        var navTop = nav.offset().top;

        $(window).scroll(function() {
            //100pxスクロールしたら
            if ($(this).scrollTop() > navTop) {
                //フェードインで表示
                $('.btn_top_box').fadeIn();
            } else {
                $('.btn_top_box').fadeOut();
            }
        });
        //ここからクリックイベント
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });


    function converter(M) {
        var str = "",
            str_as = "";
        for (var i = 0; i < M.length; i++) {
            str_as = M.charCodeAt(i);
            str += String.fromCharCode(str_as + 1);
        }
        return str;
    }


    function mailwrite() {
        var ad = converter(String.fromCharCode(111, 113, 104, 117, 96, 98, 120, 63, 103, 49) + String.fromCharCode(110, 44, 104, 109, 98, 45, 105, 111));

        document.write("<a href=\"mai" + "lto:" + ad + "\">" + ad + "<\/a>");
    }

});

/**
 * index
 */
$(function() {
    TweenMax.set('.head_btn', { scale: 1, y: 10, opacity: 0 });
    TweenMax.set('.gnav_wrap_sp .nav_sns_list li', { scale: 1, y: 10, opacity: 0 });
    TweenMax.set('.gnav_wrap_sp .gnav_list li', { scale: 1, x: -60, opacity: 0 });
    //検索追尾用のトップへ戻るボタン調整
    if ($('.top_read').size()) {
        var readTop = $('.top_read').offset().top;
        //console.log(readTop);
    }
    $(window).scroll(function() {
        if ($('.btn_scroll').size()) {
            if ($(this).scrollTop() >= readTop) {
                $('.btn_scroll').stop().fadeOut(1500);
            } else {
                $('.btn_scroll').stop().fadeIn(1500);
            }
        }

        if ($(this).scrollTop() > 500) {
            //フェードインで表示
            $('.btn_top').stop().fadeIn(1500);
        } else {
            $('.btn_top').stop().fadeOut(1500);
        }
    });

    var timer = false;
    var lastWW = $(window).height();

    var _thisscroll = "";
    var touch_start_y;

    // タッチしたとき開始位置を保存しておく
    $(window).on('touchstart', function(event) {
        touch_start_y = event.originalEvent.changedTouches[0].screenY;
    });

    function handleTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }

    $('.head_btn').on('click', function() {
        $('.menu-trigger').toggleClass('active');
        _thisscroll = $(window).scrollTop();
        if ($('.menu-trigger').hasClass('active')) {
            $(".tl_h1").fadeOut();
            _thisscroll = $(window).scrollTop();
            $(window).on('touchmove.noscroll', function(event) {
                var current_y = event.originalEvent.changedTouches[0].screenY,
                    height = $('.gnav_wrap_sp').outerHeight(),
                    is_top = touch_start_y <= current_y && $('.gnav_wrap_sp')[0].scrollTop === 0,
                    is_bottom = touch_start_y >= current_y && $('.gnav_wrap_sp')[0].scrollHeight - $('.gnav_wrap_sp')[0].scrollTop === height;

                // スクロール対応モーダルの上端または下端のとき
                if (is_top || is_bottom) {
                    // スクロール禁止
                    document.addEventListener('touchmove', handleTouchMove, { passive: false });
                    //event.preventDefault();
                }

            });
            //$('header').stop(true, true).fadeIn(1600);
            $('.gnav_wrap_sp').stop(true, true).fadeIn(1600);
            TweenMax.staggerTo(".gnav_list li", 0.8, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.3 }, 0.1);
            TweenMax.staggerTo(".nav_sns_list li", 0.8, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.6 }, 0.1);
            if ($(".head_btn").hasClass("disp")) {
                $('.head_logo').stop(true, true).fadeOut(2500);
                $('.page_tl').stop(true, true).fadeOut(2500);
            }
            if (!$('.second.fixed').size()) {
                if ($('.head_logo').hasClass("disp")) {
                    $('.head_logo').stop(true, true).fadeOut(2500);
                    $('.page_tl').stop(true, true).fadeOut(2500);
                } else {
                    if ($('header.second').size()) {
                        $('header.second').addClass("disp");

                        $('.head_logo').stop(true, true).fadeOut(2500);
                        $('.page_tl').stop(true, true).fadeOut(2500);
                    }
                }
            }
            $('html, body').css({ overflow: 'hidden' });
        } else {
            $(".tl_h1").fadeIn();
            $('.gnav_wrap_sp').stop(true, true).fadeOut(1000);
            TweenMax.set('.gnav_list li', { scale: 1, x: -60, opacity: 0 });
            TweenMax.set('.nav_sns_list li', { scale: 1, y: 10, opacity: 0 });
            if ($('.head_logo').hasClass("disp")) {
                $('.head_logo').stop(true, true).fadeIn(1000);
                $('.page_tl').stop(true, true).fadeIn(1000);
            } else {
                if ($('header.second').size()) {
                    $('header.second').removeClass("disp");
                    $('.head_logo').stop(true, true).fadeIn(2500);
                    $('.page_tl').stop(true, true).fadeIn(2500);
                }
            }
            $('html').css({ overflow: 'auto' });
            document.removeEventListener('touchmove', handleTouchMove, { passive: false });
            //(window).off('touchmove.noscroll');
            //$( 'html, body' ).prop( { scrollTop: _thisscroll } );
            //setTimeout(function(){
            //	$(window).scrollTop(_thisscroll);
            //},100);
        }
        return false;
    });

    //ハンバーガーメニュー
    $('#menu-trigger').click(function() {
        $(this).toggleClass('active');
        $(".gnv_list_wrap_sp").slideToggle();
        if ($(this).hasClass('active')) {
            $('body').css('overflow-y', 'hidden');
            $("#subNaviSp.area > ul").fadeIn();
            $("html").addClass("is-open");
            $("header.second").addClass("menu-open");
        } else {
            $('body').css('overflow-y', 'auto')
            $("#subNaviSp.area > ul").fadeOut();
            $("html").removeClass("is-open");
            $("header.second").removeClass("menu-open");
        }
    });

    //サブメニューを開く
    $('.gnav_list01 > a').hover(function() {
        $('ul.sub_menu').slideToggle("fast");
    }, function() {});

    $('ul.sub_menu').hover(function() {}, function() {
        $('ul.sub_menu').slideToggle("fast");
    });

    $(".nav-toggle").click(function() {
        if ($(this).hasClass("close")) {
            $(this).removeClass("close");
            $("#nav").removeClass("active"); //メニューボタンの切り替え
            $("html").removeClass("is-open");
        } else {
            $(this).addClass("close"); //メニューボタンの切り替え
            $("#nav").addClass("active"); //メニューボタンの切り替え
            $("html").addClass("is-open");
        }
    });
    $(".rollover").rollover();


    /*============================================================
     // PC/SP image chage
     ============================================================*/
    $('.imghover').each(function() {
        var src_off = $(this).find('img').attr('src');
        var src_on = src_off.replace('_off', '_on');
        $('<img />').attr('src', src_on);
        $(this).hover(function() {
            $(this).find('img').attr('src', src_on);
        }, function() {
            $(this).find('img').attr('src', src_off);
        });
    });

    var win = $(window);
    var siteBreakpoint = 767;
    if (win.width() <= siteBreakpoint) {
        $('.spchange').each(function() {
            $(this).attr('src', $(this).attr('src').replace('_pc', '_sp'));
            $(this).attr('src', $(this).attr('src').replace('/pc/', '/sp/'));
        });
        //
        $('.lang_list-item .current').click(function() {
            $('.togle_menu_lang_wrap').toggleClass('active');
            return false;
        });

        $('.togle_menu_lang_inner .lang_close ').click(function() {
            $('.togle_menu_lang_wrap').toggleClass('active');
            return false;
        });
    }
    if (win.width() == 768) {
        $(".read.v1").css({ paddingTop: "17%" });
        $(".read.v2").css({ paddingTop: "19%" });
    }

    if (win.width() >= siteBreakpoint) {
        $('.spchange').each(function() {
            $(this).attr('src', $(this).attr('src').replace('_sp', '_pc'));
            $(this).attr('src', $(this).attr('src').replace('/sp/', '/pc/'));
        });
        //PC
        //$('.btn_contact').hover(function(){
        //$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off', '_on'));
        //}, function(){
        //if (!$(this).find('img').hasClass('currentPage')) {
        //	$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on', '_off'));
        //}
        //});
        //$('.btn:not(.btn_contact .btn)').hover(function(){
        //	$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off', '_on'));
        //}, function(){
        //	if (!$(this).find('img').hasClass('currentPage')) {
        //		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on', '_off'));
        //	}
        //});
        $('.imgover').hover(function() {
            console.log("log");
            $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
        }, function() {
            if (!$(this).hasClass('currentPage')) {
                $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
            }
        });
    }

    win.resize(function() {
        var siteBreakpoint = 768;
        if (win.width() < siteBreakpoint) {
            $('.spchange').each(function() {
                $(this).attr('src', $(this).attr('src').replace('_pc', '_sp'));
                $(this).attr('src', $(this).attr('src').replace('/pc/', '/sp/'));
            });
        }
        if (win.width() == siteBreakpoint) {
            $(".read.v1,.read.v2").css({ paddingTop: "17%" });
        }

        if (win.width() >= siteBreakpoint) {
            $('.spchange').each(function() {
                $(this).attr('src', $(this).attr('src').replace('_sp', '_pc'));
                $(this).attr('src', $(this).attr('src').replace('/sp/', '/pc/'));
            });
        }
    });

});


/**
 * index
 */
$(function() {

    // 項目が変更された時、条件によって色変更
    $('.select_wrap select').on('change', function() {
        $(this).css({ 'color': '#0c2041' });
    });

    //住所変更時のカラー変更
    $('.btn_zip').click(function() {
        $('.select_wrap4 select').css({ 'color': '#797979' });
    });

    $('.select_wrap select').change(function() {
        $('.select_wrap4 select').css({ 'color': '#797979' });
    });

    $("#_f_zip").focus(function() {}).blur(function() {
        $('.select_wrap select option').css({ 'color': 'rgb(12, 32, 65)' });
        $('.select_wrap select').css({ 'color': 'rgb(12, 32, 65)' });
    });

    function changezip() {
        $('.select_wrap select option').css({ 'color': 'rgb(12, 32, 65)' });
        $('.select_wrap select').css({ 'color': 'rgb(12, 32, 65)' });
    }

    $('.select_wrap select').change(function() {
        $('.select_wrap select option').css({ 'color': 'rgb(12, 32, 65)' });
        $('.select_wrap select').css({ 'color': 'rgb(12, 32, 65)' });
    });

    $(".select_wrap option:selected").css({ 'color': '#797979' });
    if (!$('.select_wrap').find('option:selected')) {
        $('.select_wrap select').css({ 'color': '#bbb' });
    }

    if ($('.select_wrap').find('option:selected').text() == "選択してください") {
        $('.select_wrap select').css({ 'color': '#9fa6b3' });
    } else {
        $('.select_wrap select').css({ 'color': 'rgb(12, 32, 65)' });
    }

    $(".checkbox01-input").click(function() {
        if ($(this).prop("checked")) {
            $('.btn_confirm').prop("disabled", false);
        } else {
            $('#div').removeClass("show");
            $('.btn_confirm').prop("disabled", true);
        }
    });


});


/**
 * index
 */
$(function() {

});


/**
 * index
 */
$(function() {

    var controller = new ScrollMagic.Controller();
    var movieRatio = 16 / 9;
    var movieRatio1 = 9 / 16;

    function movieAdjust() {
        var adjustWidth = $(window).width();
        var adjustHeight = $(window).height();
        if (adjustWidth / adjustHeight > movieRatio) {
            //adjustWidth = adjustHeight * movieRatio;
            $('#player').css({ width: (adjustWidth), height: (adjustWidth / movieRatio) });
            $('#player').css({ marginTop: -120 + "px" });
        } else {
            $('#player').css({ width: (adjustHeight / movieRatio1 + 0), height: (adjustHeight + 80) });
            if ($('#top').size()) {
                $('#player').css({ marginTop: -100 + "px" });
            }
        }
    }
    //動画表示部分
    movieAdjust();

    function anitop() {
        var timer = false;
        var lastWW = $(window).height();

        $move = true;
        var $win = $(window);
        var controller = new ScrollMagic.Controller();
        var $allMsg = $('h2.top_tl');
        $('h2.top_tl').children().andSelf().contents().each(function() {
            if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
            }
        });

        //TweenMax.set(myObject, {x:100, y:50, opacity:0});
        //TweenMax.set('.btn_top',{opacity:0});
        //var tween0 = TweenMax.staggerTo(".top_head_logo", 0.3, {
        //	x: 0,
        //	y: 0,
        //	scale: 1,
        //	opacity: 1,
        //	ease: Power2.easeOut,
        //	delay: 0.5
        //}, 0.05);
        //var tween123 = TweenMax.staggerTo(".btn_top", 0.3, {x:0,y:0,opacity: 1,ease: Power2.easeOut,delay:0.5},0.05);
        if (!$("#entry").size()) {
            var scene01 = new ScrollMagic.Scene({
                triggerElement: ".top_head_logo",
                triggerHook: 'onLeave'
            }).setPin(".top_head_logo").addTo(controller);
        }
        //var scene11 = new ScrollMagic.Scene({triggerElement: ".gnav_wrap",triggerHook: 'onLeave'}).setPin(".gnav_wrap").addTo(controller);
        //var scene41 = new ScrollMagic.Scene({
        //	triggerElement: ".mainv",
        //	triggerHook: 'onLeave'
        //}).setPin(".mainv").addTo(controller);
        //var scene43 = new ScrollMagic.Scene({
        //	triggerElement: ".gnav_list",
        //	triggerHook: 'onLeave'
        //}).setPin(".gnav_list").addTo(controller);
        if ($(".mainv_second").size()) {
            //var scene42 = new ScrollMagic.Scene({
            //	triggerElement: ".gnav_wrap",
            //	triggerHook: 'onLeave'
            //}).setPin(".mainv_second").addTo(controller);
            //var scene44 = new ScrollMagic.Scene({
            //	triggerElement: ".mainv_second",
            //	triggerHook: 'onLeave'
            //}).setPin(".mainv_second").addTo(controller);
        }
        //var scene51 = new ScrollMagic.Scene({triggerElement: ".top_sc1,",triggerHook: 'onEnter'}).setTween(tween123).addTo(controller);
        //var scene3 = new ScrollMagic.Scene({triggerElement: ".top_head_logo",triggerHook: 'onLeave'}).addClass("fixed").addTo(controller);
        var scene61 = new ScrollMagic.Scene({ triggerElement: ".mainv_front", duration: 920 })
            .on("progress", function(prog) { // 使いたいシーンに対してprogressイベントを設定します
                var p = prog.progress; // 0～1の値が入ってきます
                var t = p / 0.422;
                //var t = p / 0.152;
                console.log(t);
                $(".mainv").css({
                    //opacity: 4.5 - (t) //opacityをprogressの値に応じて変化させます。
                    opacity: 2.3 - (t)
                });
            }).addTo(controller);

        var scene62 = new ScrollMagic.Scene({ triggerElement: ".mainv_second_wrap", duration: 820 })
            .on("progress", function(prog) { // 使いたいシーンに対してprogressイベントを設定します
                var pp = prog.progress; // 0～1の値が入ってきます
                //var tt = pp / 0.422;
                var tt = pp / 0.182;
                console.log(tt);
                $(".mainv_second").css({
                    opacity: 3.8 - (tt) //opacityをprogressの値に応じて変化させます。
                });
            }).addTo(controller);

        if ($win.width() > 768) {
            //var tween01 = TweenMax.staggerTo(".top_head_entry", 0.3, {
            //	right: 0,
            //	y: 0,

            //	scale: 1,
            //	opacity: 1,
            //	ease: Power2.easeOut,
            //	delay: 0.5
            //}, 0.05);

            var scene02 = new ScrollMagic.Scene({
                triggerElement: ".top_head_entry",
                triggerHook: 'onLeave'
            }).setPin(".top_head_entry").addTo(controller);

            var scene03 = new ScrollMagic.Scene({
                triggerElement: ".gnav_wrap",
                triggerHook: 'onLeave'
            }).setPin(".gnav_wrap").addTo(controller);
        } else {

            //var tween01 = TweenMax.staggerTo(".top_head_entry", 0.3, {
            //	x: 0,
            //	y: 0,
            //	scale: 1,
            //	opacity: 1,
            //	ease: Power2.easeOut,
            //	delay: 0.5
            //}, 0.05);

            var scene02 = new ScrollMagic.Scene({
                triggerElement: ".top_head_entry",
                triggerHook: 'onEnter'
            }).setPin(".top_head_entry").addTo(controller);

            //var scene03 = new ScrollMagic.Scene({
            //	triggerElement: ".gnav_wrap",
            //	triggerHook: 'onEnter'
            //}).setPin(".gnav_wrap").addTo(controller);
        }
    }
    var timer = false;
    var lastWW = $(window).height();
    anitop();
    //メニュー
    var $win = $(window);
    if ($win.width() > 768) {
        TweenMax.set(".gnav_list li", {
            opacity: 0,
            y: 12
        });
        $('.movie').attr("src", ($('.movie').data("spurl")));
    }

    //ロゴ
    if (!$('#entry').size()) {
        TweenMax.set(".top_head_logo", {
            opacity: 0
        });
        TweenMax.set(".top_head_logo a", {
            opacity: 0,
            x: -230
        });
    }

    if (!ua.isMobile) {
        //エントリーボタン
        TweenMax.set(".top_head_entry", {
            opacity: 0,
        });
        TweenMax.set(".top_head_entry a", {
            opacity: 0,
            x: 230
        });
    } else {
        TweenMax.set(".top_head_entry", {
            opacity: 0,
            y: 60
        });
        TweenMax.set(".top_head_entry a", {
            opacity: 0,
            x: 60
        });
    }

    TweenMax.set(".top_read_inner span", {
        opacity: 0,
        paddingTop: 6,
        x: -12
    });
    TweenMax.set(".btn_scroll", {
        opacity: 0
    });

    //Top1
    TweenMax.set('.top_sc1 .top_tl span', { scale: 1, y: 28, opacity: 0 });
    TweenMax.set('.top_sc1 .btn', { scale: 1, x: -30, opacity: 0 });
    TweenMax.set('.top_sc1 .top_txt', { scale: 1, x: -30, opacity: 0 });
    TweenMax.set('.top_sc1 .sc_inner', { scale: 1, x: -30, opacity: 0 });

    //Top2
    TweenMax.set('.top_sc2 .top_tl span', { scale: 1, top: 2, y: 8, opacity: 0 });
    TweenMax.set('.top_sc2 .top_txt', { scale: 1, y: -30, opacity: 0 });
    TweenMax.set('.top_sc2 .btn', { scale: 1, y: -30, opacity: 0 });
    TweenMax.set('.top_sc2', { scale: 1, y: 30, opacity: 0 });

    //Top3
    TweenMax.set('.top_sc3 .top_tl span', { scale: 1, y: 28, opacity: 0 });
    TweenMax.set('.top_sc3 .btn', { scale: 1, x: 30, opacity: 0 });
    TweenMax.set('.top_sc3 .top_txt', { scale: 1, x: 30, opacity: 0 });
    TweenMax.set('.top_sc3 .sc_inner', { scale: 1, x: 30, opacity: 0 });


    //Top4
    TweenMax.set('.top_sc4 .top_tl span', { scale: 1, y: 28, opacity: 0 });
    TweenMax.set('.top_sc4 .btn', { scale: 1, x: -30, opacity: 0 });
    TweenMax.set('.top_sc4 .top_txt', { scale: 1, x: -30, opacity: 0 });
    TweenMax.set('.top_sc4 .sc_inner', { scale: 1, x: -30, opacity: 0 });

    $(window).on('load', function() {
        TweenMax.to(".mainv_inner", 0.6, { opacity: 1, ease: Power2.easeOut, delay: 0.5 });
        var $win = $(window);


        //リード文
        var tween01 = TweenMax.staggerTo(".top_read_inner span", 0.6, { paddingTop: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.4 }, 0.05);
        var scene01 = new ScrollMagic.Scene({ triggerElement: ".top_read_inner", triggerHook: 0.7 }).setTween(tween01).addTo(controller);

        //セクション１
        var tween11 = TweenMax.staggerTo(".top_sc1 .top_tl span", 0.6, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.08);
        var tween12 = TweenMax.staggerTo(".top_sc1 .btn", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.7 }, 0.05);
        var tween13 = TweenMax.staggerTo(".top_sc1 .top_txt", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        var tween14 = TweenMax.staggerTo(".top_sc1 .sc_inner", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        var scene11 = new ScrollMagic.Scene({ triggerElement: ".top_sc1", triggerHook: 0.9 }).setTween(tween11).addTo(controller);
        var scene12 = new ScrollMagic.Scene({ triggerElement: ".top_sc1", triggerHook: 0.9 }).setTween(tween12).addTo(controller);
        var scene13 = new ScrollMagic.Scene({ triggerElement: ".top_sc1", triggerHook: 0.9 }).setTween(tween13).addTo(controller);
        var scene14 = new ScrollMagic.Scene({ triggerElement: ".top_sc1", triggerHook: 0.9 }).setTween(tween14).addTo(controller);

        //セクション１
        var tween21 = TweenMax.staggerTo(".top_sc2 .top_tl span", 0.6, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.08);
        var tween22 = TweenMax.staggerTo(".top_sc2 .btn", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.7 }, 0.05);
        var tween23 = TweenMax.staggerTo(".top_sc2 .top_txt", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        var tween24 = TweenMax.staggerTo(".top_sc2", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        var scene21 = new ScrollMagic.Scene({ triggerElement: ".top_sc2", triggerHook: 0.9 }).setTween(tween21).addTo(controller);
        var scene22 = new ScrollMagic.Scene({ triggerElement: ".top_sc2", triggerHook: 0.9 }).setTween(tween22).addTo(controller);
        var scene23 = new ScrollMagic.Scene({ triggerElement: ".top_sc2", triggerHook: 0.9 }).setTween(tween23).addTo(controller);
        var scene24 = new ScrollMagic.Scene({ triggerElement: ".top_sc2", triggerHook: 0.9 }).setTween(tween24).addTo(controller);

        var tween31 = TweenMax.staggerTo(".top_sc3 .top_tl span", 0.6, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.08);
        var tween32 = TweenMax.staggerTo(".top_sc3 .btn", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.7 }, 0.05);
        var tween33 = TweenMax.staggerTo(".top_sc3 .top_txt", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        var tween34 = TweenMax.staggerTo(".top_sc3 .sc_inner", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        var scene31 = new ScrollMagic.Scene({ triggerElement: ".top_sc3", triggerHook: 0.9 }).setTween(tween31).addTo(controller);
        var scene32 = new ScrollMagic.Scene({ triggerElement: ".top_sc3", triggerHook: 0.9 }).setTween(tween32).addTo(controller);
        var scene33 = new ScrollMagic.Scene({ triggerElement: ".top_sc3", triggerHook: 0.9 }).setTween(tween33).addTo(controller);
        var scene34 = new ScrollMagic.Scene({ triggerElement: ".top_sc3", triggerHook: 0.9 }).setTween(tween34).addTo(controller);

        var tween41 = TweenMax.staggerTo(".top_sc4 .top_tl span", 0.6, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.08);
        var tween42 = TweenMax.staggerTo(".top_sc4 .btn", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.7 }, 0.05);
        var tween43 = TweenMax.staggerTo(".top_sc4 .top_txt", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        var tween44 = TweenMax.staggerTo(".top_sc4 .sc_inner", 0.9, { x: 0, y: 0, scale: 1, opacity: 1, ease: Power2.easeOut, delay: 0.5 }, 0.05);
        var scene41 = new ScrollMagic.Scene({ triggerElement: ".top_sc4", triggerHook: 0.9 }).setTween(tween41).addTo(controller);
        var scene42 = new ScrollMagic.Scene({ triggerElement: ".top_sc4", triggerHook: 0.9 }).setTween(tween42).addTo(controller);
        var scene43 = new ScrollMagic.Scene({ triggerElement: ".top_sc4", triggerHook: 0.9 }).setTween(tween43).addTo(controller);
        var scene44 = new ScrollMagic.Scene({ triggerElement: ".top_sc4", triggerHook: 0.9 }).setTween(tween44).addTo(controller);
        if ($win.width() > 768) {
            //PCだったら
            //エントリー以外のページ
            if (!$('#entry').size()) {
                TweenMax.to(".top_head_entry a", 0.6, {
                    x: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 1.7
                });
                TweenMax.to(".top_head_logo a", 0.6, {
                    x: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 1.5
                });
            }
            //全ページに適用
            TweenMax.to(".top_head_entry", 1, {
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
                delay: 1.2
            });
            TweenMax.to(".top_head_logo", 1, {
                opacity: 1,
                ease: Power2.easeOut,
                delay: 1.2
            });
            TweenMax.to(".mainv_front_inner .read", 1.2, {
                top: "50%",
                opacity: 1,
                ease: Power2.easeOut,
                delay: 2.3
            });
        } else {
            //SPだったら
            TweenMax.to("header", 0.6, {
                opacity: 1,
                ease: Power2.easeOut,
                delay: 0.2
            });
            TweenMax.to(".head_btn", 0.6, {
                x: 0,
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
                delay: 0.2
            });
            //エントリー以外のページ
            if (!$('#entry').size() && !$('.job_sc').size()) {

                TweenMax.to(".top_head_entry", 0.6, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 1.8
                });
                TweenMax.to(".top_head_entry a", 0.4, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 2
                });

                TweenMax.to(".top_head_logo", 0.6, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 0.8
                });
                TweenMax.to(".top_head_logo a", 0.4, {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 1
                });
            } else {
                //全ページ適用
                TweenMax.to(".top_head_logo", 0.5, {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 0.6
                });
                TweenMax.to(".top_head_logo a", 0.3, {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 1
                });
                TweenMax.to(".top_head_entry", 0.6, {
                    x: 0,
                    y: 60,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 0.6
                });
            }
            //TOPページのみ
            TweenMax.to(".top_read", 1.2, {
                opacity: 1,
                ease: Power2.easeOut,
                delay: 1.6
            });
            //第二回層のみ
            TweenMax.to(".mainv_front_inner .read", 1.2, {
                top: 290,
                opacity: 1,
                ease: Power2.easeOut,
                delay: 1.3
            });
        }
        TweenMax.to(".btn_scroll", 1.2, {
            opacity: 1,
            ease: Power2.easeOut,
            delay: 2.2
        });
        if ($win.width() > 768) {
            if ($('.recruit_top').size()) {
                TweenMax.staggerTo(".gnav_list li", 0.3, {
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 1.6
                }, 0.12);
            } else {
                TweenMax.staggerTo(".gnav_list li", 0.3, {
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: 0.6
                }, 0.12);
            }
        }
    });

    $(window).on('load', function() {
        if (!ua.isMobile) {
            var currentWW = $(window).height();
            if (lastWW != currentWW) {
                if (timer !== false) {
                    clearTimeout(timer);
                };
                timer = setTimeout(function() {
                    //location.reload();
                    anitop();
                }, 500);
            }
        }
    });



});


/**
 * footer
 */
$(function() {

    //modalの処理
    $(".job_sc_inner .more a").click(function() {
        $('html').css({ overflow: 'hidden' });
        console.log($(this).data('id'));
        $("." + $(this).data('id')).fadeIn();
        $(".modal").fadeIn();
        $('.btn_close').show();
        $('.modal').animate({ scrollTop: 0, easing: 'ease-in-out' }, 600);
        $(document).on("click", '.btn_close').click(function() {
            $(".modal").fadeOut();
            $('.btn_close').hide();
            $(".overview").fadeOut();
            $('html').css({ overflow: 'auto' });
        });

        $('.btn_close').click(function() {
            $(this).hide();
            $(".modal").fadeOut();
            $(".overview").fadeOut();
            $('html').css({ overflow: 'auto' });
        });
        return false;
    });

});

/**
 * index PCのみ
 */
$(function() {

    //実績一覧
    var slider1 = $('.gallery_sc .slider_gallery ul').bxSlider({
        slideWidth: 1000,
        slideMargin: 0,
        speed: 1000,
        pager: false,
        controls: true,
        infiniteLoop: true,
        easing: 'ease-in-out',
        touchEnabled: true,
        oneToOneTouch: true,
        nextText: ' ',
        prevText: ' ',
        nextSelector: ".gallery_sc .next_arrow",
        prevSelector: ".gallery_sc .prev_arrow",
        onSliderLoad: function(index) {
            // write code here
        },
    });

    var slider2 = $('.gallery_sc_sp .slider_gallery ul').bxSlider({
        slideWidth: 1000,
        slideMargin: 0,
        speed: 1000,
        pager: false,
        controls: true,
        infiniteLoop: true,
        easing: 'ease-in-out',
        touchEnabled: true,
        oneToOneTouch: true,
        nextText: ' ',
        prevText: ' ',
        nextSelector: ".gallery_sc_sp .next_arrow",
        prevSelector: ".gallery_sc_sp .prev_arrow",
        onSliderLoad: function(index) {
            // write code here
        },
    });
});



/**
 * index SPのみ
 */
$(function() {
    if ($('#recruit_page').size()) {
        $(window).scroll(function() {
            //100pxスクロールしたら
            if ($(this).scrollTop() > 100) {
                //フェードインで表示
                $('header').addClass("fixed");
            } else {
                $('header').removeClass("fixed");
            }
        });
    }

    if ($('.recruit_second').size()) {
        $(window).scroll(function() {
            //100pxスクロールしたら
            if ($(this).scrollTop() > 100) {
                //フェードインで表示
                $('header').addClass("fixed");
            } else {
                $('header').removeClass("fixed");
            }
        });
    }
});