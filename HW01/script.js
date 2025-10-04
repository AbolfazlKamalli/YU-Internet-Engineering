const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const totalTasksEl = document.getElementById("totalTasks");
const completedTasksEl = document.getElementById("completedTasks");
const filterBtns = document.querySelectorAll(".filter-btn");
const themeToggle = document.getElementById("themeToggle");

let tasks = [];
let currentFilter = "all";
let editingTaskId = null;
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

function toPersianNumber(num) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
  updateStats();
  toggleEmptyState();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function generateId() {
  return Date.now() + Math.random().toString(36).substr(2, 9);
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    taskInput.style.animation = "shake 0.3s";
    setTimeout(() => {
      taskInput.style.animation = "";
    }, 300);
    return;
  }

  const newTask = {
    id: generateId(),
    text: text,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.unshift(newTask);
  taskInput.value = "";

  saveTasks();
  renderTasks();
  updateStats();
  toggleEmptyState();
}

function deleteTask(id) {
  const taskElement = document.querySelector(`[data-id="${id}"]`);

  if (taskElement) {
    taskElement.classList.add("removing");

    setTimeout(() => {
      tasks = tasks.filter((task) => task.id !== id);
      saveTasks();
      renderTasks();
      updateStats();
      toggleEmptyState();
    }, 300);
  }
}

function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
    updateStats();
  }
}

function startEditTask(id) {
  if (editingTaskId !== null && editingTaskId !== id) {
    cancelEdit();
  }

  editingTaskId = id;
  renderTasks();
}

function saveEdit(id, newText) {
  const text = newText.trim();

  if (text === "") {
    return;
  }

  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.text = text;
    saveTasks();
  }

  editingTaskId = null;
  renderTasks();
}

function cancelEdit() {
  editingTaskId = null;
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks;
  if (currentFilter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (currentFilter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  filteredTasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "done" : ""}`;
    li.setAttribute("data-id", task.id);

    if (editingTaskId === task.id) {
      li.innerHTML = `
                <input 
                    type="text" 
                    class="task-edit-input" 
                    value="${task.text}"
                    autofocus
                >
                <div class="task-actions">
                    <button class="task-btn save-btn" onclick="saveEditFromInput('${task.id}')">
                        ✓
                    </button>
                    <button class="task-btn cancel-btn" onclick="cancelEdit()">
                        ✕
                    </button>
                </div>
            `;

      setTimeout(() => {
        const input = li.querySelector(".task-edit-input");
        input.focus();
        input.select();

        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            saveEdit(task.id, input.value);
          } else if (e.key === "Escape") {
            cancelEdit();
          }
        });
      }, 50);
    } else {
      li.innerHTML = `
                <div class="task-checkbox" onclick="toggleTask('${task.id}')"></div>
                <span class="task-text" onclick="toggleTask('${task.id}')">${task.text}</span>
                <div class="task-actions">
                    <button class="task-btn edit-btn" onclick="startEditTask('${task.id}')" title="ویرایش">
                        ✎
                    </button>
                    <button class="task-btn delete-btn" onclick="deleteTask('${task.id}')" title="حذف">
                        🗑
                    </button>
                </div>
            `;
    }

    taskList.appendChild(li);
  });
}

function saveEditFromInput(id) {
  const input = document.querySelector(`[data-id="${id}"] .task-edit-input`);
  if (input) {
    saveEdit(id, input.value);
  }
}

function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;

  totalTasksEl.textContent = `${toPersianNumber(total)} کار`;
  completedTasksEl.textContent = `${toPersianNumber(completed)} انجام شده`;
}

function toggleEmptyState() {
  if (tasks.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

function setFilter(filter) {
  currentFilter = filter;

  filterBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-filter") === filter) {
      btn.classList.add("active");
    }
  });

  renderTasks();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    setFilter(btn.getAttribute("data-filter"));
  });
});

themeToggle.addEventListener("click", toggleTheme);

const style = document.createElement("style");
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

initTheme();
loadTasks();

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    taskInput.focus();
  }
});

taskList.addEventListener("dblclick", (e) => {
  const taskItem = e.target.closest(".task-item");
  if (taskItem && !taskItem.querySelector(".task-edit-input")) {
    const id = taskItem.getAttribute("data-id");
    startEditTask(id);
  }
});
