/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.tasks-header-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.form-popup-category,\n.form-popup-task,\n.form-popup-edit-task {\n    display: none;\n    border: black solid;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.add-task {\n    display: none;\n}\n\n.task-top {\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-top div {\n    display: flex;\n}\n\n.edit {\n    height: 2rem;\n    width: auto;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;;IAGI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.tasks-header-container {\n    display: flex;\n    justify-content: space-between;\n}\n\n.form-popup-category,\n.form-popup-task,\n.form-popup-edit-task {\n    display: none;\n    border: black solid;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.add-task {\n    display: none;\n}\n\n.task-top {\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-top div {\n    display: flex;\n}\n\n.edit {\n    height: 2rem;\n    width: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoriesContainer": () => (/* binding */ categoriesContainer),
/* harmony export */   "closeCategoryForm": () => (/* binding */ closeCategoryForm),
/* harmony export */   "closeTaskEditForm": () => (/* binding */ closeTaskEditForm),
/* harmony export */   "closeTaskForm": () => (/* binding */ closeTaskForm),
/* harmony export */   "completeChecked": () => (/* binding */ completeChecked),
/* harmony export */   "deleteCategory": () => (/* binding */ deleteCategory),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "displayCategories": () => (/* binding */ displayCategories),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "openCategoryForm": () => (/* binding */ openCategoryForm),
/* harmony export */   "openEditTask": () => (/* binding */ openEditTask),
/* harmony export */   "openTaskForm": () => (/* binding */ openTaskForm),
/* harmony export */   "showAddTaskButton": () => (/* binding */ showAddTaskButton),
/* harmony export */   "showCategoryHeading": () => (/* binding */ showCategoryHeading),
/* harmony export */   "showDetails": () => (/* binding */ showDetails),
/* harmony export */   "submitCategory": () => (/* binding */ submitCategory),
/* harmony export */   "submitTask": () => (/* binding */ submitTask),
/* harmony export */   "tasksContainer": () => (/* binding */ tasksContainer)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


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
    tasksHeader.dataset.indexCategoryHeading = addTaskButton.dataset.indexAdd;
    tasksHeader.textContent = _logic__WEBPACK_IMPORTED_MODULE_0__.categories[tasksHeader.dataset.indexCategoryHeading].name;
};

function completeChecked(i, j) {
    const task = document.querySelector(`[data-index-task="${j}"]`);
    const taskCompleteBox = document.querySelector(`[data-index-complete-box="${j}"]`);
    const taskComplete = document.querySelector(`[data-index-complete="${j}"]`);
    if (taskCompleteBox.checked) {
        _logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].tasks[j].complete = "yes";
        taskCompleteBox.checked = true;
        if (taskComplete !== null) {
            taskComplete.textContent = "Task complete: yes";
        }
        task.classList.add("complete");
    } else {
        _logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].tasks[j].complete = "no";
        taskCompleteBox.checked = false;
        if (taskComplete !== null) {
            taskComplete.textContent = "Task complete: no";
        }
        task.classList.remove("complete");
    }
};

function deleteTask(i, j) {
    _logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].removeTask(j);
    console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.categories);
    tasksContainer.innerHTML = "";
    displayTasks();
}

function showDetails(i, j) {
    const task = document.querySelector(`[data-index-task="${j}"]`);
    const viewDetails = document.querySelector(`[data-index-details="${j}"]`);

    if (viewDetails.textContent === "View details") {
        const taskBottom = document.createElement("div");
        taskBottom.dataset.indexBottom = j;
        taskBottom.classList.add("bottom");
        const taskDescription = document.createElement("div");
        taskDescription.textContent = _logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].tasks[j].description;
        const taskDate = document.createElement("div");
        taskDate.textContent = `Due date: ${_logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].tasks[j].date} `;
        const taskPriority = document.createElement("div");
        taskPriority.textContent = `Priority: ${_logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].tasks[j].priority} `;

        const taskComplete = document.createElement("div");
        taskComplete.dataset.indexComplete = j;
        if (_logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].tasks[j].complete === "yes") {
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

    newTaskTitle.value = `${_logic__WEBPACK_IMPORTED_MODULE_0__.categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].title}`;
    newTaskDescription.value = `${_logic__WEBPACK_IMPORTED_MODULE_0__.categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].description}`;
    newTaskDate.value = `${_logic__WEBPACK_IMPORTED_MODULE_0__.categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].date}`;
    newTaskPriority.value = `${_logic__WEBPACK_IMPORTED_MODULE_0__.categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].priority}`;
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

    _logic__WEBPACK_IMPORTED_MODULE_0__.categories[edit.dataset.indexEdit].tasks[edit.dataset.indexEditTask].editTask(newTaskTitle.value, newTaskDescription.value, newTaskDate.value, newTaskPriority.value);

    closeTaskEditForm();
    displayTasks();
    document.querySelector(".form-popup-edit-task form").reset();

    console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.categories);
}

