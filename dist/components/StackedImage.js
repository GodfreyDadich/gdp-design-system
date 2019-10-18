"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var _Type = require("./Type");

var _reactDeviceDetect = require("react-device-detect");

var StackedImage =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(StackedImage, _Component);

  function StackedImage(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, StackedImage);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(StackedImage).call(this, props));
    _this.state = {
      isMobile: _reactDeviceDetect.isMobile
    };
    return _this;
  }

  (0, _createClass2["default"])(StackedImage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", null, _reactDeviceDetect.isMobile ? _react["default"].createElement("div", {
        style: {
          position: 'relative',
          display: 'block',
          width: '100%',
          height: '100%'
        },
        className: "imagesWrapper ".concat(this.props.fullBleed ? ' full-bleed' : '').concat(this.props.caption && this.props.caption.length > 0 ? ' withCaption' : '')
      }, this.props.images.map(function (img, index) {
        return _react["default"].createElement("figure", {
          className: "itemWrap ".concat(index === _this2.props.images.length - 1 ? 'withCaption' : ''),
          key: "image".concat(index)
        }, _react["default"].createElement(_Image["default"], {
          stackedImage: true,
          key: "img-".concat(index),
          aspectRatio: _this2.props.aspectRatio ? _this2.props.aspectRatio : 'noAspect',
          skipIntro: true,
          imgSource: img,
          visibilityOverride: true,
          caption: index === _this2.props.images.length - 1 ? _this2.props.caption : ''
        }));
      })) : _react["default"].createElement("div", {
        className: "imagesWrapper ".concat(this.props.fullBleed ? ' full-bleed' : '').concat(this.props.caption && this.props.caption.length > 0 ? ' withCaption' : '')
      }, _react["default"].createElement("div", {
        style: {
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%'
        }
      }, this.props.images.map(function (img, index) {
        return _react["default"].createElement("figure", {
          className: "imageWrapDesktop",
          key: "image".concat(index),
          style: {
            position: 'relative',
            display: 'inline-block',
            width: '100%',
            height: '100%'
          }
        }, _react["default"].createElement(_Image["default"], {
          key: "img-".concat(index),
          aspectRatio: _this2.props.aspectRatio ? _this2.props.aspectRatio : 'noAspect',
          skipIntro: true,
          imgSource: img,
          visibilityOverride: true
        }));
      })), this.props.caption && this.props.caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
        classAdd: "col-6 skip-1 col-6-tab skip-0-tab"
      }, this.props.caption) : ''), _react["default"].createElement("style", null, "\n          .imageWrapDesktop {\n            margin-left: 2vw;\n          }\n          .imageWrapDesktop:first-child {\n            margin-left: 0;\n          }\n          .itemWrap {\n            margin: 3.5vw 0;\n          }\n          .itemWrap:first-child {\n            margin: 0 0 3.5vw 0;\n          }\n          "));
    }
  }]);
  return StackedImage;
}(_react.Component);

exports["default"] = StackedImage;