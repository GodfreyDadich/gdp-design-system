'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
      className: 'jsx-442956775' + ' ' + ('imageWrap ' + aspectRatio + ' ' + (fullBleed ? 'fullBleed' : '') + ' ' + classAdd)
    },
    _react2.default.createElement(_reactMediumImageZoom2.default, {
      image: {
        src: imgSource,
        alt: imageTitle,
        className: 'img wrappedImage',
        style: (0, _extends3.default)({
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
      styleId: '442956775',
      css: '.imageWrap.jsx-442956775{position:relative;width:100%;overflow:hidden;height:auto;}.imageWrap.sixteen.jsx-442956775{padding-top:56.25%;}.imageWrap.standard.jsx-442956775{padding-top:75%;}.imageWrap.cropped.jsx-442956775{padding-top:39.06%;}.imageWrap.square.jsx-442956775{padding-top:100%;}.wrappedImage.jsx-442956775{position:absolute;top:0;left:0;max-width:100%;height:auto;min-height:100%;}'
    })
  );
};
exports.default = ImageWithZoom;