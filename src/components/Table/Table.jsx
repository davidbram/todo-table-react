import React, {useEffect, useState} from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import "./Table.css";

const Table = (props) => {
  // console.log(props);

  const [toDoList, setToDoList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemNumber] = useState(5);

  const currentPageNumber = (pageNumber * itemNumber) - itemNumber;
  const paginatedItems = toDoList.slice().splice(currentPageNumber, itemNumber);

  const handlePrev = () => {
    if(pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  }

  const handleNext = () => {
    if(paginatedItems.length === 0) return;
    setPageNumber(pageNumber + 1);
  }

  useEffect(() => {
    setToDoList(props.toDoList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setToDoList(props.toDoList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.toDoList.length])

  const orderColumns = (todo) => ['id', 'Task', 'Description', 'Date'].map(column => todo[column]);

  const sortById = (type) => {
    if(type === 'asc') {
      setToDoList(prevList => prevList.slice().sort((itemA, itemB) => itemA.id - itemB.id));
    }
    else {
      setToDoList(prevList => prevList.slice().sort((itemA, itemB) => itemB.id - itemA.id));
    }
  }

  const sortByTask = (type) => {
    if(type === 'asc') {
      setToDoList(prevList => prevList.slice().sort((itemA, itemB) => itemA.Task.localeCompare(itemB.Task)));
    }
    else {
      setToDoList(prevList => prevList.slice().sort((itemA, itemB) => itemB.Task.localeCompare(itemA.Task)));
    }
  }

  const sortByDescription = (type) => {
    if(type === 'asc') {
  setToDoList(prevList => prevList.slice().sort((itemA, itemB) => itemA.Description.localeCompare(itemB.Description)));
    }
    else {
      setToDoList(prevList => prevList.slice().sort((itemA, itemB) => itemB.Description.localeCompare(itemA.Description)));
    }
  }

  const sortByDate = (type) => {

    const dateToNum = (d) => {
      d = d.split("/"); 
      return Number(d[2]+d[1]+d[0]);
    }

    if(type === 'asc') {
      setToDoList(prevList => prevList.slice().sort((itemA, itemB) => dateToNum(itemA.Date) - dateToNum(itemB.Date)));
    }
    else {
      setToDoList(prevList => prevList.slice().sort((itemA, itemB) => dateToNum(itemB.Date) - dateToNum(itemA.Date)))
    }
  }

  const selectSort = (header, type) => {
    switch (header) {
      case 'id':
        sortById(type);
        break;
      case'Task':
        sortByTask(type);
        break;
      case 'Description': 
        sortByDescription(type);
        break;
      case 'Date': 
        sortByDate(type);
        break;
      default:
        console.log('No such type');
        break;
    }
  }

  return (
    <>
      <table>
      <thead>
        <tr>
          {toDoList[0] &&
            Object.keys(toDoList[0]).map((header, index) => (
              <th key={index}>
                <div>
                <div>{header}</div>
                <div>
                <button onClick={() => {selectSort(header, 'asc')}}>▲</button>
                <button onClick={() => {selectSort(header, 'des')}}>▼</button>
                </div>
                </div>
                </th>
            ))}
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {paginatedItems && paginatedItems.map((todo, itemId) => (
          <tr key={todo.id}>
            { Object.entries(orderColumns(todo)).map(([column, cell]) =>
              column === "id" ? (
                <td key={column}>{itemId + 1}</td>
              ) : (
                <td key={column}>{cell}</td>
              )
            )}
            <td><EditButton id={todo.id}/></td>
            <td><DeleteButton id={todo.id}/></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="page-number">
    <p>Page number {pageNumber} </p>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
    </>
  );
};

export default Table;
