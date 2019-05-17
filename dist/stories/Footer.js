'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Footer', module).add('Footer', function () {
  return _react2.default.createElement(_Footer2.default, {
    title1: (0, _addonKnobs.text)('Title 1', 'Chris Baker'),
    subtitle1: (0, _addonKnobs.text)('Subtitle 1', 'Meet Leland Chee, the Star Wars franchise continuity cop'),
    title2: (0, _addonKnobs.text)('Title 2', 'Robert Caps'),
    subtitle2: (0, _addonKnobs.text)('Subtitle 2', 'Why things fail: from tires to helicopter blades, everything breaks eventually')
  });
});