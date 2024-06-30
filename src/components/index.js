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
import Loggin from "./Loggin";
import LarareLoggin from "./LarareLoggin";
import StudentLoggin from "./StudentLoggin";
import GlomFigur from "./GlomFigur";
import LogginAnvandnamn from "./LogginAnvandnamn";
import GlomLosenord from "./GlomLosenord";
import FaceId from "./FaceId";
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
        <Route exact path="/Loggin" element={<Loggin />} />
        <Route exact path="/LarareLoggin" element={<LarareLoggin />} />
        <Route exact path="/StudentLoggin" element={<StudentLoggin />} />
        <Route exact path="/GlomFigur" element={<GlomFigur />} />
        <Route exact path="/LogginAnvandnamn" element={<LogginAnvandnamn />} />
        <Route exact path="/GlomLosenord" element={<GlomLosenord />} />
        <Route exact path="/FaceId" element={<FaceId />} />
      </Routes>

      <Footer />
    </Main>
  );
}

export default components;
