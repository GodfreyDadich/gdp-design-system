'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstaEmbed = function InstaEmbed(_ref) {
  var image = _ref.image;

  return _react2.default.createElement(
    'div',
    { className: 'podcasts' },
    _react2.default.createElement(
      'h2',
      null,
      'Instagram'
    ),
    _react2.default.createElement('iframe', { src: 'https://www.instagram.com/p/BoKe0X7hD0d/embed/', style: { width: '600px', height: '802px', border: '0 none' }, scrolling: 'no' })
  );
};

exports.default = InstaEmbed;