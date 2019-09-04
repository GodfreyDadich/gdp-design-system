'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConditionalLink = require('./ConditionalLink');

var _ConditionalLink2 = _interopRequireDefault(_ConditionalLink);

var _ImageWrap = require('./ImageWrap');

var _ImageWrap2 = _interopRequireDefault(_ImageWrap);

var _Type = require('./Type');

var _reactOnScreen = require('react-on-screen');

var _reactOnScreen2 = _interopRequireDefault(_reactOnScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// d36aj1cv2i74vd
var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          imageTitle = _props.imageTitle,
          imgSource = _props.imgSource,
          linkUrl = _props.linkUrl,
          caption = _props.caption,
          sideBar = _props.sideBar,
          imgHover = _props.imgHover,
          aspectRatio = _props.aspectRatio,
          classAdd = _props.classAdd,
          style = _props.style;


      return _react2.default.createElement(
        'figure',
        { style: style, className: _style2.default.dynamic([['3442743642', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + ('' + (imgHover ? 'hoverWrap' : '') + (caption && caption.length > 0 ? ' withCaption' : ''))
        },
        _react2.default.createElement(
          _reactOnScreen2.default,
          { partialVisibility: true, className: classAdd },
          _react2.default.createElement(
            _ImageWrap2.default,
            this.props,
            _react2.default.createElement(
              _ConditionalLink2.default,
              { linkUrl: linkUrl },
              _react2.default.createElement('img', { alt: imageTitle, src: imgSource, className: _style2.default.dynamic([['3442743642', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + 'wrappedImage'
              }),
              imgHover ? _react2.default.createElement('img', { alt: imageTitle, src: imgHover, className: _style2.default.dynamic([['3442743642', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + 'wrappedImage imageHover'
              }) : '',
              sideBar && sideBar.text.length > 0 ? _react2.default.createElement(_Type.SideBar, { sideBar: sideBar, isVisible: true }) : ''
            )
          )
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-3 col-6-tab skip-1-tab' },
          caption
        ) : '',
        _react2.default.createElement(_style2.default, {
          styleId: '3442743642',
          css: 'figure.__jsx-style-dynamic-selector{position:relative;margin:0;display:block;}.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;opacity:0;' + (aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '') + ';}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector{-webkit-transition:opacity 0.4s;transition:opacity 0.4s;width:100%;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:0;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.imageHover.__jsx-style-dynamic-selector{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.imageHover.__jsx-style-dynamic-selector{position:absolute;top:0;opacity:0;z-index:10;}',
          dynamic: [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']
        })
      );
    }
  }]);

  return Image;
}(_react2.default.Component);

exports.default = Image;