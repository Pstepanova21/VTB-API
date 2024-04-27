export function ModalWindow(
  target,
  targetCard,
  targetInfo,
  targetInfoVictory,
  createProgressBar,
  targetsList,
  targetVictory
) {
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
