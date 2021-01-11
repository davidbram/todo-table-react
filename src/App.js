import "./App.css";
import ToDoList from "./components/ToDoList";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ToDoList />
      </Router>
    </div>
  );
}

export default App;
