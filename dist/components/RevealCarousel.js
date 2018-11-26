'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SliderArrows = require('./SliderArrows');

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Type = require('./Type');

var _aspectRatio = require('../utils/aspectRatio');

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
    _this.getCarouselStyle = _this.getCarouselStyle.bind(_this);
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
    key: 'getCarouselStyle',
    value: function getCarouselStyle(index) {
      var active = this.state.currentIndex;
      var prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.images.length - 1;
      var next = this.state.currentIndex + 1 <= this.props.images.length - 1 ? this.state.currentIndex + 1 : 0;
      switch (index) {
        case active:
          return {
            display: 'block',
            transition: 'none',
            zIndex: '7'
          };
        case prev:
          return {
            display: 'block',
            overflow: 'hidden',
            top: '0',
            zIndex: '9',
            transition: 'transform 0.5s',
            backfaceVisibility: 'hidden',
            transform: this.state.teaseState === 'tease-prev' ? 'translateX(-93%) translateZ(0' : 'translateX(-100%) translateZ(0)',
            width: '100%',
            boxShadow: this.state.teaseState === 'tease-prev' ? '2px 0px 30px 0px rgba(0,0,0,0.23)' : '2px 0px 30px 0px rgba(0,0,0,0)'
          };
        case next:
          return {
            display: 'block',
            overflow: 'hidden',
            top: '0',
            zIndex: this.state.teaseState === 'tease-next' ? '8' : '9',
            transition: 'transform 0.5s',
            transform: this.state.teaseState === 'tease-next' ? 'translateX(93%) translateZ(0)' : 'translateX(100%) translateZ(0)',
            boxShadow: this.state.teaseState === 'tease-next' ? '-2px 0px 30px 0px rgba(0,0,0,0.23)' : '-2px 0px 30px 0px rgba(0,0,0,0)'
          };
        default:
          return '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'figure',
        {
          style: {
            position: 'relative',
            width: '100%',
            height: '100%'
          },
          className: 'carouselWrapper ' + (this.props.fullBleed ? ' full-bleed' : '') + (this.props.caption && this.props.caption.length > 0 ? ' withCaption' : '') },
        _react2.default.createElement(
          'div',
          {
            style: {
              position: 'relative',
              height: '100%',
              width: '100%',
              overflow: 'hidden',
              touchAction: 'pan-y',
              userSelect: 'none',
              paddingTop: (0, _aspectRatio.getPaddingTop)(this.props.aspectRatio)
            },
            className: 'carousel__container ' + this.state.teaseState },
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
              style: {
                position: this.props.aspectRatio === 'noAspect' ? 'relative' : 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                transition: 'transform .3s ease, box-shadow .3s ease'
              },
              className: 'carousel__images-container' },
            this.props.images.map(function (image, i) {
              return _react2.default.createElement(
                'div',
                {
                  key: 'carouselImage' + i,
                  style: _extends({
                    display: 'none',
                    height: _this2.props.aspectRatio === 'noAspect' ? 'auto' : '100%',
                    width: _this2.props.aspectRatio === 'noAspect' ? 'auto' : '100%',
                    position: 'absolute',
                    zIndex: '3'
                  }, _this2.getCarouselStyle(i)) },
                _react2.default.createElement(_Slide2.default, { key: i, image: image, classAdd: 'carousel__image-wrapper', renderImage: _this2.props.aspectRatio === 'noAspect' })
              );
            })
          )
        ),
        this.props.caption && this.props.caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-3' },
          this.props.caption
        ) : ''
      );
    }
  }]);

  return RevealCarousel;
}(_react.Component);

exports.default = RevealCarousel;