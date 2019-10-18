"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ConditionalLink = function ConditionalLink(_ref) {
  var linkUrl = _ref.linkUrl,
      linkTarget = _ref.linkTarget,
      children = _ref.children;
  return typeof linkUrl === 'string' && linkUrl.length > 0 ? _react["default"].createElement("a", {
    href: linkUrl,
    target: linkTarget || ''
  }, children) : children;
};

ConditionalLink.propTypes = {
  linkUrl: _propTypes["default"].string,
  linkTarget: _propTypes["default"].string
};
ConditionalLink.defaultProps = {
  linkTarget: ''
};
var _default = ConditionalLink;
exports["default"] = _default;