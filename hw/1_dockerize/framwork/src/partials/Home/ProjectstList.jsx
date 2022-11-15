import Project from "./Project";

const ProjectsList = ({ projects, addProject }) => {
  return (
    <ul className="w-full p-5 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
