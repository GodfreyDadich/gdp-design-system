"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = font;

var _styles = require("../styles");

/**
 * Return a font stack
 * @param  {String} family The name of the font family; one of "benton", "miller"
 * @return {String}        Font stack
 */
function font(family) {
  var fontFamily = _styles.fonts[family];
  if (!fontFamily) return "";
  return fontFamily.join(", ");
}