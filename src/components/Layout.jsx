import React, { useContext, useEffect, useState } from "react";
import AppScreen from "./AppScreen";
import NormalKeyPad from "../Module/NormalKeyPad";
import Header from "./Header";
import { themeContext } from "../context/themeContext";

function Layout() {
  const normalKeys = [
    "AC",
    "Del",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  const [showAnswer, setShowAnswer] = useState(false);
  const [expression, setExpression] = useState("");
  const [showExp, setShowExp] = useState(false);
  const [ans, setAns] = useState("");

  useEffect(() => {
    try {
      setAns(eval(expression));
    } catch {
      setAns(ans);
    }
  }, [expression]);

  useEffect(() => {
    setShowAnswer(true);
    setShowExp(true);
  }, [ans]);

  const { theme, setTheme } = useContext(themeContext);

  return (
    <div
      style={{
        background: theme.bg,
        color: theme.text,
      }}
      className=" relative flex flex-col justify-start items-center w-full h-full"
    >
      <Header theme={theme} setTheme={setTheme} />
      <AppScreen
        ans={ans}
        theme={theme}
        expression={expression}
        showExp={showExp}
        setShowAnswer={setShowAnswer}
        showAnswer={showAnswer}
      />
      <NormalKeyPad
        expression={expression}
        setAns={setAns}
        theme={theme}
        setShowExp={setShowExp}
        ans={ans}
        setShowAnswer={setShowAnswer}
        setExpression={setExpression}
        keys={normalKeys}
      />
    </div>
  );
}

export default Layout;
