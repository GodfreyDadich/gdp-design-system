"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _ConditionalLink = _interopRequireDefault(require("./ConditionalLink"));

var _ImageWrap = _interopRequireDefault(require("./ImageWrap"));

var _Type = require("./Type");

var _reactOnScreen = _interopRequireDefault(require("react-on-screen"));

var _supportsWebp = _interopRequireDefault(require("supports-webp"));

var _reactDeviceDetect = require("react-device-detect");

var _propTypes = _interopRequireDefault(require("prop-types"));

// d36aj1cv2i74vd
var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Image, _React$Component);

  function Image() {
    (0, _classCallCheck2["default"])(this, Image);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Image).apply(this, arguments));
  }

  (0, _createClass2["default"])(Image, [{
    key: "render",
    value: function render() {
<<<<<<< HEAD
      var _this$props = this.props,
          imageTitle = _this$props.imageTitle,
          altAsset = _this$props.altAsset,
          imgSource = _this$props.imgSource,
          linkUrl = _this$props.linkUrl,
          caption = _this$props.caption,
          sideBar = _this$props.sideBar,
          imgHover = _this$props.imgHover,
          aspectRatio = _this$props.aspectRatio,
          classAdd = _this$props.classAdd,
          style = _this$props.style;
      return _react["default"].createElement("figure", {
        style: style,
        className: _style["default"].dynamic([["3442743642", [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']]]) + " " + "".concat(imgHover ? 'hoverWrap' : '').concat(caption && caption.length > 0 ? ' withCaption' : '')
      }, _react["default"].createElement(_reactOnScreen["default"], {
        partialVisibility: true,
        className: classAdd
      }, _react["default"].createElement(_ImageWrap["default"], this.props, _react["default"].createElement(_ConditionalLink["default"], {
        linkUrl: linkUrl
      }, _reactDeviceDetect.isMobile && altAsset ? _react["default"].createElement("img", {
        alt: imageTitle,
        src: altAsset,
        className: _style["default"].dynamic([["3442743642", [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']]]) + " " + 'wrappedImage'
      }) : _react["default"].createElement("img", {
        alt: imageTitle,
        src: imgSource,
        className: _style["default"].dynamic([["3442743642", [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']]]) + " " + 'wrappedImage'
      }), imgHover ? _react["default"].createElement("img", {
        alt: imageTitle,
        src: imgHover,
        className: _style["default"].dynamic([["3442743642", [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']]]) + " " + 'wrappedImage imageHover'
      }) : '', sideBar && sideBar.text.length > 0 ? _react["default"].createElement(_Type.SideBar, {
        sideBar: sideBar,
        isVisible: true
      }) : ''))), caption && caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
        classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
      }, caption) : '', _react["default"].createElement(_style["default"], {
        id: "3442743642",
        dynamic: [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']
      }, "figure.__jsx-style-dynamic-selector{position:relative;margin:0;display:block;}.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;opacity:0;".concat(aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '', ";}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector{-webkit-transition:opacity 0.4s;transition:opacity 0.4s;width:100%;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:0;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.imageHover.__jsx-style-dynamic-selector{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.imageHover.__jsx-style-dynamic-selector{position:absolute;top:0;opacity:0;z-index:10;}")));
=======
      var _props = this.props,
          imageTitle = _props.imageTitle,
          altAsset = _props.altAsset,
          imgSource = _props.imgSource,
          linkUrl = _props.linkUrl,
          caption = _props.caption,
          sideBar = _props.sideBar,
          imgHover = _props.imgHover,
          aspectRatio = _props.aspectRatio,
          classAdd = _props.classAdd,
          stackedImage = _props.stackedImage,
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
              _reactDeviceDetect.isMobile && altAsset ? _react2.default.createElement('img', { alt: imageTitle, src: altAsset, className: _style2.default.dynamic([['3442743642', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + 'wrappedImage'
              }) : _react2.default.createElement('img', { alt: imageTitle, src: imgSource, className: _style2.default.dynamic([['3442743642', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + 'wrappedImage'
              }),
              imgHover ? _react2.default.createElement('img', { alt: imageTitle, src: imgHover, className: _style2.default.dynamic([['3442743642', [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']]]) + ' ' + 'wrappedImage imageHover'
              }) : '',
              sideBar && sideBar.text.length > 0 ? _react2.default.createElement(_Type.SideBar, { sideBar: sideBar, isVisible: true }) : ''
            )
          )
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: '' + (stackedImage ? 'col-6 skip-1 col-6-tab skip-0-tab' : 'col-6 skip-3 col-6-tab skip-1-tab') },
          caption
        ) : '',
        _react2.default.createElement(_style2.default, {
          styleId: '3442743642',
          css: 'figure.__jsx-style-dynamic-selector{position:relative;margin:0;display:block;}.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;opacity:0;' + (aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '') + ';}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector{-webkit-transition:opacity 0.4s;transition:opacity 0.4s;width:100%;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:0;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.imageHover.__jsx-style-dynamic-selector{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.imageHover.__jsx-style-dynamic-selector{position:absolute;top:0;opacity:0;z-index:10;}',
          dynamic: [aspectRatio === 'noAspect' ? 'position: relative;\n            width: 100%;\n            opacity: 1;\n            ' : '']
        })
      );
>>>>>>> master
    }
  }]);
  return Image;
}(_react["default"].Component);

Image.propTypes = {
  linkUrl: _propTypes["default"].string,
  imageTitle: _propTypes["default"].string,
  aspectRatio: _propTypes["default"].oneOf(['sixteen', 'standard', 'square', 'cropped']),
  fullBleed: _propTypes["default"].bool,
  imgSource: _propTypes["default"].string,
  verticalAlign: _propTypes["default"].oneOf(['top', 'center', 'bottom']),
  horizontalAlign: _propTypes["default"].oneOf(['left', 'center', 'right'])
};
Image.defaultProps = {
  aspectRatio: 'standard',
  fullBleed: false
};
var _default = Image;
exports["default"] = _default;