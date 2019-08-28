'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarQuote = exports.LeftCarving = exports.SideBar = exports.CardContent = exports.CardSubTitle = exports.CardTitle = exports.Caption = exports.BioHeader = exports.QuoteAttribution = exports.InquiryText = exports.WiredType = exports.SubHeadBlack = exports.SubHead = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.HeadingSuper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOnScreen = require('react-on-screen');

var _reactOnScreen2 = _interopRequireDefault(_reactOnScreen);

var _ConditionalLink = require('./ConditionalLink');

var _ConditionalLink2 = _interopRequireDefault(_ConditionalLink);

var _Icons = require('./Icons');

var _reactDeviceDetect = require('react-device-detect');

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
  var children = _ref2.children,
      style = _ref2.style;
  return _react2.default.createElement(
    'h1',
    {
      style: style,
      className: 'jsx-4239768248' + ' ' + 'headingOne'
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '4239768248',
      css: '.headingOne.jsx-4239768248{position:relative;font-family:\'Noe Display\';font-weight:bold;font-size:3.52vw;line-height:0.97;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;padding-bottom:51px;margin:0 0 35px 0;color:#000;}.headingOne.jsx-4239768248 .clientName.jsx-4239768248{display:block;color:#7F7F7F;}.headingOne.jsx-4239768248:before{content:\'\';position:absolute;width:24.56vw;max-width:33%;height:7px;background-color:#000;bottom:15px;left:0;}@media only screen and (max-width:500px){.headingOne.jsx-4239768248{font-size:12vw !important;padding-bottom:35px !important;margin-bottom:28px !important;}.headingOne.jsx-4239768248:before{width:calc(50% - 16px) !important;}}@media only screen and (max-width:769px){.headingOne.jsx-4239768248{font-size:40px !important;padding-bottom:41px !important;margin-bottom:28px !important;}.headingOne.jsx-4239768248:before{width:calc(((100vw - 60px) / 4) - 12px) !important;}}'
    })
  );
};

var Heading2 = exports.Heading2 = function Heading2(_ref3) {
  var children = _ref3.children,
      style = _ref3.style,
      className = _ref3.className;
  return _react2.default.createElement(
    'h2',
    {
      style: _extends({
        fontSize: _typography.fontSizeHeading2 / 1280 * 100 + 'vw',
        lineHeight: 1,
        margin: 0
      }, style),
      className: className
    },
    children
  );
};

var Heading3 = exports.Heading3 = function Heading3(_ref4) {
  var children = _ref4.children,
      style = _ref4.style,
      className = _ref4.className;
  return _react2.default.createElement(
    'h3',
    {
      style: _extends({
        fontFamily: 'Atlas Grotesk',
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 0
      }, style),
      className: 'jsx-3263637809' + ' ' + ('heading3 ' + className)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '3263637809',
      css: '.heading3.jsx-3263637809{font-size:2.03vw;line-height:1;}@media only screen and (max-width:768px){.heading3.jsx-3263637809{font-size:19px;line-height:22px;}}'
    })
  );
};

var Heading4 = exports.Heading4 = function Heading4(_ref5) {
  var children = _ref5.children,
      style = _ref5.style,
      className = _ref5.className;
  return _react2.default.createElement(
    'h4',
    {
      style: _extends({
        fontFamily: 'Atlas Grotesk',
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 0
      }, style),
      className: 'jsx-1830967501' + ' ' + ('heading4 ' + className)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '1830967501',
      css: '.heading4.jsx-1830967501{font-size:1.48vw;line-height:1;}@media only screen and (max-width:768px){.heading4.jsx-1830967501{font-size:19px;line-height:22px;}}'
    })
  );
};

var SubHead = exports.SubHead = function SubHead(_ref6) {
  var children = _ref6.children,
      style = _ref6.style,
      className = _ref6.className;
  return _react2.default.createElement(
    'h4',
    {
      style: _extends({
        fontFamily: 'Atlas Grotesk',
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 0
      }, style),
      className: 'jsx-1284517413' + ' ' + ('subhead ' + className)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '1284517413',
      css: '.subhead.jsx-1284517413{font-family:\'Atlas Grotesk\';font-weight:900;font-size:20px;margin-bottom:0;line-height:1.29px;-webkit-letter-spacing:-0.18px;-moz-letter-spacing:-0.18px;-ms-letter-spacing:-0.18px;letter-spacing:-0.18px;color:#7F7F7F;}'
    })
  );
};

