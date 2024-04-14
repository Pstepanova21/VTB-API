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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/fonts.scss */ \"./src/fonts/fonts.scss\");\n\n\n\n// Получаем форму\nvar form = document.getElementById(\"goalForm\");\n\n// Добавляем обработчик события 'submit' на форму\nform.addEventListener(\"submit\", function (event) {\n  event.preventDefault(); // Предотвращаем стандартное поведение формы\n\n  // Получаем текущую дату и время\n  var currentDate = new Date();\n\n  // Получаем значение даты из формы\n  var endDate = new Date(document.getElementById(\"endDate\").value);\n  var today = new Date(); // Получаем текущую дату\n\n  // Проверяем, если выбранная дата меньше текущей, выводим сообщение об ошибке и не сохраняем данные\n  if (endDate < today) {\n    window.alert(\"Пожалуйста, выберите дату не ранее сегодняшнего дня.\");\n    return; // Прекращаем выполнение функции\n  }\n\n  // Получаем значения из остальных полей формы\n  var goal = document.getElementById(\"goal\").value;\n  var category = document.getElementById(\"category\").value;\n  var amount = document.getElementById(\"amount\").value;\n  var priority = document.getElementById(\"priority\").value;\n  var currentAmount = document.getElementById(\"currentAmount\").value;\n\n  // Создаем объект для хранения данных текущей цели\n  var goalData = {\n    goal: goal,\n    category: category,\n    amount: amount,\n    priority: priority,\n    endDate: endDate.toLocaleDateString(),\n    // Преобразуем дату в строку для сохранения\n    currentAmount: currentAmount,\n    creationDate: currentDate.toLocaleString() // Добавляем текущую дату и время создания цели\n  };\n\n  // Получаем сохраненные ранее цели из локального хранилища\n  var savedGoals = JSON.parse(localStorage.getItem(\"goals\")) || [];\n\n  // Добавляем текущую цель к сохраненным целям\n  savedGoals.push(goalData);\n\n  // Сохраняем обновленный массив целей в локальное хранилище\n  localStorage.setItem(\"goals\", JSON.stringify(savedGoals));\n\n  // Выводим результат в консоль (можно удалить эту строку)\n  console.log(\"Цель сохранена в локальном хранилище.\");\n\n  // Очищаем поля формы\n  form.reset();\n});\n\n//# sourceURL=webpack://webpack_test2/./src/index.js?");

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