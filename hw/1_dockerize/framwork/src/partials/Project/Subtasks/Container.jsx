import CreateSubtask from "./Create";
import Subtask from "./Subtask";

const SubtaskContainer = ({ task, project, setTask, setProject }) => {
  return (
    <div className="flex flex-col space-y-4 ">
      <h2 className="text-3xl font-bold">subtasks</h2>
      <ul className="space-y-2">
        {project.tasks.length > 0 &&
          project.tasks.map((task) => (
            <Subtask key={task.id} task={task} project={project} setProject={setProject} />
          ))}
        <CreateSubtask task={task} setTask={setTask} />
      </ul>
    </div>
  );
};

export default SubtaskContainer;
