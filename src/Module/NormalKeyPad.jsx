import React from "react";
import Button from "../components/Button";

function NormalKeyPad({
  keys,
  setExpression,
  setShowAnswer,
  setAns,
  expression,
  theme,
  ans,
  setShowExp
}) {
  return (
    <div
      style={{
        background: theme.bg,
      }}
      className="flex-auto rounded-t-[40px]  grid  gap-5 p-5 px-5 grid-cols-4 w-full bg-gray-200"
    >
      {keys.map((key, id) => (
        <Button
          setAns={setAns}
          setShowExp={setShowExp}
          expression={expression}
          onClick={setExpression}
          setShowAnswer={setShowAnswer}
          text={key}
          key={id}
          id={id}
          ans={ans}
        />
      ))}
    </div>
  );
}

export default NormalKeyPad;
