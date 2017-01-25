// Native Javascript for Bootstrap 3 v1.0.5 | © dnp_theme | MIT-License
! function(t, e) {
    if ("function" == typeof define && define.amd) define([], e);
    else if ("object" == typeof module && module.exports) module.exports = e();
    else {
        var i = e();
        t.Affix = i.Affix, t.Alert = i.Alert, t.Button = i.Button, t.Carousel = i.Carousel, t.Collapse = i.Collapse, t.Dropdown = i.Dropdown, t.Modal = i.Modal, t.Popover = i.Popover, t.ScrollSpy = i.ScrollSpy, t.Tab = i.Tab, t.Tooltip = i.Tooltip } }(this, function() {
    var t = function(t, e) { t.classList ? t.classList.add(e) : (t.className += " " + e, t.offsetWidth) },
        e = function(t, e) { t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "").replace(/^\s+|\s+$/g, "") },
        i = null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent) && parseFloat(RegExp.$1),
        o = function(t, e) {
            for (var i = e.charAt(0); t && t !== document; t = t.parentNode) {
                if ("." === i && void 0 !== document.querySelector(e)) return t;
                if ("#" === i && t.id === e.substr(1)) return t }
            return !1 },
        s = function(t) {
            var e = t.getBoundingClientRect();
            return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth) },
        n = function(t, e) {
            if (e = e || {}, this.element = "object" == typeof t ? t : document.querySelector(t), this.options = {}, this.options.target = e.target ? "object" == typeof e.target ? e.target : document.querySelector(e.target) : null, this.options.offsetTop = e.offsetTop && e.offsetTop ? "function" === e.offsetTop ? e.offsetTop() : parseInt(e.offsetTop, 0) : 0, this.options.offsetBottom = e.offsetBottom && e.offsetBottom ? "function" === e.offsetBottom ? e.offsetBottom() : parseInt(e.offsetBottom, 0) : null, this.element || this.options.target || this.options.offsetTop || this.options.offsetBottom) {
                var o = this;
                this.processOffsetTop = function() {
                    return null !== this.options.target ? this.options.target.getBoundingClientRect().top + this.scrollOffset() : null !== this.options.offsetTop ? this.options.offsetTop : void 0 }, this.processOffsetBottom = function() {
                    if (null !== this.options.offsetBottom) {
                        var t = this.getMaxScroll();
                        return t - this.element.offsetHeight - this.options.offsetBottom } }, this.checkPosition = function() { this.getPinOffsetTop = this.processOffsetTop, this.getPinOffsetBottom = this.processOffsetBottom }, this.scrollOffset = function() {
                    return window.pageYOffset || document.documentElement.scrollTop }, this.pinTop = function() { /\baffix/.test(this.element.className) || (this.element.className += " affix", this.affixed = !0) }, this.unPinTop = function() { /\baffix/.test(this.element.className) && (this.element.className = this.element.className.replace(" affix", ""), this.affixed = !1) }, this.pinBottom = function() { /\baffix-bottom/.test(this.element.className) || (this.element.className += " affix-bottom", this.affixedBottom = !0) }, this.unPinBottom = function() { /\baffix-bottom/.test(this.element.className) && (this.element.className = this.element.className.replace(" affix-bottom", ""), this.affixedBottom = !1) }, this.updatePin = function() { this.affixed === !1 && parseInt(this.processOffsetTop(), 0) - parseInt(this.scrollOffset(), 0) < 0 ? this.pinTop() : this.affixed === !0 && parseInt(this.scrollOffset(), 0) <= parseInt(this.getPinOffsetTop(), 0) && this.unPinTop(), this.affixedBottom === !1 && parseInt(this.processOffsetBottom(), 0) - parseInt(this.scrollOffset(), 0) < 0 ? this.pinBottom() : this.affixedBottom === !0 && parseInt(this.scrollOffset(), 0) <= parseInt(this.getPinOffsetBottom(), 0) && this.unPinBottom() }, this.updateAffix = function() { this.unPinTop(), this.unPinBottom(), this.checkPosition(), this.updatePin() }, this.getMaxScroll = function() {
                    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) }, this.scrollEvent = function() { window.addEventListener("scroll", function() { o.updatePin() }, !1) }, this.resizeEvent = function() {
                    var t = i && i < 10 ? 500 : 50;
                    window.addEventListener("resize", function() { setTimeout(function() { o.updateAffix() }, t) }, !1) }, this.affixed = !1, this.affixedBottom = !1, this.getPinOffsetTop = 0, this.getPinOffsetBottom = null, this.checkPosition(), this.updateAffix(), this.scrollEvent(), this.resizeEvent() } };
    ! function() {
        var t = document.querySelectorAll('[data-spy="affix"]'),
            e = 0,
            i = t.length;
        for (e; e < i; e++) {
            var o = t[e],
                s = {};
            s.offsetTop = o.getAttribute("data-offset-top"), s.offsetBottom = o.getAttribute("data-offset-bottom"), s.target = o.getAttribute("data-target"), !o || null === s.offsetTop && null === s.offsetBottom && null === s.target || new n(o, s) } }();
    var a = function(t) { this.btn = "object" == typeof t ? t : document.querySelector(t), this.alert = null, this.duration = 150;
        var e = this;
        this.close = function(t) {
            var i = t.target;
            e.btn = "alert" === i.getAttribute("data-dismiss") && "close" === i.className ? i : i.parentNode, e.alert = e.btn.parentNode, null !== e.alert && "alert" === e.btn.getAttribute("data-dismiss") && /\bin/.test(e.alert.className) && (e.alert.className = e.alert.className.replace(" in", ""), setTimeout(function() { e.alert && e.alert.parentNode.removeChild(e.alert) }, e.duration)) }, document.addEventListener("click", this.close, !1) };
    ! function() {
        var t = document.querySelectorAll('[data-dismiss="alert"]'),
            e = 0,
            i = t.length;
        for (e; e < i; e++) new a(t[e]) }();
    var r = function(i, o) {
        function s(t) { a && t.dispatchEvent(a) }
        this.btn = "object" == typeof i ? i : document.querySelector(i), this.option = "string" == typeof o ? o : null;
        var n = this,
            a = "CustomEvent" in window && window.dispatchEvent ? new CustomEvent("bs.button.change") : null;
        this.setState = function() { "loading" === this.option && (t(this.btn, "disabled"), this.btn.setAttribute("disabled", "disabled")), this.btn.innerHTML = this.state }, this.reset = function() {
            (/\bdisabled/.test(this.btn.className) || "disabled" === this.btn.getAttribute("disabled")) && (e(this.btn, "disabled"), this.btn.removeAttribute("disabled")), this.btn.innerHTML = this.btn.getAttribute("data-original-text") }, this.toggle = function(i) {
            var o = i.target.parentNode,
                a = "LABEL" === i.target.tagName ? i.target : "LABEL" === o.tagName ? o : null;
            if (a) {
                var r = this,
                    l = r.querySelectorAll(".btn"),
                    d = l.length,
                    c = 0,
                    h = a.getElementsByTagName("INPUT")[0];
                if (h && ("checkbox" === h.type && (h.checked ? (e(a, "active"), h.getAttribute("checked"), h.removeAttribute("checked"), h.checked = !1) : (t(a, "active"), h.getAttribute("checked"), h.setAttribute("checked", "checked"), h.checked = !0), s(h), s(n.btn)), "radio" === h.type && !h.checked))
                    for (t(a, "active"), h.setAttribute("checked", "checked"), h.checked = !0, s(n.btn), s(h), c; c < d; c++) {
                        var u = l[c];
                        if (u !== a && /\bactive/.test(u.className)) {
                            var p = u.getElementsByTagName("INPUT")[0];
                            e(u, "active"), p.removeAttribute("checked"), p.checked = !1, s(p) } } } }, /\bbtn/.test(this.btn.className) && (this.option && "reset" !== this.option ? (this.state = this.btn.getAttribute("data-" + this.option + "-text") || null, !this.btn.getAttribute("data-original-text") && this.btn.setAttribute("data-original-text", n.btn.innerHTML.replace(/^\s+|\s+$/g, "")), this.setState()) : "reset" === this.option && this.reset()), /\bbtn-group/.test(this.btn.className) && this.btn.addEventListener("click", this.toggle, !1) };
    ! function() {
        var t = document.querySelectorAll("[data-toggle=button]"),
            e = 0,
            i = t.length;
        for (e; e < i; e++) new r(t[e]);
        var o = document.querySelectorAll("[data-toggle=buttons]"),
            s = 0,
            n = o.length;
        for (s; s < n; s++) new r(o[s]) }();
    var l = function(t, e) { e = e || {}, this.carousel = "object" == typeof t ? t : document.querySelector(t), this.options = {}, this.options.keyboard = "true" === e.keyboard, this.options.pause = e.pause ? e.pause : "hover", this.duration = 600, this.options.duration = i && i < 10 ? 0 : parseInt(e.duration) || this.duration;
        var o = this.carousel.querySelectorAll(".item"),
            s = o.length;
        this.controls = this.carousel.querySelectorAll(".carousel-control"), this.prev = this.controls[0], this.next = this.controls[1], this.slides = [];
        for (var n = 0; n < s; n++) this.slides.push(o[n]);
        this.indicator = this.carousel.querySelector(".carousel-indicators"), this.indicators = this.carousel.querySelectorAll(".carousel-indicators li"), this.total = this.slides.length, this.timer = null, this.direction = null, this.index = 0;
        var a = this; "false" === e.interval ? this.options.interval = !1 : this.options.interval = parseInt(e.interval) || 5e3, this.cycle = function(t) { this.direction = "left", this.timer = setInterval(function() { a.index++, a.index == a.slides.length && (a.index = 0), a._slideTo(a.index, t) }, this.options.interval) }, this.pause = function() {
            var t = function() { a.options.interval === !1 || /\bpaused/.test(a.carousel.className) || (a.carousel.className += " paused", clearInterval(a.timer), a.timer = null) },
                e = function() { a.options.interval !== !1 && /\bpaused/.test(a.carousel.className) && (a.cycle(), a.carousel.className = a.carousel.className.replace(/\bpaused/, "")) };
            a.carousel.addEventListener("mouseenter", t, !1), a.carousel.addEventListener("mouseleave", e, !1), a.carousel.addEventListener("touchstart", t, !1), a.carousel.addEventListener("touchend", e, !1) }, this._slideTo = function(t, e) {
            var o = this._getActiveIndex(),
                s = this.direction,
                n = "left" === s ? "next" : "prev",
                r = null,
                l = null; "CustomEvent" in window && window.dispatchEvent && (r = new CustomEvent("slid.bs.carousel"), l = new CustomEvent("slide.bs.carousel")), l && this.carousel.dispatchEvent(l), this._removeEventListeners(), clearInterval(this.timer), this.timer = null, this._curentPage(this.indicators[t]), !/\bslide/.test(this.carousel.className) || i && i < 10 ? (this.slides[t].className += " active", this.slides[t].offsetWidth, this.slides[o].className = this.slides[o].className.replace(" active", ""), setTimeout(function() { a._addEventListeners(), a.options.interval === !1 || /\bpaused/.test(a.carousel.className) || (clearInterval(a.timer), a.cycle()), r && a.carousel.dispatchEvent(r) }, this.options.duration + 100)) : (this.slides[t].className += " " + n, this.slides[t].offsetWidth, this.slides[t].className += " " + s, this.slides[o].className += " " + s, setTimeout(function() { a._addEventListeners(), a.slides[t].className += " active", a.slides[o].className = a.slides[o].className.replace(" active", ""), a.slides[t].className = a.slides[t].className.replace(" " + n, ""), a.slides[t].className = a.slides[t].className.replace(" " + s, ""), a.slides[o].className = a.slides[o].className.replace(" " + s, ""), a.options.interval === !1 || /\bpaused/.test(a.carousel.className) || (clearInterval(a.timer), a.cycle()), r && a.carousel.dispatchEvent(r) }, this.options.duration + 100)) }, this._addEventListeners = function() { this.next && this.next.addEventListener("click", this.controlsHandler, !1), this.prev && this.prev.addEventListener("click", this.controlsHandler, !1), this.indicator && this.indicator.addEventListener("click", this.indicatorHandler, !1), this.options.keyboard === !0 && window.addEventListener("keydown", this.keyHandler, !1) }, this._removeEventListeners = function() { this.next && this.next.removeEventListener("click", this.controlsHandler, !1), this.prev && this.prev.removeEventListener("click", this.controlsHandler, !1), this.indicator && this.indicator.removeEventListener("click", this.indicatorHandler, !1), this.options.keyboard === !0 && window.removeEventListener("keydown", this.keyHandler, !1) }, this._getActiveIndex = function() {
            return this.slides.indexOf(this.carousel.querySelector(".item.active")) }, this._curentPage = function(t) {
            for (var e = 0; e < this.indicators.length; ++e) {
                var i = this.indicators[e];
                i.className = "" }
            t && (t.className = "active") }, this.indicatorHandler = function(t) { t.preventDefault();
            var e = t.target,
                i = a._getActiveIndex();
            if (!e || /\bactive/.test(e.className) || !e.getAttribute("data-slide-to")) return !1;
            var o = parseInt(e.getAttribute("data-slide-to"), 10);
            a.index = o, 0 == a.index ? a.index = 0 : a.index == a.total - 1 && (a.index = a.total - 1), i < a.index || i === a.total - 1 && 0 === a.index ? a.direction = "left" : (i > a.index || 0 === i && a.index === a.total - 1) && (a.direction = "right"), a._slideTo(a.index, t) }, this.controlsHandler = function(t) {
            var e = t.currentTarget || t.srcElement;
            e === a.next ? (a.index++, a.direction = "left", a.index == a.total - 1 ? a.index = a.total - 1 : a.index == a.total && (a.index = 0)) : e === a.prev && (a.index--, a.direction = "right", 0 == a.index ? a.index = 0 : a.index < 0 && (a.index = a.total - 1)), a._slideTo(a.index, t) }, this.keyHandler = function(t) {
            switch (t.which) {
                case 39:
                    t.preventDefault(), a.index++, a.direction = "left", a.index == a.total - 1 ? a.index = a.total - 1 : a.index == a.total && (a.index = 0);
                    break;
                case 37:
                    t.preventDefault(), a.index--, a.direction = "right", 0 == a.index ? a.index = 0 : a.index < 0 && (a.index = a.total - 1);
                    break;
                default:
                    return }
            a._slideTo(a.index, t) }, this.options.interval !== !1 && this.cycle(), this.options && "hover" === this.options.pause && this.options.interval !== !1 && this.pause(), this._addEventListeners(), this.next && this.next.addEventListener("click", function(t) { t.preventDefault() }, !1), this.prev && this.prev.addEventListener("click", function(t) { t.preventDefault() }, !1) };
    ! function() {
        var t = document.querySelectorAll('[data-ride="carousel"]'),
            e = 0,
            i = t.length;
        for (e; e < i; e++) {
            var o = t[e],
                s = {};
            s.interval = o.getAttribute("data-interval") && o.getAttribute("data-interval"), s.pause = o.getAttribute("data-pause") && o.getAttribute("data-pause") || "hover", s.keyboard = o.getAttribute("data-keyboard") && o.getAttribute("data-keyboard") || !1, s.duration = o.getAttribute("data-duration") && o.getAttribute("data-duration") || !1, new l(o, s) } }();
    var d = function(s, n) { n = n || {}, this.btn = "object" == typeof s ? s : document.querySelector(s), this.accordion = null, this.collapse = null, this.duration = 300, this.options = {}, this.options.duration = i && i < 10 ? 0 : n.duration || this.duration;
        var a = this,
            r = function(t) {
                var e = t && (t.currentStyle || window.getComputedStyle(t)),
                    i = /px/.test(e.borderTopWidth) ? Math.round(e.borderTopWidth.replace("px", "")) : 0,
                    o = /px/.test(e.marginTop) ? Math.round(e.marginTop.replace("px", "")) : 0,
                    s = /px/.test(e.marginBottom) ? Math.round(e.marginBottom.replace("px", "")) : 0,
                    n = /em/.test(e.marginTop) ? Math.round(e.marginTop.replace("em", "") * parseInt(e.fontSize)) : 0,
                    a = /em/.test(e.marginBottom) ? Math.round(e.marginBottom.replace("em", "") * parseInt(e.fontSize)) : 0;
                return t.clientHeight + parseInt(i) + parseInt(o) + parseInt(s) + parseInt(n) + parseInt(a) };
        this.toggle = function(t) { t.preventDefault(), /\bin/.test(a.collapse.className) ? a.close() : a.open() }, this.close = function() { this._close(this.collapse), t(this.btn, "collapsed") }, this.open = function() {
            if (this._open(this.collapse), e(this.btn, "collapsed"), null !== this.accordion) {
                var t = this.accordion.querySelectorAll(".collapse.in"),
                    i = t.length,
                    o = 0;
                for (o; o < i; o++) t[o] !== this.collapse && this._close(t[o]) } }, this._open = function(i) { this.removeEvent(), t(i, "in"), i.setAttribute("aria-expanded", "true"), t(i, "collapsing"), setTimeout(function() { i.style.height = a.getMaxHeight(i) + "px", i.style.overflowY = "hidden" }, 0), setTimeout(function() { i.style.height = "", i.style.overflowY = "", e(i, "collapsing"), a.addEvent() }, this.options.duration) }, this._close = function(i) { this.removeEvent(), i.setAttribute("aria-expanded", "false"), i.style.height = this.getMaxHeight(i) + "px", setTimeout(function() { i.style.height = "0px", i.style.overflowY = "hidden", t(i, "collapsing") }, 0), setTimeout(function() { e(i, "collapsing"), e(i, "in"), i.style.overflowY = "", i.style.height = "", a.addEvent() }, this.options.duration) }, this.getMaxHeight = function(t) {
            for (var e = 0, i = 0, o = t.children.length; i < o; i++) e += r(t.children[i]);
            return e }, this.removeEvent = function() { this.btn.removeEventListener("click", this.toggle, !1) }, this.addEvent = function() { this.btn.addEventListener("click", this.toggle, !1) }, this.getTarget = function() {
            var t = this.btn,
                e = t.href && t.getAttribute("href").replace("#", ""),
                i = t.getAttribute("data-target") && t.getAttribute("data-target"),
                o = e || i && /#/.test(i) && i.replace("#", ""),
                s = i && "." === i.charAt(0) && i,
                n = o && document.getElementById(o) || s && document.querySelector(s);
            return n }, this.addEvent(), this.collapse = this.getTarget(), this.accordion = this.btn.getAttribute("data-parent") && o(this.btn, this.btn.getAttribute("data-parent")) };
    ! function() {
        var t = document.querySelectorAll('[data-toggle="collapse"]'),
            e = 0,
            i = t.length;
        for (e; e < i; e++) {
            var o = t[e],
                s = {};
            s.duration = o.getAttribute("data-duration"), new d(o, s) } }();
    var c = function(t) { this.menu = "object" == typeof t ? t : document.querySelector(t);
        var e = this;
        this.handle = function(t) {
            var i = t.target || t.currentTarget,
                o = [],
                s = e.menu.parentNode.getElementsByTagName("*"); /\#$/g.test(i.href) && t.preventDefault();
            for (var n = 0, a = s.length || 0; n < a; n++) a && o.push(s[n]);
            if (i === e.menu || i.parentNode === e.menu || i.parentNode.parentNode === e.menu) e.toggle(t);
            else {
                if (o && o.indexOf(i) > -1) return;
                e.close() } }, this.toggle = function(t) { /\bopen/.test(this.menu.parentNode.className) ? (this.close(), document.removeEventListener("keydown", this.key, !1)) : (this.menu.parentNode.className += " open", this.menu.setAttribute("aria-expanded", !0), document.addEventListener("keydown", this.key, !1)) }, this.key = function(t) { 27 == t.which && e.close() }, this.close = function() { e.menu.parentNode.className = e.menu.parentNode.className.replace(/\bopen/, ""), e.menu.setAttribute("aria-expanded", !1) }, this.menu.setAttribute("tabindex", "0"), document.addEventListener("click", this.handle, !1) };
    ! function() {
        var t = document.querySelectorAll("[data-toggle=dropdown]"),
            e = 0,
            i = t.length;
        for (e; e < i; e++) new c(t[e]) }();
    var h = function(o, s) { s = s || {}, this.modal = "object" == typeof o ? o : document.querySelector(o), this.options = {}, this.options.backdrop = "false" !== s.backdrop, this.options.keyboard = "false" !== s.keyboard, this.options.content = s.content, this.duration = s.duration || 300, this.options.duration = i && i < 10 ? 0 : this.duration, this.scrollbarWidth = 0, this.dialog = this.modal.querySelector(".modal-dialog"), this.timer = 0;
        var n = this,
            a = function() {
                var t = document.documentElement.getBoundingClientRect(),
                    e = window.innerWidth || t.right - Math.abs(t.left);
                return e },
            r = function() {
                var t = window.getComputedStyle(document.body),
                    e = parseInt(t.paddingRight, 10);
                n.bodyIsOverflowing && (document.body.style.paddingRight = e + n.scrollbarWidth + "px") },
            l = function() { document.body.style.paddingRight = "" },
            d = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.offsetWidth - t.clientWidth;
                return document.body.removeChild(t), e },
            c = function() { n.bodyIsOverflowing = document.body.clientWidth < a(), n.modalIsOverflowing = n.modal.scrollHeight > document.documentElement.clientHeight, n.scrollbarWidth = d() };
        this.open = function() {
            var i = document.querySelector(".modal.in");
            i && (clearTimeout(i.getAttribute("data-timer")), e(i, "in"), setTimeout(function() { i.setAttribute("aria-hidden", !0), i.style.display = "" }, this.options.duration / 2)), this.options.backdrop ? this.createOverlay() : this.overlay = null, this.overlay && setTimeout(function() { t(n.overlay, "in") }, 0), clearTimeout(n.modal.getAttribute("data-timer")), this.timer = setTimeout(function() { n.modal.style.display = "block", c(), n.adjustDialog(), r(), n.resize(), n.dismiss(), n.keydown(), t(document.body, "modal-open"), t(n.modal, "in"), n.modal.setAttribute("aria-hidden", !1) }, this.options.duration / 2), this.modal.setAttribute("data-timer", this.timer) }, this.close = function() { this.overlay && e(this.overlay, "in"), e(this.modal, "in"), this.modal.setAttribute("aria-hidden", !0), clearTimeout(this.modal.getAttribute("data-timer")), this.timer = setTimeout(function() { e(document.body, "modal-open"), n.resize(), n.resetAdjustments(), l(), n.dismiss(), n.keydown(), n.modal.style.display = "" }, this.options.duration / 2), this.modal.setAttribute("data-timer", this.timer), setTimeout(function() { document.querySelector(".modal.in") || n.removeOverlay() }, this.options.duration) }, this.content = function(t) {
            return this.modal.querySelector(".modal-content").innerHTML = t }, this.createOverlay = function() {
            var t = document.createElement("div"),
                e = document.querySelector(".modal-backdrop");
            t.setAttribute("class", "modal-backdrop fade"), e ? this.overlay = e : (this.overlay = t, document.body.appendChild(t)) }, this.removeOverlay = function() {
            var t = document.querySelector(".modal-backdrop");
            null !== t && void 0 !== t && document.body.removeChild(t) }, this.keydown = function() {
            function t(t) { n.options.keyboard && 27 == t.which && n.close() } /\bin/.test(this.modal.className) ? document.removeEventListener("keydown", t, !1) : document.addEventListener("keydown", t, !1) }, this.trigger = function() {
            var t = document.querySelectorAll('[data-toggle="modal"]'),
                e = t.length,
                i = 0;
            for (i; i < e; i++) t[i].addEventListener("click", function(t) { t.preventDefault();
                var e = this,
                    i = e.getAttribute("data-target") && e.getAttribute("data-target").replace("#", "") || e.getAttribute("href") && e.getAttribute("href").replace("#", "");
                document.getElementById(i) === n.modal && n.open() }) }, this._resize = function() {
            var t = this.overlay || document.querySelector(".modal-backdrop"),
                e = { w: document.documentElement.clientWidth + "px", h: document.documentElement.clientHeight + "px" };
            null !== t && /\bin/.test(t.className) && (t.style.height = e.h, t.style.width = e.w) }, this.oneResize = function() {
            function t() { n._resize(), n.handleUpdate(), window.removeEventListener("resize", t, !1) }
            window.addEventListener("resize", t, !1) }, this.resize = function() { /\bin/.test(this.modal.className) ? window.removeEventListener("resize", this.oneResize, !1) : window.addEventListener("resize", this.oneResize, !1) }, this.dismiss = function() {
            function t(t) { "modal" !== this.getAttribute("data-dismiss") && this !== n.modal || (t.preventDefault(), n.close()) } /\bin/.test(this.modal.className) ? this.modal.removeEventListener("click", t, !1) : this.modal.addEventListener("click", t, !1) }, this.handleUpdate = function() { this.adjustDialog() }, this.adjustDialog = function() { this.modal.style.paddingLeft = !this.bodyIsOverflowing && this.modalIsOverflowing ? this.scrollbarWidth + "px" : "", this.modal.style.paddingRight = this.bodyIsOverflowing && !this.modalIsOverflowing ? this.scrollbarWidth + "px" : "" }, this.resetAdjustments = function() { this.modal.style.paddingLeft = "", this.modal.style.paddingRight = "" }, this.trigger(), this.options.content && void 0 !== this.options.content && this.content(this.options.content) };
    ! function() {
        var t = document.querySelectorAll(".modal"),
            e = t.length,
            i = 0;
        for (i; i < e; i++) {
            var o = t[i],
                s = {};
            s.keyboard = o.getAttribute("data-keyboard"), s.backdrop = o.getAttribute("data-backdrop"), s.duration = o.getAttribute("data-duration"), new h(o, s) } }();
    var u = function(t, e) {
        if (e = e || {}, this.link = "object" == typeof t ? t : document.querySelector(t), this.title = this.link.getAttribute("data-title") || null, this.content = this.link.getAttribute("data-content") || null, this.popover = null, this.options = {}, this.options.template = e.template ? e.template : null, this.options.trigger = e.trigger ? e.trigger : "hover", this.options.animation = e.animation && "true" !== e.animation ? e.animation : "true", this.options.placement = e.placement ? e.placement : "top", this.options.delay = parseInt(e.delay) || 100, this.options.dismiss = !(!e.dismiss || "true" !== e.dismiss), this.duration = 150, this.options.duration = i && i < 10 ? 0 : e.duration || this.duration, this.options.container = document.body, this.content || this.options.template) { this.timer = 0;
            var o = this,
                n = "onmouseleave" in this.link ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"];
            this.toggle = function(t) { null === o.popover ? o.open() : o.close() }, this.open = function(t) { clearTimeout(o.link.getAttribute("data-timer")), o.timer = setTimeout(function() { null === o.popover && (o.createPopover(), o.stylePopover(), o.updatePopover()) }, o.options.duration), o.link.setAttribute("data-timer", o.timer) }, this.dismiss = function(t) { o.popover && t.target === o.popover.querySelector(".close") && o.close() }, this.close = function(t) { clearTimeout(o.link.getAttribute("data-timer")), o.timer = setTimeout(function() { o.popover && null !== o.popover && /\bin/.test(o.popover.className) && (o.popover.className = o.popover.className.replace(" in", ""), setTimeout(function() { o.removePopover() }, o.options.duration)) }, o.options.delay + o.options.duration), o.link.setAttribute("data-timer", o.timer) }, this.removePopover = function() { this.popover && this.options.container.removeChild(this.popover), this.popover = null, this.timer = null }, this.createPopover = function() {
                if (this.popover = document.createElement("div"), null !== this.content && null === this.options.template) { this.popover.setAttribute("role", "tooltip");
                    var t = document.createElement("div");
                    if (t.setAttribute("class", "arrow"), null !== this.title) {
                        var e = document.createElement("h3");
                        e.setAttribute("class", "popover-title"), this.options.dismiss ? e.innerHTML = this.title + '<button type="button" class="close">×</button>' : e.innerHTML = this.title, this.popover.appendChild(e) }
                    var i = document.createElement("div");
                    i.setAttribute("class", "popover-content"), this.popover.appendChild(t), this.popover.appendChild(i), this.options.dismiss && null === this.title ? i.innerHTML = this.content + '<button type="button" class="close">×</button>' : i.innerHTML = this.content } else {
                    var o = document.createElement("div");
                    o.innerHTML = this.options.template, this.popover.innerHTML = o.firstChild.innerHTML }
                this.options.container.appendChild(this.popover), this.popover.style.display = "block" }, this.stylePopover = function(t) {
                var e = this.link.getBoundingClientRect(),
                    i = t || this.options.placement,
                    o = "true" === this.options.animation ? "fade" : "";
                this.popover.setAttribute("class", "popover " + i + " " + o);
                var s = { w: e.right - e.left, h: e.bottom - e.top },
                    n = { w: this.popover.offsetWidth, h: this.popover.offsetHeight },
                    a = this.getScroll().y,
                    r = this.getScroll().x; /top/.test(i) ? (this.popover.style.top = e.top + a - n.h + "px", this.popover.style.left = e.left + r - n.w / 2 + s.w / 2 + "px") : /bottom/.test(i) ? (this.popover.style.top = e.top + a + s.h + "px", this.popover.style.left = e.left + r - n.w / 2 + s.w / 2 + "px") : /left/.test(i) ? (this.popover.style.top = e.top + a - n.h / 2 + s.h / 2 + "px", this.popover.style.left = e.left + r - n.w + "px") : /right/.test(i) && (this.popover.style.top = e.top + a - n.h / 2 + s.h / 2 + "px", this.popover.style.left = e.left + r + s.w + "px") }, this.updatePopover = function() {
                var t = null;
                t = s(this.popover) ? this.options.placement : this.updatePlacement(), this.stylePopover(t), this.popover.className += " in" }, this.updatePlacement = function() {
                var t = this.options.placement;
                return /top/.test(t) ? "bottom" : /bottom/.test(t) ? "top" : /left/.test(t) ? "right" : /right/.test(t) ? "left" : void 0 }, this.getScroll = function() {
                return { y: window.pageYOffset || document.documentElement.scrollTop, x: window.pageXOffset || document.documentElement.scrollLeft } }, "hover" === this.options.trigger ? (this.link.addEventListener(n[0], this.open, !1), this.options.dismiss || this.link.addEventListener(n[1], this.close, !1)) : "click" === this.options.trigger ? (this.link.addEventListener("click", this.toggle, !1), this.options.dismiss || this.link.addEventListener("blur", this.close, !1)) : "focus" === this.options.trigger && (this.link.addEventListener("focus", this.toggle, !1), this.options.dismiss || this.link.addEventListener("blur", this.close, !1)), this.options.dismiss && document.addEventListener("click", this.dismiss, !1), i && i < 9 || window.addEventListener("resize", this.close, !1) } };
    ! function() {
        var t = document.querySelectorAll("[data-toggle=popover]"),
            e = 0,
            i = t.length;
        for (e; e < i; e++) {
            var o = t[e],
                s = {};
            s.trigger = o.getAttribute("data-trigger"), s.animation = o.getAttribute("data-animation"), s.duration = o.getAttribute("data-duration"), s.placement = o.getAttribute("data-placement"), s.dismiss = o.getAttribute("data-dismiss"), s.delay = o.getAttribute("data-delay"), new u(o, s) } }();
    var p = function(o, s, n) { n = n || {}, this.element = "object" == typeof o ? o : document.querySelector(o), this.options = {}, this.options.target = n.target ? "object" == typeof n.target ? n.target : document.querySelector(n.target) : null, this.items = this.options.target && this.options.target.getElementsByTagName("A"), this.item = s, this.parent = this.item.parentNode, this.parentParent = this.parent.parentNode.parentNode, this.tg = this.item.href && document.getElementById(this.item.getAttribute("href").replace("#", "")), this.active = !1, this.topEdge = 0, this.bottomEdge = 0;
        var a = this;
        this.element.offsetHeight < this.element.scrollHeight ? this.scrollTarget = this.element : this.scrollTarget = window, this.options.target && (this.topLimit = function() {
            return this.scrollTarget === window ? this.tg.getBoundingClientRect().top + this.scrollOffset() - 5 : this.tg.offsetTop }, this.bottomLimit = function() {
            return this.topLimit() + this.tg.clientHeight }, this.checkEdges = function() { this.topEdge = this.topLimit(), this.bottomEdge = this.bottomLimit() }, this.scrollOffset = function() {
            return this.scrollTarget === window ? window.pageYOffset || document.documentElement.scrollTop : this.element.scrollTop }, this.activate = function() { this.parent && "LI" === this.parent.tagName && !/\bactive/.test(this.parent.className) && (t(this.parent, "active"), this.parentParent && "LI" === this.parentParent.tagName && /\bdropdown/.test(this.parentParent.className) && !/\bactive/.test(this.parentParent.className) && t(this.parentParent, "active"), this.active = !0) }, this.deactivate = function() { this.parent && "LI" === this.parent.tagName && /\bactive/.test(this.parent.className) && (e(this.parent, "active"), this.parentParent && "LI" === this.parentParent.tagName && /\bdropdown/.test(this.parentParent.className) && /\bactive/.test(this.parentParent.className) && e(this.parentParent, "active"), this.active = !1) }, this.toggle = function() { this.active === !1 && this.bottomEdge > this.scrollOffset() && this.scrollOffset() >= this.topEdge ? this.activate() : this.active === !0 && this.bottomEdge <= this.scrollOffset() && this.scrollOffset() < this.topEdge && this.deactivate() }, this.refresh = function() { this.deactivate(), this.checkEdges(), this.toggle() }, this.scrollEvent = function() {
            function t() { a.refresh() }
            this.scrollTarget.addEventListener("scroll", t, !1) }, this.resizeEvent = function() {
            function t() { a.refresh() }
            window.addEventListener("resize", t, !1) }, this.scrollHeight = function() {
            return this.scrollTarget === window ? Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) : this.element.scrollHeight }, this.item.getAttribute("href") && this.item.getAttribute("href").indexOf("#") > -1 && (this.checkEdges(), this.refresh(), this.scrollEvent(), i && i < 9 || this.resizeEvent())) };
    ! function() {
        var t = document.querySelectorAll('[data-spy="scroll"]'),
            e = 0,
            i = t.length;
        for (e; e < i; e++) {
            var o = t[e],
                s = {};
            if (s.target = o.getAttribute("data-target") || null, null !== s.target) {
                var n = "object" === s.target ? s.target : document.querySelector(s.target),
                    a = n.querySelectorAll("a"),
                    r = 0,
                    l = a.length;
                for (r; r < l; r++) {
                    var d = a[r];
                    d.href && "#" !== d.getAttribute("href") && new p(o, d, s) } } } }();
    var m = function(o, s) { s = s || {}, this.tab = "object" == typeof o ? o : document.querySelector(o), this.tabs = this.tab.parentNode.parentNode, this.dropdown = this.tabs.querySelector(".dropdown"), /\bdropdown-menu/.test(this.tabs.className) && (this.dropdown = this.tabs.parentNode, this.tabs = this.tabs.parentNode.parentNode), this.options = s, this.duration = 150, this.options.duration = i && i < 10 ? 0 : s.duration || this.duration;
        var n = this;
        this.handle = function(i) { i = i || window.e, i.preventDefault();
            var o = i.target,
                s = document.getElementById(o.getAttribute("href").replace("#", "")),
                a = n.getActiveTab(),
                r = n.getActiveContent(); /\bactive/.test(o.parentNode.className) || (e(a, "active"), t(o.parentNode, "active"), n.dropdown && (/\bdropdown-menu/.test(n.tab.parentNode.parentNode.className) ? /\bactive/.test(n.dropdown.className) || t(n.dropdown, "active") : /\bactive/.test(n.dropdown.className) && e(n.dropdown, "active")), e(r, "in"), setTimeout(function() { e(r, "active"), t(s, "active") }, n.options.duration), setTimeout(function() { t(s, "in") }, 2 * n.options.duration)) }, this.getActiveTab = function() {
            var t = this.tabs.querySelectorAll(".active");
            return 1 !== t.length || /\bdropdown/.test(t[0].className) ? t.length > 1 ? t[t.length - 1] : void 0 : t[0] }, this.getActiveContent = function() {
            var t = this.getActiveTab().getElementsByTagName("A")[0].getAttribute("href").replace("#", "");
            return t && document.getElementById(t) }, this.tab.addEventListener("click", this.handle, !1) };
    ! function() {
        var t = document.querySelectorAll("[data-toggle='tab'], [data-toggle='pill']"),
            e = t.length,
            i = 0;
        for (i; i < e; i++) {
            var o = t[i],
                s = {};
            s.duration = o.getAttribute("data-duration") && o.getAttribute("data-duration") || !1, new m(o, s) } }();
    var f = function(t, e) {
        if (e = e || {}, this.link = "object" == typeof t ? t : document.querySelector(t), this.title = this.link.getAttribute("title") || this.link.getAttribute("data-original-title"), this.tooltip = null, this.options = {}, this.options.animation = e.animation && "fade" !== e.animation ? e.animation : "fade", this.options.placement = e.placement ? e.placement : "top", this.options.delay = parseInt(e.delay) || 100, this.duration = 150, this.options.duration = i && i < 10 ? 0 : e.duration || this.duration, this.options.container = e.container || document.body, this.title) {
            this.timer = 0;
            var o = this,
                n = "onmouseleave" in this.link ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"];
            this.open = function(t) { clearTimeout(o.link.getAttribute("data-timer")), o.timer = setTimeout(function() { null === o.tooltip && (o.createToolTip(), o.styleTooltip(), o.updateTooltip()) }, o.options.duration), o.link.setAttribute("data-timer", o.timer) }, this.close = function(t) { clearTimeout(o.link.getAttribute("data-timer")), o.timer = setTimeout(function() { o.tooltip && null !== o.tooltip && (o.tooltip.className = o.tooltip.className.replace(" in", ""), setTimeout(function() { o.removeToolTip() }, o.options.duration)) }, o.options.delay + o.options.duration), o.link.setAttribute("data-timer", o.timer) }, this.removeToolTip = function() {
                this.tooltip && this.options.container.removeChild(this.tooltip), this.tooltip = null
            }, this.createToolTip = function() { this.tooltip = document.createElement("div"), this.tooltip.setAttribute("role", "tooltip");
                var t = document.createElement("div");
                t.setAttribute("class", "tooltip-arrow");
                var e = document.createElement("div");
                e.setAttribute("class", "tooltip-inner"), this.tooltip.appendChild(t), this.tooltip.appendChild(e), e.innerHTML = this.title, this.options.container.appendChild(this.tooltip) }, this.styleTooltip = function(t) {
                var e = this.link.getBoundingClientRect(),
                    i = t || this.options.placement;
                this.tooltip.setAttribute("class", "tooltip " + i + " " + this.options.animation);
                var o = { w: e.right - e.left, h: e.bottom - e.top },
                    s = { w: this.tooltip.offsetWidth, h: this.tooltip.offsetHeight },
                    n = this.getScroll().y,
                    a = this.getScroll().x; /top/.test(i) ? (this.tooltip.style.top = e.top + n - s.h + "px", this.tooltip.style.left = e.left + a - s.w / 2 + o.w / 2 + "px") : /bottom/.test(i) ? (this.tooltip.style.top = e.top + n + o.h + "px", this.tooltip.style.left = e.left + a - s.w / 2 + o.w / 2 + "px") : /left/.test(i) ? (this.tooltip.style.top = e.top + n - s.h / 2 + o.h / 2 + "px", this.tooltip.style.left = e.left + a - s.w + "px") : /right/.test(i) && (this.tooltip.style.top = e.top + n - s.h / 2 + o.h / 2 + "px", this.tooltip.style.left = e.left + a + o.w + "px") }, this.updateTooltip = function() {
                var t = null;
                t = s(this.tooltip) ? this.options.placement : this.updatePlacement(), this.styleTooltip(t), this.tooltip.className += " in" }, this.updatePlacement = function() {
                var t = this.options.placement;
                return /top/.test(t) ? "bottom" : /bottom/.test(t) ? "top" : /left/.test(t) ? "right" : /right/.test(t) ? "left" : void 0 }, this.getScroll = function() {
                return { y: window.pageYOffset || document.documentElement.scrollTop, x: window.pageXOffset || document.documentElement.scrollLeft } }, this.link.addEventListener(n[0], this.open, !1), this.link.addEventListener(n[1], this.close, !1), this.link.setAttribute("data-original-title", this.title), this.link.removeAttribute("title")
        }
    };
    return function() {
        var t = document.querySelectorAll("[data-toggle=tooltip]"),
            e = 0,
            i = t.length;
        for (e; e < i; e++) {
            var o = t[e],
                s = {};
            s.animation = o.getAttribute("data-animation"), s.placement = o.getAttribute("data-placement"), s.duration = o.getAttribute("data-duration"), s.delay = o.getAttribute("data-delay"), new f(o, s) } }(), { Affix: n, Alert: a, Button: r, Carousel: l, Collapse: d, Dropdown: c, Modal: h, Popover: u, ScrollSpy: p, Tab: m, Tooltip: f }
});
