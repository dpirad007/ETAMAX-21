import React, { Fragment } from "react";

import { ClockCircleOutlined } from "@ant-design/icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const rightArrow = {
  borderRight: "7px solid  rgb(33, 150, 243)",
};

const leftArrow = {
  borderTop: "7px solid transparent",
  borderBottom: "7px solid transparent",
  borderRight: "7px solid green",
};

const contentStyles = {
  background: "rgb(33, 150, 243)",
  color: "#fff",
};

const normalIconStyles = {
  background: "rgb(33, 150, 243)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
};

const importantIconStyles = {
  ...normalIconStyles,
  background: "#7cffb3",
};

const HomeTimeLine = () => {
  return (
    <Fragment>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyles}
          contentArrowStyle={rightArrow}
          date="2011 - present"
          iconStyle={normalIconStyles}
          icon={<ClockCircleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={leftArrow}
          date="2010 - 2011"
          iconStyle={normalIconStyles}
          icon={<ClockCircleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={normalIconStyles}
          icon={<ClockCircleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={importantIconStyles}
          icon={<ClockCircleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={importantIconStyles}
          icon={<ClockCircleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={importantIconStyles}
          icon={<ClockCircleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={normalIconStyles}
          icon={<ClockCircleOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={normalIconStyles}
          icon={<ClockCircleOutlined />}
        />
      </VerticalTimeline>
    </Fragment>
  );
};

export default HomeTimeLine;
