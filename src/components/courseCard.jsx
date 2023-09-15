import { Progress } from "antd";
import { Avatar } from "antd";
import {
  CircleCheckIcon,
  ClockIcon,
  RetryIcon,
  WhiteCalendarIcon,
} from "@/assets/icons";

function CourseCard({
  title,
  date,
  time,
  teacher,
  teacherImg,
  bgSvg,
  extant,
  progress,
}) {
  return (
    <div className={progress >= 100 ? "course-card darkBlue" : "course-card"}>
      <div className={extant == "none" ? "padding-right" : "padding-default"}>
        <span className="course-card__bgImg">{bgSvg}</span>

        <div className="course-card__title">
          <p>{title}</p>
        </div>

        <div className="course-card__info">
          <div className="course-card__info-date">
            <WhiteCalendarIcon />
            <p>{date}</p>
          </div>

          <div className="course-card__info-date">
            <ClockIcon />
            <p>{time}</p>
          </div>
        </div>

        <Progress
          percent={progress}
          size={[432, 18]}
          showInfo={false}
          className={extant}
        />

        <div className={extant == "none" ? "none" : "course-card__informant"}>
          <div className="course-card__informant-text">
            {progress >= 100 ? <CircleCheckIcon /> : <RetryIcon />}
            <p>{progress >= 100 ? "Tugallangan" : "Jarayonda"}</p>
          </div>

          <p>{progress >= 100 ? "10" : progress / 10}/10</p>
        </div>

        <div className="course-card__info-teacher">
          <Avatar shape="square" size={35} src={teacherImg} />
          <p>{teacher}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
