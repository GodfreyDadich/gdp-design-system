'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConditionalLink = require('./ConditionalLink');

var _ConditionalLink2 = _interopRequireDefault(_ConditionalLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image(_ref) {
  var imageTitle = _ref.imageTitle,
      aspectRatio = _ref.aspectRatio,
      fullBleed = _ref.fullBleed,
      imgSource = _ref.imgSource,
      linkUrl = _ref.linkUrl,
      verticalAlign = _ref.verticalAlign,
      horizontalAlign = _ref.horizontalAlign,
      classAdd = _ref.classAdd;
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['3797329576', [imgSource, horizontalAlign, verticalAlign]]]) + ' ' + ('imageWrap ' + aspectRatio + ' ' + (fullBleed ? 'fullBleed' : '') + ' ' + classAdd)
    },
    _react2.default.createElement(
      _ConditionalLink2.default,
      { linkUrl: linkUrl },
      _react2.default.createElement('img', { alt: imageTitle, src: imgSource, className: _style2.default.dynamic([['3797329576', [imgSource, horizontalAlign, verticalAlign]]]) + ' ' + 'wrappedImage'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3797329576',
      css: '.imageWrap.__jsx-style-dynamic-selector{position:relative;width:100%;overflow:hidden;height:auto;background:url(' + imgSource + ');background-position-x:' + horizontalAlign + ';background-position-y:' + verticalAlign + ';background-size:cover;background-repeat:no-repeat;}.imageWrap.sixteen.__jsx-style-dynamic-selector{padding-top:56.25%;}.imageWrap.standard.__jsx-style-dynamic-selector{padding-top:75%;}.imageWrap.cropped.__jsx-style-dynamic-selector{padding-top:39.06%;}.imageWrap.square.__jsx-style-dynamic-selector{padding-top:100%;}.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;min-height:100%;opacity:0;}',
      dynamic: [imgSource, horizontalAlign, verticalAlign]
    })
  );
};

exports.default = Image;