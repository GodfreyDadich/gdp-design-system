'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Hero = require('../components/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _SideBySide = require('../components/SideBySide');

var _SideBySide2 = _interopRequireDefault(_SideBySide);

var _Layered = require('../components/Layered');

var _Layered2 = _interopRequireDefault(_Layered);

var _Inset = require('../components/Inset');

var _Inset2 = _interopRequireDefault(_Inset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breadCrumbData = [{
  title: 'home',
  slug: 'http://google.com'
}, {
  title: 'work',
  slug: 'http://google.com'
}, {
  title: 'wired',
  slug: 'http://google.com'
}];

(0, _react3.storiesOf)('Hero', module).add('Static Image', function () {
  return _react2.default.createElement(_Hero2.default, { type: 'image', source: 'https://d36aj1cv2i74vd.cloudfront.net/attachments/cjqfi857i1l7ut0pfuca6v3tq-sfvisit2016-0643-1920.jpg' });
}).add('Video', function () {
  return _react2.default.createElement(_Hero2.default, { type: 'video', source: 'https://vimeo.com/299978304', thumb: 'https://i.vimeocdn.com/video/738220216_1000.jpg' });
}).add('Image with Zoom effect', function () {
  return _react2.default.createElement(_Hero2.default, { type: 'image', withZoom: 'true', source: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg' });
}).add('Side by side', function () {
  return _react2.default.createElement(_SideBySide2.default, {
    title: (0, _addonKnobs.text)('Title', 'Marcus Wohlsen'),
    subtitle: (0, _addonKnobs.text)('Subtitle', 'A rare peek inside Amazon\'s massive wish- fulfiling machine'),
    breadCrumbData: breadCrumbData,
    delimiter: (0, _addonKnobs.text)('Separator', '/'),
    source: 'https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg' });
}).add('Layered', function () {
  return _react2.default.createElement(_Layered2.default, {
    title: (0, _addonKnobs.text)('Title', 'WIRED'),
    subtitle: (0, _addonKnobs.text)('Subtitle', 'A rare peek inside Amazon\'s massive wish- fulfiling machine'),
    breadCrumbData: breadCrumbData,
    delimiter: (0, _addonKnobs.text)('Separator', '/'),
    source: 'https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg' });
}).add('Inset', function () {
  return _react2.default.createElement(_Inset2.default, {
    source: 'https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg' });
});