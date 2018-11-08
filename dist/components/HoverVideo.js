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

var HoverVideo = function HoverVideo(props) {
  return _react2.default.createElement(_Video2.default, _extends({}, props, {
    hoverPlay: true,
    playing: false,
    autoplay: false,
    classAdd: 'hoverVid' + (props.classAdd ? ' ' + props.classAdd : ''),
    config: {
      vimeo: {
        playerOptions: {
          background: 1,
          autopause: true,
          autoplay: false
        },
        preload: false
      }
    }
  }));
};

exports.default = HoverVideo;