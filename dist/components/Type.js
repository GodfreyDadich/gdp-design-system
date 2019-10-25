"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarQuote = exports.LeftCarving = exports.SideBar = exports.CardContent = exports.CardSubTitle = exports.CardTitle = exports.Caption = exports.QuoteAttribution = exports.InquiryText = exports.WiredType = exports.SubHead = exports.Heading4 = exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.SocialLink = exports.BioHeader = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _reactOnScreen = _interopRequireDefault(require("react-on-screen"));

var _ConditionalLink = _interopRequireDefault(require("./ConditionalLink"));

var _Icons = require("./Icons");

var _typography = require("../styles/typography");

var BioHeader = function BioHeader(_ref) {
  var personName = _ref.personName,
      personTitle = _ref.personTitle,
      socialsArray = _ref.socialsArray,
      style = _ref.style;
  return _react["default"].createElement("div", {
    style: style,
    className: "jsx-2610529634" + " " + 'bioHeading'
  }, _react["default"].createElement(Heading1, {
    hideStroke: true,
    style: {
      margin: 0,
      paddingBottom: 0
    }
  }, personName), _react["default"].createElement(Heading3, {
    style: {
      whiteSpace: 'nowrap'
    },
    className: "bioPersonTitle"
  }, personTitle), _react["default"].createElement("div", {
    className: "jsx-2610529634" + " " + "".concat(socialsArray.length > 0 ? 'socials-wrap' : '')
  }, socialsArray && socialsArray.length > 0 ? socialsArray.map(function (item, i) {
    return _react["default"].createElement(SocialLink, {
      linkData: item,
      key: "socialLink-".concat(i)
    });
  }) : ''), _react["default"].createElement(_style["default"], {
    id: "2610529634"
  }, ".bioHeading.jsx-2610529634{position:relative;padding-bottom:3.5vw;}.bioHeading.jsx-2610529634:before{content:'';position:absolute;width:14vw;max-width:33%;height:7px;background-color:#000;bottom:0;left:0;}@media only screen and (max-width:768px){.bioHeading.jsx-2610529634{padding-bottom:46px;}.bioHeading.jsx-2610529634:before{width:calc(((100vw - 60px) / 4) - 12px);min-width:180px;}}@media only screen and (max-width:500px){.bioHeading.jsx-2610529634{padding-bottom:25px;}.bioHeading.jsx-2610529634:before{width:calc(50% - 16px);min-width:180px;}}.socials-wrap.jsx-2610529634{margin-top:1.5vw;font-size:calc(12px + 0.25vw);}@media only screen and (max-width:768px){.socials-wrap.jsx-2610529634{margin-top:20px;}}"));
};

exports.BioHeader = BioHeader;

var SocialLink = function SocialLink(_ref2) {
  var linkData = _ref2.linkData;
  var linkPrefix = {
    insta: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/in/'
  };
  var linkDisplay = {
    insta: 'Instagram',
    linkedin: 'LinkedIn'
  };

  var getIcon = function getIcon(social) {
    switch (social) {
      case 'insta':
        return _react["default"].createElement(_Icons.InstagramIcon, {
          style: {
            width: '100%',
            height: '100%',
            marginRight: '0.7vw'
          }
        });

      case 'linkedin':
        return _react["default"].createElement(_Icons.LinkedInIcon, {
          style: {
            width: '100%',
            height: '100%',
            marginRight: '0.7vw'
          }
        });

      default:
        return '';
    }
  };

  return _react["default"].createElement("div", {
    style: {
      display: 'inline-block'
    },
    className: "jsx-608077487" + " " + 'social-link'
  }, _react["default"].createElement("div", {
    className: "jsx-608077487" + " " + 'social-icon'
  }, getIcon(linkData.social)), _react["default"].createElement("a", {
    href: "".concat(linkPrefix[linkData.social]).concat(linkData.handle),
    target: "_blank",
    style: {
      display: 'inline-block'
    },
    className: "jsx-608077487" + " " + 'social-anchor'
  }, _react["default"].createElement("span", {
    className: "jsx-608077487" + " " + 'social-outlet'
  }, linkDisplay[linkData.social])), _react["default"].createElement(_style["default"], {
    id: "608077487"
  }, ".social-link.jsx-608077487{margin-left:1.56vw;}.social-link.jsx-608077487:first-child{margin-left:0;}.social-icon.jsx-608077487{position:relative;display:inline-block;width:1.25vw;height:1.25vw;min-height:16px;min-width:16px;margin-right:0.7vw;}.social-anchor.jsx-608077487{line-height:1;padding-bottom:0px;margin:auto;top:50%;-webkit-transform:translateY(-26%);-ms-transform:translateY(-26%);transform:translateY(-26%);}.social-outlet.jsx-608077487{font-family:Atlas Grotesk;font-style:normal;font-weight:500;-webkit-letter-spacing:0.22px;-moz-letter-spacing:0.22px;-ms-letter-spacing:0.22px;letter-spacing:0.22px;color:#333333;}@media only screen and (max-width:768px){.social-icon.jsx-608077487{width:16px;height:16px;margin-right:8px;}}@media only screen and (max-width:1024px){.bioPersonTitle.jsx-608077487{font-size:1.95vw;}}@media only screen and (max-width:500px){.bioPersonTitle.jsx-608077487{font-size:5.4vw;}.socials-wrap.jsx-608077487{margin-top:24px;}}"));
};

