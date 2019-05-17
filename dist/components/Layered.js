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

var Layered = function Layered(_ref) {
  var source = _ref.source,
      title = _ref.title,
      subtitle = _ref.subtitle,
      breadCrumbData = _ref.breadCrumbData,
      delimiter = _ref.delimiter;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1842589698' + ' ' + 'layeredHero'
    },
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-1842589698' + ' ' + 'layeredHero__image'
      },
      _react2.default.createElement('img', { src: source, alt: 'wired', className: 'jsx-1842589698'
      })
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-1842589698' + ' ' + 'layeredHero__content'
      },
      _react2.default.createElement(_Breadcrumb2.default, { delimiter: delimiter, links: breadCrumbData }),
      _react2.default.createElement(
        _Type.Heading1,
        null,
        _react2.default.createElement(
          'span',
          { style: { display: 'block', color: '#7f7f7f' }, className: 'jsx-1842589698'
          },
          title
        ),
        subtitle
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1842589698',
      css: '.layeredHero.jsx-1842589698{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;}.layeredHero__image.jsx-1842589698{width:50vw;overflow:hidden;margin:0;}.layeredHero__image.jsx-1842589698 img.jsx-1842589698{display:block;margin:0 -25.875%;width:75vw;}.layeredHero__content.jsx-1842589698{background-color:#F2F2F2;font-family:Noe Display;margin:auto;width:40vw;padding-top:7vw;padding-bottom:7vw;padding-left:7vw;padding-right:7vw;-webkit-transform:translateY(2%) translateX(-17%);-ms-transform:translateY(2%) translateX(-17%);transform:translateY(2%) translateX(-17%);}'
    })
  );
};

exports.default = Layered;