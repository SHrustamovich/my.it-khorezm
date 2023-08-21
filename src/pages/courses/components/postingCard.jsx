import React from "react";
import { Link } from "react-router-dom";
import { postingData } from "@/utils/data";
import { ArrowIcon } from "@/assets/icons";

const PostingCard = () => {
  return (
    <React.Fragment>
      {postingData?.map((el) => (
        <Link to="/" key={el.id}>
          <div className="posting-card">
            <span>{el.image}</span>

            <div className="posting-card__info">
              <h1 className="posting-card__info-title">{el.title}</h1>
              <p className="posting-card__info-text">{el.text} </p>
            </div>

            <ArrowIcon />
          </div>
        </Link>
      ))}
    </React.Fragment>
  );
};

export default PostingCard;
