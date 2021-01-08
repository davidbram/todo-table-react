import React, { useState, useEffect } from "react";
import CreateItem from "./CreateItem/CreateItem";
import SearchItem from "./SearchItem/SearchItem";
import Table from "./Table/Table";
import TODO_LIST from "./TODO_LIST.json";

const DeleteItemContext = React.createContext();

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(TODO_LIST);
  const [searchTask, setSearchTask] = useState("");
  const nextId = toDoList.length + 1;

  // useEffect(() => {
  //   console.log(toDoList);
  // }, [toDoList]);

  const addItem = (newItem) => {
    setToDoList(prevItems => [...prevItems, newItem]);
  };

  const deleteItem = (selectedId) => {
    setToDoList(prevItems =>
      prevItems.filter((item, id) => id !== selectedId)
    );
  };

  const editSearchTask = (e) => {
    setSearchTask(e.target.value);
  };

  const dynamicSearchItem = () => {
    return toDoList.filter(todo =>
      todo.Task.toLowerCase().includes(searchTask.toLowerCase())
    );
  };

  return (
    <DeleteItemContext.Provider value={deleteItem}>
      <CreateItem addItem={addItem} nextId={nextId} />
      <Table toDoList={dynamicSearchItem()} onDelete={deleteItem} />
      <SearchItem editSearchTask={editSearchTask} searchTask={searchTask} />
    </DeleteItemContext.Provider>
  );
};

export default ToDoList;

export { DeleteItemContext };
