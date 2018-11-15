'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = function Breadcrumb(_ref) {
  var delimiter = _ref.delimiter,
      links = _ref.links,
      linkLast = _ref.linkLast;
  return _react2.default.createElement(
    'ul',
    {
      className: 'jsx-2250778284' + ' ' + 'breadcrumb'
    },
    links.map(function (link, index) {
      return _react2.default.createElement(
        'li',
        { key: 'bread-crumb-item-' + index, className: 'jsx-2250778284' + ' ' + 'breadcrumb__item'
        },
        index !== (linkLast ? links.length : links.length - 1) ? _react2.default.createElement(
          'a',
          { href: link.slug, className: 'jsx-2250778284' + ' ' + 'breadcrumb__link'
          },
          link.title
        ) : link.title,
        index !== links.length - 1 ? _react2.default.createElement(
          'span',
          {
            className: 'jsx-2250778284' + ' ' + 'delimiter'
          },
          delimiter
        ) : ''
      );
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '2250778284',
      css: '.breadcrumb.jsx-2250778284{list-style:none;padding:0;margin:0;font-family:\'Institut\';font-weight:normal;font-style:normal;font-size:0.7vw;font-size:9px;line-height:1.33;-webkit-letter-spacing:1.92px;-moz-letter-spacing:1.92px;-ms-letter-spacing:1.92px;letter-spacing:1.92px;margin-bottom:16px;}.breadcrumb__item.jsx-2250778284{display:inline-block;}.breadcrumb.jsx-2250778284 .delimiter.jsx-2250778284{margin:0 5px;}'
    })
  );
};

exports.default = Breadcrumb;