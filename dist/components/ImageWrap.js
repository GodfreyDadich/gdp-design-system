'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageWrap = function ImageWrap(_ref) {
  var aspectRatio = _ref.aspectRatio,
      fullBleed = _ref.fullBleed,
      classAdd = _ref.classAdd,
      children = _ref.children,
      imgSource = _ref.imgSource,
      horizontalAlign = _ref.horizontalAlign,
      verticalAlign = _ref.verticalAlign,
      sideBar = _ref.sideBar;
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['3691916989', [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign, !sideBar ? 'overflow: hidden;' : '']]]) + ' ' + ('imageWrap ' + aspectRatio + ' ' + (fullBleed ? 'fullBleed' : '') + (classAdd ? ' ' + classAdd : ''))
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '3691916989',
      css: '.imageWrap.__jsx-style-dynamic-selector{position:relative;height:auto;background:' + (aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2') + ';background-position-x:' + horizontalAlign + ';background-position-y:' + verticalAlign + ';background-size:cover;background-repeat:no-repeat;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;' + (!sideBar ? 'overflow: hidden;' : '') + ';}.imageWrap.sixteen.__jsx-style-dynamic-selector{padding-top:56.25%;}.imageWrap.standard.__jsx-style-dynamic-selector{padding-top:75%;}.imageWrap.cropped.__jsx-style-dynamic-selector{padding-top:41.67%;}.imageWrap.square.__jsx-style-dynamic-selector{padding-top:100%;}.imageWrap.zoomedIn.__jsx-style-dynamic-selector{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}',
      dynamic: [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign, !sideBar ? 'overflow: hidden;' : '']
    })
  );
};

exports.default = ImageWrap;