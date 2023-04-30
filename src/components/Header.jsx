import React, { useContext } from "react";
import { BsSun, BsSunFill, BsMoon, BsMoonFill } from "react-icons/bs";

import { AppPallete, themeContext, themeVal } from "../context/themeContext";

function Header({ theme, setTheme }) {
  const { setCurrentPallete } = useContext(themeContext);
  return (
    <div className="flex absolute flex-row-reverse w-full bg-transparent justify-between items-center p-3">
      <div className="flex flex-row justify-center gap-5">
        {AppPallete.map((item, id) => (
          <button
            key={id}
            onClick={() => setCurrentPallete(AppPallete[id])}
            style={{ background: item }}
            className="w-5 h-5 rounded-md"
          ></button>
        ))}
      </div>
      <div
        style={{
          background: theme.pad,
        }}
        className=" w-fit text-gray-500 py-1   flex flex-row justify-center items-center gap-2 rounded-full  px-2"
      >
        <button
          onClick={() => setTheme(themeVal.light)}
          className="ease-out transition-all hover:bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
        >
          {theme === themeVal.light ? (
            <BsSunFill size={20} />
          ) : (
            <BsSun size={20} />
          )}
        </button>
        <button
          onClick={() => setTheme(themeVal.dark)}
          className="ease-out transition-all hover:bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
        >
          {theme === themeVal.dark ? (
            <BsMoonFill size={20} />
          ) : (
            <BsMoon size={20} />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
