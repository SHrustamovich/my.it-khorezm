import { DownloadIcon } from "@/assets/icons";
import { filesInfo } from "@/utils/data";
import React from "react";

const Files = () => {
  return (
    <React.Fragment>
      <div className="group">
        <h2 className="group__title">
          Mavzuga doir kerakli fayllarni yuklab olish
        </h2>
        <button className="group__btn">
          3 ta fayl <DownloadIcon />
        </button>
      </div>
      <div className="files">
        {filesInfo.map((el) => {
          return (
            <div className="files__child" key={el.id}>
              <div className="files__child-box">
                <span>{el.icon}</span>
                <p className="files__child-title">{el.title}</p>
              </div>
              <button className="files__child-btn">{el.btn}</button>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Files;
