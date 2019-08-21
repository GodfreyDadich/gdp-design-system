'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DotIndicator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DotIndicator = exports.DotIndicator = function DotIndicator(props) {
  return _react2.default.createElement(
    'div',
    { style: { margin: 'auto', width: '50%', textAlign: 'center' } },
    props.children.map(function (child, i) {
      return _react2.default.createElement('div', {
        key: 'dot' + i,
        style: {
          borderRadius: '50%',
          display: 'inline-block',
          width: '8px',
          height: '8px',
          boxSizing: 'border-box',
          margin: props.imageAspect === 'sixteen' ? '16px 5px 15px' : props.imageAspect === 'noAspect' ? '10px 5px 10px' : '-7px 5px 13px',
          border: '1px solid #6D6A60',
          backgroundColor: '#6D6A60',
          opacity: props.currentIndex === i ? '1' : '.25'
        } });
    })
  );
};