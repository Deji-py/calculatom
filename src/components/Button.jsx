import React, { useContext } from "react";

import { themeContext } from "../context/themeContext";

function Button({
  setShowExp,
  text,
  id,
  ans,
  onClick,
  setShowAnswer,
  setAns,
  expression,
}) {
  const special = [0, 1, 2, 3, 7, 11, 15, 19];
  const ops = ["*", "/", "-", "%", "+"];

  special.includes(id);

  const handleClick = () => {
    setShowExp(true);
    if (id === 19) {
      if (expression.slice(-1) === "%") {
        setAns(ans);
        return;
      }
      if (ops.includes(expression.slice(-1))) {
        setShowAnswer(true);
        setAns("Error");
        setShowExp(false);
        return;
      } else {
        setShowAnswer(true);
        const val = evaluate(expression);
        setAns(val);
        onClick(ans.toString());
        setShowExp(false);
      }
      return;
    }

    if (id === 0) {
      setShowAnswer(false);
      onClick("");
      return;
    }
    if (id === 1) {
      let sub = expression.substring(0, expression.length - 1);
      onClick(sub);
      return;
    }

    if (id === 2) {
      setAns((ans) => ans / 100);
      onClick((prev) => prev);
      setShowAnswer(true);
    }

    if (expression === "" && ops.includes(text)) {
      return;
    }

    if (ops.includes(expression.slice(-1)) && text === expression.slice(-1)) {
      return;
    } else if (
      ops.includes(text) &&
      ops.includes(expression.slice(-1)) &&
      text !== expression.slice(-1)
    ) {
      if (expression.slice(-1)) {
        onClick(ans);
        onClick((prev) => prev + text);
        return;
      }
      let newString = expression.substring(0, expression.length - 1);
      onClick(newString + text);
      return;
    } else {
      onClick((prev) => prev + text);
    }
  };

  const { theme, currentPallete } = useContext(themeContext);

  return (
    <button
      onClick={handleClick}
      style={{
        background: special.includes(id) ? currentPallete : theme.pad,
        color: special.includes(id) ? "white" : theme.text,
        fontSize: special.includes(id) && text === "-" ? "1.875rem" : "1.5rem",
      }}
      className=" shadow-lg font-bold rounded-xl hover:bg-gray-200 bg-[#F1F6F9] p-2 flex flex-col justify-center items-center"
    >
      {text}
    </button>
  );
}

export default Button;
