'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(_ref) {
  var image = _ref.image,
      renderImage = _ref.renderImage,
      classAdd = _ref.classAdd;

  var styles = {
    backgroundImage: 'url(' + image + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: renderImage ? 'auto' : '100%',
    height: renderImage ? 'auto' : '100%',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#f2f2f2',
    position: 'relative'
  };
  return _react2.default.createElement(
    'div',
    { className: 'slide ' + !!classAdd, style: styles },
    renderImage ? _react2.default.createElement('img', { src: image, style: { width: '100%' } }) : ''
  );
};

exports.default = Slide;