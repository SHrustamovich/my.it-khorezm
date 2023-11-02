import { useState } from "react";
import MemberModal from "../memberModal";
import {
  BgBookIcon,
  BgCalendarIcon,
  BigCrownIcon,
  CrownIcon,
} from "@/assets/icons";

function Files() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="files">
        <h2 className="files-title">
          Qo’shimcha funksiyalarni ochish uchun a’zo bo’ling !
        </h2>
        <button className="files-btn" onClick={showModal}>
          A`zo bo`lish
        </button>
        <BgBookIcon className="files-book__icon" />
        <BgCalendarIcon className="files-calendar__icon" />
        <CrownIcon className="files-crown__icon" />
        <BigCrownIcon className="files-big__crown-icon" />
        <MemberModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
}

export default Files;
