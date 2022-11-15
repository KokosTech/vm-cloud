import {
  FaRegCheckCircle,
  FaFire,
  FaRegClock,
  FaPencilAlt,
} from "react-icons/fa";

const Info = ({ completed, priority, created, dueDate }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between space-y-2 lg:space-y-0">
      <div className="flex space-x-2 self-start">
        <div className="flex items-center justify-center space-x-1">
          <FaRegCheckCircle />
          <p>{completed ? "completed" : "not completed"}</p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          {Array.from({ length: parseInt(priority) }, (_, index) => (
            <FaFire key={index} />
          ))}
        </div>
      </div>
      <div className="flex space-x-2 self-end">
        <div className="flex items-center justify-center space-x-1">
          <FaPencilAlt />
          <p>{created}</p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <FaRegClock />
          <p>{dueDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
