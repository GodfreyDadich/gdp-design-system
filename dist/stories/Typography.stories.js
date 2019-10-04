"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BioPageHeader = exports.ItalicsHeading = exports.SmallCaps = exports.PullquoteWithAttribution = exports.PullquoteAttribution = exports.PullQuote = exports.ImageSidebarAsQuote = exports.ImageSidebar = exports.PhotoCaption = exports.Uppercase = exports.CardTitleAndSubtitle = exports.Subheading = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _typography = require("../utils/typography");

var _Pullquote = _interopRequireDefault(require("../components/Pullquote"));

var _Type = require("../components/Type");

var _default = {
  title: 'Design System|Typography'
};
exports["default"] = _default;

var H1 = function H1() {
  return _react["default"].createElement(_Type.Heading1, null, _react["default"].createElement("span", {
    style: {
      display: 'block',
      color: '#7F7F7F'
    }
  }, "Client Name"), " Project Title ", _react["default"].createElement("br", null), "Title Tk");
};

exports.H1 = H1;

var H2 = function H2() {
  return _react["default"].createElement(_Type.Heading2, null, "Top experiences in Asia");
};

exports.H2 = H2;

var H3 = function H3() {
  return _react["default"].createElement(_Type.Heading3, null, "Top experiences in Asia");
};

exports.H3 = H3;

var H4 = function H4() {
  return _react["default"].createElement(_Type.Heading4, null, "Top experiences in Asia");
};

exports.H4 = H4;

var Subheading = function Subheading() {
  return _react["default"].createElement(_Type.SubHead, null, "Top experiences in Asia");
};

exports.Subheading = Subheading;

var CardTitleAndSubtitle = function CardTitleAndSubtitle() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_Type.CardTitle, null, "Client Name"), _react["default"].createElement(_Type.CardSubTitle, null, "Dek/Editorial project title that may run into two sentences"));
};

exports.CardTitleAndSubtitle = CardTitleAndSubtitle;

var Uppercase = function Uppercase() {
  return _react["default"].createElement("div", {
    style: (0, _typography.textUppercase)()
  }, "Senior Account Manager");
};

exports.Uppercase = Uppercase;

var PhotoCaption = function PhotoCaption() {
  return _react["default"].createElement(_Type.Caption, null, "GDP divided front-of-book into three sections that each have their own distinctive look and approach");
};

exports.PhotoCaption = PhotoCaption;

var ImageSidebar = function ImageSidebar() {
  return _react["default"].createElement("div", {
    style: {
      position: 'relative',
      width: '25%',
      paddingTop: '100px',
      margin: '50px auto'
    }
  }, _react["default"].createElement(_Type.SideBar, {
    sideBar: {
      text: 'Smaller length, Sidebar text area.',
      image: 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtpN3Y4aTAycmJmemF3aG54bmZxeHctd2lyZWQtbG9nby1yZ2IucG5nIn0=',
      location: 'left-top'
    },
    isVisible: true
  }));
};

exports.ImageSidebar = ImageSidebar;

var ImageSidebarAsQuote = function ImageSidebarAsQuote() {
  return _react["default"].createElement("div", {
    style: {
      position: 'relative',
      width: '25%',
      paddingTop: '100px',
      margin: '50px auto'
    }
  }, _react["default"].createElement(_Type.SideBar, {
    sideBar: {
      text: 'Smaller length, Sidebar text area.',
      image: 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtpN3Y4aTAycmJmemF3aG54bmZxeHctd2lyZWQtbG9nby1yZ2IucG5nIn0=',
      isQuote: true,
      quoter: '—Scott Dadich',
      location: 'left-top'
    },
    isVisible: true
  }));
};

exports.ImageSidebarAsQuote = ImageSidebarAsQuote;

var PullQuote = function PullQuote() {
  return _react["default"].createElement(_Pullquote["default"], {
    classAdd: "testadd"
  }, "The editorial team created new story forms and structures that could tackle big, bold ideas with provocative voice.");
};

exports.PullQuote = PullQuote;

var PullquoteAttribution = function PullquoteAttribution() {
  return _react["default"].createElement(_Type.QuoteAttribution, {
    classAdd: "testadd"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
};

exports.PullquoteAttribution = PullquoteAttribution;

var PullquoteWithAttribution = function PullquoteWithAttribution() {
  return _react["default"].createElement(_Pullquote["default"], {
    classAdd: "testadd"
  }, "The editorial team created new story forms and structures that could tackle big, bold ideas with provocative voice.", _react["default"].createElement(_Type.QuoteAttribution, {
    classAdd: "testadd"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."));
};

exports.PullquoteWithAttribution = PullquoteWithAttribution;

var SmallCaps = function SmallCaps() {
  return _react["default"].createElement(_Type.WiredType, null, _react["default"].createElement("span", {
    style: {
      fontFamily: 'Noe Text'
    }
  }, "wired"));
};

exports.SmallCaps = SmallCaps;

var ItalicsHeading = function ItalicsHeading() {
  return _react["default"].createElement(_Type.InquiryText, null, "For speaking engagement inquiries, please contact ", _react["default"].createElement("a", {
    href: "mailto:inquiries@godfreydadich.com"
  }, "inquiries@godfreydadich.com"));
};

exports.ItalicsHeading = ItalicsHeading;

var BioPageHeader = function BioPageHeader() {
  return _react["default"].createElement(_Type.BioHeader, {
    personName: "Scott Dadich",
    personTitle: "Founder, Co-CEO",
    insta: "sdadich"
  });
};

exports.BioPageHeader = BioPageHeader;