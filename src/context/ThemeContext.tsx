import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

// context-api jo hai wo acatully wo createContext s hi bani hai okkh..

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return;
  <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    <div
      className={`transition-colors duration-700 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {children}
    </div>
    ;
  </ThemeContext.Provider>;
};

export default ThemeProvider;

// Yha p hame actaully todha sa context api ka bhi dhyan rakhna hai okkh!..

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Plaeae used Theme in Your ThemeProvider!..");
  }
  return context;
};
