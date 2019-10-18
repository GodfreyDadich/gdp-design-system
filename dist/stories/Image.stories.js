"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagesStacked = exports.ImageWithHover = exports.DeviceImage = exports.ImageWithSidebar = exports.ImageWithCaption = exports.DefaultImage = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Image = _interopRequireDefault(require("../components/Image"));

var _Device = _interopRequireDefault(require("../components/Device"));

var _StackedImage = _interopRequireDefault(require("../components/StackedImage"));

var _defaults = require("../utils/defaults");

// import ImageWithZoom from '../components/ImageWithZoom'
var _default = {
  title: 'Design System|Image',
  component: _Image["default"]
};
exports["default"] = _default;

var DefaultImage = function DefaultImage() {
  return _react["default"].createElement(_Image["default"], {
    altAsset: _defaults.imgSixteenNine,
    imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatiosObj, 'square'),
    fullBleed: (0, _addonKnobs["boolean"])('fullBleed', false),
    imgSource: _defaults.imgSixteenNine,
    linkUrl: (0, _addonKnobs.text)('url', ''),
    verticalAlign: (0, _addonKnobs.select)('Vertical Align', _defaults.verticalAligns, 'center'),
    horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', _defaults.horizontalAligns, 'center')
  });
};

exports.DefaultImage = DefaultImage;

var ImageWithCaption = function ImageWithCaption() {
  return _react["default"].createElement(_Image["default"], {
    caption: (0, _addonKnobs.text)('Caption', _defaults.defaultCaption),
    imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatiosObj, 'noAspect'),
    fullBleed: (0, _addonKnobs["boolean"])('fullBleed', false),
    imgSource: _defaults.imgSixteenNine,
    linkUrl: (0, _addonKnobs.text)('url', ''),
    verticalAlign: (0, _addonKnobs.select)('Vertical Align', _defaults.verticalAligns, 'center'),
    horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', _defaults.horizontalAligns, 'center')
  });
};

exports.ImageWithCaption = ImageWithCaption;

var ImageWithSidebar = function ImageWithSidebar() {
  return _react["default"].createElement(_Image["default"], {
    sideBar: {
      text: (0, _addonKnobs.text)('Sidebar Text', 'Smaller length, Sidebar text area.'),
      image: {
        imgSixteenNine: _defaults.imgSixteenNine
      },
      isQuote: true,
      link: (0, _addonKnobs.text)('sidebar link', ''),
      quoter: (0, _addonKnobs.text)('Quoter', '—Scott Dadich'),
      location: (0, _addonKnobs.select)('Sidebar Location', _defaults.sidebarLocations, 'top-left')
    },
    imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatiosObj, 'noAspect'),
    fullBleed: (0, _addonKnobs["boolean"])('fullBleed', false),
    imgSource: _defaults.imgSixteenNine,
    linkUrl: (0, _addonKnobs.text)('url', ''),
    verticalAlign: (0, _addonKnobs.select)('Vertical Align', _defaults.verticalAligns, 'center'),
    horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', _defaults.horizontalAligns, 'center')
  });
}; // export const ImageZoom = () =>
//   <ImageWithZoom
//     imageTitle={text('Image Title/Alt', 'test')}
//     aspectRatio={select('Aspect Ratio', aspectRatiosObj, 'noAspect')}
//     fullBleed={boolean('Full Bleed', false)}
//     stretchH={boolean('Stretch Horizontal', false)}
//     imgSource={imgSixteenNine}
//     verticalAlign={select('Vertical Align', verticalAligns, 'bottom')}
//     horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
//   />


exports.ImageWithSidebar = ImageWithSidebar;

var DeviceImage = function DeviceImage() {
  return _react["default"].createElement(_Device["default"], {
    classAdd: "test",
    deviceColor: (0, _addonKnobs.select)('Device Color', {
      black: 'black',
      white: 'white'
    }, 'black')
  }, _react["default"].createElement(_Image["default"], {
    imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
    aspectRatio: "standard",
    skipIntro: true,
    imgSource: _defaults.imgSixteenNine,
    verticalAlign: (0, _addonKnobs.select)('Vertical Align', _defaults.verticalAligns, 'center'),
    horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', _defaults.horizontalAligns, 'center')
  }));
};

exports.DeviceImage = DeviceImage;

var ImageWithHover = function ImageWithHover() {
  return _react["default"].createElement(_Image["default"], {
    imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatiosObj, 'sixteen'),
    fullBleed: (0, _addonKnobs["boolean"])('fullBleed', false),
    imgSource: _defaults.imgSixteenNine,
    imgHover: _defaults.imageGallery2[1],
    linkUrl: (0, _addonKnobs.text)('url', ''),
    verticalAlign: (0, _addonKnobs.select)('Vertical Align', _defaults.verticalAligns, 'center'),
    horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', _defaults.horizontalAligns, 'center')
  });
};

exports.ImageWithHover = ImageWithHover;

var ImagesStacked = function ImagesStacked() {
  return _react["default"].createElement(_StackedImage["default"], {
    images: _defaults.imageGallery,
    aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', _defaults.aspectRatiosObj, 'sixteen'),
    caption: (0, _addonKnobs.text)('Caption', _defaults.defaultCaption)
  });
};

exports.ImagesStacked = ImagesStacked;