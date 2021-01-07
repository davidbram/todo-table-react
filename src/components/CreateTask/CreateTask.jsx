import React from "react";
import "./CreateTask.css";

const CreateTask = (props) => {
  return (
    <div className="create-task">
      <form
        onSubmit={props.submitTask}
      >
        <div className="todo-field">
          <label htmlFor="task" className="todo-label">
            Task:
          </label>
          <input
            type="text"
            name="Task"
            placeholder="Enter task"
            value={props.item.Task}
            onChange={props.changeHandler}
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
            value={props.item.Description}
            onChange={props.changeHandler}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
