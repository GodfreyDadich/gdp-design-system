'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

var _reactOnScreen = require('react-on-screen');

var _reactOnScreen2 = _interopRequireDefault(_reactOnScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HoverVideo = function HoverVideo(_ref) {
  var title = _ref.title,
      aspectRatio = _ref.aspectRatio,
      fullBleed = _ref.fullBleed,
      source = _ref.source;
  return _react2.default.createElement(
    _reactOnScreen2.default,
    { once: true },
    _react2.default.createElement(_Video2.default, {
      videoTitle: title,
      aspectRatio: aspectRatio,
      fullBleed: fullBleed,
      vidSource: source,
      hoverPlay: true,
      loadLazy: true,
      autoplay: false,
      config: {
        vimeo: {
          playerOptions: {
            background: 1
          },
          preload: false
        }
      }
    })
  );
};

exports.default = HoverVideo;