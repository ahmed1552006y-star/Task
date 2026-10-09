let tasks = [];

function addtask() {
    let nameInput = document.querySelector(".AddTaskName input");
    let descInput = document.querySelector(".AddTaskDesc input");

    if (nameInput.value === "") {
        alert(" !!!   You must write Task Name   !!!");
        return;
    }


    let newTask = {
        name: nameInput.value,
        desc: descInput.value,
        completed: false
    };
    tasks.push(newTask);

    nameInput.value = "";
    descInput.value = "";

    displayTasks();
}

function displayTasks() {
    let taskList = document.querySelector(".TaskList");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let isChecked = tasks[i].completed ? "checked" : "";
        let textStyle = tasks[i].completed ? "text-decoration: line-through; color: #9CA3AF;" : "";
        let taskHTML = `
            <li>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <input type="checkbox" ${isChecked} onchange="toggleTask(${i})">
                    <span style="${textStyle}">${tasks[i].name} ${tasks[i].desc ? ' , ' + tasks[i].desc : ''}</span>
                </div>
                
                <div style="display: flex; gap: 8px;">
                    <button class="update-btn" onclick="updateTask(${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    
                    <button class="DeleteBtn" onclick="deleteTask(${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </li>
        `;

        taskList.innerHTML += taskHTML;
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function updateTask(index) {
    let newName = prompt(" Update Task Name :", tasks[index].name);
    if (newName) {
        let newDesc = prompt("Update Descrieption", tasks[index].desc);
        tasks[index].name = newName;
        if (newDesc) {
            tasks[index].desc = newDesc;
        } else {
            tasks[index].desc = "";
        }
        displayTasks();
    } else {

        alert("You must write all req !");
    }
}