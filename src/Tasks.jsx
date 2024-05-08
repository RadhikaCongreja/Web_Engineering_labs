import { useState } from "react";
import "./Tasks.css";

function Tasks() {
  let [task, setTask] = useState(" ");
  let [status, setStatus] = useState("todo");

  return (
    <>
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task here..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {"  "}
        <button>Add</button>
      </div>
    </>
  );
}

export default Tasks;
