'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RichTextQuote = function RichTextQuote(_ref) {
  var classAdd = _ref.classAdd,
      pqOptions = _ref.pqOptions,
      children = _ref.children;


  return _react2.default.createElement(
    'div',
    null,
    function () {
      switch (pqOptions) {
        case 'left-carving':
          return _react2.default.createElement(
            'figure',
            {
              className: 'jsx-21923882' + ' ' + 'leftCarving'
            },
            _react2.default.createElement('div', { id: 'leftCarving__border', className: 'jsx-21923882'
            }),
            children,
            _react2.default.createElement(_style2.default, {
              styleId: '21923882',
              css: '.leftCarving.jsx-21923882{font-family:Atlas Grotesk;font-style:normal;font-weight:bold;font-size:1.8vw;line-height:2.1vw;padding-top:11px;padding-bottom:4.5px;-webkit-letter-spacing:-0.25px;-moz-letter-spacing:-0.25px;-ms-letter-spacing:-0.25px;letter-spacing:-0.25px;float:left;width:21vw;margin:.6vw -8vw .7vw 3vw;-webkit-transform:translateX(-10vw);-ms-transform:translateX(-10vw);transform:translateX(-10vw);border-top:5px solid #000;}@media screen and (min-width:1200px){.leftCarving.jsx-21923882{margin:.6vw -6.5vw .1vw 25vw;-webkit-transform:translateX(-8vw);-ms-transform:translateX(-8vw);transform:translateX(-8vw);border-top:5.5px solid #000;font-size:22px;line-height:26px;}}@media screen and (max-width:600px){.leftCarving.jsx-21923882{border-top:4px solid #000;padding-top:7px;}}'
            })
          );
        case 'sidebar-quote':
          return _react2.default.createElement(
            'div',
            {
              className: 'jsx-370934890' + ' ' + 'sidebarquote'
            },
            _react2.default.createElement(
              'div',
              {
                className: 'jsx-370934890' + ' ' + 'sidebarquote__content'
              },
              _react2.default.createElement('div', { id: 'sidebarquote__content__border', className: 'jsx-370934890'
              }),
              children
            ),
            _react2.default.createElement(_style2.default, {
              styleId: '370934890',
              css: '.sidebarquote.jsx-370934890{display:inline-block;padding:0 21px 0 0;vertical-align:top;-webkit-transform:translateX(15vw);-ms-transform:translateX(15vw);transform:translateX(15vw);}.sidebarquote.jsx-370934890 #sidebarquote__content__border.jsx-370934890{border-top:.5vw solid;width:12.2vw;padding-bottom:1vw;}@media screen and (min-width:1622px){.sidebarquote.jsx-370934890 #sidebarquote__content__border.jsx-370934890{border-top:8px solid;width:197px;padding-bottom:17px;}}.sidebarquote.jsx-370934890 .sidebarquote__content.jsx-370934890{margin-top:7px;width:12.3vw;font-family:Atlas Grotesk;font-weight:600;font-size:1.2vw;line-height:1.4vw;-webkit-letter-spacing:.01vw;-moz-letter-spacing:.01vw;-ms-letter-spacing:.01vw;letter-spacing:.01vw;display:inline-block;}@media screen and (min-width:1622px){.sidebarquote.jsx-370934890 .sidebarquote__content.jsx-370934890{margin-top:4px;width:205px;font-size:19.5px;line-height:23px;}}'
            })
          );
        default:
          return null;
      }
    }()
  );
};

exports.default = RichTextQuote;