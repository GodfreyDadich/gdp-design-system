"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var ConditionalLink = function ConditionalLink(_ref) {
  var linkUrl = _ref.linkUrl,
      linkTarget = _ref.linkTarget,
      children = _ref.children;
  return typeof linkUrl === 'string' && linkUrl.length > 0 ? _react["default"].createElement("a", {
    href: linkUrl,
    target: linkTarget || ''
  }, children) : children;
};

var _default = ConditionalLink;
exports["default"] = _default;