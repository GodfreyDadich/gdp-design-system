"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AltLeftArrow = exports.AltRightArrow = exports.LeftArrow = exports.RightArrow = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var RightArrow = function RightArrow(props) {
  return _react["default"].createElement("div", {
    className: "nextArrow",
    onClick: props.clickAction,
    onMouseEnter: props.over,
    onMouseMove: props.over,
    onMouseLeave: props.out,
    style: {
      position: 'absolute',
      top: '0',
      right: '-31.4%',
      width: '40%',
      height: '100%',
      overflow: 'hidden',
      zIndex: '101',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)'
    }
  }, _react["default"].createElement("i", {
    className: "fa fa-arrow-right fa-2x",
    "aria-hidden": "true"
  }));
};
/*
  Pretend these are in their own separate files
*/


exports.RightArrow = RightArrow;

var LeftArrow = function LeftArrow(props) {
  return _react["default"].createElement("div", {
    className: "backArrow",
    onClick: props.clickAction,
    onMouseEnter: props.over,
    onMouseMove: props.over,
    onMouseLeave: props.out,
    style: {
      position: 'absolute',
      top: '0',
      left: '-31.4%',
      width: '40%',
      height: '100%',
      overflow: 'hidden',
      zIndex: '101',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)'
    }
  }, _react["default"].createElement("i", {
    className: "fa fa-arrow-left fa-2x",
    "aria-hidden": "true"
  }));
};

exports.LeftArrow = LeftArrow;

var AltRightArrow = function AltRightArrow(props) {
  return _react["default"].createElement("div", {
    onClick: props.clickAction,
    onMouseEnter: props.over,
    onMouseMove: props.over,
    onMouseLeave: props.out,
    style: {
      position: 'absolute',
      top: '0',
      right: '-15%',
      width: '40%',
      height: '100%',
      zIndex: '101',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)'
    },
    className: _style["default"].dynamic([["3249456594", [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + " " + 'nextArrow'
  }, _react["default"].createElement("div", {
    className: _style["default"].dynamic([["3249456594", [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + " " + 'right-arrow-wrapper'
  }, _react["default"].createElement("i", {
    className: _style["default"].dynamic([["3249456594", [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + " " + "right-arrow-head"
  }), _react["default"].createElement("div", {
    className: _style["default"].dynamic([["3249456594", [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + " " + "right-arrow-body"
  })), _react["default"].createElement(_style["default"], {
    id: "3249456594",
    dynamic: [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']
  }, ".right-arrow-wrapper.__jsx-style-dynamic-selector{position:absolute;top:50%;margin:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:15%;}.right-arrow-head.__jsx-style-dynamic-selector{border:solid ".concat(props.view === 'lightMode' ? 'black' : 'white', ";border-width:0 1px 1px 0;display:inline-block;padding:3px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.right-arrow-body.__jsx-style-dynamic-selector{height:18px;width:1px;background-color:").concat(props.view === 'lightMode' ? 'black' : 'white', ";margin-right:1px;-webkit-transform:translate(-3px,-18.58px) rotate(-90deg);-ms-transform:translate(-3px,-18.58px) rotate(-90deg);transform:translate(-3px,-18.58px) rotate(-90deg);}")));
};

exports.AltRightArrow = AltRightArrow;

var AltLeftArrow = function AltLeftArrow(props) {
  return _react["default"].createElement("div", {
    onClick: props.clickAction,
    onMouseEnter: props.over,
    onMouseMove: props.over,
    onMouseLeave: props.out,
    style: {
      position: 'absolute',
      top: '0',
      left: '-15%',
      width: '40%',
      height: '100%',
      zIndex: '101',
      cursor: 'pointer',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)'
    },
    className: _style["default"].dynamic([["3521652068", [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + " " + 'backArrow'
  }, _react["default"].createElement("div", {
    className: _style["default"].dynamic([["3521652068", [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + " " + 'left-arrow-wrapper'
  }, _react["default"].createElement("i", {
    className: _style["default"].dynamic([["3521652068", [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + " " + "left-arrow-head"
  }), _react["default"].createElement("div", {
    className: _style["default"].dynamic([["3521652068", [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + " " + "left-arrow-body"
  })), _react["default"].createElement(_style["default"], {
    id: "3521652068",
    dynamic: [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']
  }, ".left-arrow-wrapper.__jsx-style-dynamic-selector{position:absolute;top:50%;margin:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:15%;}.left-arrow-head.__jsx-style-dynamic-selector{border:solid ".concat(props.view === 'lightMode' ? 'black' : 'white', ";border-width:0 1px 1px 0;display:inline-block;padding:3px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.left-arrow-body.__jsx-style-dynamic-selector{height:18px;width:1px;background-color:").concat(props.view === 'lightMode' ? 'black' : 'white', ";margin-left:1px;-webkit-transform:translate(8px,-18.58px) rotate(90deg);-ms-transform:translate(8px,-18.58px) rotate(90deg);transform:translate(8px,-18.58px) rotate(90deg);}")));
};

exports.AltLeftArrow = AltLeftArrow;