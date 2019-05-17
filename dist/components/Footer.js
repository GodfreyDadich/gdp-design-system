'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NarrationBlock = function NarrationBlock(_ref) {
  var title1 = _ref.title1,
      subtitle1 = _ref.subtitle1,
      title2 = _ref.title2,
      subtitle2 = _ref.subtitle2;
  return _react2.default.createElement(
    'div',
    {
      className: 'jsx-3760246767' + ' ' + 'footer'
    },
    'SCROLL DOWN',
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-3760246767' + ' ' + 'footer__container'
      },
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-3760246767' + ' ' + 'footer__elem'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-3760246767' + ' ' + 'footer__elem__text'
          },
          _react2.default.createElement(
            'p',
            { style: { fontSize: '1.5vw', lineHeight: '1.9vw' }, className: 'jsx-3760246767' + ' ' + 'footer__elem__title'
            },
            title1
          ),
          _react2.default.createElement(
            'p',
            { style: { fontSize: '1.5vw', lineHeight: '1.9vw', width: '26vw' }, className: 'jsx-3760246767' + ' ' + 'footer__elem__subtitle'
            },
            subtitle1
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'jsx-3760246767' + ' ' + 'footer__elem__readLink'
            },
            'READ MORE'
          )
        )
      ),
      _react2.default.createElement('div', {
        className: 'jsx-3760246767' + ' ' + 'footer__container__separator'
      }),
      _react2.default.createElement(
        'div',
        {
          className: 'jsx-3760246767' + ' ' + 'footer__elem'
        },
        _react2.default.createElement(
          'div',
          {
            className: 'jsx-3760246767' + ' ' + 'footer__elem__text'
          },
          _react2.default.createElement(
            'p',
            { style: { fontSize: '1.5vw', lineHeight: '1.9vw' }, className: 'jsx-3760246767' + ' ' + 'footer__elem__title'
            },
            title2
          ),
          _react2.default.createElement(
            'p',
            { style: { fontSize: '1.5vw', lineHeight: '1.9vw', width: '26vw' }, className: 'jsx-3760246767' + ' ' + 'footer__elem__subtitle'
            },
            subtitle2
          ),
          _react2.default.createElement(
            'a',
            {
              className: 'jsx-3760246767' + ' ' + 'footer__elem__readLink'
            },
            'READ MORE'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'jsx-3760246767' + ' ' + 'bottomRight'
      },
      _react2.default.createElement(
        'a',
        {
          className: 'jsx-3760246767' + ' ' + 'bottomRight__link'
        },
        'Get in Touch'
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3760246767',
      css: '.footer.jsx-3760246767{bottom:0;position:absolute;width:100%;height:2.5rem;}.footer.jsx-3760246767 .footer__container.jsx-3760246767{width:100%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding-bottom:5px;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.footer.jsx-3760246767 .footer__container.jsx-3760246767 .footer__container__separator.jsx-3760246767{margin-left:.7vw;margin-right:.7vw;background-color:grey;width:2px;margin-bottom:18px;}.footer.jsx-3760246767 .footer__container.jsx-3760246767 .footer__elem.jsx-3760246767{border-top:solid 1px grey;height:26vw;width:100%;padding-top:13px;}.footer.jsx-3760246767 .footer__container.jsx-3760246767 .footer__elem__text.jsx-3760246767{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#F2F2F2;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:25vw;margin:auto;padding-left:4vw;font-family:Atlas Grotesk;}.footer.jsx-3760246767 .footer__container.jsx-3760246767 .footer__elem__text.jsx-3760246767 .footer__elem__title.jsx-3760246767{color:#979797;margin-bottom:0px;margin-top:0px;}.footer.jsx-3760246767 .footer__container.jsx-3760246767 .footer__elem__text.jsx-3760246767 .footer__elem__subtitle.jsx-3760246767{margin-top:0px;}.footer.jsx-3760246767 .footer__container.jsx-3760246767 .footer__elem__text.jsx-3760246767 .footer__elem__readLink.jsx-3760246767{font-family:\'Institut\';font-weight:normal;font-style:normal;font-size:.8vw;line-height:1.33;-webkit-letter-spacing:1.92px;-moz-letter-spacing:1.92px;-ms-letter-spacing:1.92px;letter-spacing:1.92px;width:5.8vw;}.footer__container.jsx-3760246767:after{content:"";width:100%;height:3px;left:0;bottom:0;position:absolute;z-index:9;background:linear-gradient(to right,#48FF00 55%,#c0d6e4 45%);}.bottomRight.jsx-3760246767{padding-top:10px;width:115px;margin-left:auto;margin-right:0;}.bottomRight.jsx-3760246767 .bottomRight__link.jsx-3760246767{font-family:Atlas Grotesk;font-weight:800;font-size:15px;line-height:10px;width:115px;padding:0;margin-bottom:0px;margin-right:5px;}'
    })
  );
};

exports.default = NarrationBlock;