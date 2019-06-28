'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Breadcrumb = require('./Breadcrumb');

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Inset = function Inset(_ref) {
  var source = _ref.source,
      title = _ref.title,
      subtitle = _ref.subtitle,
      breadCrumbData = _ref.breadCrumbData,
      delimiter = _ref.delimiter;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-3292367126' + ' ' + 'insetHero'
    },
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-3292367126' + ' ' + 'insetHero__image'
      },
      _react2.default.createElement('img', { src: source, alt: 'wired', className: 'jsx-3292367126'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3292367126',
      css: '.insetHero__image.jsx-3292367126{width:90vw;height:auto;padding:5vw;}.insetHero__image.jsx-3292367126 img.jsx-3292367126{height:auto;margin-left:auto;display:block;margin-left:auto;margin-right:auto;width:80%;}'
    })
  );
};

exports.default = Inset;