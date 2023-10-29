import { BgBookIcon, BgCalendarIcon, BigCrownIcon, CrownIcon } from "@/assets/icons";

function ClosedFiles() {
  return (
    <>
      <div className="close">
        <h2 className="close-title">Qo’shimcha funksiyalarni ochish uchun a’zo bo’ling !</h2>
        <button className="close-btn">A'zo bo'lish</button>
        <BgBookIcon className="close-book__icon"/>
        <BgCalendarIcon className="close-calendar__icon"/>
        <CrownIcon className="close-crown__icon"/>
        <BigCrownIcon className="close-big__crown-icon"/>
      </div>
    </>
  );
}

export default ClosedFiles;
