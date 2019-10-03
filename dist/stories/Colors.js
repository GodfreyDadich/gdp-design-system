"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("./styles.json");

var _styles2 = _interopRequireDefault(_styles);

var _color = require("../utils/color");

var _colors = require("../styles/colors");

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Colors() {
  var borderColor = (0, _color.rgba)(_colors2.default.textSecondary, 0.2);
  var textColors = [];
  var primaryColors = [];
  var gilmoreColors = [];
  var uiColors = [];

  Object.keys(_colors2.default).forEach(function (name) {
    if (name.includes('text')) {
      textColors.push(_react2.default.createElement(
        "div",
        { style: { marginBottom: "5px", marginTop: "5px" } },
        _react2.default.createElement("div", {
          style: {
            backgroundColor: _colors2.default[name],
            borderColor: _colors2.default[name] === "#fff" ? borderColor : "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            display: "inline-block",
            height: "30px",
            marginRight: "10px",
            width: "30px",
            borderRadius: "10%"
          }
        }),
        _react2.default.createElement(
          "pre",
          {
            style: {
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px"
            }
          },
          _react2.default.createElement(
            "span",
            {
              style: {
                display: "inline-block",
                width: "250px"
              }
            },
            _react2.default.createElement(
              "span",
              { style: { userSelect: "none" } },
              _colors2.default[name]
            )
          ),
          _react2.default.createElement(
            "span",
            null,
            name
          )
        )
      ));
    }
    if (name.includes('UI')) {
      uiColors.push(_react2.default.createElement(
        "div",
        { style: { marginBottom: "5px", marginTop: "5px" } },
        _react2.default.createElement("div", {
          style: {
            backgroundColor: _colors2.default[name],
            borderColor: _colors2.default[name] === "#fff" ? borderColor : "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            display: "inline-block",
            height: "30px",
            marginRight: "10px",
            width: "30px",
            borderRadius: "10%"
          }
        }),
        _react2.default.createElement(
          "pre",
          {
            style: {
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px"
            }
          },
          _react2.default.createElement(
            "span",
            {
              style: {
                display: "inline-block",
                width: "250px"
              }
            },
            _react2.default.createElement(
              "span",
              { style: { userSelect: "none" } },
              _colors2.default[name]
            )
          ),
          _react2.default.createElement(
            "span",
            null,
            name
          )
        )
      ));
    }

    if (name.includes('gdpPrimary')) {
      primaryColors.push(_react2.default.createElement(
        "div",
        { style: { marginBottom: "5px", marginTop: "5px" } },
        _react2.default.createElement("div", {
          style: {
            backgroundColor: _colors2.default[name],
            borderColor: _colors2.default[name] === "#fff" ? borderColor : "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            display: "inline-block",
            height: "30px",
            marginRight: "10px",
            width: "30px",
            borderRadius: "10%"
          }
        }),
        _react2.default.createElement(
          "pre",
          {
            style: {
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px"
            }
          },
          _react2.default.createElement(
            "span",
            {
              style: {
                display: "inline-block",
                width: "250px"
              }
            },
            _react2.default.createElement(
              "span",
              { style: { userSelect: "none" } },
              _colors2.default[name]
            )
          ),
          _react2.default.createElement(
            "span",
            null,
            name
          )
        )
      ));
    }

    if (name.includes('gilmore')) {
      gilmoreColors.push(_react2.default.createElement(
        "div",
        { style: { marginBottom: "5px", marginTop: "5px" } },
        _react2.default.createElement("div", {
          style: {
            backgroundColor: _colors2.default[name],
            borderColor: _colors2.default[name] === "#fff" ? borderColor : "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            display: "inline-block",
            height: "30px",
            marginRight: "10px",
            width: "30px",
            borderRadius: "10%"
          }
        }),
        _react2.default.createElement(
          "pre",
          {
            style: {
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px"
            }
          },
          _react2.default.createElement(
            "span",
            {
              style: {
                display: "inline-block",
                width: "250px"
              }
            },
            _react2.default.createElement(
              "span",
              { style: { userSelect: "none" } },
              _colors2.default[name]
            )
          ),
          _react2.default.createElement(
            "span",
            null,
            name
          )
        )
      ));
    }
  });

  return _react2.default.createElement(
    "div",
    { style: _styles2.default.main },
    _react2.default.createElement(
      "h1",
      null,
      "GDP Web Colors"
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Text / Type"
    ),
    _react2.default.createElement(
      "ul",
      {
        style: {
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left"
        }
      },
      textColors.map(function (el, i) {
        return _react2.default.createElement(
          "li",
          { key: i, style: { borderTop: "1px solid " + borderColor } },
          el
        );
      })
    ),
    _react2.default.createElement(
      "h3",
      null,
      "UI Elements"
    ),
    _react2.default.createElement(
      "ul",
      {
        style: {
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left"
        }
      },
      uiColors.map(function (el, i) {
        return _react2.default.createElement(
          "li",
          { key: i, style: { borderTop: "1px solid " + borderColor } },
          el
        );
      })
    ),
    _react2.default.createElement(
      "h3",
      null,
      "GDP Primary Colors"
    ),
    _react2.default.createElement(
      "ul",
      {
        style: {
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left"
        }
      },
      primaryColors.map(function (el, i) {
        return _react2.default.createElement(
          "li",
          { key: i, style: { borderTop: "1px solid " + borderColor } },
          el
        );
      })
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Gilmore Palette"
    ),
    _react2.default.createElement(
      "ul",
      {
        style: {
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left"
        }
      },
      gilmoreColors.map(function (el, i) {
        return _react2.default.createElement(
          "li",
          { key: i, style: { borderTop: "1px solid " + borderColor } },
          el
        );
      })
    )
  );
}

exports.default = Colors;