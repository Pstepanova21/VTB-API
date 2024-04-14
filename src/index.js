import "./main.scss";
import "./fonts/fonts.scss";

// Класс с методами для создания HTML-карточки цели
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
    this.button;
  }

  getName() {
    return this.name;
  }
  getImg() {
    let categoryImg =
      this.category === "Дом"
        ? "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "Машина"
        ? "https://images.pexels.com/photos/18262220/pexels-photo-18262220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "Техника"
        ? "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "Дети"
        ? "https://images.pexels.com/photos/8208262/pexels-photo-8208262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "Обучение"
        ? "https://images.pexels.com/photos/9572509/pexels-photo-9572509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "Отпуск"
        ? "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : this.category === "Шоппинг"
        ? "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        : "https://images.pexels.com/photos/3393477/pexels-photo-3393477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return categoryImg;
  }
  getCategory() {
    return this.category;
  }
  getTotalSum() {
    return this.totalSum.toLocaleString("ru-RU");
  }
  getPriority() {
    return this.priority;
  }
  getDueDate() {
    const day = ("0" + this.dueDate.getDate()).slice(-2);
    const month = ("0" + (this.dueDate.getMonth() + 1)).slice(-2);
    const year = this.dueDate.getFullYear();
    return day + "." + month + "." + year;
  }
  getStartDate() {
    const day = ("0" + this.startDate.getDate()).slice(-2);
    const month = ("0" + (this.startDate.getMonth() + 1)).slice(-2);
    const year = this.startDate.getFullYear();
    return day + "." + month + "." + year;
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
    return this.savedSum.toLocaleString("ru-RU");
  }
  addSavings(addSumm) {
    return (this.savedSum = this.savedSum + addSumm).toLocaleString("ru-RU");
  }
  getDifferenceSum() {
    return (this.totalSum - this.savedSum).toLocaleString("ru-RU");
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
  setButton(button) {
    return (this.button = button);
  }
  getButton() {
    return this.button;
  }
}

// Массив с целями из Local storage
// let targetsListJson = localStorage.getItem("targetsList");
// let targetsList = targetsListJson ? JSON.parse(targetsListJson) : [];

// Проверочный пример массива объектов
let today = new Date();

let targetsList = [
  {
    name: "Новая машина",
    category: "Машина",
    sum: 6000000,
    priority: "3",
    startDate: today,
    dueDate: new Date("2024-06-13"),
    savedSum: 500,
  },
  {
    name: "Квартира",
    category: "Дом",
    sum: 16000000,
    priority: "1",
    startDate: today,
    dueDate: new Date("2024-06-13"),
    savedSum: 9000000,
  },
  {
    name: "Полет на шаре",
    category: "Другое",
    sum: 100000,
    priority: "2",
    startDate: today,
    dueDate: new Date("2024-09-18"),
    savedSum: 12000,
  },
  {
    name: "Фарфоровая кукла",
    category: "Дети",
    sum: 10000,
    priority: "2",
    startDate: today,
    dueDate: new Date("2024-05-9"),
    savedSum: 9980,
  },
  {
    name: "Курсы фронтенда",
    category: "Обучение",
    sum: 100000,
    priority: "2",
    startDate: today,
    dueDate: new Date("2024-06-13"),
    savedSum: 12000,
  },
  {
    name: "Мальдивы",
    category: "Отпуск",
    sum: 500000,
    priority: "2",
    startDate: today,
    dueDate: new Date("2024-08-18"),
    savedSum: 300000,
  },
  {
    name: "Компьютер",
    category: "Техника",
    sum: 100000,
    priority: "2",
    startDate: today,
    dueDate: new Date("2025-08-18"),
    savedSum: 18000,
  },
];

// Для отображения целей из Local storage при загрузке страницы
// Елементы массива преобразуется в объекты, из них создаются карточки
document.addEventListener("DOMContentLoaded", () => {
  emptyError.textContent = "";
  if (targetsList.length === 0) {
    emptyError.textContent = "Добавьте первую цель";
  } else {
    sortTargetList();
    targetsList.forEach(function (target) {
      let targetElement = new Target(
        target.name,
        target.category,
        target.sum,
        target.priority,
        target.startDate,
        target.dueDate,
        target.savedSum
      );
      createTargetCard(targetElement);
      buttonAddSavings(targetElement);
    });
  }
});

