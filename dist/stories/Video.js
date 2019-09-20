'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _HoverVideo = require('../components/HoverVideo');

var _HoverVideo2 = _interopRequireDefault(_HoverVideo);

var _Video = require('../components/Video');

var _Video2 = _interopRequireDefault(_Video);

var _Device = require('../components/Device');

var _Device2 = _interopRequireDefault(_Device);

var _CircularCarousel = require('../components/CircularCarousel');

var _CircularCarousel2 = _interopRequireDefault(_CircularCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var videoEnded = function videoEnded() {
  // console.log('video over')
};
(0, _react3.storiesOf)('Video', module).add('Video Element', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '10px auto', paddingTop: '100vh' } },
    _react2.default.createElement(_Video2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      autoplay: true,
      volume: 0,
      vidSource: 'https://vimeo.com/299777569',
      thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg',
      onEnd: videoEnded
    }),
    _react2.default.createElement(_Video2.default, {
      title: '',
      aspectRatio: 'cropped',
      fullBleed: false,
      vidSource: 'https://vimeo.com/299756718',
      thumb: 'https://i.vimeocdn.com/video/737947212_1000.jpg'
    })
  );
}).add('Video With Caption', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '10px auto' } },
    _react2.default.createElement(_Video2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      vidSource: 'https://vimeo.com/299543193',
      thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg',
      caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')
    })
  );
}).add('Video With Sidebar', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '10px auto' } },
    _react2.default.createElement(_Video2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      vidSource: 'https://vimeo.com/299543193',
      thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg',
      sideBar: {
        text: (0, _addonKnobs.text)('Sidebar Text', 'Smaller length, Sidebar text area.'),
        image: 'http://localhost:1111//uploads/attachments/cjnvzldyw002oq5awhgt8svof-2000px-adweek-logo.png',
        isQuote: true,
        location: (0, _addonKnobs.select)('Sidebar Location', {
          TopLeft: 'left-top',
          TopRight: 'right-top',
          BottomLeft: 'left-bottom',
          BottomRight: 'right-bottom'
        }, 'top-left')
      }
    })
  );
}).add('Device Video', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '10px auto' } },
    _react2.default.createElement(
      _Device2.default,
      {
        deviceColor: (0, _addonKnobs.select)('Device Color', {
          black: 'black',
          white: 'white'
        }, 'black') },
      _react2.default.createElement(_Video2.default, {
        title: '',
        aspectRatio: 'standard',
        vidSource: 'https://vimeo.com/299978313',
        autoplay: true,
        loop: true,
        skipIntro: true,
        config: {
          vimeo: {
            playerOptions: {
              background: 1,
              transparent: 0
            }
          }
        },
        thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg'
      })
    )
  );
}).add('Video Carousel', function () {
  return _react2.default.createElement(
    _CircularCarousel2.default,
    { aspectRatio: 'sixteen' },
    _react2.default.createElement(_Video2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      volume: 0,
      loadActive: true,
      vidSource: 'https://vimeo.com/299777569',
      thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg',
      onEnd: videoEnded
    }),
    _react2.default.createElement(_Video2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      volume: 0,
      loadActive: true,
      vidSource: 'https://vimeo.com/299777569',
      thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg',
      onEnd: videoEnded
    }),
    _react2.default.createElement(_Video2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      volume: 0,
      loadActive: true,
      vidSource: 'https://vimeo.com/299777569',
      thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg',
      onEnd: videoEnded
    }),
    _react2.default.createElement(_Video2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      volume: 0,
      loadActive: true,
      vidSource: 'https://vimeo.com/299777569',
      thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg',
      onEnd: videoEnded
    })
  );
}).add('Hover Video', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '1000px auto 0' } },
    _react2.default.createElement(_HoverVideo2.default, {
      vidSource: 'https://player.vimeo.com/video/324374859',
      thumb: 'https://i.vimeocdn.com/video/767777887',
      aspectRatio: 'custom',
      autoplay: true,
      customPadding: '62%'
    }),
    _react2.default.createElement(_HoverVideo2.default, {
      title: '',
      aspectRatio: 'cropped',
      fullBleed: false,
      vidSource: 'https://vimeo.com/299756718',
      thumb: 'https://i.vimeocdn.com/video/737947212_1000.jpg'
    }),
    _react2.default.createElement(_HoverVideo2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      vidSource: 'https://vimeo.com/299543193',
      thumb: 'https://i.vimeocdn.com/video/737702480_1000.jpg'
    }),
    _react2.default.createElement(_HoverVideo2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      vidSource: 'https://vimeo.com/299543207',
      thumb: 'https://i.vimeocdn.com/video/737702396_1000.jpg'
    }),
    _react2.default.createElement(_HoverVideo2.default, {
      title: '',
      aspectRatio: 'sixteen',
      fullBleed: false,
      vidSource: 'https://vimeo.com/299543215',
      thumb: 'https://i.vimeocdn.com/video/737702269_1000.jpg'
    })
  );
});