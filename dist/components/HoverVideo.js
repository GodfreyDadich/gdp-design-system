"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _Video = _interopRequireDefault(require("./Video"));

var HoverVideo =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(HoverVideo, _React$Component);

  function HoverVideo(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HoverVideo);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(HoverVideo).call(this, props));
    _this.state = {
      hover: props.autoplay
    };
    _this.hoverOver = _this.hoverOver.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hoverOut = _this.hoverOut.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(HoverVideo, [{
    key: "hoverOver",
    value: function hoverOver() {
      this.setState({
        hover: true
      });
    }
  }, {
    key: "hoverOut",
    value: function hoverOut() {
      this.setState({
        hover: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Video["default"], (0, _extends2["default"])({}, this.props, {
        hoverPlay: true,
        playing: false,
        autoplay: this.props.autoplay || false,
        active: this.state.hover,
        mouseOverAction: this.hoverOver,
        mouseOutAction: this.hoverOut,
        classAdd: this.props.classAdd ? ' ' + this.props.classAdd : '',
        config: {
          vimeo: {
            playerOptions: {
              background: 1,
              autopause: !this.props.autoplay || true,
              autoplay: this.props.autoplay || false
            },
            preload: false
          }
        }
      }));
    }
  }]);
  return HoverVideo;
}(_react["default"].Component);

var _default = HoverVideo;
exports["default"] = _default;