'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Chips = require('../components/Chips');

var _Chips2 = _interopRequireDefault(_Chips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chips = ['chip 1', 'chip 2', 'chip 3'];

var chipRemove = function chipRemove(toRemove) {
  chips.splice(toRemove, 1);
};

(0, _react3.storiesOf)('Chips', module).add('chips', function () {
  return _react2.default.createElement(_Chips2.default, {
    chips: (0, _addonKnobs.array)('Chips', chips, ','),
    closeCallback: chipRemove
  });
});