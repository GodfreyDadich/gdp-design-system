import React from "react";

import styles from "./styles.json";
import { rgba } from "../utils/color";
import colors from "../styles/colors";

function Colors() {
  const borderColor = rgba(colors.textSecondary, 0.2);
  const textColors = []
  const primaryColors = []
  const gilmoreColors = []
  const uiColors = []

  Object.keys(colors).forEach((name) => {
    if (name.includes('text')) {
      textColors.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div
            style={{
              backgroundColor: colors[name],
              borderColor: (colors[name] === "#fff") ? borderColor : "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
              borderRadius: "10%"
            }}
          />
          <pre
            style={{
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "250px",
              }}
            >
              <span style={{ userSelect: "none" }}>{colors[name]}</span>
            </span><span>{name}</span>
          </pre>
        </div>
      )
    }
    if (name.includes('UI')) {
      uiColors.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div
            style={{
              backgroundColor: colors[name],
              borderColor: (colors[name] === "#fff") ? borderColor : "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
              borderRadius: "10%"
            }}
          />
          <pre
            style={{
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "250px",
              }}
            >
              <span style={{ userSelect: "none" }}>{colors[name]}</span>
            </span><span>{name}</span>
          </pre>
        </div>
      );
    }

    if (name.includes('gdpPrimary')) {
      primaryColors.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div
            style={{
              backgroundColor: colors[name],
              borderColor: (colors[name] === "#fff") ? borderColor : "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
              borderRadius: "10%"
            }}
          />
          <pre
            style={{
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "250px",
              }}
            >
              <span style={{ userSelect: "none" }}>{colors[name]}</span>
            </span><span>{name}</span>
          </pre>
        </div>
      );
    }

    if (name.includes('gilmore')) {
      gilmoreColors.push(
        <div style={{ marginBottom: "5px", marginTop: "5px" }}>
          <div
            style={{
              backgroundColor: colors[name],
              borderColor: (colors[name] === "#fff") ? borderColor : "transparent",
              borderStyle: "solid",
              borderWidth: "1px",
              display: "inline-block",
              height: "30px",
              marginRight: "10px",
              width: "30px",
              borderRadius: "10%"
            }}
          />
          <pre
            style={{
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "30px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "250px",
              }}
            >
              <span style={{ userSelect: "none" }}>{colors[name]}</span>
            </span><span>{name}</span>
          </pre>
        </div>
      );
    }
  });


  return (
    <div style={styles.main}>
      <h1>GDP Web Colors</h1>

      <h3>Text / Type</h3>

      <ul
        style={{
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
        }}
      >
        {textColors.map((el, i) => (
          <li key={i} style={{ borderTop: `1px solid ${borderColor}` }}>{el}</li>
        ))}
      </ul>

      <h3>UI Elements</h3>

      <ul
        style={{
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
        }}
      >
        {uiColors.map((el, i) => (
          <li key={i} style={{ borderTop: `1px solid ${borderColor}` }}>{el}</li>
        ))}
      </ul>

      <h3>GDP Primary Colors</h3>

      <ul
        style={{
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
        }}
      >
        {primaryColors.map((el, i) => (
          <li key={i} style={{ borderTop: `1px solid ${borderColor}` }}>{el}</li>
        ))}
      </ul>

      <h3>Gilmore Palette</h3>

      <ul
        style={{
          display: "inline-block",
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "left",
        }}
      >
        {gilmoreColors.map((el, i) => (
          <li key={i} style={{ borderTop: `1px solid ${borderColor}` }}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;