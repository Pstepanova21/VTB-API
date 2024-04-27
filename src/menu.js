// Кнопки бокового меню и их контейнеры
const targetPageWrapper = document.querySelector(".target_page_wrapper");
const targetPage = document.getElementById("target_page"); // Кнопка "Список целей - страница"
const formPageWrapper = document.querySelector(".bodyForm_wrapper");
const targetAddButton = document.getElementById("target_add_button"); // Кнопка "Форма - страница"

let targetPageImgA = require("./images/menu_middle2_active.svg");
let targetAddImg = require("./images/menu_top1.svg");

let targetPageImg = require("./images/menu_middle2.svg");
let targetAddImgA = require("./images/menu_top1_active.svg");

// Обработка нажатия кнопки "Список целей - страница"
targetPage.addEventListener("click", changeFormToTarget);

function changeFormToTarget() {
  targetPage.classList.add("active_menu_button");
  targetPage.style.backgroundImage = `url(${targetPageImgA})`;

  targetAddButton.style.backgroundImage = `url(${targetAddImg})`;
  targetAddButton.classList.remove("active_menu_button");

  formPageWrapper.classList.add("hidden");
  targetPageWrapper.classList.remove("hidden");
}

// Обработка нажатия кнопки "Форма"
targetAddButton.addEventListener("click", changeTargetToForm);

function changeTargetToForm() {
  targetPage.classList.remove("active_menu_button");
  targetPage.style.backgroundImage = `url(${targetPageImg})`;

  targetAddButton.classList.add("active_menu_button");
  targetAddButton.style.backgroundImage = `url(${targetAddImgA})`;

  targetPageWrapper.classList.add("hidden");
  formPageWrapper.classList.remove("hidden");
}

export {
  targetPageWrapper,
  targetPage,
  formPageWrapper,
  targetAddButton,
  changeFormToTarget,
  changeTargetToForm,
};
