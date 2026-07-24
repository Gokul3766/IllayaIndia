import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vision from "./pages/Vision/Vision";
import Principles from "./pages/Principles/Principles";
import Parliament from "./pages/Parliament/Parliament";
import Projects from "./pages/Projects/Projects";
import Media from "./pages/Media/Media";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/about" ||
    location.pathname === "/vision" ||
    location.pathname === "/principles" ||
    location.pathname === "/peoples-parliament" ||
    location.pathname === "/projects" ||
    location.pathname === "/media";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/principles" element={<Principles />} />
        <Route path="/peoples-parliament" element={<Parliament />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/media" element={<Media />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
