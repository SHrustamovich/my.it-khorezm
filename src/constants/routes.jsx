import HomePage from "@/pages/home";
import CoursesPage from "@/pages/courses";
import LessonTable from "@/pages/lessonTable";
import Instructors from "@/pages/instructors";
import Profile from "@/pages/profile";
import MyPayments from "@/pages/myPayments";
import Activity from "@/pages/activity";
import Lessons from "@/pages/lessons";
import Modules from "@/pages/modules";

export const routes = [
  {
    id: 0,
    components: <HomePage />,
    path: "/",
  },
  {
    id: 1,
    components: <CoursesPage />,
    path: "/my-courses",
  },
  {
    id: 2,
    components: <LessonTable />,
    path: "/lesson-table",
  },
  {
    id: 3,
    components: <Instructors />,
    path: "/instuctors",
  },
  {
    id: 4,
    components: <Profile />,
    path: "/profile",
  },
  {
    id: 5,
    components: <MyPayments />,
    path: "/my-payments",
  },
  {
    id: 6,
    components: <Lessons />,
    path: "/lessons",
  },
  {
    id: 7,
    components: <Modules />,
    path: "/modules",
  },
];
