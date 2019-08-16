'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SliderArrows = require('./SliderArrows');

var _reactDeviceDetect = require('react-device-detect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleGallery = function SimpleGallery(_ref) {
  var images = _ref.images,
      view = _ref.view;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      translateValue = _useState4[0],
      setTranslateValue = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      xDown = _useState6[0],
      setXDown = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      yDown = _useState8[0],
      setYDown = _useState8[1];

  var goToPrevSlide = function goToPrevSlide() {
    var nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    var nextTranslateValue = currentIndex === 1 ? 0 : -(nextIndex * 100);

    setCurrentIndex(nextIndex);
    setTranslateValue(nextTranslateValue);
  };

  var goToNextSlide = function goToNextSlide() {
    var nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    var nextTranslateValue = currentIndex === images.length - 1 ? 0 : -(nextIndex * 100);

    setCurrentIndex(nextIndex);
    setTranslateValue(nextTranslateValue);
  };

  var getTouches = function getTouches(e) {
    return e.touches || // browser API
    e.originalEvent.touches; // jQuery
  };

  var handleTouchStart = function handleTouchStart(e) {
    e.preventDefault();
    var firstTouch = getTouches(e)[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  var handleTouchMove = function handleTouchMove(e) {
    e.preventDefault();
    if (!xDown || !yDown) {
      return;
    }
    var xLeft = e.touches[0].clientX;
    var xDiff = xDown - xLeft;
    var direction = xDiff > 0 ? 'right' : 'left';
    if (direction === 'right') {
      goToNextSlide();
    } else {
      goToPrevSlide();
    }

    /* reset values */
    setXDown(null);
    setXDown(null);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 39) {
      goToNextSlide();
    }
    if (e.keyCode === 37) {
      goToPrevSlide();
    }
  };

  (0, _react.useEffect)(function () {
    if (_reactDeviceDetect.isMobile) {
      window.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      return function () {
        window.removeEventListener('touchstart', handleTouchStart, { passive: false });
        window.removeEventListener('touchmove', handleTouchMove, { passive: false });
      };
    } else {
      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [currentIndex, xDown, yDown]);

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-3615416539' + ' ' + 'slider'
    },
    _react2.default.createElement(
      'div',
      {
        style: {
          transform: 'translateX(' + translateValue + '%)',
          transition: 'transform ease-out 0.45s',
          width: '100%',
          height: '100%',
          whiteSpace: 'nowrap'
        }, className: 'jsx-3615416539' + ' ' + 'slider-wrapper'
      },
      images.map(function (image, i) {
        return _react2.default.createElement('img', {
          style: {
            width: '100%',
            height: 'auto',
            maxHeight: '100%',
            display: 'inline-block',
            verticalAlign: 'middle',
            backgroundColor: '#f2f2f2',
            position: 'relative',
            margin: '0 auto',
            opacity: currentIndex === i ? 1 : .1,
            transition: 'opacity .3s, transform .3s'
          },
          src: image,
          key: 'slide-image-' + i,
          className: 'jsx-3615416539' + ' ' + 'slide'
        });
      })
    ),
    _react2.default.createElement(_SliderArrows.AltLeftArrow, {
      clickAction: goToPrevSlide,
      view: view,
      style: {
        width: '10%',
        left: '-10%'
      }
    }),
    _react2.default.createElement(_SliderArrows.AltRightArrow, {
      clickAction: goToNextSlide,
      view: view,
      style: {
        width: '10%',
        right: '-10%'
      }
    }),
    _react2.default.createElement(_style2.default, {
      styleId: '3615416539',
      css: '.slider.jsx-3615416539{position:absolute;width:80%;margin:0 10%;height:auto;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}'
    })
  );
};

exports.default = SimpleGallery;