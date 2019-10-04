"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GodfreyDadichLoader = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Loader = _interopRequireDefault(require("../components/Loader"));

var _default = {
  title: 'Design System|Loader',
  component: _Loader["default"]
};
exports["default"] = _default;

var GodfreyDadichLoader = function GodfreyDadichLoader() {
  return _react["default"].createElement("div", {
    style: {
      width: '100%',
      height: '50vh'
    }
  }, _react["default"].createElement(_Loader["default"], null));
};

exports.GodfreyDadichLoader = GodfreyDadichLoader;