import React from "react";
import EleveBloggar from "./EleveBloggar";
import Footer from "./Footer";
import Home from "./Home";
import Jobbarmedoss from "./Jobbarmedoss";
import Koanmal from "./Koanmal";
import Kontakt from "./Kontakt";
import Navbar from "./Navbar";
import Omoss from "./Omoss";
import Skolan from "./Skolan";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import ClickBloggarBlid from "./ClickBloggarBlid";
function components(props) {
  return (
    <Main>
      <Navbar></Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Koanmal" element={<Koanmal />} />
        <Route exact path="/Skolan" element={<Skolan />} />
        <Route exact path="/EleveBloggar" element={<EleveBloggar />} />
        <Route exact path="/Jobbarmedoss" element={<Jobbarmedoss />} />
        <Route exact path="/Omoss" element={<Omoss />} />
        <Route exact path="/Kontakt" element={<Kontakt />} />
        <Route exact path="/ClickBloggarBlid" element={<ClickBloggarBlid />} />
      </Routes>

      <Footer />
    </Main>
  );
}

export default components;
