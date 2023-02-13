import { categories, Category, Task, removeCategory, addCategory } from "./logic";
import { store } from "./storage";

const categoriesContainer = document.querySelector(".categories-container");
const tasksContainer = document.querySelector(".tasks-container");

function openTaskForm() {
    document.querySelector(".form-popup-task").style.display = "block";
};

function showAddTaskButton() {
    const addTaskButton = document.querySelector(".add-task");
    document.querySelector(".add-task").style.display = "block";
    addTaskButton.addEventListener("click", openTaskForm);
};

function showCategoryHeading() {
    const addTaskButton = document.querySelector(".add-task");
    const tasksHeader = document.querySelector(".tasks-header");
    const tasksHeaderContainer = document.querySelector(".tasks-header-container");
    tasksHeader.dataset.indexCategoryHeading = addTaskButton.dataset.indexAdd;
    tasksHeader.textContent = categories[tasksHeader.dataset.indexCategoryHeading].name;

    const categoryName = document.querySelector(`[data-index-category="${tasksHeader.dataset.indexCategoryHeading}"]`);
    const category = document.querySelector(`[data-index-category-div="${tasksHeader.dataset.indexCategoryHeading}"]`);

    if (categoryName.textContent === tasksHeader.textContent) {
        category.classList.remove("not-chosen");
        tasksHeaderContainer.classList.add("category-chosen");
        category.classList.add("category-chosen");
        let not = document.querySelectorAll(".not-chosen");
        not.forEach((n) => {
            n.classList.remove("category-chosen");
        });
    }

    category.classList.add("not-chosen");
};

function completeChecked(i, j) {
    const task = document.querySelector(`[data-index-task="${j}"]`);
    const taskCompleteBox = document.querySelector(`[data-index-complete-box="${j}"]`);
    const taskComplete = document.querySelector(`[data-index-complete="${j}"]`);
    if (taskCompleteBox.checked) {
        categories[i].tasks[j].complete = "yes";
        taskCompleteBox.checked = true;
        if (taskComplete !== null) {
            taskComplete.textContent = "Task complete: yes";
        }
        task.classList.add("complete");
        //
        store();
    } else {
        categories[i].tasks[j].complete = "no";
        taskCompleteBox.checked = false;
        if (taskComplete !== null) {
            taskComplete.textContent = "Task complete: no";
        }
        task.classList.remove("complete");
        //
        store();
    }
};

function deleteTask(i, j) {
    categories[i].removeTask(j);
    console.log(categories);
    tasksContainer.innerHTML = "";
    displayTasks();
    //
    store();
}

function showDetails(i, j) {
    const task = document.querySelector(`[data-index-task="${j}"]`);
    const viewDetails = document.querySelector(`[data-index-details="${j}"]`);

    if (viewDetails.textContent === "View details") {
        const taskBottom = document.createElement("div");
        taskBottom.dataset.indexBottom = j;
        taskBottom.classList.add("bottom");
        const taskDescription = document.createElement("div");
        taskDescription.textContent = categories[i].tasks[j].description;
        const taskDate = document.createElement("div");
        taskDate.textContent = `Due date: ${categories[i].tasks[j].date} `;
        const taskPriority = document.createElement("div");
        taskPriority.textContent = `Priority: ${categories[i].tasks[j].priority} `;

        const taskComplete = document.createElement("div");
        taskComplete.dataset.indexComplete = j;
        if (categories[i].tasks[j].complete === "yes") {
            taskComplete.textContent = "Task complete: yes";
        } else {
            taskComplete.textContent = "Task complete: no";
        }

        taskBottom.append(taskDescription, taskDate, taskPriority, taskComplete);
        viewDetails.textContent = "Hide details";
        task.append(taskBottom);
    } else {
        const taskBottom = document.querySelector(`[data-index-bottom="${j}"]`);
        viewDetails.textContent = "View details";
        task.removeChild(taskBottom);
    }
};

function openEditTask() {
    document.querySelector(".form-popup-edit-task").style.display = "block";

    const edit = document.querySelector(".edit");
    const newTaskTitle = document.getElementById("new-task-title");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskDate = document.getElementById("new-task-date");
    const newTaskPriority = document.getElementById("new-task-priority");

    newTaskTitle.value = `${categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].title}`;
    newTaskDescription.value = `${categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].description}`;
    newTaskDate.value = `${categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].date}`;
    newTaskPriority.value = `${categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].priority}`;
};

function closeTaskEditForm() {
    document.querySelector(".form-popup-edit-task").style.display = "none";
};

function editTask(e) {
    e.preventDefault();

    const edit = document.querySelector(".edit");

    const newTaskTitle = document.getElementById("new-task-title");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskDate = document.getElementById("new-task-date");
    const newTaskPriority = document.getElementById("new-task-priority");

    categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].editTask(newTaskTitle.value, newTaskDescription.value, newTaskDate.value, newTaskPriority.value);

    closeTaskEditForm();
    displayTasks();
    document.querySelector(".form-popup-edit-task form").reset();
    //
    store();

    console.log(categories);
}

