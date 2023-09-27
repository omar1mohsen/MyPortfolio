"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SocialNav = _interopRequireDefault(require("../components/SocialNav"));
var _ai = require("react-icons/ai");
var _bs = require("react-icons/bs");
var _reactScroll = require("react-scroll");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Home() {
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "home",
    className: "herosec"
  }, /*#__PURE__*/_react.default.createElement(_SocialNav.default, {
    className: "sideNav"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "left-side"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: require("../assets/smallHero-.png"),
    alt: "developerImage"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "HEY, I'M Omar mohsen"), /*#__PURE__*/_react.default.createElement("h1", null, "HEY, I'M Omar mohsen")), /*#__PURE__*/_react.default.createElement("h3", null, "Frontend Developer"), /*#__PURE__*/_react.default.createElement("p", null, "Highly skilled Frontend Web Developer creating exceptional user experiences. Committed to delivering visually stunning, user-friendly websites and web applications that drive product success."), /*#__PURE__*/_react.default.createElement("div", {
    className: "bottom-side"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "./files/Omar Mohsen.pdf",
    download: "Omar Mohsen.pdf",
    className: "btn resumeBtn",
    rel: "noreferrer"
  }, "Download Resume", /*#__PURE__*/_react.default.createElement(_ai.AiOutlineArrowDown, {
    className: "btn-arrow"
  })), /*#__PURE__*/_react.default.createElement(_reactScroll.Link, {
    smooth: true,
    offset: 5,
    duration: 500,
    spy: true,
    to: "about",
    className: "btn"
  }, "About me", /*#__PURE__*/_react.default.createElement(_bs.BsInfoCircleFill, {
    className: "info-btn"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-side"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: require("../assets/heroImage.png"),
    alt: "developerImage"
  })));
}
var _default = Home;
exports.default = _default;