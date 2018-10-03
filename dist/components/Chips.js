'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chips = function (_React$Component) {
  _inherits(Chips, _React$Component);

  function Chips(props) {
    _classCallCheck(this, Chips);

    var _this = _possibleConstructorReturn(this, (Chips.__proto__ || Object.getPrototypeOf(Chips)).call(this, props));

    _this.state = {
      chips: props.chips || []
    };
    _this.removeChip = _this.removeChip.bind(_this);
    return _this;
  }

  _createClass(Chips, [{
    key: 'removeChip',
    value: function removeChip(toRemove) {
      var newChips = this.state.chips.filter(function (chip, index) {
        return index !== toRemove;
      });
      this.setState({ chips: newChips });
      if (typeof this.props.closeCallback === 'function') {
        this.props.closeCallback(toRemove);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        chips: props.chips
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var chips = this.state.chips;

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-3305243884' + ' ' + 'chips'
        },
        chips.map(function (chip, index) {
          return _react2.default.createElement(
            'div',
            { key: 'chip-' + index, className: 'jsx-3305243884' + ' ' + 'chip'
            },
            chip,
            _react2.default.createElement(
              'div',
              { onClick: function onClick(e) {
                  return _this2.removeChip(index);
                }, className: 'jsx-3305243884' + ' ' + 'chip__close'
              },
              'x'
            )
          );
        }),
        _react2.default.createElement(_style2.default, {
          styleId: '3305243884',
          css: '.chips.jsx-3305243884{position:relativel;width:100%;}.chips.jsx-3305243884 .chip.jsx-3305243884{position:relative;padding:5px 25px 5px 5px;margin:0 5px;display:inline-block;background-color:green;font-size:11px;color:white;border-radius:30px;}.chips.jsx-3305243884 .chip__close.jsx-3305243884{position:absolute;right:3px;top:2px;width:10px;height:10px;font-size:10px;text-align:center;padding:1px;border:1px solid #fff;border-radius:100%;}'
        })
      );
    }
  }]);

  return Chips;
}(_react2.default.Component);

exports.default = Chips;