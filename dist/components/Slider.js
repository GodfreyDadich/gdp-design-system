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
    key: 'goToSlide',
    value: function goToSlide(slideNum, clickRef) {
      var _this4 = this;

      console.log(clickRef);
      if (slideNum !== this.state.currentIndex) {
        this.setState(function () {
          return {
            currentIndex: slideNum,
            translateValue: -(slideNum * _this4.slideWidth())
          };
        });
      }
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
    key: 'currentDot',
    value: function currentDot(index) {
      return this.state.currentIndex === index ? 'current' : '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        {
          className: 'jsx-1692029130' + ' ' + ('sliderWrap ' + this.props.aspectRatio)
        },
        _react2.default.createElement(
          'div',
          { style: { width: '100%', height: '100%', overflow: 'hidden' }, onKeyDown: this.onKeyDown, className: 'jsx-1692029130' + ' ' + 'slider'
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
              }, className: 'jsx-1692029130' + ' ' + 'slider-wrapper'
            },
            this.props.images.map(function (image, i) {
              return _react2.default.createElement(_Slide2.default, { key: i, image: image, renderImage: _this5.props.aspectRatio === 'noAspect' });
            })
          ),
          _react2.default.createElement(
            'ul',
            {
              className: 'jsx-1692029130' + ' ' + 'slideDots'
            },
            this.props.images.map(function (image, i) {
              return _react2.default.createElement('li', { key: 'slide-dot-for-' + i, onClick: function onClick() {
                  return _this5.goToSlide(i);
                }, className: 'jsx-1692029130' + ' ' + ('slideDot ' + _this5.currentDot(i))
              });
            })
          ),
          _react2.default.createElement(_SliderArrows.LeftArrow, { clickAction: this.goToPrevSlide }),
          _react2.default.createElement(_SliderArrows.RightArrow, { clickAction: this.goToNextSlide })
        ),
        _react2.default.createElement(_style2.default, {
          styleId: '1692029130',
          css: '.slider.jsx-1692029130{position:absolute;width:100%;height:100%;overflow:hidden;top:0;}.sliderWrap.jsx-1692029130{position:relative;height:auto;background-size:cover;background-repeat:no-repeat;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.sliderWrap.sixteen.jsx-1692029130{padding-top:56.25%;}.sliderWrap.standard.jsx-1692029130{padding-top:75%;}.sliderWrap.cropped.jsx-1692029130{padding-top:39.06%;}.sliderWrap.square.jsx-1692029130{padding-top:100%;}.sliderWrap.zoomedIn.jsx-1692029130{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.sliderWrap.noAspect.jsx-1692029130 .slider.jsx-1692029130{position:relative;width:100%;opacity:1;}.slideDots.jsx-1692029130{position:absolute;bottom:10px;width:100%;padding:0;margin:0;text-align:center;z-index:102;}.slideDot.jsx-1692029130{position:relative;display:inline-block;width:10px;height:10px;border-radius:50%;border:1px solid #fff;margin:0 5px;box-shadow:2px 2px 5px rgba(0,0,0,0.2);}.slideDot.jsx-1692029130:hover.jsx-1692029130:before,.slideDot.current.jsx-1692029130:before{content:\'\';position:absolute;top:2px;left:2px;width:6px;height:6px;background-color:#fff;border-radius:50%;box-shadow:2px 2px 5px rgba(0,0,0,0.2);}'
        })
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;