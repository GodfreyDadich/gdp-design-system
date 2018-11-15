'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConditionalLink = require('./ConditionalLink');

var _ConditionalLink2 = _interopRequireDefault(_ConditionalLink);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _CardText = require('./CardText');

var _CardText2 = _interopRequireDefault(_CardText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['184887790', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%']]]) + ' ' + (props.classAdd || '')
    },
    !!(props.mediaOrientation === 'bottom' || props.mediaOrientation === 'right') && _react2.default.createElement(_CardText2.default, props),
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['184887790', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%']]]) + ' ' + 'cardMedia'
      },
      _react2.default.createElement(_Image2.default, props)
    ),
    !!(props.mediaOrientation === 'top' || props.mediaOrientation === 'left') && _react2.default.createElement(_CardText2.default, props),
    _react2.default.createElement(_style2.default, {
      styleId: '184887790',
      css: '.cardMedia.__jsx-style-dynamic-selector{display:inline-block;width:' + (props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%') + ';}',
      dynamic: [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%']
    })
  );
};

exports.default = Card;