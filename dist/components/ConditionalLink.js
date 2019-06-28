'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalLink = function ConditionalLink(_ref) {
  var linkUrl = _ref.linkUrl,
      children = _ref.children;
  return typeof linkUrl === 'string' && linkUrl.length > 0 ? _react2.default.createElement(
    'a',
    { href: linkUrl },
    children
  ) : children;
};

exports.default = ConditionalLink;