! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = "1.11.0",
        n = function(a, b) {
            return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase() };
    n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() {
            return d.call(this) }, get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) }, pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b }, each: function(a, b) {
            return n.each(this, a, b) }, map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b) })) }, slice: function() {
            return this.pushStack(d.apply(this, arguments)) }, first: function() {
            return this.eq(0) }, last: function() {
            return this.eq(-1) }, eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function() {
            return this.prevObject || this.constructor(null) }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) {
            throw new Error(a) }, noop: function() {}, isFunction: function(a) {
            return "function" === n.type(a) }, isArray: Array.isArray || function(a) {
            return "array" === n.type(a) }, isWindow: function(a) {
            return null != a && a == a.window }, isNumeric: function(a) {
            return a - parseFloat(a) >= 0 }, isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0 }, isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) {
                return !1 }
            if (l.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b) }, type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a }, globalEval: function(b) { b && n.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) }, camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r) }, nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a }, trim: k && !k.call("\ufeff\xa0") ? function(a) {
            return null == a ? "" : k.call(a) } : function(a) {
            return null == a ? "" : (a + "").replace(o, "") }, makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c }, inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c }
            return -1 }, merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a }, grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e }, map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i) }, guid: 1, proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || n.guid++, e) : void 0 }, now: function() {
            return +new Date }, support: l }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { h["[object " + b + "]"] = b.toLowerCase() });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function(a, b) {
                return a === b && (j = !0), 0 },
            A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1 },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L.replace("w", "w*") + ")"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) };
        try { G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType } catch (cb) { G = { apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) return d;
                            if (g.id === h) return d.push(g), d } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d } else {
                        if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) { m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",") }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)), d } catch (w) {} finally { p || b.removeAttribute("id") } } }
            return xb(a.replace(P, "$1"), b, d, e) }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b }

        function fb(a) {
            return a[s] = !0, a }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b) } catch (c) {
                return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a } }

        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a } }

        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a }
        c = db.support = {}, f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1 }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() { k() }, !1) : g.attachEvent && g.attachEvent("onunload", function() { k() })), c.attributes = gb(function(a) {
                return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [] } }, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d }
                return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0 }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) { a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked") }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:") })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) { c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O) }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, z = b ? function(a, b) {
                if (a === b) return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0 }, e) : l }, db.matches = function(a, b) {
            return db(a, null, null, b) }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return db(b, l, null, [a]).length > 0 }, db.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b) }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a) }, db.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1) }
            return i = null, a }, e = db.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c }, d = db.selectors = { cacheLength: 50, createPseudo: fb, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a }, PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function() {
                        return !0 } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) { l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" }
                                return !0 }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) { k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) { k[a] = [u, n, m];
                                        break } } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) {
                        return e(a, 0, c) }) : e } }, pseudos: { not: fb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop() } }), has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0 } }), contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1 } }), target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id }, root: function(a) {
                    return a === m }, focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) {
                    return a.disabled === !1 }, disabled: function(a) {
                    return a.disabled === !0 }, checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) {
                    return !d.pseudos.empty(a) }, header: function(a) {
                    return X.test(a.nodeName) }, input: function(a) {
                    return W.test(a.nodeName) }, button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b }, text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: lb(function() {
                    return [0] }), last: lb(function(a, b) {
                    return [b - 1] }), eq: lb(function(a, b, c) {
                    return [0 > c ? c + b : c] }), even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a }), odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a }), lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a }), gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a }) } }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = jb(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = kb(b);

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                if (!c) break }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0) }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0 } } }

        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) { j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                    return a === b }, i, !0), l = qb(function(a) {
                    return I.call(b, a) > -1 }, i, !0), m = [function(a, c, d) {
                    return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({ value: " " === a[j - 2].type ? "*" : "" })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a)) }
                    m.push(c) }
            return rb(m) }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || .1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) { n = 0;
                            while (o = a[n++])
                                if (o(m, g, i)) { j.push(m);
                                    break }
                            k && (u = w) }
                        c && ((m = !o && m) && p--, f && r.push(m)) }
                    if (p += q, c && q !== p) { n = 0;
                        while (o = b[n++]) o(r, s, g, i);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = E.call(j));
                            s = sb(s) }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j) }
                    return k && (u = w, h = t), r };
            return c ? fb(f) : f }
        g = db.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) { b || (b = ob(a)), c = b.length;
                while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d)) }
            return f };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
            return c }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length) }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
                        break } } }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div")) }), gb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || hb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || hb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), gb(function(a) {
            return null == a.getAttribute("disabled") }) || hb(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), db }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a) }
        return n.grep(a, function(a) {
            return n.inArray(a, b) >= 0 !== c }) }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType })) }, n.fn.extend({ find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0 }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function(a) {
            return this.pushStack(x(this, a || [], !1)) }, not: function(a) {
            return this.pushStack(x(this, a || [], !0)) }, is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length } });
    var y, z = a.document,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        B = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this }
                if (d = z.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return y.find(a);
                    this.length = 1, this[0] = d }
                return this.context = z, this.selector = a, this }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = { children: !0, contents: !0, next: !0, prev: !0 };
    n.extend({ dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d }, sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c } }), n.fn.extend({ has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0 }) }, closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c);
                        break }
            return this.pushStack(f.length > 1 ? n.unique(f) : f) }, index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b)))) }, addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function E(a, b) { do a = a[b]; while (a && 1 !== a.nodeType);
        return a }
    n.each({ parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null }, parents: function(a) {
            return n.dir(a, "parentNode") }, parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c) }, next: function(a) {
            return E(a, "nextSibling") }, prev: function(a) {
            return E(a, "previousSibling") }, nextAll: function(a) {
            return n.dir(a, "nextSibling") }, prevAll: function(a) {
            return n.dir(a, "previousSibling") }, nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c) }, siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) {
            return n.sibling(a.firstChild) }, contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var F = /\S+/g,
        G = {};

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) { a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1;
                        break }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable()) },
            k = { add: function() {
                    if (h) {
                        var d = h.length;! function f(b) { n.each(b, function(b, c) {
                                var d = n.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) }
                    return this }, remove: function() {
                    return h && n.each(arguments, function(a, c) {
                        var d;
                        while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function() {
                    return h = [], e = 0, this }, disable: function() {
                    return h = i = c = void 0, this }, disabled: function() {
                    return !h }, lock: function() {
                    return i = void 0, c || k.disable(), this }, locked: function() {
                    return !i }, fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function() {
                    return k.fireWith(this, arguments), this }, fired: function() {
                    return !!d } };
        return k }, n.extend({ Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() {
                        return c }, always: function() {
                        return e.done(arguments).fail(arguments), this }, then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) { n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) {
                        return null != a ? n.extend(a, d) : d } },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise() } });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) }, ready: function(a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready")) } } });

    function J() { z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K)) }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready()) }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
        else { z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try { c = null == a.frameElement && z.documentElement } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!n.isReady) {
                    try { c.doScroll("left") } catch (a) {
                        return setTimeout(e, 50) }
                    J(), n.ready() } }() }
        return I.promise(b) };
    var L = "undefined",
        M;
    for (M in n(l)) break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c = z.getElementsByTagName("body")[0];
            c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null) }),
        function() {
            var a = z.createElement("div");
            if (null == l.deleteExpando) { l.deleteExpando = !0;
                try { delete a.test } catch (b) { l.deleteExpando = !1 } }
            a = null }(), n.acceptData = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) {}
                n.data(a, b, c) } else c = void 0 }
        return c }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0 }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f } }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null) } } }
    n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a) }, data: function(a, b, c) {
            return R(a, b, c) }, removeData: function(a, b) {
            return S(a, b) }, _data: function(a, b, c) {
            return R(a, b, c, !0) }, _removeData: function(a, b) {
            return S(a, b, !0) } }), n.fn.extend({ data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) { c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0) }
                return e }
            return "object" == typeof a ? this.each(function() { n.data(this, a) }) : arguments.length > 1 ? this.each(function() { n.data(this, a, b) }) : f ? P(f, a, n.data(f, a)) : void 0 }, removeData: function(a) {
            return this.each(function() { n.removeData(this, a) }) } }), n.extend({ queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function() { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) } }), n.fn.extend({ queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function(a) {
            return this.each(function() { n.dequeue(this, a) }) }, clearQueue: function(a) {
            return this.queue(a || "fx", []) }, promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b) } });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) },
        W = n.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) { e = !0;
                for (h in c) n.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        X = /^(?:checkbox|radio)$/i;! function() {
        var a = z.createDocumentFragment(),
            b = z.createElement("div"),
            c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() { l.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == l.deleteExpando) { l.deleteExpando = !0;
            try { delete b.test } catch (d) { l.deleteExpando = !1 } }
        a = b = c = null }(),
    function() {
        var b, c, d = z.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null }();
    var Y = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/,
        ab = /^([^.]*)(?:\.(.+)|)$/;

    function bb() {
        return !0 }

    function cb() {
        return !1 }

    function db() {
        try {
            return z.activeElement } catch (a) {} }
    n.event = { global: {}, add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null } }, remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) { b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]) } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events")) } }, trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a) }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) { l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try { d[p]() } catch (r) {}
                    n.event.triggered = void 0, l && (d[g] = l) }
                return b.result } }, dispatch: function(a) { a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) }
                return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({ elem: i, handlers: e }) }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) {
                    return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && (a.originalEvent.returnValue = a.result) } } }, simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = z.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c)) }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { isDefaultPrevented: cb, isPropagationStopped: cb, isImmediatePropagationStopped: cb, preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = bb, this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.submitBubbles || (n.event.special.submit = { setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) { a._submit_bubble = !0 }), n._data(c, "submitBubbles", !0)) }) }, postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit") } }), l.changeBubbles || (n.event.special.change = { setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), n.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0) })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0) }), n._data(b, "changeBubbles", !0)) }) }, handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName) } }), l.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a), !0) };
        n.event.special[b] = { setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1) }, teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b)) } } }), n.fn.extend({ on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return n().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() { n.event.add(this, a, d, c, b) }) }, one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1) }, off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() { n.event.remove(this, a, c, b) }) }, trigger: function(a, b) {
            return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0 } });

    function eb(a) {
        var b = fb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g,
        hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kb = /<([\w:]+)/,
        lb = /<tbody/i,
        mb = /<|&#?\w+;/,
        nb = /<(?:script|style|link)/i,
        ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        tb = eb(z),
        ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f }

    function wb(a) { X.test(a.type) && (a.defaultChecked = a.checked) }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) { delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]) }
            g.data && (g.data = n.extend({}, g.data)) } }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) { e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando) } "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } }
    n.extend({ clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
                else Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f }, buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
                    else if (mb.test(f)) { h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                while (e--) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) { f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) }
                n.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild } else p.push(b.createTextNode(f));
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) { e = 0;
                    while (f = h[e++]) pb.test(f.type || "") && c.push(f) }
            return h = null, o }, cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f)) } } }), n.fn.extend({ text: function(a) {
            return W(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a)) }, null, a, arguments.length) }, append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a) } }) }, prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() {
            return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() {
            return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this }, empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0) }
            return this }, clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b) }) }, html: function(a) {
            return W(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) { a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function(a) {
            return this.remove(a, !0) }, domManip: function(a, b) { a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                o = k - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b) });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null }
            return this } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e) } });
    var Db, Eb = {};

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e }

    function Gb(a) {
        var b = z,
            c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c }! function() {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null }
            return b } }();
    var Hb = /^margin/,
        Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : z.documentElement.currentStyle && (Jb = function(a) {
        return a.currentStyle }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Mb(a, b) {
        return { get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } }! function() {
        var b, c, d, e, f, g, h = z.createElement("div"),
            i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, { reliableHiddenOffsets: function() {
                if (null != c) return c;
                var a, b, d, e = z.createElement("div"),
                    f = z.getElementsByTagName("body")[0];
                if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c }, boxSizing: function() {
                return null == d && k(), d }, boxSizingReliable: function() {
                return null == e && k(), e }, pixelPosition: function() {
                return null == f && k(), f }, reliableMarginRight: function() {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) return;
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c) }
                return g } });

        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? { zoom: 1 } : {}, function() { d = 4 === c.offsetWidth }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || { width: "4px" }).width), h.removeChild(b), c = h = null) } }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e };
    var Nb = /alpha\([^)]*\)/i,
        Ob = /opacity\s*=\s*([^)]*)/,
        Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"),
        Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = { position: "absolute", visibility: "hidden", display: "block" },
        Tb = { letterSpacing: 0, fontWeight: 400 },
        Ub = ["Webkit", "O", "Moz", "ms"];

    function Vb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ub.length;
        while (e--)
            if (b = Ub[e] + c, b in a) return b;
        return d }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g }

    function Zb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px" }
    n.extend({ cssHooks: { opacity: { get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = "", i[b] = c } catch (j) {} } }, css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f } }), n.each(["height", "width"], function(a, b) { n.cssHooks[b] = { get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
                    return Zb(a, b, d) }) : Zb(a, b, d) : void 0 }, set: function(a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = { get: function(a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e) } }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, { display: "inline-block" }, Kb, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e } }, Hb.test(a) || (n.cssHooks[a + b].set = Xb) }), n.fn.extend({ css: function(a, b) {
            return W(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function() {
            return Wb(this, !0) }, hide: function() {
            return Wb(this) }, toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { V(this) ? n(this).show() : n(this).hide() }) } });

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e) }
    n.Tween = $b, $b.prototype = { constructor: $b, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this) }, run: function(a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this } }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = { _default: { get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) {
            return a }, swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2 } }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
        cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        ec = [jc],
        fc = { "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = cc.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] };

    function gc() {
        return setTimeout(function() { _b = void 0 }), _b = n.now() }

    function hc(a, b) {
        var c, d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, m.always(function() { m.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0 }
                o[d] = r && r[d] || n.style(a, d) }
        if (!n.isEmptyObject(o)) { r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() { n(a).hide() }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b]) });
            for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function lc(a, b, c) {
        var d, e, f = 0,
            g = ec.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() {
                if (e) return !1;
                for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: _b || gc(), duration: c.duration, tweens: [], createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d }, stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }),
            k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++)
            if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    n.Animation = n.extend(lc, { tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b) }, prefilter: function(a, b) { b ? ec.unshift(a) : ec.push(a) } }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = lc(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0) };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c) };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a) }) }, finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e) } }), n.each({ slideDown: hc("show"), slideUp: hc("hide"), slideToggle: hc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), _b = void 0 }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { ac || (ac = setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { clearInterval(ac), ac = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) } }) },
        function() {
            var a, b, c, d, e = z.createElement("div");
            e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null }();
    var mc = /\r/g;
    n.fn.extend({ val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a) } }, select: { get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e } } } }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0 } }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value }) });
    var nc, oc, pc = n.expr.attrHandle,
        qc = /^(?:checked|selected)$/i,
        rc = l.getSetAttribute,
        sc = l.input;
    n.fn.extend({ attr: function(a, b) {
            return W(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) {
            return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({ attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b)) }, removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d) }, attrHooks: { type: { set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b } } } } }), oc = { set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e } : function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null } }), sc && rc || (n.attrHooks.value = { set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c) } }), rc || (nc = { set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, pc.id = pc.name = pc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0 }, set: nc.set }, n.attrHooks.contenteditable = { set: function(a, b, c) { nc.set(a, "" === b ? !1 : b, c) } }, n.each(["width", "height"], function(a, b) { n.attrHooks[b] = { set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), l.style || (n.attrHooks.style = { get: function(a) {
            return a.style.cssText || void 0 }, set: function(a, b) {
            return a.style.cssText = b + "" } });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        uc = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) {
            return W(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1 } } } }), l.hrefNormalized || n.each(["href", "src"], function(a, b) { n.propHooks[b] = { get: function(a) {
                return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = { get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({ addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, this.className)) });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) { f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g) }
            return this }, removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, this.className)) });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) { f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g) }
            return this }, toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) { n(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "") }) }, hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
            return !1 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) {
            return this.on(a, null, b, c) }, unbind: function(a, b) {
            return this.off(a, null, b) }, delegate: function(a, b, c, d) {
            return this.on(b, a, c, d) }, undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
    var wc = n.now(),
        xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b) }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c };
    var zc, Ac, Bc = /#.*$/,
        Cc = /([?&])_=[^&]*/,
        Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fc = /^(?:GET|HEAD)$/,
        Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ic = {},
        Jc = {},
        Kc = "*/".concat("*");
    try { Ac = location.href } catch (Lc) { Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href }
    zc = Hc.exec(Ac.toLowerCase()) || [];

    function Mc(a) {
        return function(b, c) { "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function Nc(a, b, c, d) {
        var e = {},
            f = a === Jc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a }

    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g);
                    break }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) { f = g;
                    break }
                d || (d = g) }
            f = f || d }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } }
        return { state: "success", data: b } }
    n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ac, type: "GET", isLocal: Ec.test(zc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a) }, ajaxPrefilter: Mc(Ic), ajaxTransport: Mc(Jc), ajax: function(a, b) { "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = { readyState: 0, getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) { j = {};
                                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2] }
                            b = j[a.toLowerCase()] }
                        return null == b ? null : b }, getAllResponseHeaders: function() {
                        return 2 === t ? f : null }, setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this }, statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this }, abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this } };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) { v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() { v.abort("timeout") }, k.timeout));
                try { t = 1, i.send(r, x) } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w) } } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop"))) }
            return v }, getJSON: function(a, b, c) {
            return n.get(a, b, c, "json") }, getScript: function(a, b) {
            return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) {
            return this.on(b, a) } }), n._evalUrl = function(a) {
        return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) { n(this).wrapAll(a.call(this, b)) });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a }).append(this) }
            return this }, wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) { n(this).wrapInner(a.call(this, b)) } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() {
            return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display")) }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a) };
    var Rc = /%20/g,
        Sc = /\[\]$/,
        Tc = /\r?\n/g,
        Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) { c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Wc(a + "[" + e + "]", b[e], c, d) }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+") }, n.fn.extend({ serialize: function() {
            return n.param(this.serializeArray()) }, serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a)) }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return { name: b.name, value: a.replace(Tc, "\r\n") } }) : { name: b.name, value: c.replace(Tc, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c() } : $c;
    var Xc = 0,
        Yc = {},
        Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Yc) Yc[a](void 0, !0) }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return { send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
                            else { j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try { i = f.statusText } catch (k) { i = "" }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404 }
                        j && d(h, i, j, f.getAllResponseHeaders()) }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b() }, abort: function() { b && b(void 0, !0) } } } });

    function $c() {
        try {
            return new a.XMLHttpRequest } catch (b) {} }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) {
                return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return { send: function(d, e) { b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function() { b && b.onload(void 0, !0) } } } });
    var ad = [],
        bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes)) };
    var cd = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({ url: a, type: f, dataType: "html", data: b }).done(function(a) { e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, e || [a.responseText, b, a]) }), this }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem }).length };
    var dd = a.document.documentElement;

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    n.offset = { setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) });
            var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function() {
            if (this[0]) {
                var a, b, c = { top: 0, left: 0 },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) } } }, offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || dd }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return W(this, function(a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function(a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.size = function() {
        return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n });
    var fd = a.jQuery,
        gd = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n }, typeof b === L && (a.jQuery = a.$ = n), n });
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3") }(jQuery), + function(t) { "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.modal"),
                r = t.extend({}, s.DEFAULTS, o.data(), "object" == typeof e && e);
            n || o.data("bs.modal", n = new s(this, r)), "string" == typeof e ? n[e](i) : r.show && n.show(i) }) }
    var s = function(e, s) { this.options = s, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    s.VERSION = "3.3.6", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, s.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, s.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t) }, s.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { i.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var n = t.Event("shown.bs.modal", { relatedTarget: e });
            o ? i.$dialog.one("bsTransitionEnd", function() { i.$element.trigger("focus").trigger(n) }).emulateTransitionEnd(s.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(n) })) }, s.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal()) }, s.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, s.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, s.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, s.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, s.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, s.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in");
            var r = function() { i.removeBackdrop(), e && e() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : r() } else e && e() }, s.prototype.handleUpdate = function() { this.adjustDialog() }, s.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, s.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, s.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left) }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, s.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth) }, s.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, s.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = s, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(s) {
        var i = t(this),
            o = i.attr("href"),
            n = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = n.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(o) && o }, n.data(), i.data());
        i.is("a") && s.preventDefault(), n.one("show.bs.modal", function(t) { t.isDefaultPrevented() || n.one("hidden.bs.modal", function() { i.is(":visible") && i.trigger("focus") }) }), e.call(n, r, this) }) }(jQuery);
