'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SliderArrows = require('./SliderArrows');

var _Type = require('./Type');

var _aspectRatio = require('../utils/aspectRatio');

var _reactDeviceDetect = require('react-device-detect');

var _DotIndicator = require('./DotIndicator');

var _CountIndicator = require('./CountIndicator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircularCarousel = function (_Component) {
  _inherits(CircularCarousel, _Component);

  function CircularCarousel(props) {
    _classCallCheck(this, CircularCarousel);

    var _this = _possibleConstructorReturn(this, (CircularCarousel.__proto__ || Object.getPrototypeOf(CircularCarousel)).call(this, props));

    _this.state = {
      swipe: false,
      currentIndex: 0,
      teaseState: '',
      direction: 'next',
      lastIndex: _this.props.children.length - 2,
      visibleArray: [0, 1, 2, _this.props.children.length - 1, _this.props.children.length - 2]
    };
    _this.goToNextSlide = _this.goToNextSlide.bind(_this);
    _this.goToPrevSlide = _this.goToPrevSlide.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.getCarouselStyle = _this.getCarouselStyle.bind(_this);
    _this.hoverTeasePrev = _this.hoverTeasePrev.bind(_this);
    _this.hoverTeaseNext = _this.hoverTeaseNext.bind(_this);
    _this.hoverTeaseReset = _this.hoverTeaseReset.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.updateVisible = _this.updateVisible.bind(_this);
    return _this;
  }

  _createClass(CircularCarousel, [{
    key: 'goToPrevSlide',
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
    key: 'goToNextSlide',
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
    key: 'updateVisible',
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
    key: 'getTouches',
    value: function getTouches(e) {
      return e.touches || // browser API
      e.originalEvent.touches; // jQuery
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      this.carouselElem.addEventListener('touchend', this.handleTouchEnd, { passive: false });
      var firstTouch = this.getTouches(e)[0];
      this.xDown = firstTouch.clientX;
      this.yDown = firstTouch.clientY;
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(e) {
      e.preventDefault();
      if (e.target.classList.contains('nextArrow')) {
        this.goToNextSlide();
      } else {
        this.goToPrevSlide();
      }
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      this.carouselElem.removeEventListener('touchend', this.handleTouchEnd);
      this.setState({ swipe: true });
      if (!this.xDown || !this.yDown) {
        return;
      }
      this.xLeft = e.touches[0].clientX;
      this.xDiff = this.xDown - this.xLeft;
      if (Math.abs(this.xDiff) > 6) {
        e.preventDefault();
        var direction = this.xDiff > 0 ? 'right' : 'left';
        if (direction === 'right') {
          this.goToNextSlide();
        } else {
          this.goToPrevSlide();
        }
      }

      /* reset values */
      this.setState({ swipe: false });
      this.xDown = null;
      this.yDown = null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (_reactDeviceDetect.isMobile) {
        this.carouselElem.addEventListener('touchstart', this.handleTouchStart, { passive: false });
        this.carouselElem.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        this.carouselElem.addEventListener('touchend', this.handleTouchEnd, { passive: false });
      } else {
        document.addEventListener('keydown', this.handleKeyDown, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.killListeners();
    }
  }, {
    key: 'killListeners',
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
    key: 'hoverTeasePrev',
    value: function hoverTeasePrev() {
      this.setState({
        teaseState: 'tease-prev'
      });
    }
  }, {
    key: 'hoverTeaseNext',
    value: function hoverTeaseNext() {
      this.setState({
        teaseState: 'tease-next'
      });
    }
  }, {
    key: 'hoverTeaseReset',
    value: function hoverTeaseReset() {
      this.setState({
        teaseState: ''
      });
    }
  }, {
    key: 'getCarouselStyle',
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fullBleed = _props.fullBleed,
          caption = _props.caption,
          aspectRatio = _props.aspectRatio,
          children = _props.children,
          classAdd = _props.classAdd,
          shadow = _props.shadow,
          countIndicator = _props.countIndicator,
          imageAspect = _props.imageAspect,
          altRatio = _props.altRatio;
      var visibleArray = this.state.visibleArray;


      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, {
            position: 'relative',
            overflow: 'visible'
          }),
          className: 'carouselWrapper ' + (fullBleed ? ' full-bleed' : '') + (caption && caption.length > 0 ? ' withCaption' : '') + (classAdd ? ' ' + classAdd : '') },
        _react2.default.createElement(
          'div',
          {
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
            className: 'carousel__container ' + this.state.teaseState },
          _react2.default.createElement(_SliderArrows.LeftArrow, {
            clickAction: this.goToPrevSlide,
            over: this.hoverTeasePrev,
            out: this.hoverTeaseReset
          }),
          _react2.default.createElement(_SliderArrows.RightArrow, {
            clickAction: this.goToNextSlide,
            over: this.hoverTeaseNext,
            out: this.hoverTeaseReset
          }),
          _react2.default.createElement(
            'div',
            {
              style: {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                transition: 'transform .3s ease, box-shadow .3s ease'
              },
              className: 'carousel__images-container' },
            children.map(function (child, i) {
              return _react2.default.createElement(
                'div',
                {
                  key: 'carouselImage' + i,
                  style: _extends({
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
                  }, _this2.getCarouselStyle(i)) },
                visibleArray.includes(i) ? _react2.default.cloneElement(child, {
                  active: _this2.state.currentIndex === i,
                  visibilityOverride: true
                }) : _react2.default.createElement(_react.Fragment, null)
              );
            })
          ),
          _reactDeviceDetect.isMobile ? countIndicator === 'counter' ? _react2.default.createElement(_CountIndicator.CountIndicator, { currentIndex: this.state.currentIndex, imageAspect: imageAspect || aspectRatio, children: children }) : countIndicator === 'dots' ? _react2.default.createElement(_DotIndicator.DotIndicator, { currentIndex: this.state.currentIndex, imageAspect: imageAspect || aspectRatio, children: children }) : '' : ''
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-2 col-6-tab skip-1-tab' },
          caption
        ) : ''
      );
    }
  }]);

  return CircularCarousel;
}(_react.Component);

exports.default = CircularCarousel;