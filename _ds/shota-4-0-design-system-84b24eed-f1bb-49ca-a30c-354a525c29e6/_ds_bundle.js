/* @ds-bundle: {"format":3,"namespace":"DesignSystem_84b24e","components":[{"name":"CarpetDivider","sourcePath":"components/brand/CarpetDivider.jsx"},{"name":"Countdown","sourcePath":"components/brand/Countdown.jsx"},{"name":"StampIcon","sourcePath":"components/brand/StampIcon.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/CarpetDivider.jsx":"60b2c3115c2b","components/brand/Countdown.jsx":"ce831f91604a","components/brand/StampIcon.jsx":"29eb9acd1761","components/core/Button.jsx":"b4ac4a8d2416","components/core/Card.jsx":"25870c7cb537","components/core/Field.jsx":"695d0d44e35c","components/core/Tag.jsx":"832eea5c245c","ui_kits/invitation/App.jsx":"5fd4c98706ef","ui_kits/invitation/Hero.jsx":"988f3e426c69","ui_kits/invitation/RouteSection.jsx":"0a662cdc45f0","ui_kits/invitation/RsvpSection.jsx":"f2bf42e82366","ui_kits/invitation/SiteChrome.jsx":"76b598067ec5","ui_kits/invitation/SupraSection.jsx":"85ff7a88f4c4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_84b24e = window.DesignSystem_84b24e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/CarpetDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CarpetDivider — a woven stepped-diamond band used to separate sections.
 * Tintable via `color`; tiles horizontally as a CSS mask.
 */
function CarpetDivider({
  color = 'var(--ink-900)',
  height = 40,
  basePath = 'assets/motifs',
  ...rest
}) {
  const url = `${basePath}/divider-carpet.png`;
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      width: '100%',
      height,
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: 'repeat-x',
      maskRepeat: 'repeat-x',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: `auto 100%`,
      maskSize: `auto 100%`
    }
  }, rest));
}
Object.assign(__ds_scope, { CarpetDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/CarpetDivider.jsx", error: String((e && e.message) || e) }); }

// components/brand/Countdown.jsx
try { (() => {
const {
  useEffect,
  useState
} = React;
function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hrs: Math.floor(s % 86400 / 3600),
    min: Math.floor(s % 3600 / 60),
    sec: s % 60
  };
}
const pad = n => String(n).padStart(2, '0');

/**
 * Countdown — mono date-counter to the trip. Big orange digits on whatever
 * surface it sits on; respects the "dates as data" rule.
 */
function Countdown({
  target = '2026-10-31T00:00:00+04:00',
  onInk = false,
  showSeconds = false
}) {
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  const fg = onInk ? 'var(--on-ink-muted)' : 'var(--text-muted)';
  const units = [['days', t.days], ['hrs', t.hrs], ['min', t.min], ...(showSeconds ? [['sec', t.sec]] : [])];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'baseline',
      fontFamily: 'var(--font-mono)'
    }
  }, units.map(([label, val], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 22
    }
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)',
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 1
    }
  }, ":"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(34px, 6vw, 52px)',
      fontWeight: 700,
      lineHeight: 1,
      color: 'var(--orange-500)'
    }
  }, pad(val)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: fg,
      marginTop: 6
    }
  }, label)))));
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/brand/StampIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STAMPS = ['supra-woman-cup', 'supra-man-jug', 'supra-toast', 'supra-host', 'deer', 'deer-flower', 'hunter-horse', 'dancing-dog'];

/**
 * StampIcon — a single-color folk woodcut figure, tinted to any color.
 * Rendered as a CSS mask over `color`, so it inherits like text.
 */
