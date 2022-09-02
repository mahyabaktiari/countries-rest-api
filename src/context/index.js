import { createContext } from "react";
export const themes = {
  dark: { primary: "#202d36", secondary: "#2a3743", fontColor: "#fff" },
  light: { fontColor: "#000", secondary: "#fff", primary: "#f5f5f5" },
};
export const themeContext = createContext({ theme: "", setTheme: () => {} });
