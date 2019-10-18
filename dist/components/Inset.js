"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));

var Inset = function Inset(_ref) {
  var source = _ref.source,
      title = _ref.title,
      subtitle = _ref.subtitle,
      breadCrumbData = _ref.breadCrumbData,
      delimiter = _ref.delimiter;
  return _react["default"].createElement("div", {
    className: "jsx-3292367126" + " " + 'insetHero'
  }, _react["default"].createElement("div", {
    className: "jsx-3292367126" + " " + 'insetHero__image'
  }, _react["default"].createElement("img", {
    src: source,
    alt: "wired",
    className: "jsx-3292367126"
  })), _react["default"].createElement(_style["default"], {
    id: "3292367126"
  }, ".insetHero__image.jsx-3292367126{width:90vw;height:auto;padding:5vw;}.insetHero__image.jsx-3292367126 img.jsx-3292367126{height:auto;margin-left:auto;display:block;margin-left:auto;margin-right:auto;width:80%;}"));
};

var _default = Inset;
exports["default"] = _default;