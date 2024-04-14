import "./main.scss";
import "./fonts/fonts.scss";

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
    endDate: endDate.toLocaleDateString(), // Преобразуем дату в строку для сохранения
    currentAmount: currentAmount,
    creationDate: currentDate.toLocaleString(), // Добавляем текущую дату и время создания цели
  };

  // Получаем сохраненные ранее цели из локального хранилища
  let savedGoals = JSON.parse(localStorage.getItem("goals")) || [];

  // Добавляем текущую цель к сохраненным целям
  savedGoals.push(goalData);

  // Сохраняем обновленный массив целей в локальное хранилище
  localStorage.setItem("goals", JSON.stringify(savedGoals));

  // Выводим результат в консоль
  console.log("Цель сохранена в локальном хранилище.");

  // Очищаем поля формы
  form.reset();
});
