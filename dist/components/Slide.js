'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(_ref) {
  var image = _ref.image,
      renderImage = _ref.renderImage;

  var styles = {
    backgroundImage: 'url(' + image + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    display: 'inline-block',
    verticalAlign: 'top'
  };
  return _react2.default.createElement(
    'div',
    { className: 'slide', style: styles },
    renderImage ? _react2.default.createElement('img', { src: image, style: { width: '100%' } }) : ''
  );
};

exports.default = Slide;