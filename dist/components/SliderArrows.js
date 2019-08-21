'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AltLeftArrow = exports.AltRightArrow = exports.LeftArrow = exports.RightArrow = undefined;

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightArrow = exports.RightArrow = function RightArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'nextArrow',
      onClick: props.clickAction,
      onMouseEnter: props.over,
      onMouseMove: props.over,
      onMouseLeave: props.out,
      style: {
        position: 'absolute',
        top: '0',
        right: '-20%',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      } },
    _react2.default.createElement('i', { className: 'fa fa-arrow-right fa-2x', 'aria-hidden': 'true' })
  );
};

/*
  Pretend these are in their own separate files
*/

var LeftArrow = exports.LeftArrow = function LeftArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'backArrow',
      onClick: props.clickAction,
      onMouseEnter: props.over,
      onMouseMove: props.over,
      onMouseLeave: props.out,
      style: {
        position: 'absolute',
        top: '0',
        left: '-20%',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      } },
    _react2.default.createElement('i', { className: 'fa fa-arrow-left fa-2x', 'aria-hidden': 'true' })
  );
};

var AltRightArrow = exports.AltRightArrow = function AltRightArrow(props) {
  return _react2.default.createElement(
    'div',
    {
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
      }, className: _style2.default.dynamic([['3472644705', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'nextArrow'
    },
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['3472644705', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'right-arrow-wrapper'
      },
      _react2.default.createElement('i', {
        className: _style2.default.dynamic([['3472644705', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'right-arrow-head'
      }),
      _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3472644705', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'right-arrow-body'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3472644705',
      css: '.right-arrow-wrapper.__jsx-style-dynamic-selector{position:absolute;top:50%;margin:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:15%;}.right-arrow-head.__jsx-style-dynamic-selector{border:solid ' + (props.view === 'lightMode' ? 'black' : 'white') + ';border-width:0 1px 1px 0;display:inline-block;padding:2px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.right-arrow-body.__jsx-style-dynamic-selector{height:16px;width:1px;background-color:' + (props.view === 'lightMode' ? 'black' : 'white') + ';margin-right:1px;-webkit-transform:translate(-4px,-16.58px) rotate(-90deg);-ms-transform:translate(-4px,-16.58px) rotate(-90deg);transform:translate(-4px,-16.58px) rotate(-90deg);}',
      dynamic: [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']
    })
  );
};

var AltLeftArrow = exports.AltLeftArrow = function AltLeftArrow(props) {
  return _react2.default.createElement(
    'div',
    {
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
      className: _style2.default.dynamic([['2282550468', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'backArrow'
    },
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['2282550468', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'left-arrow-wrapper'
      },
      _react2.default.createElement('i', {
        className: _style2.default.dynamic([['2282550468', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'left-arrow-head'
      }),
      _react2.default.createElement('div', {
        className: _style2.default.dynamic([['2282550468', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'left-arrow-body'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '2282550468',
      css: '.left-arrow-wrapper.__jsx-style-dynamic-selector{position:absolute;top:50%;margin:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:15%;}.left-arrow-head.__jsx-style-dynamic-selector{border:solid ' + (props.view === 'lightMode' ? 'black' : 'white') + ';border-width:0 1px 1px 0;display:inline-block;padding:2px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.left-arrow-body.__jsx-style-dynamic-selector{height:16px;width:1px;background-color:' + (props.view === 'lightMode' ? 'black' : 'white') + ';margin-left:1px;-webkit-transform:translate(7px,-16.58px) rotate(90deg);-ms-transform:translate(7px,-16.58px) rotate(90deg);transform:translate(7px,-16.58px) rotate(90deg);}',
      dynamic: [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']
    })
  );
};