var SubHeadBlack = exports.SubHeadBlack = function SubHeadBlack(_ref7) {
  var children = _ref7.children,
      style = _ref7.style,
      className = _ref7.className;
  return _react2.default.createElement(
    'h4',
    {
      style: _extends({
        fontFamily: 'Atlas Grotesk',
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 0
      }, style),
      className: 'jsx-2770374667' + ' ' + ('subheadBlack ' + className)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '2770374667',
      css: '.subheadBlack.jsx-2770374667{font-family:\'Atlas Grotesk\';font-weight:900;font-size:20px;margin-bottom:0;line-height:1.29px;-webkit-letter-spacing:-0.18px;-moz-letter-spacing:-0.18px;-ms-letter-spacing:-0.18px;letter-spacing:-0.18px;color:#333;}'
    })
  );
};

var WiredType = exports.WiredType = function WiredType(_ref8) {
  var children = _ref8.children,
      style = _ref8.style,
      className = _ref8.className;
  return _react2.default.createElement(
    'span',
    {
      style: _extends({
        fontFamily: 'Atlas Grotesk'
      }, style),
      className: 'jsx-1419568079' + ' ' + ('wiredtype ' + className)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '1419568079',
      css: '.wiredtype.jsx-1419568079{font-size:19px;line-height:.5;color:#333;font-variant:small-caps;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px;}@media only screen and (max-width:500px){.wiredtype.jsx-1419568079{line-height:22px;font-size:15px;}}'
    })
  );
};

var InquiryText = exports.InquiryText = function InquiryText(_ref9) {
  var children = _ref9.children,
      style = _ref9.style,
      className = _ref9.className;
  return _react2.default.createElement(
    'span',
    {
      style: _extends({
        fontFamily: 'Noe Text'
      }, style),
      className: 'jsx-486986781' + ' ' + ('inquiryText ' + className)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '486986781',
      css: '.inquiryText.jsx-486986781{font-style:italic;color:#333;font-weight:400;display:block;font-size:19px;line-height:22px;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;}'
    })
  );
};

var QuoteAttribution = exports.QuoteAttribution = function QuoteAttribution(_ref10) {
  var children = _ref10.children,
      style = _ref10.style,
      className = _ref10.className;
  return _react2.default.createElement(
    'span',
    {
      style: _extends({
        fontFamily: 'Institut'
      }, style),
      className: 'jsx-2263352860' + ' ' + ('quoteAttribution ' + className)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '2263352860',
      css: '.quoteAttribution.jsx-2263352860{color:#7F7F7F;font-weight:200;display:block;font-size:14px;line-height:14px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;margin-top:15px;text-align:center;}@media only screen and (max-width:500px){.quoteAttribution.jsx-2263352860{margin-top:15px;}}'
    })
  );
};

var BioHeader = exports.BioHeader = function BioHeader(_ref11) {
  var personName = _ref11.personName,
      personTitle = _ref11.personTitle,
      insta = _ref11.insta;
  return _react2.default.createElement(
    Heading1,
    {
      style: {
        paddingBottom: '2.5vw'
      }
    },
    personName,
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'span',
      {
        style: {
          fontFamily: 'Atlas Grotesk',
          display: 'inline-block',
          lineHeight: 1,
          whiteSpace: 'nowrap'
        },
        className: 'bioPersonTitle'
      },
      personTitle
    ),
    insta ? _react2.default.createElement(
      'a',
      { href: 'https://www.instagram.com/' + insta, target: '_blank', className: 'noGreen' },
      _react2.default.createElement(_Icons.BioIcon, { style: { marginLeft: '16px' } })
    ) : '',
    _react2.default.createElement(
      'style',
      null,
      '\n      .bioPersonTitle {\n        font-size: 1.48vw;\n      }\n      @media only screen and (max-width: 1024px) {\n        .bioPersonTitle{\n          font-size: 1.95vw;\n        }\n      }\n      @media only screen and (max-width: 500px) {\n        .bioPersonTitle{\n          font-size: 5.4vw;\n        }\n      }\n      '
    )
  );
};

