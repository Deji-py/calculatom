import React, { useContext, useEffect, useState } from "react";
import { themeContext, themeVal } from "../context/themeContext";

function AppScreen({ showAnswer, expression, ans, theme, showExp }) {
  const { currentPallete } = useContext(themeContext);

  return (
    <div className="flex-none h-[40%] bg-transparent w-full flex flex-col justify-end  px-5 items-end">
      <div
        style={{
          color: theme === themeVal.light ? "rgba(0,0,0,0.6)" : "lightgray",
        }}
        className="text-2xl flex-nowrap  font-bold"
      >
        {showExp && (
          <p className="w-full hideScroll overflow-x-scroll ">{expression}</p>
        )}
      </div>
      {showAnswer && (
        <div className="w-full flex-nowrap  flex flex-col justify-end items-end">
          <h
            style={{
              color:
                currentPallete === "black" && theme === themeVal.dark
                  ? "rgba(150,150,150,0.9)"
                  : currentPallete,
            }}
            className="text-[4em] w-full text-end  hideScroll  overflow-x-scroll "
          >
            {expression === "" ? "0" : ans}
          </h>
        </div>
      )}
    </div>
  );
}

export default AppScreen;
