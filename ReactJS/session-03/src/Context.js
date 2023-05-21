import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  light: "light",
  dark: "dark",
});

export const NameContext = React.createContext({
  my: "Divyansh",
  cousin: "Chintu",
});
