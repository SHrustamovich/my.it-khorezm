import React from "react";
import { Progress } from "antd";
import { practiseData } from "@/utils/data";
import SmallTitle from "@/components/smallTitle";

const PractiseCard = () => {
  return (
    <React.Fragment>
      {practiseData.map((el) => {
        return (
          <div className="practise-card" key={el.id}>
            <SmallTitle text={el.title} />

            <Progress
              showInfo={false}
              strokeColor="#FEC64F"
              strokeWidth={16}
              percent={el.progressOne}
              className="practise-card__progress"
            />

            <div className="practise-card__info">
              <p className="practise-card__info-subject">{el.courseNameOne}</p>
              <p className="practise-card__info-count">
                {el.progressOne >= 100 ? "10" : el.progressOne / 10}/10
              </p>
            </div>

            <Progress
              showInfo={false}
              strokeColor="#166199"
              strokeWidth={16}
              percent={el.progressTwo}
              className="practise-card__progress"
            />

            <div className="practise-card__info">
              <p className="practise-card__info-subject">{el.courseNameTwo}</p>
              <p className="practise-card__info-count">
                {el.progressTwo / 10}/10
              </p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default PractiseCard;
