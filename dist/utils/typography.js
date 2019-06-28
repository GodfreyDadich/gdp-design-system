"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textSuper = textSuper;
exports.textHeading1 = textHeading1;
exports.textHeading2 = textHeading2;
exports.textHeading3 = textHeading3;
exports.textHeading4 = textHeading4;
exports.textHeading5 = textHeading5;
exports.textHeading6 = textHeading6;
exports.textHeading7 = textHeading7;
exports.textHeading8 = textHeading8;
exports.textBodyArticle = textBodyArticle;
exports.textBodyArticleSmall = textBodyArticleSmall;
exports.textBodySmall = textBodySmall;
exports.textAccent = textAccent;
exports.textUppercase = textUppercase;

var _font = require("./font");

var _font2 = _interopRequireDefault(_font);

var _typography = require("../styles/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weights = {
  light: _typography.fontWeightLight,
  regular: _typography.fontWeightRegular,
  medium: _typography.fontWeightMedium,
  book: _typography.fontWeightRegular // Book is deprecated and will be removed in the next major release
};

function textSuper() {
  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeSuper + "px",
    fontWeight: _typography.fontWeightMedium,
    lineHeight: _typography.lineHeightSuper
  };
}

function textHeading1() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";

  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeHeading1 + "px",
    fontWeight: weights[weight],
    lineHeight: _typography.lineHeightHeading1
  };
}

function textHeading2() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";

  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeHeading2 + "px",
    fontWeight: weights[weight],
    lineHeight: _typography.lineHeightHeading2
  };
}

function textHeading3() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";

  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeHeading3 + "px",
    fontWeight: weights[weight],
    lineHeight: _typography.lineHeightHeading3
  };
}

function textHeading4() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";

  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeHeading4 + "px",
    fontWeight: weights[weight],
    lineHeight: _typography.lineHeightHeading4
  };
}

function textHeading5() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";

  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeHeading5 + "px",
    fontWeight: weights[weight],
    lineHeight: _typography.lineHeightHeading5
  };
}

function textHeading6() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";

  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeHeading6 + "px",
    fontWeight: weights[weight],
    lineHeight: _typography.lineHeightHeading6
  };
}

function textHeading7() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";

  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeHeading7 + "px",
    fontWeight: weights[weight],
    lineHeight: _typography.lineHeightHeading7
  };
}

function textHeading8() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";

  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeHeading8 + "px",
    fontWeight: weights[weight],
    lineHeight: _typography.lineHeightHeading8
  };
}

function textBodyArticle() {
  return {
    fontFamily: (0, _font2.default)("miller"),
    fontSize: _typography.fontSizeBodyArticle + "px",
    lineHeight: _typography.lineHeightBodyArticle
  };
}

function textBodyArticleSmall() {
  return {
    fontFamily: (0, _font2.default)("miller"),
    fontSize: _typography.fontSizeBodyArticleSmall + "px",
    lineHeight: _typography.lineHeightBodyArticleSmall
  };
}

function textBodySmall() {
  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeBodySmall + "px",
    lineHeight: _typography.lineHeightBodySmall
  };
}

function textAccent() {
  return {
    fontFamily: (0, _font2.default)("miller"),
    fontSize: _typography.fontSizeAccent + "px",
    fontStyle: "italic",
    lineHeight: _typography.lineHeightAccent
  };
}

function textUppercase() {
  return {
    fontFamily: (0, _font2.default)("benton"),
    fontSize: _typography.fontSizeUppercase + "px",
    fontWeight: _typography.fontWeightMedium,
    lineHeight: _typography.lineHeightUppercase,
    textTransform: "uppercase"
  };
}