exports.SocialLink = SocialLink;

var Heading1 = function Heading1(_ref3) {
  var children = _ref3.children,
      style = _ref3.style,
      hideStroke = _ref3.hideStroke;
  return _react["default"].createElement("h1", {
    style: style,
    className: "jsx-1695960141" + " " + "headingOne ".concat(hideStroke ? '' : 'withStroke')
  }, children, _react["default"].createElement(_style["default"], {
    id: "1695960141"
  }, ".headingOne.jsx-1695960141{position:relative;font-family:'Noe Display';font-weight:bold;font-size:3.52vw;line-height:0.97;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;padding-bottom:51px;margin:0 0 35px 0;color:#000;}.headingOne.jsx-1695960141 .clientName.jsx-1695960141{display:block;color:#7F7F7F;}.headingOne.withStroke.jsx-1695960141:before{content:'';position:absolute;width:24.56vw;max-width:33%;min-width:180px;height:7px;background-color:#000;bottom:0;left:0;}@media only screen and (max-width:769px){.headingOne.jsx-1695960141{font-size:40px;padding-bottom:41px;margin-bottom:28px;}.headingOne.withStroke.jsx-1695960141:before{width:calc(((100vw - 60px) / 4) - 12px);}}@media only screen and (max-width:500px){.headingOne.jsx-1695960141{font-size:12vw;padding-bottom:35px;margin-bottom:28px;}.headingOne.withStroke.jsx-1695960141:before{width:calc(50% - 16px);}}"));
};

exports.Heading1 = Heading1;

var Heading2 = function Heading2(_ref4) {
  var children = _ref4.children,
      style = _ref4.style,
      className = _ref4.className;
  return _react["default"].createElement("h2", {
    style: Object.assign({
      fontSize: _typography.fontSizeHeading2 / 1280 * 100 + 'vw',
      lineHeight: 1,
      margin: 0
    }, style),
    className: className
  }, children);
};

exports.Heading2 = Heading2;

var Heading3 = function Heading3(_ref5) {
  var children = _ref5.children,
      style = _ref5.style,
      className = _ref5.className;
  return _react["default"].createElement("h3", {
    style: Object.assign({
      fontFamily: 'Atlas Grotesk',
      fontWeight: 'bold',
      marginBottom: 0
    }, style),
    className: "jsx-3331702303" + " " + "heading3 ".concat(className)
  }, children, _react["default"].createElement(_style["default"], {
    id: "3331702303"
  }, ".heading3.jsx-3331702303{margin-top:0.7vw;font-size:1.56vw;line-height:1;}@media only screen and (max-width:768px){.heading3.jsx-3331702303{margin-top:9px;font-size:20px;line-height:24px;}}"));
};

exports.Heading3 = Heading3;

