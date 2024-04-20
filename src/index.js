import "./main.scss";
import "./fonts/fonts.scss";

// Очистить Local storage:
// window.localStorage.clear();

// Получаем форму
const form = document.getElementById("goalForm");

// Добавляем обработчик события 'submit' на форму
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  // Получаем текущую дату и время
  const currentDate = new Date();
  // Получаем значение даты из формы
  const endDate = new Date(document.getElementById("endDate").value);
  const today = new Date(); // Получаем текущую дату

  // Проверяем, если выбранная дата меньше текущей, выводим сообщение об ошибке и не сохраняем данные
  if (endDate < today) {
    window.alert("Пожалуйста, выберите дату не ранее сегодняшнего дня.");
    return; // Прекращаем выполнение функции
  }

  // Получаем значения из остальных полей формы
  const goal = document.getElementById("goal").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  const priority = document.getElementById("priority").value;
  const currentAmount = document.getElementById("currentAmount").value;

  // Создаем объект для хранения данных текущей цели
  const goalData = {
    goal: goal,
    category: category,
    amount: amount,
    priority: priority,
    endDate: endDate, // Преобразуем дату в строку для сохранения
    currentAmount: currentAmount,
    creationDate: currentDate, // Добавляем текущую дату и время создания цели
  };

  //проверяем пустой ли инпут `currentAmount`
  if (currentAmount === "") {
    //устанавливаем для объекта goalData его свойства currentAmount значение 0
    goalData.currentAmount = "0";
  }

  // Получаем сохраненные ранее цели из локального хранилища
  let savedGoals = JSON.parse(localStorage.getItem("goals")) || [];

  // Добавляем текущую цель к сохраненным целям
  savedGoals.push(goalData);

  // Сохраняем обновленный массив целей в локальное хранилище
  localStorage.setItem("goals", JSON.stringify(savedGoals));

  // Очищаем поля формы
  form.reset();
  targetBtnUpd();
});

const category_input = document.getElementById("category");
const amount_input = document.getElementById("amount");
const current_Amount = document.getElementById("currentAmount");
const p_amount = document.createElement("p");
const p_current = document.createElement("p");
const btn_save = document.getElementById("btn_save");
//проверка,чтобы отрицательного числа не было для суммы накопления
amount_input.addEventListener("change", function () {
  if (amount_input.value.trim() < 0) {
    amount_input.after(p_amount); //добавляем надпись,что введено отрицательное число и блокируем кнопку сохранить
    p_amount.classList.add("error");
    p_amount.textContent =
      "Введено отрицательное число, исправьте на положительное число";
    btn_save.disabled = true;
    document.getElementById("add").disabled = true;
  } else {
    //если введено полож-ое число, очищаем поле для ошибок и разблокируем кнопку
    p_amount.textContent = "";
    btn_save.disabled = false;
  }
});
//проверка,чтобы отрицательного числа не было для суммы пополнения
current_Amount.addEventListener("change", function () {
  if (current_Amount.value.trim() < 0) {
    current_Amount.after(p_current); //добавляем надпись,что введено отрицательное число и блокируем кнопку сохранить
    p_current.classList.add("error");
    p_current.textContent =
      "Введено отрицательное число, исправьте на положительное число";
    btn_save.disabled = true;
  } else if (current_Amount === "") {
    btn_save.disabled = false;
  } else {
    //если введено полож-ое число,очищаем поле для ошибок и разблокируем кнопку
    p_current.textContent = "";
    btn_save.disabled = false;
  }
});

//Получаем блок
const choosePicture = document.querySelector(".chooseWrapper");
//Добавляем обработчик событий кнопке с выбором картинки
category_input.addEventListener("change", function () {
  const category = document.getElementById("category").value;
  let selectedPicture =
    category === "house"
      ? "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      : category === "car"
      ? "https://images.pexels.com/photos/18262220/pexels-photo-18262220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      : category === "equipment"
      ? "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      : category === "kids"
      ? "https://images.pexels.com/photos/8208262/pexels-photo-8208262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      : category === "education"
      ? "https://images.pexels.com/photos/9572509/pexels-photo-9572509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      : category === "travel"
      ? "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      : category === "shopping"
      ? "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      : "https://images.pexels.com/photos/3393477/pexels-photo-3393477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  choosePicture.style.backgroundImage = `url("${selectedPicture}")`;
  choosePicture.style.border = "none";
});

