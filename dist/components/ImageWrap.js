"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDeviceDetect = require("react-device-detect");

var paddingRef = {
  sixteen: '56.25%',
  standard: '75%',
  cropped: '41.67%',
  square: '100%'
};

var ImageWrap =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ImageWrap, _React$Component);

  function ImageWrap(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ImageWrap);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ImageWrap).call(this, props));
    _this.state = {
      isVisible: false
    };
    return _this;
  }

  (0, _createClass2["default"])(ImageWrap, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return Boolean(nextProps.isVisible);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          aspectRatio = _this$props.aspectRatio,
          fullBleed = _this$props.fullBleed,
          children = _this$props.children,
          imgSource = _this$props.imgSource,
          horizontalAlign = _this$props.horizontalAlign,
          verticalAlign = _this$props.verticalAlign,
          sideBar = _this$props.sideBar,
          isVisible = _this$props.isVisible,
          visibilityOverride = _this$props.visibilityOverride,
          skipIntro = _this$props.skipIntro,
          altAsset = _this$props.altAsset,
          backgroundSize = _this$props.backgroundSize;
      var showImage = visibilityOverride ? true : isVisible;
      return _react["default"].createElement("div", {
        className: "imageWrap ".concat(aspectRatio, " ").concat(fullBleed ? 'fullBleed' : ''),
        style: {
          backgroundImage: "".concat(aspectRatio !== 'noAspect' && showImage ? "url('".concat(_reactDeviceDetect.isMobile && altAsset ? altAsset : imgSource, "')") : ''),
          backgroundSize: backgroundSize || 'cover',
          backgroundPositionX: horizontalAlign,
          backgroundPositionY: verticalAlign,
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: 'auto',
          lineHeight: '0',
          overflow: "".concat(!sideBar ? 'hidden' : 'visible'),
          paddingTop: paddingRef[aspectRatio],
          opacity: showImage ? 1 : 0,
          top: showImage || skipIntro ? '0px' : '15px',
          transition: 'opacity 0.5s, top 0.5s',
          transitionDelay: '1s'
        }
      }, showImage ? _react["default"].cloneElement(children) : '');
    }
  }]);
  return ImageWrap;
}(_react["default"].Component);

var _default = ImageWrap;
exports["default"] = _default;