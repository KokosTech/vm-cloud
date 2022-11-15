import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import { TASK_TEMPLATE } from "../constants/dataTemplates";
import { useProject } from "../context/projectContext";

import SubtaskContainer from "../partials/Project/Subtasks/Container";
import ProjectPartial from "../partials/Project/Projects";

import Button from "../components/Button";

import ProjectNotFound from "../errors/ProjectNotFound";
import UnknownError from "../errors/Unknown";

const Project = () => {
  const { id } = useParams();
  const { loading, error, getProject, updateProject } = useProject();

  const [project, setProject] = useState(undefined);
  const [task, setTask] = useState(TASK_TEMPLATE);

  const handleBack = () => window.history.back();

  const handleUpdate = () => {
    setProject({ ...project, tasks: [...project.tasks, task] });
    setTask(TASK_TEMPLATE);
  };

  useEffect(() => {
    if ((!loading || !error) && id) {
      setProject(getProject(parseInt(id)));
    }
  }, [id, loading, error]);

  useEffect(() => {
    if (task.id !== 0) handleUpdate();
  }, [task]);

  useEffect(() => {
    if (project) updateProject(project.id, project);
  }, [project]);

  if (loading || project === undefined) return <div>Loading...</div>;
  if (error) return <UnknownError />;
  if (project === null) return <ProjectNotFound />;

  return (
    <div className="w-full max-w-7xl px-8 py-4 flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-8">
      <Button icon={true} text={<FaAngleLeft />} onClick={handleBack} />
      <div className="w-full flex md:flex-row flex-col justify-between md:space-x-8">
        <ProjectPartial project={project} setProject={setProject} />
        <SubtaskContainer
          task={task}
          project={project}
          setTask={setTask}
          setProject={setProject}
        />
      </div>
    </div>
  );
};

export default Project;
