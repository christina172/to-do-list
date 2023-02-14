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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



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

        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.store)();
    } else {
        _logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].tasks[j].complete = "no";
        taskCompleteBox.checked = false;
        if (taskComplete !== null) {
            taskComplete.textContent = "Task complete: no";
        }
        task.classList.remove("complete");

        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.store)();
    }
};

function deleteTask(i, j) {
    _logic__WEBPACK_IMPORTED_MODULE_0__.categories[i].removeTask(j);
    console.log(_logic__WEBPACK_IMPORTED_MODULE_0__.categories);
    tasksContainer.innerHTML = "";
    displayTasks();

    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.store)();
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

    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.store)();

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

    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.store)();

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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


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

    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.store)();
}



function addCategory(name) {
    let category = new Category(name);
    categories.push(category);

    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.store)();
}



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


function store() {
    localStorage.setItem("jsonCategories", JSON.stringify(_logic__WEBPACK_IMPORTED_MODULE_0__.categories));
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







let jsonCategories = JSON.parse(localStorage.getItem("jsonCategories"));

if (jsonCategories === null) {
    console.log(jsonCategories);
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.addCategory)("Home");
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.addCategory)("Work");
    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.addCategory)("Pets");
    console.log(_logic__WEBPACK_IMPORTED_MODULE_1__.categories);

    _logic__WEBPACK_IMPORTED_MODULE_1__.categories[0].addTask("Buy soap", "Buy 6 bars of scented soap", "2023-02-14", "low", "yes");
    console.log(_logic__WEBPACK_IMPORTED_MODULE_1__.categories);
    _logic__WEBPACK_IMPORTED_MODULE_1__.categories[0].addTask("Sort the library", "Sort the books in 3 bookcases in the living room and in the bedroom", "2023-02-25", "low", "no");
    _logic__WEBPACK_IMPORTED_MODULE_1__.categories[0].addTask("Wash the windows", "Wash the windows in the kitchen, the living room and in the bedrooms", "2023-03-01", "high", "no");
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.store)();
    JSON.parse(localStorage.getItem("jsonCategories"));
} else {
    jsonCategories.forEach((category) => {
        regainCategoryMethods(category);
        category.tasks.forEach((task) => regainTaskMethods(task));
    });
    for (let k = 0; k < jsonCategories.length; k++) {
        _logic__WEBPACK_IMPORTED_MODULE_1__.categories.push(jsonCategories[k]);
    }
}

function regainTaskMethods(task) {
    Object.setPrototypeOf(task, _logic__WEBPACK_IMPORTED_MODULE_1__.Task.prototype);
}

