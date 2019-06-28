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

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      modalVisible: props.modalVisible,
      closeCallback: props.closeCallback || null
    };
    return _this;
  }

  _createClass(Modal, [{
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
      if (Object.values(target.classList).some(function (clss) {
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