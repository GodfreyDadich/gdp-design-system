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

var _SliderArrows = require('./SliderArrows');

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Type = require('./Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RevealCarousel = function (_Component) {
  _inherits(RevealCarousel, _Component);

  function RevealCarousel(props) {
    _classCallCheck(this, RevealCarousel);

    var _this = _possibleConstructorReturn(this, (RevealCarousel.__proto__ || Object.getPrototypeOf(RevealCarousel)).call(this, props));

    _this.state = {
      currentIndex: 0,
      teaseState: ''
    };
    _this.goToNextSlide = _this.goToNextSlide.bind(_this);
    _this.goToPrevSlide = _this.goToPrevSlide.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.getCarouselClass = _this.getCarouselClass.bind(_this);
    _this.hoverTeasePrev = _this.hoverTeasePrev.bind(_this);
    _this.hoverTeaseNext = _this.hoverTeaseNext.bind(_this);
    _this.hoverTeaseReset = _this.hoverTeaseReset.bind(_this);
    return _this;
  }

  _createClass(RevealCarousel, [{
    key: 'goToPrevSlide',
    value: function goToPrevSlide() {
      if (this.state.currentIndex === 0) {
        return this.setState({
          currentIndex: this.props.images.length - 1,
          teaseState: ''
        });
      }

      this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          teaseState: ''
        };
      });
    }
  }, {
    key: 'goToNextSlide',
    value: function goToNextSlide() {
      if (this.state.currentIndex === this.props.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          teaseState: ''
        });
      }

      this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          teaseState: ''
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown, false);
    }
  }, {
    key: 'hoverTeasePrev',
    value: function hoverTeasePrev() {
      this.setState({
        teaseState: 'tease-prev'
      });
    }
  }, {
    key: 'hoverTeaseNext',
    value: function hoverTeaseNext() {
      this.setState({
        teaseState: 'tease-next'
      });
    }
  }, {
    key: 'hoverTeaseReset',
    value: function hoverTeaseReset() {
      this.setState({
        teaseState: ''
      });
    }
  }, {
    key: 'getCarouselClass',
    value: function getCarouselClass(index) {
      var active = this.state.currentIndex;
      var prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.images.length - 1;
      var next = this.state.currentIndex + 1 <= this.props.images.length - 1 ? this.state.currentIndex + 1 : 0;
      switch (index) {
        case active:
          return 'carousel__image active';
        case prev:
          return 'carousel__image prev';
        case next:
          return 'carousel__image next';
        default:
          return 'carousel__image';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'figure',
        {
          className: 'jsx-4056277571' + ' ' + ('carouselWrapper ' + (this.props.fullBleed ? ' full-bleed' : '') + (this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''))
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-4056277571' + ' ' + ('carousel__container ' + this.props.aspectRatio + ' ' + this.state.teaseState)
          },
          _react2.default.createElement(_SliderArrows.LeftArrow, {
            clickAction: this.goToPrevSlide,
            over: this.hoverTeasePrev,
            out: this.hoverTeaseReset
          }),
          _react2.default.createElement(_SliderArrows.RightArrow, {
            clickAction: this.goToNextSlide,
            over: this.hoverTeaseNext,
            out: this.hoverTeaseReset
          }),
          _react2.default.createElement(
            'div',
            {
              className: 'jsx-4056277571' + ' ' + 'carousel__images-container'
            },
            this.props.images.map(function (image, i) {
              return _react2.default.createElement(
                'div',
                { key: 'carouselImage' + i, className: 'jsx-4056277571' + ' ' + (_this2.getCarouselClass(i) || '')
                },
                _react2.default.createElement(_Slide2.default, { key: i, image: image, classAdd: 'carousel__image-wrapper', renderImage: _this2.props.aspectRatio === 'noAspect' })
              );
            })
          )
        ),
        this.props.caption && this.props.caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-3' },
          this.props.caption
        ) : '',
        _react2.default.createElement(_style2.default, {
          styleId: '4056277571',
          css: '.carouselWrapper.jsx-4056277571{position:relative;width:100%;height:100%;}.carousel__container.jsx-4056277571{position:relative;height:100%;width:100%;overflow:hidden;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}.carousel__container.sixteen.jsx-4056277571{padding-top:56.25%;}.carousel__container.standard.jsx-4056277571{padding-top:75%;}.carousel__container.cropped.jsx-4056277571{padding-top:41.67%;}.carousel__container.square.jsx-4056277571{padding-top:100%;}.carousel__container.zoomedIn.jsx-4056277571{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.carousel__container.noAspect.jsx-4056277571 .carousel__images-container.jsx-4056277571{position:relative;width:100%;}.carousel__container.noAspect.jsx-4056277571 .carousel__images-container.jsx-4056277571 .carousel__image.jsx-4056277571{height:auto;width:auto;}.carousel__container.tease-next.jsx-4056277571 .next.jsx-4056277571{z-index:8;-webkit-transform:translateX(93%) translateZ(0);-ms-transform:translateX(93%) translateZ(0);transform:translateX(93%) translateZ(0);}.carousel__container.tease-prev.jsx-4056277571 .prev.jsx-4056277571{-webkit-transform:translateX(-93%) translateZ(0);-ms-transform:translateX(-93%) translateZ(0);transform:translateX(-93%) translateZ(0);}.carousel__images-container.jsx-4056277571{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transition:-webkit-transform .3s ease;-webkit-transition:transform .3s ease;transition:transform .3s ease;}.carousel__image.jsx-4056277571{display:none;height:100%;position:absolute;width:100%;z-index:3;}.carousel__image.active.jsx-4056277571{display:block;-webkit-transition:none;transition:none;z-index:7;}.carousel__image.prev.jsx-4056277571,.carousel__image.next.jsx-4056277571{display:block;overflow:hidden;top:0;z-index:9;-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;}.carousel__image.prev.jsx-4056277571{-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateX(-100%) translateZ(0);-ms-transform:translateX(-100%) translateZ(0);transform:translateX(-100%) translateZ(0);width:100%;}.carousel__image.next.jsx-4056277571{-webkit-transform:translateX(100%) translateZ(0);-ms-transform:translateX(100%) translateZ(0);transform:translateX(100%) translateZ(0);}'
        })
      );
    }
  }]);

  return RevealCarousel;
}(_react.Component);

exports.default = RevealCarousel;