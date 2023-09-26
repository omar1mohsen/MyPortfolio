"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Home = _interopRequireDefault(require("./pages/Home.tsx"));
var _Nav = _interopRequireDefault(require("./components/Nav.tsx"));
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Nav.default, null), /*#__PURE__*/_react.default.createElement(_Home.default, null));
}
var _default = App;
exports.default = _default;