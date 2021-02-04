import React, { Fragment } from "react";

import { ClockCircleOutlined } from "@ant-design/icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  timeLineDataDay1,
  timeLineDataDay2,
  timeLineDataDay3,
} from "./TimeLineData.js";

const rightArrow = {
  borderRight: "7px solid  rgb(33, 150, 243)",
};

const headerContentStyles = {
  background: "rgb(33, 150, 243)",
  color: "#fff",
};

const contentStyles = {
  background: "#51c2d5",
};

const normalIconStyles = {
  background: "rgb(33, 150, 243)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
};

const HomeTimeLine = ({ selectedDay }) => {
  let finalTimeline = null;

  switch (selectedDay) {
    case 1:
      finalTimeline = (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={headerContentStyles}
            contentArrowStyle={rightArrow}
            date="Feb 18, 2021"
            iconStyle={normalIconStyles}
            icon={<ClockCircleOutlined />}
          >
            <h3 className="vertical-timeline-element-title">
              Events of Day One
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Etamax</h4>
            <p>Timeline Day 1</p>
          </VerticalTimelineElement>
          {timeLineDataDay1
            ? timeLineDataDay1.map((obj) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={obj.date}
                    contentStyle={contentStyles}
                    iconStyle={normalIconStyles}
                    icon={<ClockCircleOutlined />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {obj.h3}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {obj.h4}
                    </h4>
                    <p style={{ color: "#fff" }}>{obj.p}</p>
                  </VerticalTimelineElement>
                );
              })
            : null}
        </VerticalTimeline>
      );
      break;

    case 2:
      finalTimeline = (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={headerContentStyles}
            contentArrowStyle={rightArrow}
            date="Feb 19, 2021"
            iconStyle={normalIconStyles}
            icon={<ClockCircleOutlined />}
          >
            <h3 className="vertical-timeline-element-title">
              Events of Day Two
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Etamax</h4>
            <p>Timeline Day 2</p>
          </VerticalTimelineElement>
          {timeLineDataDay2
            ? timeLineDataDay2.map((obj) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={obj.date}
                    contentStyle={contentStyles}
                    iconStyle={normalIconStyles}
                    icon={<ClockCircleOutlined />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {obj.h3}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {obj.h4}
                    </h4>
                    <p style={{ color: "#fff" }}>{obj.p}</p>
                  </VerticalTimelineElement>
                );
              })
            : null}
        </VerticalTimeline>
      );
      break;

    case 3:
      finalTimeline = (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={headerContentStyles}
            contentArrowStyle={rightArrow}
            date="Feb 20, 2021"
            iconStyle={normalIconStyles}
            icon={<ClockCircleOutlined />}
          >
            <h3 className="vertical-timeline-element-title">
              Events of Day Three
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Etamax</h4>
            <p>Timeline Day 3</p>
          </VerticalTimelineElement>
          {timeLineDataDay3
            ? timeLineDataDay3.map((obj) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={obj.date}
                    contentStyle={contentStyles}
                    iconStyle={normalIconStyles}
                    icon={<ClockCircleOutlined />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {obj.h3}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {obj.h4}
                    </h4>
                    <p style={{ color: "#fff" }}>{obj.p}</p>
                  </VerticalTimelineElement>
                );
              })
            : null}
        </VerticalTimeline>
      );
      break;

    default:
      finalTimeline = null;
  }

  return <Fragment>{finalTimeline}</Fragment>;
};

export default HomeTimeLine;
