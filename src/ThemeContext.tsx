import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

type ThemeContextType = boolean;

type ThemeContextUpdateType = () => void;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeUpdateContext = createContext<ThemeContextUpdateType | undefined>(
  undefined
);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function useThemeUpdate(): ThemeContextUpdateType {
  const context = useContext(ThemeUpdateContext);

  if (context === undefined) {
    throw new Error("useThemeUpdate must be used within a ThemeProvider");
  }
  return context;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