function displayTasks() {
    const addTaskButton = document.querySelector(".add-task");
    tasksContainer.dataset.indexTasksContainer = addTaskButton.dataset.indexAdd;
    tasksContainer.innerHTML = "";

    for (let j = 0; j < _logic__WEBPACK_IMPORTED_MODULE_0__.categories[tasksContainer.dataset.indexTasksContainer].tasks.length; j++) {

        const task = document.createElement("div");
        task.classList.add("task");
        task.dataset.indexTask = j;

        const taskTop = document.createElement("div");
        taskTop.classList.add("task-top");

        const taskTitle = document.createElement("div");
        taskTitle.textContent = `${j + 1}. ${_logic__WEBPACK_IMPORTED_MODULE_0__.categories[tasksContainer.dataset.indexTasksContainer].tasks[j].title} `;

        const taskLeft = document.createElement("div");

        const taskCompleteBox = document.createElement("input");
        taskCompleteBox.setAttribute("type", "checkbox");
        taskCompleteBox.setAttribute("id", "task-complete");
        taskCompleteBox.setAttribute("name", "task-complete");
        taskCompleteBox.dataset.indexCompleteBox = j;
        if (_logic__WEBPACK_IMPORTED_MODULE_0__.categories[tasksContainer.dataset.indexTasksContainer].tasks[j].complete === "yes") {
            taskCompleteBox.setAttribute("checked", "true");
        }
        taskCompleteBox.addEventListener("change", () => {
            completeChecked(tasksContainer.dataset.indexTasksContainer, j)
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
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.removeCategory)(i);
    console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.categories);

    const tasksHeader = document.querySelector(".tasks-header");
    if (tasksHeader.dataset.indexCategoryHeading === i) {
        tasksHeader.textContent = "Tasks";
        delete tasksHeader.dataset.indexCategoryHeading;
        document.querySelector(".add-task").style.display = "none";

        const tasksContainer = document.querySelector(".tasks-container");
        delete tasksContainer.dataset.indexTasksContainer;
        tasksContainer.innerHTML = "";
    }

    categoriesContainer.innerHTML = "";

    displayCategories();
}

function displayCategories() {
    categoriesContainer.innerHTML = "";

    for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_0__.categories.length; i++) {

        const category = document.createElement("div");

        const categoryName = document.createElement("div");
        categoryName.textContent = _logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].name;
        categoryName.setAttribute("data-index-category", i);

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

    _logic__WEBPACK_IMPORTED_MODULE_0__.categories[`${addTaskButton.dataset.indexAdd}`].addTask(taskTitle, taskDescription, taskDate, taskPriority);

    document.querySelector(".form-popup-task form").reset();
    closeTaskForm();
    displayTasks();

    console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.categories);
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
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.addCategory)(categoryName.value);
    displayCategories();
    closeCategoryForm();
    document.querySelector(".form-popup-category form").reset();

    console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.categories);
}

