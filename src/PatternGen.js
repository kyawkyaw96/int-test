import React from "react";

const PatternGen = ({ type }) => {
  const lineClass = {
    fontFamily: "monospace",
    textAlign: "center",
    margin: "20px 0",
    whiteSpace: "pre",
    textAlign: "left",
  };
  const right = () => {
    const rows = 5;
    const pattern = [];
    for (let i = 1; i <= rows; i++) {
      let line = [];
      for (let j = 1; j <= rows - 1; j++) {
        line.push(j >= rows - i ? "*" : " ");
      }
      pattern.push(line.join(""));
    }
    return pattern;
  };
  const generatePattern = () => {
    const rows = 5;
    const pattern = [];

    for (let i = 1; i <= rows; i++) {
      let line = [];
      for (let j = 1; j <= 2 * rows - 1; j++) {
        switch (type) {
          case "left":
            line.push(j <= i ? "*" : " ");
            break;

          case "centered":
            line.push(j >= rows - i + 1 && j <= rows + i - 1 ? "*" : " ");
            break;

          case "custom":
            if (j >= rows - i + 1 && j <= rows + i - 1) {
              if (i === 3 && j === rows) line.push("%");
              else if (i === 4 && j === rows - 1) line.push("$");
              else if (i === 5 && j === rows + 1) line.push("&");
              else line.push("*");
            } else {
              line.push(" ");
            }
            break;

          default:
            line.push(" ");
            break;
        }
      }
      pattern.push(line.join(""));
    }

    return pattern;
  };

  return (
    <div style={lineClass}>
      {type === "right" &&
        right().map((line, index) => <pre key={index}>{line}</pre>)}

      {type !== "rigth" &&
        generatePattern().map((line, index) => <pre key={index}>{line}</pre>)}
    </div>
  );
};

export default PatternGen;
