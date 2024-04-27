import { targetBtnUpd } from "./target";
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
  const amountValue = parseFloat(amount_input.value);
  if (amountValue < 0) {
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
  const currentAmountValue = parseFloat(current_Amount.value);
  if (currentAmountValue < 0) {
    current_Amount.after(p_current); //добавляем надпись,что введено отрицательное число и блокируем кнопку сохранить
    p_current.classList.add("error");
    p_current.textContent =
      "Введено отрицательное число, исправьте на положительное число";
    btn_save.disabled = true;
  } else if (currentAmountValue === "") {
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
      ? "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" //новая ссылка
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
formBtnUpd();
