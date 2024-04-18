import "./main.scss";
import "./fonts/fonts.scss";

//Получаем блоr
const choosePicture = document.querySelector(".chooseWrapper");

//Получаем кнопку для окна выбора картинки
const buttonOpen = document.querySelector(".chooseImg");

//Получаем кнопку для закрытия окна выбора картинки

const buttonClose = document.querySelector(".closeImg");

//Получаем кнопку для подтверждения выбора картинки

const buttonChoose = document.getElementById("choosePicture__button");
//Получаем модальное окно

const modalWindow = document.querySelector(".choosePicture");

//Получаем массив инпутов

const pictureArr = document.querySelectorAll('input[name="picture"]');

//Добавляем обработчик событий кнопке с выбором картинки

buttonChoose.addEventListener("click", function () {
	let selectedPicture;
	for (const picture of pictureArr) {
		if (picture.checked) {
			selectedPicture = picture.value;
			break;
		}
	}
	choosePicture.style.backgroundImage = `url(${selectedPicture})`;
	modalWindow.classList.remove("active");
});

buttonOpen.addEventListener("click", function () {
	console.log("Кнопка нажата.");
	modalWindow.classList.add("active");
});

buttonClose.addEventListener("click", function () {
	console.log("Кнопка нажата.");
	modalWindow.classList.remove("active");
});

// Получаем форму
const form = document.getElementById("goalForm");

// Добавляем обработчик события 'submit' на форму
form.addEventListener("submit", function (event) {
<<<<<<< Updated upstream
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
    endDate: endDate.toLocaleDateString(), // Преобразуем дату в строку для сохранения
    currentAmount: currentAmount,
    creationDate: currentDate.toLocaleString(), // Добавляем текущую дату и время создания цели
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
=======
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
	const picture = document.querySelector('input[name="picture"]:checked').value;

	// Создаем объект для хранения данных текущей цели
	const goalData = {
		goal: goal,
		category: category,
		amount: amount,
		priority: priority,
		endDate: endDate.toLocaleDateString(), // Преобразуем дату в строку для сохранения
		currentAmount: currentAmount,
		creationDate: currentDate.toLocaleString(), // Добавляем текущую дату и время создания цели
		picture: picture,
	};

	// Получаем сохраненные ранее цели из локального хранилища
	let savedGoals = JSON.parse(localStorage.getItem("goals")) || [];

	// Добавляем текущую цель к сохраненным целям
	savedGoals.push(goalData);

	// Сохраняем обновленный массив целей в локальное хранилище
	localStorage.setItem("goals", JSON.stringify(savedGoals));

	// Очищаем поля формы
	form.reset();
>>>>>>> Stashed changes
});

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

document.addEventListener("DOMContentLoaded", function () {
  const btn_cancel = document.getElementById("btn_cancel");
  const container = document.getElementById("container");
  const generalWrapper = document.getElementById("general-wrapper");
  const picture = document.getElementById("picture");
  btn_cancel.addEventListener("click", function (evt) {
    evt.preventDefault();
    // Скрываем контейнер и секцию picture
    container.style.display = "none";
    picture.style.display = "none";
    // Показываем generalWrapper
    generalWrapper.style.display = "block";
    form.reset();
  });
});
