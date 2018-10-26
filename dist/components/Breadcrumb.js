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
      links = _ref.links;
  return _react2.default.createElement(
    'ul',
    {
      className: 'jsx-3274467532' + ' ' + 'breadcrumb'
    },
    links.map(function (link, index) {
      return _react2.default.createElement(
        'li',
        { key: 'bread-crumb-item-' + index, className: 'jsx-3274467532' + ' ' + 'breadcrumb__item'
        },
        index !== links.length - 1 ? _react2.default.createElement(
          'a',
          { href: link.slug, className: 'jsx-3274467532' + ' ' + 'breadcrumb__link'
          },
          link.title
        ) : link.title,
        index !== links.length - 1 ? _react2.default.createElement(
          'span',
          {
            className: 'jsx-3274467532' + ' ' + 'delimiter'
          },
          delimiter
        ) : ''
      );
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '3274467532',
      css: '.breadcrumb.jsx-3274467532{list-style:none;padding:0;margin:0;font-family:\'Institut\';font-weight:normal;font-style:normal;font-size:9px;line-height:12px;-webkit-letter-spacing:1.92px;-moz-letter-spacing:1.92px;-ms-letter-spacing:1.92px;letter-spacing:1.92px;}.breadcrumb__item.jsx-3274467532{display:inline-block;}.breadcrumb.jsx-3274467532 .delimiter.jsx-3274467532{margin:0 5px;}'
    })
  );
};

exports.default = Breadcrumb;