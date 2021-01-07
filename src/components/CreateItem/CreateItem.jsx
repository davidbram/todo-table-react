import React, { useState } from "react";
import "./CreateItem.css";

const CreateItem = (props) => {
  const initialState = {
    id: "",
    Task: "",
    Description: "",
    Date: "",
  };

  const [item, setItem] = useState(initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const today = new Date();
    const day = ("0" + today.getDate()).slice(-2);
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const year = today.getFullYear();
    const currentDate = `${day}/${month}/${year}`;
    // console.log(props.nextId);
    // console.log(props.currentDate);

    console.log({ ...item, id: props.nextId, Date: currentDate });
    props.addItem({ ...item, id: props.nextId, Date: currentDate });
    setItem(initialState);
  };

  return (
    <div className="create-task">
      <form onSubmit={submitHandler}>
        <div className="todo-field">
          <label htmlFor="task" className="todo-label">
            Task:
          </label>
          <input
            type="text"
            name="Task"
            placeholder="Enter task"
            value={item.Task}
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
            value={item.Description}
            onChange={changeHandler}
          />
        </div>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateItem;
