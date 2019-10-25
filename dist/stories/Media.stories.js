"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedInstagram = exports.EmbedPodcast = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _PodcastEmbed = _interopRequireDefault(require("../components/PodcastEmbed"));

var _InstaEmbed = _interopRequireDefault(require("../components/InstaEmbed"));

var _default = {
  title: 'Design System|Media Embeds'
};
exports["default"] = _default;

var EmbedPodcast = function EmbedPodcast() {
  return _react["default"].createElement(_PodcastEmbed["default"], null);
};

exports.EmbedPodcast = EmbedPodcast;

var EmbedInstagram = function EmbedInstagram() {
  return _react["default"].createElement(_InstaEmbed["default"], null);
};

exports.EmbedInstagram = EmbedInstagram;