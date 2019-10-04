"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var _CardText = _interopRequireDefault(require("./CardText"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var imagePropsObject = function imagePropsObject(props) {
  var newObj = Object.assign({}, props);
  delete newObj.classAdd;
  return newObj;
};

var Card = function Card(props) {
  return _react["default"].createElement("div", {
    style: props.style,
    className: _style["default"].dynamic([["1004407848", [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(50% - 12px)' : '100%']]]) + " " + (props.classAdd || "")
  }, !!(props.mediaOrientation === 'bottom' || props.mediaOrientation === 'right') && _react["default"].createElement(_CardText["default"], props), _react["default"].createElement("div", {
    className: _style["default"].dynamic([["1004407848", [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(50% - 12px)' : '100%']]]) + " " + 'cardMedia'
  }, _react["default"].createElement(_Image["default"], imagePropsObject(props))), !!(props.mediaOrientation === 'top' || props.mediaOrientation === 'left') && _react["default"].createElement(_CardText["default"], props), _react["default"].createElement(_style["default"], {
    id: "1004407848",
    dynamic: [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(50% - 12px)' : '100%']
  }, ".cardMedia.__jsx-style-dynamic-selector{display:inline-block;width:".concat(props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(50% - 12px)' : '100%', ";}")));
};

Card.propTypes = {
  cardTitle: _propTypes["default"].string,
  cardSubtitle: _propTypes["default"].string,
  cardContent: _propTypes["default"].string,
  linkText: _propTypes["default"].string,
  linkURL: _propTypes["default"].string,
  mediaOrientation: _propTypes["default"].oneOf(['top', 'left', 'right', 'bottom']),
  imageTitle: _propTypes["default"].string,
  aspectRatio: _propTypes["default"].oneOf(['sixteen', 'standard', 'square', 'cropped']),
  fullBleed: _propTypes["default"].bool,
  imgSource: _propTypes["default"].string,
  verticalAlign: _propTypes["default"].oneOf(['top', 'center', 'bottom']),
  horizontalAlign: _propTypes["default"].oneOf(['left', 'center', 'right'])
};
Card.defaultProps = {
  aspectRatio: 'standard',
  fullBleed: false
};
var _default = Card;
exports["default"] = _default;