"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _SimpleGallery = _interopRequireDefault(require("./SimpleGallery"));

var _Image = _interopRequireDefault(require("./Image"));

var _CircularCarousel = _interopRequireDefault(require("./CircularCarousel"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _Type = require("./Type");

var _reactDeviceDetect = require("react-device-detect");

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
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      modalView = _useState2[0],
      setModalView = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      imageGallery = _useState4[0],
      setImageGallery = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      clickedIndex = _useState6[0],
      setClickedIndex = _useState6[1];

  var colWidth = 100 / columns;

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
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
    width: "calc(".concat(colWidth, "% - 20px)"),
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

  return _react["default"].createElement("div", {
    style: Object.assign({}, {
      position: 'relative',
      overflow: 'visible'
    }),
    className: "carouselWrapper ".concat(caption && caption.length > 0 ? ' withCaption' : '').concat(classAdd ? " ".concat(classAdd) : '')
  }, mobile ? _react["default"].createElement(_CircularCarousel["default"], {
    countIndicator: countIndicator,
    caption: caption,
    imageAspect: thumbAspect,
    aspectRatio: containerAspect
  }, galleries.map(function (gallery, index) {
    return _react["default"].createElement("div", {
      style: mobileStyles,
      key: "galleryThumb-".concat(index)
    }, _react["default"].createElement(_Image["default"], {
      aspectRatio: thumbAspect || 'sixteen',
      imgSource: gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0],
      skipIntro: true,
      visibilityOverride: true
    }));
  })) : _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "museum-container"
  }, _react["default"].createElement("div", {
    className: "expand"
  }, _react["default"].createElement("span", {
    className: "expand__icon",
    style: {
      backgroundImage: "url('data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20d%3D%22M11.6%209.6h6.8v8.8h-6.8z%22/%3E%3Cpath%20d%3D%22M16.5%209.5v-2h-2m-3%209h-2v-2m5-7h-5v7m5-7v-2h-7v9h2%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E')"
    }
  }), _react["default"].createElement("span", {
    className: "expand__copy"
  }, "CLICK IMAGE TO VIEW COLLECTION")), galleries.map(function (gallery, index) {
    return _react["default"].createElement("div", {
      className: "grid-image",
      onClick: function onClick(e) {
        return displayGallery(gallery);
      },
      style: thumbStyles,
      key: "galleryThumb-".concat(index)
    }, _react["default"].createElement(_Image["default"], {
      aspectRatio: thumbAspect || 'sixteen',
      imgSource: gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0],
      skipIntro: true
    }));
  }), modalView ? _react["default"].createElement(_Modal["default"], {
    view: view,
    modalVisible: modalView
  }, _react["default"].createElement(_SimpleGallery["default"], {
    images: imageGallery,
    view: view,
    index: clickedIndex
  })) : ''), caption && caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
    classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
  }, caption) : ''), _react["default"].createElement("style", null, "\n      .expand {\n        position: absolute;\n        top: 1.25vw;\n        left: 1.25vw;\n      }\n      .expand__copy {\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 2px;\n        color: #7F7F7F;\n        font-family: Atlas Grotesk;\n        letter-spacing: 1.25px;\n        font-weight: 400;\n        font-size: 10px;\n        white-space: nowrap;\n      }\n      .expand__icon {\n        display: inline-block;\n        height: 25px;\n        width: 25px;\n        top: 5px;\n        margin-right: 10px;\n        background-repeat: no-repeat;\n        background-size: 100%;\n        margin-left: .1vw;\n        position: relative;\n        transform: translateY(-50%);\n      }\n      .museum-container {\n        background: rgb(242,242,242);\n        padding: 6vw;\n      }\n      .grid-image:hover {\n        filter: brightness(70%);\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;       \n        z-index: 1000;\n      }\n      .modalTouchArea {\n        cursor: pointer;\n        position: absolute;\n        top: 30px;\n        right: 30px;\n        width: 30px;\n        height: 30px;\n        z-index:9999;\n        background-repeat: no-repeat;\n      }\n    "));
};

var _default = Museum;
exports["default"] = _default;