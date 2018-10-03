'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _SliderArrows = require('./SliderArrows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = function (_Component) {
  (0, _inherits3.default)(Slider, _Component);

  function Slider(props) {
    (0, _classCallCheck3.default)(this, Slider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

    _this.state = {
      currentIndex: 0,
      translateValue: 0
    };
    _this.goToNextSlide = _this.goToNextSlide.bind(_this);
    _this.goToPrevSlide = _this.goToPrevSlide.bind(_this);
    _this.slideWidth = _this.slideWidth.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Slider, [{
    key: 'goToPrevSlide',
    value: function goToPrevSlide() {
      var _this2 = this;

      if (this.state.currentIndex === 0) {
        return this.setState({
          currentIndex: this.props.images.length - 1,
          translateValue: -(this.props.images.length - 1) * this.slideWidth()
        });
      }

      this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + _this2.slideWidth()
        };
      });
    }
  }, {
    key: 'goToNextSlide',
    value: function goToNextSlide() {
      var _this3 = this;

      if (this.state.currentIndex === this.props.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }

      this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this3.slideWidth()
        };
      });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === 39) {
        this.goToNextSlide();
      }
      if (e.keyCode === 37) {
        this.goToPrevSlide();
      }
    }
  }, {
    key: 'slideWidth',
    value: function slideWidth() {
      return document.querySelector('.slide').clientWidth;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown, false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'slider', style: { width: '100%', height: '100%', overflow: 'hidden' }, onKeyDown: this.onKeyDown },
        _react2.default.createElement(
          'div',
          { className: 'slider-wrapper',
            style: {
              transform: 'translateX(' + this.state.translateValue + 'px)',
              transition: 'transform ease-out 0.45s',
              width: '100%',
              height: '100%',
              whiteSpace: 'nowrap'
            } },
          this.props.images.map(function (image, i) {
            return _react2.default.createElement(_Slide2.default, { key: i, image: image });
          })
        ),
        _react2.default.createElement(_SliderArrows.LeftArrow, { clickAction: this.goToPrevSlide }),
        _react2.default.createElement(_SliderArrows.RightArrow, { clickAction: this.goToNextSlide })
      );
    }
  }]);
  return Slider;
}(_react.Component);

exports.default = Slider;