var Caption = exports.Caption = function Caption(_ref12) {
  var classAdd = _ref12.classAdd,
      children = _ref12.children;
  return _react2.default.createElement(
    'figcaption',
    {
      className: 'jsx-3317793550' + ' ' + ('captionText' + (classAdd ? ' ' + classAdd : ''))
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '3317793550',
      css: '.captionText.jsx-3317793550{color:#7F7F7F;font-family:\'Atlas Grotesk\';font-weight:500;display:block;font-size:12px;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;margin-top:25px;text-align:center;}@media only screen and (max-width:500px){.captionText.jsx-3317793550{margin-top:15px;}}'
    })
  );
};

var CardTitle = exports.CardTitle = function CardTitle(_ref13) {
  var classAdd = _ref13.classAdd,
      children = _ref13.children;
  return _react2.default.createElement(
    'h4',
    {
      className: 'jsx-4045664524' + ' ' + ('cardTitle ' + classAdd)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '4045664524',
      css: '.cardTitle.jsx-4045664524{position:relative;display:block;font-family:\'Atlas Grotesk\';font-size:19px;font-weight:bold;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;line-height:22px;margin:23px 0 0;}@media only screen and (max-width:500px){.cardTitle.jsx-4045664524{font-size:12px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;line-height:16px;margin:15px 0 0;}}'
    })
  );
};

var CardSubTitle = exports.CardSubTitle = function CardSubTitle(_ref14) {
  var classAdd = _ref14.classAdd,
      children = _ref14.children;
  return _react2.default.createElement(
    'h5',
    {
      className: 'jsx-943579489' + ' ' + ('cardSubtitle ' + classAdd)
    },
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '943579489',
      css: '.cardSubtitle.jsx-943579489{position:relative;display:block;font-family:\'Atlas Grotesk\';font-size:19px;font-weight:500;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;line-height:22px;margin:0;color:#7f7f7f;}@media only screen and (max-width:500px){.cardSubtitle.jsx-943579489{font-size:12px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;line-height:16px;}}'
    })
  );
};

var CardContent = exports.CardContent = function CardContent(_ref15) {
  var classAdd = _ref15.classAdd,
      children = _ref15.children;
  return _react2.default.createElement(
    'p',
    {
      className: classAdd },
    children
  );
};

var SideBar = exports.SideBar = function SideBar(_ref16) {
  var sideBar = _ref16.sideBar,
      isVisible = _ref16.isVisible;
  return _react2.default.createElement(
    _reactOnScreen2.default,
    { once: true, partialVisibility: true,
      style: {
        position: 'absolute',
        top: sideBar.location.includes('top') ? '0px' : 'auto',
        bottom: sideBar.location.includes('bottom') ? '10px' : 'auto',
        left: sideBar.location.includes('left') ? '-135px' : 'auto',
        right: sideBar.location.includes('right') ? '-135px' : 'auto'
      }
    },
    function (_ref17) {
      var isVisible = _ref17.isVisible;
      return _react2.default.createElement(
        'div',
        {
          style: {
            position: 'relative',
            top: isVisible ? '0px' : '15px',
            width: '116px',
            fontFamily: 'Atlas Grotesk',
            fontWeight: '900',
            color: '#000',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s, top 0.5s',
            transitionDelay: '1.25s'
          },
          className: 'jsx-890879870' + ' ' + ('sideBar ' + (sideBar.location ? sideBar.location : 'left-top'))
        },
        _react2.default.createElement(
          _ConditionalLink2.default,
          { linkUrl: sideBar.link, linkTarget: '_blank' },
          sideBar.image ? _react2.default.createElement('img', { src: sideBar.image, className: 'jsx-890879870' + ' ' + 'sideBar__logo'
          }) : '',
          sideBar.text.length > 0 ? _react2.default.createElement(
            'span',
            {
              className: 'jsx-890879870' + ' ' + ('sideBar__text' + (sideBar.isQuote ? ' isQuote' : ''))
            },
            sideBar.text
          ) : '',
          sideBar.quoter ? _react2.default.createElement(
            'span',
            { style: { display: 'block', marginTop: '5px' }, className: 'jsx-890879870'
            },
            sideBar.quoter
          ) : ''
        ),
        _react2.default.createElement(_style2.default, {
          styleId: '890879870',
          css: '@charset "UTF-8";.sideBar.jsx-890879870{font-size:12px;line-height:12.8px;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;}.sideBar__logo.jsx-890879870{display:block;width:100%;margin-bottom:12px;}.sideBar__text.jsx-890879870{position:relative;display:block;border-top:7px solid #000;padding-top:9px;}.sideBar__text.isQuote.jsx-890879870:before{content:\'\u201C\';margin-left:-7px;}.sideBar__text.isQuote.jsx-890879870:after{content:\'\u201D\';margin-right:-7px;}.sideBar__text.jsx-890879870 p.jsx-890879870{margin:0;}'
        })
      );
    }
  );
};

