'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = function (_React$Component) {
  (0, _inherits3.default)(Hero, _React$Component);

  function Hero(props) {
    (0, _classCallCheck3.default)(this, Hero);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Hero.__proto__ || (0, _getPrototypeOf2.default)(Hero)).call(this, props));

    _this.state = {
      zoomClass: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Hero, [{
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