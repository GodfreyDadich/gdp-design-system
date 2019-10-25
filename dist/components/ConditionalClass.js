"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ConditionalClass = function ConditionalClass(_ref) {
  var pass = _ref.pass,
      classAdd = _ref.classAdd,
      style = _ref.style,
      children = _ref.children;
  return pass ? _react["default"].createElement("div", {
    className: classAdd,
    style: style
  }, children) : children;
};

ConditionalClass.propTypes = {
  pass: _propTypes["default"].bool,
  classAdd: _propTypes["default"].string,
  style: _propTypes["default"].object
};
var _default = ConditionalClass;
exports["default"] = _default;