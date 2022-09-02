import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesWrapper,
} from "react-router-dom";
import Navbar from "../components/navbar";
import { themeContext, themes } from "../context";
import Details from "../pages/detailsPage";
import Home from "../pages/homePage";

export default function Routes() {
  const { theme, setTheme } = useContext(themeContext);
  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <RoutesWrapper>
          <Route path="/:name" element={<Details theme={theme} />}></Route>
          <Route path="/" element={<Home theme={theme} />}></Route>
        </RoutesWrapper>
      </div>
    </Router>
  );
}
