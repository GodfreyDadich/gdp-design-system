'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Type = require('./Type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devices = {
  black: '%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201425.47%201028.76%22%3E%3Cstyle%3E.st0%7Bfill%3A%23222323%7D%3C/style%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M236.07%2018.54h-51.84c-2.4%200-4.34%201.95-4.34%204.34v.73h60.53v-.73C240.42%2020.48%20238.47%2018.54%20236.07%2018.54zM422.65%2018.54h-118.9c-2.4%200-4.34%201.95-4.34%204.34v.73h127.59v-.73C426.99%2020.48%20425.05%2018.54%20422.65%2018.54z%22/%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M1334.8%2C24.09L85.94%2C23.25c-37.04%2C0-67.07%2C30.03-67.07%2C67.07v855.53c0%2C37.04%2C30.03%2C67.07%2C67.07%2C67.07%20l1248.38%2C0.84c42.32%2C0%2C76.62-34.3%2C76.62-76.62v-836.9C1410.94%2C58.18%2C1376.85%2C24.09%2C1334.8%2C24.09z%20M1297.52%2C955.75H131.59V80.32%20h1165.93V955.75z%22/%3E%3Cpath%20d%3D%22M1334.8%2C24.09L85.94%2C23.25c-37.04%2C0-67.07%2C30.03-67.07%2C67.07v855.53c0%2C37.04%2C30.03%2C67.07%2C67.07%2C67.07%20l1248.38%2C0.84c42.32%2C0%2C76.62-34.3%2C76.62-76.62v-836.9C1410.94%2C58.18%2C1376.85%2C24.09%2C1334.8%2C24.09z%22%20fill%3D%22none%22%20stroke%3D%22%23404040%22%20stroke-width%3D%222%22/%3E%3Cpath%20d%3D%22M1357.92%2C561.08h-3.64c-8.65%2C0-15.66-7.01-15.66-15.66v-58.55c0-8.65%2C7.01-15.66%2C15.66-15.66h3.64%09c8.65%2C0%2C15.66%2C7.01%2C15.66%2C15.66v58.55C1373.58%2C554.07%2C1366.57%2C561.08%2C1357.92%2C561.08z%22%20fill%3D%22none%22%20stroke%3D%22%23262828%22%20stroke-width%3D%224%22%20stroke-miterlimit%3D%2210%22/%3E%3C/svg%3E',
  white: '%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201425.47%201028.76%22%3E%3Cstyle%3E.st0%7Bfill%3A%23fcfcfc%7D%3C/style%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M236.07%2018.54h-51.84c-2.4%200-4.34%201.95-4.34%204.34v.73h60.53v-.73C240.42%2020.48%20238.47%2018.54%20236.07%2018.54zM422.65%2018.54h-118.9c-2.4%200-4.34%201.95-4.34%204.34v.73h127.59v-.73C426.99%2020.48%20425.05%2018.54%20422.65%2018.54z%22/%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M1334.8%2C24.09L85.94%2C23.25c-37.04%2C0-67.07%2C30.03-67.07%2C67.07v855.53c0%2C37.04%2C30.03%2C67.07%2C67.07%2C67.07%20l1248.38%2C0.84c42.32%2C0%2C76.62-34.3%2C76.62-76.62v-836.9C1410.94%2C58.18%2C1376.85%2C24.09%2C1334.8%2C24.09z%20M1297.52%2C955.75H131.59V80.32%20h1165.93V955.75z%22/%3E%3Cpath%20d%3D%22M1334.8%2C24.09L85.94%2C23.25c-37.04%2C0-67.07%2C30.03-67.07%2C67.07v855.53c0%2C37.04%2C30.03%2C67.07%2C67.07%2C67.07%20l1248.38%2C0.84c42.32%2C0%2C76.62-34.3%2C76.62-72.69v-836.9C1410.94%2C58.18%2C1376.85%2C24.09%2C1334.8%2C24.09z%22%20fill%3D%22none%22%20stroke%3D%22%23f4f4f6%22%20stroke-width%3D%222%22/%3E%3Cpath%20d%3D%22M1357.92%2C561.08h-3.64c-8.65%2C0-15.66-7.01-15.66-15.66v-58.55c0-8.65%2C7.01-15.66%2C15.66-15.66h3.64%09c8.65%2C0%2C15.66%2C7.01%2C15.66%2C15.66v58.55C1373.58%2C554.07%2C1366.57%2C561.08%2C1357.92%2C561.08z%22%20fill%3D%22none%22%20stroke%3D%22%23fafafb%22%20stroke-width%3D%223%22/%3E%3C/svg%3E'
};

var Device = function Device(_ref) {
  var deviceColor = _ref.deviceColor,
      classAdd = _ref.classAdd,
      caption = _ref.caption,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: '' + classAdd + (caption && caption.length > 0 ? ' withCaption' : ''),
      style: {
        position: 'relative',
        backgroundImage: 'url(data:image/svg+xml,' + devices[deviceColor] + ')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        paddingTop: '71.59%'
      } },
    _react2.default.createElement(
      'div',
      { style: {
          position: 'absolute',
          top: '6.37%',
          left: '8.12%',
          width: '83.95%',
          height: '87.71%'
        } },
      children
    ),
    caption && caption.length > 0 ? _react2.default.createElement(
      _Type.Caption,
      { classAdd: 'col-6 skip-3' },
      caption
    ) : ''
  );
};

exports.default = Device;