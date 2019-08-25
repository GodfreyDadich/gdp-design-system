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

  var galleryContainer = (0, _react.useRef)(null);

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
    var firstTouch = getTouches(e)[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  };

  handleTouchMove = function handleTouchMove(e) {
    e.preventDefault();
    if (!undefined.xDown || !undefined.yDown) {
      return;
    }
    var xLeft = e.touches[0].clientX;
    var xDiff = undefined.xDown - xLeft;
    var yUp = e.touches[0].clientY;
    var yDiff = undefined.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        undefined.goToNextSlide();
      } else {
        undefined.goToPrevSlide();
      }
    } else {
      return;
    }
    /* reset values */
    undefined.xDown = null;
    undefined.yDown = null;
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
      galleryContainer.current.addEventListener('touchstart', handleTouchStart, { passive: false });
      galleryContainer.current.addEventListener('touchmove', handleTouchMove, { passive: false });
      return function () {
        galleryContainer.current.removeEventListener('touchstart', handleTouchStart, { passive: false });
        galleryContainer.current.removeEventListener('touchmove', handleTouchMove, { passive: false });
      };
    } else {
      galleryContainer.current.addEventListener('keydown', handleKeyDown);
      return function () {
        galleryContainer.current.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

  return _react2.default.createElement(
    'div',
    { ref: galleryContainer, className: 'jsx-2511592491' + ' ' + 'slider'
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
        }, className: 'jsx-2511592491' + ' ' + 'slider-wrapper'
      },
      images.map(function (image, i) {
        return _react2.default.createElement(
          'div',
          {
            style: {
              height: '80%',
              width: '100%',
              margin: 'auto',
              top: '10%',
              position: 'relative',
              display: 'inline-block'
            }, className: 'jsx-2511592491'
          },
          _react2.default.createElement('img', {
            style: {
              top: '50%',
              left: '50%',
              height: '100%',
              transform: 'translateX(-50%) translateY(-50%)',
              display: 'inline-block',
              verticalAlign: 'middle',
              backgroundColor: '#f2f2f2',
              position: 'absolute',
              margin: '0 auto',
              opacity: currentIndex === i ? 1 : 0,
              transition: 'opacity .3s, transform .3s'
            },
            src: image,
            key: 'slide-image-' + i,
            className: 'jsx-2511592491' + ' ' + 'slide'
          })
        );
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
      styleId: '2511592491',
      css: '.slider.jsx-2511592491{position:absolute;width:80%;height:100%;margin:0 10%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}'
    })
  );
};

exports.default = SimpleGallery;