import { GreenTickIcon, LockIcon, SmileIcon } from "@/assets/icons";
import ProccessCard from "./components/proccessCard";
import { moduleData } from "@/utils/data";
import PlatteIcon from "@/assets/icons/platteIcon";
import GreenBtn from "@/components/greenBtn";

const Modules = () => {
  return (
    <div className="modules_page">
      <div className="modules">
        {moduleData.map((el) => {
          return (
            <div
              key={el.id}
              style={{
                filter: `${
                  el.condition == "lock" ? "grayscale(100%)" : "grayscale(0%)"
                }`,
                outline: `${
                  el.condition == "progress" ? "3px solid #166199" : "0px"
                }`,
                outlineOffset: `${el.condition == "progress" ? "4px" : "0px"}`,
                backgroundColor: `${
                  el.condition == "lock" ? "#DFDFDF" : "#FFF"
                }`,
              }}
              className="module"
            >
              {el.condition == "done" ? <SmileIcon /> : <PlatteIcon />}
              <div className="module_main">
                <div className="module_info">
                  <p className="module_title">{el.module}</p>
                  <p className="module_task">{el.task}</p>
                </div>

                <p className="module_text">{el.text}</p>
              </div>

              {el.condition == "done" ? (
                <GreenTickIcon />
              ) : el.condition == "progress" ? (
                <GreenBtn
                  text="Davom ettirish"
                  padding="12px 25px"
                  link="/test"
                />
              ) : (
                <LockIcon />
              )}
            </div>
          );
        })}
      </div>

      <ProccessCard />
    </div>
  );
};

export default Modules;
