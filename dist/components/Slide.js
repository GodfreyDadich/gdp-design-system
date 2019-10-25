"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Slide = function Slide(_ref) {
  var image = _ref.image,
      renderImage = _ref.renderImage,
      classAdd = _ref.classAdd;
  var styles = {
    backgroundImage: "url(".concat(image, ")"),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: renderImage ? 'auto' : '100%',
    height: renderImage ? 'auto' : '100%',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#f2f2f2',
    position: 'relative'
  };
  return _react["default"].createElement("div", {
    className: "slide ".concat(!!classAdd),
    style: styles
  }, renderImage ? _react["default"].createElement("img", {
    src: image,
    style: {
      width: '100%'
    }
  }) : '');
};

var _default = Slide;
exports["default"] = _default;