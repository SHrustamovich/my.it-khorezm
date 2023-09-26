import { Avatar } from "antd";
import { ClockIcon, WhiteCalendarIcon } from "@/assets/icons";
import React from "react";
import { courseInfo } from "@/utils/data";

function NewCourseCard() {
  return (
    <React.Fragment>
      {courseInfo.map((el) => {
        return (
          <div className="course-card" key={el.id}>
            <span className="course-card__bg-img">{el.bgSvg}</span>

            <div className="course-card__main-entry">
              <p>{el.title}</p>
            </div>

            <div className="course-card__info">
              <div className="course-card__info-date">
                <WhiteCalendarIcon />
                <p>{el.date}</p>
              </div>

              <div className="course-card__info-date">
                <ClockIcon />
                <p>{el.time}</p>
              </div>
            </div>

            <div className="course-card__info-teacher">
              <Avatar shape="square" size={35} src={el.teacherImg} />
              <p>{el.teacher}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default NewCourseCard;
