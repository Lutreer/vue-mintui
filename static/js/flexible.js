! function (e, t) {
  function n() {
    var t = o.getBoundingClientRect().width / 10;
    o.style.fontSize = t + "px", d.rem = e.rem = t
  }
  var i = null,
    r = e.document,
    o = r.documentElement,
    a = 0,
    d = t.flexible || (t.flexible = {}),
    s = e.navigator.appVersion.match(/iphone/gi),
    m = e.navigator.appVersion.match(/UCBrowser/gi),
    p = e.devicePixelRatio;
  a = s ? p >= 3 && (!a || a >= 3) ? 3 : p >= 2 && (!a || a >= 2) ? 2 : 1 : 1, o.setAttribute("data-dpr", a);
  var c = "onorientationchange" in window ? "orientationchange" : "resize";
  if (e.addEventListener(c, function () {
      clearTimeout(i), i = setTimeout(n(), 300)
    }, !1), e.addEventListener("pageshow", function (t) {
      e.persisted && (clearTimeout(i), i = setTimeout(n(), 300))
    }, !1), n(), d.dpr = e.dpr = a, d.refreshRem = n, d.rem2px = function (e) {
      var t = parseFloat(e) * this.rem;
      return "string" == typeof e && e.match(/rem$/) && (t += "px"), t
    }, d.px2rem = function (e) {
      var t = parseFloat(e) / this.rem;
      return "string" == typeof e && e.match(/px$/) && (t += "rem"), t
    }, s && !m) {
    var l = "notHairlines",
      u = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    parseInt(u[1], 10) >= 8 && (l = "hairlines"), document.documentElement.classList.add(l)
  }
}(window, window.lib || (window.lib = {}));
