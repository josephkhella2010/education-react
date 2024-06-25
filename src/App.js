import EleveBloggar from "./components/EleveBloggar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Jobbarmedoss from "./components/Jobbarmedoss";
import Koanmal from "./components/Koanmal";
import Kontakt from "./components/Kontakt";
import Navbar from "./components/Navbar";
import Omoss from "./components/Omoss";
import Skolan from "./components/Skolan";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
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
        </Routes>

        <Footer />
      </Main>
    </div>
  );
}

export default App;
