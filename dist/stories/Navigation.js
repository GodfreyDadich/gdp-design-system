'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _Breadcrumb = require('../components/Breadcrumb');

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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