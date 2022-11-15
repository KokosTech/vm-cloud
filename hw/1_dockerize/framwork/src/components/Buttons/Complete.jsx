import { FaCheck } from "react-icons/fa";

import Button, { BUTTON_CLASS } from "../Button";

const CompleteButton = ({ completed, onClick }) => (
  <Button
    text={completed ? <FaCheck /> : <FaCheck className="opacity-30" />}
    onClick={onClick}
    className={BUTTON_CLASS}
  />
);

export default CompleteButton;
