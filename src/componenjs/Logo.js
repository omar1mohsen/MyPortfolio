"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Logo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("a", {
    className: "logo ".concat(className, " "),
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "logo-img",
    src: require("../assets/logoImage.png"),
    alt: "logoimage"
  }), "Omar Mohsen");
}
var _default = Logo;
exports.default = _default;