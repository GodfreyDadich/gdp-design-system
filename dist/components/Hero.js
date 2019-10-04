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

var _Image = _interopRequireDefault(require("./Image"));

var _Video = _interopRequireDefault(require("./Video"));

var _supportsWebp = _interopRequireDefault(require("supports-webp"));

// import PropTypes from 'prop-types'
var Hero =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Hero, _React$Component);

  function Hero(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Hero);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Hero).call(this, props));
    _this.state = {
      zoomClass: '',
      heroReady: false,
      imgSource: '',
      source: props.source,
      title: props.title,
      thumb: props.thumb,
      type: props.type
    };
    return _this;
  }

  (0, _createClass2["default"])(Hero, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.type === 'image' && this.props.withZoom === 'true') {
        this.initZoom();
      }

      this.setState({
        heroReady: true,
        imgSource: _supportsWebp["default"] && this.props.type === 'image' && this.props.source.includes('d36aj1cv2i74vd') ? this.props.source.replace('/attachments', '/filters:format(webp)/attachments') : this.props.source
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.source !== this.props.source) {
        this.setState({
          imgSource: _supportsWebp["default"] && nextProps.type === 'image' && nextProps.source.includes('d36aj1cv2i74vd') ? nextProps.source.replace('/attachments', '/filters:format(webp)/attachments') : nextProps.source,
          source: nextProps.source,
          title: nextProps.title,
          thumb: nextProps.thumb,
          type: nextProps.type
        });
      }
    }
  }, {
    key: "initZoom",
    value: function initZoom() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          zoomClass: 'zoomedIn'
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          source = _this$state.source,
          title = _this$state.title,
          thumb = _this$state.thumb,
          heroReady = _this$state.heroReady,
          imgSource = _this$state.imgSource,
          type = _this$state.type;
      return _react["default"].createElement("div", {
        className: "jsx-2634941183" + " " + 'hero'
      }, function () {
        switch (type) {
          case 'image':
            return _react["default"].createElement(_Image["default"], {
              imageTitle: title,
              aspectRatio: "sixteen",
              fullBleed: "true",
              verticalAlign: "center",
              skipIntro: true,
              horizontalAlign: "center",
              imgSource: heroReady ? imgSource : '',
              classAdd: _this3.state.zoomClass
            });

          case 'video':
            return _react["default"].createElement(_Video["default"], {
              videoTitle: title,
              aspectRatio: "sixteen",
              fullBleed: "true",
              controls: false,
              autoplay: true,
              skipIntro: true,
              loop: true,
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
      }(), _react["default"].createElement(_style["default"], {
        id: "2634941183"
      }, ".hero.jsx-2634941183{overflow:hidden;margin-bottom:59px;}"));
    }
  }]);
  return Hero;
}(_react["default"].Component); // this component will need to be converted to a functional component to work with proptypes
// Hero.PropTypes = {
//   type: PropTypes.oneOf(['image', 'video'])
// }
// Hero.defaultProps = {
//   type: 'image'
// }


var _default = Hero;
exports["default"] = _default;