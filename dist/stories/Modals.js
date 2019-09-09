'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _SimpleGallery = require('../components/SimpleGallery');

var _SimpleGallery2 = _interopRequireDefault(_SimpleGallery);

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Toast = require('../components/Toast');

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalClosed = function modalClosed() {
  modalState = false;
};
var toastCallback = function toastCallback() {
  // console.log('callback')
};
var modalState = true;

var imageGallery = ['https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5dXVzeTAxc3owaW5qbWc0ZXl3enItMjQwOGZwMS1vcGVuZXItbG8tcjIuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19'];

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
        view: 'darkMode',
        closeCallback: modalClosed,
        modalVisible: (0, _addonKnobs.boolean)('Toggle modal', modalState) },
      _react2.default.createElement(_SimpleGallery2.default, {
        images: imageGallery,
        aspectRatio: 'noAspect',
        view: 'darkMode',
        index: 0
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