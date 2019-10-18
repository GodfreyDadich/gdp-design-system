"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DotIndicator = void 0;

var _react = _interopRequireDefault(require("react"));

var DotIndicator = function DotIndicator(props) {
  return _react["default"].createElement("div", {
    style: {
      margin: 'auto',
      width: '50%',
      textAlign: 'center'
    }
  }, props.children.map(function (child, i) {
    return _react["default"].createElement("div", {
      key: "dot".concat(i),
      style: {
        borderRadius: '50%',
        display: 'inline-block',
        width: '8px',
        height: '8px',
        boxSizing: 'border-box',
        margin: props.imageAspect === 'sixteen' ? '45px 5px 15px' : props.imageAspect === 'noAspect' ? '80px 5px 16px' : '25px 5px 13px',
        border: '1px solid #6D6A60',
        backgroundColor: '#6D6A60',
        opacity: props.currentIndex === i ? '1' : '.25'
      }
    });
  }));
};

exports.DotIndicator = DotIndicator;