var LeftCarving = exports.LeftCarving = function LeftCarving(_ref18) {
  var children = _ref18.children;
  return _react2.default.createElement(
    'figure',
    {
      className: 'jsx-2613545546' + ' ' + 'leftCarving'
    },
    _react2.default.createElement('div', { id: 'leftCarving__border', className: 'jsx-2613545546'
    }),
    children,
    _react2.default.createElement(_style2.default, {
      styleId: '2613545546',
      css: '.leftCarving.jsx-2613545546{font-family:Atlas Grotesk;font-style:normal;font-weight:bold;font-size:1.8vw;line-height:2.1vw;padding-top:11px;padding-bottom:4.5px;-webkit-letter-spacing:-0.25px;-moz-letter-spacing:-0.25px;-ms-letter-spacing:-0.25px;letter-spacing:-0.25px;color:#333;float:left;max-width:50%;margin:.9vw -14vw .7vw 3vw;-webkit-transform:translateX(-16vw);-ms-transform:translateX(-16vw);transform:translateX(-16vw);border-top:5px solid #000;}'
    })
  );
};

var SidebarQuote = exports.SidebarQuote = function SidebarQuote(_ref19) {
  var children = _ref19.children;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-2891326595' + ' ' + 'sidebarquote'
    },
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-2891326595' + ' ' + 'sidebarquote__content'
      },
      _react2.default.createElement('div', { id: 'sidebarquote__content__border', className: 'jsx-2891326595'
      }),
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '2891326595',
      css: '.sidebarquote.jsx-2891326595{display:inline-block;padding:0 21px 0 0;vertical-align:top;-webkit-transform:translateX(5vw) translateY(25vw);-ms-transform:translateX(5vw) translateY(25vw);transform:translateX(5vw) translateY(25vw);}.sidebarquote.jsx-2891326595 #sidebarquote__content__border.jsx-2891326595{border-top:.5vw solid;width:12.2vw;padding-bottom:1vw;}@media screen and (min-width:1622px){.sidebarquote.jsx-2891326595 #sidebarquote__content__border.jsx-2891326595{border-top:8px solid;width:197px;padding-bottom:17px;}}.sidebarquote.jsx-2891326595 .sidebarquote__content.jsx-2891326595{margin-top:7px;width:12.3vw;font-family:Atlas Grotesk;font-weight:600;font-size:1.2vw;line-height:1.4vw;-webkit-letter-spacing:.01vw;-moz-letter-spacing:.01vw;-ms-letter-spacing:.01vw;letter-spacing:.01vw;display:inline-block;}@media screen and (min-width:1622px){.sidebarquote.jsx-2891326595 .sidebarquote__content.jsx-2891326595{margin-top:4px;width:205px;font-size:19.5px;line-height:23px;}}'
    })
  );
};