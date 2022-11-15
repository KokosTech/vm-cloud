import { useState, useEffect } from "react";
import { FaFire } from "react-icons/fa";
import { useProject } from "../../context/projectContext";

import { PROJECT_TEMPLATE } from "../../constants/dataTemplates";
import getDate from "../../utils/getDate";

import Input from "../../components/Input";
import Button from "../../components/Button";
import useError from "../../hooks/useError";

const AddProjectModal = ({ isOpen, onClose }) => {
  const [project, setProject] = useState(PROJECT_TEMPLATE);
  const { error, validateName, validateDescription, setAll, reset } =
    useError();
  const { addProject } = useProject();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error.name === null || error.description === null) setAll();

    if (error.name === false && error.description === false) {
      setProject({
        ...project,
        id: Date.now(),
        priority: project.priority,
        created: getDate(),
      });
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setProject(PROJECT_TEMPLATE);
      reset();
    }
  }, [isOpen]);

  useEffect(() => {
    if (error.name === null && project.name.length > 0)
      validateName(project.name);

    if (error.name !== null) validateName(project.name);
  }, [error.name, project.name]);

  useEffect(() => {
    if (error.description === null && project.description.length > 0)
      validateDescription(project.description);

    if (error.description !== null) validateDescription(project.description);
  }, [project.description, error]);

  useEffect(() => {
    if (project.id !== 0) {
      addProject(project);
      setProject(PROJECT_TEMPLATE);
    }
  }, [project]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 p-4 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg px-8 py-6 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-black mb-4">Add Project</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="text"
            name="name"
            id="name"
            value={project.name}
            onChange={handleChange}
            placeholder="Project Name"
            required
            error={error.name}
            className={`w-full bg-transparent p-2 pb-1 rounded-none
                        border-b border-slate-700 hover:border-slate-600 focus:border-slate-600 
                       text-white text-xl font-bold line-clamp-5 appearance-none focus:outline-none focus:ring-none resize-none scroll-auto `}
          />
          <Input
            type="textarea"
            name="description"
            id="description"
            value={project.description}
            onChange={handleChange}
            placeholder={"Description"}
            minRows={6}
            required={true}
            error={error.description}
            className={`w-full bg-transparent rounded-xl p-2
                        border border-slate-700 hover:border-slate-600 focus:border-slate-600 
                       text-neutral-300 line-clamp-5 appearance-none focus:outline-none focus:ring-none resize-none scroll-auto`}
          />
          <div className="flex flex-col sm:flex-row items-start justify-between space-y-2 sm:space-y-0">
            <Input
              type="radio"
              name="priority"
              id="priority"
              value={project.priority}
              onChange={handleChange}
              text="Priority"
              required={true}
              min={1}
              max={3}
              iText={[
                <FaFire className="text-green-700" />,
                Array.from({ length: 2 }, (_, index) => (
                  <FaFire key={index} className="text-orange-700" />
                )),
                Array.from({ length: 3 }, (_, index) => (
                  <FaFire key={index} className="text-red-700" />
                )),
              ]}
              className={`fixed opacity-0 w-0 h-0`}
            />
            <Input
              type="date"
              name="dueDate"
              id="dueDate"
              value={project.dueDate}
              onChange={handleChange}
              text="Due Date"
              required={true}
              className="bg-transparent py-2 px-4 rounded-full border border-slate-800 hover:border-slate-700 focus:border-slate-700 focus:outline-none focus:ring-none"
            />
          </div>

          <div className="flex justify-between space-x-4">
            <Button
              text="Add project"
              onClick={handleSubmit}
              className="px-4 py-2 rounded-full
                        bg-slate-800 hover:bg-slate-700 focus:bg-slate-700
                        border border-slate-600 hover:border-slate-600 focus:border-slate-600 focues:outline-none focus:ring-none"
            />
            <Button
              text="Close"
              onClick={onClose}
              className="px-4 py-2 rounded-full
                    bg-red-900 hover:opacity-90 focus:opacity-90
                      border border-slate-700 focues:outline-none focus:ring-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
