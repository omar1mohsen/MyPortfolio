"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _bi = require("react-icons/bi");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ScrollTopBtn() {
  (0, _react.useEffect)(function () {
    window.addEventListener("scroll", scrollFunction);
  }, []);
  var scrollFunction = function scrollFunction() {
    var mybutton = document.getElementById("btn-back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton === null || mybutton === void 0 || mybutton.classList.remove("hide");
    } else {
      mybutton === null || mybutton === void 0 || mybutton.classList.add("hide");
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  function ScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: ScrollTop,
    type: "button",
    className: "scrollBtnTop hide",
    id: "btn-back-to-top"
  }, /*#__PURE__*/_react.default.createElement(_bi.BiUpArrowAlt, {
    className: "icon"
  }));
}
var _default = ScrollTopBtn;
exports.default = _default;