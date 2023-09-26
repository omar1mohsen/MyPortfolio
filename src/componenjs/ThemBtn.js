"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ThemContext = require("../context/ThemContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ThemBtn = function ThemBtn() {
  var _useContext = (0, _react.useContext)(_ThemContext.ThemeContext),
    toggleTheme = _useContext.toggleTheme;
  var handleToggleClick = function handleToggleClick() {
    toggleTheme();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "themBtn"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "toggle_checkbox",
    onClick: handleToggleClick
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "toggle_checkbox"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "star"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "star",
    id: "star-1"
  }, "\u2605"), /*#__PURE__*/_react.default.createElement("div", {
    className: "star",
    id: "star-2"
  }, "\u2605")), /*#__PURE__*/_react.default.createElement("div", {
    id: "moon"
  })));
};
var _default = ThemBtn;
exports.default = _default;