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

var Layered = function Layered(_ref) {
  var source = _ref.source,
      title = _ref.title,
      subtitle = _ref.subtitle,
      breadCrumbData = _ref.breadCrumbData,
      delimiter = _ref.delimiter;
  return _react["default"].createElement("div", {
    className: "jsx-1842589698" + " " + 'layeredHero'
  }, _react["default"].createElement("div", {
    className: "jsx-1842589698" + " " + 'layeredHero__image'
  }, _react["default"].createElement("img", {
    src: source,
    alt: "wired",
    className: "jsx-1842589698"
  })), _react["default"].createElement("div", {
    className: "jsx-1842589698" + " " + 'layeredHero__content'
  }, _react["default"].createElement(_Breadcrumb["default"], {
    delimiter: delimiter,
    links: breadCrumbData
  }), _react["default"].createElement(_Type.Heading1, null, _react["default"].createElement("span", {
    style: {
      display: 'block',
      color: '#7f7f7f'
    },
    className: "jsx-1842589698"
  }, title), subtitle)), _react["default"].createElement(_style["default"], {
    id: "1842589698"
  }, ".layeredHero.jsx-1842589698{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;}.layeredHero__image.jsx-1842589698{width:50vw;overflow:hidden;margin:0;}.layeredHero__image.jsx-1842589698 img.jsx-1842589698{display:block;margin:0 -25.875%;width:75vw;}.layeredHero__content.jsx-1842589698{background-color:#F2F2F2;font-family:Noe Display;margin:auto;width:40vw;padding-top:7vw;padding-bottom:7vw;padding-left:7vw;padding-right:7vw;-webkit-transform:translateY(2%) translateX(-17%);-ms-transform:translateY(2%) translateX(-17%);transform:translateY(2%) translateX(-17%);}"));
};

var _default = Layered;
exports["default"] = _default;