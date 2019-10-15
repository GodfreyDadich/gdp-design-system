'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RevealLeftArrow = exports.RevealRightArrow = exports.AltLeftArrow = exports.AltRightArrow = exports.LeftArrow = exports.RightArrow = undefined;

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightArrow = exports.RightArrow = function RightArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'nextArrow',
      onClick: props.clickAction,
      onMouseEnter: props.over,
      onMouseMove: props.over,
      onMouseLeave: props.out,
      style: {
        position: 'absolute',
        top: '0',
        right: '-31.4%',
        width: '40%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      } },
    _react2.default.createElement('i', { className: 'fa fa-arrow-right fa-2x', 'aria-hidden': 'true' })
  );
};

/*
  Pretend these are in their own separate files
*/

var LeftArrow = exports.LeftArrow = function LeftArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      className: 'backArrow',
      onClick: props.clickAction,
      onMouseEnter: props.over,
      onMouseMove: props.over,
      onMouseLeave: props.out,
      style: {
        position: 'absolute',
        top: '0',
        left: '-31.4%',
        width: '40%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      } },
    _react2.default.createElement('i', { className: 'fa fa-arrow-left fa-2x', 'aria-hidden': 'true' })
  );
};

var AltRightArrow = exports.AltRightArrow = function AltRightArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      onClick: props.clickAction,
      onMouseEnter: props.over,
      onMouseMove: props.over,
      onMouseLeave: props.out,
      style: {
        position: 'absolute',
        top: '0',
        right: '-15%',
        width: '40%',
        height: '100%',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }, className: _style2.default.dynamic([['3249456594', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'nextArrow'
    },
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['3249456594', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'right-arrow-wrapper'
      },
      _react2.default.createElement('i', {
        className: _style2.default.dynamic([['3249456594', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'right-arrow-head'
      }),
      _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3249456594', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'right-arrow-body'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3249456594',
      css: '.right-arrow-wrapper.__jsx-style-dynamic-selector{position:absolute;top:50%;margin:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:15%;}.right-arrow-head.__jsx-style-dynamic-selector{border:solid ' + (props.view === 'lightMode' ? 'black' : 'white') + ';border-width:0 1px 1px 0;display:inline-block;padding:3px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.right-arrow-body.__jsx-style-dynamic-selector{height:18px;width:1px;background-color:' + (props.view === 'lightMode' ? 'black' : 'white') + ';margin-right:1px;-webkit-transform:translate(-3px,-18.58px) rotate(-90deg);-ms-transform:translate(-3px,-18.58px) rotate(-90deg);transform:translate(-3px,-18.58px) rotate(-90deg);}',
      dynamic: [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']
    })
  );
};

var AltLeftArrow = exports.AltLeftArrow = function AltLeftArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      onClick: props.clickAction,
      onMouseEnter: props.over,
      onMouseMove: props.over,
      onMouseLeave: props.out,
      style: {
        position: 'absolute',
        top: '0',
        left: '-15%',
        width: '40%',
        height: '100%',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      },
      className: _style2.default.dynamic([['3521652068', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'backArrow'
    },
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['3521652068', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'left-arrow-wrapper'
      },
      _react2.default.createElement('i', {
        className: _style2.default.dynamic([['3521652068', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'left-arrow-head'
      }),
      _react2.default.createElement('div', {
        className: _style2.default.dynamic([['3521652068', [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']]]) + ' ' + 'left-arrow-body'
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '3521652068',
      css: '.left-arrow-wrapper.__jsx-style-dynamic-selector{position:absolute;top:50%;margin:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:15%;}.left-arrow-head.__jsx-style-dynamic-selector{border:solid ' + (props.view === 'lightMode' ? 'black' : 'white') + ';border-width:0 1px 1px 0;display:inline-block;padding:3px;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);}.left-arrow-body.__jsx-style-dynamic-selector{height:18px;width:1px;background-color:' + (props.view === 'lightMode' ? 'black' : 'white') + ';margin-left:1px;-webkit-transform:translate(8px,-18.58px) rotate(90deg);-ms-transform:translate(8px,-18.58px) rotate(90deg);transform:translate(8px,-18.58px) rotate(90deg);}',
      dynamic: [props.view === 'lightMode' ? 'black' : 'white', props.view === 'lightMode' ? 'black' : 'white']
    })
  );
};

var RevealRightArrow = exports.RevealRightArrow = function RevealRightArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      onClick: props.clickAction,
      onMouseEnter: props.over,
      onMouseMove: props.over,
      onMouseLeave: props.out,
      style: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '40%',
        height: '100%',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }, className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]]) + ' ' + 'nextArrow'
    },
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]]) + ' ' + 'right-arrow-wrapper'
      },
      _react2.default.createElement(
        'svg',
        { width: '17', height: '22', viewBox: '0 0 17 22', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
        },
        _react2.default.createElement(
          'g',
          { filter: 'url(#filter0_d)', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
          },
          _react2.default.createElement(
            'mask',
            { id: 'path-1-inside-1', fill: 'white', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            },
            _react2.default.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M7.06246 10.9012L12.0122 15.851L10.598 17.2652L4.94114 11.6083L4.23403 10.9012L4.94114 10.1941L10.598 4.53725L12.0122 5.95146L7.06246 10.9012Z', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            })
          ),
          _react2.default.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M7.06246 10.9012L12.0122 15.851L10.598 17.2652L4.94114 11.6083L4.23403 10.9012L4.94114 10.1941L10.598 4.53725L12.0122 5.95146L7.06246 10.9012Z', fill: 'white', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
          }),
          _react2.default.createElement('path', { d: 'M12.0122 15.851L13.4264 17.2652L14.8406 15.851L13.4264 14.4367L12.0122 15.851ZM7.06246 10.9012L5.64825 9.48699L4.23403 10.9012L5.64825 12.3154L7.06246 10.9012ZM10.598 17.2652L9.18378 18.6794L10.598 20.0936L12.0122 18.6794L10.598 17.2652ZM4.23403 10.9012L2.81982 9.48699L1.40561 10.9012L2.81982 12.3154L4.23403 10.9012ZM4.94114 10.1941L6.35535 11.6083L4.94114 10.1941ZM10.598 4.53725L12.0122 3.12303L10.598 1.70882L9.18378 3.12303L10.598 4.53725ZM12.0122 5.95146L13.4264 7.36567L14.8406 5.95146L13.4264 4.53725L12.0122 5.95146ZM13.4264 14.4367L8.47667 9.48699L5.64825 12.3154L10.598 17.2652L13.4264 14.4367ZM12.0122 18.6794L13.4264 17.2652L10.598 14.4367L9.18378 15.851L12.0122 18.6794ZM3.52693 13.0225L9.18378 18.6794L12.0122 15.851L6.35535 10.1941L3.52693 13.0225ZM2.81982 12.3154L3.52693 13.0225L6.35535 10.1941L5.64825 9.48699L2.81982 12.3154ZM3.52693 8.77989L2.81982 9.48699L5.64825 12.3154L6.35535 11.6083L3.52693 8.77989ZM9.18378 3.12303L3.52693 8.77989L6.35535 11.6083L12.0122 5.95146L9.18378 3.12303ZM13.4264 4.53725L12.0122 3.12303L9.18378 5.95146L10.598 7.36567L13.4264 4.53725ZM8.47667 12.3154L13.4264 7.36567L10.598 4.53725L5.64825 9.48699L8.47667 12.3154Z', fill: 'white', mask: 'url(#path-1-inside-1)', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
          })
        ),
        _react2.default.createElement(
          'defs',
          {
            className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
          },
          _react2.default.createElement(
            'filter',
            { id: 'filter0_d', x: '0.234009', y: '0.537245', width: '15.7782', height: '20.7279', filterUnits: 'userSpaceOnUse', colorInterpolationFilters: 'sRGB', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            },
            _react2.default.createElement('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feColorMatrix', { 'in': 'SourceAlpha', type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feOffset', {
              className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feGaussianBlur', { stdDeviation: '2', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feColorMatrix', { type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feBlend', { mode: 'normal', in2: 'BackgroundImageFix', result: 'effect1_dropShadow', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feBlend', { mode: 'normal', 'in': 'SourceGraphic', in2: 'effect1_dropShadow', result: 'shape', className: _style2.default.dynamic([['2788233467', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            })
          )
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '2788233467',
      css: 'svg.__jsx-style-dynamic-selector{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);' + (props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '') + ';}.right-arrow-wrapper.__jsx-style-dynamic-selector{position:absolute;top:50%;margin:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:10%;}',
      dynamic: [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']
    })
  );
};

var RevealLeftArrow = exports.RevealLeftArrow = function RevealLeftArrow(props) {
  return _react2.default.createElement(
    'div',
    {
      onClick: props.clickAction,
      onMouseEnter: props.over,
      onMouseMove: props.over,
      onMouseLeave: props.out,
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '40%',
        height: '100%',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      },
      className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]]) + ' ' + 'backArrow'
    },
    _react2.default.createElement(
      'div',
      {
        className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]]) + ' ' + 'left-arrow-wrapper'
      },
      _react2.default.createElement(
        'svg',
        { width: '17', height: '22', viewBox: '0 0 17 22', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
        },
        _react2.default.createElement(
          'g',
          { filter: 'url(#filter0_d)', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
          },
          _react2.default.createElement(
            'mask',
            { id: 'path-1-inside-1', fill: 'white', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            },
            _react2.default.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M7.06246 10.9012L12.0122 15.851L10.598 17.2652L4.94114 11.6083L4.23403 10.9012L4.94114 10.1941L10.598 4.53725L12.0122 5.95146L7.06246 10.9012Z', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            })
          ),
          _react2.default.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M7.06246 10.9012L12.0122 15.851L10.598 17.2652L4.94114 11.6083L4.23403 10.9012L4.94114 10.1941L10.598 4.53725L12.0122 5.95146L7.06246 10.9012Z', fill: 'white', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
          }),
          _react2.default.createElement('path', { d: 'M12.0122 15.851L13.4264 17.2652L14.8406 15.851L13.4264 14.4367L12.0122 15.851ZM7.06246 10.9012L5.64825 9.48699L4.23403 10.9012L5.64825 12.3154L7.06246 10.9012ZM10.598 17.2652L9.18378 18.6794L10.598 20.0936L12.0122 18.6794L10.598 17.2652ZM4.23403 10.9012L2.81982 9.48699L1.40561 10.9012L2.81982 12.3154L4.23403 10.9012ZM4.94114 10.1941L6.35535 11.6083L4.94114 10.1941ZM10.598 4.53725L12.0122 3.12303L10.598 1.70882L9.18378 3.12303L10.598 4.53725ZM12.0122 5.95146L13.4264 7.36567L14.8406 5.95146L13.4264 4.53725L12.0122 5.95146ZM13.4264 14.4367L8.47667 9.48699L5.64825 12.3154L10.598 17.2652L13.4264 14.4367ZM12.0122 18.6794L13.4264 17.2652L10.598 14.4367L9.18378 15.851L12.0122 18.6794ZM3.52693 13.0225L9.18378 18.6794L12.0122 15.851L6.35535 10.1941L3.52693 13.0225ZM2.81982 12.3154L3.52693 13.0225L6.35535 10.1941L5.64825 9.48699L2.81982 12.3154ZM3.52693 8.77989L2.81982 9.48699L5.64825 12.3154L6.35535 11.6083L3.52693 8.77989ZM9.18378 3.12303L3.52693 8.77989L6.35535 11.6083L12.0122 5.95146L9.18378 3.12303ZM13.4264 4.53725L12.0122 3.12303L9.18378 5.95146L10.598 7.36567L13.4264 4.53725ZM8.47667 12.3154L13.4264 7.36567L10.598 4.53725L5.64825 9.48699L8.47667 12.3154Z', fill: 'white', mask: 'url(#path-1-inside-1)', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
          })
        ),
        _react2.default.createElement(
          'defs',
          {
            className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
          },
          _react2.default.createElement(
            'filter',
            { id: 'filter0_d', x: '0.234009', y: '0.537245', width: '15.7782', height: '20.7279', filterUnits: 'userSpaceOnUse', colorInterpolationFilters: 'sRGB', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            },
            _react2.default.createElement('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feColorMatrix', { 'in': 'SourceAlpha', type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feOffset', {
              className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feGaussianBlur', { stdDeviation: '2', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feColorMatrix', { type: 'matrix', values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feBlend', { mode: 'normal', in2: 'BackgroundImageFix', result: 'effect1_dropShadow', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            }),
            _react2.default.createElement('feBlend', { mode: 'normal', 'in': 'SourceGraphic', in2: 'effect1_dropShadow', result: 'shape', className: _style2.default.dynamic([['2852704700', [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']]])
            })
          )
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: '2852704700',
      css: '.left-arrow-wrapper.__jsx-style-dynamic-selector{position:absolute;top:50%;margin:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:10%;}svg.__jsx-style-dynamic-selector{' + (props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '') + ';}',
      dynamic: [props.clickedArrow ? 'opacity: .5; transition: opacity .1s ease' : '']
    })
  );
};