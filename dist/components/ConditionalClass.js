'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalClass = function ConditionalClass(_ref) {
  var pass = _ref.pass,
      classAdd = _ref.classAdd,
      style = _ref.style,
      children = _ref.children;
  return pass ? _react2.default.createElement(
    'div',
    { className: classAdd, style: style },
    children
  ) : children;
};

exports.default = ConditionalClass;