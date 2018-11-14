'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBar = exports.Caption = exports.Pullquote = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.HeadingSuper = undefined;

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _typography = require('../styles/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingSuper = exports.HeadingSuper = function HeadingSuper(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'h1',
    {
      className: _style2.default.dynamic([['3711590880', [_typography.fontSizeSuper, _typography.lineHeightSuper]]]) + ' ' + 'super'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '3711590880',
      css: '.super.__jsx-style-dynamic-selector{font-size:' + _typography.fontSizeSuper + 'px;line-height:' + _typography.lineHeightSuper + ';margin:0;}',
      dynamic: [_typography.fontSizeSuper, _typography.lineHeightSuper]
    })
  );
};

var Heading1 = exports.Heading1 = function Heading1(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'h1',
    {
      className: 'jsx-2255199418' + ' ' + 'headingOne'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '2255199418',
      css: '.headingOne.jsx-2255199418{position:relative;font-family:\'Noe Display\';font-weight:bold;font-size:3.52vw;line-height:0.97;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;padding-bottom:51px;margin:0 0 35px 0;}.headingOne.jsx-2255199418 .clientName.jsx-2255199418{display:block;color:#7F7F7F;}.headingOne.jsx-2255199418:before{content:\'\';position:absolute;width:24.56%;height:7px;background-color:#000;bottom:0;left:0;}'
    })
  );
};

var Heading2 = exports.Heading2 = function Heading2(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    'h2',
    {
      className: _style2.default.dynamic([['3510317954', [_typography.fontSizeHeading2, _typography.lineHeightHeading2]]]) + ' ' + 'headingTwo'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '3510317954',
      css: '.headingTwo.__jsx-style-dynamic-selector{font-size:' + _typography.fontSizeHeading2 + 'px;line-height:' + _typography.lineHeightHeading2 + ';margin:0;}',
      dynamic: [_typography.fontSizeHeading2, _typography.lineHeightHeading2]
    })
  );
};

var Heading3 = exports.Heading3 = function Heading3(_ref4) {
  var children = _ref4.children;
  return _react2.default.createElement(
    'h3',
    {
      className: _style2.default.dynamic([['3872319389', [_typography.fontSizeHeading3, _typography.lineHeightHeading3]]]) + ' ' + 'headingThree'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '3872319389',
      css: '.headingThree.__jsx-style-dynamic-selector{font-size:' + _typography.fontSizeHeading3 + 'px;line-height:' + _typography.lineHeightHeading3 + ';margin:0;}',
      dynamic: [_typography.fontSizeHeading3, _typography.lineHeightHeading3]
    })
  );
};

var Heading4 = exports.Heading4 = function Heading4(_ref5) {
  var children = _ref5.children;
  return _react2.default.createElement(
    'h4',
    {
      className: _style2.default.dynamic([['4278458390', [_typography.fontSizeHeading4, _typography.lineHeightHeading4]]]) + ' ' + 'headingFour'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '4278458390',
      css: '.headingFour.__jsx-style-dynamic-selector{font-size:' + _typography.fontSizeHeading4 + 'px;line-height:' + _typography.lineHeightHeading4 + ';margin:0;}',
      dynamic: [_typography.fontSizeHeading4, _typography.lineHeightHeading4]
    })
  );
};

var Pullquote = exports.Pullquote = function Pullquote(_ref6) {
  var classAdd = _ref6.classAdd,
      children = _ref6.children;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-2273996777' + ' ' + ('pullQuote' + (classAdd ? ' ' + classAdd : ''))
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '2273996777',
      css: '.pullQuote.jsx-2273996777{font-family:\'Atlas Grotesk\';font-weight:bold;font-size:2.34vw;line-height:1.06;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;text-align:center;margin-top:89px;margin-bottom:89px;}'
    })
  );
};

var Caption = exports.Caption = function Caption(_ref7) {
  var classAdd = _ref7.classAdd,
      children = _ref7.children;
  return _react2.default.createElement(
    'figcaption',
    {
      className: 'jsx-2788025357' + ' ' + ('captionText' + (classAdd ? ' ' + classAdd : ''))
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '2788025357',
      css: '.captionText.jsx-2788025357{color:#7F7F7F;font-family:\'Atlas Grotesk\';font-weight:500;display:block;font-size:12px;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;margin-top:25px;margin-bottom:89px;text-align:center;}'
    })
  );
};

var SideBar = exports.SideBar = function SideBar(_ref8) {
  var sideBar = _ref8.sideBar;
  return _react2.default.createElement(
    'div',
    {
      className: 'sideBar',
      style: {
        position: 'absolute',
        top: sideBar.location.includes('top') ? '0px' : 'auto',
        bottom: sideBar.location.includes('bottom') ? '0px' : 'auto',
        left: sideBar.location.includes('left') ? '-135px' : 'auto',
        right: sideBar.location.includes('right') ? '-135px' : 'auto',
        width: '111px',
        fontFamily: 'Atlas Grotesk',
        fontWeight: '900',
        color: '#000'
      }
    },
    sideBar.image ? _react2.default.createElement('img', { className: 'sideBar__logo', src: sideBar.image, style: { display: 'block', width: '100%', marginBottom: '12px' } }) : '',
    sideBar.text.length > 0 ? _react2.default.createElement(
      'span',
      { className: 'sideBar__text' + (sideBar.isQuote ? ' isQuote' : '') },
      sideBar.text
    ) : '',
    _react2.default.createElement(
      'style',
      null,
      '\n    .sideBar__text {\n      position: relative;\n      display: block;\n      border-top: 7px solid #000;\n      padding-top: 9px;\n      font-size: 12px;\n      line-height: 12.8px;\n      letter-spacing: -0.1px;  \n    }\n    .isQuote:before {\n      content: \'\u201C\';\n      margin-left: -7px;\n    }\n    .isQuote:after {\n      content: \'\u201D\';\n      margin-right: -7px;\n    }        \n\n    p {\n      margin: 0;\n    } '
    )
  );
};