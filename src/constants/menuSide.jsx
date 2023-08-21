import {
    ActivityIcon,
    BookIcon,
    CalendarIcon,
    HomePageIcon,
    InstructorIcon,
    PaymentIcon,
    ProfileIcon,
  } from "@/assets/icons";
  
  export const menuData = [
    {
      id: 0,
      icon: <HomePageIcon />,
      label: "Bosh sahifa",
      path: "/",
    },
    {
      id: 1,
      icon: <BookIcon />,
      label: "Mening kurslarim",
      path: "/my-courses",
    },
    {
      id: 2,
      icon: <CalendarIcon />,
      label: "Dars jadvali",
      path: "/lesson-table",
    },
    {
      id: 3,
      icon: <InstructorIcon />,
      label: "Instruktorlar",
      path: "/instuctors",
    },
    {
      id: 4,
      icon: <ProfileIcon />,
      label: "Profil",
      path: "/profile",
    },
    {
      id: 5,
      icon: <PaymentIcon />,
      label: "Mening to'lovlarim",
      path: "/my-payments",
    },
    {
      id: 6,
      icon: <ActivityIcon />,
      label: "Faoliyat",
      path: "/activity",
    },
  ];
  