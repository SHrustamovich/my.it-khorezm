import { CircleLockIcon, PlayIcon } from "@/assets/icons";

/* eslint-disable react/prop-types */
const Tab = ({ tabs, activeTab, handleTabClick }) => {
  
  return (
    <div className="tab">
      <ul className="tab__menu">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab__link ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
            disabled={tab.condition}
          >
            <div className="tab__inner">
              {index === activeTab ? <PlayIcon /> : <CircleLockIcon />}

              <p>{tab.title}</p>
            </div>

            <p>{tab.duration}</p>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
