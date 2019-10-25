"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));

var _Type = require("./Type");

var SideBySide = function SideBySide(_ref) {
  var source = _ref.source,
      title = _ref.title,
      subtitle = _ref.subtitle,
      breadCrumbData = _ref.breadCrumbData,
      delimiter = _ref.delimiter;
  return _react["default"].createElement("div", {
    className: "jsx-1047055108" + " " + 'sideBySideHero'
  }, _react["default"].createElement("div", {
    className: "jsx-1047055108" + " " + 'sideBySideHero__image'
  }, _react["default"].createElement("img", {
    src: source,
    alt: "wired",
    className: "jsx-1047055108"
  })), _react["default"].createElement("div", {
    className: "jsx-1047055108" + " " + 'sideBySideHero__title'
  }, _react["default"].createElement(_Breadcrumb["default"], {
    delimiter: delimiter,
    links: breadCrumbData
  }), _react["default"].createElement(_Type.Heading1, null, _react["default"].createElement("span", {
    style: {
      display: 'block',
      color: '#7f7f7f'
    },
    className: "jsx-1047055108"
  }, title), subtitle), _react["default"].createElement("div", {
    className: "jsx-1047055108" + " " + 'sideBySideHero__title__border'
  })), _react["default"].createElement(_style["default"], {
    id: "1047055108"
  }, ".sideBySideHero.jsx-1047055108{background-color:#F2F2F2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;}.sideBySideHero__image.jsx-1047055108{width:50vw;overflow:hidden;margin:0;}.sideBySideHero__image.jsx-1047055108 img.jsx-1047055108{display:block;margin:0 -38.885%;width:177.777%;}.sideBySideHero__title.jsx-1047055108{height:100%;width:50vw;margin:auto;padding-left:8vw;padding-right:8vw;}"));
};

var _default = SideBySide;
exports["default"] = _default;