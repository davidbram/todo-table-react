import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { EditItemContext } from "../ToDoList";

const EditItem = (props) => {
  console.log(props);
  const itemId = props.match.params.id;
  const [editedItem, setEditedItem] = useState({});
  const editItem = useContext(EditItemContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/items/${itemId}`)
      .then((res) => {
        console.log(res.data);
        setEditedItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    editItem(itemId, editedItem);
  };

  return (
    <div className="edit-task">
      <form onSubmit={submitHandler}>
        <div className="todo-field">
          <label htmlFor="task" className="todo-label">
            Task:
          </label>
          <input
            type="text"
            name="Task"
            placeholder="Enter task"
            value={editedItem.Task}
            onChange={changeHandler}
          />
        </div>

        <div className="todo-field">
          <label htmlFor="description" className="todo-label">
            Description:
          </label>
          <textarea
            type="text"
            name="Description"
            placeholder="Enter description"
            value={editedItem.Description}
            onChange={changeHandler}
          />
        </div>

        <button type="submit">Edit Task</button>
      </form>
    </div>
  );
};

export default EditItem;
