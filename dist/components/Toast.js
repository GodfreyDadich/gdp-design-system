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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _Type = require("./Type");

var _reactDeviceDetect = require("react-device-detect");

var Toast =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Toast, _React$Component);

  function Toast(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Toast);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Toast).call(this, props));
    _this.state = {
      active: props.active
    };
    _this.closeToast = _this.closeToast.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openToast = _this.openToast.bind((0, _assertThisInitialized2["default"])(_this));
    _this.startTimer = _this.startTimer.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Toast, [{
    key: "openToast",
    value: function openToast() {
      this.setState({
        active: true
      });
    }
  }, {
    key: "closeToast",
    value: function closeToast() {
      this.setState({
        active: false
      });

      if (typeof this.props.callback === 'function') {
        this.props.callback();
      }
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(this.closeToast, 2500);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.state.active) {
        this.startTimer();
        this.openToast();
      }

      this.setState({
        isMobile: _reactDeviceDetect.isMobile
      });
    }
  }, {
    key: "render",
    value: function render() {
      var active = this.state.active;
      var _this$props = this.props,
          message = _this$props.message,
          header = _this$props.header;
      return _react["default"].createElement("div", {
        style: {
          position: 'fixed',
          bottom: active ? this.state.isMobile ? '0px' : '22px' : '-140px',
          opacity: active ? 1 : 0,
          right: this.state.isMobile ? '0' : '42px',
          width: this.state.isMobile ? 'calc( 100% - 48px)' : 'auto',
          maxWidth: '500px',
          backgroundColor: 'rgb(72,255,0)',
          borderRadius: '7px',
          padding: this.state.isMobile ? '10px 24px' : '20px 40px',
          transition: 'bottom 0.75s, opacity 0.75s',
          zIndex: '9999'
        },
        className: "toast"
      }, _react["default"].createElement("svg", {
        style: {
          width: '30px',
          height: '30px',
          display: 'inline-block',
          verticalAlign: 'middle'
        },
        viewBox: "0 0 30 30",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react["default"].createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _react["default"].createElement("circle", {
        fill: "#FFF",
        cx: "15",
        cy: "15",
        r: "15"
      }), _react["default"].createElement("path", {
        d: "M11,16.5060194 C12.0257687,17.0691545 14.2957686,20 14.2957686,20 C14.2957686,20 16,13.4119807 20,10",
        stroke: "#48FF00",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }))), _react["default"].createElement("div", {
        className: "toast-content",
        style: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'middle',
          margin: '15px 40px 15px 20px'
        }
      }, _react["default"].createElement(_Type.Heading4, {
        style: {
          display: 'block',
          fontSize: this.state.isMobile ? '12px' : '19px',
          marginBottom: this.state.isMobile ? '0' : '5px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: this.state.isMobile ? '230px' : '320px'
        }
      }, header), _react["default"].createElement("span", {
        style: {
          display: 'block',
          fontFamily: 'Atlas Grotesk',
          fontWeight: '300',
          fontSize: this.state.isMobile ? '10px' : '14px',
          lineHeight: '1.42',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: this.state.isMobile ? '230px' : '320px'
        }
      }, message)), _react["default"].createElement("div", {
        className: "close",
        onClick: this.closeToast,
        style: {
          position: 'absolute',
          top: '12px',
          right: '15px',
          fontFamily: 'Institut',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontSize: '10px',
          lineHeight: '1.33',
          cursor: 'pointer'
        }
      }, "close"));
    }
  }]);
  return Toast;
}(_react["default"].Component);

var _default = Toast;
exports["default"] = _default;