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

var _GalleryView = require('./GalleryView');

var _GalleryView2 = _interopRequireDefault(_GalleryView);

var _ResponsiveCarousel = require('./ResponsiveCarousel');

var _ResponsiveCarousel2 = _interopRequireDefault(_ResponsiveCarousel);

var _reactOnScreen = require('react-on-screen');

var _reactOnScreen2 = _interopRequireDefault(_reactOnScreen);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Type = require('./Type');

var _reactDeviceDetect = require('react-device-detect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridGallery = function GridGallery(_ref) {
  var thumbs = _ref.thumbs,
      images = _ref.images,
      columns = _ref.columns,
      countIndicator = _ref.countIndicator,
      thumbAspect = _ref.thumbAspect,
      containerAspect = _ref.containerAspect,
      carousel = _ref.carousel,
      mobileCarousel = _ref.mobileCarousel,
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

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      mobile = _useState6[0],
      setMobile = _useState6[1];

  var colWidth = 100 / columns;

  (0, _react.useEffect)(function () {
    setMobile(_reactDeviceDetect.isMobile);
    if (modalView === true) {
      document.body.classList.add('modalOpen');
    } else {
      document.body.classList.remove('modalOpen');
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
  var closeGallery = function closeGallery() {
    setModalView(false);
  };

  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-1215224865'
    },
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-1215224865' + ' ' + 'col-6 skip-3 col-6-tab skip-1-tab'
      },
      headingCaption || ''
    ),
    _react2.default.createElement(
      'div',
      {
        style: _extends({}, {
          position: 'relative',
          overflow: 'visible'
        }),
        className: 'jsx-1215224865' + ' ' + ('' + (caption && caption.length > 0 ? ' withCaption' : '') + (classAdd ? ' ' + classAdd : ''))
      },
      mobile ? mobileCarousel && !altAsset ?
      // case for mobile carousel using the same assets as desktop
      _react2.default.createElement(
        _ResponsiveCarousel2.default,
        { countIndicator: countIndicator, caption: caption, imageAspect: thumbAspect, aspectRatio: containerAspect },
        images.map(function (image, index) {
          return _react2.default.createElement(
            'div',
            { style: mobileStyles, key: escape(image) + '-' + index, className: 'jsx-1215224865'
            },
            _react2.default.createElement(_Image2.default, {
              aspectRatio: thumbAspect,
              imgSource: image,
              skipIntro: true
            })
          );
        })
      ) : mobile && altAsset.length === 1 ?
      // case for mobile flat using an alternate asset for mobile
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-1215224865' + ' ' + 'mobile-flat'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-1215224865' + ' ' + 'mobile-grid-container'
          },
          _react2.default.createElement(
            'div',
            { style: evenGridStyles, className: 'jsx-1215224865'
            },
            _react2.default.createElement(_Image2.default, {
              aspectRatio: thumbAspect || 'noAspect',
              imgSource: altAsset,
              skipIntro: true
            })
          )
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-2 col-6-tab skip-1-tab' },
          caption
        ) : ''
      ) :
      // mobile case for multiple alt assets 
      _react2.default.createElement(
        _ResponsiveCarousel2.default,
        { countIndicator: countIndicator, caption: caption, imageAspect: thumbAspect, aspectRatio: containerAspect, altRatio: altRatio },
        altAsset.map(function (alt, index) {
          return _react2.default.createElement(
            'div',
            { style: mobileStyles, key: escape(alt) + '-' + index, className: 'jsx-1215224865'
            },
            _react2.default.createElement(_Image2.default, {
              aspectRatio: thumbAspect,
              imgSource: alt,
              skipIntro: true
            })
          );
        })
      ) : mixedOr ?
      // case for desktop grid with mixed orientations
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-1215224865'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-1215224865' + ' ' + 'grid-container'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-1215224865' + ' ' + 'image-wrapper'
            },
            carousel === 'yes' ? _react2.default.createElement(
              'div',
              {
                className: 'jsx-1215224865' + ' ' + 'expand-indicator'
              },
              _react2.default.createElement('span', { style: { backgroundImage: "url('data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20d%3D%22M18%207v5-5zM13%207h5-5zM7%2018v-5%205zM12%2018H7h5z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22/%3E%3Cpath%20d%3D%22M7%2018L18%207%207%2018z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E')" }, className: 'jsx-1215224865' + ' ' + 'expand-icon'
              }),
              _react2.default.createElement(
                'span',
                {
                  className: 'jsx-1215224865' + ' ' + 'expand-copy'
                },
                'CLICK IMAGE TO EXPAND'
              )
            ) : '',
            thumbs.map(function (image, index) {
              return _react2.default.createElement(
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
                    onClick: function onClick(e) {
                      if (carousel === 'yes') {
                        displayGallery(index);
                      }
                    },
                    src: isVisible ? image : '',
                    className: 'jsx-1215224865' + ' ' + 'moasic-image'
                  });
                }
              );
            }),
            modalView ? _react2.default.createElement(
              'div',
              {
                style: {
                  background: view === 'lightMode' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
                } },
              _react2.default.createElement('div', { className: 'modalTouchArea', onClick: closeGallery,
                style: {
                  backgroundImage: view === 'lightMode' ? 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23000%22/%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E")'
                } }),
              _react2.default.createElement(_GalleryView2.default, { images: images, index: imageIndex, aspectRatio: 'noAspect', view: view })
            ) : ''
          )
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-2 col-6-tab skip-1-tab' },
          caption
        ) : ''
      ) :
      // case for desktop grid with aligned columns 
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-1215224865'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-1215224865' + ' ' + 'columns-grid-container'
          },
          carousel === 'yes' ? _react2.default.createElement(
            'div',
            {
              className: 'jsx-1215224865' + ' ' + 'expand-indicator'
            },
            _react2.default.createElement('span', {
              className: 'jsx-1215224865' + ' ' + 'expand-icon'
            }),
            _react2.default.createElement(
              'span',
              {
                className: 'jsx-1215224865' + ' ' + 'expand-copy'
              },
              'CLICK IMAGE TO EXPAND'
            )
          ) : '',
          thumbs.map(function (image, index) {
            return _react2.default.createElement(
              'div',
              { onClick: function onClick(e) {
                  if (carousel === 'yes') {
                    displayGallery(index);
                  }
                }, style: evenGridStyles, key: 'galleryThumb-' + index, className: 'jsx-1215224865' + ' ' + ('' + (carousel === 'yes' ? 'grid-image' : ''))
              },
              _react2.default.createElement(_Image2.default, {
                aspectRatio: thumbAspect || 'noAspect',
                imgSource: image,
                skipIntro: true
              })
            );
          }),
          modalView ? _react2.default.createElement(
            'div',
            {
              style: {
                background: view === 'lightMode' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
              }, className: 'jsx-1215224865' + ' ' + 'modal'
            },
            _react2.default.createElement('div', { onClick: closeGallery,
              style: {
                backgroundImage: view === 'lightMode' ? 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23000%22/%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E")'
              }, className: 'jsx-1215224865' + ' ' + 'modalTouchArea'
            }),
            _react2.default.createElement(_GalleryView2.default, { images: images, index: imageIndex, aspectRatio: 'sixteen', view: view })
          ) : ''
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-2 col-6-tab skip-1-tab' },
          caption
        ) : ''
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '1215224865',
      css: '.modalOpen.jsx-1215224865{overflow:hidden;}.moasic-image.jsx-1215224865{display:inline-block;position:relative;height:9.4vw;width:auto;}.image-wrapper.jsx-1215224865{margin:auto;width:80vw;}@media only screen and (max-width:1025px){.image-wrapper.jsx-1215224865{width:60vw;}}.expand-indicator.jsx-1215224865{font-family:Atlas Grotesk;color:#7F7F7F;position:absolute;top:1.25vw;left:.8vw;}.expand-copy.jsx-1215224865{-webkit-letter-spacing:1.25px;-moz-letter-spacing:1.25px;-ms-letter-spacing:1.25px;letter-spacing:1.25px;font-weight:400;font-size:10px;float:right;width:80vw;}.expand-icon.jsx-1215224865{display:inline-block;height:25px;width:25px;top:5px;margin-right:10px;background-repeat:no-repeat;background-size:100%;margin-left:.1vw;position:relative;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.grid-container.jsx-1215224865{background:#f2f2f2;display:block;position:relative;padding:6vw;}.columns-grid-container.jsx-1215224865{background:#f2f2f2;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5vw;}.mobile-grid-container.jsx-1215224865{background:#f2f2f2;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:15px;}.grid-image.jsx-1215224865:hover{-webkit-filter:brightness(70%);filter:brightness(70%);}.modal.jsx-1215224865{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:1000;}.modalTouchArea.jsx-1215224865{cursor:pointer;position:absolute;top:30px;right:30px;width:30px;height:30px;z-index:9999;background-repeat:no-repeat;}'
    })
  );
};

exports.default = GridGallery;