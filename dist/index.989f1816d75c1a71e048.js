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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts/fonts.scss */ \"./src/fonts/fonts.scss\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n// Получаем форму\nvar form = document.getElementById(\"goalForm\");\n\n// Добавляем обработчик события 'submit' на форму\nform.addEventListener(\"submit\", function (event) {\n  event.preventDefault(); // Предотвращаем стандартное поведение формы\n\n  // Получаем текущую дату и время\n  var currentDate = new Date();\n\n  // Получаем значение даты из формы\n  var endDate = new Date(document.getElementById(\"endDate\").value);\n  var today = new Date(); // Получаем текущую дату\n\n  // Проверяем, если выбранная дата меньше текущей, выводим сообщение об ошибке и не сохраняем данные\n  if (endDate < today) {\n    window.alert(\"Пожалуйста, выберите дату не ранее сегодняшнего дня.\");\n    return; // Прекращаем выполнение функции\n  }\n\n  // Получаем значения из остальных полей формы\n  var goal = document.getElementById(\"goal\").value;\n  var category = document.getElementById(\"category\").value;\n  var amount = document.getElementById(\"amount\").value;\n  var priority = document.getElementById(\"priority\").value;\n  var currentAmount = document.getElementById(\"currentAmount\").value;\n\n  // Создаем объект для хранения данных текущей цели\n  var goalData = {\n    goal: goal,\n    category: category,\n    amount: amount,\n    priority: priority,\n    endDate: endDate.toLocaleDateString(),\n    // Преобразуем дату в строку для сохранения\n    currentAmount: currentAmount,\n    creationDate: currentDate.toLocaleString() // Добавляем текущую дату и время создания цели\n  };\n\n  //проверяем пустой ли инпут `currentAmount`\n  if (currentAmount === \"\") {\n    //устанавливаем для объекта goalData его свойства currentAmount значение 0\n    goalData.currentAmount = \"0\";\n  }\n\n  // Получаем сохраненные ранее цели из локального хранилища\n  var savedGoals = JSON.parse(localStorage.getItem(\"goals\")) || [];\n\n  // Добавляем текущую цель к сохраненным целям\n  savedGoals.push(goalData);\n\n  // Сохраняем обновленный массив целей в локальное хранилище\n  localStorage.setItem(\"goals\", JSON.stringify(savedGoals));\n\n  // Очищаем поля формы\n  form.reset();\n});\nvar amount_input = document.getElementById(\"amount\");\nvar current_Amount = document.getElementById(\"currentAmount\");\nvar p_amount = document.createElement(\"p\");\nvar p_current = document.createElement(\"p\");\nvar btn_save = document.getElementById(\"btn_save\");\n//проверка,чтобы отрицательного числа не было для суммы накопления\namount_input.addEventListener(\"change\", function () {\n  if (amount_input.value.trim() < 0) {\n    amount_input.after(p_amount); //добавляем надпись,что введено отрицательное число и блокируем кнопку сохранить\n    p_amount.classList.add(\"error\");\n    p_amount.textContent = \"Введено отрицательное число, исправьте на положительное число\";\n    btn_save.disabled = true;\n    document.getElementById(\"add\").disabled = true;\n  } else {\n    //если введено полож-ое число, очищаем поле для ошибок и разблокируем кнопку\n    p_amount.textContent = \"\";\n    btn_save.disabled = false;\n  }\n});\n//проверка,чтобы отрицательного числа не было для суммы пополнения\ncurrent_Amount.addEventListener(\"change\", function () {\n  if (current_Amount.value.trim() < 0) {\n    current_Amount.after(p_current); //добавляем надпись,что введено отрицательное число и блокируем кнопку сохранить\n    p_current.classList.add(\"error\");\n    p_current.textContent = \"Введено отрицательное число, исправьте на положительное число\";\n    btn_save.disabled = true;\n  } else if (current_Amount === \"\") {\n    btn_save.disabled = false;\n  } else {\n    //если введено полож-ое число,очищаем поле для ошибок и разблокируем кнопку\n    p_current.textContent = \"\";\n    btn_save.disabled = false;\n  }\n});\n//Получаем блок\nvar choosePicture = document.querySelector(\".chooseWrapper\");\n\n//Получаем кнопку для окна выбора картинки\nvar buttonOpen = document.querySelector(\".chooseImg\");\n\n//Получаем кнопку для закрытия окна выбора картинки\n\nvar buttonClose = document.querySelector(\".closeImg\");\n\n//Получаем кнопку для подтверждения выбора картинки\n\nvar buttonChoose = document.getElementById(\"choosePicture__button\");\n//Получаем модальное окно\n\nvar modalWindow = document.querySelector(\".choosePicture\");\n\n//Получаем массив инпутов\n\nvar pictureArr = document.querySelectorAll('input[name=\"picture\"]');\n\n//Добавляем обработчик событий кнопке с выбором картинки\n\nbuttonChoose.addEventListener(\"click\", function () {\n  var selectedPicture;\n  var _iterator = _createForOfIteratorHelper(pictureArr),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var picture = _step.value;\n      if (picture.checked) {\n        selectedPicture = picture.value;\n        break;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  choosePicture.style.backgroundImage = \"url(\".concat(selectedPicture, \")\");\n  modalWindow.classList.remove(\"active\");\n});\nbuttonOpen.addEventListener(\"click\", function () {\n  console.log(\"Кнопка нажата.\");\n  modalWindow.classList.add(\"active\");\n});\nbuttonClose.addEventListener(\"click\", function () {\n  console.log(\"Кнопка нажата.\");\n  modalWindow.classList.remove(\"active\");\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var btn_cancel = document.getElementById(\"btn_cancel\");\n  var container = document.getElementById(\"container\");\n  var generalWrapper = document.getElementById(\"general-wrapper\");\n  var picture = document.getElementById(\"picture\");\n  btn_cancel.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    // Скрываем контейнер и секцию picture\n    container.style.display = \"none\";\n    picture.style.display = \"none\";\n    // Показываем generalWrapper\n    generalWrapper.style.display = \"block\";\n    form.reset();\n  });\n});\n\n//# sourceURL=webpack://webpack_test2/./src/index.js?");

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