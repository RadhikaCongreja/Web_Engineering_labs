const Addbtn = document.getElementById("plus");
const  Minusbtn =document.getElementById('minus');
const label = document.getElementById("text");
let num = 0;

function addition(){
    num++;
    label.innerHTML = num;
    localStorage.setItem("key", num);
    
}
Addbtn.onclick = addition;
function subtraction(){
    num--;
    label.innerHTML = num;
    localStorage.setItem("key", num);
}
Minusbtn.onclick = subtraction;
label.innerHTML = localStorage.getItem("key");


const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const btn = document.getElementById("btn");

btn.style.backgroundColor = "grey";


function addTask() {
    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    taskInput.value = "";

    const btn2 = document.createElement("button");
    btn2.style.backgroundColor = "pink";
    btn2.style.borderRadius = "20%";
    btn2.classList.add("removeBtn");
    btn2.textContent = "Remove";
    li.appendChild(btn2);
    btn2.addEventListener("click", function () { removeTask(li) });

    // Save tasks to local storage
    saveTasksToLocalStorage();
}

// Function to remove a task
function removeTask(li) {
    li.remove();
    // Save tasks to local storage after removing
    saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    const tasks = [];
    taskList.childNodes.forEach(node => {
        if (node.tagName === "LI") {
            tasks.push(node.textContent);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            taskList.appendChild(li);

            const btn2 = document.createElement("button");
            btn2.style.backgroundColor = "pink";
            btn2.style.borderRadius = "20%";
            btn2.classList.add("removeBtn");
            btn2.textContent = "Remove";
            li.appendChild(btn2);
            btn2.addEventListener("click", function () { removeTask(li) });
        });
    }
}

// Clear the task list before loading tasks from local storage
taskList.innerHTML = "";
// Load tasks from local storage when the page loads
window.addEventListener("load", loadTasksFromLocalStorage);

// Event listener for adding a task
btn.addEventListener("click", addTask);