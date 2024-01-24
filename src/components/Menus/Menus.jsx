import React from "react";
import "./Menus.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";

import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="./soumipaul.png" alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Project
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="workexp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>

                {/* <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div> */}
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-link">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcHome title="home" />
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcAbout title="about" />
            </Link>
          </div>

          <div className="nav-link">
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcReadingEbook title="education" />
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="techstack"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcBiotech title="tech stack" />
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcVideoProjector title="project" />
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="workexp"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcPortraitMode title="work experience" />
            </Link>
          </div>

          {/* <div className="nav-link">
            <FcVoicePresentation title="Testimonial" />
          </div> */}
          <div className="nav-link">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <FcBusinessContact title="contact" />
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
