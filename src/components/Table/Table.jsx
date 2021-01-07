import React from "react";
import "./Table.css";

const Table = (props) => {
  console.log(props);
  return (
    <table>
      <thead>
        <tr>
          {props.toDoList[0] && Object.keys(props.toDoList[0]).map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.toDoList.map((todo, itemId) => (
          <tr key={todo.id}>
            {Object.entries(todo).map(([column, cell]) => (
              column === 'id' ? <td key={column}>{itemId+1}</td> : <td key={column}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
