"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GDPBreadCrumb = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _Breadcrumb = _interopRequireDefault(require("../components/Breadcrumb"));

var _defaults = require("../utils/defaults");

var _default = {
  title: 'Design System|Navigation/Breadcrumb',
  component: _Breadcrumb["default"]
};
exports["default"] = _default;

var GDPBreadCrumb = function GDPBreadCrumb() {
  return _react["default"].createElement(_Breadcrumb["default"], {
    delimiter: (0, _addonKnobs.text)('Separator', '/'),
    links: _defaults.breadCrumbData
  });
};

exports.GDPBreadCrumb = GDPBreadCrumb;