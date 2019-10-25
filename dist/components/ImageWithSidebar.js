"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var ImageWithCaption = function ImageWithCaption(props) {
  return _react["default"].createElement("figure", {
    className: "jsx-336052325" + " " + "figureWithCaption caption-".concat(props.captionLocation)
  }, props.captionLocation.startsWith('top') || props.captionLocation.startsWith('left') ? _react["default"].createElement("figcaption", {
    className: "jsx-336052325" + " " + 'captionText'
  }, props.caption) : '', _react["default"].createElement(_Image["default"], (0, _extends2["default"])({
    classAdd: "withCaption"
  }, props)), props.captionLocation.startsWith('bottom') || props.captionLocation.startsWith('right') ? _react["default"].createElement("figcaption", {
    className: "jsx-336052325" + " " + 'captionText'
  }, props.caption) : '', _react["default"].createElement(_style["default"], {
    id: "336052325"
  }, ".figureWithCaption.jsx-336052325{margin:0;position:relative;}.figureWithCaption.jsx-336052325 .captionText.jsx-336052325{display:inline-block;width:33%;font-size:11px;vertical-align:top;}.figureWithCaption.jsx-336052325 .withCaption.jsx-336052325{display:inline-block;vertical-align:top;}.caption-topRight.jsx-336052325 .captionText.jsx-336052325,.caption-bottomRight.jsx-336052325 .captionText.jsx-336052325{float:right;}.caption-leftBottom.jsx-336052325,.caption-leftTop.jsx-336052325,.caption-rightTop.jsx-336052325,.caption-rightBottom.jsx-336052325{width:66%;}.caption-leftBottom.jsx-336052325 .captionText.jsx-336052325,.caption-leftTop.jsx-336052325 .captionText.jsx-336052325,.caption-rightTop.jsx-336052325 .captionText.jsx-336052325,.caption-rightBottom.jsx-336052325 .captionText.jsx-336052325{position:absolute;top:0;left:0;}.caption-leftTop.jsx-336052325,.caption-leftBottom.jsx-336052325{padding-left:33%;}.caption-leftBottom.jsx-336052325 .captionText.jsx-336052325{top:auto;bottom:0;}.caption-rightTop.jsx-336052325,.caption-rightBottom.jsx-336052325{padding-right:33%;}.caption-rightTop.jsx-336052325 .captionText.jsx-336052325,.caption-rightBottom.jsx-336052325 .captionText.jsx-336052325{right:0;left:auto;}.caption-rightBottom.jsx-336052325 .captionText.jsx-336052325{top:auto;bottom:0;}"));
};

var _default = ImageWithCaption;
exports["default"] = _default;