"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightMode = exports.DarkMode = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _SimpleGallery = _interopRequireDefault(require("../components/SimpleGallery"));

var _Modal = _interopRequireDefault(require("../components/Modal"));

var modalClosed = function modalClosed() {
  console.log('modal closed');
};

var imageGallery = ['https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5dXVzeTAxc3owaW5qbWc0ZXl3enItMjQwOGZwMS1vcGVuZXItbG8tcjIuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19'];
var _default = {
  title: 'Design System|Modals/Modal',
  component: _Modal["default"]
};
exports["default"] = _default;

var DarkMode = function DarkMode() {
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, " this is some test content for below the modal"), _react["default"].createElement(_Modal["default"], {
    view: 'darkMode',
    closeCallback: modalClosed,
    modalVisible: (0, _addonKnobs["boolean"])('Toggle modal')
  }, _react["default"].createElement(_SimpleGallery["default"], {
    images: imageGallery,
    aspectRatio: "noAspect",
    view: 'darkMode',
    index: 0
  })));
};

exports.DarkMode = DarkMode;

var LightMode = function LightMode() {
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, " this is some test content for below the modal"), _react["default"].createElement(_Modal["default"], {
    view: 'lightMode',
    closeCallback: modalClosed,
    modalVisible: (0, _addonKnobs["boolean"])('Toggle modal', false)
  }, _react["default"].createElement(_SimpleGallery["default"], {
    images: imageGallery,
    aspectRatio: "noAspect",
    view: 'lightMode',
    index: 0
  })));
};

exports.LightMode = LightMode;