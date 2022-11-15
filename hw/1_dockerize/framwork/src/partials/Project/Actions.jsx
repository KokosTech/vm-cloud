import { useNavigate } from "react-router-dom";
import { useProject } from "../../context/projectContext";

import Button from "../../components/Button";

const Actions = ({ project, setProject }) => {
  const navigate = useNavigate();
  const { removeProject } = useProject();

  const handleComplete = () => {
    setProject({ ...project, completed: !project.completed });
  };

  const handleRemove = () => {
    removeProject(project.id);
    navigate("/");
  };

  return (
    <div className="flex justify-end space-x-2">
      <Button
        text="Delete"
        onClick={handleRemove}
        className="px-4 py-2 rounded-full
                        bg-red-900 hover:opacity-90 focus:opacity-90
                        border border-slate-900 focues:outline-none focus:ring-none"
      />
      <Button
        text={project.completed ? "Mark as incompleted" : "Mark as completed"}
        onClick={handleComplete}
        className="px-4 py-2 rounded-full
                        bg-slate-900 hover:bg-slate-800 focus:bg-slate-800
                        border border-slate-800 hover:border-slate-700 focus:border-slate-700 focues:outline-none focus:ring-none"
      />
    </div>
  );
};

export default Actions;
