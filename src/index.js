import "./main.scss";
import "./fonts/fonts.scss";

// Получаем форму
const form = document.getElementById("goalForm");

// Добавляем обработчик события 'submit' на форму
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем стандартное поведение формы

  // Получаем значения из формы
  const goal = document.getElementById("goal").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  const priority = document.getElementById("priority").value;
  const endDate = document.getElementById("endDate").value;
  const currentAmount = document.getElementById("currentAmount").value;

  // Выводим результат в консоль
  console.log(`Ваша цель: ${goal}`);
  console.log(`Категория: ${category}`);
  console.log(`Сумма, которую вы хотите накопить: ${amount}`);
  console.log(`Приоритет цели: ${priority}`);
  console.log(`Дата окончания накопления: ${endDate}`);
  console.log(`Сумма, которую хотите внести сейчас: ${currentAmount}`);

  // Очищаем поля формы
  document.getElementById("goal").value = "";
  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("priority").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("currentAmount").value = "";
});

// Добавляем обработчик для поля ввода даты
const endDateInput = document.getElementById("endDate");
const today = new Date().toISOString().split("T")[0]; // Получаем сегодняшнюю дату в формате YYYY-MM-DD

endDateInput.addEventListener("input", function () {
  if (this.value < today) {
    this.value = today; // Если введенная дата меньше текущей, то устанавливаем текущую дату
  }
});
