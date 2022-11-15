import { useProject } from "../context/projectContext";

import HomeHeader from "../partials/Home/Header";
import ProjectsList from "../partials/Home/ProjectstList";

const Home = () => {
  const { projects } = useProject();
  return (
    <div className="w-full">
      <HomeHeader />
      <ProjectsList projects={projects} />
    </div>
  );
};

export default Home;
