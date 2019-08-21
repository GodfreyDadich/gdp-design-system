'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icons = require('../components/Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icons = function Icons(props) {
  return _react2.default.createElement(
    'div',
    null,
    'Instagram:\xA0',
    _react2.default.createElement(_Icons.InstagramIcon, { color: 'green', hoverColor: 'red' }),
    _react2.default.createElement('br', null),
    ' ',
    _react2.default.createElement('br', null),
    'LinkedIn:\xA0',
    _react2.default.createElement(_Icons.LinkedInIcon, { color: 'green' })
  );
};

exports.default = Icons;