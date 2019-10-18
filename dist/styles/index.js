"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function get() {
    return _colors["default"];
  }
});
exports.typography = exports.fonts = void 0;

var fonts = _interopRequireWildcard(require("./fonts"));

exports.fonts = fonts;

var typography = _interopRequireWildcard(require("./typography"));

exports.typography = typography;

var _colors = _interopRequireDefault(require("./colors"));