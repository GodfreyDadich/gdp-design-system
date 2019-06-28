'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Toast = require('../components/Toast');

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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