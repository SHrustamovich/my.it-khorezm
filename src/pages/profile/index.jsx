import React from "react";
import CoursesCompleted from "./components/coursesCompleted";
import CurrentCourses from "./components/currentCourses";
import ProfilePart from "./components/profilePart";

function Profile() {
  return (
    <>
      <div className="profile__page">
        <ProfilePart />
        <div>
          <CoursesCompleted />
          <CurrentCourses />
        </div>
      </div>
    </>
  );
}

export default Profile;
