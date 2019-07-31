'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PodcastEmbed = function PodcastEmbed(_ref) {
  var image = _ref.image;

  return _react2.default.createElement(
    'div',
    { className: 'podcasts' },
    _react2.default.createElement(
      'h2',
      null,
      'Spotify'
    ),
    _react2.default.createElement('iframe', { src: 'https://embed.spotify.com/?uri=spotify:episode:65BIKYeHysvvjPC5EJ2Qnp', width: '100%', height: '380', frameborder: '0', allowtransparency: 'true' }),
    _react2.default.createElement(
      'h2',
      null,
      'Stitcher'
    ),
    _react2.default.createElement('iframe', { style: { width: '100%', border: 'solid 1px #dedede' }, src: 'https://app.stitcher.com/splayer/f/183672/56365118', width: '100%', height: '150', frameborder: '0', scrolling: 'no' }),
    _react2.default.createElement(
      'h2',
      null,
      'Art 19'
    ),
    _react2.default.createElement('iframe', { src: 'https://art19.com/shows/the-majordomo-podcast/episodes/540a4338-d3fb-448d-9938-5b5e73b512e9/embed', style: { width: '100%', height: '200px', border: '0 none' }, scrolling: 'no' })
  );
};

exports.default = PodcastEmbed;