function StampIcon({
  name = 'deer',
  size = 48,
  color = 'var(--ink-900)',
  basePath = 'assets/stamps',
  title,
  ...rest
}) {
  const url = `${basePath}/${name}.png`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title || name,
    style: {
      display: 'inline-block',
      width: size,
      height: Math.round(size * 1.25),
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain'
    }
  }, rest));
}
StampIcon.names = STAMPS;
Object.assign(__ds_scope, { StampIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StampIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Button — brutalist "stamp" button. Hard offset shadow, presses toward
 * the shadow on click. Variants: primary (orange), secondary (ink outline),
 * ghost. The system's primary call-to-action.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  leadingStamp,
  as = 'button',
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const pads = {
    sm: '8px 14px',
    md: '12px 22px',
    lg: '16px 30px'
  };
  const fonts = {
    sm: 13,
    md: 15,
    lg: 17
  };
  const palette = {
    primary: {
      bg: 'var(--orange-500)',
      bgHover: 'var(--orange-600)',
      fg: 'var(--on-brand)',
      border: 'var(--ink-900)'
    },
    secondary: {
      bg: 'var(--surface-card)',
      bgHover: 'var(--concrete-50)',
      fg: 'var(--ink-900)',
      border: 'var(--ink-900)'
    },
    ink: {
      bg: 'var(--ink-900)',
      bgHover: 'var(--ink-700)',
      fg: 'var(--on-ink)',
      border: 'var(--ink-900)'
    }
  };
  const p = palette[variant === 'ghost' ? 'secondary' : variant] || palette.primary;
  const shadowOn = press ? '2px 2px 0 0 var(--ink-900)' : hover ? '7px 7px 0 0 var(--ink-900)' : '5px 5px 0 0 var(--ink-900)';
  const translate = press ? 'translate(3px,3px)' : hover ? 'translate(-2px,-2px)' : 'none';
  const Tag = as;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'var(--font-head)',
    fontWeight: 800,
    fontSize: fonts[size],
    lineHeight: 1,
    letterSpacing: '0.01em',
    padding: pads[size],
    color: disabled ? 'var(--ink-400)' : p.fg,
    background: disabled ? 'var(--concrete-200)' : hover ? p.bgHover : variant === 'ghost' ? 'transparent' : p.bg,
    border: `2px solid ${disabled ? 'var(--concrete-300)' : p.border}`,
    borderRadius: 'var(--radius-none)',
    boxShadow: disabled ? 'none' : variant === 'ghost' && !hover ? 'none' : shadowOn,
    transform: disabled ? 'none' : translate,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--dur-fast) var(--ease-block), box-shadow var(--dur-fast) var(--ease-block), background var(--dur-fast)',
    textTransform: 'none',
    userSelect: 'none'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => !disabled && setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), leadingStamp && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 22,
      flex: 'none',
      background: 'currentColor',
      WebkitMaskImage: `url(${leadingStamp})`,
      maskImage: `url(${leadingStamp})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain'
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Card — two kinds, per the system's structure/image split.
 *   variant="structure" → concrete/ink fill, 0px corners, 2px ink border,
 *                          hard offset shadow that lifts on hover.
 *   variant="photo"     → 14px corners, no border, soft shadow, image zoom on hover.
 */
function Card({
  children,
  variant = 'structure',
  tone = 'concrete',
  image,
  caption,
  interactive = false,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  if (variant === 'photo') {
    return /*#__PURE__*/React.createElement("figure", _extends({
      style: {
        margin: 0,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-photo)',
        boxShadow: hover ? 'var(--shadow-photo)' : 'var(--shadow-photo-sm)',
        transition: 'box-shadow var(--dur-base) var(--ease-block)'
      },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false)
    }, rest), /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: caption || '',
      style: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'saturate(1.08) contrast(1.04) sepia(0.10)',
        transform: hover ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform var(--dur-base) var(--ease-block)'
      }
    }), caption && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: '14px 16px',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--folk-white)',
        background: 'linear-gradient(transparent, rgba(20,18,15,0.78))'
      }
    }, caption), children);
  }
  const fills = {
    concrete: {
      bg: 'var(--surface-card)',
      fg: 'var(--text-body)'
    },
    ink: {
      bg: 'var(--surface-ink)',
      fg: 'var(--on-ink)'
    },
    orange: {
      bg: 'var(--surface-brand)',
      fg: 'var(--on-brand)'
    }
  };
  const f = fills[tone] || fills.concrete;
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: f.bg,
      color: f.fg,
      border: '2px solid var(--ink-900)',
      borderRadius: 'var(--radius-none)',
      padding: '24px',
      boxShadow: lift ? '7px 7px 0 0 var(--ink-900)' : '5px 5px 0 0 var(--ink-900)',
      transform: lift ? 'translate(-2px,-2px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-block), box-shadow var(--dur-fast) var(--ease-block)',
      cursor: interactive ? 'pointer' : 'default'
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Field — text input / textarea with a mono uppercase label. Sharp 3px corners,
 * ink border that turns orange on focus.
 */
function Field({
  label,
  hint,
  type = 'text',
  textarea = false,
  id,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const control = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    color: 'var(--text-strong)',
    background: 'var(--surface-raised)',
    border: `2px solid ${focus ? 'var(--orange-500)' : 'var(--ink-900)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '11px 13px',
    outline: 'none',
    boxShadow: focus ? '3px 3px 0 0 var(--orange-500)' : 'none',
    transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast) var(--ease-block)',
    resize: textarea ? 'vertical' : undefined
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 7,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), textarea ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: 4,
    style: control,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    style: control,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a folk pill label. Mono uppercase, full-radius. Use for trip legs,
 * status, and metadata. Tones map to folk + status tokens.
 */
