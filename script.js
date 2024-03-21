// Display current date and time
function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = formattedDate;
}

// Function to create a new task item
function createTaskItem(taskName, isCompleted) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;
    const label = document.createElement('label');
    label.textContent = taskName;
    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    return taskItem;
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        const taskItem = createTaskItem(taskName, false);
        const taskList = document.getElementById('task-list');
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}


// Function to move completed task to the completed task list
function moveCompletedTask(event) {
    const checkbox = event.target;
    const taskItem = checkbox.parentNode;
    const taskList = document.getElementById('task-list');
    const completedTasks = document.getElementById('completed-tasks');
    
    if (checkbox.checked) {
        // Move task to completed tasks list
        completedTasks.appendChild(taskItem);
    } else {
        // Move task back to task list
        taskList.appendChild(taskItem);
    }
}

// Add task button click event
document.getElementById('add-task-btn').addEventListener('click', addTask);

// Add checkbox change event to move completed tasks
const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', moveCompletedTask);
});


// Function to create a new task item with edit and delete buttons
function createTaskItem(taskName, isCompleted) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = isCompleted;

    checkbox.addEventListener('change', moveCompletedTask); // Add event listener

    const label = document.createElement('label');
    label.textContent = taskName;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    taskItem.appendChild(checkbox);
    taskItem.appendChild(label);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Function to handle task editing
function editTask(event) {
    const taskItem = event.target.parentNode;
    const label = taskItem.querySelector('label');
    const newText = prompt('Enter new task text:', label.textContent.trim());
    if (newText !== null) {
        label.textContent = newText;
    }
}

// Function to handle task deletion
function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskItem.remove();
}

// Add event listeners for edit and delete buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        editTask(event);
    }
    if (event.target.classList.contains('delete-btn')) {
        deleteTask(event);
    }
});

// Function to move completed task to the completed task list
function moveCompletedTask(event) {
    const checkbox = event.target;
    const taskItem = checkbox.parentNode;
    const taskList = document.getElementById('task-list');
    const completedTasks = document.getElementById('completed-tasks');
    
    if (checkbox.checked) {
    // Remove task from task list
    taskList.removeChild(taskItem);
    // Add task to completed tasks list
    completedTasks.appendChild(taskItem);
    } else {
    // Remove task from completed tasks list
    completedTasks.removeChild(taskItem);
    // Add task back to task list
    taskList.appendChild(taskItem);
    }
    }
// Add task button click event
document.getElementById('add-task-btn').addEventListener('click', addTask);

// Display current date and time
displayDateTime();


// Display current date and time
displayDateTime();