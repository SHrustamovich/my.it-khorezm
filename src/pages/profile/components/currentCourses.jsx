import React, { useState } from "react";
import SmallTitle from "@/components/smallTitle";
import { ArrowIcon } from "@/assets/icons";
import { Progress } from "antd";
import { circleProgress } from "@/utils/data";

const CurrentCourses = () => {
  const { count, setCount } = useState(110);
  return (
    <div className="circle">
      <div className="circle-title">
        <SmallTitle text={"Current Courses"} />
        <p className="circle-title__link">
          View all <ArrowIcon />
        </p>
      </div>
      <div className="circle-progress">
        {circleProgress?.map((el) => (
          <div className="circle-progress__group" key={el.id}>
            <Progress
              strokeLinecap="butt"
              type="circle"
              percent={el.progress}
              strokeWidth={20}
              strokeColor={el.color}
              trailColor="#fafafa"
            />

            <div className="circle-progress__group-container">
              <p className="circle-progress__group-text">{el.text}</p>
              <h2 className="circle-progress__group-title">{el.title}</h2>
              <p className="circle-progress__group-courses">{el.courses}</p>
              <p className="circle-progress__group-count">{el.progress}/110</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;
