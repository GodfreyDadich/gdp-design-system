'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _GilmoreWave = require('../components/GilmoreWave');

var _GilmoreWave2 = _interopRequireDefault(_GilmoreWave);

var _GilmoreExpand = require('../components/GilmoreExpand');

var _GilmoreExpand2 = _interopRequireDefault(_GilmoreExpand);

var _GilmoreExpand3 = require('../components/GilmoreExpand2');

var _GilmoreExpand4 = _interopRequireDefault(_GilmoreExpand3);

var _GilmoreMobile = require('../components/GilmoreMobile');

var _GilmoreMobile2 = _interopRequireDefault(_GilmoreMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Gilmore', module).add('Gilmore Wave Animation', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '100%' } },
    _react2.default.createElement(_GilmoreWave2.default, { animated: (0, _addonKnobs.boolean)('animated', false) }),
    ' '
  );
}).add('Gilmore Expand Animation', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '75%' } },
    _react2.default.createElement(_GilmoreExpand2.default, null),
    ' '
  );
}).add('Gilmore Expand 2 Animation', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '75%' } },
    _react2.default.createElement(_GilmoreExpand4.default, null),
    ' '
  );
}).add('Gilmore Mobile', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '30%', height: '100vh', background: '#000' } },
    _react2.default.createElement(_GilmoreMobile2.default, null),
    ' '
  );
});