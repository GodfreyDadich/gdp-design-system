'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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