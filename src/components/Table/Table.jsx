import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import "./Table.css";

const Table = (props) => {
  // console.log(props);

  const orderColumns = (todo) => ['id', 'Task', 'Description', 'Date'].map(column => todo[column]);

  return (
    <table>
      <thead>
        <tr>
          {props.toDoList[0] &&
            Object.keys(props.toDoList[0]).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.toDoList && props.toDoList.map((todo, itemId) => (
          <tr key={todo.id}>
            { Object.entries(orderColumns(todo)).map(([column, cell]) =>
              column === "id" ? (
                <td key={column}>{itemId + 1}</td>
              ) : (
                <td key={column}>{cell}</td>
              )
            )}
            <td><EditButton id={todo.id}/></td>
            <td><DeleteButton id={todo.id} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