function formBtnUpd() {
  const btn_cancel = document.getElementById("btn_cancel");
  btn_cancel.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.reset();
    targetBtnUpd();
  });
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!  Место склейки  !!!!!!!!!!!!!!!!!!!!!!!!!!!

// Скрипт 2 - ветка target

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

  formBtnUpd();
}

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

  // Контейнер модального окна
  const generalWrapper = document.querySelector(".general_wrapper");
  const modalBackGround = document.createElement("div");
  generalWrapper.append(modalBackGround);

  // Элементы для обновления инфо внутри модального окна
  const differenceSumText = targetCard.querySelector(".target_card_diff");
  const savedSumText = targetCard.querySelector(".target_card_saved");

  // Создание подсказки для кнопки-стрелки "Пополнить счёт"
  const buttonTargetAddSavings = targetCard.querySelector(
    ".target_add_savings"
  );
  buttonTargetAddSavings.title = "Нажмите для пополнения или снятия";

  // Вызов модального окна
  buttonTargetAddSavings.onclick = function () {
    modalBackGround.classList.add("modal-background");
    modalBackGround.innerHTML = ` <div class="modal-window">
      <div class="target_title">
      <h2 class="target_name">${target.getName()}</h2>
      <button class="modal-close"></button>
      </div>
      <div class="modal-info">
      <div class="modal_totalsum_info">
      <p class="info-title">Сумма для накопления:</p>
      <p class="info-value">${target
        .getTotalSum()
        .toLocaleString("ru-RU")} ₽</p>
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

    // Элементы для обновления элементов в модальном и на главной
    const errorDisplay = modalBackGround.querySelector(".error-display");
    const inputSum = modalBackGround.querySelector(".input-sum");
    const savedSumElement = modalBackGround.querySelector(".saved-sum");
    const diffSumElement = modalBackGround.querySelector(".difference-sum");

    // Объект для вывода из функции на главную
    let savedSumModal = [
      target.getSavedSum(),
      target.getDifferenceSum(),
      target.getTotalSum(),
      target.getProgressNum(),
      target.getName(),
    ];

    // Кнопки пополнить - снять - закрыть окно
    const buttonAddSavings = modalBackGround.querySelector(".modal-add-saving"); // Кнопка "Пополнить"
    const buttonWDSavings = modalBackGround.querySelector(
      // Кнопка "Снять"
      ".modal-withdraw-savings"
    );
    const buttonCloseModal = modalBackGround.querySelector(".modal-close"); // Кнопка "Закрыть модальное окно"
    buttonCloseModal.style.backgroundImage = `url(${require("./images/target_add_savings_close.svg")})`;

    // Состояние кнопок пополнить-снять при открытии модального окна
    function modalButtonCheck() {
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
    }
    modalButtonCheck();

    // Обновление информации в модальном окне
    function updateTargetInfo(target) {
      inputSum.value = ""; // Обнуление инпута
      savedSumElement.textContent =
        target.getSavedSum().toLocaleString("ru-RU") + " ₽";
      diffSumElement.textContent =
        target.getDifferenceSum().toLocaleString("ru-RU") + " ₽";

      // Изменение стиля кнопки закрытия, если нажимались пополнить-снять
      buttonCloseModal.style.backgroundImage = `url(${require("./images/target_add_savings_save.svg")})`;

      // Состояние кнопок пополнить-снять при работе в модальном окне
      modalButtonCheck();

      // Обновление блоков, если до этого было 100%
      targetInfo.classList.remove("hidden");
      targetInfoVictory.innerHTML = "";

      // На выходе из функции обновленные значения сумм цели
      return (savedSumModal = [
        target.getSavedSum(),
        target.getDifferenceSum(),
        target.getTotalSum(),
        target.getProgressNum(),
        target.getName(),
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

      // Перезапись прогресс-бара после модального окна
      createProgressBar(savedSumModal[3]);

      // Отрабока 100% выполнения цели
      targetVictory(savedSumModal[3]);

      // Обновление данных в LocalStorage
      const listElement = targetsList.find(
        (el) => el.goal === savedSumModal[4]
      );
      listElement.currentAmount = savedSumModal[0];
      console.log(listElement.savedSum);
      localStorage.setItem("goals", JSON.stringify(targetsList));
    };
  };
}
