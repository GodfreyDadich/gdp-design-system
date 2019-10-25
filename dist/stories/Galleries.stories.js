"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGridGallery = exports.ImageMuseumView = exports.ImageRevealCarousel = exports.ImageSlider = exports.ImageCircularCarousel = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Image = _interopRequireDefault(require("../components/Image"));

var _Slider = _interopRequireDefault(require("../components/Slider"));

var _RevealCarousel = _interopRequireDefault(require("../components/RevealCarousel"));

var _CircularCarousel = _interopRequireDefault(require("../components/CircularCarousel"));

var _Museum = _interopRequireDefault(require("../components/Museum"));

var _GridGallery = _interopRequireDefault(require("../components/GridGallery"));

var _defaults = require("../utils/defaults");

var _default = {
  title: 'Design System|Galleries',
  component: _CircularCarousel["default"]
};
exports["default"] = _default;

var ImageCircularCarousel = function ImageCircularCarousel() {
  return _react["default"].createElement(_CircularCarousel["default"], {
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatios, 'standard'),
    countIndicator: (0, _addonKnobs.select)('Count Indicator', _defaults.countIndicator, 'dots'),
    caption: (0, _addonKnobs.text)('Caption', _defaults.defaultCaption),
    shadow: (0, _addonKnobs.select)('shadow', _defaults.addDropShadow, 'no')
  }, _defaults.imageGallery2.map(function (img, index) {
    return _react["default"].createElement(_Image["default"], {
      key: "img-".concat(index),
      aspectRatio: "noAspect",
      skipIntro: true,
      imgSource: img,
      visibilityOverride: true
    });
  }));
};

exports.ImageCircularCarousel = ImageCircularCarousel;

var ImageSlider = function ImageSlider() {
  return _react["default"].createElement(_Slider["default"], {
    images: _defaults.imageGallery2,
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatios, 'sixteen'),
    caption: (0, _addonKnobs.text)('Caption', _defaults.defaultCaption)
  });
};

exports.ImageSlider = ImageSlider;

var ImageRevealCarousel = function ImageRevealCarousel() {
  return _react["default"].createElement(_RevealCarousel["default"], {
    images: _defaults.imageGallery3,
    countIndicator: (0, _addonKnobs.select)('Count Indicator', _defaults.countIndicator, 'dots'),
    containerAspect: (0, _addonKnobs.select)('Container Aspect Ratio', _defaults.aspectRatios, 'sixteen'),
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatios, 'sixteen'),
    caption: (0, _addonKnobs.text)('Caption', _defaults.defaultCaption),
    captionsArray: _defaults.captionsArray
  });
};

exports.ImageRevealCarousel = ImageRevealCarousel;

var ImageMuseumView = function ImageMuseumView() {
  return _react["default"].createElement(_Museum["default"], {
    classAdd: "",
    galleries: _defaults.galleries,
    countIndicator: (0, _addonKnobs.select)('Count Indicator', _defaults.countIndicator, 'dots'),
    view: (0, _addonKnobs.select)('View Mode', _defaults.viewMode, 'lightMode'),
    columns: (0, _addonKnobs.number)('Columns', 4),
    thumbAspect: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatios, 'sixteen'),
    containerAspect: (0, _addonKnobs.select)('Container Aspect Ratio', _defaults.aspectRatios, 'sixteen'),
    caption: (0, _addonKnobs.text)('Caption', _defaults.defaultCaption)
  });
};

exports.ImageMuseumView = ImageMuseumView;

var ImageGridGallery = function ImageGridGallery() {
  return _react["default"].createElement(_GridGallery["default"], {
    altAsset: ['https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70', 'https://i.vimeocdn.com/video/737973734.webp?mw=2800&q=70', 'https://i.vimeocdn.com/video/737960529.webp?mw=1400&mh=583&q=70'],
    mobileCarousel: (0, _addonKnobs["boolean"])('Carousel on Mobile Device', true),
    mixedOr: (0, _addonKnobs["boolean"])('Various Orientation Images', false),
    altRatio: (0, _addonKnobs.select)('Alt Aspect Ratio', _defaults.aspectRatios, ''),
    classAdd: "",
    images: _defaults.imageGallery2,
    thumbs: _defaults.imageGallery2,
    countIndicator: (0, _addonKnobs.select)('Count Indicator', _defaults.countIndicator, 'dots'),
    view: (0, _addonKnobs.select)('View Mode', _defaults.viewMode, 'lightMode'),
    carousel: (0, _addonKnobs.select)('carousel', _defaults.isCarousel, 'no'),
    columns: (0, _addonKnobs.number)('Columns', 3),
    headingCaption: (0, _addonKnobs.text)('Heading Caption', _defaults.defaultSubTitle),
    caption: (0, _addonKnobs.text)('Caption', _defaults.defaultCaption),
    thumbAspect: (0, _addonKnobs.select)('Image Aspect Ratio', _defaults.aspectRatios, 'sixteen'),
    containerAspect: (0, _addonKnobs.select)('Container Aspect Ratio', _defaults.aspectRatios, 'sixteen')
  });
};

exports.ImageGridGallery = ImageGridGallery;