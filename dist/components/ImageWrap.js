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
      children = _ref.children,
      imgSource = _ref.imgSource,
      horizontalAlign = _ref.horizontalAlign,
      verticalAlign = _ref.verticalAlign,
      sideBar = _ref.sideBar,
      isVisible = _ref.isVisible,
      skipIntro = _ref.skipIntro;
  return _react2.default.createElement(
    'div',
    { className: 'imageWrap ' + aspectRatio + ' ' + (fullBleed ? 'fullBleed' : ''),
      style: {
        backgroundImage: '' + (aspectRatio !== 'noAspect' && isVisible ? 'url(' + imgSource + ')' : ''),
        backgroundSize: 'cover',
        backgroundPositionX: horizontalAlign,
        backgroundPositionY: verticalAlign,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: 'auto',
        overflow: '' + (!sideBar ? 'hidden' : 'visible'),
        paddingTop: paddingRef[aspectRatio],
        opacity: isVisible ? 1 : 0,
        top: isVisible || skipIntro ? '0px' : '15px',
        transition: 'opacity 0.5s, top 0.5s',
        transitionDelay: '1s'
      }
    },
    isVisible ? _react2.default.cloneElement(children) : ''
  );
};

exports.default = ImageWrap;