'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountIndicator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CountIndicator = exports.CountIndicator = function CountIndicator(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'counter-wrapper',
      style: {
        margin: 'auto',
        width: '50%',
        textAlign: 'center',
        fontColor: '#6D6A60',
        fontFamily: 'Atlas Grotesk',
        fontSize: '12.5px',
        marginTop: props.imageAspect === 'sixteen' ? '40px' : props.imageAspect === 'noAspect' ? '80px' : props.imageAspect === 'square' ? '20px' : '30px',
        marginBottom: '16px'
      }
    },
    _react2.default.createElement(
      'span',
      {
        className: 'left-arrow-wrapper',
        style: {
          top: '50%',
          margin: '0',
          transform: 'translateY(-50%)',
          left: '15%'
        } },
      _react2.default.createElement('i', {
        className: 'left-arrow-head',
        style: {
          border: 'solid #6D6A60',
          borderWidth: '0 1px 1px 0',
          display: 'inline-block',
          padding: '3px',
          transform: 'rotate(135deg)'
        } })
    ),
    _react2.default.createElement(
      'span',
      {
        className: 'counter-content',
        style: {
          color: '#6D6A60',
          letterSpacing: '.75px',
          fontWeight: 400
        } },
      '\xA0\xA0',
      props.currentIndex + 1,
      '/',
      props.children.length,
      '\xA0\xA0'
    ),
    _react2.default.createElement(
      'span',
      {
        className: 'right-arrow-wrapper',
        style: {
          top: '50%',
          margin: '0',
          transform: 'translateY(-50%)',
          right: '15%'

        } },
      _react2.default.createElement('i', {
        className: 'right-arrow-head',
        style: {
          border: 'solid #6D6A60',
          borderWidth: '0 1px 1px 0',
          display: 'inline-block',
          padding: '3px',
          transform: 'rotate(-45deg)'

        } })
    )
  );
};