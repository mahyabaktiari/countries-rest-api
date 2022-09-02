import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { NavbarStyle } from "./styles";
import { themes } from "../../context";
const Navbar = ({ theme, toggleTheme }) => {
  return (
    <>
      <NavbarStyle theme={theme} />
      <div className="navbar">
        <div className="container-navbar">
          <h2>Where in the world?</h2>
          <div className="theme-box" onClick={toggleTheme}>
            <FontAwesomeIcon icon={faMoon} />
            <p> {theme === themes.dark ? "Light" : "Dark"} Mode</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
