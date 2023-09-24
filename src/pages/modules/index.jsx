import ModuleCard from "./components/module-card";
import GreenBtn from "./components/greenBtn";
import { GreenTickIcon, LockIcon } from "@/assets/icons";
import ContinueCard from "./components/continue-card";

function Modules() {
  const modulData = [
    {
      id: 1,
      title: "1-Modul",
      subtitle: "15 savol",
      text: "Lorem Ipsum is simply dummy text",
      content: <GreenTickIcon />,
    },
    {
      id: 2,
      title: "2-Modul",
      subtitle: "15 savol",
      text: "Lorem Ipsum is simply dummy text",
      content: <GreenTickIcon />,
    },
    {
      id: 3,
      title: "3-Modul",
      subtitle: "15 savol",
      text: "Lorem Ipsum is simply dummy text",
      content: <GreenBtn text="Testni boshlash" link="/test" />,
    },
    {
      id: 4,
      title: "4-Modul",
      subtitle: "15 savol",
      text: "Lorem Ipsum is simply dummy text",
      content: <LockIcon />,
    },
    {
      id: 5,
      title: "5-Modul",
      subtitle: "15 savol",
      text: "Lorem Ipsum is simply dummy text",
      content: <LockIcon />,
    },
  ];

  return (
    <div className="modul__wrapper">
      <div className="modul-card__wrapper">
        {modulData.map((el) => {
          return (
            <ModuleCard
              key={el.id}
              icon={el.icon}
              title={el.title}
              subtitle={el.subtitle}
              text={el.text}
              content={el.content}
            />
          );
        })}
      </div>
      <ContinueCard />
    </div>
  );
}

export default Modules;
