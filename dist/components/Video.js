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
  left: 0
};

var Video = function Video(_ref) {
  var vidSource = _ref.vidSource,
      classAdd = _ref.classAdd,
      controls = _ref.controls,
      loop = _ref.loop,
      autoplay = _ref.autoplay;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1708626508' + ' ' + ('vidWrap sixteen ' + classAdd)
    },
    _react2.default.createElement(_reactPlayer2.default, { url: vidSource, autoplay: autoplay, loop: loop, controls: controls, width: '100%', height: '100%', style: vidStyle }),
    _react2.default.createElement(_style2.default, {
      styleId: '1708626508',
      css: '.vidWrap.jsx-1708626508{position:relative;width:100%;overflow:hidden;height:auto;background-size:cover;background-repeat:no-repeat;}.vidWrap.sixteen.jsx-1708626508{padding-top:56.25%;}.vidWrap.standard.jsx-1708626508{padding-top:75%;}.vidWrap.cropped.jsx-1708626508{padding-top:39.06%;}.vidWrap.square.jsx-1708626508{padding-top:100%;}.wrappedVideo.jsx-1708626508{position:absolute;top:0;left:0;width:100%;height:100%;}'
    })
  );
};

exports.default = Video;