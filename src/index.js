import './styles.css';
import { categories, Category, Task, removeCategory, addCategory } from "./logic";
import { categoriesContainer, tasksContainer, openTaskForm, showAddTaskButton, showCategoryHeading, completeChecked, deleteTask, showDetails, openEditTask, closeTaskEditForm, editTask, displayTasks, deleteCategory, displayCategories, submitTask, openCategoryForm, closeCategoryForm, submitCategory, closeTaskForm } from "./dom";
import { store } from "./storage";


let jsonCategories = JSON.parse(localStorage.getItem("jsonCategories"));
if ((jsonCategories === null) || (jsonCategories.length === 0)) {
    console.log(jsonCategories);
    addCategory("Home");
    addCategory("Work");
    addCategory("Pets");
    console.log(categories);

    categories[0].addTask("Buy soap", "Buy 6 bars of scented soap", "2023-02-14", "low", "yes");
    console.log(categories);
    categories[0].addTask("Sort the library", "Sort the books in 3 bookcases in the living room and in the bedroom", "2023-02-25", "low", "no");
    categories[0].addTask("Wash the windows", "Wash the windows in the kitchen, the living room and in the bedrooms", "2023-03-01", "high", "no");
    store();
} else {
    store();
}


// addCategory("Home");
// addCategory("Work");
// addCategory("Pets");
// console.log(categories);

// categories[0].addTask("Buy soap", "Buy 6 bars of scented soap", "2023-02-14", "low", "yes");
// console.log(categories);
// categories[0].addTask("Sort the library", "Sort the books in 3 bookcases in the living room and in the bedroom", "2023-02-25", "low", "no");
// categories[0].addTask("Wash the windows", "Wash the windows in the kitchen, the living room and in the bedrooms", "2023-03-01", "high", "no");



displayCategories();



const cancelEditTaskButton = document.querySelector(".cancel-edit-task");
cancelEditTaskButton.addEventListener("click", closeTaskEditForm);


const editTaskButton = document.querySelector(".edit-task");
editTaskButton.addEventListener("click", editTask);


const submitTaskButton = document.querySelector(".submit-task");
submitTaskButton.addEventListener("click", submitTask);


const addCategoryButton = document.querySelector(".add-category");
addCategoryButton.addEventListener("click", openCategoryForm);


const cancelCategoryButton = document.querySelector(".cancel-category");
cancelCategoryButton.addEventListener("click", closeCategoryForm);


const submitCategoryButton = document.querySelector(".submit-category");
submitCategoryButton.addEventListener("click", submitCategory);


const cancelTaskButton = document.querySelector(".cancel-task");
cancelTaskButton.addEventListener("click", closeTaskForm);


// (function () {
//     localStorage.setItem("categories", JSON.stringify(categories));
//     let jsonCategories = JSON.parse(localStorage.getItem("categories"));
//     // for (let i = 0; i < jsonCategories.length; i++) {
//     //     console.log(jsonCategories[i]);
//     //     for (let j = 0; j < jsonCategories[i].tasks.length; j++) {
//     //         console.log(jsonCategories[i].tasks[j]);
//     //     }
//     // }

// })()

// store();

// localStorage.setItem("categories", JSON.stringify(categories));



