import {
  BgBookmarkIcon,
  BgLampIcon,
  BgTickIcon,
  BookmarkIcon,
  CourseCardBg,
  GreenPentulIcon,
  LampIcon,
  TickIcon,
} from "@/assets/icons";
import { avatarImg } from "@/assets/images";

export const planData = [
  {
    id: 0,
    title: "Web dasturlash",
    date: "Yanvar 5, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madrahimov",
  },
  {
    id: 1,
    title: "Web va grafik dizayn",
    date: "Yanvar 5, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madrahimov",
  },
  {
    id: 2,
    title: "Asosiy Dasturlash",
    date: "Yanvar 5, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madrahimov",
  },
];

export const infoData = [
  {
    id: 1,
    bgImg: <BgTickIcon />,
    icon: <TickIcon />,
    number: "1.500",
    text: "Yakunlangan Kurslar",
    class: "info-card green",
  },
  {
    id: 2,
    bgImg: <BgLampIcon />,
    icon: <LampIcon />,
    number: "903",
    text: "Davom Etayotgan Kurslar",
    class: "info-card orange",
  },
  {
    id: 3,
    bgImg: <BgBookmarkIcon />,
    icon: <BookmarkIcon />,
    number: "1.112",
    text: "Tugallangan Kurslar",
    class: "info-card darkBlue",
  },
];

export const practiseData = [
  {
    id: 1,
    title: "Uyga vazifa",
    courseNameOne: "Web Dizayn",
    progressOne: 70,
    courseNameTwo: "Grafik Dizayn",
    progressTwo: 40,
  },
];

export const courseInfo = [
  {
    id: 0,
    title: "Web va grafik dizayn",
    bgSvg: <CourseCardBg />,
    date: "Yanvar 17, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madraximov",
    teacherImg: avatarImg,
    progress: 10,
  },
  {
    id: 1,
    title: "Web va grafik dizayn",
    bgSvg: <CourseCardBg />,
    date: "Yanvar 17, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madraximov",
    teacherImg: avatarImg,
    progress: 30,
  }
];

export const crudInfo = [
  {
    id: 0,
    title: "Web va grafik dizayn",
    bgSvg: <CourseCardBg />,
    date: "Yanvar 17, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madraximov",
    teacherImg: avatarImg,
    progress: 100,
  },
  {
    id: 1,
    title: "Web va grafik dizayn",
    bgSvg: <CourseCardBg />,
    date: "Yanvar 17, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madraximov",
    teacherImg: avatarImg,
    progress: 100,
  },
];

export const payInfo = [
  {
    id: 0,
    title: "Web va grafik dizayn",
    img: <GreenPentulIcon />,
    price: "400 000 so’m /oy",
  },
  {
    id: 1,
    title: "SMM",
    img: <GreenPentulIcon />,
    price: "400 000 so’m /oy",
  },
];

