"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProjectModel;
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Modal = _interopRequireDefault(require("@mui/material/Modal"));
var _projectsData = require("../data/projectsData");
var _ri = require("react-icons/ri");
var _bs = require("react-icons/bs");
var _ai = require("react-icons/ai");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var style = {
  bgcolor: "background.paper",
  boxShadow: 24
};
function ProjectModel(_ref) {
  var open = _ref.open,
    handleClose = _ref.handleClose,
    project = _ref.project;
  return /*#__PURE__*/React.createElement(_Modal.default, {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "parent-modal-title",
    "aria-describedby": "parent-modal-description",
    className: "modal"
  }, /*#__PURE__*/React.createElement(_Box.default, {
    className: "card"
  }, /*#__PURE__*/React.createElement(_ai.AiOutlineCloseCircle, {
    onClick: handleClose,
    className: "closeBtn"
  }), /*#__PURE__*/React.createElement("div", {
    className: "left-side"
  }, /*#__PURE__*/React.createElement("img", {
    src: project.projectImage,
    alt: project.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, project.DemoLink !== "" ? /*#__PURE__*/React.createElement("a", {
    href: project.DemoLink,
    target: "_blank",
    className: "link",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement(_ri.RiSpaceShipLine, {
    className: "icon deploy-icon"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "error"
  }, "sorry :)"), /*#__PURE__*/React.createElement("a", {
    href: project.RepoLink,
    target: "_blank",
    className: "link",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement(_bs.BsGithub, {
    className: "icon"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "right-side"
  }, /*#__PURE__*/React.createElement("h2", null, project.name), /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, "Description"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, project.Description), /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, "Technologies"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
    className: "skills-contanier"
  }, project.Technologies.map(function (skill) {
    return /*#__PURE__*/React.createElement("div", {
      className: "skill-item"
    }, skill);
  })))));
}