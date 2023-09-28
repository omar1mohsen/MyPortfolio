"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Hero = _interopRequireDefault(require("./pages/Hero"));
var _Nav = _interopRequireDefault(require("./components/Nav"));
var _About = _interopRequireDefault(require("./pages/About"));
var _Projects = _interopRequireDefault(require("./pages/Projects"));
var _Contact = _interopRequireDefault(require("./pages/Contact"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _ScrollTopBtn = _interopRequireDefault(require("./components/ScrollTopBtn"));
var _ThemContext = require("./context/ThemContext");
var _Loading = _interopRequireDefault(require("./pages/Loading"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Loading.default, null), /*#__PURE__*/_react.default.createElement(_ThemContext.ThemeProvider, null, /*#__PURE__*/_react.default.createElement(_Nav.default, null), /*#__PURE__*/_react.default.createElement(_Hero.default, null), /*#__PURE__*/_react.default.createElement(_About.default, null), /*#__PURE__*/_react.default.createElement(_Projects.default, null), /*#__PURE__*/_react.default.createElement(_Contact.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null), /*#__PURE__*/_react.default.createElement(_ScrollTopBtn.default, null)));
}
var _default = App;
exports.default = _default;