import { payInfo } from "@/utils/data";
import React, { useEffect, useState } from "react";

function Accordion() {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    const randomColors = [
      " background-orange",
      " background-green",
      " background-dark__blue",
    ].sort(() => 0.5 - Math.random());
    setFeature(randomColors);
  }, []);

  return (
    <React.Fragment>
      {payInfo.map((el) => {
        return (
          <div className="pay-card" key={el.id}>
            <span>{el.img}</span>

            <div className="pay-card__content">
              <span
                className={`pay-card__content-title ${
                  feature[el.id % feature.length]
                }`}
              >
                {el.title}
              </span>

              <div className="pay-card__content-inner">
                <p className="pay-card__price">{el.price}</p>

                <button
                  className={`pay-card__btn ${feature[el.id % feature.length]}`}
                >
                  To`lash
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Accordion;
