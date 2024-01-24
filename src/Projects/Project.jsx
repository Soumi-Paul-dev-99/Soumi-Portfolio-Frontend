import React from "react";
import Tada from "react-reveal/Tada";
import "./Project.css";
const Project = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my top 3 recent project with live Links and source code
        </p>
        <p>
          <h3>Guardian Banking Solutions</h3>
          <li>
            Developed and contributed to a comprehensive banking application
            using Node.js, encompassing crucial features such as email sending,
            authentication, and interactive banking forms.
          </li>
          <li>
            Designed and integrated secure authentication mechanisms to
            safeguard user data and privacy, resulting in a seamless and
            trustworthy user experience.
          </li>
          <li>
            Spearheaded the creation of dynamic banking forms, optimizing the
            user interface and facilitating efficient data collection and
            processing.
          </li>
          <li>
            Contributed to continuous improvement by staying updated with
            industry trends and best practices, subsequently integrating new
            technologies and methodologies into the project.
          </li>
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Tada>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack</span>
                  <img src="./gurdian.png" alt="projects" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Gurdian Banking Solution</h5>
                  </div>
                  <a href="" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack</span>
                  <img src="./gurdian.png" alt="projects" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Gurdian Banking Solution</h5>
                  </div>
                  <a href="" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mern Stack</span>
                  <img src="./gurdian.png" alt="projects" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Gurdian Banking Solution</h5>
                  </div>
                  <a href="" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Tada>
        </div>
      </div>
    </>
  );
};

export default Project;
