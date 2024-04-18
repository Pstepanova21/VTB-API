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
    return this.totalSum;
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
    return this.savedSum;
  }
  addSavings(addSumm) {
    return (this.savedSum = this.savedSum + addSumm);
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

// Массив с целями из Local storage
// let targetsListJson = localStorage.getItem("savedGoals");
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
    savedSum: 500000,
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

// Прописываем стиль по умолчанию кнопок бокового меню
const targetPageWrapper = document.querySelector(".target_page_wrapper");
const targetPage = document.getElementById("target_page");
const targetAddButton = document.getElementById("target_add_button");

targetAddButton.addEventListener("click", changePage);

function changePage() {
  targetPage.classList.remove("active_menu_button");
  targetPage.style.backgroundImage = "url(assets/svg/menu_middle2.svg)";

  targetAddButton.classList.add("active_menu_button");
  targetAddButton.style.backgroundImage =
    "url(assets/svg/menu_top1_active.svg)";

  targetPageWrapper.classList.add("hidden");
}

// Для отображения целей из Local storage при загрузке страницы
// Елементы массива преобразуется в объекты, из них создаются карточки
document.addEventListener("DOMContentLoaded", () => {
  targetPage.classList.add("active_menu_button");
  targetPage.style.backgroundImage = "url(assets/svg/menu_middle2_active.svg)";

  targetAddButton.style.backgroundImage = "url(assets/svg/menu_top1.svg)";
  targetAddButton.classList.remove("active_menu_button");

  emptyError.textContent = "";
  if (targetsList.length === 0) {
    emptyError.textContent = "Добавьте первую цель";
  } else {
    sortTargetList();
    targetsList.forEach(function (target) {
      let targetElement = new Target(
        // target.goal,
        // target.category,
        // target.amount,
        // target.priority,
        // target.creationDate,
        // target.endDate,
        // target.currentAmount
        target.name,
        target.category,
        target.sum,
        target.priority,
        target.startDate,
        target.dueDate,
        target.savedSum
      );
      createTargetCard(targetElement);
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

  // Создание подсказки
  const buttonTargetAddSavings = targetCard.querySelector(
    ".target_add_savings"
  );
  buttonTargetAddSavings.title = "Нажмите для пополнения или снятия";

  // Создание прогресс-бара
  const progressBar = targetCard.querySelector(".progress-bar");
  const progressBarInner = targetCard.querySelector(".progress-bar-inner");
  let progressBarText = document.createElement("div");
  // Определение цвета прогресс-бара
  let progressColor =
    target.getProgressNum() < 19
      ? "#df2216"
      : target.getProgressNum() >= 20 && target.getProgressNum() < 79
      ? "#b6cc2d"
      : target.getProgressNum() >= 80 && target.getProgressNum() < 100
      ? "#50db3a"
      : "#009fdf";
  progressBarInner.style.background = progressColor;

  // Решение стилизации маленького значения процента
  if (target.getProgressNum() > 5 || target.getProgressNum() === 0) {
    progressBarInner.style.width = target.getProgressNum() + "%";
  } else {
    progressBarInner.style.width = "4%";
    progressBarInner.style.borderRadius = "0.625rem 0 0 0.625rem";
  }

  // Определение местоположения значения процента
  progressBarText.textContent = target.getProgressNum() + "%";
  progressBarText.classList.add("progress_bar_text");

  if (target.getProgressNum() >= 20) {
    progressBarInner.append(progressBarText);
  } else {
    progressBar.append(progressBarText);
  }

  //Анимация не заработала - сделали пока стилизацию
  const targetInfo = targetCard.querySelector(".target_info");
  const target_description = targetCard.querySelector(".target_description");

  const targetInfoVictory = document.createElement("div");
  target_description.append(targetInfoVictory);

  if (target.getProgressNum() === 100) {
    targetInfo.classList.add("hidden");
    targetInfoVictory.innerHTML = `
    <img class="target_victory" src="./assets/svg/target_victory.svg" alt="Цель выполнена">
    <p class="info-value">Цель выполнена</p>
    `;
  }

  // Создание модального окна
  const differenceSumText = targetCard.querySelector(".target_card_diff");
  const savedSumText = targetCard.querySelector(".target_card_saved");
  const generalWrapper = document.querySelector(".general_wrapper");
  const modalBackGround = document.createElement("div");
  generalWrapper.append(modalBackGround);

  targetCard.querySelector(".target_add_savings").onclick = function () {
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
    <p class="info-value">${target.getTotalSum().toLocaleString("ru-RU")} ₽</p>
    </div>
    <div class="modal_duedate_info">
    <p class="info-title">Дата окончания накопления:</p>
    <p class="info-value">${target.getDueDate()}</p>
    </div>
    </div>
    <div class="target_progress">
    <p>Накоплено: <span class="saved-sum">${target
      .getSavedSum()
      .toLocaleString("ru-RU")} ₽</span></p>
    <p>До выполнения цели: <span class="difference-sum">${target
      .getDifferenceSum()
      .toLocaleString("ru-RU")} ₽</span></p>
    </div>
    <div class="modal-button-wrapper">
    <div class="modal-buttons">
    <input type="number" class="input-sum" placeholder="Введите сумму, руб">
    <button class="modal-add-saving">Пополнить</button>
    <button class="modal-withdraw-savings">Снять</button>
    </div>
    <p class="error-display"></p>
    </div>
    </div>
  </div>`;

    //Находим элементы для работы внутри функции
    const errorDisplay = modalBackGround.querySelector(".error-display");
    const buttonAddSavings = modalBackGround.querySelector(".modal-add-saving");
    const buttonWDSavings = modalBackGround.querySelector(
      ".modal-withdraw-savings"
    );
    const buttonCloseModal = modalBackGround.querySelector(".modal-close");
    buttonCloseModal.style.backgroundImage =
      "url(assets/svg/target_add_savings_close.svg)";
    const inputSum = modalBackGround.querySelector(".input-sum");
    const savedSumElement = modalBackGround.querySelector(".saved-sum");
    const diffSumElement = modalBackGround.querySelector(".difference-sum");
    let savedSumModal = [
      target.getSavedSum(),
      target.getDifferenceSum(),
      target.getTotalSum(),
      target.getProgressNum(),
    ];

    // Проверка состояния кнопок внутри модального окна
    if (target.getTotalSum() === target.getSavedSum()) {
      buttonAddSavings.disabled = true;
      buttonWDSavings.disabled = false;
    } else {
      if (target.getSavedSum() === 0) {
        buttonWDSavings.disabled = true;
        buttonAddSavings.disabled = false;
      } else {
        buttonAddSavings.disabled = false;
        buttonWDSavings.disabled = false;
      }
    }

    function updateTargetInfo(target) {
      // Обновление модального после нажатия кнопок
      inputSum.value = "";
      savedSumElement.textContent =
        target.getSavedSum().toLocaleString("ru-RU") + " ₽";
      diffSumElement.textContent =
        target.getDifferenceSum().toLocaleString("ru-RU") + " ₽";

      buttonCloseModal.style.backgroundImage =
        "url(assets/svg/target_add_savings_save.svg)";

      // Проверка состояния кнопок внутри модального окна
      if (target.getTotalSum() === target.getSavedSum()) {
        buttonAddSavings.disabled = true;
        buttonWDSavings.disabled = false;
      } else {
        if (target.getSavedSum() === 0) {
          buttonWDSavings.disabled = true;
          buttonAddSavings.disabled = false;
        } else {
          buttonAddSavings.disabled = false;
          buttonWDSavings.disabled = false;
        }
      }
      // Обновление блоков, если до этого было 100%
      targetInfo.classList.remove("hidden");
      targetInfoVictory.innerHTML = "";
      return (savedSumModal = [
        target.getSavedSum(),
        target.getDifferenceSum(),
        target.getTotalSum(),
        target.getProgressNum(),
      ]);
    }

    //Пополнение средств
    buttonAddSavings.onclick = function () {
      errorDisplay.textContent = "";
      const savingAmount = Number(inputSum.value);
      if (savingAmount < 0) {
        errorDisplay.textContent = "Сумма операции не может быть отрицательной";
      } else {
        if (target.additionalSavings(savingAmount)) {
          updateTargetInfo(target);
          return savedSumModal;
        } else {
          errorDisplay.textContent = "Превышение итоговой суммы цели";
        }
      }
    };

    //Снятие средств
    buttonWDSavings.onclick = function () {
      errorDisplay.textContent = "";
      const withdrawalAmount = Number(inputSum.value);
      if (withdrawalAmount < 0) {
        errorDisplay.textContent = "Сумма операции не может быть отрицательной";
      } else {
        if (target.withdrawSavings(withdrawalAmount)) {
          updateTargetInfo(target);
          return savedSumModal;
        } else {
          errorDisplay.textContent = "Недостаточно средств для снятия";
        }
      }
    };

    // Кнопка закрытия модального окна
    buttonCloseModal.onclick = function (target) {
      modalBackGround.classList.remove("modal-background");
      modalBackGround.innerHTML = "";
      savedSumText.textContent = `${savedSumModal[0].toLocaleString(
        "ru-RU"
      )} ₽ из ${savedSumModal[2].toLocaleString("ru-RU")} ₽`;
      differenceSumText.textContent =
        savedSumModal[1].toLocaleString("ru-RU") + " ₽";
      // Будет повтор, подумать над оптимизацией:
      // Кусок раз:
      let progressColorTwo =
        savedSumModal[3] < 19
          ? "#df2216"
          : savedSumModal[3] >= 20 && savedSumModal[3] < 79
          ? "#b6cc2d"
          : savedSumModal[3] >= 80 && savedSumModal[3] < 100
          ? "#50db3a"
          : "#009fdf";
      progressBarInner.style.background = progressColorTwo;

      // Кусок два:
      if (savedSumModal[3] > 5 || savedSumModal[3] === 0) {
        progressBarInner.style.width = savedSumModal[3] + "%";
        progressBarInner.style.borderRadius = "0.625rem";
      } else {
        progressBarInner.style.width = "4%";
        progressBarInner.style.borderRadius = "0.625rem 0 0 0.625rem";
      }
      // Кусок три:
      progressBarText.textContent = savedSumModal[3] + " %";

      if (savedSumModal[3] >= 20) {
        progressBarInner.append(progressBarText);
      } else {
        progressBar.append(progressBarText);
      }

      // Кусок четыре - 100%
      if (savedSumModal[3] === 100) {
        targetInfo.classList.add("hidden");
        targetInfoVictory.innerHTML = `
    <img class="target_victory" src="./assets/svg/target_victory.svg" alt="Цель выполнена">
    <p class="info-value">Цель выполнена</p>
    `;
      }
    };
  };
}
