"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var InstaEmbed = function InstaEmbed(_ref) {
  var image = _ref.image;
  return _react["default"].createElement("div", {
    className: "podcasts"
  }, _react["default"].createElement("h2", null, "Instagram"), _react["default"].createElement("iframe", {
    src: "https://www.instagram.com/p/BoKe0X7hD0d/embed/",
    style: {
      width: '600px',
      height: '802px',
      border: '0 none'
    },
    scrolling: "no"
  }));
};

var _default = InstaEmbed;
exports["default"] = _default;