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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: rgb(255, 214, 237);\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n}\n\nh1 {\n    font-size: 2.5rem;\n    padding: 15px;\n    border: 3px solid black;\n    text-align: center;\n    background-color: cornsilk;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    border-bottom: 3px solid black;\n    flex: 1;\n}\n\n.categories {\n    border-left: 3px solid black;\n}\n\n.categories-header {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border-bottom: 3px solid black;\n}\n\n.categories-header,\n.categories-container>div,\n.categories-button {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.categories-button {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    justify-content: center;\n}\n\n.categories-container>div {\n    font-size: 1.75rem;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 3px solid black;\n}\n\n.remove-category-button,\n.add-category,\n.add-task,\n.task button,\n.buttons button {\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 5px 10px;\n    font-size: 1rem;\n}\n\n.remove-category-button,\n.task-top>div:last-child>button:last-child {\n    font-weight: bold;\n}\n\n.tasks {\n    border-left: 3px solid black;\n    border-right: 3px solid black;\n}\n\n.tasks-header-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n    border-bottom: 3px solid black;\n}\n\n.task {\n    padding: 10px 15px;\n    border-bottom: 3px solid black;\n}\n\n.task-top {\n    font-size: 1.25rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-task {\n    display: none;\n}\n\n.task-top div {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.edit {\n    height: 1.5rem;\n    width: auto;\n}\n\n.bottom {\n    font-size: 1rem;\n    padding-top: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n\n.form-popup-category,\n.form-popup-task,\n.form-popup-edit-task {\n    padding: 15px;\n    display: none;\n    border: 3px black solid;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: cornsilk;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 30px;\n}\n\nh3 {\n    font-size: 1.5rem;\n    text-align: center;\n}\n\ninput {\n    font-size: 1rem;\n    padding: 2px 4px;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\nlabel {\n    font-size: 1.25rem;\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n\n.category-chosen {\n    background-color: rgb(255, 150, 210);\n}\n\n.complete {\n    background-color: rgb(196, 223, 255);\n}\n\nbutton,\n.edit,\n.category-name-pointer {\n    cursor: grab;\n}\n\nbutton:hover {\n    background-color: rgb(212, 212, 212);\n}\n\n.edit:hover {\n    height: 1.75rem;\n    width: auto;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,8BAA8B;IAC9B,OAAO;AACX;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,8BAA8B;AAClC;;AAEA;;;IAGI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;;;;;IAKI,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;;AAGA;;;IAGI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;;AAGA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;;IAGI,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,WAAW;AACf","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    min-height: 100vh;\n    background-color: rgb(255, 214, 237);\n    display: flex;\n    flex-direction: column;\n    font-family: sans-serif;\n}\n\nh1 {\n    font-size: 2.5rem;\n    padding: 15px;\n    border: 3px solid black;\n    text-align: center;\n    background-color: cornsilk;\n}\n\nh2 {\n    font-size: 2rem;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    border-bottom: 3px solid black;\n    flex: 1;\n}\n\n.categories {\n    border-left: 3px solid black;\n}\n\n.categories-header {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border-bottom: 3px solid black;\n}\n\n.categories-header,\n.categories-container>div,\n.categories-button {\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.categories-button {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    justify-content: center;\n}\n\n.categories-container>div {\n    font-size: 1.75rem;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 3px solid black;\n}\n\n.remove-category-button,\n.add-category,\n.add-task,\n.task button,\n.buttons button {\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 5px 10px;\n    font-size: 1rem;\n}\n\n.remove-category-button,\n.task-top>div:last-child>button:last-child {\n    font-weight: bold;\n}\n\n.tasks {\n    border-left: 3px solid black;\n    border-right: 3px solid black;\n}\n\n.tasks-header-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px;\n    border-bottom: 3px solid black;\n}\n\n.task {\n    padding: 10px 15px;\n    border-bottom: 3px solid black;\n}\n\n.task-top {\n    font-size: 1.25rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-task {\n    display: none;\n}\n\n.task-top div {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.edit {\n    height: 1.5rem;\n    width: auto;\n}\n\n.bottom {\n    font-size: 1rem;\n    padding-top: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n}\n\n\n.form-popup-category,\n.form-popup-task,\n.form-popup-edit-task {\n    padding: 15px;\n    display: none;\n    border: 3px black solid;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: cornsilk;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.form-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 30px;\n}\n\nh3 {\n    font-size: 1.5rem;\n    text-align: center;\n}\n\ninput {\n    font-size: 1rem;\n    padding: 2px 4px;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\nlabel {\n    font-size: 1.25rem;\n}\n\n.buttons {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\n\n.category-chosen {\n    background-color: rgb(255, 150, 210);\n}\n\n.complete {\n    background-color: rgb(196, 223, 255);\n}\n\nbutton,\n.edit,\n.category-name-pointer {\n    cursor: grab;\n}\n\nbutton:hover {\n    background-color: rgb(212, 212, 212);\n}\n\n.edit:hover {\n    height: 1.75rem;\n    width: auto;\n}"],"sourceRoot":""}]);
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
    const tasksHeaderContainer = document.querySelector(".tasks-header-container");
    tasksHeader.dataset.indexCategoryHeading = addTaskButton.dataset.indexAdd;
    tasksHeader.textContent = _logic__WEBPACK_IMPORTED_MODULE_0__.categories[tasksHeader.dataset.indexCategoryHeading].name;

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
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.removeCategory)(i);
    console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.categories);

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

    for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_0__.categories.length; i++) {

        const category = document.createElement("div");
        category.dataset.indexCategoryDiv = i;
        category.classList.add("not-chosen");

        const categoryName = document.createElement("div");
        categoryName.textContent = _logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].name;
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
_logic__WEBPACK_IMPORTED_MODULE_1__.categories[0].addTask("Sort the library", "Sort the books in 3 bookcases in the living room and in the bedroom", "2023-02-25", "low", "no");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMxQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQzREO0FBQ3NQOzs7QUFHeFUsbURBQVc7QUFDWCxtREFBVztBQUNYLG1EQUFXO0FBQ1gsWUFBWSw4Q0FBVTs7QUFFdEIseURBQXFCO0FBQ3JCLFlBQVksOENBQVU7QUFDdEIseURBQXFCO0FBQ3JCLHlEQUFxQjs7OztBQUlyQix1REFBaUI7Ozs7QUFJakI7QUFDQSwrQ0FBK0MsbURBQWlCOztBQUVoRTtBQUNBLHlDQUF5QywwQ0FBUTs7O0FBR2pEO0FBQ0EsMkNBQTJDLDRDQUFVOzs7QUFHckQ7QUFDQSw0Q0FBNEMsa0RBQWdCOzs7QUFHNUQ7QUFDQSwrQ0FBK0MsbURBQWlCOzs7QUFHaEU7QUFDQSwrQ0FBK0MsZ0RBQWM7OztBQUc3RDtBQUNBLDJDQUEyQywrQ0FBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIxNCwgMjM3KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmNhdGVnb3JpZXMge1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2F0ZWdvcmllcy1oZWFkZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNhdGVnb3JpZXMtaGVhZGVyLFxcbi5jYXRlZ29yaWVzLWNvbnRhaW5lcj5kaXYsXFxuLmNhdGVnb3JpZXMtYnV0dG9uIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uY2F0ZWdvcmllcy1idXR0b24ge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcmllcy1jb250YWluZXI+ZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucmVtb3ZlLWNhdGVnb3J5LWJ1dHRvbixcXG4uYWRkLWNhdGVnb3J5LFxcbi5hZGQtdGFzayxcXG4udGFzayBidXR0b24sXFxuLmJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5yZW1vdmUtY2F0ZWdvcnktYnV0dG9uLFxcbi50YXNrLXRvcD5kaXY6bGFzdC1jaGlsZD5idXR0b246bGFzdC1jaGlsZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2tzLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2sge1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRhc2stdG9wIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLXRvcCBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lZGl0IHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uYm90dG9tIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcblxcbi5mb3JtLXBvcHVwLWNhdGVnb3J5LFxcbi5mb3JtLXBvcHVwLXRhc2ssXFxuLmZvcm0tcG9wdXAtZWRpdC10YXNrIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyOiAzcHggYmxhY2sgc29saWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5cXG4uY2F0ZWdvcnktY2hvc2VuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTUwLCAyMTApO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAyMjMsIDI1NSk7XFxufVxcblxcbmJ1dHRvbixcXG4uZWRpdCxcXG4uY2F0ZWdvcnktbmFtZS1wb2ludGVyIHtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XFxufVxcblxcbi5lZGl0OmhvdmVyIHtcXG4gICAgaGVpZ2h0OiAxLjc1cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsT0FBTztBQUNYOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiw4QkFBOEI7QUFDbEM7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7O0lBS0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7O0FBR0E7OztJQUdJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7OztJQUdJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE0LCAyMzcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2F0ZWdvcmllcyB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYXRlZ29yaWVzLWhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2F0ZWdvcmllcy1oZWFkZXIsXFxuLmNhdGVnb3JpZXMtY29udGFpbmVyPmRpdixcXG4uY2F0ZWdvcmllcy1idXR0b24ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5jYXRlZ29yaWVzLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yaWVzLWNvbnRhaW5lcj5kaXYge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZW1vdmUtY2F0ZWdvcnktYnV0dG9uLFxcbi5hZGQtY2F0ZWdvcnksXFxuLmFkZC10YXNrLFxcbi50YXNrIGJ1dHRvbixcXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnJlbW92ZS1jYXRlZ29yeS1idXR0b24sXFxuLnRhc2stdG9wPmRpdjpsYXN0LWNoaWxkPmJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFza3MtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzay10b3Age1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stdG9wIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXQge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuXFxuLmZvcm0tcG9wdXAtY2F0ZWdvcnksXFxuLmZvcm0tcG9wdXAtdGFzayxcXG4uZm9ybS1wb3B1cC1lZGl0LXRhc2sge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDNweCBibGFjayBzb2xpZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcblxcbi5jYXRlZ29yeS1jaG9zZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTAsIDIxMCk7XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDIyMywgMjU1KTtcXG59XFxuXFxuYnV0dG9uLFxcbi5lZGl0LFxcbi5jYXRlZ29yeS1uYW1lLXBvaW50ZXIge1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcXG59XFxuXFxuLmVkaXQ6aG92ZXIge1xcbiAgICBoZWlnaHQ6IDEuNzVyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNhdGVnb3JpZXMsIENhdGVnb3J5LCBUYXNrLCByZW1vdmVDYXRlZ29yeSwgYWRkQ2F0ZWdvcnkgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5jb25zdCBjYXRlZ29yaWVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yaWVzLWNvbnRhaW5lclwiKTtcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XG5cbmZ1bmN0aW9uIG9wZW5UYXNrRm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtdGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tCdXR0b24oKSB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5UYXNrRm9ybSk7XG59O1xuXG5mdW5jdGlvbiBzaG93Q2F0ZWdvcnlIZWFkaW5nKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1oZWFkZXJcIik7XG4gICAgY29uc3QgdGFza3NIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgdGFza3NIZWFkZXIuZGF0YXNldC5pbmRleENhdGVnb3J5SGVhZGluZyA9IGFkZFRhc2tCdXR0b24uZGF0YXNldC5pbmRleEFkZDtcbiAgICB0YXNrc0hlYWRlci50ZXh0Q29udGVudCA9IGNhdGVnb3JpZXNbdGFza3NIZWFkZXIuZGF0YXNldC5pbmRleENhdGVnb3J5SGVhZGluZ10ubmFtZTtcblxuICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LWNhdGVnb3J5PVwiJHt0YXNrc0hlYWRlci5kYXRhc2V0LmluZGV4Q2F0ZWdvcnlIZWFkaW5nfVwiXWApO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXgtY2F0ZWdvcnktZGl2PVwiJHt0YXNrc0hlYWRlci5kYXRhc2V0LmluZGV4Q2F0ZWdvcnlIZWFkaW5nfVwiXWApO1xuXG4gICAgaWYgKGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9PT0gdGFza3NIZWFkZXIudGV4dENvbnRlbnQpIHtcbiAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1jaG9zZW5cIik7XG4gICAgICAgIHRhc2tzSGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeS1jaG9zZW5cIik7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeS1jaG9zZW5cIik7XG4gICAgICAgIGxldCBub3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5vdC1jaG9zZW5cIik7XG4gICAgICAgIG5vdC5mb3JFYWNoKChuKSA9PiB7XG4gICAgICAgICAgICBuLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXRlZ29yeS1jaG9zZW5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJub3QtY2hvc2VuXCIpO1xufTtcblxuZnVuY3Rpb24gY29tcGxldGVDaGVja2VkKGksIGopIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXgtdGFzaz1cIiR7an1cIl1gKTtcbiAgICBjb25zdCB0YXNrQ29tcGxldGVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleC1jb21wbGV0ZS1ib3g9XCIke2p9XCJdYCk7XG4gICAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXgtY29tcGxldGU9XCIke2p9XCJdYCk7XG4gICAgaWYgKHRhc2tDb21wbGV0ZUJveC5jaGVja2VkKSB7XG4gICAgICAgIGNhdGVnb3JpZXNbaV0udGFza3Nbal0uY29tcGxldGUgPSBcInllc1wiO1xuICAgICAgICB0YXNrQ29tcGxldGVCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIGlmICh0YXNrQ29tcGxldGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRhc2tDb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiVGFzayBjb21wbGV0ZTogeWVzXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9IFwibm9cIjtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRhc2tDb21wbGV0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFza0NvbXBsZXRlLnRleHRDb250ZW50ID0gXCJUYXNrIGNvbXBsZXRlOiBub1wiO1xuICAgICAgICB9XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlXCIpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soaSwgaikge1xuICAgIGNhdGVnb3JpZXNbaV0ucmVtb3ZlVGFzayhqKTtcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscyhpLCBqKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LXRhc2s9XCIke2p9XCJdYCk7XG4gICAgY29uc3Qgdmlld0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleC1kZXRhaWxzPVwiJHtqfVwiXWApO1xuXG4gICAgaWYgKHZpZXdEZXRhaWxzLnRleHRDb250ZW50ID09PSBcIlZpZXcgZGV0YWlsc1wiKSB7XG4gICAgICAgIGNvbnN0IHRhc2tCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQm90dG9tLmRhdGFzZXQuaW5kZXhCb3R0b20gPSBqO1xuICAgICAgICB0YXNrQm90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b21cIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3JpZXNbaV0udGFza3Nbal0uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgRHVlIGRhdGU6ICR7Y2F0ZWdvcmllc1tpXS50YXNrc1tqXS5kYXRlfSBgO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7Y2F0ZWdvcmllc1tpXS50YXNrc1tqXS5wcmlvcml0eX0gYDtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ29tcGxldGUuZGF0YXNldC5pbmRleENvbXBsZXRlID0gajtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXNbaV0udGFza3Nbal0uY29tcGxldGUgPT09IFwieWVzXCIpIHtcbiAgICAgICAgICAgIHRhc2tDb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiVGFzayBjb21wbGV0ZTogeWVzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrQ29tcGxldGUudGV4dENvbnRlbnQgPSBcIlRhc2sgY29tcGxldGU6IG5vXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZCh0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tDb21wbGV0ZSk7XG4gICAgICAgIHZpZXdEZXRhaWxzLnRleHRDb250ZW50ID0gXCJIaWRlIGRldGFpbHNcIjtcbiAgICAgICAgdGFzay5hcHBlbmQodGFza0JvdHRvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFza0JvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LWJvdHRvbT1cIiR7an1cIl1gKTtcbiAgICAgICAgdmlld0RldGFpbHMudGV4dENvbnRlbnQgPSBcIlZpZXcgZGV0YWlsc1wiO1xuICAgICAgICB0YXNrLnJlbW92ZUNoaWxkKHRhc2tCb3R0b20pO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG9wZW5FZGl0VGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtZWRpdC10YXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stdGl0bGVcIik7XG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZGF0ZVwiKTtcbiAgICBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLXByaW9yaXR5XCIpO1xuXG4gICAgbmV3VGFza1RpdGxlLnZhbHVlID0gYCR7Y2F0ZWdvcmllc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0XS50YXNrc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0VGFza10udGl0bGV9YDtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWUgPSBgJHtjYXRlZ29yaWVzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRdLnRhc2tzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRUYXNrXS5kZXNjcmlwdGlvbn1gO1xuICAgIG5ld1Rhc2tEYXRlLnZhbHVlID0gYCR7Y2F0ZWdvcmllc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0XS50YXNrc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0VGFza10uZGF0ZX1gO1xuICAgIG5ld1Rhc2tQcmlvcml0eS52YWx1ZSA9IGAke2NhdGVnb3JpZXNbZWRpdC5kYXRhc2V0LmluZGV4RWRpdF0udGFza3NbZWRpdC5kYXRhc2V0LmluZGV4RWRpdFRhc2tdLnByaW9yaXR5fWA7XG59O1xuXG5mdW5jdGlvbiBjbG9zZVRhc2tFZGl0Rm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtZWRpdC10YXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuXG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay10aXRsZVwiKTtcbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1kYXRlXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stcHJpb3JpdHlcIik7XG5cbiAgICBjYXRlZ29yaWVzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRdLnRhc2tzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRUYXNrXS5lZGl0VGFzayhuZXdUYXNrVGl0bGUudmFsdWUsIG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZSwgbmV3VGFza0RhdGUudmFsdWUsIG5ld1Rhc2tQcmlvcml0eS52YWx1ZSk7XG5cbiAgICBjbG9zZVRhc2tFZGl0Rm9ybSgpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC1lZGl0LXRhc2sgZm9ybVwiKS5yZXNldCgpO1xuXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXIgPSBhZGRUYXNrQnV0dG9uLmRhdGFzZXQuaW5kZXhBZGQ7XG4gICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2F0ZWdvcmllc1t0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXJdLnRhc2tzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIHRhc2suZGF0YXNldC5pbmRleFRhc2sgPSBqO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrVG9wLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRvcFwiKTtcblxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBgJHtqICsgMX0uICR7Y2F0ZWdvcmllc1t0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXJdLnRhc2tzW2pdLnRpdGxlfSBgO1xuXG4gICAgICAgIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stY29tcGxldGVcIik7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1jb21wbGV0ZVwiKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LmRhdGFzZXQuaW5kZXhDb21wbGV0ZUJveCA9IGo7XG4gICAgICAgIGlmIChjYXRlZ29yaWVzW3Rhc2tzQ29udGFpbmVyLmRhdGFzZXQuaW5kZXhUYXNrc0NvbnRhaW5lcl0udGFza3Nbal0uY29tcGxldGUgPT09IFwieWVzXCIpIHtcbiAgICAgICAgICAgIHRhc2tDb21wbGV0ZUJveC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2tlZCh0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXIsIGopO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJlZGl0X0ZJTEwxX3dnaHQ0MDBfR1JBRDBfb3BzejQwLnN2Z1wiKTtcbiAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICAgICAgZWRpdC5kYXRhc2V0LmluZGV4RWRpdCA9IHRhc2tzQ29udGFpbmVyLmRhdGFzZXQuaW5kZXhUYXNrc0NvbnRhaW5lcjtcbiAgICAgICAgZWRpdC5kYXRhc2V0LmluZGV4RWRpdFRhc2sgPSBqO1xuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRWRpdFRhc2spO1xuXG4gICAgICAgIGNvbnN0IHZpZXdEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdmlld0RldGFpbHMuY2xhc3NMaXN0LmFkZChcInZpZXctZGV0YWlsc1wiKTtcbiAgICAgICAgdmlld0RldGFpbHMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgdmlld0RldGFpbHMuZGF0YXNldC5pbmRleERldGFpbHMgPSBqO1xuICAgICAgICB2aWV3RGV0YWlscy50ZXh0Q29udGVudCA9IFwiVmlldyBkZXRhaWxzXCI7XG4gICAgICAgIHZpZXdEZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzaG93RGV0YWlscyh0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXIsIGopO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZVRhc2tCdXR0b24uZGF0YXNldC5pbmRleERlbGV0ZSA9IHRhc2tzQ29udGFpbmVyLmRhdGFzZXQuaW5kZXhUYXNrc0NvbnRhaW5lcjtcbiAgICAgICAgICAgIHJlbW92ZVRhc2tCdXR0b24uZGF0YXNldC5pbmRleERlbGV0ZVRhc2sgPSBqO1xuICAgICAgICAgICAgZGVsZXRlVGFzayhyZW1vdmVUYXNrQnV0dG9uLmRhdGFzZXQuaW5kZXhEZWxldGUsIGopO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuXG4gICAgICAgIHRhc2tMZWZ0LmFwcGVuZCh0YXNrQ29tcGxldGVCb3gsIGVkaXQsIHZpZXdEZXRhaWxzLCByZW1vdmVUYXNrQnV0dG9uKTtcbiAgICAgICAgdGFza1RvcC5hcHBlbmQodGFza1RpdGxlLCB0YXNrTGVmdCk7XG4gICAgICAgIHRhc2suYXBwZW5kKHRhc2tUb3ApO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmQodGFzayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpKSB7XG4gICAgcmVtb3ZlQ2F0ZWdvcnkoaSk7XG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG5cbiAgICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtaGVhZGVyXCIpO1xuICAgIGlmICh0YXNrc0hlYWRlci5kYXRhc2V0LmluZGV4Q2F0ZWdvcnlIZWFkaW5nID09PSBpKSB7XG4gICAgICAgIHRhc2tzSGVhZGVyLnRleHRDb250ZW50ID0gXCJUYXNrc1wiO1xuICAgICAgICBkZWxldGUgdGFza3NIZWFkZXIuZGF0YXNldC5pbmRleENhdGVnb3J5SGVhZGluZztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgY29uc3QgdGFza3NIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWhlYWRlci1jb250YWluZXJcIik7XG4gICAgICAgIHRhc2tzSGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXRlZ29yeS1jaG9zZW5cIik7XG5cbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgZGVsZXRlIHRhc2tzQ29udGFpbmVyLmRhdGFzZXQuaW5kZXhUYXNrc0NvbnRhaW5lcjtcbiAgICAgICAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cbiAgICBjYXRlZ29yaWVzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBkaXNwbGF5Q2F0ZWdvcmllcygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Q2F0ZWdvcmllcygpIHtcbiAgICBjYXRlZ29yaWVzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5LmRhdGFzZXQuaW5kZXhDYXRlZ29yeURpdiA9IGk7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJub3QtY2hvc2VuXCIpO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IGNhdGVnb3JpZXNbaV0ubmFtZTtcbiAgICAgICAgY2F0ZWdvcnlOYW1lLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeS1uYW1lLXBvaW50ZXJcIik7XG4gICAgICAgIGNhdGVnb3J5TmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWNhdGVnb3J5XCIsIGkpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1oZWFkZXJcIik7XG4gICAgICAgIGlmIChjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPT09IHRhc2tzSGVhZGVyLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktY2hvc2VuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgICAgIGNhdGVnb3J5TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5kYXRhc2V0LmluZGV4QWRkID0gY2F0ZWdvcnlOYW1lLmRhdGFzZXQuaW5kZXhDYXRlZ29yeTtcbiAgICAgICAgICAgIHNob3dBZGRUYXNrQnV0dG9uKCk7XG4gICAgICAgICAgICBzaG93Q2F0ZWdvcnlIZWFkaW5nKCk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlQ2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmVDYXRlZ29yeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWNhdGVnb3J5LWJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlQ2F0ZWdvcnlCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgICAgICAgcmVtb3ZlQ2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUNhdGVnb3J5QnV0dG9uLmRhdGFzZXQuaW5kZXhSZW1vdmUgPSBjYXRlZ29yeU5hbWUuZGF0YXNldC5pbmRleENhdGVnb3J5O1xuICAgICAgICAgICAgZGVsZXRlQ2F0ZWdvcnkocmVtb3ZlQ2F0ZWdvcnlCdXR0b24uZGF0YXNldC5pbmRleFJlbW92ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNhdGVnb3J5LmFwcGVuZChjYXRlZ29yeU5hbWUsIHJlbW92ZUNhdGVnb3J5QnV0dG9uKTtcbiAgICAgICAgY2F0ZWdvcmllc0NvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcnkpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3VibWl0VGFzayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRhdGVcIikudmFsdWU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgY2F0ZWdvcmllc1tgJHthZGRUYXNrQnV0dG9uLmRhdGFzZXQuaW5kZXhBZGR9YF0uYWRkVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0RhdGUsIHRhc2tQcmlvcml0eSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtdGFzayBmb3JtXCIpLnJlc2V0KCk7XG4gICAgY2xvc2VUYXNrRm9ybSgpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG59O1xuXG5mdW5jdGlvbiBvcGVuQ2F0ZWdvcnlGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC1jYXRlZ29yeVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbG9zZUNhdGVnb3J5Rm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtY2F0ZWdvcnlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC1jYXRlZ29yeSBmb3JtXCIpLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdENhdGVnb3J5KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3J5LW5hbWVcIik7XG4gICAgYWRkQ2F0ZWdvcnkoY2F0ZWdvcnlOYW1lLnZhbHVlKTtcbiAgICBkaXNwbGF5Q2F0ZWdvcmllcygpO1xuICAgIGNsb3NlQ2F0ZWdvcnlGb3JtKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLWNhdGVnb3J5IGZvcm1cIikucmVzZXQoKTtcblxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC10YXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtdGFzayBmb3JtXCIpLnJlc2V0KCk7XG59XG5cbmV4cG9ydCB7IGNhdGVnb3JpZXNDb250YWluZXIsIHRhc2tzQ29udGFpbmVyLCBvcGVuVGFza0Zvcm0sIHNob3dBZGRUYXNrQnV0dG9uLCBzaG93Q2F0ZWdvcnlIZWFkaW5nLCBjb21wbGV0ZUNoZWNrZWQsIGRlbGV0ZVRhc2ssIHNob3dEZXRhaWxzLCBvcGVuRWRpdFRhc2ssIGNsb3NlVGFza0VkaXRGb3JtLCBlZGl0VGFzaywgZGlzcGxheVRhc2tzLCBkZWxldGVDYXRlZ29yeSwgZGlzcGxheUNhdGVnb3JpZXMsIHN1Ym1pdFRhc2ssIG9wZW5DYXRlZ29yeUZvcm0sIGNsb3NlQ2F0ZWdvcnlGb3JtLCBzdWJtaXRDYXRlZ29yeSwgY2xvc2VUYXNrRm9ybSB9IiwibGV0IGNhdGVnb3JpZXMgPSBbXTtcblxuY2xhc3MgQ2F0ZWdvcnkge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbiAgICByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSkge1xuICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKTtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cbiAgICBlZGl0VGFzayhuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0RhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuICAgIGVkaXRDb21wbGV0ZShuZXdDb21wbGV0ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gbmV3Q29tcGxldGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDYXRlZ29yeShpbmRleCkge1xuICAgIGNhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnkobmFtZSkge1xuICAgIGxldCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShuYW1lKTtcbiAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xufVxuXG5leHBvcnQgeyBjYXRlZ29yaWVzLCBDYXRlZ29yeSwgVGFzaywgcmVtb3ZlQ2F0ZWdvcnksIGFkZENhdGVnb3J5IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgY2F0ZWdvcmllcywgQ2F0ZWdvcnksIFRhc2ssIHJlbW92ZUNhdGVnb3J5LCBhZGRDYXRlZ29yeSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBjYXRlZ29yaWVzQ29udGFpbmVyLCB0YXNrc0NvbnRhaW5lciwgb3BlblRhc2tGb3JtLCBzaG93QWRkVGFza0J1dHRvbiwgc2hvd0NhdGVnb3J5SGVhZGluZywgY29tcGxldGVDaGVja2VkLCBkZWxldGVUYXNrLCBzaG93RGV0YWlscywgb3BlbkVkaXRUYXNrLCBjbG9zZVRhc2tFZGl0Rm9ybSwgZWRpdFRhc2ssIGRpc3BsYXlUYXNrcywgZGVsZXRlQ2F0ZWdvcnksIGRpc3BsYXlDYXRlZ29yaWVzLCBzdWJtaXRUYXNrLCBvcGVuQ2F0ZWdvcnlGb3JtLCBjbG9zZUNhdGVnb3J5Rm9ybSwgc3VibWl0Q2F0ZWdvcnksIGNsb3NlVGFza0Zvcm0gfSBmcm9tIFwiLi9kb21cIjtcblxuXG5hZGRDYXRlZ29yeShcIkhvbWVcIik7XG5hZGRDYXRlZ29yeShcIldvcmtcIik7XG5hZGRDYXRlZ29yeShcIlBldHNcIik7XG5jb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcblxuY2F0ZWdvcmllc1swXS5hZGRUYXNrKFwiQnV5IHNvYXBcIiwgXCJCdXkgNiBiYXJzIG9mIHNjZW50ZWQgc29hcFwiLCBcIjIwMjMtMDItMTRcIiwgXCJsb3dcIiwgXCJ5ZXNcIik7XG5jb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbmNhdGVnb3JpZXNbMF0uYWRkVGFzayhcIlNvcnQgdGhlIGxpYnJhcnlcIiwgXCJTb3J0IHRoZSBib29rcyBpbiAzIGJvb2tjYXNlcyBpbiB0aGUgbGl2aW5nIHJvb20gYW5kIGluIHRoZSBiZWRyb29tXCIsIFwiMjAyMy0wMi0yNVwiLCBcImxvd1wiLCBcIm5vXCIpO1xuY2F0ZWdvcmllc1swXS5hZGRUYXNrKFwiV2FzaCB0aGUgd2luZG93c1wiLCBcIldhc2ggdGhlIHdpbmRvd3MgaW4gdGhlIGtpdGNoZW4sIHRoZSBsaXZpbmcgcm9vbSBhbmQgaW4gdGhlIGJlZHJvb21zXCIsIFwiMjAyMy0wMy0wMVwiLCBcImhpZ2hcIiwgXCJub1wiKTtcblxuXG5cbmRpc3BsYXlDYXRlZ29yaWVzKCk7XG5cblxuXG5jb25zdCBjYW5jZWxFZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWVkaXQtdGFza1wiKTtcbmNhbmNlbEVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRhc2tFZGl0Rm9ybSk7XG5cbmNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIik7XG5lZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuXG5cbmNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC10YXNrXCIpO1xuc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0VGFzayk7XG5cblxuY29uc3QgYWRkQ2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1jYXRlZ29yeVwiKTtcbmFkZENhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQ2F0ZWdvcnlGb3JtKTtcblxuXG5jb25zdCBjYW5jZWxDYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWNhdGVnb3J5XCIpO1xuY2FuY2VsQ2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQ2F0ZWdvcnlGb3JtKTtcblxuXG5jb25zdCBzdWJtaXRDYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWNhdGVnb3J5XCIpO1xuc3VibWl0Q2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdENhdGVnb3J5KTtcblxuXG5jb25zdCBjYW5jZWxUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtdGFza1wiKTtcbmNhbmNlbFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlVGFza0Zvcm0pO1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=