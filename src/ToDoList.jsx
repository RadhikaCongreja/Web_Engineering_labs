import React, { useState } from "react";

function ToDoList() {
  const [friend, setFriend] = useState("");
  const [friends, setFriends] = useState([]); // ["sahi","gaa","asdajhsd"]
  //  [{friend: "name", type: "acha"| "Bura"}]

  function removeTask(todo) {
    setFriends(friends.filter((item) => item !== todo));
  }

  const [friendType, setFriendType] = useState("Backlog");

  function editTask(todo, newName) {
    const updatedFriends = friends.map((item) =>
      item === todo ? { ...item, name: newName } : item
    );
    setFriends(updatedFriends);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={friend}
        onChange={(e) => {
          setFriend(e.target.value);
        }}
        placeholder="Enter task"
      />
      <select
        value={friendType}
        onChange={(e) => {
          setFriendType(e.target.value);
        }}
      >
        <option value="Backlog">Backlog</option>
        <option value="InProgress">InProgress</option>
        <option value="Completed">Completed</option>
      </select>
      <button
        onClick={() => {
          setFriends((prev) => [...prev, { name: friend, type: friendType }]);
        }}
      >
        Add
      </button>
      <hr></hr>
      <div>
        Backlog Tasks :
        {friends
          .filter((item) => item.type === "Backlog")
          .map((friendItem) => (
            <li>
              {friendItem.name} {"  "}
              <button
                onClick={() => {
                  const newName = prompt("Enter new name:", friendItem.name);
                  if (newName !== null && newName !== "") {
                    editTask(friendItem, newName);
                  }
                }}
              >
                Edit{" "}
              </button>
              {"  "}
              <button
                onClick={() => {
                  removeTask(friendItem);
                }}
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
        <hr />
        InProgress Tasks :
        {friends
          .filter((item) => item.type === "InProgress")
          .map((friendItem) => (
            <li>
              {friendItem.name} {"  "}
              <button
                onClick={() => {
                  const newName = prompt("Enter new name:", friendItem.name);
                  if (newName !== null && newName !== "") {
                    editTask(friendItem, newName);
                  }
                }}
              >
                Edit{" "}
              </button>
              {"  "}
              <button
                onClick={() => {
                  removeTask(friendItem);
                }}
              >
                {" "}
                Remove{" "}
              </button>
            </li>
          ))}
        <hr />
        Completed Tasks :
        {friends
          .filter((item) => item.type === "Completed")
          .map((friendItem) => (
            <li>
              {friendItem.name} {"  "}
              <button
                onClick={() => {
                  const newName = prompt("Enter new name:", friendItem.name);
                  if (newName !== null && newName !== "") {
                    editTask(friendItem, newName);
                  }
                }}
              >
                {" "}
                Edit{" "}
              </button>
              {"  "}
              <button
                onClick={() => {
                  removeTask(friendItem);
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
