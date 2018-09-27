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
      className: _style2.default.dynamic([['737883940', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '49%' : '100%', props.mediaOrientation === 'top' ? '1em' : '0']]]) + ' ' + 'cardText'
    },
    !!props.cardTitle && _react2.default.createElement(
      _Type.Heading4,
      null,
      props.cardTitle
    ),
    !!props.cardSubTitle && _react2.default.createElement(
      'h4',
      {
        className: _style2.default.dynamic([['737883940', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '49%' : '100%', props.mediaOrientation === 'top' ? '1em' : '0']]]) + ' ' + 'cardText__subtitle'
      },
      props.cardSubTitle
    ),
    !!props.cardContent && _react2.default.createElement(
      'p',
      {
        className: _style2.default.dynamic([['737883940', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '49%' : '100%', props.mediaOrientation === 'top' ? '1em' : '0']]]) + ' ' + 'cardText__content'
      },
      props.cardContent
    ),
    !!props.linkText && _react2.default.createElement(
      'a',
      { href: props.linkUrl, className: _style2.default.dynamic([['737883940', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '49%' : '100%', props.mediaOrientation === 'top' ? '1em' : '0']]]) + ' ' + 'cardText__link'
      },
      props.linkText
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '737883940',
      css: '.cardText.__jsx-style-dynamic-selector{display:inline-block;vertical-align:top;width:' + (props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '49%' : '100%') + ';}.cardText__title.__jsx-style-dynamic-selector{margin-top:' + (props.mediaOrientation === 'top' ? '1em' : '0') + ';}',
      dynamic: [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '49%' : '100%', props.mediaOrientation === 'top' ? '1em' : '0']
    })
  );
};

exports.default = CardText;