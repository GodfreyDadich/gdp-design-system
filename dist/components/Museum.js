'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleGallery = require('./SimpleGallery');

var _SimpleGallery2 = _interopRequireDefault(_SimpleGallery);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Museum = function Museum(_ref) {
  var galleries = _ref.galleries,
      columns = _ref.columns,
      thumbAspect = _ref.thumbAspect;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalView = _useState2[0],
      setModalView = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      imageGallery = _useState4[0],
      setImageGallery = _useState4[1];

  var colWidth = 100 / columns;

  var thumbStyles = {
    display: 'inline-block',
    background: '#ccc',
    margin: '10px',
    width: 'calc(' + colWidth + '% - 20px)',
    cursor: 'pointer'
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
      className: 'jsx-1843702886' + ' ' + 'museum-container'
    },
    galleries.map(function (gallery, index) {
      return _react2.default.createElement(
        'div',
        { onClick: function onClick(e) {
            return displayGallery(gallery.images);
          }, style: thumbStyles, key: 'galleryThumb-' + index, className: 'jsx-1843702886'
        },
        _react2.default.createElement(_Image2.default, {
          aspectRatio: thumbAspect || 'sixteen',
          skipIntro: true,
          imgSource: gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0]
        })
      );
    }),
    modalView ? _react2.default.createElement(
      'div',
      {
        className: 'jsx-1843702886' + ' ' + 'modal'
      },
      _react2.default.createElement('div', { onClick: function onClick(e) {
          return closeGallery();
        }, className: 'jsx-1843702886' + ' ' + 'modalTouchArea'
      }),
      _react2.default.createElement(_SimpleGallery2.default, { images: imageGallery, aspectRatio: 'noAspect' })
    ) : '',
    _react2.default.createElement(_style2.default, {
      styleId: '1843702886',
      css: '.modal.jsx-1843702886{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.9);z-index:1000;}.modalTouchArea.jsx-1843702886{position:absolute;top:0;left:0;width:100%;height:100%;}'
    })
  );
};

exports.default = Museum;