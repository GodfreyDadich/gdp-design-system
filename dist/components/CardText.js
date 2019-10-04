"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _Type = require("./Type");

var CardText = function CardText(props) {
  return _react["default"].createElement("div", {
    className: _style["default"].dynamic([["4188709075", [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%', props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0']]]) + " " + 'cardText'
  }, !!props.cardTitle && _react["default"].createElement(_Type.CardTitle, null, props.cardTitle), !!props.cardSubTitle && _react["default"].createElement(_Type.CardSubTitle, null, props.cardSubTitle), !!props.cardContent && _react["default"].createElement(_Type.CardContent, null, props.cardContent), !!props.linkText && _react["default"].createElement("a", {
    href: props.linkUrl,
    className: _style["default"].dynamic([["4188709075", [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%', props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0']]]) + " " + 'cardText__link'
  }, props.linkText), _react["default"].createElement(_style["default"], {
    id: "4188709075",
    dynamic: [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%', props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0']
  }, ".cardText.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;width:".concat(props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%', ";margin-left:").concat(props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0', ";}")));
};

var _default = CardText;
exports["default"] = _default;