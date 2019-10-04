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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactPlayer = _interopRequireDefault(require("react-player"));

var _Type = require("./Type");

var _reactOnScreen = _interopRequireDefault(require("react-on-screen"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _reactDeviceDetect = require("react-device-detect");

var _supportsWebp = _interopRequireDefault(require("supports-webp"));

var vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'transparent',
  border: 'none'
};

var Video =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Video, _React$Component);

  function Video(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Video);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Video).call(this, props));
    _this.state = {
      playing: props.autoplay || false,
      player: undefined,
      vidSource: '',
      hoverPlay: props.hoverPlay || false,
      autoplay: props.autoplay || false,
      coverVisible: true,
      isLoading: props.loader,
      active: props.active || false,
      playerReady: false,
      isMobile: true,
      isMobileOnly: true,
      thumb: '',
      mouseIgnore: _this.props.config && _this.props.config.vimeo.playerOptions.background === 1
    };
    _this.play = _this.play.bind((0, _assertThisInitialized2["default"])(_this));
    _this.pause = _this.pause.bind((0, _assertThisInitialized2["default"])(_this));
    _this.videoReady = _this.videoReady.bind((0, _assertThisInitialized2["default"])(_this));
    _this.videoOnPlay = _this.videoOnPlay.bind((0, _assertThisInitialized2["default"])(_this));
    _this.videoOnEnd = _this.videoOnEnd.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Video, [{
    key: "play",
    value: function play() {
      this.setState({
        playing: true
      });

      if (this.state.player) {
        this.state.player.callPlayer('setCurrentTime', 0);
        this.state.player.callPlayer('setLoop', true);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.setState({
        playing: false
      });

      if (this.state.player) {
        this.state.player.stop();
      }
    }
  }, {
    key: "videoReady",
    value: function videoReady(_ref) {
      var player = _ref.player;
      // pauses the player on load if autoplay isn't set to true
      this.pause();
      player.player.stop();
      this.setState({
        player: player.player,
        coverVisible: this.state.hoverPlay,
        isLoading: this.state.isLoading ? this.state.autoplay : false,
        playerReady: true,
        playing: this.state.autoplay
      });
    }
  }, {
    key: "videoOnPlay",
    value: function videoOnPlay() {
      if (!this.state.hoverPlay) {
        this.setState({
          coverVisible: false,
          isLoading: false
        });
      }
    }
  }, {
    key: "videoOnEnd",
    value: function videoOnEnd() {
      if (typeof this.props.onEnd === 'function') {
        this.props.onEnd();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMobile: _reactDeviceDetect.isMobile,
        isMobileOnly: _reactDeviceDetect.isMobileOnly,
        thumb: this.translateThumbUrl(this.props.thumb, _reactDeviceDetect.isMobileOnly)
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active && !this.state.playing) {
        this.setState({
          playing: true
        });
        this.play();
      } else if (!nextProps.active && this.state.playing) {
        if (this.state.player) {
          this.state.player.stop();
        }

        this.setState({
          playing: false,
          coverVisible: true
        });
      }
    }
  }, {
    key: "translateThumbUrl",
    value: function translateThumbUrl(thumbUrl, isMobileOnly) {
      var ext = _supportsWebp["default"] ? 'webp' : 'jpg';
      var vidID = thumbUrl.split('video/')[1].split('_')[0];
      var imgParams = isMobileOnly ? 'mw=400&q=70' : 'mw=2800&q=70';
      return "https://i.vimeocdn.com/video/".concat(vidID, ".").concat(ext, "?").concat(imgParams);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          vidSource = _this$props.vidSource,
          classAdd = _this$props.classAdd,
          controls = _this$props.controls,
          autoplay = _this$props.autoplay,
          loop = _this$props.loop,
          config = _this$props.config,
          hoverPlay = _this$props.hoverPlay,
          skipIntro = _this$props.skipIntro,
          loadActive = _this$props.loadActive,
          caption = _this$props.caption,
          sideBar = _this$props.sideBar,
          style = _this$props.style,
          regPlay = _this$props.regPlay,
          active = _this$props.active,
          mouseOverAction = _this$props.mouseOverAction,
          mouseOutAction = _this$props.mouseOutAction,
          _this$props$muted = _this$props.muted,
          muted = _this$props$muted === void 0 ? true : _this$props$muted,
          _this$props$aspectRat = _this$props.aspectRatio,
          aspectRatio = _this$props$aspectRat === void 0 ? 'sixteen' : _this$props$aspectRat,
          _this$props$customPad = _this$props.customPadding,
          customPadding = _this$props$customPad === void 0 ? '0' : _this$props$customPad;
      var _this$state = this.state,
          playing = _this$state.playing,
          playerReady = _this$state.playerReady,
          thumb = _this$state.thumb;
      return _react["default"].createElement("div", {
        onMouseEnter: mouseOverAction,
        onMouseLeave: mouseOutAction,
        style: style,
        className: "jsx-1710641388" + " " + "video".concat(hoverPlay ? ' hoverVid' : '').concat(playerReady ? ' playerReady' : '').concat(caption && caption.length > 0 ? ' withCaption' : '')
      }, _react["default"].createElement(_reactOnScreen["default"], {
        once: true,
        partialVisibility: true,
        className: classAdd
      }, function (_ref2) {
        var isVisible = _ref2.isVisible;
        return _react["default"].createElement("div", {
          style: {
            position: 'relative',
            top: isVisible || skipIntro ? '0px' : '15px',
            opacity: isVisible || loadActive ? '1' : '0',
            transition: 'opacity 0.5s, top 0.5s',
            transitionDelay: '0.75s'
          },
          className: "jsx-1710641388"
        }, _react["default"].createElement("div", {
          style: aspectRatio === 'custom' ? {
            paddingTop: customPadding
          } : {},
          className: "jsx-1710641388" + " " + "vidWrap ".concat(aspectRatio).concat(active ? ' active' : '')
        }, _react["default"].createElement("div", {
          className: "jsx-1710641388"
        }, _react["default"].createElement("div", {
          ref: "videoCover",
          style: {
            backgroundImage: "url(".concat(thumb, ")"),
            backgroundPosition: "".concat(isVisible && !_this2.state.isLoading ? 'center center' : '100vw 100vw'),
            backgroundColor: hoverPlay || regPlay ? 'transparent' : '#000',
            display: _this2.state.coverVisible ? 'inline-block' : 'none'
          },
          className: "jsx-1710641388" + " " + 'videoCover'
        }, _this2.state.isLoading ? _react["default"].createElement(_Loader["default"], null) : '', " "), _this2.state.isMobile && (regPlay || hoverPlay) ? '' : _react["default"].createElement(_reactPlayer["default"], {
          url: autoplay ? vidSource : isVisible || loadActive ? vidSource : '',
          playing: playing,
          volume: autoplay ? 0 : 1,
          muted: muted,
          loop: loop,
          controls: controls,
          width: "100%",
          height: "100%",
          style: vidStyle,
          config: config,
          onReady: _this2.videoReady,
          onPlay: _this2.videoOnPlay,
          onEnded: _this2.videoOnEnd
        }))), sideBar ? _react["default"].createElement(_Type.SideBar, {
          sideBar: sideBar,
          isVisible: true
        }) : '');
      }), caption && caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
        classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
      }, caption) : '', _react["default"].createElement(_style["default"], {
        id: "1710641388"
      }, ".video.jsx-1710641388{position:relative;}.vidWrap.jsx-1710641388{position:relative;width:100%;overflow:hidden;height:auto;}.vidWrap.sixteen.jsx-1710641388{padding-top:56.25%;}.vidWrap.standard.jsx-1710641388{padding-top:75%;}.vidWrap.cropped.jsx-1710641388{padding-top:41.67%;}.vidWrap.cinema.jsx-1710641388{padding-top:46.89%;}.vidWrap.square.jsx-1710641388{padding-top:100%;}.wrappedVideo.jsx-1710641388,.videoCover.jsx-1710641388{position:absolute;top:0;left:0;width:100%;height:100%;z-index:15;}.videoCover.jsx-1710641388{opacity:1;z-index:20;background-size:cover;background-repeat:no-repeat;-webkit-transition:opacity 0s;transition:opacity 0s;-webkit-transition-delay:0s;transition-delay:0s;}.hoverVid.playerReady.jsx-1710641388 .vidWrap.active.jsx-1710641388 .videoCover.jsx-1710641388{opacity:0;-webkit-transition:opacity 0.2s;transition:opacity 0.2s;-webkit-transition-delay:0.15s;transition-delay:0.15s;}"));
    }
  }]);
  return Video;
}(_react["default"].Component);

var _default = Video;
exports["default"] = _default;