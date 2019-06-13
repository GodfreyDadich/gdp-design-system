'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Pullquotes = require('../components/Pullquotes');

var _Pullquotes2 = _interopRequireDefault(_Pullquotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Pullquote', module).add('Standard Pullquote', function () {
  return _react2.default.createElement(_Pullquotes2.default, { type: 'pullquote-text', classAdd: 'testadd' });
}).add('Left Carving', function () {
  return _react2.default.createElement(_Pullquotes2.default, { type: 'left-carving', classAdd: 'testadd' });
}).add('Quote Block', function () {
  return _react2.default.createElement(_Pullquotes2.default, { type: 'quote-block', classAdd: 'testadd' });
}).add('Sidebar Quote', function () {
  return _react2.default.createElement(_Pullquotes2.default, { type: 'sidebar-quote', classAdd: 'testadd' });
});