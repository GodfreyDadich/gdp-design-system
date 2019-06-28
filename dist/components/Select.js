'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* TODO: 
  Lifecycle functions. Calculate height of UL 
*/
var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = {
      selectedValue: '',
      expanded: props.expanded || false,
      cursor: 0,
      result: []
    };
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(Select, [{
    key: 'doSelection',
    value: function doSelection(newValue) {
      this.setState({ selectedValue: newValue });
      this.toggleState(false);
    }
  }, {
    key: 'toggleState',
    value: function toggleState(toggleValue) {
      if (this.state.disabled) return;
      this.setState({ expanded: typeof toggleValue === 'boolean' ? toggleValue : !this.state.expanded });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        expanded: props.expanded
      });
    }
  }, {
    key: 'handleKeyDown',
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          selectedValue = _state.selectedValue,
          expanded = _state.expanded,
          cursor = _state.cursor;
      var _props = this.props,
          options = _props.options,
          placeholder = _props.placeholder,
          selectPadding = _props.selectPadding,
          borderWidth = _props.borderWidth,
          borderColor = _props.borderColor,
          selectFont = _props.selectFont,
          fontSize = _props.fontSize,
          textColor = _props.textColor,
          selectIcon = _props.selectIcon,
          backgroundColor = _props.backgroundColor,
          disabled = _props.disabled,
          borderRadius = _props.borderRadius;


      var calculatedHeight = (fontSize + 8) * options.length;
      var inputHeight = 2 * Math.round((fontSize + 5) / 2);

      return _react2.default.createElement(
        'div',
        { onBlur: function onBlur(e) {
            return _this2.toggleState(false);
          }, className: _style2.default.dynamic([['3860907213', [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + ' ' + ('select' + (expanded ? ' expanded' : '') + (disabled ? ' disabled' : ''))
        },
        _react2.default.createElement('input', { placeholder: placeholder, value: selectedValue, onFocus: function onFocus(e) {
            return _this2.toggleState(true);
          }, onKeyDown: this.handleKeyDown, readOnly: true, className: _style2.default.dynamic([['3860907213', [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + ' ' + 'select__value'
        }),
        _react2.default.createElement(
          'div',
          { onClick: function onClick(e) {
              return _this2.toggleState();
            }, className: _style2.default.dynamic([['3860907213', [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + ' ' + 'select__icon'
          },
          _react2.default.createElement(
            'div',
            {
              className: _style2.default.dynamic([['3860907213', [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + ' ' + 'caret'
            },
            '>'
          ),
          _react2.default.createElement('div', {
            className: _style2.default.dynamic([['3860907213', [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + ' ' + 'triangle'
          }),
          _react2.default.createElement('div', {
            className: _style2.default.dynamic([['3860907213', [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + ' ' + 'chevron'
          })
        ),
        _react2.default.createElement(
          'ul',
          {
            className: _style2.default.dynamic([['3860907213', [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + ' ' + 'select__options'
          },
          options.map(function (option, index) {
            return _react2.default.createElement(
              'li',
              { tabIndex: index, onClick: function onClick(e) {
                  return _this2.doSelection(option);
                }, key: option + index, className: _style2.default.dynamic([['3860907213', [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]]]) + ' ' + ('select__option ' + (cursor === index ? 'active' : ''))
              },
              option
            );
          })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: '3860907213',
          css: '.select.__jsx-style-dynamic-selector{position:relative;display:inline-block;color:' + textColor + ';border-color:' + borderColor + ';border-width:' + borderWidth + 'px;border-style:solid;padding:' + selectPadding + 'px;font-family:' + selectFont + ';background-color:' + backgroundColor + ';border-radius:' + borderRadius + 'px;}.select__icon.__jsx-style-dynamic-selector{position:absolute;z-index:1;color:' + borderColor + ';right:' + (selectPadding - 5) + 'px;top:calc(' + (fontSize / 2 + selectPadding) + 'px - 18%);width:19px;height:19px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:25% 50%;-ms-transform-origin:25% 50%;transform-origin:25% 50%;-webkit-transform-style:preserve-3D;-ms-transform-style:preserve-3D;transform-style:preserve-3D;-webkit-transition:-webkit-transform 0.25s;-webkit-transition:transform 0.25s;transition:transform 0.25s;}.select__icon.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{display:none;}.select__icon.__jsx-style-dynamic-selector .' + selectIcon + '.__jsx-style-dynamic-selector{display:block;}.select__icon.__jsx-style-dynamic-selector .triangle.__jsx-style-dynamic-selector{position:relative;width:0;height:0;margin-left:2px;margin-top:5px;border-top:5px solid transparent;border-left:8px solid ' + borderColor + ';border-bottom:5px solid transparent;}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector{position:relative;text-align:center;padding:2px;margin-bottom:5px;height:0;width:5px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform-style:preserve-3D;-ms-transform-style:preserve-3D;transform-style:preserve-3D;}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector:before{content:\'\';position:absolute;top:0;left:-8px;height:100%;width:51%;background:' + borderColor + ';-webkit-transform:skew(0deg,40deg);-ms-transform:skew(0deg,40deg);transform:skew(0deg,40deg);}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector:after{content:\'\';position:absolute;top:0;right:8px;height:100%;width:50%;background:' + borderColor + ';-webkit-transform:skew(0deg,-40deg);-ms-transform:skew(0deg,-40deg);transform:skew(0deg,-40deg);}.select__value.__jsx-style-dynamic-selector{position:relative;z-index:2;background:transparent;border:none;color:' + textColor + ';font-size:' + fontSize + 'px;font-family:' + selectFont + ';height:' + inputHeight + 'px;padding:0;margin:0;margin-right:25px;max-width:100%;text-overflow:ellipsis;width:120px;}.select__value.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:' + textColor + ';opacity:0.6;font-size:' + fontSize + 'px;font-family:' + selectFont + ';}.select__value.__jsx-style-dynamic-selector::-moz-placeholder{color:' + textColor + ';opacity:0.6;font-size:' + fontSize + 'px;font-family:' + selectFont + ';}.select__value.__jsx-style-dynamic-selector:-ms-input-placeholder{color:' + textColor + ';opacity:0.6;font-size:' + fontSize + 'px;font-family:' + selectFont + ';}.select__value.__jsx-style-dynamic-selector::placeholder{color:' + textColor + ';opacity:0.6;font-size:' + fontSize + 'px;font-family:' + selectFont + ';}.select__value.__jsx-style-dynamic-selector::selection{background:transparent;}.select__options.__jsx-style-dynamic-selector{position:absolute;top:' + (inputHeight + 2 + selectPadding * 2) + 'px;left:0;height:0px;min-width:100%;opacity:0;font-size:' + fontSize + 'px;font-family:inherit;overflow:hidden;list-style:none;padding:0;margin:0;-webkit-transition:height .2s;transition:height .2s;-webkit-transition-delay:.1s;transition-delay:.1s;box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);}.select__option.__jsx-style-dynamic-selector{cursor:pointer;height:' + (fontSize + 4) + 'px;margin:2px 0;padding:0 4px;white-space:nowrap;}.select__option.__jsx-style-dynamic-selector:hover,.select__option.active.__jsx-style-dynamic-selector{background-color:#e8eef7;}.select.expanded.__jsx-style-dynamic-selector>.select__options.__jsx-style-dynamic-selector{height:' + calculatedHeight + 'px;opacity:1;}.select.expanded.__jsx-style-dynamic-selector>.select__icon.__jsx-style-dynamic-selector{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}.select.disabled.__jsx-style-dynamic-selector{opacity:0.4;}',
          dynamic: [textColor, borderColor, borderWidth, selectPadding, selectFont, backgroundColor, borderRadius, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor, textColor, fontSize, selectFont, inputHeight, textColor, fontSize, selectFont, inputHeight + 2 + selectPadding * 2, fontSize, fontSize + 4, calculatedHeight]
        })
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

exports.default = Select;