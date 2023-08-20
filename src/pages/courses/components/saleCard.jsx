import React from "react";
import { Link } from "react-router-dom";
import GreenLink from "@/components/greenLink";
import SmallTitle from "@/components/smallTitle";
import { saleData } from "@/utils/data";
import { OpenBookIcon, StarIcon } from "@/assets/icons";
import { illustration } from "@/assets/images";

const SaleCard = () => {
  return (
    <React.Fragment>
      {saleData?.map((el) => (
        <div className="sale" key={el.id}>
          <div className="sale-img__wrapper">
            <img src={illustration} alt="title" />
          </div>

          <div className="sale-info">
            <div className="sale-info__title-content">
              <SmallTitle text={el.title} />
              <p className="sale-info__title-price">${el.price}</p>
            </div>

            <div className="sale-info__teacher">
              <p className="sale-info__teacher-name">{el.teacher}</p>
              <StarIcon />
            </div>

            <div className="sale-info__content">
              <div className="sale-info__content-wrapper">
                <OpenBookIcon />
                <p>{el.content}</p>
              </div>

              <Link to="/">
                <GreenLink text={el.link} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default SaleCard;
