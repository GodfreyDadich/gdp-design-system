'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleGallery = require('./SimpleGallery');

var _SimpleGallery2 = _interopRequireDefault(_SimpleGallery);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _CircularCarousel = require('./CircularCarousel');

var _CircularCarousel2 = _interopRequireDefault(_CircularCarousel);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Type = require('./Type');

var _reactDeviceDetect = require('react-device-detect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Museum = function Museum(_ref) {
  var galleries = _ref.galleries,
      columns = _ref.columns,
      thumbAspect = _ref.thumbAspect,
      countIndicator = _ref.countIndicator,
      containerAspect = _ref.containerAspect,
      view = _ref.view,
      caption = _ref.caption,
      classAdd = _ref.classAdd;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalView = _useState2[0],
      setModalView = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      imageGallery = _useState4[0],
      setImageGallery = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      clickedIndex = _useState6[0],
      setClickedIndex = _useState6[1];

  var colWidth = 100 / columns;

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      mobile = _useState8[0],
      setMobile = _useState8[1];

  (0, _react.useEffect)(function () {
    buildArray(galleries);
    setMobile(_reactDeviceDetect.isMobile);
  }, []);

  var thumbStyles = {
    display: 'inline-block',
    background: '#ccc',
    margin: '10px',
    width: 'calc(' + colWidth + '% - 20px)',
    cursor: 'pointer'
  };

  var mobileStyles = {
    position: 'relative'
  };

  var buildArray = function buildArray(galleries) {
    var imageGalleries = [];
    galleries.map(function (gallery, index) {
      imageGalleries.push(gallery.images);
      return imageGalleries;
    });
    imageGalleries.concat(imageGalleries);
    setImageGallery(imageGalleries.flat());
  };

  var displayGallery = function displayGallery(gallery) {
    setClickedIndex(gallery.startIndex);
    setModalView(true);
  };

  return _react2.default.createElement(
    'div',
    {
      style: _extends({}, {
        position: 'relative',
        overflow: 'visible'
      }),
      className: 'jsx-3402065070' + ' ' + ('carouselWrapper ' + (caption && caption.length > 0 ? ' withCaption' : '') + (classAdd ? ' ' + classAdd : ''))
    },
    mobile ? _react2.default.createElement(
      _CircularCarousel2.default,
      { countIndicator: countIndicator, caption: caption, imageAspect: thumbAspect, aspectRatio: containerAspect },
      galleries.map(function (gallery, index) {
        return _react2.default.createElement(
          'div',
          { style: mobileStyles, key: 'galleryThumb-' + index, className: 'jsx-3402065070'
          },
          _react2.default.createElement(_Image2.default, {
            aspectRatio: thumbAspect || 'sixteen',
            imgSource: gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0],
            skipIntro: true
          })
        );
      })
    ) : _react2.default.createElement(
      'div',
      {
        className: 'jsx-3402065070'
      },
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-3402065070' + ' ' + 'museum-container'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-3402065070' + ' ' + 'expand-indicator'
          },
          _react2.default.createElement('span', { style: { backgroundImage: "url('data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20d%3D%22M11.6%209.6h6.8v8.8h-6.8z%22/%3E%3Cpath%20d%3D%22M16.5%209.5v-2h-2m-3%209h-2v-2m5-7h-5v7m5-7v-2h-7v9h2%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E')" }, className: 'jsx-3402065070' + ' ' + 'expand-icon'
          }),
          _react2.default.createElement(
            'span',
            {
              className: 'jsx-3402065070' + ' ' + 'expand-copy'
            },
            'CLICK IMAGE TO VIEW COLLECTION'
          )
        ),
        galleries.map(function (gallery, index) {
          return _react2.default.createElement(
            'div',
            {
              className: 'grid-image',
              onClick: function onClick(e) {
                return displayGallery(gallery);
              },
              style: thumbStyles,
              key: 'galleryThumb-' + index },
            _react2.default.createElement(_Image2.default, {
              aspectRatio: thumbAspect || 'sixteen',
              imgSource: gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0],
              skipIntro: true
            })
          );
        }),
        _react2.default.createElement(
          _Modal2.default,
          {
            view: view,
            modalVisible: modalView },
          _react2.default.createElement(_SimpleGallery2.default, { images: imageGallery, view: view, index: clickedIndex })
        )
      ),
      caption && caption.length > 0 ? _react2.default.createElement(
        _Type.Caption,
        { classAdd: 'col-6 skip-3 col-6-tab skip-1-tab' },
        caption
      ) : ''
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3402065070',
      css: '.modalOpen.jsx-3402065070{overflow:hidden;}.expand-indicator.jsx-3402065070{font-family:Atlas Grotesk;color:#7F7F7F;position:absolute;top:1.25vw;left:.8vw;}.expand-copy.jsx-3402065070{-webkit-letter-spacing:1.25px;-moz-letter-spacing:1.25px;-ms-letter-spacing:1.25px;letter-spacing:1.25px;font-weight:400;font-size:10px;float:right;width:80vw;}.expand-icon.jsx-3402065070{display:inline-block;height:25px;width:25px;top:5px;margin-right:10px;background-repeat:no-repeat;background-size:100%;background-image:url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20d%3D%22M11.6%209.6h6.8v8.8h-6.8z%22/%3E%3Cpath%20d%3D%22M16.5%209.5v-2h-2m-3%209h-2v-2m5-7h-5v7m5-7v-2h-7v9h2%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E");margin-left:.1vw;position:relative;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.museum-container.jsx-3402065070{background:#f2f2f2;padding:6vw;}.grid-image.jsx-3402065070:hover{-webkit-filter:brightness(70%);filter:brightness(70%);}.modal.jsx-3402065070{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1000;}.modalTouchArea.jsx-3402065070{cursor:pointer;position:absolute;top:30px;right:30px;width:30px;height:30px;z-index:9999;background-repeat:no-repeat;}'
    })
  );
};

exports.default = Museum;