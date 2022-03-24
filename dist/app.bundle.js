/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mysnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysnabbdom/h.js */ \"./src/mysnabbdom/h.js\");\n\r\n\r\nconst myVnode = (0,_mysnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div',{},\"小溪流\")\r\nconsole.log(myVnode)\n\n//# sourceURL=webpack://webpackdemo/./src/index.js?");

/***/ }),

/***/ "./src/mysnabbdom/h.js":
/*!*****************************!*\
  !*** ./src/mysnabbdom/h.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vnode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode.js */ \"./src/mysnabbdom/vnode.js\");\n\r\n\r\n//编写一个低配版本的h函数\r\n//①h('div',{},'文字')\r\n//②h('div',{},[])\r\n//③h('div',{},h())\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sel,data,c){\r\n    //检查参数的个数\r\n    if(arguments.length != 3){\r\n        \r\n        throw new Error(\"低配版的h函数请传入3个参数！\")\r\n    }\r\n    //检查参数c的类型\r\n    if(typeof c == 'string' || typeof c =='number'){\r\n        //①\r\n        return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sel,data,undefined,c,undefined)\r\n    }else if(Array.isArray(c)){\r\n        //②\r\n        let children = []\r\n        for(let i = 0;i<c.length;i++){\r\n            if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))){\r\n                throw new Error(\"传入的数组的项目不是h函数\")\r\n            }\r\n            children.push(c[i])\r\n        }\r\n        return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sel,data,children,undefined,undefined)\r\n    }else if(typeof c == 'object' && c.hasOwnProperty('sel')){\r\n        //hasOwnProperty() 方法用来检测一个属性是否是对象的自有属性，而不是从原型链继承的。\r\n         //③\r\n         let children = []\r\n         return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sel,data,children,undefined,undefined)\r\n    }else {\r\n        throw new Error(\"传入的第三个参数类型错误\")\r\n    }\r\n}\n\n//# sourceURL=webpack://webpackdemo/./src/mysnabbdom/h.js?");

/***/ }),

/***/ "./src/mysnabbdom/vnode.js":
/*!*********************************!*\
  !*** ./src/mysnabbdom/vnode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * @function 用于输出对象\r\n*/\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sel,data,children,text,elm){\r\n    return {\r\n         sel, data, children, text, elm \r\n    }\r\n}\n\n//# sourceURL=webpack://webpackdemo/./src/mysnabbdom/vnode.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;