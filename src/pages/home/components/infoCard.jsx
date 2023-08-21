import React from "react";
import { infoData } from "@/utils/data";

function InfoCard() {
  return (
    <React.Fragment>
      {infoData.map((el) => {
        return (
          <div className={el.class} key={el.id}>
            <span className="info-card__bgImg">{el.bgImg}</span>
            <div className="info-card__icon">{el.icon}</div>

            <div>
              <p className="info-card__number">{el.number}</p>
              <p className="info-card__text">{el.text}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default InfoCard;
