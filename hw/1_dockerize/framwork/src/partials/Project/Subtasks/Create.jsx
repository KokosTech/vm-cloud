import { useEffect } from "react";
import useError from "../../../hooks/useError";

import Input from "../../../components/Input";
import CompleteButton from "../../../components/Buttons/Complete";
import CreateButton from "../../../components/Buttons/Create";

const INPUT_CLASS = `
bg-transparent text-xl font-bold line-clamp-2 appearance-none w-full focus:outline-none focus:ring-none`;

const CreateSubtask = ({ task, setTask }) => {
  const { error, validateName, validateDescription, setAll, reset } =
    useError();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error.name === null || error.description === null) setAll();

    if (error.name === false && error.description === false) {
      setTask({
        ...task,
        id: Date.now(),
      });
      reset();
    }
  };

  useEffect(() => {
    if (error.name === null && task.name.length > 0) validateName(task.name);

    if (error.name !== null) validateName(task.name);
  }, [error.name, task.name]);

  useEffect(() => {
    if (error.description === null && task.description.length > 0)
      validateDescription(task.description);

    if (error.description !== null) validateDescription(task.description);
  }, [task.description, error]);

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-80 p-2 space-x-4 flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800"
    >
      <div className="flex items-center space-x-4">
        <CompleteButton />
        <div className="w-full max-w-fit">
          <Input
            type="text"
            name="name"
            id="name"
            value={task.name}
            onChange={handleChanges}
            placeholder="New subtask"
            required={true}
            error={error.name}
            className={INPUT_CLASS}
          />
          <Input
            type="textarea"
            name="description"
            id="description"
            value={task.description}
            onChange={handleChanges}
            placeholder="description"
            minRows={2}
            maxRows={3}
            required={true}
            error={error.description}
            className="w-full bg-transparent text-neutral-300 text-sm line-clamp-3 appearance-none focus:outline-none focus:ring-none resize-none scroll-auto"
          />
        </div>
      </div>
      <CreateButton onClick={handleSubmit} />
    </form>
  );
};

export default CreateSubtask;
