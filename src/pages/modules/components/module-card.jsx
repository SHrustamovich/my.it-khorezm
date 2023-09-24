import { useState, useEffect } from "react";
import { smile } from "@/assets/images";

function ModuleCard({ title, subtitle, content, text }) {
  const [condition, setCondition] = useState("");

  useEffect(() => {
    if (content.type.name == "GreenBtn") {
      setCondition("modul-card__progress");
    } else if (content.type.name == "GreenTickIcon") {
      setCondition("modul-card");
    } else {
      setCondition("modul-card__lock");
    }
  }, []);

  return (
    <div className={condition}>
      <img src={smile} alt="modul-img" className="modul-card__img"/>
      <div>
        <div className="modul-card__info">
          <p className="modul-card__title">{title}</p>
          <p className="modul-card__subtitle">{subtitle}</p>
        </div>

        <p className="modul-card__text">{text}</p>
      </div>

      <div className="modul-card__content">{content}</div>
    </div>
  );
}

export default ModuleCard;
