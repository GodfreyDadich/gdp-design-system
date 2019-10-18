"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Slide = _interopRequireDefault(require("./Slide"));

var _SliderArrows = require("./SliderArrows");

var _Type = require("./Type");

var Slider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  function Slider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Slider).call(this, props));
    _this.state = {
      currentIndex: 0,
      translateValue: 0
    };
    _this.goToNextSlide = _this.goToNextSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.goToPrevSlide = _this.goToPrevSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.slideWidth = _this.slideWidth.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "goToPrevSlide",
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
    key: "goToNextSlide",
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
    key: "goToSlide",
    value: function goToSlide(slideNum, clickRef) {
      var _this4 = this;

      if (slideNum !== this.state.currentIndex) {
        this.setState(function () {
          return {
            currentIndex: slideNum,
            translateValue: -(slideNum * _this4.slideWidth())
          };
        });
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      if (e.keyCode === 39) {
        this.goToNextSlide();
      }

      if (e.keyCode === 37) {
        this.goToPrevSlide();
      }
    }
  }, {
    key: "slideWidth",
    value: function slideWidth() {
      return document.querySelector('.slide').clientWidth;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown, false);
    }
  }, {
    key: "currentDot",
    value: function currentDot(index) {
      return this.state.currentIndex === index ? 'current' : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return _react["default"].createElement("figure", {
        className: "jsx-157794080" + " " + "sliderWrap ".concat(this.props.aspectRatio).concat(this.props.fullBleed ? ' full-bleed' : '')
      }, _react["default"].createElement("div", {
        style: {
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        },
        onKeyDown: this.onKeyDown,
        className: "jsx-157794080" + " " + 'slider'
      }, _react["default"].createElement("div", {
        style: {
          transform: "translateX(".concat(this.state.translateValue, "px)"),
          transition: 'transform ease-out 0.45s',
          width: '100%',
          height: '100%',
          whiteSpace: 'nowrap'
        },
        className: "jsx-157794080" + " " + 'slider-wrapper'
      }, this.props.images.map(function (image, i) {
        return _react["default"].createElement(_Slide["default"], {
          key: i,
          image: image,
          renderImage: _this5.props.aspectRatio === 'noAspect'
        });
      })), _react["default"].createElement("ul", {
        className: "jsx-157794080" + " " + 'slideDots'
      }, this.props.images.map(function (image, i) {
        return _react["default"].createElement("li", {
          key: "slide-dot-for-".concat(i),
          onClick: function onClick() {
            return _this5.goToSlide(i);
          },
          className: "jsx-157794080" + " " + "slideDot ".concat(_this5.currentDot(i))
        });
      })), _react["default"].createElement(_SliderArrows.LeftArrow, {
        clickAction: this.goToPrevSlide
      }), _react["default"].createElement(_SliderArrows.RightArrow, {
        clickAction: this.goToNextSlide
      })), this.props.caption && this.props.caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
        classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
      }, this.props.caption) : '', _react["default"].createElement(_style["default"], {
        id: "157794080"
      }, ".slider.jsx-157794080{position:absolute;width:100%;height:100%;overflow:hidden;top:0;}.sliderWrap.jsx-157794080{position:relative;height:auto;background-size:cover;background-repeat:no-repeat;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.sliderWrap.sixteen.jsx-157794080{padding-top:56.25%;}.sliderWrap.standard.jsx-157794080{padding-top:75%;}.sliderWrap.cropped.jsx-157794080{padding-top:41.67%;}.sliderWrap.square.jsx-157794080{padding-top:100%;}.sliderWrap.zoomedIn.jsx-157794080{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.sliderWrap.noAspect.jsx-157794080 .slider.jsx-157794080{position:relative;width:100%;opacity:1;}.slideDots.jsx-157794080{position:absolute;bottom:25px;width:100%;padding:0;margin:0;text-align:center;z-index:102;opacity:0.75;}.slideDot.jsx-157794080{position:relative;display:inline-block;width:10px;height:10px;border-radius:50%;background:#fff;opacity:0.3;margin:0 5px;}.slideDot.jsx-157794080:hover,.slideDot.current.jsx-157794080{opacity:1;}"));
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;