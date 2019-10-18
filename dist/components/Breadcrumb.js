"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Breadcrumb = function Breadcrumb(_ref) {
  var delimiter = _ref.delimiter,
      links = _ref.links,
      linkLast = _ref.linkLast;
  return _react["default"].createElement("ul", {
    className: "jsx-3661985422" + " " + 'breadcrumb'
  }, links.map(function (link, index) {
    return _react["default"].createElement("li", {
      key: "bread-crumb-item-".concat(index),
      className: "jsx-3661985422" + " " + 'breadcrumb__item'
    }, index !== (linkLast ? links.length : links.length - 1) ? _react["default"].createElement("a", {
      style: {
        boxShadow: 'inset 0 -4px 0 #06ff02',
        paddingBottom: '2px'
      },
      href: link.slug,
      className: "jsx-3661985422" + " " + 'breadcrumb__link'
    }, link.title) : link.title, index !== links.length - 1 ? _react["default"].createElement("span", {
      className: "jsx-3661985422" + " " + 'delimiter'
    }, delimiter) : '');
  }), _react["default"].createElement(_style["default"], {
    id: "3661985422"
  }, ".breadcrumb.jsx-3661985422{list-style:none;padding:0;margin:0;font-family:'Institut';font-weight:normal;font-style:normal;font-size:9px;line-height:1.33;-webkit-letter-spacing:1.92px;-moz-letter-spacing:1.92px;-ms-letter-spacing:1.92px;letter-spacing:1.92px;margin-bottom:16px;}.breadcrumb__item.jsx-3661985422{display:inline-block;}.breadcrumb.jsx-3661985422 .delimiter.jsx-3661985422{margin:0 5px;}"));
};

Breadcrumb.propTypes = {
  delimiter: _propTypes["default"].string,
  links: _propTypes["default"].array
};
Breadcrumb.defaultProps = {};
var _default = Breadcrumb;
exports["default"] = _default;