import { categories, Category, Task, removeCategory, addCategory } from "./logic";

function store() {
    localStorage.setItem("jsonCategories", JSON.stringify(categories));
}

export { store };