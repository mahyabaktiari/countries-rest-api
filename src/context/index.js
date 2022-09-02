import { createContext } from "react";
export const themes = {
  dark: {
    primaryText: "#fff",
    secondaryText: "#8f96a0",
    primary: "#202d36",
    secondary: "#2a3743",
  },
  light: {
    primaryText: "#000",
    secondaryText: "#5d5f5f",
    secondary: "#fff",
    primary: "#f5f5f5",
  },
};
export const themeContext = createContext({ theme: "", setTheme: () => {} });
