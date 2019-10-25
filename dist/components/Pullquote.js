"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _reactOnScreen = _interopRequireDefault(require("react-on-screen"));

var Pullquote = function Pullquote(_ref) {
  var classAdd = _ref.classAdd,
      pqOptions = _ref.pqOptions,
      children = _ref.children;
  return _react["default"].createElement("div", {
    style: {
      marginTop: '0'
    }
  }, function () {
    switch (pqOptions) {
      case 'quote-block':
        return _react["default"].createElement(_reactOnScreen["default"], {
          once: true,
          partialVisibility: true,
          style: {
            marginTop: 0
          }
        }, function (_ref2) {
          var isVisible = _ref2.isVisible;
          return _react["default"].createElement("div", {
            style: {
              marginTop: isVisible ? '0px' : '15px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s, margin-top 0.5s'
            },
            className: "jsx-2487532038" + " " + 'quoteBlock'
          }, _react["default"].createElement("div", {
            className: "jsx-2487532038" + " " + 'backgroundBlock'
          }), _react["default"].createElement("div", {
            className: "jsx-2487532038" + " " + 'quoteBlock__content'
          }, _react["default"].createElement("div", {
            id: "quoteBlock__content__border",
            className: "jsx-2487532038"
          }), children), _react["default"].createElement(_style["default"], {
            id: "2487532038"
          }, ".quoteBlock.jsx-2487532038{display:block;margin:auto;height:21.4vw;padding:5vw 0;width:45vw;}.quoteBlock.jsx-2487532038 .quoteBlock__content.jsx-2487532038{width:45vw;font-family:Atlas Grotesk;font-weight:600;font-size:2vw;line-height:2.2vw;position:relative;-webkit-transform:translateX(30%);-ms-transform:translateX(30%);transform:translateX(30%);-webkit-letter-spacing:.02vw;-moz-letter-spacing:.02vw;-ms-letter-spacing:.02vw;letter-spacing:.02vw;display:inline-block;top:21%;}.backgroundBlock.jsx-2487532038{width:27vw;height:21.4vw;display:inline-block;position:absolute;background-color:#F2F2F2;}#quoteBlock__content__border.jsx-2487532038{border-top:solid 6px;width:21vw;padding-bottom:1.4vw;}@media screen and (min-width:1200px){#quoteBlock__content__border.jsx-2487532038{border-top:solid 7px;}}@media screen and (max-width:800px){#quoteBlock__content__border.jsx-2487532038{border-top:solid 4px;width:21vw;padding-bottom:1.4vw;}}"));
        });

      default:
        return _react["default"].createElement(_reactOnScreen["default"], {
          once: true,
          style: {
            marginTop: 0
          }
        }, function (_ref3) {
          var isVisible = _ref3.isVisible;
          return _react["default"].createElement("div", {
            style: {
              marginTop: isVisible ? '89px' : '104px',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s, margin-top 0.5s'
            },
            className: "jsx-442711174" + " " + "pullQuote".concat(classAdd ? ' ' + classAdd : '')
          }, children, _react["default"].createElement(_style["default"], {
            id: "442711174"
          }, ".pullQuote.jsx-442711174{font-family:'Atlas Grotesk';font-weight:bold;font-size:2.34vw;line-height:1.06;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;text-align:center;margin-bottom:89px;}@media only screen and (max-width:768px){.pullQuote.jsx-442711174{font-size:3.34vw;}}"));
        });
    }
  }());
};

var _default = Pullquote;
exports["default"] = _default;