'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Type = require('./Type');

var _reactDeviceDetect = require('react-device-detect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackedImage = function (_Component) {
  _inherits(StackedImage, _Component);

  function StackedImage(props) {
    _classCallCheck(this, StackedImage);

    var _this = _possibleConstructorReturn(this, (StackedImage.__proto__ || Object.getPrototypeOf(StackedImage)).call(this, props));

    _this.state = {
      isMobile: _reactDeviceDetect.isMobile
    };
    return _this;
  }

  _createClass(StackedImage, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _reactDeviceDetect.isMobile ? _react2.default.createElement(
          'div',
          {
            style: {
              position: 'relative',
              display: 'block',
              width: '100%',
              height: '100%'
            },
            className: 'imagesWrapper ' + (this.props.fullBleed ? ' full-bleed' : '') + (this.props.caption && this.props.caption.length > 0 ? ' withCaption' : '') },
          this.props.images.map(function (img, index) {
            return _react2.default.createElement(
              'figure',
              {
                className: 'itemWrap ' + (index === _this2.props.images.length - 1 ? 'withCaption' : ''),
                key: 'image' + index
              },
              _react2.default.createElement(_Image2.default, {
                stackedImage: true,
                key: 'img-' + index,
                aspectRatio: _this2.props.aspectRatio ? _this2.props.aspectRatio : 'noAspect',
                skipIntro: true,
                imgSource: img,
                visibilityOverride: true,
                caption: index === _this2.props.images.length - 1 ? _this2.props.caption : ''
              })
            );
          })
        ) : _react2.default.createElement(
          'div',
          {
            className: 'imagesWrapper ' + (this.props.fullBleed ? ' full-bleed' : '') + (this.props.caption && this.props.caption.length > 0 ? ' withCaption' : '') },
          _react2.default.createElement(
            'div',
            {
              style: {
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
              } },
            this.props.images.map(function (img, index) {
              return _react2.default.createElement(
                'figure',
                {
                  className: 'imageWrapDesktop',
                  key: 'image' + index,
                  style: {
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    height: '100%'
                  } },
                _react2.default.createElement(_Image2.default, {
                  key: 'img-' + index,
                  aspectRatio: _this2.props.aspectRatio ? _this2.props.aspectRatio : 'noAspect',
                  skipIntro: true,
                  imgSource: img,
                  visibilityOverride: true
                })
              );
            })
          ),
          this.props.caption && this.props.caption.length > 0 ? _react2.default.createElement(
            _Type.Caption,
            { classAdd: 'col-6 skip-1 col-6-tab skip-0-tab' },
            this.props.caption
          ) : ''
        ),
        _react2.default.createElement(
          'style',
          null,
          '\n          .imageWrapDesktop {\n            margin-left: 2vw;\n          }\n          .imageWrapDesktop:first-child {\n            margin-left: 0;\n          }\n          .itemWrap {\n            margin: 3.5vw 0;\n          }\n          .itemWrap:first-child {\n            margin: 0 0 3.5vw 0;\n          }\n          '
        )
      );
    }
  }]);

  return StackedImage;
}(_react.Component);

exports.default = StackedImage;