import { changeFormToTarget } from "./menu";
import { ModalWindow } from "./modal";
// Конструктор класса с методами для обработки входного массива
class Target {
  constructor(
    name,
    category,
    totalSum,
    priority,
    startDate,
    dueDate,
    savedSum
  ) {
    this.name = name;
    this.category = category;
    this.totalSum = totalSum;
    this.priority = priority;
    this.startDate = startDate;
    this.dueDate = dueDate;
    this.savedSum = savedSum;
  }
  getName() {
    return this.name;
  }
  getImg() {
    let categoryImg =
      this.category === "house"
        ? "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "car"
        ? "https://images.pexels.com/photos/18262220/pexels-photo-18262220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "equipment"
        ? "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "kids"
        ? "https://images.pexels.com/photos/8208262/pexels-photo-8208262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "education"
        ? "https://images.pexels.com/photos/9572509/pexels-photo-9572509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "travel"
        ? "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "shopping"
        ? "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : "https://images.pexels.com/photos/3393477/pexels-photo-3393477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return categoryImg;
  }
  getCategory() {
    return this.category;
  }
  getTotalSum() {
    return this.totalSum;
  }
  getPriority() {
    return this.priority;
  }
  getDueDate() {
    return new Date(this.dueDate).toLocaleDateString();
  }
  getStartDate() {
    return new Date(this.dueDate).toLocaleDateString();
  }
  getDaysTillTargetEnd() {
    let currentDate = Date.now();
    let difference =
      Math.floor((Date.parse(this.dueDate) - currentDate) / 1000 / 3600 / 24) +
      1;
    let ending =
      (difference > 10) & (difference < 20)
        ? " дней"
        : (difference % 100) / 10 == 1
        ? " дней"
        : difference % 10 == 1
        ? " день"
        : difference % 10 == 2
        ? " дня"
        : difference % 10 == 3
        ? " дня"
        : difference % 10 == 4
        ? " дня"
        : " дней";
    return difference + " " + ending;
  }
  getSavedSum() {
    return this.savedSum;
  }
  addSavings(addSumm) {
    return (this.savedSum = this.savedSum + addSumm);
  }
  getDifferenceSum() {
    return this.totalSum - this.savedSum;
  }
  getProgressNum() {
    let percent = (this.savedSum * 100) / this.totalSum;
    if (percent <= 99) {
      percent = Math.ceil(percent);
    } else {
      percent = Math.floor(percent);
    }
    return percent;
  }
  additionalSavings(amount) {
    if (amount <= this.totalSum - this.savedSum) {
      this.savedSum += amount;
      return true;
    } else {
      return false;
    }
  }
  withdrawSavings(amount) {
    if (this.savedSum >= amount) {
      this.savedSum -= amount;
      return true;
    } else {
      return false;
    }
  }
}

// Отображение целей из Local storage при загрузке страницы
document.addEventListener("DOMContentLoaded", targetBtnUpd);

let targetsList = [];

function targetBtnUpd() {
  changeFormToTarget(); // "Список целей - страница" главная
  // JSON массив из Local storage -> массив для скрипта
  let targetsListJson = localStorage.getItem("goals");
  targetsList = targetsListJson ? JSON.parse(targetsListJson) : [];

  targetWrapper.innerHTML = "";
  emptyError.textContent = ""; // Ошибка-уведомление: пустой массив целей
  if (targetsList.length === 0) {
    emptyError.textContent = "Добавьте первую цель";
  } else {
    sortTargetList(); // Сортировка массива: по приоритету и дате окончания
    targetsList.forEach(function (
      target // Массив объектов -> массив классов
    ) {
      let targetElement = new Target(
        target.goal,
        target.category,
        Number(target.amount),
        Number(target.priority),
        target.creationDate,
        target.endDate,
        Number(target.currentAmount)
      );
      createTargetCard(targetElement); // Создание HTML-карточек целей
    });
  }
}
// Сортировка массива для карточек - по приоритету, по дате окончания
function sortTargetList() {
  targetsList.sort((target1, target2) =>
    target1["dueDate"] < target2["dueDate"] ? 1 : -1
  );
  targetsList.sort((target1, target2) =>
    target1["priority"] > target2["priority"] ? 1 : -1
  );
}
// Контейнер под карточки целей и ошибка пустого массива
const targetWrapper = document.querySelector(".target_wrapper");
const emptyError = document.querySelector(".target_empty-error");
// Контейнер Прогресс-бар
const targetProgress = document.querySelector(".target_progress");

