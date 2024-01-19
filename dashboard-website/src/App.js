import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import MainLandingPage from "demos/LandingPage.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
        </Routes>
      </Router>
    </>
  );
}