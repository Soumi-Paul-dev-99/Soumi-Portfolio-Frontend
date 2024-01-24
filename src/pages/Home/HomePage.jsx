import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Soumi_Paul_CV.pdf";
import Fade from "react-reveal/Fade";

const HomePage = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} color="yellow" />
          ) : (
            <BsSunFill size={30} color="yellow" />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Node js Developer !",
                    "Backend Developer !",
                    "Mern Stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="http://api.whatsapp.com/send?phone=+919330719639"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                href={Resume}
                className="btn btn-cv"
                download="Soumi_Paul_CV.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HomePage;
