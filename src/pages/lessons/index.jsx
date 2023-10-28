import React, { useState } from "react";
import Accordion from "./components/accordion";
import { VidStack } from "./components/video";

const Lessons = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      id: 0,
      title: "Ishni boshlash",
      video: "https://media-files.vidstack.io/720p.mp4",
      duration: "1:30",
    },
    {
      id: 1,
      title: "Asboblar",
      video: "https://assets.codepen.io/6093409/hubspot-video-example.mp4",
      duration: "1:00",
    },
    {
      id: 2,
      title: "Plaginlar",
      video: "https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4",
      duration: "2:30",
    },
  ];
  return (
    <React.Fragment>
      <div style={{ display: "flex", gap: "64px" }}>
        <div className="tab-content">
          <p className="tab__title">Web va Grafik dizayn</p>

          <video
            preload="none"
            data-video="0"
            controls
            src={tabs[activeTab].video}
            width={1008}
            className="tab__video"
          ></video>
          <VidStack />
        </div>

        <Accordion
          tabs={tabs}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
      </div>
    </React.Fragment>
  );
};

export default Lessons;
