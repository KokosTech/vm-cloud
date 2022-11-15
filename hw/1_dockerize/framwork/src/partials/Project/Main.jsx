import Input from "../../components/Input";

const Main = ({ project, setProject }) => {
  const { name, description } = project;

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  return (
    <>
      <Input
        type="text"
        name="name"
        id="name"
        onChange={handleChanges}
        placeholder="Project name"
        value={name}
        required={true}
        className="bg-transparent text-4xl font-black appearance-none w-full focus:outline-none focus:ring-none"
      />
      <Input
        type="textarea"
        name="description"
        id="description"
        value={description}
        onChange={handleChanges}
        placeholder="description"
        minRows={2}
        maxRows={24}
        required={true}
        className="bg-transparent text-neutral-200 appearance-none w-full focus:outline-none focus:ring-none resize-none scroll-auto"
      />
    </>
  );
};

export default Main;
