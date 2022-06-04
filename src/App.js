import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence  } from "framer-motion";
function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/work/:id" element={<MovieDetail />} />
        </Routes>
      </AnimatePresence >
    </div>
  );
}

export default App;
