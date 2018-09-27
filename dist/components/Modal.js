'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal(props) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));

    _this.state = {
      modalVisible: props.modalVisible,
      closeCallback: props.closeCallback || null
    };
    return _this;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        modalVisible: props.modalVisible,
        closeCallback: props.closeCallback
      });
    }
  }, {
    key: 'overlayClick',
    value: function overlayClick(target) {
      if ((0, _values2.default)(target.classList).some(function (clss) {
        return clss === 'modal_container';
      })) {
        this.closeModal();
      }
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        modalVisible: false
      });
      !!this.state.closeCallback();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          chips = _state.chips,
          modalVisible = _state.modalVisible;

      return _react2.default.createElement(
        'div',
        { onClick: function onClick(e) {
            return _this2.overlayClick(e.target);
          }, className: 'jsx-3877234852' + ' ' + ('modal_container' + (modalVisible ? ' is_open' : ''))
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-3877234852' + ' ' + 'modal'
          },
          _react2.default.createElement(
            'div',
            { onClick: function onClick(e) {
                return _this2.closeModal(e);
              }, className: 'jsx-3877234852' + ' ' + 'modal__closeButton'
            },
            'X'
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-3877234852' + ' ' + 'modal__content'
            },
            this.props.children
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: '3877234852',
          css: '.modal_container.jsx-3877234852{content:\'\';position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.35);z-index:1000;display:none;}.modal_container.jsx-3877234852 .modal.jsx-3877234852{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;border:1px solid transparent;border-radius:10px;max-width:70%;padding:24px;box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);z-index:1010;display:none;overflow:hidden;}.modal_container.jsx-3877234852 .modal__closeButton.jsx-3877234852{position:fixed;top:5px;right:5px;cursor:pointer;}.modal_container.jsx-3877234852 .modal__content.jsx-3877234852{position:relative;display:block;max-height:85vh;overflow-y:auto;}.modal_container.is_open.jsx-3877234852{display:block;}.modal_container.is_open.jsx-3877234852 .modal.jsx-3877234852{display:block;}'
        })
      );
    }
  }]);
  return Modal;
}(_react2.default.Component);

exports.default = Modal;