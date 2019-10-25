"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GDPColors = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles.json"));

var _color = require("../utils/color");

var _colors = _interopRequireDefault(require("../styles/colors"));

var _default = {
  title: 'Design System|Colors'
};
exports["default"] = _default;

var GDPColors = function GDPColors() {
  var borderColor = (0, _color.rgba)(_colors["default"].textSecondary, 0.2);
  var textColors = [];
  var primaryColors = [];
  var gilmoreColors = [];
  var uiColors = [];
  Object.keys(_colors["default"]).forEach(function (name) {
    if (name.includes('text')) {
      textColors.push(_react["default"].createElement("div", {
        style: {
          marginBottom: '5px',
          marginTop: '5px'
        }
      }, _react["default"].createElement("div", {
        style: {
          backgroundColor: _colors["default"][name],
          borderColor: _colors["default"][name] === '#fff' ? borderColor : 'transparent',
          borderStyle: 'solid',
          borderWidth: '1px',
          display: 'inline-block',
          height: '30px',
          marginRight: '10px',
          width: '30px',
          borderRadius: '10%'
        }
      }), _react["default"].createElement("pre", {
        style: {
          display: 'inline-block',
          fontSize: '14px',
          lineHeight: '30px'
        }
      }, _react["default"].createElement("span", {
        style: {
          display: 'inline-block',
          width: '250px'
        }
      }, _react["default"].createElement("span", {
        style: {
          userSelect: 'none'
        }
      }, _colors["default"][name])), _react["default"].createElement("span", null, name))));
    }

    if (name.includes('UI')) {
      uiColors.push(_react["default"].createElement("div", {
        style: {
          marginBottom: '5px',
          marginTop: '5px'
        }
      }, _react["default"].createElement("div", {
        style: {
          backgroundColor: _colors["default"][name],
          borderColor: _colors["default"][name] === '#fff' ? borderColor : 'transparent',
          borderStyle: 'solid',
          borderWidth: '1px',
          display: 'inline-block',
          height: '30px',
          marginRight: '10px',
          width: '30px',
          borderRadius: '10%'
        }
      }), _react["default"].createElement("pre", {
        style: {
          display: 'inline-block',
          fontSize: '14px',
          lineHeight: '30px'
        }
      }, _react["default"].createElement("span", {
        style: {
          display: 'inline-block',
          width: '250px'
        }
      }, _react["default"].createElement("span", {
        style: {
          userSelect: 'none'
        }
      }, _colors["default"][name])), _react["default"].createElement("span", null, name))));
    }

    if (name.includes('gdpPrimary')) {
      primaryColors.push(_react["default"].createElement("div", {
        style: {
          marginBottom: '5px',
          marginTop: '5px'
        }
      }, _react["default"].createElement("div", {
        style: {
          backgroundColor: _colors["default"][name],
          borderColor: _colors["default"][name] === '#fff' ? borderColor : 'transparent',
          borderStyle: 'solid',
          borderWidth: '1px',
          display: 'inline-block',
          height: '30px',
          marginRight: '10px',
          width: '30px',
          borderRadius: '10%'
        }
      }), _react["default"].createElement("pre", {
        style: {
          display: 'inline-block',
          fontSize: '14px',
          lineHeight: '30px'
        }
      }, _react["default"].createElement("span", {
        style: {
          display: 'inline-block',
          width: '250px'
        }
      }, _react["default"].createElement("span", {
        style: {
          userSelect: 'none'
        }
      }, _colors["default"][name])), _react["default"].createElement("span", null, name))));
    }

    if (name.includes('gilmore')) {
      gilmoreColors.push(_react["default"].createElement("div", {
        style: {
          marginBottom: '5px',
          marginTop: '5px'
        }
      }, _react["default"].createElement("div", {
        style: {
          backgroundColor: _colors["default"][name],
          borderColor: _colors["default"][name] === '#fff' ? borderColor : 'transparent',
          borderStyle: 'solid',
          borderWidth: '1px',
          display: 'inline-block',
          height: '30px',
          marginRight: '10px',
          width: '30px',
          borderRadius: '10%'
        }
      }), _react["default"].createElement("pre", {
        style: {
          display: 'inline-block',
          fontSize: '14px',
          lineHeight: '30px'
        }
      }, _react["default"].createElement("span", {
        style: {
          display: 'inline-block',
          width: '250px'
        }
      }, _react["default"].createElement("span", {
        style: {
          userSelect: 'none'
        }
      }, _colors["default"][name])), _react["default"].createElement("span", null, name))));
    }
  });
  return _react["default"].createElement("div", {
    style: _styles["default"].main
  }, _react["default"].createElement("h1", null, "GDP Web Colors"), _react["default"].createElement("h3", null, "Text / Type"), _react["default"].createElement("ul", {
    style: {
      display: 'inline-block',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      textAlign: 'left'
    }
  }, textColors.map(function (el, i) {
    return _react["default"].createElement("li", {
      key: i,
      style: {
        borderTop: "1px solid ".concat(borderColor)
      }
    }, el);
  })), _react["default"].createElement("h3", null, "UI Elements"), _react["default"].createElement("ul", {
    style: {
      display: 'inline-block',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      textAlign: 'left'
    }
  }, uiColors.map(function (el, i) {
    return _react["default"].createElement("li", {
      key: i,
      style: {
        borderTop: "1px solid ".concat(borderColor)
      }
    }, el);
  })), _react["default"].createElement("h3", null, "GDP Primary Colors"), _react["default"].createElement("ul", {
    style: {
      display: 'inline-block',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      textAlign: 'left'
    }
  }, primaryColors.map(function (el, i) {
    return _react["default"].createElement("li", {
      key: i,
      style: {
        borderTop: "1px solid ".concat(borderColor)
      }
    }, el);
  })), _react["default"].createElement("h3", null, "Gilmore Palette"), _react["default"].createElement("ul", {
    style: {
      display: 'inline-block',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      textAlign: 'left'
    }
  }, gilmoreColors.map(function (el, i) {
    return _react["default"].createElement("li", {
      key: i,
      style: {
        borderTop: "1px solid ".concat(borderColor)
      }
    }, el);
  })));
};

exports.GDPColors = GDPColors;