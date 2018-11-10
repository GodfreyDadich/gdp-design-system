'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Video = require('./Video');

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceVideo = function DeviceVideo(props) {
  return _react2.default.createElement(
    'div',
    { style: {
        // backgroundImage: 'url(http://gdp-node-test.appspot.com/w1280/For_Blaine/Google/DEVICES/Black_Galaxy_Shadow.png)',
        // backgroundSize: 'cover'
      } },
    _react2.default.createElement(_Video2.default, _extends({}, props, {
      deviceVid: true,
      playing: true,
      autoplay: true,
      loop: true,
      aspectRatio: 'standard',
      classAdd: '' + (props.classAdd ? ' ' + props.classAdd : ''),
      config: {
        vimeo: {
          playerOptions: {
            background: 1,
            autopause: false,
            autoplay: true
          },
          preload: true
        }
      }
    }))
  );
};
exports.default = DeviceVideo;