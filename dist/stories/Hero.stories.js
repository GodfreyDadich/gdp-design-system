"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsetHero = exports.LayeredHero = exports.DipticHero = exports.WithVideo = exports.StaticImage = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Hero = _interopRequireDefault(require("../components/Hero"));

var _SideBySide = _interopRequireDefault(require("../components/SideBySide"));

var _Layered = _interopRequireDefault(require("../components/Layered"));

var _Inset = _interopRequireDefault(require("../components/Inset"));

var _defaults = require("../utils/defaults");

var _default = {
  title: 'Design System|Hero',
  component: _Hero["default"]
};
exports["default"] = _default;

var StaticImage = function StaticImage() {
  return _react["default"].createElement(_Hero["default"], {
    type: "image",
    source: _defaults.image1
  });
};

exports.StaticImage = StaticImage;

var WithVideo = function WithVideo() {
  return _react["default"].createElement(_Hero["default"], {
    type: "video",
    source: _defaults.video1,
    thumb: _defaults.image3
  });
};

exports.WithVideo = WithVideo;

var DipticHero = function DipticHero() {
  return _react["default"].createElement(_SideBySide["default"], {
    title: (0, _addonKnobs.text)('Title', _defaults.defaultTitle),
    subtitle: (0, _addonKnobs.text)('Subtitle', _defaults.defaultSubTitle),
    breadCrumbData: _defaults.breadCrumbData,
    delimiter: (0, _addonKnobs.text)('Separator', '/'),
    source: _defaults.image1
  });
};

exports.DipticHero = DipticHero;

var LayeredHero = function LayeredHero() {
  return _react["default"].createElement(_Layered["default"], {
    title: (0, _addonKnobs.text)('Title', _defaults.defaultTitle),
    subtitle: (0, _addonKnobs.text)('Subtitle', _defaults.defaultSubTitle),
    breadCrumbData: _defaults.breadCrumbData,
    delimiter: (0, _addonKnobs.text)('Separator', '/'),
    source: _defaults.image1
  });
};

exports.LayeredHero = LayeredHero;

var InsetHero = function InsetHero() {
  return _react["default"].createElement(_Inset["default"], {
    source: _defaults.image1
  });
};

exports.InsetHero = InsetHero;