(function() { "use strict";
    var t = this,
        i = t.Chart,
        e = function(t) { this.canvas = t.canvas, this.ctx = t;
            var i = function(t, i) {
                    return t["offset" + i] ? t["offset" + i] : document.defaultView.getComputedStyle(t).getPropertyValue(i) },
                e = this.width = i(t.canvas, "Width"),
                n = this.height = i(t.canvas, "Height");
            t.canvas.width = e, t.canvas.height = n;
            var e = this.width = t.canvas.width,
                n = this.height = t.canvas.height;
            return this.aspectRatio = this.width / this.height, s.retinaScale(this), this };
    e.defaults = { global: { animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", showScale: !0, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleIntegersOnly: !0, scaleBeginAtZero: !1, scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", responsive: !1, maintainAspectRatio: !0, showTooltips: !0, customTooltips: !1, tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"], tooltipFillColor: "rgba(0,0,0,0.8)", tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipFontSize: 14, tooltipFontStyle: "normal", tooltipFontColor: "#fff", tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipTitleFontSize: 14, tooltipTitleFontStyle: "bold", tooltipTitleFontColor: "#fff", tooltipYPadding: 6, tooltipXPadding: 6, tooltipCaretSize: 8, tooltipCornerRadius: 6, tooltipXOffset: 10, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", multiTooltipTemplate: "<%= value %>", multiTooltipKeyBackground: "#fff", onAnimationProgress: function() {}, onAnimationComplete: function() {} } }, e.types = {};
    var s = e.helpers = {},
        n = s.each = function(t, i, e) {
            var s = Array.prototype.slice.call(arguments, 3);
            if (t)
                if (t.length === +t.length) {
                    var n;
                    for (n = 0; n < t.length; n++) i.apply(e, [t[n], n].concat(s)) } else
                    for (var o in t) i.apply(e, [t[o], o].concat(s)) },
        o = s.clone = function(t) {
            var i = {};
            return n(t, function(e, s) { t.hasOwnProperty(s) && (i[s] = e) }), i },
        a = s.extend = function(t) {
            return n(Array.prototype.slice.call(arguments, 1), function(i) { n(i, function(e, s) { i.hasOwnProperty(s) && (t[s] = e) }) }), t },
        h = s.merge = function(t, i) {
            var e = Array.prototype.slice.call(arguments, 0);
            return e.unshift({}), a.apply(null, e) },
        l = s.indexOf = function(t, i) {
            if (Array.prototype.indexOf) return t.indexOf(i);
            for (var e = 0; e < t.length; e++)
                if (t[e] === i) return e;
            return -1 },
        r = (s.where = function(t, i) {
            var e = [];
            return s.each(t, function(t) { i(t) && e.push(t) }), e }, s.findNextWhere = function(t, i, e) { e || (e = -1);
            for (var s = e + 1; s < t.length; s++) {
                var n = t[s];
                if (i(n)) return n } }, s.findPreviousWhere = function(t, i, e) { e || (e = t.length);
            for (var s = e - 1; s >= 0; s--) {
                var n = t[s];
                if (i(n)) return n } }, s.inherits = function(t) {
            var i = this,
                e = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    return i.apply(this, arguments) },
                s = function() { this.constructor = e };
            return s.prototype = i.prototype, e.prototype = new s, e.extend = r, t && a(e.prototype, t), e.__super__ = i.prototype, e }),
        c = s.noop = function() {},
        u = s.uid = function() {
            var t = 0;
            return function() {
                return "chart-" + t++ } }(),
        d = s.warn = function(t) { window.console && "function" == typeof window.console.warn && console.warn(t) },
        p = s.amd = "function" == typeof define && define.amd,
        f = s.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t) },
        g = s.max = function(t) {
            return Math.max.apply(Math, t) },
        m = s.min = function(t) {
            return Math.min.apply(Math, t) },
        v = (s.cap = function(t, i, e) {
            if (f(i)) {
                if (t > i) return i } else if (f(e) && e > t) return e;
            return t }, s.getDecimalPlaces = function(t) {
            return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0 }),
        S = s.radians = function(t) {
            return t * (Math.PI / 180) },
        x = (s.getAngleFromPoint = function(t, i) {
            var e = i.x - t.x,
                s = i.y - t.y,
                n = Math.sqrt(e * e + s * s),
                o = 2 * Math.PI + Math.atan2(s, e);
            return 0 > e && 0 > s && (o += 2 * Math.PI), { angle: o, distance: n } }, s.aliasPixel = function(t) {
            return t % 2 === 0 ? 0 : .5 }),
        y = (s.splineCurve = function(t, i, e, s) {
            var n = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)),
                o = Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2)),
                a = s * n / (n + o),
                h = s * o / (n + o);
            return { inner: { x: i.x - a * (e.x - t.x), y: i.y - a * (e.y - t.y) }, outer: { x: i.x + h * (e.x - t.x), y: i.y + h * (e.y - t.y) } } }, s.calculateOrderOfMagnitude = function(t) {
            return Math.floor(Math.log(t) / Math.LN10) }),
        C = (s.calculateScaleRange = function(t, i, e, s, n) {
            var o = 2,
                a = Math.floor(i / (1.5 * e)),
                h = o >= a,
                l = g(t),
                r = m(t);
            l === r && (l += .5, r >= .5 && !s ? r -= .5 : l += .5);
            for (var c = Math.abs(l - r), u = y(c), d = Math.ceil(l / (1 * Math.pow(10, u))) * Math.pow(10, u), p = s ? 0 : Math.floor(r / (1 * Math.pow(10, u))) * Math.pow(10, u), f = d - p, v = Math.pow(10, u), S = Math.round(f / v);
                (S > a || a > 2 * S) && !h;)
                if (S > a) v *= 2, S = Math.round(f / v), S % 1 !== 0 && (h = !0);
                else if (n && u >= 0) {
                if (v / 2 % 1 !== 0) break;
                v /= 2, S = Math.round(f / v) } else v /= 2, S = Math.round(f / v);
            return h && (S = o, v = f / S), { steps: S, stepValue: v, min: p, max: p + S * v } }, s.template = function(t, i) {
            function e(t, i) {
                var e = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : s[t] = s[t];
                return i ? e(i) : e }
            if (t instanceof Function) return t(i);
            var s = {};
            return e(t, i) }),
        w = (s.generateLabels = function(t, i, e, s) {
            var o = new Array(i);
            return labelTemplateString && n(o, function(i, n) { o[n] = C(t, { value: e + s * (n + 1) }) }), o }, s.easingEffects = { linear: function(t) {
                return t }, easeInQuad: function(t) {
                return t * t }, easeOutQuad: function(t) {
                return -1 * t * (t - 2) }, easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1) }, easeInCubic: function(t) {
                return t * t * t }, easeOutCubic: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1) }, easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) }, easeInQuart: function(t) {
                return t * t * t * t }, easeOutQuart: function(t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1) }, easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2) }, easeInQuint: function(t) {
                return 1 * (t /= 1) * t * t * t * t }, easeOutQuint: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1) }, easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) }, easeInSine: function(t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1 }, easeOutSine: function(t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2)) }, easeInOutSine: function(t) {
                return -0.5 * (Math.cos(Math.PI * t / 1) - 1) }, easeInExpo: function(t) {
                return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1)) }, easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1) }, easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2) }, easeInCirc: function(t) {
                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1) }, easeOutCirc: function(t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t) }, easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, easeInElastic: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e))) }, easeOutElastic: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - i) * Math.PI / e) + 1) }, easeInOutElastic: function(t) {
                var i = 1.70158,
                    e = 0,
                    s = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = .3 * 1.5), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) * .5 + 1) }, easeInBack: function(t) {
                var i = 1.70158;
                return 1 * (t /= 1) * t * ((i + 1) * t - i) }, easeOutBack: function(t) {
                var i = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((i + 1) * t + i) + 1) }, easeInOutBack: function(t) {
                var i = 1.70158;
                return (t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2) }, easeInBounce: function(t) {
                return 1 - w.easeOutBounce(1 - t) }, easeOutBounce: function(t) {
                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }, easeInOutBounce: function(t) {
                return .5 > t ? .5 * w.easeInBounce(2 * t) : .5 * w.easeOutBounce(2 * t - 1) + .5 } }),
        b = s.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60) } }(),
        P = s.cancelAnimFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                return window.clearTimeout(t, 1e3 / 60) } }(),
        L = (s.animationLoop = function(t, i, e, s, n, o) {
            var a = 0,
                h = w[e] || w.linear,
                l = function() { a++;
                    var e = a / i,
                        r = h(e);
                    t.call(o, r, e, a), s.call(o, r, e), i > a ? o.animationFrame = b(l) : n.apply(o) };
            b(l) }, s.getRelativePosition = function(t) {
            var i, e, s = t.originalEvent || t,
                n = t.currentTarget || t.srcElement,
                o = n.getBoundingClientRect();
            return s.touches ? (i = s.touches[0].clientX - o.left, e = s.touches[0].clientY - o.top) : (i = s.clientX - o.left, e = s.clientY - o.top), { x: i, y: e } }, s.addEvent = function(t, i, e) { t.addEventListener ? t.addEventListener(i, e) : t.attachEvent ? t.attachEvent("on" + i, e) : t["on" + i] = e }),
        k = s.removeEvent = function(t, i, e) { t.removeEventListener ? t.removeEventListener(i, e, !1) : t.detachEvent ? t.detachEvent("on" + i, e) : t["on" + i] = c },
        F = (s.bindEvents = function(t, i, e) { t.events || (t.events = {}), n(i, function(i) { t.events[i] = function() { e.apply(t, arguments) }, L(t.chart.canvas, i, t.events[i]) }) }, s.unbindEvents = function(t, i) { n(i, function(i, e) { k(t.chart.canvas, e, i) }) }),
        R = s.getMaximumWidth = function(t) {
            var i = t.parentNode;
            return i.clientWidth },
        T = s.getMaximumHeight = function(t) {
            var i = t.parentNode;
            return i.clientHeight },
        A = (s.getMaximumSize = s.getMaximumWidth, s.retinaScale = function(t) {
            var i = t.ctx,
                e = t.canvas.width,
                s = t.canvas.height;
            window.devicePixelRatio && (i.canvas.style.width = e + "px", i.canvas.style.height = s + "px", i.canvas.height = s * window.devicePixelRatio, i.canvas.width = e * window.devicePixelRatio, i.scale(window.devicePixelRatio, window.devicePixelRatio)) }),
        M = s.clear = function(t) { t.ctx.clearRect(0, 0, t.width, t.height) },
        W = s.fontString = function(t, i, e) {
            return i + " " + t + "px " + e },
        z = s.longestText = function(t, i, e) { t.font = i;
            var s = 0;
            return n(e, function(i) {
                var e = t.measureText(i).width;
                s = e > s ? e : s }), s },
        B = s.drawRoundedRectangle = function(t, i, e, s, n, o) { t.beginPath(), t.moveTo(i + o, e), t.lineTo(i + s - o, e), t.quadraticCurveTo(i + s, e, i + s, e + o), t.lineTo(i + s, e + n - o), t.quadraticCurveTo(i + s, e + n, i + s - o, e + n), t.lineTo(i + o, e + n), t.quadraticCurveTo(i, e + n, i, e + n - o), t.lineTo(i, e + o), t.quadraticCurveTo(i, e, i + o, e), t.closePath() };
    e.instances = {}, e.Type = function(t, i, s) { this.options = i, this.chart = s, this.id = u(), e.instances[this.id] = this, i.responsive && this.resize(), this.initialize.call(this, t) }, a(e.Type.prototype, { initialize: function() {
            return this }, clear: function() {
            return M(this.chart), this }, stop: function() {
            return P(this.animationFrame), this }, resize: function(t) { this.stop();
            var i = this.chart.canvas,
                e = R(this.chart.canvas),
                s = this.options.maintainAspectRatio ? e / this.chart.aspectRatio : T(this.chart.canvas);
            return i.width = this.chart.width = e, i.height = this.chart.height = s, A(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this }, reflow: c, render: function(t) {
            return t && this.reflow(), this.options.animation && !t ? s.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this }, generateLegend: function() {
            return C(this.options.legendTemplate, this) }, destroy: function() { this.clear(), F(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete e.instances[this.id] }, showTooltip: function(t, i) { "undefined" == typeof this.activeElements && (this.activeElements = []);
            var o = function(t) {
                var i = !1;
                return t.length !== this.activeElements.length ? i = !0 : (n(t, function(t, e) { t !== this.activeElements[e] && (i = !0) }, this), i) }.call(this, t);
            if (o || i) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var a, h, r = this.datasets.length - 1; r >= 0 && (a = this.datasets[r].points || this.datasets[r].bars || this.datasets[r].segments, h = l(a, t[0]), -1 === h); r--);
                        var c = [],
                            u = [],
                            d = function(t) {
                                var i, e, n, o, a, l = [],
                                    r = [],
                                    d = [];
                                return s.each(this.datasets, function(t) { i = t.points || t.bars || t.segments, i[h] && i[h].hasValue() && l.push(i[h]) }), s.each(l, function(t) { r.push(t.x), d.push(t.y), c.push(s.template(this.options.multiTooltipTemplate, t)), u.push({ fill: t._saved.fillColor || t.fillColor, stroke: t._saved.strokeColor || t.strokeColor }) }, this), a = m(d), n = g(d), o = m(r), e = g(r), { x: o > this.chart.width / 2 ? o : e, y: (a + n) / 2 } }.call(this, h);
                        new e.MultiTooltip({ x: d.x, y: d.y, xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, xOffset: this.options.tooltipXOffset, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, titleTextColor: this.options.tooltipTitleFontColor, titleFontFamily: this.options.tooltipTitleFontFamily, titleFontStyle: this.options.tooltipTitleFontStyle, titleFontSize: this.options.tooltipTitleFontSize, cornerRadius: this.options.tooltipCornerRadius, labels: c, legendColors: u, legendColorBackground: this.options.multiTooltipKeyBackground, title: t[0].label, chart: this.chart, ctx: this.chart.ctx, custom: this.options.customTooltips }).draw() } else n(t, function(t) {
                        var i = t.tooltipPosition();
                        new e.Tooltip({ x: Math.round(i.x), y: Math.round(i.y), xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, caretHeight: this.options.tooltipCaretSize, cornerRadius: this.options.tooltipCornerRadius, text: C(this.options.tooltipTemplate, t), chart: this.chart, custom: this.options.customTooltips }).draw() }, this);
                return this } }, toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments) } }), e.Type.extend = function(t) {
        var i = this,
            s = function() {
                return i.apply(this, arguments) };
        if (s.prototype = o(i.prototype), a(s.prototype, t), s.extend = e.Type.extend, t.name || i.prototype.name) {
            var n = t.name || i.prototype.name,
                l = e.defaults[i.prototype.name] ? o(e.defaults[i.prototype.name]) : {};
            e.defaults[n] = a(l, t.defaults), e.types[n] = s, e.prototype[n] = function(t, i) {
                var o = h(e.defaults.global, e.defaults[n], i || {});
                return new s(t, o, this) } } else d("Name not provided for this chart, so it hasn't been registered");
        return i }, e.Element = function(t) { a(this, t), this.initialize.apply(this, arguments), this.save() }, a(e.Element.prototype, { initialize: function() {}, restore: function(t) {
            return t ? n(t, function(t) { this[t] = this._saved[t] }, this) : a(this, this._saved), this }, save: function() {
            return this._saved = o(this), delete this._saved._saved, this }, update: function(t) {
            return n(t, function(t, i) { this._saved[i] = this[i], this[i] = t }, this), this }, transition: function(t, i) {
            return n(t, function(t, e) { this[e] = (t - this._saved[e]) * i + this._saved[e] }, this), this }, tooltipPosition: function() {
            return { x: this.x, y: this.y } }, hasValue: function() {
            return f(this.value) } }), e.Element.extend = r, e.Point = e.Element.extend({ display: !0, inRange: function(t, i) {
            var e = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(i - this.y, 2) < Math.pow(e, 2) }, draw: function() {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke() } } }), e.Arc = e.Element.extend({ inRange: function(t, i) {
            var e = s.getAngleFromPoint(this, { x: t, y: i }),
                n = e.angle >= this.startAngle && e.angle <= this.endAngle,
                o = e.distance >= this.innerRadius && e.distance <= this.outerRadius;
            return n && o }, tooltipPosition: function() {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                i = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return { x: this.x + Math.cos(t) * i, y: this.y + Math.sin(t) * i } }, draw: function(t) {
            var i = this.ctx;
            i.beginPath(), i.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke() } }), e.Rectangle = e.Element.extend({ draw: function() {
            var t = this.ctx,
                i = this.width / 2,
                e = this.x - i,
                s = this.x + i,
                n = this.base - (this.base - this.y),
                o = this.strokeWidth / 2;
            this.showStroke && (e += o, s -= o, n += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(e, this.base), t.lineTo(e, n), t.lineTo(s, n), t.lineTo(s, this.base), t.fill(), this.showStroke && t.stroke() }, height: function() {
            return this.base - this.y }, inRange: function(t, i) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && i >= this.y && i <= this.base } }), e.Tooltip = e.Element.extend({ draw: function() {
            var t = this.chart.ctx;
            t.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var i = this.caretPadding = 2,
                e = t.measureText(this.text).width + 2 * this.xPadding,
                s = this.fontSize + 2 * this.yPadding,
                n = s + this.caretHeight + i;
            this.x + e / 2 > this.chart.width ? this.xAlign = "left" : this.x - e / 2 < 0 && (this.xAlign = "right"), this.y - n < 0 && (this.yAlign = "below");
            var o = this.x - e / 2,
                a = this.y - n;
            if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
            else {
                switch (this.yAlign) {
                    case "above":
                        t.beginPath(), t.moveTo(this.x, this.y - i), t.lineTo(this.x + this.caretHeight, this.y - (i + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (i + this.caretHeight)), t.closePath(), t.fill();
                        break;
                    case "below":
                        a = this.y + i + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + i), t.lineTo(this.x + this.caretHeight, this.y + i + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + i + this.caretHeight), t.closePath(), t.fill() }
                switch (this.xAlign) {
                    case "left":
                        o = this.x - e + (this.cornerRadius + this.caretHeight);
                        break;
                    case "right":
                        o = this.x - (this.cornerRadius + this.caretHeight) }
                B(t, o, a, e, s, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + e / 2, a + s / 2) } } }), e.MultiTooltip = e.Element.extend({ initialize: function() { this.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = W(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width,
                i = z(this.ctx, this.font, this.labels) + this.fontSize + 3,
                e = g([i, t]);
            this.width = e + 2 * this.xPadding;
            var s = this.height / 2;
            this.y - s < 0 ? this.y = s : this.y + s > this.chart.height && (this.y = this.chart.height - s), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset }, getLineHeight: function(t) {
            var i = this.y - this.height / 2 + this.yPadding,
                e = t - 1;
            return 0 === t ? i + this.titleFontSize / 2 : i + (1.5 * this.fontSize * e + this.fontSize / 2) + 1.5 * this.titleFontSize }, draw: function() {
            if (this.custom) this.custom(this);
            else { B(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, s.each(this.labels, function(i, e) { t.fillStyle = this.textColor, t.fillText(i, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(e + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[e].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize) }, this) } } }), e.Scale = e.Element.extend({ initialize: function() { this.fit() }, buildYLabels: function() { this.yLabels = [];
            for (var t = v(this.stepValue), i = 0; i <= this.steps; i++) this.yLabels.push(C(this.templateString, { value: (this.min + i * this.stepValue).toFixed(t) }));
            this.yLabelWidth = this.display && this.showLabels ? z(this.ctx, this.font, this.yLabels) : 0 }, addXLabel: function(t) { this.xLabels.push(t), this.valuesCount++, this.fit() }, removeXLabel: function() { this.xLabels.shift(), this.valuesCount--, this.fit() }, fit: function() { this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var t, i = this.endPoint - this.startPoint;
            for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i > this.endPoint - this.startPoint;) i = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation() }, calculateXLabelRotation: function() { this.ctx.font = this.font;
            var t, i, e = this.ctx.measureText(this.xLabels[0]).width,
                s = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = s / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth + 10 ? e / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var n, o = z(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = o;
                for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) n = Math.cos(S(this.xLabelRotation)), t = n * e, i = n * s, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * o;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(S(this.xLabelRotation)) * o + 3) } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding }, calculateYRange: c, drawingArea: function() {
            return this.startPoint - this.endPoint }, calculateY: function(t) {
            var i = this.drawingArea() / (this.min - this.max);
            return this.endPoint - i * (t - this.min) }, calculateX: function(t) {
            var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                e = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                s = e * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (s += e / 2), Math.round(s) }, update: function(t) { s.extend(this, t), this.fit() }, draw: function() {
            var t = this.ctx,
                i = (this.endPoint - this.startPoint) / this.steps,
                e = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, n(this.yLabels, function(n, o) {
                var a = this.endPoint - i * o,
                    h = Math.round(a),
                    l = this.showHorizontalLines;
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(n, e - 10, a), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), h += s.aliasPixel(t.lineWidth), l && (t.moveTo(e, h), t.lineTo(this.width, h), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(e - 5, h), t.lineTo(e, h), t.stroke(), t.closePath() }, this), n(this.xLabels, function(i, e) {
                var s = this.calculateX(e) + x(this.lineWidth),
                    n = this.calculateX(e - (this.offsetGridLines ? .5 : 0)) + x(this.lineWidth),
                    o = this.xLabelRotation > 0,
                    a = this.showVerticalLines;
                0 !== e || a || (a = !0), a && t.beginPath(), e > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(n, this.endPoint), t.lineTo(n, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(n, this.endPoint), t.lineTo(n, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(s, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * S(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(i, 0, 0), t.restore() }, this)) } }), e.RadialScale = e.Element.extend({ initialize: function() { this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 }, calculateCenterOffset: function(t) {
            var i = this.drawingArea / (this.max - this.min);
            return (t - this.min) * i }, update: function() { this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels() }, buildYLabels: function() { this.yLabels = [];
            for (var t = v(this.stepValue), i = 0; i <= this.steps; i++) this.yLabels.push(C(this.templateString, { value: (this.min + i * this.stepValue).toFixed(t) })) }, getCircumference: function() {
            return 2 * Math.PI / this.valuesCount }, setScaleSize: function() {
            var t, i, e, s, n, o, a, h, l, r, c, u, d = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                p = this.width,
                g = 0;
            for (this.ctx.font = W(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++) t = this.getPointPosition(i, d), e = this.ctx.measureText(C(this.templateString, { value: this.labels[i] })).width + 5, 0 === i || i === this.valuesCount / 2 ? (s = e / 2, t.x + s > p && (p = t.x + s, n = i), t.x - s < g && (g = t.x - s, a = i)) : i < this.valuesCount / 2 ? t.x + e > p && (p = t.x + e, n = i) : i > this.valuesCount / 2 && t.x - e < g && (g = t.x - e, a = i);
            l = g, r = Math.ceil(p - this.width), o = this.getIndexAngle(n), h = this.getIndexAngle(a), c = r / Math.sin(o + Math.PI / 2), u = l / Math.sin(h + Math.PI / 2), c = f(c) ? c : 0, u = f(u) ? u : 0, this.drawingArea = d - (u + c) / 2, this.setCenterPoint(u, c) }, setCenterPoint: function(t, i) {
            var e = this.width - i - this.drawingArea,
                s = t + this.drawingArea;
            this.xCenter = (s + e) / 2, this.yCenter = this.height / 2 }, getIndexAngle: function(t) {
            var i = 2 * Math.PI / this.valuesCount;
            return t * i - Math.PI / 2 }, getPointPosition: function(t, i) {
            var e = this.getIndexAngle(t);
            return { x: Math.cos(e) * i + this.xCenter, y: Math.sin(e) * i + this.yCenter } }, draw: function() {
            if (this.display) {
                var t = this.ctx;
                if (n(this.yLabels, function(i, e) {
                        if (e > 0) {
                            var s, n = e * (this.drawingArea / this.steps),
                                o = this.yCenter - n;
                            if (this.lineWidth > 0)
                                if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                else { t.beginPath();
                                    for (var a = 0; a < this.valuesCount; a++) s = this.getPointPosition(a, this.calculateCenterOffset(this.min + e * this.stepValue)), 0 === a ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y);
                                    t.closePath(), t.stroke() }
                            if (this.showLabels) {
                                if (t.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var h = t.measureText(i).width;
                                    t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY) }
                                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(i, this.xCenter, o) } } }, this), !this.lineArc) { t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var i = this.valuesCount - 1; i >= 0; i--) {
                        if (this.angleLineWidth > 0) {
                            var e = this.getPointPosition(i, this.calculateCenterOffset(this.max));
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(e.x, e.y), t.stroke(), t.closePath() }
                        var s = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
                        t.font = W(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                        var o = this.labels.length,
                            a = this.labels.length / 2,
                            h = a / 2,
                            l = h > i || i > o - h,
                            r = i === h || i === o - h;
                        t.textAlign = 0 === i ? "center" : i === a ? "center" : a > i ? "left" : "right", t.textBaseline = r ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[i], s.x, s.y) } } } } }), s.addEvent(window, "resize", function() {
        var t;
        return function() { clearTimeout(t), t = setTimeout(function() { n(e.instances, function(t) { t.options.responsive && t.resize(t.render, !0) }) }, 50) } }()), p ? define(function() {
        return e }) : "object" == typeof module && module.exports && (module.exports = e), t.Chart = e, e.noConflict = function() {
        return t.Chart = i, e } }).call(this),
    function() { "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers,
            s = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };
        i.Type.extend({ name: "Bar", defaults: s, initialize: function(t) {
                var s = this.options;
                this.ScaleClass = i.Scale.extend({ offsetGridLines: !0, calculateBarX: function(t, i, e) {
                        var n = this.calculateBaseWidth(),
                            o = this.calculateX(e) - n / 2,
                            a = this.calculateBarWidth(t);
                        return o + a * i + i * s.barDatasetSpacing + a / 2 }, calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * s.barValueSpacing }, calculateBarWidth: function(t) {
                        var i = this.calculateBaseWidth() - (t - 1) * s.barDatasetSpacing;
                        return i / t } }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) { t.restore(["fillColor", "strokeColor"]) }), e.each(i, function(t) { t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke }), this.showTooltip(i) }), this.BarClass = i.Rectangle.extend({ strokeWidth: this.options.barStrokeWidth, showStroke: this.options.barShowStroke, ctx: this.chart.ctx }), e.each(t.datasets, function(i, s) {
                    var n = { label: i.label || null, fillColor: i.fillColor, strokeColor: i.strokeColor, bars: [] };
                    this.datasets.push(n), e.each(i.data, function(e, s) { n.bars.push(new this.BarClass({ value: e, label: t.labels[s], datasetLabel: i.label, strokeColor: i.strokeColor, fillColor: i.fillColor, highlightFill: i.highlightFill || i.fillColor, highlightStroke: i.highlightStroke || i.strokeColor })) }, this) }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, i, s) { e.extend(t, { width: this.scale.calculateBarWidth(this.datasets.length), x: this.scale.calculateBarX(this.datasets.length, s, i), y: this.scale.endPoint }), t.save() }, this), this.render() }, update: function() { this.scale.update(), e.each(this.activeElements, function(t) { t.restore(["fillColor", "strokeColor"]) }), this.eachBars(function(t) { t.save() }), this.render() }, eachBars: function(t) { e.each(this.datasets, function(i, s) { e.each(i.bars, t, this, s) }, this) }, getBarsAtEvent: function(t) {
                for (var i, s = [], n = e.getRelativePosition(t), o = function(t) { s.push(t.bars[i]) }, a = 0; a < this.datasets.length; a++)
                    for (i = 0; i < this.datasets[a].bars.length; i++)
                        if (this.datasets[a].bars[i].inRange(n.x, n.y)) return e.each(this.datasets, o), s;
                return s }, buildScale: function(t) {
                var i = this,
                    s = function() {
                        var t = [];
                        return i.eachBars(function(i) { t.push(i.value) }), t },
                    n = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(t) {
                            var i = e.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            e.extend(this, i) }, xLabels: t, font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0, showLabels: this.options.scaleShowLabels, display: this.options.showScale };
                this.options.scaleOverride && e.extend(n, { calculateYRange: e.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new this.ScaleClass(n) }, addData: function(t, i) { e.each(t, function(t, e) { this.datasets[e].bars.push(new this.BarClass({ value: t, label: i, x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1), y: this.scale.endPoint, width: this.scale.calculateBarWidth(this.datasets.length), base: this.scale.endPoint, strokeColor: this.datasets[e].strokeColor, fillColor: this.datasets[e].fillColor })) }, this), this.scale.addXLabel(i), this.update() }, removeData: function() { this.scale.removeXLabel(), e.each(this.datasets, function(t) { t.bars.shift() }, this), this.update() }, reflow: function() { e.extend(this.BarClass.prototype, { y: this.scale.endPoint, base: this.scale.endPoint });
                var t = e.extend({ height: this.chart.height, width: this.chart.width });
                this.scale.update(t) }, draw: function(t) {
                var i = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(i), e.each(this.datasets, function(t, s) { e.each(t.bars, function(t, e) { t.hasValue() && (t.base = this.scale.endPoint, t.transition({ x: this.scale.calculateBarX(this.datasets.length, s, e), y: this.scale.calculateY(t.value), width: this.scale.calculateBarWidth(this.datasets.length) }, i).draw()) }, this) }, this) } }) }.call(this),
    function() { "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers,
            s = { segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>' };
        i.Type.extend({ name: "Doughnut", defaults: s, initialize: function(t) { this.segments = [], this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = i.Arc.extend({ ctx: this.chart.ctx, x: this.chart.width / 2, y: this.chart.height / 2 }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    e.each(this.segments, function(t) { t.restore(["fillColor"]) }), e.each(i, function(t) { t.fillColor = t.highlightColor }), this.showTooltip(i) }), this.calculateTotal(t), e.each(t, function(t, i) { this.addData(t, i, !0) }, this), this.render() }, getSegmentsAtEvent: function(t) {
                var i = [],
                    s = e.getRelativePosition(t);
                return e.each(this.segments, function(t) { t.inRange(s.x, s.y) && i.push(t) }, this), i }, addData: function(t, i, e) {
                var s = i || this.segments.length;
                this.segments.splice(s, 0, new this.SegmentArc({ value: t.value, outerRadius: this.options.animateScale ? 0 : this.outerRadius, innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout, fillColor: t.color, highlightColor: t.highlight || t.color, showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, startAngle: 1.5 * Math.PI, circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value), label: t.label })), e || (this.reflow(), this.update()) }, calculateCircumference: function(t) {
                return 2 * Math.PI * (Math.abs(t) / this.total) }, calculateTotal: function(t) { this.total = 0, e.each(t, function(t) { this.total += Math.abs(t.value) }, this) }, update: function() { this.calculateTotal(this.segments), e.each(this.activeElements, function(t) { t.restore(["fillColor"]) }), e.each(this.segments, function(t) { t.save() }), this.render() }, removeData: function(t) {
                var i = e.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(i, 1), this.reflow(), this.update() }, reflow: function() { e.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, e.each(this.segments, function(t) { t.update({ outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }) }, this) }, draw: function(t) {
                var i = t ? t : 1;
                this.clear(), e.each(this.segments, function(t, e) { t.transition({ circumference: this.calculateCircumference(t.value), outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }, i), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle) }, this) } }), i.types.Doughnut.extend({ name: "Pie", defaults: e.merge(s, { percentageInnerCutout: 0 }) }) }.call(this),
    function() { "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers,
            s = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };
        i.Type.extend({ name: "Line", defaults: s, initialize: function(t) { this.PointClass = i.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx, inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2) } }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) { t.restore(["fillColor", "strokeColor"]) }), e.each(i, function(t) { t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke }), this.showTooltip(i) }), e.each(t.datasets, function(i) {
                    var s = { label: i.label || null, fillColor: i.fillColor, strokeColor: i.strokeColor, pointColor: i.pointColor, pointStrokeColor: i.pointStrokeColor, points: [] };
                    this.datasets.push(s), e.each(i.data, function(e, n) { s.points.push(new this.PointClass({ value: e, label: t.labels[n], datasetLabel: i.label, strokeColor: i.pointStrokeColor, fillColor: i.pointColor, highlightFill: i.pointHighlightFill || i.pointColor, highlightStroke: i.pointHighlightStroke || i.pointStrokeColor })) }, this), this.buildScale(t.labels), this.eachPoints(function(t, i) { e.extend(t, { x: this.scale.calculateX(i), y: this.scale.endPoint }), t.save() }, this) }, this), this.render() }, update: function() { this.scale.update(), e.each(this.activeElements, function(t) { t.restore(["fillColor", "strokeColor"]) }), this.eachPoints(function(t) { t.save() }), this.render() }, eachPoints: function(t) { e.each(this.datasets, function(i) { e.each(i.points, t, this) }, this) }, getPointsAtEvent: function(t) {
                var i = [],
                    s = e.getRelativePosition(t);
                return e.each(this.datasets, function(t) { e.each(t.points, function(t) { t.inRange(s.x, s.y) && i.push(t) }) }, this), i }, buildScale: function(t) {
                var s = this,
                    n = function() {
                        var t = [];
                        return s.eachPoints(function(i) { t.push(i.value) }), t },
                    o = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(t) {
                            var i = e.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            e.extend(this, i) }, xLabels: t, font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth, showLabels: this.options.scaleShowLabels, display: this.options.showScale };
                this.options.scaleOverride && e.extend(o, { calculateYRange: e.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new i.Scale(o) }, addData: function(t, i) { e.each(t, function(t, e) { this.datasets[e].points.push(new this.PointClass({ value: t, label: i, x: this.scale.calculateX(this.scale.valuesCount + 1), y: this.scale.endPoint, strokeColor: this.datasets[e].pointStrokeColor, fillColor: this.datasets[e].pointColor })) }, this), this.scale.addXLabel(i), this.update() }, removeData: function() { this.scale.removeXLabel(), e.each(this.datasets, function(t) { t.points.shift() }, this), this.update() }, reflow: function() {
                var t = e.extend({ height: this.chart.height, width: this.chart.width });
                this.scale.update(t) }, draw: function(t) {
                var i = t || 1;
                this.clear();
                var s = this.chart.ctx,
                    n = function(t) {
                        return null !== t.value },
                    o = function(t, i, s) {
                        return e.findNextWhere(i, n, s) || t },
                    a = function(t, i, s) {
                        return e.findPreviousWhere(i, n, s) || t };
                this.scale.draw(i), e.each(this.datasets, function(t) {
                    var h = e.where(t.points, n);
                    e.each(t.points, function(t, e) { t.hasValue() && t.transition({ y: this.scale.calculateY(t.value), x: this.scale.calculateX(e) }, i) }, this), this.options.bezierCurve && e.each(h, function(t, i) {
                        var s = i > 0 && i < h.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = e.splineCurve(a(t, h, i), t, o(t, h, i), s), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint) }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(h, function(t, i) {
                        if (0 === i) s.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var e = a(t, h, i);
                            s.bezierCurveTo(e.controlPoints.outer.x, e.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y) } else s.lineTo(t.x, t.y) }, this), s.stroke(), this.options.datasetFill && h.length > 0 && (s.lineTo(h[h.length - 1].x, this.scale.endPoint), s.lineTo(h[0].x, this.scale.endPoint), s.fillStyle = t.fillColor, s.closePath(), s.fill()), e.each(h, function(t) { t.draw() }) }, this) } }) }.call(this),
    function() { "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers,
            s = { scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBeginAtZero: !0, scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, scaleShowLine: !0, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>' };
        i.Type.extend({ name: "PolarArea", defaults: s, initialize: function(t) { this.segments = [], this.SegmentArc = i.Arc.extend({ showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, ctx: this.chart.ctx, innerRadius: 0, x: this.chart.width / 2, y: this.chart.height / 2 }), this.scale = new i.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, lineArc: !0, width: this.chart.width, height: this.chart.height, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, valuesCount: t.length }), this.updateScaleRange(t), this.scale.update(), e.each(t, function(t, i) { this.addData(t, i, !0) }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    e.each(this.segments, function(t) { t.restore(["fillColor"]) }), e.each(i, function(t) { t.fillColor = t.highlightColor }), this.showTooltip(i) }), this.render() }, getSegmentsAtEvent: function(t) {
                var i = [],
                    s = e.getRelativePosition(t);
                return e.each(this.segments, function(t) { t.inRange(s.x, s.y) && i.push(t) }, this), i }, addData: function(t, i, e) {
                var s = i || this.segments.length;
                this.segments.splice(s, 0, new this.SegmentArc({ fillColor: t.color, highlightColor: t.highlight || t.color, label: t.label, value: t.value, outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value), circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(), startAngle: 1.5 * Math.PI })), e || (this.reflow(), this.update()) }, removeData: function(t) {
                var i = e.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(i, 1), this.reflow(), this.update() }, calculateTotal: function(t) { this.total = 0, e.each(t, function(t) { this.total += t.value }, this), this.scale.valuesCount = this.segments.length }, updateScaleRange: function(t) {
                var i = [];
                e.each(t, function(t) { i.push(t.value) });
                var s = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                e.extend(this.scale, s, { size: e.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }) }, update: function() { this.calculateTotal(this.segments), e.each(this.segments, function(t) { t.save() }), this.reflow(), this.render() }, reflow: function() { e.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.updateScaleRange(this.segments), this.scale.update(), e.extend(this.scale, { xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), e.each(this.segments, function(t) { t.update({ outerRadius: this.scale.calculateCenterOffset(t.value) }) }, this) }, draw: function(t) {
                var i = t || 1;
                this.clear(), e.each(this.segments, function(t, e) { t.transition({ circumference: this.scale.getCircumference(), outerRadius: this.scale.calculateCenterOffset(t.value) }, i), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle), t.draw() }, this), this.scale.draw() } }) }.call(this),
    function() { "use strict";
        var t = this,
            i = t.Chart,
            e = i.helpers;
        i.Type.extend({ name: "Radar", defaults: { scaleShowLine: !0, angleShowLineOut: !0, scaleShowLabels: !1, scaleBeginAtZero: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 10, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' }, initialize: function(t) { this.PointClass = i.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx }), this.datasets = [], this.buildScale(t), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) { t.restore(["fillColor", "strokeColor"]) }), e.each(i, function(t) { t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke }), this.showTooltip(i) }), e.each(t.datasets, function(i) {
                    var s = { label: i.label || null, fillColor: i.fillColor, strokeColor: i.strokeColor, pointColor: i.pointColor, pointStrokeColor: i.pointStrokeColor, points: [] };
                    this.datasets.push(s), e.each(i.data, function(e, n) {
                        var o;
                        this.scale.animation || (o = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(e))), s.points.push(new this.PointClass({ value: e, label: t.labels[n], datasetLabel: i.label, x: this.options.animation ? this.scale.xCenter : o.x, y: this.options.animation ? this.scale.yCenter : o.y, strokeColor: i.pointStrokeColor, fillColor: i.pointColor, highlightFill: i.pointHighlightFill || i.pointColor, highlightStroke: i.pointHighlightStroke || i.pointStrokeColor })) }, this) }, this), this.render() }, eachPoints: function(t) { e.each(this.datasets, function(i) { e.each(i.points, t, this) }, this) }, getPointsAtEvent: function(t) {
                var i = e.getRelativePosition(t),
                    s = e.getAngleFromPoint({ x: this.scale.xCenter, y: this.scale.yCenter }, i),
                    n = 2 * Math.PI / this.scale.valuesCount,
                    o = Math.round((s.angle - 1.5 * Math.PI) / n),
                    a = [];
                return (o >= this.scale.valuesCount || 0 > o) && (o = 0), s.distance <= this.scale.drawingArea && e.each(this.datasets, function(t) { a.push(t.points[o]) }), a }, buildScale: function(t) { this.scale = new i.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, angleLineColor: this.options.angleLineColor, angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0, pointLabelFontColor: this.options.pointLabelFontColor, pointLabelFontSize: this.options.pointLabelFontSize, pointLabelFontFamily: this.options.pointLabelFontFamily, pointLabelFontStyle: this.options.pointLabelFontStyle, height: this.chart.height, width: this.chart.width, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, labels: t.labels, valuesCount: t.datasets[0].data.length }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels() }, updateScaleRange: function(t) {
                var i = function() {
                        var i = [];
                        return e.each(t, function(t) { t.data ? i = i.concat(t.data) : e.each(t.points, function(t) { i.push(t.value) }) }), i }(),
                    s = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                e.extend(this.scale, s) }, addData: function(t, i) { this.scale.valuesCount++, e.each(t, function(t, e) {
                    var s = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[e].points.push(new this.PointClass({ value: t, label: i, x: s.x, y: s.y, strokeColor: this.datasets[e].pointStrokeColor, fillColor: this.datasets[e].pointColor })) }, this), this.scale.labels.push(i), this.reflow(), this.update() }, removeData: function() { this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function(t) { t.points.shift() }, this), this.reflow(), this.update() }, update: function() { this.eachPoints(function(t) { t.save() }), this.reflow(), this.render() }, reflow: function() { e.extend(this.scale, { width: this.chart.width, height: this.chart.height, size: e.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels() }, draw: function(t) {
                var i = t || 1,
                    s = this.chart.ctx;
                this.clear(), this.scale.draw(), e.each(this.datasets, function(t) { e.each(t.points, function(t, e) { t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), i) }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(t.points, function(t, i) { 0 === i ? s.moveTo(t.x, t.y) : s.lineTo(t.x, t.y) }, this), s.closePath(), s.stroke(), s.fillStyle = t.fillColor, s.fill(), e.each(t.points, function(t) { t.hasValue() && t.draw() }) }, this) } }) }.call(this); + function(t) { "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var i in e)
            if (void 0 !== t.style[i]) return { end: e[i] };
        return !1 }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            s = this;
        t(this).one("bsTransitionEnd", function() { i = !0 });
        var a = function() { i || t(s).trigger(t.support.transition.end) };
        return setTimeout(a, e), this }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.affix"),
                n = "object" == typeof e && e;
            a || s.data("bs.affix", a = new i(this, n)), "string" == typeof e && a[e]() }) }
    var i = function(e, s) { this.options = t.extend({}, i.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function(t, e, i, s) {
        var a = this.$target.scrollTop(),
            n = this.$element.offset(),
            o = this.$target.height();
        if (null != i && "top" == this.affixed) return i > a ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? a + this.unpin <= n.top ? !1 : "bottom" : t - s >= a + o ? !1 : "bottom";
        var r = null == this.affixed,
            h = r ? a : n.top,
            l = r ? o : e;
        return null != i && i >= a ? "top" : null != s && h + l >= t - s ? "bottom" : !1 }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                s = this.options.offset,
                a = s.top,
                n = s.bottom,
                o = Math.max(t(document).height(), t(document.body).height()); "object" != typeof s && (n = a = s), "function" == typeof a && (a = s.top(this.$element)), "function" == typeof n && (n = s.bottom(this.$element));
            var r = this.getState(o, e, a, n);
            if (this.affixed != r) { null != this.unpin && this.$element.css("top", "");
                var h = "affix" + (r ? "-" + r : ""),
                    l = t.Event(h + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(h).trigger(h.replace("affix", "affixed") + ".bs.affix") } "bottom" == r && this.$element.offset({ top: o - e - n }) } };
    var s = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = s, this }, t(window).on("load", function() { t('[data-spy="affix"]').each(function() {
            var i = t(this),
                s = i.data();
            s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), null != s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s) }) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.alert");
            a || i.data("bs.alert", a = new s(this)), "string" == typeof e && a[e].call(i) }) }
    var i = '[data-dismiss="alert"]',
        s = function(e) { t(e).on("click", i, this.close) };
    s.VERSION = "3.3.5", s.TRANSITION_DURATION = 150, s.prototype.close = function(e) {
        function i() { o.detach().trigger("closed.bs.alert").remove() }
        var a = t(this),
            n = a.attr("data-target");
        n || (n = a.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(n);
        e && e.preventDefault(), o.length || (o = a.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(s.TRANSITION_DURATION) : i()) };
    var a = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = s, t.fn.alert.noConflict = function() {
        return t.fn.alert = a, this }, t(document).on("click.bs.alert.data-api", i, s.prototype.close) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.button"),
                n = "object" == typeof e && e;
            a || s.data("bs.button", a = new i(this, n)), "toggle" == e ? a.toggle() : e && a.setState(e) }) }
    var i = function(e, s) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, s), this.isLoading = !1 };
    i.VERSION = "3.3.5", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) {
        var i = "disabled",
            s = this.$element,
            a = s.is("input") ? "val" : "html",
            n = s.data();
        e += "Text", null == n.resetText && s.data("resetText", s[a]()), setTimeout(t.proxy(function() { s[a](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i)) }, this), 0) }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input"); "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") };
    var s = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = s, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var s = t(i.target);
        s.hasClass("btn") || (s = s.closest(".btn")), e.call(s, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.carousel"),
                n = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : n.slide;
            a || s.data("bs.carousel", a = new i(this, n)), "number" == typeof e ? a.to(e) : o ? a[o]() : n.interval && a.pause().cycle() }) }
    var i = function(e, i) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return }
            t.preventDefault() } }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            s = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (s && !this.options.wrap) return e;
        var a = "prev" == t ? -1 : 1,
            n = (i + a) % this.$items.length;
        return this.$items.eq(n) }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t)) }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next") }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev") }, i.prototype.slide = function(e, s) {
        var a = this.$element.find(".item.active"),
            n = s || this.getItemForDirection(e, a),
            o = this.interval,
            r = "next" == e ? "left" : "right",
            h = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var l = n[0],
            d = t.Event("slide.bs.carousel", { relatedTarget: l, direction: r });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(n)]);
                c && c.addClass("active") }
            var p = t.Event("slid.bs.carousel", { relatedTarget: l, direction: r });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, a.addClass(r), n.addClass(r), a.one("bsTransitionEnd", function() { n.removeClass([e, r].join(" ")).addClass("active"), a.removeClass(["active", r].join(" ")), h.sliding = !1, setTimeout(function() { h.$element.trigger(p) }, 0) }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (a.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(p)), o && this.cycle(), this } };
    var s = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = s, this };
    var a = function(i) {
        var s, a = t(this),
            n = t(a.attr("data-target") || (s = a.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var o = t.extend({}, n.data(), a.data()),
                r = a.attr("data-slide-to");
            r && (o.interval = !1), e.call(n, o), r && n.data("bs.carousel").to(r), i.preventDefault() } };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", function() { t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data()) }) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(s) }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.collapse"),
                n = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);!a && n.toggle && /show|hide/.test(e) && (n.toggle = !1), a || i.data("bs.collapse", a = new s(this, n)), "string" == typeof e && a[e]() }) }
    var s = function(e, i) { this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    s.VERSION = "3.3.5", s.TRANSITION_DURATION = 350, s.DEFAULTS = { toggle: !0 }, s.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height" }, s.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (e = a.data("bs.collapse"), e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) { a && a.length && (i.call(a, "hide"), e || a.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() { this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                    if (!t.support.transition) return r.call(this);
                    var h = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[o](this.$element[0][h]) } } } }, s.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var a = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : a.call(this) } } }, s.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, s.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, s) {
            var a = t(s);
            this.addAriaAndCollapsedClass(e(a), a) }, this)).end() }, s.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i) };
    var a = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = a, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(s) {
        var a = t(this);
        a.attr("data-target") || s.preventDefault();
        var n = e(a),
            o = n.data("bs.collapse"),
            r = o ? "toggle" : a.data();
        i.call(n, r) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = i && t(i);
        return s && s.length ? s : e.parent() }

    function i(i) { i && 3 === i.which || (t(a).remove(), t(n).each(function() {
            var s = t(this),
                a = e(s),
                n = { relatedTarget: this };
            a.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(a[0], i.target) || (a.trigger(i = t.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (s.attr("aria-expanded", "false"), a.removeClass("open").trigger("hidden.bs.dropdown", n)))) })) }

    function s(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("bs.dropdown");
            s || i.data("bs.dropdown", s = new o(this)), "string" == typeof e && s[e].call(i) }) }
    var a = ".dropdown-backdrop",
        n = '[data-toggle="dropdown"]',
        o = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
    o.VERSION = "3.3.5", o.prototype.toggle = function(s) {
        var a = t(this);
        if (!a.is(".disabled, :disabled")) {
            var n = e(a),
                o = n.hasClass("open");
            if (i(), !o) { "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = { relatedTarget: this };
                if (n.trigger(s = t.Event("show.bs.dropdown", r)), s.isDefaultPrevented()) return;
                a.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger("shown.bs.dropdown", r) }
            return !1 } }, o.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var s = t(this);
            if (i.preventDefault(), i.stopPropagation(), !s.is(".disabled, :disabled")) {
                var a = e(s),
                    o = a.hasClass("open");
                if (!o && 27 != i.which || o && 27 == i.which) return 27 == i.which && a.find(n).trigger("focus"), s.trigger("click");
                var r = " li:not(.disabled):visible a",
                    h = a.find(".dropdown-menu" + r);
                if (h.length) {
                    var l = h.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < h.length - 1 && l++, ~l || (l = 0), h.eq(l).trigger("focus") } } } };
    var r = t.fn.dropdown;
    t.fn.dropdown = s, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r, this }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", n, o.prototype.toggle).on("keydown.bs.dropdown.data-api", n, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown) }(jQuery), + function(t) { "use strict";

    function e(e, s) {
        return this.each(function() {
            var a = t(this),
                n = a.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, a.data(), "object" == typeof e && e);
            n || a.data("bs.modal", n = new i(this, o)), "string" == typeof e ? n[e](s) : o.show && n.show(s) }) }
    var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) {
        var s = this,
            a = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { s.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
            var a = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.adjustDialog(), a && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
            var n = t.Event("shown.bs.modal", { relatedTarget: e });
            a ? s.$dialog.one("bsTransitionEnd", function() { s.$element.trigger("focus").trigger(n) }).emulateTransitionEnd(i.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(n) })) }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) {
        var s = this,
            a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && a;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in");
            var o = function() { s.removeBackdrop(), e && e() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o() } else e && e() }, i.prototype.handleUpdate = function() { this.adjustDialog() }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, i.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left) }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth) }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e };
    var s = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = s, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var s = t(this),
            a = s.attr("href"),
            n = t(s.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
            o = n.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(a) && a }, n.data(), s.data());
        s.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) { t.isDefaultPrevented() || n.one("hidden.bs.modal", function() { s.is(":visible") && s.trigger("focus") }) }), e.call(n, o, this) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.tooltip"),
                n = "object" == typeof e && e;
            (a || !/destroy|hide/.test(e)) && (a || s.data("bs.tooltip", a = new i(this, n)), "string" == typeof e && a[e]()) }) }
    var i = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, s) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var a = this.options.trigger.split(" "), n = a.length; n--;) {
            var o = a[n];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var r = "hover" == o ? "mouseenter" : "focusin",
                    h = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(h + "." + this.type, this.options.selector, t.proxy(this.leave, this)) } }
        this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, i.prototype.getDefaults = function() {
        return i.DEFAULTS }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, s) { i[t] != s && (e[t] = s) }), e }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()) }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1 }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide()) }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) { this.$element.trigger(e);
            var s = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !s) return;
            var a = this,
                n = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), n.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                h = /\s?auto?\s?/i,
                l = h.test(r);
            l && (r = r.replace(h, "") || "top"), n.detach().css({ top: 0, left: 0, display: "block" }).addClass(r).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                c = n[0].offsetWidth,
                p = n[0].offsetHeight;
            if (l) {
                var u = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + p > f.bottom ? "top" : "top" == r && d.top - p < f.top ? "bottom" : "right" == r && d.right + c > f.width ? "left" : "left" == r && d.left - c < f.left ? "right" : r, n.removeClass(u).addClass(r) }
            var g = this.getCalculatedOffset(r, d, c, p);
            this.applyPlacement(g, r);
            var v = function() {
                var t = a.hoverState;
                a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == t && a.leave(a) };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v() } }, i.prototype.applyPlacement = function(e, i) {
        var s = this.tip(),
            a = s[0].offsetWidth,
            n = s[0].offsetHeight,
            o = parseInt(s.css("margin-top"), 10),
            r = parseInt(s.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(r) && (r = 0), e.top += o, e.left += r, t.offset.setOffset(s[0], t.extend({ using: function(t) { s.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), s.addClass("in");
        var h = s[0].offsetWidth,
            l = s[0].offsetHeight; "top" == i && l != n && (e.top = e.top + n - l);
        var d = this.getViewportAdjustedDelta(i, e, h, l);
        d.left ? e.left += d.left : e.top += d.top;
        var c = /top|bottom/.test(i),
            p = c ? 2 * d.left - a + h : 2 * d.top - n + l,
            u = c ? "offsetWidth" : "offsetHeight";
        s.offset(e), this.replaceArrow(p, s[0][u], c) }, i.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right") }, i.prototype.hide = function(e) {
        function s() { "in" != a.hoverState && n.detach(), a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), e && e() }
        var a = this,
            n = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), this.hoverState = null, this) }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "") }, i.prototype.hasContent = function() {
        return this.getTitle() }, i.prototype.getPosition = function(e) { e = e || this.$element;
        var i = e[0],
            s = "BODY" == i.tagName,
            a = i.getBoundingClientRect();
        null == a.width && (a = t.extend({}, a, { width: a.right - a.left, height: a.bottom - a.top }));
        var n = s ? { top: 0, left: 0 } : e.offset(),
            o = { scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
            r = s ? { width: t(window).width(), height: t(window).height() } : null;
        return t.extend({}, a, o, r, n) }, i.prototype.getCalculatedOffset = function(t, e, i, s) {
        return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - s, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - s / 2, left: e.left - i } : { top: e.top + e.height / 2 - s / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, s) {
        var a = { top: 0, left: 0 };
        if (!this.$viewport) return a;
        var n = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - n - o.scroll,
                h = e.top + n - o.scroll + s;
            r < o.top ? a.top = o.top - r : h > o.top + o.height && (a.top = o.top + o.height - h) } else {
            var l = e.left - n,
                d = e.left + n + i;
            l < o.left ? a.left = o.left - l : d > o.right && (a.left = o.left + o.width - d) }
        return a }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title) }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i) }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null }) };
    var s = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = s, this } }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.popover"),
                n = "object" == typeof e && e;
            (a || !/destroy|hide/.test(e)) && (a || s.data("bs.popover", a = new i(this, n)), "string" == typeof e && a[e]()) }) }
    var i = function(t, e) { this.init("popover", t, e) };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide() }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent() }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content) }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow"); };
    var s = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = s, this } }(jQuery), + function(t) { "use strict";

    function e(i, s) { this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = this.options.selector || (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

    function i(i) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            a || s.data("bs.scrollspy", a = new e(this, n)), "string" == typeof i && a[i]() }) }
    e.VERSION = "3.3.5", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            s = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                a = e.data("target") || e.attr("href"),
                n = /^#./.test(a) && t(a);
            return n && n.length && n.is(":visible") && [
                [n[i]().top + s, a]
            ] || null }).sort(function(t, e) {
            return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) }) }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            s = this.options.offset + i - this.$scrollElement.height(),
            a = this.offsets,
            n = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s) return o != (t = n[n.length - 1]) && this.activate(t);
        if (o && e < a[0]) return this.activeTarget = null, this.clear();
        for (t = a.length; t--;) o != n[t] && e >= a[t] && (void 0 === a[t + 1] || e < a[t + 1]) && this.activate(n[t]) }, e.prototype.activate = function(e) { this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy") }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = s, this }, t(window).on("load.bs.scrollspy.data-api", function() { t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data()) }) }) }(jQuery), + function(t) { "use strict";

    function e(e) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.tab");
            a || s.data("bs.tab", a = new i(this)), "string" == typeof e && a[e]() }) }
    var i = function(e) { this.element = t(e) };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            s = e.data("target");
        if (s || (s = e.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var a = i.find(".active:last a"),
                n = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                o = t.Event("show.bs.tab", { relatedTarget: a[0] });
            if (a.trigger(n), e.trigger(o), !o.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var r = t(s);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() { a.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: a[0] }) }) } } }, i.prototype.activate = function(e, s, a) {
        function n() { o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a() }
        var o = s.find("> .active"),
            r = a && t.support.transition && (o.length && o.hasClass("fade") || !!s.find("> .fade").length);
        o.length && r ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), o.removeClass("in") };
    var s = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = s, this };
    var a = function(i) { i.preventDefault(), e.call(t(this), "show") };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a) }(jQuery),
