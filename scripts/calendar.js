
 function openCalendar(inputId) {
  const input = document.getElementById(inputId);

  // Принудительно меняем тип, если он text
  if (input.type !== "date") {
    input.type = "date";
  }

  // Показываем нативный календарь
  if (input.showPicker) {
    input.showPicker();
  } else {
    input.focus();
  }
}

function setupDateInputs(inputId, placeholder) {
  const input = document.getElementById(inputId);

  input.addEventListener("focus", () => {
    input.type = "date";
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.type = "text";
      input.placeholder = placeholder;
    }
  });
}

// Применяем к обоим полям
setupDateInputs("depart-date", "Depart");
setupDateInputs("return-date", "Return");


