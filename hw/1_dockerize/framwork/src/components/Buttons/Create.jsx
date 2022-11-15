import { FaPlus } from "react-icons/fa";

import Button, { BUTTON_CLASS } from "../Button";

const CreateButton = ({ onClick }) => (
  <Button text={<FaPlus />} onClick={onClick} className={BUTTON_CLASS} />
);

export default CreateButton;
