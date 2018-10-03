'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeftArrow = exports.RightArrow = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightArrow = exports.RightArrow = function RightArrow(props) {
  return _react2.default.createElement(
    'div',
    { className: 'nextArrow', onClick: props.clickAction },
    ' >',
    _react2.default.createElement('i', { className: 'fa fa-arrow-right fa-2x', 'aria-hidden': 'true' })
  );
};

/*
  Pretend these are in their own separate files
*/

var LeftArrow = exports.LeftArrow = function LeftArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'backArrow', onClick: props.clickAction },
    ' <',
    _react2.default.createElement('i', { className: 'fa fa-arrow-left fa-2x', 'aria-hidden': 'true' })
  );
};