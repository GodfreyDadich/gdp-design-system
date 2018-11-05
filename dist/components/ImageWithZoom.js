'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageWrap = require('./ImageWrap');

var _ImageWrap2 = _interopRequireDefault(_ImageWrap);

var _reactMediumImageZoom = require('react-medium-image-zoom');

var _reactMediumImageZoom2 = _interopRequireDefault(_reactMediumImageZoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageWithZoom = function (_React$Component) {
  _inherits(ImageWithZoom, _React$Component);

  function ImageWithZoom() {
    _classCallCheck(this, ImageWithZoom);

    return _possibleConstructorReturn(this, (ImageWithZoom.__proto__ || Object.getPrototypeOf(ImageWithZoom)).apply(this, arguments));
  }

  _createClass(ImageWithZoom, [{
    key: 'render',
    value: function render() {
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

      var _props = this.props,
          imageTitle = _props.imageTitle,
          aspectRatio = _props.aspectRatio,
          imgSource = _props.imgSource,
          verticalAlign = _props.verticalAlign,
          horizontalAlign = _props.horizontalAlign,
          stretchH = _props.stretchH;


      return _react2.default.createElement(
        _ImageWrap2.default,
        this.props,
        _react2.default.createElement(_reactMediumImageZoom2.default, {
          image: {
            src: imgSource,
            alt: imageTitle,
            className: 'img wrappedImage',
            style: _extends({
              width: '100%',
              position: aspectRatio !== 'noAspect' ? 'absolute' : 'relative',
              opacity: aspectRatio !== 'noAspect' ? '0' : '1',
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
          styleId: '534420782',
          css: '.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;min-height:100%;opacity:0;' + (aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '') + ';}',
          dynamic: [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']
        })
      );
    }
  }]);

  return ImageWithZoom;
}(_react2.default.Component);

exports.default = ImageWithZoom;