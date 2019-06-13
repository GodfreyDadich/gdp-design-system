'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Type = require('./Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pullquotes = function (_React$Component) {
  _inherits(Pullquotes, _React$Component);

  function Pullquotes(props) {
    _classCallCheck(this, Pullquotes);

    var _this = _possibleConstructorReturn(this, (Pullquotes.__proto__ || Object.getPrototypeOf(Pullquotes)).call(this, props));

    _this.state = {
      type: props.type,
      content: props.content
    };
    console.log(props);
    return _this;
  }

  _createClass(Pullquotes, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          type = _state.type,
          content = _state.content;


      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-3106214966' + ' ' + 'testadd'
        },
        function () {
          switch (type) {
            case 'pullquote-text':
              return _react2.default.createElement(
                _Type.Pullquote,
                null,
                content
              );
            case 'left-carving':
              return _react2.default.createElement(
                _Type.LeftCarving,
                null,
                content
              );
            case 'quote-block':
              return _react2.default.createElement(
                _Type.QuoteBlock,
                null,
                content
              );
            case 'sidebar-quote':
              return _react2.default.createElement(
                _Type.SidebarQuote,
                null,
                content
              );
            default:
              return null;
          }
        }(),
        _react2.default.createElement(_style2.default, {
          styleId: '3106214966',
          css: ''
        })
      );
    }
  }]);

  return Pullquotes;
}(_react2.default.Component);

exports.default = Pullquotes;