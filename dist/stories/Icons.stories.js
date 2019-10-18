"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseButton = exports.LinkedIn = exports.Instagram = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icons = require("../components/Icons");

var _default = {
  title: 'Design System|Icons'
};
exports["default"] = _default;

var Instagram = function Instagram() {
  return _react["default"].createElement(_Icons.InstagramIcon, {
    color: "black",
    hoverColor: "red"
  });
};

exports.Instagram = Instagram;

var LinkedIn = function LinkedIn() {
  return _react["default"].createElement(_Icons.LinkedInIcon, {
    color: "black"
  });
};

exports.LinkedIn = LinkedIn;

var CloseButton = function CloseButton() {
  return _react["default"].createElement(_Icons.CloseModal, {
    color: "black"
  });
};

exports.CloseButton = CloseButton;