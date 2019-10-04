"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GilmoreMobileAnimation = exports.GilmoreExpandAnimation2 = exports.GilmoreExpandAnimation = exports.GilmoreWaveAnimation = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _GilmoreWave = _interopRequireDefault(require("../components/GilmoreWave"));

var _GilmoreExpand = _interopRequireDefault(require("../components/GilmoreExpand"));

var _GilmoreExpand2 = _interopRequireDefault(require("../components/GilmoreExpand2"));

var _GilmoreMobile = _interopRequireDefault(require("../components/GilmoreMobile"));

var _default = {
  title: 'Design System|Gilmore',
  component: _GilmoreWave["default"]
};
exports["default"] = _default;

var GilmoreWaveAnimation = function GilmoreWaveAnimation() {
  return _react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, _react["default"].createElement(_GilmoreWave["default"], {
    animated: (0, _addonKnobs["boolean"])('animated', false)
  }), " ");
};

exports.GilmoreWaveAnimation = GilmoreWaveAnimation;
GilmoreWaveAnimation.story = {
  name: 'Gilmore Wave'
};

var GilmoreExpandAnimation = function GilmoreExpandAnimation() {
  return _react["default"].createElement("div", {
    style: {
      width: '75%'
    }
  }, _react["default"].createElement(_GilmoreExpand["default"], null), " ");
};

exports.GilmoreExpandAnimation = GilmoreExpandAnimation;
GilmoreExpandAnimation.story = {
  name: 'Gilmore Expand'
};

var GilmoreExpandAnimation2 = function GilmoreExpandAnimation2() {
  return _react["default"].createElement("div", {
    style: {
      width: '75%'
    }
  }, _react["default"].createElement(_GilmoreExpand2["default"], null), " ");
};

exports.GilmoreExpandAnimation2 = GilmoreExpandAnimation2;
GilmoreExpandAnimation2.story = {
  name: 'Gilmore Expand 2'
};

var GilmoreMobileAnimation = function GilmoreMobileAnimation() {
  return _react["default"].createElement("div", {
    style: {
      width: '30%',
      height: '100vh',
      background: '#000'
    }
  }, _react["default"].createElement(_GilmoreMobile["default"], null), " ");
};

exports.GilmoreMobileAnimation = GilmoreMobileAnimation;
GilmoreMobileAnimation.story = {
  name: 'Gilmore Mobile'
};