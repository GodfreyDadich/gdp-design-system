'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NarrationBlock = function NarrationBlock(_ref) {
  var copy = _ref.copy;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-4088102095' + ' ' + 'narrationBlock'
    },
    _react2.default.createElement('div', {
      className: 'jsx-4088102095' + ' ' + 'backgroundBlock'
    }),
    _react2.default.createElement(
      'p',
      {
        className: 'jsx-4088102095' + ' ' + 'narrationBlock__content'
      },
      _react2.default.createElement('div', { id: 'narrationBlock__content__border', className: 'jsx-4088102095'
      }),
      copy
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '4088102095',
      css: '.narrationBlock.jsx-4088102095{display:block;margin:auto;width:60%;padding:8vw 0;}.narrationBlock.jsx-4088102095 .narrationBlock__content.jsx-4088102095{width:45vw;font-family:Atlas Grotesk;font-weight:600;font-size:2.2vw;position:relative;-webkit-transform:translateX(30%) translateY(22%);-ms-transform:translateX(30%) translateY(22%);transform:translateX(30%) translateY(22%);line-height:2.35vw;-webkit-letter-spacing:.01vw;-moz-letter-spacing:.01vw;-ms-letter-spacing:.01vw;letter-spacing:.01vw;display:inline-block;bottom:50%;}.backgroundBlock.jsx-4088102095{width:27vw;height:21.4vw;display:inline-block;position:absolute;background-color:#F2F2F2;}#narrationBlock__content__border.jsx-4088102095{border-top:solid 1.3vh;width:21vw;padding-bottom:1.4vw;}'
    })
  );
};

exports.default = NarrationBlock;