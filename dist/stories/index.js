'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _addonInfo = require('@storybook/addon-info');

var _demo = require('@storybook/react/demo');

var _Select = require('../components/Select');

var _Select2 = _interopRequireDefault(_Select);

var _SelectNative = require('../components/SelectNative');

var _SelectNative2 = _interopRequireDefault(_SelectNative);

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

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Breadcrumb = require('../components/Breadcrumb');

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Chips = require('../components/Chips');

var _Chips2 = _interopRequireDefault(_Chips);

var _Colors = require('./Colors');

var _Colors2 = _interopRequireDefault(_Colors);

var _Typography = require('./Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _PodcastEmbed = require('../components/PodcastEmbed');

var _PodcastEmbed2 = _interopRequireDefault(_PodcastEmbed);

var _InstaEmbed = require('../components/InstaEmbed');

var _InstaEmbed2 = _interopRequireDefault(_InstaEmbed);

var _Hero = require('../components/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _HoverVideo = require('../components/HoverVideo');

var _HoverVideo2 = _interopRequireDefault(_HoverVideo);

var _Video = require('../components/Video');

var _Video2 = _interopRequireDefault(_Video);

var _Device = require('../components/Device');

var _Device2 = _interopRequireDefault(_Device);

var _Loader = require('../components/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _GilmoreWave = require('../components/GilmoreWave');

var _GilmoreWave2 = _interopRequireDefault(_GilmoreWave);

var _GilmoreExpand = require('../components/GilmoreExpand');

var _GilmoreExpand2 = _interopRequireDefault(_GilmoreExpand);

var _GilmoreExpand3 = require('../components/GilmoreExpand2');

var _GilmoreExpand4 = _interopRequireDefault(_GilmoreExpand3);

var _GilmoreMobile = require('../components/GilmoreMobile');

var _GilmoreMobile2 = _interopRequireDefault(_GilmoreMobile);

var _Toast = require('../components/Toast');

var _Toast2 = _interopRequireDefault(_Toast);

var _reactScrollParallax = require('react-scroll-parallax');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imageGallery = ['http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg', 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_4.jpg', 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_3.jpg', 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_2.jpg', 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_1.jpg'];
(0, _react3.storiesOf)('Styles', module).add('Colors', function () {
  return _react2.default.createElement(_Colors2.default, null);
}).add('Typeography', function () {
  return _react2.default.createElement(_Typography2.default, null);
});

(0, _react3.storiesOf)('Image', module).add('Image', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '110vh auto' } },
    _react2.default.createElement(_Image2.default, {
      imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
      aspectRatio: (0, _addonKnobs.selectV2)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'square'),
      fullBleed: (0, _addonKnobs.boolean)('fullBleed', false),
      imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg',
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
      aspectRatio: (0, _addonKnobs.selectV2)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect'),
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
        // link: 'http://www.google.com',
        quoter: (0, _addonKnobs.text)('Quoter', '—Blaine'),
        location: (0, _addonKnobs.selectV2)('Sidebar Location', {
          TopLeft: 'left-top',
          TopRight: 'right-top',
          BottomLeft: 'left-bottom',
          BottomRight: 'right-bottom'
        }, 'top-left')
      },
      imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
      aspectRatio: (0, _addonKnobs.selectV2)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect'),
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
      aspectRatio: (0, _addonKnobs.selectV2)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect'),
      fullBleed: (0, _addonKnobs.boolean)('Full Bleed', false),
      stretchH: (0, _addonKnobs.boolean)('Stretch Horizontal', false),
      imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg'
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
      { classAdd: 'test', deviceColor: (0, _addonKnobs.selectV2)('Device Color', {
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
      aspectRatio: (0, _addonKnobs.selectV2)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'square'),
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
      aspectRatio: (0, _addonKnobs.selectV2)('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect'),
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
      aspectRatio: (0, _addonKnobs.selectV2)('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect'),
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
        aspectRatio: 'sixteen',
        caption: (0, _addonKnobs.text)('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')
      },
      _react2.default.createElement(
        _Device2.default,
        { classAdd: 'test', deviceColor: (0, _addonKnobs.selectV2)('Device Color', {
            black: 'black',
            white: 'white'
          }, 'black') },
        _react2.default.createElement(_Video2.default, {
          title: '',
          aspectRatio: 'standard',
          vidSource: 'https://vimeo.com/299978313',
          skipIntro: true,
          loop: true,
          hoverPlay: true,
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
      ),
      _react2.default.createElement(
        _Device2.default,
        { classAdd: 'test', deviceColor: (0, _addonKnobs.selectV2)('Device Color', {
            black: 'black',
            white: 'white'
          }, 'black') },
        _react2.default.createElement(_Video2.default, {
          title: '',
          aspectRatio: 'standard',
          vidSource: 'https://vimeo.com/299978313',
          skipIntro: true,
          loop: true,
          hoverPlay: true,
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
      ),
      _react2.default.createElement(
        _Device2.default,
        { classAdd: 'test', deviceColor: (0, _addonKnobs.selectV2)('Device Color', {
            black: 'black',
            white: 'white'
          }, 'black') },
        _react2.default.createElement(_Video2.default, {
          title: '',
          aspectRatio: 'standard',
          vidSource: 'https://vimeo.com/299978313',
          skipIntro: true,
          loop: true,
          hoverPlay: true,
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
      ),
      _react2.default.createElement(
        _Device2.default,
        { classAdd: 'test', deviceColor: (0, _addonKnobs.selectV2)('Device Color', {
            black: 'black',
            white: 'white'
          }, 'black') },
        _react2.default.createElement(_Video2.default, {
          title: '',
          aspectRatio: 'standard',
          vidSource: 'https://vimeo.com/299978313',
          skipIntro: true,
          loop: true,
          hoverPlay: true,
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
    )
  );
});

(0, _react3.storiesOf)('Card', module).add('basic card', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '50px auto' } },
    _react2.default.createElement(_Card2.default, {
      cardTitle: (0, _addonKnobs.text)('Card Title', 'Test Title'),
      cardSubTitle: (0, _addonKnobs.text)('Card Subtitle', 'Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.'),
      cardContent: (0, _addonKnobs.text)('Card Text', 'Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.'),
      linkText: (0, _addonKnobs.text)('Link Text', 'Test Link'),
      linkUrl: (0, _addonKnobs.text)('Link Url', ''),
      mediaOrientation: (0, _addonKnobs.select)('Media Orientation', ['top', 'left', 'right', 'bottom'], 'top'),
      imageTitle: (0, _addonKnobs.text)('Image Title/Alt', 'test'),
      aspectRatio: (0, _addonKnobs.selectV2)('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'standard'),
      fullBleed: (0, _addonKnobs.boolean)('fullBleed', false),
      imgSource: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg',
      verticalAlign: (0, _addonKnobs.select)('Vertical Align', ['top', 'center', 'bottom'], 'center'),
      horizontalAlign: (0, _addonKnobs.select)('Horizontal Align', ['left', 'center', 'right'], 'center')
    })
  );
});
(0, _react3.storiesOf)('Select', module).add('Styled Native', function () {
  return _react2.default.createElement(_SelectNative2.default, {
    selectFont: (0, _addonKnobs.select)('Font', ['sans-serif', 'serif'], 'sans-serif'),
    backgroundColor: (0, _addonKnobs.color)('Background Color', '#fff', 'Colors'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Options', 'content'),
    options: (0, _addonKnobs.array)('Options', ['option1', 'option2', 'option3'], ',', 'content'),
    selectPadding: (0, _addonKnobs.number)('Padding', 5),
    textColor: (0, _addonKnobs.color)('Text Color', '#000', 'Colors'),
    borderWidth: (0, _addonKnobs.number)('Border Width', 1),
    borderColor: (0, _addonKnobs.color)('Border Color', '#000', 'Colors'),
    fontSize: (0, _addonKnobs.number)('Font Size', 12),
    selectIcon: (0, _addonKnobs.select)('Icon', ['triangle', 'caret', 'chevron'], 'triangle'),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    borderRadius: (0, _addonKnobs.number)('Rounded Corners', 0, { range: true, min: 0, max: 30, step: 1 })
  });
}).add('Styled Custom (beta)', function () {
  return _react2.default.createElement(_Select2.default, {
    selectFont: (0, _addonKnobs.select)('Font', ['sans-serif', 'serif'], 'sans-serif'),
    backgroundColor: (0, _addonKnobs.color)('Background Color', '#fff', 'Colors'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Options', 'content'),
    options: (0, _addonKnobs.array)('Options', ['option1', 'option2', 'option3'], ',', 'content'),
    selectPadding: (0, _addonKnobs.number)('Padding', 5),
    textColor: (0, _addonKnobs.color)('Text Color', '#000', 'Colors'),
    borderWidth: (0, _addonKnobs.number)('Border Width', 1),
    borderColor: (0, _addonKnobs.color)('Border Color', '#000', 'Colors'),
    fontSize: (0, _addonKnobs.number)('Font Size', 12),
    selectIcon: (0, _addonKnobs.select)('Icon', ['triangle', 'caret', 'chevron'], 'triangle'),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    borderRadius: (0, _addonKnobs.number)('Rounded Corners', 0, { range: true, min: 0, max: 30, step: 1 })
  });
});

var breadCrumbData = [{
  title: 'test title 1',
  slug: 'http://google.com'
}, {
  title: 'test title 2',
  slug: 'http://google.com'
}, {
  title: 'test title 3',
  slug: 'http://google.com'
}];
(0, _react3.storiesOf)('Navigation', module).add('breadcrumb', function () {
  return _react2.default.createElement(_Breadcrumb2.default, {
    delimiter: (0, _addonKnobs.text)('Separator', '/'),
    links: breadCrumbData
  });
});

var chips = ['chip 1', 'chip 2', 'chip 3'];

var chipRemove = function chipRemove(toRemove) {
  chips.splice(toRemove, 1);
};

(0, _react3.storiesOf)('Chips', module).add('chips', function () {
  return _react2.default.createElement(_Chips2.default, {
    chips: (0, _addonKnobs.array)('Chips', chips, ','),
    closeCallback: chipRemove
  });
});

var modalClosed = function modalClosed() {
  console.log('modal closed from parent');
  modalState = false;
};
var toastCallback = function toastCallback() {
  console.log('callback');
};
var modalState = true;

(0, _react3.storiesOf)('Modals', module).add('Modal Window', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      ' this is some test content for below the modal'
    ),
    modalState.toString(),
    _react2.default.createElement(
      _Modal2.default,
      {
        closeCallback: modalClosed,
        modalVisible: (0, _addonKnobs.boolean)('Toggle modal', modalState) },
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
        horizontalAlign: 'center'
      })
    )
  );
}).add('Toast', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Toast2.default, {
      active: (0, _addonKnobs.boolean)('Toggle Toast', true),
      callback: toastCallback,
      header: (0, _addonKnobs.text)('Header', 'Email address copied to clipboard'),
      message: (0, _addonKnobs.text)('Message', 'apply@godfreydadich.com')
    })
  );
});

