import { locations } from "#constants";
import { setActiveLocation } from "#RTK/locationSlice";
import { openWindow } from "#RTK/windowSlice";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import { useDispatch } from "react-redux";

const projects = locations?.work?.children ?? [];

const Home = () => {
  const dispatch = useDispatch();

  const handleOpenProjectFinder = (project) => {
    dispatch(setActiveLocation({ location: project }));
    dispatch(openWindow({ windowKey: "finder" }));
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects?.map((project) => (
          <li
            key={project?.id}
            className={clsx("group folder", project?.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={project?.name} />
            <p>{project?.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
