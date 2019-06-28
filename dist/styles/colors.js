"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require("../utils/color");

// Background colors
var bgPrimary = "#fff";
var bgSecondary = "#f4fbfe";
var bgOverlay = "#000";
var bgDark = (0, _color.rgba)("#000", 0.96);
var bgMap = "#f1f4f6";

// Link colors
var linkPrimary = "#297cbb";
var linkPrimaryHover = (0, _color.rgba)(linkPrimary, 0.7);

// Border colors
var borderPrimary = "#e4e4e4";
var borderLight = "#bfd0d8";

// Text colors
var textPrimary = "#2c3643";
var textSecondary = (0, _color.rgba)(textPrimary, 0.7);
var textOverlay = "#fff";
var textLight = "#576576";

// Shadow colors
var shadowPrimary = "#000";

// Accent colors
var accentBlue = "#88bde7";
var accentGray = "#b6c3ca";
var accentGreen = "#16c98d";
var accentOrange = "#ff882e";
var accentPink = "#ff6e8d";
var accentPurple = "#9d69c9";
var accentRed = "#da0909";
var accentYellow = "#ffc83f";

// UI colors
var uiGreen = "#44db5e";

// Social colors
var socialFacebook = "#3a5999";
var socialFacebookMessenger = "#1472fb";
var socialPinterest = "#cb2027";
var socialGoogleBlue = "#557ebf";
var socialGoogleGreen = "#36a852";
var socialGoogleYellow = "#f9bc15";
var socialGoogleRed = "#ea4535";
var socialReddit = "#fc4220";
var socialTwitter = "#1da1f2";
var socialWhatsapp = "#28eb76";
var socialWeChat = "#7bb32e";

// POI colors
// These are deprecated and will be removed in the next major release
var poiGreen = accentGreen;
var poiBlue = accentBlue;
var poiYellow = accentYellow;
var poiRed = accentRed;
var poiPink = accentPink;
var poiPurple = accentPurple;
var poiGray = accentGray;
var poiDefault = "#a8a9ae";
var poiEat = "#00ca8b";
var poiPlay = "#ffc92a";
var poiSee = "#f8324d";

exports.default = {
  bgPrimary: bgPrimary,
  bgSecondary: bgSecondary,
  bgOverlay: bgOverlay,
  bgDark: bgDark,
  bgMap: bgMap,

  linkPrimary: linkPrimary,
  linkPrimaryHover: linkPrimaryHover,

  borderPrimary: borderPrimary,
  borderLight: borderLight,

  textPrimary: textPrimary,
  textSecondary: textSecondary,
  textOverlay: textOverlay,
  textLight: textLight,

  shadowPrimary: shadowPrimary,

  accentBlue: accentBlue,
  accentGray: accentGray,
  accentGreen: accentGreen,
  accentOrange: accentOrange,
  accentPink: accentPink,
  accentPurple: accentPurple,
  accentRed: accentRed,
  accentYellow: accentYellow,

  uiGreen: uiGreen,

  poiGreen: poiGreen,
  poiBlue: poiBlue,
  poiYellow: poiYellow,
  poiRed: poiRed,
  poiPink: poiPink,
  poiPurple: poiPurple,
  poiGray: poiGray,
  poiDefault: poiDefault,
  poiEat: poiEat,
  poiPlay: poiPlay,
  poiSee: poiSee,

  socialFacebook: socialFacebook,
  socialFacebookMessenger: socialFacebookMessenger,
  socialGoogleBlue: socialGoogleBlue,
  socialGoogleGreen: socialGoogleGreen,
  socialGoogleYellow: socialGoogleYellow,
  socialGoogleRed: socialGoogleRed,
  socialPinterest: socialPinterest,
  socialReddit: socialReddit,
  socialTwitter: socialTwitter,
  socialWhatsapp: socialWhatsapp,
  socialWeChat: socialWeChat
};