'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var imagePropsObject = function imagePropsObject(props) {
  var newObj = _extends({}, props);
  delete newObj.classAdd;
  return newObj;
};

var Card = function Card(props) {
  return _react2.default.createElement(
    'div',
    {
      className: _style2.default.dynamic([['1927751783', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%']]]) + ' ' + (props.classAdd || '')
    },
    !!(props.mediaOrientation === 'bottom' || props.mediaOrientation === 'right') && _react2.default.createElement(_CardText2.default, props),
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['1927751783', [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%']]]) + ' ' + 'cardMedia'
      },
      _react2.default.createElement(_Image2.default, imagePropsObject(props))
    ),
    !!(props.mediaOrientation === 'top' || props.mediaOrientation === 'left') && _react2.default.createElement(_CardText2.default, props),
    _react2.default.createElement(_style2.default, {
      styleId: '1927751783',
      css: '.cardMedia.__jsx-style-dynamic-selector{display:inline-block;width:' + (props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%') + ';}',
      dynamic: [props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%']
    })
  );
};

exports.default = Card;