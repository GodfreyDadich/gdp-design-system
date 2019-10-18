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

var _CircularCarousel = _interopRequireDefault(require("./CircularCarousel"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _reactOnScreen = _interopRequireDefault(require("react-on-screen"));

var _Image = _interopRequireDefault(require("./Image"));

var _Type = require("./Type");

var _reactDeviceDetect = require("react-device-detect");

var _ConditionalClass = _interopRequireDefault(require("./ConditionalClass"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
      removeGrayBackground = _ref.removeGrayBackground,
      mixedOr = _ref.mixedOr,
      altAsset = _ref.altAsset,
      headingCaption = _ref.headingCaption,
      classAdd = _ref.classAdd;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      modalView = _useState2[0],
      setModalView = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      imageIndex = _useState4[0],
      setImageIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(images),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      appliedImages = _useState6[0],
      setAppliedImages = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
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
    width: "calc(".concat(colWidth, "% - 50px)"),
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

  return _react["default"].createElement("div", null, _react["default"].createElement(_ConditionalClass["default"], {
    pass: headingCaption,
    classAdd: "col-6 skip-3 col-6-tab skip-1-tab"
  }, headingCaption || ''), _react["default"].createElement("div", {
    style: Object.assign({}, {
      position: 'relative',
      overflow: 'visible'
    }),
    className: "".concat(caption && caption.length > 0 ? ' withCaption' : '').concat(classAdd ? " ".concat(classAdd) : '')
  }, mobile ? appliedImages.length > 1 ? _react["default"].createElement(_CircularCarousel["default"], {
    gridGallery: true,
    countIndicator: countIndicator,
    caption: caption,
    imageAspect: thumbAspect,
    aspectRatio: containerAspect
  }, appliedImages.map(function (image, index) {
    return _react["default"].createElement("div", {
      style: mobileStyles,
      key: "".concat(escape(image), "-").concat(index)
    }, _react["default"].createElement(_Image["default"], {
      aspectRatio: thumbAspect,
      imgSource: image,
      skipIntro: true,
      visibilityOverride: true
    }));
  })) : _react["default"].createElement("div", {
    className: "mobile-flat"
  }, _react["default"].createElement("div", {
    className: "mobile-grid-container",
    style: {
      background: removeGrayBackground ? 'transparent' : 'rgb(242,242,242)'
    }
  }, _react["default"].createElement("div", {
    style: evenGridStyles
  }, _react["default"].createElement(_Image["default"], {
    aspectRatio: thumbAspect || 'noAspect',
    imgSource: appliedImages[0],
    skipIntro: true
  }))), caption && caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
    classAdd: "".concat(removeGrayBackground ? 'col-8 skip-2 col-6-tab skip-1-tab' : 'col-6 skip-2 col-6-tab skip-0-tab')
  }, caption) : '') : _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: mixedOr ? 'grid-container' : removeGrayBackground ? 'columns-grid-container-transparent' : 'columns-grid-container',
    style: {
      background: removeGrayBackground ? 'transparent' : 'rgb(242,242,242)'
    }
  }, _react["default"].createElement(_ConditionalClass["default"], {
    pass: mixedOr,
    classAdd: "image-wrapper"
  }, carousel === 'yes' ? _react["default"].createElement("div", {
    className: "".concat(removeGrayBackground ? 'expand-transparent' : 'expand')
  }, _react["default"].createElement("span", {
    className: "expand__icon",
    style: {
      backgroundImage: "url('data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20d%3D%22M18%207v5-5zM13%207h5-5zM7%2018v-5%205zM12%2018H7h5z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22/%3E%3Cpath%20d%3D%22M7%2018L18%207%207%2018z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E')"
    }
  }), _react["default"].createElement("span", {
    className: "expand__copy"
  }, "CLICK IMAGE TO EXPAND")) : '', thumbs.map(function (image, index) {
    return mixedOr ? _react["default"].createElement(_reactOnScreen["default"], {
      partialVisibility: true,
      once: true,
      className: "".concat(carousel === 'yes' ? 'grid-image' : ''),
      style: mixedOrStyles,
      key: "galleryThumb-".concat(index)
    }, function (_ref2) {
      var isVisible = _ref2.isVisible;
      return _react["default"].createElement("img", {
        className: "moasic-image",
        onClick: function onClick(e) {
          if (carousel === 'yes') {
            displayGallery(index);
          }
        },
        src: isVisible ? image : ''
      });
    }) : _react["default"].createElement("div", {
      className: "".concat(carousel === 'yes' ? 'grid-image' : ''),
      onClick: function onClick(e) {
        if (carousel === 'yes') {
          displayGallery(index);
        }
      },
      style: evenGridStyles,
      key: "galleryThumb-".concat(index)
    }, _react["default"].createElement(_Image["default"], {
      aspectRatio: thumbAspect || 'noAspect',
      imgSource: image,
      skipIntro: true
    }));
  }), modalView ? _react["default"].createElement(_Modal["default"], {
    view: view,
    modalVisible: modalView
  }, _react["default"].createElement(_SimpleGallery["default"], {
    images: images,
    view: view,
    index: imageIndex
  })) : '')), caption && caption.length > 0 ? _react["default"].createElement(_Type.Caption, {
    classAdd: "".concat(removeGrayBackground ? 'col-8 skip-2 col-6-tab skip-1-tab' : 'col-6 skip-2 col-6-tab skip-1-tab')
  }, caption) : '')), _react["default"].createElement("style", null, "\n      .expand-transparent {\n        position: absolute;\n        top: 1.25vw;\n        left: 6vw;\n      }\n      .expand {\n        position: absolute;\n        top: 1.25vw;\n        left: 1.25vw;\n      }\n      .expand__copy {\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 2px;\n        color: #7F7F7F;\n        font-family: Atlas Grotesk;\n        letter-spacing: 1.25px;\n        font-weight: 400;\n        font-size: 10px;\n        white-space: nowrap;\n      }\n      .expand__icon {\n        display: inline-block;\n        height: 25px;\n        width: 25px;\n        top: 5px;\n        margin-right: 10px;\n        background-repeat: no-repeat;\n        background-size: 100%;\n        margin-left: .1vw;\n        position: relative;\n        transform: translateY(-50%);\n      }\n      .moasic-image {\n        display: inline-block;\n        position: relative;\n        height: 9.4vw;\n        width: auto;\n      }\n      .image-wrapper {\n        margin: auto;\n        width: 80vw;\n      }\n      @media only screen and (max-width: 1025px) {\n        .image-wrapper {\n          width: 60vw;\n        }\n      }\n      @media only screen and (max-width: 500px) {\n        .image-wrapper {\n          width: 57vw;\n        }\n      }\n      .grid-container {\n        display:block;\n        position: relative;\n        padding: 6vw;\n      }\n      .columns-grid-container {\n        flex-direction: row;\n        flex-wrap: wrap;\n        display:flex;\n        padding: 5vw;\n      }\n      .columns-grid-container-transparent {\n        flex-direction: row;\n        flex-wrap: wrap;\n        display:flex;\n        padding: 5vw 5vw 0px 5vw;\n      }\n      .mobile-grid-container {\n        flex-direction: row;\n        flex-wrap: wrap;\n        display:flex;\n        padding: 15px;\n      }\n      .grid-image:hover {\n        filter: brightness(70%);\n      }\n      .modal {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 1000;\n      }\n      .modalTouchArea {\n        cursor: pointer;\n        position: absolute;\n        top: 30px;\n        right: 30px;\n        width: 30px;\n        height: 30px;\n        z-index:9999;\n        background-repeat: no-repeat;\n      }\n    "));
};

GridGallery.propTypes = {
  cardTitle: _propTypes["default"].string,
  cardSubtitle: _propTypes["default"].string,
  cardContent: _propTypes["default"].string,
  linkText: _propTypes["default"].string,
  linkURL: _propTypes["default"].string,
  mediaOrientation: _propTypes["default"].oneOf(['top', 'left', 'right', 'bottom']),
  imageTitle: _propTypes["default"].string,
  aspectRatio: _propTypes["default"].oneOf(['sixteen', 'standard', 'square', 'cropped']),
  fullBleed: _propTypes["default"].bool,
  imgSource: _propTypes["default"].string,
  verticalAlign: _propTypes["default"].oneOf(['top', 'center', 'bottom']),
  horizontalAlign: _propTypes["default"].oneOf(['left', 'center', 'right'])
};
GridGallery.defaultProps = {
  aspectRatio: 'standard',
  fullBleed: false
};
var _default = GridGallery;
exports["default"] = _default;