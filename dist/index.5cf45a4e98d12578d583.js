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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/fonts.scss */ \"./src/fonts/fonts.scss\");\n\n\n\n// Получаем форму\nvar form = document.getElementById(\"goalForm\");\n\n// Добавляем обработчик события 'submit' на форму\nform.addEventListener(\"submit\", function (event) {\n  event.preventDefault(); // Предотвращаем стандартное поведение формы\n\n  // Получаем значения из формы\n  var goal = document.getElementById(\"goal\").value;\n  var category = document.getElementById(\"category\").value;\n  var amount = document.getElementById(\"amount\").value;\n  var priority = document.getElementById(\"priority\").value;\n  var endDate = document.getElementById(\"endDate\").value;\n  var currentAmount = document.getElementById(\"currentAmount\").value;\n\n  // Выводим результат в консоль\n  console.log(\"\\u0412\\u0430\\u0448\\u0430 \\u0446\\u0435\\u043B\\u044C: \".concat(goal));\n  console.log(\"\\u041A\\u0430\\u0442\\u0435\\u0433\\u043E\\u0440\\u0438\\u044F: \".concat(category));\n  console.log(\"\\u0421\\u0443\\u043C\\u043C\\u0430, \\u043A\\u043E\\u0442\\u043E\\u0440\\u0443\\u044E \\u0432\\u044B \\u0445\\u043E\\u0442\\u0438\\u0442\\u0435 \\u043D\\u0430\\u043A\\u043E\\u043F\\u0438\\u0442\\u044C: \".concat(amount));\n  console.log(\"\\u041F\\u0440\\u0438\\u043E\\u0440\\u0438\\u0442\\u0435\\u0442 \\u0446\\u0435\\u043B\\u0438: \".concat(priority));\n  console.log(\"\\u0414\\u0430\\u0442\\u0430 \\u043E\\u043A\\u043E\\u043D\\u0447\\u0430\\u043D\\u0438\\u044F \\u043D\\u0430\\u043A\\u043E\\u043F\\u043B\\u0435\\u043D\\u0438\\u044F: \".concat(endDate));\n  console.log(\"\\u0421\\u0443\\u043C\\u043C\\u0430, \\u043A\\u043E\\u0442\\u043E\\u0440\\u0443\\u044E \\u0445\\u043E\\u0442\\u0438\\u0442\\u0435 \\u0432\\u043D\\u0435\\u0441\\u0442\\u0438 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441: \".concat(currentAmount));\n\n  // Очищаем поля формы\n  document.getElementById(\"goal\").value = \"\";\n  document.getElementById(\"category\").value = \"\";\n  document.getElementById(\"amount\").value = \"\";\n  document.getElementById(\"priority\").value = \"\";\n  document.getElementById(\"endDate\").value = \"\";\n  document.getElementById(\"currentAmount\").value = \"\";\n});\n\n// Добавляем обработчик для поля ввода даты\nvar endDateInput = document.getElementById(\"endDate\");\nvar today = new Date().toISOString().split(\"T\")[0]; // Получаем сегодняшнюю дату в формате YYYY-MM-DD\n\nendDateInput.addEventListener(\"input\", function () {\n  if (this.value < today) {\n    this.value = today; // Если введенная дата меньше текущей, то устанавливаем текущую дату\n  }\n});\n\n//# sourceURL=webpack://webpack_test2/./src/index.js?");

/***/ }),

/***/ "./src/fonts/fonts.scss":
/*!******************************!*\
  !*** ./src/fonts/fonts.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_test2/./src/fonts/fonts.scss?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_test2/./src/main.scss?");

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