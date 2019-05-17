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
      content = _ref.content;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-2796528513' + ' ' + 'sidebar'
    },
    _react2.default.createElement(
      'p',
      {
        className: 'jsx-2796528513' + ' ' + 'sidebar__content'
      },
      _react2.default.createElement('div', { id: 'sidebar__content__border', className: 'jsx-2796528513'
      }),
      copy
    ),
    _react2.default.createElement(
      'p',
      {
        className: 'jsx-2796528513' + ' ' + 'mainContent'
      },
      content
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '2796528513',
      css: '.sidebar.jsx-2796528513{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.sidebar.jsx-2796528513 #sidebar__content__border.jsx-2796528513{border-top:solid 1.3vh;width:17vw;padding-bottom:1.4vw;}.sidebar.jsx-2796528513 .sidebar__content.jsx-2796528513{margin-top:18vw;width:17.1vw;font-family:Atlas Grotesk;font-weight:600;font-size:1.69vw;position:relative;line-height:2.1vw;-webkit-letter-spacing:.01vw;-moz-letter-spacing:.01vw;-ms-letter-spacing:.01vw;letter-spacing:.01vw;display:inline-block;}.sidebar.jsx-2796528513 .mainContent.jsx-2796528513{margin-left:3vw;margin-right:3vw;width:50vw;font-size:1.3vw;line-height:2vw;-webkit-letter-spacing:.01vw;-moz-letter-spacing:.01vw;-ms-letter-spacing:.01vw;letter-spacing:.01vw;font-family:Noe Text;font-weight:100;}'
    })
  );
};

exports.default = Sidebar;