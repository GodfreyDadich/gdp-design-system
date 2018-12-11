"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader() {
  return _react2.default.createElement(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1080 1080", className: "jsx-593601611" + " " + "loader"
    },
    _react2.default.createElement(
      "defs",
      {
        className: "jsx-593601611"
      },
      _react2.default.createElement(
        "clipPath",
        { id: "a", className: "jsx-593601611"
        },
        _react2.default.createElement("path", { d: "M336.34,931.6a1.86,1.86,0,0,1-1.9-1.91V411.37a1.86,1.86,0,0,1,1.9-1.9H484.5c144.18,0,261.06,116.88,261.06,261.06S628.68,931.6,484.5,931.6Z", fill: "none", className: "jsx-593601611"
        })
      )
    ),
    _react2.default.createElement("path", { d: "M540,1080c298.23,0,540-241.77,540-540S838.23,0,540,0,0,241.77,0,540s241.77,540,540,540", fill: "#00ad68", className: "jsx-593601611"
    }),
    _react2.default.createElement("path", { id: "dadich", d: "M336.34,931.6a1.86,1.86,0,0,1-1.9-1.91V411.37a1.86,1.86,0,0,1,1.9-1.9H484.5c144.18,0,261.06,116.88,261.06,261.06S628.68,931.6,484.5,931.6Z", fill: "#fff", className: "jsx-593601611"
    }),
    _react2.default.createElement("path", { id: "godfrey", d: "M743.66,148.4a1.86,1.86,0,0,1,1.9,1.91V668.63a1.86,1.86,0,0,1-1.9,1.9H595.5c-144.18,0-261.06-116.88-261.06-261.06S451.32,148.4,595.5,148.4Z", className: "jsx-593601611"
    }),
    _react2.default.createElement(
      "g",
      { clipPath: "url(#a)", id: "blue-chip", className: "jsx-593601611"
      },
      _react2.default.createElement("path", { d: "M743.66,148.4a1.86,1.86,0,0,1,1.9,1.91V668.63a1.86,1.86,0,0,1-1.9,1.9H595.5c-144.18,0-261.06-116.88-261.06-261.06S451.32,148.4,595.5,148.4Z", fill: "#0c8f93", className: "jsx-593601611"
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: "593601611",
      css: ".loader.jsx-593601611{position:relative;display:block;width:100px;margin:0 auto;top:calc( 50% - 100px);}#dadich.jsx-593601611{-webkit-animation:rotateForward-jsx-593601611 2.5s infinite ease-out;animation:rotateForward-jsx-593601611 2.5s infinite ease-out;-webkit-transform-origin:53% 63%;-ms-transform-origin:53% 63%;transform-origin:53% 63%;}#godfrey.jsx-593601611{-webkit-animation:rotateForward-jsx-593601611 2.5s infinite ease-out;animation:rotateForward-jsx-593601611 2.5s infinite ease-out;-webkit-transform-origin:50% 40%;-ms-transform-origin:50% 40%;transform-origin:50% 40%;}#blue-chip.jsx-593601611{-webkit-animation:fadeInOut-jsx-593601611 2.5s infinite ease-out;animation:fadeInOut-jsx-593601611 2.5s infinite ease-out;}@-webkit-keyframes rotateForward-jsx-593601611{0%{-webkit-transform:rotate(-359deg);-ms-transform:rotate(-359deg);transform:rotate(-359deg);}33%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}}@keyframes rotateForward-jsx-593601611{0%{-webkit-transform:rotate(-359deg);-ms-transform:rotate(-359deg);transform:rotate(-359deg);}33%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}}@-webkit-keyframes fadeInOut-jsx-593601611{0%{opacity:0;}31%{opacity:0;}40%{opacity:1;}100%{opacity:1;}}@keyframes fadeInOut-jsx-593601611{0%{opacity:0;}31%{opacity:0;}40%{opacity:1;}100%{opacity:1;}}"
    })
  );
};

exports.default = Loader;