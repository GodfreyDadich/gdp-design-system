'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _SliderArrows = require('./SliderArrows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.state = {
      currentIndex: 0,
      translateValue: 0
    };
    _this.goToNextSlide = _this.goToNextSlide.bind(_this);
    _this.goToPrevSlide = _this.goToPrevSlide.bind(_this);
    _this.slideWidth = _this.slideWidth.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(Slider, [{
    key: 'goToPrevSlide',
    value: function goToPrevSlide() {
      var _this2 = this;

      if (this.state.currentIndex === 0) {
        return this.setState({
          currentIndex: this.props.images.length - 1,
          translateValue: -(this.props.images.length - 1) * this.slideWidth()
        });
      }

      this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + _this2.slideWidth()
        };
      });
    }
  }, {
    key: 'goToNextSlide',
    value: function goToNextSlide() {
      var _this3 = this;

      if (this.state.currentIndex === this.props.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }

      this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this3.slideWidth()
        };
      });
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode === 39) {
        this.goToNextSlide();
      }
      if (e.keyCode === 37) {
        this.goToPrevSlide();
      }
    }
  }, {
    key: 'slideWidth',
    value: function slideWidth() {
      return document.querySelector('.slide').clientWidth;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-1340607723' + ' ' + ('sliderWrap ' + this.props.aspectRatio)
        },
        _react2.default.createElement(
          'div',
          { style: { width: '100%', height: '100%', overflow: 'hidden' }, onKeyDown: this.onKeyDown, className: 'jsx-1340607723' + ' ' + 'slider'
          },
          _react2.default.createElement(
            'div',
            {
              style: {
                transform: 'translateX(' + this.state.translateValue + 'px)',
                transition: 'transform ease-out 0.45s',
                width: '100%',
                height: '100%',
                whiteSpace: 'nowrap'
              }, className: 'jsx-1340607723' + ' ' + 'slider-wrapper'
            },
            this.props.images.map(function (image, i) {
              return _react2.default.createElement(_Slide2.default, { key: i, image: image, renderImage: _this4.props.aspectRatio === 'noAspect' });
            })
          ),
          _react2.default.createElement(_SliderArrows.LeftArrow, { clickAction: this.goToPrevSlide }),
          _react2.default.createElement(_SliderArrows.RightArrow, { clickAction: this.goToNextSlide })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: '1340607723',
          css: '.slider.jsx-1340607723{position:absolute;width:100%;height:100%;overflow:hidden;top:0;}.sliderWrap.jsx-1340607723{position:relative;height:auto;background-size:cover;background-repeat:no-repeat;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.sliderWrap.sixteen.jsx-1340607723{padding-top:56.25%;}.sliderWrap.standard.jsx-1340607723{padding-top:75%;}.sliderWrap.cropped.jsx-1340607723{padding-top:39.06%;}.sliderWrap.square.jsx-1340607723{padding-top:100%;}.sliderWrap.zoomedIn.jsx-1340607723{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.sliderWrap.noAspect.jsx-1340607723 .slider.jsx-1340607723{position:relative;width:100%;opacity:1;}'
        })
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;