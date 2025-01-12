import { jsx as B, jsxs as fn } from "react/jsx-runtime";
import * as tt from "react";
import pi, { createContext as Ft, useLayoutEffect as ns, useEffect as It, useContext as H, useRef as et, useInsertionEffect as gi, useCallback as Y, useMemo as X, forwardRef as Be, createElement as hn, useId as je, useState as ue, cloneElement as mn, Children as rs, isValidElement as vi, memo as ce } from "react";
const yi = Ft({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), Ne = Ft({}), Ue = Ft(null), We = typeof document < "u", kn = We ? ns : It, bi = Ft({ strict: !1 }), En = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), is = "framerAppearId", wi = "data-" + En(is);
function os(t, e, n, r) {
  const { visualElement: i } = H(Ne), s = H(bi), o = H(Ue), a = H(yi).reducedMotion, l = et();
  r = r || s.renderer, !l.current && r && (l.current = r(t, {
    visualState: e,
    parent: i,
    props: n,
    presenceContext: o,
    blockInitialAnimation: o ? o.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const u = l.current;
  gi(() => {
    u && u.update(n, o);
  });
  const c = et(!!(n[wi] && !window.HandoffComplete));
  return kn(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), It(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0));
  }), u;
}
function Wt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function ss(t, e, n) {
  return Y(
    (r) => {
      r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), n && (typeof n == "function" ? n(r) : Wt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function se(t) {
  return typeof t == "string" || Array.isArray(t);
}
function $e(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const On = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Rn = ["initial", ...On];
function ze(t) {
  return $e(t.animate) || Rn.some((e) => se(t[e]));
}
function xi(t) {
  return !!(ze(t) || t.variants);
}
function as(t, e) {
  if (ze(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || se(n) ? n : void 0,
      animate: se(r) ? r : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function ls(t) {
  const { initial: e, animate: n } = as(t, H(Ne));
  return X(() => ({ initial: e, animate: n }), [rr(e), rr(n)]);
}
function rr(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const ir = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, ae = {};
for (const t in ir)
  ae[t] = {
    isEnabled: (e) => ir[t].some((n) => !!e[n])
  };
function us(t) {
  for (const e in t)
    ae[e] = {
      ...ae[e],
      ...t[e]
    };
}
const Ln = Ft({}), Ti = Ft({}), cs = Symbol.for("motionComponentSymbol");
function ds({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: r, Component: i }) {
  t && us(t);
  function s(a, l) {
    let u;
    const c = {
      ...H(yi),
      ...a,
      layoutId: fs(a)
    }, { isStatic: d } = c, f = ls(a), h = r(a, d);
    if (!d && We) {
      f.visualElement = os(i, h, c, e);
      const m = H(Ti), p = H(bi).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        p,
        t,
        m
      ));
    }
    return tt.createElement(
      Ne.Provider,
      { value: f },
      u && f.visualElement ? tt.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(i, a, ss(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const o = Be(s);
  return o[cs] = i, o;
}
function fs({ layoutId: t }) {
  const e = H(Ln).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function hs(t) {
  function e(r, i = {}) {
    return ds(t(r, i));
  }
  if (typeof Proxy > "u")
    return e;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
  });
}
const ms = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Fn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(ms.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(t))
    )
  );
}
const Me = {};
function ps(t) {
  Object.assign(Me, t);
}
const de = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Bt = new Set(de);
function Pi(t, { layout: e, layoutId: n }) {
  return Bt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Me[t] || t === "opacity");
}
const nt = (t) => !!(t && t.getVelocity), gs = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, vs = de.length;
function ys(t, { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 }, r, i) {
  let s = "";
  for (let o = 0; o < vs; o++) {
    const a = de[o];
    if (t[a] !== void 0) {
      const l = gs[a] || a;
      s += `${l}(${t[a]}) `;
    }
  }
  return e && !t.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(t, r ? "" : s) : n && r && (s = "none"), s;
}
const Ci = (t) => (e) => typeof e == "string" && e.startsWith(t), Si = Ci("--"), pn = Ci("var(--"), bs = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, ws = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Tt = (t, e, n) => Math.min(Math.max(n, t), e), jt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, ne = {
  ...jt,
  transform: (t) => Tt(0, 1, t)
}, ve = {
  ...jt,
  default: 1
}, re = (t) => Math.round(t * 1e5) / 1e5, Ge = /(-)?([\d]*\.?[\d])+/g, Mi = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, xs = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function fe(t) {
  return typeof t == "string";
}
const he = (t) => ({
  test: (e) => fe(e) && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), yt = he("deg"), ct = he("%"), x = he("px"), Ts = he("vh"), Ps = he("vw"), or = {
  ...ct,
  parse: (t) => ct.parse(t) / 100,
  transform: (t) => ct.transform(t * 100)
}, sr = {
  ...jt,
  transform: Math.round
}, Di = {
  // Border props
  borderWidth: x,
  borderTopWidth: x,
  borderRightWidth: x,
  borderBottomWidth: x,
  borderLeftWidth: x,
  borderRadius: x,
  radius: x,
  borderTopLeftRadius: x,
  borderTopRightRadius: x,
  borderBottomRightRadius: x,
  borderBottomLeftRadius: x,
  // Positioning props
  width: x,
  maxWidth: x,
  height: x,
  maxHeight: x,
  size: x,
  top: x,
  right: x,
  bottom: x,
  left: x,
  // Spacing props
  padding: x,
  paddingTop: x,
  paddingRight: x,
  paddingBottom: x,
  paddingLeft: x,
  margin: x,
  marginTop: x,
  marginRight: x,
  marginBottom: x,
  marginLeft: x,
  // Transform props
  rotate: yt,
  rotateX: yt,
  rotateY: yt,
  rotateZ: yt,
  scale: ve,
  scaleX: ve,
  scaleY: ve,
  scaleZ: ve,
  skew: yt,
  skewX: yt,
  skewY: yt,
  distance: x,
  translateX: x,
  translateY: x,
  translateZ: x,
  x,
  y: x,
  z: x,
  perspective: x,
  transformPerspective: x,
  opacity: ne,
  originX: or,
  originY: or,
  originZ: x,
  // Misc
  zIndex: sr,
  // SVG
  fillOpacity: ne,
  strokeOpacity: ne,
  numOctaves: sr
};
function In(t, e, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: a } = t;
  let l = !1, u = !1, c = !0;
  for (const d in e) {
    const f = e[d];
    if (Si(d)) {
      s[d] = f;
      continue;
    }
    const h = Di[d], m = ws(f, h);
    if (Bt.has(d)) {
      if (l = !0, o[d] = m, !c)
        continue;
      f !== (h.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, a[d] = m) : i[d] = m;
  }
  if (e.transform || (l || r ? i.transform = ys(t.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = a;
    i.transformOrigin = `${d} ${f} ${h}`;
  }
}
const Bn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Ai(t, e, n) {
  for (const r in e)
    !nt(e[r]) && !Pi(r, n) && (t[r] = e[r]);
}
function Cs({ transformTemplate: t }, e, n) {
  return X(() => {
    const r = Bn();
    return In(r, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, r.vars, r.style);
  }, [e]);
}
function Ss(t, e, n) {
  const r = t.style || {}, i = {};
  return Ai(i, r, t), Object.assign(i, Cs(t, e, n)), t.transformValues ? t.transformValues(i) : i;
}
function Ms(t, e, n) {
  const r = {}, i = Ss(t, e, n);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r;
}
const Ds = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function De(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Ds.has(t);
}
let Vi = (t) => !De(t);
function As(t) {
  t && (Vi = (e) => e.startsWith("on") ? !De(e) : t(e));
}
try {
  As(require("@emotion/is-prop-valid").default);
} catch {
}
function Vs(t, e, n) {
  const r = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (Vi(i) || n === !0 && De(i) || !e && !De(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
  return r;
}
function ar(t, e, n) {
  return typeof t == "string" ? t : x.transform(e + n * t);
}
function ks(t, e, n) {
  const r = ar(e, t.x, t.width), i = ar(n, t.y, t.height);
  return `${r} ${i}`;
}
const Es = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Os = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Rs(t, e, n = 1, r = 0, i = !0) {
  t.pathLength = 1;
  const s = i ? Es : Os;
  t[s.offset] = x.transform(-r);
  const o = x.transform(e), a = x.transform(n);
  t[s.array] = `${o} ${a}`;
}
function jn(t, {
  attrX: e,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: s,
  pathLength: o,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, d, f) {
  if (In(t, u, c, f), d) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: m, dimensions: p } = t;
  h.transform && (p && (m.transform = h.transform), delete h.transform), p && (i !== void 0 || s !== void 0 || m.transform) && (m.transformOrigin = ks(p, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && Rs(h, o, a, l, !1);
}
const ki = () => ({
  ...Bn(),
  attrs: {}
}), Nn = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Ls(t, e, n, r) {
  const i = X(() => {
    const s = ki();
    return jn(s, e, { enableHardwareAcceleration: !1 }, Nn(r), t.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [e]);
  if (t.style) {
    const s = {};
    Ai(s, t.style, t), i.style = { ...s, ...i.style };
  }
  return i;
}
function Fs(t = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (Fn(n) ? Ls : Ms)(r, s, o, n), c = {
      ...Vs(r, typeof n == "string", t),
      ...l,
      ref: i
    }, { children: d } = r, f = X(() => nt(d) ? d.get() : d, [d]);
    return hn(n, {
      ...c,
      children: f
    });
  };
}
function Ei(t, { style: e, vars: n }, r, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(r));
  for (const s in n)
    t.style.setProperty(s, n[s]);
}
const Oi = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Ri(t, e, n, r) {
  Ei(t, e, void 0, r);
  for (const i in e.attrs)
    t.setAttribute(Oi.has(i) ? i : En(i), e.attrs[i]);
}
function Un(t, e) {
  const { style: n } = t, r = {};
  for (const i in n)
    (nt(n[i]) || e.style && nt(e.style[i]) || Pi(i, t)) && (r[i] = n[i]);
  return r;
}
function Li(t, e) {
  const n = Un(t, e);
  for (const r in t)
    if (nt(t[r]) || nt(e[r])) {
      const i = de.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[i] = t[r];
    }
  return n;
}
function Wn(t, e, n, r = {}, i = {}) {
  return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)), e;
}
function Fi(t) {
  const e = et(null);
  return e.current === null && (e.current = t()), e.current;
}
const Ae = (t) => Array.isArray(t), Is = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Bs = (t) => Ae(t) ? t[t.length - 1] || 0 : t;
function Ce(t) {
  const e = nt(t) ? t.get() : t;
  return Is(e) ? e.toValue() : e;
}
function js({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, r, i, s) {
  const o = {
    latestValues: Ns(r, i, s, t),
    renderState: e()
  };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const Ii = (t) => (e, n) => {
  const r = H(Ne), i = H(Ue), s = () => js(t, e, r, i);
  return n ? s() : Fi(s);
};
function Ns(t, e, n, r) {
  const i = {}, s = r(t, {});
  for (const f in s)
    i[f] = Ce(s[f]);
  let { initial: o, animate: a } = t;
  const l = ze(t), u = xi(t);
  e && u && !l && t.inherit !== !1 && (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  return d && typeof d != "boolean" && !$e(d) && (Array.isArray(d) ? d : [d]).forEach((h) => {
    const m = Wn(t, h);
    if (!m)
      return;
    const { transitionEnd: p, transition: y, ...b } = m;
    for (const v in b) {
      let g = b[v];
      if (Array.isArray(g)) {
        const w = c ? g.length - 1 : 0;
        g = g[w];
      }
      g !== null && (i[v] = g);
    }
    for (const v in p)
      i[v] = p[v];
  }), i;
}
const W = (t) => t;
class lr {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(e) {
    if (!this.scheduled.has(e))
      return this.scheduled.add(e), this.order.push(e), !0;
  }
  remove(e) {
    const n = this.order.indexOf(e);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function Us(t) {
  let e = new lr(), n = new lr(), r = 0, i = !1, s = !1;
  const o = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && i, f = d ? e : n;
      return u && o.add(l), f.add(l) && d && i && (r = e.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.remove(l), o.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (i) {
        s = !0;
        return;
      }
      if (i = !0, [e, n] = [n, e], n.clear(), r = e.order.length, r)
        for (let u = 0; u < r; u++) {
          const c = e.order[u];
          c(l), o.has(c) && (a.schedule(c), t());
        }
      i = !1, s && (s = !1, a.process(l));
    }
  };
  return a;
}
const ye = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Ws = 40;
function $s(t, e) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = ye.reduce((d, f) => (d[f] = Us(() => n = !0), d), {}), o = (d) => s[d].process(i), a = () => {
    const d = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, Ws), 1), i.timestamp = d, i.isProcessing = !0, ye.forEach(o), i.isProcessing = !1, n && e && (r = !1, t(a));
  }, l = () => {
    n = !0, r = !0, i.isProcessing || t(a);
  };
  return { schedule: ye.reduce((d, f) => {
    const h = s[f];
    return d[f] = (m, p = !1, y = !1) => (n || l(), h.schedule(m, p, y)), d;
  }, {}), cancel: (d) => ye.forEach((f) => s[f].cancel(d)), state: i, steps: s };
}
const { schedule: F, cancel: pt, state: K, steps: Xe } = $s(typeof requestAnimationFrame < "u" ? requestAnimationFrame : W, !0), zs = {
  useVisualState: Ii({
    scrapeMotionValuesFromProps: Li,
    createRenderState: ki,
    onMount: (t, e, { renderState: n, latestValues: r }) => {
      F.read(() => {
        try {
          n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), F.render(() => {
        jn(n, r, { enableHardwareAcceleration: !1 }, Nn(e.tagName), t.transformTemplate), Ri(e, n);
      });
    }
  })
}, Gs = {
  useVisualState: Ii({
    scrapeMotionValuesFromProps: Un,
    createRenderState: Bn
  })
};
function _s(t, { forwardMotionProps: e = !1 }, n, r) {
  return {
    ...Fn(t) ? zs : Gs,
    preloadedFeatures: n,
    useRender: Fs(e),
    createVisualElement: r,
    Component: t
  };
}
function ft(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
const Bi = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function _e(t, e = "page") {
  return {
    point: {
      x: t[e + "X"],
      y: t[e + "Y"]
    }
  };
}
const Ys = (t) => (e) => Bi(e) && t(e, _e(e));
function ht(t, e, n, r) {
  return ft(t, e, Ys(n), r);
}
const Hs = (t, e) => (n) => e(t(n)), wt = (...t) => t.reduce(Hs);
function ji(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : !1;
  };
}
const ur = ji("dragHorizontal"), cr = ji("dragVertical");
function Ni(t) {
  let e = !1;
  if (t === "y")
    e = cr();
  else if (t === "x")
    e = ur();
  else {
    const n = ur(), r = cr();
    n && r ? e = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return e;
}
function Ui() {
  const t = Ni(!0);
  return t ? (t(), !1) : !0;
}
class St {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function dr(t, e) {
  const n = "pointer" + (e ? "enter" : "leave"), r = "onHover" + (e ? "Start" : "End"), i = (s, o) => {
    if (s.pointerType === "touch" || Ui())
      return;
    const a = t.getProps();
    t.animationState && a.whileHover && t.animationState.setActive("whileHover", e), a[r] && F.update(() => a[r](s, o));
  };
  return ht(t.current, n, i, {
    passive: !t.getProps()[r]
  });
}
class qs extends St {
  mount() {
    this.unmount = wt(dr(this.node, !0), dr(this.node, !1));
  }
  unmount() {
  }
}
class Ks extends St {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = wt(ft(this.node.current, "focus", () => this.onFocus()), ft(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Wi = (t, e) => e ? t === e ? !0 : Wi(t, e.parentElement) : !1;
function Ze(t, e) {
  if (!e)
    return;
  const n = new PointerEvent("pointer" + t);
  e(n, _e(n));
}
class Xs extends St {
  constructor() {
    super(...arguments), this.removeStartListeners = W, this.removeEndListeners = W, this.removeAccessibleListeners = W, this.startPointerPress = (e, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), s = ht(window, "pointerup", (a, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c, globalTapTarget: d } = this.node.getProps();
        F.update(() => {
          !d && !Wi(this.node.current, a.target) ? c && c(a, l) : u && u(a, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), o = ht(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = wt(s, o), this.startPress(e, n);
    }, this.startAccessiblePress = () => {
      const e = (s) => {
        if (s.key !== "Enter" || this.isPressing)
          return;
        const o = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || Ze("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && F.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = ft(this.node.current, "keyup", o), Ze("down", (a, l) => {
          this.startPress(a, l);
        });
      }, n = ft(this.node.current, "keydown", e), r = () => {
        this.isPressing && Ze("cancel", (s, o) => this.cancelPress(s, o));
      }, i = ft(this.node.current, "blur", r);
      this.removeAccessibleListeners = wt(n, i);
    };
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && F.update(() => r(e, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Ui();
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && F.update(() => r(e, n));
  }
  mount() {
    const e = this.node.getProps(), n = ht(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }), r = ft(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = wt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const gn = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), Zs = (t) => {
  const e = gn.get(t.target);
  e && e(t);
}, Qs = (t) => {
  t.forEach(Zs);
};
function Js({ root: t, ...e }) {
  const n = t || document;
  Qe.has(n) || Qe.set(n, {});
  const r = Qe.get(n), i = JSON.stringify(e);
  return r[i] || (r[i] = new IntersectionObserver(Qs, { root: t, ...e })), r[i];
}
function ta(t, e, n) {
  const r = Js(e);
  return gn.set(t, n), r.observe(t), () => {
    gn.delete(t), r.unobserve(t);
  };
}
const ea = {
  some: 0,
  all: 1
};
class na extends St {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = e, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : ea[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return ta(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(ra(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function ra({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const ia = {
  inView: {
    Feature: na
  },
  tap: {
    Feature: Xs
  },
  focus: {
    Feature: Ks
  },
  hover: {
    Feature: qs
  }
};
function $i(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function oa(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.get()), e;
}
function sa(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.getVelocity()), e;
}
function Ye(t, e, n) {
  const r = t.getProps();
  return Wn(r, e, n !== void 0 ? n : r.custom, oa(t), sa(t));
}
let me = W, at = W;
process.env.NODE_ENV !== "production" && (me = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, at = (t, e) => {
  if (!t)
    throw new Error(e);
});
const xt = (t) => t * 1e3, mt = (t) => t / 1e3, aa = {
  current: !1
}, zi = (t) => Array.isArray(t) && typeof t[0] == "number";
function Gi(t) {
  return !!(!t || typeof t == "string" && _i[t] || zi(t) || Array.isArray(t) && t.every(Gi));
}
const ee = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`, _i = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ee([0, 0.65, 0.55, 1]),
  circOut: ee([0.55, 0, 1, 0.45]),
  backIn: ee([0.31, 0.01, 0.66, -0.59]),
  backOut: ee([0.33, 1.53, 0.69, 0.99])
};
function Yi(t) {
  if (t)
    return zi(t) ? ee(t) : Array.isArray(t) ? t.map(Yi) : _i[t];
}
function la(t, e, n, { delay: r = 0, duration: i, repeat: s = 0, repeatType: o = "loop", ease: a, times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = Yi(a);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: r,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
function ua(t, { repeat: e, repeatType: n = "loop" }) {
  const r = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[r];
}
const Hi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, ca = 1e-7, da = 12;
function fa(t, e, n, r, i) {
  let s, o, a = 0;
  do
    o = e + (n - e) / 2, s = Hi(o, r, i) - t, s > 0 ? n = o : e = o;
  while (Math.abs(s) > ca && ++a < da);
  return o;
}
function pe(t, e, n, r) {
  if (t === e && n === r)
    return W;
  const i = (s) => fa(s, 0, 1, t, n);
  return (s) => s === 0 || s === 1 ? s : Hi(i(s), e, r);
}
const ha = pe(0.42, 0, 1, 1), ma = pe(0, 0, 0.58, 1), qi = pe(0.42, 0, 0.58, 1), pa = (t) => Array.isArray(t) && typeof t[0] != "number", Ki = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Xi = (t) => (e) => 1 - t(1 - e), $n = (t) => 1 - Math.sin(Math.acos(t)), Zi = Xi($n), ga = Ki($n), Qi = pe(0.33, 1.53, 0.69, 0.99), zn = Xi(Qi), va = Ki(zn), ya = (t) => (t *= 2) < 1 ? 0.5 * zn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), fr = {
  linear: W,
  easeIn: ha,
  easeInOut: qi,
  easeOut: ma,
  circIn: $n,
  circInOut: ga,
  circOut: Zi,
  backIn: zn,
  backInOut: va,
  backOut: Qi,
  anticipate: ya
}, hr = (t) => {
  if (Array.isArray(t)) {
    at(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, r, i] = t;
    return pe(e, n, r, i);
  } else if (typeof t == "string")
    return at(fr[t] !== void 0, `Invalid easing type '${t}'`), fr[t];
  return t;
}, Gn = (t, e) => (n) => !!(fe(n) && xs.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)), Ji = (t, e, n) => (r) => {
  if (!fe(r))
    return r;
  const [i, s, o, a] = r.match(Ge);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, ba = (t) => Tt(0, 255, t), Je = {
  ...jt,
  transform: (t) => Math.round(ba(t))
}, Rt = {
  test: Gn("rgb", "red"),
  parse: Ji("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) => "rgba(" + Je.transform(t) + ", " + Je.transform(e) + ", " + Je.transform(n) + ", " + re(ne.transform(r)) + ")"
};
function wa(t) {
  let e = "", n = "", r = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, r += r, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const vn = {
  test: Gn("#"),
  parse: wa,
  transform: Rt.transform
}, $t = {
  test: Gn("hsl", "hue"),
  parse: Ji("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(t) + ", " + ct.transform(re(e)) + ", " + ct.transform(re(n)) + ", " + re(ne.transform(r)) + ")"
}, J = {
  test: (t) => Rt.test(t) || vn.test(t) || $t.test(t),
  parse: (t) => Rt.test(t) ? Rt.parse(t) : $t.test(t) ? $t.parse(t) : vn.parse(t),
  transform: (t) => fe(t) ? t : t.hasOwnProperty("red") ? Rt.transform(t) : $t.transform(t)
}, U = (t, e, n) => -n * t + n * e + t;
function tn(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function xa({ hue: t, saturation: e, lightness: n, alpha: r }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!e)
    i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = tn(l, a, t + 1 / 3), s = tn(l, a, t), o = tn(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
const en = (t, e, n) => {
  const r = t * t;
  return Math.sqrt(Math.max(0, n * (e * e - r) + r));
}, Ta = [vn, Rt, $t], Pa = (t) => Ta.find((e) => e.test(t));
function mr(t) {
  const e = Pa(t);
  at(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
  let n = e.parse(t);
  return e === $t && (n = xa(n)), n;
}
const to = (t, e) => {
  const n = mr(t), r = mr(e), i = { ...n };
  return (s) => (i.red = en(n.red, r.red, s), i.green = en(n.green, r.green, s), i.blue = en(n.blue, r.blue, s), i.alpha = U(n.alpha, r.alpha, s), Rt.transform(i));
};
function Ca(t) {
  var e, n;
  return isNaN(t) && fe(t) && (((e = t.match(Ge)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Mi)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const eo = {
  regex: bs,
  countKey: "Vars",
  token: "${v}",
  parse: W
}, no = {
  regex: Mi,
  countKey: "Colors",
  token: "${c}",
  parse: J.parse
}, ro = {
  regex: Ge,
  countKey: "Numbers",
  token: "${n}",
  parse: jt.parse
};
function nn(t, { regex: e, countKey: n, token: r, parse: i }) {
  const s = t.tokenised.match(e);
  s && (t["num" + n] = s.length, t.tokenised = t.tokenised.replace(e, r), t.values.push(...s.map(i)));
}
function Ve(t) {
  const e = t.toString(), n = {
    value: e,
    tokenised: e,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && nn(n, eo), nn(n, no), nn(n, ro), n;
}
function io(t) {
  return Ve(t).values;
}
function oo(t) {
  const { values: e, numColors: n, numVars: r, tokenised: i } = Ve(t), s = e.length;
  return (o) => {
    let a = i;
    for (let l = 0; l < s; l++)
      l < r ? a = a.replace(eo.token, o[l]) : l < r + n ? a = a.replace(no.token, J.transform(o[l])) : a = a.replace(ro.token, re(o[l]));
    return a;
  };
}
const Sa = (t) => typeof t == "number" ? 0 : t;
function Ma(t) {
  const e = io(t);
  return oo(t)(e.map(Sa));
}
const Pt = {
  test: Ca,
  parse: io,
  createTransformer: oo,
  getAnimatableNone: Ma
}, so = (t, e) => (n) => `${n > 0 ? e : t}`;
function ao(t, e) {
  return typeof t == "number" ? (n) => U(t, e, n) : J.test(t) ? to(t, e) : t.startsWith("var(") ? so(t, e) : uo(t, e);
}
const lo = (t, e) => {
  const n = [...t], r = n.length, i = t.map((s, o) => ao(s, e[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}, Da = (t, e) => {
  const n = { ...t, ...e }, r = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (r[i] = ao(t[i], e[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}, uo = (t, e) => {
  const n = Pt.createTransformer(e), r = Ve(t), i = Ve(e);
  return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? wt(lo(r.values, i.values), n) : (me(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), so(t, e));
}, le = (t, e, n) => {
  const r = e - t;
  return r === 0 ? 1 : (n - t) / r;
}, pr = (t, e) => (n) => U(t, e, n);
function Aa(t) {
  return typeof t == "number" ? pr : typeof t == "string" ? J.test(t) ? to : uo : Array.isArray(t) ? lo : typeof t == "object" ? Da : pr;
}
function Va(t, e, n) {
  const r = [], i = n || Aa(t[0]), s = t.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || W : e;
      a = wt(l, a);
    }
    r.push(a);
  }
  return r;
}
function co(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = t.length;
  if (at(s === e.length, "Both input and output ranges must be the same length"), s === 1)
    return () => e[0];
  t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const o = Va(e, r, i), a = o.length, l = (u) => {
    let c = 0;
    if (a > 1)
      for (; c < t.length - 2 && !(u < t[c + 1]); c++)
        ;
    const d = le(t[c], t[c + 1], u);
    return o[c](d);
  };
  return n ? (u) => l(Tt(t[0], t[s - 1], u)) : l;
}
function ka(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    const i = le(0, e, r);
    t.push(U(n, 1, i));
  }
}
function Ea(t) {
  const e = [0];
  return ka(e, t.length - 1), e;
}
function Oa(t, e) {
  return t.map((n) => n * e);
}
function Ra(t, e) {
  return t.map(() => e || qi).splice(0, t.length - 1);
}
function ke({ duration: t = 300, keyframes: e, times: n, ease: r = "easeInOut" }) {
  const i = pa(r) ? r.map(hr) : hr(r), s = {
    done: !1,
    value: e[0]
  }, o = Oa(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ea(e),
    t
  ), a = co(o, e, {
    ease: Array.isArray(i) ? i : Ra(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (s.value = a(l), s.done = l >= t, s)
  };
}
function fo(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const La = 5;
function ho(t, e, n) {
  const r = Math.max(e - La, 0);
  return fo(n - t(r), e - r);
}
const rn = 1e-3, Fa = 0.01, gr = 10, Ia = 0.05, Ba = 1;
function ja({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, s;
  me(t <= xt(gr), "Spring duration must be 10 seconds or less");
  let o = 1 - e;
  o = Tt(Ia, Ba, o), t = Tt(Fa, gr, mt(t)), o < 1 ? (i = (u) => {
    const c = u * o, d = c * t, f = c - n, h = yn(u, o), m = Math.exp(-d);
    return rn - f / h * m;
  }, s = (u) => {
    const d = u * o * t, f = d * n + n, h = Math.pow(o, 2) * Math.pow(u, 2) * t, m = Math.exp(-d), p = yn(Math.pow(u, 2), o);
    return (-i(u) + rn > 0 ? -1 : 1) * ((f - h) * m) / p;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), d = (u - n) * t + 1;
    return -rn + c * d;
  }, s = (u) => {
    const c = Math.exp(-u * t), d = (n - u) * (t * t);
    return c * d;
  });
  const a = 5 / t, l = Ua(i, s, a);
  if (t = xt(t), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(r * u),
      duration: t
    };
  }
}
const Na = 12;
function Ua(t, e, n) {
  let r = n;
  for (let i = 1; i < Na; i++)
    r = r - t(r) / e(r);
  return r;
}
function yn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Wa = ["duration", "bounce"], $a = ["stiffness", "damping", "mass"];
function vr(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function za(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!vr(t, $a) && vr(t, Wa)) {
    const n = ja(t);
    e = {
      ...e,
      ...n,
      mass: 1
    }, e.isResolvedFromDuration = !0;
  }
  return e;
}
function mo({ keyframes: t, restDelta: e, restSpeed: n, ...r }) {
  const i = t[0], s = t[t.length - 1], o = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, duration: c, velocity: d, isResolvedFromDuration: f } = za({
    ...r,
    velocity: -mt(r.velocity || 0)
  }), h = d || 0, m = l / (2 * Math.sqrt(a * u)), p = s - i, y = mt(Math.sqrt(a / u)), b = Math.abs(p) < 5;
  n || (n = b ? 0.01 : 2), e || (e = b ? 5e-3 : 0.5);
  let v;
  if (m < 1) {
    const g = yn(y, m);
    v = (w) => {
      const C = Math.exp(-m * y * w);
      return s - C * ((h + m * y * p) / g * Math.sin(g * w) + p * Math.cos(g * w));
    };
  } else if (m === 1)
    v = (g) => s - Math.exp(-y * g) * (p + (h + y * p) * g);
  else {
    const g = y * Math.sqrt(m * m - 1);
    v = (w) => {
      const C = Math.exp(-m * y * w), k = Math.min(g * w, 300);
      return s - C * ((h + m * y * p) * Math.sinh(k) + g * p * Math.cosh(k)) / g;
    };
  }
  return {
    calculatedDuration: f && c || null,
    next: (g) => {
      const w = v(g);
      if (f)
        o.done = g >= c;
      else {
        let C = h;
        g !== 0 && (m < 1 ? C = ho(v, g, w) : C = 0);
        const k = Math.abs(C) <= n, V = Math.abs(s - w) <= e;
        o.done = k && V;
      }
      return o.value = o.done ? s : w, o;
    }
  };
}
function yr({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = t[0], f = {
    done: !1,
    value: d
  }, h = (T) => a !== void 0 && T < a || l !== void 0 && T > l, m = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let p = n * e;
  const y = d + p, b = o === void 0 ? y : o(y);
  b !== y && (p = b - d);
  const v = (T) => -p * Math.exp(-T / r), g = (T) => b + v(T), w = (T) => {
    const S = v(T), j = g(T);
    f.done = Math.abs(S) <= u, f.value = f.done ? b : j;
  };
  let C, k;
  const V = (T) => {
    h(f.value) && (C = T, k = mo({
      keyframes: [f.value, m(f.value)],
      velocity: ho(g, T, f.value),
      damping: i,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return V(0), {
    calculatedDuration: null,
    next: (T) => {
      let S = !1;
      return !k && C === void 0 && (S = !0, w(T), V(T)), C !== void 0 && T > C ? k.next(T - C) : (!S && w(T), f);
    }
  };
}
const Ga = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => F.update(e, !0),
    stop: () => pt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => K.isProcessing ? K.timestamp : performance.now()
  };
}, br = 2e4;
function wr(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < br; )
    e += n, r = t.next(e);
  return e >= br ? 1 / 0 : e;
}
const _a = {
  decay: yr,
  inertia: yr,
  tween: ke,
  keyframes: ke,
  spring: mo
};
function Ee({ autoplay: t = !0, delay: e = 0, driver: n = Ga, keyframes: r, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let h = 1, m = !1, p, y;
  const b = () => {
    y = new Promise((O) => {
      p = O;
    });
  };
  b();
  let v;
  const g = _a[i] || ke;
  let w;
  g !== ke && typeof r[0] != "number" && (process.env.NODE_ENV !== "production" && at(r.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${r}`), w = co([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const C = g({ ...f, keyframes: r });
  let k;
  a === "mirror" && (k = g({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let V = "idle", T = null, S = null, j = null;
  C.calculatedDuration === null && s && (C.calculatedDuration = wr(C));
  const { calculatedDuration: Q } = C;
  let D = 1 / 0, G = 1 / 0;
  Q !== null && (D = Q + o, G = D * (s + 1) - o);
  let A = 0;
  const P = (O) => {
    if (S === null)
      return;
    h > 0 && (S = Math.min(S, O)), h < 0 && (S = Math.min(O - G / h, S)), T !== null ? A = T : A = Math.round(O - S) * h;
    const it = A - e * (h >= 0 ? 1 : -1), q = h >= 0 ? it < 0 : it > G;
    A = Math.max(it, 0), V === "finished" && T === null && (A = G);
    let tr = A, er = C;
    if (s) {
      const Ke = Math.min(A, G) / D;
      let ge = Math.floor(Ke), Mt = Ke % 1;
      !Mt && Ke >= 1 && (Mt = 1), Mt === 1 && ge--, ge = Math.min(ge, s + 1), !!(ge % 2) && (a === "reverse" ? (Mt = 1 - Mt, o && (Mt -= o / D)) : a === "mirror" && (er = k)), tr = Tt(0, 1, Mt) * D;
    }
    const Ht = q ? { done: !1, value: r[0] } : er.next(tr);
    w && (Ht.value = w(Ht.value));
    let { done: nr } = Ht;
    !q && Q !== null && (nr = h >= 0 ? A >= G : A <= 0);
    const es = T === null && (V === "finished" || V === "running" && nr);
    return d && d(Ht.value), es && _(), Ht;
  }, M = () => {
    v && v.stop(), v = void 0;
  }, L = () => {
    V = "idle", M(), p(), b(), S = j = null;
  }, _ = () => {
    V = "finished", c && c(), M(), p();
  }, N = () => {
    if (m)
      return;
    v || (v = n(P));
    const O = v.now();
    l && l(), T !== null ? S = O - T : (!S || V === "finished") && (S = O), V === "finished" && b(), j = S, T = null, V = "running", v.start();
  };
  t && N();
  const $ = {
    then(O, it) {
      return y.then(O, it);
    },
    get time() {
      return mt(A);
    },
    set time(O) {
      O = xt(O), A = O, T !== null || !v || h === 0 ? T = O : S = v.now() - O / h;
    },
    get duration() {
      const O = C.calculatedDuration === null ? wr(C) : C.calculatedDuration;
      return mt(O);
    },
    get speed() {
      return h;
    },
    set speed(O) {
      O === h || !v || (h = O, $.time = mt(A));
    },
    get state() {
      return V;
    },
    play: N,
    pause: () => {
      V = "paused", T = A;
    },
    stop: () => {
      m = !0, V !== "idle" && (V = "idle", u && u(), L());
    },
    cancel: () => {
      j !== null && P(j), L();
    },
    complete: () => {
      V = "finished";
    },
    sample: (O) => (S = 0, P(O))
  };
  return $;
}
function Ya(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Ha = Ya(() => Object.hasOwnProperty.call(Element.prototype, "animate")), qa = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), be = 10, Ka = 2e4, Xa = (t, e) => e.type === "spring" || t === "backgroundColor" || !Gi(e.ease);
function Za(t, e, { onUpdate: n, onComplete: r, ...i }) {
  if (!(Ha() && qa.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
    return !1;
  let o = !1, a, l, u = !1;
  const c = () => {
    l = new Promise((g) => {
      a = g;
    });
  };
  c();
  let { keyframes: d, duration: f = 300, ease: h, times: m } = i;
  if (Xa(e, i)) {
    const g = Ee({
      ...i,
      repeat: 0,
      delay: 0
    });
    let w = { done: !1, value: d[0] };
    const C = [];
    let k = 0;
    for (; !w.done && k < Ka; )
      w = g.sample(k), C.push(w.value), k += be;
    m = void 0, d = C, f = k - be, h = "linear";
  }
  const p = la(t.owner.current, e, d, {
    ...i,
    duration: f,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: h,
    times: m
  }), y = () => {
    u = !1, p.cancel();
  }, b = () => {
    u = !0, F.update(y), a(), c();
  };
  return p.onfinish = () => {
    u || (t.set(ua(d, i)), r && r(), b());
  }, {
    then(g, w) {
      return l.then(g, w);
    },
    attachTimeline(g) {
      return p.timeline = g, p.onfinish = null, W;
    },
    get time() {
      return mt(p.currentTime || 0);
    },
    set time(g) {
      p.currentTime = xt(g);
    },
    get speed() {
      return p.playbackRate;
    },
    set speed(g) {
      p.playbackRate = g;
    },
    get duration() {
      return mt(f);
    },
    play: () => {
      o || (p.play(), pt(y));
    },
    pause: () => p.pause(),
    stop: () => {
      if (o = !0, p.playState === "idle")
        return;
      const { currentTime: g } = p;
      if (g) {
        const w = Ee({
          ...i,
          autoplay: !1
        });
        t.setWithVelocity(w.sample(g - be).value, w.sample(g).value, be);
      }
      b();
    },
    complete: () => {
      u || p.finish();
    },
    cancel: b
  };
}
function Qa({ keyframes: t, delay: e, onUpdate: n, onComplete: r }) {
  const i = () => (n && n(t[t.length - 1]), r && r(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: W,
    pause: W,
    stop: W,
    then: (s) => (s(), Promise.resolve()),
    cancel: W,
    complete: W
  });
  return e ? Ee({
    keyframes: [0, 1],
    duration: 0,
    delay: e,
    onComplete: i
  }) : i();
}
const Ja = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, tl = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), el = {
  type: "keyframes",
  duration: 0.8
}, nl = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, rl = (t, { keyframes: e }) => e.length > 2 ? el : Bt.has(t) ? t.startsWith("scale") ? tl(e[1]) : Ja : nl, bn = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Pt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url(")), il = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ol(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [r] = n.match(Ge) || [];
  if (!r)
    return t;
  const i = n.replace(r, "");
  let s = il.has(e) ? 1 : 0;
  return r !== n && (s *= 100), e + "(" + s + i + ")";
}
const sl = /([a-z-]*)\(.*?\)/g, wn = {
  ...Pt,
  getAnimatableNone: (t) => {
    const e = t.match(sl);
    return e ? e.map(ol).join(" ") : t;
  }
}, al = {
  ...Di,
  // Color props
  color: J,
  backgroundColor: J,
  outlineColor: J,
  fill: J,
  stroke: J,
  // Border props
  borderColor: J,
  borderTopColor: J,
  borderRightColor: J,
  borderBottomColor: J,
  borderLeftColor: J,
  filter: wn,
  WebkitFilter: wn
}, _n = (t) => al[t];
function po(t, e) {
  let n = _n(t);
  return n !== wn && (n = Pt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const go = (t) => /^0[^.\s]+$/.test(t);
function ll(t) {
  if (typeof t == "number")
    return t === 0;
  if (t !== null)
    return t === "none" || t === "0" || go(t);
}
function ul(t, e, n, r) {
  const i = bn(e, n);
  let s;
  Array.isArray(n) ? s = [...n] : s = [null, n];
  const o = r.from !== void 0 ? r.from : t.get();
  let a;
  const l = [];
  for (let u = 0; u < s.length; u++)
    s[u] === null && (s[u] = u === 0 ? o : s[u - 1]), ll(s[u]) && l.push(u), typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (a = s[u]);
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      s[c] = po(e, a);
    }
  return s;
}
function cl({ when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function Yn(t, e) {
  return t[e] || t.default || t;
}
const dl = {
  skipAnimations: !1
}, Hn = (t, e, n, r = {}) => (i) => {
  const s = Yn(r, t) || {}, o = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - xt(o);
  const l = ul(e, t, n, s), u = l[0], c = l[l.length - 1], d = bn(t, u), f = bn(t, c);
  me(d === f, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
  let h = {
    keyframes: l,
    velocity: e.getVelocity(),
    ease: "easeOut",
    ...s,
    delay: -a,
    onUpdate: (m) => {
      e.set(m), s.onUpdate && s.onUpdate(m);
    },
    onComplete: () => {
      i(), s.onComplete && s.onComplete();
    }
  };
  if (cl(s) || (h = {
    ...h,
    ...rl(t, h)
  }), h.duration && (h.duration = xt(h.duration)), h.repeatDelay && (h.repeatDelay = xt(h.repeatDelay)), !d || !f || aa.current || s.type === !1 || dl.skipAnimations)
    return Qa(h);
  if (
    /**
     * If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    !r.isHandoff && e.owner && e.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !e.owner.getProps().onUpdate
  ) {
    const m = Za(e, t, h);
    if (m)
      return m;
  }
  return Ee(h);
};
function Oe(t) {
  return !!(nt(t) && t.add);
}
const vo = (t) => /^\-?\d*\.?\d+$/.test(t);
function qn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Kn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class Xn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return qn(this.subscriptions, e), () => Kn(this.subscriptions, e);
  }
  notify(e, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(e, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const xr = /* @__PURE__ */ new Set();
function Zn(t, e, n) {
  t || xr.has(e) || (console.warn(e), n && console.warn(n), xr.add(e));
}
const fl = (t) => !isNaN(parseFloat(t));
class hl {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: s, timestamp: o } = K;
      this.lastUpdated !== o && (this.timeDelta = s, this.lastUpdated = o, F.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => F.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = fl(this.current), this.owner = n.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && Zn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Xn());
    const r = this.events[e].add(n);
    return e === "change" ? () => {
      r(), F.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, r) {
    this.set(n), this.prev = e, this.timeDelta = r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e) {
    this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      fo(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _t(t, e) {
  return new hl(t, e);
}
const yo = (t) => (e) => e.test(t), ml = {
  test: (t) => t === "auto",
  parse: (t) => t
}, bo = [jt, x, ct, yt, Ps, Ts, ml], qt = (t) => bo.find(yo(t)), pl = [...bo, J, Pt], gl = (t) => pl.find(yo(t));
function vl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, _t(n));
}
function yl(t, e) {
  const n = Ye(t, e);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n ? t.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = Bs(s[o]);
    vl(t, o, a);
  }
}
function bl(t, e, n) {
  var r, i;
  const s = Object.keys(e).filter((a) => !t.hasValue(a)), o = s.length;
  if (o)
    for (let a = 0; a < o; a++) {
      const l = s[a], u = e[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : t.readValue(l)) !== null && i !== void 0 ? i : e[l]), c != null && (typeof c == "string" && (vo(c) || go(c)) ? c = parseFloat(c) : !gl(c) && Pt.test(u) && (c = po(l, u)), t.addValue(l, _t(c, { owner: t })), n[l] === void 0 && (n[l] = c), c !== null && t.setBaseTarget(l, c));
    }
}
function wl(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function xl(t, e, n) {
  const r = {};
  for (const i in t) {
    const s = wl(i, e);
    if (s !== void 0)
      r[i] = s;
    else {
      const o = n.getValue(i);
      o && (r[i] = o.get());
    }
  }
  return r;
}
function Tl({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, r;
}
function Pl(t, e) {
  const n = t.get();
  if (Array.isArray(e)) {
    for (let r = 0; r < e.length; r++)
      if (e[r] !== n)
        return !0;
  } else
    return n !== e;
}
function wo(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s = t.getDefaultTransition(), transitionEnd: o, ...a } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  r && (s = r);
  const u = [], c = i && t.animationState && t.animationState.getState()[i];
  for (const d in a) {
    const f = t.getValue(d), h = a[d];
    if (!f || h === void 0 || c && Tl(c, d))
      continue;
    const m = {
      delay: n,
      elapsed: 0,
      ...Yn(s || {}, d)
    };
    if (window.HandoffAppearAnimations) {
      const b = t.getProps()[wi];
      if (b) {
        const v = window.HandoffAppearAnimations(b, d, f, F);
        v !== null && (m.elapsed = v, m.isHandoff = !0);
      }
    }
    let p = !m.isHandoff && !Pl(f, h);
    if (m.type === "spring" && (f.getVelocity() || m.velocity) && (p = !1), f.animation && (p = !1), p)
      continue;
    f.start(Hn(d, f, h, t.shouldReduceMotion && Bt.has(d) ? { type: !1 } : m));
    const y = f.animation;
    Oe(l) && (l.add(d), y.then(() => l.remove(d))), u.push(y);
  }
  return o && Promise.all(u).then(() => {
    o && yl(t, o);
  }), u;
}
function xn(t, e, n = {}) {
  const r = Ye(t, e, n.custom);
  let { transition: i = t.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(wo(t, r, n)) : () => Promise.resolve(), o = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = i;
    return Cl(t, e, u + l, c, d, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [s, o] : [o, s];
    return l().then(() => u());
  } else
    return Promise.all([s(), o(n.delay)]);
}
function Cl(t, e, n = 0, r = 0, i = 1, s) {
  const o = [], a = (t.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(t.variantChildren).sort(Sl).forEach((u, c) => {
    u.notify("AnimationStart", e), o.push(xn(u, e, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(o);
}
function Sl(t, e) {
  return t.sortNodePosition(e);
}
function Ml(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const i = e.map((s) => xn(t, s, n));
    r = Promise.all(i);
  } else if (typeof e == "string")
    r = xn(t, e, n);
  else {
    const i = typeof e == "function" ? Ye(t, e, n.custom) : e;
    r = Promise.all(wo(t, i, n));
  }
  return r.then(() => t.notify("AnimationComplete", e));
}
const Dl = [...On].reverse(), Al = On.length;
function Vl(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: r }) => Ml(t, n, r)));
}
function kl(t) {
  let e = Vl(t);
  const n = Ol();
  let r = !0;
  const i = (l, u) => {
    const c = Ye(t, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function s(l) {
    e = l(t);
  }
  function o(l, u) {
    const c = t.getProps(), d = t.getVariantContext(!0) || {}, f = [], h = /* @__PURE__ */ new Set();
    let m = {}, p = 1 / 0;
    for (let b = 0; b < Al; b++) {
      const v = Dl[b], g = n[v], w = c[v] !== void 0 ? c[v] : d[v], C = se(w), k = v === u ? g.isActive : null;
      k === !1 && (p = b);
      let V = w === d[v] && w !== c[v] && C;
      if (V && r && t.manuallyAnimateOnMount && (V = !1), g.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && k === null || // If we didn't and don't have any defined prop for this animation type
      !w && !g.prevProp || // Or if the prop doesn't define an animation
      $e(w) || typeof w == "boolean")
        continue;
      let S = El(g.prevProp, w) || // If we're making this variant active, we want to always make it active
      v === u && g.isActive && !V && C || // If we removed a higher-priority variant (i is in reverse order)
      b > p && C, j = !1;
      const Q = Array.isArray(w) ? w : [w];
      let D = Q.reduce(i, {});
      k === !1 && (D = {});
      const { prevResolvedValues: G = {} } = g, A = {
        ...G,
        ...D
      }, P = (M) => {
        S = !0, h.has(M) && (j = !0, h.delete(M)), g.needsAnimating[M] = !0;
      };
      for (const M in A) {
        const L = D[M], _ = G[M];
        if (m.hasOwnProperty(M))
          continue;
        let N = !1;
        Ae(L) && Ae(_) ? N = !$i(L, _) : N = L !== _, N ? L !== void 0 ? P(M) : h.add(M) : L !== void 0 && h.has(M) ? P(M) : g.protectedKeys[M] = !0;
      }
      g.prevProp = w, g.prevResolvedValues = D, g.isActive && (m = { ...m, ...D }), r && t.blockInitialAnimation && (S = !1), S && (!V || j) && f.push(...Q.map((M) => ({
        animation: M,
        options: { type: v, ...l }
      })));
    }
    if (h.size) {
      const b = {};
      h.forEach((v) => {
        const g = t.getBaseTarget(v);
        g !== void 0 && (b[v] = g);
      }), f.push({ animation: b });
    }
    let y = !!f.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (y = !1), r = !1, y ? e(f) : Promise.resolve();
  }
  function a(l, u, c) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = t.variantChildren) === null || d === void 0 || d.forEach((h) => {
      var m;
      return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u);
    }), n[l].isActive = u;
    const f = o(c, l);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n
  };
}
function El(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !$i(e, t) : !1;
}
function Dt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Ol() {
  return {
    animate: Dt(!0),
    whileInView: Dt(),
    whileHover: Dt(),
    whileTap: Dt(),
    whileDrag: Dt(),
    whileFocus: Dt(),
    exit: Dt()
  };
}
class Rl extends St {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = kl(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), $e(e) && (this.unmount = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let Ll = 0;
class Fl extends St {
  constructor() {
    super(...arguments), this.id = Ll++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n, custom: r } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const s = this.node.animationState.setActive("exit", !e, { custom: r ?? this.node.getProps().custom });
    n && !e && s.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Il = {
  animation: {
    Feature: Rl
  },
  exit: {
    Feature: Fl
  }
}, Tr = (t, e) => Math.abs(t - e);
function Bl(t, e) {
  const n = Tr(t.x, e.x), r = Tr(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class xo {
  constructor(e, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = sn(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, h = Bl(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !h)
        return;
      const { point: m } = d, { timestamp: p } = K;
      this.history.push({ ...m, timestamp: p });
      const { onStart: y, onMove: b } = this.handlers;
      f || (y && y(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = on(f, this.transformPagePoint), F.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: h, onSessionEnd: m, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = sn(d.type === "pointercancel" ? this.lastMoveEventInfo : on(f, this.transformPagePoint), this.history);
      this.startEvent && h && h(d, y), m && m(d, y);
    }, !Bi(e))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const o = _e(e), a = on(o, this.transformPagePoint), { point: l } = a, { timestamp: u } = K;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, sn(a, this.history)), this.removeListeners = wt(ht(this.contextWindow, "pointermove", this.handlePointerMove), ht(this.contextWindow, "pointerup", this.handlePointerUp), ht(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), pt(this.updatePoint);
  }
}
function on(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Pr(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function sn({ point: t }, e) {
  return {
    point: t,
    delta: Pr(t, To(e)),
    offset: Pr(t, jl(e)),
    velocity: Nl(e, 0.1)
  };
}
function jl(t) {
  return t[0];
}
function To(t) {
  return t[t.length - 1];
}
function Nl(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, r = null;
  const i = To(t);
  for (; n >= 0 && (r = t[n], !(i.timestamp - r.timestamp > xt(e))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = mt(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function rt(t) {
  return t.max - t.min;
}
function Tn(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function Cr(t, e, n, r = 0.5) {
  t.origin = r, t.originPoint = U(e.min, e.max, t.origin), t.scale = rt(n) / rt(e), (Tn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = U(n.min, n.max, t.origin) - t.originPoint, (Tn(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function ie(t, e, n, r) {
  Cr(t.x, e.x, n.x, r ? r.originX : void 0), Cr(t.y, e.y, n.y, r ? r.originY : void 0);
}
function Sr(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + rt(e);
}
function Ul(t, e, n) {
  Sr(t.x, e.x, n.x), Sr(t.y, e.y, n.y);
}
function Mr(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + rt(e);
}
function oe(t, e, n) {
  Mr(t.x, e.x, n.x), Mr(t.y, e.y, n.y);
}
function Wl(t, { min: e, max: n }, r) {
  return e !== void 0 && t < e ? t = r ? U(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? U(n, t, r.max) : Math.min(t, n)), t;
}
function Dr(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function $l(t, { top: e, left: n, bottom: r, right: i }) {
  return {
    x: Dr(t.x, n, i),
    y: Dr(t.y, e, r)
  };
}
function Ar(t, e) {
  let n = e.min - t.min, r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function zl(t, e) {
  return {
    x: Ar(t.x, e.x),
    y: Ar(t.y, e.y)
  };
}
function Gl(t, e) {
  let n = 0.5;
  const r = rt(t), i = rt(e);
  return i > r ? n = le(e.min, e.max - r, t.min) : r > i && (n = le(t.min, t.max - i, e.min)), Tt(0, 1, n);
}
function _l(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Pn = 0.35;
function Yl(t = Pn) {
  return t === !1 ? t = 0 : t === !0 && (t = Pn), {
    x: Vr(t, "left", "right"),
    y: Vr(t, "top", "bottom")
  };
}
function Vr(t, e, n) {
  return {
    min: kr(t, e),
    max: kr(t, n)
  };
}
function kr(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Er = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), zt = () => ({
  x: Er(),
  y: Er()
}), Or = () => ({ min: 0, max: 0 }), z = () => ({
  x: Or(),
  y: Or()
});
function st(t) {
  return [t("x"), t("y")];
}
function Po({ top: t, left: e, right: n, bottom: r }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: r }
  };
}
function Hl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function ql(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), r = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function an(t) {
  return t === void 0 || t === 1;
}
function Cn({ scale: t, scaleX: e, scaleY: n }) {
  return !an(t) || !an(e) || !an(n);
}
function At(t) {
  return Cn(t) || Co(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function Co(t) {
  return Rr(t.x) || Rr(t.y);
}
function Rr(t) {
  return t && t !== "0%";
}
function Re(t, e, n) {
  const r = t - n, i = e * r;
  return n + i;
}
function Lr(t, e, n, r, i) {
  return i !== void 0 && (t = Re(t, i, r)), Re(t, n, r) + e;
}
function Sn(t, e = 0, n = 1, r, i) {
  t.min = Lr(t.min, e, n, r, i), t.max = Lr(t.max, e, n, r, i);
}
function So(t, { x: e, y: n }) {
  Sn(t.x, e.translate, e.scale, e.originPoint), Sn(t.y, n.translate, n.scale, n.originPoint);
}
function Kl(t, e, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    s = n[a], o = s.projectionDelta;
    const l = s.instance;
    l && l.style && l.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Gt(t, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (e.x *= o.x.scale, e.y *= o.y.scale, So(t, o)), r && At(s.latestValues) && Gt(t, s.latestValues));
  }
  e.x = Fr(e.x), e.y = Fr(e.y);
}
function Fr(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function bt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Ir(t, e, [n, r, i]) {
  const s = e[i] !== void 0 ? e[i] : 0.5, o = U(t.min, t.max, s);
  Sn(t, e[n], e[r], o, e.scale);
}
const Xl = ["x", "scaleX", "originX"], Zl = ["y", "scaleY", "originY"];
function Gt(t, e) {
  Ir(t.x, e, Xl), Ir(t.y, e, Zl);
}
function Mo(t, e) {
  return Po(ql(t.getBoundingClientRect(), e));
}
function Ql(t, e, n) {
  const r = Mo(t, n), { scroll: i } = e;
  return i && (bt(r.x, i.offset.x), bt(r.y, i.offset.y)), r;
}
const Do = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Jl = /* @__PURE__ */ new WeakMap();
class tu {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = z(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(_e(c, "page").point);
    }, s = (c, d) => {
      const { drag: f, dragPropagation: h, onDragStart: m } = this.getProps();
      if (f && !h && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ni(f), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), st((y) => {
        let b = this.getAxisMotionValue(y).get() || 0;
        if (ct.test(b)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const g = v.layout.layoutBox[y];
            g && (b = rt(g) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[y] = b;
      }), m && F.update(() => m(c, d), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, o = (c, d) => {
      const { dragPropagation: f, dragDirectionLock: h, onDirectionLock: m, onDrag: p } = this.getProps();
      if (!f && !this.openGlobalLock)
        return;
      const { offset: y } = d;
      if (h && this.currentDirection === null) {
        this.currentDirection = eu(y), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, y), this.updateAxis("y", d.point, y), this.visualElement.render(), p && p(c, d);
    }, a = (c, d) => this.stop(c, d), l = () => st((c) => {
      var d;
      return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new xo(e, {
      onSessionStart: i,
      onStart: s,
      onMove: o,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Do(this.visualElement)
    });
  }
  stop(e, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && F.update(() => s(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !we(e, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + r[e];
    this.constraints && this.constraints[e] && (o = Wl(o, this.constraints[e], this.elastic[e])), s.set(o);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, s = this.constraints;
    n && Wt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = $l(i.layoutBox, n) : this.constraints = !1, this.elastic = Yl(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && st((o) => {
      this.getAxisMotionValue(o) && (this.constraints[o] = _l(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Wt(e))
      return !1;
    const r = e.current;
    at(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = Ql(r, i.root, this.visualElement.getTransformPagePoint());
    let o = zl(i.layout.layoutBox, s);
    if (n) {
      const a = n(Hl(o));
      this.hasMutatedConstraints = !!a, a && (o = Po(a));
    }
    return o;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = st((c) => {
      if (!we(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      o && (d = { min: 0, max: 0 });
      const f = i ? 200 : 1e6, h = i ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return r.start(Hn(e, r, 0, n));
  }
  stopAnimation() {
    st((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    st((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = "_drag" + e.toUpperCase(), r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    st((n) => {
      const { drag: r } = this.getProps();
      if (!we(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(e[n] - U(o, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Wt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    st((o) => {
      const a = this.getAxisMotionValue(o);
      if (a) {
        const l = a.get();
        i[o] = Gl({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), st((o) => {
      if (!we(o, e, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: u } = this.constraints[o];
      a.set(U(l, u, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Jl.set(this.visualElement, this);
    const e = this.visualElement.current, n = ht(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Wt(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = ft(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (st((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = Pn, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function we(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function eu(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class nu extends St {
  constructor(e) {
    super(e), this.removeGroupControls = W, this.removeListeners = W, this.controls = new tu(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || W;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Br = (t) => (e, n) => {
  t && F.update(() => t(e, n));
};
class ru extends St {
  constructor() {
    super(...arguments), this.removePointerDownListener = W;
  }
  onPointerDown(e) {
    this.session = new xo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Do(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Br(e),
      onStart: Br(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && F.update(() => i(s, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ht(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function iu() {
  const t = H(Ue);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: r } = t, i = je();
  return It(() => r(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
const Se = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function jr(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Kt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (x.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = jr(t, e.target.x), r = jr(t, e.target.y);
    return `${n}% ${r}%`;
  }
}, ou = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const r = t, i = Pt.parse(t);
    if (i.length > 5)
      return r;
    const s = Pt.createTransformer(t), o = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + o] /= a, i[1 + o] /= l;
    const u = U(a, l, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i);
  }
};
class su extends pi.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = e;
    ps(au), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Se.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
    return o && (o.isPresent = s, i || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? o.promote() : o.relegate() || F.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), queueMicrotask(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ao(t) {
  const [e, n] = iu(), r = H(Ln);
  return pi.createElement(su, { ...t, layoutGroup: r, switchLayoutGroup: H(Ti), isPresent: e, safeToRemove: n });
}
const au = {
  borderRadius: {
    ...Kt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Kt,
  borderTopRightRadius: Kt,
  borderBottomLeftRadius: Kt,
  borderBottomRightRadius: Kt,
  boxShadow: ou
}, Vo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], lu = Vo.length, Nr = (t) => typeof t == "string" ? parseFloat(t) : t, Ur = (t) => typeof t == "number" || x.test(t);
function uu(t, e, n, r, i, s) {
  i ? (t.opacity = U(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    cu(r)
  ), t.opacityExit = U(e.opacity !== void 0 ? e.opacity : 1, 0, du(r))) : s && (t.opacity = U(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < lu; o++) {
    const a = `border${Vo[o]}Radius`;
    let l = Wr(e, a), u = Wr(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ur(l) === Ur(u) ? (t[a] = Math.max(U(Nr(l), Nr(u), r), 0), (ct.test(u) || ct.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = U(e.rotate || 0, n.rotate || 0, r));
}
function Wr(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const cu = ko(0, 0.5, Zi), du = ko(0.5, 0.95, W);
function ko(t, e, n) {
  return (r) => r < t ? 0 : r > e ? 1 : n(le(t, e, r));
}
function $r(t, e) {
  t.min = e.min, t.max = e.max;
}
function ot(t, e) {
  $r(t.x, e.x), $r(t.y, e.y);
}
function zr(t, e, n, r, i) {
  return t -= e, t = Re(t, 1 / n, r), i !== void 0 && (t = Re(t, 1 / i, r)), t;
}
function fu(t, e = 0, n = 1, r = 0.5, i, s = t, o = t) {
  if (ct.test(e) && (e = parseFloat(e), e = U(o.min, o.max, e / 100) - o.min), typeof e != "number")
    return;
  let a = U(s.min, s.max, r);
  t === s && (a -= e), t.min = zr(t.min, e, n, a, i), t.max = zr(t.max, e, n, a, i);
}
function Gr(t, e, [n, r, i], s, o) {
  fu(t, e[n], e[r], e[i], e.scale, s, o);
}
const hu = ["x", "scaleX", "originX"], mu = ["y", "scaleY", "originY"];
function _r(t, e, n, r) {
  Gr(t.x, e, hu, n ? n.x : void 0, r ? r.x : void 0), Gr(t.y, e, mu, n ? n.y : void 0, r ? r.y : void 0);
}
function Yr(t) {
  return t.translate === 0 && t.scale === 1;
}
function Eo(t) {
  return Yr(t.x) && Yr(t.y);
}
function pu(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function Oo(t, e) {
  return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max);
}
function Hr(t) {
  return rt(t.x) / rt(t.y);
}
class gu {
  constructor() {
    this.members = [];
  }
  add(e) {
    qn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Kn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(e, n) {
    const r = this.lead;
    if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
      r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, n && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: r } = e;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qr(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x, s = t.y.translate / e.y;
  if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `), (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const o = t.x.scale * e.x, a = t.y.scale * e.y;
  return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || "none";
}
const vu = (t, e) => t.depth - e.depth;
class yu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    qn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Kn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(vu), this.isDirty = !1, this.children.forEach(e);
  }
}
function bu(t, e) {
  const n = performance.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= e && (pt(r), t(s - e));
  };
  return F.read(r, !0), () => pt(r);
}
function wu(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function xu(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function Tu(t, e, n) {
  const r = nt(t) ? t : _t(t);
  return r.start(Hn("", r, e, n)), r.animation;
}
const Kr = ["", "X", "Y", "Z"], Pu = { visibility: "hidden" }, Xr = 1e3;
let Cu = 0;
const Vt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Ro({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, a = e == null ? void 0 : e()) {
      this.id = Cu++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Vt.totalNodes = Vt.resolvedTargetDeltas = Vt.recalculatedProjection = 0, this.nodes.forEach(Du), this.nodes.forEach(Ou), this.nodes.forEach(Ru), this.nodes.forEach(Au), wu(Vt);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new yu());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Xn()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = xu(o), this.instance = o;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        t(o, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = bu(f, 250), Se.hasAnimatedSinceResize && (Se.hasAnimatedSinceResize = !1, this.nodes.forEach(Qr));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || ju, { onLayoutAnimationStart: y, onLayoutAnimationComplete: b } = c.getProps(), v = !this.targetLayout || !Oo(this.targetLayout, m) || h, g = !f && h;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || f && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, g);
          const w = {
            ...Yn(p, "layout"),
            onPlay: y,
            onComplete: b
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Qr(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, pt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Lu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Zr);
        return;
      }
      this.isUpdating || this.nodes.forEach(ku), this.isUpdating = !1, this.nodes.forEach(Eu), this.nodes.forEach(Su), this.nodes.forEach(Mu), this.clearAllSnapshots();
      const a = performance.now();
      K.delta = Tt(0, 1e3 / 60, a - K.timestamp), K.timestamp = a, K.isProcessing = !0, Xe.update.process(K), Xe.preRender.process(K), Xe.render.process(K), K.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Vu), this.sharedNodes.forEach(Fu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      F.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: o,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!i)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !Eo(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && (a || At(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), Nu(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o)
        return z();
      const a = o.measureViewportBox(), { scroll: l } = this.root;
      return l && (bt(a.x, l.offset.x), bt(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = z();
      ot(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            ot(a, o);
            const { scroll: f } = this.root;
            f && (bt(a.x, -f.offset.x), bt(a.y, -f.offset.y));
          }
          bt(a.x, c.offset.x), bt(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = z();
      ot(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Gt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), At(c.latestValues) && Gt(l, c.latestValues);
      }
      return At(this.latestValues) && Gt(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = z();
      ot(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !At(u.latestValues))
          continue;
        Cn(u.latestValues) && u.updateSnapshot();
        const c = z(), d = u.measurePageBox();
        ot(c, d), _r(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return At(this.latestValues) && _r(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== K.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = K.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = z(), this.relativeTargetOrigin = z(), oe(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), ot(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = z(), this.targetWithTransforms = z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ul(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ot(this.target, this.layout.layoutBox), So(this.target, this.targetDelta)) : ot(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = z(), this.relativeTargetOrigin = z(), oe(this.relativeTargetOrigin, this.target, h.target), ot(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Vt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Cn(this.parent.latestValues) || Co(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === K.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      ot(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, h = this.treeScale.y;
      Kl(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
      const { target: m } = a;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = zt(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = zt(), this.projectionDeltaWithTransform = zt());
      const p = this.projectionTransform;
      ie(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = qr(this.projectionDelta, this.treeScale), (this.projectionTransform !== p || this.treeScale.x !== f || this.treeScale.y !== h) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), Vt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = zt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = z(), h = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, p = h !== m, y = this.getStack(), b = !y || y.members.length <= 1, v = !!(p && !b && this.options.crossfade === !0 && !this.path.some(Bu));
      this.animationProgress = 0;
      let g;
      this.mixTargetDelta = (w) => {
        const C = w / 1e3;
        Jr(d.x, o.x, C), Jr(d.y, o.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (oe(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Iu(this.relativeTarget, this.relativeTargetOrigin, f, C), g && pu(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = z()), ot(g, this.relativeTarget)), p && (this.animationValues = c, uu(c, u, this.latestValues, C, v, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (pt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = F.update(() => {
        Se.hasAnimatedSinceResize = !0, this.currentAnimation = Tu(0, Xr, {
          ...o,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Xr), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (this !== o && this.layout && u && Lo(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || z();
          const d = rt(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + d;
          const f = rt(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + f;
        }
        ot(a, l), Gt(a, c), ie(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new gu()), this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: l } = o;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)
        return;
      const u = {};
      for (let c = 0; c < Kr.length; c++) {
        const d = "rotate" + Kr[c];
        l[d] && (u[d] = l[d], o.setStaticValue(d, 0));
      }
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Pu;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ce(o == null ? void 0 : o.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Ce(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !At(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = qr(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: h, y: m } = this.projectionDelta;
      u.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const p in Me) {
        if (f[p] === void 0)
          continue;
        const { correct: y, applyTo: b } = Me[p], v = u.transform === "none" ? f[p] : y(f[p], d);
        if (b) {
          const g = b.length;
          for (let w = 0; w < g; w++)
            u[b[w]] = v;
        } else
          u[p] = v;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Ce(o == null ? void 0 : o.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Zr), this.root.sharedNodes.clear();
    }
  };
}
function Su(t) {
  t.updateLayout();
}
function Mu(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = t.layout, { animationType: s } = t.options, o = n.source !== t.layout.source;
    s === "size" ? st((d) => {
      const f = o ? n.measuredBox[d] : n.layoutBox[d], h = rt(f);
      f.min = r[d].min, f.max = f.min + h;
    }) : Lo(s, n.layoutBox, r) && st((d) => {
      const f = o ? n.measuredBox[d] : n.layoutBox[d], h = rt(r[d]);
      f.max = f.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[d].max = t.relativeTarget[d].min + h);
    });
    const a = zt();
    ie(a, r, n.layoutBox);
    const l = zt();
    o ? ie(l, t.applyTransform(i, !0), n.measuredBox) : ie(l, r, n.layoutBox);
    const u = !Eo(a);
    let c = !1;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const m = z();
          oe(m, n.layoutBox, f.layoutBox);
          const p = z();
          oe(p, r, h.layoutBox), Oo(m, p) || (c = !0), d.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = d);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: r } = t.options;
    r && r();
  }
  t.options.transition = void 0;
}
function Du(t) {
  Vt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Au(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Vu(t) {
  t.clearSnapshot();
}
function Zr(t) {
  t.clearMeasurements();
}
function ku(t) {
  t.isLayoutDirty = !1;
}
function Eu(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Qr(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Ou(t) {
  t.resolveTargetDelta();
}
function Ru(t) {
  t.calcProjection();
}
function Lu(t) {
  t.resetRotation();
}
function Fu(t) {
  t.removeLeadSnapshot();
}
function Jr(t, e, n) {
  t.translate = U(e.translate, 0, n), t.scale = U(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function ti(t, e, n, r) {
  t.min = U(e.min, n.min, r), t.max = U(e.max, n.max, r);
}
function Iu(t, e, n, r) {
  ti(t.x, e.x, n.x, r), ti(t.y, e.y, n.y, r);
}
function Bu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const ju = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ei = (t) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t), ni = ei("applewebkit/") && !ei("chrome/") ? Math.round : W;
function ri(t) {
  t.min = ni(t.min), t.max = ni(t.max);
}
function Nu(t) {
  ri(t.x), ri(t.y);
}
function Lo(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Tn(Hr(e), Hr(n), 0.2);
}
const Uu = Ro({
  attachResizeListener: (t, e) => ft(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ln = {
  current: void 0
}, Fo = Ro({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!ln.current) {
      const t = new Uu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), ln.current = t;
    }
    return ln.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Wu = {
  pan: {
    Feature: ru
  },
  drag: {
    Feature: nu,
    ProjectionNode: Fo,
    MeasureLayout: Ao
  }
}, $u = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function zu(t) {
  const e = $u.exec(t);
  if (!e)
    return [,];
  const [, n, r] = e;
  return [n, r];
}
const Gu = 4;
function Mn(t, e, n = 1) {
  at(n <= Gu, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [r, i] = zu(t);
  if (!r)
    return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return vo(o) ? parseFloat(o) : o;
  } else
    return pn(i) ? Mn(i, e, n + 1) : i;
}
function _u(t, { ...e }, n) {
  const r = t.current;
  if (!(r instanceof Element))
    return { target: e, transitionEnd: n };
  n && (n = { ...n }), t.values.forEach((i) => {
    const s = i.get();
    if (!pn(s))
      return;
    const o = Mn(s, r);
    o && i.set(o);
  });
  for (const i in e) {
    const s = e[i];
    if (!pn(s))
      continue;
    const o = Mn(s, r);
    o && (e[i] = o, n || (n = {}), n[i] === void 0 && (n[i] = s));
  }
  return { target: e, transitionEnd: n };
}
const Yu = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), Io = (t) => Yu.has(t), Hu = (t) => Object.keys(t).some(Io), xe = (t) => t === jt || t === x, ii = (t, e) => parseFloat(t.split(", ")[e]), oi = (t, e) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/);
  if (i)
    return ii(i[1], e);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? ii(s[1], t) : 0;
  }
}, qu = /* @__PURE__ */ new Set(["x", "y", "z"]), Ku = de.filter((t) => !qu.has(t));
function Xu(t) {
  const e = [];
  return Ku.forEach((n) => {
    const r = t.getValue(n);
    r !== void 0 && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), e.length && t.render(), e;
}
const Yt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: oi(4, 13),
  y: oi(5, 14)
};
Yt.translateX = Yt.x;
Yt.translateY = Yt.y;
const Zu = (t, e, n) => {
  const r = e.measureViewportBox(), i = e.current, s = getComputedStyle(i), { display: o } = s, a = {};
  o === "none" && e.setStaticValue("display", t.display || "block"), n.forEach((u) => {
    a[u] = Yt[u](r, s);
  }), e.render();
  const l = e.measureViewportBox();
  return n.forEach((u) => {
    const c = e.getValue(u);
    c && c.jump(a[u]), t[u] = Yt[u](l, s);
  }), t;
}, Qu = (t, e, n = {}, r = {}) => {
  e = { ...e }, r = { ...r };
  const i = Object.keys(e).filter(Io);
  let s = [], o = !1;
  const a = [];
  if (i.forEach((l) => {
    const u = t.getValue(l);
    if (!t.hasValue(l))
      return;
    let c = n[l], d = qt(c);
    const f = e[l];
    let h;
    if (Ae(f)) {
      const m = f.length, p = f[0] === null ? 1 : 0;
      c = f[p], d = qt(c);
      for (let y = p; y < m && f[y] !== null; y++)
        h ? at(qt(f[y]) === h, "All keyframes must be of the same type") : (h = qt(f[y]), at(h === d || xe(d) && xe(h), "Keyframes must be of the same dimension as the current value"));
    } else
      h = qt(f);
    if (d !== h)
      if (xe(d) && xe(h)) {
        const m = u.get();
        typeof m == "string" && u.set(parseFloat(m)), typeof f == "string" ? e[l] = parseFloat(f) : Array.isArray(f) && h === x && (e[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (h != null && h.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(h.transform(c)) : e[l] = d.transform(f) : (o || (s = Xu(t), o = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : e[l], u.jump(f));
  }), a.length) {
    const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = Zu(e, t, a);
    return s.length && s.forEach(([c, d]) => {
      t.getValue(c).set(d);
    }), t.render(), We && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: e, transitionEnd: r };
};
function Ju(t, e, n, r) {
  return Hu(e) ? Qu(t, e, n, r) : { target: e, transitionEnd: r };
}
const tc = (t, e, n, r) => {
  const i = _u(t, e, r);
  return e = i.target, r = i.transitionEnd, Ju(t, e, n, r);
}, Dn = { current: null }, Bo = { current: !1 };
function ec() {
  if (Bo.current = !0, !!We)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Dn.current = t.matches;
      t.addListener(e), e();
    } else
      Dn.current = !1;
}
function nc(t, e, n) {
  const { willChange: r } = e;
  for (const i in e) {
    const s = e[i], o = n[i];
    if (nt(s))
      t.addValue(i, s), Oe(r) && r.add(i), process.env.NODE_ENV === "development" && Zn(s.version === "10.18.0", `Attempting to mix Framer Motion versions ${s.version} with 10.18.0 may not work as expected.`);
    else if (nt(o))
      t.addValue(i, _t(s, { owner: t })), Oe(r) && r.remove(i);
    else if (o !== s)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        !a.hasAnimated && a.set(s);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, _t(a !== void 0 ? a : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const si = /* @__PURE__ */ new WeakMap(), jo = Object.keys(ae), rc = jo.length, ai = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], ic = Rn.length;
class oc {
  constructor({ parent: e, props: n, presenceContext: r, reducedMotionConfig: i, visualState: s }, o = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => F.render(this.render, !1, !0);
    const { latestValues: a, renderState: l } = s;
    this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = r, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.isControllingVariants = ze(n), this.isVariantNode = xi(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      a[d] !== void 0 && nt(f) && (f.set(a[d], !1), Oe(u) && u.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n) {
    return {};
  }
  mount(e) {
    this.current = e, si.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Bo.current || ec(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Dn.current, process.env.NODE_ENV !== "production" && Zn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    si.delete(this.current), this.projection && this.projection.unmount(), pt(this.notifyUpdate), pt(this.render), this.valueSubscriptions.forEach((e) => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features)
      this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const r = Bt.has(e), i = n.on("change", (o) => {
      this.latestValues[e] = o, this.props.onUpdate && F.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), s();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, r, i, s) {
    let o, a;
    if (process.env.NODE_ENV !== "production" && i && r) {
      const l = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      n.ignoreStrict ? me(!1, l) : at(!1, l);
    }
    for (let l = 0; l < rc; l++) {
      const u = jo[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: h } = ae[u];
      f && (o = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), h && (a = h));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
      this.projection = new o(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: h } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Wt(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: f,
        layoutRoot: h
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : z();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < ai.length; r++) {
      const i = ai[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = e["on" + i];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = nc(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(e = !1) {
    if (e)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < ic; r++) {
      const i = Rn[r], s = this.props[i];
      (se(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    n !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, n)), this.values.set(e, n), this.latestValues[e] = n.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let r = this.values.get(e);
    return r === void 0 && n !== void 0 && (r = _t(n, { owner: this }), this.addValue(e, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e) {
    var n;
    return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: r } = this.props, i = typeof r == "string" || typeof r == "object" ? (n = Wn(this.props, r)) === null || n === void 0 ? void 0 : n[e] : void 0;
    if (r && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !nt(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Xn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class No extends oc {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: r }) {
    delete n[e], delete r[e];
  }
  makeTargetAnimatableFromInstance({ transition: e, transitionEnd: n, ...r }, { transformValues: i }, s) {
    let o = xl(r, e || {}, this);
    if (i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s) {
      bl(this, r, o);
      const a = tc(this, r, o, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: e,
      transitionEnd: n,
      ...r
    };
  }
}
function sc(t) {
  return window.getComputedStyle(t);
}
class ac extends No {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(e, n) {
    if (Bt.has(n)) {
      const r = _n(n);
      return r && r.default || 0;
    } else {
      const r = sc(e), i = (Si(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Mo(e, n);
  }
  build(e, n, r, i) {
    In(e, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return Un(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    nt(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(e, n, r, i) {
    Ei(e, n, r, i);
  }
}
class lc extends No {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Bt.has(n)) {
      const r = _n(n);
      return r && r.default || 0;
    }
    return n = Oi.has(n) ? n : En(n), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return z();
  }
  scrapeMotionValuesFromProps(e, n) {
    return Li(e, n);
  }
  build(e, n, r, i) {
    jn(e, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, r, i) {
    Ri(e, n, r, i);
  }
  mount(e) {
    this.isSVGTag = Nn(e.tagName), super.mount(e);
  }
}
const uc = (t, e) => Fn(t) ? new lc(e, { enableHardwareAcceleration: !1 }) : new ac(e, { enableHardwareAcceleration: !0 }), cc = {
  layout: {
    ProjectionNode: Fo,
    MeasureLayout: Ao
  }
}, dc = {
  ...Il,
  ...ia,
  ...Wu,
  ...cc
}, Uo = /* @__PURE__ */ hs((t, e) => _s(t, e, dc, uc));
function Wo() {
  const t = et(!1);
  return kn(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
function fc() {
  const t = Wo(), [e, n] = ue(0), r = Y(() => {
    t.current && n(e + 1);
  }, [e]);
  return [Y(() => F.postRender(r), [r]), e];
}
class hc extends tt.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function mc({ children: t, isPresent: e }) {
  const n = je(), r = et(null), i = et({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return gi(() => {
    const { width: s, height: o, top: a, left: l } = i.current;
    if (e || !r.current || !s || !o)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [e]), tt.createElement(hc, { isPresent: e, childRef: r, sizeRef: i }, tt.cloneElement(t, { ref: r }));
}
const un = ({ children: t, initial: e, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
  const a = Fi(pc), l = je(), u = X(
    () => ({
      id: l,
      initial: e,
      isPresent: n,
      custom: i,
      onExitComplete: (c) => {
        a.set(c, !0);
        for (const d of a.values())
          if (!d)
            return;
        r && r();
      },
      register: (c) => (a.set(c, !1), () => a.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? void 0 : [n]
  );
  return X(() => {
    a.forEach((c, d) => a.set(d, !1));
  }, [n]), tt.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), o === "popLayout" && (t = tt.createElement(mc, { isPresent: n }, t)), tt.createElement(Ue.Provider, { value: u }, t);
};
function pc() {
  return /* @__PURE__ */ new Map();
}
function gc(t) {
  return It(() => () => t(), []);
}
const kt = (t) => t.key || "";
function vc(t, e) {
  t.forEach((n) => {
    const r = kt(n);
    e.set(r, n);
  });
}
function yc(t) {
  const e = [];
  return rs.forEach(t, (n) => {
    vi(n) && e.push(n);
  }), e;
}
const $o = ({ children: t, custom: e, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: s = !0, mode: o = "sync" }) => {
  at(!i, "Replace exitBeforeEnter with mode='wait'");
  const a = H(Ln).forceRender || fc()[0], l = Wo(), u = yc(t);
  let c = u;
  const d = et(/* @__PURE__ */ new Map()).current, f = et(c), h = et(/* @__PURE__ */ new Map()).current, m = et(!0);
  if (kn(() => {
    m.current = !1, vc(u, h), f.current = c;
  }), gc(() => {
    m.current = !0, h.clear(), d.clear();
  }), m.current)
    return tt.createElement(tt.Fragment, null, c.map((v) => tt.createElement(un, { key: kt(v), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: o }, v)));
  c = [...c];
  const p = f.current.map(kt), y = u.map(kt), b = p.length;
  for (let v = 0; v < b; v++) {
    const g = p[v];
    y.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
  }
  return o === "wait" && d.size && (c = []), d.forEach((v, g) => {
    if (y.indexOf(g) !== -1)
      return;
    const w = h.get(g);
    if (!w)
      return;
    const C = p.indexOf(g);
    let k = v;
    if (!k) {
      const V = () => {
        d.delete(g);
        const T = Array.from(h.keys()).filter((S) => !y.includes(S));
        if (T.forEach((S) => h.delete(S)), f.current = u.filter((S) => {
          const j = kt(S);
          return (
            // filter out the node exiting
            j === g || // filter out the leftover children
            T.includes(j)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          a(), r && r();
        }
      };
      k = tt.createElement(un, { key: kt(w), isPresent: !1, onExitComplete: V, custom: e, presenceAffectsLayout: s, mode: o }, w), d.set(g, k);
    }
    c.splice(C, 0, k);
  }), c = c.map((v) => {
    const g = v.key;
    return d.has(g) ? v : tt.createElement(un, { key: kt(v), isPresent: !0, presenceAffectsLayout: s, mode: o }, v);
  }), process.env.NODE_ENV !== "production" && o === "wait" && c.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), tt.createElement(tt.Fragment, null, d.size ? c : c.map((v) => mn(v)));
};
var bc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const wc = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), He = (t, e) => {
  const n = Be(
    ({ color: r = "currentColor", size: i = 24, strokeWidth: s = 2, absoluteStrokeWidth: o, children: a, ...l }, u) => hn(
      "svg",
      {
        ref: u,
        ...bc,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: o ? Number(s) * 24 / Number(i) : s,
        className: `lucide lucide-${wc(t)}`,
        ...l
      },
      [
        ...e.map(([c, d]) => hn(c, d)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return n.displayName = `${t}`, n;
}, xc = He("ChevronDown", [
  ["polyline", { points: "6 9 12 15 18 9", key: "1do0m2" }]
]), Tc = He("ChevronUp", [
  ["polyline", { points: "18 15 12 9 6 15", key: "1uugdp" }]
]), Pc = He("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]), Cc = He("X", [
  ["line", { x1: "18", x2: "6", y1: "6", y2: "18", key: "15jfxm" }],
  ["line", { x1: "6", x2: "18", y1: "6", y2: "18", key: "d1lma3" }]
]);
function Le(t) {
  "@babel/helpers - typeof";
  return Le = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Le(t);
}
function Ct(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function Z(t, e) {
  if (e.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function dt(t) {
  Z(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || Le(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Sc(t, e) {
  Z(2, arguments);
  var n = dt(t).getTime(), r = Ct(e);
  return new Date(n + r);
}
var Mc = {};
function qe() {
  return Mc;
}
function Dc(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
var zo = 6e4, Go = 36e5;
function Ac(t) {
  return Z(1, arguments), t instanceof Date || Le(t) === "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Vc(t) {
  if (Z(1, arguments), !Ac(t) && typeof t != "number")
    return !1;
  var e = dt(t);
  return !isNaN(Number(e));
}
function kc(t, e) {
  Z(2, arguments);
  var n = Ct(e);
  return Sc(t, -n);
}
var Ec = 864e5;
function Oc(t) {
  Z(1, arguments);
  var e = dt(t), n = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), i = n - r;
  return Math.floor(i / Ec) + 1;
}
function Fe(t) {
  Z(1, arguments);
  var e = 1, n = dt(t), r = n.getUTCDay(), i = (r < e ? 7 : 0) + r - e;
  return n.setUTCDate(n.getUTCDate() - i), n.setUTCHours(0, 0, 0, 0), n;
}
function _o(t) {
  Z(1, arguments);
  var e = dt(t), n = e.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var i = Fe(r), s = /* @__PURE__ */ new Date(0);
  s.setUTCFullYear(n, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var o = Fe(s);
  return e.getTime() >= i.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1;
}
function Rc(t) {
  Z(1, arguments);
  var e = _o(t), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Fe(n);
  return r;
}
var Lc = 6048e5;
function Fc(t) {
  Z(1, arguments);
  var e = dt(t), n = Fe(e).getTime() - Rc(e).getTime();
  return Math.round(n / Lc) + 1;
}
function Ie(t, e) {
  var n, r, i, s, o, a, l, u;
  Z(1, arguments);
  var c = qe(), d = Ct((n = (r = (i = (s = e == null ? void 0 : e.weekStartsOn) !== null && s !== void 0 ? s : e == null || (o = e.locale) === null || o === void 0 || (a = o.options) === null || a === void 0 ? void 0 : a.weekStartsOn) !== null && i !== void 0 ? i : c.weekStartsOn) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = dt(t), h = f.getUTCDay(), m = (h < d ? 7 : 0) + h - d;
  return f.setUTCDate(f.getUTCDate() - m), f.setUTCHours(0, 0, 0, 0), f;
}
function Yo(t, e) {
  var n, r, i, s, o, a, l, u;
  Z(1, arguments);
  var c = dt(t), d = c.getUTCFullYear(), f = qe(), h = Ct((n = (r = (i = (s = e == null ? void 0 : e.firstWeekContainsDate) !== null && s !== void 0 ? s : e == null || (o = e.locale) === null || o === void 0 || (a = o.options) === null || a === void 0 ? void 0 : a.firstWeekContainsDate) !== null && i !== void 0 ? i : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(d + 1, 0, h), m.setUTCHours(0, 0, 0, 0);
  var p = Ie(m, e), y = /* @__PURE__ */ new Date(0);
  y.setUTCFullYear(d, 0, h), y.setUTCHours(0, 0, 0, 0);
  var b = Ie(y, e);
  return c.getTime() >= p.getTime() ? d + 1 : c.getTime() >= b.getTime() ? d : d - 1;
}
function Ic(t, e) {
  var n, r, i, s, o, a, l, u;
  Z(1, arguments);
  var c = qe(), d = Ct((n = (r = (i = (s = e == null ? void 0 : e.firstWeekContainsDate) !== null && s !== void 0 ? s : e == null || (o = e.locale) === null || o === void 0 || (a = o.options) === null || a === void 0 ? void 0 : a.firstWeekContainsDate) !== null && i !== void 0 ? i : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Yo(t, e), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(f, 0, d), h.setUTCHours(0, 0, 0, 0);
  var m = Ie(h, e);
  return m;
}
var Bc = 6048e5;
function jc(t, e) {
  Z(1, arguments);
  var n = dt(t), r = Ie(n, e).getTime() - Ic(n, e).getTime();
  return Math.round(r / Bc) + 1;
}
function R(t, e) {
  for (var n = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
    r = "0" + r;
  return n + r;
}
var Nc = {
  // Year
  y: function(e, n) {
    var r = e.getUTCFullYear(), i = r > 0 ? r : 1 - r;
    return R(n === "yy" ? i % 100 : i, n.length);
  },
  // Month
  M: function(e, n) {
    var r = e.getUTCMonth();
    return n === "M" ? String(r + 1) : R(r + 1, 2);
  },
  // Day of the month
  d: function(e, n) {
    return R(e.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(e, n) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(e, n) {
    return R(e.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(e, n) {
    return R(e.getUTCHours(), n.length);
  },
  // Minute
  m: function(e, n) {
    return R(e.getUTCMinutes(), n.length);
  },
  // Second
  s: function(e, n) {
    return R(e.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(e, n) {
    var r = n.length, i = e.getUTCMilliseconds(), s = Math.floor(i * Math.pow(10, r - 3));
    return R(s, n.length);
  }
};
const gt = Nc;
var Ut = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Uc = {
  // Era
  G: function(e, n, r) {
    var i = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(i, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(i, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(i, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(e, n, r) {
    if (n === "yo") {
      var i = e.getUTCFullYear(), s = i > 0 ? i : 1 - i;
      return r.ordinalNumber(s, {
        unit: "year"
      });
    }
    return gt.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, r, i) {
    var s = Yo(e, i), o = s > 0 ? s : 1 - s;
    if (n === "YY") {
      var a = o % 100;
      return R(a, 2);
    }
    return n === "Yo" ? r.ordinalNumber(o, {
      unit: "year"
    }) : R(o, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    var r = _o(e);
    return R(r, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, n) {
    var r = e.getUTCFullYear();
    return R(r, n.length);
  },
  // Quarter
  Q: function(e, n, r) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(i);
      case "QQ":
        return R(i, 2);
      case "Qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(i, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, r) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(i);
      case "qq":
        return R(i, 2);
      case "qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(i, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, r) {
    var i = e.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return gt.M(e, n);
      case "Mo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(i, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(e, n, r) {
    var i = e.getUTCMonth();
    switch (n) {
      case "L":
        return String(i + 1);
      case "LL":
        return R(i + 1, 2);
      case "Lo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(i, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(e, n, r, i) {
    var s = jc(e, i);
    return n === "wo" ? r.ordinalNumber(s, {
      unit: "week"
    }) : R(s, n.length);
  },
  // ISO week of year
  I: function(e, n, r) {
    var i = Fc(e);
    return n === "Io" ? r.ordinalNumber(i, {
      unit: "week"
    }) : R(i, n.length);
  },
  // Day of the month
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : gt.d(e, n);
  },
  // Day of year
  D: function(e, n, r) {
    var i = Oc(e);
    return n === "Do" ? r.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : R(i, n.length);
  },
  // Day of week
  E: function(e, n, r) {
    var i = e.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, r, i) {
    var s = e.getUTCDay(), o = (s - i.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(o);
      case "ee":
        return R(o, 2);
      case "eo":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "eee":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, n, r, i) {
    var s = e.getUTCDay(), o = (s - i.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(o);
      case "cc":
        return R(o, n.length);
      case "co":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "ccc":
        return r.day(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(s, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(s, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, n, r) {
    var i = e.getUTCDay(), s = i === 0 ? 7 : i;
    switch (n) {
      case "i":
        return String(s);
      case "ii":
        return R(s, n.length);
      case "io":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "iii":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, r) {
    var i = e.getUTCHours(), s = i / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, n, r) {
    var i = e.getUTCHours(), s;
    switch (i === 12 ? s = Ut.noon : i === 0 ? s = Ut.midnight : s = i / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, n, r) {
    var i = e.getUTCHours(), s;
    switch (i >= 17 ? s = Ut.evening : i >= 12 ? s = Ut.afternoon : i >= 4 ? s = Ut.morning : s = Ut.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, n, r) {
    if (n === "ho") {
      var i = e.getUTCHours() % 12;
      return i === 0 && (i = 12), r.ordinalNumber(i, {
        unit: "hour"
      });
    }
    return gt.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, r) {
    return n === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : gt.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, r) {
    var i = e.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : R(i, n.length);
  },
  // Hour [1-24]
  k: function(e, n, r) {
    var i = e.getUTCHours();
    return i === 0 && (i = 24), n === "ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : R(i, n.length);
  },
  // Minute
  m: function(e, n, r) {
    return n === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : gt.m(e, n);
  },
  // Second
  s: function(e, n, r) {
    return n === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : gt.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return gt.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (n) {
      case "X":
        return ui(o);
      case "XXXX":
      case "XX":
        return Et(o);
      case "XXXXX":
      case "XXX":
      default:
        return Et(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTimezoneOffset();
    switch (n) {
      case "x":
        return ui(o);
      case "xxxx":
      case "xx":
        return Et(o);
      case "xxxxx":
      case "xxx":
      default:
        return Et(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + li(o, ":");
      case "OOOO":
      default:
        return "GMT" + Et(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + li(o, ":");
      case "zzzz":
      default:
        return "GMT" + Et(o, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, r, i) {
    var s = i._originalDate || e, o = Math.floor(s.getTime() / 1e3);
    return R(o, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTime();
    return R(o, n.length);
  }
};
function li(t, e) {
  var n = t > 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = r % 60;
  if (s === 0)
    return n + String(i);
  var o = e || "";
  return n + String(i) + o + R(s, 2);
}
function ui(t, e) {
  if (t % 60 === 0) {
    var n = t > 0 ? "-" : "+";
    return n + R(Math.abs(t) / 60, 2);
  }
  return Et(t, e);
}
function Et(t, e) {
  var n = e || "", r = t > 0 ? "-" : "+", i = Math.abs(t), s = R(Math.floor(i / 60), 2), o = R(i % 60, 2);
  return r + s + n + o;
}
const Wc = Uc;
var ci = function(e, n) {
  switch (e) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, Ho = function(e, n) {
  switch (e) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, $c = function(e, n) {
  var r = e.match(/(P+)(p+)?/) || [], i = r[1], s = r[2];
  if (!s)
    return ci(e, n);
  var o;
  switch (i) {
    case "P":
      o = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      o = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      o = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      o = n.dateTime({
        width: "full"
      });
      break;
  }
  return o.replace("{{date}}", ci(i, n)).replace("{{time}}", Ho(s, n));
}, zc = {
  p: Ho,
  P: $c
};
const Gc = zc;
var _c = ["D", "DD"], Yc = ["YY", "YYYY"];
function Hc(t) {
  return _c.indexOf(t) !== -1;
}
function qc(t) {
  return Yc.indexOf(t) !== -1;
}
function di(t, e, n) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Kc = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Xc = function(e, n, r) {
  var i, s = Kc[e];
  return typeof s == "string" ? i = s : n === 1 ? i = s.one : i = s.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const Zc = Xc;
function cn(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.width ? String(e.width) : t.defaultWidth, r = t.formats[n] || t.formats[t.defaultWidth];
    return r;
  };
}
var Qc = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Jc = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, td = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ed = {
  date: cn({
    formats: Qc,
    defaultWidth: "full"
  }),
  time: cn({
    formats: Jc,
    defaultWidth: "full"
  }),
  dateTime: cn({
    formats: td,
    defaultWidth: "full"
  })
};
const nd = ed;
var rd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, id = function(e, n, r, i) {
  return rd[e];
};
const od = id;
function Xt(t) {
  return function(e, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", i;
    if (r === "formatting" && t.formattingValues) {
      var s = t.defaultFormattingWidth || t.defaultWidth, o = n != null && n.width ? String(n.width) : s;
      i = t.formattingValues[o] || t.formattingValues[s];
    } else {
      var a = t.defaultWidth, l = n != null && n.width ? String(n.width) : t.defaultWidth;
      i = t.values[l] || t.values[a];
    }
    var u = t.argumentCallback ? t.argumentCallback(e) : e;
    return i[u];
  };
}
var sd = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ad = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ld = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, ud = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, cd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, dd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, fd = function(e, n) {
  var r = Number(e), i = r % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, hd = {
  ordinalNumber: fd,
  era: Xt({
    values: sd,
    defaultWidth: "wide"
  }),
  quarter: Xt({
    values: ad,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Xt({
    values: ld,
    defaultWidth: "wide"
  }),
  day: Xt({
    values: ud,
    defaultWidth: "wide"
  }),
  dayPeriod: Xt({
    values: cd,
    defaultWidth: "wide",
    formattingValues: dd,
    defaultFormattingWidth: "wide"
  })
};
const md = hd;
function Zt(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, i = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], s = e.match(i);
    if (!s)
      return null;
    var o = s[0], a = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], l = Array.isArray(a) ? gd(a, function(d) {
      return d.test(o);
    }) : pd(a, function(d) {
      return d.test(o);
    }), u;
    u = t.valueCallback ? t.valueCallback(l) : l, u = n.valueCallback ? n.valueCallback(u) : u;
    var c = e.slice(o.length);
    return {
      value: u,
      rest: c
    };
  };
}
function pd(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n) && e(t[n]))
      return n;
}
function gd(t, e) {
  for (var n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function vd(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.match(t.matchPattern);
    if (!r)
      return null;
    var i = r[0], s = e.match(t.parsePattern);
    if (!s)
      return null;
    var o = t.valueCallback ? t.valueCallback(s[0]) : s[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    var a = e.slice(i.length);
    return {
      value: o,
      rest: a
    };
  };
}
var yd = /^(\d+)(th|st|nd|rd)?/i, bd = /\d+/i, wd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xd = {
  any: [/^b/i, /^(a|c)/i]
}, Td = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Pd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Cd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Sd = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Md = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Dd = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ad = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Vd = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, kd = {
  ordinalNumber: vd({
    matchPattern: yd,
    parsePattern: bd,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Zt({
    matchPatterns: wd,
    defaultMatchWidth: "wide",
    parsePatterns: xd,
    defaultParseWidth: "any"
  }),
  quarter: Zt({
    matchPatterns: Td,
    defaultMatchWidth: "wide",
    parsePatterns: Pd,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Zt({
    matchPatterns: Cd,
    defaultMatchWidth: "wide",
    parsePatterns: Sd,
    defaultParseWidth: "any"
  }),
  day: Zt({
    matchPatterns: Md,
    defaultMatchWidth: "wide",
    parsePatterns: Dd,
    defaultParseWidth: "any"
  }),
  dayPeriod: Zt({
    matchPatterns: Ad,
    defaultMatchWidth: "any",
    parsePatterns: Vd,
    defaultParseWidth: "any"
  })
};
const Ed = kd;
var Od = {
  code: "en-US",
  formatDistance: Zc,
  formatLong: nd,
  formatRelative: od,
  localize: md,
  match: Ed,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Rd = Od;
var Ld = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Fd = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Id = /^'([^]*?)'?$/, Bd = /''/g, jd = /[a-zA-Z]/;
function Ot(t, e, n) {
  var r, i, s, o, a, l, u, c, d, f, h, m, p, y, b, v, g, w;
  Z(2, arguments);
  var C = String(e), k = qe(), V = (r = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : k.locale) !== null && r !== void 0 ? r : Rd, T = Ct((s = (o = (a = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (u = n.locale) === null || u === void 0 || (c = u.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && a !== void 0 ? a : k.firstWeekContainsDate) !== null && o !== void 0 ? o : (d = k.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = Ct((h = (m = (p = (y = n == null ? void 0 : n.weekStartsOn) !== null && y !== void 0 ? y : n == null || (b = n.locale) === null || b === void 0 || (v = b.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && p !== void 0 ? p : k.weekStartsOn) !== null && m !== void 0 ? m : (g = k.locale) === null || g === void 0 || (w = g.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(S >= 0 && S <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!V.localize)
    throw new RangeError("locale must contain localize property");
  if (!V.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var j = dt(t);
  if (!Vc(j))
    throw new RangeError("Invalid time value");
  var Q = Dc(j), D = kc(j, Q), G = {
    firstWeekContainsDate: T,
    weekStartsOn: S,
    locale: V,
    _originalDate: j
  }, A = C.match(Fd).map(function(P) {
    var M = P[0];
    if (M === "p" || M === "P") {
      var L = Gc[M];
      return L(P, V.formatLong);
    }
    return P;
  }).join("").match(Ld).map(function(P) {
    if (P === "''")
      return "'";
    var M = P[0];
    if (M === "'")
      return Nd(P);
    var L = Wc[M];
    if (L)
      return !(n != null && n.useAdditionalWeekYearTokens) && qc(P) && di(P, e, String(t)), !(n != null && n.useAdditionalDayOfYearTokens) && Hc(P) && di(P, e, String(t)), L(D, P, V.localize, G);
    if (M.match(jd))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + M + "`");
    return P;
  }).join("");
  return A;
}
function Nd(t) {
  var e = t.match(Id);
  return e ? e[1].replace(Bd, "'") : t;
}
function Ud(t, e) {
  var n;
  Z(1, arguments);
  var r = Ct((n = e == null ? void 0 : e.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof t == "string" || Object.prototype.toString.call(t) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var i = Gd(t), s;
  if (i.date) {
    var o = _d(i.date, r);
    s = Yd(o.restDateString, o.year);
  }
  if (!s || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var a = s.getTime(), l = 0, u;
  if (i.time && (l = Hd(i.time), isNaN(l)))
    return /* @__PURE__ */ new Date(NaN);
  if (i.timezone) {
    if (u = qd(i.timezone), isNaN(u))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var c = new Date(a + l), d = /* @__PURE__ */ new Date(0);
    return d.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()), d.setHours(c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), c.getUTCMilliseconds()), d;
  }
  return new Date(a + l + u);
}
var Te = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Wd = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, $d = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, zd = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Gd(t) {
  var e = {}, n = t.split(Te.dateTimeDelimiter), r;
  if (n.length > 2)
    return e;
  if (/:/.test(n[0]) ? r = n[0] : (e.date = n[0], r = n[1], Te.timeZoneDelimiter.test(e.date) && (e.date = t.split(Te.timeZoneDelimiter)[0], r = t.substr(e.date.length, t.length))), r) {
    var i = Te.timezone.exec(r);
    i ? (e.time = r.replace(i[1], ""), e.timezone = i[1]) : e.time = r;
  }
  return e;
}
function _d(t, e) {
  var n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + e) + "})|(\\d{2}|[+-]\\d{" + (2 + e) + "})$)"), r = t.match(n);
  if (!r)
    return {
      year: NaN,
      restDateString: ""
    };
  var i = r[1] ? parseInt(r[1]) : null, s = r[2] ? parseInt(r[2]) : null;
  return {
    year: s === null ? i : s * 100,
    restDateString: t.slice((r[1] || r[2]).length)
  };
}
function Yd(t, e) {
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t.match(Wd);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], i = Qt(n[1]), s = Qt(n[2]) - 1, o = Qt(n[3]), a = Qt(n[4]), l = Qt(n[5]) - 1;
  if (r)
    return Jd(e, a, l) ? Kd(e, a, l) : /* @__PURE__ */ new Date(NaN);
  var u = /* @__PURE__ */ new Date(0);
  return !Zd(e, s, o) || !Qd(e, i) ? /* @__PURE__ */ new Date(NaN) : (u.setUTCFullYear(e, s, Math.max(i, o)), u);
}
function Qt(t) {
  return t ? parseInt(t) : 1;
}
function Hd(t) {
  var e = t.match($d);
  if (!e)
    return NaN;
  var n = dn(e[1]), r = dn(e[2]), i = dn(e[3]);
  return tf(n, r, i) ? n * Go + r * zo + i * 1e3 : NaN;
}
function dn(t) {
  return t && parseFloat(t.replace(",", ".")) || 0;
}
function qd(t) {
  if (t === "Z")
    return 0;
  var e = t.match(zd);
  if (!e)
    return 0;
  var n = e[1] === "+" ? -1 : 1, r = parseInt(e[2]), i = e[3] && parseInt(e[3]) || 0;
  return ef(r, i) ? n * (r * Go + i * zo) : NaN;
}
function Kd(t, e, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(t, 0, 4);
  var i = r.getUTCDay() || 7, s = (e - 1) * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + s), r;
}
var Xd = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function qo(t) {
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
function Zd(t, e, n) {
  return e >= 0 && e <= 11 && n >= 1 && n <= (Xd[e] || (qo(t) ? 29 : 28));
}
function Qd(t, e) {
  return e >= 1 && e <= (qo(t) ? 366 : 365);
}
function Jd(t, e, n) {
  return e >= 1 && e <= 53 && n >= 0 && n <= 6;
}
function tf(t, e, n) {
  return t === 24 ? e === 0 && n === 0 : n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25;
}
function ef(t, e) {
  return e >= 0 && e <= 59;
}
function nf(t) {
  if (!t)
    return "Please select a time";
  let e;
  if (t instanceof Date)
    e = t;
  else if (typeof t == "string") {
    const n = new Date(t);
    if (isNaN(n.getTime()))
      return "Please select a time";
    e = n;
  } else if (typeof t == "object" && "hour" in t && "minute" in t && "period" in t) {
    const { hour: n, minute: r, period: i } = t;
    if (n == null || r == null || i == null)
      return "Please select a time";
    const s = i === "PM" ? n % 12 + 12 : n % 12;
    e = /* @__PURE__ */ new Date(), e.setHours(s, r, 0, 0);
  } else
    return "Please select a time";
  return Ot(e, "hh:mm a");
}
const rf = (t, e) => {
  It(() => {
    const n = (r) => {
      !t.current || t.current.contains(r.target) || e(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [t, e]);
};
function Ko(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Ko(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function of() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Ko(t)) && (r && (r += " "), r += e);
  return r;
}
function sf() {
  for (var t = 0, e, n, r = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = Xo(e)) && (r && (r += " "), r += n);
  return r;
}
function Xo(t) {
  if (typeof t == "string")
    return t;
  for (var e, n = "", r = 0; r < t.length; r++)
    t[r] && (e = Xo(t[r])) && (n && (n += " "), n += e);
  return n;
}
var Qn = "-";
function af(t) {
  var e = uf(t), n = t.conflictingClassGroups, r = t.conflictingClassGroupModifiers, i = r === void 0 ? {} : r;
  function s(a) {
    var l = a.split(Qn);
    return l[0] === "" && l.length !== 1 && l.shift(), Zo(l, e) || lf(a);
  }
  function o(a, l) {
    var u = n[a] || [];
    return l && i[a] ? [].concat(u, i[a]) : u;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  };
}
function Zo(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var n = t[0], r = e.nextPart.get(n), i = r ? Zo(t.slice(1), r) : void 0;
  if (i)
    return i;
  if (e.validators.length !== 0) {
    var s = t.join(Qn);
    return (o = e.validators.find(function(a) {
      var l = a.validator;
      return l(s);
    })) == null ? void 0 : o.classGroupId;
  }
}
var fi = /^\[(.+)\]$/;
function lf(t) {
  if (fi.test(t)) {
    var e = fi.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function uf(t) {
  var e = t.theme, n = t.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, i = df(Object.entries(t.classGroups), n);
  return i.forEach(function(s) {
    var o = s[0], a = s[1];
    An(a, r, o, e);
  }), r;
}
function An(t, e, n, r) {
  t.forEach(function(i) {
    if (typeof i == "string") {
      var s = i === "" ? e : hi(e, i);
      s.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (cf(i)) {
        An(i(r), e, n, r);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(function(o) {
      var a = o[0], l = o[1];
      An(l, hi(e, a), n, r);
    });
  });
}
function hi(t, e) {
  var n = t;
  return e.split(Qn).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function cf(t) {
  return t.isThemeGetter;
}
function df(t, e) {
  return e ? t.map(function(n) {
    var r = n[0], i = n[1], s = i.map(function(o) {
      return typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(a) {
        var l = a[0], u = a[1];
        return [e + l, u];
      })) : o;
    });
    return [r, s];
  }) : t;
}
function ff(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function i(s, o) {
    n.set(s, o), e++, e > t && (e = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(o) {
      var a = n.get(o);
      if (a !== void 0)
        return a;
      if ((a = r.get(o)) !== void 0)
        return i(o, a), a;
    },
    set: function(o, a) {
      n.has(o) ? n.set(o, a) : i(o, a);
    }
  };
}
var Qo = "!";
function hf(t) {
  var e = t.separator || ":", n = e.length === 1, r = e[0], i = e.length;
  return function(o) {
    for (var a = [], l = 0, u = 0, c, d = 0; d < o.length; d++) {
      var f = o[d];
      if (l === 0) {
        if (f === r && (n || o.slice(d, d + i) === e)) {
          a.push(o.slice(u, d)), u = d + i;
          continue;
        }
        if (f === "/") {
          c = d;
          continue;
        }
      }
      f === "[" ? l++ : f === "]" && l--;
    }
    var h = a.length === 0 ? o : o.substring(u), m = h.startsWith(Qo), p = m ? h.substring(1) : h, y = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: y
    };
  };
}
function mf(t) {
  if (t.length <= 1)
    return t;
  var e = [], n = [];
  return t.forEach(function(r) {
    var i = r[0] === "[";
    i ? (e.push.apply(e, n.sort().concat([r])), n = []) : n.push(r);
  }), e.push.apply(e, n.sort()), e;
}
function pf(t) {
  return {
    cache: ff(t.cacheSize),
    splitModifiers: hf(t),
    ...af(t)
  };
}
var gf = /\s+/;
function vf(t, e) {
  var n = e.splitModifiers, r = e.getClassGroupId, i = e.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return t.trim().split(gf).map(function(o) {
    var a = n(o), l = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, d = a.maybePostfixModifierPosition, f = r(d ? c.substring(0, d) : c), h = !!d;
    if (!f) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (f = r(c), !f)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      h = !1;
    }
    var m = mf(l).join(":"), p = u ? m + Qo : m;
    return {
      isTailwindClass: !0,
      modifierId: p,
      classGroupId: f,
      originalClassName: o,
      hasPostfixModifier: h
    };
  }).reverse().filter(function(o) {
    if (!o.isTailwindClass)
      return !0;
    var a = o.modifierId, l = o.classGroupId, u = o.hasPostfixModifier, c = a + l;
    return s.has(c) ? !1 : (s.add(c), i(l, u).forEach(function(d) {
      return s.add(a + d);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function yf() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r, i, s, o = a;
  function a(u) {
    var c = e[0], d = e.slice(1), f = d.reduce(function(h, m) {
      return m(h);
    }, c());
    return r = pf(f), i = r.cache.get, s = r.cache.set, o = l, l(u);
  }
  function l(u) {
    var c = i(u);
    if (c)
      return c;
    var d = vf(u, r);
    return s(u, d), d;
  }
  return function() {
    return o(sf.apply(null, arguments));
  };
}
function I(t) {
  var e = function(r) {
    return r[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var Jo = /^\[(?:([a-z-]+):)?(.+)\]$/i, bf = /^\d+\/\d+$/, wf = /* @__PURE__ */ new Set(["px", "full", "screen"]), xf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Tf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pf = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function lt(t) {
  return Lt(t) || wf.has(t) || bf.test(t) || Vn(t);
}
function Vn(t) {
  return Nt(t, "length", Vf);
}
function Cf(t) {
  return Nt(t, "size", ts);
}
function Sf(t) {
  return Nt(t, "position", ts);
}
function Mf(t) {
  return Nt(t, "url", kf);
}
function Pe(t) {
  return Nt(t, "number", Lt);
}
function Lt(t) {
  return !Number.isNaN(Number(t));
}
function Df(t) {
  return t.endsWith("%") && Lt(t.slice(0, -1));
}
function Jt(t) {
  return mi(t) || Nt(t, "number", mi);
}
function E(t) {
  return Jo.test(t);
}
function te() {
  return !0;
}
function vt(t) {
  return xf.test(t);
}
function Af(t) {
  return Nt(t, "", Ef);
}
function Nt(t, e, n) {
  var r = Jo.exec(t);
  return r ? r[1] ? r[1] === e : n(r[2]) : !1;
}
function Vf(t) {
  return Tf.test(t);
}
function ts() {
  return !1;
}
function kf(t) {
  return t.startsWith("url(");
}
function mi(t) {
  return Number.isInteger(Number(t));
}
function Ef(t) {
  return Pf.test(t);
}
function Of() {
  var t = I("colors"), e = I("spacing"), n = I("blur"), r = I("brightness"), i = I("borderColor"), s = I("borderRadius"), o = I("borderSpacing"), a = I("borderWidth"), l = I("contrast"), u = I("grayscale"), c = I("hueRotate"), d = I("invert"), f = I("gap"), h = I("gradientColorStops"), m = I("gradientColorStopPositions"), p = I("inset"), y = I("margin"), b = I("opacity"), v = I("padding"), g = I("saturate"), w = I("scale"), C = I("sepia"), k = I("skew"), V = I("space"), T = I("translate"), S = function() {
    return ["auto", "contain", "none"];
  }, j = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Q = function() {
    return ["auto", E, e];
  }, D = function() {
    return [E, e];
  }, G = function() {
    return ["", lt];
  }, A = function() {
    return ["auto", Lt, E];
  }, P = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, M = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, L = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, _ = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, N = function() {
    return ["", "0", E];
  }, $ = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, O = function() {
    return [Lt, Pe];
  }, it = function() {
    return [Lt, E];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [te],
      spacing: [lt],
      blur: ["none", "", vt, E],
      brightness: O(),
      borderColor: [t],
      borderRadius: ["none", "", "full", vt, E],
      borderSpacing: D(),
      borderWidth: G(),
      contrast: O(),
      grayscale: N(),
      hueRotate: it(),
      invert: N(),
      gap: D(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Df, Vn],
      inset: Q(),
      margin: Q(),
      opacity: O(),
      padding: D(),
      saturate: O(),
      scale: O(),
      sepia: N(),
      skew: it(),
      space: D(),
      translate: D()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", E]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [vt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(P(), [E])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Jt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Q()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: N()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: N()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Jt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [te]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Jt]
        }, E]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [te]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Jt]
        }, E]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(_())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(_(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(_(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [V]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [V]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", E, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", E, lt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [vt]
        }, vt, E]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [E, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", E, lt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [E, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", vt, Vn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [te]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Lt, Pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", E, lt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", E]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(M(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", lt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", E, lt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", E]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(P(), [Sf])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Cf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Mf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(M(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: M()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(M())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [E, lt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [lt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: G()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [lt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", vt, Af]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [te]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": L()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", vt, E]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [g]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [g]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: it()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: it()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", E]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Jt, E]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [k]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [k]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", E]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [lt, Pe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var Rf = /* @__PURE__ */ yf(Of);
function ut(...t) {
  return Rf(of(t));
}
const Jn = Ft(null), Yf = ce(function({
  children: e,
  className: n
}) {
  const [r, i] = ue(!1), s = Y(() => i((u) => !u), []), o = et(null);
  rf(o, () => i(!1)), It(() => {
    const u = (c) => {
      c.key === "Escape" && r && i(!1);
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [r]);
  const a = X(() => ({ isOpen: r, toggle: s }), [r, s]);
  return X(
    () => /* @__PURE__ */ B(Jn.Provider, { value: a, children: /* @__PURE__ */ B("div", { className: ut(" relative", n), ref: o, children: e }) }),
    [a, n, o, e]
  );
}), Hf = ce(
  ({ children: t, className: e }) => {
    const n = H(Jn);
    if (!n)
      throw new Error("PopoverTrigger must be used within a Popover");
    const { toggle: r } = n;
    return /* @__PURE__ */ B("div", { onClick: r, className: ut("cursor-pointer", e), children: t });
  }
), qf = ce(
  ({
    children: t,
    className: e,
    isAnimate: n = !0,
    variants: r
  }) => {
    const i = H(Jn);
    if (!i)
      throw new Error("PopoverContent must be used within a Popover");
    const { isOpen: s, toggle: o } = i, a = X(
      () => ({
        initial: { opacity: 0, y: "20%" },
        animate: { opacity: 1, y: "5%" },
        exit: { opacity: 0, y: "-20%" },
        transition: { duration: 0.2 }
      }),
      []
    ), l = X(
      () => n ? r || a : {},
      [n, r, a]
    ), u = X(
      () => /* @__PURE__ */ B($o, { children: s && /* @__PURE__ */ B(
        Uo.div,
        {
          className: ut(" absolute translate-y-2 shadow-sm", e),
          ...l,
          children: vi(t) ? mn(t, { toggle: o }) : t
        }
      ) }),
      [s, e, l, t, o]
    );
    return n ? u : /* @__PURE__ */ B("div", { className: ut("absolute translate-y-2 shadow-sm", e), children: mn(t, { toggle: o }) });
  }
), Kf = ce(({ time: t }) => {
  const e = X(() => /* @__PURE__ */ B(Pc, { className: "w-4 h-4 mr-2" }), []);
  return /* @__PURE__ */ fn("button", { className: "inline-flex items-center justify-start w-[200px] px-3 py-2 text-sm font-medium bg-background border border-input rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground", children: [
    e,
    /* @__PURE__ */ B("span", { children: nf(t) })
  ] });
});
function Xf(t) {
  if (t instanceof Date)
    return {
      hour: parseInt(Ot(t, "hh")),
      // Extract 12-hour format hour
      minute: parseInt(Ot(t, "mm")),
      period: Ot(t, "a")
      // AM/PM
    };
  if (typeof t == "string")
    try {
      const e = Ud(t);
      return {
        hour: parseInt(Ot(e, "hh")),
        minute: parseInt(Ot(e, "mm")),
        period: Ot(e, "a")
      };
    } catch (e) {
      throw console.log(e), new Error("Invalid date string");
    }
  else if (typeof t == "object" && "hour" in t && "minute" in t && "period" in t)
    return t;
  throw new Error("Invalid time input");
}
function Lf(t) {
  return typeof t == "object" && t !== null && "hour" in t && "minute" in t && "period" in t;
}
function Ff(t) {
  const [e, n] = ue(() => {
    if (Lf(t))
      return t;
    if (t instanceof Date)
      return {
        hour: t.getHours() % 12 || 12,
        // Convert to 12-hour format
        minute: t.getMinutes(),
        period: t.getHours() >= 12 ? "PM" : "AM"
        // Determine period (AM/PM)
      };
    if (typeof t == "string") {
      const l = new Date(t);
      return isNaN(l.getTime()) ? { hour: 12, minute: 0, period: "AM" } : {
        hour: l.getHours() % 12 || 12,
        minute: l.getMinutes(),
        period: l.getHours() >= 12 ? "PM" : "AM"
      };
    }
    return { hour: 12, minute: 0, period: "AM" };
  }), r = Y((l) => {
    n((u) => ({ ...u, hour: l % 12 || 12 }));
  }, []), i = Y((l) => {
    n((u) => ({ ...u, minute: l % 60 }));
  }, []), s = Y((l) => {
    n((u) => ({ ...u, period: l }));
  }, []), o = Y(
    (l) => {
      const u = parseInt(l, 10);
      return u >= 1 && u <= 12 ? u : e.hour;
    },
    [e.hour]
  ), a = Y(
    (l) => {
      const u = parseInt(l, 10);
      return u >= 0 && u <= 59 ? u : e.minute;
    },
    [e.minute]
  );
  return { time: e, setHour: r, setMinute: i, setPeriod: s, validateHour: o, validateMinute: a };
}
const If = ce(
  ({
    toggle: t,
    closeIcon: e = Cc,
    // Default to the X icon from lucide-react
    closeButtonClassName: n
  }) => {
    const r = Y(() => t == null ? void 0 : t(), [t]), i = X(() => /* @__PURE__ */ B(e, { size: 16 }), [e]);
    return /* @__PURE__ */ B(
      "button",
      {
        className: ut(
          "absolute p-1 rounded-full top-1 right-1 hover:bg-muted",
          n
        ),
        title: "Close",
        onClick: r,
        children: i
      }
    );
  }
), Bf = ({
  handleDecrement: t,
  buttonClassName: e,
  decrementIcon: n = xc
}) => {
  const r = X(() => /* @__PURE__ */ B(n, { className: "w-4 h-4" }), [n]);
  return /* @__PURE__ */ B(
    "button",
    {
      onClick: t,
      className: ut(
        "p-1 relative z-10 rounded-md hover:bg-muted",
        e
      ),
      children: r
    }
  );
}, jf = ({
  handleIncrement: t,
  buttonClassName: e,
  incrementIcon: n = Tc
}) => {
  const r = X(() => /* @__PURE__ */ B(n, { className: "w-4 h-4" }), [n]);
  return /* @__PURE__ */ B(
    "button",
    {
      onClick: t,
      className: ut(
        "p-1 relative z-10 rounded-md hover:bg-muted",
        e
      ),
      children: r
    }
  );
}, Nf = {
  enter: (t) => ({
    y: t > 0 ? 35 : -35,
    // Bottom-to-top for increases
    opacity: 0
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: (t) => ({
    zIndex: 0,
    y: t > 0 ? -35 : 35,
    // Top-to-bottom for decreases
    opacity: 0
  })
}, Uf = Be(
  ({
    value: t,
    refKey: e,
    min: n,
    max: r,
    setter: i,
    handleKeyDown: s,
    handleChange: o,
    inputClassName: a,
    direction: l
  }, u) => {
    const [c, d] = ue(!1), f = et(t), h = !c && f.current !== t, m = je();
    It(() => {
      f.current = t;
    }, [t]);
    const p = X(
      () => /* @__PURE__ */ B($o, { initial: !1, custom: l, children: /* @__PURE__ */ B(
        Uo.div,
        {
          custom: l,
          variants: Nf,
          initial: h ? "enter" : "center",
          animate: "center",
          exit: h ? "exit" : "center",
          transition: {
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          },
          style: { position: "absolute", width: "100%" },
          children: /* @__PURE__ */ B(
            "input",
            {
              ref: u,
              type: "text",
              value: t.toString().padStart(2, "0"),
              onChange: o,
              onFocus: () => d(!0),
              onBlur: () => d(!1),
              onKeyDown: (y) => s(y, t, n, r, i, e),
              className: ut(
                "w-12 h-12 text-2xl font-semibold text-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-background",
                a
              ),
              "aria-label": `Edit ${e}`
            },
            m
          )
        },
        h ? t : "static"
      ) }),
      [
        l,
        h,
        t,
        u,
        m,
        o,
        a,
        e,
        s,
        n,
        r,
        i
      ]
    );
    return /* @__PURE__ */ B("div", { className: "relative w-12 h-12 ", children: p });
  }
), Wf = Be(({ value: t, periodToggleClassName: e, handlePeriodChange: n }, r) => /* @__PURE__ */ B(
  "button",
  {
    ref: r,
    onClick: n,
    className: ut(
      "w-12 h-12 text-2xl font-semibold text-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-background",
      e
    ),
    children: t
  }
));
function Zf({
  value: t,
  onChange: e,
  toggle: n,
  timepickerClassName: r,
  buttonClassName: i,
  sectionClassName: s,
  inputClassName: o,
  periodToggleClassName: a,
  incrementIcon: l,
  decrementIcon: u,
  closeButtonClassName: c,
  closeIcon: d
}) {
  const { time: f, setHour: h, setMinute: m, setPeriod: p, validateHour: y, validateMinute: b } = Ff(t), [v, g] = ue(0), w = et(null), C = et(null), k = et(null), V = Y(
    (A) => {
      const P = y(A.target.value);
      h(P), e({ ...f, hour: P });
    },
    [y, h, e, f]
  ), T = Y(
    (A) => {
      const P = b(A.target.value);
      m(P), e({ ...f, minute: P });
    },
    [b, m, e, f]
  ), S = Y(() => {
    const A = f.period === "AM" ? "PM" : "AM";
    p(A), e({ ...f, period: A });
  }, [p, e, f]), j = Y(
    (A, P, M, L, _, N) => {
      let $ = P;
      A.key === "ArrowUp" ? $ = P === L ? M : P + 1 : A.key === "ArrowDown" && ($ = P === M ? L : P - 1), _($), e({ ...f, [N]: $ });
    },
    [e, f]
  ), Q = Y(
    (A, P, M, L, _, N) => {
      if (N)
        S();
      else {
        const $ = P === L ? M : P + 1;
        g(1), _($), e({ ...f, [A]: $ });
      }
    },
    [S, g, e, f]
  ), D = Y(
    (A, P, M, L, _, N) => {
      if (N)
        S();
      else {
        const $ = P === M ? L : P - 1;
        g(-1), _($), e({ ...f, [A]: $ });
      }
    },
    [S, g, e, f]
  ), G = Y(
    (A, P, M, L, _, N, $ = !1) => {
      const O = () => Q(N, A, P, M, L, $), it = () => D(N, A, P, M, L, $);
      return /* @__PURE__ */ fn("div", { className: ut("flex flex-col items-center", s), children: [
        /* @__PURE__ */ B(
          jf,
          {
            handleIncrement: O,
            buttonClassName: i,
            incrementIcon: l
          }
        ),
        $ ? /* @__PURE__ */ B(
          Wf,
          {
            value: A,
            periodToggleClassName: a,
            ref: _,
            handlePeriodChange: S
          }
        ) : /* @__PURE__ */ B(
          Uf,
          {
            value: A,
            ref: _,
            refKey: N,
            min: P,
            max: M,
            inputClassName: o,
            setter: L,
            handleKeyDown: j,
            handleChange: N === "hour" ? V : T,
            direction: v
          }
        ),
        /* @__PURE__ */ B(
          Bf,
          {
            handleDecrement: it,
            decrementIcon: u,
            buttonClassName: i
          }
        )
      ] });
    },
    [
      s,
      i,
      l,
      a,
      S,
      o,
      j,
      V,
      T,
      v,
      u,
      Q,
      D
    ]
  );
  return /* @__PURE__ */ fn(
    "div",
    {
      className: ut(
        "inline-flex items-center p-4 space-x-4 border rounded-md shadow-sm bg-background border-input ",
        r
      ),
      children: [
        G(f.hour, 1, 12, h, w, "hour"),
        /* @__PURE__ */ B("div", { className: "text-2xl font-semibold", children: ":" }),
        G(f.minute, 0, 59, m, C, "minute"),
        G(f.period, 0, 1, () => {
        }, k, "period", !0),
        /* @__PURE__ */ B(
          If,
          {
            toggle: n,
            closeButtonClassName: c,
            closeIcon: d
          }
        )
      ]
    }
  );
}
export {
  Yf as Popover,
  Kf as PopoverButton,
  qf as PopoverContent,
  Hf as PopoverTrigger,
  Zf as TimePicker,
  ut as cn,
  nf as formatTime,
  Xf as parseTimeInput,
  rf as useClickOutside,
  Ff as useTimePicker
};
