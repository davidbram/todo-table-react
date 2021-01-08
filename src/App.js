import "./App.css";
import ToDoList from "./components/ToDoList";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToDoList />
      </BrowserRouter>
    </div>
  );
}

export default App;
