'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Image = require('../components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ImageWithZoom = require('../components/ImageWithZoom');

var _ImageWithZoom2 = _interopRequireDefault(_ImageWithZoom);

var _Slider = require('../components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _RevealCarousel = require('../components/RevealCarousel');

var _RevealCarousel2 = _interopRequireDefault(_RevealCarousel);

var _CircularCarousel = require('../components/CircularCarousel');

var _CircularCarousel2 = _interopRequireDefault(_CircularCarousel);

var _Colors = require('./Colors');

var _Colors2 = _interopRequireDefault(_Colors);

var _Icons = require('./Icons');

var _Icons2 = _interopRequireDefault(_Icons);

var _Typography = require('./Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Device = require('../components/Device');

var _Device2 = _interopRequireDefault(_Device);

var _Museum = require('../components/Museum');

var _Museum2 = _interopRequireDefault(_Museum);

var _GridGallery = require('../components/GridGallery');

var _GridGallery2 = _interopRequireDefault(_GridGallery);

var _StackedImage = require('../components/StackedImage');

var _StackedImage2 = _interopRequireDefault(_StackedImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageGallery = ['https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5dXVzeTAxc3owaW5qbWc0ZXl3enItMjQwOGZwMS1vcGVuZXItbG8tcjIuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19'];

var imageGallery2 = ['https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtxeHhjZjAwaDI5dmI0djRlZGpoOGYtMjMwN2h3LW9wZW5lci1sby1yMi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHoyNzAwNXkwaXA3ZnQ0cTcyeDctMjQxMmZmLWFtZXJpY2EtbG8tcjMucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjR9fX0=', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHozdDAwNWQwaXFlcnJ3NWg2cDgtMjIwOWZmLW1hbmdvLWxvLXIyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHoxdDAwNWMwaXFlZ243bWwxZWotMjMwNWZmLXdhdGNoLWxvLXIyMy5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em01ZjAwNjAwaXFlMXJoM213Y2MtMjMwMmZmLW5hZGVsbGEtbG8tcjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjR9fX0=', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em04eDAxZWowaW5qNnlyd3hpdWstMjMwMmZmLW5hZGVsbGEtbG8tcjIyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em1haDAxZWswaW5qc3lla2cxamwtMjMxMnN3LWpqaW50ZXJ2aWV3LWxvLXIyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19'];

var imageGallery3 = ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg', 'https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70'];

var galleries = [{
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzeyr8002w0inj5mvflwjl-01-gxxl-58826efa-d964-4c67-bfff-66d80a771fd0.full.jpg',
  images: imageGallery,
  startIndex: 0
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzgbp6003g0ip74bkqmpco-01-final-150331-white-v12rgb-blackbg-jmo-w-eh1-1800x1047.full.jpg',
  images: imageGallery2,
  startIndex: 2
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzu2z4008m0injiij0kd20-01-1016widpnike002.full.jpg',
  images: imageGallery3,
  startIndex: 4
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzvmwp00as0injrv5vtwcu-01-1316wicvcove001.full.jpg',
  images: imageGallery,
  startIndex: 6
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzfcno003q0injf7jh699h-01-1214wi1dnola001.full.jpg',
  images: imageGallery2,
  startIndex: 8
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzqfs4005q0inj3sn07a7l-01-0615wiffilmf035.full.jpg',
  images: imageGallery3,
  startIndex: 10
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzul8t009e0injparsz6s7-01-0616wiaiffgo001.full.jpg',
  images: imageGallery,
  startIndex: 12
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzw2av005s0ipgsubr4uuf-01-0916wiffbees004.full.jpg',
  images: imageGallery2,
  startIndex: 14
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzfv3i00170ip7dxa6mfyo-01-caitoppermann-2017-01-24-wired-nike-kenya-dsc0397.full.jpg',
  images: imageGallery3,
  startIndex: 16
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzsmzc006m0inj8c09q04j-0516wiglessa001.full.jpg',
  images: imageGallery,
  startIndex: 18
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzv3e500a90inj7pcvmrbu-01-0914wiffmang008.full.jpg',
  images: imageGallery2,
  startIndex: 20
}, {
  name: '',
  thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzwndg00cs0injhf78powl-01-0314wimpmusi003.full.jpg',
  images: imageGallery3,
  startIndex: 22
}];

(0, _react3.storiesOf)('Styles', module).add('Colors', function () {
  return _react2.default.createElement(_Colors2.default, null);
}).add('Typeography', function () {
  return _react2.default.createElement(_Typography2.default, null);
}).add('Icons', function () {
  return _react2.default.createElement(_Icons2.default, null);
});

(0, _react3.storiesOf)('Image', module).add('Image', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '110vh auto' } },
    _react2.default.createElement(_Image2.default, {
      altAsset: 'http://gdp-site.s3.amazonaws.com/attachments/cjzsrvkja0d010in1g67mqizp-platon-diptych-mobile.full.png',
      imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
      aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'square'),
      fullBleed: (0, _addonKnobs.boolean)('fullBleed', false),
      imgSource: 'http://gdp-site.s3.amazonaws.com/attachments/cjzsrvki60djv0itgcr7ccd8t-platon-diptych.full.jpg',
      linkUrl: (0, _addonKnobs.text)('url', ''),
      verticalAlign: (0, _addonKnobs.select)('Vertical Align', ['top', 'center', 'bottom'], 'center'),
      horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', ['left', 'center', 'right'], 'center')
    })
  );
}).add('Image with Caption', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '50px auto' } },
    _react2.default.createElement(_Image2.default, {
      caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.'),
      imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
      aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect'),
      fullBleed: (0, _addonKnobs.boolean)('fullBleed', false),
      imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg',
      linkUrl: (0, _addonKnobs.text)('url', ''),
      verticalAlign: (0, _addonKnobs.select)('Vertical Align', ['top', 'center', 'bottom'], 'center'),
      horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', ['left', 'center', 'right'], 'center')
    })
  );
}).add('Image with SideBar', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '50px auto' } },
    _react2.default.createElement(_Image2.default, {
      sideBar: {
        text: (0, _addonKnobs.text)('Sidebar Text', 'Smaller length, Sidebar text area.'),
        image: 'http://localhost:1111//uploads/attachments/cjnvzldyw002oq5awhgt8svof-2000px-adweek-logo.png',
        isQuote: true,
        link: (0, _addonKnobs.text)('sidebar link', ''),
        quoter: (0, _addonKnobs.text)('Quoter', '—Blaine'),
        location: (0, _addonKnobs.select)('Sidebar Location', {
          TopLeft: 'left-top',
          TopRight: 'right-top',
          BottomLeft: 'left-bottom',
          BottomRight: 'right-bottom'
        }, 'top-left')
      },
      imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
      aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect'),
      fullBleed: (0, _addonKnobs.boolean)('fullBleed', false),
      imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg',
      linkUrl: (0, _addonKnobs.text)('url', ''),
      verticalAlign: (0, _addonKnobs.select)('Vertical Align', ['top', 'center', 'bottom'], 'center'),
      horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', ['left', 'center', 'right'], 'center')
    })
  );
}).add('Image with Zoom', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '50px auto' } },
    _react2.default.createElement(_ImageWithZoom2.default, {
      imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
      aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect'),
      fullBleed: (0, _addonKnobs.boolean)('Full Bleed', false),
      stretchH: (0, _addonKnobs.boolean)('Stretch Horizontal', false),
      imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
      // imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg'
      // imgSource='https://d11b794nw2x0wi.cloudfront.net/attachments/cjdkx87gb0023njawm9h9o3v6-eye-level-even-0021-patrick.png'
      , verticalAlign: (0, _addonKnobs.select)('Vertical Align', ['top', 'center', 'bottom'], 'bottom'),
      horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', ['left', 'center', 'right'], 'center')
    })
  );
}).add('Device Image', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '10px auto' } },
    _react2.default.createElement(
      _Device2.default,
      { classAdd: 'test', deviceColor: (0, _addonKnobs.select)('Device Color', {
          black: 'black',
          white: 'white'
        }, 'black') },
      _react2.default.createElement(_Image2.default, {
        imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
        aspectRatio: 'standard',
        skipIntro: true,
        imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg',
        verticalAlign: (0, _addonKnobs.select)('Vertical Align', ['top', 'center', 'bottom'], 'center'),
        horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', ['left', 'center', 'right'], 'center')
      })
    )
  );
}).add('Image with Hover', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '50px auto' } },
    _react2.default.createElement(_Image2.default, {
      imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
      aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'square'),
      fullBleed: (0, _addonKnobs.boolean)('fullBleed', false),
      imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg',
      imgHover: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg',
      linkUrl: (0, _addonKnobs.text)('url', ''),
      verticalAlign: (0, _addonKnobs.select)('Vertical Align', ['top', 'center', 'bottom'], 'center'),
      horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', ['left', 'center', 'right'], 'center')
    })
  );
}).add('Image Slider', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '50px auto' } },
    _react2.default.createElement(_Slider2.default, {
      images: imageGallery,
      aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'sixteen'),
      caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')
    }),
    _react2.default.createElement(
      'style',
      null,
      '\n        .backArrow {\n          position: absolute;\n          left: 0;\n        }\n        .nextArrow {\n          position: absolute;\n          right: 0;\n        }\n      '
    )
  );
}).add('Image Carousel (Reveal)', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '75%', margin: '50px auto' } },
    _react2.default.createElement(_RevealCarousel2.default, {
      images: imageGallery,
      countIndicator: (0, _addonKnobs.select)('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots'),
      containerAspect: (0, _addonKnobs.select)('Container Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect' }, 'sixteen'),
      aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'sixteen'),
      caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')
    })
  );
}).add('Image Carousel (Circular)', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '75%', margin: '50px auto' } },
    _react2.default.createElement(
      _CircularCarousel2.default,
      {
        aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped', NoAspect: 'noAspect' }, 'standard'),
        countIndicator: (0, _addonKnobs.select)('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots'),
        caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.'),
        shadow: (0, _addonKnobs.select)('shadow', { yes: 'yes', no: 'no' }, 'no')
      },
      imageGallery2.map(function (img, index) {
        return _react2.default.createElement(_Image2.default, {
          key: 'img-' + index,
          aspectRatio: 'noAspect',
          skipIntro: true,
          imgSource: img,
          visibilityOverride: true
        });
      })
    )
  );
}).add('Museum (Gallery of Galleries)', function () {
  return _react2.default.createElement(_Museum2.default, {
    classAdd: '',
    galleries: galleries,
    countIndicator: (0, _addonKnobs.select)('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots'),
    view: (0, _addonKnobs.select)('View Mode', { lightMode: 'lightMode', darkMode: 'darkMode' }, 'lightMode'),
    columns: (0, _addonKnobs.number)('Columns', 4),
    thumbAspect: (0, _addonKnobs.select)('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square' }, 'sixteen'),
    containerAspect: (0, _addonKnobs.select)('Container Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect' }, 'sixteen'),
    caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')
  });
}).add('Grid Gallery (Mosaic)', function () {
  return _react2.default.createElement(_GridGallery2.default, {
    removeGrayBackground: (0, _addonKnobs.boolean)('Remove Gray Background', false),
    mobileCarousel: (0, _addonKnobs.boolean)('mobileCarousel', true),
    mixedOr: (0, _addonKnobs.boolean)('mixedOr', false),
    altAsset: ['https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70', 'https://i.vimeocdn.com/video/737973734.webp?mw=2800&q=70', 'https://i.vimeocdn.com/video/737960529.webp?mw=1400&mh=583&q=70'],
    altRatio: (0, _addonKnobs.select)('Alt Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect', None: '' }, ''),
    classAdd: '',
    headingCaption: 'Lesson 2: Design Matters',
    images: imageGallery2,
    thumbs: imageGallery2,
    countIndicator: (0, _addonKnobs.select)('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots'),
    view: (0, _addonKnobs.select)('View Mode', { lightMode: 'lightMode', darkMode: 'darkMode' }, 'lightMode'),
    carousel: (0, _addonKnobs.select)('carousel', { yes: 'yes', no: 'no' }, 'no'),
    columns: (0, _addonKnobs.number)('Columns', 3),
    thumbAspect: (0, _addonKnobs.select)('Image Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect' }, 'square'),
    containerAspect: (0, _addonKnobs.select)('Container Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect' }, 'square'),
    caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')
  });
}).add('Images Stacked', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '75%' } },
    _react2.default.createElement(_StackedImage2.default, {
      images: imageGallery,
      aspectRatio: (0, _addonKnobs.select)('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'sixteen'),
      caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')
    })
  );
});