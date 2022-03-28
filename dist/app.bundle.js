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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mysnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysnabbdom/h.js */ \"./src/mysnabbdom/h.js\");\n/* harmony import */ var _mysnabbdom_patch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mysnabbdom/patch.js */ \"./src/mysnabbdom/patch.js\");\n\r\n\r\n\r\nconst container = document.getElementById('container')\r\n// console.log(\"dom节点第一次上树\",container)\r\nconst myVnode = (0,_mysnabbdom_h_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p',{},\"小溪流\")\r\nconsole.log(myVnode)\r\n\r\n;(0,_mysnabbdom_patch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(container,myVnode)\r\n\r\n\n\n//# sourceURL=webpack://webpackdemo/./src/index.js?");

/***/ }),

/***/ "./src/mysnabbdom/creatElement.js":
/*!****************************************!*\
  !*** ./src/mysnabbdom/creatElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//真正创建节点。插入到pivot标杆前面\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(vnode,pivot){\r\n    console.log('目的是把虚拟节点vnode插入到pivot之前',vnode)\r\n    let domNode = document.createElement(vnode.sel)\r\n    //有子节点还是有文本\r\n    if(vnode.text !== '' && (vnode.children == undefined || vnode.children.length == 0)){\r\n        domNode.innerText = vnode.text\r\n        //将孤儿节点上树\r\n        pivot.parentNode.insertBefore(domNode,pivot)\r\n    }else if(Array.isArray(vnode.children) && vnode.children.length>0){\r\n        //递归的情况\r\n    }\r\n}\n\n//# sourceURL=webpack://webpackdemo/./src/mysnabbdom/creatElement.js?");

/***/ }),

/***/ "./src/mysnabbdom/h.js":
/*!*****************************!*\
  !*** ./src/mysnabbdom/h.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vnode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode.js */ \"./src/mysnabbdom/vnode.js\");\n\r\n\r\n//编写一个低配版本的h函数\r\n//①h('div',{},'文字')\r\n//②h('div',{},[])\r\n//③h('div',{},h())\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(sel,data,c){\r\n    //检查参数的个数\r\n    if(arguments.length != 3){\r\n        \r\n        throw new Error(\"低配版的h函数请传入3个参数！\")\r\n    }\r\n    //检查参数c的类型\r\n    if(typeof c == 'string' || typeof c =='number'){\r\n        //①\r\n        return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sel,data,undefined,c,undefined)\r\n    }else if(Array.isArray(c)){\r\n        //②\r\n        let children = []\r\n        for(let i = 0;i<c.length;i++){\r\n            if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))){\r\n                throw new Error(\"传入的数组的项目不是h函数\")\r\n            }\r\n            children.push(c[i])\r\n        }\r\n        return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sel,data,children,undefined,undefined)\r\n    }else if(typeof c == 'object' && c.hasOwnProperty('sel')){\r\n        //hasOwnProperty() 方法用来检测一个属性是否是对象的自有属性，而不是从原型链继承的。\r\n         //③\r\n         let children = []\r\n         return (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sel,data,children,undefined,undefined)\r\n    }else {\r\n        throw new Error(\"传入的第三个参数类型错误\")\r\n    }\r\n}\n\n//# sourceURL=webpack://webpackdemo/./src/mysnabbdom/h.js?");

/***/ }),

/***/ "./src/mysnabbdom/patch.js":
/*!*********************************!*\
  !*** ./src/mysnabbdom/patch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vnode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode.js */ \"./src/mysnabbdom/vnode.js\");\n/* harmony import */ var _creatElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creatElement.js */ \"./src/mysnabbdom/creatElement.js\");\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(oldVnode,newVnode){\r\n    console.log(oldVnode)\r\n    console.log(newVnode)\r\n    //1、判断第一个参数oldVnode是DOM节点还是oldVnode\r\n    if(oldVnode.sel == '' || oldVnode.sel ==undefined){\r\n        oldVnode= (0,_vnode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(oldVnode.tagName.toLowerCase(),{},[],undefined,oldVnode)\r\n    }\r\n    console.log(\"包装后的\",oldVnode)\r\n    //2、判断是否为同一个节点：key和sel相同\r\n    if(oldVnode.sel == newVnode.sel && oldVnode.key == newVnode.key){\r\n        console.log(\"是同一个节点：需要精细比较\")\r\n    }else{\r\n        console.log(\"不是同一个节点，暴力删除并插入\")\r\n        ;(0,_creatElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newVnode,oldVnode.elm)\r\n    }\r\n}\n\n//# sourceURL=webpack://webpackdemo/./src/mysnabbdom/patch.js?");

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