"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SocialNav = _interopRequireDefault(require("./SocialNav"));
var _Logo = _interopRequireDefault(require("./Logo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Footer() {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "sec footer"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "You Can Find Me There"), /*#__PURE__*/_react.default.createElement(_SocialNav.default, {
    className: "footerNav"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "secfooterNav"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#about"
  }, "About Me")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#projects"
  }, "Projects")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#contact"
  }, "Contact")))), /*#__PURE__*/_react.default.createElement("span", null, "Copyright \xA9 2023 - All rights reserved to ", /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, "OMAR")));
}
var _default = Footer;
exports.default = _default;