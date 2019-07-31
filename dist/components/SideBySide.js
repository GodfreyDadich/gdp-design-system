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

var _Type = require('./Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideBySide = function SideBySide(_ref) {
  var source = _ref.source,
      title = _ref.title,
      subtitle = _ref.subtitle,
      breadCrumbData = _ref.breadCrumbData,
      delimiter = _ref.delimiter;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1047055108' + ' ' + 'sideBySideHero'
    },
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-1047055108' + ' ' + 'sideBySideHero__image'
      },
      _react2.default.createElement('img', { src: source, alt: 'wired', className: 'jsx-1047055108'
      })
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-1047055108' + ' ' + 'sideBySideHero__title'
      },
      _react2.default.createElement(_Breadcrumb2.default, { delimiter: delimiter, links: breadCrumbData }),
      _react2.default.createElement(
        _Type.Heading1,
        null,
        _react2.default.createElement(
          'span',
          { style: { display: 'block', color: '#7f7f7f' }, className: 'jsx-1047055108'
          },
          title
        ),
        subtitle
      ),
      _react2.default.createElement('div', {
        className: 'jsx-1047055108' + ' ' + 'sideBySideHero__title__border'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1047055108',
      css: '.sideBySideHero.jsx-1047055108{background-color:#F2F2F2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;}.sideBySideHero__image.jsx-1047055108{width:50vw;overflow:hidden;margin:0;}.sideBySideHero__image.jsx-1047055108 img.jsx-1047055108{display:block;margin:0 -38.885%;width:177.777%;}.sideBySideHero__title.jsx-1047055108{height:100%;width:50vw;margin:auto;padding-left:8vw;padding-right:8vw;}'
    })
  );
};

exports.default = SideBySide;