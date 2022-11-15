import { useState } from "react";

import AddProjectModal from "./AddProjectModal";
import CreateButton from "../../components/Buttons/Create";

// button to open modal
const AddProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <CreateButton onClick={handleOpen} />
      <AddProjectModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default AddProject;
