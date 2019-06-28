'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Type = require('./Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardText = function CardText(props) {
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['4188709075', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%', props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0']]]) + ' ' + 'cardText'
    },
    !!props.cardTitle && _react2.default.createElement(
      _Type.CardTitle,
      null,
      props.cardTitle
    ),
    !!props.cardSubTitle && _react2.default.createElement(
      _Type.CardSubTitle,
      null,
      props.cardSubTitle
    ),
    !!props.cardContent && _react2.default.createElement(
      _Type.CardContent,
      null,
      props.cardContent
    ),
    !!props.linkText && _react2.default.createElement(
      'a',
      { href: props.linkUrl, className: _style2.default.dynamic([['4188709075', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%', props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0']]]) + ' ' + 'cardText__link'
      },
      props.linkText
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '4188709075',
      css: '.cardText.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;width:' + (props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%') + ';margin-left:' + (props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0') + ';}',
      dynamic: [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%', props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0']
    })
  );
};

exports.default = CardText;