// Сортировка массива для карточек - по приоритету, по дате окончания
function sortTargetList() {
  targetsList.sort((target1, target2) =>
    target1["dueDate"] < target2["dueDate"] ? 1 : -1
  );
  targetsList.sort((target1, target2) =>
    target1["priority"] > target2["priority"] ? 1 : -1
  );
}

// Функция для создания карточек целей
const targetWrapper = document.querySelector(".target_wrapper");
const emptyError = document.querySelector(".target_empty-error");
const targetProgress = document.querySelector(".target_progress");

function createTargetCard(target) {
  const targetCard = document.createElement("div");
  targetCard.classList.add("target_card");
  targetWrapper.append(targetCard);

  // HTML под карточку
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
  <p class="info-value">${target.getDifferenceSum()} ₽</p>
  </div>
  </div>
  </div>
  <div class="target_progress">
  <p>Прогресс цели: <span>${target.getSavedSum()} ₽ из ${target.getTotalSum()} ₽</span></p>
  <div class="progress-bar">
  <div class="progress-bar-inner"></div>
  </div>
  </div>`;

  // Создание прогресс-бара
  const progressBar = targetCard.querySelector(".progress-bar");
  const progressBarInner = targetCard.querySelector(".progress-bar-inner");

  // Определение цвета прогресс-бара
  let progressColor =
    target.getProgressNum() < 19
      ? "inner-start"
      : target.getProgressNum() >= 20 && target.getProgressNum() < 79
      ? "inner-middle"
      : target.getProgressNum() >= 80
      ? "inner-finish"
      : "";
  progressBarInner.classList.add(progressColor);

  // Решение стилизации маленького значения процента
  if (target.getProgressNum() > 5) {
    progressBarInner.style.width = target.getProgressNum() + "%";
  } else {
    progressBarInner.style.width = "4%";
    progressBarInner.style.borderRadius = "0.625rem 0 0 0.625rem";
  }

  // Определение местоположения значения процента
  let progressBarText = document.createElement("div");
  progressBarText.textContent = target.getProgressNum() + "%";
  progressBarText.classList.add("progress_bar_text");

  if (target.getProgressNum() >= 20) {
    progressBarInner.append(progressBarText);
  } else {
    progressBar.append(progressBarText);
  }

  // Стучимся к кнопкам в карточках
  target.setButton(targetCard.querySelector(".target_add_savings"));
}

// Создание модального окна
const generalWrapper = document.querySelector(".general_wrapper");
const modalBackGround = document.createElement("div");
generalWrapper.append(modalBackGround);

function buttonAddSavings(target) {
  target.getButton().onclick = function () {
    modalBackGround.classList.add("modal-background");

    // Тело модального окна по нажатию кнопки
    modalBackGround.innerHTML = `
    <div class="modal-window">
    <div class="target_title">
    <h2 class="target_name">${target.getName()}</h2>
    <button class="modal-close"></button>
    </div>
    <div class="modal-info">
    <div class="modal_totalsum_info">
    <p class="info-title">Сумма для накопления:</p>
    <p class="info-value">${target.getTotalSum()} ₽</p>
    </div>
    <div class="modal_duedate_info">
    <p class="info-title">Дата окончания накопления:</p>
    <p class="info-value">${target.getDueDate()}</p>
    </div>
    </div>
    <div class="target_progress">
    <p>Накоплено: <span>${target.getSavedSum()} ₽ из ${target.getTotalSum()} ₽</span></p>
    <p>До выполнения цели: <span>${target.getDifferenceSum()} ₽</p>
    </div>
    </div>
  </div>`;

    // Кнопка закрытия модального окна
    const buttonCloseModal = modalBackGround.querySelector(".modal-close");
    buttonCloseModal.onclick = function () {
      modalBackGround.classList.remove("modal-background");
      modalBackGround.innerHTML = "";
    };
  };
}