function(t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments)) }

    function s() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate()) }

    function a(t, e) {
        return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate() }

    function n(t) {
        return function() {
            return this[t].apply(this, arguments) } }

    function o(e, i) {
        function s(t, e) {
            return e.toLowerCase() }
        var a, n = t(e).data(),
            o = {},
            r = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var h in n) i.test(h) && (a = h.replace(r, s), o[a] = n[h]);
        return o }

    function r(e) {
        var i = {};
        if (g[e] || (e = e.split("-")[0], g[e])) {
            var s = g[e];
            return t.each(f, function(t, e) { e in s && (i[e] = s[e]) }), i } }
    var h = function() {
            var e = { get: function(t) {
                    return this.slice(t)[0] }, contains: function(t) {
                    for (var e = t && t.valueOf(), i = 0, s = this.length; s > i; i++)
                        if (this[i].valueOf() === e) return i;
                    return -1 }, remove: function(t) { this.splice(t, 1) }, replace: function(e) { e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e)) }, clear: function() { this.length = 0 }, copy: function() {
                    var t = new h;
                    return t.replace(this), t } };
            return function() {
                var i = [];
                return i.push.apply(i, arguments), t.extend(i, e), i } }(),
        l = function(e, i) { this._process_options(i), this.dates = new h, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(v.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                return parseInt(e) + 1 }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show() };
    l.prototype = { constructor: l, _process_options: function(a) { this._o = t.extend({}, this._o, a);
            var n = this.o = t.extend({}, this._o),
                o = n.language;
            switch (g[o] || (o = o.split("-")[0], g[o] || (o = u.language)), n.language = o, n.startView) {
                case 2:
                case "decade":
                    n.startView = 2;
                    break;
                case 1:
                case "year":
                    n.startView = 1;
                    break;
                default:
                    n.startView = 0 }
            switch (n.minViewMode) {
                case 1:
                case "months":
                    n.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    n.minViewMode = 2;
                    break;
                default:
                    n.minViewMode = 0 }
            n.startView = Math.max(n.startView, n.minViewMode), n.multidate !== !0 && (n.multidate = Number(n.multidate) || !1, n.multidate !== !1 && (n.multidate = Math.max(0, n.multidate))), n.multidateSeparator = String(n.multidateSeparator), n.weekStart %= 7, n.weekEnd = (n.weekStart + 6) % 7;
            var r = v.parseFormat(n.format);
            if (n.startDate !== -(1 / 0) && (n.startDate = n.startDate ? n.startDate instanceof Date ? this._local_to_utc(this._zero_time(n.startDate)) : v.parseDate(n.startDate, r, n.language) : -(1 / 0)), n.endDate !== 1 / 0 && (n.endDate = n.endDate ? n.endDate instanceof Date ? this._local_to_utc(this._zero_time(n.endDate)) : v.parseDate(n.endDate, r, n.language) : 1 / 0), n.daysOfWeekDisabled = n.daysOfWeekDisabled || [], t.isArray(n.daysOfWeekDisabled) || (n.daysOfWeekDisabled = n.daysOfWeekDisabled.split(/[,\s]*/)), n.daysOfWeekDisabled = t.map(n.daysOfWeekDisabled, function(t) {
                    return parseInt(t, 10) }), n.datesDisabled = n.datesDisabled || [], !t.isArray(n.datesDisabled)) {
                var h = [];
                h.push(v.parseDate(n.datesDisabled, r, n.language)), n.datesDisabled = h }
            n.datesDisabled = t.map(n.datesDisabled, function(t) {
                return v.parseDate(t, r, n.language) });
            var l = String(n.orientation).toLowerCase().split(/\s+/g),
                d = n.orientation.toLowerCase();
            if (l = t.grep(l, function(t) {
                    return /^auto|left|right|top|bottom$/.test(t) }), n.orientation = { x: "auto", y: "auto" }, d && "auto" !== d)
                if (1 === l.length) switch (l[0]) {
                    case "top":
                    case "bottom":
                        n.orientation.y = l[0];
                        break;
                    case "left":
                    case "right":
                        n.orientation.x = l[0] } else d = t.grep(l, function(t) {
                    return /^left|right$/.test(t) }), n.orientation.x = d[0] || "auto", d = t.grep(l, function(t) {
                    return /^top|bottom$/.test(t) }), n.orientation.y = d[0] || "auto";
                else;
            if (n.defaultViewDate) {
                var c = n.defaultViewDate.year || (new Date).getFullYear(),
                    p = n.defaultViewDate.month || 0,
                    f = n.defaultViewDate.day || 1;
                n.defaultViewDate = i(c, p, f) } else n.defaultViewDate = s();
            n.showOnFocus = n.showOnFocus !== e ? n.showOnFocus : !0 }, _events: [], _secondaryEvents: [], _applyEvents: function(t) {
            for (var i, s, a, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]), i.on(a, s) }, _unapplyEvents: function(t) {
            for (var i, s, a, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]), i.off(s, a) }, _buildEvents: function() {
            var e = { keyup: t.proxy(function(e) {-1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update() }, this), keydown: t.proxy(this.keydown, this) };
            this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                [this.element, e]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), e],
                [this.component, { click: t.proxy(this.show, this) }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, { click: t.proxy(this.show, this) }]
            ], this._events.push([this.element, "*", { blur: t.proxy(function(t) { this._focused_from = t.target }, this) }], [this.element, { blur: t.proxy(function(t) { this._focused_from = t.target }, this) }]), this._secondaryEvents = [
                [this.picker, { click: t.proxy(this.click, this) }],
                [t(window), { resize: t.proxy(this.place, this) }],
                [t(document), { "mousedown touchstart": t.proxy(function(t) { this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide() }, this) }]
            ] }, _attachEvents: function() { this._detachEvents(), this._applyEvents(this._events) }, _detachEvents: function() { this._unapplyEvents(this._events) }, _attachSecondaryEvents: function() { this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents) }, _detachSecondaryEvents: function() { this._unapplyEvents(this._secondaryEvents) }, _trigger: function(e, i) {
            var s = i || this.dates.get(-1),
                a = this._utc_to_local(s);
            this.element.trigger({ type: e, date: a, dates: t.map(this.dates, this._utc_to_local), format: t.proxy(function(t, e) { 0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                    var i = this.dates.get(t);
                    return v.formatDate(i, e, this.o.language) }, this) }) }, show: function() {
            return this.element.attr("readonly") ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this) }, hide: function() {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this }, remove: function() {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this }, _utc_to_local: function(t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset()) }, _local_to_utc: function(t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset()) }, _zero_time: function(t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate()) }, _zero_utc_time: function(t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())) }, getDates: function() {
            return t.map(this.dates, this._utc_to_local) }, getUTCDates: function() {
            return t.map(this.dates, function(t) {
                return new Date(t) }) }, getDate: function() {
            return this._utc_to_local(this.getUTCDate()) }, getUTCDate: function() {
            var t = this.dates.get(-1);
            return "undefined" != typeof t ? new Date(t) : null }, clearDates: function() {
            var t;
            this.isInput ? t = this.element : this.component && (t = this.element.find("input")), t && t.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide() }, setDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this }, setUTCDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this }, setDate: n("setDates"), setUTCDate: n("setUTCDates"), setValue: function() {
            var t = this.getFormattedDate();
            return this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change(), this }, getFormattedDate: function(i) { i === e && (i = this.o.format);
            var s = this.o.language;
            return t.map(this.dates, function(t) {
                return v.formatDate(t, i, s) }).join(this.o.multidateSeparator) }, setStartDate: function(t) {
            return this._process_options({ startDate: t }), this.update(), this.updateNavArrows(), this }, setEndDate: function(t) {
            return this._process_options({ endDate: t }), this.update(), this.updateNavArrows(), this }, setDaysOfWeekDisabled: function(t) {
            return this._process_options({ daysOfWeekDisabled: t }), this.update(), this.updateNavArrows(), this }, setDatesDisabled: function(t) { this._process_options({ datesDisabled: t }), this.update(), this.updateNavArrows() }, place: function() {
            if (this.isInline) return this;
            var e = this.picker.outerWidth(),
                i = this.picker.outerHeight(),
                s = 10,
                a = t(this.o.container).width(),
                n = t(this.o.container).height(),
                o = t(this.o.container).scrollTop(),
                r = t(this.o.container).offset(),
                h = [];
            this.element.parents().each(function() {
                var e = t(this).css("z-index"); "auto" !== e && 0 !== e && h.push(parseInt(e)) });
            var l = Math.max.apply(Math, h) + 10,
                d = this.component ? this.component.parent().offset() : this.element.offset(),
                c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                p = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                u = d.left - r.left,
                f = d.top - r.top;
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - p)) : d.left < 0 ? (this.picker.addClass("datepicker-orient-left"), u -= d.left - s) : u + e > a ? (this.picker.addClass("datepicker-orient-right"), u = d.left + p - e) : this.picker.addClass("datepicker-orient-left");
            var g, v, m = this.o.orientation.y;
            if ("auto" === m && (g = -o + f - i, v = o + n - (f + c + i), m = Math.max(g, v) === v ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + m), "top" === m ? f += c : f -= i + parseInt(this.picker.css("padding-top")), this.o.rtl) {
                var y = a - (u + p);
                this.picker.css({ top: f, right: y, zIndex: l }) } else this.picker.css({ top: f, left: u, zIndex: l });
            return this }, _allow_update: !0, update: function() {
            if (!this._allow_update) return this;
            var e = this.dates.copy(),
                i = [],
                s = !1;
            return arguments.length ? (t.each(arguments, t.proxy(function(t, e) { e instanceof Date && (e = this._local_to_utc(e)), i.push(e) }, this)), s = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
                return v.parseDate(t, this.o.format, this.o.language) }, this)), i = t.grep(i, t.proxy(function(t) {
                return t < this.o.startDate || t > this.o.endDate || !t }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), s ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this }, fillDow: function() {
            var t = this.o.weekStart,
                e = "<tr>";
            if (this.o.calendarWeeks) { this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(t, e) {
                    return parseInt(e) + 1 });
                var i = '<th class="cw">&#160;</th>';
                e += i }
            for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + g[this.o.language].daysMin[t++ % 7] + "</th>";
            e += "</tr>", this.picker.find(".datepicker-days thead").append(e) }, fillMonths: function() {
            for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + g[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t) }, setRange: function(e) { e && e.length ? this.range = t.map(e, function(t) {
                return t.valueOf() }) : delete this.range, this.fill() }, getClassNames: function(e) {
            var i = [],
                s = this.viewDate.getUTCFullYear(),
                n = this.viewDate.getUTCMonth(),
                o = new Date;
            return e.getUTCFullYear() < s || e.getUTCFullYear() === s && e.getUTCMonth() < n ? i.push("old") : (e.getUTCFullYear() > s || e.getUTCFullYear() === s && e.getUTCMonth() > n) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === o.getFullYear() && e.getUTCMonth() === o.getMonth() && e.getUTCDate() === o.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.o.datesDisabled.length > 0 && t.grep(this.o.datesDisabled, function(t) {
                return a(e, t) }).length > 0 && i.push("disabled", "disabled-date"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")), i }, fill: function() {
            var s, a = new Date(this.viewDate),
                n = a.getUTCFullYear(),
                o = a.getUTCMonth(),
                r = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                h = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                c = g[this.o.language].today || g.en.today || "",
                p = g[this.o.language].clear || g.en.clear || "";
            if (!isNaN(n) && !isNaN(o)) { this.picker.find(".datepicker-days thead .datepicker-switch").text(g[this.o.language].months[o] + " " + n), this.picker.find("tfoot .today").text(c).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(p).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
                var u = i(n, o - 1, 28),
                    f = v.getDaysInMonth(u.getUTCFullYear(), u.getUTCMonth());
                u.setUTCDate(f), u.setUTCDate(f - (u.getUTCDay() - this.o.weekStart + 7) % 7);
                var m = new Date(u);
                m.setUTCDate(m.getUTCDate() + 42), m = m.valueOf();
                for (var y, b = []; u.valueOf() < m;) {
                    if (u.getUTCDay() === this.o.weekStart && (b.push("<tr>"), this.o.calendarWeeks)) {
                        var w = new Date(+u + (this.o.weekStart - u.getUTCDay() - 7) % 7 * 864e5),
                            D = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
                            C = new Date(Number(C = i(D.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5),
                            T = (D - C) / 864e5 / 7 + 1;
                        b.push('<td class="cw">' + T + "</td>") }
                    if (y = this.getClassNames(u), y.push("day"), this.o.beforeShowDay !== t.noop) {
                        var k = this.o.beforeShowDay(this._utc_to_local(u));
                        k === e ? k = {} : "boolean" == typeof k ? k = { enabled: k } : "string" == typeof k && (k = { classes: k }), k.enabled === !1 && y.push("disabled"), k.classes && (y = y.concat(k.classes.split(/\s+/))), k.tooltip && (s = k.tooltip) }
                    y = t.unique(y), b.push('<td class="' + y.join(" ") + '"' + (s ? ' title="' + s + '"' : "") + ">" + u.getUTCDate() + "</td>"), s = null, u.getUTCDay() === this.o.weekEnd && b.push("</tr>"), u.setUTCDate(u.getUTCDate() + 1) }
                this.picker.find(".datepicker-days tbody").empty().append(b.join(""));
                var $ = this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");
                if (t.each(this.dates, function(t, e) { e.getUTCFullYear() === n && $.eq(e.getUTCMonth()).addClass("active") }), (r > n || n > l) && $.addClass("disabled"), n === r && $.slice(0, h).addClass("disabled"), n === l && $.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                    var x = this;
                    t.each($, function(e, i) {
                        if (!t(i).hasClass("disabled")) {
                            var s = new Date(n, e, 1),
                                a = x.o.beforeShowMonth(s);
                            a === !1 && t(i).addClass("disabled") } }) }
                b = "", n = 10 * parseInt(n / 10, 10);
                var S = this.picker.find(".datepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td");
                n -= 1;
                for (var _, U = t.map(this.dates, function(t) {
                        return t.getUTCFullYear() }), E = -1; 11 > E; E++) _ = ["year"], -1 === E ? _.push("old") : 10 === E && _.push("new"), -1 !== t.inArray(n, U) && _.push("active"), (r > n || n > l) && _.push("disabled"), b += '<span class="' + _.join(" ") + '">' + n + "</span>", n += 1;
                S.html(b) } }, updateNavArrows: function() {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    e = t.getUTCFullYear(),
                    i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.picker.find(".prev").css(this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? { visibility: "hidden" } : { visibility: "visible" }), this.picker.find(".next").css(this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? { visibility: "hidden" } : { visibility: "visible" });
                        break;
                    case 1:
                    case 2:
                        this.picker.find(".prev").css(this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() ? { visibility: "hidden" } : { visibility: "visible" }), this.picker.find(".next").css(this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? { visibility: "hidden" } : { visibility: "visible" }) } } }, click: function(e) { e.preventDefault();
            var s, a, n, o = t(e.target).closest("span, td, th");
            if (1 === o.length) switch (o[0].nodeName.toLowerCase()) {
                case "th":
                    switch (o[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            var r = v.modes[this.viewMode].navStep * ("prev" === o[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, r), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, r), 1 === this.viewMode && this._trigger("changeYear", this.viewDate) }
                            this.fill();
                            break;
                        case "today":
                            var h = new Date;
                            h = i(h.getFullYear(), h.getMonth(), h.getDate(), 0, 0, 0), this.showMode(-2);
                            var l = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(h, l);
                            break;
                        case "clear":
                            this.clearDates() }
                    break;
                case "span":
                    o.hasClass("disabled") || (this.viewDate.setUTCDate(1), o.hasClass("month") ? (n = 1, a = o.parent().find("span").index(o), s = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(i(s, a, n))) : (n = 1, a = 0, s = parseInt(o.text(), 10) || 0, this.viewDate.setUTCFullYear(s), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(s, a, n))), this.showMode(-1), this.fill());
                    break;
                case "td":
                    o.hasClass("day") && !o.hasClass("disabled") && (n = parseInt(o.text(), 10) || 1, s = this.viewDate.getUTCFullYear(), a = this.viewDate.getUTCMonth(), o.hasClass("old") ? 0 === a ? (a = 11, s -= 1) : a -= 1 : o.hasClass("new") && (11 === a ? (a = 0, s += 1) : a += 1), this._setDate(i(s, a, n))) }
            this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from }, _toggle_multidate: function(t) {
            var e = this.dates.contains(t);
            if (t || this.dates.clear(), -1 !== e ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0) }, _setDate: function(t, e) { e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide() }, moveMonth: function(t, i) {
            if (!t) return e;
            if (!i) return t;
            var s, a, n = new Date(t.valueOf()),
                o = n.getUTCDate(),
                r = n.getUTCMonth(),
                h = Math.abs(i);
            if (i = i > 0 ? 1 : -1, 1 === h) a = -1 === i ? function() {
                return n.getUTCMonth() === r } : function() {
                return n.getUTCMonth() !== s }, s = r + i, n.setUTCMonth(s), (0 > s || s > 11) && (s = (s + 12) % 12);
            else {
                for (var l = 0; h > l; l++) n = this.moveMonth(n, i);
                s = n.getUTCMonth(), n.setUTCDate(o), a = function() {
                    return s !== n.getUTCMonth() } }
            for (; a();) n.setUTCDate(--o), n.setUTCMonth(s);
            return n }, moveYear: function(t, e) {
            return this.moveMonth(t, 12 * e) }, dateWithinRange: function(t) {
            return t >= this.o.startDate && t <= this.o.endDate }, keydown: function(t) {
            if (!this.picker.is(":visible")) return void(27 === t.keyCode && this.show());
            var e, i, a, n = !1,
                o = this.focusDate || this.viewDate;
            switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || s(), e), a = this.moveYear(o, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || s(), e), a = this.moveMonth(o, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || s()), i.setUTCDate(i.getUTCDate() + e), a = new Date(o), a.setUTCDate(o.getUTCDate() + e)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || s(), e), a = this.moveYear(o, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || s(), e), a = this.moveMonth(o, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || s()), i.setUTCDate(i.getUTCDate() + 7 * e), a = new Date(o), a.setUTCDate(o.getUTCDate() + 7 * e)), this.dateWithinRange(a) && (this.focusDate = this.viewDate = a, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 32:
                    break;
                case 13:
                    o = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(o), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), "function" == typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide() }
            if (n) { this._trigger(this.dates.length ? "changeDate" : "clearDate");
                var r;
                this.isInput ? r = this.element : this.component && (r = this.element.find("input")), r && r.change() } }, showMode: function(t) { t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.children("div").hide().filter(".datepicker-" + v.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows() } };
    var d = function(e, i) { this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
            return t.jquery ? t[0] : t }), delete i.inputs, p.call(t(this.inputs), i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
            return t(e).data("datepicker") }), this.updateDates() };
    d.prototype = { updateDates: function() { this.dates = t.map(this.pickers, function(t) {
                return t.getUTCDate() }), this.updateRanges() }, updateRanges: function() {
            var e = t.map(this.dates, function(t) {
                return t.valueOf() });
            t.each(this.pickers, function(t, i) { i.setRange(e) }) }, dateUpdated: function(e) {
            if (!this.updating) { this.updating = !0;
                var i = t(e.target).data("datepicker"),
                    s = i.getUTCDate(),
                    a = t.inArray(e.target, this.inputs),
                    n = a - 1,
                    o = a + 1,
                    r = this.inputs.length;
                if (-1 !== a) {
                    if (t.each(this.pickers, function(t, e) { e.getUTCDate() || e.setUTCDate(s) }), s < this.dates[n])
                        for (; n >= 0 && s < this.dates[n];) this.pickers[n--].setUTCDate(s);
                    else if (s > this.dates[o])
                        for (; r > o && s > this.dates[o];) this.pickers[o++].setUTCDate(s);
                    this.updateDates(), delete this.updating } } }, remove: function() { t.map(this.pickers, function(t) { t.remove() }), delete this.element.data().datepicker } };
    var c = t.fn.datepicker,
        p = function(i) {
            var s = Array.apply(null, arguments);
            s.shift();
            var a;
            return this.each(function() {
                var n = t(this),
                    h = n.data("datepicker"),
                    c = "object" == typeof i && i;
                if (!h) {
                    var p = o(this, "date"),
                        f = t.extend({}, u, p, c),
                        g = r(f.language),
                        v = t.extend({}, u, g, p, c);
                    if (n.hasClass("input-daterange") || v.inputs) {
                        var m = { inputs: v.inputs || n.find("input").toArray() };
                        n.data("datepicker", h = new d(this, t.extend(v, m))) } else n.data("datepicker", h = new l(this, v)) }
                return "string" == typeof i && "function" == typeof h[i] && (a = h[i].apply(h, s), a !== e) ? !1 : void 0 }), a !== e ? a : this };
    t.fn.datepicker = p;
    var u = t.fn.datepicker.defaults = { autoclose: !1, beforeShowDay: t.noop, beforeShowMonth: t.noop, calendarWeeks: !1, clearBtn: !1, toggleActive: !1, daysOfWeekDisabled: [], datesDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keyboardNavigation: !0, language: "en", minViewMode: 0, multidate: !1, multidateSeparator: ",", orientation: "auto", rtl: !1, startDate: -(1 / 0), startView: 0, todayBtn: !1, todayHighlight: !1, weekStart: 0, disableTouchKeyboard: !1, container: "body" },
        f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = l;
    var g = t.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear" } },
        v = { modes: [{ clsName: "days", navFnc: "Month", navStep: 1 }, { clsName: "months", navFnc: "FullYear", navStep: 1 }, { clsName: "years", navFnc: "FullYear", navStep: 10 }], isLeapYear: function(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 }, getDaysInMonth: function(t, e) {
                return [31, v.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e] }, validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g, parseFormat: function(t) {
                var e = t.replace(this.validParts, "\x00").split("\x00"),
                    i = t.match(this.validParts);
                if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                return { separators: e, parts: i } }, parseDate: function(s, a, n) {
                function o() {
                    var t = this.slice(0, p[d].length),
                        e = p[d].slice(0, t.length);
                    return t.toLowerCase() === e.toLowerCase() }
                if (!s) return e;
                if (s instanceof Date) return s; "string" == typeof a && (a = v.parseFormat(a));
                var r, h, d, c = /([\-+]\d+)([dmwy])/,
                    p = s.match(/([\-+]\d+)([dmwy])/g);
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(s)) {
                    for (s = new Date, d = 0; d < p.length; d++) switch (r = c.exec(p[d]), h = parseInt(r[1]), r[2]) {
                        case "d":
                            s.setUTCDate(s.getUTCDate() + h);
                            break;
                        case "m":
                            s = l.prototype.moveMonth.call(l.prototype, s, h);
                            break;
                        case "w":
                            s.setUTCDate(s.getUTCDate() + 7 * h);
                            break;
                        case "y":
                            s = l.prototype.moveYear.call(l.prototype, s, h) }
                    return i(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), 0, 0, 0) }
                p = s && s.match(this.nonpunctuation) || [], s = new Date;
                var u, f, m = {},
                    y = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    b = { yyyy: function(t, e) {
                            return t.setUTCFullYear(e) }, yy: function(t, e) {
                            return t.setUTCFullYear(2e3 + e) }, m: function(t, e) {
                            if (isNaN(t)) return t;
                            for (e -= 1; 0 > e;) e += 12;
                            for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                            return t }, d: function(t, e) {
                            return t.setUTCDate(e) } };
                b.M = b.MM = b.mm = b.m, b.dd = b.d, s = i(s.getFullYear(), s.getMonth(), s.getDate(), 0, 0, 0);
                var w = a.parts.slice();
                if (p.length !== w.length && (w = t(w).filter(function(e, i) {
                        return -1 !== t.inArray(i, y) }).toArray()), p.length === w.length) {
                    var D;
                    for (d = 0, D = w.length; D > d; d++) {
                        if (u = parseInt(p[d], 10), r = w[d], isNaN(u)) switch (r) {
                            case "MM":
                                f = t(g[n].months).filter(o), u = t.inArray(f[0], g[n].months) + 1;
                                break;
                            case "M":
                                f = t(g[n].monthsShort).filter(o), u = t.inArray(f[0], g[n].monthsShort) + 1 }
                        m[r] = u }
                    var C, T;
                    for (d = 0; d < y.length; d++) T = y[d], T in m && !isNaN(m[T]) && (C = new Date(s), b[T](C, m[T]), isNaN(C) || (s = C)) }
                return s }, formatDate: function(e, i, s) {
                if (!e) return ""; "string" == typeof i && (i = v.parseFormat(i));
                var a = { d: e.getUTCDate(), D: g[s].daysShort[e.getUTCDay()], DD: g[s].days[e.getUTCDay()], m: e.getUTCMonth() + 1, M: g[s].monthsShort[e.getUTCMonth()], MM: g[s].months[e.getUTCMonth()], yy: e.getUTCFullYear().toString().substring(2), yyyy: e.getUTCFullYear() };
                a.dd = (a.d < 10 ? "0" : "") + a.d, a.mm = (a.m < 10 ? "0" : "") + a.m, e = [];
                for (var n = t.extend([], i.separators), o = 0, r = i.parts.length; r >= o; o++) n.length && e.push(n.shift()), e.push(a[i.parts[o]]);
                return e.join("") }, headTemplate: '<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>' };
    v.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + v.headTemplate + "<tbody></tbody>" + v.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + v.headTemplate + v.contTemplate + v.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = v, t.fn.datepicker.noConflict = function() {
        return t.fn.datepicker = c, this }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), p.call(i, "show")) }), t(function() { p.call(t('[data-provide="datepicker-inline"]')) }) }(window.jQuery), $(function() {
    var Charts = { _HYPHY_REGEX: /-([a-z])/g, _cleanAttr: function(t) { delete t.chart, delete t.value, delete t.labels }, doughnut: function(element) {
            var attrData = $.extend({}, $(element).data()),
                data = eval(attrData.value);
            Charts._cleanAttr(attrData);
            var options = $.extend({ responsive: !0, animation: !1, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 80 }, attrData);
            new Chart(element.getContext("2d")).Doughnut(data, options) }, bar: function(element) {
            var attrData = $.extend({}, $(element).data()),
                data = { labels: eval(attrData.labels), datasets: eval(attrData.value).map(function(t, e) {
                        return $.extend({ fillColor: e % 2 ? "#42a5f5" : "#1bc98e", strokeColor: "transparent" }, t) }) };
            Charts._cleanAttr(attrData);
            var options = $.extend({ responsive: !0, animation: !1, scaleShowVerticalLines: !1, scaleOverride: !0, scaleSteps: 4, scaleStepWidth: 25, scaleStartValue: 0, barValueSpacing: 10, scaleFontColor: "rgba(0,0,0,.4)", scaleFontSize: 14, scaleLineColor: "rgba(0,0,0,.05)", scaleGridLineColor: "rgba(0,0,0,.05)", barDatasetSpacing: 2 }, attrData);
            new Chart(element.getContext("2d")).Bar(data, options) }, line: function(element) {
            var attrData = $.extend({}, $(element).data()),
                data = { labels: eval(attrData.labels), datasets: eval(attrData.value).map(function(t) {
                        return $.extend({ fillColor: "rgba(66, 165, 245, .2)", strokeColor: "#42a5f5", pointStrokeColor: "#fff" }, t) }) };
            Charts._cleanAttr(attrData);
            var options = $.extend({ animation: !1, responsive: !0, bezierCurve: !0, bezierCurveTension: .25, scaleShowVerticalLines: !1, pointDot: !1, tooltipTemplate: "<%= value %>", scaleOverride: !0, scaleSteps: 3, scaleStepWidth: 1e3, scaleStartValue: 2e3, scaleLineColor: "rgba(0,0,0,.05)", scaleGridLineColor: "rgba(0,0,0,.05)", scaleFontColor: "rgba(0,0,0,.4)", scaleFontSize: 14, scaleLabel: function(t) {
                    return t.value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") } }, attrData);
            new Chart(element.getContext("2d")).Line(data, options) }, "spark-line": function(element) {
            var attrData = $.extend({}, $(element).data()),
                data = { labels: eval(attrData.labels), datasets: eval(attrData.value).map(function(t) {
                        return $.extend({ fillColor: "rgba(255,255,255,.3)", strokeColor: "#fff", pointStrokeColor: "#fff" }, t) }) };
            Charts._cleanAttr(attrData);
            var options = $.extend({ animation: !1, responsive: !0, bezierCurve: !0, bezierCurveTension: .25, showScale: !1, pointDotRadius: 0, pointDotStrokeWidth: 0, pointDot: !1, showTooltips: !1 }, attrData);
            new Chart(element.getContext("2d")).Line(data, options) } };
    $(document).on("redraw.bs.charts", function() { $("[data-chart]").each(function() { $(this).is(":visible") && Charts[$(this).attr("data-chart")](this) }) }).trigger("redraw.bs.charts") });
var App = {
    _isWithTooltips: !1,
    init: function() { App._tableSorters(), App._tooltips(), App._navDoc(), $(window).on("resize", App._tooltips), $(document).on("shown.bs.tab", function() { $(document).trigger("redraw.bs.charts") }), $(".docs-top").length && (App._backToTopButton(), $(window).on("scroll", App._backToTopButton)) },
    _navDoc: function() {
        function o() { e.width() > 768 ? i() : t() }

        function t() { e.off("resize.theme.nav"), e.off("scroll.theme.nav"), n.css({ position: "", left: "", top: "" }) }

        function i() {
            function o() { i.containerTop = $(".docs-content").offset().top - 40, i.containerRight = $(".docs-content").offset().left + $(".docs-content").width() + 45, t() }

            function t() {
                var o = e.scrollTop(),
                    t = Math.max(o - i.containerTop, 0);
                return t ? void n.css({ position: "fixed", left: i.containerRight, top: 40 }) : ($(n.find("li")[1]).addClass("active"), n.css({ position: "", left: "", top: "" })) }
            var i = {};
            o(), $(window).on("resize.theme.nav", o).on("scroll.theme.nav", t), $("body").scrollspy({ target: "#markdown-toc", selector: "li > a" }), setTimeout(function() { $("body").scrollspy("refresh") }, 1e3)
        }
        var n = $("#markdown-toc"),
            e = $(window);
        n[0] && (o(), e.on("resize", o))
    },
    _backToTopButton: function() { $(window).scrollTop() > $(window).height() ? $(".docs-top").fadeIn() : $(".docs-top").fadeOut() },
    _tooltips: function() {
        if ($(window).width() > 768) {
            if (App._isWithTooltips) return;
            App._isWithTooltips = !0, $('[data-toggle="tooltip"]').tooltip() } else {
            if (!App._isWithTooltips) return;
            App._isWithTooltips = !1, $('[data-toggle="tooltip"]').tooltip("destroy") } },
    _tableSorters: function() {}
};
App.init();
! function(a, b) { "use strict";

    function c(c, g) {
        var h = this;
        h.$el = a(c), h.el = c, h.id = e++, h.$el.bind("destroyed", a.proxy(h.teardown, h)), h.$clonedHeader = null, h.$originalHeader = null, h.cachedHeaderHeight = null, h.isSticky = !1, h.hasBeenSticky = !1, h.leftOffset = null, h.topOffset = null, h.init = function() { h.setOptions(g), h.$el.each(function() {
                var b = a(this);
                b.css("padding", 0), h.$originalHeader = a("thead:first", this), h.$clonedHeader = h.$originalHeader.clone(), b.trigger("clonedHeader." + d, [h.$clonedHeader]), h.$clonedHeader.addClass("tableFloatingHeader"), h.$clonedHeader.css({ display: "none", opacity: 0 }), h.$originalHeader.addClass("tableFloatingHeaderOriginal"), h.$originalHeader.after(h.$clonedHeader), h.$printStyle = a('<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>'), h.$head.append(h.$printStyle) }), h.updateWidth(), h.toggleHeaders(), h.bind() }, h.destroy = function() { h.$el.unbind("destroyed", h.teardown), h.teardown() }, h.teardown = function() { h.isSticky && h.$originalHeader.css("position", "static"), a.removeData(h.el, "plugin_" + d), h.unbind(), h.$clonedHeader.remove(), h.$originalHeader.removeClass("tableFloatingHeaderOriginal"), h.$originalHeader.css("visibility", "visible"), h.$printStyle.remove(), h.el = null, h.$el = null }, h.bind = function() { h.$scrollableArea.on("scroll." + d, h.toggleHeaders), h.isWindowScrolling || (h.$window.on("scroll." + d + h.id, h.setPositionValues), h.$window.on("resize." + d + h.id, h.toggleHeaders)), h.$scrollableArea.on("resize." + d, h.toggleHeaders), h.$scrollableArea.on("resize." + d, h.updateWidth) }, h.unbind = function() { h.$scrollableArea.off("." + d, h.toggleHeaders), h.isWindowScrolling || (h.$window.off("." + d + h.id, h.setPositionValues), h.$window.off("." + d + h.id, h.toggleHeaders)), h.$scrollableArea.off("." + d, h.updateWidth) }, h.debounce = function(a, b) {
            var c = null;
            return function() {
                var d = this,
                    e = arguments;
                clearTimeout(c), c = setTimeout(function() { a.apply(d, e) }, b) } }, h.toggleHeaders = h.debounce(function() { h.$el && h.$el.each(function() {
                var b, c = a(this),
                    e = h.isWindowScrolling ? isNaN(h.options.fixedOffset) ? h.options.fixedOffset.outerHeight() : h.options.fixedOffset : h.$scrollableArea.offset().top + (isNaN(h.options.fixedOffset) ? 0 : h.options.fixedOffset),
                    f = c.offset(),
                    g = h.$scrollableArea.scrollTop() + e,
                    i = h.$scrollableArea.scrollLeft(),
                    j = h.options.cacheHeaderHeight ? h.cachedHeaderHeight : h.$clonedHeader.height(),
                    k = h.isWindowScrolling ? g > f.top : e > f.top,
                    l = (h.isWindowScrolling ? g : 0) < f.top + c.height() - j - (h.isWindowScrolling ? 0 : e);
                k && l ? (b = f.left - i + h.options.leftOffset, h.$originalHeader.css({ position: "fixed", "background-color": "#1D1D1D", "margin-top": h.options.marginTop, left: b, "z-index": 3 }), h.leftOffset = b, h.topOffset = e, h.$clonedHeader.css("display", ""), h.isSticky || (h.isSticky = !0, h.updateWidth(), c.trigger("enabledStickiness." + d)), h.setPositionValues()) : h.isSticky && (h.$originalHeader.css("position", "static"), h.$clonedHeader.css("display", "none"), h.isSticky = !1, h.resetWidth(a("td,th", h.$clonedHeader), a("td,th", h.$originalHeader)), c.trigger("disabledStickiness." + d)) }) }, 0), h.setPositionValues = h.debounce(function() {
            var a = h.$window.scrollTop(),
                b = h.$window.scrollLeft();!h.isSticky || 0 > a || a + h.$window.height() > h.$document.height() || 0 > b || b + h.$window.width() > h.$document.width() || h.$originalHeader.css({ top: h.topOffset - (h.isWindowScrolling ? 0 : a), left: h.leftOffset - (h.isWindowScrolling ? 0 : b) }) }, 0), h.updateWidth = h.debounce(function() {
            if (h.isSticky) { h.$originalHeaderCells || (h.$originalHeaderCells = a("th,td", h.$originalHeader)), h.$clonedHeaderCells || (h.$clonedHeaderCells = a("th,td", h.$clonedHeader));
                var b = h.getWidth(h.$clonedHeaderCells);
                h.setWidth(b, h.$clonedHeaderCells, h.$originalHeaderCells), h.$originalHeader.css("width", h.$clonedHeader.width()), h.options.cacheHeaderHeight && (h.cachedHeaderHeight = h.$clonedHeader.height()) } }, 0), h.getWidth = function(c) {
            var d = [];
            return c.each(function(c) {
                var e, f = a(this);
                if ("border-box" === f.css("box-sizing")) {
                    var g = f[0].getBoundingClientRect();
                    e = g.width ? g.width : g.right - g.left } else {
                    var i = a("th", h.$originalHeader);
                    if ("collapse" === i.css("border-collapse"))
                        if (b.getComputedStyle) e = parseFloat(b.getComputedStyle(this, null).width);
                        else {
                            var j = parseFloat(f.css("padding-left")),
                                k = parseFloat(f.css("padding-right")),
                                l = parseFloat(f.css("border-width"));
                            e = f.outerWidth() - j - k - l }
                    else e = f.width() }
                d[c] = e }), d }, h.setWidth = function(a, b, c) { b.each(function(b) {
                var d = a[b];
                c.eq(b).css({ "min-width": d, "max-width": d }) }) }, h.resetWidth = function(b, c) { b.each(function(b) {
                var d = a(this);
                c.eq(b).css({ "min-width": d.css("min-width"), "max-width": d.css("max-width") }) }) }, h.setOptions = function(b) { h.options = a.extend({}, f, b), h.$window = a(h.options.objWindow), h.$head = a(h.options.objHead), h.$document = a(h.options.objDocument), h.$scrollableArea = a(h.options.scrollableArea), h.isWindowScrolling = h.$scrollableArea[0] === h.$window[0] }, h.updateOptions = function(a) { h.setOptions(a), h.unbind(), h.bind(), h.updateWidth(), h.toggleHeaders() }, h.init() }
    var d = "stickyTableHeaders",
        e = 0,
        f = { fixedOffset: 0, leftOffset: 0, marginTop: 0, objDocument: document, objHead: "head", objWindow: b, scrollableArea: b, cacheHeaderHeight: !1 };
    a.fn[d] = function(b) {
        return this.each(function() {
            var e = a.data(this, "plugin_" + d);
            e ? "string" == typeof b ? e[b].apply(e) : e.updateOptions(b) : "destroy" !== b && a.data(this, "plugin_" + d, new c(this, b)) }) } }(jQuery, window);
$("table").stickyTableHeaders();
$(document).on("click", ".load_btn1", function() {
    var id = $(this).attr('data');
    $("#myModalLabel").text($(this).text());
    $("#myModalBtn").hide();
    $("#docsModal").modal({ backdrop: "static" }); });


function reload() {
    if ($("#myModalResult").text() == ('Data Saved')) { location.reload(); } }
