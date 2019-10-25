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

var _Type = require("./Type");

var _aspectRatio = require("../utils/aspectRatio");

var _reactDeviceDetect = require("react-device-detect");

var _DotIndicator = require("./DotIndicator");

var _CountIndicator = require("./CountIndicator");

var _propTypes = _interopRequireDefault(require("prop-types"));

/// TODO: Convert to functional component.
var CircularCarousel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(CircularCarousel, _Component);

  function CircularCarousel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CircularCarousel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CircularCarousel).call(this, props));
    _this.state = {
      currentIndex: 0,
      teaseState: '',
      direction: 'next',
      lastIndex: _this.props.children.length - 2,
      visibleArray: [0, 1, 2, _this.props.children.length - 1, _this.props.children.length - 2]
    };
    _this.goToNextSlide = _this.goToNextSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.goToPrevSlide = _this.goToPrevSlide.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getCarouselStyle = _this.getCarouselStyle.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hoverTeasePrev = _this.hoverTeasePrev.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hoverTeaseNext = _this.hoverTeaseNext.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hoverTeaseReset = _this.hoverTeaseReset.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateVisible = _this.updateVisible.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(CircularCarousel, [{
    key: "goToPrevSlide",
    value: function goToPrevSlide() {
      var currIndex = this.state.currentIndex === 0 ? this.props.children.length - 1 : this.state.currentIndex - 1;
      var lastIndex = currIndex === 0 ? this.props.children.length - 1 : currIndex - 1;
      this.setState(function (prevState) {
        return {
          currentIndex: currIndex,
          teaseState: '',
          direction: 'prev',
          lastIndex: lastIndex
        };
      });
      this.updateVisible(currIndex);
    }
  }, {
    key: "goToNextSlide",
    value: function goToNextSlide() {
      var nextSlide = this.state.currentIndex === this.props.children.length - 1 ? 0 : this.state.currentIndex + 1;
      var lastIndex = nextSlide === this.props.children.length - 1 ? 0 : nextSlide + 1;
      this.setState(function (prevState) {
        return {
          currentIndex: nextSlide,
          teaseState: '',
          direction: 'next',
          lastIndex: lastIndex
        };
      });
      this.updateVisible(nextSlide);
    }
  }, {
    key: "updateVisible",
    value: function updateVisible(currIndex) {
      var total = this.props.children.length - 1;
      var visibleArray = [currIndex];
      visibleArray.push(visibleArray[0] === total ? 0 : visibleArray[0] + 1);
      visibleArray.push(visibleArray[1] === total ? 0 : visibleArray[1] + 1);
      visibleArray.push(visibleArray[0] === 0 ? total : visibleArray[0] - 1);
      visibleArray.push(visibleArray[visibleArray.length - 1] === 0 ? total : visibleArray[visibleArray.length - 1] - 1);
      this.setState({
        visibleArray: visibleArray
      });
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
    key: "getTouches",
    value: function getTouches(e) {
      return e.touches || // browser API
      e.originalEvent.touches; // jQuery
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      this.carouselElem.addEventListener('touchend', this.handleTouchEnd, {
        passive: false
      });
      var firstTouch = this.getTouches(e)[0];
      this.xDown = firstTouch.clientX;
      this.yDown = firstTouch.clientY;
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      e.preventDefault();

      if (e.target.classList.contains('nextArrow')) {
        this.goToNextSlide();
      } else if (e.target.classList.contains('backArrow')) {
        this.goToPrevSlide();
      } else {
        return;
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      this.carouselElem.removeEventListener('touchend', this.handleTouchEnd);

      if (!this.xDown || !this.yDown) {
        return;
      }

      var xLeft = e.touches[0].clientX;
      var xDiff = this.xDown - xLeft;

      if (Math.abs(xDiff) > 6) {
        e.preventDefault();
        var direction = xDiff > 0 ? 'right' : 'left';

        if (direction === 'right') {
          this.goToNextSlide();
        } else {
          this.goToPrevSlide();
        }
      }
      /* reset values */


      this.xDown = null;
      this.yDown = null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_reactDeviceDetect.isMobile) {
        this.carouselElem.addEventListener('touchstart', this.handleTouchStart, {
          passive: false
        });
        this.carouselElem.addEventListener('touchmove', this.handleTouchMove, {
          passive: false
        });
        this.carouselElem.addEventListener('touchend', this.handleTouchEnd, {
          passive: false
        });
      } else {
        document.addEventListener('keydown', this.handleKeyDown, false);
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
        this.carouselElem.removeEventListener('touchstart', this.handleTouchStart);
        this.carouselElem.removeEventListener('touchmove', this.handleTouchMove);
        this.carouselElem.removeEventListener('touchend', this.handleTouchEnd);
      } else {
        document.removeEventListener('keydown', this.handleKeyDown);
      }
    }
  }, {
    key: "hoverTeasePrev",
    value: function hoverTeasePrev() {
      this.setState({
        teaseState: 'tease-prev'
      });
    }
  }, {
    key: "hoverTeaseNext",
    value: function hoverTeaseNext() {
      this.setState({
        teaseState: 'tease-next'
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
      var prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.children.length - 1;
      var next = this.state.currentIndex + 1 <= this.props.children.length - 1 ? this.state.currentIndex + 1 : 0;
      var last = this.state.lastIndex;

      switch (index) {
        case active:
          return {
            opacity: '1',
            zIndex: '10'
          };

        case prev:
          return {
            opacity: '1',
            zIndex: this.state.direction === 'prev' ? '9' : '8',
            transition: this.state.direction === 'next' ? 'transform 0.75s' : this.state.teaseState === 'tease-prev' ? 'transform 0.5s' : 'none',
            transform: this.state.teaseState === 'tease-prev' ? 'translateX(-150%) translateY(-50%) translateZ(0) scale(0.8, 0.8)' : 'translateX(-155%) translateY(-50%) translateZ(0) scale(0.75, 0.75)'
          };

        case next:
          return {
            opacity: '1',
            zIndex: this.state.direction === 'next' ? '9' : '8',
            transition: this.state.direction === 'prev' ? 'transform 0.75s' : this.state.teaseState === 'tease-next' ? 'transform 0.5s' : 'none',
            transform: this.state.teaseState === 'tease-next' ? 'translateX(50%) translateY(-50%) translateZ(0) scale(0.8, 0.8)' : 'translateX(55%) translateY(-50%) translateZ(0) scale(0.75, 0.75)'
          };

        case last:
          return {
            opacity: '1',
            zIndex: '6',
            transition: 'transform 0.75s',
            transform: this.state.direction === 'prev' ? 'translateX(55%) translateY(-50%) translateZ(0) scale(0.5, 0.5)' : 'translateX(-160%) translateY(-50%) translateZ(0) scale(0.5, 0.5)'
          };

        default:
          return {
            opacity: '0',
            zIndex: '6',
            transition: 'transform 0.75s, opacity 1s',
            transform: this.state.direction === 'prev' ? 'translateX(65%) translateY(-50%) translateZ(0) scale(0.5, 0.5)' : 'translateX(-180%) translateY(-50%) translateZ(0) scale(0.5, 0.5)'
          };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fullBleed = _this$props.fullBleed,
          caption = _this$props.caption,
          aspectRatio = _this$props.aspectRatio,
          children = _this$props.children,
          classAdd = _this$props.classAdd,
          shadow = _this$props.shadow,
          countIndicator = _this$props.countIndicator,
          imageAspect = _this$props.imageAspect,
          gridGallery = _this$props.gridGallery,
          altRatio = _this$props.altRatio;
      var visibleArray = this.state.visibleArray;
      return _react["default"].createElement("div", {
        style: Object.assign({}, {
          position: 'relative',
          overflow: 'visible'
        }),
        className: "carouselWrapper ".concat(fullBleed ? ' full-bleed' : '').concat(caption && caption.length > 0 ? ' withCaption' : '').concat(classAdd ? " ".concat(classAdd) : '')
      }, _react["default"].createElement("div", {
        ref: function ref(elem) {
          _this2.carouselElem = elem;
        },
        style: {
          position: 'relative',
          height: '100%',
          width: '100%',
          overflow: 'visible',
          touchAction: 'pan-y',
          userSelect: 'none',
          paddingTop: _reactDeviceDetect.isMobile && altRatio ? (0, _aspectRatio.getPaddingTop)(altRatio) : (0, _aspectRatio.getPaddingTop)(aspectRatio),
          backgroundColor: 'rgb(242,242,242)'
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
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          transition: 'transform .3s ease, box-shadow .3s ease'
        },
        className: "carousel__images-container"
      }, children.map(function (child, i) {
        return _react["default"].createElement("div", {
          key: "carouselImage".concat(i),
          style: Object.assign({
            boxShadow: shadow === 'yes' ? '0px 4px 25px rgba(0, 0, 0, 0.4)' : '',
            display: 'block',
            verticalAlign: 'middle',
            position: 'absolute',
            transform: 'translateX(-50%) translateY(-50%) scale(1.1)',
            transition: 'transform 0.75s',
            zIndex: '3',
            top: '50%',
            left: '50%',
            width: imageAspect && imageAspect === 'noAspect' ? 'auto' : '75%',
            maxHeight: imageAspect && imageAspect === 'noAspect' ? '80%' : 'auto',
            height: 'auto'
          }, _this2.getCarouselStyle(i))
        }, visibleArray.includes(i) ? _react["default"].cloneElement(child, {
          active: _this2.state.currentIndex === i,
          visibilityOverride: true
        }) : _react["default"].createElement(_react.Fragment, null));
      })), _reactDeviceDetect.isMobile ? countIndicator === 'counter' ? _react["default"].createElement(_CountIndicator.CountIndicator, {
        currentIndex: this.state.currentIndex,
        imageAspect: imageAspect || aspectRatio,
        children: children
      }) : countIndicator === 'dots' ? _react["default"].createElement(_DotIndicator.DotIndicator, {
        currentIndex: this.state.currentIndex,
        imageAspect: imageAspect || aspectRatio,
        children: children
      }) : '' : ''), caption && caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
        classAdd: "".concat(gridGallery ? 'col-6 skip-2 col-6-tab skip-0-tab' : 'col-6 skip-2 col-6-tab skip-1-tab')
      }, caption) : '');
    }
  }]);
  return CircularCarousel;
}(_react.Component);

exports["default"] = CircularCarousel;
CircularCarousel.propTypes = {
  fullBleed: _propTypes["default"].bool,
  caption: _propTypes["default"].string,
  aspectRatio: _propTypes["default"].oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  classAdd: _propTypes["default"].string,
  shadow: _propTypes["default"].bool,
  countIndicator: _propTypes["default"].oneOf(['counter', 'dots', 'none']),
  imageAspect: _propTypes["default"].oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  altRatio: _propTypes["default"].oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect'])
};
CircularCarousel.defaultProps = {
  aspectRatio: 'standard',
  fullBleed: false,
  shadow: false,
  countIndicator: 'none',
  imageAspect: 'standard'
};