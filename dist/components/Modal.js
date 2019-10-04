"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _Icons = require("../components/Icons");

var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Modal, _React$Component);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Modal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Modal).call(this, props));
    _this.state = {
      modalVisible: props.modalVisible
    };
    return _this;
  }

  (0, _createClass2["default"])(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.modalVisible === true) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, {
    key: "componentWillReceiveProps",
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
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        modalVisible: false
      });
      document.body.style.overflow = 'auto';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var modalVisible = this.state.modalVisible;
      return _react["default"].createElement("div", {
        className: "jsx-3964263363" + " " + "modal_container".concat(modalVisible ? ' is_open' : '')
      }, _react["default"].createElement("div", {
        style: {
          background: this.props.view === 'lightMode' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
        },
        className: "jsx-3964263363" + " " + 'modal'
      }, _react["default"].createElement("div", {
        onClick: function onClick(e) {
          return _this2.closeModal(e);
        },
        className: "jsx-3964263363" + " " + 'modal__closeButton'
      }, _react["default"].createElement(_Icons.CloseModal, null)), _react["default"].createElement("div", {
        className: "jsx-3964263363" + " " + 'modal__content'
      }, modalVisible ? this.props.children : '')), _react["default"].createElement(_style["default"], {
        id: "3964263363"
      }, ".modal_container.jsx-3964263363{content:'';position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.35);z-index:1000;display:none;}.modal_container.jsx-3964263363 .modal.jsx-3964263363{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1000;}.modal_container.jsx-3964263363 .modal__closeButton.jsx-3964263363{cursor:pointer;position:absolute;top:30px;right:30px;width:30px;height:30px;z-index:9999;background-repeat:no-repeat;}.modal_container.is_open.jsx-3964263363{display:block;}.modal_container.is_open.jsx-3964263363 .modal.jsx-3964263363{display:block;}"));
    }
  }]);
  return Modal;
}(_react["default"].Component);

var _default = Modal;
exports["default"] = _default;