'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoLoop = function (_React$Component) {
  _inherits(VideoLoop, _React$Component);

  function VideoLoop(props) {
    _classCallCheck(this, VideoLoop);

    var _this = _possibleConstructorReturn(this, (VideoLoop.__proto__ || Object.getPrototypeOf(VideoLoop)).call(this, props));

    _this.state = {
      hover: props.autoplay
    };

    _this.hoverOver = _this.hoverOver.bind(_this);
    _this.hoverOut = _this.hoverOut.bind(_this);
    return _this;
  }

  _createClass(VideoLoop, [{
    key: 'hoverOver',
    value: function hoverOver() {
      this.setState({ hover: true });
    }
  }, {
    key: 'hoverOut',
    value: function hoverOut() {
      this.setState({ hover: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var thumb = this.props.thumb;

      return isMobile ? '' : _react2.default.createElement(_Video2.default, _extends({}, this.props, {
        playing: true,
        thumb: thumb,
        loop: true,
        autoplay: this.props.autoplay || false,
        active: this.state.hover,
        classAdd: this.props.classAdd ? ' ' + this.props.classAdd : '',
        config: {
          vimeo: {
            playerOptions: {
              background: 1,
              autopause: !this.props.autoplay || true,
              autoplay: this.props.autoplay || true
            },
            preload: false
          }
        }
      }));
    }
  }]);

  return VideoLoop;
}(_react2.default.Component);

exports.default = VideoLoop;