'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Loader = require('../components/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Loader', module).add('Logo Loader', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '100%', height: '50vh' } },
    _react2.default.createElement(_Loader2.default, null),
    ' '
  );
});