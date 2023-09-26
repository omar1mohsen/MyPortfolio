"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bs = require("react-icons/bs");
var _bi = require("react-icons/bi");
var _io = require("react-icons/io");
var _reactWhatsapp = _interopRequireDefault(require("react-whatsapp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SocialNav(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com/in/omar-mohsen-5547a7281/",
    target: "_blank",
    className: "socialLink",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_bs.BsLinkedin, {
    className: "linkicon linkedin"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://twitter.com/Omar07815749",
    target: "_blank",
    className: "socialLink",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_bs.BsTwitter, {
    className: "linkicon twitter"
  })), /*#__PURE__*/_react.default.createElement(_reactWhatsapp.default, {
    element: "webview" // Add the required 'element' property
    ,
    number: "+201018593554",
    message: "Hey,Omar",
    className: "socialLink"
  }, /*#__PURE__*/_react.default.createElement(_io.IoLogoWhatsapp, {
    className: "linkicon whatapp"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/omar1mohsen",
    target: "_blank",
    className: "socialLink",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_bs.BsGithub, {
    className: "linkicon github"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:omar33mohsen@gmail.com",
    target: "_blank",
    className: "socialLink",
    rel: "noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_bi.BiLogoGmail, {
    className: "linkicon gmail"
  })));
}
var _default = SocialNav;
exports.default = _default;