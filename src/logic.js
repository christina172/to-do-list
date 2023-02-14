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
}



function addCategory(name) {
    let category = new Category(name);
    categories.push(category);

    store();
}

export { categories, Category, Task, removeCategory, addCategory };