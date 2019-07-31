'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _PodcastEmbed = require('../components/PodcastEmbed');

var _PodcastEmbed2 = _interopRequireDefault(_PodcastEmbed);

var _InstaEmbed = require('../components/InstaEmbed');

var _InstaEmbed2 = _interopRequireDefault(_InstaEmbed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Media', module).add('Podcast Embed', function () {
  return _react2.default.createElement(_PodcastEmbed2.default, null);
}).add('Instagram Embed', function () {
  return _react2.default.createElement(_InstaEmbed2.default, null);
});