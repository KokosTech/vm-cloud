import AddProject from "./AddProject";

const HomeHeader = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-5xl font-black">Projects</h1>
      <AddProject />
    </div>
  );
};

export default HomeHeader;
