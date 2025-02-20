function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.innerHTML = `<span>${taskText}</span><button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(newTask);

        taskInput.value = "";
        updateEmptyMessage(); 
    }
}

function deleteTask(button) {
    const taskItem = button.parentNode;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(taskItem);
    updateEmptyMessage(); 
}

function updateEmptyMessage() {
    const taskList = document.getElementById("taskList");
    const emptyMessage = document.getElementById("emptyMessage");

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block"; 
    } else {
        emptyMessage.style.display = "none"; 
    }
}

updateEmptyMessage();
