"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _SliderArrows = require("./SliderArrows");

var _Slide = _interopRequireDefault(require("./Slide"));

var _Type = require("./Type");

var _aspectRatio = require("../utils/aspectRatio");

var _reactDeviceDetect = require("react-device-detect");

var RevealCarousel = function RevealCarousel(props) {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      teaseState = _useState4[0],
      setTeaseState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      hoverPause = _useState6[0],
      setHoverPause = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      currentCapIndex = _useState8[0],
      setCurrentCapIndex = _useState8[1];

  var _useState9 = (0, _react.useState)('0'),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      captionMargin = _useState10[0],
      setCaptionMargin = _useState10[1];

  var carouselElem = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setCaptionMargin(_reactDeviceDetect.isMobileOnly ? '0 24px' : _reactDeviceDetect.isTablet ? '0 30px' : '0 42px');

    if (_reactDeviceDetect.isMobile) {
      return;
    } else {
      carouselElem.current.addEventListener('keydown', handleKeyDown, false);
    }

    return function () {
      killListeners();
    };
  }, []);

  var killListeners = function killListeners() {
    if (_reactDeviceDetect.isMobile) {
      return;
    } else {
      carouselElem.current.removeEventListener('keydown', handleKeyDown);
    }
  };

  var goToSlide = function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
    setTeaseState('');
    setHoverPause(true);
    setCurrentCapIndex(slideIndex);
    setTimeout(function () {
      setHoverPause(false);
    }, 1000);
  };

  var goToPrevSlide = function goToPrevSlide() {
    var prevSlide = currentIndex === 0 ? props.images.length - 1 : currentIndex - 1;
    goToSlide(prevSlide);
  };

  var goToNextSlide = function goToNextSlide() {
    var nextSlide = currentIndex === props.images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(nextSlide);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 39) {
      goToNextSlide();
    }

    if (e.keyCode === 37) {
      goToPrevSlide();
    }
  };

  var hoverTeasePrev = function hoverTeasePrev() {
    setTeaseState(hoverPause ? '' : 'tease-prev');
  };

  var hoverTeaseNext = function hoverTeaseNext() {
    setTeaseState(hoverPause ? '' : 'tease-next');
  };

  var hoverTeaseReset = function hoverTeaseReset() {
    setTeaseState('');
  };

  var getCarouselStyle = function getCarouselStyle(index) {
    var active = currentIndex;
    var prev = currentIndex - 1 >= 0 ? currentIndex - 1 : props.images.length - 1;
    var next = currentIndex + 1 <= props.images.length - 1 ? currentIndex + 1 : 0;

    switch (index) {
      case active:
        return {
          display: 'block',
          transition: 'transform 0.75s',
          zIndex: teaseState !== '' ? '7' : '10'
        };

      case prev:
        return {
          display: 'block',
          zIndex: teaseState === 'tease-prev' ? '9' : '6',
          backfaceVisibility: 'hidden',
          transform: teaseState === 'tease-prev' ? 'translateX(-93%) translateZ(0' : 'translateX(-100%) translateZ(0)',
          transition: teaseState === 'tease-prev' ? 'transform 0.75s' : 'transform 0s',
          transitionDelay: teaseState === 'tease-prev' ? '0s' : '0.76s',
          boxShadow: teaseState === 'tease-prev' ? '2px 0px 30px 0px rgba(0,0,0,0.23)' : '2px 0px 30px 0px rgba(0,0,0,0)'
        };

      case next:
        return {
          display: 'block',
          zIndex: teaseState === 'tease-next' ? '8' : '6',
          transition: teaseState === 'tease-next' ? 'transform 0.75s' : 'transform 0s',
          transitionDelay: teaseState === 'tease-next' ? '0s' : '0.76s',
          transform: teaseState === 'tease-next' ? 'translateX(93%) translateZ(0)' : 'translateX(100%) translateZ(0)',
          boxShadow: teaseState === 'tease-next' ? '-2px 0px 30px 0px rgba(0,0,0,0.23)' : '-2px 0px 30px 0px rgba(0,0,0,0)'
        };

      default:
        return {};
    }
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("figure", {
    ref: carouselElem,
    style: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    className: "carouselWrapper ".concat(props.fullBleed ? ' full-bleed' : '').concat(props.caption && props.caption.length > 0 ? ' withCaption' : '')
  }, _react["default"].createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      touchAction: 'pan-y',
      userSelect: 'none',
      paddingTop: (0, _aspectRatio.getPaddingTop)(props.aspectRatio)
    },
    className: "carousel__container ".concat(teaseState)
  }, _reactDeviceDetect.isMobile ? _react["default"].createElement(_SliderArrows.RevealLeftArrow, {
    clickAction: goToPrevSlide,
    over: hoverTeasePrev,
    out: hoverTeaseReset
  }) : _react["default"].createElement(_SliderArrows.LeftArrow, {
    clickAction: goToPrevSlide,
    over: hoverTeasePrev,
    out: hoverTeaseReset
  }), _reactDeviceDetect.isMobile ? _react["default"].createElement(_SliderArrows.RevealRightArrow, {
    clickAction: goToNextSlide,
    over: hoverTeaseNext,
    out: hoverTeaseReset
  }) : _react["default"].createElement(_SliderArrows.RightArrow, {
    clickAction: goToNextSlide,
    over: hoverTeaseNext,
    out: hoverTeaseReset
  }), _react["default"].createElement("div", {
    style: {
      position: props.aspectRatio === 'noAspect' ? 'relative' : 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      transition: 'transform .75s ease, box-shadow .3s ease'
    },
    className: "carousel__images-container"
  }, props.images.map(function (image, i) {
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
      }, getCarouselStyle(i))
    }, _react["default"].createElement(_Slide["default"], {
      key: i,
      image: image,
      classAdd: "carousel__image-wrapper",
      renderImage: props.aspectRatio === 'noAspect'
    }));
  }))), props.captionsArray ? _react["default"].createElement("div", {
    style: {
      height: '4.61vw',
      margin: captionMargin
    }
  }, _react["default"].createElement(_Type.Caption, {
    classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
  }, _react["default"].createElement("span", null, props.captionsArray[currentCapIndex]))) : props.caption && props.caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
    classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
  }, props.caption) : ''));
};

var _default = RevealCarousel;
exports["default"] = _default;