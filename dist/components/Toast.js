'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Type = require('./Type');

var _reactDeviceDetect = require('react-device-detect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast(props) {
    _classCallCheck(this, Toast);

    var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this, props));

    _this.state = {
      active: props.active
    };
    _this.closeToast = _this.closeToast.bind(_this);
    _this.openToast = _this.openToast.bind(_this);
    _this.startTimer = _this.startTimer.bind(_this);
    return _this;
  }

  _createClass(Toast, [{
    key: 'openToast',
    value: function openToast() {
      this.setState({
        active: true
      });
    }
  }, {
    key: 'closeToast',
    value: function closeToast() {
      this.setState({
        active: false
      });
      if (typeof this.props.callback === 'function') {
        this.props.callback();
      }
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(this.closeToast, 2500);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.state.active) {
        this.startTimer();
        this.openToast();
      }

      this.setState({
        isMobile: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var active = this.state.active;
      var _props = this.props,
          message = _props.message,
          header = _props.header;

      return _react2.default.createElement(
        'div',
        {
          style: {
            position: 'fixed',
            bottom: active ? this.state.isMobile ? '0px' : '22px' : '-140px',
            opacity: active ? 1 : 0,
            right: this.state.isMobile ? '0' : '42px',
            width: this.state.isMobile ? 'calc( 100% - 48px)' : 'auto',
            backgroundColor: 'rgb(72,255,0)',
            borderRadius: '7px',
            padding: this.state.isMobile ? '10px 24px' : '20px 40px',
            transition: 'bottom 0.75s, opacity 0.75s',
            zIndex: '9999'
          },
          className: 'toast'
        },
        _react2.default.createElement(
          'svg',
          {
            style: {
              width: '30px',
              height: '30px',
              display: 'inline-block',
              verticalAlign: 'middle'
            },
            viewBox: '0 0 30 30', xmlns: 'http://www.w3.org/2000/svg' },
          _react2.default.createElement(
            'g',
            { fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement('circle', { fill: '#FFF', cx: '15', cy: '15', r: '15' }),
            _react2.default.createElement('path', { d: 'M11,16.5060194 C12.0257687,17.0691545 14.2957686,20 14.2957686,20 C14.2957686,20 16,13.4119807 20,10', stroke: '#48FF00', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' })
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'toast-content',
            style: {
              position: 'relative',
              display: 'inline-block',
              verticalAlign: 'middle',
              margin: '15px 40px 15px 20px'
            }
          },
          _react2.default.createElement(
            _Type.Heading4,
            { style: { fontSize: this.state.isMobile ? '12px' : '19px', marginBottom: this.state.isMobile ? '0' : '5px' } },
            header
          ),
          _react2.default.createElement(
            'span',
            { style: {
                fontFamily: 'Atlas Grotesk',
                fontWeight: '300',
                fontSize: this.state.isMobile ? '10px' : '14px',
                lineHeight: '1.42'
              } },
            message
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'close', onClick: this.closeToast,
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
          },
          'close'
        )
      );
    }
  }]);

  return Toast;
}(_react2.default.Component);

exports.default = Toast;