import { jsx as j, jsxs as ln } from "react/jsx-runtime";
import * as X from "react";
import hi, { createContext as Rt, useLayoutEffect as Jo, useEffect as le, useContext as z, useRef as Z, useInsertionEffect as mi, useCallback as vt, useMemo as $t, forwardRef as pi, createElement as un, useId as Mn, useState as Dn, cloneElement as cn, Children as ts, isValidElement as gi } from "react";
const vi = Rt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), Fe = Rt({}), Ie = Rt(null), Be = typeof document < "u", An = Be ? Jo : le, yi = Rt({ strict: !1 }), Vn = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), es = "framerAppearId", bi = "data-" + Vn(es);
function ns(t, e, n, r) {
  const { visualElement: i } = z(Fe), s = z(yi), o = z(Ie), a = z(vi).reducedMotion, l = Z();
  r = r || s.renderer, !l.current && r && (l.current = r(t, {
    visualState: e,
    parent: i,
    props: n,
    presenceContext: o,
    blockInitialAnimation: o ? o.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const u = l.current;
  mi(() => {
    u && u.update(n, o);
  });
  const c = Z(!!(n[bi] && !window.HandoffComplete));
  return An(() => {
    u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
  }), le(() => {
    u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0));
  }), u;
}
function Nt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function rs(t, e, n) {
  return vt(
    (r) => {
      r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), n && (typeof n == "function" ? n(r) : Nt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function oe(t) {
  return typeof t == "string" || Array.isArray(t);
}
function Ne(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const kn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], En = ["initial", ...kn];
function je(t) {
  return Ne(t.animate) || En.some((e) => oe(t[e]));
}
function wi(t) {
  return !!(je(t) || t.variants);
}
function is(t, e) {
  if (je(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || oe(n) ? n : void 0,
      animate: oe(r) ? r : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function os(t) {
  const { initial: e, animate: n } = is(t, z(Fe));
  return $t(() => ({ initial: e, animate: n }), [er(e), er(n)]);
}
function er(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const nr = {
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
}, se = {};
for (const t in nr)
  se[t] = {
    isEnabled: (e) => nr[t].some((n) => !!e[n])
  };
function ss(t) {
  for (const e in t)
    se[e] = {
      ...se[e],
      ...t[e]
    };
}
const On = Rt({}), xi = Rt({}), as = Symbol.for("motionComponentSymbol");
function ls({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: r, Component: i }) {
  t && ss(t);
  function s(a, l) {
    let u;
    const c = {
      ...z(vi),
      ...a,
      layoutId: us(a)
    }, { isStatic: d } = c, f = os(a), h = r(a, d);
    if (!d && Be) {
      f.visualElement = ns(i, h, c, e);
      const m = z(xi), p = z(yi).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        p,
        t,
        m
      ));
    }
    return X.createElement(
      Fe.Provider,
      { value: f },
      u && f.visualElement ? X.createElement(u, { visualElement: f.visualElement, ...c }) : null,
      n(i, a, rs(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const o = pi(s);
  return o[as] = i, o;
}
function us({ layoutId: t }) {
  const e = z(On).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function cs(t) {
  function e(r, i = {}) {
    return ls(t(r, i));
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
const ds = [
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
function Rn(t) {
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
      !!(ds.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(t))
    )
  );
}
const Ce = {};
function fs(t) {
  Object.assign(Ce, t);
}
const ue = [
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
], Lt = new Set(ue);
function Ti(t, { layout: e, layoutId: n }) {
  return Lt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ce[t] || t === "opacity");
}
const Q = (t) => !!(t && t.getVelocity), hs = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ms = ue.length;
function ps(t, { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 }, r, i) {
  let s = "";
  for (let o = 0; o < ms; o++) {
    const a = ue[o];
    if (t[a] !== void 0) {
      const l = hs[a] || a;
      s += `${l}(${t[a]}) `;
    }
  }
  return e && !t.z && (s += "translateZ(0)"), s = s.trim(), i ? s = i(t, r ? "" : s) : n && r && (s = "none"), s;
}
const Pi = (t) => (e) => typeof e == "string" && e.startsWith(t), Ci = Pi("--"), dn = Pi("var(--"), gs = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, vs = (t, e) => e && typeof t == "number" ? e.transform(t) : t, wt = (t, e, n) => Math.min(Math.max(n, t), e), Ft = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, ee = {
  ...Ft,
  transform: (t) => wt(0, 1, t)
}, pe = {
  ...Ft,
  default: 1
}, ne = (t) => Math.round(t * 1e5) / 1e5, Ue = /(-)?([\d]*\.?[\d])+/g, Si = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, ys = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ce(t) {
  return typeof t == "string";
}
const de = (t) => ({
  test: (e) => ce(e) && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), pt = de("deg"), at = de("%"), x = de("px"), bs = de("vh"), ws = de("vw"), rr = {
  ...at,
  parse: (t) => at.parse(t) / 100,
  transform: (t) => at.transform(t * 100)
}, ir = {
  ...Ft,
  transform: Math.round
}, Mi = {
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
  rotate: pt,
  rotateX: pt,
  rotateY: pt,
  rotateZ: pt,
  scale: pe,
  scaleX: pe,
  scaleY: pe,
  scaleZ: pe,
  skew: pt,
  skewX: pt,
  skewY: pt,
  distance: x,
  translateX: x,
  translateY: x,
  translateZ: x,
  x,
  y: x,
  z: x,
  perspective: x,
  transformPerspective: x,
  opacity: ee,
  originX: rr,
  originY: rr,
  originZ: x,
  // Misc
  zIndex: ir,
  // SVG
  fillOpacity: ee,
  strokeOpacity: ee,
  numOctaves: ir
};
function Ln(t, e, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: a } = t;
  let l = !1, u = !1, c = !0;
  for (const d in e) {
    const f = e[d];
    if (Ci(d)) {
      s[d] = f;
      continue;
    }
    const h = Mi[d], m = vs(f, h);
    if (Lt.has(d)) {
      if (l = !0, o[d] = m, !c)
        continue;
      f !== (h.default || 0) && (c = !1);
    } else
      d.startsWith("origin") ? (u = !0, a[d] = m) : i[d] = m;
  }
  if (e.transform || (l || r ? i.transform = ps(t.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = a;
    i.transformOrigin = `${d} ${f} ${h}`;
  }
}
const Fn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Di(t, e, n) {
  for (const r in e)
    !Q(e[r]) && !Ti(r, n) && (t[r] = e[r]);
}
function xs({ transformTemplate: t }, e, n) {
  return $t(() => {
    const r = Fn();
    return Ln(r, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, r.vars, r.style);
  }, [e]);
}
function Ts(t, e, n) {
  const r = t.style || {}, i = {};
  return Di(i, r, t), Object.assign(i, xs(t, e, n)), t.transformValues ? t.transformValues(i) : i;
}
function Ps(t, e, n) {
  const r = {}, i = Ts(t, e, n);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r;
}
const Cs = /* @__PURE__ */ new Set([
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
function Se(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Cs.has(t);
}
let Ai = (t) => !Se(t);
function Ss(t) {
  t && (Ai = (e) => e.startsWith("on") ? !Se(e) : t(e));
}
try {
  Ss(require("@emotion/is-prop-valid").default);
} catch {
}
function Ms(t, e, n) {
  const r = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (Ai(i) || n === !0 && Se(i) || !e && !Se(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
  return r;
}
function or(t, e, n) {
  return typeof t == "string" ? t : x.transform(e + n * t);
}
function Ds(t, e, n) {
  const r = or(e, t.x, t.width), i = or(n, t.y, t.height);
  return `${r} ${i}`;
}
const As = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Vs = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ks(t, e, n = 1, r = 0, i = !0) {
  t.pathLength = 1;
  const s = i ? As : Vs;
  t[s.offset] = x.transform(-r);
  const o = x.transform(e), a = x.transform(n);
  t[s.array] = `${o} ${a}`;
}
function In(t, {
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
  if (Ln(t, u, c, f), d) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: m, dimensions: p } = t;
  h.transform && (p && (m.transform = h.transform), delete h.transform), p && (i !== void 0 || s !== void 0 || m.transform) && (m.transformOrigin = Ds(p, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), o !== void 0 && ks(h, o, a, l, !1);
}
const Vi = () => ({
  ...Fn(),
  attrs: {}
}), Bn = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Es(t, e, n, r) {
  const i = $t(() => {
    const s = Vi();
    return In(s, e, { enableHardwareAcceleration: !1 }, Bn(r), t.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [e]);
  if (t.style) {
    const s = {};
    Di(s, t.style, t), i.style = { ...s, ...i.style };
  }
  return i;
}
function Os(t = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (Rn(n) ? Es : Ps)(r, s, o, n), c = {
      ...Ms(r, typeof n == "string", t),
      ...l,
      ref: i
    }, { children: d } = r, f = $t(() => Q(d) ? d.get() : d, [d]);
    return un(n, {
      ...c,
      children: f
    });
  };
}
function ki(t, { style: e, vars: n }, r, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(r));
  for (const s in n)
    t.style.setProperty(s, n[s]);
}
const Ei = /* @__PURE__ */ new Set([
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
function Oi(t, e, n, r) {
  ki(t, e, void 0, r);
  for (const i in e.attrs)
    t.setAttribute(Ei.has(i) ? i : Vn(i), e.attrs[i]);
}
function Nn(t, e) {
  const { style: n } = t, r = {};
  for (const i in n)
    (Q(n[i]) || e.style && Q(e.style[i]) || Ti(i, t)) && (r[i] = n[i]);
  return r;
}
function Ri(t, e) {
  const n = Nn(t, e);
  for (const r in t)
    if (Q(t[r]) || Q(e[r])) {
      const i = ue.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
      n[i] = t[r];
    }
  return n;
}
function jn(t, e, n, r = {}, i = {}) {
  return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, i)), e;
}
function Li(t) {
  const e = Z(null);
  return e.current === null && (e.current = t()), e.current;
}
const Me = (t) => Array.isArray(t), Rs = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Ls = (t) => Me(t) ? t[t.length - 1] || 0 : t;
function Te(t) {
  const e = Q(t) ? t.get() : t;
  return Rs(e) ? e.toValue() : e;
}
function Fs({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, r, i, s) {
  const o = {
    latestValues: Is(r, i, s, t),
    renderState: e()
  };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const Fi = (t) => (e, n) => {
  const r = z(Fe), i = z(Ie), s = () => Fs(t, e, r, i);
  return n ? s() : Li(s);
};
function Is(t, e, n, r) {
  const i = {}, s = r(t, {});
  for (const f in s)
    i[f] = Te(s[f]);
  let { initial: o, animate: a } = t;
  const l = je(t), u = wi(t);
  e && u && !l && t.inherit !== !1 && (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  return d && typeof d != "boolean" && !Ne(d) && (Array.isArray(d) ? d : [d]).forEach((h) => {
    const m = jn(t, h);
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
const U = (t) => t;
class sr {
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
function Bs(t) {
  let e = new sr(), n = new sr(), r = 0, i = !1, s = !1;
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
const ge = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Ns = 40;
function js(t, e) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = ge.reduce((d, f) => (d[f] = Bs(() => n = !0), d), {}), o = (d) => s[d].process(i), a = () => {
    const d = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, Ns), 1), i.timestamp = d, i.isProcessing = !0, ge.forEach(o), i.isProcessing = !1, n && e && (r = !1, t(a));
  }, l = () => {
    n = !0, r = !0, i.isProcessing || t(a);
  };
  return { schedule: ge.reduce((d, f) => {
    const h = s[f];
    return d[f] = (m, p = !1, y = !1) => (n || l(), h.schedule(m, p, y)), d;
  }, {}), cancel: (d) => ge.forEach((f) => s[f].cancel(d)), state: i, steps: s };
}
const { schedule: I, cancel: ft, state: H, steps: Ye } = js(typeof requestAnimationFrame < "u" ? requestAnimationFrame : U, !0), Us = {
  useVisualState: Fi({
    scrapeMotionValuesFromProps: Ri,
    createRenderState: Vi,
    onMount: (t, e, { renderState: n, latestValues: r }) => {
      I.read(() => {
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
      }), I.render(() => {
        In(n, r, { enableHardwareAcceleration: !1 }, Bn(e.tagName), t.transformTemplate), Oi(e, n);
      });
    }
  })
}, Ws = {
  useVisualState: Fi({
    scrapeMotionValuesFromProps: Nn,
    createRenderState: Fn
  })
};
function $s(t, { forwardMotionProps: e = !1 }, n, r) {
  return {
    ...Rn(t) ? Us : Ws,
    preloadedFeatures: n,
    useRender: Os(e),
    createVisualElement: r,
    Component: t
  };
}
function ut(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
const Ii = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function We(t, e = "page") {
  return {
    point: {
      x: t[e + "X"],
      y: t[e + "Y"]
    }
  };
}
const Gs = (t) => (e) => Ii(e) && t(e, We(e));
function ct(t, e, n, r) {
  return ut(t, e, Gs(n), r);
}
const _s = (t, e) => (n) => e(t(n)), yt = (...t) => t.reduce(_s);
function Bi(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : !1;
  };
}
const ar = Bi("dragHorizontal"), lr = Bi("dragVertical");
function Ni(t) {
  let e = !1;
  if (t === "y")
    e = lr();
  else if (t === "x")
    e = ar();
  else {
    const n = ar(), r = lr();
    n && r ? e = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return e;
}
function ji() {
  const t = Ni(!0);
  return t ? (t(), !1) : !0;
}
class Pt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function ur(t, e) {
  const n = "pointer" + (e ? "enter" : "leave"), r = "onHover" + (e ? "Start" : "End"), i = (s, o) => {
    if (s.pointerType === "touch" || ji())
      return;
    const a = t.getProps();
    t.animationState && a.whileHover && t.animationState.setActive("whileHover", e), a[r] && I.update(() => a[r](s, o));
  };
  return ct(t.current, n, i, {
    passive: !t.getProps()[r]
  });
}
class zs extends Pt {
  mount() {
    this.unmount = yt(ur(this.node, !0), ur(this.node, !1));
  }
  unmount() {
  }
}
class Ys extends Pt {
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
    this.unmount = yt(ut(this.node.current, "focus", () => this.onFocus()), ut(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Ui = (t, e) => e ? t === e ? !0 : Ui(t, e.parentElement) : !1;
function He(t, e) {
  if (!e)
    return;
  const n = new PointerEvent("pointer" + t);
  e(n, We(n));
}
class Hs extends Pt {
  constructor() {
    super(...arguments), this.removeStartListeners = U, this.removeEndListeners = U, this.removeAccessibleListeners = U, this.startPointerPress = (e, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), s = ct(window, "pointerup", (a, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: c, globalTapTarget: d } = this.node.getProps();
        I.update(() => {
          !d && !Ui(this.node.current, a.target) ? c && c(a, l) : u && u(a, l);
        });
      }, { passive: !(r.onTap || r.onPointerUp) }), o = ct(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = yt(s, o), this.startPress(e, n);
    }, this.startAccessiblePress = () => {
      const e = (s) => {
        if (s.key !== "Enter" || this.isPressing)
          return;
        const o = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || He("up", (l, u) => {
            const { onTap: c } = this.node.getProps();
            c && I.update(() => c(l, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = ut(this.node.current, "keyup", o), He("down", (a, l) => {
          this.startPress(a, l);
        });
      }, n = ut(this.node.current, "keydown", e), r = () => {
        this.isPressing && He("cancel", (s, o) => this.cancelPress(s, o));
      }, i = ut(this.node.current, "blur", r);
      this.removeAccessibleListeners = yt(n, i);
    };
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && I.update(() => r(e, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !ji();
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && I.update(() => r(e, n));
  }
  mount() {
    const e = this.node.getProps(), n = ct(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }), r = ut(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = yt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const fn = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), qs = (t) => {
  const e = fn.get(t.target);
  e && e(t);
}, Ks = (t) => {
  t.forEach(qs);
};
function Xs({ root: t, ...e }) {
  const n = t || document;
  qe.has(n) || qe.set(n, {});
  const r = qe.get(n), i = JSON.stringify(e);
  return r[i] || (r[i] = new IntersectionObserver(Ks, { root: t, ...e })), r[i];
}
function Zs(t, e, n) {
  const r = Xs(e);
  return fn.set(t, n), r.observe(t), () => {
    fn.delete(t), r.unobserve(t);
  };
}
const Qs = {
  some: 0,
  all: 1
};
class Js extends Pt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = e, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Qs[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return Zs(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(ta(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function ta({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const ea = {
  inView: {
    Feature: Js
  },
  tap: {
    Feature: Hs
  },
  focus: {
    Feature: Ys
  },
  hover: {
    Feature: zs
  }
};
function Wi(t, e) {
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
function na(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.get()), e;
}
function ra(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.getVelocity()), e;
}
function $e(t, e, n) {
  const r = t.getProps();
  return jn(r, e, n !== void 0 ? n : r.custom, na(t), ra(t));
}
let fe = U, nt = U;
process.env.NODE_ENV !== "production" && (fe = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, nt = (t, e) => {
  if (!t)
    throw new Error(e);
});
const bt = (t) => t * 1e3, dt = (t) => t / 1e3, ia = {
  current: !1
}, $i = (t) => Array.isArray(t) && typeof t[0] == "number";
function Gi(t) {
  return !!(!t || typeof t == "string" && _i[t] || $i(t) || Array.isArray(t) && t.every(Gi));
}
const te = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`, _i = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: te([0, 0.65, 0.55, 1]),
  circOut: te([0.55, 0, 1, 0.45]),
  backIn: te([0.31, 0.01, 0.66, -0.59]),
  backOut: te([0.33, 1.53, 0.69, 0.99])
};
function zi(t) {
  if (t)
    return $i(t) ? te(t) : Array.isArray(t) ? t.map(zi) : _i[t];
}
function oa(t, e, n, { delay: r = 0, duration: i, repeat: s = 0, repeatType: o = "loop", ease: a, times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = zi(a);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: r,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
function sa(t, { repeat: e, repeatType: n = "loop" }) {
  const r = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[r];
}
const Yi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, aa = 1e-7, la = 12;
function ua(t, e, n, r, i) {
  let s, o, a = 0;
  do
    o = e + (n - e) / 2, s = Yi(o, r, i) - t, s > 0 ? n = o : e = o;
  while (Math.abs(s) > aa && ++a < la);
  return o;
}
function he(t, e, n, r) {
  if (t === e && n === r)
    return U;
  const i = (s) => ua(s, 0, 1, t, n);
  return (s) => s === 0 || s === 1 ? s : Yi(i(s), e, r);
}
const ca = he(0.42, 0, 1, 1), da = he(0, 0, 0.58, 1), Hi = he(0.42, 0, 0.58, 1), fa = (t) => Array.isArray(t) && typeof t[0] != "number", qi = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Ki = (t) => (e) => 1 - t(1 - e), Un = (t) => 1 - Math.sin(Math.acos(t)), Xi = Ki(Un), ha = qi(Un), Zi = he(0.33, 1.53, 0.69, 0.99), Wn = Ki(Zi), ma = qi(Wn), pa = (t) => (t *= 2) < 1 ? 0.5 * Wn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), cr = {
  linear: U,
  easeIn: ca,
  easeInOut: Hi,
  easeOut: da,
  circIn: Un,
  circInOut: ha,
  circOut: Xi,
  backIn: Wn,
  backInOut: ma,
  backOut: Zi,
  anticipate: pa
}, dr = (t) => {
  if (Array.isArray(t)) {
    nt(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, r, i] = t;
    return he(e, n, r, i);
  } else if (typeof t == "string")
    return nt(cr[t] !== void 0, `Invalid easing type '${t}'`), cr[t];
  return t;
}, $n = (t, e) => (n) => !!(ce(n) && ys.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)), Qi = (t, e, n) => (r) => {
  if (!ce(r))
    return r;
  const [i, s, o, a] = r.match(Ue);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, ga = (t) => wt(0, 255, t), Ke = {
  ...Ft,
  transform: (t) => Math.round(ga(t))
}, Et = {
  test: $n("rgb", "red"),
  parse: Qi("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) => "rgba(" + Ke.transform(t) + ", " + Ke.transform(e) + ", " + Ke.transform(n) + ", " + ne(ee.transform(r)) + ")"
};
function va(t) {
  let e = "", n = "", r = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, r += r, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const hn = {
  test: $n("#"),
  parse: va,
  transform: Et.transform
}, jt = {
  test: $n("hsl", "hue"),
  parse: Qi("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(t) + ", " + at.transform(ne(e)) + ", " + at.transform(ne(n)) + ", " + ne(ee.transform(r)) + ")"
}, K = {
  test: (t) => Et.test(t) || hn.test(t) || jt.test(t),
  parse: (t) => Et.test(t) ? Et.parse(t) : jt.test(t) ? jt.parse(t) : hn.parse(t),
  transform: (t) => ce(t) ? t : t.hasOwnProperty("red") ? Et.transform(t) : jt.transform(t)
}, N = (t, e, n) => -n * t + n * e + t;
function Xe(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function ya({ hue: t, saturation: e, lightness: n, alpha: r }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!e)
    i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = Xe(l, a, t + 1 / 3), s = Xe(l, a, t), o = Xe(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
const Ze = (t, e, n) => {
  const r = t * t;
  return Math.sqrt(Math.max(0, n * (e * e - r) + r));
}, ba = [hn, Et, jt], wa = (t) => ba.find((e) => e.test(t));
function fr(t) {
  const e = wa(t);
  nt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
  let n = e.parse(t);
  return e === jt && (n = ya(n)), n;
}
const Ji = (t, e) => {
  const n = fr(t), r = fr(e), i = { ...n };
  return (s) => (i.red = Ze(n.red, r.red, s), i.green = Ze(n.green, r.green, s), i.blue = Ze(n.blue, r.blue, s), i.alpha = N(n.alpha, r.alpha, s), Et.transform(i));
};
function xa(t) {
  var e, n;
  return isNaN(t) && ce(t) && (((e = t.match(Ue)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Si)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const to = {
  regex: gs,
  countKey: "Vars",
  token: "${v}",
  parse: U
}, eo = {
  regex: Si,
  countKey: "Colors",
  token: "${c}",
  parse: K.parse
}, no = {
  regex: Ue,
  countKey: "Numbers",
  token: "${n}",
  parse: Ft.parse
};
function Qe(t, { regex: e, countKey: n, token: r, parse: i }) {
  const s = t.tokenised.match(e);
  s && (t["num" + n] = s.length, t.tokenised = t.tokenised.replace(e, r), t.values.push(...s.map(i)));
}
function De(t) {
  const e = t.toString(), n = {
    value: e,
    tokenised: e,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return n.value.includes("var(--") && Qe(n, to), Qe(n, eo), Qe(n, no), n;
}
function ro(t) {
  return De(t).values;
}
function io(t) {
  const { values: e, numColors: n, numVars: r, tokenised: i } = De(t), s = e.length;
  return (o) => {
    let a = i;
    for (let l = 0; l < s; l++)
      l < r ? a = a.replace(to.token, o[l]) : l < r + n ? a = a.replace(eo.token, K.transform(o[l])) : a = a.replace(no.token, ne(o[l]));
    return a;
  };
}
const Ta = (t) => typeof t == "number" ? 0 : t;
function Pa(t) {
  const e = ro(t);
  return io(t)(e.map(Ta));
}
const xt = {
  test: xa,
  parse: ro,
  createTransformer: io,
  getAnimatableNone: Pa
}, oo = (t, e) => (n) => `${n > 0 ? e : t}`;
function so(t, e) {
  return typeof t == "number" ? (n) => N(t, e, n) : K.test(t) ? Ji(t, e) : t.startsWith("var(") ? oo(t, e) : lo(t, e);
}
const ao = (t, e) => {
  const n = [...t], r = n.length, i = t.map((s, o) => so(s, e[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}, Ca = (t, e) => {
  const n = { ...t, ...e }, r = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (r[i] = so(t[i], e[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}, lo = (t, e) => {
  const n = xt.createTransformer(e), r = De(t), i = De(e);
  return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? yt(ao(r.values, i.values), n) : (fe(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), oo(t, e));
}, ae = (t, e, n) => {
  const r = e - t;
  return r === 0 ? 1 : (n - t) / r;
}, hr = (t, e) => (n) => N(t, e, n);
function Sa(t) {
  return typeof t == "number" ? hr : typeof t == "string" ? K.test(t) ? Ji : lo : Array.isArray(t) ? ao : typeof t == "object" ? Ca : hr;
}
function Ma(t, e, n) {
  const r = [], i = n || Sa(t[0]), s = t.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(t[o], t[o + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[o] || U : e;
      a = yt(l, a);
    }
    r.push(a);
  }
  return r;
}
function uo(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = t.length;
  if (nt(s === e.length, "Both input and output ranges must be the same length"), s === 1)
    return () => e[0];
  t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const o = Ma(e, r, i), a = o.length, l = (u) => {
    let c = 0;
    if (a > 1)
      for (; c < t.length - 2 && !(u < t[c + 1]); c++)
        ;
    const d = ae(t[c], t[c + 1], u);
    return o[c](d);
  };
  return n ? (u) => l(wt(t[0], t[s - 1], u)) : l;
}
function Da(t, e) {
  const n = t[t.length - 1];
  for (let r = 1; r <= e; r++) {
    const i = ae(0, e, r);
    t.push(N(n, 1, i));
  }
}
function Aa(t) {
  const e = [0];
  return Da(e, t.length - 1), e;
}
function Va(t, e) {
  return t.map((n) => n * e);
}
function ka(t, e) {
  return t.map(() => e || Hi).splice(0, t.length - 1);
}
function Ae({ duration: t = 300, keyframes: e, times: n, ease: r = "easeInOut" }) {
  const i = fa(r) ? r.map(dr) : dr(r), s = {
    done: !1,
    value: e[0]
  }, o = Va(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Aa(e),
    t
  ), a = uo(o, e, {
    ease: Array.isArray(i) ? i : ka(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (s.value = a(l), s.done = l >= t, s)
  };
}
function co(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Ea = 5;
function fo(t, e, n) {
  const r = Math.max(e - Ea, 0);
  return co(n - t(r), e - r);
}
const Je = 1e-3, Oa = 0.01, mr = 10, Ra = 0.05, La = 1;
function Fa({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, s;
  fe(t <= bt(mr), "Spring duration must be 10 seconds or less");
  let o = 1 - e;
  o = wt(Ra, La, o), t = wt(Oa, mr, dt(t)), o < 1 ? (i = (u) => {
    const c = u * o, d = c * t, f = c - n, h = mn(u, o), m = Math.exp(-d);
    return Je - f / h * m;
  }, s = (u) => {
    const d = u * o * t, f = d * n + n, h = Math.pow(o, 2) * Math.pow(u, 2) * t, m = Math.exp(-d), p = mn(Math.pow(u, 2), o);
    return (-i(u) + Je > 0 ? -1 : 1) * ((f - h) * m) / p;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), d = (u - n) * t + 1;
    return -Je + c * d;
  }, s = (u) => {
    const c = Math.exp(-u * t), d = (n - u) * (t * t);
    return c * d;
  });
  const a = 5 / t, l = Ba(i, s, a);
  if (t = bt(t), isNaN(l))
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
const Ia = 12;
function Ba(t, e, n) {
  let r = n;
  for (let i = 1; i < Ia; i++)
    r = r - t(r) / e(r);
  return r;
}
function mn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Na = ["duration", "bounce"], ja = ["stiffness", "damping", "mass"];
function pr(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ua(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!pr(t, ja) && pr(t, Na)) {
    const n = Fa(t);
    e = {
      ...e,
      ...n,
      mass: 1
    }, e.isResolvedFromDuration = !0;
  }
  return e;
}
function ho({ keyframes: t, restDelta: e, restSpeed: n, ...r }) {
  const i = t[0], s = t[t.length - 1], o = { done: !1, value: i }, { stiffness: a, damping: l, mass: u, duration: c, velocity: d, isResolvedFromDuration: f } = Ua({
    ...r,
    velocity: -dt(r.velocity || 0)
  }), h = d || 0, m = l / (2 * Math.sqrt(a * u)), p = s - i, y = dt(Math.sqrt(a / u)), b = Math.abs(p) < 5;
  n || (n = b ? 0.01 : 2), e || (e = b ? 5e-3 : 0.5);
  let v;
  if (m < 1) {
    const g = mn(y, m);
    v = (w) => {
      const C = Math.exp(-m * y * w);
      return s - C * ((h + m * y * p) / g * Math.sin(g * w) + p * Math.cos(g * w));
    };
  } else if (m === 1)
    v = (g) => s - Math.exp(-y * g) * (p + (h + y * p) * g);
  else {
    const g = y * Math.sqrt(m * m - 1);
    v = (w) => {
      const C = Math.exp(-m * y * w), V = Math.min(g * w, 300);
      return s - C * ((h + m * y * p) * Math.sinh(V) + g * p * Math.cosh(V)) / g;
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
        g !== 0 && (m < 1 ? C = fo(v, g, w) : C = 0);
        const V = Math.abs(C) <= n, A = Math.abs(s - w) <= e;
        o.done = V && A;
      }
      return o.value = o.done ? s : w, o;
    }
  };
}
function gr({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = t[0], f = {
    done: !1,
    value: d
  }, h = (T) => a !== void 0 && T < a || l !== void 0 && T > l, m = (T) => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
  let p = n * e;
  const y = d + p, b = o === void 0 ? y : o(y);
  b !== y && (p = b - d);
  const v = (T) => -p * Math.exp(-T / r), g = (T) => b + v(T), w = (T) => {
    const D = v(T), S = g(T);
    f.done = Math.abs(D) <= u, f.value = f.done ? b : S;
  };
  let C, V;
  const A = (T) => {
    h(f.value) && (C = T, V = ho({
      keyframes: [f.value, m(f.value)],
      velocity: fo(g, T, f.value),
      damping: i,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (T) => {
      let D = !1;
      return !V && C === void 0 && (D = !0, w(T), A(T)), C !== void 0 && T > C ? V.next(T - C) : (!D && w(T), f);
    }
  };
}
const Wa = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => I.update(e, !0),
    stop: () => ft(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => H.isProcessing ? H.timestamp : performance.now()
  };
}, vr = 2e4;
function yr(t) {
  let e = 0;
  const n = 50;
  let r = t.next(e);
  for (; !r.done && e < vr; )
    e += n, r = t.next(e);
  return e >= vr ? 1 / 0 : e;
}
const $a = {
  decay: gr,
  inertia: gr,
  tween: Ae,
  keyframes: Ae,
  spring: ho
};
function Ve({ autoplay: t = !0, delay: e = 0, driver: n = Wa, keyframes: r, type: i = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: a = "loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f }) {
  let h = 1, m = !1, p, y;
  const b = () => {
    y = new Promise((O) => {
      p = O;
    });
  };
  b();
  let v;
  const g = $a[i] || Ae;
  let w;
  g !== Ae && typeof r[0] != "number" && (process.env.NODE_ENV !== "production" && nt(r.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${r}`), w = uo([0, 100], r, {
    clamp: !1
  }), r = [0, 100]);
  const C = g({ ...f, keyframes: r });
  let V;
  a === "mirror" && (V = g({
    ...f,
    keyframes: [...r].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let A = "idle", T = null, D = null, S = null;
  C.calculatedDuration === null && s && (C.calculatedDuration = yr(C));
  const { calculatedDuration: L } = C;
  let P = 1 / 0, W = 1 / 0;
  L !== null && (P = L + o, W = P * (s + 1) - o);
  let F = 0;
  const E = (O) => {
    if (D === null)
      return;
    h > 0 && (D = Math.min(D, O)), h < 0 && (D = Math.min(O - W / h, D)), T !== null ? F = T : F = Math.round(O - D) * h;
    const st = F - e * (h >= 0 ? 1 : -1), Y = h >= 0 ? st < 0 : st > W;
    F = Math.max(st, 0), A === "finished" && T === null && (F = W);
    let Qn = F, Jn = C;
    if (s) {
      const ze = Math.min(F, W) / P;
      let me = Math.floor(ze), Ct = ze % 1;
      !Ct && ze >= 1 && (Ct = 1), Ct === 1 && me--, me = Math.min(me, s + 1), !!(me % 2) && (a === "reverse" ? (Ct = 1 - Ct, o && (Ct -= o / P)) : a === "mirror" && (Jn = V)), Qn = wt(0, 1, Ct) * P;
    }
    const Yt = Y ? { done: !1, value: r[0] } : Jn.next(Qn);
    w && (Yt.value = w(Yt.value));
    let { done: tr } = Yt;
    !Y && L !== null && (tr = h >= 0 ? F >= W : F <= 0);
    const Qo = T === null && (A === "finished" || A === "running" && tr);
    return d && d(Yt.value), Qo && rt(), Yt;
  }, M = () => {
    v && v.stop(), v = void 0;
  }, G = () => {
    A = "idle", M(), p(), b(), D = S = null;
  }, rt = () => {
    A = "finished", c && c(), M(), p();
  }, _ = () => {
    if (m)
      return;
    v || (v = n(E));
    const O = v.now();
    l && l(), T !== null ? D = O - T : (!D || A === "finished") && (D = O), A === "finished" && b(), S = D, T = null, A = "running", v.start();
  };
  t && _();
  const zt = {
    then(O, st) {
      return y.then(O, st);
    },
    get time() {
      return dt(F);
    },
    set time(O) {
      O = bt(O), F = O, T !== null || !v || h === 0 ? T = O : D = v.now() - O / h;
    },
    get duration() {
      const O = C.calculatedDuration === null ? yr(C) : C.calculatedDuration;
      return dt(O);
    },
    get speed() {
      return h;
    },
    set speed(O) {
      O === h || !v || (h = O, zt.time = dt(F));
    },
    get state() {
      return A;
    },
    play: _,
    pause: () => {
      A = "paused", T = F;
    },
    stop: () => {
      m = !0, A !== "idle" && (A = "idle", u && u(), G());
    },
    cancel: () => {
      S !== null && E(S), G();
    },
    complete: () => {
      A = "finished";
    },
    sample: (O) => (D = 0, E(O))
  };
  return zt;
}
function Ga(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const _a = Ga(() => Object.hasOwnProperty.call(Element.prototype, "animate")), za = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), ve = 10, Ya = 2e4, Ha = (t, e) => e.type === "spring" || t === "backgroundColor" || !Gi(e.ease);
function qa(t, e, { onUpdate: n, onComplete: r, ...i }) {
  if (!(_a() && za.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
    return !1;
  let o = !1, a, l, u = !1;
  const c = () => {
    l = new Promise((g) => {
      a = g;
    });
  };
  c();
  let { keyframes: d, duration: f = 300, ease: h, times: m } = i;
  if (Ha(e, i)) {
    const g = Ve({
      ...i,
      repeat: 0,
      delay: 0
    });
    let w = { done: !1, value: d[0] };
    const C = [];
    let V = 0;
    for (; !w.done && V < Ya; )
      w = g.sample(V), C.push(w.value), V += ve;
    m = void 0, d = C, f = V - ve, h = "linear";
  }
  const p = oa(t.owner.current, e, d, {
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
    u = !0, I.update(y), a(), c();
  };
  return p.onfinish = () => {
    u || (t.set(sa(d, i)), r && r(), b());
  }, {
    then(g, w) {
      return l.then(g, w);
    },
    attachTimeline(g) {
      return p.timeline = g, p.onfinish = null, U;
    },
    get time() {
      return dt(p.currentTime || 0);
    },
    set time(g) {
      p.currentTime = bt(g);
    },
    get speed() {
      return p.playbackRate;
    },
    set speed(g) {
      p.playbackRate = g;
    },
    get duration() {
      return dt(f);
    },
    play: () => {
      o || (p.play(), ft(y));
    },
    pause: () => p.pause(),
    stop: () => {
      if (o = !0, p.playState === "idle")
        return;
      const { currentTime: g } = p;
      if (g) {
        const w = Ve({
          ...i,
          autoplay: !1
        });
        t.setWithVelocity(w.sample(g - ve).value, w.sample(g).value, ve);
      }
      b();
    },
    complete: () => {
      u || p.finish();
    },
    cancel: b
  };
}
function Ka({ keyframes: t, delay: e, onUpdate: n, onComplete: r }) {
  const i = () => (n && n(t[t.length - 1]), r && r(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: U,
    pause: U,
    stop: U,
    then: (s) => (s(), Promise.resolve()),
    cancel: U,
    complete: U
  });
  return e ? Ve({
    keyframes: [0, 1],
    duration: 0,
    delay: e,
    onComplete: i
  }) : i();
}
const Xa = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Za = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Qa = {
  type: "keyframes",
  duration: 0.8
}, Ja = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, tl = (t, { keyframes: e }) => e.length > 2 ? Qa : Lt.has(t) ? t.startsWith("scale") ? Za(e[1]) : Xa : Ja, pn = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(xt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url(")), el = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function nl(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [r] = n.match(Ue) || [];
  if (!r)
    return t;
  const i = n.replace(r, "");
  let s = el.has(e) ? 1 : 0;
  return r !== n && (s *= 100), e + "(" + s + i + ")";
}
const rl = /([a-z-]*)\(.*?\)/g, gn = {
  ...xt,
  getAnimatableNone: (t) => {
    const e = t.match(rl);
    return e ? e.map(nl).join(" ") : t;
  }
}, il = {
  ...Mi,
  // Color props
  color: K,
  backgroundColor: K,
  outlineColor: K,
  fill: K,
  stroke: K,
  // Border props
  borderColor: K,
  borderTopColor: K,
  borderRightColor: K,
  borderBottomColor: K,
  borderLeftColor: K,
  filter: gn,
  WebkitFilter: gn
}, Gn = (t) => il[t];
function mo(t, e) {
  let n = Gn(t);
  return n !== gn && (n = xt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const po = (t) => /^0[^.\s]+$/.test(t);
function ol(t) {
  if (typeof t == "number")
    return t === 0;
  if (t !== null)
    return t === "none" || t === "0" || po(t);
}
function sl(t, e, n, r) {
  const i = pn(e, n);
  let s;
  Array.isArray(n) ? s = [...n] : s = [null, n];
  const o = r.from !== void 0 ? r.from : t.get();
  let a;
  const l = [];
  for (let u = 0; u < s.length; u++)
    s[u] === null && (s[u] = u === 0 ? o : s[u - 1]), ol(s[u]) && l.push(u), typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (a = s[u]);
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      s[c] = mo(e, a);
    }
  return s;
}
function al({ when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function _n(t, e) {
  return t[e] || t.default || t;
}
const ll = {
  skipAnimations: !1
}, zn = (t, e, n, r = {}) => (i) => {
  const s = _n(r, t) || {}, o = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - bt(o);
  const l = sl(e, t, n, s), u = l[0], c = l[l.length - 1], d = pn(t, u), f = pn(t, c);
  fe(d === f, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
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
  if (al(s) || (h = {
    ...h,
    ...tl(t, h)
  }), h.duration && (h.duration = bt(h.duration)), h.repeatDelay && (h.repeatDelay = bt(h.repeatDelay)), !d || !f || ia.current || s.type === !1 || ll.skipAnimations)
    return Ka(h);
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
    const m = qa(e, t, h);
    if (m)
      return m;
  }
  return Ve(h);
};
function ke(t) {
  return !!(Q(t) && t.add);
}
const go = (t) => /^\-?\d*\.?\d+$/.test(t);
function Yn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Hn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class qn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Yn(this.subscriptions, e), () => Hn(this.subscriptions, e);
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
const br = /* @__PURE__ */ new Set();
function Kn(t, e, n) {
  t || br.has(e) || (console.warn(e), n && console.warn(n), br.add(e));
}
const ul = (t) => !isNaN(parseFloat(t));
class cl {
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
      const { delta: s, timestamp: o } = H;
      this.lastUpdated !== o && (this.timeDelta = s, this.lastUpdated = o, I.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => I.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = ul(this.current), this.owner = n.owner;
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
    return process.env.NODE_ENV !== "production" && Kn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new qn());
    const r = this.events[e].add(n);
    return e === "change" ? () => {
      r(), I.read(() => {
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
      co(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Gt(t, e) {
  return new cl(t, e);
}
const vo = (t) => (e) => e.test(t), dl = {
  test: (t) => t === "auto",
  parse: (t) => t
}, yo = [Ft, x, at, pt, ws, bs, dl], Ht = (t) => yo.find(vo(t)), fl = [...yo, K, xt], hl = (t) => fl.find(vo(t));
function ml(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Gt(n));
}
function pl(t, e) {
  const n = $e(t, e);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n ? t.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = Ls(s[o]);
    ml(t, o, a);
  }
}
function gl(t, e, n) {
  var r, i;
  const s = Object.keys(e).filter((a) => !t.hasValue(a)), o = s.length;
  if (o)
    for (let a = 0; a < o; a++) {
      const l = s[a], u = e[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (i = (r = n[l]) !== null && r !== void 0 ? r : t.readValue(l)) !== null && i !== void 0 ? i : e[l]), c != null && (typeof c == "string" && (go(c) || po(c)) ? c = parseFloat(c) : !hl(c) && xt.test(u) && (c = mo(l, u)), t.addValue(l, Gt(c, { owner: t })), n[l] === void 0 && (n[l] = c), c !== null && t.setBaseTarget(l, c));
    }
}
function vl(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function yl(t, e, n) {
  const r = {};
  for (const i in t) {
    const s = vl(i, e);
    if (s !== void 0)
      r[i] = s;
    else {
      const o = n.getValue(i);
      o && (r[i] = o.get());
    }
  }
  return r;
}
function bl({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, r;
}
function wl(t, e) {
  const n = t.get();
  if (Array.isArray(e)) {
    for (let r = 0; r < e.length; r++)
      if (e[r] !== n)
        return !0;
  } else
    return n !== e;
}
function bo(t, e, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s = t.getDefaultTransition(), transitionEnd: o, ...a } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  r && (s = r);
  const u = [], c = i && t.animationState && t.animationState.getState()[i];
  for (const d in a) {
    const f = t.getValue(d), h = a[d];
    if (!f || h === void 0 || c && bl(c, d))
      continue;
    const m = {
      delay: n,
      elapsed: 0,
      ..._n(s || {}, d)
    };
    if (window.HandoffAppearAnimations) {
      const b = t.getProps()[bi];
      if (b) {
        const v = window.HandoffAppearAnimations(b, d, f, I);
        v !== null && (m.elapsed = v, m.isHandoff = !0);
      }
    }
    let p = !m.isHandoff && !wl(f, h);
    if (m.type === "spring" && (f.getVelocity() || m.velocity) && (p = !1), f.animation && (p = !1), p)
      continue;
    f.start(zn(d, f, h, t.shouldReduceMotion && Lt.has(d) ? { type: !1 } : m));
    const y = f.animation;
    ke(l) && (l.add(d), y.then(() => l.remove(d))), u.push(y);
  }
  return o && Promise.all(u).then(() => {
    o && pl(t, o);
  }), u;
}
function vn(t, e, n = {}) {
  const r = $e(t, e, n.custom);
  let { transition: i = t.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(bo(t, r, n)) : () => Promise.resolve(), o = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = i;
    return xl(t, e, u + l, c, d, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [s, o] : [o, s];
    return l().then(() => u());
  } else
    return Promise.all([s(), o(n.delay)]);
}
function xl(t, e, n = 0, r = 0, i = 1, s) {
  const o = [], a = (t.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(t.variantChildren).sort(Tl).forEach((u, c) => {
    u.notify("AnimationStart", e), o.push(vn(u, e, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(o);
}
function Tl(t, e) {
  return t.sortNodePosition(e);
}
function Pl(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const i = e.map((s) => vn(t, s, n));
    r = Promise.all(i);
  } else if (typeof e == "string")
    r = vn(t, e, n);
  else {
    const i = typeof e == "function" ? $e(t, e, n.custom) : e;
    r = Promise.all(bo(t, i, n));
  }
  return r.then(() => t.notify("AnimationComplete", e));
}
const Cl = [...kn].reverse(), Sl = kn.length;
function Ml(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: r }) => Pl(t, n, r)));
}
function Dl(t) {
  let e = Ml(t);
  const n = Vl();
  let r = !0;
  const i = (l, u) => {
    const c = $e(t, u);
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
    for (let b = 0; b < Sl; b++) {
      const v = Cl[b], g = n[v], w = c[v] !== void 0 ? c[v] : d[v], C = oe(w), V = v === u ? g.isActive : null;
      V === !1 && (p = b);
      let A = w === d[v] && w !== c[v] && C;
      if (A && r && t.manuallyAnimateOnMount && (A = !1), g.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && V === null || // If we didn't and don't have any defined prop for this animation type
      !w && !g.prevProp || // Or if the prop doesn't define an animation
      Ne(w) || typeof w == "boolean")
        continue;
      let D = Al(g.prevProp, w) || // If we're making this variant active, we want to always make it active
      v === u && g.isActive && !A && C || // If we removed a higher-priority variant (i is in reverse order)
      b > p && C, S = !1;
      const L = Array.isArray(w) ? w : [w];
      let P = L.reduce(i, {});
      V === !1 && (P = {});
      const { prevResolvedValues: W = {} } = g, F = {
        ...W,
        ...P
      }, E = (M) => {
        D = !0, h.has(M) && (S = !0, h.delete(M)), g.needsAnimating[M] = !0;
      };
      for (const M in F) {
        const G = P[M], rt = W[M];
        if (m.hasOwnProperty(M))
          continue;
        let _ = !1;
        Me(G) && Me(rt) ? _ = !Wi(G, rt) : _ = G !== rt, _ ? G !== void 0 ? E(M) : h.add(M) : G !== void 0 && h.has(M) ? E(M) : g.protectedKeys[M] = !0;
      }
      g.prevProp = w, g.prevResolvedValues = P, g.isActive && (m = { ...m, ...P }), r && t.blockInitialAnimation && (D = !1), D && (!A || S) && f.push(...L.map((M) => ({
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
function Al(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Wi(e, t) : !1;
}
function St(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Vl() {
  return {
    animate: St(!0),
    whileInView: St(),
    whileHover: St(),
    whileTap: St(),
    whileDrag: St(),
    whileFocus: St(),
    exit: St()
  };
}
class kl extends Pt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Dl(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), Ne(e) && (this.unmount = e.subscribe(this.node));
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
let El = 0;
class Ol extends Pt {
  constructor() {
    super(...arguments), this.id = El++;
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
const Rl = {
  animation: {
    Feature: kl
  },
  exit: {
    Feature: Ol
  }
}, wr = (t, e) => Math.abs(t - e);
function Ll(t, e) {
  const n = wr(t.x, e.x), r = wr(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class wo {
  constructor(e, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = en(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, h = Ll(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !h)
        return;
      const { point: m } = d, { timestamp: p } = H;
      this.history.push({ ...m, timestamp: p });
      const { onStart: y, onMove: b } = this.handlers;
      f || (y && y(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = tn(f, this.transformPagePoint), I.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: h, onSessionEnd: m, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = en(d.type === "pointercancel" ? this.lastMoveEventInfo : tn(f, this.transformPagePoint), this.history);
      this.startEvent && h && h(d, y), m && m(d, y);
    }, !Ii(e))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const o = We(e), a = tn(o, this.transformPagePoint), { point: l } = a, { timestamp: u } = H;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, en(a, this.history)), this.removeListeners = yt(ct(this.contextWindow, "pointermove", this.handlePointerMove), ct(this.contextWindow, "pointerup", this.handlePointerUp), ct(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), ft(this.updatePoint);
  }
}
function tn(t, e) {
  return e ? { point: e(t.point) } : t;
}
function xr(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function en({ point: t }, e) {
  return {
    point: t,
    delta: xr(t, xo(e)),
    offset: xr(t, Fl(e)),
    velocity: Il(e, 0.1)
  };
}
function Fl(t) {
  return t[0];
}
function xo(t) {
  return t[t.length - 1];
}
function Il(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, r = null;
  const i = xo(t);
  for (; n >= 0 && (r = t[n], !(i.timestamp - r.timestamp > bt(e))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = dt(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function J(t) {
  return t.max - t.min;
}
function yn(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function Tr(t, e, n, r = 0.5) {
  t.origin = r, t.originPoint = N(e.min, e.max, t.origin), t.scale = J(n) / J(e), (yn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = N(n.min, n.max, t.origin) - t.originPoint, (yn(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function re(t, e, n, r) {
  Tr(t.x, e.x, n.x, r ? r.originX : void 0), Tr(t.y, e.y, n.y, r ? r.originY : void 0);
}
function Pr(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + J(e);
}
function Bl(t, e, n) {
  Pr(t.x, e.x, n.x), Pr(t.y, e.y, n.y);
}
function Cr(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + J(e);
}
function ie(t, e, n) {
  Cr(t.x, e.x, n.x), Cr(t.y, e.y, n.y);
}
function Nl(t, { min: e, max: n }, r) {
  return e !== void 0 && t < e ? t = r ? N(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? N(n, t, r.max) : Math.min(t, n)), t;
}
function Sr(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function jl(t, { top: e, left: n, bottom: r, right: i }) {
  return {
    x: Sr(t.x, n, i),
    y: Sr(t.y, e, r)
  };
}
function Mr(t, e) {
  let n = e.min - t.min, r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Ul(t, e) {
  return {
    x: Mr(t.x, e.x),
    y: Mr(t.y, e.y)
  };
}
function Wl(t, e) {
  let n = 0.5;
  const r = J(t), i = J(e);
  return i > r ? n = ae(e.min, e.max - r, t.min) : r > i && (n = ae(t.min, t.max - i, e.min)), wt(0, 1, n);
}
function $l(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const bn = 0.35;
function Gl(t = bn) {
  return t === !1 ? t = 0 : t === !0 && (t = bn), {
    x: Dr(t, "left", "right"),
    y: Dr(t, "top", "bottom")
  };
}
function Dr(t, e, n) {
  return {
    min: Ar(t, e),
    max: Ar(t, n)
  };
}
function Ar(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Vr = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ut = () => ({
  x: Vr(),
  y: Vr()
}), kr = () => ({ min: 0, max: 0 }), $ = () => ({
  x: kr(),
  y: kr()
});
function et(t) {
  return [t("x"), t("y")];
}
function To({ top: t, left: e, right: n, bottom: r }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: r }
  };
}
function _l({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function zl(t, e) {
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
function nn(t) {
  return t === void 0 || t === 1;
}
function wn({ scale: t, scaleX: e, scaleY: n }) {
  return !nn(t) || !nn(e) || !nn(n);
}
function Mt(t) {
  return wn(t) || Po(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function Po(t) {
  return Er(t.x) || Er(t.y);
}
function Er(t) {
  return t && t !== "0%";
}
function Ee(t, e, n) {
  const r = t - n, i = e * r;
  return n + i;
}
function Or(t, e, n, r, i) {
  return i !== void 0 && (t = Ee(t, i, r)), Ee(t, n, r) + e;
}
function xn(t, e = 0, n = 1, r, i) {
  t.min = Or(t.min, e, n, r, i), t.max = Or(t.max, e, n, r, i);
}
function Co(t, { x: e, y: n }) {
  xn(t.x, e.translate, e.scale, e.originPoint), xn(t.y, n.translate, n.scale, n.originPoint);
}
function Yl(t, e, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    s = n[a], o = s.projectionDelta;
    const l = s.instance;
    l && l.style && l.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Wt(t, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (e.x *= o.x.scale, e.y *= o.y.scale, Co(t, o)), r && Mt(s.latestValues) && Wt(t, s.latestValues));
  }
  e.x = Rr(e.x), e.y = Rr(e.y);
}
function Rr(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function gt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Lr(t, e, [n, r, i]) {
  const s = e[i] !== void 0 ? e[i] : 0.5, o = N(t.min, t.max, s);
  xn(t, e[n], e[r], o, e.scale);
}
const Hl = ["x", "scaleX", "originX"], ql = ["y", "scaleY", "originY"];
function Wt(t, e) {
  Lr(t.x, e, Hl), Lr(t.y, e, ql);
}
function So(t, e) {
  return To(zl(t.getBoundingClientRect(), e));
}
function Kl(t, e, n) {
  const r = So(t, n), { scroll: i } = e;
  return i && (gt(r.x, i.offset.x), gt(r.y, i.offset.y)), r;
}
const Mo = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Xl = /* @__PURE__ */ new WeakMap();
class Zl {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = $(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(We(c, "page").point);
    }, s = (c, d) => {
      const { drag: f, dragPropagation: h, onDragStart: m } = this.getProps();
      if (f && !h && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ni(f), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), et((y) => {
        let b = this.getAxisMotionValue(y).get() || 0;
        if (at.test(b)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const g = v.layout.layoutBox[y];
            g && (b = J(g) * (parseFloat(b) / 100));
          }
        }
        this.originPoint[y] = b;
      }), m && I.update(() => m(c, d), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, o = (c, d) => {
      const { dragPropagation: f, dragDirectionLock: h, onDirectionLock: m, onDrag: p } = this.getProps();
      if (!f && !this.openGlobalLock)
        return;
      const { offset: y } = d;
      if (h && this.currentDirection === null) {
        this.currentDirection = Ql(y), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, y), this.updateAxis("y", d.point, y), this.visualElement.render(), p && p(c, d);
    }, a = (c, d) => this.stop(c, d), l = () => et((c) => {
      var d;
      return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new wo(e, {
      onSessionStart: i,
      onStart: s,
      onMove: o,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Mo(this.visualElement)
    });
  }
  stop(e, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && I.update(() => s(e, n));
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
    if (!r || !ye(e, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + r[e];
    this.constraints && this.constraints[e] && (o = Nl(o, this.constraints[e], this.elastic[e])), s.set(o);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, s = this.constraints;
    n && Nt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = jl(i.layoutBox, n) : this.constraints = !1, this.elastic = Gl(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && et((o) => {
      this.getAxisMotionValue(o) && (this.constraints[o] = $l(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Nt(e))
      return !1;
    const r = e.current;
    nt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = Kl(r, i.root, this.visualElement.getTransformPagePoint());
    let o = Ul(i.layout.layoutBox, s);
    if (n) {
      const a = n(_l(o));
      this.hasMutatedConstraints = !!a, a && (o = To(a));
    }
    return o;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = et((c) => {
      if (!ye(c, n, this.currentDirection))
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
    return r.start(zn(e, r, 0, n));
  }
  stopAnimation() {
    et((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    et((e) => {
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
    et((n) => {
      const { drag: r } = this.getProps();
      if (!ye(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(e[n] - N(o, a, 0.5));
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
    if (!Nt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    et((o) => {
      const a = this.getAxisMotionValue(o);
      if (a) {
        const l = a.get();
        i[o] = Wl({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), et((o) => {
      if (!ye(o, e, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: u } = this.constraints[o];
      a.set(N(l, u, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Xl.set(this.visualElement, this);
    const e = this.visualElement.current, n = ct(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Nt(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = ut(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (et((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = bn, dragMomentum: a = !0 } = e;
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
function ye(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Ql(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Jl extends Pt {
  constructor(e) {
    super(e), this.removeGroupControls = U, this.removeListeners = U, this.controls = new Zl(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || U;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Fr = (t) => (e, n) => {
  t && I.update(() => t(e, n));
};
class tu extends Pt {
  constructor() {
    super(...arguments), this.removePointerDownListener = U;
  }
  onPointerDown(e) {
    this.session = new wo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Mo(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Fr(e),
      onStart: Fr(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && I.update(() => i(s, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ct(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function eu() {
  const t = z(Ie);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: r } = t, i = Mn();
  return le(() => r(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
const Pe = {
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
function Ir(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const qt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (x.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Ir(t, e.target.x), r = Ir(t, e.target.y);
    return `${n}% ${r}%`;
  }
}, nu = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const r = t, i = xt.parse(t);
    if (i.length > 5)
      return r;
    const s = xt.createTransformer(t), o = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + o] /= a, i[1 + o] /= l;
    const u = N(a, l, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i);
  }
};
class ru extends hi.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = e;
    fs(iu), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Pe.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
    return o && (o.isPresent = s, i || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? o.promote() : o.relegate() || I.postRender(() => {
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
function Do(t) {
  const [e, n] = eu(), r = z(On);
  return hi.createElement(ru, { ...t, layoutGroup: r, switchLayoutGroup: z(xi), isPresent: e, safeToRemove: n });
}
const iu = {
  borderRadius: {
    ...qt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: qt,
  borderTopRightRadius: qt,
  borderBottomLeftRadius: qt,
  borderBottomRightRadius: qt,
  boxShadow: nu
}, Ao = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ou = Ao.length, Br = (t) => typeof t == "string" ? parseFloat(t) : t, Nr = (t) => typeof t == "number" || x.test(t);
function su(t, e, n, r, i, s) {
  i ? (t.opacity = N(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    au(r)
  ), t.opacityExit = N(e.opacity !== void 0 ? e.opacity : 1, 0, lu(r))) : s && (t.opacity = N(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < ou; o++) {
    const a = `border${Ao[o]}Radius`;
    let l = jr(e, a), u = jr(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Nr(l) === Nr(u) ? (t[a] = Math.max(N(Br(l), Br(u), r), 0), (at.test(u) || at.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = N(e.rotate || 0, n.rotate || 0, r));
}
function jr(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const au = Vo(0, 0.5, Xi), lu = Vo(0.5, 0.95, U);
function Vo(t, e, n) {
  return (r) => r < t ? 0 : r > e ? 1 : n(ae(t, e, r));
}
function Ur(t, e) {
  t.min = e.min, t.max = e.max;
}
function tt(t, e) {
  Ur(t.x, e.x), Ur(t.y, e.y);
}
function Wr(t, e, n, r, i) {
  return t -= e, t = Ee(t, 1 / n, r), i !== void 0 && (t = Ee(t, 1 / i, r)), t;
}
function uu(t, e = 0, n = 1, r = 0.5, i, s = t, o = t) {
  if (at.test(e) && (e = parseFloat(e), e = N(o.min, o.max, e / 100) - o.min), typeof e != "number")
    return;
  let a = N(s.min, s.max, r);
  t === s && (a -= e), t.min = Wr(t.min, e, n, a, i), t.max = Wr(t.max, e, n, a, i);
}
function $r(t, e, [n, r, i], s, o) {
  uu(t, e[n], e[r], e[i], e.scale, s, o);
}
const cu = ["x", "scaleX", "originX"], du = ["y", "scaleY", "originY"];
function Gr(t, e, n, r) {
  $r(t.x, e, cu, n ? n.x : void 0, r ? r.x : void 0), $r(t.y, e, du, n ? n.y : void 0, r ? r.y : void 0);
}
function _r(t) {
  return t.translate === 0 && t.scale === 1;
}
function ko(t) {
  return _r(t.x) && _r(t.y);
}
function fu(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function Eo(t, e) {
  return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max);
}
function zr(t) {
  return J(t.x) / J(t.y);
}
class hu {
  constructor() {
    this.members = [];
  }
  add(e) {
    Yn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Hn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
function Yr(t, e, n) {
  let r = "";
  const i = t.x.translate / e.x, s = t.y.translate / e.y;
  if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `), (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const o = t.x.scale * e.x, a = t.y.scale * e.y;
  return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || "none";
}
const mu = (t, e) => t.depth - e.depth;
class pu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Yn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Hn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(mu), this.isDirty = !1, this.children.forEach(e);
  }
}
function gu(t, e) {
  const n = performance.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= e && (ft(r), t(s - e));
  };
  return I.read(r, !0), () => ft(r);
}
function vu(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function yu(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function bu(t, e, n) {
  const r = Q(t) ? t : Gt(t);
  return r.start(zn("", r, e, n)), r.animation;
}
const Hr = ["", "X", "Y", "Z"], wu = { visibility: "hidden" }, qr = 1e3;
let xu = 0;
const Dt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Oo({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, a = e == null ? void 0 : e()) {
      this.id = xu++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Dt.totalNodes = Dt.resolvedTargetDeltas = Dt.recalculatedProjection = 0, this.nodes.forEach(Cu), this.nodes.forEach(Vu), this.nodes.forEach(ku), this.nodes.forEach(Su), vu(Dt);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pu());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new qn()), this.eventHandlers.get(o).add(a);
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
      this.isSVG = yu(o), this.instance = o;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        t(o, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = gu(f, 250), Pe.hasAnimatedSinceResize && (Pe.hasAnimatedSinceResize = !1, this.nodes.forEach(Xr));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || Fu, { onLayoutAnimationStart: y, onLayoutAnimationComplete: b } = c.getProps(), v = !this.targetLayout || !Eo(this.targetLayout, m) || h, g = !f && h;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || f && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, g);
          const w = {
            ..._n(p, "layout"),
            onPlay: y,
            onComplete: b
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          f || Xr(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ft(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Eu), this.animationId++);
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Kr);
        return;
      }
      this.isUpdating || this.nodes.forEach(Du), this.isUpdating = !1, this.nodes.forEach(Au), this.nodes.forEach(Tu), this.nodes.forEach(Pu), this.clearAllSnapshots();
      const a = performance.now();
      H.delta = wt(0, 1e3 / 60, a - H.timestamp), H.timestamp = a, H.isProcessing = !0, Ye.update.process(H), Ye.preRender.process(H), Ye.render.process(H), H.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Mu), this.sharedNodes.forEach(Ou);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, I.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      I.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = $(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const o = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !ko(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && (a || Mt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), Iu(l), {
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
        return $();
      const a = o.measureViewportBox(), { scroll: l } = this.root;
      return l && (gt(a.x, l.offset.x), gt(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = $();
      tt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            tt(a, o);
            const { scroll: f } = this.root;
            f && (gt(a.x, -f.offset.x), gt(a.y, -f.offset.y));
          }
          gt(a.x, c.offset.x), gt(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = $();
      tt(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Wt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Mt(c.latestValues) && Wt(l, c.latestValues);
      }
      return Mt(this.latestValues) && Wt(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = $();
      tt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Mt(u.latestValues))
          continue;
        wn(u.latestValues) && u.updateSnapshot();
        const c = $(), d = u.measurePageBox();
        tt(c, d), Gr(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Mt(this.latestValues) && Gr(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== H.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = H.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $(), this.relativeTargetOrigin = $(), ie(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = $(), this.targetWithTransforms = $()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Bl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tt(this.target, this.layout.layoutBox), Co(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = $(), this.relativeTargetOrigin = $(), ie(this.relativeTargetOrigin, this.target, h.target), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Dt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || wn(this.parent.latestValues) || Po(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === H.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      tt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, h = this.treeScale.y;
      Yl(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
      const { target: m } = a;
      if (!m) {
        this.projectionTransform && (this.projectionDelta = Ut(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Ut(), this.projectionDeltaWithTransform = Ut());
      const p = this.projectionTransform;
      re(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = Yr(this.projectionDelta, this.treeScale), (this.projectionTransform !== p || this.treeScale.x !== f || this.treeScale.y !== h) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m)), Dt.recalculatedProjection++;
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
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Ut();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = $(), h = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, p = h !== m, y = this.getStack(), b = !y || y.members.length <= 1, v = !!(p && !b && this.options.crossfade === !0 && !this.path.some(Lu));
      this.animationProgress = 0;
      let g;
      this.mixTargetDelta = (w) => {
        const C = w / 1e3;
        Zr(d.x, o.x, C), Zr(d.y, o.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ie(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ru(this.relativeTarget, this.relativeTargetOrigin, f, C), g && fu(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = $()), tt(g, this.relativeTarget)), p && (this.animationValues = c, su(c, u, this.latestValues, C, v, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ft(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = I.update(() => {
        Pe.hasAnimatedSinceResize = !0, this.currentAnimation = bu(0, qr, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(qr), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (this !== o && this.layout && u && Ro(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || $();
          const d = J(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + d;
          const f = J(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + f;
        }
        tt(a, l), Wt(a, c), re(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new hu()), this.sharedNodes.get(o).add(a);
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
      for (let c = 0; c < Hr.length; c++) {
        const d = "rotate" + Hr[c];
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
        return wu;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Te(o == null ? void 0 : o.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Te(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !Mt(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = Yr(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: h, y: m } = this.projectionDelta;
      u.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const p in Ce) {
        if (f[p] === void 0)
          continue;
        const { correct: y, applyTo: b } = Ce[p], v = u.transform === "none" ? f[p] : y(f[p], d);
        if (b) {
          const g = b.length;
          for (let w = 0; w < g; w++)
            u[b[w]] = v;
        } else
          u[p] = v;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Te(o == null ? void 0 : o.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Kr), this.root.sharedNodes.clear();
    }
  };
}
function Tu(t) {
  t.updateLayout();
}
function Pu(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = t.layout, { animationType: s } = t.options, o = n.source !== t.layout.source;
    s === "size" ? et((d) => {
      const f = o ? n.measuredBox[d] : n.layoutBox[d], h = J(f);
      f.min = r[d].min, f.max = f.min + h;
    }) : Ro(s, n.layoutBox, r) && et((d) => {
      const f = o ? n.measuredBox[d] : n.layoutBox[d], h = J(r[d]);
      f.max = f.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[d].max = t.relativeTarget[d].min + h);
    });
    const a = Ut();
    re(a, r, n.layoutBox);
    const l = Ut();
    o ? re(l, t.applyTransform(i, !0), n.measuredBox) : re(l, r, n.layoutBox);
    const u = !ko(a);
    let c = !1;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const m = $();
          ie(m, n.layoutBox, f.layoutBox);
          const p = $();
          ie(p, r, h.layoutBox), Eo(m, p) || (c = !0), d.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = d);
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
function Cu(t) {
  Dt.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Su(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Mu(t) {
  t.clearSnapshot();
}
function Kr(t) {
  t.clearMeasurements();
}
function Du(t) {
  t.isLayoutDirty = !1;
}
function Au(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function Xr(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Vu(t) {
  t.resolveTargetDelta();
}
function ku(t) {
  t.calcProjection();
}
function Eu(t) {
  t.resetRotation();
}
function Ou(t) {
  t.removeLeadSnapshot();
}
function Zr(t, e, n) {
  t.translate = N(e.translate, 0, n), t.scale = N(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Qr(t, e, n, r) {
  t.min = N(e.min, n.min, r), t.max = N(e.max, n.max, r);
}
function Ru(t, e, n, r) {
  Qr(t.x, e.x, n.x, r), Qr(t.y, e.y, n.y, r);
}
function Lu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Fu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Jr = (t) => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(t), ti = Jr("applewebkit/") && !Jr("chrome/") ? Math.round : U;
function ei(t) {
  t.min = ti(t.min), t.max = ti(t.max);
}
function Iu(t) {
  ei(t.x), ei(t.y);
}
function Ro(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !yn(zr(e), zr(n), 0.2);
}
const Bu = Oo({
  attachResizeListener: (t, e) => ut(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), rn = {
  current: void 0
}, Lo = Oo({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!rn.current) {
      const t = new Bu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), rn.current = t;
    }
    return rn.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Nu = {
  pan: {
    Feature: tu
  },
  drag: {
    Feature: Jl,
    ProjectionNode: Lo,
    MeasureLayout: Do
  }
}, ju = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Uu(t) {
  const e = ju.exec(t);
  if (!e)
    return [,];
  const [, n, r] = e;
  return [n, r];
}
const Wu = 4;
function Tn(t, e, n = 1) {
  nt(n <= Wu, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [r, i] = Uu(t);
  if (!r)
    return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return go(o) ? parseFloat(o) : o;
  } else
    return dn(i) ? Tn(i, e, n + 1) : i;
}
function $u(t, { ...e }, n) {
  const r = t.current;
  if (!(r instanceof Element))
    return { target: e, transitionEnd: n };
  n && (n = { ...n }), t.values.forEach((i) => {
    const s = i.get();
    if (!dn(s))
      return;
    const o = Tn(s, r);
    o && i.set(o);
  });
  for (const i in e) {
    const s = e[i];
    if (!dn(s))
      continue;
    const o = Tn(s, r);
    o && (e[i] = o, n || (n = {}), n[i] === void 0 && (n[i] = s));
  }
  return { target: e, transitionEnd: n };
}
const Gu = /* @__PURE__ */ new Set([
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
]), Fo = (t) => Gu.has(t), _u = (t) => Object.keys(t).some(Fo), be = (t) => t === Ft || t === x, ni = (t, e) => parseFloat(t.split(", ")[e]), ri = (t, e) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/);
  if (i)
    return ni(i[1], e);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? ni(s[1], t) : 0;
  }
}, zu = /* @__PURE__ */ new Set(["x", "y", "z"]), Yu = ue.filter((t) => !zu.has(t));
function Hu(t) {
  const e = [];
  return Yu.forEach((n) => {
    const r = t.getValue(n);
    r !== void 0 && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), e.length && t.render(), e;
}
const _t = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: ri(4, 13),
  y: ri(5, 14)
};
_t.translateX = _t.x;
_t.translateY = _t.y;
const qu = (t, e, n) => {
  const r = e.measureViewportBox(), i = e.current, s = getComputedStyle(i), { display: o } = s, a = {};
  o === "none" && e.setStaticValue("display", t.display || "block"), n.forEach((u) => {
    a[u] = _t[u](r, s);
  }), e.render();
  const l = e.measureViewportBox();
  return n.forEach((u) => {
    const c = e.getValue(u);
    c && c.jump(a[u]), t[u] = _t[u](l, s);
  }), t;
}, Ku = (t, e, n = {}, r = {}) => {
  e = { ...e }, r = { ...r };
  const i = Object.keys(e).filter(Fo);
  let s = [], o = !1;
  const a = [];
  if (i.forEach((l) => {
    const u = t.getValue(l);
    if (!t.hasValue(l))
      return;
    let c = n[l], d = Ht(c);
    const f = e[l];
    let h;
    if (Me(f)) {
      const m = f.length, p = f[0] === null ? 1 : 0;
      c = f[p], d = Ht(c);
      for (let y = p; y < m && f[y] !== null; y++)
        h ? nt(Ht(f[y]) === h, "All keyframes must be of the same type") : (h = Ht(f[y]), nt(h === d || be(d) && be(h), "Keyframes must be of the same dimension as the current value"));
    } else
      h = Ht(f);
    if (d !== h)
      if (be(d) && be(h)) {
        const m = u.get();
        typeof m == "string" && u.set(parseFloat(m)), typeof f == "string" ? e[l] = parseFloat(f) : Array.isArray(f) && h === x && (e[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (h != null && h.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(h.transform(c)) : e[l] = d.transform(f) : (o || (s = Hu(t), o = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : e[l], u.jump(f));
  }), a.length) {
    const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = qu(e, t, a);
    return s.length && s.forEach(([c, d]) => {
      t.getValue(c).set(d);
    }), t.render(), Be && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: e, transitionEnd: r };
};
function Xu(t, e, n, r) {
  return _u(e) ? Ku(t, e, n, r) : { target: e, transitionEnd: r };
}
const Zu = (t, e, n, r) => {
  const i = $u(t, e, r);
  return e = i.target, r = i.transitionEnd, Xu(t, e, n, r);
}, Pn = { current: null }, Io = { current: !1 };
function Qu() {
  if (Io.current = !0, !!Be)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Pn.current = t.matches;
      t.addListener(e), e();
    } else
      Pn.current = !1;
}
function Ju(t, e, n) {
  const { willChange: r } = e;
  for (const i in e) {
    const s = e[i], o = n[i];
    if (Q(s))
      t.addValue(i, s), ke(r) && r.add(i), process.env.NODE_ENV === "development" && Kn(s.version === "10.18.0", `Attempting to mix Framer Motion versions ${s.version} with 10.18.0 may not work as expected.`);
    else if (Q(o))
      t.addValue(i, Gt(s, { owner: t })), ke(r) && r.remove(i);
    else if (o !== s)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        !a.hasAnimated && a.set(s);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, Gt(a !== void 0 ? a : s, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const ii = /* @__PURE__ */ new WeakMap(), Bo = Object.keys(se), tc = Bo.length, oi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], ec = En.length;
class nc {
  constructor({ parent: e, props: n, presenceContext: r, reducedMotionConfig: i, visualState: s }, o = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => I.render(this.render, !1, !0);
    const { latestValues: a, renderState: l } = s;
    this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = r, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.isControllingVariants = je(n), this.isVariantNode = wi(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      a[d] !== void 0 && Q(f) && (f.set(a[d], !1), ke(u) && u.add(d));
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
    this.current = e, ii.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Io.current || Qu(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Pn.current, process.env.NODE_ENV !== "production" && Kn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    ii.delete(this.current), this.projection && this.projection.unmount(), ft(this.notifyUpdate), ft(this.render), this.valueSubscriptions.forEach((e) => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features)
      this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const r = Lt.has(e), i = n.on("change", (o) => {
      this.latestValues[e] = o, this.props.onUpdate && I.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
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
      n.ignoreStrict ? fe(!1, l) : nt(!1, l);
    }
    for (let l = 0; l < tc; l++) {
      const u = Bo[l], { isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: h } = se[u];
      f && (o = f), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), h && (a = h));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
      this.projection = new o(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: h } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Nt(d),
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : $();
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
    for (let r = 0; r < oi.length; r++) {
      const i = oi[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = e["on" + i];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = Ju(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let r = 0; r < ec; r++) {
      const i = En[r], s = this.props[i];
      (oe(s) || s === !1) && (n[i] = s);
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
    return r === void 0 && n !== void 0 && (r = Gt(n, { owner: this }), this.addValue(e, r)), r;
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
    const { initial: r } = this.props, i = typeof r == "string" || typeof r == "object" ? (n = jn(this.props, r)) === null || n === void 0 ? void 0 : n[e] : void 0;
    if (r && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !Q(s) ? s : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new qn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class No extends nc {
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
    let o = yl(r, e || {}, this);
    if (i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s) {
      gl(this, r, o);
      const a = Zu(this, r, o, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: e,
      transitionEnd: n,
      ...r
    };
  }
}
function rc(t) {
  return window.getComputedStyle(t);
}
class ic extends No {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(e, n) {
    if (Lt.has(n)) {
      const r = Gn(n);
      return r && r.default || 0;
    } else {
      const r = rc(e), i = (Ci(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return So(e, n);
  }
  build(e, n, r, i) {
    Ln(e, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return Nn(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    Q(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(e, n, r, i) {
    ki(e, n, r, i);
  }
}
class oc extends No {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Lt.has(n)) {
      const r = Gn(n);
      return r && r.default || 0;
    }
    return n = Ei.has(n) ? n : Vn(n), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return $();
  }
  scrapeMotionValuesFromProps(e, n) {
    return Ri(e, n);
  }
  build(e, n, r, i) {
    In(e, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, r, i) {
    Oi(e, n, r, i);
  }
  mount(e) {
    this.isSVGTag = Bn(e.tagName), super.mount(e);
  }
}
const sc = (t, e) => Rn(t) ? new oc(e, { enableHardwareAcceleration: !1 }) : new ic(e, { enableHardwareAcceleration: !0 }), ac = {
  layout: {
    ProjectionNode: Lo,
    MeasureLayout: Do
  }
}, lc = {
  ...Rl,
  ...ea,
  ...Nu,
  ...ac
}, uc = /* @__PURE__ */ cs((t, e) => $s(t, e, lc, sc));
function jo() {
  const t = Z(!1);
  return An(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
function cc() {
  const t = jo(), [e, n] = Dn(0), r = vt(() => {
    t.current && n(e + 1);
  }, [e]);
  return [vt(() => I.postRender(r), [r]), e];
}
class dc extends X.Component {
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
function fc({ children: t, isPresent: e }) {
  const n = Mn(), r = Z(null), i = Z({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return mi(() => {
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
  }, [e]), X.createElement(dc, { isPresent: e, childRef: r, sizeRef: i }, X.cloneElement(t, { ref: r }));
}
const on = ({ children: t, initial: e, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
  const a = Li(hc), l = Mn(), u = $t(
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
  return $t(() => {
    a.forEach((c, d) => a.set(d, !1));
  }, [n]), X.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), o === "popLayout" && (t = X.createElement(fc, { isPresent: n }, t)), X.createElement(Ie.Provider, { value: u }, t);
};
function hc() {
  return /* @__PURE__ */ new Map();
}
function mc(t) {
  return le(() => () => t(), []);
}
const At = (t) => t.key || "";
function pc(t, e) {
  t.forEach((n) => {
    const r = At(n);
    e.set(r, n);
  });
}
function gc(t) {
  const e = [];
  return ts.forEach(t, (n) => {
    gi(n) && e.push(n);
  }), e;
}
const vc = ({ children: t, custom: e, initial: n = !0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: s = !0, mode: o = "sync" }) => {
  nt(!i, "Replace exitBeforeEnter with mode='wait'");
  const a = z(On).forceRender || cc()[0], l = jo(), u = gc(t);
  let c = u;
  const d = Z(/* @__PURE__ */ new Map()).current, f = Z(c), h = Z(/* @__PURE__ */ new Map()).current, m = Z(!0);
  if (An(() => {
    m.current = !1, pc(u, h), f.current = c;
  }), mc(() => {
    m.current = !0, h.clear(), d.clear();
  }), m.current)
    return X.createElement(X.Fragment, null, c.map((v) => X.createElement(on, { key: At(v), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: o }, v)));
  c = [...c];
  const p = f.current.map(At), y = u.map(At), b = p.length;
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
    let V = v;
    if (!V) {
      const A = () => {
        d.delete(g);
        const T = Array.from(h.keys()).filter((D) => !y.includes(D));
        if (T.forEach((D) => h.delete(D)), f.current = u.filter((D) => {
          const S = At(D);
          return (
            // filter out the node exiting
            S === g || // filter out the leftover children
            T.includes(S)
          );
        }), !d.size) {
          if (l.current === !1)
            return;
          a(), r && r();
        }
      };
      V = X.createElement(on, { key: At(w), isPresent: !1, onExitComplete: A, custom: e, presenceAffectsLayout: s, mode: o }, w), d.set(g, V);
    }
    c.splice(C, 0, V);
  }), c = c.map((v) => {
    const g = v.key;
    return d.has(g) ? v : X.createElement(on, { key: At(v), isPresent: !0, presenceAffectsLayout: s, mode: o }, v);
  }), process.env.NODE_ENV !== "production" && o === "wait" && c.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), X.createElement(X.Fragment, null, d.size ? c : c.map((v) => cn(v)));
};
var yc = {
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
const bc = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ge = (t, e) => {
  const n = pi(
    ({ color: r = "currentColor", size: i = 24, strokeWidth: s = 2, absoluteStrokeWidth: o, children: a, ...l }, u) => un(
      "svg",
      {
        ref: u,
        ...yc,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: o ? Number(s) * 24 / Number(i) : s,
        className: `lucide lucide-${bc(t)}`,
        ...l
      },
      [
        ...e.map(([c, d]) => un(c, d)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return n.displayName = `${t}`, n;
}, wc = Ge("ChevronDown", [
  ["polyline", { points: "6 9 12 15 18 9", key: "1do0m2" }]
]), xc = Ge("ChevronUp", [
  ["polyline", { points: "18 15 12 9 6 15", key: "1uugdp" }]
]), Tc = Ge("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]), Pc = Ge("X", [
  ["line", { x1: "18", x2: "6", y1: "6", y2: "18", key: "15jfxm" }],
  ["line", { x1: "6", x2: "18", y1: "6", y2: "18", key: "d1lma3" }]
]);
function Oe(t) {
  "@babel/helpers - typeof";
  return Oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Oe(t);
}
function Tt(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var e = Number(t);
  return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function q(t, e) {
  if (e.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present");
}
function lt(t) {
  q(1, arguments);
  var e = Object.prototype.toString.call(t);
  return t instanceof Date || Oe(t) === "object" && e === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || e === "[object Number]" ? new Date(t) : ((typeof t == "string" || e === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Cc(t, e) {
  q(2, arguments);
  var n = lt(t).getTime(), r = Tt(e);
  return new Date(n + r);
}
var Sc = {};
function _e() {
  return Sc;
}
function Mc(t) {
  var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
var Uo = 6e4, Wo = 36e5;
function Dc(t) {
  return q(1, arguments), t instanceof Date || Oe(t) === "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Ac(t) {
  if (q(1, arguments), !Dc(t) && typeof t != "number")
    return !1;
  var e = lt(t);
  return !isNaN(Number(e));
}
function Vc(t, e) {
  q(2, arguments);
  var n = Tt(e);
  return Cc(t, -n);
}
var kc = 864e5;
function Ec(t) {
  q(1, arguments);
  var e = lt(t), n = e.getTime();
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  var r = e.getTime(), i = n - r;
  return Math.floor(i / kc) + 1;
}
function Re(t) {
  q(1, arguments);
  var e = 1, n = lt(t), r = n.getUTCDay(), i = (r < e ? 7 : 0) + r - e;
  return n.setUTCDate(n.getUTCDate() - i), n.setUTCHours(0, 0, 0, 0), n;
}
function $o(t) {
  q(1, arguments);
  var e = lt(t), n = e.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var i = Re(r), s = /* @__PURE__ */ new Date(0);
  s.setUTCFullYear(n, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var o = Re(s);
  return e.getTime() >= i.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1;
}
function Oc(t) {
  q(1, arguments);
  var e = $o(t), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Re(n);
  return r;
}
var Rc = 6048e5;
function Lc(t) {
  q(1, arguments);
  var e = lt(t), n = Re(e).getTime() - Oc(e).getTime();
  return Math.round(n / Rc) + 1;
}
function Le(t, e) {
  var n, r, i, s, o, a, l, u;
  q(1, arguments);
  var c = _e(), d = Tt((n = (r = (i = (s = e == null ? void 0 : e.weekStartsOn) !== null && s !== void 0 ? s : e == null || (o = e.locale) === null || o === void 0 || (a = o.options) === null || a === void 0 ? void 0 : a.weekStartsOn) !== null && i !== void 0 ? i : c.weekStartsOn) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = lt(t), h = f.getUTCDay(), m = (h < d ? 7 : 0) + h - d;
  return f.setUTCDate(f.getUTCDate() - m), f.setUTCHours(0, 0, 0, 0), f;
}
function Go(t, e) {
  var n, r, i, s, o, a, l, u;
  q(1, arguments);
  var c = lt(t), d = c.getUTCFullYear(), f = _e(), h = Tt((n = (r = (i = (s = e == null ? void 0 : e.firstWeekContainsDate) !== null && s !== void 0 ? s : e == null || (o = e.locale) === null || o === void 0 || (a = o.options) === null || a === void 0 ? void 0 : a.firstWeekContainsDate) !== null && i !== void 0 ? i : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = f.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(h >= 1 && h <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(d + 1, 0, h), m.setUTCHours(0, 0, 0, 0);
  var p = Le(m, e), y = /* @__PURE__ */ new Date(0);
  y.setUTCFullYear(d, 0, h), y.setUTCHours(0, 0, 0, 0);
  var b = Le(y, e);
  return c.getTime() >= p.getTime() ? d + 1 : c.getTime() >= b.getTime() ? d : d - 1;
}
function Fc(t, e) {
  var n, r, i, s, o, a, l, u;
  q(1, arguments);
  var c = _e(), d = Tt((n = (r = (i = (s = e == null ? void 0 : e.firstWeekContainsDate) !== null && s !== void 0 ? s : e == null || (o = e.locale) === null || o === void 0 || (a = o.options) === null || a === void 0 ? void 0 : a.firstWeekContainsDate) !== null && i !== void 0 ? i : c.firstWeekContainsDate) !== null && r !== void 0 ? r : (l = c.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Go(t, e), h = /* @__PURE__ */ new Date(0);
  h.setUTCFullYear(f, 0, d), h.setUTCHours(0, 0, 0, 0);
  var m = Le(h, e);
  return m;
}
var Ic = 6048e5;
function Bc(t, e) {
  q(1, arguments);
  var n = lt(t), r = Le(n, e).getTime() - Fc(n, e).getTime();
  return Math.round(r / Ic) + 1;
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
const ht = Nc;
var Bt = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, jc = {
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
    return ht.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, r, i) {
    var s = Go(e, i), o = s > 0 ? s : 1 - s;
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
    var r = $o(e);
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
        return ht.M(e, n);
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
    var s = Bc(e, i);
    return n === "wo" ? r.ordinalNumber(s, {
      unit: "week"
    }) : R(s, n.length);
  },
  // ISO week of year
  I: function(e, n, r) {
    var i = Lc(e);
    return n === "Io" ? r.ordinalNumber(i, {
      unit: "week"
    }) : R(i, n.length);
  },
  // Day of the month
  d: function(e, n, r) {
    return n === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : ht.d(e, n);
  },
  // Day of year
  D: function(e, n, r) {
    var i = Ec(e);
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
    switch (i === 12 ? s = Bt.noon : i === 0 ? s = Bt.midnight : s = i / 12 >= 1 ? "pm" : "am", n) {
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
    switch (i >= 17 ? s = Bt.evening : i >= 12 ? s = Bt.afternoon : i >= 4 ? s = Bt.morning : s = Bt.night, n) {
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
    return ht.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, r) {
    return n === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : ht.H(e, n);
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
    }) : ht.m(e, n);
  },
  // Second
  s: function(e, n, r) {
    return n === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : ht.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return ht.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (n) {
      case "X":
        return ai(o);
      case "XXXX":
      case "XX":
        return Vt(o);
      case "XXXXX":
      case "XXX":
      default:
        return Vt(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTimezoneOffset();
    switch (n) {
      case "x":
        return ai(o);
      case "xxxx":
      case "xx":
        return Vt(o);
      case "xxxxx":
      case "xxx":
      default:
        return Vt(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + si(o, ":");
      case "OOOO":
      default:
        return "GMT" + Vt(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, r, i) {
    var s = i._originalDate || e, o = s.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + si(o, ":");
      case "zzzz":
      default:
        return "GMT" + Vt(o, ":");
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
function si(t, e) {
  var n = t > 0 ? "-" : "+", r = Math.abs(t), i = Math.floor(r / 60), s = r % 60;
  if (s === 0)
    return n + String(i);
  var o = e || "";
  return n + String(i) + o + R(s, 2);
}
function ai(t, e) {
  if (t % 60 === 0) {
    var n = t > 0 ? "-" : "+";
    return n + R(Math.abs(t) / 60, 2);
  }
  return Vt(t, e);
}
function Vt(t, e) {
  var n = e || "", r = t > 0 ? "-" : "+", i = Math.abs(t), s = R(Math.floor(i / 60), 2), o = R(i % 60, 2);
  return r + s + n + o;
}
const Uc = jc;
var li = function(e, n) {
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
}, _o = function(e, n) {
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
}, Wc = function(e, n) {
  var r = e.match(/(P+)(p+)?/) || [], i = r[1], s = r[2];
  if (!s)
    return li(e, n);
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
  return o.replace("{{date}}", li(i, n)).replace("{{time}}", _o(s, n));
}, $c = {
  p: _o,
  P: Wc
};
const Gc = $c;
var _c = ["D", "DD"], zc = ["YY", "YYYY"];
function Yc(t) {
  return _c.indexOf(t) !== -1;
}
function Hc(t) {
  return zc.indexOf(t) !== -1;
}
function ui(t, e, n) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var qc = {
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
}, Kc = function(e, n, r) {
  var i, s = qc[e];
  return typeof s == "string" ? i = s : n === 1 ? i = s.one : i = s.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const Xc = Kc;
function sn(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.width ? String(e.width) : t.defaultWidth, r = t.formats[n] || t.formats[t.defaultWidth];
    return r;
  };
}
var Zc = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Qc = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Jc = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, td = {
  date: sn({
    formats: Zc,
    defaultWidth: "full"
  }),
  time: sn({
    formats: Qc,
    defaultWidth: "full"
  }),
  dateTime: sn({
    formats: Jc,
    defaultWidth: "full"
  })
};
const ed = td;
var nd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rd = function(e, n, r, i) {
  return nd[e];
};
const id = rd;
function Kt(t) {
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
var od = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ad = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, ld = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, ud = {
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
}, cd = {
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
}, dd = function(e, n) {
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
}, fd = {
  ordinalNumber: dd,
  era: Kt({
    values: od,
    defaultWidth: "wide"
  }),
  quarter: Kt({
    values: sd,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Kt({
    values: ad,
    defaultWidth: "wide"
  }),
  day: Kt({
    values: ld,
    defaultWidth: "wide"
  }),
  dayPeriod: Kt({
    values: ud,
    defaultWidth: "wide",
    formattingValues: cd,
    defaultFormattingWidth: "wide"
  })
};
const hd = fd;
function Xt(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, i = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], s = e.match(i);
    if (!s)
      return null;
    var o = s[0], a = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], l = Array.isArray(a) ? pd(a, function(d) {
      return d.test(o);
    }) : md(a, function(d) {
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
function md(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n) && e(t[n]))
      return n;
}
function pd(t, e) {
  for (var n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function gd(t) {
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
var vd = /^(\d+)(th|st|nd|rd)?/i, yd = /\d+/i, bd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wd = {
  any: [/^b/i, /^(a|c)/i]
}, xd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Td = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Pd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Cd = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Sd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Md = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Dd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ad = {
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
}, Vd = {
  ordinalNumber: gd({
    matchPattern: vd,
    parsePattern: yd,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Xt({
    matchPatterns: bd,
    defaultMatchWidth: "wide",
    parsePatterns: wd,
    defaultParseWidth: "any"
  }),
  quarter: Xt({
    matchPatterns: xd,
    defaultMatchWidth: "wide",
    parsePatterns: Td,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Xt({
    matchPatterns: Pd,
    defaultMatchWidth: "wide",
    parsePatterns: Cd,
    defaultParseWidth: "any"
  }),
  day: Xt({
    matchPatterns: Sd,
    defaultMatchWidth: "wide",
    parsePatterns: Md,
    defaultParseWidth: "any"
  }),
  dayPeriod: Xt({
    matchPatterns: Dd,
    defaultMatchWidth: "any",
    parsePatterns: Ad,
    defaultParseWidth: "any"
  })
};
const kd = Vd;
var Ed = {
  code: "en-US",
  formatDistance: Xc,
  formatLong: ed,
  formatRelative: id,
  localize: hd,
  match: kd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Od = Ed;
var Rd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ld = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Fd = /^'([^]*?)'?$/, Id = /''/g, Bd = /[a-zA-Z]/;
function kt(t, e, n) {
  var r, i, s, o, a, l, u, c, d, f, h, m, p, y, b, v, g, w;
  q(2, arguments);
  var C = String(e), V = _e(), A = (r = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : V.locale) !== null && r !== void 0 ? r : Od, T = Tt((s = (o = (a = (l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0 ? l : n == null || (u = n.locale) === null || u === void 0 || (c = u.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && a !== void 0 ? a : V.firstWeekContainsDate) !== null && o !== void 0 ? o : (d = V.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = Tt((h = (m = (p = (y = n == null ? void 0 : n.weekStartsOn) !== null && y !== void 0 ? y : n == null || (b = n.locale) === null || b === void 0 || (v = b.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && p !== void 0 ? p : V.weekStartsOn) !== null && m !== void 0 ? m : (g = V.locale) === null || g === void 0 || (w = g.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && h !== void 0 ? h : 0);
  if (!(D >= 0 && D <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!A.localize)
    throw new RangeError("locale must contain localize property");
  if (!A.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var S = lt(t);
  if (!Ac(S))
    throw new RangeError("Invalid time value");
  var L = Mc(S), P = Vc(S, L), W = {
    firstWeekContainsDate: T,
    weekStartsOn: D,
    locale: A,
    _originalDate: S
  }, F = C.match(Ld).map(function(E) {
    var M = E[0];
    if (M === "p" || M === "P") {
      var G = Gc[M];
      return G(E, A.formatLong);
    }
    return E;
  }).join("").match(Rd).map(function(E) {
    if (E === "''")
      return "'";
    var M = E[0];
    if (M === "'")
      return Nd(E);
    var G = Uc[M];
    if (G)
      return !(n != null && n.useAdditionalWeekYearTokens) && Hc(E) && ui(E, e, String(t)), !(n != null && n.useAdditionalDayOfYearTokens) && Yc(E) && ui(E, e, String(t)), G(P, E, A.localize, W);
    if (M.match(Bd))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + M + "`");
    return E;
  }).join("");
  return F;
}
function Nd(t) {
  var e = t.match(Fd);
  return e ? e[1].replace(Id, "'") : t;
}
function jd(t, e) {
  var n;
  q(1, arguments);
  var r = Tt((n = e == null ? void 0 : e.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof t == "string" || Object.prototype.toString.call(t) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var i = Gd(t), s;
  if (i.date) {
    var o = _d(i.date, r);
    s = zd(o.restDateString, o.year);
  }
  if (!s || isNaN(s.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var a = s.getTime(), l = 0, u;
  if (i.time && (l = Yd(i.time), isNaN(l)))
    return /* @__PURE__ */ new Date(NaN);
  if (i.timezone) {
    if (u = Hd(i.timezone), isNaN(u))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var c = new Date(a + l), d = /* @__PURE__ */ new Date(0);
    return d.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()), d.setHours(c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), c.getUTCMilliseconds()), d;
  }
  return new Date(a + l + u);
}
var we = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, Ud = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Wd = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, $d = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Gd(t) {
  var e = {}, n = t.split(we.dateTimeDelimiter), r;
  if (n.length > 2)
    return e;
  if (/:/.test(n[0]) ? r = n[0] : (e.date = n[0], r = n[1], we.timeZoneDelimiter.test(e.date) && (e.date = t.split(we.timeZoneDelimiter)[0], r = t.substr(e.date.length, t.length))), r) {
    var i = we.timezone.exec(r);
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
function zd(t, e) {
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t.match(Ud);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], i = Zt(n[1]), s = Zt(n[2]) - 1, o = Zt(n[3]), a = Zt(n[4]), l = Zt(n[5]) - 1;
  if (r)
    return Qd(e, a, l) ? qd(e, a, l) : /* @__PURE__ */ new Date(NaN);
  var u = /* @__PURE__ */ new Date(0);
  return !Xd(e, s, o) || !Zd(e, i) ? /* @__PURE__ */ new Date(NaN) : (u.setUTCFullYear(e, s, Math.max(i, o)), u);
}
function Zt(t) {
  return t ? parseInt(t) : 1;
}
function Yd(t) {
  var e = t.match(Wd);
  if (!e)
    return NaN;
  var n = an(e[1]), r = an(e[2]), i = an(e[3]);
  return Jd(n, r, i) ? n * Wo + r * Uo + i * 1e3 : NaN;
}
function an(t) {
  return t && parseFloat(t.replace(",", ".")) || 0;
}
function Hd(t) {
  if (t === "Z")
    return 0;
  var e = t.match($d);
  if (!e)
    return 0;
  var n = e[1] === "+" ? -1 : 1, r = parseInt(e[2]), i = e[3] && parseInt(e[3]) || 0;
  return tf(r, i) ? n * (r * Wo + i * Uo) : NaN;
}
function qd(t, e, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(t, 0, 4);
  var i = r.getUTCDay() || 7, s = (e - 1) * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + s), r;
}
var Kd = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function zo(t) {
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}
function Xd(t, e, n) {
  return e >= 0 && e <= 11 && n >= 1 && n <= (Kd[e] || (zo(t) ? 29 : 28));
}
function Zd(t, e) {
  return e >= 1 && e <= (zo(t) ? 366 : 365);
}
function Qd(t, e, n) {
  return e >= 1 && e <= 53 && n >= 0 && n <= 6;
}
function Jd(t, e, n) {
  return t === 24 ? e === 0 && n === 0 : n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25;
}
function tf(t, e) {
  return e >= 0 && e <= 59;
}
function ef(t) {
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
  return kt(e, "hh:mm a");
}
const nf = (t, e) => {
  le(() => {
    const n = (r) => {
      !t.current || t.current.contains(r.target) || e(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [t, e]);
};
function Yo(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Yo(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function rf() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Yo(t)) && (r && (r += " "), r += e);
  return r;
}
function of() {
  for (var t = 0, e, n, r = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = Ho(e)) && (r && (r += " "), r += n);
  return r;
}
function Ho(t) {
  if (typeof t == "string")
    return t;
  for (var e, n = "", r = 0; r < t.length; r++)
    t[r] && (e = Ho(t[r])) && (n && (n += " "), n += e);
  return n;
}
var Xn = "-";
function sf(t) {
  var e = lf(t), n = t.conflictingClassGroups, r = t.conflictingClassGroupModifiers, i = r === void 0 ? {} : r;
  function s(a) {
    var l = a.split(Xn);
    return l[0] === "" && l.length !== 1 && l.shift(), qo(l, e) || af(a);
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
function qo(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var n = t[0], r = e.nextPart.get(n), i = r ? qo(t.slice(1), r) : void 0;
  if (i)
    return i;
  if (e.validators.length !== 0) {
    var s = t.join(Xn);
    return (o = e.validators.find(function(a) {
      var l = a.validator;
      return l(s);
    })) == null ? void 0 : o.classGroupId;
  }
}
var ci = /^\[(.+)\]$/;
function af(t) {
  if (ci.test(t)) {
    var e = ci.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function lf(t) {
  var e = t.theme, n = t.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, i = cf(Object.entries(t.classGroups), n);
  return i.forEach(function(s) {
    var o = s[0], a = s[1];
    Cn(a, r, o, e);
  }), r;
}
function Cn(t, e, n, r) {
  t.forEach(function(i) {
    if (typeof i == "string") {
      var s = i === "" ? e : di(e, i);
      s.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (uf(i)) {
        Cn(i(r), e, n, r);
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
      Cn(l, di(e, a), n, r);
    });
  });
}
function di(t, e) {
  var n = t;
  return e.split(Xn).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function uf(t) {
  return t.isThemeGetter;
}
function cf(t, e) {
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
function df(t) {
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
var Ko = "!";
function ff(t) {
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
    var h = a.length === 0 ? o : o.substring(u), m = h.startsWith(Ko), p = m ? h.substring(1) : h, y = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: y
    };
  };
}
function hf(t) {
  if (t.length <= 1)
    return t;
  var e = [], n = [];
  return t.forEach(function(r) {
    var i = r[0] === "[";
    i ? (e.push.apply(e, n.sort().concat([r])), n = []) : n.push(r);
  }), e.push.apply(e, n.sort()), e;
}
function mf(t) {
  return {
    cache: df(t.cacheSize),
    splitModifiers: ff(t),
    ...sf(t)
  };
}
var pf = /\s+/;
function gf(t, e) {
  var n = e.splitModifiers, r = e.getClassGroupId, i = e.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return t.trim().split(pf).map(function(o) {
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
    var m = hf(l).join(":"), p = u ? m + Ko : m;
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
function vf() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r, i, s, o = a;
  function a(u) {
    var c = e[0], d = e.slice(1), f = d.reduce(function(h, m) {
      return m(h);
    }, c());
    return r = mf(f), i = r.cache.get, s = r.cache.set, o = l, l(u);
  }
  function l(u) {
    var c = i(u);
    if (c)
      return c;
    var d = gf(u, r);
    return s(u, d), d;
  }
  return function() {
    return o(of.apply(null, arguments));
  };
}
function B(t) {
  var e = function(r) {
    return r[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var Xo = /^\[(?:([a-z-]+):)?(.+)\]$/i, yf = /^\d+\/\d+$/, bf = /* @__PURE__ */ new Set(["px", "full", "screen"]), wf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tf = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function it(t) {
  return Ot(t) || bf.has(t) || yf.test(t) || Sn(t);
}
function Sn(t) {
  return It(t, "length", Af);
}
function Pf(t) {
  return It(t, "size", Zo);
}
function Cf(t) {
  return It(t, "position", Zo);
}
function Sf(t) {
  return It(t, "url", Vf);
}
function xe(t) {
  return It(t, "number", Ot);
}
function Ot(t) {
  return !Number.isNaN(Number(t));
}
function Mf(t) {
  return t.endsWith("%") && Ot(t.slice(0, -1));
}
function Qt(t) {
  return fi(t) || It(t, "number", fi);
}
function k(t) {
  return Xo.test(t);
}
function Jt() {
  return !0;
}
function mt(t) {
  return wf.test(t);
}
function Df(t) {
  return It(t, "", kf);
}
function It(t, e, n) {
  var r = Xo.exec(t);
  return r ? r[1] ? r[1] === e : n(r[2]) : !1;
}
function Af(t) {
  return xf.test(t);
}
function Zo() {
  return !1;
}
function Vf(t) {
  return t.startsWith("url(");
}
function fi(t) {
  return Number.isInteger(Number(t));
}
function kf(t) {
  return Tf.test(t);
}
function Ef() {
  var t = B("colors"), e = B("spacing"), n = B("blur"), r = B("brightness"), i = B("borderColor"), s = B("borderRadius"), o = B("borderSpacing"), a = B("borderWidth"), l = B("contrast"), u = B("grayscale"), c = B("hueRotate"), d = B("invert"), f = B("gap"), h = B("gradientColorStops"), m = B("gradientColorStopPositions"), p = B("inset"), y = B("margin"), b = B("opacity"), v = B("padding"), g = B("saturate"), w = B("scale"), C = B("sepia"), V = B("skew"), A = B("space"), T = B("translate"), D = function() {
    return ["auto", "contain", "none"];
  }, S = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, L = function() {
    return ["auto", k, e];
  }, P = function() {
    return [k, e];
  }, W = function() {
    return ["", it];
  }, F = function() {
    return ["auto", Ot, k];
  }, E = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, M = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, G = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, rt = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, _ = function() {
    return ["", "0", k];
  }, zt = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, O = function() {
    return [Ot, xe];
  }, st = function() {
    return [Ot, k];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Jt],
      spacing: [it],
      blur: ["none", "", mt, k],
      brightness: O(),
      borderColor: [t],
      borderRadius: ["none", "", "full", mt, k],
      borderSpacing: P(),
      borderWidth: W(),
      contrast: O(),
      grayscale: _(),
      hueRotate: st(),
      invert: _(),
      gap: P(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Mf, Sn],
      inset: L(),
      margin: L(),
      opacity: O(),
      padding: P(),
      saturate: O(),
      scale: O(),
      sepia: _(),
      skew: st(),
      space: P(),
      translate: P()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", k]
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
        columns: [mt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": zt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": zt()
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
        object: [].concat(E(), [k])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
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
        z: ["auto", Qt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
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
        flex: ["1", "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: _()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: _()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Qt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Jt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Qt]
        }, k]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Jt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Qt]
        }, k]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", k]
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
        justify: ["normal"].concat(rt())
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
        content: ["normal"].concat(rt(), ["baseline"])
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
        "place-content": [].concat(rt(), ["baseline"])
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
        "space-x": [A]
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
        "space-y": [A]
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
        w: ["auto", "min", "max", "fit", k, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", k, it]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [mt]
        }, mt, k]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [k, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", k, it]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [k, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", mt, Sn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", xe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Jt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ot, xe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, it]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", k]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", k]
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
        decoration: ["auto", "from-font", it]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", k, it]
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
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
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
        content: ["none", k]
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
        bg: [].concat(E(), [Cf])
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
        bg: ["auto", "cover", "contain", Pf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Sf]
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
        "outline-offset": [k, it]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [it]
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
        ring: W()
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
        "ring-offset": [it]
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
        shadow: ["", "inner", "none", mt, Df]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Jt]
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
        "mix-blend": G()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        "drop-shadow": ["", "none", mt, k]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: st()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: st()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", k]
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
        rotate: [Qt, k]
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
        "skew-x": [V]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [V]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        "will-change": ["auto", "scroll", "contents", "transform", k]
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
        stroke: [it, xe]
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
var Of = /* @__PURE__ */ vf(Ef);
function ot(...t) {
  return Of(rf(t));
}
const Zn = Rt(null);
function _f({ children: t, className: e }) {
  const [n, r] = Dn(!1), i = () => r((o) => !o), s = Z(null);
  return nf(s, () => r(!1)), /* @__PURE__ */ j(Zn.Provider, { value: { isOpen: n, toggle: i }, children: /* @__PURE__ */ j("div", { className: ot(" relative", e), ref: s, children: t }) });
}
const zf = ({ children: t, className: e }) => {
  const n = z(Zn);
  if (!n)
    throw new Error("PopoverTrigger must be used within a Popover");
  const { toggle: r } = n;
  return /* @__PURE__ */ j("div", { onClick: r, className: ot("cursor-pointer", e), children: t });
}, Yf = ({
  children: t,
  className: e,
  isAnimate: n = !0,
  variants: r
}) => {
  const i = z(Zn);
  if (!i)
    throw new Error("PopoverContent must be used within a Popover");
  const { isOpen: s, toggle: o } = i;
  if (!s)
    return null;
  if (!gi(t))
    throw new Error(
      "PopoverContent expects a valid React element as its child."
    );
  const l = n ? r || {
    initial: { opacity: 0, y: "20%" },
    animate: { opacity: 1, y: "5%" },
    exit: { opacity: 0, y: "-20%" },
    transition: { duration: 0.2 }
  } : {};
  return n ? /* @__PURE__ */ j(vc, { children: s && /* @__PURE__ */ j(
    uc.div,
    {
      className: ot(" absolute translate-y-2 shadow-sm", e),
      ...l,
      children: cn(t, { toggle: o })
    }
  ) }) : /* @__PURE__ */ j("div", { className: ot("absolute translate-y-2 shadow-sm", e), children: cn(t, { toggle: o }) });
}, Hf = ({ time: t }) => /* @__PURE__ */ ln("button", { className: "inline-flex items-center justify-start w-[200px] px-3 py-2 text-sm font-medium bg-background border border-input rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground", children: [
  /* @__PURE__ */ j(Tc, { className: "w-4 h-4 mr-2" }),
  /* @__PURE__ */ j("span", { children: ef(t) })
] });
function qf(t) {
  if (t instanceof Date)
    return {
      hour: parseInt(kt(t, "hh")),
      // Extract 12-hour format hour
      minute: parseInt(kt(t, "mm")),
      period: kt(t, "a")
      // AM/PM
    };
  if (typeof t == "string")
    try {
      const e = jd(t);
      return {
        hour: parseInt(kt(e, "hh")),
        minute: parseInt(kt(e, "mm")),
        period: kt(e, "a")
      };
    } catch (e) {
      throw console.log(e), new Error("Invalid date string");
    }
  else if (typeof t == "object" && "hour" in t && "minute" in t && "period" in t)
    return t;
  throw new Error("Invalid time input");
}
function Rf(t) {
  return typeof t == "object" && t !== null && "hour" in t && "minute" in t && "period" in t;
}
function Lf(t) {
  const [e, n] = Dn(() => {
    if (Rf(t))
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
  }), r = vt((l) => {
    n((u) => ({ ...u, hour: l % 12 || 12 }));
  }, []), i = vt((l) => {
    n((u) => ({ ...u, minute: l % 60 }));
  }, []), s = vt((l) => {
    n((u) => ({ ...u, period: l }));
  }, []), o = vt(
    (l) => {
      const u = parseInt(l, 10);
      return u >= 1 && u <= 12 ? u : e.hour;
    },
    [e.hour]
  ), a = vt(
    (l) => {
      const u = parseInt(l, 10);
      return u >= 0 && u <= 59 ? u : e.minute;
    },
    [e.minute]
  );
  return { time: e, setHour: r, setMinute: i, setPeriod: s, validateHour: o, validateMinute: a };
}
const Kf = ({
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
}) => {
  const { time: f, setHour: h, setMinute: m, setPeriod: p, validateHour: y, validateMinute: b } = Lf(t), v = Z(null), g = Z(null), w = Z(null), C = (S) => {
    const L = y(S.target.value);
    h(L), e({ ...f, hour: L });
  }, V = (S) => {
    const L = b(S.target.value);
    m(L), e({ ...f, minute: L });
  }, A = () => {
    const S = f.period === "AM" ? "PM" : "AM";
    p(S), e({ ...f, period: S });
  }, T = (S, L, P, W, F, E) => {
    let M = L;
    S.key === "ArrowUp" ? (S.preventDefault(), M = L === W ? P : L + 1) : S.key === "ArrowDown" ? (S.preventDefault(), M = L === P ? W : L - 1) : S.key === "Enter" && (S.preventDefault(), S.target.blur()), F(M), e({ ...f, [E]: M });
  }, D = (S, L, P, W, F, E, M = !1) => {
    const G = () => {
      if (M)
        A();
      else {
        const _ = S === P ? L : S + 1;
        W(_), e({ ...f, [E]: _ });
      }
    }, rt = () => {
      if (M)
        A();
      else {
        const _ = S === L ? P : S - 1;
        W(_), e({ ...f, [E]: _ });
      }
    };
    return /* @__PURE__ */ ln("div", { className: ot("flex flex-col items-center", s), children: [
      /* @__PURE__ */ j(
        Ff,
        {
          handleIncrement: G,
          isPeriod: M,
          buttonClassName: i,
          incrementIcon: l
        },
        E
      ),
      M ? /* @__PURE__ */ j(
        Bf,
        {
          value: S,
          periodToggleClassName: a,
          ref: F,
          handlePeriodChange: A
        }
      ) : /* @__PURE__ */ j(
        Nf,
        {
          value: S,
          ref: F,
          min: L,
          max: P,
          inputClassName: o,
          setter: W,
          handleKeyDown: T,
          handleChange: E === "hour" ? C : V
        },
        E
      ),
      /* @__PURE__ */ j(
        If,
        {
          handleDecrement: rt,
          isPeriod: M,
          decrementIcon: u
        },
        E
      )
    ] });
  };
  return /* @__PURE__ */ ln(
    "div",
    {
      className: ot(
        "inline-flex items-center p-4 space-x-4 border rounded-md shadow-sm bg-background border-input",
        r
      ),
      children: [
        D(f.hour, 1, 12, h, v, "hour"),
        /* @__PURE__ */ j("div", { className: "text-2xl font-semibold", children: ":" }),
        D(f.minute, 0, 59, m, g, "minute"),
        D(f.period, 0, 1, () => {
        }, w, "period", !0),
        /* @__PURE__ */ j(
          jf,
          {
            toggle: n,
            closeButtonClassName: c,
            closeIcon: d
          }
        )
      ]
    }
  );
}, Ff = ({
  handleIncrement: t,
  isPeriod: e,
  key: n,
  buttonClassName: r,
  incrementIcon: i = xc
}) => /* @__PURE__ */ j(
  "button",
  {
    onClick: t,
    className: ot("p-1 rounded-md hover:bg-muted", r),
    "aria-label": `Increment ${e ? "period" : n}`,
    children: /* @__PURE__ */ j(i, { className: "w-4 h-4" })
  }
), If = ({
  handleDecrement: t,
  isPeriod: e,
  key: n,
  buttonClassName: r,
  decrementIcon: i = wc
}) => /* @__PURE__ */ j(
  "button",
  {
    onClick: t,
    className: ot("p-1 rounded-md hover:bg-muted", r),
    "aria-label": `Increment ${e ? "period" : n}`,
    children: /* @__PURE__ */ j(i, { className: "w-4 h-4" })
  }
), Bf = ({
  value: t,
  ref: e,
  handlePeriodChange: n,
  periodToggleClassName: r
}) => /* @__PURE__ */ j(
  "button",
  {
    ref: e,
    className: ot(
      "flex items-center justify-center w-12 h-12 text-2xl font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
      r
    ),
    onClick: n,
    tabIndex: 0,
    "aria-label": "Toggle AM/PM",
    children: t
  }
), Nf = ({
  value: t,
  ref: e,
  key: n,
  min: r,
  max: i,
  setter: s,
  handleKeyDown: o,
  handleChange: a,
  inputClassName: l
}) => /* @__PURE__ */ j(
  "input",
  {
    ref: e,
    type: "text",
    value: t.toString().padStart(2, "0"),
    onChange: a,
    onKeyDown: (u) => o(u, t, r, i, s, n),
    className: ot(
      "w-12 h-12 text-2xl font-semibold text-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-background",
      l
    ),
    "aria-label": `Edit ${n}`
  }
), jf = ({
  toggle: t,
  closeIcon: e = Pc,
  // Default to the X icon from lucide-react
  closeButtonClassName: n
}) => /* @__PURE__ */ j(
  "button",
  {
    className: ot(
      "absolute p-1 rounded-full top-1 right-1 hover:bg-muted",
      n
    ),
    title: "Close",
    onClick: () => t == null ? void 0 : t(),
    children: /* @__PURE__ */ j(e, { size: 16 })
  }
);
export {
  _f as Popover,
  Hf as PopoverButton,
  Yf as PopoverContent,
  zf as PopoverTrigger,
  Kf as TimePicker,
  ot as cn,
  ef as formatTime,
  qf as parseTimeInput,
  nf as useClickOutside,
  Lf as useTimePicker
};
