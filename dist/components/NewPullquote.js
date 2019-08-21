'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOnScreen = require('react-on-screen');

var _reactOnScreen2 = _interopRequireDefault(_reactOnScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pullquote = function Pullquote(_ref) {
  var classAdd = _ref.classAdd,
      pqOptions = _ref.pqOptions,
      children = _ref.children;


  return _react2.default.createElement(
    'div',
    null,
    function () {
      switch (pqOptions) {
        case 'quote-block':
          return _react2.default.createElement(
            _reactOnScreen2.default,
            { once: true, partialVisibility: true,
              style: { marginTop: 0 } },
            function (_ref2) {
              var isVisible = _ref2.isVisible;
              return _react2.default.createElement(
                'div',
                {
                  style: {
                    marginTop: isVisible ? '0px' : '15px',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s, margin-top 0.5s'
                  }, className: 'jsx-2487532038' + ' ' + 'quoteBlock'
                },
                _react2.default.createElement('div', {
                  className: 'jsx-2487532038' + ' ' + 'backgroundBlock'
                }),
                _react2.default.createElement(
                  'div',
                  {
                    className: 'jsx-2487532038' + ' ' + 'quoteBlock__content'
                  },
                  _react2.default.createElement('div', { id: 'quoteBlock__content__border', className: 'jsx-2487532038'
                  }),
                  children
                ),
                _react2.default.createElement(_style2.default, {
                  styleId: '2487532038',
                  css: '.quoteBlock.jsx-2487532038{display:block;margin:auto;height:21.4vw;padding:5vw 0;width:45vw;}.quoteBlock.jsx-2487532038 .quoteBlock__content.jsx-2487532038{width:45vw;font-family:Atlas Grotesk;font-weight:600;font-size:2vw;line-height:2.2vw;position:relative;-webkit-transform:translateX(30%);-ms-transform:translateX(30%);transform:translateX(30%);-webkit-letter-spacing:.02vw;-moz-letter-spacing:.02vw;-ms-letter-spacing:.02vw;letter-spacing:.02vw;display:inline-block;top:21%;}.backgroundBlock.jsx-2487532038{width:27vw;height:21.4vw;display:inline-block;position:absolute;background-color:#F2F2F2;}#quoteBlock__content__border.jsx-2487532038{border-top:solid 6px;width:21vw;padding-bottom:1.4vw;}@media screen and (min-width:1200px){#quoteBlock__content__border.jsx-2487532038{border-top:solid 7px;}}@media screen and (max-width:800px){#quoteBlock__content__border.jsx-2487532038{border-top:solid 4px;width:21vw;padding-bottom:1.4vw;}}'
                })
              );
            }
          );
        default:
          return _react2.default.createElement(
            _reactOnScreen2.default,
            { once: true, style: { marginTop: 0 } },
            function (_ref3) {
              var isVisible = _ref3.isVisible;
              return _react2.default.createElement(
                'div',
                {
                  style: {
                    marginTop: isVisible ? '89px' : '104px',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.5s, margin-top 0.5s'
                  },
                  className: 'jsx-442711174' + ' ' + ('pullQuote' + (classAdd ? ' ' + classAdd : ''))
                },
                children,
                pqOptions,
                _react2.default.createElement(_style2.default, {
                  styleId: '442711174',
                  css: '.pullQuote.jsx-442711174{font-family:\'Atlas Grotesk\';font-weight:bold;font-size:2.34vw;line-height:1.06;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;text-align:center;margin-bottom:89px;}@media only screen and (max-width:768px){.pullQuote.jsx-442711174{font-size:3.34vw;}}'
                })
              );
            }
          );
      }
    }()
  );
};

exports.default = Pullquote;