import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import CreateItem from "./CreateItem/CreateItem";
import SearchItem from "./SearchItem/SearchItem";
import Error from "./Error";
import Table from "./Table/Table";
import axios from "axios";
import NavBar from "./NavBar/NavBar";
import EditItem from "./EditItem/EditItem";

const DeleteItemContext = React.createContext();
const EditItemContext = React.createContext();

const ToDoList = () => {
  const [toDoList, setToDoList] = useState([]);
  const [searchTask, setSearchTask] = useState("");
  const nextId = toDoList.length + 1;
  const url = "http://localhost:3001/items";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setToDoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setToDoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [toDoList.length])

  const addItem = (newItem) => {
    axios
      .post(url, newItem)
      .then((res) => {
        //console.log(res);
        setToDoList((prevItems) => [...prevItems, newItem]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = (selectedId) => {
    axios.delete(url + `/${selectedId}`)
    .then(res => {
      console.log(res.data);
      setToDoList(prevItems => prevItems.filter((item, id) => item.id !== selectedId));
    })
    .catch(err => {
      console.log(err);
    });
  };


  const editItem = async (selectedId, selectedItem) => {
    axios.patch(url+`/${selectedId}`, selectedItem)
   .then(res => {
    axios.get(url)
    .then(res => {
      setToDoList(res.data)
    })
    .catch(err => console.log(err))
   })
    .catch(err => console.log(err));
  }

  const editSearchTask = (e) => {
    setSearchTask(e.target.value);
  };

  const dynamicSearchItem = () => {
    return toDoList.filter((todo) =>
      todo.Task.toLowerCase().includes(searchTask.toLowerCase())
    );
  };

  return (
    <>
      <NavBar />
      <EditItemContext.Provider value={editItem}>
      <Switch>
        <Route
          path="/add"
          component={() => <CreateItem addItem={addItem} nextId={nextId} />}
        />

        <Route
          path="/"
          component={() => (
            <DeleteItemContext.Provider value={deleteItem}>
              <SearchItem
                editSearchTask={editSearchTask}
                searchTask={searchTask}
              />
              <Table toDoList={dynamicSearchItem()} onDelete={deleteItem} />
            </DeleteItemContext.Provider>
          )}
          exact
        />
        
        <Route
          path="/edit/:id"
          component={EditItem}
        />

        <Route component={Error} />
      </Switch>
      </EditItemContext.Provider>
    </>
  );
};

export default ToDoList;

export { DeleteItemContext, EditItemContext };
