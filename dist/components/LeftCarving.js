'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
  var copy = _ref.copy,
      content1 = _ref.content1,
      content2 = _ref.content2,
      subtitle = _ref.subtitle;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1922455205' + ' ' + 'leftCarving'
    },
    _react2.default.createElement(
      'p',
      {
        className: 'jsx-1922455205' + ' ' + 'mainContent'
      },
      _react2.default.createElement(
        'p',
        {
          className: 'jsx-1922455205' + ' ' + 'mainContent__subtitle'
        },
        subtitle
      ),
      content1,
      _react2.default.createElement(
        'figure',
        {
          className: 'jsx-1922455205' + ' ' + 'leftCarving__content'
        },
        _react2.default.createElement('div', { id: 'leftCarving__content__border', className: 'jsx-1922455205'
        }),
        copy
      ),
      content2
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1922455205',
      css: '.leftCarving.jsx-1922455205{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.leftCarving.jsx-1922455205 #leftCarving__content__border.jsx-1922455205{border-top:solid .8vh;width:23.2vw;padding-bottom:1.1vw;}.leftCarving.jsx-1922455205 .leftCarving__content.jsx-1922455205{float:left;clear:both;width:48%;margin:1vw -9vw 1vw 1vw;height:17vw;font-family:Atlas Grotesk;font-weight:600;font-size:1.8vw;line-height:1.9vw;-webkit-letter-spacing:.01vw;-moz-letter-spacing:.01vw;-ms-letter-spacing:.01vw;letter-spacing:.01vw;-webkit-transform:translateX(-45%);-ms-transform:translateX(-45%);transform:translateX(-45%);}.leftCarving.jsx-1922455205 .mainContent.jsx-1922455205{float:right;position:relative;margin-left:3vw;margin-right:3vw;width:48vw;font-size:.6vw;line-height:1vw;-webkit-letter-spacing:.01vw;-moz-letter-spacing:.01vw;-ms-letter-spacing:.01vw;letter-spacing:.01vw;font-family:Noe Text;font-weight:100;}.leftCarving.jsx-1922455205 .mainContent.jsx-1922455205 .mainContent__subtitle.jsx-1922455205{font-family:Atlas Grotesk;font-weight:700;}'
    })
  );
};

exports.default = Sidebar;