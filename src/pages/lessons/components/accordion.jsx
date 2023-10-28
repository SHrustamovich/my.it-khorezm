import { useState } from "react";
import { Progress } from "antd";
import Tab from "./tab";
import SmallTitle from "@/components/smallTitle";
import { TopArrowIcon } from "@/assets/icons";

// eslint-disable-next-line react/prop-types
const Accordion = ({ tabs, activeTab, handleTabClick }) => {
  const [icon, setIcon] = useState(true);
  const handleClick = () => {
    setIcon(!icon);
  };
  let process = 20;

  return (
    <div className="accordion">
      <div className="accordion-process">
        <SmallTitle text="Jarayon" />
        <Progress
          className="accordion_item"
          showInfo={false}
          strokeColor="#7DBA28"
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

      <details className="accordion-cources" onClick={handleClick}>
        <summary className="accordion-cources__title">
          <SmallTitle text={"Video Kurslar"} />
          <div className="accordion-cources__title-left">
            <p className="accordion-cources__data">10/110</p>

            <span className="accordion-cources__title-icon">
              {icon == true ? (
                <TopArrowIcon style={{ transform: "rotateZ(180deg)" }} />
              ) : (
                <TopArrowIcon />
              )}
            </span>
          </div>
        </summary>
        <div>
          <Tab
            tabs={tabs}
            handleTabClick={handleTabClick}
            activeTab={activeTab}
          />
        </div>
      </details>

      <details className="accordion-cources" onClick={handleClick}>
        <summary className="accordion-cources__title">
          <SmallTitle text={"Audio"} />
          <div className="accordion-cources__title-left">
            <p className="accordion-cources__data">10/110</p>

            <span className="accordion-cources__title-icon">
              {icon == true ? (
                <TopArrowIcon style={{ transform: "rotateZ(180deg)" }} />
              ) : (
                <TopArrowIcon />
              )}
            </span>
          </div>
        </summary>
        <div className="accordion-cources__child ">Nothing</div>
      </details>

      <details className="accordion-cources" onClick={handleClick}>
        <summary className="accordion-cources__title">
          <SmallTitle text={"Modul"} />
          <div className="accordion-cources__title-left">
            <p className="accordion-cources__data">10/110</p>

            <span className="accordion-cources__title-icon">
              {icon == true ? (
                <TopArrowIcon style={{ transform: "rotateZ(180deg)" }} />
              ) : (
                <TopArrowIcon />
              )}
            </span>
          </div>
        </summary>
        <div className="accordion-cources__child ">Nothing</div>
      </details>

      <details className="accordion-cources" onClick={handleClick}>
        <summary className="accordion-cources__title">
          <SmallTitle text={"Viktorina"} />
          <div className="accordion-cources__title-left">
            <p className="accordion-cources__data">10/110</p>

            <span className="accordion-cources__title-icon">
              {icon == true ? (
                <TopArrowIcon style={{ transform: "rotateZ(180deg)" }} />
              ) : (
                <TopArrowIcon />
              )}
            </span>
          </div>
        </summary>
        <div className="accordion-cources__child">Nothing</div>
      </details>
    </div>
  );
};

export default Accordion;