(0, _react3.storiesOf)('Media', module).add('Podcast Embed', function () {
  return _react2.default.createElement(_PodcastEmbed2.default, null);
}).add('Instagram Embed', function () {
  return _react2.default.createElement(_InstaEmbed2.default, null);
});

(0, _react3.storiesOf)('Hero', module).add('Static Image', function () {
  return _react2.default.createElement(_Hero2.default, { type: 'image', source: 'https://d36aj1cv2i74vd.cloudfront.net/attachments/cjqfi857i1l7ut0pfuca6v3tq-sfvisit2016-0643-1920.jpg' });
}).add('Video', function () {
  return _react2.default.createElement(_Hero2.default, { type: 'video', source: 'https://vimeo.com/299978304', thumb: 'https://i.vimeocdn.com/video/738220216_1000.jpg' });
}).add('Image with Zoom effect', function () {
  return _react2.default.createElement(_Hero2.default, { type: 'image', withZoom: 'true', source: 'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg' });
});

var videoEnded = function videoEnded() {
  console.log('video over');
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
        location: (0, _addonKnobs.selectV2)('Sidebar Location', {
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
        deviceColor: (0, _addonKnobs.selectV2)('Device Color', {
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
}).add('Hover Video', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '50%', margin: '1000px auto 0' } },
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
      vidSource: 'https://vimeo.com/299543203',
      thumb: 'https://i.vimeocdn.com/video/737702558_1000.jpg'
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

(0, _react3.storiesOf)('Loader', module).add('Logo Loader', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '100%', height: '50vh' } },
    _react2.default.createElement(_Loader2.default, null),
    ' '
  );
});

(0, _react3.storiesOf)('Gilmore', module).add('Gilmore Wave Animation', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '75%' } },
    _react2.default.createElement(_GilmoreWave2.default, null),
    ' '
  );
}).add('Gilmore Expand Animation', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '75%' } },
    _react2.default.createElement(_GilmoreExpand2.default, null),
    ' '
  );
}).add('Gilmore Expand 2 Animation', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '75%' } },
    _react2.default.createElement(_GilmoreExpand4.default, null),
    ' '
  );
}).add('Gilmore Mobile', function () {
  return _react2.default.createElement(
    'div',
    { style: { width: '30%', height: '100vh' } },
    _react2.default.createElement(_GilmoreMobile2.default, null),
    ' '
  );
});