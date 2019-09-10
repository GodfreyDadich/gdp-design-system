'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icons = require('../components/Icons');

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
      modalVisible: props.modalVisible
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.modalVisible === true) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      this.setState({
        modalVisible: props.modalVisible
      });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        modalVisible: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var modalVisible = this.state.modalVisible;

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-3964263363' + ' ' + ('modal_container' + (modalVisible ? ' is_open' : ''))
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              background: this.props.view === 'lightMode' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
            }, className: 'jsx-3964263363' + ' ' + 'modal'
          },
          _react2.default.createElement(
            'div',
            { onClick: function onClick(e) {
                return _this2.closeModal(e);
              }, className: 'jsx-3964263363' + ' ' + 'modal__closeButton'
            },
            _react2.default.createElement(_Icons.CloseModal, null)
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-3964263363' + ' ' + 'modal__content'
            },
            modalVisible ? this.props.children : ''
          )
        ),
        _react2.default.createElement(_style2.default, {
          styleId: '3964263363',
          css: '.modal_container.jsx-3964263363{content:\'\';position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.35);z-index:1000;display:none;}.modal_container.jsx-3964263363 .modal.jsx-3964263363{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1000;}.modal_container.jsx-3964263363 .modal__closeButton.jsx-3964263363{cursor:pointer;position:absolute;top:30px;right:30px;width:30px;height:30px;z-index:9999;background-repeat:no-repeat;}.modal_container.is_open.jsx-3964263363{display:block;}.modal_container.is_open.jsx-3964263363 .modal.jsx-3964263363{display:block;}'
        })
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;