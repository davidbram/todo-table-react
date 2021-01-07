import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask/CreateTask";
import Table from "./Table/Table";
import TODO_LIST from "./TODO_LIST.json";

const ToDoList = () => {
  const [item, setItem] = useState({
    id: "",
    Task: "",
    Description: "",
    Date: "",
  });

  const [toDoList, setToDoList] = useState(TODO_LIST);

  useEffect(() => {
    console.log(toDoList);
  }, [toDoList])

  const submitHandler = (e) => {
    e.preventDefault();
    const today = new Date(2022, 3, 15);
    const currentDate = `${("0"+today.getDate()).slice(-2)}/${("0"+(today.getMonth()+1)).slice(-2)}/${today.getFullYear()}`;
    const nextItem = toDoList.length + 1;
    console.log(nextItem);
    console.log(currentDate);

    console.log([...toDoList, { ...item, id: nextItem, Date: currentDate }]);

    setToDoList([...toDoList, { ...item, id: nextItem, Date: currentDate }]);

    setItem({
      id: "",
      Task: "",
      Description: "",
      Date: "",
    })


  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <>
      <CreateTask
        submitTask={submitHandler}
        item={item}
        changeHandler={changeHandler}
      />
      <Table toDoList={toDoList} />
    </>
  );
};

export default ToDoList;
