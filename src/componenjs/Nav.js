"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));
var _Logo = _interopRequireDefault(require("./Logo"));
var _ai = require("react-icons/ai");
var _bs = require("react-icons/bs");
var _si = require("react-icons/si");
var _bi = require("react-icons/bi");
var _fa = require("react-icons/fa");
var _ThemBtn = _interopRequireDefault(require("./ThemBtn"));
var _SocialNav = _interopRequireDefault(require("./SocialNav"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Nav() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var handleClose = function handleClose() {
    setOpen(!open);
  };
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "nav",
    id: "nav"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null), /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav-list ".concat(open && 'activeList')
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    className: "navLogo"
  }), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_ai.AiFillHome, {
    className: "icon"
  }), "  Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#about",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_bs.BsInfoSquareFill, {
    className: "icon"
  }), " About")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#projects",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_si.SiTestrail, {
    className: "icon"
  }), " Projects")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#contact",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_bi.BiSolidContact, {
    className: "icon"
  }), " Contact")), /*#__PURE__*/_react.default.createElement(_ThemBtn.default, null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("span", null, "Find me There ", /*#__PURE__*/_react.default.createElement(_fa.FaHandPointDown, {
    className: "icon"
  })), /*#__PURE__*/_react.default.createElement(_SocialNav.default, {
    className: "scoialNav"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "burger-btn ".concat(open && 'activeBtn'),
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement(_ProgressBar.default, null));
}
var _default = Nav;
exports.default = _default;