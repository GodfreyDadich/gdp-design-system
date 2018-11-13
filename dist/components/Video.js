'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLazyLoad = require('react-lazy-load');

var _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _Type = require('./Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'tranparent'
};

var Video = function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video(props) {
    _classCallCheck(this, Video);

    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

    _this.state = {
      playing: props.autoplay,
      player: undefined,
      vidSource: '',
      hoverPlay: props.hoverPlay,
      autoplay: props.autoplay
    };
    _this.play = _this.play.bind(_this);
    _this.pause = _this.pause.bind(_this);
    _this.videoReady = _this.videoReady.bind(_this);
    _this.loadVideo = _this.loadVideo.bind(_this);
    _this.videoOnPlay = _this.videoOnPlay.bind(_this);
    // this.videoOnEnd = this.videoOnEnd.bind(this)
    return _this;
  }

  _createClass(Video, [{
    key: 'play',
    value: function play() {
      this.setState({
        playing: true
      });
      if (this.state.player) {
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
      console.log(' player ready ');
      if (!this.state.autoplay) {
        player.player.pause();
        player.player.stop();
      }
      if (!this.state.hoverPlay) {
        this.refs.hoverCover.style.display = 'none';
      }
      this.setState({
        player: player.player
      });
    }
  }, {
    key: 'loadVideo',
    value: function loadVideo(vidSource) {
      this.setState({
        vidSource: vidSource
      });
    }
  }, {
    key: 'videoOnPlay',
    value: function videoOnPlay() {
      if (!this.state.hoverPlay) {
        this.refs.hoverCover.style.display = 'none';
      }
    }
    // videoOnEnd (hoverPlay) {

    // }

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
          thumb = _props.thumb,
          caption = _props.caption,
          sideBar = _props.sideBar,
          _props$aspectRatio = _props.aspectRatio,
          aspectRatio = _props$aspectRatio === undefined ? 'sixteen' : _props$aspectRatio;
      var playing = this.state.playing;

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-2664932041' + ' ' + ('video' + (hoverPlay ? ' hoverVid' : ''))
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-2664932041' + ' ' + ('' + classAdd)
          },
          _react2.default.createElement(
            'div',
            { style: { position: 'relative' }, className: 'jsx-2664932041'
            },
            ' ',
            _react2.default.createElement(
              'div',
              {
                onMouseEnter: hoverPlay ? this.play : undefined,
                onMouseLeave: hoverPlay ? this.pause : undefined,
                className: 'jsx-2664932041' + ' ' + ('vidWrap ' + aspectRatio)
              },
              _react2.default.createElement(
                _reactLazyLoad2.default,
                {
                  offsetVertical: 1000,
                  debounce: false,
                  onContentVisible: function onContentVisible() {
                    _this2.loadVideo(vidSource);
                  } },
                _react2.default.createElement(
                  'div',
                  {
                    className: 'jsx-2664932041'
                  },
                  _react2.default.createElement('div', {
                    ref: 'hoverCover',

                    style: {
                      backgroundImage: 'url(' + thumb + ')'
                    }, className: 'jsx-2664932041' + ' ' + 'hoverCover'
                  }),
                  _react2.default.createElement(_reactPlayer2.default, {
                    url: autoplay ? vidSource : this.state.vidSource,
                    playing: playing,
                    loop: loop,
                    controls: controls,
                    width: '100%',
                    height: '100%',
                    style: vidStyle,
                    config: config,
                    onReady: this.videoReady,
                    onPlay: this.videoOnPlay
                    // onEnded={() => { this.videoOnEnd(hoverPlay) }}
                  })
                )
              )
            ),
            sideBar ? _react2.default.createElement(_Type.SideBar, { sideBar: sideBar }) : ''
          )
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-3' },
          caption
        ) : '',
        _react2.default.createElement(_style2.default, {
          styleId: '2664932041',
          css: '.video.jsx-2664932041{position:relative;}.vidWrap.jsx-2664932041{position:relative;width:100%;overflow:hidden;height:auto;}.vidWrap.sixteen.jsx-2664932041{padding-top:56.25%;}.vidWrap.standard.jsx-2664932041{padding-top:75%;}.vidWrap.cropped.jsx-2664932041{padding-top:41.67%;}.vidWrap.cinema.jsx-2664932041{padding-top:46.89%;}.vidWrap.square.jsx-2664932041{padding-top:100%;}.wrappedVideo.jsx-2664932041,.hoverCover.jsx-2664932041{position:absolute;top:0;left:0;width:100%;height:100%;z-index:15;}.hoverCover.jsx-2664932041{opacity:1;z-index:20;background-size:cover;background-repeat:no-repeat;-webkit-transition:0s opacity;transition:0s opacity;}.hoverCover.jsx-2664932041:hover{opacity:0;-webkit-transition-delay:.2s;transition-delay:.2s;}'
        })
      );
    }
  }]);

  return Video;
}(_react2.default.Component);

exports.default = Video;