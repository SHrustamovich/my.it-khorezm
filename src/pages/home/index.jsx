import React from "react";
import { Link } from "react-router-dom";
import HeroCard from "./components/heroCard";
import InfoCard from "./components/infoCard";
import LargeTitle from "@/components/largeTitle";
import CourseCard from "@/components/courseCard";
import PractiseCard from "./components/practiseCard";
import SmallTitle from "@/components/smallTitle";
import PlanCard from "./components/planCard";
import { AddSign, BgCode, CourseCardBg } from "@/assets/icons";
import { avatarImg } from "@/assets/images";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="home-page">
        <div>
          <HeroCard />

          <div className="info-card__wrapper">
            <InfoCard />
          </div>

          <div className="sale-info__title-content course-card__lgtitle">
            <LargeTitle text="Jarayondaki kurslar ro’yxati" />

            <Link to="/my-courses" className="course-card__lgtitle-link">
              Barcha Kurslar
            </Link>
          </div>

          <div className="course-card__wrapper">
            <CourseCard
              title="Web va grafik dizayn"
              teacher="Humoyun Madraximov"
              progress={40}
              date="Yanvar 17, 2021"
              time="09.00 - 10.00"
              teacherImg={avatarImg}
              bgSvg={<CourseCardBg />}
            />

            <CourseCard
              title="Web va grafik dizayn"
              teacher="Humoyun Madraximov"
              progress={100}
              date="Yanvar 17, 2021"
              time="09.00 - 10.00"
              teacherImg={avatarImg}
              bgSvg={<CourseCardBg />}
            />
          </div>

          <LargeTitle
            className="new-course__title"
            text="Yangi ochiladigan kurslarga ro'yxatdan o'tish"
          />

          <div className="new-course">
            <div className="new-course__inner">
              <CourseCard
                title="Web va grafik dizayn"
                teacher="Humoyun Madraximov"
                date="Yanvar 17, 2021"
                time="09.00 - 10.00"
                teacherImg={avatarImg}
                bgSvg={<CourseCardBg />}
                extant="none"
              />
              <CourseCard
                title="Web va grafik dizayn"
                teacher="Humoyun Madraximov"
                date="Yanvar 17, 2021"
                time="09.00 - 10.00"
                teacherImg={avatarImg}
                bgSvg={<BgCode />}
                extant="none"
              />
            </div>

            <button className="new-course__btn">
              <AddSign />
            </button>
          </div>
        </div>

        <div className="home-page__right-content">
          <div className="calendar"></div>
          <PractiseCard />

          <SmallTitle text="Barcha kurslarni ro'yhati" />

          <div className="plan-card__wrapper">
            <PlanCard />
          </div>

          <Link to="/my-courses">
            <button className="plan-card__btn">Batafsil Jadval</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
