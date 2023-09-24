import { Progress } from "antd";
import GreenBtn from "./greenBtn";
import { GrayTickIcon } from "@/assets/icons";

function ContinueCard() {
  return (
    <div className="continue-card">
      <div className="continue-card__main">
        <div className="continue-card__num">
          2
          {/* <GrayTickIcon className="continue-card__icon" /> */}
        </div>

        <div className="continue-card__progress-wrapper">
          <p className="continue-card__title">Lorem Ipsum</p>

          <Progress
            showInfo={false}
            strokeColor="#7dba28"
            strokeWidth={16}
            percent={60}
            className="continue-card__progress"
          />
        </div>

        <p className="continue-card__count">2/15</p>
      </div>
      <GreenBtn text="Davom ettirish" link="/test" />
    </div>
  );
}

export default ContinueCard;
