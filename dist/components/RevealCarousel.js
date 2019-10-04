"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _SliderArrows = require("./SliderArrows");

var _Slide = _interopRequireDefault(require("./Slide"));

var _Type = require("./Type");

var _aspectRatio = require("../utils/aspectRatio");

var _reactDeviceDetect = require("react-device-detect");

var RevealCarousel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(RevealCarousel, _Component);

  function RevealCarousel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RevealCarousel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RevealCarousel).call(this, props));
    _this.state = {
      currentIndex: 0,
      teaseState: '',
      hoverPause: false
    };
    _this.goToNextSlide = _this.goToNextSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.goToPrevSlide = _this.goToPrevSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getCarouselStyle = _this.getCarouselStyle.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hoverTeasePrev = _this.hoverTeasePrev.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hoverTeaseNext = _this.hoverTeaseNext.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hoverTeaseReset = _this.hoverTeaseReset.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(RevealCarousel, [{
    key: "goToPrevSlide",
    value: function goToPrevSlide() {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          currentIndex: _this2.state.currentIndex === 0 ? _this2.props.images.length - 1 : prevState.currentIndex - 1,
          teaseState: '',
          hoverPause: true
        };
      });
      setTimeout(function () {
        _this2.setState({
          hoverPause: false
        });
      }, 1000);
    }
  }, {
    key: "goToNextSlide",
    value: function goToNextSlide() {
      var _this3 = this;

      this.setState(function (prevState) {
        return {
          currentIndex: _this3.state.currentIndex === _this3.props.images.length - 1 ? 0 : prevState.currentIndex + 1,
          teaseState: '',
          hoverPause: true
        };
      });
      setTimeout(function () {
        _this3.setState({
          hoverPause: false
        });
      }, 1000);
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
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_reactDeviceDetect.isMobile) {
        return;
      } else {
        this.carouselElem.addEventListener('keydown', this.handleKeyDown, false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.killListeners();
    }
  }, {
    key: "killListeners",
    value: function killListeners() {
      if (_reactDeviceDetect.isMobile) {
        return;
      } else {
        this.carouselElem.removeEventListener('keydown', this.handleKeyDown);
      }
    }
  }, {
    key: "hoverTeasePrev",
    value: function hoverTeasePrev() {
      this.setState({
        teaseState: this.state.hoverPause ? '' : 'tease-prev'
      });
    }
  }, {
    key: "hoverTeaseNext",
    value: function hoverTeaseNext() {
      this.setState({
        teaseState: this.state.hoverPause ? '' : 'tease-next'
      });
    }
  }, {
    key: "hoverTeaseReset",
    value: function hoverTeaseReset() {
      this.setState({
        teaseState: ''
      });
    }
  }, {
    key: "getCarouselStyle",
    value: function getCarouselStyle(index) {
      var active = this.state.currentIndex;
      var prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.images.length - 1;
      var next = this.state.currentIndex + 1 <= this.props.images.length - 1 ? this.state.currentIndex + 1 : 0;

      switch (index) {
        case active:
          return {
            display: 'block',
            transition: 'transform 0.75s',
            zIndex: this.state.teaseState !== '' ? '7' : '10'
          };

        case prev:
          return {
            display: 'block',
            zIndex: this.state.teaseState === 'tease-prev' ? '9' : '6',
            backfaceVisibility: 'hidden',
            transform: this.state.teaseState === 'tease-prev' ? 'translateX(-93%) translateZ(0' : 'translateX(-100%) translateZ(0)',
            transition: this.state.teaseState === 'tease-prev' ? 'transform 0.75s' : 'transform 0s',
            transitionDelay: this.state.teaseState === 'tease-prev' ? '0s' : '0.76s',
            boxShadow: this.state.teaseState === 'tease-prev' ? '2px 0px 30px 0px rgba(0,0,0,0.23)' : '2px 0px 30px 0px rgba(0,0,0,0)'
          };

        case next:
          return {
            display: 'block',
            zIndex: this.state.teaseState === 'tease-next' ? '8' : '6',
            transition: this.state.teaseState === 'tease-next' ? 'transform 0.75s' : 'transform 0s',
            transitionDelay: this.state.teaseState === 'tease-next' ? '0s' : '0.76s',
            transform: this.state.teaseState === 'tease-next' ? 'translateX(93%) translateZ(0)' : 'translateX(100%) translateZ(0)',
            boxShadow: this.state.teaseState === 'tease-next' ? '-2px 0px 30px 0px rgba(0,0,0,0.23)' : '-2px 0px 30px 0px rgba(0,0,0,0)'
          };

        default:
          return {};
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react["default"].createElement("div", null, _reactDeviceDetect.isMobile ? '' : _react["default"].createElement("figure", {
        ref: function ref(elem) {
          _this4.carouselElem = elem;
        },
        style: {
          position: 'relative',
          width: '100%',
          height: '100%'
        },
        className: "carouselWrapper ".concat(this.props.fullBleed ? ' full-bleed' : '').concat(this.props.caption && this.props.caption.length > 0 ? ' withCaption' : '')
      }, _react["default"].createElement("div", {
        style: {
          position: 'relative',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          touchAction: 'pan-y',
          userSelect: 'none',
          paddingTop: (0, _aspectRatio.getPaddingTop)(this.props.aspectRatio)
        },
        className: "carousel__container ".concat(this.state.teaseState)
      }, _react["default"].createElement(_SliderArrows.LeftArrow, {
        clickAction: this.goToPrevSlide,
        over: this.hoverTeasePrev,
        out: this.hoverTeaseReset
      }), _react["default"].createElement(_SliderArrows.RightArrow, {
        clickAction: this.goToNextSlide,
        over: this.hoverTeaseNext,
        out: this.hoverTeaseReset
      }), _react["default"].createElement("div", {
        style: {
          position: this.props.aspectRatio === 'noAspect' ? 'relative' : 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          transition: 'transform .75s ease, box-shadow .3s ease'
        },
        className: "carousel__images-container"
      }, this.props.images.map(function (image, i) {
        return _react["default"].createElement("div", {
          key: "carouselImage".concat(i),
          style: Object.assign({
            display: 'none',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            overflow: 'hidden',
            zIndex: '3'
          }, _this4.getCarouselStyle(i))
        }, _react["default"].createElement(_Slide["default"], {
          key: i,
          image: image,
          classAdd: "carousel__image-wrapper",
          renderImage: _this4.props.aspectRatio === 'noAspect'
        }));
      }))), this.props.caption && this.props.caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
        classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
      }, this.props.caption) : ''));
    }
  }]);
  return RevealCarousel;
}(_react.Component);

exports["default"] = RevealCarousel;