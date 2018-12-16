'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _Type = require('./Type');

var _reactOnScreen = require('react-on-screen');

var _reactOnScreen2 = _interopRequireDefault(_reactOnScreen);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _reactDeviceDetect = require('react-device-detect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'transparent'
};

var Video = function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video(props) {
    _classCallCheck(this, Video);

    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

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
      mouseIgnore: _this.props.config && _this.props.config.vimeo.playerOptions.background === 1
    };
    _this.play = _this.play.bind(_this);
    _this.pause = _this.pause.bind(_this);
    _this.videoReady = _this.videoReady.bind(_this);
    _this.videoOnPlay = _this.videoOnPlay.bind(_this);
    _this.videoOnEnd = _this.videoOnEnd.bind(_this);
    return _this;
  }

  _createClass(Video, [{
    key: 'play',
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
    key: 'pause',
    value: function pause() {
      this.setState({
        playing: false
      });
      if (this.state.player) {
        this.state.player.stop();
      }
    }
  }, {
    key: 'videoReady',
    value: function videoReady(_ref) {
      var player = _ref.player;
      // pauses the player on load if autoplay isn't set to true
      if (!this.state.autoplay) {
        player.player.pause();
        player.player.stop();
      }
      this.setState({
        player: player.player,
        coverVisible: this.state.hoverPlay || this.state.autoplay,
        isLoading: this.state.isLoading ? this.state.autoplay : false,
        playerReady: true
      });
    }
  }, {
    key: 'videoOnPlay',
    value: function videoOnPlay() {
      if (!this.state.hoverPlay) {
        this.setState({
          coverVisible: false,
          isLoading: false
        });
      }
    }
  }, {
    key: 'videoOnEnd',
    value: function videoOnEnd() {
      if (typeof this.props.onEnd === 'function') {
        this.props.onEnd();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        isMobile: _reactDeviceDetect.isMobile
      });
    }
  }, {
    key: 'componentWillReceiveProps',
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          vidSource = _props.vidSource,
          classAdd = _props.classAdd,
          controls = _props.controls,
          autoplay = _props.autoplay,
          loop = _props.loop,
          config = _props.config,
          hoverPlay = _props.hoverPlay,
          skipIntro = _props.skipIntro,
          thumb = _props.thumb,
          caption = _props.caption,
          sideBar = _props.sideBar,
          style = _props.style,
          active = _props.active,
          mouseOverAction = _props.mouseOverAction,
          mouseOutAction = _props.mouseOutAction,
          _props$aspectRatio = _props.aspectRatio,
          aspectRatio = _props$aspectRatio === undefined ? 'sixteen' : _props$aspectRatio;
      var _state = this.state,
          playing = _state.playing,
          playerReady = _state.playerReady;

      return _react2.default.createElement(
        'div',
        {
          onMouseEnter: mouseOverAction,
          onMouseLeave: mouseOutAction,
          style: style,
          className: 'jsx-746418569' + ' ' + ('video' + (hoverPlay ? ' hoverVid' : '') + (playerReady ? ' playerReady' : '') + (caption && caption.length > 0 ? ' withCaption' : ''))
        },
        _react2.default.createElement(
          _reactOnScreen2.default,
          { once: true, partialVisibility: true, className: classAdd },
          function (_ref2) {
            var isVisible = _ref2.isVisible;
            return _react2.default.createElement(
              'div',
              {
                style: {
                  position: 'relative',
                  top: isVisible || skipIntro ? '0px' : '15px',
                  opacity: isVisible ? '1' : '0',
                  transition: 'opacity 0.5s, top 0.5s',
                  transitionDelay: '0.75s'
                },
                className: 'jsx-746418569'
              },
              _react2.default.createElement(
                'div',
                {
                  className: 'jsx-746418569' + ' ' + ('vidWrap ' + aspectRatio + (active ? ' active' : ''))
                },
                _react2.default.createElement(
                  'div',
                  {
                    className: 'jsx-746418569'
                  },
                  _react2.default.createElement(
                    'div',
                    {
                      ref: 'videoCover',

                      style: {
                        backgroundImage: 'url(' + thumb + ')',
                        backgroundPosition: '' + (isVisible && !_this2.state.isLoading ? 'center center' : '100vw 100vw'),
                        backgroundColor: hoverPlay ? 'transparent' : '#000',
                        display: _this2.state.coverVisible ? 'inline-block' : 'none'
                      }, className: 'jsx-746418569' + ' ' + 'videoCover'
                    },
                    _this2.state.isLoading ? _react2.default.createElement(_Loader2.default, null) : '',
                    ' '
                  ),
                  _this2.state.isMobile && hoverPlay ? '' : _react2.default.createElement(_reactPlayer2.default, {
                    url: autoplay ? vidSource : isVisible ? vidSource : '',
                    playing: playing,
                    loop: loop,
                    controls: controls,
                    width: '100%',
                    height: '100%',
                    style: vidStyle,
                    config: config,
                    onReady: _this2.videoReady,
                    onPlay: _this2.videoOnPlay,
                    onEnded: _this2.videoOnEnd
                  })
                )
              ),
              sideBar ? _react2.default.createElement(_Type.SideBar, { sideBar: sideBar, isVisible: true }) : ''
            );
          }
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-3' },
          caption
        ) : '',
        _react2.default.createElement(_style2.default, {
          styleId: '746418569',
          css: '.video.jsx-746418569{position:relative;}.vidWrap.jsx-746418569{position:relative;width:100%;overflow:hidden;height:auto;}.vidWrap.sixteen.jsx-746418569{padding-top:56.25%;}.vidWrap.standard.jsx-746418569{padding-top:75%;}.vidWrap.cropped.jsx-746418569{padding-top:41.67%;}.vidWrap.cinema.jsx-746418569{padding-top:46.89%;}.vidWrap.square.jsx-746418569{padding-top:100%;}.wrappedVideo.jsx-746418569,.videoCover.jsx-746418569{position:absolute;top:0;left:0;width:100%;height:100%;z-index:15;}.videoCover.jsx-746418569{opacity:1;z-index:20;background-size:cover;background-repeat:no-repeat;-webkit-transition:0.2s opacity;transition:0.2s opacity;}.hoverVid.playerReady.jsx-746418569 .vidWrap.active.jsx-746418569 .videoCover.jsx-746418569{opacity:0;}'
        })
      );
    }
  }]);

  return Video;
}(_react2.default.Component);

exports.default = Video;