'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chips = function (_React$Component) {
  (0, _inherits3.default)(Chips, _React$Component);

  function Chips(props) {
    (0, _classCallCheck3.default)(this, Chips);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Chips.__proto__ || (0, _getPrototypeOf2.default)(Chips)).call(this, props));

    _this.state = {
      chips: props.chips || []
    };
    _this.removeChip = _this.removeChip.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Chips, [{
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