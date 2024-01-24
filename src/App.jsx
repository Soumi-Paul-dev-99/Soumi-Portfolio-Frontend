import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/Tech_Stack/TechStack";
import Project from "./Projects/Project";
import Education from "./pages/Educations/Education";
import Workexp from "./pages/Workexp/Workexp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/mobileNav/MobileNav";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Project />
          <Workexp />
          <Contact />
        </div>
        <Tada>
          <div className="footer pb-3 ms-3">
            <h4 className="text-center">
              Made with - $oumi Paul &copy; 2024 
            </h4>
          </div>
        </Tada>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