function closeTaskForm() {
    document.querySelector(".form-popup-task").style.display = "none";
    document.querySelector(".form-popup-task form").reset();
}



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category),
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addCategory": () => (/* binding */ addCategory),
/* harmony export */   "categories": () => (/* binding */ categories),
/* harmony export */   "removeCategory": () => (/* binding */ removeCategory)
/* harmony export */ });
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
}

function addCategory(name) {
    let category = new Category(name);
    categories.push(category);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





(0,_logic__WEBPACK_IMPORTED_MODULE_1__.addCategory)("Home");
(0,_logic__WEBPACK_IMPORTED_MODULE_1__.addCategory)("Work");
(0,_logic__WEBPACK_IMPORTED_MODULE_1__.addCategory)("Pets");
console.log(_logic__WEBPACK_IMPORTED_MODULE_1__.categories);

_logic__WEBPACK_IMPORTED_MODULE_1__.categories[0].addTask("Buy soap", "Buy 6 bars of scented soap", "2023-02-14", "low", "yes");
console.log(_logic__WEBPACK_IMPORTED_MODULE_1__.categories);
_logic__WEBPACK_IMPORTED_MODULE_1__.categories[0].addTask("Sort the library", "Sort books in 3 bookcases in the living room and in master bedroom", "2023-02-25", "low", "no");
_logic__WEBPACK_IMPORTED_MODULE_1__.categories[0].addTask("Wash the windows", "Wash the windows in the kitchen, the living room and in the bedrooms", "2023-03-01", "high", "no");



(0,_dom__WEBPACK_IMPORTED_MODULE_2__.displayCategories)();



const cancelEditTaskButton = document.querySelector(".cancel-edit-task");
cancelEditTaskButton.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.closeTaskEditForm);

const editTaskButton = document.querySelector(".edit-task");
editTaskButton.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.editTask);


const submitTaskButton = document.querySelector(".submit-task");
submitTaskButton.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.submitTask);


const addCategoryButton = document.querySelector(".add-category");
addCategoryButton.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.openCategoryForm);


const cancelCategoryButton = document.querySelector(".cancel-category");
cancelCategoryButton.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.closeCategoryForm);


const submitCategoryButton = document.querySelector(".submit-category");
submitCategoryButton.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.submitCategory);


