!function() {
    function e(e) {
        return e && e.__esModule ? e.default : e
    }

    var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
        o = {},
        t = {},
        r = n.parcelRequired7c6;
    
    null == r && ((r = function(e) {
        if (e in o) return o[e].exports;
        if (e in t) {
            var n = t[e];
            delete t[e];
            var r = {
                id: e,
                exports: {}
            };
            return o[e] = r, n.call(r.exports, r, r.exports), r.exports
        }
        var i = new Error("Cannot find module '" + e + "'");
        throw i.code = "MODULE_NOT_FOUND", i
    }).register = function(e, n) {
        t[e] = n
    }, n.parcelRequired7c6 = r);

    var i = r("6JpON"),
        u = document.querySelector(".form"),
        a = document.querySelector('[name="delay"]'),
        l = document.querySelector('[name="step"]'),
        c = document.querySelector('[name="amount"]');

    function d(e, n) {
        return new Promise((function(o, t) {
            var r = Math.random() > .3;
            setTimeout((function() {
                r && o({
                    position: e,
                    delay: n
                }), t({
                    position: e,
                    delay: n
                })
            }), n)
        }))
    }

    u.addEventListener("submit", (function(n) {
        n.preventDefault();
        var o = Number(a.value),
            t = Number(l.value),
            r = Number(c.value);

        (r <= 0 || o < 0 || t < 0) && e(i).Notify.failure(" Please input correct values (>=0)");

        for (var f = 1; f <= r; f += 1)
            d(f, o).then((function(n) {
                var o = n.position,
                    t = n.delay;
                e(i).Notify.success("✅ Fulfilled promise ".concat(o, " in ").concat(t, "ms"))
            })).catch((function(n) {
                var o = n.position,
                    t = n.delay;
                e(i).Notify.failure("❌ Rejected promise ".concat(o, " in ").concat(t, "ms"))
            })), o += t;

        u.reset()
    }))
}();

