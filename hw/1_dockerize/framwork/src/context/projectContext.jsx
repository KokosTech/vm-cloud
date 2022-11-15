import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const getProject = (id) => {
    if (id) {
      const proj = projects.find((project) => project.id === id);
      if (proj) return proj;
      else return null;
    }
  };

  const removeProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const updateProject = (id, newProject) => {
    setProjects(
      projects.map((project) => (project.id === id ? newProject : project))
    );
  };

  const value = useMemo(
    () => ({
      projects,
      loading,
      error,
      addProject,
      getProject,
      removeProject,
      updateProject,
    }),
    [projects, loading, error]
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await JSON.parse(localStorage.getItem("projects"));
        if (projects) setProjects(projects);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0)
      localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
export default ProjectContext;