function Tag({
  children,
  tone = 'ink',
  solid = false,
  ...rest
}) {
  const tones = {
    ink: {
      c: 'var(--ink-900)'
    },
    orange: {
      c: 'var(--orange-600)'
    },
    blue: {
      c: 'var(--folk-blue)'
    },
    green: {
      c: 'var(--folk-green)'
    },
    ochre: {
      c: 'var(--folk-ochre)'
    },
    red: {
      c: 'var(--folk-red)'
    }
  };
  const t = tones[tone] || tones.ink;
  const style = solid ? {
    background: t.c,
    color: 'var(--folk-white)',
    border: `2px solid ${t.c}`
  } : {
    background: 'transparent',
    color: t.c,
    border: `2px solid ${t.c}`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/App.jsx
try { (() => {
function App() {
  function go(id) {
    if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 58;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.TopBar, {
    go: go
  }), /*#__PURE__*/React.createElement(window.Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(window.RouteSection, null), /*#__PURE__*/React.createElement(window.SupraSection, null), /*#__PURE__*/React.createElement(window.RsvpSection, null), /*#__PURE__*/React.createElement(window.SiteFooter, null));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/Hero.jsx
try { (() => {
const {
  Button: HButton,
  Tag: HTag,
  Countdown: HCountdown
} = window.DesignSystem_84b24e;
const HASSET = '../../assets';
function Hero({
  rsvp,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--orange-500)',
      color: 'var(--on-brand)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.Grain, {
    opacity: 0.55
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 'var(--space-7)',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(HTag, {
    tone: "ink",
    solid: true
  }, "The 40th"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--autumn-cream)'
    }
  }, "Georgia + Armenia \xB7 Autumn")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'var(--text-hero)',
      lineHeight: 0.86,
      letterSpacing: '0.01em',
      margin: '0 0 22px',
      color: 'var(--folk-white)',
      textShadow: '4px 4px 0 var(--ink-900)'
    }
  }, "Shota 4.0"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 21,
      lineHeight: 1.4,
      maxWidth: '30ch',
      margin: '0 0 28px',
      color: 'var(--autumn-cream)',
      fontWeight: 500
    }
  }, "Eleven friends. One fortieth. A road through the gold \u2014 Tbilisi, the Kazbegi mountains, and over to Yerevan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 18,
      padding: '20px 24px',
      background: 'var(--ink-900)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--on-ink-muted)'
    }
  }, "Wheels up 31.OCT \u2014 in"), /*#__PURE__*/React.createElement(HCountdown, {
    target: "2026-10-31T00:00:00+04:00",
    onInk: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "ink",
    size: "lg",
    leadingStamp: `${HASSET}/stamps/supra-man-jug.png`,
    onClick: () => go('rsvp')
  }, "Count me in"), /*#__PURE__*/React.createElement(HButton, {
    variant: "secondary",
    size: "lg",
    onClick: () => go('route')
  }, "See the route"))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: 'relative',
      alignSelf: 'stretch',
      minHeight: 460,
      background: 'var(--ink-900)',
      border: '3px solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${HASSET}/photos/brutalism-orange.png`,
    alt: "Soviet brutalist monument",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      mixBlendMode: 'luminosity',
      filter: 'grayscale(1) contrast(1.15)',
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement(window.Grain, {
    opacity: 0.4
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      padding: '14px 16px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--folk-white)',
      background: 'linear-gradient(transparent, rgba(20,18,15,0.85))'
    }
  }, "Bank of Georgia HQ \xB7 Tbilisi \xB7 1975"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/RouteSection.jsx
