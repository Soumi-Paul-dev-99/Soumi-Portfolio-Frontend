import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="/soumi_about_pic_1.png" alt="profile pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>ABOUT ME</h1>
              <p>
                Hello! I'm Soumi Paul, a passionate Node.js developer with 1
                year of hands-on experience. Currently based in kolkata. I
                thrive on building robust and efficient solutions while adhering
                to clean coding practices. My commitment to delivering
                high-quality software is complemented by strong communication
                skills. In my current role as a Node.js Developer at Hih7
                Webtech Pvt Ltd., Kolkata, I have successfully designed and
                implemented complex features, ensuring their functionality and
                quality through rigorous testing and debugging. Collaborating
                with cross-functional teams, I've utilized a tech stack that
                includes MongoDB, Express.js, React.js, and Node.js, ensuring
                seamless application development. I hold a B.Tech in Computer
                Science and Engineering from Supreme Knowledge Foundation Group
                of Institutions, achieving a commendable grade of 8.49.
                Additionally, I honed my skills in React.js Frontend Development
                at Ejobindia Software Training Institute, where I developed a
                secure user authentication system using JWT, designed a
                responsive front-end with React.js, and integrated MongoDB for
                efficient data management. I am currently expanding my knowledge
                into frontend technologies and am enthusiastic about exploring
                new opportunities in back-end and full-stack development.
                Proficient in JavaScript, React.js, Node.js, and more, I am
                eager to contribute my skills and expertise to innovative
                projects.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
