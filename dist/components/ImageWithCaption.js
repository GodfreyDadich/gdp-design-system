'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageWithCaption = function ImageWithCaption(props) {
  return _react2.default.createElement(
    'figure',
    {
      className: 'jsx-3761590753' + ' ' + 'figureWithCaption'
    },
    _react2.default.createElement(_Image2.default, _extends({
      classAdd: 'withCaption'
    }, props)),
    _react2.default.createElement(
      'figcaption',
      {
        className: 'jsx-3761590753' + ' ' + 'captionText col-6 skip-3'
      },
      props.caption
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3761590753',
      css: '.figureWithCaption.jsx-3761590753{margin:0;position:relative;}.figureWithCaption.jsx-3761590753 .captionText.jsx-3761590753{color:#7F7F81;font-family:\'Atlas Grotesk\';font-weight:500;display:block;font-size:12px;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;margin-top:25px;margin-bottom:89px;text-align:center;}'
    })
  );
};

exports.default = ImageWithCaption;