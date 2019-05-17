'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Select = require('../components/Select');

var _Select2 = _interopRequireDefault(_Select);

var _SelectNative = require('../components/SelectNative');

var _SelectNative2 = _interopRequireDefault(_SelectNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Select', module).add('Styled Native', function () {
  return _react2.default.createElement(_SelectNative2.default, {
    selectFont: (0, _addonKnobs.select)('Font', ['sans-serif', 'serif'], 'sans-serif'),
    backgroundColor: (0, _addonKnobs.color)('Background Color', '#fff', 'Colors'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Options', 'content'),
    options: (0, _addonKnobs.array)('Options', ['option1', 'option2', 'option3'], ',', 'content'),
    selectPadding: (0, _addonKnobs.number)('Padding', 5),
    textColor: (0, _addonKnobs.color)('Text Color', '#000', 'Colors'),
    borderWidth: (0, _addonKnobs.number)('Border Width', 1),
    borderColor: (0, _addonKnobs.color)('Border Color', '#000', 'Colors'),
    fontSize: (0, _addonKnobs.number)('Font Size', 12),
    selectIcon: (0, _addonKnobs.select)('Icon', ['triangle', 'caret', 'chevron'], 'triangle'),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    borderRadius: (0, _addonKnobs.number)('Rounded Corners', 0, { range: true, min: 0, max: 30, step: 1 })
  });
}).add('Styled Custom (beta)', function () {
  return _react2.default.createElement(_Select2.default, {
    selectFont: (0, _addonKnobs.select)('Font', ['sans-serif', 'serif'], 'sans-serif'),
    backgroundColor: (0, _addonKnobs.color)('Background Color', '#fff', 'Colors'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Options', 'content'),
    options: (0, _addonKnobs.array)('Options', ['option1', 'option2', 'option3'], ',', 'content'),
    selectPadding: (0, _addonKnobs.number)('Padding', 5),
    textColor: (0, _addonKnobs.color)('Text Color', '#000', 'Colors'),
    borderWidth: (0, _addonKnobs.number)('Border Width', 1),
    borderColor: (0, _addonKnobs.color)('Border Color', '#000', 'Colors'),
    fontSize: (0, _addonKnobs.number)('Font Size', 12),
    selectIcon: (0, _addonKnobs.select)('Icon', ['triangle', 'caret', 'chevron'], 'triangle'),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    borderRadius: (0, _addonKnobs.number)('Rounded Corners', 0, { range: true, min: 0, max: 30, step: 1 })
  });
});