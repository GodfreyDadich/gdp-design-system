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
      classAdd = _ref.classAdd,
      caption = _ref.caption;
  return _react2.default.createElement(
    'figure',
    {
      className: _style2.default.dynamic([['3657636359', [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign]]])
    },
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['3657636359', [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign]]]) + ' ' + ('imageWrap ' + aspectRatio + ' ' + (fullBleed ? 'fullBleed' : '') + ' ' + classAdd)
      },
      _react2.default.createElement(
        _ConditionalLink2.default,
        { linkUrl: linkUrl },
        _react2.default.createElement('img', { alt: imageTitle, src: imgSource, className: _style2.default.dynamic([['3657636359', [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign]]]) + ' ' + 'wrappedImage'
        })
      )
    ),
    caption ? _react2.default.createElement(
      'figcaption',
      {
        className: _style2.default.dynamic([['3657636359', [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign]]]) + ' ' + 'captionText col-6 skip-3'
      },
      caption
    ) : '',
    _react2.default.createElement(_style2.default, {
      styleId: '3657636359',
      css: '.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;min-height:100%;opacity:0;}.imageWrap.__jsx-style-dynamic-selector{position:relative;overflow:hidden;height:auto;background:' + (aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2') + ';background-position-x:' + horizontalAlign + ';background-position-y:' + verticalAlign + ';background-size:cover;background-repeat:no-repeat;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.imageWrap.sixteen.__jsx-style-dynamic-selector{padding-top:56.25%;}.imageWrap.standard.__jsx-style-dynamic-selector{padding-top:75%;}.imageWrap.cropped.__jsx-style-dynamic-selector{padding-top:39.06%;}.imageWrap.square.__jsx-style-dynamic-selector{padding-top:100%;}.imageWrap.zoomedIn.__jsx-style-dynamic-selector{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.imageWrap.noAspect.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector{position:relative;width:100%;opacity:1;}.captionText.__jsx-style-dynamic-selector{color:#7F7F81;font-family:\'Atlas Grotesk\';font-weight:500;display:block;font-size:12px;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;margin-top:25px;margin-bottom:89px;text-align:center;}',
      dynamic: [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign]
    })
  );
};

exports.default = Image;