try { (() => {
const {
  Tag: RTag,
  Card: RCard,
  StampIcon: RStamp,
  CarpetDivider: RDivider
} = window.DesignSystem_84b24e;
const RASSET = '../../assets';
const {
  useState: useStateR
} = React;
const LEGS = [{
  id: 'tbilisi',
  tone: 'blue',
  tag: 'Days 1–2',
  name: 'Tbilisi',
  sub: 'Sulfur baths & old-town balconies',
  photo: `${RASSET}/photos/tbilisi-balcony.png`,
  cap: 'Old Tbilisi at sunset',
  body: 'We land, we soak in the sulfur baths, we eat our weight in khachapuri on a vine-wrapped balcony over the river. The warm-up supra.',
  stamp: 'supra-host'
}, {
  id: 'kazbegi',
  tone: 'ochre',
  tag: 'Days 3–4',
  name: 'Kazbegi',
  sub: 'The mountain drive north',
  photo: `${RASSET}/photos/autumn-road.png`,
  cap: 'The Georgian Military Road',
  body: 'North up the Military Road through the gold, switchbacks and church-on-a-hill drama, to Gergeti under Mount Kazbek. Cold air, big quiet.',
  stamp: 'deer'
}, {
  id: 'yerevan',
  tone: 'red',
  tag: 'Day 5',
  name: 'Yerevan',
  sub: 'Over the border for the feast',
  photo: `${RASSET}/photos/gabriadze-tower.png`,
  cap: 'Clock tower · Tbilisi',
  body: 'Back through Tbilisi and across to Yerevan for the proper birthday supra. Brandy, toasts, the works. Forty done right.',
  stamp: 'supra-toast'
}];
function StatBlock({
  num,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderRight: '1px solid var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1,
      color: 'var(--orange-400)'
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--on-ink-muted)',
      marginTop: 8
    }
  }, label));
}
function RouteSection() {
  const [active, setActive] = useStateR('tbilisi');
  const leg = LEGS.find(l => l.id === active);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    id: "plan",
    style: {
      background: 'var(--ink-900)',
      color: 'var(--on-ink)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.Grain, {
    opacity: 0.35
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter)',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(RStamp, {
    name: "hunter-horse",
    size: 46,
    color: "var(--orange-400)",
    basePath: `${RASSET}/stamps`
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 900,
      fontSize: 'clamp(28px,4vw,44px)',
      margin: 0,
      textTransform: 'none',
      color: 'var(--folk-white)'
    }
  }, "The plan, briefly")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--ink-700)',
      borderBottom: '1px solid var(--ink-700)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    num: "5",
    label: "Days on the road"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    num: "3",
    label: "Cities"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    num: "2",
    label: "Countries"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    num: "1",
    label: "Fortieth"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '60ch',
      marginTop: 26,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--autumn-cream)'
    }
  }, "Late October into early November. You bring a warm coat and an empty stomach; we handle the cars, the houses and the toasts. The only job you have is showing up."))), /*#__PURE__*/React.createElement(RDivider, {
    color: "var(--orange-500)",
    height: 32,
    basePath: `${RASSET}/motifs`
  }), /*#__PURE__*/React.createElement("section", {
    id: "route",
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "The route"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 900,
      fontSize: 'clamp(30px,5vw,52px)',
      margin: '8px 0 28px',
      color: 'var(--text-strong)'
    }
  }, "Three stops, one road"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, LEGS.map(l => {
    const on = l.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: l.id,
      onClick: () => setActive(l.id),
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 16,
        padding: '10px 18px',
        color: on ? 'var(--on-brand)' : 'var(--ink-900)',
        background: on ? 'var(--orange-500)' : 'transparent',
        border: '2px solid var(--ink-900)',
        boxShadow: on ? '4px 4px 0 0 var(--ink-900)' : 'none',
        transform: on ? 'translate(-1px,-1px)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        opacity: 0.8
      }
    }, String(LEGS.indexOf(l) + 1).padStart(2, '0')), l.name);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(RCard, {
    variant: "photo",
    image: leg.photo,
    caption: leg.cap
  }), /*#__PURE__*/React.createElement(RCard, {
    variant: "structure",
    tone: "concrete"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RTag, {
    tone: leg.tone
  }, leg.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 900,
      fontSize: 34,
      margin: '14px 0 4px',
      color: 'var(--text-strong)'
    }
  }, leg.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, leg.sub)), /*#__PURE__*/React.createElement(RStamp, {
    name: leg.stamp,
    size: 64,
    color: "var(--orange-500)",
    basePath: `${RASSET}/stamps`
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      margin: 0,
      color: 'var(--text-body)'
    }
  }, leg.body))))));
}
window.RouteSection = RouteSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/RouteSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/RsvpSection.jsx
try { (() => {
const {
  Button: VButton,
  Field: VField,
  StampIcon: VStamp,
  CarpetDivider: VDivider
} = window.DesignSystem_84b24e;
const VASSET = '../../assets';
const {
  useState: useStateV
} = React;
function RsvpSection() {
  const [answer, setAnswer] = useStateV('in');
  const [sent, setSent] = useStateV(false);
  const [name, setName] = useStateV('');
  if (sent) {
    return /*#__PURE__*/React.createElement("section", {
      id: "rsvp",
      style: {
        background: 'var(--orange-500)',
        color: 'var(--on-brand)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(window.Grain, {
      opacity: 0.5
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-narrow)',
        margin: '0 auto',
        padding: 'var(--space-10) var(--gutter)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement(VStamp, {
      name: answer === 'in' ? 'supra-toast' : 'deer',
      size: 96,
      color: "var(--ink-900)",
      basePath: `${VASSET}/stamps`
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        textTransform: 'uppercase',
        fontSize: 'clamp(40px,7vw,76px)',
        lineHeight: 0.9,
        margin: '18px 0 14px',
        color: 'var(--folk-white)',
        textShadow: '3px 3px 0 var(--ink-900)'
      }
    }, answer === 'in' ? 'Gaumarjos!' : 'We’ll miss you'), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 20,
        lineHeight: 1.5,
        color: 'var(--autumn-cream)',
        maxWidth: '40ch',
        margin: '0 auto 28px'
      }
    }, answer === 'in' ? `${name ? name + ', y' : 'Y'}ou’re on the list. We’ll send the house, the cars and a packing note soon. Don’t forget the coat.` : 'Noted — the door stays open if the road calls you back. We’ll raise one in your name.'), /*#__PURE__*/React.createElement(VButton, {
      variant: "ink",
      size: "lg",
      onClick: () => setSent(false)
    }, "Edit my answer")));
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "rsvp",
    style: {
      background: 'var(--orange-500)',
      color: 'var(--on-brand)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(window.Grain, {
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--autumn-cream)'
    }
  }, "RSVP \xB7 by 15.OCT"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(44px,7vw,84px)',
      lineHeight: 0.86,
      margin: '12px 0 18px',
      color: 'var(--folk-white)',
      textShadow: '4px 4px 0 var(--ink-900)'
    }
  }, "Are you", /*#__PURE__*/React.createElement("br", null), "coming?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.5,
      maxWidth: '32ch',
      color: 'var(--autumn-cream)',
      fontWeight: 500
    }
  }, "Eleven seats, a few still open. Tell us yes and we\u2019ll do the rest.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: 'var(--ink-900)',
      padding: 'var(--space-7)',
      display: 'grid',
      gap: 20,
      border: '3px solid var(--ink-900)',
      boxShadow: '8px 8px 0 0 rgba(20,18,15,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, [['in', 'Count me in'], ['maybe', 'Maybe (coward)']].map(([val, label]) => {
    const on = answer === val;
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      key: val,
      onClick: () => setAnswer(val),
      style: {
        all: 'unset',
        cursor: 'pointer',
        flex: 1,
        textAlign: 'center',
        padding: '12px 10px',
        fontFamily: 'var(--font-head)',
        fontWeight: 800,
        fontSize: 15,
        color: on ? 'var(--on-brand)' : 'var(--on-ink-muted)',
        background: on ? 'var(--orange-500)' : 'transparent',
        border: `2px solid ${on ? 'var(--orange-500)' : 'var(--ink-600)'}`
      }
    }, label);
  })), /*#__PURE__*/React.createElement(VField, {
    label: "Your name",
    placeholder: "Who's coming?",
    value: name,
    onChange: e => setName(e.target.value),
    required: true
  }), /*#__PURE__*/React.createElement(VField, {
    label: "Heads (incl. you)",
    type: "number",
    min: "1",
    defaultValue: "1",
    placeholder: "1"
  }), /*#__PURE__*/React.createElement(VField, {
    label: "Note to Shota",
    textarea: true,
    hint: "Optional. Keep it kind."
  }), /*#__PURE__*/React.createElement(VButton, {
    type: "submit",
    variant: "primary",
    size: "lg",
    leadingStamp: `${VASSET}/stamps/supra-man-jug.png`
  }, "Send it"))));
}
window.RsvpSection = RsvpSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/RsvpSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/SiteChrome.jsx
try { (() => {
const {
  Button: DSButton,
  Tag: DSTag,
  StampIcon: DSStamp,
  CarpetDivider: DSDivider
} = window.DesignSystem_84b24e;
const ASSET = '../../assets';

// System grain overlay — drop into any colored field
function Grain({
  opacity = 0.5
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: `url(${ASSET}/textures/grain.png)`,
      backgroundRepeat: 'repeat',
      mixBlendMode: 'overlay',
      opacity
    }
  });
}
function TopBar({
  go
}) {
  const links = [['The plan', 'plan'], ['The route', 'route'], ['The supra', 'supra'], ['RSVP', 'rsvp']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--ink-900)',
      color: 'var(--on-ink)',
      borderBottom: '2px solid var(--orange-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('top'),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: 'var(--folk-white)'
    }
  }, "Shota 4.0", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      color: 'var(--orange-400)'
    }
  }, "GE \xB7 AM")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      alignItems: 'center'
    }
  }, links.map(([label, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go(id),
    style: {
      all: 'unset',
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--on-ink-muted)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--orange-400)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--on-ink-muted)'
  }, label)))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--on-ink-muted)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(DSDivider, {
    color: "var(--orange-500)",
    height: 30,
    basePath: `${ASSET}/motifs`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      color: 'var(--folk-white)',
      textTransform: 'uppercase',
      lineHeight: 0.9
    }
  }, "Gaumarjos"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      marginTop: 10
    }
  }, "TO SHOTA \xB7 TO FORTY \xB7 TO THE ROAD")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DSStamp, {
    name: "supra-toast",
    size: 44,
    color: "var(--orange-400)",
    basePath: `${ASSET}/stamps`
  }), /*#__PURE__*/React.createElement(DSStamp, {
    name: "deer",
    size: 44,
    color: "var(--on-ink-muted)",
    basePath: `${ASSET}/stamps`
  }), /*#__PURE__*/React.createElement(DSStamp, {
    name: "supra-man-jug",
    size: 44,
    color: "var(--orange-400)",
    basePath: `${ASSET}/stamps`
  }))));
}
window.Grain = Grain;
window.TopBar = TopBar;
window.SiteFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/SupraSection.jsx
try { (() => {
const {
  Tag: STag,
  StampIcon: SStamp
} = window.DesignSystem_84b24e;
const SASSET = '../../assets';
const TOASTS = [['supra-host', 'To the host', 'The tamada runs the table. Tonight, that is whoever can still stand.'], ['supra-woman-cup', 'To the absent', 'One toast for the friends who couldn’t make the road this year.'], ['deer-flower', 'To the mountains', 'For Kazbek, the gold, and the cold that earns the wine.'], ['supra-toast', 'To forty', 'The whole point. Shota, this one’s yours.']];
function SupraSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "supra",
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: 'relative',
      borderRadius: 'var(--radius-photo)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-photo)',
      border: '6px solid var(--autumn-cream)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${SASSET}/photos/cubist-family.png`,
    alt: "Cubist Georgian family",
    style: {
      display: 'block',
      width: '100%',
      filter: 'saturate(1.05) contrast(1.03)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(STag, {
    tone: "orange"
  }, "The supra"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 900,
      fontSize: 'clamp(30px,4.5vw,50px)',
      margin: '14px 0 16px',
      lineHeight: 1.02,
      color: 'var(--text-strong)'
    }
  }, "A feast with rules", /*#__PURE__*/React.createElement("br", null), "and a lot of toasts"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      maxWidth: '52ch',
      color: 'var(--text-body)',
      margin: '0 0 28px'
    }
  }, "The supra is the Georgian feast \u2014 long table, endless food, and a tamada calling toasts you\u2019re obliged to answer. Here\u2019s the running order."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 2
    }
  }, TOASTS.map(([stamp, title, body], i) => /*#__PURE__*/React.createElement("li", {
    key: title,
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      padding: '16px 0',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: i === TOASTS.length - 1 ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(SStamp, {
    name: stamp,
    size: 42,
    color: "var(--orange-600)",
    basePath: `${SASSET}/stamps`
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-head)',
      fontWeight: 800,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, body))))))));
}
window.SupraSection = SupraSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/SupraSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CarpetDivider = __ds_scope.CarpetDivider;

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.StampIcon = __ds_scope.StampIcon;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Tag = __ds_scope.Tag;

})();
