'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleGallery = require('./SimpleGallery');

var _SimpleGallery2 = _interopRequireDefault(_SimpleGallery);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _ResponsiveCarousel = require('./ResponsiveCarousel');

var _ResponsiveCarousel2 = _interopRequireDefault(_ResponsiveCarousel);

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

  var colWidth = 100 / columns;

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      mobile = _useState6[0],
      setMobile = _useState6[1];

  (0, _react.useEffect)(function () {
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

  var displayGallery = function displayGallery(imageArray) {
    setModalView(true);
    setImageGallery(imageArray);
  };
  var closeGallery = function closeGallery(imageArray) {
    setModalView(false);
    setImageGallery([]);
  };

  return _react2.default.createElement(
    'div',
    {
      style: _extends({}, {
        position: 'relative',
        overflow: 'visible'
      }),
      className: 'carouselWrapper ' + (caption && caption.length > 0 ? ' withCaption' : '') + (classAdd ? ' ' + classAdd : '') },
    mobile ? _react2.default.createElement(
      _ResponsiveCarousel2.default,
      { countIndicator: countIndicator, caption: caption, imageAspect: thumbAspect, aspectRatio: containerAspect },
      galleries.map(function (gallery, index) {
        return _react2.default.createElement(
          'div',
          { onClick: function onClick(e) {
              return displayGallery(gallery.images);
            }, style: mobileStyles, key: 'galleryThumb-' + index },
          _react2.default.createElement(_Image2.default, {
            aspectRatio: thumbAspect || 'sixteen',
            imgSource: gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0],
            skipIntro: true,
            visibilityOverride: true
          })
        );
      })
    ) : _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'museum-container' },
        _react2.default.createElement(
          'div',
          { className: 'expand' },
          _react2.default.createElement(
            'span',
            { className: 'expand-indicator' },
            'CLICK IMAGE TO VIEW COLLECTION'
          )
        ),
        galleries.map(function (gallery, index) {
          return _react2.default.createElement(
            'div',
            { onClick: function onClick(e) {
                return displayGallery(gallery.images);
              }, style: thumbStyles, key: 'galleryThumb-' + index },
            _react2.default.createElement(_Image2.default, {
              aspectRatio: thumbAspect || 'sixteen',
              imgSource: gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0],
              skipIntro: true,
              visibilityOverride: true
            })
          );
        }),
        modalView ? _react2.default.createElement(
          'div',
          { className: 'modal' },
          _react2.default.createElement('div', { className: 'modalTouchArea', onClick: function onClick(e) {
              return closeGallery();
            } }),
          _react2.default.createElement(_SimpleGallery2.default, { images: imageGallery, aspectRatio: 'noAspect', view: view })
        ) : ''
      ),
      caption && caption.length > 0 ? _react2.default.createElement(
        _Type.Caption,
        { classAdd: 'col-6 skip-3 col-6-tab skip-1-tab' },
        caption
      ) : ''
    ),
    _react2.default.createElement(
      'style',
      null,
      '\n      .expand {\n        font-family: Atlas Grotesk;\n        color: #7F7F7F;\n        position: absolute;\n        top: 1.8vw;\n        left: 1.8vw;\n        font-weight: 400;\n        font-size: 10px;\n      }\n      .expand::before {\n        content: url(\'data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20d%3D%22M11.6%209.6h6.8v8.8h-6.8z%22/%3E%3Cpath%20d%3D%22M16.5%209.5v-2h-2m-3%209h-2v-2m5-7h-5v7m5-7v-2h-7v9h2%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E\');\n      }\n      .expand-indicator {\n        margin-left: 8px;\n        position: absolute;\n        width: 15vw;\n        top: 50%;\n        transform: translateY(-50%);\n      }\n      .museum-container {\n        background: rgb(242,242,242);\n        padding: 7.4vw 7.1vw;\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        background: ' + (view === 'lightMode' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)') + ';        \n        z-index: 1000;\n      }\n      .modalTouchArea {\n        cursor: pointer;\n        position: absolute;\n        top: 30px;\n        right: 30px;\n        width: 30px;\n        height: 30px;\n        z-index:9999;\n        background-repeat: no-repeat;\n        background-image: ' + (view === 'lightMode' ? 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23000%22/%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E")') + ';\n      }\n    '
    )
  );
};

exports.default = Museum;