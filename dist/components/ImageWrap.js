'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paddingRef = {
  sixteen: '56.25%',
  standard: '75%',
  cropped: '41.67%',
  square: '100%'
};
var ImageWrap = function ImageWrap(_ref) {
  var aspectRatio = _ref.aspectRatio,
      fullBleed = _ref.fullBleed,
      classAdd = _ref.classAdd,
      children = _ref.children,
      imgSource = _ref.imgSource,
      horizontalAlign = _ref.horizontalAlign,
      verticalAlign = _ref.verticalAlign,
      sideBar = _ref.sideBar,
      opacity = _ref.opacity;
  return _react2.default.createElement(
    'div',
    { className: 'imageWrap ' + (fullBleed ? 'fullBleed' : ''),
      style: {
        background: '' + (aspectRatio !== 'noAspect' ? 'url(' + imgSource + ')' : '#f2f2f2'),
        backgroundSize: 'cover',
        backgroundPositionX: horizontalAlign,
        backgroundPositionY: verticalAlign,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: 'auto',
        overflow: '' + (!sideBar ? 'hidden' : 'visible'),
        paddingTop: paddingRef[aspectRatio]
      }
    },
    children
  );
};

exports.default = ImageWrap;