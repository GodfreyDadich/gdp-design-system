"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var PodcastEmbed = function PodcastEmbed(_ref) {
  var image = _ref.image;
  return _react["default"].createElement("div", {
    className: "podcasts"
  }, _react["default"].createElement("h2", null, "Spotify"), _react["default"].createElement("iframe", {
    src: "https://embed.spotify.com/?uri=spotify:episode:65BIKYeHysvvjPC5EJ2Qnp",
    width: "100%",
    height: "380",
    frameborder: "0",
    allowtransparency: "true"
  }), _react["default"].createElement("h2", null, "Stitcher"), _react["default"].createElement("iframe", {
    style: {
      width: '100%',
      border: 'solid 1px #dedede'
    },
    src: "https://app.stitcher.com/splayer/f/183672/56365118",
    width: "100%",
    height: "150",
    frameborder: "0",
    scrolling: "no"
  }), _react["default"].createElement("h2", null, "Art 19"), _react["default"].createElement("iframe", {
    src: "https://art19.com/shows/the-majordomo-podcast/episodes/540a4338-d3fb-448d-9938-5b5e73b512e9/embed",
    style: {
      width: '100%',
      height: '200px',
      border: '0 none'
    },
    scrolling: "no"
  }));
};

var _default = PodcastEmbed;
exports["default"] = _default;