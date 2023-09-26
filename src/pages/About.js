"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function About() {
  var skills = ["ADOBE XD", "HTML5", "CSS", "BOOTSTRAP", "TAILWIND", "SCSS", "JAVASCRIPT", "TYPESCRIPT", "PHP", "REACT", "NEXT JS", "REACT HOOKS", "FIREBASE", "REDUX", "GIT", "GITHUB", "MUI", "RECOIL", "FORMIK", "SEO"];
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "about",
    className: "sec aboutsec"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "sec-title"
  }, "ABOUT ME"), /*#__PURE__*/_react.default.createElement("p", {
    className: "sec-dec"
  }, "Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"), /*#__PURE__*/_react.default.createElement("div", {
    className: "about-contanier"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-side"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Get to know me!"), /*#__PURE__*/_react.default.createElement("p", {
    className: "about-dec"
  }, "I'm a ", /*#__PURE__*/_react.default.createElement("span", {
    className: "main-word"
  }, "Frontend Web Developer"), " ", "building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the ", /*#__PURE__*/_react.default.createElement("span", {
    className: "main-word"
  }, "Projects"), " section."), /*#__PURE__*/_react.default.createElement("p", {
    className: "about-dec"
  }, "I also like sharing content related to the stuff that I have learned over the years in ", /*#__PURE__*/_react.default.createElement("span", {
    className: "main-word"
  }, "Web Development"), " ", "so it can help other people of the Dev Community. Feel free to Connect or Follow me on my", " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com/in/omar-mohsen-5547a7281/",
    target: "_blank",
    rel: "noreferrer"
  }, "Linkedin"), "where I post useful content related to Web Development and Programming"), /*#__PURE__*/_react.default.createElement("p", {
    className: "about-dec"
  }, "I'm open to ", /*#__PURE__*/_react.default.createElement("span", {
    className: "main-word"
  }, "Job"), " opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to ", /*#__PURE__*/_react.default.createElement("span", {
    className: "main-word"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#contact"
  }, "contact")), " me.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-side"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "My Skills"), /*#__PURE__*/_react.default.createElement("div", {
    className: "skills-contanier"
  }, skills.map(function (skill, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: "skill-item"
    }, skill);
  })))));
}
var _default = About;
exports.default = _default;