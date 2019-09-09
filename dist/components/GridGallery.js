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

var _CircularCarousel = require('./CircularCarousel');

var _CircularCarousel2 = _interopRequireDefault(_CircularCarousel);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _reactOnScreen = require('react-on-screen');

var _reactOnScreen2 = _interopRequireDefault(_reactOnScreen);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Type = require('./Type');

var _reactDeviceDetect = require('react-device-detect');

var _ConditionalClass = require('./ConditionalClass');

var _ConditionalClass2 = _interopRequireDefault(_ConditionalClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridGallery = function GridGallery(_ref) {
  var thumbs = _ref.thumbs,
      images = _ref.images,
      columns = _ref.columns,
      countIndicator = _ref.countIndicator,
      thumbAspect = _ref.thumbAspect,
      containerAspect = _ref.containerAspect,
      carousel = _ref.carousel,
      view = _ref.view,
      caption = _ref.caption,
      mixedOr = _ref.mixedOr,
      altAsset = _ref.altAsset,
      altRatio = _ref.altRatio,
      headingCaption = _ref.headingCaption,
      classAdd = _ref.classAdd;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalView = _useState2[0],
      setModalView = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      imageIndex = _useState4[0],
      setImageIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(images),
      _useState6 = _slicedToArray(_useState5, 2),
      appliedImages = _useState6[0],
      setAppliedImages = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      mobile = _useState8[0],
      setMobile = _useState8[1];

  var colWidth = 100 / columns;

  (0, _react.useEffect)(function () {
    setMobile(_reactDeviceDetect.isMobile);
    if (altAsset) {
      setAppliedImages(altAsset);
    }
  }, [modalView]);

  var evenGridStyles = {
    flexGrow: images.length,
    justifyContent: 'space-between',
    margin: '15px',
    width: 'calc(' + colWidth + '% - 50px)',
    cursor: carousel === 'yes' ? 'pointer' : 'default'
  };

  var mixedOrStyles = {
    margin: '.5vw',
    display: 'inline-block',
    cursor: carousel === 'yes' ? 'pointer' : 'default'
  };

  var mobileStyles = {
    position: 'relative'
  };

  var displayGallery = function displayGallery(index) {
    setModalView(true);
    setImageIndex(index);
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'col-6 skip-3 col-6-tab skip-1-tab' },
      headingCaption || ''
    ),
    _react2.default.createElement(
      'div',
      {
        style: _extends({}, {
          position: 'relative',
          overflow: 'visible'
        }),
        className: '' + (caption && caption.length > 0 ? ' withCaption' : '') + (classAdd ? ' ' + classAdd : '') },
      mobile ? appliedImages.length > 1 ? _react2.default.createElement(
        _CircularCarousel2.default,
        { countIndicator: countIndicator, caption: caption, imageAspect: thumbAspect, aspectRatio: containerAspect },
        appliedImages.map(function (image, index) {
          return _react2.default.createElement(
            'div',
            { style: mobileStyles, key: escape(image) + '-' + index },
            _react2.default.createElement(_Image2.default, {
              aspectRatio: thumbAspect,
              imgSource: image,
              skipIntro: true
            })
          );
        })
      ) : _react2.default.createElement(
        'div',
        { className: 'mobile-flat' },
        _react2.default.createElement(
          'div',
          { className: 'mobile-grid-container' },
          _react2.default.createElement(
            'div',
            { style: evenGridStyles },
            _react2.default.createElement(_Image2.default, {
              aspectRatio: thumbAspect || 'noAspect',
              imgSource: appliedImages[0],
              skipIntro: true
            })
          )
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-2 col-6-tab skip-1-tab' },
          caption
        ) : ''
      ) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: mixedOr ? 'grid-container' : 'columns-grid-container' },
          _react2.default.createElement(
            _ConditionalClass2.default,
            { pass: mixedOr, classAdd: 'image-wrapper' },
            carousel === 'yes' ? _react2.default.createElement(
              'div',
              { className: 'expand' },
              _react2.default.createElement(
                'span',
                { className: 'expand-indicator' },
                'CLICK IMAGE TO EXPAND'
              )
            ) : '',
            thumbs.map(function (image, index) {
              return mixedOr ? _react2.default.createElement(
                _reactOnScreen2.default,
                {
                  partialVisibility: true,
                  once: true,
                  className: '' + (carousel === 'yes' ? 'grid-image' : ''),
                  style: mixedOrStyles, key: 'galleryThumb-' + index
                },
                function (_ref2) {
                  var isVisible = _ref2.isVisible;
                  return _react2.default.createElement('img', {
                    className: 'moasic-image',
                    onClick: function onClick(e) {
                      if (carousel === 'yes') {
                        displayGallery(index);
                      }
                    },
                    src: isVisible ? image : ''
                  });
                }
              ) : _react2.default.createElement(
                'div',
                {
                  className: '' + (carousel === 'yes' ? 'grid-image' : ''),
                  onClick: function onClick(e) {
                    if (carousel === 'yes') {
                      displayGallery(index);
                    }
                  },
                  style: evenGridStyles,
                  key: 'galleryThumb-' + index },
                _react2.default.createElement(_Image2.default, {
                  aspectRatio: thumbAspect || 'noAspect',
                  imgSource: image,
                  skipIntro: true
                })
              );
            }),
            modalView ? _react2.default.createElement(
              _Modal2.default,
              {
                view: view,
                modalVisible: modalView },
              _react2.default.createElement(_SimpleGallery2.default, { images: images, view: view, index: imageIndex })
            ) : ''
          )
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-2 col-6-tab skip-1-tab' },
          caption
        ) : ''
      )
    ),
    _react2.default.createElement(
      'style',
      null,
      '\n      .modalOpen {\n        overflow: hidden;\n      }\n      .moasic-image {\n        display: inline-block;\n        position: relative;\n        height: 9.4vw;\n        width: auto;\n      }\n      .image-wrapper {\n        margin: auto;\n        width: 80vw;\n      }\n      @media only screen and (max-width: 1025px) {\n        .image-wrapper {\n          width: 60vw;\n        }\n      }\n      @media only screen and (max-width: 500px) {\n        .image-wrapper {\n          width: 57vw;\n        }\n      }\n      .expand {\n        font-family: Atlas Grotesk;\n        color: #7F7F7F;\n        position: absolute;\n        top: 1vw;\n        left: 1vw;\n        font-weight: 400;\n        font-size: 10px;\n        letter-spacing: 1.25px;\n      }\n      .expand::before {\n        content: url(\'data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20d%3D%22M18%207v5-5zM13%207h5-5zM7%2018v-5%205zM12%2018H7h5z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22/%3E%3Cpath%20d%3D%22M7%2018L18%207%207%2018z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E\');\n      }\n      .expand-indicator {\n        margin-left: 8px;\n        position: absolute;\n        width: 40vw;\n        top: 50%;\n        transform: translateY(-50%);\n      }\n      .grid-container {\n        background: rgb(242,242,242);\n        display:block;\n        position: relative;\n        padding: 6vw;\n      }\n      .columns-grid-container {\n        background: rgb(242,242,242);\n        flex-direction: row;\n        flex-wrap: wrap;\n        display:flex;\n        padding: 5vw;\n      }\n      .mobile-grid-container {\n        background: rgb(242,242,242);\n        flex-direction: row;\n        flex-wrap: wrap;\n        display:flex;\n        padding: 15px;\n      }\n      .grid-image:hover {\n        filter: brightness(70%);\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 1000;\n      }\n      .modalTouchArea {\n        cursor: pointer;\n        position: absolute;\n        top: 30px;\n        right: 30px;\n        width: 30px;\n        height: 30px;\n        z-index:9999;\n        background-repeat: no-repeat;\n      }\n    '
    )
  );
};

exports.default = GridGallery;