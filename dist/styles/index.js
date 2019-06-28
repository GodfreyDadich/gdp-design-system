"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = exports.typography = exports.fonts = undefined;

var _colors = require("./colors");

Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

var _fonts = require("./fonts");

var fonts = _interopRequireWildcard(_fonts);

var _typography = require("./typography");

var typography = _interopRequireWildcard(_typography);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.fonts = fonts;
exports.typography = typography;