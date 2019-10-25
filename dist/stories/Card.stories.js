"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultCard = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Card = _interopRequireDefault(require("../components/Card"));

var _defaults = require("../utils/defaults");

var _default = {
  title: 'Design System|Card',
  component: _Card["default"]
};
exports["default"] = _default;

var DefaultCard = function DefaultCard() {
  return _react["default"].createElement("div", {
    style: {
      width: '50%',
      margin: '50px auto'
    }
  }, _react["default"].createElement(_Card["default"], {
    cardTitle: (0, _addonKnobs.text)('Card Title', _defaults.defaultTitle),
    cardSubTitle: (0, _addonKnobs.text)('Card Subtitle', _defaults.defaultSubTitle),
    cardContent: (0, _addonKnobs.text)('Card Text', _defaults.defaultCopyBlock),
    linkText: (0, _addonKnobs.text)('Link Text', _defaults.defaultCta),
    linkUrl: (0, _addonKnobs.text)('Link Url', ''),
    mediaOrientation: (0, _addonKnobs.select)('Media Orientation', _defaults.contentOrientations, 'top'),
    imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatios, 'standard'),
    fullBleed: (0, _addonKnobs["boolean"])('fullBleed', false),
    imgSource: _defaults.imgSixteenNine,
    verticalAlign: (0, _addonKnobs.select)('Vertical Align', _defaults.verticalAligns, 'center'),
    horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', _defaults.horizontalAligns, 'center')
  }));
};

exports.DefaultCard = DefaultCard;
DefaultCard.story = {
  name: 'Basic Card'
};