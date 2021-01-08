import React, { useContext } from "react";
import { DeleteItemContext } from "../ToDoList";

const DeleteButton = (props) => {
  const deleteItem = useContext(DeleteItemContext);

  return (
    <button
      onClick={() => {
        deleteItem(props.id);
      }}
    >
      Delete
      
    </button>
  );
};

export default DeleteButton;