function regainCategoryMethods(category) {
    Object.setPrototypeOf(category, _logic__WEBPACK_IMPORTED_MODULE_1__.Category.prototype);
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsb0JBQW9CLDJCQUEyQjtBQUMvQyxRQUFRLG1EQUFlO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0Msa0RBQWM7QUFDOUM7O0FBRUE7QUFDQSxvQ0FBb0Msc0RBQWtCO0FBQ3REOzs7O0FBSUEsdURBQWlCOzs7O0FBSWpCO0FBQ0EsK0NBQStDLG1EQUFpQjs7QUFFaEU7QUFDQSx5Q0FBeUMsMENBQVE7O0FBRWpEO0FBQ0EsMkNBQTJDLDRDQUFVOztBQUVyRDtBQUNBLDRDQUE0QyxrREFBZ0I7O0FBRTVEO0FBQ0EsK0NBQStDLG1EQUFpQjs7QUFFaEU7QUFDQSwrQ0FBK0MsZ0RBQWM7O0FBRTdEO0FBQ0EsMkNBQTJDLCtDQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjE0LCAyMzcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4uY2F0ZWdvcmllcyB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYXRlZ29yaWVzLWhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2F0ZWdvcmllcy1oZWFkZXIsXFxuLmNhdGVnb3JpZXMtY29udGFpbmVyPmRpdixcXG4uY2F0ZWdvcmllcy1idXR0b24ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5jYXRlZ29yaWVzLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yaWVzLWNvbnRhaW5lcj5kaXYge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZW1vdmUtY2F0ZWdvcnktYnV0dG9uLFxcbi5hZGQtY2F0ZWdvcnksXFxuLmFkZC10YXNrLFxcbi50YXNrIGJ1dHRvbixcXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnJlbW92ZS1jYXRlZ29yeS1idXR0b24sXFxuLnRhc2stdG9wPmRpdjpsYXN0LWNoaWxkPmJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFza3MtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGFzay10b3Age1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stdG9wIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXQge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5ib3R0b20ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDNweDtcXG59XFxuXFxuXFxuLmZvcm0tcG9wdXAtY2F0ZWdvcnksXFxuLmZvcm0tcG9wdXAtdGFzayxcXG4uZm9ybS1wb3B1cC1lZGl0LXRhc2sge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXI6IDNweCBibGFjayBzb2xpZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcblxcbi5jYXRlZ29yeS1jaG9zZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTAsIDIxMCk7XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDIyMywgMjU1KTtcXG59XFxuXFxuYnV0dG9uLFxcbi5lZGl0LFxcbi5jYXRlZ29yeS1uYW1lLXBvaW50ZXIge1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTIsIDIxMiwgMjEyKTtcXG59XFxuXFxuLmVkaXQ6aG92ZXIge1xcbiAgICBoZWlnaHQ6IDEuNzVyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixPQUFPO0FBQ1g7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtBQUNsQzs7QUFFQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTs7Ozs7SUFLSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOzs7QUFHQTs7O0lBR0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTs7O0lBR0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMTQsIDIzNyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5jYXRlZ29yaWVzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNhdGVnb3JpZXMtaGVhZGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYXRlZ29yaWVzLWhlYWRlcixcXG4uY2F0ZWdvcmllcy1jb250YWluZXI+ZGl2LFxcbi5jYXRlZ29yaWVzLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuLmNhdGVnb3JpZXMtYnV0dG9uIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3JpZXMtY29udGFpbmVyPmRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlbW92ZS1jYXRlZ29yeS1idXR0b24sXFxuLmFkZC1jYXRlZ29yeSxcXG4uYWRkLXRhc2ssXFxuLnRhc2sgYnV0dG9uLFxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ucmVtb3ZlLWNhdGVnb3J5LWJ1dHRvbixcXG4udGFzay10b3A+ZGl2Omxhc3QtY2hpbGQ+YnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrcy1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrIHtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50YXNrLXRvcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay10b3AgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZWRpdCB7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmJvdHRvbSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG5cXG4uZm9ybS1wb3B1cC1jYXRlZ29yeSxcXG4uZm9ybS1wb3B1cC10YXNrLFxcbi5mb3JtLXBvcHVwLWVkaXQtdGFzayB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlcjogM3B4IGJsYWNrIHNvbGlkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3Juc2lsaztcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuXFxuLmNhdGVnb3J5LWNob3NlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1MCwgMjEwKTtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMjIzLCAyNTUpO1xcbn1cXG5cXG5idXR0b24sXFxuLmVkaXQsXFxuLmNhdGVnb3J5LW5hbWUtcG9pbnRlciB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xcbn1cXG5cXG4uZWRpdDpob3ZlciB7XFxuICAgIGhlaWdodDogMS43NXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2F0ZWdvcmllcywgQ2F0ZWdvcnksIFRhc2ssIHJlbW92ZUNhdGVnb3J5LCBhZGRDYXRlZ29yeSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgY2F0ZWdvcmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcmllcy1jb250YWluZXJcIik7XG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBvcGVuVGFza0Zvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLXRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbmZ1bmN0aW9uIHNob3dBZGRUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuVGFza0Zvcm0pO1xufTtcblxuZnVuY3Rpb24gc2hvd0NhdGVnb3J5SGVhZGluZygpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRhc2tzSGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1oZWFkZXItY29udGFpbmVyXCIpO1xuICAgIHRhc2tzSGVhZGVyLmRhdGFzZXQuaW5kZXhDYXRlZ29yeUhlYWRpbmcgPSBhZGRUYXNrQnV0dG9uLmRhdGFzZXQuaW5kZXhBZGQ7XG4gICAgdGFza3NIZWFkZXIudGV4dENvbnRlbnQgPSBjYXRlZ29yaWVzW3Rhc2tzSGVhZGVyLmRhdGFzZXQuaW5kZXhDYXRlZ29yeUhlYWRpbmddLm5hbWU7XG5cbiAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleC1jYXRlZ29yeT1cIiR7dGFza3NIZWFkZXIuZGF0YXNldC5pbmRleENhdGVnb3J5SGVhZGluZ31cIl1gKTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LWNhdGVnb3J5LWRpdj1cIiR7dGFza3NIZWFkZXIuZGF0YXNldC5pbmRleENhdGVnb3J5SGVhZGluZ31cIl1gKTtcblxuICAgIGlmIChjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPT09IHRhc2tzSGVhZGVyLnRleHRDb250ZW50KSB7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtY2hvc2VuXCIpO1xuICAgICAgICB0YXNrc0hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktY2hvc2VuXCIpO1xuICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktY2hvc2VuXCIpO1xuICAgICAgICBsZXQgbm90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3QtY2hvc2VuXCIpO1xuICAgICAgICBub3QuZm9yRWFjaCgobikgPT4ge1xuICAgICAgICAgICAgbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2F0ZWdvcnktY2hvc2VuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwibm90LWNob3NlblwiKTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBsZXRlQ2hlY2tlZChpLCBqKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LXRhc2s9XCIke2p9XCJdYCk7XG4gICAgY29uc3QgdGFza0NvbXBsZXRlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXgtY29tcGxldGUtYm94PVwiJHtqfVwiXWApO1xuICAgIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LWNvbXBsZXRlPVwiJHtqfVwiXWApO1xuICAgIGlmICh0YXNrQ29tcGxldGVCb3guY2hlY2tlZCkge1xuICAgICAgICBjYXRlZ29yaWVzW2ldLnRhc2tzW2pdLmNvbXBsZXRlID0gXCJ5ZXNcIjtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGFza0NvbXBsZXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXNrQ29tcGxldGUudGV4dENvbnRlbnQgPSBcIlRhc2sgY29tcGxldGU6IHllc1wiO1xuICAgICAgICB9XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpO1xuXG4gICAgICAgIHN0b3JlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9IFwibm9cIjtcbiAgICAgICAgdGFza0NvbXBsZXRlQm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRhc2tDb21wbGV0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFza0NvbXBsZXRlLnRleHRDb250ZW50ID0gXCJUYXNrIGNvbXBsZXRlOiBub1wiO1xuICAgICAgICB9XG4gICAgICAgIHRhc2suY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlXCIpO1xuXG4gICAgICAgIHN0b3JlKCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpLCBqKSB7XG4gICAgY2F0ZWdvcmllc1tpXS5yZW1vdmVUYXNrKGopO1xuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZGlzcGxheVRhc2tzKCk7XG5cbiAgICBzdG9yZSgpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscyhpLCBqKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LXRhc2s9XCIke2p9XCJdYCk7XG4gICAgY29uc3Qgdmlld0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleC1kZXRhaWxzPVwiJHtqfVwiXWApO1xuXG4gICAgaWYgKHZpZXdEZXRhaWxzLnRleHRDb250ZW50ID09PSBcIlZpZXcgZGV0YWlsc1wiKSB7XG4gICAgICAgIGNvbnN0IHRhc2tCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQm90dG9tLmRhdGFzZXQuaW5kZXhCb3R0b20gPSBqO1xuICAgICAgICB0YXNrQm90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b21cIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3JpZXNbaV0udGFza3Nbal0uZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBgRHVlIGRhdGU6ICR7Y2F0ZWdvcmllc1tpXS50YXNrc1tqXS5kYXRlfSBgO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7Y2F0ZWdvcmllc1tpXS50YXNrc1tqXS5wcmlvcml0eX0gYDtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ29tcGxldGUuZGF0YXNldC5pbmRleENvbXBsZXRlID0gajtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXNbaV0udGFza3Nbal0uY29tcGxldGUgPT09IFwieWVzXCIpIHtcbiAgICAgICAgICAgIHRhc2tDb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiVGFzayBjb21wbGV0ZTogeWVzXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXNrQ29tcGxldGUudGV4dENvbnRlbnQgPSBcIlRhc2sgY29tcGxldGU6IG5vXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrQm90dG9tLmFwcGVuZCh0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIHRhc2tDb21wbGV0ZSk7XG4gICAgICAgIHZpZXdEZXRhaWxzLnRleHRDb250ZW50ID0gXCJIaWRlIGRldGFpbHNcIjtcbiAgICAgICAgdGFzay5hcHBlbmQodGFza0JvdHRvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFza0JvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4LWJvdHRvbT1cIiR7an1cIl1gKTtcbiAgICAgICAgdmlld0RldGFpbHMudGV4dENvbnRlbnQgPSBcIlZpZXcgZGV0YWlsc1wiO1xuICAgICAgICB0YXNrLnJlbW92ZUNoaWxkKHRhc2tCb3R0b20pO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG9wZW5FZGl0VGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtZWRpdC10YXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stdGl0bGVcIik7XG4gICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stZGF0ZVwiKTtcbiAgICBjb25zdCBuZXdUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLXByaW9yaXR5XCIpO1xuXG4gICAgbmV3VGFza1RpdGxlLnZhbHVlID0gYCR7Y2F0ZWdvcmllc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0XS50YXNrc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0VGFza10udGl0bGV9YDtcbiAgICBuZXdUYXNrRGVzY3JpcHRpb24udmFsdWUgPSBgJHtjYXRlZ29yaWVzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRdLnRhc2tzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRUYXNrXS5kZXNjcmlwdGlvbn1gO1xuICAgIG5ld1Rhc2tEYXRlLnZhbHVlID0gYCR7Y2F0ZWdvcmllc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0XS50YXNrc1tlZGl0LmRhdGFzZXQuaW5kZXhFZGl0VGFza10uZGF0ZX1gO1xuICAgIG5ld1Rhc2tQcmlvcml0eS52YWx1ZSA9IGAke2NhdGVnb3JpZXNbZWRpdC5kYXRhc2V0LmluZGV4RWRpdF0udGFza3NbZWRpdC5kYXRhc2V0LmluZGV4RWRpdFRhc2tdLnByaW9yaXR5fWA7XG59O1xuXG5mdW5jdGlvbiBjbG9zZVRhc2tFZGl0Rm9ybSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtZWRpdC10YXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0XCIpO1xuXG4gICAgY29uc3QgbmV3VGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay10aXRsZVwiKTtcbiAgICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1kYXRlXCIpO1xuICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stcHJpb3JpdHlcIik7XG5cbiAgICBjYXRlZ29yaWVzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRdLnRhc2tzW2VkaXQuZGF0YXNldC5pbmRleEVkaXRUYXNrXS5lZGl0VGFzayhuZXdUYXNrVGl0bGUudmFsdWUsIG5ld1Rhc2tEZXNjcmlwdGlvbi52YWx1ZSwgbmV3VGFza0RhdGUudmFsdWUsIG5ld1Rhc2tQcmlvcml0eS52YWx1ZSk7XG5cbiAgICBjbG9zZVRhc2tFZGl0Rm9ybSgpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC1lZGl0LXRhc2sgZm9ybVwiKS5yZXNldCgpO1xuXG4gICAgc3RvcmUoKTtcblxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoKSB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgdGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyID0gYWRkVGFza0J1dHRvbi5kYXRhc2V0LmluZGV4QWRkO1xuICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNhdGVnb3JpZXNbdGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyXS50YXNrcy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICB0YXNrLmRhdGFzZXQuaW5kZXhUYXNrID0gajtcblxuICAgICAgICBjb25zdCB0YXNrVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1RvcC5jbGFzc0xpc3QuYWRkKFwidGFzay10b3BcIik7XG5cbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCR7aiArIDF9LiAke2NhdGVnb3JpZXNbdGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyXS50YXNrc1tqXS50aXRsZX0gYDtcblxuICAgICAgICBjb25zdCB0YXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0YXNrQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICB0YXNrQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWNvbXBsZXRlXCIpO1xuICAgICAgICB0YXNrQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stY29tcGxldGVcIik7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJveC5kYXRhc2V0LmluZGV4Q29tcGxldGVCb3ggPSBqO1xuICAgICAgICBpZiAoY2F0ZWdvcmllc1t0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXJdLnRhc2tzW2pdLmNvbXBsZXRlID09PSBcInllc1wiKSB7XG4gICAgICAgICAgICB0YXNrQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrQ29tcGxldGVCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb21wbGV0ZUNoZWNrZWQodGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyLCBqKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGVkaXQuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiZWRpdF9GSUxMMV93Z2h0NDAwX0dSQUQwX29wc3o0MC5zdmdcIik7XG4gICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gICAgICAgIGVkaXQuZGF0YXNldC5pbmRleEVkaXQgPSB0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXI7XG4gICAgICAgIGVkaXQuZGF0YXNldC5pbmRleEVkaXRUYXNrID0gajtcbiAgICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkVkaXRUYXNrKTtcblxuICAgICAgICBjb25zdCB2aWV3RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHZpZXdEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ2aWV3LWRldGFpbHNcIik7XG4gICAgICAgIHZpZXdEZXRhaWxzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIHZpZXdEZXRhaWxzLmRhdGFzZXQuaW5kZXhEZXRhaWxzID0gajtcbiAgICAgICAgdmlld0RldGFpbHMudGV4dENvbnRlbnQgPSBcIlZpZXcgZGV0YWlsc1wiO1xuICAgICAgICB2aWV3RGV0YWlscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hvd0RldGFpbHModGFza3NDb250YWluZXIuZGF0YXNldC5pbmRleFRhc2tzQ29udGFpbmVyLCBqKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVUYXNrQnV0dG9uLmRhdGFzZXQuaW5kZXhEZWxldGUgPSB0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXI7XG4gICAgICAgICAgICByZW1vdmVUYXNrQnV0dG9uLmRhdGFzZXQuaW5kZXhEZWxldGVUYXNrID0gajtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2socmVtb3ZlVGFza0J1dHRvbi5kYXRhc2V0LmluZGV4RGVsZXRlLCBqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcblxuICAgICAgICB0YXNrTGVmdC5hcHBlbmQodGFza0NvbXBsZXRlQm94LCBlZGl0LCB2aWV3RGV0YWlscywgcmVtb3ZlVGFza0J1dHRvbik7XG4gICAgICAgIHRhc2tUb3AuYXBwZW5kKHRhc2tUaXRsZSwgdGFza0xlZnQpO1xuICAgICAgICB0YXNrLmFwcGVuZCh0YXNrVG9wKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kKHRhc2spO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaSkge1xuICAgIHJlbW92ZUNhdGVnb3J5KGkpO1xuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuXG4gICAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWhlYWRlclwiKTtcbiAgICBpZiAodGFza3NIZWFkZXIuZGF0YXNldC5pbmRleENhdGVnb3J5SGVhZGluZyA9PT0gaSkge1xuICAgICAgICB0YXNrc0hlYWRlci50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcbiAgICAgICAgZGVsZXRlIHRhc2tzSGVhZGVyLmRhdGFzZXQuaW5kZXhDYXRlZ29yeUhlYWRpbmc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGNvbnN0IHRhc2tzSGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1oZWFkZXItY29udGFpbmVyXCIpO1xuICAgICAgICB0YXNrc0hlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiY2F0ZWdvcnktY2hvc2VuXCIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0NvbnRhaW5lci5kYXRhc2V0LmluZGV4VGFza3NDb250YWluZXI7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG4gICAgY2F0ZWdvcmllc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZGlzcGxheUNhdGVnb3JpZXMoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUNhdGVnb3JpZXMoKSB7XG4gICAgY2F0ZWdvcmllc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXRlZ29yeS5kYXRhc2V0LmluZGV4Q2F0ZWdvcnlEaXYgPSBpO1xuICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwibm90LWNob3NlblwiKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSBjYXRlZ29yaWVzW2ldLm5hbWU7XG4gICAgICAgIGNhdGVnb3J5TmFtZS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktbmFtZS1wb2ludGVyXCIpO1xuICAgICAgICBjYXRlZ29yeU5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1jYXRlZ29yeVwiLCBpKTtcblxuICAgICAgICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtaGVhZGVyXCIpO1xuICAgICAgICBpZiAoY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID09PSB0YXNrc0hlYWRlci50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWNob3NlblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgICAgICBjYXRlZ29yeU5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uZGF0YXNldC5pbmRleEFkZCA9IGNhdGVnb3J5TmFtZS5kYXRhc2V0LmluZGV4Q2F0ZWdvcnk7XG4gICAgICAgICAgICBzaG93QWRkVGFza0J1dHRvbigpO1xuICAgICAgICAgICAgc2hvd0NhdGVnb3J5SGVhZGluZygpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJlbW92ZUNhdGVnb3J5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlQ2F0ZWdvcnlCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZS1jYXRlZ29yeS1idXR0b25cIik7XG4gICAgICAgIHJlbW92ZUNhdGVnb3J5QnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIHJlbW92ZUNhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVDYXRlZ29yeUJ1dHRvbi5kYXRhc2V0LmluZGV4UmVtb3ZlID0gY2F0ZWdvcnlOYW1lLmRhdGFzZXQuaW5kZXhDYXRlZ29yeTtcbiAgICAgICAgICAgIGRlbGV0ZUNhdGVnb3J5KHJlbW92ZUNhdGVnb3J5QnV0dG9uLmRhdGFzZXQuaW5kZXhSZW1vdmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYXRlZ29yeS5hcHBlbmQoY2F0ZWdvcnlOYW1lLCByZW1vdmVDYXRlZ29yeUJ1dHRvbik7XG4gICAgICAgIGNhdGVnb3JpZXNDb250YWluZXIuYXBwZW5kKGNhdGVnb3J5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKS52YWx1ZTtcblxuICAgIGNhdGVnb3JpZXNbYCR7YWRkVGFza0J1dHRvbi5kYXRhc2V0LmluZGV4QWRkfWBdLmFkZFRhc2sodGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHkpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLXRhc2sgZm9ybVwiKS5yZXNldCgpO1xuICAgIGNsb3NlVGFza0Zvcm0oKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcblxuICAgIHN0b3JlKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbn07XG5cbmZ1bmN0aW9uIG9wZW5DYXRlZ29yeUZvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLWNhdGVnb3J5XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlQ2F0ZWdvcnlGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC1jYXRlZ29yeVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLWNhdGVnb3J5IGZvcm1cIikucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Q2F0ZWdvcnkoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnktbmFtZVwiKTtcbiAgICBhZGRDYXRlZ29yeShjYXRlZ29yeU5hbWUudmFsdWUpO1xuICAgIGRpc3BsYXlDYXRlZ29yaWVzKCk7XG4gICAgY2xvc2VDYXRlZ29yeUZvcm0oKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcG9wdXAtY2F0ZWdvcnkgZm9ybVwiKS5yZXNldCgpO1xuXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXBvcHVwLXRhc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wb3B1cC10YXNrIGZvcm1cIikucmVzZXQoKTtcbn1cblxuZXhwb3J0IHsgY2F0ZWdvcmllc0NvbnRhaW5lciwgdGFza3NDb250YWluZXIsIG9wZW5UYXNrRm9ybSwgc2hvd0FkZFRhc2tCdXR0b24sIHNob3dDYXRlZ29yeUhlYWRpbmcsIGNvbXBsZXRlQ2hlY2tlZCwgZGVsZXRlVGFzaywgc2hvd0RldGFpbHMsIG9wZW5FZGl0VGFzaywgY2xvc2VUYXNrRWRpdEZvcm0sIGVkaXRUYXNrLCBkaXNwbGF5VGFza3MsIGRlbGV0ZUNhdGVnb3J5LCBkaXNwbGF5Q2F0ZWdvcmllcywgc3VibWl0VGFzaywgb3BlbkNhdGVnb3J5Rm9ybSwgY2xvc2VDYXRlZ29yeUZvcm0sIHN1Ym1pdENhdGVnb3J5LCBjbG9zZVRhc2tGb3JtIH0iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxubGV0IGNhdGVnb3JpZXMgPSBbXTtcblxuY2xhc3MgQ2F0ZWdvcnkge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbiAgICByZW1vdmVUYXNrKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgYWRkVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSkge1xuICAgICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlKTtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cbiAgICBlZGl0VGFzayhuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0RhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfVxuICAgIGVkaXRDb21wbGV0ZShuZXdDb21wbGV0ZSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gbmV3Q29tcGxldGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDYXRlZ29yeShpbmRleCkge1xuICAgIGNhdGVnb3JpZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIHN0b3JlKCk7XG59XG5cblxuXG5mdW5jdGlvbiBhZGRDYXRlZ29yeShuYW1lKSB7XG4gICAgbGV0IGNhdGVnb3J5ID0gbmV3IENhdGVnb3J5KG5hbWUpO1xuICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG5cbiAgICBzdG9yZSgpO1xufVxuXG5leHBvcnQgeyBjYXRlZ29yaWVzLCBDYXRlZ29yeSwgVGFzaywgcmVtb3ZlQ2F0ZWdvcnksIGFkZENhdGVnb3J5IH07IiwiaW1wb3J0IHsgY2F0ZWdvcmllcywgQ2F0ZWdvcnksIFRhc2ssIHJlbW92ZUNhdGVnb3J5LCBhZGRDYXRlZ29yeSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmZ1bmN0aW9uIHN0b3JlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwianNvbkNhdGVnb3JpZXNcIiwgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xufVxuXG5leHBvcnQgeyBzdG9yZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGNhdGVnb3JpZXMsIENhdGVnb3J5LCBUYXNrLCByZW1vdmVDYXRlZ29yeSwgYWRkQ2F0ZWdvcnkgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHsgY2F0ZWdvcmllc0NvbnRhaW5lciwgdGFza3NDb250YWluZXIsIG9wZW5UYXNrRm9ybSwgc2hvd0FkZFRhc2tCdXR0b24sIHNob3dDYXRlZ29yeUhlYWRpbmcsIGNvbXBsZXRlQ2hlY2tlZCwgZGVsZXRlVGFzaywgc2hvd0RldGFpbHMsIG9wZW5FZGl0VGFzaywgY2xvc2VUYXNrRWRpdEZvcm0sIGVkaXRUYXNrLCBkaXNwbGF5VGFza3MsIGRlbGV0ZUNhdGVnb3J5LCBkaXNwbGF5Q2F0ZWdvcmllcywgc3VibWl0VGFzaywgb3BlbkNhdGVnb3J5Rm9ybSwgY2xvc2VDYXRlZ29yeUZvcm0sIHN1Ym1pdENhdGVnb3J5LCBjbG9zZVRhc2tGb3JtIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5cbmxldCBqc29uQ2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqc29uQ2F0ZWdvcmllc1wiKSk7XG5cbmlmIChqc29uQ2F0ZWdvcmllcyA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUubG9nKGpzb25DYXRlZ29yaWVzKTtcbiAgICBhZGRDYXRlZ29yeShcIkhvbWVcIik7XG4gICAgYWRkQ2F0ZWdvcnkoXCJXb3JrXCIpO1xuICAgIGFkZENhdGVnb3J5KFwiUGV0c1wiKTtcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcblxuICAgIGNhdGVnb3JpZXNbMF0uYWRkVGFzayhcIkJ1eSBzb2FwXCIsIFwiQnV5IDYgYmFycyBvZiBzY2VudGVkIHNvYXBcIiwgXCIyMDIzLTAyLTE0XCIsIFwibG93XCIsIFwieWVzXCIpO1xuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuICAgIGNhdGVnb3JpZXNbMF0uYWRkVGFzayhcIlNvcnQgdGhlIGxpYnJhcnlcIiwgXCJTb3J0IHRoZSBib29rcyBpbiAzIGJvb2tjYXNlcyBpbiB0aGUgbGl2aW5nIHJvb20gYW5kIGluIHRoZSBiZWRyb29tXCIsIFwiMjAyMy0wMi0yNVwiLCBcImxvd1wiLCBcIm5vXCIpO1xuICAgIGNhdGVnb3JpZXNbMF0uYWRkVGFzayhcIldhc2ggdGhlIHdpbmRvd3NcIiwgXCJXYXNoIHRoZSB3aW5kb3dzIGluIHRoZSBraXRjaGVuLCB0aGUgbGl2aW5nIHJvb20gYW5kIGluIHRoZSBiZWRyb29tc1wiLCBcIjIwMjMtMDMtMDFcIiwgXCJoaWdoXCIsIFwibm9cIik7XG4gICAgc3RvcmUoKTtcbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwianNvbkNhdGVnb3JpZXNcIikpO1xufSBlbHNlIHtcbiAgICBqc29uQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICByZWdhaW5DYXRlZ29yeU1ldGhvZHMoY2F0ZWdvcnkpO1xuICAgICAgICBjYXRlZ29yeS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiByZWdhaW5UYXNrTWV0aG9kcyh0YXNrKSk7XG4gICAgfSk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBqc29uQ2F0ZWdvcmllcy5sZW5ndGg7IGsrKykge1xuICAgICAgICBjYXRlZ29yaWVzLnB1c2goanNvbkNhdGVnb3JpZXNba10pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVnYWluVGFza01ldGhvZHModGFzaykge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0YXNrLCBUYXNrLnByb3RvdHlwZSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2FpbkNhdGVnb3J5TWV0aG9kcyhjYXRlZ29yeSkge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjYXRlZ29yeSwgQ2F0ZWdvcnkucHJvdG90eXBlKTtcbn1cblxuXG5cbmRpc3BsYXlDYXRlZ29yaWVzKCk7XG5cblxuXG5jb25zdCBjYW5jZWxFZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWVkaXQtdGFza1wiKTtcbmNhbmNlbEVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVRhc2tFZGl0Rm9ybSk7XG5cbmNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIik7XG5lZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuXG5jb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtdGFza1wiKTtcbnN1Ym1pdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFRhc2spO1xuXG5jb25zdCBhZGRDYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNhdGVnb3J5XCIpO1xuYWRkQ2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5DYXRlZ29yeUZvcm0pO1xuXG5jb25zdCBjYW5jZWxDYXRlZ29yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWNhdGVnb3J5XCIpO1xuY2FuY2VsQ2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlQ2F0ZWdvcnlGb3JtKTtcblxuY29uc3Qgc3VibWl0Q2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1jYXRlZ29yeVwiKTtcbnN1Ym1pdENhdGVnb3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRDYXRlZ29yeSk7XG5cbmNvbnN0IGNhbmNlbFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC10YXNrXCIpO1xuY2FuY2VsVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VUYXNrRm9ybSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9