import { createContext, useState } from "react";

export const themeVal = {
  light: {
    bg: "white",
    text: "black",
    pad: "rgba(200,200,200,0.3)",
    screen: "black",
  },
  dark: {
    bg: "rgba(50,50,50,1)",
    text: "white",
    pad: "rgba(0,0,0,0.5)",
    screen: "whitesmoke",
  },
};

export const AppPallete = ["black", "orangered", "green", "brown"];
export const themeContext = createContext({
  setTheme: () => {},
  theme: themeVal,
  currentPallete: AppPallete,
  setCurrentPallete: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [Apptheme, setAppTheme] = useState(themeVal.light);
  const [pallete, setPallete] = useState(AppPallete[0]);

  const providerValue = {
    theme: Apptheme,
    setTheme: setAppTheme,
    currentPallete: pallete,
    setCurrentPallete: setPallete,
  };
  return (
    <themeContext.Provider value={providerValue}>
      {children}
    </themeContext.Provider>
  );
};
