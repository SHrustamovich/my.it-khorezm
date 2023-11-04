import React, { useState } from "react";
import Accordion from "./components/accordion";
import { VidStack } from "./components/video";
import SmallTitle from "@/components/smallTitle";
import { Progress } from "antd";
import Tab from "./components/tab";

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
      condition: false,
    },
    {
      id: 1,
      title: "Asboblar",
      video: "https://assets.codepen.io/6093409/hubspot-video-example.mp4",
      duration: "1:00",
      condition: true,
    },
    {
      id: 2,
      title: "Plaginlar",
      video:
        "https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4",
      duration: "2:30",
      condition: true,
    },
  ];

  let process = 20;



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
          <VidStack/>
        </div>

        <div className="accordion__wrapper">
          <div className="accordion-process">
            <SmallTitle text="Jarayon" />
            <Progress
              className="accordion_item"
              showInfo={false}
              strokeColor="#166199"
              strokeWidth={16}
              percent={process}
              size={[390, 16]}
            />

            <div className="accordion-process__bottom">
              <h2 className="accordion-process__bottom-text">
                Web va Grafik dizayn
              </h2>

              <p className="accordion-process__bottom-count">
                {process >= 100 ? "10" : process / 1}/110
              </p>
            </div>
          </div>

          <Accordion
            title={"Video Kurslar"}
            tabs={tabs}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            content={
              <Tab
                tabs={tabs}
                handleTabClick={handleTabClick}
                activeTab={activeTab}
              />
            }
          />

          <Accordion
            title={"Audiolar"}
            tabs={tabs}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            content={"Nothing"}
          />
          <Accordion
            title={"Modullar"}
            tabs={tabs}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            content={"Nothing"}
          />
          <Accordion
            title={"Viktorina"}
            tabs={tabs}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            content={"Nothing"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Lessons;
