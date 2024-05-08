import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState([]); // ["sahi","gaa","asdajhsd"]
  //  [{task: "name", type: "acha"| "Bura"}]

  function removeTask(todo) {
    setStatus(status.filter((item) => item !== todo));
  }

  const [statusType, setStatusType] = useState("Backlog");

  function editTask(todo, newName) {
    const updatedTasks = status.map((item) =>
      item === todo ? { ...item, name: newName } : item
    );
    setStatus(updatedTasks);
  }

  return (
    <div className="list">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Enter task"
      />{" "}
      <select
        value={statusType}
        onChange={(e) => {
          setStatusType(e.target.value);
        }}
      >
        <option value="Backlog">Backlog</option>
        <option value="InProgress">InProgress</option>
        <option value="Completed">Completed</option>
      </select>{" "}
      <button
        onClick={() => {
          setStatus((prev) => [...prev, { name: task, type: statusType }]);
        }}
      >
        Add
      </button>
      <hr></hr>
      <div>
        Backlog Tasks :
        {status
          .filter((item) => item.type === "Backlog")
          .map((taskItem) => (
            <li>
              {taskItem.name} {"  "}
              <button
                onClick={() => {
                  const newName = prompt("Enter new name:", taskItem.name);
                  if (newName !== null && newName !== "") {
                    editTask(taskItem, newName);
                  }
                }}
              >
                Edit{" "}
              </button>
              {"  "}
              <button
                onClick={() => {
                  removeTask(taskItem);
                }}
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
        <hr />
        InProgress Tasks :
        {status
          .filter((item) => item.type === "InProgress")
          .map((taskItem) => (
            <li>
              {taskItem.name} {"  "}
              <button
                onClick={() => {
                  const newName = prompt("Enter new name:", taskItem.name);
                  if (newName !== null && newName !== "") {
                    editTask(taskItem, newName);
                  }
                }}
              >
                Edit{" "}
              </button>
              {"  "}
              <button
                onClick={() => {
                  removeTask(taskItem);
                }}
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
        <hr />
        Completed Tasks :
        {status
          .filter((item) => item.type === "Completed")
          .map((taskItem) => (
            <li>
              {taskItem.name} {"  "}
              <button
                onClick={() => {
                  const newName = prompt("Enter new name:", taskItem.name);
                  if (newName !== null && newName !== "") {
                    editTask(taskItem, newName);
                  }
                }}
              >
                {" "}
                Edit{" "}
              </button>
              {"  "}
              <button
                onClick={() => {
                  removeTask(taskItem);
                }}
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
      </div>
    </div>
  );
}

export default ToDoList;
