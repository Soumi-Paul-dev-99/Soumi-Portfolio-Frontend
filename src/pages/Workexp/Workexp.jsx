import React from "react";
import { IoLogoNodejs } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Workexp.css";
const Workexp = () => {
  return (
    <>
      <div className="work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#138781", color: "white" }}
              icon={<IoLogoNodejs />}
            >
              <h3 className="vertical-timeline-element-title">
               Nodejs Developer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">Hih7 Web Tech Pvt Ltd</h5>
              <p>
           
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Workexp;
