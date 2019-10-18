"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GDPToast = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Toast = _interopRequireDefault(require("../components/Toast"));

var toastCallback = function toastCallback() {// console.log('callback')
};

var _default = {
  title: 'Design System|Modals/Toast',
  component: _Toast["default"]
};
exports["default"] = _default;

var GDPToast = function GDPToast() {
  return _react["default"].createElement(_Toast["default"], {
    active: (0, _addonKnobs["boolean"])('Toggle Toast', true),
    callback: toastCallback,
    header: (0, _addonKnobs.text)('Header', 'Email address copied to clipboard'),
    message: (0, _addonKnobs.text)('Message', 'apply@godfreydadich.com')
  });
};

exports.GDPToast = GDPToast;