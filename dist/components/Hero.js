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

var _supportsWebp = require('supports-webp');

var _supportsWebp2 = _interopRequireDefault(_supportsWebp);

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
      zoomClass: '',
      heroReady: false,
      imgSource: ''
    };
    return _this;
  }

  _createClass(Hero, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.type === 'image' && this.props.withZoom === 'true') {
        this.initZoom();
      }
      this.setState({
        heroReady: true,
        imgSource: _supportsWebp2.default && this.props.type === 'image' && this.props.source.includes('d36aj1cv2i74vd') ? this.props.source.replace('/attachments', '/filters:format(webp)/attachments') : this.props.source
      });
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
          title = _props.title,
          thumb = _props.thumb;
      var _state = this.state,
          heroReady = _state.heroReady,
          imgSource = _state.imgSource;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-2634941183' + ' ' + 'hero'
        },
        function () {
          switch (type) {
            case 'image':
              return _react2.default.createElement(_Image2.default, {
                imageTitle: title,
                aspectRatio: 'sixteen',
                fullBleed: 'true',
                verticalAlign: 'center',
                skipIntro: true,
                horizontalAlign: 'center',
                imgSource: heroReady ? imgSource : '',
                classAdd: _this3.state.zoomClass });
            case 'video':
              return _react2.default.createElement(_Video2.default, {
                videoTitle: title,
                aspectRatio: 'sixteen',
                fullBleed: 'true',
                controls: false,
                autoplay: true,
                skipIntro: true,
                loop: false,
                vidSource: source,
                thumb: thumb,
                loader: true,
                config: {
                  vimeo: {
                    playerOptions: {
                      background: 1,
                      transparent: 0,
                      muted: 1,
                      autoplay: 1
                    },
                    preload: false
                  }
                }
              });
            default:
              return null;
          }
        }(),
        _react2.default.createElement(_style2.default, {
          styleId: '2634941183',
          css: '.hero.jsx-2634941183{overflow:hidden;margin-bottom:59px;}'
        })
      );
    }
  }]);

  return Hero;
}(_react2.default.Component);

exports.default = Hero;