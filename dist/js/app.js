//libraries like jquery etc
window.addEventListener("DOMContentLoaded", () => {
	// Отримуємо всі кнопки та фільтри за допомогою атрибута data-filter
	const buttons = document.querySelectorAll("button[data-filter]");
	const filters = document.querySelectorAll("div[data-filter]");

	// Додаємо обробник подій для кожної кнопки
	buttons.forEach((button) => {
		button.addEventListener("click", (event) => {
			event.stopPropagation(); // Зупиняємо подію від поширення на дочірні елементи кнопки
			// Отримуємо значення атрибута data-filter кнопки, яка була натиснута
			const filterValue = button.getAttribute("data-filter");

			// Ітеруємося через всі фільтри і приховуємо ті, які не відповідають обраному фільтру
			filters.forEach((filter) => {
				if (filter.getAttribute("data-filter") === filterValue) {
					filter.classList.remove("hidden");
				} else {
					filter.classList.add("hidden");
				}
			});
		});
	});

	// Додаємо обробник подій для кожного фільтра, щоб закривати фільтр при кліку на нього
	filters.forEach((filter) => {
		filter.addEventListener("click", (event) => {
			// Зупиняємо подію кліку від поширення до документа
			event.stopPropagation();
		});

		// Додаємо обробники подій для кнопок та посилань всередині фільтра
		const buttonsInsideFilter = filter.querySelectorAll("button, a, input[type='radio'], svg");
		buttonsInsideFilter.forEach((button) => {
			button.addEventListener("click", (event) => {
				// Закриваємо фільтр при кліку на кнопку або посилання всередині нього
				filter.classList.add("hidden");
				event.stopPropagation();
			});
		});
	});

	// Додаємо обробник подій на документ, щоб при кліку поза фільтрами і кнопками фільтр закривався
	document.addEventListener("click", (event) => {
		filters.forEach((filter) => {
			if (!filter.contains(event.target)) {
				filter.classList.add("hidden");
			}
		});
	});
});
