import React, { useState, useEffect } from "react";
import CreateItem from "./CreateItem/CreateItem";
import Table from "./Table/Table";
import TODO_LIST from "./TODO_LIST.json";


const ToDoContext = React.createContext();

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(TODO_LIST);

  const nextId = toDoList.length + 1;

  

  // useEffect(() => {
  //   console.log(toDoList);
  // }, [toDoList]);

  const addItem = (newItem) => {
    setToDoList((prevItems) => [...prevItems, newItem]);
  };

  const deleteItem = (selectedId) => {
    setToDoList(prevItems => prevItems.filter((item, id) => id !== selectedId));
  }

  return (
    <ToDoContext.Provider value={deleteItem}>
      <CreateItem addItem={addItem} nextId={nextId} />
      <Table toDoList={toDoList} onDelete={deleteItem} />
    </ToDoContext.Provider>
  );
};

export default ToDoList;

export {ToDoContext};

