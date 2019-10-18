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

var _ImageWrap = _interopRequireDefault(require("./ImageWrap"));

var _ConditionalLink = _interopRequireDefault(require("./ConditionalLink"));

var _reactMediumImageZoom = _interopRequireDefault(require("react-medium-image-zoom"));

var _Type = require("./Type");

var ImageWithZoom =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ImageWithZoom, _React$Component);

  function ImageWithZoom() {
    (0, _classCallCheck2["default"])(this, ImageWithZoom);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ImageWithZoom).apply(this, arguments));
  }

  (0, _createClass2["default"])(ImageWithZoom, [{
    key: "render",
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
      var _this$props = this.props,
          imageTitle = _this$props.imageTitle,
          imgSource = _this$props.imgSource,
          linkUrl = _this$props.linkUrl,
          caption = _this$props.caption,
          sideBar = _this$props.sideBar,
          aspectRatio = _this$props.aspectRatio,
          stretchH = _this$props.stretchH,
          verticalAlign = _this$props.verticalAlign,
          horizontalAlign = _this$props.horizontalAlign;
      return _react["default"].createElement("figure", {
        className: _style["default"].dynamic([["2499155560", [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']]]) + " " + 'zoomFigure'
      }, _react["default"].createElement(_ImageWrap["default"], this.props, _react["default"].createElement(_ConditionalLink["default"], {
        linkUrl: linkUrl
      }, _react["default"].createElement(_reactMediumImageZoom["default"], {
        image: {
          src: imgSource,
          alt: imageTitle,
          className: "img wrappedImage",
          style: Object.assign({
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
            marginTop: verticalAlign === 'top' ? '' : "-".concat(vertRef[aspectRatio] / vAlignRef[verticalAlign], "%"),
            transform: verticalAlign === 'top' ? '' : "translateY(".concat(vertRef[aspectRatio] / vAlignRef[verticalAlign], "%)")
          } : {
            height: '100%',
            width: 'auto',
            minWidth: '100%',
            minHeight: 0,
            marginLeft: "".concat(hAlignRef[horizontalAlign], "%"),
            transform: "translateX(-".concat(hAlignRef[horizontalAlign], "%)")
          })
        },
        zoomImage: {
          src: imgSource,
          alt: imageTitle
        }
      })), sideBar && sideBar.text.length > 0 ? _react["default"].createElement("div", {
        className: _style["default"].dynamic([["2499155560", [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']]]) + " " + "sideBar ".concat(sideBar.location ? sideBar.location : 'topLeft')
      }, sideBar.image ? _react["default"].createElement("img", {
        src: sideBar.image,
        className: _style["default"].dynamic([["2499155560", [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']]]) + " " + 'sideBar__logo'
      }) : '', sideBar.text.length > 0 ? _react["default"].createElement("span", {
        className: _style["default"].dynamic([["2499155560", [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']]]) + " " + 'sideBar__text'
      }, sideBar.text) : '') : ''), caption && caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
        classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
      }, caption) : '', _react["default"].createElement(_style["default"], {
        id: "2499155560",
        dynamic: [aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '']
      }, "figure.__jsx-style-dynamic-selector{position:relative;}.wrappedImage.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;min-width:100%;height:auto;min-height:100%;opacity:0;".concat(aspectRatio === 'noAspect' ? "position: relative;\n            width: 100%;\n            opacity: 1;\n            " : '', ";}.sideBar.__jsx-style-dynamic-selector{position:absolute;top:0;left:-126px;width:102px;font-family:'Atlas Grotesk';font-weight:900;color:#000;}.sideBar.left-bottom.__jsx-style-dynamic-selector{top:auto;bottom:0;}.sideBar.right-top.__jsx-style-dynamic-selector{left:auto;right:-126px;}.sideBar.right-bottom.__jsx-style-dynamic-selector{top:auto;left:auto;right:-126px;bottom:0;}.sideBar__logo.__jsx-style-dynamic-selector{display:block;width:100%;margin-bottom:12px;}.sideBar__text.__jsx-style-dynamic-selector{display:block;border-top:7px solid #000;padding-top:9px;font-size:12px;line-height:12.8px;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;}.sideBar__text.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector{-webkit-transition:opacity 0.4s;transition:opacity 0.4s;width:100%;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.__jsx-style-dynamic-selector:first-child{opacity:0;}.hoverWrap.__jsx-style-dynamic-selector:hover .wrappedImage.imageHover.__jsx-style-dynamic-selector{opacity:1;}.hoverWrap.__jsx-style-dynamic-selector .wrappedImage.imageHover.__jsx-style-dynamic-selector{position:absolute;top:0;opacity:0;z-index:10;}")));
    }
  }]);
  return ImageWithZoom;
}(_react["default"].Component);

var _default = ImageWithZoom;
exports["default"] = _default;