const cancelTaskButton = document.querySelector(".cancel-task");
cancelTaskButton.addEventListener("click", _dom__WEBPACK_IMPORTED_MODULE_2__.closeTaskForm);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV0Qix5REFBcUI7QUFDckIsWUFBWSw4Q0FBVTtBQUN0Qix5REFBcUI7QUFDckIseURBQXFCOzs7O0FBSXJCLHVEQUFpQjs7OztBQUlqQjtBQUNBLCtDQUErQyxtREFBaUI7O0FBRWhFO0FBQ0EseUNBQXlDLDBDQUFROzs7QUFHakQ7QUFDQSwyQ0FBMkMsNENBQVU7OztBQUdyRDtBQUNBLDRDQUE0QyxrREFBZ0I7OztBQUc1RDtBQUNBLCtDQUErQyxtREFBaUI7OztBQUdoRTtBQUNBLCtDQUErQyxnREFBYzs7O0FBRzdEO0FBQ0EsMkNBQTJDLCtDQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4udGFza3MtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcm0tcG9wdXAtY2F0ZWdvcnksXFxuLmZvcm0tcG9wdXAtdGFzayxcXG4uZm9ybS1wb3B1cC1lZGl0LXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLXRvcCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZWRpdCB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi50YXNrcy1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9ybS1wb3B1cC1jYXRlZ29yeSxcXG4uZm9ybS1wb3B1cC10YXNrLFxcbi5mb3JtLXBvcHVwLWVkaXQtdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLXRvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stdG9wIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5lZGl0IHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjYXRlZ29yaWVzLCBDYXRlZ29yeSwgVGFzaywgcmVtb3ZlQ2F0ZWdvcnksIGFkZENhdGVnb3J5IH0gZnJvbSBcIi4vbG9naWNcIjtcblxuY29uc3QgY2F0ZWdvcmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcmllcy1jb250YWluZXJcIik7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBvcGVuVGFza0Zvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLXRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbmZ1bmN0aW9uIHNob3dBZGRUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuVGFza0Zvcm0pO1xufTtcblxuZnVuY3Rpb24gc2hvd0NhdGVnb3J5SGVhZGluZygpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtaGVhZGVyXCIpO1xuICAgIHRhc2tzSGVhZGVyLmRhdGFzZXQuaW5kZXhDYXRlZ29yeUhlYWRpbmcgPSBhZGRUYXNrQnV0dG9uLmRhdGFzZXQuaW5kZXhBZGQ7XG4gICAgdGFza3NIZWFkZXIudGV4dENvbnRlbnQgPSBjYXRlZ29yaWVzW3Rhc2tzSGVhZGVyLmRhdGFzZXQuaW5kZXhDYXRlZ29yeUhlYWRpbmddLm5hbWU7XG59O1xuXG5mdW5jdGlvbiBjb21wbGV0ZUNoZWNrZWQoaSwgaikge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleC10YXNrPVwiJHtqfVwiXWApO1xuICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LWNvbXBsZXRlLWJveD1cIiR7an1cIl1gKTtcbiAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleC1jb21wbGV0ZT1cIiR7an1cIl1gKTtcbiAgICBpZiAodGFza0NvbXBsZXRlQm94LmNoZWNrZWQpIHtcbiAgICAgICAgY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9IFwieWVzXCI7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRhc2tDb21wbGV0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFza0NvbXBsZXRlLnRleHRDb250ZW50ID0gXCJUYXNrIGNvbXBsZXRlOiB5ZXNcIjtcbiAgICAgICAgfVxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYXRlZ29yaWVzW2ldLnRhc2tzW2pdLmNvbXBsZXRlID0gXCJub1wiO1xuICAgICAgICB0YXNrQ29tcGxldGVCb3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGFza0NvbXBsZXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXNrQ29tcGxldGUudGV4dENvbnRlbnQgPSBcIlRhc2sgY29tcGxldGU6IG5vXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVcIik7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpLCBqKSB7XG4gICAgY2F0ZWdvcmllc1tpXS5yZW1vdmVUYXNrKGopO1xuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dEZXRhaWxzKGksIGopIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXgtdGFzaz1cIiR7an1cIl1gKTtcbiAgICBjb25zdCB2aWV3RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LWRldGFpbHM9XCIke2p9XCJdYCk7XG5cbiAgICBpZiAodmlld0RldGFpbHMudGV4dENvbnRlbnQgPT09IFwiVmlldyBkZXRhaWxzXCIpIHtcbiAgICAgICAgY29uc3QgdGFza0JvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tCb3R0b20uZGF0YXNldC5pbmRleEJvdHRvbSA9IGo7XG4gICAgICAgIHRhc2tCb3R0b20uY2xhc3NMaXN0LmFkZChcImJvdHRvbVwiKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgZGF0ZTogJHtjYXRlZ29yaWVzW2ldLnRhc2tzW2pdLmRhdGV9IGA7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtjYXRlZ29yaWVzW2ldLnRhc2tzW2pdLnByaW9yaXR5fSBgO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDb21wbGV0ZS5kYXRhc2V0LmluZGV4Q29tcGxldGUgPSBqO1xuICAgICAgICBpZiAoY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9PT0gXCJ5ZXNcIikge1xuICAgICAgICAgICAgdGFza0NvbXBsZXRlLnRleHRDb250ZW50ID0gXCJUYXNrIGNvbXBsZXRlOiB5ZXNcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tDb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiVGFzayBjb21wbGV0ZTogbm9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tCb3R0b20uYXBwZW5kKHRhc2tEZXNjcmlwdGlvbiwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSwgdGFza0NvbXBsZXRlKTtcbiAgICAgICAgdmlld0RldGFpbHMudGV4dENvbnRlbnQgPSBcIkhpZGUgZGV0YWlsc1wiO1xuICAgICAgICB0YXNrLmFwcGVuZCh0YXNrQm90dG9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YXNrQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXgtYm90dG9tPVwiJHtqfVwiXWApO1xuICAgICAgICB2aWV3RGV0YWlscy50ZXh0Q29udGVudCA9IFwiVmlldyBkZXRhaWxzXCI7XG4gICAgICAgIHRhc2sucmVtb3ZlQ2hpbGQodGFza0JvdHRvbSk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gb3BlbkVkaXRUYXNrKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC1lZGl0LXRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay10aXRsZVwiKTtcbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1kYXRlXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stcHJpb3JpdHlcIik7XG5cbiAgICBuZXdUYXNrVGl0bGUudmFsdWUgPSBgJHtjYXRlZ29yaWVzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRdLnRhc2tzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRUYXNrXS50aXRsZX1gO1xuICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IGAke2NhdGVnb3JpZXNbZWRpdC5kYXRhc2V0LmluZGV4RWRpdF0udGFza3NbZWRpdC5kYXRhc2V0LmluZGV4RWRpdFRhc2tdLmRlc2NyaXB0aW9ufWA7XG4gICAgbmV3VGFza0RhdGUudmFsdWUgPSBgJHtjYXRlZ29yaWVzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRdLnRhc2tzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRUYXNrXS5kYXRlfWA7XG4gICAgbmV3VGFza1ByaW9yaXR5LnZhbHVlID0gYCR7Y2F0ZWdvcmllc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0XS50YXNrc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0VGFza10ucHJpb3JpdHl9YDtcbn07XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0VkaXRGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC1lZGl0LXRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxuZnVuY3Rpb24gZWRpdFRhc2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XG5cbiAgICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWRhdGVcIik7XG4gICAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1wcmlvcml0eVwiKTtcblxuICAgIGNhdGVnb3JpZXNbZWRpdC5kYXRhc2V0LmluZGV4RWRpdF0udGFza3NbZWRpdC5kYXRhc2V0LmluZGV4RWRpdFRhc2tdLmVkaXRUYXNrKG5ld1Rhc2tUaXRsZS52YWx1ZSwgbmV3VGFza0Rlc2NyaXB0aW9uLnZhbHVlLCBuZXdUYXNrRGF0ZS52YWx1ZSwgbmV3VGFza1ByaW9yaXR5LnZhbHVlKTtcblxuICAgIGNsb3NlVGFza0VkaXRGb3JtKCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLWVkaXQtdGFzayBmb3JtXCIpLnJlc2V0KCk7XG5cbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmRhdGFzZXQuaW5kZXhUYXNrc0NvbnRhaW5lciA9IGFkZFRhc2tCdXR0b24uZGF0YXNldC5pbmRleEFkZDtcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYXRlZ29yaWVzW3Rhc2tzQ29udGFpbmVyLmRhdGFzZXQuaW5kZXhUYXNrc0NvbnRhaW5lcl0udGFza3MubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgdGFzay5kYXRhc2V0LmluZGV4VGFzayA9IGo7XG5cbiAgICAgICAgY29uc3QgdGFza1RvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tUb3AuY2xhc3NMaXN0LmFkZChcInRhc2stdG9wXCIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAke2ogKyAxfS4gJHtjYXRlZ29yaWVzW3Rhc2tzQ29udGFpbmVyLmRhdGFzZXQuaW5kZXhUYXNrc0NvbnRhaW5lcl0udGFza3Nbal0udGl0bGV9IGA7XG5cbiAgICAgICAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1jb21wbGV0ZVwiKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWNvbXBsZXRlXCIpO1xuICAgICAgICB0YXNrQ29tcGxldGVCb3guZGF0YXNldC5pbmRleENvbXBsZXRlQm94ID0gajtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXNbdGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyXS50YXNrc1tqXS5jb21wbGV0ZSA9PT0gXCJ5ZXNcIikge1xuICAgICAgICAgICAgdGFza0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2tlZCh0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXIsIGopXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlZGl0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImVkaXRfRklMTDFfd2dodDQwMF9HUkFEMF9vcHN6NDAuc3ZnXCIpO1xuICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgICAgICBlZGl0LmRhdGFzZXQuaW5kZXhFZGl0ID0gdGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyO1xuICAgICAgICBlZGl0LmRhdGFzZXQuaW5kZXhFZGl0VGFzayA9IGo7XG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5FZGl0VGFzayk7XG5cbiAgICAgICAgY29uc3Qgdmlld0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB2aWV3RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwidmlldy1kZXRhaWxzXCIpO1xuICAgICAgICB2aWV3RGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICB2aWV3RGV0YWlscy5kYXRhc2V0LmluZGV4RGV0YWlscyA9IGo7XG4gICAgICAgIHZpZXdEZXRhaWxzLnRleHRDb250ZW50ID0gXCJWaWV3IGRldGFpbHNcIjtcbiAgICAgICAgdmlld0RldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNob3dEZXRhaWxzKHRhc2tzQ29udGFpbmVyLmRhdGFzZXQuaW5kZXhUYXNrc0NvbnRhaW5lciwgaik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5kYXRhc2V0LmluZGV4RGVsZXRlID0gdGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyO1xuICAgICAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5kYXRhc2V0LmluZGV4RGVsZXRlVGFzayA9IGo7XG4gICAgICAgICAgICBkZWxldGVUYXNrKHJlbW92ZVRhc2tCdXR0b24uZGF0YXNldC5pbmRleERlbGV0ZSwgaik7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG5cbiAgICAgICAgdGFza0xlZnQuYXBwZW5kKHRhc2tDb21wbGV0ZUJveCwgZWRpdCwgdmlld0RldGFpbHMsIHJlbW92ZVRhc2tCdXR0b24pO1xuICAgICAgICB0YXNrVG9wLmFwcGVuZCh0YXNrVGl0bGUsIHRhc2tMZWZ0KTtcbiAgICAgICAgdGFzay5hcHBlbmQodGFza1RvcCk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZCh0YXNrKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5KGkpIHtcbiAgICByZW1vdmVDYXRlZ29yeShpKTtcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcblxuICAgIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1oZWFkZXJcIik7XG4gICAgaWYgKHRhc2tzSGVhZGVyLmRhdGFzZXQuaW5kZXhDYXRlZ29yeUhlYWRpbmcgPT09IGkpIHtcbiAgICAgICAgdGFza3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0hlYWRlci5kYXRhc2V0LmluZGV4Q2F0ZWdvcnlIZWFkaW5nO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xuICAgICAgICBkZWxldGUgdGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIGNhdGVnb3JpZXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGRpc3BsYXlDYXRlZ29yaWVzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDYXRlZ29yaWVzKCkge1xuICAgIGNhdGVnb3JpZXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSBjYXRlZ29yaWVzW2ldLm5hbWU7XG4gICAgICAgIGNhdGVnb3J5TmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWNhdGVnb3J5XCIsIGkpO1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgICAgICBjYXRlZ29yeU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGF0YXNldC5pbmRleEFkZCA9IGNhdGVnb3J5TmFtZS5kYXRhc2V0LmluZGV4Q2F0ZWdvcnk7XG4gICAgICAgICAgICBzaG93QWRkVGFza0J1dHRvbigpO1xuICAgICAgICAgICAgc2hvd0NhdGVnb3J5SGVhZGluZygpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlQ2F0ZWdvcnlCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZS1jYXRlZ29yeS1idXR0b25cIik7XG4gICAgICAgIHJlbW92ZUNhdGVnb3J5QnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIHJlbW92ZUNhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVDYXRlZ29yeUJ1dHRvbi5kYXRhc2V0LmluZGV4UmVtb3ZlID0gY2F0ZWdvcnlOYW1lLmRhdGFzZXQuaW5kZXhDYXRlZ29yeTtcbiAgICAgICAgICAgIGRlbGV0ZUNhdGVnb3J5KHJlbW92ZUNhdGVnb3J5QnV0dG9uLmRhdGFzZXQuaW5kZXhSZW1vdmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYXRlZ29yeS5hcHBlbmQoY2F0ZWdvcnlOYW1lLCByZW1vdmVDYXRlZ29yeUJ1dHRvbik7XG4gICAgICAgIGNhdGVnb3JpZXNDb250YWluZXIuYXBwZW5kKGNhdGVnb3J5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKS52YWx1ZTtcblxuICAgIGNhdGVnb3JpZXNbYCR7YWRkVGFza0J1dHRvbi5kYXRhc2V0LmluZGV4QWRkfWBdLmFkZFRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHkpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLXRhc2sgZm9ybVwiKS5yZXNldCgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcblxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xufTtcblxuZnVuY3Rpb24gb3BlbkNhdGVnb3J5Rm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtY2F0ZWdvcnlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VDYXRlZ29yeUZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLWNhdGVnb3J5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtY2F0ZWdvcnkgZm9ybVwiKS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRDYXRlZ29yeShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeS1uYW1lXCIpO1xuICAgIGFkZENhdGVnb3J5KGNhdGVnb3J5TmFtZS52YWx1ZSk7XG4gICAgZGlzcGxheUNhdGVnb3JpZXMoKTtcbiAgICBjbG9zZUNhdGVnb3J5Rm9ybSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC1jYXRlZ29yeSBmb3JtXCIpLnJlc2V0KCk7XG5cbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtdGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLXRhc2sgZm9ybVwiKS5yZXNldCgpO1xufVxuXG5leHBvcnQgeyBjYXRlZ29yaWVzQ29udGFpbmVyLCB0YXNrc0NvbnRhaW5lciwgb3BlblRhc2tGb3JtLCBzaG93QWRkVGFza0J1dHRvbiwgc2hvd0NhdGVnb3J5SGVhZGluZywgY29tcGxldGVDaGVja2VkLCBkZWxldGVUYXNrLCBzaG93RGV0YWlscywgb3BlbkVkaXRUYXNrLCBjbG9zZVRhc2tFZGl0Rm9ybSwgZWRpdFRhc2ssIGRpc3BsYXlUYXNrcywgZGVsZXRlQ2F0ZWdvcnksIGRpc3BsYXlDYXRlZ29yaWVzLCBzdWJtaXRUYXNrLCBvcGVuQ2F0ZWdvcnlGb3JtLCBjbG9zZUNhdGVnb3J5Rm9ybSwgc3VibWl0Q2F0ZWdvcnksIGNsb3NlVGFza0Zvcm0gfSIsImxldCBjYXRlZ29yaWVzID0gW107XG5cbmNsYXNzIENhdGVnb3J5IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG4gICAgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGFkZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSk7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG59XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9XG4gICAgZWRpdFRhc2sobmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kYXRlID0gbmV3RGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cbiAgICBlZGl0Q29tcGxldGUobmV3Q29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IG5ld0NvbXBsZXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2F0ZWdvcnkoaW5kZXgpIHtcbiAgICBjYXRlZ29yaWVzLnNwbGljZShpbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIGFkZENhdGVnb3J5KG5hbWUpIHtcbiAgICBsZXQgY2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkobmFtZSk7XG4gICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcbn1cblxuZXhwb3J0IHsgY2F0ZWdvcmllcywgQ2F0ZWdvcnksIFRhc2ssIHJlbW92ZUNhdGVnb3J5LCBhZGRDYXRlZ29yeSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGNhdGVnb3JpZXMsIENhdGVnb3J5LCBUYXNrLCByZW1vdmVDYXRlZ29yeSwgYWRkQ2F0ZWdvcnkgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllc0NvbnRhaW5lciwgdGFza3NDb250YWluZXIsIG9wZW5UYXNrRm9ybSwgc2hvd0FkZFRhc2tCdXR0b24sIHNob3dDYXRlZ29yeUhlYWRpbmcsIGNvbXBsZXRlQ2hlY2tlZCwgZGVsZXRlVGFzaywgc2hvd0RldGFpbHMsIG9wZW5FZGl0VGFzaywgY2xvc2VUYXNrRWRpdEZvcm0sIGVkaXRUYXNrLCBkaXNwbGF5VGFza3MsIGRlbGV0ZUNhdGVnb3J5LCBkaXNwbGF5Q2F0ZWdvcmllcywgc3VibWl0VGFzaywgb3BlbkNhdGVnb3J5Rm9ybSwgY2xvc2VDYXRlZ29yeUZvcm0sIHN1Ym1pdENhdGVnb3J5LCBjbG9zZVRhc2tGb3JtIH0gZnJvbSBcIi4vZG9tXCI7XG5cblxuYWRkQ2F0ZWdvcnkoXCJIb21lXCIpO1xuYWRkQ2F0ZWdvcnkoXCJXb3JrXCIpO1xuYWRkQ2F0ZWdvcnkoXCJQZXRzXCIpO1xuY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG5cbmNhdGVnb3JpZXNbMF0uYWRkVGFzayhcIkJ1eSBzb2FwXCIsIFwiQnV5IDYgYmFycyBvZiBzY2VudGVkIHNvYXBcIiwgXCIyMDIzLTAyLTE0XCIsIFwibG93XCIsIFwieWVzXCIpO1xuY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG5jYXRlZ29yaWVzWzBdLmFkZFRhc2soXCJTb3J0IHRoZSBsaWJyYXJ5XCIsIFwiU29ydCBib29rcyBpbiAzIGJvb2tjYXNlcyBpbiB0aGUgbGl2aW5nIHJvb20gYW5kIGluIG1hc3RlciBiZWRyb29tXCIsIFwiMjAyMy0wMi0yNVwiLCBcImxvd1wiLCBcIm5vXCIpO1xuY2F0ZWdvcmllc1swXS5hZGRUYXNrKFwiV2FzaCB0aGUgd2luZG93c1wiLCBcIldhc2ggdGhlIHdpbmRvd3MgaW4gdGhlIGtpdGNoZW4sIHRoZSBsaXZpbmcgcm9vbSBhbmQgaW4gdGhlIGJlZHJvb21zXCIsIFwiMjAyMy0wMy0wMVwiLCBcImhpZ2hcIiwgXCJub1wiKTtcblxuXG5cbmRpc3BsYXlDYXRlZ29yaWVzKCk7XG5cblxuXG5jb25zdCBjYW5jZWxFZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWVkaXQtdGFza1wiKTtcbmNhbmNlbEVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRhc2tFZGl0Rm9ybSk7XG5cbmNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIik7XG5lZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuXG5cbmNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC10YXNrXCIpO1xuc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0VGFzayk7XG5cblxuY29uc3QgYWRkQ2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1jYXRlZ29yeVwiKTtcbmFkZENhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQ2F0ZWdvcnlGb3JtKTtcblxuXG5jb25zdCBjYW5jZWxDYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWNhdGVnb3J5XCIpO1xuY2FuY2VsQ2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQ2F0ZWdvcnlGb3JtKTtcblxuXG5jb25zdCBzdWJtaXRDYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWNhdGVnb3J5XCIpO1xuc3VibWl0Q2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdENhdGVnb3J5KTtcblxuXG5jb25zdCBjYW5jZWxUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtdGFza1wiKTtcbmNhbmNlbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0Zvcm0pO1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=