function displayTasks() {
    const addTaskButton = document.querySelector(".add-task");
    tasksContainer.dataset.indexTasksContainer = addTaskButton.dataset.indexAdd;
    tasksContainer.innerHTML = "";

    for (let j = 0; j < categories[tasksContainer.dataset.indexTasksContainer].tasks.length; j++) {

        const task = document.createElement("div");
        task.classList.add("task");
        task.dataset.indexTask = j;

        const taskTop = document.createElement("div");
        taskTop.classList.add("task-top");

        const taskTitle = document.createElement("div");
        taskTitle.textContent = `${j + 1}. ${categories[tasksContainer.dataset.indexTasksContainer].tasks[j].title} `;

        const taskLeft = document.createElement("div");

        const taskCompleteBox = document.createElement("input");
        taskCompleteBox.setAttribute("type", "checkbox");
        taskCompleteBox.setAttribute("id", "task-complete");
        taskCompleteBox.setAttribute("name", "task-complete");
        taskCompleteBox.dataset.indexCompleteBox = j;
        if (categories[tasksContainer.dataset.indexTasksContainer].tasks[j].complete === "yes") {
            taskCompleteBox.setAttribute("checked", "true");
            task.classList.add("complete");
        }
        taskCompleteBox.addEventListener("change", () => {
            completeChecked(tasksContainer.dataset.indexTasksContainer, j);
        });

        const edit = document.createElement("img");
        edit.setAttribute("src", "edit_FILL1_wght400_GRAD0_opsz40.svg");
        edit.classList.add("edit");
        edit.dataset.indexEdit = tasksContainer.dataset.indexTasksContainer;
        edit.dataset.indexEditTask = j;
        edit.addEventListener("click", openEditTask);

        const viewDetails = document.createElement("button");
        viewDetails.classList.add("view-details");
        viewDetails.setAttribute("type", "button");
        viewDetails.dataset.indexDetails = j;
        viewDetails.textContent = "View details";
        viewDetails.addEventListener("click", () => {
            showDetails(tasksContainer.dataset.indexTasksContainer, j);
        })

        const removeTaskButton = document.createElement("button");
        removeTaskButton.setAttribute("type", "button");
        removeTaskButton.addEventListener("click", () => {
            removeTaskButton.dataset.indexDelete = tasksContainer.dataset.indexTasksContainer;
            removeTaskButton.dataset.indexDeleteTask = j;
            deleteTask(removeTaskButton.dataset.indexDelete, j);
        });
        removeTaskButton.textContent = "x";

        taskLeft.append(taskCompleteBox, edit, viewDetails, removeTaskButton);
        taskTop.append(taskTitle, taskLeft);
        task.append(taskTop);
        tasksContainer.append(task);
    }
}

function deleteCategory(i) {
    removeCategory(i);
    console.log(categories);

    const tasksHeader = document.querySelector(".tasks-header");
    if (tasksHeader.dataset.indexCategoryHeading === i) {
        tasksHeader.textContent = "Tasks";
        delete tasksHeader.dataset.indexCategoryHeading;
        document.querySelector(".add-task").style.display = "none";

        const tasksHeaderContainer = document.querySelector(".tasks-header-container");
        tasksHeaderContainer.classList.remove("category-chosen");

        const tasksContainer = document.querySelector(".tasks-container");
        delete tasksContainer.dataset.indexTasksContainer;
        tasksContainer.innerHTML = "";
    }

    categoriesContainer.innerHTML = "";

    displayCategories();
}

function displayCategories() {
    categoriesContainer.innerHTML = "";

    for (let i = 0; i < categories.length; i++) {

        const category = document.createElement("div");
        category.dataset.indexCategoryDiv = i;
        category.classList.add("not-chosen");

        const categoryName = document.createElement("div");
        categoryName.textContent = categories[i].name;
        categoryName.classList.add("category-name-pointer");
        categoryName.setAttribute("data-index-category", i);

        const tasksHeader = document.querySelector(".tasks-header");
        if (categoryName.textContent === tasksHeader.textContent) {
            category.classList.add("category-chosen");
        }

        const addTaskButton = document.querySelector(".add-task");
        categoryName.addEventListener("click", () => {
            addTaskButton.dataset.indexAdd = categoryName.dataset.indexCategory;
            showAddTaskButton();
            showCategoryHeading();
            displayTasks();
        });

        const removeCategoryButton = document.createElement("button");
        removeCategoryButton.classList.add("remove-category-button");
        removeCategoryButton.textContent = "x";
        removeCategoryButton.addEventListener("click", () => {
            removeCategoryButton.dataset.indexRemove = categoryName.dataset.indexCategory;
            deleteCategory(removeCategoryButton.dataset.indexRemove);
        });

        category.append(categoryName, removeCategoryButton);
        categoriesContainer.append(category);
    }
}

function submitTask(e) {
    e.preventDefault();

    const addTaskButton = document.querySelector(".add-task");

    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;
    const taskDate = document.getElementById("task-date").value;
    const taskPriority = document.getElementById("task-priority").value;

    categories[`${addTaskButton.dataset.indexAdd}`].addTask(taskTitle, taskDescription, taskDate, taskPriority);

    document.querySelector(".form-popup-task form").reset();
    closeTaskForm();
    displayTasks();
    //
    store();

    console.log(categories);
};

function openCategoryForm() {
    document.querySelector(".form-popup-category").style.display = "block";
}

function closeCategoryForm() {
    document.querySelector(".form-popup-category").style.display = "none";
    document.querySelector(".form-popup-category form").reset();
}

function submitCategory(e) {
    e.preventDefault();

    const categoryName = document.getElementById("category-name");
    addCategory(categoryName.value);
    displayCategories();
    closeCategoryForm();
    document.querySelector(".form-popup-category form").reset();

    console.log(categories);
}

function closeTaskForm() {
    document.querySelector(".form-popup-task").style.display = "none";
    document.querySelector(".form-popup-task form").reset();
}

export { categoriesContainer, tasksContainer, openTaskForm, showAddTaskButton, showCategoryHeading, completeChecked, deleteTask, showDetails, openEditTask, closeTaskEditForm, editTask, displayTasks, deleteCategory, displayCategories, submitTask, openCategoryForm, closeCategoryForm, submitCategory, closeTaskForm }