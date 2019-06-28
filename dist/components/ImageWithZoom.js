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

var _ConditionalLink = require('./ConditionalLink');

var _ConditionalLink2 = _interopRequireDefault(_ConditionalLink);

var _reactMediumImageZoom = require('react-medium-image-zoom');

var _reactMediumImageZoom2 = _interopRequireDefault(_reactMediumImageZoom);

var _Type = require('./Type');

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
          imgSource = _props.imgSource,
          linkUrl = _props.linkUrl,
          caption = _props.caption,
          sideBar = _props.sideBar,
          aspectRatio = _props.aspectRatio,
          stretchH = _props.stretchH,
          verticalAlign = _props.verticalAlign,
          horizontalAlign = _props.horizontalAlign;


      return _react2.default.createElement(
        'figure',
        {
          className: _style2.default.dynamic([['2499155560', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + 'zoomFigure'
        },
        _react2.default.createElement(
          _ImageWrap2.default,
          this.props,
          _react2.default.createElement(
            _ConditionalLink2.default,
            { linkUrl: linkUrl },
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
            })
          ),
          sideBar && sideBar.text.length > 0 ? _react2.default.createElement(
            'div',
            {
              className: _style2.default.dynamic([['2499155560', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + ('sideBar ' + (sideBar.location ? sideBar.location : 'topLeft'))
            },
            sideBar.image ? _react2.default.createElement('img', { src: sideBar.image, className: _style2.default.dynamic([['2499155560', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + 'sideBar__logo'
            }) : '',
            sideBar.text.length > 0 ? _react2.default.createElement(
              'span',
              {
                className: _style2.default.dynamic([['2499155560', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + 'sideBar__text'
              },
              sideBar.text
            ) : ''
          ) : ''
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-3 col-6-tab skip-1-tab' },
          caption
        ) : '',
        _react2.default.createElement(_style2.default, {
          styleId: '2499155560',
          css: 'figure.__jsx-style-dynamic-selector{position:relative;}.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;min-height:100%;opacity:0;' + (aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '') + ';}.sideBar.__jsx-style-dynamic-selector{position:absolute;top:0;left:-126px;width:102px;font-family:\'Atlas Grotesk\';font-weight:900;color:#000;}.sideBar.left-bottom.__jsx-style-dynamic-selector{top:auto;bottom:0;}.sideBar.right-top.__jsx-style-dynamic-selector{left:auto;right:-126px;}.sideBar.right-bottom.__jsx-style-dynamic-selector{top:auto;left:auto;right:-126px;bottom:0;}.sideBar__logo.__jsx-style-dynamic-selector{display:block;width:100%;margin-bottom:12px;}.sideBar__text.__jsx-style-dynamic-selector{display:block;border-top:7px solid #000;padding-top:9px;font-size:12px;line-height:12.8px;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;}.sideBar__text.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector{-webkit-transition:opacity 0.4s;transition:opacity 0.4s;width:100%;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:0;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.imageHover.__jsx-style-dynamic-selector{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.imageHover.__jsx-style-dynamic-selector{position:absolute;top:0;opacity:0;z-index:10;}',
          dynamic: [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']
        })
      );
    }
  }]);

  return ImageWithZoom;
}(_react2.default.Component);

exports.default = ImageWithZoom;