// Создание HTML-карточек
function createTargetCard(target) {
  const targetCard = document.createElement("div"); // Контейнер под карточку
  targetCard.classList.add("target_card");
  targetWrapper.append(targetCard);

  targetCard.innerHTML = `
    <div class="target_title">
    <h2 class="target_name">${target.getName()}</h2>
    <button class="target_add_savings"></button>
    </div>
    <div class="target_description">
    <img class="target_img" src="${target.getImg()}" alt="${target.getCategory()}">
    <div class="target_info">
    <div class="target_due-date">
    <p class="info-title">Конец сбора через:</p>
    <p class="info-value">${target.getDaysTillTargetEnd()}</p>
    </div>
    <div class="target_sum-rest">
    <p class="info-title">Осталось собрать:</p>
    <p class="info-value target_card_diff">${target
      .getDifferenceSum()
      .toLocaleString("ru-RU")} ₽</p>
    </div>
    </div>
    </div>
    <div class="target_progress">
    <p>Прогресс цели: <span class="target_card_saved">${target
      .getSavedSum()
      .toLocaleString("ru-RU")} ₽ из ${target
    .getTotalSum()
    .toLocaleString("ru-RU")} ₽</span></p>
    <div class="progress-bar">
    <div class="progress-bar-inner"></div>
    </div>
    </div>`;

  // Создание прогресс-бара: внешний div, внутренний div, текстовый блок
  const progressBar = targetCard.querySelector(".progress-bar");
  const progressBarInner = targetCard.querySelector(".progress-bar-inner");
  let progressBarText = document.createElement("div");

  function createProgressBar(percent) {
    // Определение цвета прогресс-бара
    let progressColor =
      percent < 19
        ? "#df2216"
        : percent >= 20 && percent < 79
        ? "#b6cc2d"
        : percent >= 80 && percent < 100
        ? "#50db3a"
        : "#009fdf";
    progressBarInner.style.background = progressColor;

    // Решение стилизации маленького значения процента
    if (percent > 5 || percent === 0) {
      progressBarInner.style.width = percent + "%";
      progressBarInner.style.borderRadius = "0.625rem";
    } else {
      progressBarInner.style.width = "4%";
      progressBarInner.style.borderRadius = "0.625rem 0 0 0.625rem";
    }

    // Определение местоположения значения процента
    progressBarText.textContent = percent + "%";
    progressBarText.classList.add("progress_bar_text");

    if (percent >= 20) {
      progressBarInner.append(progressBarText);
    } else {
      progressBar.append(progressBarText);
    }
  }

  createProgressBar(target.getProgressNum());

  // Стилизация 100%
  const targetInfo = targetCard.querySelector(".target_info");
  const target_description = targetCard.querySelector(".target_description");

  const targetInfoVictory = document.createElement("div");
  target_description.append(targetInfoVictory);

  function targetVictory(percent) {
    if (percent === 100) {
      targetInfo.classList.add("hidden");
      targetInfoVictory.innerHTML = `
        <img class="target_victory" src="${require("./images/target_victory.svg")}" alt="Цель выполнена">
        <p class="info-value">Цель выполнена</p>
        `;
    }
  }
  targetVictory(target.getProgressNum());
  ModalWindow(
    target,
    targetCard,
    targetInfo,
    targetInfoVictory,
    createProgressBar,
    targetsList,
    targetVictory
  );
}
export { targetBtnUpd };
