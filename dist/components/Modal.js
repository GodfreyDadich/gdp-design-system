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
      modalVisible: props.modalVisible
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.modalVisible === true) {
        document.body.classList.add('modalOpen');
      } else {
        document.body.classList.remove('modalOpen');
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
          _react2.default.createElement('div', { onClick: function onClick(e) {
              return _this2.closeModal(e);
            },
            style: {
              backgroundImage: this.props.view === 'lightMode' ? 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23000%22/%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E")'
            }, className: 'jsx-3964263363' + ' ' + 'modal__closeButton'
          }),
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