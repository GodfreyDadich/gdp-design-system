"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

/* TODO:
  Lifecycle functions. Calculate height of UL
*/
var Select =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Select, _React$Component);

  function Select(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Select);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Select).call(this, props));
    _this.state = {
      selectedValue: '',
      expanded: props.expanded || false,
      cursor: 0,
      result: []
    };
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Select, [{
    key: "doSelection",
    value: function doSelection(newValue) {
      this.setState({
        selectedValue: newValue
      });
      this.toggleState(false);
    }
  }, {
    key: "toggleState",
    value: function toggleState(toggleValue) {
      if (this.state.disabled) return;
      this.setState({
        expanded: typeof toggleValue === 'boolean' ? toggleValue : !this.state.expanded
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        expanded: props.expanded
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var cursor = this.state.cursor;
      var options = this.props.options;

      if (e.keyCode === 38 && cursor > 0) {
        this.setState(function (prevState) {
          return {
            cursor: prevState.cursor - 1
          };
        });
      } else if (e.keyCode === 40 && cursor < options.length - 1) {
        this.setState(function (prevState) {
          return {
            cursor: prevState.cursor + 1
          };
        });
      }

      if (e.keyCode === 13) {
        this.doSelection(options[cursor]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          selectedValue = _this$state.selectedValue,
          expanded = _this$state.expanded,
          cursor = _this$state.cursor;
      var _this$props = this.props,
          options = _this$props.options,
          placeholder = _this$props.placeholder,
          selectPadding = _this$props.selectPadding,
          borderWidth = _this$props.borderWidth,
          borderColor = _this$props.borderColor,
          selectFont = _this$props.selectFont,
          fontSize = _this$props.fontSize,
          textColor = _this$props.textColor,
          selectIcon = _this$props.selectIcon,
          backgroundColor = _this$props.backgroundColor,
          disabled = _this$props.disabled,
          borderRadius = _this$props.borderRadius;
      var calculatedHeight = (fontSize + 8) * options.length;
      var inputHeight = 2 * Math.round((fontSize + 5) / 2);
      return _react["default"].createElement("div", {
        onBlur: function onBlur(e) {
          return _this2.toggleState(false);
        },
        className: _style["default"].dynamic([["3098400327", [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + " " + "select".concat(expanded ? ' expanded' : '').concat(disabled ? ' disabled' : '')
      }, _react["default"].createElement("input", {
        placeholder: placeholder,
        value: selectedValue,
        onFocus: function onFocus(e) {
          return _this2.toggleState(true);
        },
        onKeyDown: this.handleKeyDown,
        readOnly: true,
        className: _style["default"].dynamic([["3098400327", [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + " " + 'select__value'
      }), _react["default"].createElement("div", {
        onClick: function onClick(e) {
          return _this2.toggleState();
        },
        className: _style["default"].dynamic([["3098400327", [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + " " + "select__icon"
      }, _react["default"].createElement("div", {
        className: _style["default"].dynamic([["3098400327", [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + " " + 'caret'
      }, ">"), _react["default"].createElement("div", {
        className: _style["default"].dynamic([["3098400327", [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + " " + 'triangle'
      }), _react["default"].createElement("div", {
        className: _style["default"].dynamic([["3098400327", [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + " " + 'chevron'
      })), _react["default"].createElement("ul", {
        className: _style["default"].dynamic([["3098400327", [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + " " + 'select__options'
      }, options.map(function (option, index) {
        return _react["default"].createElement("li", {
          tabIndex: index,
          onClick: function onClick(e) {
            return _this2.doSelection(option);
          },
          key: option + index,
          className: _style["default"].dynamic([["3098400327", [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + " " + "select__option ".concat(cursor === index ? 'active' : '')
        }, option);
      })), _react["default"].createElement(_style["default"], {
        id: "3098400327",
        dynamic: [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]
      }, ".select.__jsx-style-dynamic-selector{position:relative;display:inline-block;color:".concat(textColor, ";border-color:").concat(borderColor, ";border-width:").concat(borderWidth, "px;border-style:solid;padding:").concat(selectPadding, "px;font-family:").concat(selectFont, ";background-color:").concat(backgroundColor, ";border-radius:").concat(borderRadius, "px;}.select__icon.__jsx-style-dynamic-selector{position:absolute;z-index:1;color:").concat(borderColor, ";right:").concat(selectPadding - 5, "px;top:calc(").concat(fontSize / 2 + selectPadding, "px - 18%);width:19px;height:19px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:25% 50%;-ms-transform-origin:25% 50%;transform-origin:25% 50%;-webkit-transform-style:preserve-3D;-ms-transform-style:preserve-3D;transform-style:preserve-3D;-webkit-transition:-webkit-transform 0.25s;-webkit-transition:transform 0.25s;transition:transform 0.25s;}.select__icon.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{display:none;}.select__icon.__jsx-style-dynamic-selector .triangle.__jsx-style-dynamic-selector{position:relative;width:0;height:0;margin-left:2px;margin-top:5px;border-top:5px solid transparent;border-left:8px solid ").concat(borderColor, ";border-bottom:5px solid transparent;}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector{position:relative;text-align:center;padding:2px;margin-bottom:5px;height:0;width:5px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform-style:preserve-3D;-ms-transform-style:preserve-3D;transform-style:preserve-3D;}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector:before{content:'';position:absolute;top:0;left:-8px;height:100%;width:51%;background:").concat(borderColor, ";-webkit-transform:skew(0deg,40deg);-ms-transform:skew(0deg,40deg);transform:skew(0deg,40deg);}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector:after{content:'';position:absolute;top:0;right:8px;height:100%;width:50%;background:").concat(borderColor, ";-webkit-transform:skew(0deg,-40deg);-ms-transform:skew(0deg,-40deg);transform:skew(0deg,-40deg);}.select__value.__jsx-style-dynamic-selector{position:relative;z-index:2;background:transparent;border:none;color:").concat(textColor, ";font-size:").concat(fontSize, "px;font-family:").concat(selectFont, ";height:").concat(inputHeight, "px;padding:0;margin:0;margin-right:25px;max-width:100%;text-overflow:ellipsis;width:120px;}.select__value.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(textColor, ";opacity:0.6;font-size:").concat(fontSize, "px;font-family:").concat(selectFont, ";}.select__value.__jsx-style-dynamic-selector::-moz-placeholder{color:").concat(textColor, ";opacity:0.6;font-size:").concat(fontSize, "px;font-family:").concat(selectFont, ";}.select__value.__jsx-style-dynamic-selector:-ms-input-placeholder{color:").concat(textColor, ";opacity:0.6;font-size:").concat(fontSize, "px;font-family:").concat(selectFont, ";}.select__value.__jsx-style-dynamic-selector::placeholder{color:").concat(textColor, ";opacity:0.6;font-size:").concat(fontSize, "px;font-family:").concat(selectFont, ";}.select__value.__jsx-style-dynamic-selector::selection{background:transparent;}.select__options.__jsx-style-dynamic-selector{position:absolute;top:").concat(inputHeight + 2 + selectPadding * 2, "px;left:0;height:0px;min-width:100%;opacity:0;font-size:").concat(fontSize, "px;font-family:inherit;overflow:hidden;list-style:none;padding:0;margin:0;-webkit-transition:height .2s;transition:height .2s;-webkit-transition-delay:.1s;transition-delay:.1s;box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);}.select__option.__jsx-style-dynamic-selector{cursor:pointer;height:").concat(fontSize + 4, "px;margin:2px 0;padding:0 4px;white-space:nowrap;}.select__option.__jsx-style-dynamic-selector:hover,.select__option.active.__jsx-style-dynamic-selector{background-color:#e8eef7;}.select.expanded.__jsx-style-dynamic-selector>.select__options.__jsx-style-dynamic-selector{height:").concat(calculatedHeight, "px;opacity:1;}.select.expanded.__jsx-style-dynamic-selector>.select__icon.__jsx-style-dynamic-selector{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}.select.disabled.__jsx-style-dynamic-selector{opacity:0.4;}")));
    }
  }]);
  return Select;
}(_react["default"].Component);

var _default = Select;
exports["default"] = _default;