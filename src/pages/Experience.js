import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2022 - July 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nucamp Fullstack Bootcamp
          </h3>
          <p> Frontend, Backend, && Mobile Development</p>
         
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Belhaven University
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree in Business Administration
          </h4>

          <p> Bachelor's in Business Administration</p>
          <p className="small">**Not yet complete**</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Adminstrator - Community Hospice 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dalton, GA
          </h4>
          <p>Responsible for all staff, patients, and operations.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Clinical Pharmacy Technician - Hamilton Medical Center
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dalton, GA
          </h4>
          <p>
            Reconciled Medication Profiles for admitted patients. 
            Assessed new admissions for readdmision risk. 
            Worked with physicians and hospital pharmacy to provide 
            the most cost effective prescriptions for discharged patients.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
