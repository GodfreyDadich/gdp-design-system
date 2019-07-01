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

var _Type = require('./Type');

var _aspectRatio = require('../utils/aspectRatio');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircularCarousel = function (_Component) {
  _inherits(CircularCarousel, _Component);

  function CircularCarousel(props) {
    _classCallCheck(this, CircularCarousel);

    var _this = _possibleConstructorReturn(this, (CircularCarousel.__proto__ || Object.getPrototypeOf(CircularCarousel)).call(this, props));

    _this.state = {
      currentIndex: 0,
      teaseState: '',
      direction: 'next',
      lastIndex: _this.props.children.length - 2
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

  _createClass(CircularCarousel, [{
    key: 'goToPrevSlide',
    value: function goToPrevSlide() {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          currentIndex: _this2.state.currentIndex === 0 ? _this2.props.children.length - 1 : prevState.currentIndex - 1,
          teaseState: '',
          direction: 'prev',
          lastIndex: prevState.lastIndex === 0 ? _this2.props.children.length - 1 : prevState.lastIndex - 1
        };
      });
    }
  }, {
    key: 'goToNextSlide',
    value: function goToNextSlide() {
      var _this3 = this;

      var nextSlide = this.state.currentIndex === this.props.children.length - 1 ? 0 : this.state.currentIndex + 1;

      this.setState(function (prevState) {
        return {
          currentIndex: nextSlide,
          teaseState: '',
          direction: 'next',
          lastIndex: prevState.lastIndex === _this3.props.children.length - 1 ? 0 : prevState.lastIndex + 1
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
      var prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.children.length - 1;
      var next = this.state.currentIndex + 1 <= this.props.children.length - 1 ? this.state.currentIndex + 1 : 0;
      var last = this.state.lastIndex;
      switch (index) {
        case active:
          return {
            opacity: '1',
            zIndex: '10'
          };
        case prev:
          return {
            opacity: '1',
            zIndex: this.state.direction === 'prev' ? '9' : '8',
            transition: this.state.direction === 'next' ? 'transform 0.75s' : this.state.teaseState === 'tease-prev' ? 'transform 0.5s' : 'none',
            transform: this.state.teaseState === 'tease-prev' ? 'translateX(-70%) translateZ(0) scale(0.8, 0.8)' : 'translateX(-75%) translateZ(0) scale(0.75, 0.75)'
          };
        case next:
          return {
            opacity: '1',
            zIndex: this.state.direction === 'next' ? '9' : '8',
            transition: this.state.direction === 'prev' ? 'transform 0.75s' : this.state.teaseState === 'tease-next' ? 'transform 0.5s' : 'none',
            transform: this.state.teaseState === 'tease-next' ? 'translateX(170%) translateZ(0) scale(0.8, 0.8)' : 'translateX(175%) translateZ(0) scale(0.75, 0.75)'
          };
        case last:
          return {
            opacity: '1',
            zIndex: '6',
            transition: 'transform 0.75s',
            transform: this.state.direction === 'prev' ? 'translateX(200%) translateZ(0) scale(0.5, 0.5)' : 'translateX(-100%) translateZ(0) scale(0.5, 0.5)'
          };
        default:
          return {
            opacity: '1',
            zIndex: '6',
            transition: 'none',
            transform: this.state.direction === 'prev' ? 'translateX(-75%) translateZ(0) scale(0.5, 0.5)' : 'translateX(175%) translateZ(0) scale(0.5, 0.5)'
          };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          fullBleed = _props.fullBleed,
          caption = _props.caption,
          aspectRatio = _props.aspectRatio,
          children = _props.children,
          classAdd = _props.classAdd;

      return _react2.default.createElement(
        'div',
        {
          style: _extends(style, {
            position: 'relative',
            overflow: 'visible'
          }),
          className: 'carouselWrapper ' + (fullBleed ? ' full-bleed' : '') + (caption && caption.length > 0 ? ' withCaption' : '') + (classAdd ? ' ' + classAdd : '') },
        _react2.default.createElement(
          'div',
          {
            style: {
              position: 'relative',
              height: '100%',
              width: '100%',
              overflow: 'visible',
              touchAction: 'pan-y',
              userSelect: 'none',
              paddingTop: (0, _aspectRatio.getPaddingTop)(aspectRatio),
              backgroundColor: 'rgb(242,242,242)'
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
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                transition: 'transform .3s ease, box-shadow .3s ease'
              },
              className: 'carousel__images-container' },
            children.map(function (child, i) {
              return _react2.default.createElement(
                'div',
                {
                  key: 'carouselImage' + i,
                  style: _extends({
                    display: 'block',
                    width: '50%',
                    verticalAlign: 'middle',
                    position: 'absolute',
                    transform: 'translateX(50%)',
                    transition: 'transform 0.75s',
                    zIndex: '3',
                    top: '15%'
                  }, _this4.getCarouselStyle(i)) },
                _react2.default.cloneElement(child, { active: _this4.state.currentIndex === i })
              );
            })
          )
        ),
        caption && caption.length > 0 ? _react2.default.createElement(
          _Type.Caption,
          { classAdd: 'col-6 skip-3 col-6-tab skip-1-tab' },
          caption
        ) : ''
      );
    }
  }]);

  return CircularCarousel;
}(_react.Component);

exports.default = CircularCarousel;