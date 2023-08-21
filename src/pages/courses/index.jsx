import React from "react";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import SaleCard from "./components/saleCard";
import SmallTitle from "@/components/smallTitle";
import GreenLink from "@/components/greenLink";
import PostingCard from "./components/postingCard";
import CourseCard from "@/components/courseCard";
import { ArrowIcon, CourseCardBg } from "@/assets/icons";
import { avatarImg } from "@/assets/images";

function CoursesPage() {
  return (
    <React.Fragment>
      <div className="sale-info__title-content">
        <SmallTitle text="Bu haftada mashhur" />

        <Link to="/" className="course-card__info-teacher">
          <GreenLink text="Hammasini ko'rish" />
          <ArrowIcon />
        </Link>
      </div>

      <div className="posting-card__wrapper">
        <PostingCard />
      </div>

      <SmallTitle text="Barcha kurslar" />

      <div className="course-card__wrapper courses-cards_mblock">
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

      <div className="sale-info__title-content">
        <SmallTitle text="Boshqa kurslar" />

        <Link to="/" className="course-card__info-teacher">
          <GreenLink text="Hammasini ko'rish" />
          <ArrowIcon />
        </Link>
      </div>

      <div className="course-card__wrapper sale-mblock">
        <SaleCard />
      </div>

      <div className="course-card__wrapper">
        <p className="posting-card__info-text">
          <span className="green-small_text">1-6</span> gacha ko’rsatilmoqda
          <span className="green-small_text"> 100</span> ma’lumot
        </p>

        <Pagination defaultCurrent={1} total={30} className="pagination" />
      </div>
    </React.Fragment>
  );
}

export default CoursesPage;