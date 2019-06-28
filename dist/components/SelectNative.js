'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectNative = function SelectNative(_ref) {
  var borderColor = _ref.borderColor,
      borderWidth = _ref.borderWidth,
      borderRadius = _ref.borderRadius,
      backgroundColor = _ref.backgroundColor,
      selectPadding = _ref.selectPadding,
      selectFont = _ref.selectFont,
      fontSize = _ref.fontSize,
      selectIcon = _ref.selectIcon,
      options = _ref.options,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['249673230', [borderColor, borderWidth, borderRadius, selectPadding, selectFont, fontSize, backgroundColor, borderColor, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor]]]) + ' ' + 'select'
    },
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['249673230', [borderColor, borderWidth, borderRadius, selectPadding, selectFont, fontSize, backgroundColor, borderColor, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor]]]) + ' ' + 'select__icon'
      },
      _react2.default.createElement(
        'div',
        {
          className: _style2.default.dynamic([['249673230', [borderColor, borderWidth, borderRadius, selectPadding, selectFont, fontSize, backgroundColor, borderColor, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor]]]) + ' ' + 'caret'
        },
        '>'
      ),
      _react2.default.createElement('div', {
        className: _style2.default.dynamic([['249673230', [borderColor, borderWidth, borderRadius, selectPadding, selectFont, fontSize, backgroundColor, borderColor, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor]]]) + ' ' + 'triangle'
      }),
      _react2.default.createElement('div', {
        className: _style2.default.dynamic([['249673230', [borderColor, borderWidth, borderRadius, selectPadding, selectFont, fontSize, backgroundColor, borderColor, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor]]]) + ' ' + 'chevron'
      })
    ),
    _react2.default.createElement(
      'select',
      { disabled: disabled, className: _style2.default.dynamic([['249673230', [borderColor, borderWidth, borderRadius, selectPadding, selectFont, fontSize, backgroundColor, borderColor, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor]]]) + ' ' + 'styledSelect'
      },
      options.map(function (option, index) {
        return _react2.default.createElement(
          'option',
          { key: option + index, className: _style2.default.dynamic([['249673230', [borderColor, borderWidth, borderRadius, selectPadding, selectFont, fontSize, backgroundColor, borderColor, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor]]])
          },
          option
        );
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '249673230',
      css: '.select.__jsx-style-dynamic-selector{position:relative;display:inline-block;}.select.__jsx-style-dynamic-selector .styledSelect.__jsx-style-dynamic-selector{border-color:' + borderColor + ';border-width:' + borderWidth + 'px;border-radius:' + borderRadius + 'px;border-style:solid;outline:none;-webkit-appearance:none;padding:' + selectPadding + 'px;font-family:' + selectFont + ';font-size:' + fontSize + 'px;background-color:' + backgroundColor + ';padding-right:35px;}.select.__jsx-style-dynamic-selector .styledSelect.__jsx-style-dynamic-selector:before{content:\'\';position:relative;width:0;height:0;margin-left:2px;margin-top:5px;border-top:5px solid transparent;border-left:8px solid ' + borderColor + ';border-bottom:5px solid transparent;}.select__icon.__jsx-style-dynamic-selector{position:absolute;pointer-events:none;z-index:1;color:' + borderColor + ';right:' + (selectPadding - 5) + 'px;top:calc(' + (fontSize / 2 + selectPadding) + 'px - 30%);width:19px;height:19px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:25% 50%;-ms-transform-origin:25% 50%;transform-origin:25% 50%;-webkit-transform-style:preserve-3D;-ms-transform-style:preserve-3D;transform-style:preserve-3D;-webkit-transition:-webkit-transform 0.25s;-webkit-transition:transform 0.25s;transition:transform 0.25s;}.select__icon.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector{display:none;}.select__icon.__jsx-style-dynamic-selector .' + selectIcon + '.__jsx-style-dynamic-selector{display:block;}.select__icon.__jsx-style-dynamic-selector .triangle.__jsx-style-dynamic-selector{position:relative;width:0;height:0;margin-left:2px;margin-top:5px;border-top:5px solid transparent;border-left:8px solid ' + borderColor + ';border-bottom:5px solid transparent;}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector{position:relative;text-align:center;padding:2px;margin-bottom:5px;height:0;width:5px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform-style:preserve-3D;-ms-transform-style:preserve-3D;transform-style:preserve-3D;}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector:before{content:\'\';position:absolute;top:0;left:-8px;height:100%;width:51%;background:' + borderColor + ';-webkit-transform:skew(0deg,40deg);-ms-transform:skew(0deg,40deg);transform:skew(0deg,40deg);}.select__icon.__jsx-style-dynamic-selector .chevron.__jsx-style-dynamic-selector:after{content:\'\';position:absolute;top:0;right:8px;height:100%;width:50%;background:' + borderColor + ';-webkit-transform:skew(0deg,-40deg);-ms-transform:skew(0deg,-40deg);transform:skew(0deg,-40deg);}',
      dynamic: [borderColor, borderWidth, borderRadius, selectPadding, selectFont, fontSize, backgroundColor, borderColor, borderColor, selectPadding - 5, fontSize / 2 + selectPadding, selectIcon, borderColor, borderColor, borderColor]
    })
  );
};

exports.default = SelectNative;