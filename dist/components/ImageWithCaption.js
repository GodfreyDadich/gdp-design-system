'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageWithCaption = function ImageWithCaption(props) {
  return _react2.default.createElement(
    'figure',
    {
      className: 'jsx-336052325' + ' ' + ('figureWithCaption caption-' + props.captionLocation)
    },
    props.captionLocation.startsWith('top') || props.captionLocation.startsWith('left') ? _react2.default.createElement(
      'figcaption',
      {
        className: 'jsx-336052325' + ' ' + 'captionText'
      },
      props.caption
    ) : '',
    _react2.default.createElement(_Image2.default, _extends({
      classAdd: 'withCaption'
    }, props)),
    props.captionLocation.startsWith('bottom') || props.captionLocation.startsWith('right') ? _react2.default.createElement(
      'figcaption',
      {
        className: 'jsx-336052325' + ' ' + 'captionText'
      },
      props.caption
    ) : '',
    _react2.default.createElement(_style2.default, {
      styleId: '336052325',
      css: '.figureWithCaption.jsx-336052325{margin:0;position:relative;}.figureWithCaption.jsx-336052325 .captionText.jsx-336052325{display:inline-block;width:33%;font-size:11px;vertical-align:top;}.figureWithCaption.jsx-336052325 .withCaption.jsx-336052325{display:inline-block;vertical-align:top;}.caption-topRight.jsx-336052325 .captionText.jsx-336052325,.caption-bottomRight.jsx-336052325 .captionText.jsx-336052325{float:right;}.caption-leftBottom.jsx-336052325,.caption-leftTop.jsx-336052325,.caption-rightTop.jsx-336052325,.caption-rightBottom.jsx-336052325{width:66%;}.caption-leftBottom.jsx-336052325 .captionText.jsx-336052325,.caption-leftTop.jsx-336052325 .captionText.jsx-336052325,.caption-rightTop.jsx-336052325 .captionText.jsx-336052325,.caption-rightBottom.jsx-336052325 .captionText.jsx-336052325{position:absolute;top:0;left:0;}.caption-leftTop.jsx-336052325,.caption-leftBottom.jsx-336052325{padding-left:33%;}.caption-leftBottom.jsx-336052325 .captionText.jsx-336052325{top:auto;bottom:0;}.caption-rightTop.jsx-336052325,.caption-rightBottom.jsx-336052325{padding-right:33%;}.caption-rightTop.jsx-336052325 .captionText.jsx-336052325,.caption-rightBottom.jsx-336052325 .captionText.jsx-336052325{right:0;left:auto;}.caption-rightBottom.jsx-336052325 .captionText.jsx-336052325{top:auto;bottom:0;}'
    })
  );
};

exports.default = ImageWithCaption;