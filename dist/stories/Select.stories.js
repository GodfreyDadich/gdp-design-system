"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCustom = exports.StyledNative = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Select = _interopRequireDefault(require("../components/Select"));

var _SelectNative = _interopRequireDefault(require("../components/SelectNative"));

var _default = {
  title: 'Design System|Select'
};
exports["default"] = _default;

var StyledNative = function StyledNative() {
  return _react["default"].createElement(_SelectNative["default"], {
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
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    borderRadius: (0, _addonKnobs.number)('Rounded Corners', 0, {
      range: true,
      min: 0,
      max: 30,
      step: 1
    })
  });
};

exports.StyledNative = StyledNative;

var StyledCustom = function StyledCustom() {
  return _react["default"].createElement(_Select["default"], {
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
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    borderRadius: (0, _addonKnobs.number)('Rounded Corners', 0, {
      range: true,
      min: 0,
      max: 30,
      step: 1
    })
  });
};

exports.StyledCustom = StyledCustom;