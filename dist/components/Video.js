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
      playing: false,
      player: undefined
    };
    _this.play = _this.play.bind(_this);
    _this.pause = _this.pause.bind(_this);
    _this.videoReadyPause = _this.videoReadyPause.bind(_this);
    return _this;
  }

  _createClass(Video, [{
    key: 'play',
    value: function play() {
      this.setState({
        playing: true
      });
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.setState({
        playing: false
      });
      this.state.player.stop();
    }
  }, {
    key: 'videoReadyPause',
    value: function videoReadyPause(_ref) {
      var player = _ref.player;
      // pauses the player on load if autoplay isn't set to true
      player.player.pause();
      player.player.stop();
      this.setState({
        player: player.player
      });

      // this.state.player.stop()
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          vidSource = _props.vidSource,
          classAdd = _props.classAdd,
          controls = _props.controls,
          autoplay = _props.autoplay,
          loop = _props.loop,
          config = _props.config,
          hoverPlay = _props.hoverPlay;
      var playing = this.state.playing;

      return _react2.default.createElement(
        'div',
        { className: 'video ' + classAdd },
        _react2.default.createElement(
          'div',
          {
            onMouseEnter: hoverPlay ? this.play : undefined,
            onMouseLeave: hoverPlay ? this.pause : undefined,
            className: 'jsx-795023566' + ' ' + 'vidWrap sixteen'
          },
          _react2.default.createElement(_reactPlayer2.default, {
            url: '' + vidSource,
            playing: playing,
            loop: loop,
            controls: controls,
            width: '100%',
            height: '100%',
            style: vidStyle,
            config: config,
            onReady: autoplay ? null : this.videoReadyPause
          }),
          _react2.default.createElement(_style2.default, {
            styleId: '795023566',
            css: '.vidWrap.jsx-795023566{position:relative;width:100%;overflow:hidden;height:auto;background-size:cover;background-repeat:no-repeat;}.vidWrap.sixteen.jsx-795023566{padding-top:56.25%;}.vidWrap.standard.jsx-795023566{padding-top:75%;}.vidWrap.cropped.jsx-795023566{padding-top:39.06%;}.vidWrap.square.jsx-795023566{padding-top:100%;}.wrappedVideo.jsx-795023566{position:absolute;top:0;left:0;width:100%;height:100%;}'
          })
        )
      );
    }
  }]);

  return Video;
}(_react2.default.Component);

exports.default = Video;