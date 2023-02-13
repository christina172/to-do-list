import { categories, Category, Task, removeCategory, addCategory } from "./logic";

function store() {
    localStorage.setItem("categories", JSON.stringify(categories));
    let jsonCategories = JSON.parse(localStorage.getItem("categories"));
}

// let jsonCategories = JSON.parse(localStorage.getItem("jsonCategories"));
// if ((jsonCategories === null) || (jsonCategories.length === 0)) {
//     jsonCategories = [];
//     localStorage.setItem("categories", JSON.stringify(categories));
// } else {
//     allProjects.forEach(project => {
//         project.tasks.forEach(task => regainTaskMethods(task));
//     });
// }

// function regainTaskMethods(task) {
//     Object.setPrototypeOf(task, Task.prototype);
// }

// function saveChanges() {
//     localStorage.setItem("allProjects", JSON.stringify(allProjects));
// }

export { store };