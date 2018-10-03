'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero(props) {
    _classCallCheck(this, Hero);

    var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));

    _this.state = {
      zoomClass: ''
    };
    return _this;
  }

  _createClass(Hero, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.type === 'image' && this.props.withZoom === 'true') {
        this.initZoom();
      }
    }
  }, {
    key: 'initZoom',
    value: function initZoom() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ zoomClass: 'zoomedIn' });
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          type = _props.type,
          source = _props.source,
          withZoom = _props.withZoom,
          title = _props.title,
          loop = _props.loop;

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-3250871479' + ' ' + 'hero'
        },
        function () {
          switch (_this3.props.type) {
            case 'image':
              return _react2.default.createElement(_Image2.default, {
                imageTitle: 'Image Title',
                aspectRatio: 'sixteen',
                fullBleed: 'true',
                imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg',
                ref: 'hero__image',
                classAdd: _this3.state.zoomClass });
            case 'video':
              return _react2.default.createElement(_Video2.default, {
                videoTitle: 'Video Title',
                aspectRatio: 'sixteen',
                fullBleed: 'true',
                loop: 'true',
                controls: 'false',
                vidSource: 'https://s3-us-west-1.amazonaws.com/gdp-site/videos/ADMN012_Abstract1_Devlin_loop_clip.mp4' });
            default:
              return null;
          }
        }(),
        _react2.default.createElement(_style2.default, {
          styleId: '3250871479',
          css: ''
        })
      );
    }
  }]);

  return Hero;
}(_react2.default.Component);

exports.default = Hero;