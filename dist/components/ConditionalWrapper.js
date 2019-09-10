'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalWrapper = function ConditionalWrapper(_ref) {
  var mixedOr = _ref.mixedOr,
      children = _ref.children;
  return mixedOr ? _react2.default.createElement(
    'div',
    { className: 'image-wrapper' },
    children
  ) : children;
};

exports.default = ConditionalWrapper;