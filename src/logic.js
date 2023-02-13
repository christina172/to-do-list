import { store } from "./storage";

let categories = [];

class Category {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    removeTask(index) {
        this.tasks.splice(index, 1);
    }
    addTask(title, description, date, priority, complete) {
        let task = new Task(title, description, date, priority, complete);
        this.tasks.push(task);
    }
}

class Task {
    constructor(title, description, date, priority, complete) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.complete = complete;
    }
    editTask(newTitle, newDescription, newDate, newPriority) {
        this.title = newTitle;
        this.description = newDescription;
        this.date = newDate;
        this.priority = newPriority;
    }
    editComplete(newComplete) {
        this.complete = newComplete;
    }
}

function removeCategory(index) {
    categories.splice(index, 1);

    store();
    // localStorage.setItem("categories", JSON.stringify(categories));
    // let jsonCategories = JSON.parse(localStorage.getItem("categories"));
}



function addCategory(name) {
    let category = new Category(name);
    categories.push(category);


    store();
    // localStorage.setItem("categories", JSON.stringify(categories));
    // let jsonCategories = JSON.parse(localStorage.getItem("categories"));

    // // let jsonCategories = JSON.parse(localStorage.getItem("categories"));
    // //jsonCategories.push(category);

    // localStorage.setItem("categories", JSON.stringify(jsonCategories));

    // for (let i = 0; i < jsonCategories.length; i++) {
    //     console.log(jsonCategories[i]);
    //     // for (let j = 0; j < jsonCategories[i].tasks.length; j++) {
    //     //     console.log(jsonCategories[i].tasks[j]);
    //     // }
    // }

}

export { categories, Category, Task, removeCategory, addCategory };