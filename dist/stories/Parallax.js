'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Video = require('../components/Video');

var _Video2 = _interopRequireDefault(_Video);

var _reactScrollParallax = require('react-scroll-parallax');

var _Image = require('../components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _addonKnobs = require('@storybook/addon-knobs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Parallax', module).add('Parallax Test', function () {
  return _react2.default.createElement(
    _reactScrollParallax.ParallaxProvider,
    null,
    _react2.default.createElement(
      _reactScrollParallax.Parallax,
      {
        offsetYMax: 20,
        offsetYMin: -20,
        slowerScrollRate: true
      },
      _react2.default.createElement(_Video2.default, {
        title: '',
        aspectRatio: 'sixteen',
        fullBleed: false,
        vidSource: 'https://vimeo.com/299543193',
        thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg',
        classAdd: 'skip-1 col-3'
      })
    ),
    _react2.default.createElement(
      _reactScrollParallax.Parallax,
      {
        offsetYMax: 20,
        offsetYMin: -20
      },
      _react2.default.createElement(_Card2.default, {
        cardTitle: 'Test Title',
        cardSubTitle: 'Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.',
        cardContent: 'Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.',
        linkText: 'Test Link',
        linkUrl: '',
        mediaOrientation: 'top',
        imageTitle: 'test',
        aspectRatio: 'standard',
        imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg',
        horizontalAlign: 'center',
        classAdd: 'skip-3 col-3'
      })
    )
  );
});