import Activity from "../pages/activity";
import CoursesPage from "../pages/courses";
import HomePage from "../pages/home";
import Instructors from "../pages/instructors";
import LessonTable from "../pages/lessonTable";
import MyPayments from "../pages/myPayments";
import Profile from "../pages/profile";

export const data = [
    {
        id: 0,
        title: "Bosh sahifaga",
        page: <HomePage />,
        path: "/"
    },
    {
        id: 1,
        title: "Mening kurslarim",
        page: <CoursesPage />,
        path: "/my-courses"
    },
    {
        id: 2,
        title: "Dars jadvali",
        page: <LessonTable />,
        path: "/lesson-table"
    },
    {
        id: 3,
        title: "Instruktorlar",
        page: <Instructors />,
        path: "/instuctors"
    },
    {
        id: 4,
        title: "Profil",
        page: <Profile />,
        path: "/profile"
    },
    {
        id: 5,
        title: "Mening to'lovlarim",
        page: <MyPayments />,
        path: "/my-payments"
    },
    {
        id: 6,
        title: "Faoliyat",
        page: <Activity />,
        path: "/activity"
    }
]