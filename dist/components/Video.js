'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'tranparent'
};

var videoReady = function videoReady(_ref) {
  var player = _ref.player;

  player.player.callPlayer('pause');
};
var Video = function Video(_ref2) {
  var vidSource = _ref2.vidSource,
      classAdd = _ref2.classAdd,
      controls = _ref2.controls,
      loop = _ref2.loop,
      autoplay = _ref2.autoplay,
      config = _ref2.config,
      chromeLess = _ref2.chromeLess;
  return _react2.default.createElement(
    'div',
    { className: 'video ' + classAdd },
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-2625870952' + ' ' + 'vidWrap sixteen'
      },
      chromeLess ? _react2.default.createElement('iframe', {
        src: 'https://player.vimeo.com/video/' + vidSource.split('.com/')[1] + '?background=1&loop=' + (loop ? '1' : '0') + '&autoplay=' + (autoplay ? '1' : '0'),
        width: '100%', height: '100%',
        style: vidStyle,
        frameborder: '0', className: 'jsx-2625870952'
      }) : _react2.default.createElement(_reactPlayer2.default, {
        url: vidSource,
        playing: autoplay,
        loop: loop,
        controls: controls,
        width: '100%',
        height: '100%',
        style: vidStyle,
        config: config,
        onReady: videoReady
      }),
      _react2.default.createElement(_style2.default, {
        styleId: '2625870952',
        css: '.vidWrap.jsx-2625870952{position:relative;width:100%;overflow:hidden;height:auto;background-size:cover;background-repeat:no-repeat;}.vidWrap.sixteen.jsx-2625870952{padding-top:56.25%;}.vidWrap.standard.jsx-2625870952{padding-top:75%;}.vidWrap.cropped.jsx-2625870952{padding-top:39.06%;}.vidWrap.square.jsx-2625870952{padding-top:100%;}.wrappedVideo.jsx-2625870952{position:absolute;top:0;left:0;width:100%;height:100%;}'
      })
    )
  );
};

exports.default = Video;