var Heading4 = function Heading4(_ref6) {
  var children = _ref6.children,
      style = _ref6.style,
      className = _ref6.className;
  return _react["default"].createElement("h4", {
    style: Object.assign({
      fontFamily: 'Atlas Grotesk',
      fontWeight: 'bold',
      marginTop: 0,
      marginBottom: 0
    }, style),
    className: "jsx-1830967501" + " " + "heading4 ".concat(className)
  }, children, _react["default"].createElement(_style["default"], {
    id: "1830967501"
  }, ".heading4.jsx-1830967501{font-size:1.48vw;line-height:1;}@media only screen and (max-width:768px){.heading4.jsx-1830967501{font-size:19px;line-height:22px;}}"));
};

exports.Heading4 = Heading4;

var SubHead = function SubHead(_ref7) {
  var children = _ref7.children,
      style = _ref7.style,
      className = _ref7.className;
  return _react["default"].createElement("h4", {
    style: Object.assign({
      fontFamily: 'Atlas Grotesk',
      fontWeight: '900',
      marginTop: 0,
      marginBottom: 0,
      color: '#7F7F7F'
    }, style),
    className: "jsx-4012482115" + " " + "subhead ".concat(className)
  }, children, _react["default"].createElement(_style["default"], {
    id: "4012482115"
  }, ".subhead.jsx-4012482115{font-family:'Atlas Grotesk';font-size:20px;margin-bottom:0;line-height:1.29px;-webkit-letter-spacing:-0.18px;-moz-letter-spacing:-0.18px;-ms-letter-spacing:-0.18px;letter-spacing:-0.18px;}"));
};

exports.SubHead = SubHead;

