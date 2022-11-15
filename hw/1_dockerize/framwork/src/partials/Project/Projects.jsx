import Main from "./Main";
import Info from "./Info";
import Actions from "./Actions";

const ProjectPartial = ({ project, setProject }) => {
  return (
    <div className="w-full space-y-4">
      <Main project={project} setProject={setProject} />
      <Info {...project} />
      <Actions project={project} setProject={setProject} />
    </div>
  );
};

export default ProjectPartial;
