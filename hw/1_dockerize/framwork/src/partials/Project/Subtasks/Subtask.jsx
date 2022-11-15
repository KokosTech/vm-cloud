import Input from "../../../components/Input";
import CompleteButton from "../../../components/Buttons/Complete";
import DeleteButton from "../../../components/Buttons/Delete";

const Subtask = ({ task, project, setProject }) => {
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      tasks: project.tasks.map((subtask) =>
        subtask.id === task.id ? { ...subtask, [name]: value } : subtask
      ),
    });
  };

  const handleComplete = (taskId) => {
    const updatedTasks = project.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setProject({ ...project, tasks: updatedTasks });
  };

  const handleRemove = (taskId) => {
    const updatedTasks = project.tasks.filter((task) => task.id !== taskId);
    setProject({ ...project, tasks: updatedTasks });
  };

  return (
    <li
      className="w-full md:w-80 p-2 space-x-4 flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800"
      key={task.id}
    >
      <div className="flex items-center space-x-4 ">
        <CompleteButton
          completed={task.completed}
          onClick={() => handleComplete(task.id)}
        />
        <div>
          <Input
            type="textarea"
            name="name"
            id="name"
            onChange={handleChanges}
            placeholder="Project name"
            value={task.name}
            minRows={1}
            maxRows={2}
            required={true}
            className="bg-transparent text-xl font-bold line-clamp-2 appearance-none w-full focus:outline-none focus:ring-none resize-none scroll-auto"
          />
          <Input
            type="textarea"
            name="description"
            id="description"
            value={task.description}
            onChange={handleChanges}
            placeholder="description"
            minRows={1}
            maxRows={3}
            required={true}
            className="bg-transparent text-neutral-300 text-sm line-clamp-3 break-words appearance-none w-full focus:outline-none focus:ring-none resize-none scroll-auto"
          />
        </div>
      </div>
      <DeleteButton onClick={() => handleRemove(task.id)} />
    </li>
  );
};

export default Subtask;