<<<<<<< HEAD
var WiredType = function WiredType(_ref7) {
  var children = _ref7.children,
      style = _ref7.style,
      className = _ref7.className;
=======
var WiredType = function WiredType(_ref8) {
  var children = _ref8.children,
      style = _ref8.style,
      className = _ref8.className;
>>>>>>> 3356892f350e67831aee16b2f9027480af4259fb
  return _react["default"].createElement("span", {
    style: Object.assign({
      fontFamily: 'Atlas Grotesk'
    }, style),
    className: "jsx-1225945618" + " " + "wiredtype ".concat(className)
  }, children, _react["default"].createElement(_style["default"], {
    id: "1225945618"
  }, ".wiredtype.jsx-1225945618{font-size:19px;line-height:.5;color:#333;font-variant:small-caps;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px;}@media only screen and (max-width:500px){.wiredtype.jsx-1225945618{line-height:22px;font-size:15px;}}"));
};

exports.WiredType = WiredType;

<<<<<<< HEAD
var InquiryText = function InquiryText(_ref8) {
  var children = _ref8.children,
      style = _ref8.style,
      className = _ref8.className;
=======
var InquiryText = function InquiryText(_ref9) {
  var children = _ref9.children,
      style = _ref9.style,
      className = _ref9.className;
>>>>>>> 3356892f350e67831aee16b2f9027480af4259fb
  return _react["default"].createElement("span", {
    style: Object.assign({
      fontFamily: 'Noe Text'
    }, style),
    className: "jsx-3946180267" + " " + "inquiryText ".concat(className)
  }, children, _react["default"].createElement(_style["default"], {
    id: "3946180267"
  }, ".inquiryText.jsx-3946180267{font-style:italic;color:#333;font-weight:400;display:block;font-size:19px;line-height:22px;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;}"));
};

exports.InquiryText = InquiryText;

var QuoteAttribution = function QuoteAttribution(_ref10) {
  var children = _ref10.children,
      style = _ref10.style,
      className = _ref10.className;
  return _react["default"].createElement("span", {
    style: Object.assign({
      fontFamily: 'Institut'
    }, style),
    className: "jsx-2327106027" + " " + "quoteAttribution ".concat(className)
  }, children, _react["default"].createElement(_style["default"], {
    id: "2327106027"
  }, ".quoteAttribution.jsx-2327106027{color:#7F7F7F;font-weight:200;display:block;font-size:14px;line-height:14px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;margin-top:15px;text-align:center;}@media only screen and (max-width:500px){.quoteAttribution.jsx-2327106027{margin-top:15px;}}"));
};

exports.QuoteAttribution = QuoteAttribution;

var Caption = function Caption(_ref11) {
  var classAdd = _ref11.classAdd,
      children = _ref11.children;
  return _react["default"].createElement("figcaption", {
    className: "jsx-3317793550" + " " + "captionText".concat(classAdd ? ' ' + classAdd : '')
  }, children, _react["default"].createElement(_style["default"], {
    id: "3317793550"
  }, ".captionText.jsx-3317793550{color:#7F7F7F;font-family:'Atlas Grotesk';font-weight:500;display:block;font-size:12px;line-height:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;margin-top:25px;text-align:center;}@media only screen and (max-width:500px){.captionText.jsx-3317793550{margin-top:15px;}}"));
};

exports.Caption = Caption;

var CardTitle = function CardTitle(_ref12) {
  var classAdd = _ref12.classAdd,
      children = _ref12.children;
  return _react["default"].createElement("h4", {
    className: "jsx-4045664524" + " " + "cardTitle ".concat(classAdd)
  }, children, _react["default"].createElement(_style["default"], {
    id: "4045664524"
  }, ".cardTitle.jsx-4045664524{position:relative;display:block;font-family:'Atlas Grotesk';font-size:19px;font-weight:bold;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;line-height:22px;margin:23px 0 0;}@media only screen and (max-width:500px){.cardTitle.jsx-4045664524{font-size:12px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;line-height:16px;margin:15px 0 0;}}"));
};

exports.CardTitle = CardTitle;

var CardSubTitle = function CardSubTitle(_ref13) {
  var classAdd = _ref13.classAdd,
      children = _ref13.children;
  return _react["default"].createElement("h5", {
    className: "jsx-943579489" + " " + "cardSubtitle ".concat(classAdd)
  }, children, _react["default"].createElement(_style["default"], {
    id: "943579489"
  }, ".cardSubtitle.jsx-943579489{position:relative;display:block;font-family:'Atlas Grotesk';font-size:19px;font-weight:500;-webkit-letter-spacing:-0.2px;-moz-letter-spacing:-0.2px;-ms-letter-spacing:-0.2px;letter-spacing:-0.2px;line-height:22px;margin:0;color:#7f7f7f;}@media only screen and (max-width:500px){.cardSubtitle.jsx-943579489{font-size:12px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;line-height:16px;}}"));
};

exports.CardSubTitle = CardSubTitle;

var CardContent = function CardContent(_ref14) {
  var classAdd = _ref14.classAdd,
      children = _ref14.children;
  return _react["default"].createElement("p", {
    className: classAdd
  }, children);
};

exports.CardContent = CardContent;

var SideBar = function SideBar(_ref15) {
  var sideBar = _ref15.sideBar,
      isVisible = _ref15.isVisible;
  return _react["default"].createElement(_reactOnScreen["default"], {
    once: true,
    partialVisibility: true,
    style: {
      position: 'absolute',
      top: sideBar.location.includes('top') ? '0px' : 'auto',
      bottom: sideBar.location.includes('bottom') ? '10px' : 'auto',
      left: sideBar.location.includes('left') ? '-135px' : 'auto',
      right: sideBar.location.includes('right') ? '-135px' : 'auto'
    }
  }, function (_ref16) {
    var isVisible = _ref16.isVisible;
    return _react["default"].createElement("div", {
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
      className: "jsx-890879870" + " " + "sideBar ".concat(sideBar.location ? sideBar.location : 'left-top')
    }, _react["default"].createElement(_ConditionalLink["default"], {
      linkUrl: sideBar.link,
      linkTarget: "_blank"
    }, sideBar.image ? _react["default"].createElement("img", {
      src: sideBar.image,
      className: "jsx-890879870" + " " + 'sideBar__logo'
    }) : '', sideBar.text.length > 0 ? _react["default"].createElement("span", {
      className: "jsx-890879870" + " " + "sideBar__text".concat(sideBar.isQuote ? ' isQuote' : '')
    }, sideBar.text) : '', sideBar.quoter ? _react["default"].createElement("span", {
      style: {
        display: 'block',
        marginTop: '5px'
      },
      className: "jsx-890879870"
    }, sideBar.quoter) : ''), _react["default"].createElement(_style["default"], {
      id: "890879870"
    }, "@charset \"UTF-8\";.sideBar.jsx-890879870{font-size:12px;line-height:12.8px;-webkit-letter-spacing:-0.1px;-moz-letter-spacing:-0.1px;-ms-letter-spacing:-0.1px;letter-spacing:-0.1px;}.sideBar__logo.jsx-890879870{display:block;width:100%;margin-bottom:12px;}.sideBar__text.jsx-890879870{position:relative;display:block;border-top:7px solid #000;padding-top:9px;}.sideBar__text.isQuote.jsx-890879870:before{content:'\u201C';margin-left:-7px;}.sideBar__text.isQuote.jsx-890879870:after{content:'\u201D';margin-right:-7px;}.sideBar__text.jsx-890879870 p.jsx-890879870{margin:0;}"));
  });
};

exports.SideBar = SideBar;

var LeftCarving = function LeftCarving(_ref17) {
  var children = _ref17.children;
  return _react["default"].createElement("figure", {
    className: "jsx-2613545546" + " " + 'leftCarving'
  }, _react["default"].createElement("div", {
    id: "leftCarving__border",
    className: "jsx-2613545546"
  }), children, _react["default"].createElement(_style["default"], {
    id: "2613545546"
  }, ".leftCarving.jsx-2613545546{font-family:Atlas Grotesk;font-style:normal;font-weight:bold;font-size:1.8vw;line-height:2.1vw;padding-top:11px;padding-bottom:4.5px;-webkit-letter-spacing:-0.25px;-moz-letter-spacing:-0.25px;-ms-letter-spacing:-0.25px;letter-spacing:-0.25px;color:#333;float:left;max-width:50%;margin:.9vw -14vw .7vw 3vw;-webkit-transform:translateX(-16vw);-ms-transform:translateX(-16vw);transform:translateX(-16vw);border-top:5px solid #000;}"));
};

exports.LeftCarving = LeftCarving;

var SidebarQuote = function SidebarQuote(_ref18) {
  var children = _ref18.children;
  return _react["default"].createElement("div", {
    className: "jsx-2891326595" + " " + 'sidebarquote'
  }, _react["default"].createElement("div", {
    className: "jsx-2891326595" + " " + 'sidebarquote__content'
  }, _react["default"].createElement("div", {
    id: "sidebarquote__content__border",
    className: "jsx-2891326595"
  }), children), _react["default"].createElement(_style["default"], {
    id: "2891326595"
  }, ".sidebarquote.jsx-2891326595{display:inline-block;padding:0 21px 0 0;vertical-align:top;-webkit-transform:translateX(5vw) translateY(25vw);-ms-transform:translateX(5vw) translateY(25vw);transform:translateX(5vw) translateY(25vw);}.sidebarquote.jsx-2891326595 #sidebarquote__content__border.jsx-2891326595{border-top:.5vw solid;width:12.2vw;padding-bottom:1vw;}@media screen and (min-width:1622px){.sidebarquote.jsx-2891326595 #sidebarquote__content__border.jsx-2891326595{border-top:8px solid;width:197px;padding-bottom:17px;}}.sidebarquote.jsx-2891326595 .sidebarquote__content.jsx-2891326595{margin-top:7px;width:12.3vw;font-family:Atlas Grotesk;font-weight:600;font-size:1.2vw;line-height:1.4vw;-webkit-letter-spacing:.01vw;-moz-letter-spacing:.01vw;-ms-letter-spacing:.01vw;letter-spacing:.01vw;display:inline-block;}@media screen and (min-width:1622px){.sidebarquote.jsx-2891326595 .sidebarquote__content.jsx-2891326595{margin-top:4px;width:205px;font-size:19.5px;line-height:23px;}}"));
};

exports.SidebarQuote = SidebarQuote;