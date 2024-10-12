let tasks = [];
let taskId = 1;

document.getElementById('add-task').addEventListener('click', function () {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ id: taskId++, task: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
});

function renderTasks() {
  const taskList = document.getElementById('task-list');
  const totalTasks = document.getElementById('total-tasks');
  const completedTasks = document.getElementById('completed-tasks');

  taskList.innerHTML = tasks.map(task => `
    <li">
      <div>
        <strong>ID: ${task.id}</strong> - ${task.task}
      </div>
      <div>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
        <button class="delete-btn" onclick="deleteTask(${task.id})">X</button>
      </div>
    </li>
  `).join('');

  totalTasks.textContent = tasks.length;
  completedTasks.textContent = tasks.filter(task => task.completed).length;
}

function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}
