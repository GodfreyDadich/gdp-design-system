'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMediumImageZoom = require('react-medium-image-zoom');

var _reactMediumImageZoom2 = _interopRequireDefault(_reactMediumImageZoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vertRef = {
  'sixteen': 56.25,
  'standard': 75,
  'cropped': 39.06,
  'square': 100
};
var hAlignRef = {
  'left': 0,
  'center': 50,
  'right': 100
};
var vAlignRef = {
  'top': 0,
  'center': 2,
  'bottom': 1
};

var ImageWithZoom = function ImageWithZoom(_ref) {
  var imageTitle = _ref.imageTitle,
      aspectRatio = _ref.aspectRatio,
      fullBleed = _ref.fullBleed,
      imgSource = _ref.imgSource,
      verticalAlign = _ref.verticalAlign,
      horizontalAlign = _ref.horizontalAlign,
      classAdd = _ref.classAdd,
      stretchH = _ref.stretchH;
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['109169153', [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign]]]) + ' ' + ('imageWrap ' + aspectRatio + ' ' + (fullBleed ? 'fullBleed' : '') + ' ' + classAdd)
    },
    _react2.default.createElement(_reactMediumImageZoom2.default, {
      image: {
        src: imgSource,
        alt: imageTitle,
        className: 'img wrappedImage',
        style: _extends({
          width: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          overflow: 'hidden'
        }, stretchH ? {
          height: 'auto',
          width: '100%',
          minHeight: '100%',
          minWidth: '0',
          marginTop: verticalAlign === 'top' ? '' : '-' + vertRef[aspectRatio] / vAlignRef[verticalAlign] + '%',
          transform: verticalAlign === 'top' ? '' : 'translateY(' + vertRef[aspectRatio] / vAlignRef[verticalAlign] + '%)'
        } : {
          height: '100%',
          width: 'auto',
          minWidth: '100%',
          minHeight: 0,
          marginLeft: hAlignRef[horizontalAlign] + '%',
          transform: 'translateX(-' + hAlignRef[horizontalAlign] + '%)'
        })
      },
      zoomImage: {
        src: imgSource,
        alt: imageTitle
      }
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '109169153',
      css: '.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;min-height:100%;opacity:0;}.imageWrap.__jsx-style-dynamic-selector{position:relative;overflow:hidden;height:auto;background:' + (aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2') + ';background-position-x:' + horizontalAlign + ';background-position-y:' + verticalAlign + ';background-size:cover;background-repeat:no-repeat;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.imageWrap.sixteen.__jsx-style-dynamic-selector{padding-top:56.25%;}.imageWrap.standard.__jsx-style-dynamic-selector{padding-top:75%;}.imageWrap.cropped.__jsx-style-dynamic-selector{padding-top:39.06%;}.imageWrap.square.__jsx-style-dynamic-selector{padding-top:100%;}.imageWrap.zoomedIn.__jsx-style-dynamic-selector{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.imageWrap.noAspect.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector{position:relative;width:100%;opacity:1;}',
      dynamic: [aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2', horizontalAlign, verticalAlign]
    })
  );
};
exports.default = ImageWithZoom;