import { courseCompleted } from "@/utils/data";
import React from "react";
import { Link } from "react-router-dom";

const CoursesCompleted = () => {
  return (
    <React.Fragment>
      <div className="complete">
        {courseCompleted?.map((el) => (
          <Link to="#">
            <div key={el.id}>
              <div className="complete-item">
                <span className="complete-item__image">{el.image}</span>
                <div className="complete-item__box">
                  <h2 className="complete-item__box-title">{el.title}</h2>
                  <p className="complete-item__box-text">{el.text}</p>
                </div>
                <span>{el.icon}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CoursesCompleted;
