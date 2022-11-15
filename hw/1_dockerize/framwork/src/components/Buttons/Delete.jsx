import { FaRegTrashAlt } from "react-icons/fa";

import Button, { BUTTON_CLASS } from "../Button";

const DeleteButton = ({ onClick }) => (
  <Button
    text={<FaRegTrashAlt />}
    onClick={onClick}
    className={
      BUTTON_CLASS +
      " text-red-800 hover:text-red-700 opacity-70 hover:opacity-100"
    }
  />
);

export default DeleteButton;
