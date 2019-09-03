'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paddingRef = {
  sixteen: '56.25%',
  standard: '75%',
  cropped: '41.67%',
  square: '100%'
};

var ImageWrap = function (_React$Component) {
  _inherits(ImageWrap, _React$Component);

  function ImageWrap(props) {
    _classCallCheck(this, ImageWrap);

    var _this = _possibleConstructorReturn(this, (ImageWrap.__proto__ || Object.getPrototypeOf(ImageWrap)).call(this, props));

    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(ImageWrap, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return Boolean(nextProps.isVisible);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          aspectRatio = _props.aspectRatio,
          fullBleed = _props.fullBleed,
          children = _props.children,
          imgSource = _props.imgSource,
          horizontalAlign = _props.horizontalAlign,
          verticalAlign = _props.verticalAlign,
          sideBar = _props.sideBar,
          isVisible = _props.isVisible,
          visibilityOverride = _props.visibilityOverride,
          skipIntro = _props.skipIntro,
          backgroundSize = _props.backgroundSize;

      var showImage = visibilityOverride ? true : isVisible;
      console.log('visiblityOverride: ' + visibilityOverride);
      return _react2.default.createElement(
        'div',
        { className: 'imageWrap ' + aspectRatio + ' ' + (fullBleed ? 'fullBleed' : ''),
          style: {
            backgroundImage: '' + (aspectRatio !== 'noAspect' && showImage ? 'url(\'' + imgSource + '\')' : ''),
            backgroundSize: backgroundSize || 'cover',
            backgroundPositionX: horizontalAlign,
            backgroundPositionY: verticalAlign,
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            height: 'auto',
            overflow: '' + (!sideBar ? 'hidden' : 'visible'),
            paddingTop: paddingRef[aspectRatio],
            opacity: showImage ? 1 : 0,
            top: showImage || skipIntro ? '0px' : '15px',
            transition: 'opacity 0.5s, top 0.5s',
            transitionDelay: '1s'
          }
        },
        showImage ? _react2.default.cloneElement(children) : ''
      );
    }
  }]);

  return ImageWrap;
}(_react2.default.Component);

exports.default = ImageWrap;