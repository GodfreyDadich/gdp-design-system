'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideBar = exports.CardContent = exports.CardSubTitle = exports.CardTitle = exports.Caption = exports.Pullquote = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.HeadingSuper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOnScreen = require('react-on-screen');

var _reactOnScreen2 = _interopRequireDefault(_reactOnScreen);

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
  var children = _ref3.children,
      style = _ref3.style;
  return _react2.default.createElement(
    'h2',
    {
      style: _extends({
        fontSize: _typography.fontSizeHeading2 / 1280 * 100 + 'vw',
        lineHeight: 1,
        margin: 0
      }, style),
      className: 'headingTwo' },
    children
  );
};

var Heading3 = exports.Heading3 = function Heading3(_ref4) {
  var children = _ref4.children,
      style = _ref4.style;
  return _react2.default.createElement(
    'h3',
    {
      className: 'headingThree',
      style: _extends({
        fontFamily: 'Atlas Grotesk',
        fontWeight: 'bold',
        fontSize: _typography.fontSizeHeading3 / 1280 * 100 + 'vw',
        lineHeight: 1,
        margin: 0
      }, style)
    },
    children
  );
};

var Heading4 = exports.Heading4 = function Heading4(_ref5) {
  var children = _ref5.children,
      style = _ref5.style;
  return _react2.default.createElement(
    'h4',
    {
      style: _extends({
        fontFamily: 'Atlas Grotesk',
        fontWeight: 'bold',
        fontSize: _typography.fontSizeHeading4 / 1280 * 100 + 'vw',
        lineHeight: 1,
        margin: 0
      }, style),
      className: 'headingFour'
    },
    children
  );
};

var Pullquote = exports.Pullquote = function Pullquote(_ref6) {
  var classAdd = _ref6.classAdd,
      children = _ref6.children;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-448456293' + ' ' + ('pullQuote' + (classAdd ? ' ' + classAdd : ''))
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '448456293',
      css: '.pullQuote.jsx-448456293{font-family:\'Atlas Grotesk\';font-weight:bold;font-size:2.34vw;line-height:1.06;-webkit-letter-spacing:-0.3px;-moz-letter-spacing:-0.3px;-ms-letter-spacing:-0.3px;letter-spacing:-0.3px;text-align:center;margin-top:89px;margin-bottom:89px;}'
    })
  );
};

var Caption = exports.Caption = function Caption(_ref7) {
  var classAdd = _ref7.classAdd,
      children = _ref7.children;
  return _react2.default.createElement(
    'figcaption',
    {
      className: 'jsx-38033030' + ' ' + ('captionText' + (classAdd ? ' ' + classAdd : ''))
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '38033030',
      css: '.captionText.jsx-38033030{color:#7F7F7F;font-family:\'Atlas Grotesk\';font-weight:500;display:block;font-size:12px;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;margin-top:25px;text-align:center;}'
    })
  );
};

var CardTitle = exports.CardTitle = function CardTitle(_ref8) {
  var classAdd = _ref8.classAdd,
      children = _ref8.children;
  return _react2.default.createElement(
    'h4',
    {
      className: classAdd,
      style: {
        position: 'relative',
        display: 'block',
        fontFamily: 'Atlas Grotesk',
        fontSize: '12px',
        fontWeight: 'bold',
        letterSpacing: '0.22px',
        lineHeight: '16px',
        margin: '23px 0 0'
      }
    },
    children
  );
};

var CardSubTitle = exports.CardSubTitle = function CardSubTitle(_ref9) {
  var classAdd = _ref9.classAdd,
      children = _ref9.children;
  return _react2.default.createElement(
    'h5',
    {
      className: classAdd,
      style: {
        position: 'relative',
        display: 'block',
        fontFamily: 'Atlas Grotesk',
        fontSize: '12px',
        fontWeight: '500',
        letterSpacing: '0.22px',
        lineHeight: '16px',
        margin: '0px',
        color: 'rgb(127,127,127)'
      }
    },
    children
  );
};

var CardContent = exports.CardContent = function CardContent(_ref10) {
  var classAdd = _ref10.classAdd,
      children = _ref10.children;
  return _react2.default.createElement(
    'p',
    {
      className: classAdd },
    children
  );
};

var SideBar = exports.SideBar = function SideBar(_ref11) {
  var sideBar = _ref11.sideBar,
      isVisible = _ref11.isVisible;
  return _react2.default.createElement(
    _reactOnScreen2.default,
    { once: true, partialVisibility: true,
      style: {
        position: 'absolute',
        top: sideBar.location.includes('top') ? '0px' : 'auto',
        bottom: sideBar.location.includes('bottom') ? '0px' : 'auto',
        left: sideBar.location.includes('left') ? '-135px' : 'auto',
        right: sideBar.location.includes('right') ? '-135px' : 'auto'
      }
    },
    function (_ref12) {
      var isVisible = _ref12.isVisible;
      return _react2.default.createElement(
        'div',
        {
          style: {
            position: 'relative',
            top: isVisible ? '0px' : '15px',
            width: '111px',
            fontFamily: 'Atlas Grotesk',
            fontWeight: '900',
            color: '#000',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s, top 0.5s',
            transitionDelay: '.40s'
          },
          className: 'jsx-581407050' + ' ' + ('sideBar ' + (sideBar.location ? sideBar.location : 'left-top'))
        },
        sideBar.image ? _react2.default.createElement('img', { src: sideBar.image, className: 'jsx-581407050' + ' ' + 'sideBar__logo'
        }) : '',
        sideBar.text.length > 0 ? _react2.default.createElement(
          'span',
          {
            className: 'jsx-581407050' + ' ' + ('sideBar__text' + (sideBar.isQuote ? ' isQuote' : ''))
          },
          sideBar.text
        ) : '',
        _react2.default.createElement(_style2.default, {
          styleId: '581407050',
          css: '@charset "UTF-8";.sideBar__logo.jsx-581407050{display:block;width:100%;margin-bottom:12px;}.sideBar__text.jsx-581407050{position:relative;display:block;border-top:7px solid #000;padding-top:9px;font-size:12px;line-height:12.8px;-webkit-letter-spacing:-0.4px;-moz-letter-spacing:-0.4px;-ms-letter-spacing:-0.4px;letter-spacing:-0.4px;}.sideBar__text.isQuote.jsx-581407050:before{content:\'\u201C\';margin-left:-7px;}.sideBar__text.isQuote.jsx-581407050:after{content:\'\u201D\';margin-right:-7px;}.sideBar__text.jsx-581407050 p.jsx-581407050{margin:0;}'
        })
      );
    }
  );
};